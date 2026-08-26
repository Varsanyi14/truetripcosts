#!/usr/bin/env node
// MUTATION TESTS for check-entry-costs.mjs, assertion 7. Run from the repo root:
//   node scripts/mutation-test-entry-costs.mjs
//
// Assertion 7 is the completeness rail: every live country sits in exactly one bucket, so
// the gate can tell "checked, nothing to pay" apart from "nobody looked." A gate that has
// never been seen to fail proves nothing, so each of assertion 7's four rails gets a real
// mutation here: break the thing the rail guards, prove the gate FAILS with that rail's own
// message; restore, prove the gate PASSES again.
//
// Pattern is lifted from mutation-test-medical-map.mjs: snapshot every file before touching
// it and restore in a finally block; abort loudly if the tree was not green to begin with;
// assert not just the exit code but that the failure text matches the specific rail, so a
// mutation cannot "pass" by tripping a different check; re-run the gate after every restore
// so a leaked mutation cannot survive the run.
//
// ANCHORS ARE DERIVED, NOT HARDCODED. The harness reads the four bucket Sets out of the gate
// source at runtime and picks its mutation targets from live membership, so a legitimate
// reshuffle of which country sits in which bucket can never strand these mutations pointing
// at a slug that has moved.

import fs from 'fs';
import { execFileSync } from 'child_process';

const GATE = 'scripts/check-entry-costs.mjs';
const GATE_SRC = fs.readFileSync(GATE, 'utf8');

// Pull a `new Set([... ])` member list out of the gate source by its const name.
function setMembers(name) {
  const m = GATE_SRC.match(new RegExp('const ' + name + ' = new Set\\(\\[([\\s\\S]*?)\\]\\)'));
  if (!m) { console.error(`ABORT: could not find ${name} in the gate source`); process.exit(2); }
  return [...m[1].matchAll(/'([^']+)'/g)].map(x => x[1]);
}
const NO_CHARGE_COUNTRIES = setMembers('NO_CHARGE_COUNTRIES');
const NO_CHARGE_PAGES = setMembers('NO_CHARGE_PAGES');
const CLASSIFIED = Object.keys(
  (await import('../src/data/entry-charges.js')).entryCharges
);

// Pick concrete, currently-valid mutation targets from live membership.
// A plain no-charge country (in NO_CHARGE_COUNTRIES, not also anything else) to REMOVE.
const soloNoCharge = NO_CHARGE_COUNTRIES.find(
  s => !NO_CHARGE_PAGES.includes(s) && !CLASSIFIED.includes(s)
);
// A classified country NOT already named no-charge, to wrongly ADD to NO_CHARGE_COUNTRIES.
const classifiedOutside = CLASSIFIED.find(s => !NO_CHARGE_COUNTRIES.includes(s));
// A no-charge PAGE not already in NO_CHARGE_COUNTRIES, to wrongly ADD (collision rail).
const pageOutside = NO_CHARGE_PAGES.find(s => !NO_CHARGE_COUNTRIES.includes(s));

if (!soloNoCharge || !classifiedOutside || !pageOutside) {
  console.error('ABORT: could not derive all mutation targets from current bucket membership');
  console.error({ soloNoCharge, classifiedOutside, pageOutside });
  process.exit(2);
}

const snapshots = new Map();
function snapshot(file) { if (!snapshots.has(file)) snapshots.set(file, fs.readFileSync(file, 'utf8')); }
function mutate(file, from, to) {
  snapshot(file);
  const raw = fs.readFileSync(file, 'utf8');
  const n = raw.split(from).length - 1;
  if (n !== 1) throw new Error(`mutation anchor not unique in ${file}: "${from.slice(0, 50)}..." occurs ${n} times`);
  fs.writeFileSync(file, raw.replace(from, to));
}
function restoreAll() {
  for (const [file, raw] of snapshots) fs.writeFileSync(file, raw);
  snapshots.clear();
}
function runGate() {
  try { return { pass: true, out: execFileSync('node', [GATE], { encoding: 'utf8' }) }; }
  catch (e) { return { pass: false, out: (e.stdout || '') + (e.stderr || '') }; }
}

const results = [];
function expectFail(name, needle, apply) {
  apply();
  const r = runGate();
  const hit = !r.pass && r.out.includes(needle);
  restoreAll();
  const back = runGate();
  results.push({
    name,
    ok: hit && back.pass,
    why: r.pass ? 'gate PASSED but should have failed'
      : hit ? 'gate FAILED on the expected rail'
      : 'gate failed, but not on the expected message (wrong rail tripped)',
    restored: back.pass,
  });
}

// Remove one slug from the NO_CHARGE_COUNTRIES Set line in the gate source.
function removeFromNoCharge(slug) {
  // members are on wrapped lines; the slug appears as 'slug' possibly with a trailing comma
  return () => {
    snapshot(GATE);
    const raw = fs.readFileSync(GATE, 'utf8');
    // Only touch the NO_CHARGE_COUNTRIES block to avoid hitting the same slug elsewhere.
    const blockRe = /(const NO_CHARGE_COUNTRIES = new Set\(\[)([\s\S]*?)(\]\))/;
    const m = raw.match(blockRe);
    if (!m) throw new Error('NO_CHARGE_COUNTRIES block not found');
    let body = m[2];
    const before = body;
    body = body.replace(new RegExp("\\s*'" + slug + "',?"), '');
    if (body === before) throw new Error(`slug ${slug} not found in NO_CHARGE_COUNTRIES to remove`);
    fs.writeFileSync(GATE, raw.replace(blockRe, m[1] + body + m[3]));
  };
}
// Add a slug as the first member of the NO_CHARGE_COUNTRIES Set.
function addToNoCharge(slug) {
  return () => {
    snapshot(GATE);
    const raw = fs.readFileSync(GATE, 'utf8');
    const anchor = 'const NO_CHARGE_COUNTRIES = new Set([';
    if (!raw.includes(anchor)) throw new Error('NO_CHARGE_COUNTRIES opener not found');
    fs.writeFileSync(GATE, raw.replace(anchor, anchor + `\n  '${slug}',`));
  };
}

try {
  const baseline = runGate();
  if (!baseline.pass) {
    console.error('ABORT: the entry-cost gate is not green before mutating. Fix it first.');
    console.error(baseline.out);
    process.exit(2);
  }

  // R1, silent-hole rail: drop a checked no-charge country and it becomes an unhandled hole.
  expectFail(`R1 silent hole (${soloNoCharge} unbucketed)`, 'Classify it or name it.',
    removeFromNoCharge(soloNoCharge));

  // R2, both-named-and-classified rail: a classified country also named no-charge.
  expectFail(`R2 classified + named (${classifiedOutside})`, 'remove it from NO_CHARGE_COUNTRIES.',
    addToNoCharge(classifiedOutside));

  // R3, mutually-exclusive-lists rail: a country in both no-charge Sets at once.
  expectFail(`R3 both no-charge lists (${pageOutside})`, 'in both NO_CHARGE_COUNTRIES and NO_CHARGE_PAGES.',
    addToNoCharge(pageOutside));

  // R4, grew-a-spoke rail: a no-charge country that in fact has an entry spoke must be
  // forced to move. pageOutside HAS an entry spoke (it is a NO_CHARGE_PAGES member), so
  // naming it no-charge trips both R3 and R4; we assert R4's message specifically here.
  expectFail(`R4 grew a spoke (${pageOutside})`, 'Move it to NO_CHARGE_PAGES.',
    addToNoCharge(pageOutside));

} finally {
  restoreAll();
}

const final = runGate();
console.log('== entry-cost gate (assertion 7): mutation tests ==');
for (const r of results) {
  const tag = r.ok ? 'OK  ' : 'BAD ';
  const restoreNote = r.restored ? '' : '; AND RESTORE DID NOT RETURN TO PASS';
  console.log(`  ${tag} ${r.name}: ${r.why}${restoreNote}`);
}
console.log(`  ${final.pass ? 'OK  ' : 'BAD '} final tree state: gate ${final.pass ? 'PASSES' : 'FAILS'} after all restores`);
const allOk = results.every(r => r.ok && r.restored) && final.pass;
console.log('\nRESULT:', allOk ? 'ALL MUTATIONS BEHAVED' : 'MUTATION FAILURE');
process.exit(allOk ? 0 : 1);
