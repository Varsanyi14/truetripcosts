#!/usr/bin/env node
// Truth Check audit. Run from the repo root: node scripts/check-truth-checks.mjs
//
// The /truth-checks hub and its per-page callouts read from one hand-authored register,
// src/data/truth-checks.js. Five things about that layer can rot silently, and this script
// exists to make each of them loud, mirroring check-connectivity-verdicts.mjs.
//
// It deliberately does NOT check whether a `finding` is actually true, or actually traces
// to the source page's prose: that is a source-check a human does at review time (MAIN's
// job before Gary pushes), not something a script can verify. What it CAN enforce is shape,
// completeness and the one honesty invariant this layer promises never to lose quietly.
//
// Exits 1 on any hard failure.

import fs from 'node:fs';
import { countries } from '../src/data/index.js';
import { truthChecks, CONF_TITLE } from '../src/data/truth-checks.js';
import { rulesFor } from '../src/data/money-rules.js';

const hard = [];
const notes = [];
const CONF_LEVELS = new Set(['high', 'medium', 'low']);
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const countrySlugs = new Set(countries.map((c) => c.slug));

console.log('== truth check audit ==');
console.log(`   ${truthChecks.length} entries\n`);

// 1. Required, non-empty fields on every entry.
console.log('1. Every entry has the required fields, non-empty');
for (const t of truthChecks) {
  const missing = ['claim', 'finding', 'soWhat', 'confidence', 'checkedISO']
    .filter((k) => !t[k] || !String(t[k]).trim());
  if (!t.source || !t.source.href || !String(t.source.href).trim()) missing.push('source.href');
  if (!t.source || !t.source.label || !String(t.source.label).trim()) missing.push('source.label');
  if (missing.length) {
    hard.push(`${t.id || '(no id)'}: missing ${missing.join(', ')}`);
    console.log(`  FAIL  ${t.id || '(no id)'}: missing ${missing.join(', ')}`);
  }
}
if (!hard.length) console.log(`  ok    ${truthChecks.length} entries, all required fields present`);

// 2. Confidence is one of high|medium|low, and a `low` entry is a stop-and-flag, not a
//    hard failure, per the brief: "no low entry ships without a MAIN sign-off." The script
//    cannot verify a sign-off happened, so it surfaces every low entry loudly instead.
console.log('\n2. Confidence is a known level, and low entries are surfaced for sign-off');
const badConf = truthChecks.filter((t) => t.confidence && !CONF_LEVELS.has(t.confidence));
if (badConf.length) {
  hard.push(`unknown confidence level: ${badConf.map((t) => t.id + '=' + t.confidence).join(', ')}`);
  console.log(`  FAIL  unknown confidence level on ${badConf.map((t) => t.id).join(', ')}`);
} else {
  console.log('  ok    every entry uses high, medium or low');
}
const lowConf = truthChecks.filter((t) => t.confidence === 'low');
if (lowConf.length) {
  notes.push(`${lowConf.length} low-confidence entr${lowConf.length === 1 ? 'y' : 'ies'} shipped: ${lowConf.map((t) => t.id).join(', ')}. Confirm MAIN signed off before this goes live.`);
  console.log(`  note  low-confidence: ${lowConf.map((t) => t.id).join(', ')}, confirm a MAIN sign-off exists`);
} else {
  console.log('  ok    no low-confidence entries shipped');
}
// CONF_TITLE is the tooltip vocabulary the component and the index read; every level used
// needs a title or the UI silently shows nothing on hover.
const untitled = [...CONF_LEVELS].filter((l) => !CONF_TITLE[l]);
if (untitled.length) { hard.push(`CONF_TITLE missing an entry for: ${untitled.join(', ')}`); console.log(`  FAIL  CONF_TITLE missing: ${untitled.join(', ')}`); }

// 3. Every id is unique and matches the slug pattern.
console.log('\n3. Every id is unique and slug-shaped');
const ids = truthChecks.map((t) => t.id);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupes.length) { hard.push(`duplicate id(s): ${[...new Set(dupes)].join(', ')}`); console.log(`  FAIL  duplicate id(s): ${[...new Set(dupes)].join(', ')}`); }
const badSlug = truthChecks.filter((t) => t.id && !SLUG_RE.test(t.id));
if (badSlug.length) { hard.push(`id(s) not slug-shaped: ${badSlug.map((t) => t.id).join(', ')}`); console.log(`  FAIL  not slug-shaped: ${badSlug.map((t) => t.id).join(', ')}`); }
if (!dupes.length && !badSlug.length) console.log(`  ok    ${ids.length} unique, slug-shaped ids`);

// 4. source.href is a real internal path or an absolute https URL. No empty or placeholder
//    links, and no dead internal path: an internal href must resolve to a live spoke, a
//    live country guide, or a real standalone page on disk.
console.log('\n4. source.href is real: an absolute https URL, or a live internal path');
const liveSpokeHrefs = new Set();
const liveCountryHrefs = new Set();
for (const c of countries.filter((c) => c.live)) {
  liveCountryHrefs.add('/' + c.slug);
  for (const s of c.spokes || []) {
    if (s.live !== false) liveSpokeHrefs.add('/' + c.slug + '/' + s.slug);
  }
}
function internalHrefIsLive(href) {
  if (liveCountryHrefs.has(href) || liveSpokeHrefs.has(href)) return true;
  // The /{country}/rules money-rules pocket card is a dynamic route, gated on the country
  // being live AND carrying a rules card (see [slug]/rules.astro), so it never appears as a
  // literal file on disk. Resolve it against money-rules.js instead.
  const rulesMatch = /^\/([a-z0-9-]+)\/rules$/.exec(href);
  if (rulesMatch) {
    const c = countries.find((c) => c.slug === rulesMatch[1] && c.live);
    return !!(c && rulesFor(c.slug));
  }
  // Standalone .astro pages (hubs, tools): check the file exists on disk.
  const clean = href.replace(/^\/+/, '').replace(/\/+$/, '');
  return fs.existsSync('src/pages/' + clean + '.astro') || fs.existsSync('src/pages/' + clean + '/index.astro');
}
for (const t of truthChecks) {
  const href = t.source && t.source.href;
  if (!href) continue; // already flagged as missing above
  const isAbsolute = /^https:\/\//.test(href);
  const isInternal = href.startsWith('/');
  if (!isAbsolute && !isInternal) {
    hard.push(`${t.id}: source.href is neither an internal path nor an https URL: ${href}`);
    console.log(`  FAIL  ${t.id}: bad source.href "${href}"`);
    continue;
  }
  if (isInternal && !internalHrefIsLive(href)) {
    hard.push(`${t.id}: source.href "${href}" does not resolve to a live spoke, guide or page`);
    console.log(`  FAIL  ${t.id}: source.href "${href}" does not resolve`);
  }
}
if (!hard.some((h) => h.includes('source.href'))) console.log('  ok    every source.href resolves or is a real https URL');

// 5. scope is topic|country; a country entry must name a real, known country slug, and a
//    topic entry must not carry a country.
console.log('\n5. scope is valid, and country entries name a real country');
const SCOPES = new Set(['topic', 'country']);
for (const t of truthChecks) {
  if (!SCOPES.has(t.scope)) {
    hard.push(`${t.id}: unknown scope "${t.scope}"`);
    console.log(`  FAIL  ${t.id}: unknown scope "${t.scope}"`);
    continue;
  }
  if (t.scope === 'country') {
    if (!t.country || !countrySlugs.has(t.country)) {
      hard.push(`${t.id}: scope "country" but country "${t.country}" is not a known country slug`);
      console.log(`  FAIL  ${t.id}: country "${t.country}" is not a known slug`);
    }
  } else if (t.scope === 'topic' && t.country) {
    hard.push(`${t.id}: scope "topic" should carry country: null, found "${t.country}"`);
    console.log(`  FAIL  ${t.id}: topic-scope entry carries a country value`);
  }
}
if (!hard.some((h) => h.includes('scope'))) console.log('  ok    every scope is valid and every country-scope entry names a live country');

// 6. THE HONESTY INVARIANT. At least one shipped entry must run against the site's own
//    commercial interest, the same way connectivity-verdicts.js's product-tone check does.
//    Soft-coded as a named id rather than a heuristic over the copy, because the copy is
//    prose a later edit could reword without meaning to strip the invariant; requiring the
//    specific id keeps the check honest about what it is actually asserting.
console.log('\n6. The honesty invariant: at least one entry costs the site money');
const SPINE_ID = 'esim-usually-unnecessary';
const spineEntry = truthChecks.find((t) => t.id === SPINE_ID);
if (!spineEntry) {
  hard.push(`the honesty-spine entry "${SPINE_ID}" is missing entirely, so nothing here visibly costs the site a commission`);
  console.log(`  FAIL  "${SPINE_ID}" is missing`);
} else {
  console.log(`  ok    "${SPINE_ID}" ships and stands for the finding costing the eSIM business a sale`);
}

// 7. Every country-scope entry should have a live spoke of the matching topic to mount on,
//    the way truthCheckForSpoke() in the data file expects to find one. Reported, not a
//    hard failure: a mount can legitimately wait if the desk flagged it, but a silent miss
//    is worth seeing every run.
console.log('\n7. Country-scope entries have a live spoke of the matching topic to mount on (reported)');
for (const t of truthChecks.filter((t) => t.scope === 'country')) {
  const c = countries.find((c) => c.slug === t.country && c.live);
  const hasSpoke = c && (c.spokes || []).some((s) => s.topic === t.topic && s.live !== false);
  if (!hasSpoke) {
    notes.push(`${t.id}: no live "${t.topic}" spoke found on ${t.country} to mount on, check the country page manually`);
    console.log(`  note  ${t.id}: no live "${t.topic}" spoke on ${t.country}`);
  } else {
    console.log(`  ok    ${t.id} mounts on ${t.country}'s live "${t.topic}" spoke`);
  }
}

console.log('');
if (notes.length) { console.log(`${notes.length} note(s) for a human to read:`); for (const n of notes) console.log(`  - ${n}`); console.log(''); }
console.log('RESULT:', hard.length ? `FAIL (${hard.length})` : 'PASS');
process.exit(hard.length ? 1 : 0);
