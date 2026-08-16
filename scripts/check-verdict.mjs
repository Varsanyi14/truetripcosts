// Verdict card audit. Run from the repo root: node scripts/check-verdict.mjs
//
// The Verdict card never composes its own text: a row is either a money-rules heading
// read by index, or a clause that must appear verbatim inside a hero fact's escape.
// Both are pointers, and a pointer can rot. Reword an escape line or reorder a pocket
// and the affected row silently disappears from the card, which is the safe failure but
// a silent one. This script makes it loud.
//
// It also prints the shape of every card, so a thin country is visible as a desk to-do
// rather than something you only notice by loading the page.
//
// Exits 1 if any pointer no longer resolves.

import { countries } from '../src/data/index.js';
import { verdictFor, verdictAudit, MIN_FULL_ROWS } from '../src/data/verdict.js';

const live = countries.filter(c => c.live);
const problems = verdictAudit(live);

console.log('== TTC verdict card audit ==\n');

const cards = live.map(c => ({ c, v: verdictFor(c) }));
const rich = cards.filter(x => x.v.source === 'money-rules');
const thin = cards.filter(x => x.v.source === 'hero-facts');
const bare = cards.filter(x => x.v.source === 'none');

console.log('1. Every live country renders a card');
const missing = cards.filter(x => !x.v);
console.log(missing.length ? `  FAIL  ${missing.length} produced no card` : `  ok    ${cards.length} of ${live.length} live countries render`);

console.log('\n2. Row counts');
console.log(`  ok    ${rich.length} rich cards from money-rules pockets`);
console.log(`  ok    ${thin.length} cards degrade to the hero fact`);
console.log(`  ${bare.length ? 'note ' : 'ok   '} ${bare.length} cards carry the note and the footer only`);

console.log('\n3. No card carries a row it cannot trace');
if (problems.length) {
  for (const p of problems) console.log(`  FAIL  ${p.slug.padEnd(20)} ${p.kind}: ${p.detail}`);
} else {
  console.log('  ok    every pocket heading was found and every clause is inside its escape');
}

console.log('\n4. Every card that is short says so');
const wrong = cards.filter(x => {
  const shouldNote = x.v.source !== 'money-rules' || x.v.rows.length < MIN_FULL_ROWS;
  return shouldNote !== !!x.v.note;
});
console.log(wrong.length ? `  FAIL  ${wrong.map(x => x.c.slug).join(', ')}` : '  ok    the note row appears on exactly the cards that are short');

console.log('\n5. Card shapes');
for (const { c, v } of cards) {
  const labels = v.rows.map(r => r.label).join(' / ') || '(no rows)';
  console.log(`  ${c.slug.padEnd(20)} ${String(v.rows.length).padStart(2)} rows  ${v.note ? 'note  ' : '      '}${labels}`);
}

const failed = problems.length > 0 || missing.length > 0 || wrong.length > 0;
console.log('\nRESULT:', failed ? 'FAIL' : 'PASS');
process.exit(failed ? 1 : 0);
