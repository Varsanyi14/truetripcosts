#!/usr/bin/env node
// MUTATION TESTS for check-changelog.mjs. Run from the repo root, after a build:
//   npm run build && node scripts/mutation-test-changelog.mjs
//
// A gate that has never been seen to fail proves nothing, so each of the change-log
// gate's rails gets a real mutation: break the thing the check guards, prove the gate
// FAILS with that check's own prefix, restore, prove the gate PASSES again. The last
// run is directional the other way: filling the Buttondown placeholder must make the
// WARN disappear while the gate stays green, so the warning can never become a
// permanent noise floor people learn to ignore.
//
// BANKED LESSON, applied: mutations land where the gate actually scans. Data mutations
// are INSERTED entries (never edits of real entries, whose wording legitimately
// changes), and page mutations edit dist/what-changed/index.html directly, which is
// the surface the gate reads. Data mutations also knock the page out of sync with the
// data, so check 4 may fail alongside the intended check; the harness therefore
// asserts the intended prefix is PRESENT, not that it is alone.
//
// The harness edits real files, so it snapshots them first and restores in a finally
// block; it aborts loudly if the tree was not green to begin with, and it re-runs the
// gate after every restore so a leaked mutation cannot survive the run.

import fs from 'fs';
import { execFileSync } from 'child_process';

const GATE = 'scripts/check-changelog.mjs';
const DATA = 'src/data/changelog.js';
const PAGE = 'dist/what-changed/index.html';

function runGate() {
  try {
    const out = execFileSync('node', [GATE], { encoding: 'utf8' });
    return { pass: true, out };
  } catch (e) {
    return { pass: false, out: (e.stdout || '') + (e.stderr || '') };
  }
}

const snapshots = new Map();
function snap(file) { if (!snapshots.has(file)) snapshots.set(file, fs.readFileSync(file, 'utf8')); }
function restoreAll() { for (const [f, raw] of snapshots) fs.writeFileSync(f, raw); }

// Insert a mutant entry at the head of the array. The anchor is the export line itself,
// derived from the file, so a reordering of real entries can never strand this.
const ARRAY_OPEN = 'export const changelogEntries = [';
function insertEntry(entrySource) {
  snap(DATA);
  const raw = fs.readFileSync(DATA, 'utf8');
  if (!raw.includes(ARRAY_OPEN)) throw new Error('ABORT: changelogEntries array opener not found');
  fs.writeFileSync(DATA, raw.replace(ARRAY_OPEN, ARRAY_OPEN + '\n' + entrySource));
}
function editPage(from, to) {
  snap(PAGE);
  const raw = fs.readFileSync(PAGE, 'utf8');
  if (!raw.includes(from)) throw new Error(`ABORT: page anchor not found: ${from.slice(0, 60)}`);
  fs.writeFileSync(PAGE, raw.replace(from, to));
}

const WHOLE = (over = '') => `  { date: '2024-01-05', kind: 'change', title: 'Mutant entry', what: 'x', why: 'x', link: '/', linkLabel: 'Home'${over} },`;

let failures = 0;
function expect(name, mutate, wantPass, wantInOut, forbidInOut) {
  mutate();
  const r = runGate();
  const passOk = r.pass === wantPass;
  const hasWanted = !wantInOut || r.out.includes(wantInOut);
  const noForbidden = !forbidInOut || !r.out.includes(forbidInOut);
  if (passOk && hasWanted && noForbidden) {
    console.log(`ok   ${name}`);
  } else {
    failures++;
    console.error(`FAIL ${name}: pass=${r.pass} (wanted ${wantPass})` +
      (wantInOut && !hasWanted ? `, output missing "${wantInOut}"` : '') +
      (forbidInOut && !noForbidden ? `, output contains forbidden "${forbidInOut}"` : ''));
    console.error(r.out.split('\n').slice(0, 8).map(l => '  | ' + l).join('\n'));
  }
  restoreAll();
  const clean = runGate();
  if (!clean.pass) {
    console.error(`ABORT: gate not green after restoring ${name}. A mutation leaked.`);
    process.exit(2);
  }
}

// The tree must be green before any mutation means anything.
const baseline = runGate();
if (!baseline.pass) {
  console.error('ABORT: the gate is already failing on the clean tree. Fix that first.');
  console.error(baseline.out);
  process.exit(2);
}

try {
  // Check 1: an entry with an empty why is not whole.
  expect('check 1 fails on an empty why field',
    () => insertEntry(WHOLE(", why: ''").replace("why: 'x', ", '')),
    false, 'FAIL [1]');

  // Check 1: a duplicated date+title is caught.
  expect('check 1 fails on a duplicate entry',
    () => insertEntry(WHOLE() + '\n' + WHOLE()),
    false, 'FAIL [1]');

  // Check 2: a future date is not a change.
  expect('check 2 fails on a future date',
    () => insertEntry(WHOLE().replace("'2024-01-05'", "'2099-01-01'")),
    false, 'FAIL [2]');

  // Check 2: a fabricated calendar date is caught.
  expect('check 2 fails on an impossible date',
    () => insertEntry(WHOLE().replace("'2024-01-05'", "'2024-02-31'")),
    false, 'FAIL [2]');

  // Check 3: a link with no built page behind it is a dead link.
  expect('check 3 fails on a dead link',
    () => insertEntry(WHOLE().replace("link: '/'", "link: '/no-such-page-mutant'")),
    false, 'FAIL [3]');

  // Check 4: the rendered page drifting from the data is caught on the page itself.
  expect('check 4 fails when a rendered datetime is tampered',
    () => editPage('datetime="2026-08-17"', 'datetime="2026-08-16"'),
    false, 'FAIL [4]');

  // Check 5: a third-party script cannot ride along.
  expect('check 5 fails on a third-party script',
    () => editPage('</body>', '<script src="https://cdn.example.com/widget.js"></script></body>'),
    false, 'FAIL [5]');

  // Check 5: the form posting anywhere but Buttondown's embed endpoint fails.
  expect('check 5 fails when the form action leaves Buttondown',
    () => editPage('https://buttondown.com/api/emails/embed-subscribe/', 'https://example.com/api/emails/embed-subscribe/'),
    false, 'FAIL [5]');

  // Check 6, directional: filling the placeholder silences the WARN and stays green.
  expect('filling the placeholder removes the WARN and the gate stays green',
    () => {
      snap(PAGE);
      const raw = fs.readFileSync(PAGE, 'utf8');
      fs.writeFileSync(PAGE, raw.split('GARY-USERNAME').join('truetripcosts'));
    },
    true, 'ok   [6]', 'WARN');
} finally {
  restoreAll();
}

const final = runGate();
if (!final.pass) {
  console.error('ABORT: gate not green after the run. Restore failed.');
  process.exit(2);
}

console.log('');
if (failures > 0) {
  console.error(`mutation-test-changelog: ${failures} mutation(s) the gate did not catch as expected`);
  process.exit(1);
}
console.log('mutation-test-changelog: every mutation caught, every restore verified green');
