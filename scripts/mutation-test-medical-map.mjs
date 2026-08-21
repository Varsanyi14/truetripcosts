#!/usr/bin/env node
// MUTATION TESTS for check-medical-map.mjs. Run from the repo root:
//   node scripts/mutation-test-medical-map.mjs
//
// A gate that has never been seen to fail proves nothing, so each of the map gate's five
// checks gets a real mutation here: flip the thing the check guards, prove the gate FAILS
// with that check's own prefix; restore, prove the gate PASSES again. Check 3 gets three
// runs, because its promise is directional: quote drifting alone fails, prose drifting
// alone fails, and moving both together (a genuine re-verification) passes.
//
// BANKED LESSON, applied: mutations are planted where the gate actually scans. The prose
// mutations land inside the medical-costs SPOKE (mexico's lede), never in a country-level
// field the scanner does not read, and the harness asserts not just exit codes but that
// the failure carries the expected check prefix, so a mutation cannot "pass" by tripping
// the wrong check.
//
// The harness edits real files, so it snapshots them first and restores in a finally
// block; it aborts loudly if the tree was not green to begin with, and it re-runs the
// gate after every restore so a leaked mutation cannot survive the run.

import fs from 'fs';
import { execFileSync } from 'child_process';

const GATE = 'scripts/check-medical-map.mjs';
const MEXICO = 'src/data/mexico.js';
const MAP = 'src/data/medical-map.js';

// ANCHORS ARE DERIVED, NOT HARDCODED. The harness reads mexico.js and locates the
// exposureQuote field and its prose copy at runtime, so a legitimate rewrite of the
// Mexico page (the quote and its sentence moving together) can never strand these
// mutations pointing at text that no longer exists.
const mexicoRaw = fs.readFileSync(MEXICO, 'utf8');
const quoteMatch = mexicoRaw.match(/exposureQuote: "([^"]+)",/);
if (!quoteMatch) { console.error('ABORT: no exposureQuote found in mexico.js'); process.exit(2); }
const QUOTE_TEXT = quoteMatch[1];
const QUOTE_LINE = quoteMatch[0];
if (mexicoRaw.split(QUOTE_TEXT).length - 1 < 2) {
  console.error('ABORT: the exposureQuote text has no prose copy in mexico.js, the map gate should already be failing');
  process.exit(2);
}
// The prose copy is any occurrence of the quote text outside the field line itself; the
// mutations below target it by first masking the field line.
// The altered text swaps the quote's last word, so neither string is a substring of the
// other even after the gate's whitespace-collapsing strip; a superstring mutation would
// be silently absolved by substring matching, which an earlier run of this harness proved.
const ALTERED_TEXT = QUOTE_TEXT.split(' ').slice(0, -1).join(' ') + ' reasonable';
const PRICED_TEXT = 'routine care in Mexico runs about 45 pesos at the consultorio';
function mutateQuoteField(to) { mutate(MEXICO, QUOTE_LINE, `exposureQuote: "${to}",`); }
function mutateProseCopy(to) {
  // replace the quote text everywhere EXCEPT the field line: mask the field, replace, unmask
  const MASK = '@@FIELD_LINE_MASK@@';
  const raw0 = fs.readFileSync(MEXICO, 'utf8');
  if (!snapshots.has(MEXICO)) snapshots.set(MEXICO, raw0);
  const current = fs.readFileSync(MEXICO, 'utf8');
  const masked = current.replace(quoteMatch[0], MASK);
  if (!masked.includes(QUOTE_TEXT)) throw new Error('prose copy of the quote not found to mutate');
  fs.writeFileSync(MEXICO, masked.split(QUOTE_TEXT).join(to).replace(MASK, quoteMatch[0]));
}

function runGate() {
  try {
    const out = execFileSync('node', [GATE], { encoding: 'utf8' });
    return { pass: true, out };
  } catch (e) {
    return { pass: false, out: (e.stdout || '') + (e.stderr || '') };
  }
}

const snapshots = new Map();
function mutate(file, from, to) {
  if (!snapshots.has(file)) snapshots.set(file, fs.readFileSync(file, 'utf8'));
  const raw = fs.readFileSync(file, 'utf8');
  const n = raw.split(from).length - 1;
  if (n !== 1) throw new Error(`mutation anchor not unique in ${file}: "${from.slice(0, 60)}..." occurs ${n} times`);
  fs.writeFileSync(file, raw.replace(from, to));
}
function restoreAll() {
  for (const [file, raw] of snapshots) fs.writeFileSync(file, raw);
  snapshots.clear();
}

const results = [];
function expectAfterMutation(name, expectPass, expectPrefix, apply) {
  apply();
  const r = runGate();
  let ok, why;
  if (expectPass) {
    ok = r.pass;
    why = ok ? 'gate PASSED as expected' : 'gate FAILED but should have passed';
  } else {
    const prefixed = r.out.split('\n').some(l => l.trim().startsWith(expectPrefix));
    ok = !r.pass && prefixed;
    why = r.pass ? 'gate PASSED but should have failed'
      : prefixed ? `gate FAILED on ${expectPrefix} as expected`
      : `gate failed, but not on ${expectPrefix} (wrong check tripped)`;
  }
  restoreAll();
  const back = runGate();
  const restored = back.pass;
  results.push({ name, ok: ok && restored, why: restored ? why : why + '; AND RESTORE DID NOT RETURN TO PASS' });
}

try {
  const baseline = runGate();
  if (!baseline.pass) {
    console.error('ABORT: the tree is not green before mutating. Fix the gate failures first.');
    console.error(baseline.out);
    process.exit(2);
  }

  // M1, check 1: a category typo must fail loudly, never uncolour silently.
  expectAfterMutation('M1 category typo (check 1)', false, '1 SPOKE', () =>
    mutate(MEXICO, 'exposureCategory: "routineAffordable",', 'exposureCategory: "routineAffordible",'));

  // M2, check 2: a category fill set to the not-yet-checked grey.
  expectAfterMutation('M2 category fill = grey (check 2)', false, '2 FILL', () =>
    mutate(MAP, "fill: '#0A5644',", "fill: '#E7E4DC',"));

  // M3a, check 3: the quote drifts alone.
  expectAfterMutation('M3a quote drifts alone (check 3)', false, '3 QUOTE', () =>
    mutateQuoteField(ALTERED_TEXT));

  // M3b, check 3: the prose drifts alone, planted in the spoke's own prose copy.
  expectAfterMutation('M3b prose drifts alone (check 3)', false, '3 QUOTE', () =>
    mutateProseCopy(ALTERED_TEXT));

  // M3c, check 3: both move together, a genuine re-verification. Must PASS.
  expectAfterMutation('M3c quote and prose move together (check 3)', true, null, () => {
    mutateQuoteField(ALTERED_TEXT);
    mutateProseCopy(ALTERED_TEXT);
  });

  // M4, check 4: a figure rides into the quote. Planted in BOTH the quote and the prose so
  // check 3 stays green and check 4 is isolated as the thing that catches it.
  expectAfterMutation('M4 figure inside the quote (check 4)', false, '4 NOPRICE', () => {
    mutateQuoteField(PRICED_TEXT);
    mutateProseCopy(PRICED_TEXT);
  });

  // M5, check 5: deriveEntries() silently drops a country. The independent recomputation
  // must catch the helper lying to the component.
  expectAfterMutation('M5 deriveEntries drops a country (check 5)', false, '5 DERIVE', () =>
    mutate(MAP, '.filter(e => e.iso);', ".filter(e => e.iso && e.slug !== 'mexico');"));

} finally {
  restoreAll();
}

const final = runGate();
console.log('== medical map gate: mutation tests ==');
for (const r of results) console.log(`  ${r.ok ? 'OK  ' : 'BAD '} ${r.name}: ${r.why}`);
console.log(`  ${final.pass ? 'OK  ' : 'BAD '} final tree state: gate ${final.pass ? 'PASSES' : 'FAILS'} after all restores`);
const allOk = results.every(r => r.ok) && final.pass;
console.log('\nRESULT:', allOk ? 'ALL MUTATIONS BEHAVED' : 'MUTATION FAILURE');
process.exit(allOk ? 0 : 1);
