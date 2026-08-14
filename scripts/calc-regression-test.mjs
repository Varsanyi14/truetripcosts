#!/usr/bin/env node
// CALCULATOR REGRESSION AND EXPOSURE HONESTY TEST.
//
// Run from the repo root, after a build:
//     npm run build && node scripts/calc-regression-test.mjs
//
// WHAT THIS PROTECTS. The estimator's script is the most delicate code on the site, and the
// exposure section was added around it rather than into it. Two different things can go
// wrong, so this checks both.
//
//   1. THE CALCULATOR. Its money math must be untouched, and every element render() reaches
//      for must still exist, exactly once, on every country page. The exposure build moved a
//      whole block of markup out of one section and into another, and a moved element is
//      exactly how render() starts writing into nothing.
//
//   2. THE TWO NUMBERS. The exposure measure must never become one number. That is not a
//      style preference, it is the difference between a page that helps and a page that
//      frightens, and it is the single thing most likely to be lost in a later edit by
//      someone who thinks two figures look untidy. So it is asserted here, statically, in a
//      way that fails loudly.
//
// This test reads the real source and the real built pages. It does not mock either.

import fs from 'node:fs';
import path from 'node:path';
import { countries } from '../src/data/index.js';
import { avoidableFor, exposureFor } from '../src/data/avoidable.js';

const BRIEFING = 'src/components/CountryBriefing.astro';
const RESULT = 'src/components/CalcResult.astro';
const read = (p) => fs.readFileSync(p, 'utf8');

let failures = 0;
const pass = (m) => console.log('  ok    ' + m);
const fail = (m) => { failures++; console.log('  FAIL  ' + m); };
const check = (cond, m) => cond ? pass(m) : fail(m);
const section = (m) => console.log('\n' + m);

// ---------------------------------------------------------------------------
// 1. THE MONEY MATH, asserted as source.
//
// Re-implementing the formula here would only prove that two copies of it agree. So the
// contract is the source itself: these are the exact lines that turn inputs into money, and
// if one of them changes, this test is meant to stop and make somebody say so out loud.
// ---------------------------------------------------------------------------
section('1. Calculator money math is unchanged');
const brief = read(BRIEFING);
const MATH_CONTRACT = [
  ['the trip total', 'const total = roomOnCard + spend + cardFee + atmFee + t.usd + flightTotal;'],
  ['the card base', 'const cardBase = roomOnCard + card;'],
  ['the card fee', 'const cardFee = cardBase * (cardFxPct / 100);'],
  ['ATM withdrawal count', 'const pulls = Math.max(1, Math.ceil(cash / 300));'],
  ['ATM flat charge', 'const atmFlat = pulls * 5;'],
  ['ATM percentage markup', 'const atmFx = cash * (atmCashPct / 100);'],
  ['the ATM fee', 'const atmFee = state.noFee ? 0 : (atmFlat + atmFx);'],
  ['the confidence band total', 'return roomOnCard + s + cFee + aFee + t.usd + flightUSD;'],
  ['the spend band', 'const SPEND_BAND = 0.15;'],
  ['the DCC band on the high end', 'const DCC_EXTRA_PP = 2;'],
  ['the fees preview', "setPrev('prevFees', shown(cardFee) + shown(atmFee) + shown(t.usd));"],
];
for (const [name, line] of MATH_CONTRACT) {
  check(brief.includes(line), name + ' is intact');
}

// ---------------------------------------------------------------------------
// 2. THE MAKE-OR-BREAK RAIL: the two sides are never added together.
//
// A blended figure would sum money the traveler hands over with money they never lose. It
// would be arithmetically meaningless and it would turn a section about what you can refuse
// into a number about how exposed you are. This is a static check because it has to survive
// people, not just tests: the failure mode is a well-meaning edit, months from now, that
// "tidies" two figures into one.
// ---------------------------------------------------------------------------
section('2. The pay side and the dodge side are never combined');
const briefLines = brief.split('\n');
const codeLines = briefLines.filter(l => !/^\s*(\/\/|\*|\/\*)/.test(l));

const blended = codeLines.filter(l =>
  /\bpay(Lo|Hi|Fixed)\b/.test(l) && /\bdodge(Lo|Hi)\b/.test(l) && /[+]/.test(l)
);
check(blended.length === 0, 'no expression adds a pay figure to a dodge figure'
  + (blended.length ? '  <-- ' + blended[0].trim() : ''));

const BANNED = [
  'dangerScore', 'danger_score', 'riskScore', 'risk_score', 'exposureScore',
  'exposureTotal', 'blendedTotal', 'totalExposure', 'atRiskPct', 'pctAtRisk',
];
const found = BANNED.filter(w => new RegExp('\\b' + w + '\\b').test(brief) || new RegExp('\\b' + w + '\\b').test(read(RESULT)));
check(found.length === 0, 'no score or blended-total identifier exists' + (found.length ? '  <-- ' + found.join(', ') : ''));

// The exposure block must run entirely downstream of the trip total. If an exposure variable
// ever appeared in the total, avoidable money would be inside a cost, which is the other
// rail this section was built to keep.
const totalLine = codeLines.find(l => l.includes('const total = roomOnCard'));
check(!!totalLine && !/\b(pay|dodge|ex)[A-Z]/.test(totalLine), 'the trip total references no exposure variable');
const bandLine = codeLines.find(l => l.includes('return roomOnCard + s + cFee'));
check(!!bandLine && !/\b(pay|dodge|ex)[A-Z]/.test(bandLine), 'the confidence range references no exposure variable');

// ---------------------------------------------------------------------------
// 3. THE DOM CONTRACT.
//
// Every id the calculator reaches for, present exactly once on every country page. Derived
// from the source rather than listed by hand, so an id added to render() tomorrow is checked
// tomorrow without anyone remembering to add it here.
// ---------------------------------------------------------------------------
section('3. Every element render() writes to exists, exactly once, on every country page');
const referenced = new Set([
  ...brief.matchAll(/\bid\('([A-Za-z][\w-]*)'\)/g),
  ...brief.matchAll(/getElementById\('([A-Za-z][\w-]*)'\)/g),
].map(m => m[1]));
// Written through the setPrev and setTx helpers, which take the id as a plain string.
for (const m of brief.matchAll(/set(?:Prev|Tx|A)\('([A-Za-z][\w-]*)'/g)) referenced.add(m[1]);

const distDir = 'dist';
if (!fs.existsSync(distDir)) {
  fail('dist/ not found. Run "npm run build" first, this test reads the real built pages.');
} else {
  const pages = fs.readdirSync(distDir)
    .map(d => path.join(distDir, d, 'index.html'))
    .filter(p => fs.existsSync(p) && read(p).includes('id="hn-data"'));
  check(pages.length === countries.filter(c => c.live).length,
    'found a built page for every live country (' + pages.length + ')');

  const missing = new Map();
  const dupes = new Map();
  for (const p of pages) {
    const slug = path.basename(path.dirname(p));
    const ids = [...read(p).matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
    const counts = new Map();
    for (const i of ids) counts.set(i, (counts.get(i) || 0) + 1);
    for (const [k, v] of counts) if (v > 1) dupes.set(k, (dupes.get(k) || []).concat(slug));
    for (const r of referenced) if (!counts.has(r)) missing.set(r, (missing.get(r) || []).concat(slug));
  }
  check(missing.size === 0, referenced.size + ' referenced ids all present on all ' + pages.length + ' pages'
    + (missing.size ? '  <-- missing: ' + [...missing.keys()].join(', ') : ''));
  check(dupes.size === 0, 'no duplicate ids on any country page'
    + (dupes.size ? '  <-- ' + [...dupes.keys()].join(', ') : ''));
}

// ---------------------------------------------------------------------------
// 4. FIGURE DISCIPLINE: nothing in the exposure totals was invented.
//
// Every priced item has to be re-derivable from the sourced string the row itself displays.
// This is what stops a number being quietly typed in beside a figure it does not match.
// ---------------------------------------------------------------------------
section('4. Every exposure figure traces back to a sourced string on its own row');
const live = countries.filter(c => c.live);
let sided = 0, priced = 0, unpriced = 0, badTrace = [];
const usdish = (s) => /^(?:about\s+)?\$[\d,]+(?:\.\d{1,2})?(?:\s+to\s+\$[\d,]+(?:\.\d{1,2})?)?(?:\s+(?:a|per)\s+person)?$/i.test(String(s || '').trim());

for (const c of live) {
  for (const a of avoidableFor(c)) {
    if (a.side !== 'pay' && a.side !== 'dodge') { badTrace.push(c.slug + '/' + a.key + ': no side'); continue; }
    sided++;
    if (!a.worth) { unpriced++; continue; }
    priced++;
    if (a.worth.kind === 'usd') {
      // A dollar worth is only legitimate where the row displays dollar figures. The form
      // item takes its number from the fake side; the reseller item from the gap between
      // both sides. Either way both of those live in priceVs, on the row.
      const vs = a.priceVs;
      if (!vs || !usdish(vs.fake) || !(usdish(vs.real) || vs.real === 'free')) {
        badTrace.push(c.slug + '/' + a.key + ': dollar worth with no dollar prices on the row');
      }
    } else if (a.worth.kind === 'pctCardBase') {
      if (!/%/.test(String(a.figure || ''))) badTrace.push(c.slug + '/' + a.key + ': percentage worth with no percentage on the row');
      if (a.side !== 'pay') badTrace.push(c.slug + '/' + a.key + ': a percentage of the card base is money paid, it cannot sit on the dodge side');
    } else if (a.worth.kind !== 'liveFees') {
      badTrace.push(c.slug + '/' + a.key + ': unrecognised worth kind ' + a.worth.kind);
    }
  }
}
check(badTrace.length === 0, sided + ' items across ' + live.length + ' countries all trace'
  + (badTrace.length ? '  <-- ' + badTrace.slice(0, 3).join(' | ') : ''));
check(unpriced > 0, unpriced + ' items are deliberately unpriced and counted rather than valued');

// ---------------------------------------------------------------------------
// 5. THE EXPOSURE MEASURE, simulated over the real calculator formula.
//
// The trip total below is the calculator's own five-part sum, restated here so the exposure
// figures can be checked as a proportion of a real total rather than in the abstract. If
// section 1 above passes, this formula matches the one that ships.
// ---------------------------------------------------------------------------
section('5. The exposure figures behave, for every country, across a matrix of inputs');
const SCENARIOS = [
  { room: 150, nights: 7, trav: 2, per: 120, cashShare: 0.4, flight: 900, paid: false, noFee: false, tax: 40 },
  { room: 90, nights: 2, trav: 1, per: 60, cashShare: 0.8, flight: 0, paid: true, noFee: false, tax: 0 },
  { room: 400, nights: 21, trav: 4, per: 260, cashShare: 0.1, flight: 1800, paid: false, noFee: true, tax: 300 },
  { room: 60, nights: 1, trav: 1, per: 40, cashShare: 1.0, flight: 0, paid: true, noFee: true, tax: 0 },
];
const FX = 3;

let worst = { pctOfTrip: 0, slug: '', label: '' };
let worstNormal = { pctOfTrip: 0, label: '' };
let overflow = 0;
let problems = [];
for (const c of live) {
  const EX = exposureFor(c);
  for (const s of SCENARIOS) {
    const room = s.room * s.nights;
    const spend = s.per * s.trav * s.nights;
    const cash = spend * s.cashShare, card = spend - cash;
    const roomOnCard = s.paid ? 0 : room;
    const cardBase = roomOnCard + card;
    const cardFee = s.noFee ? 0 : cardBase * (FX / 100);
    const pulls = Math.max(1, Math.ceil(cash / 300));
    const atmFee = s.noFee ? 0 : (pulls * 5 + cash * (FX / 100));
    const flightTotal = s.flight * s.trav;
    const total = roomOnCard + spend + cardFee + atmFee + s.tax + flightTotal;

    const feesNow = Math.round(cardFee) + Math.round(atmFee);
    const payLo = (EX.payLive ? feesNow : 0) + EX.payFlatLo + EX.payPpLo * s.trav + cardBase * (EX.payPctLo / 100);
    const payHi = (EX.payLive ? feesNow : 0) + EX.payFlatHi + EX.payPpHi * s.trav + cardBase * (EX.payPctHi / 100);
    const dodgeLo = EX.dodgeFlatLo + EX.dodgePpLo * s.trav;
    const dodgeHi = EX.dodgeFlatHi + EX.dodgePpHi * s.trav;
    const tag = c.slug + ' @ ' + s.nights + 'n/' + s.trav + 'p' + (s.noFee ? '/nofee' : '') + (s.paid ? '/paid' : '');

    if (!(payLo <= payHi)) problems.push(tag + ': pay low above pay high');
    if (!(dodgeLo <= dodgeHi)) problems.push(tag + ': dodge low above dodge high');
    if (payLo < 0 || dodgeLo < 0) problems.push(tag + ': a negative figure');
    if (!(total > 0)) problems.push(tag + ': trip total not positive');

    // The bar is a proportion of the real trip total, and the clamp in render() means it can
    // never spill past it. Both are checked: the raw share, so an absurd result is visible
    // here, and the clamped widths, which are what actually draw.
    let wPay = (payLo / total) * 100, wPayB = ((payHi - payLo) / total) * 100;
    let wDodge = (dodgeLo / total) * 100, wDodgeB = ((dodgeHi - dodgeLo) / total) * 100;
    const raw = wPay + wPayB + wDodge + wDodgeB;
    // Over 100% the bar is not drawn at all, so the only thing to check is that it stepped
    // aside rather than being squashed into a full bar. See the `fits` branch in render().
    if (raw > 100) overflow++;
    if (raw > worst.pctOfTrip) worst = { pctOfTrip: raw, slug: c.slug, label: tag };
    // Against a NORMAL trip the whole measure has to stay small, or the section is doing the
    // frightening it exists to avoid. This bound is the real assertion in this block.
    if (s === SCENARIOS[0]) {
      if (raw > 25) problems.push(tag + ': exposure is ' + raw.toFixed(0) + '% of an ordinary trip');
      if (raw > worstNormal.pctOfTrip) worstNormal = { pctOfTrip: raw, label: tag };
    }

    // A dodge figure can only exist where a sourced price does. Belt to the parser's braces.
    if (dodgeHi > 0 && EX.dodgeFlatHi + EX.dodgePpHi <= 0) problems.push(tag + ': dodge figure from nowhere');
  }
}
check(problems.length === 0, live.length * SCENARIOS.length + ' country and input combinations behave'
  + (problems.length ? '  <-- ' + problems.slice(0, 3).join(' | ') : ''));
check(/const fits = \(raw <= 100\);/.test(brief) && /if \(bar\) bar\.hidden = !fits;/.test(brief),
  'the bar steps aside rather than filling when the figures exceed the trip total');
console.log('        widest on an ordinary trip: ' + worstNormal.pctOfTrip.toFixed(1) + '% (' + worstNormal.label + ')');
console.log('        widest on any input: ' + worst.pctOfTrip.toFixed(1) + '% (' + worst.label + '), ' + overflow + ' of ' + (live.length * SCENARIOS.length) + ' combinations draw no bar');

// ---------------------------------------------------------------------------
// 6. GRACEFUL DEGRADATION, and the badge that must never exist.
// ---------------------------------------------------------------------------
section('6. A data-poor country degrades to less, never to a reassurance');
// Checked against the BUILT pages, not the source. The source comments say things like
// '"What you can avoid", never "Save $X!"', which is the rule being stated, not broken, and
// a check that cannot tell those apart is a check nobody will keep.
const REASSURANCE = /\b(you are safe|low exposure|low risk|all clear|nothing to worry|risk[- ]free)\b/i;
const SAVINGS = /\b(save \$[\d,]|you could save|we saved you|savings? of \$)/i;
let copyHits = [];
if (fs.existsSync(distDir)) {
  for (const d of fs.readdirSync(distDir)) {
    const p = path.join(distDir, d, 'index.html');
    if (!fs.existsSync(p)) continue;
    const html = read(p);
    if (!html.includes('id="hn-data"')) continue;
    const text = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ');
    if (REASSURANCE.test(text)) copyHits.push(d + ': reassurance badge');
    if (SAVINGS.test(text)) copyHits.push(d + ': savings headline');
  }
}
check(copyHits.length === 0, 'no safe/low-exposure badge and no "save $X" headline in any built page'
  + (copyHits.length ? '  <-- ' + copyHits.slice(0, 3).join(' | ') : ''));

const thin = live.filter(c => { const e = exposureFor(c); return !e.dodgeFlatHi && !e.dodgePpHi && !e.dodgeUnpriced; });
const noPay = live.filter(c => { const e = exposureFor(c); return !e.payLive && !e.payPctHi && !e.payFlatHi && !e.payPpHi; });
check(live.every(c => avoidableFor(c).length > 0), 'every live country has at least one avoidable item to show');
console.log('        ' + thin.length + ' countries show no dodge figure at all (they show the pay side and the list): '
  + (thin.map(c => c.slug).join(', ') || 'none'));
console.log('        ' + noPay.length + ' countries show no pay figure');

// Per-country gating, unchanged: a dollar-currency country must never be told to decline
// paying in dollars, and a country whose guide denies a refund must never be told to claim one.
section('7. Per-country gating still holds');
const usdCountries = live.filter(c => (c.cash && c.cash.cur) === 'USD');
const badDcc = usdCountries.filter(c => avoidableFor(c).some(a => a.key === 'dcc' || a.key === 'exchange'));
check(badDcc.length === 0, usdCountries.length + ' dollar-currency countries get no pay-in-dollars line'
  + (badDcc.length ? '  <-- ' + badDcc.map(c => c.slug).join(', ') : ''));

console.log('\n' + (failures === 0 ? 'RESULT: PASS' : 'RESULT: FAIL (' + failures + ')'));
process.exit(failures === 0 ? 0 : 1);
