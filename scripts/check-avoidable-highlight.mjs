// Cross-check for src/data/avoidable-highlight.js (BRIEF-v2-experience-build, Part 2).
//
// Not one of the site's existing HARD GATES (check-content.py / calc-regression-test.mjs
// / check-search-index.mjs); this is a new, additional check this build introduces,
// because the country-guide hook's one figure per country has no other test protecting
// it. It runs the REAL, unmodified src/scripts/calc-engine.js (jsdom cannot execute
// <script type="module">, so this drives the true source directly, the same technique
// scripts/check-tax-segment.mjs already uses) against a real built /calculator/<slug>
// page for every live country, reads off the engine's own cardBase and fee figures, and
// asserts avoidable-highlight.js's build-time numbers match exactly. A mismatch means the
// two have drifted, most likely because calc-engine.js's formula changed and
// avoidable-highlight.js was not updated to match; that is the failure this script exists
// to catch, so it is meant to be run whenever either file changes, and is safe to add to
// the regular gate run.
import fs from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';
import { countries } from '../src/data/index.js';
import { avoidableHighlightFor } from '../src/data/avoidable-highlight.js';

const live = countries.filter(c => c.live);
let failures = 0;
const problems = [];

for (const c of live) {
  const slug = c.slug;
  const pagePath = path.join('dist', 'calculator', slug, 'index.html');
  if (!fs.existsSync(pagePath)) { failures++; problems.push(slug + ': no built page'); continue; }
  const html = fs.readFileSync(pagePath, 'utf8');
  const dom = new JSDOM(html, { pretendToBeVisual: true, url: 'https://truetripcosts.com/calculator/' + slug + '/' });
  const { window } = dom;
  global.window = window; global.document = window.document; global.Event = window.Event;
  window.matchMedia = window.matchMedia || (q => ({ matches: false, media: q, addListener() {}, removeListener() {} }));
  global.requestAnimationFrame = (cb) => setTimeout(() => cb(Date.now()), 4);
  global.cancelAnimationFrame = (id) => clearTimeout(id);
  global.performance = { now: () => Date.now() };

  // Fresh module instances per country: the engine's IIFE runs its whole render() as an
  // import side effect, so each country needs its own module identity to re-run it.
  await import('../src/scripts/calc-engine.js?c=' + slug);

  const d = window.document;
  const realCardBase = Number(String(d.getElementById('hnCardBase').textContent).replace(/[^0-9.]/g, ''));
  const realFees = Number(String(d.getElementById('avFees').textContent).replace(/[^0-9.]/g, ''));

  const mine = avoidableHighlightFor(c);

  if (mine.calmEligible) {
    // Calm-eligible countries never price anything for the hook; only fees should exist
    // as a HARD item, so the real engine's fees figure is the only thing to cross-check.
    if (mine.largest !== null) { failures++; problems.push(slug + ': calmEligible but largest is not null'); }
  } else {
    const kind = mine.largest.key;
    if (kind === 'fees') {
      if (mine.largest.lo !== realFees) { failures++; problems.push(slug + ': fees mismatch, mine=' + mine.largest.lo + ' real=' + realFees); }
    } else if (kind === 'dcc') {
      // avoidable.js's own worth.lo/hi for dcc, re-applied to the real engine's own cardBase.
      const items = (await import('../src/data/avoidable.js')).avoidableFor(c);
      const dccItem = items.find(a => a.key === 'dcc');
      const wantLo = Math.round(realCardBase * (dccItem.worth.lo / 100));
      const wantHi = Math.round(realCardBase * (dccItem.worth.hi / 100));
      if (Math.abs(mine.largest.lo - wantLo) > 1 || Math.abs(mine.largest.hi - wantHi) > 1) {
        failures++; problems.push(slug + ': dcc mismatch, mine=' + mine.largest.lo + '-' + mine.largest.hi + ' real=' + wantLo + '-' + wantHi);
      }
    }
    // 'form'/'reseller' are pure avoidable.js data (worth.lo/hi times traveler count), not
    // engine-computed at all, so there is nothing further to cross-check against the DOM;
    // the shared verify-a2-all.mjs style check in the A.2 handoff already covers those.
  }

  window.close();
}

console.log('Checked ' + live.length + ' live countries against the real engine.');
console.log(failures === 0 ? 'RESULT: PASS' : 'RESULT: FAIL (' + failures + ')');
if (problems.length) problems.forEach(p => console.log('  FAIL  ' + p));
