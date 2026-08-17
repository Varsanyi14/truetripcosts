// Cost-comparison tax segment audit. Run from the repo root AFTER a build:
//   npm run build && node scripts/check-tax-segment.mjs
//
// The chart's tax segment is a progressive enhancement with a lot of load-bearing
// honesty in it: the default has to stay pre-tax and comparable, only the picked bar
// may change, a filtered-out restaurant rate must never reappear, a real zero must be
// shown as a zero, a one-time fee must never be drawn into a per-day bar, and the
// figure has to be recomputed per travel style. None of that is visible in the source:
// it only exists once the page runs. So this drives the ACTUAL built page in jsdom and
// asserts on the real DOM, which is the only place those rules can be checked.
//
// It is here because it earned its place. Written as a throwaway during the build, it
// caught two live bugs that clicking around would not have surfaced: a roll-up
// animation that kept counting toward a stale number after the destination changed and
// won because it wrote last, and a cleanup timer that deleted a re-picked country's
// fresh nodes. Both classes of bug come back the moment anyone touches the timing.
//
// jsdom does no layout, so the geometry the overhang cap depends on is stubbed to a
// realistic desktop track. That is a limitation worth knowing: this file checks the
// LOGIC of the overflow case, not its pixels.
//
// Exits 1 on any failed assertion.

import fs from 'fs';
import path from 'path';

const PAGE = path.join('dist', 'cost-comparison', 'index.html');

let JSDOM;
try {
  ({ JSDOM } = await import('jsdom'));
} catch (e) {
  console.log('== TTC tax segment audit ==');
  console.log('  FAIL  jsdom is not installed. It is a devDependency of this repo: run `npm install`.');
  console.log('\nRESULT: FAIL');
  process.exit(1);
}

if (!fs.existsSync(PAGE)) {
  console.log('== TTC tax segment audit ==');
  console.log(`  FAIL  ${PAGE} not found. This audit reads the built page: run \`npm run build\` first.`);
  console.log('\nRESULT: FAIL');
  process.exit(1);
}

const html = fs.readFileSync(PAGE, 'utf8');

let fails = 0;
function check(label, got, want) {
  const ok = String(got) === String(want);
  if (!ok) fails++;
  console.log(`  ${ok ? 'ok   ' : 'FAIL '} ${label}`);
  if (!ok) console.log(`          got  ${JSON.stringify(got)}\n          want ${JSON.stringify(want)}`);
}

// A realistic desktop track: a 500px bar with a 62px gutter (the 10px gap plus the
// 52px dollar figure), which is the room the overhang is allowed to use.
function makeDom(reducedMotion) {
  const dom = new JSDOM(html, {
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    beforeParse(win) {
      win.matchMedia = q => ({
        matches: reducedMotion && /prefers-reduced-motion/.test(q),
        media: q, addListener() {}, removeListener() {},
      });
    },
  });
  dom.window.Element.prototype.getBoundingClientRect = function () {
    const cls = String(this.className || '');
    if (cls.includes('cc-track')) return { width: 562, left: 0, right: 562, top: 0, bottom: 15, height: 15 };
    if (cls.includes('cc-bar')) return { width: 500, left: 0, right: 500, top: 0, bottom: 15, height: 15 };
    return { width: 0, left: 0, right: 0, top: 0, bottom: 0, height: 0 };
  };
  return dom;
}

const wait = ms => new Promise(r => setTimeout(r, ms));
const SETTLE = 40;    // long enough for a click handler and one frame
const ROLLED = 700;   // the figure rolls for 620ms

console.log('== TTC tax segment audit (built page, jsdom) ==');

// Precondition. Everything below assumes the segment enhancement is in the built page.
// Without it the DOM queries return null and the run dies on a TypeError, which reads
// like a broken audit rather than a missing feature. So say which it is, plainly. This
// also makes the audit safe to land in either order relative to the chart component.
{
  const { window: w } = makeDom(false);
  const missing = !w.document.querySelector('template[data-cc-taxbits]')
    || !w.document.querySelector('script[data-cc-taxpayload]');
  w.close();
  if (missing) {
    console.log('  FAIL  the tax segment is not in the built page: no template[data-cc-taxbits]');
    console.log('        or script[data-cc-taxpayload] found in the chart. Either the CostChart');
    console.log('        component predates the segment, or the build is stale. This audit has');
    console.log('        nothing to check until that lands.');
    console.log('\nRESULT: FAIL');
    process.exit(1);
  }
}

// ---------------------------------------------------------------------------
console.log('\n1. The default chart is untouched until asked');
{
  const { window: w } = makeDom(false);
  const d = w.document;
  await wait(SETTLE);
  check('no bar is picked at rest', d.querySelectorAll('.cc-row.is-picked').length, 0);
  check('no tax segment exists at rest', d.querySelectorAll('.cc-taxseg').length, 0);
  check('no caption exists at rest', d.querySelectorAll('.cc-cap').length, 0);
  check('the picker panel starts closed', d.querySelector('.cc-taxpanel').hidden, true);
  check('the legend key starts hidden', d.querySelector('.cc-taxlegend').hidden, true);
  check('the prompt is offered, quietly', d.querySelector('.cc-taxopen').textContent,
    'Add what its hotels add on top.');
  const totals = Array.from(d.querySelectorAll('.cc-row .cc-total'))
    .map(el => parseFloat(el.textContent.replace(/[^0-9.]/g, '')));
  check('bars are ranked ascending on pre-tax cost',
    totals.every((v, i) => i === 0 || totals[i - 1] <= v), true);
  w.close();
}

// ---------------------------------------------------------------------------
console.log('\n2. A pick registers before a figure is claimed');
{
  const { window: w } = makeDom(false);
  const d = w.document;
  await wait(SETTLE);
  const fire = (el, t) => el.dispatchEvent(new w.Event(t, { bubbles: true }));
  d.querySelector('.cc-taxopen').click();
  const cSel = d.querySelector('.cc-taxcountry'), sSel = d.querySelector('.cc-taxsub');
  cSel.value = 'italy'; fire(cSel, 'change'); await wait(SETTLE);
  const row = d.querySelector('.cc-row[data-slug="italy"]');
  check('the bar highlights straight away', row.className.includes('is-picked'), true);
  check('but nothing is taxed yet', row.className.includes('is-taxed'), false);
  check('no segment before the sub-choice', row.querySelector('.cc-taxseg'), null);
  check('the sub-picker asks about place, for a place-varying country',
    d.querySelector('.cc-taxsubq').textContent, 'Where in Italy are you staying?');
  check('its options are the region labels, whole',
    Array.from(sSel.options).map(o => o.text).join(' | '),
    'Choose one | Rome | Florence | Venice | Milan | Elsewhere in Italy');

  sSel.value = 'rome'; fire(sSel, 'change'); await wait(ROLLED);
  const cap = row.querySelector('.cc-cap');
  check('the caption names the choice and the rule',
    cap.querySelector('.cc-cap-rule').textContent, 'Rome: 6 EUR a person a night.');
  check('the figure settles on the tax, not the total',
    cap.querySelector('.cc-taxamt').textContent, '$7');
  check('the ranked figure beside the bar stays pre-tax',
    row.querySelector('.cc-total').textContent, '$255');
  check('the segment starts where the pre-tax bar ends',
    row.querySelector('.cc-taxseg').style.left, '51%');
  check('and is only as long as the tax',
    row.querySelector('.cc-taxseg').style.width, String((6.82 / 500) * 100) + '%');
  check('the still-ranked line is present', cap.querySelector('.cc-cap-n').hidden, false);
  check('the legend explains the hatching', d.querySelector('.cc-taxlegend').hidden, false);
  w.close();
}

// ---------------------------------------------------------------------------
console.log('\n3. Only ever one bar is taxed');
{
  const { window: w } = makeDom(false);
  const d = w.document;
  await wait(SETTLE);
  const fire = (el, t) => el.dispatchEvent(new w.Event(t, { bubbles: true }));
  d.querySelector('.cc-taxopen').click();
  const cSel = d.querySelector('.cc-taxcountry'), sSel = d.querySelector('.cc-taxsub');
  for (const [c, k] of [['italy', 'rome'], ['japan', 'kyoto'], ['canada', 'ontario'], ['spain', 'barcelona']]) {
    cSel.value = c; fire(cSel, 'change'); await wait(SETTLE);
    sSel.value = k; fire(sSel, 'change'); await wait(SETTLE);
    check(`after picking ${c}, exactly one bar is taxed`,
      d.querySelectorAll('.cc-row.is-taxed').length, 1);
    check(`after picking ${c}, exactly one bar is highlighted`,
      d.querySelectorAll('.cc-row.is-picked').length, 1);
  }
  // The shrink-out is 660ms, so once it has run there must be nothing left behind.
  await wait(ROLLED);
  check('no stray segments survive the switching',
    d.querySelectorAll('.cc-taxseg').length, 1);
  w.close();
}

// ---------------------------------------------------------------------------
console.log('\n4. The honesty rails');
{
  const { window: w } = makeDom(false);
  const d = w.document;
  await wait(SETTLE);
  const fire = (el, t) => el.dispatchEvent(new w.Event(t, { bubbles: true }));
  const rowOf = s => d.querySelector(`.cc-row[data-slug="${s}"]`);
  const rule = s => rowOf(s).querySelector('.cc-cap-rule').textContent;
  const extra = s => rowOf(s).querySelector('.cc-cap-extra').textContent.trim();
  d.querySelector('.cc-taxopen').click();
  const cSel = d.querySelector('.cc-taxcountry'), sSel = d.querySelector('.cc-taxsub');

  // A real zero is an answer, not a gap.
  cSel.value = 'united-kingdom'; fire(cSel, 'change'); await wait(SETTLE);
  sSel.value = 'london'; fire(sSel, 'change'); await wait(SETTLE);
  check('London is named and says no tax', rule('united-kingdom'), 'London: no hotel tax.');
  check('London draws no segment', rowOf('united-kingdom').className.includes('is-taxed'), false);
  check('and gets no still-ranked line, because nothing was added',
    rowOf('united-kingdom').querySelector('.cc-cap-n').hidden, true);

  // Absence is not zero.
  cSel.value = 'thailand'; fire(cSel, 'change'); await wait(SETTLE);
  check('a country with no charge modelled says so',
    rule('thailand'), 'Thailand: no separate hotel tax here.');
  check('and offers no sub-picker', d.querySelector('.cc-taxsubwrap').hidden, true);

  // A restaurant rate must never be reachable from a hotel-tax picker.
  cSel.value = 'oman'; fire(cSel, 'change'); await wait(SETTLE);
  check('Oman has no sub-picker once its restaurant row is filtered',
    d.querySelector('.cc-taxsubwrap').hidden, true);
  check('Oman draws its hotel rate, with the stack named',
    rule('oman'), 'Oman: 14% on the room (VAT, tourism tax and municipality).');
  cSel.value = 'saudi-arabia'; fire(cSel, 'change'); await wait(SETTLE);
  check('Saudi keeps a class picker of exactly two options',
    Array.from(sSel.options).map(o => o.value).join(','), ',hotel4,hotel3');
  check('and asks about class, not place',
    d.querySelector('.cc-taxsubq').textContent, 'What class of hotel?');

  // Greece asks what it can actually answer, in a readable order.
  cSel.value = 'greece'; fire(cSel, 'change'); await wait(SETTLE);
  check('Greece asks about the kind of place, not a hotel class',
    d.querySelector('.cc-taxsubq').textContent, 'What kind of place are you staying?');
  check('and lists classes ascending with the rental last',
    Array.from(sSel.options).slice(1).map(o => o.value).join(','),
    'budget,midrange,upscale,luxury,rental');

  // A per-trip fee is named, never drawn.
  cSel.value = 'mexico'; fire(cSel, 'change'); await wait(SETTLE);
  sSel.value = 'qroo'; fire(sSel, 'change'); await wait(SETTLE);
  check('the one-time fee is named in the caption', extra('mexico'),
    'Plus a one-time visitor fee of about $16 a person, a per-trip cost that is not in this bar.');
  check('and is not in the segment, which is the nightly percentage only',
    rowOf('mexico').querySelector('.cc-taxseg').style.width, String((19.95 / 500) * 100) + '%');
  cSel.value = 'indonesia'; fire(cSel, 'change'); await wait(SETTLE);
  check('Indonesia collapses to one rate but keeps the Bali levy in words', extra('indonesia'),
    'Bali also charges a one-time entry levy of about $8 a person, a per-trip cost that is not in this bar.');

  // A small real charge is neither rounded away nor rounded up.
  cSel.value = 'japan'; fire(cSel, 'change'); await wait(SETTLE);
  sSel.value = 'tokyo'; fire(sSel, 'change'); await wait(SETTLE);
  d.querySelector('[data-tier-btn="Budget"]').click(); await wait(SETTLE);
  check('a 63-cent charge is said, not rounded to nothing',
    rowOf('japan').querySelector('.cc-taxamt').textContent, 'under $1');
  w.close();
}

// ---------------------------------------------------------------------------
console.log('\n5. The figure is per travel style, not computed once');
{
  const { window: w } = makeDom(false);
  const d = w.document;
  await wait(SETTLE);
  const fire = (el, t) => el.dispatchEvent(new w.Event(t, { bubbles: true }));
  const rowOf = s => d.querySelector(`.cc-row[data-slug="${s}"]`);
  d.querySelector('.cc-taxopen').click();
  const cSel = d.querySelector('.cc-taxcountry'), sSel = d.querySelector('.cc-taxsub');

  cSel.value = 'aruba'; fire(cSel, 'change'); await wait(ROLLED);
  check('Aruba at Mid-range', rowOf('aruba').querySelector('.cc-taxamt').textContent, '$40');
  d.querySelector('[data-tier-btn="Comfort"]').click(); await wait(ROLLED);
  check('Aruba rescales at Comfort', rowOf('aruba').querySelector('.cc-taxamt').textContent, '$75');
  check('no stale roll survives the tier change',
    rowOf('aruba').querySelector('.cc-taxamt').textContent, '$75');

  // Japan's rate is banded on the room price, so the band itself moves per tier.
  cSel.value = 'japan'; fire(cSel, 'change'); await wait(SETTLE);
  sSel.value = 'kyoto'; fire(sSel, 'change'); await wait(SETTLE);
  check('Kyoto bands at Comfort', rowOf('japan').querySelector('.cc-cap-rule').textContent,
    'Kyoto: 1,000 JPY a person a night at this room price.');
  d.querySelector('[data-tier-btn="Budget"]').click(); await wait(SETTLE);
  check('Kyoto re-bands at Budget', rowOf('japan').querySelector('.cc-cap-rule').textContent,
    'Kyoto: 400 JPY a person a night at this room price.');
  w.close();
}

// ---------------------------------------------------------------------------
console.log('\n6. The priciest bar overflows honestly');
{
  const { window: w } = makeDom(false);
  const d = w.document;
  await wait(SETTLE);
  const fire = (el, t) => el.dispatchEvent(new w.Event(t, { bubbles: true }));
  const rowOf = s => d.querySelector(`.cc-row[data-slug="${s}"]`);
  d.querySelector('.cc-taxopen').click();
  const cSel = d.querySelector('.cc-taxcountry');
  cSel.value = 'aruba'; fire(cSel, 'change'); await wait(SETTLE);
  const row = rowOf('aruba'), seg = row.querySelector('.cc-taxseg');
  check('the overflow is flagged', row.className.includes('is-over'), true);
  // 470 of a 500 axis is 94%, and $40 is a further 8%, so the bar wants 102%.
  check('the segment still starts at the true pre-tax length', seg.style.left, '94%');
  check('and draws its true width rather than clipping at 100%', seg.style.width, '8%');
  const total = parseFloat(seg.style.left) + parseFloat(seg.style.width);
  check('which does run past the track, as designed', total > 100, true);
  check('but stays inside the gutter the layout reserves', total <= 112.4, true);
  w.close();
}

// ---------------------------------------------------------------------------
console.log('\n7. The picked bar is brought into view, at the right moment');
{
  const { window: w } = makeDom(false);
  const d = w.document;
  await wait(SETTLE);
  const fire = (el, t) => el.dispatchEvent(new w.Event(t, { bubbles: true }));
  // jsdom has no scrollIntoView, so record the calls instead. The stubbed
  // getBoundingClientRect returns zeros for rows, which reads as off screen, so every
  // reveal that is allowed to fire will fire.
  const scrolled = [];
  w.Element.prototype.scrollIntoView = function (opts) {
    scrolled.push({ slug: this.getAttribute && this.getAttribute('data-slug'), opts });
  };
  d.querySelector('.cc-taxopen').click();
  const cSel = d.querySelector('.cc-taxcountry'), sSel = d.querySelector('.cc-taxsub');

  // A multi-region country must NOT scroll on the country choice: the sub-picker is the
  // reader's next action and scrolling would carry it off screen.
  cSel.value = 'italy'; fire(cSel, 'change'); await wait(SETTLE);
  check('no jump while the sub-choice is still pending', scrolled.length, 0);
  sSel.value = 'rome'; fire(sSel, 'change'); await wait(SETTLE);
  check('jumps once the answer is drawn', scrolled.length, 1);
  check('and jumps to the picked bar', scrolled[0].slug, 'italy');
  check('centred, and smoothly for a reader who allows motion',
    `${scrolled[0].opts.block}/${scrolled[0].opts.behavior}`, 'center/smooth');

  // A single-rate country resolves at once, so it may jump at once.
  scrolled.length = 0;
  cSel.value = 'bahrain'; fire(cSel, 'change'); await wait(SETTLE);
  check('a single-rate country jumps on the country choice', scrolled.length, 1);
  check('to the right bar', scrolled[0].slug, 'bahrain');

  // A no-charge country still jumps: "no separate hotel tax here" is the answer.
  scrolled.length = 0;
  cSel.value = 'thailand'; fire(cSel, 'change'); await wait(SETTLE);
  check('a no-charge country jumps to its bar too', scrolled.length, 1);

  // Changing travel style redraws the segment, but the reader is already looking at the
  // chart, so moving the page under them would be an intrusion.
  scrolled.length = 0;
  d.querySelector('[data-tier-btn="Comfort"]').click(); await wait(SETTLE);
  check('a tier change does not move the page', scrolled.length, 0);

  // Nor does clearing.
  scrolled.length = 0;
  d.querySelector('.cc-taxclear').click(); await wait(SETTLE);
  check('clearing does not move the page', scrolled.length, 0);
  w.close();
}

// ---------------------------------------------------------------------------
console.log('\n8. Reduced motion skips the tweens rather than the answer');
{
  const { window: w } = makeDom(true);
  const d = w.document;
  await wait(SETTLE);
  const fire = (el, t) => el.dispatchEvent(new w.Event(t, { bubbles: true }));
  const rowOf = s => d.querySelector(`.cc-row[data-slug="${s}"]`);
  d.querySelector('.cc-taxopen').click();
  const cSel = d.querySelector('.cc-taxcountry');

  const scrolled = [];
  w.Element.prototype.scrollIntoView = function (opts) { scrolled.push(opts); };
  cSel.value = 'bahrain'; fire(cSel, 'change');
  check('the jump is instant, not smooth', scrolled.length && scrolled[0].behavior, 'auto');
  check('the width is final on the first frame',
    rowOf('bahrain').querySelector('.cc-taxseg').style.width, String((38.75 / 500) * 100) + '%');
  check('the figure is final on the first frame, with no roll',
    rowOf('bahrain').querySelector('.cc-taxamt').textContent, '$39');

  cSel.value = 'turkey'; fire(cSel, 'change');
  check('the old segment goes at once, with no shrink to wait out',
    rowOf('bahrain').querySelector('.cc-taxseg'), null);
  check('and the old caption with it', rowOf('bahrain').querySelector('.cc-cap'), null);
  check('the new bar is taxed immediately', rowOf('turkey').className.includes('is-taxed'), true);
  w.close();
}

// ---------------------------------------------------------------------------
console.log('\n9. Clearing returns the chart to its default');
{
  const { window: w } = makeDom(false);
  const d = w.document;
  await wait(SETTLE);
  const fire = (el, t) => el.dispatchEvent(new w.Event(t, { bubbles: true }));
  d.querySelector('.cc-taxopen').click();
  const cSel = d.querySelector('.cc-taxcountry');
  cSel.value = 'bahamas'; fire(cSel, 'change'); await wait(SETTLE);
  d.querySelector('.cc-taxsub').value = 'nassau';
  fire(d.querySelector('.cc-taxsub'), 'change'); await wait(SETTLE);
  check('something is taxed first', d.querySelectorAll('.cc-row.is-taxed').length, 1);

  d.querySelector('.cc-taxclear').click(); await wait(ROLLED);
  check('no bar is picked', d.querySelectorAll('.cc-row.is-picked').length, 0);
  check('no segment remains', d.querySelectorAll('.cc-taxseg').length, 0);
  check('no caption remains', d.querySelectorAll('.cc-cap').length, 0);
  check('the panel closes', d.querySelector('.cc-taxpanel').hidden, true);
  check('the prompt returns', d.querySelector('.cc-taxprompt').hidden, false);
  check('the legend key hides again', d.querySelector('.cc-taxlegend').hidden, true);
  const totals = Array.from(d.querySelectorAll('.cc-row .cc-total'))
    .map(el => parseFloat(el.textContent.replace(/[^0-9.]/g, '')));
  check('and the ranking is ascending on pre-tax cost again',
    totals.every((v, i) => i === 0 || totals[i - 1] <= v), true);
  w.close();
}

console.log('\nRESULT:', fails ? `FAIL (${fails})` : 'PASS');
process.exit(fails ? 1 : 0);
