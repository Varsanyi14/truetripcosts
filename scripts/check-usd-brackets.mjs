// USD-bracket coverage audit. Run from the repo root: node scripts/check-usd-brackets.mjs
//
// WHY A GATE, AND WHY IT READS dist/. The brackets beside local-currency figures
// are injected in the BROWSER by UsdProse.astro, off a rate the page settles on
// at load. Nothing is baked. That is the right design and it has one nasty
// consequence for review: a bracket is never present in the built HTML, so
// grepping dist/ for one always returns zero and tells you nothing. The only
// honest way to audit coverage is to reproduce what the browser does, which is
// what scripts/lib/usd-scan.mjs is for.
//
// The failure this exists to catch is silent by construction. Before it, the
// detector could walk past a figure, or a page could carry a currency with no
// rate anywhere to convert it, and the page still built, still deployed, still
// looked fine, and simply showed the reader a bare "830 forint". Nothing went
// red. That is the class of defect check-verdict was written for.
//
// FOUR PASSES:
//
//   0. THE SCANNER IS STILL HONEST. The fast HTML scanner is cross-checked
//      against jsdom on one page per template. If a hand-rolled scanner drifts
//      from real DOM semantics the gate is measuring the wrong string, so it
//      proves itself before it audits anything. This is not ceremony: on its
//      first run it caught a <template> on /cost-comparison whose text the
//      browser cannot see and the scanner was counting.
//
//   1. COVERAGE. An independent, deliberately naive recogniser finds anything
//      that LOOKS like an amount in the page's currency. Each is checked against
//      what the real detector found. A figure the naive pass sees and the
//      detector does not must be explained by one of the detector's own
//      documented refusal rules. If none applies, the detector is under-firing.
//
//      WHY THAT IS NOT CIRCULAR. Asking the detector whether the detector found
//      things proves nothing. So the naive recogniser is written separately and
//      without judgment: marker plus number, nothing else. It over-reports
//      wildly, on purpose. The gate's work is accounting for the difference, and
//      a difference it cannot account for is a bug.
//
//   2. REACHABILITY. A page declares its currency in the rendered note. If that
//      currency has no rate the page can reach, every figure on it is dead: no
//      bracket will ever appear, however good the copy. On a country guide the
//      currency panel can still publish a live rate, but a SPOKE has no panel,
//      so fxFallback.js is its only source. A currency missing from that
//      snapshot means brackets are structurally impossible on every spoke of
//      that country, forever, which is precisely the bug that prompted this gate.
//
//   3. THE EXEMPTIONS ARE STILL NEEDED. An exemption that has quietly become
//      unnecessary is how a gate stops enforcing something. Each is re-checked.
//
// A MISSED FIGURE IS HONEST, A WRONG BRACKET IS NOT. This gate never asks for a
// bracket on something that cannot be converted honestly. A par currency, a label
// with no number, a subunit, a percentage, a year, a figure the copy has already
// priced in dollars: all correct to leave bare, and the gate agrees with the
// detector about every one rather than second-guessing it.
//
// Exits 1 on any FAIL. Notes are advisory and do not fail the run.
import fs from 'node:fs';
import path from 'node:path';
import { findFigures, refusalReason, FX_PAR } from '../src/data/usd-prose.js';
import fxFallback from '../src/data/fxFallback.js';
import { usdText } from '../src/data/usd-bracket.js';
import { blockTexts, pageCurrency, hasRate, crossCheck } from './lib/usd-scan.mjs';

const DIST = 'dist';

// ---------------------------------------------------------------------------
// THE DOCUMENTED EXEMPTIONS. Each names a currency whose figures cannot
// currently be bracketed, and why. This list is the honest alternative to a
// silent skip: the gap stays visible in CI output on every run instead of
// looking like success.
//
// DELETE AN ENTRY THE MOMENT ITS RATE LANDS. Each is one line in
// src/data/fxFallback.js away from working. These are not permanent exclusions
// and not a judgment that the currency is unconvertible; they record that the
// baked snapshot does not carry it yet, so no rate exists to convert with on a
// page that has no currency panel. Pass 3 fails if a rate appears and the
// entry is still here, so the list cannot rot into a permanent blind spot.
const NO_RATE = {};

// ---------------------------------------------------------------------------
// THE NAIVE RECOGNISER. Marker plus number, no judgment. It shares only the
// detector's VOCABULARY, never its guards, so the two cannot agree by
// construction and the difference stays meaningful. The vocabulary is read out
// of usd-prose.js rather than copied, so a currency added there is covered here
// on the next run without anyone remembering to mirror it.
const SRC = fs.readFileSync('src/data/usd-prose.js', 'utf8');
const formsCache = new Map();
function formsFor(cur) {
  if (formsCache.has(cur)) return formsCache.get(cur);
  const m = SRC.match(new RegExp('\\n\\s*' + cur + ':\\s*\\{\\s*words:\\s*\\[([^\\]]*)\\]\\s*,\\s*sym:\\s*\\[([^\\]]*)\\]'));
  const list = s => (s.match(/'((?:[^'\\]|\\.)*)'/g) || [])
    .map(x => x.slice(1, -1).replace(/\\u([0-9A-Fa-f]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16))));
  const v = m ? { words: list(m[1]), syms: list(m[2]) } : null;
  formsCache.set(cur, v);
  return v;
}

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const NUM = '\\d{1,3}(?:,\\d{3})+(?:\\.\\d+)?|\\d+(?:\\.\\d+)?';

function naiveHits(text, cur, forms) {
  const out = [];
  const push = (mark, flags) => {
    if (!mark) return;
    for (const rx of [
      new RegExp('(' + NUM + ')\\s?(?:' + mark + ')', flags),
      new RegExp('(?:' + mark + ')\\s?(' + NUM + ')', flags)
    ]) {
      rx.lastIndex = 0;
      let x;
      while ((x = rx.exec(text))) out.push({ start: x.index, end: x.index + x[0].length, text: x[0], num: x[1] });
    }
  };
  push(forms.words.map(w => '\\b' + esc(w) + '\\b').concat(forms.syms.map(esc)).join('|'), 'gi');
  push('\\b' + esc(cur) + '\\b', 'g');
  return out;
}

// ---------------------------------------------------------------------------
// WHY A NAIVE HIT IS ALLOWED TO BE BARE. Asked of the detector itself, through
// the refusalReason it exports, so the gate and the detector can never disagree
// about what counts as a convertible figure. Restating these rules here was
// tried first and produced six false failures, all from the window() boundary
// expansion the restatement could not reproduce. See usd-prose.js.
//
// A naive hit is checked at two widths. Its own span, and the span the detector
// would actually have matched if the number opens a range ("30,000 to 50,000
// JMD"), because a guard that looks backwards from the START of a range reaches
// further than one looking back from its second number. Refuse either and the
// figure is accounted for.
function explained(text, hit, cur) {
  const num = s => { const n = Number(String(s).replace(/,/g, '')); return isFinite(n) ? n : null; };
  const spans = [{ start: hit.start, end: hit.end, lo: num(hit.num), hi: null }];
  const back = text.slice(Math.max(0, hit.start - 40), hit.start);
  const rm = back.match(new RegExp('(' + NUM + ')\\s*(?:to|-)\\s*$'));
  if (rm) spans.push({ start: hit.start - rm[0].length, end: hit.end, lo: num(rm[1]), hi: num(hit.num) });
  const fwd = text.slice(hit.end, hit.end + 40).match(new RegExp('^\\s*(?:to|-)\\s*(' + NUM + ')'));
  if (fwd) spans.push({ start: hit.start, end: hit.end + fwd[0].length, lo: num(hit.num), hi: num(fwd[1]) });
  for (const s of spans) {
    const why = refusalReason(text, s.start, s.end, cur, s.lo, s.hi);
    if (why) return why;
  }
  return null;
}

// ---------------------------------------------------------------------------
let fails = 0, notes = 0;
const fail = (label, detail) => { fails++; console.log(`  FAIL  ${label}${detail ? '  ' + detail : ''}`); };
const ok = (label, detail) => console.log(`  ok    ${label}${detail ? '  ' + detail : ''}`);
const note = (label, detail) => { notes++; console.log(`  note  ${label}${detail ? '  ' + detail : ''}`); };

function pages(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...pages(p));
    else if (e.name === 'index.html') out.push(p);
  }
  return out;
}

console.log('== TTC USD-bracket coverage audit ==\n');

if (!fs.existsSync(DIST)) {
  console.log('  FAIL  no dist/ directory. Run `npm run build` first: this gate audits what the reader gets.');
  process.exit(1);
}

const all = pages(DIST);
console.log(`Scanning ${all.length} built pages.\n`);

// ---------------------------------------------------------------------------
console.log('0. The fast HTML scanner still agrees with a real DOM');
// One page per template, identified by its stylesheet set, the same sampling
// idea check-grid-text uses. Structure is what this pass tests, so one page per
// template is the right unit here even though it would be wrong for copy.
const bySig = new Map();
for (const f of all) {
  const html = fs.readFileSync(f, 'utf8');
  const sig = (html.match(/\/_astro\/[^"']+\.css/g) || []).sort().join('|');
  if (!bySig.has(sig)) bySig.set(sig, f);
}
const sample = [...bySig.values()];
const xc = await crossCheck(sample, f => fs.readFileSync(f, 'utf8'));
if (xc.skipped) note('cross-check skipped', xc.reason);
else if (xc.bad.length) {
  fail(`the scanner disagrees with jsdom on ${xc.bad.length} of ${xc.checked} sampled template(s)`,
    'the gate would be measuring a different string from the browser');
  for (const b of xc.bad.slice(0, 4)) {
    console.log(`          ${b.file}  (dom ${b.domRuns} runs, scanner ${b.fastRuns})`);
    console.log(`            dom : ${JSON.stringify(b.dom)}`);
    console.log(`            fast: ${JSON.stringify(b.fast)}`);
  }
} else ok(`scanner matches jsdom on all ${xc.checked} sampled templates`);

// ---------------------------------------------------------------------------
const unexplained = [];
const dead = new Map();        // currency -> pages carrying figures with no rate
const willRender = new Map();  // currency -> brackets that actually draw
const subDollar = new Map();   // currency -> figures that honestly draw nothing
const seenCur = new Set();

for (const file of all) {
  const html = fs.readFileSync(file, 'utf8');
  if (html.indexOf('data-usdp') === -1) continue;
  const { cur, fb } = pageCurrency(html);
  if (!cur || FX_PAR.indexOf(cur) !== -1) continue;
  seenCur.add(cur);
  const forms = formsFor(cur);
  if (!forms) { note('currency has no entry in the detector table', `${cur} on ${file}`); continue; }

  const rate = hasRate(cur, fb);
  // The rate is borrowed, never held: the marker the page baked, or the snapshot
  // it would fall back to. Needed because "would this figure bracket" is not the
  // same question as "did the detector find it", which is what pass 4 got wrong.
  const rateVal = fb || fxFallback.rates[cur];
  let figures = 0;

  for (const run of blockTexts(html)) {
    if (run.inLink) continue;
    const real = findFigures(run.text, cur);
    figures += real.length;
    if (rate) for (const h of real) {
      if (usdText(h.lo, h.hi, cur, rateVal)) willRender.set(cur, (willRender.get(cur) || 0) + 1);
      else subDollar.set(cur, (subDollar.get(cur) || 0) + 1);
    }
    const covered = h => real.some(r => !(h.end <= r.start || h.start >= r.end));
    for (const h of naiveHits(run.text, cur, forms)) {
      if (covered(h)) continue;
      if (explained(run.text, h, cur)) continue;
      unexplained.push({ file, cur, text: h.text, ctx: run.text.slice(Math.max(0, h.start - 65), h.end + 45).replace(/\s+/g, ' ') });
    }
  }

  if (!rate && figures > 0) {
    if (!dead.has(cur)) dead.set(cur, []);
    dead.get(cur).push({ file, figures });
  }
}

console.log('\n1. Every figure the naive pass sees is bracketed, or refused for a documented reason');
if (!unexplained.length) ok('no unexplained gap between the naive recogniser and the detector');
else {
  fail(`${unexplained.length} figure(s) the detector walks past with no documented reason`);
  for (const u of unexplained.slice(0, 12)) {
    console.log(`          ${u.cur}  ${JSON.stringify(u.text)}  ${u.file}`);
    console.log(`            ...${u.ctx}`);
  }
  if (unexplained.length > 12) console.log(`          (and ${unexplained.length - 12} more)`);
}

// ---------------------------------------------------------------------------
console.log('\n2. Every page stating a local figure can reach a rate to convert it');
if (!dead.size) ok('no page carries convertible figures with no reachable rate');
else for (const [cur, list] of [...dead].sort()) {
  const total = list.reduce((a, b) => a + b.figures, 0);
  if (NO_RATE[cur]) {
    note(`${cur}: ${total} figure(s) across ${list.length} page(s) will never bracket`, 'documented exemption');
    console.log(`          ${NO_RATE[cur]}`);
    console.log(`          Fix: add a ${cur} rate to src/data/fxFallback.js, then delete this NO_RATE entry.`);
  } else {
    fail(`${cur}: ${total} figure(s) across ${list.length} page(s) will never bracket, and no exemption is documented`,
      `first: ${list[0].file}`);
    console.log(`          Either add a ${cur} rate to src/data/fxFallback.js, or add a documented NO_RATE entry saying why not.`);
  }
}

// ---------------------------------------------------------------------------
console.log('\n3. Every documented exemption is still needed');
// An empty map is the healthy state and has to SAY so. A heading with nothing
// under it reads as "this pass did not run", which is how a check gets ignored.
const exempted = Object.keys(NO_RATE).sort();
if (!exempted.length) ok('no currency is exempted', 'every currency in use has a rate, which is the state to stay in');
for (const cur of exempted) {
  const r = fxFallback.rates[cur];
  if (typeof r === 'number' && r > 0) {
    fail(`${cur} is exempted as having no rate, but fxFallback now carries one (${r})`,
      'delete the NO_RATE entry so the gate starts enforcing this currency');
  } else if (!dead.has(cur)) {
    note(`${cur} is exempted but no live page needed it this run`, 'harmless: remove when the country goes live');
  } else ok(`${cur} exemption still accurate`, 'no rate in the snapshot');
}

// ---------------------------------------------------------------------------
// WHY THIS PASS COUNTS RENDERED BRACKETS AND NOT FOUND FIGURES. It counted found
// figures first, and that was a quiet lie of exactly the kind this gate exists to
// stop. usdText refuses to print a bracket that would round to "~$0", because
// zero is a claim and the claim would be false, so a sub-dollar figure is FOUND
// by the detector and then correctly draws nothing. Counting the find rather than
// the draw let this pass report "44 of 46 currencies bracket at least one figure"
// while Costa Rica's single colones figure rendered nothing at all: a currency
// listed as working, that a reader never sees a bracket on.
//
// The sub-dollar refusals are honest and are reported as a note, not a failure.
// A figure that cannot be converted into a number worth showing SHOULD show
// nothing. What must not happen is the gate calling that success.
console.log('\n4. The brackets that should draw, actually draw');
const working = [...willRender].filter(([, n]) => n > 0).sort((a, b) => b[1] - a[1]);
if (!working.length) fail('not one bracket anywhere on the site would draw', 'the detector, the rate path or the formatter is broken');
else {
  ok(`${working.length} of ${seenCur.size} currencies draw at least one bracket`,
    working.slice(0, 10).map(([c, n]) => `${c}:${n}`).join(' '));
  const totalSub = [...subDollar.values()].reduce((a, b) => a + b, 0);
  if (totalSub) note(`${totalSub} figure(s) correctly draw nothing`, 'they would round to $0, which usdText refuses to print');
  // A currency with a rate whose every figure draws nothing. Not a fault, but it
  // must be named rather than counted as working.
  const mute = [...subDollar.keys()].filter(c => !willRender.get(c)).sort();
  if (mute.length) note(`${mute.length} currency page(s) have a rate but draw no bracket at all`, `${mute.join(' ')}: every figure rounds below a dollar`);
  const noFigures = [...seenCur].filter(c => !willRender.get(c) && !subDollar.get(c) && !dead.has(c)).sort();
  if (noFigures.length) note(`${noFigures.length} currency page(s) carry no convertible figure at all`, noFigures.join(' '));
}

// ---------------------------------------------------------------------------
// WHY THIS PASS EXISTS, AND WHY IT IS NOT REDUNDANT. The naive recogniser reads
// its vocabulary out of usd-prose.js so the two cannot drift. That sharing has a
// blind spot, and the mutation test found it: empty a currency's word forms and
// BOTH halves go blind together, the difference stays zero, and pass 1 reports
// everything is fine while "2 to 5 francs" quietly stops converting site wide.
//
// A shared table cannot audit itself by comparison, so it is audited by
// structure instead. Every currency the site actually uses must declare a way to
// name itself in prose. The ISO code always matches, so a currency with no word
// forms is not fully broken, which is precisely what makes the loss hard to see:
// "CHF 3.50" would still bracket while every spelled "francs" stopped.
console.log('\n5. The detector still knows how to name every currency in use');
let tableBad = 0;
for (const cur of [...seenCur].sort()) {
  const f = formsFor(cur);
  if (!f) { fail(`${cur} has no entry in the detector table`, 'add it to FORMS in src/data/usd-prose.js'); tableBad++; continue; }
  if (!f.words.length && !f.syms.length) {
    fail(`${cur} declares no word form and no symbol`,
      'only the ISO code would match, so spelled amounts stop converting site wide');
    tableBad++;
  } else if (!f.words.length) {
    note(`${cur} declares no spelled word form`, 'symbol and ISO code only, which is thin for prose');
  }
}
if (!tableBad) ok(`all ${seenCur.size} currencies in use declare a word form or a symbol`);

console.log(`\n${fails ? 'FAIL' : 'PASS'}  ${fails} failure(s), ${notes} note(s)`);
process.exit(fails ? 1 : 0);
