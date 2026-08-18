#!/usr/bin/env node
// Carrier spine audit. Run from the repo root: node scripts/check-carrier-spine.mjs
//
// Every staying-connected spoke repeats the same US carrier figures: the day-pass rate,
// AT&T's fee cap, Verizon's lack of one, T-Mobile's allowance by tier, pay-per-use. At
// 40-plus spokes that is a couple of hundred hand-typed instances of the fastest-moving
// facts on the site, and the wave that created them turned up three separate cases of one
// of those facts drifting out of sync with nothing watching. src/data/carrier-spine.js is
// the single home for the figures. This script is the thing that watches.
//
// It does NOT assemble prose. Spoke copy stays hand-written, per the same rail that makes
// verdict.js trustworthy. This only compares what the spokes say against what the spine
// knows, and reports the difference.
//
// WHAT IT CHECKS
//   1. HARD: no retired figure appears in reader-facing prose. This is the mechanism that
//      would have caught both the "10 to 10 to 12" artifact and japan's pre-cap two-week
//      figure before they shipped.
//   2. HARD: the spine's own canonical strings are internally consistent (no empty or
//      duplicated entries), so a careless edit here cannot silently disable a check.
//   3. NOTE: any day-pass dollar figure in reader-facing prose that is not one of the
//      spine's canonical forms. A note rather than a failure because context is legitimate
//      in places: a spoke may quote a precise eligible-plan rate, or compare regions.
//   4. NOTE: spokes that state a day-pass figure but not the AT&T cap. Also a note, since
//      the bundled-country spokes (canada, mexico) legitimately frame it differently.
//   5. NOTE: the spine's own age against its reviewDays, which is tighter than the 180-day
//      general threshold in check-fact-staleness.mjs.
//   6. ALWAYS: prints the spine's `unverified` list, so open questions stay visible between
//      waves instead of being forgotten.
//
// SCOPE NOTE THAT MATTERS. Retired patterns are checked in reader-facing fields only:
// title, description, h1, lede, answer, sections and faqs. They are deliberately NOT
// checked inside sources.judgment, because that is where the desk documents what it got
// wrong, and quoting the retired figure there is the entire point of the paragraph.
//
// Exits 1 if any hard check fails. Notes never fail the build.

import { countries } from '../src/data/index.js';
import { carrierSpine } from '../src/data/carrier-spine.js';

// Tag stripping replaces each tag with a space, which leaves double spaces wherever a
// figure was bolded mid-sentence ("approaches <b>170</b>" -> "approaches  170"). Collapsing
// whitespace afterwards is load-bearing: without it, every retired pattern that spans a
// bold tag silently fails to match, which is the exact way a checker can pass while the
// thing it guards is broken. Found by deliberately reintroducing a retired figure and
// watching this script say ok.
const strip = (s) => String(s).replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

// Reader-facing prose only. sources.judgment is excluded on purpose, see the scope note.
function readerProse(spoke) {
  const out = [];
  for (const k of ['title', 'description', 'h1', 'lede', 'answer']) {
    if (spoke[k]) out.push(strip(spoke[k]));
  }
  for (const sec of spoke.sections || []) {
    if (sec.h) out.push(strip(sec.h));
    if (sec.key) for (const kk of ['fig', 'tag', 'text']) if (sec.key[kk]) out.push(strip(sec.key[kk]));
    for (const p of sec.p || []) out.push(strip(p));
  }
  for (const f of spoke.faqs || []) {
    if (f.q) out.push(strip(f.q));
    if (f.a) out.push(strip(f.a));
  }
  for (const g of spoke.glance || []) {
    if (g.k) out.push(strip(g.k));
    if (g.v) out.push(strip(g.v));
  }
  return out.join('\n');
}

const spokes = [];
for (const c of countries.filter((c) => c.live)) {
  for (const s of c.spokes || []) {
    if (s.topic === 'connectivity' && s.live !== false) spokes.push({ slug: c.slug, spoke: s });
  }
}

console.log('== carrier spine audit ==');
console.log(`   spine checked ${carrierSpine.checked} (${carrierSpine.checkedISO}), ${spokes.length} live connectivity spokes\n`);

const hard = [];
const notes = [];
const accepted = carrierSpine.accepted || [];
// A note the desk has already ruled on is not a note. It reports as accepted, with the
// reason, so the output stays worth reading. Matching is by slug plus a keyword from the
// recorded `what`, deliberately loose: if the prose changes enough that the match breaks,
// the case resurfaces as a fresh note, which is the safe direction.
const isAccepted = (slug, kind) => accepted.find((a) => a.slug === slug && a.what.includes(kind));

// 1. Retired figures must not reappear in reader-facing prose.
console.log('1. Retired figures stay retired');
for (const r of carrierSpine.retired) {
  const re = new RegExp(r.pattern, 'i');
  const guilty = spokes.filter(({ spoke }) => re.test(readerProse(spoke))).map((x) => x.slug);
  if (guilty.length) {
    hard.push(`retired figure "${r.pattern}" is back in reader-facing prose: ${guilty.join(', ')}`);
    console.log(`  FAIL  "${r.pattern}" in ${guilty.join(', ')}`);
    console.log(`        why it was retired: ${r.why}`);
  }
}
if (!hard.length) console.log(`  ok    none of the ${carrierSpine.retired.length} retired figures appears in any spoke`);

// 2. The spine cannot silently disable its own checks.
console.log('\n2. The spine itself is well formed');
const seen = new Set();
let spineBad = 0;
for (const f of carrierSpine.figures) {
  if (!f.canonical || !f.canonical.length || f.canonical.some((s) => !s || !s.trim())) {
    hard.push(`spine figure "${f.id}" has an empty canonical form`); spineBad++;
  }
  for (const s of f.canonical || []) {
    if (seen.has(s)) { notes.push(`canonical string "${s}" appears under more than one figure`); }
    seen.add(s);
  }
  if (!f.source) { notes.push(`spine figure "${f.id}" has no source url`); }
}
console.log(spineBad ? `  FAIL  ${spineBad} malformed figure(s)` : `  ok    ${carrierSpine.figures.length} figures, ${seen.size} canonical forms, all populated`);

// 3. Day-pass figures in prose must be forms the spine knows.
console.log('\n3. Day-pass figures match the spine');
const allowed = new Set(carrierSpine.figures.find((f) => f.id === 'day-pass').canonical);
const FIG_RE = /\b\d+(?: to \d+)? dollars a day\b|\$\d+(?: to \$\d+)? a day\b|\$\d+-\d+\/day/g;
const oddities = new Map();
for (const { slug, spoke } of spokes) {
  for (const m of readerProse(spoke).matchAll(FIG_RE)) {
    if (allowed.has(m[0])) continue;
    if (!oddities.has(m[0])) oddities.set(m[0], new Set());
    oddities.get(m[0]).add(slug);
  }
}
if (!oddities.size) console.log('  ok    every day-pass figure in prose is a canonical form');
else {
  for (const [fig, slugs] of [...oddities.entries()].sort((a, b) => b[1].size - a[1].size)) {
    const open = [...slugs].filter((s) => !isAccepted(s, 'bare'));
    for (const s of [...slugs].filter((s) => isAccepted(s, 'bare'))) {
      console.log(`  ok    "${fig}" in ${s}: accepted, ${isAccepted(s, 'bare').why}`);
    }
    if (!open.length) continue;
    notes.push(`day-pass figure "${fig}" is not a canonical form: ${open.join(', ')}`);
    console.log(`  note  "${fig}" in ${open.join(', ')}`);
  }
  console.log('        context can be legitimate (a precise eligible-plan rate, a regional comparison), so this is a read rather than a failure');
}

// 4. Cap coverage.
console.log('\n4. The AT&T cap travels with the day-pass figure');
const capRe = /caps? (?:its |the )?Day Pass|10 daily fees/i;
const statesFig = spokes.filter(({ spoke }) => FIG_RE.test(readerProse(spoke)) || /\$10 to \$12/.test(readerProse(spoke)));
const missingCap = statesFig.filter(({ spoke }) => !capRe.test(readerProse(spoke))).map((x) => x.slug);
console.log(`  ok    ${statesFig.length - missingCap.length} of ${statesFig.length} spokes stating a day-pass figure also state the cap`);
const capOpen = missingCap.filter((s) => !isAccepted(s, 'without the AT&T cap'));
for (const s of missingCap.filter((s) => isAccepted(s, 'without the AT&T cap'))) {
  console.log(`  ok    ${s}: accepted, ${isAccepted(s, 'without the AT&T cap').why}`);
}
if (capOpen.length) {
  notes.push(`spokes stating a day-pass figure without the AT&T cap: ${capOpen.join(', ')}`);
  console.log(`  note  without the cap: ${capOpen.join(', ')}`);
  console.log('        bundled-country spokes may frame it differently on purpose, so check before editing');
}

// 5. Spine age.
console.log('\n5. Spine freshness');
const age = Math.floor((Date.now() - Date.parse(carrierSpine.checkedISO)) / 86400000);
if (Number.isNaN(age)) { hard.push('spine checkedISO is not a parseable date'); console.log('  FAIL  checkedISO unparseable'); }
else if (age > carrierSpine.reviewDays) {
  notes.push(`spine last checked ${age} days ago, over its own ${carrierSpine.reviewDays}-day mark`);
  console.log(`  note  last checked ${age} days ago, over the ${carrierSpine.reviewDays}-day mark. Re-verify the carrier pages and update checkedISO`);
} else console.log(`  ok    last checked ${age} day(s) ago, inside the ${carrierSpine.reviewDays}-day mark`);

// 6. Open questions, surfaced every run.
console.log('\n6. Open questions on the spine (surfaced every run, not failures)');
if (!carrierSpine.unverified.length) console.log('  ok    none recorded');
else carrierSpine.unverified.forEach((u, i) => console.log(`  open  ${i + 1}. ${u}`));

console.log('');
if (notes.length) console.log(`${notes.length} note(s) for a human to read.`);
console.log('RESULT:', hard.length ? `FAIL (${hard.length})` : 'PASS');
process.exit(hard.length ? 1 : 0);
