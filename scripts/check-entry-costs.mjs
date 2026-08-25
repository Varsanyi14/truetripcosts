// Entry-cost gate. Run from the repo root, after a build:
//   npm run build && node scripts/check-entry-costs.mjs
//
// WHY THIS EXISTS, and it is not hypothetical. entry-charges.js indexes a country's entry
// charges by matching a keyFact LABEL as an exact string. When Thailand's guide renamed
// its air-arrival-fee keyFact and dropped the amount out of the label, the two strings stopped matching, the
// lookup returned nothing, and a real proposed fee rendered on no surface at all. That is
// the file's documented safe-failure mode working exactly as designed, and it is still a
// failure: nothing errored, nothing looked wrong, and the only way to notice was to read
// both files side by side. This gate is that reading, automated.
//
// WHAT IT ASSERTS:
//
//   1. NO SILENT DROP. Every label in the entry-charges index resolves to a keyFact on
//      that country. An unresolvable label is the Thailand bug and fails here.
//   2. NO SECOND COPY. Every country with an entry spoke AND a keyFact for that charge
//      renders the figure from the keyFact rather than holding a divergent copy. Under
//      MAIN's approved rule, a country with no keyFact is EXEMPT BY NAME (see
//      KEYFACTS_EXEMPT below), never by silence.
//   3. THE FAMILY IS COMPLETE. Every country with a `charge` or `conditional` has an
//      entry spoke, and every entry spoke maps to a country the entry layer knows about
//      or is listed as a deliberate no-charge page.
//   4. PER-PERSON UNIT DISCIPLINE. Every row entryChargesFor returns carries
//      unit:'perPersonOneOff', and no entry figure reaches a per-night multiply.
//   5. UNPRICED IS NEVER BILLABLE, AND NEVER A ZERO. An `unpriced` row never passes
//      isBillable, never passes isNamedZero, and renders as a real cost.
//   6. NO RENAME WITHOUT A REDIRECT. Every slug in RENAMED has a 301 in public/_redirects
//      covering both slash forms, and its old page is genuinely gone from dist.
//   7. NO SILENT HOLE. Every live country sits in exactly one bucket, so the gate can
//      always tell "checked, nothing to pay" apart from "nobody looked." See the note on
//      NO_CHARGE_COUNTRIES below for why the first six assertions could not do this.
//
// Exits 1 on any FAIL.

import fs from 'fs';
import { countries } from '../src/data/index.js';
import {
  entryCharges, entryChargesFor, isBillable, isNamedZero, isUnpriced,
} from '../src/data/entry-charges.js';

// ---------------------------------------------------------------------------
// THE EXEMPTION LIST. This is the load-bearing half of MAIN's keyFacts ruling: a country
// whose entry spoke carries its own sourced figures because it has NO keyFacts array is
// exempt, and it is listed HERE BY NAME so a missing figure can never hide as a false
// exemption. Adding a keyFacts block to one of these is a good thing; the gate will tell
// you to remove it from this list when you do.
const KEYFACTS_EXEMPT = new Set([
  'japan', 'mexico', 'costa-rica', 'dominican-republic', 'uae', 'qatar', 'kuwait',
  'canada', 'turkey', 'colombia', 'jamaica', 'ireland', 'bahamas', 'el-salvador',
]);

// Entry spokes that deliberately exist for a country with NO entry charge, because the
// honest answer to "do I need a visa" is no and that is worth a page. Not hollow spokes:
// a page that exists to say no is useful, a page that exists to say nothing is padding.
const NO_CHARGE_PAGES = new Set([
  'japan', 'costa-rica', 'uae', 'qatar', 'canada', 'turkey', 'ireland', 'bahamas',
  'el-salvador', 'colombia', 'jamaica', 'dominican-republic', 'mexico',
]);

// Countries CHECKED and ruled to have no entry charge, which have NO entry spoke. This is
// the fourth bucket, and it exists because the other three could not hold these 20.
//
// WHY NOT NO_CHARGE_PAGES: that list is about PAGES. Every slug on it has a live entry
// spoke, and assertion 2 only reaches a country inside `if (!rows.length && spokes.length)`.
// None of these 20 has a spoke, so listing them there is read by nothing: the gate scored
// 217 assertions before they were added and 217 after, byte for byte. It would also put a
// false statement in the data, claiming a page that does not exist.
//
// WHY NOT entryCharges: the index matches a keyFact LABEL exactly, and not one of these 20
// has an entry keyFact to match. Classifying austria as a Georgia-style named zero fails
// assertion 1 on contact, because Georgia works only by pointing at a keyFact Georgia has.
// The fix would be to write the keyFact, and that is the one thing MAIN ruled out: for the
// 17 Schengen slugs the visa-free and ETIAS position is owned by src/data/schengen.js and
// rendered on all 17 by EESNotice.astro, so a per-country keyFact is the second copy
// assertion 2 exists to prevent, and it would drift the day ETIAS moves. argentina,
// hong-kong and morocco already carry their own sourced entry prose in the country file.
// Either way the fact is already written down once, correctly, somewhere else.
//
// SO THE RULING LIVES HERE INSTEAD. Absence is not zero. A country reaches this list only
// by being checked and ruled free, never by nobody having looked at it, and assertion 7
// makes that ruling readable to the gate rather than leaving it in a commit message.
//
// THE RAIL WHEN ONE OF THESE GROWS: if a country here gains an entry spoke it belongs in
// NO_CHARGE_PAGES, and if it gains a classifiable entry keyFact it belongs in entryCharges.
// Assertion 7 fails on both, so the move is forced rather than remembered.
const NO_CHARGE_COUNTRIES = new Set([
  // The Schengen 17. Includes iceland, norway and switzerland, which are Schengen but not
  // EU, and excludes ireland, which is EU but opted out and has its own spoke.
  'austria', 'croatia', 'czechia', 'denmark', 'france', 'germany', 'greece', 'hungary',
  'iceland', 'italy', 'netherlands', 'norway', 'poland', 'portugal', 'spain', 'sweden',
  'switzerland',
  // Visa-free for US citizens with no arrival fee, verified 2026-08-24. argentina's
  // reciprocity fee was revoked by Presidential Decree 959/2016 and has not returned; its
  // Decree 366/2025 insurance rule is a real entry condition, deliberately left as hedged
  // prose in the guide rather than promoted to a `requirement` row, because enforcement is
  // inconsistent and no coverage minimum is sourceable to a primary authority.
  'argentina', 'hong-kong', 'morocco',
]);

// Slug renames shipped in this wave. Each must have its 301 in public/_redirects.
const RENAMED = [
  { from: '/brazil/entry-visa', to: '/brazil/e-visa' },
  { from: '/mexico/entry-fees', to: '/mexico/attraction-fees' },
];

const KINDS = ['charge', 'conditional', 'zero', 'requirement', 'exemption', 'proposed', 'unpriced'];

let fails = 0, checks = 0;
const fail = (who, msg) => { fails++; console.log(`  FAIL  ${who}: ${msg}`); };
const ok = () => { checks++; };

const live = countries.filter(c => c.live);
const bySlug = new Map(live.map(c => [c.slug, c]));
const entrySpokes = (c) => (c.spokes || []).filter(s => s.live !== false && s.topic === 'visas');

console.log('== entry-cost gate ==\n');

// --- 1. no silent drop -----------------------------------------------------
console.log('1. Every indexed label resolves to a real keyFact');
for (const [slug, index] of Object.entries(entryCharges)) {
  const c = bySlug.get(slug);
  if (!c) { fail(slug, 'indexed in entry-charges.js but not a live country'); continue; }
  const resolved = entryChargesFor(c).map(r => r.label);
  for (const entry of index) {
    if (!KINDS.includes(entry.kind)) { fail(slug, `unknown kind "${entry.kind}"`); continue; }
    if (!resolved.includes(entry.label)) {
      fail(slug, `label "${entry.label}" (${entry.kind}) matches no keyFact, so it renders nowhere. This is the Thailand drift.`);
    } else ok();
  }
}

// --- 2. no second copy of a figure ----------------------------------------
console.log('2. No country holds two divergent copies of one entry figure');
for (const c of live) {
  const rows = entryChargesFor(c);
  const spokes = entrySpokes(c);
  if (!rows.length && spokes.length) {
    // A spoke with no classified charge: either a documented no-charge page, or exempt
    // because it has no keyFacts array to classify against.
    if (NO_CHARGE_PAGES.has(c.slug) || KEYFACTS_EXEMPT.has(c.slug)) ok();
    else fail(c.slug, 'has an entry spoke but no entry-charges classification and is not listed as a no-charge page or keyFacts-exempt. Classify it or name it.');
    continue;
  }
  if (rows.length) {
    // The country HAS keyFacts for its entry charges, so it must not be on the exempt
    // list: an exemption that is no longer true is how a missing figure hides.
    if (KEYFACTS_EXEMPT.has(c.slug)) {
      fail(c.slug, 'is on KEYFACTS_EXEMPT but now has classified entry keyFacts. Remove it from the exemption list.');
    } else ok();
    // Every resolved row must carry the guide's own source and checked date, so the
    // figure a reader sees is dated and traceable rather than free-floating.
    for (const r of rows) {
      if (!r.checked) fail(c.slug, `entry row "${r.label}" carries no checked date`);
      else ok();
    }
  }
}

// --- 3. the family is complete --------------------------------------------
console.log('3. Every charge and conditional country has a spoke');
for (const c of live) {
  const rows = entryChargesFor(c);
  const needsPage = rows.some(r => r.kind === 'charge' || r.kind === 'conditional' || r.kind === 'unpriced');
  const has = entrySpokes(c).length > 0;
  if (needsPage && !has) fail(c.slug, 'has a charge, conditional or unpriced entry cost and no entry spoke');
  else ok();
}

// --- 4. per-person unit discipline ----------------------------------------
console.log('4. Per-person unit discipline, and no per-night multiply');
for (const c of live) {
  for (const r of entryChargesFor(c)) {
    if (r.unit !== 'perPersonOneOff') fail(c.slug, `entry row "${r.label}" has unit "${r.unit}", expected perPersonOneOff`);
    else ok();
  }
}
// The structural half: nothing that consumes entry charges may touch a nights variable in
// the same expression. A grep is crude, but the failure it guards against (an entry fee
// multiplied by nights) is severe and silent, and the pairing is what an edit can break.
for (const file of ['src/data/calc-lines.js', 'src/data/breadth.js', 'src/components/CalcResult.astro']) {
  const txt = fs.readFileSync(file, 'utf8');
  const bad = txt.split('\n').filter(l => /entry(Charges|Unpriced|Conditional)/i.test(l) && /nights?\s*\*|\*\s*nights?/i.test(l));
  if (bad.length) fail(file, `an entry figure appears in the same expression as a nights multiply: ${bad[0].trim().slice(0, 90)}`);
  else ok();
}

// --- 5. unpriced is a real cost, never billable, never a zero -------------
console.log('5. Unpriced is never billable and never a named zero');
let unpricedSeen = 0;
for (const c of live) {
  for (const r of entryChargesFor(c).filter(isUnpriced)) {
    unpricedSeen++;
    if (isBillable(r)) fail(c.slug, `unpriced row "${r.label}" passes isBillable, so it would enter a total with no figure`);
    else ok();
    if (isNamedZero(r)) fail(c.slug, `unpriced row "${r.label}" passes isNamedZero, which would tell the reader a real cost is free`);
    else ok();
    if (!r.source) fail(c.slug, `unpriced row "${r.label}" has no source, so the reader is told a fee exists with nowhere to read it`);
    else ok();
    // The rail from MAIN: it must read as a real cost, not as a vague "fees may apply".
    if (!/not free|required and not free/i.test(String(r.value))) {
      fail(c.slug, `unpriced row "${r.label}" does not state plainly that the charge is real and not free`);
    } else ok();
  }
}
if (!unpricedSeen) fail('entry-charges.js', 'no unpriced rows resolve at all, so the kind renders nowhere');

// --- 6. no rename without a redirect --------------------------------------
console.log('6. Every renamed slug has a live 301');
const redirPath = 'public/_redirects';
if (!fs.existsSync(redirPath)) {
  fail(redirPath, 'missing. A rename without a redirect 404s a URL Google already indexed.');
} else {
  const lines = fs.readFileSync(redirPath, 'utf8')
    .split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'));
  for (const r of RENAMED) {
    for (const src of [r.from, r.from + '/']) {
      const hit = lines.find(l => l.split(/\s+/)[0] === src);
      if (!hit) { fail(redirPath, `no redirect for ${src}`); continue; }
      const parts = hit.split(/\s+/);
      if (parts[1] !== r.to) fail(redirPath, `${src} points at ${parts[1]}, expected ${r.to}`);
      else if (parts[2] !== '301') fail(redirPath, `${src} uses code ${parts[2] || '(none, defaults to 302)'}, expected 301`);
      else ok();
    }
    // The old page must actually be gone, and the new one must actually exist.
    if (fs.existsSync(`dist${r.from}/index.html`)) fail('dist', `${r.from} still builds, so the rename did not happen`);
    else ok();
    if (!fs.existsSync(`dist${r.to}/index.html`)) fail('dist', `${r.to} does not exist, so the redirect points at a 404`);
    else ok();
  }
}

// --- 7. no silent hole: every live country is explicitly handled ----------
// The first six assertions all start from something that already exists: an indexed label,
// an entry spoke, a renamed slug. A country nobody has touched offers none of those, so it
// is invisible to every one of them and the gate passes over it in silence. This assertion
// starts from the country list instead, which is the only way a hole shows up as a hole.
console.log('7. Every live country is explicitly handled (no silent holes)');
for (const c of live) {
  const classified = Boolean(entryCharges[c.slug]);
  const buckets = [
    classified && 'entryCharges',
    NO_CHARGE_PAGES.has(c.slug) && 'NO_CHARGE_PAGES',
    KEYFACTS_EXEMPT.has(c.slug) && 'KEYFACTS_EXEMPT',
    NO_CHARGE_COUNTRIES.has(c.slug) && 'NO_CHARGE_COUNTRIES',
  ].filter(Boolean);

  if (!buckets.length) {
    fail(c.slug, 'is not classified, not named no-charge and not exempt, so the gate cannot tell whether it is free or simply unchecked. Classify it or name it.');
    continue;
  }
  ok();

  // The rails that keep the fourth bucket meaning what it says.
  if (NO_CHARGE_COUNTRIES.has(c.slug)) {
    if (classified) {
      fail(c.slug, 'is named no-charge but also carries an entry-charges classification. It cannot be both; remove it from NO_CHARGE_COUNTRIES.');
    } else ok();
    if (NO_CHARGE_PAGES.has(c.slug)) {
      fail(c.slug, 'is in both NO_CHARGE_COUNTRIES and NO_CHARGE_PAGES. The first means no page exists, the second means one does.');
    } else ok();
    if (entrySpokes(c).length) {
      fail(c.slug, 'is in NO_CHARGE_COUNTRIES but now has an entry spoke. Move it to NO_CHARGE_PAGES.');
    } else ok();
  }
}

console.log(`\n  assertions passed: ${checks}`);
console.log(`\nRESULT: ${fails ? 'FAIL (' + fails + ')' : 'PASS'}`);
process.exit(fails ? 1 : 0);
