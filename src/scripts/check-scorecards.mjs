#!/usr/bin/env node
// Money Scorecard audit. Run from the repo root: node scripts/check-scorecards.mjs
//
// The per-country money scorecard (src/data/scorecards.js, rendered by
// src/components/Scorecard.astro) promises one hard rule above all others: no numeric
// score, no invented tier, ever. This gate cannot verify a rating is TRUE (that is
// MAIN's job, checking each tier's cited source against the guide before Gary pushes),
// but it can catch the four ways this layer could quietly drift from its own vocabulary,
// mirroring check-truth-checks.mjs.
//
// Exits 1 on any hard failure.

import { countries } from '../src/data/index.js';
import { scorecards, TIER_VOCAB, VERDICT_META, computeVerdict } from '../src/data/scorecards.js';

const hard = [];
const notes = [];
const countrySlugs = new Set(countries.map((c) => c.slug));
const entries = Object.entries(scorecards);

console.log('== money scorecard audit ==');
console.log(`   ${entries.length} entries\n`);

// 1. Every dimension value is either null or a member of its fixed vocabulary. No
//    invented labels, ever, per the brief's ONE HARD RULE.
console.log('1. Every dimension uses only the fixed vocabulary, or null');
const DIMS = ['ease', 'cash', 'cost', 'around', 'currency'];
let badVocab = 0;
for (const [slug, sc] of entries) {
  for (const dim of DIMS) {
    const v = sc[dim];
    if (v !== null && v !== undefined && !TIER_VOCAB[dim].includes(v)) {
      hard.push(`${slug}.${dim} = "${v}" is not in the fixed vocabulary [${TIER_VOCAB[dim].join(', ')}] and is not null`);
      console.log(`  FAIL  ${slug}.${dim} = "${v}" is not a valid ${dim} tier`);
      badVocab++;
    }
  }
}
if (!badVocab) console.log(`  ok    every dimension on every entry is valid vocabulary or null`);

// 2. Every verdict is one of the fixed keys or null, AND matches what the ease+cash rule
//    would itself produce, which catches a hand-edited verdict that contradicts its own
//    tiers (the exact failure mode the brief calls out by name).
console.log('\n2. Every verdict is a known key or null, and matches its own ease+cash rule');
const VERDICT_KEYS = new Set(Object.keys(VERDICT_META));
let badVerdict = 0;
for (const [slug, sc] of entries) {
  if (sc.verdict !== null && sc.verdict !== undefined && !VERDICT_KEYS.has(sc.verdict)) {
    hard.push(`${slug}.verdict = "${sc.verdict}" is not a known verdict key`);
    console.log(`  FAIL  ${slug}.verdict = "${sc.verdict}" is not one of [${[...VERDICT_KEYS].join(', ')}]`);
    badVerdict++;
    continue;
  }
  const expected = computeVerdict(sc.ease, sc.cash);
  const stored = sc.verdict === undefined ? null : sc.verdict;
  if (stored !== expected) {
    hard.push(`${slug}.verdict = ${JSON.stringify(stored)} but ease="${sc.ease}" + cash="${sc.cash}" computes to ${JSON.stringify(expected)}`);
    console.log(`  FAIL  ${slug}: stored verdict ${JSON.stringify(stored)} does not match computed ${JSON.stringify(expected)}`);
    badVerdict++;
  }
}
if (!badVerdict) console.log(`  ok    every verdict is valid and matches its own tiers`);

// 3. No numeric values anywhere in a rating. Guards against a stray score (a "82", an
//    "8/10", a stars count) creeping into a dimension, a verdict, or a currencyNote.
console.log('\n3. No numeric rating anywhere (no score, ever)');
let badNumeric = 0;
const RATED_KEYS = [...DIMS, 'verdict', 'currencyNote'];
for (const [slug, sc] of entries) {
  for (const key of RATED_KEYS) {
    const v = sc[key];
    if (typeof v === 'number') {
      hard.push(`${slug}.${key} is a number (${v}); ratings must be categorical, never numeric`);
      console.log(`  FAIL  ${slug}.${key} is a number: ${v}`);
      badNumeric++;
    }
    if (typeof v === 'string' && /\d/.test(v)) {
      hard.push(`${slug}.${key} = "${v}" contains a digit, which reads as a score`);
      console.log(`  FAIL  ${slug}.${key} = "${v}" contains a digit`);
      badNumeric++;
    }
  }
}
if (!badNumeric) console.log(`  ok    no numeric or digit-bearing rating found on any entry`);

// 4. Every country in scorecards.js maps to a real, known country slug.
console.log('\n4. Every scorecard key is a real country slug');
let badSlug = 0;
for (const slug of Object.keys(scorecards)) {
  if (!countrySlugs.has(slug)) {
    hard.push(`scorecards key "${slug}" is not a known country slug`);
    console.log(`  FAIL  "${slug}" is not a known country slug`);
    badSlug++;
  }
}
if (!badSlug) console.log(`  ok    every scorecard key maps to a live country`);

// 5. Reported, not a hard failure: any live, unblocked country with NO scorecards.js
//    entry renders no card at all (correct, additive-only behavior per Part 3 of the
//    brief), but it is worth surfacing so a human notices coverage gaps as the country
//    list grows.
console.log('\n5. Coverage (reported): live countries with no scorecard entry');
const uncovered = countries.filter((c) => c.live && !c.blocked && !scorecards[c.slug]);
if (uncovered.length) {
  notes.push(`${uncovered.length} live countr${uncovered.length === 1 ? 'y has' : 'ies have'} no scorecard entry: ${uncovered.map((c) => c.slug).join(', ')}`);
  console.log(`  note  no entry for: ${uncovered.map((c) => c.slug).join(', ')}`);
} else {
  console.log('  ok    every live, unblocked country has a scorecard entry');
}

console.log('');
if (notes.length) { console.log(`${notes.length} note(s) for a human to read:`); for (const n of notes) console.log(`  - ${n}`); console.log(''); }
console.log('RESULT:', hard.length ? `FAIL (${hard.length})` : 'PASS');
process.exit(hard.length ? 1 : 0);
