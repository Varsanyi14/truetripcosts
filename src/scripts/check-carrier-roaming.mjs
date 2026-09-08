#!/usr/bin/env node
// Carrier-roaming dataset gate. Run from the repo root: node scripts/check-carrier-roaming.mjs
//
// src/data/carrier-roaming.js holds whether the big-three US carriers (AT&T, T-Mobile,
// Verizon) include roaming in each country, extracted from the sourced roaming prose that
// already exists in each country's connectivity spoke. The honesty spine that makes this
// data safe to use later: every cell is sourced and dated, or it is explicitly 'unchecked'.
// There is no third state. This script is the thing that enforces that spine stays intact.
//
// WHAT IT CHECKS (all hard failures; this gate has no advisory notes)
//   1. Every cell's `status` is one of the four fixed vocabulary values.
//   2. Every non-'unchecked' cell has a non-empty, http(s) `source` URL AND a `checkedISO`.
//   3. Every live country slug (from src/data/index.js) has an entry in carrierRoaming, and
//      every entry has all three carriers (att, tmobile, verizon) as keys.
//   4. No cell with status included/paid-addon/not-included is missing a source (this
//      duplicates part of check 2 on purpose: it is the specific guard against a guessed
//      cell slipping in disguised as something else, called out separately per the brief).
//
// SCOPE NOTE. This gate does not verify that a source URL actually supports the claim in
// its `note` field. That verification is a human, MAIN-side step against each source before
// anything here ships; this script only guards the mechanical shape of the data (present,
// dated, using the fixed vocabulary) so a future edit cannot silently reintroduce a guess.
//
// Exits 1 if any check fails.

import { countries } from '../src/data/index.js';
import { carrierRoaming, CARRIERS } from '../src/data/carrier-roaming.js';

const STATUS_VALUES = new Set(['included', 'paid-addon', 'not-included', 'unchecked']);
const URL_RE = /^https?:\/\/\S+$/;

const fails = [];

console.log('== carrier-roaming dataset audit ==');
console.log(`   ${countries.filter((c) => c.live).length} live countries, ${Object.keys(carrierRoaming).length} entries in carrierRoaming\n`);

// 1 & 4. Every cell uses the fixed vocabulary; every non-unchecked cell traces to a source.
console.log('1. Status vocabulary and sourcing, cell by cell');
let cellsChecked = 0;
let cellsSourced = 0;
for (const [slug, byCarrier] of Object.entries(carrierRoaming)) {
  for (const carrier of CARRIERS) {
    const cell = byCarrier[carrier];
    cellsChecked++;
    if (!cell || typeof cell !== 'object') {
      fails.push(`${slug}.${carrier}: missing or malformed cell`);
      continue;
    }
    if (!STATUS_VALUES.has(cell.status)) {
      fails.push(`${slug}.${carrier}: status "${cell.status}" is not in the fixed vocabulary (included/paid-addon/not-included/unchecked)`);
      continue;
    }
    if (cell.status === 'unchecked') continue;
    cellsSourced++;
    // check 2 and check 4 (a guessed cell slipping in disguised as sourced) share the same test:
    // a populated status with no real source is exactly what both are guarding against.
    if (!cell.source || typeof cell.source !== 'string' || !URL_RE.test(cell.source.trim())) {
      fails.push(`${slug}.${carrier}: status "${cell.status}" has no real http(s) source URL`);
    }
    if (!cell.checkedISO || Number.isNaN(Date.parse(cell.checkedISO))) {
      fails.push(`${slug}.${carrier}: status "${cell.status}" has no parseable checkedISO`);
    }
  }
}
if (!fails.length) {
  console.log(`  ok    ${cellsChecked} cells checked, ${cellsSourced} sourced (included/paid-addon/not-included), ${cellsChecked - cellsSourced} unchecked, all well formed`);
} else {
  for (const f of fails) console.log(`  FAIL  ${f}`);
}

// 3. Every live country has an entry, and every entry has all three carriers.
console.log('\n2. Coverage: every live country has an entry with all three carriers');
const liveSlugs = countries.filter((c) => c.live).map((c) => c.slug);
const missingCountry = liveSlugs.filter((slug) => !carrierRoaming[slug]);
if (missingCountry.length) {
  fails.push(`${missingCountry.length} live countr${missingCountry.length === 1 ? 'y' : 'ies'} missing from carrierRoaming: ${missingCountry.join(', ')}`);
  console.log(`  FAIL  missing: ${missingCountry.join(', ')}`);
} else {
  console.log(`  ok    all ${liveSlugs.length} live countries have an entry`);
}

const incompleteCarriers = Object.entries(carrierRoaming)
  .filter(([, byCarrier]) => CARRIERS.some((c) => !(c in byCarrier)))
  .map(([slug]) => slug);
if (incompleteCarriers.length) {
  fails.push(`entries missing one or more carrier keys: ${incompleteCarriers.join(', ')}`);
  console.log(`  FAIL  incomplete carrier set: ${incompleteCarriers.join(', ')}`);
} else {
  console.log(`  ok    every entry carries all three carriers (${CARRIERS.join(', ')})`);
}

// Extra entries present in the dataset but not (or no longer) a live country are a note
// rather than a failure elsewhere in this codebase's gates, but this gate has none, so it
// is surfaced here as informational only and never affects the exit code.
const extraSlugs = Object.keys(carrierRoaming).filter((slug) => !liveSlugs.includes(slug));
if (extraSlugs.length) {
  console.log(`\n  (info) entries present for non-live or unrecognized slugs, not checked against src/data/index.js: ${extraSlugs.join(', ')}`);
}

console.log('');
console.log('RESULT:', fails.length ? `FAIL (${fails.length})` : 'PASS');
process.exit(fails.length ? 1 : 0);
