#!/usr/bin/env node
// THE MEDICAL MAP GATE. Run from the repo root: node scripts/check-medical-map.mjs
//
// WHAT THIS GATE PROVES. The medical exposure map on /medical-costs colours countries by
// a CATEGORY of exposure, and every colour is a claim. This gate proves that no colour can
// reach the map without a live medical-costs spoke standing behind it, that the claim each
// colour encodes still appears verbatim in that spoke's own reader-visible prose, and that
// the map can never become a back-door home for a price. It does not, and cannot, prove a
// category is TRUE; that is MAIN's read of the page. Same division of labour as
// check-health.mjs: the gate makes MAIN's verification job small and drift impossible,
// truth stays a human ruling.
//
// THE FIVE CHECKS.
//   1. NO COLOUR WITHOUT A SPOKE. A country colours only if it has a live medical-costs
//      spoke carrying an exposureCategory from the allowed set. A spoke carrying a
//      category OUTSIDE the set is a FAIL, not a silent grey, because a typo that
//      uncolours a country is drift hiding as absence. A tagged spoke must also carry its
//      exposureQuote, since the tag without its pointer is an unauditable claim.
//   2. A CATEGORY IS NEVER THE GREY. No category fill may equal the not-yet-checked
//      sentinel, and all fills must be pairwise distinct, so "uncoloured" can never
//      masquerade as a real category and two categories can never read as one.
//   3. THE QUOTE IS A POINTER, BOTH DRIFT DIRECTIONS. exposureQuote must appear VERBATIM
//      in the spoke's own reader-visible prose. Edit the quote alone and it no longer
//      matches the page: FAIL. Edit the page alone and the quote points at a sentence
//      that no longer exists: FAIL. Move both together, a genuine re-verification, and
//      the gate passes. This is the careFirst mechanism applied to the map, so a
//      rewritten page cannot leave a stale colour behind it.
//   4. NO FIGURE IN A QUOTE. A dedicated check fails any exposureQuote carrying a
//      currency figure, whatever the health gate thinks of it. The map legend encodes
//      shapes of exposure, never amounts, and this is the check that keeps it that way.
//   5. THE GATE RECOMPUTES THE MAP ITSELF. The entries are rebuilt here from the raw
//      country data, independently, and compared field by field against what
//      deriveEntries() exports to the component. A bug in the derivation cannot certify
//      itself, because the audit does not trust the helper it audits.
//
// Every check is mutation-tested by scripts/mutation-test-medical-map.mjs: flip the
// thing, prove this gate fails; restore, prove it passes. A gate that has never been
// seen to fail proves nothing.
//
// Exits 1 on any FAIL.

import { countries } from '../src/data/index.js';
import { CATEGORIES, CATEGORY_ORDER, STATES, deriveEntries, colours, fillFor } from '../src/data/medical-map.js';

const SLUG = 'medical-costs';

// Reader-visible prose of a spoke, one string. DELIBERATELY duplicated from
// check-health.mjs rather than imported: the two gates must be able to disagree, and a
// shared helper is a shared blind spot. If the spoke shape grows a prose field, add it in
// both places; the mutation harness plants its prose mutations where BOTH scanners look.
const strip = (s) => String(s || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
function proseOf(sp) {
  const bits = [sp.lede, sp.answer, sp.title, sp.description, sp.h1];
  (sp.glance || []).forEach(g => bits.push(g.k, g.v));
  (sp.sections || []).forEach(sec => {
    bits.push(sec.h);
    if (sec.key) bits.push(sec.key.fig, sec.key.tag, sec.key.text);
    (sec.p || []).forEach(p => bits.push(p));
    (sec.steps || []).forEach(s => bits.push(s));
  });
  (sp.faqs || []).forEach(f => bits.push(f.q, f.a));
  return bits.map(strip).filter(Boolean).join(' ');
}

// The same broad currency net check-health.mjs casts, applied to the one string that
// must never hold money: the quote. Widths and currencies match the health gate's
// Batch-3 form so a figure the health gate would demand a declaration for can never
// ride into the legend inside a quote.
const CURRENCY_QUALIFIER = '(?:Hong Kong|Canadian|Singapore|Singaporean|Australian|New Zealand|US|Taiwan|Taiwanese|Jamaican|Namibian|Emirati|Qatari|Swiss|Danish|Norwegian|Swedish|Icelandic)\\s';
const FIGURE_RE = new RegExp([
  '\\$\\s?[\\d,]+(?:\\.\\d+)?(?:\\s?(?:to|-)\\s?\\$?[\\d,]+(?:\\.\\d+)?)?(?:k|\\+)?',
  `[\\d,]+(?:\\.\\d+)?(?:\\s?(?:to|-)\\s?[\\d,]+(?:\\.\\d+)?)?\\s?(?:${CURRENCY_QUALIFIER})?(?:dollars?|USD|euros?|EUR|pounds?)`,
  '[\\d,]+(?:\\s?(?:to|-)\\s?[\\d,]+)?\\s?(?:pesos|GEL|KWD|LAK|KHR|LKR|JMD|NAD|CNY|HKD|CAD|SGD|yuan|RMB|lari|dinars?)',
  '\\b\\d{1,3}(?:,\\d{3})+(?:\\.\\d+)?\\b',
].join('|'), 'gi');

const fails = [], notes = [];
const fail = (m) => fails.push(m);
const note = (m) => notes.push(m);

// --- independent recomputation, used by checks 1, 3, 4 and 5 -----------------
// Built from the raw country data with this gate's own hands. Mirrors the rules the map
// documents (live country, live medical-costs spoke, iso2 present) without calling
// deriveEntries, so check 5 is a real comparison rather than a tautology.
const recomputed = [];
for (const c of countries) {
  if (!c.live) continue;
  const sp = (c.spokes || []).find(s => s && s.slug === SLUG && s.live !== false);
  if (!sp) continue;
  if (!(c.iso2 || '').trim()) { note(`1 SPOKE      ${c.slug}: live medical-costs spoke but no iso2, so the map cannot place it`); continue; }
  recomputed.push({ c, sp, iso: c.iso2.toUpperCase() });
}

// --- 1. No colour without a spoke, no tag outside the set --------------------
for (const { c, sp } of recomputed) {
  if (!sp.exposureCategory) {
    fail(`1 SPOKE      ${c.slug}: live medical-costs spoke with no exposureCategory. Tag it or the country sits grey with a finished page behind it, which is drift.`);
    continue;
  }
  if (!CATEGORIES[sp.exposureCategory]) {
    fail(`1 SPOKE      ${c.slug}: exposureCategory "${sp.exposureCategory}" is not in the allowed set (${CATEGORY_ORDER.join(', ')}). A typo must fail loudly, never uncolour silently.`);
  }
  if (!sp.exposureQuote || !String(sp.exposureQuote).trim()) {
    fail(`1 SPOKE      ${c.slug}: exposureCategory is set but exposureQuote is missing. A tag without its pointer is an unauditable claim.`);
  }
}
// The other half of "no colour without a spoke": the gate asserts the single colouring
// function refuses everything that is not a categorised entry.
if (colours(null) !== false || colours({ category: 'notACategory' }) !== false) {
  fail(`1 SPOKE      colours() accepts an entry with no valid category, so the component could colour a country the data does not certify`);
}
if (fillFor({ category: 'notACategory' }) !== STATES.unchecked.fill) {
  fail(`1 SPOKE      fillFor() does not fall back to the not-yet-checked grey for an unknown category`);
}

// --- 2. A category is never the grey, and fills are pairwise distinct --------
const fillsSeen = new Map();
for (const key of CATEGORY_ORDER) {
  const f = String(CATEGORIES[key].fill || '').toUpperCase();
  if (!f) { fail(`2 FILL       category ${key} has no fill`); continue; }
  if (f === String(STATES.unchecked.fill).toUpperCase()) {
    fail(`2 FILL       category ${key} uses the not-yet-checked grey (${STATES.unchecked.fill}), so a real claim would render as absence`);
  }
  if (fillsSeen.has(f)) {
    fail(`2 FILL       categories ${fillsSeen.get(f)} and ${key} share the fill ${f}, so two different claims would read as one`);
  }
  fillsSeen.set(f, key);
}

// --- 3. The quote appears verbatim in the spoke's own prose ------------------
for (const { c, sp } of recomputed) {
  if (!sp.exposureQuote) continue; // already failed in check 1
  const target = strip(sp.exposureQuote);
  if (!proseOf(sp).includes(target)) {
    fail(`3 QUOTE      ${c.slug}: exposureQuote does not appear verbatim in the spoke's reader-visible prose. Either the quote drifted or the page was rewritten under it; re-verify and move both together.`);
  }
}

// --- 4. No figure in a quote --------------------------------------------------
for (const { c, sp } of recomputed) {
  if (!sp.exposureQuote) continue;
  const hit = String(sp.exposureQuote).match(FIGURE_RE);
  if (hit) {
    fail(`4 NOPRICE    ${c.slug}: exposureQuote carries a currency figure ("${hit[0].trim()}"). The map encodes shapes of exposure, never amounts; point the quote at a figure-free sentence.`);
  }
}

// --- 5. deriveEntries() must agree with the gate's own recomputation ----------
const derived = deriveEntries(countries);
const key = (e) => `${e.iso}|${e.slug}`;
const derivedBy = new Map(derived.map(e => [key(e), e]));
const mineBy = new Map(recomputed.map(({ c, sp, iso }) => [`${iso}|${c.slug}`, { iso, slug: c.slug, category: sp.exposureCategory || null, quote: sp.exposureQuote || null }]));
for (const [k, mine] of mineBy) {
  const d = derivedBy.get(k);
  if (!d) { fail(`5 DERIVE     ${mine.slug}: this gate finds a live medical-costs spoke but deriveEntries() drops it, so the map is missing a country the data certifies`); continue; }
  if ((d.category || null) !== mine.category) fail(`5 DERIVE     ${mine.slug}: deriveEntries() reports category "${d.category}" but the spoke carries "${mine.category}"`);
  if ((d.quote || null) !== mine.quote) fail(`5 DERIVE     ${mine.slug}: deriveEntries() reports a quote that does not match the spoke's exposureQuote`);
}
for (const [k, d] of derivedBy) {
  if (!mineBy.has(k)) fail(`5 DERIVE     ${d.slug}: deriveEntries() invents an entry this gate cannot recompute from the data`);
}

// --- Report --------------------------------------------------------------------
console.log('== TTC medical map gate ==');
console.log(`countries with a live medical-costs spoke: ${recomputed.length}`);
const counts = {};
for (const { sp } of recomputed) {
  const cat = CATEGORIES[sp.exposureCategory] ? sp.exposureCategory : '(invalid or missing)';
  counts[cat] = (counts[cat] || 0) + 1;
}
console.log('category counts:');
for (const cat of [...CATEGORY_ORDER, '(invalid or missing)']) {
  if (counts[cat]) console.log(`    ${cat}: ${counts[cat]}`);
}
console.log(`deriveEntries() exports: ${derived.length}`);
console.log(`\nFAILURES: ${fails.length ? fails.length : 'none'}`);
fails.forEach(f => console.log('    ' + f));
if (notes.length) {
  console.log(`\nNOTES (not failures): ${notes.length}`);
  notes.forEach(n => console.log('    ' + n));
}
console.log('\nRESULT:', fails.length ? 'FAIL' : 'PASS');
process.exit(fails.length ? 1 : 0);
