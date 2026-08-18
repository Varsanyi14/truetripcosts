#!/usr/bin/env node
// Connectivity verdict audit. Run from the repo root: node scripts/check-connectivity-verdicts.mjs
//
// The /staying-connected/ hub puts a one-line verdict chip on each country, mapping the
// connectivity decision onto tiers the way rail-passes.js does for rail. Three things about
// that layer can rot silently, and this script exists to make each of them loud.
//
// 1. COMPLETENESS, both directions. Every country with a live staying-connected spoke must
//    be either tiered or explicitly listed as awaiting verification, and every tier or
//    pending entry must point at a country whose spoke is actually live. Without this, the
//    gate could be satisfied by forgetting a country, and a spoke could be retired while a
//    chip about it stayed on the hub.
//
// 2. NO CONTRADICTION WITH CAUTION. A spoke carrying caution: "high" is a coverage story,
//    not a price one, and must land in the `coverage` tier. namibia is the live test case.
//    This stops a "you will lose signal, plan offline" country being quietly recoloured as a
//    money verdict, which would misrepresent both the country and the scale.
//
// 3. THE PRODUCT COLOUR IS EXCLUSIVE TO `esim`. This is the honesty rail as a test. `esim`
//    is the only tier where the thing we earn a commission on is the honest answer, so it is
//    the only tier allowed to carry the product-wins swatch. The check runs twice over: once
//    on the `tone` field in the data, and once by parsing the chip CSS out of the hub page,
//    so a later edit cannot make the eSIM look like it wins more often than it does by
//    touching either layer alone.
//
// It deliberately does NOT check anything about parsing prose, because the tier is
// hand-authored and must stay that way. If you are ever tempted to infer a tier from the
// spokes' `Cheapest` glance row at build time, do not: that row exists in only about 43 of
// the 59 spokes and its values are free text, and a regex over it is the failure verdict.js
// documents.
//
// Exits 1 on any hard failure.

import fs from 'node:fs';
import { countries } from '../src/data/index.js';
import { TIERS, VERDICTS, PENDING_VERIFICATION, PRODUCT_TONE, FLAGGED_JUDGMENTS, tierOf }
  from '../src/data/connectivity-verdicts.js';

const HUB = 'src/pages/staying-connected.astro';
const hard = [];
const notes = [];

const live = new Map();
for (const c of countries.filter((c) => c.live)) {
  for (const s of c.spokes || []) {
    if (s.slug === 'staying-connected' && s.live !== false) live.set(c.slug, s);
  }
}

console.log('== connectivity verdict audit ==');
console.log(`   ${live.size} live connectivity spokes, ${Object.keys(VERDICTS).length} tiered, ${PENDING_VERIFICATION.length} awaiting verification\n`);

// 1. Completeness, both directions.
console.log('1. Every live spoke is tiered or explicitly pending');
const pending = new Set(PENDING_VERIFICATION);
const untracked = [...live.keys()].filter((s) => !VERDICTS[s] && !pending.has(s));
const orphanTier = Object.keys(VERDICTS).filter((s) => !live.has(s));
const orphanPending = PENDING_VERIFICATION.filter((s) => !live.has(s));
const both = Object.keys(VERDICTS).filter((s) => pending.has(s));
if (untracked.length) hard.push(`live spokes with neither a tier nor a pending entry: ${untracked.join(', ')}`);
if (orphanTier.length) hard.push(`tier assignments with no live spoke: ${orphanTier.join(', ')}`);
if (orphanPending.length) hard.push(`pending entries with no live spoke: ${orphanPending.join(', ')}`);
if (both.length) hard.push(`countries both tiered and pending, which is ambiguous: ${both.join(', ')}`);
if (!untracked.length && !orphanTier.length && !orphanPending.length && !both.length) {
  console.log(`  ok    ${live.size} spokes accounted for, no orphans in either direction`);
} else {
  for (const h of hard) console.log(`  FAIL  ${h}`);
}
const badTier = Object.entries(VERDICTS).filter(([, v]) => !tierOf(v.tier));
if (badTier.length) { hard.push(`unknown tier key: ${badTier.map(([s, v]) => s + '=' + v.tier).join(', ')}`); console.log(`  FAIL  unknown tier key on ${badTier.map(([s]) => s).join(', ')}`); }
const noWhy = Object.entries(VERDICTS).filter(([, v]) => !v.why || !v.why.trim());
if (noWhy.length) { hard.push(`tiered country with no reason line: ${noWhy.map(([s]) => s).join(', ')}`); console.log(`  FAIL  no reason line on ${noWhy.map(([s]) => s).join(', ')}`); }

// 2. High-caution spokes are coverage stories, not money verdicts.
console.log('\n2. A high-caution spoke cannot carry a money verdict');
const highCaution = [...live.entries()].filter(([, s]) => s.caution === 'high').map(([slug]) => slug);
const miscoloured = highCaution.filter((s) => VERDICTS[s] && VERDICTS[s].tier !== 'coverage');
if (miscoloured.length) {
  hard.push(`caution:"high" spokes tiered as a money verdict instead of coverage: ${miscoloured.map((s) => s + '=' + VERDICTS[s].tier).join(', ')}`);
  console.log(`  FAIL  ${miscoloured.map((s) => s + ' is ' + VERDICTS[s].tier + ', expected coverage').join('; ')}`);
} else {
  console.log(`  ok    ${highCaution.length} high-caution spoke(s) (${highCaution.join(', ') || 'none'}) tiered as coverage`);
}

// 3. The product colour belongs to `esim` alone, in the data and in the CSS.
console.log('\n3. The product-wins colour is exclusive to the esim tier');
const productTiers = TIERS.filter((t) => t.tone === PRODUCT_TONE).map((t) => t.key);
if (productTiers.length !== 1 || productTiers[0] !== 'esim') {
  hard.push(`tone "${PRODUCT_TONE}" must belong to esim alone, found: ${productTiers.join(', ') || 'none'}`);
  console.log(`  FAIL  data: tone "${PRODUCT_TONE}" on ${productTiers.join(', ') || 'nothing'}`);
} else {
  console.log('  ok    data: only the esim tier carries the product tone');
}
const missingTone = TIERS.filter((t) => !t.tone);
if (missingTone.length) { hard.push(`tiers with no tone: ${missingTone.map((t) => t.key).join(', ')}`); console.log(`  FAIL  tiers with no tone: ${missingTone.map((t) => t.key).join(', ')}`); }

// The CSS half. The product swatch is the one the rail hub uses for "pass usually wins";
// any tier whose chip rule reaches for it, other than esim, is a colour-rail breach.
const PRODUCT_SWATCH = /background:\s*var\(--green-bg\)/;
if (!fs.existsSync(HUB)) {
  notes.push(`hub page not found at ${HUB}, CSS half of the colour check skipped`);
  console.log(`  note  ${HUB} not found, CSS check skipped`);
} else {
  const css = fs.readFileSync(HUB, 'utf8');
  const offenders = [];
  for (const m of css.matchAll(/\.sc-([a-z-]+)\s*\{([^}]*)\}/g)) {
    const key = m[1];
    if (!TIERS.some((t) => t.key === key)) continue;
    if (PRODUCT_SWATCH.test(m[2]) && key !== 'esim') offenders.push(key);
  }
  const esimRule = [...css.matchAll(/\.sc-esim\s*\{([^}]*)\}/g)].map((m) => m[1]);
  if (offenders.length) {
    hard.push(`tiers other than esim using the product swatch in ${HUB}: ${offenders.join(', ')}`);
    console.log(`  FAIL  css: ${offenders.join(', ')} reach for the product swatch`);
  } else if (!esimRule.length || !PRODUCT_SWATCH.test(esimRule[0])) {
    hard.push(`the esim chip in ${HUB} no longer carries the product swatch, so nothing on the hub marks where the product wins`);
    console.log('  FAIL  css: .sc-esim no longer carries the product swatch');
  } else {
    console.log('  ok    css: the product swatch appears on .sc-esim and nowhere else');
  }
}

// 4. Shape of the answer, reported every run so a drift in the honest mix is visible.
console.log('\n4. The shape of the answer (reported, not asserted)');
const counts = new Map();
for (const [, v] of Object.entries(VERDICTS)) counts.set(v.tier, (counts.get(v.tier) || 0) + 1);
const total = Object.keys(VERDICTS).length;
for (const t of [...TIERS].sort((a, b) => b.rank - a.rank)) {
  const n = counts.get(t.key) || 0;
  if (!n) { console.log(`  dormant ${t.key}: defined, no country using it`); continue; }
  const mark = t.tone === PRODUCT_TONE ? 'product' : t.tone;
  console.log(`  ${String(n).padStart(3)}  ${t.key.padEnd(11)} ${String(Math.round((n / total) * 100) + '%').padStart(4)}  (${mark})`);
}
const notProduct = Object.values(VERDICTS).filter((v) => tierOf(v.tier)?.tone !== PRODUCT_TONE).length;
console.log(`\n  ${notProduct} of ${total} tiered countries have an honest answer that is not the product we earn on (${Math.round((notProduct / total) * 100)}%).`);

if (FLAGGED_JUDGMENTS.length) {
  console.log('\n5. Assignments the desk flagged rather than settled (surfaced every run)');
  for (const s of FLAGGED_JUDGMENTS) console.log(`  open  ${s}: currently ${VERDICTS[s] ? VERDICTS[s].tier : 'untiered'}`);
}
if (PENDING_VERIFICATION.length) {
  console.log(`\n6. Awaiting desk verification, no chip rendered: ${PENDING_VERIFICATION.length} countries`);
  console.log(`  open  ${PENDING_VERIFICATION.join(', ')}`);
}

console.log('');
if (notes.length) console.log(`${notes.length} note(s) for a human to read.`);
console.log('RESULT:', hard.length ? `FAIL (${hard.length})` : 'PASS');
process.exit(hard.length ? 1 : 0);
