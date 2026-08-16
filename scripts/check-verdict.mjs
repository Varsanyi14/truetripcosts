// Verdict card audit. Run from the repo root: node scripts/check-verdict.mjs
//
// The Verdict card never composes its own text. A row is a money-rules heading found by
// its own text, or a clause that must appear verbatim inside a hero fact's escape, or a
// glance pair read out of a named spoke. All three are pointers, and a pointer can rot.
// Reword an escape line, reorder a pocket, rewrite a glance value and the affected row
// silently disappears from the card, which is the safe failure but a silent one. This
// script makes it loud.
//
// It also prints the shape of every card, so a thin country is visible as a desk to-do
// rather than something you only notice by loading the page, and a closing section
// lists the spokes nobody has triaged yet and the triaged rows the cap left off.
//
// Exits 1 if any pointer no longer resolves.

import { countries } from '../src/data/index.js';
import { verdictFor, verdictAudit, spokeReport, MIN_FULL_ROWS, MAX_ROWS } from '../src/data/verdict.js';

const live = countries.filter(c => c.live);
const problems = verdictAudit(live);

console.log('== TTC verdict card audit ==\n');

const cards = live.map(c => ({ c, v: verdictFor(c) }));
const rich = cards.filter(x => x.v.source === 'money-rules');
const thin = cards.filter(x => x.v.source === 'hero-facts');
const spoked = cards.filter(x => x.v.source === 'spokes');
const bare = cards.filter(x => x.v.source === 'none');
const fed = cards.filter(x => x.v.sources.includes('spokes'));

console.log('1. Every live country renders a card');
const missing = cards.filter(x => !x.v);
console.log(missing.length ? `  FAIL  ${missing.length} produced no card` : `  ok    ${cards.length} of ${live.length} live countries render`);

console.log('\n2. Row counts');
console.log(`  ok    ${rich.length} cards lead on a money-rules pocket`);
console.log(`  ok    ${thin.length} cards lead on the hero fact`);
console.log(`  ${spoked.length ? 'note ' : 'ok   '} ${spoked.length} cards are spoke-fed only`);
console.log(`  ok    ${fed.length} cards carry at least one harvested spoke row`);
console.log(`  ${bare.length ? 'note ' : 'ok   '} ${bare.length} cards carry the note and the footer only`);

console.log('\n3. No card carries a row it cannot trace');
if (problems.length) {
  for (const p of problems) console.log(`  FAIL  ${p.slug.padEnd(20)} ${p.kind}: ${p.detail}`);
} else {
  console.log('  ok    every pocket heading was found, every clause is inside its escape,');
  console.log('        and every spoke row resolves to one live glance pair, key and value');
}

console.log('\n4. Every card that is short says so');
const wrong = cards.filter(x => (x.v.rows.length < MIN_FULL_ROWS) !== !!x.v.note);
console.log(wrong.length ? `  FAIL  ${wrong.map(x => x.c.slug).join(', ')}` : `  ok    the note row appears on exactly the cards under ${MIN_FULL_ROWS} rows`);

console.log('\n5. No card is longer than a card');
const over = cards.filter(x => x.v.rows.length > MAX_ROWS);
console.log(over.length ? `  FAIL  ${over.map(x => `${x.c.slug} (${x.v.rows.length})`).join(', ')}` : `  ok    every card is at or under the ${MAX_ROWS} row cap`);

console.log('\n6. Card shapes');
console.log('   p = money-rules pocket, h = hero fact escape, s = spoke glance\n');
const mark = { 'money-rules': 'p', 'hero-facts': 'h', spokes: 's' };
for (const { c, v } of cards) {
  const labels = v.rows.map(r => `${r.label}(${mark[r.source] || '?'})`).join(' / ') || '(no rows)';
  console.log(`  ${c.slug.padEnd(20)} ${String(v.rows.length).padStart(2)} rows  ${v.note ? 'note  ' : '      '}${labels}`);
}

// Not gates. A pets spoke has nothing card-shaped in it and never will, so an untriaged
// spoke is usually the right answer; this is here so a NEW wave of spokes is visible as
// a desk to-do rather than quietly leaving the cards where they were.
console.log('\n7. Spoke harvest coverage (notes, not failures)');
const report = spokeReport(live);
const untriaged = report.filter(r => r.untriaged.length);
const unused = report.filter(r => r.unused.length);
console.log(`  note  ${report.reduce((n, r) => n + r.untriaged.length, 0)} live spokes across ${untriaged.length} countries have no card row`);
for (const r of unused) {
  console.log(`  note  ${r.slug.padEnd(20)} triaged but not shown (cap or theme taken): ${r.unused.join(' | ')}`);
}
if (!unused.length) console.log('  ok    every triaged spoke row reaches its card');

const failed = problems.length > 0 || missing.length > 0 || wrong.length > 0 || over.length > 0;
console.log('\nRESULT:', failed ? 'FAIL' : 'PASS');
process.exit(failed ? 1 : 0);
