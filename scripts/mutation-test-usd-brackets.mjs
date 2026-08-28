// Mutation test for check-usd-brackets.mjs. Run: node scripts/mutation-test-usd-brackets.mjs
//
// A GATE THAT CANNOT FAIL IS DECORATION. check-usd-brackets went green on its
// first clean run, which is exactly when a gate deserves least trust: green can
// mean "nothing is wrong" or it can mean "this check does not look at anything".
// The only way to tell them apart is to break the thing on purpose and confirm
// the gate notices. One mutation per pass, so every pass is proven load bearing.
//
// WHY THIS FILE WAS REWRITTEN. The first version anchored two of its mutations on
// live NO_RATE entries for HUF and PLN. Those entries were correct while the
// fxFallback snapshot lacked those rates, and the moment the rates landed the
// entries were deleted, which is the gate working as designed. But it left this
// harness patching lines that no longer existed, so it threw instead of testing.
//
// The lesson, and the rule this version follows: A MUTATION MUST NOT DEPEND ON A
// DEFECT BEING PRESENT IN THE TREE. NO_RATE is meant to be empty. Anchoring on it
// meant the harness only worked while something was broken, so it rotted the
// instant the bug was fixed. Every case below now builds its own defect from a
// state we expect to be healthy, which is the only version that keeps working.
//
// THE FIVE DEFECTS, one per pass of the gate:
//
//   pass 0  the fast scanner drifting from real DOM semantics
//   pass 1  the detector's matcher going quiet while its guards still agree
//   pass 2  a local figure on a page with no rate it can reach
//   pass 3  an exemption outliving the reason for it
//   pass 5  a currency losing the vocabulary that names it in prose
//
// Every mutation is applied to a working copy, verified caught, and undone. The
// harness restores every file in a finally block and verifies the restore
// byte for byte, because a test that leaves a mutation behind is worse than no
// test: it silently poisons every run after it.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const GATE = 'scripts/check-usd-brackets.mjs';
const SCAN = 'scripts/lib/usd-scan.mjs';
const PROSE = 'src/data/usd-prose.js';
const FALLBACK = 'src/data/fxFallback.js';

const files = [GATE, SCAN, PROSE, FALLBACK];
const originals = new Map(files.map(f => [f, fs.readFileSync(f, 'utf8')]));

// A page that exists only for the duration of one mutation. Named with leading
// underscores so it sorts away from real routes and is obvious in a stray dist/.
const FIXTURE_DIR = path.join('dist', '__usdb-mutation-fixture__');
const FIXTURE = path.join(FIXTURE_DIR, 'index.html');

function runGate() {
  try {
    return { code: 0, out: execFileSync('node', [GATE], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }) };
  } catch (e) {
    return { code: e.status == null ? 1 : e.status, out: (e.stdout || '') + (e.stderr || '') };
  }
}

function patch(file, from, to) {
  const t = fs.readFileSync(file, 'utf8');
  if (t.indexOf(from) === -1) throw new Error(`mutation anchor not found in ${file}: ${from.slice(0, 80)}`);
  fs.writeFileSync(file, t.replace(from, to));
}

function restore() {
  for (const [f, t] of originals) fs.writeFileSync(f, t);
  fs.rmSync(FIXTURE_DIR, { recursive: true, force: true });
}

let fails = 0;
const check = (label, cond, detail) => {
  if (!cond) fails++;
  console.log(`  ${cond ? 'ok   ' : 'FAIL '} ${label}${detail ? '  ' + detail : ''}`);
};
const firstFail = out => (out.match(/ {2}FAIL {2}[^\n]*/) || [''])[0].trim().slice(6).trim().slice(0, 100);

console.log('== TTC usd-bracket gate mutation test ==\n');

try {
  // -------------------------------------------------------------------------
  console.log('0. The gate is green before anything is broken');
  const base = runGate();
  check('clean tree passes', base.code === 0, base.code === 0 ? '' : 'the gate is already failing, fix that first');
  if (base.code !== 0) console.log(base.out.split('\n').filter(l => /FAIL/.test(l)).slice(0, 6).join('\n'));

  // -------------------------------------------------------------------------
  // PASS 2, and the one that matters most: this is the defect that prompted the
  // whole gate. Hungary shipped "830 forint" on a page whose currency had no
  // rate anywhere, so no bracket could ever render and nothing went red.
  //
  // IT TAKES TWO EDITS, AND THAT IS THE INTERESTING PART. hasRate() consults two
  // sources in order: the data-usdp-fb marker baked into the built page, then the
  // fxFallback snapshot. Blanking the marker alone proves nothing, because the
  // snapshot answers instead. Removing the snapshot rate alone proves nothing
  // either, because every real page already has the rate baked into its marker
  // from the last build. A faithful "no reachable rate" needs both cut, which is
  // exactly the state Hungary was in. A synthetic page supplies the blank marker
  // without a rebuild, and the snapshot rate is removed alongside it.
  console.log('\n1. A local-currency figure with no rate it can reach is caught  (pass 2)');
  fs.mkdirSync(FIXTURE_DIR, { recursive: true });
  fs.writeFileSync(FIXTURE, [
    '<!DOCTYPE html>',
    '<html lang="en"><head><meta charset="utf-8"><title>usdb mutation fixture</title></head>',
    '<body><main>',
    '<p>The local fee is <b>830 francs</b> a night, and a longer stay runs 2 to 5 francs.</p>',
    '<p class="usdp" data-usdp data-usdp-cur="CHF" data-usdp-fb data-usdp-fbdate="15 Jul 2026" hidden></p>',
    '</main></body></html>', ''
  ].join('\n'));
  patch(FALLBACK, '    CHF: 0.8102,', '');
  let r = runGate();
  check('gate goes red when a page states CHF figures with no reachable rate', r.code !== 0);
  check('and it names the currency and the fix', /CHF: \d+ figure\(s\)/.test(r.out) && /fxFallback/.test(r.out), firstFail(r.out));
  restore();
  check('reverted, gate green again', runGate().code === 0);

  // -------------------------------------------------------------------------
  // PASS 1. Nothing in the first version of this harness exercised the coverage
  // diff, which was a real hole: the pass most people would assume is the heart
  // of the gate was the one pass never proven to fire.
  //
  // It is a narrow thing to mutate, because the gate deliberately SHARES the
  // detector's refusal guards (refusalReason) so the two cannot disagree about
  // what is convertible. Break a guard and both halves refuse the same figure,
  // the difference stays zero, and pass 1 correctly says nothing. So the mutation
  // has to break the detector's MATCHER while leaving its guards intact: the
  // symbol-before-number arm is disabled, so "CHF 3.50" and "NT$100" stop being
  // found while the naive recogniser still finds them and no guard objects.
  console.log('\n2. The detector\'s matcher going quiet while its guards agree is caught  (pass 1)');
  patch(PROSE, "    pre: new RegExp('(?:' + mark + ')\\\\s?('", "    pre: new RegExp('(?:' + mark + ')NEVERMATCH\\\\s?('");
  r = runGate();
  check('gate goes red when the symbol-before-number form stops matching', r.code !== 0);
  check('and pass 1 reports the figures it cannot account for', /walks past with no documented reason/.test(r.out), firstFail(r.out));
  restore();
  check('reverted, gate green again', runGate().code === 0);

  // -------------------------------------------------------------------------
  // PASS 3. An exemption that outlives its reason is how a gate stops enforcing
  // something without anyone deciding to stop. NO_RATE is empty in a healthy
  // tree, so the defect is built rather than borrowed: an entry is added for a
  // currency that demonstrably has a rate, which is what a stale entry looks like.
  console.log('\n3. An exemption that outlived its reason is caught  (pass 3)');
  patch(GATE, 'const NO_RATE = {};', "const NO_RATE = { CHF: 'stale entry injected by the mutation test' };");
  r = runGate();
  check('gate goes red when a currency is exempted but has a rate', r.code !== 0);
  check('and it tells you to delete the exemption', /delete the NO_RATE entry/.test(r.out), firstFail(r.out));
  restore();
  check('reverted, gate green again', runGate().code === 0);

  // -------------------------------------------------------------------------
  // PASS 5. The table-integrity pass, which exists because of this harness: the
  // equivalent mutation was NOT caught on the first run. The naive recogniser
  // reads its vocabulary out of usd-prose.js so the two cannot drift, which means
  // emptying the table blinds both at once and the coverage diff stays zero. A
  // shared table cannot audit itself by comparison, so pass 5 audits it by
  // structure. Note the defect is partial and therefore easy to miss by eye:
  // the ISO code still matches, so "CHF 3.50" would keep working while every
  // spelled "francs" on the site quietly stopped.
  console.log('\n4. A currency losing the vocabulary that names it in prose is caught  (pass 5)');
  patch(PROSE, "CHF: { words: ['franc', 'francs'], sym: [] }", 'CHF: { words: [], sym: [] }');
  r = runGate();
  check('gate goes red when CHF declares no way to name itself', r.code !== 0);
  check('and pass 5 is the one that reports it', /declares no word form and no symbol/.test(r.out), firstFail(r.out));
  restore();
  check('reverted, gate green again', runGate().code === 0);

  // -------------------------------------------------------------------------
  // PASS 0. The self-check on the fast HTML scanner. This is the mutation that
  // proves pass 0 is load bearing rather than ceremony: on the gate's very first
  // run the scanner was counting text inside a <template> on /cost-comparison
  // that the browser cannot see, because template children live in a separate
  // fragment and a TreeWalker never reaches them.
  console.log('\n5. The fast scanner drifting from real DOM semantics is caught  (pass 0)');
  patch(SCAN, "const INERT_TAGS = new Set(['template']);", 'const INERT_TAGS = new Set([]);');
  r = runGate();
  check('gate goes red when the scanner reads text the browser cannot see', r.code !== 0);
  check('and pass 0 is the one that reports it', /disagrees with jsdom/.test(r.out), firstFail(r.out));
  restore();
  check('reverted, gate green again', runGate().code === 0);

} finally {
  restore();
  const clean = files.every(f => fs.readFileSync(f, 'utf8') === originals.get(f));
  const noFixture = !fs.existsSync(FIXTURE_DIR);
  console.log(`\n  ${clean ? 'ok   ' : 'FAIL '} all mutated files restored byte for byte`);
  console.log(`  ${noFixture ? 'ok   ' : 'FAIL '} synthetic fixture removed from dist/`);
  if (!clean || !noFixture) fails++;
}

console.log(`\n${fails ? 'FAIL' : 'PASS'}  ${fails} failure(s)`);
process.exit(fails ? 1 : 0);
