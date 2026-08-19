// "On this page" jump-list gate. Run from the repo root, after a build:
//   npm run build && node scripts/check-jumplist.mjs
//
// The jump list at the top of every country guide is navigation over content that renders
// conditionally. That makes it the one component on the site that can lie by omission in
// both directions: point at a section this country does not have, or fail to mention one
// it does. Neither shows up in a build error, and neither shows up on the one country a
// person happens to open. So it is gated instead of remembered.
//
// The component derives the list from the same hoisted guards that wrap the sections
// (showCarRental, showTaxfree, showSeason, showCulture, showConnectivity, fxShowPanel),
// which is what makes the list a subset of what renders by construction. This script
// checks the built HTML anyway, because the guarantee is only as good as the pairing, and
// the pairing is what a future edit can break.
//
// It checks STRUCTURE on every built country page:
//
//   1. No dead anchor. Every href in the list resolves to an element with that id on the
//      same page. This is the core rail.
//   2. Visibility agrees. A link is hidden exactly when its target is hidden. The
//      exchange-rate panel ships `hidden` where no rate is baked, and a visible link to
//      a display:none section scrolls nowhere, which is a dead anchor wearing a disguise.
//   3. Completeness. Every id on the allow-list that renders on the page has an entry, so
//      a new section cannot be added to the guide and silently miss the list.
//   4. Nothing smuggled in. Ids that are deliberately NOT destinations (#notice, #calc,
//      #hn-app) never appear as entries.
//   5. Document order. The list runs in the order the sections appear, so it reads as a
//      map of the page rather than an arbitrary pile.
//   6. The jump offset. Every target carries scroll-margin-top:74px in the shipped CSS,
//      the same figure the rest of the site uses, so a jump lands with the heading clear
//      of the sticky nav.
//
// Exits 1 on any FAIL.

import fs from 'fs';
import { JSDOM } from 'jsdom';
import { countries } from '../src/data/index.js';

// The reader-facing destinations. An id on this list is one the jump list is responsible
// for: if it renders, it must be linked. Sections deliberately left off are listed below
// with the reason, so the next person can tell a decision from an oversight.
const JUMP_TARGETS = [
  'cards', 'cash', 'connectivity', 'insurance', 'car-rental', 'fx',
  'taxes-and-refunds', 'tipping', 'true-cost', 'when-to-go', 'culture',
];

// Present on the page, never a jump entry:
//   notice   - a banner, not a section a reader navigates to
//   calc     - a sub-anchor inside #true-cost; the section-level id is the honest target
//   hn-app   - the calculator's controls, same reason
const NOT_TARGETS = ['notice', 'calc', 'hn-app'];

const SCROLL_OFFSET = 74;

let fails = 0, checks = 0;
const fail = (slug, msg) => { fails++; console.log(`  FAIL  ${slug}: ${msg}`); };
const ok = () => { checks++; };

const slugs = countries.filter(c => c.live && !c.blocked).map(c => c.slug);
console.log('== "On this page" jump list ==\n');
console.log(`  auditing ${slugs.length} built country pages`);

// scroll-margin-top is declared once in the component's style block and applies to every
// page, so it is resolved from a single page and reported once rather than 59 times. The
// rule ships in a linked stylesheet, not inlined, and the minifier merges the separate
// declarations into one selector list, so this follows the <link> tags and reads the CSS
// the browser would actually apply.
function offsetTargets(html) {
  const found = new Set();
  const hrefs = [...html.matchAll(/<link\s+rel="stylesheet"\s+href="([^"]+)"/g)].map(m => m[1]);
  for (const href of hrefs) {
    const file = 'dist' + href;
    if (!fs.existsSync(file)) continue;
    const css = fs.readFileSync(file, 'utf8');
    for (const m of css.matchAll(/([^{}]+)\{([^}]*)\}/g)) {
      if (!new RegExp('scroll-margin-top:\\s*' + SCROLL_OFFSET + 'px').test(m[2])) continue;
      // Astro appends a scope id to every selector, so the id is followed by the
      // attribute suffix rather than sitting on its own.
      for (const s of m[1].matchAll(/#([a-z-]+)/g)) found.add(s[1]);
    }
  }
  return found;
}

let missingOffset = [];
let reported = false;

for (const slug of slugs) {
  const file = `dist/${slug}/index.html`;
  if (!fs.existsSync(file)) { fail(slug, `no built page at ${file}`); continue; }
  const html = fs.readFileSync(file, 'utf8');
  const doc = new JSDOM(html).window.document;

  if (!reported) {
    const withOffset = offsetTargets(html);
    missingOffset = JUMP_TARGETS.filter(id => !withOffset.has(id));
    reported = true;
  }

  const nav = doc.querySelector('nav.onpage');
  if (!nav) { fail(slug, 'no "On this page" list rendered'); continue; }

  const items = [...nav.querySelectorAll('li[data-jump]')];
  if (!items.length) { fail(slug, 'the list rendered with no entries'); continue; }

  const listed = items.map(li => li.getAttribute('data-jump'));

  // 1 + 2. Every link resolves, and agrees with its target about being visible.
  for (const li of items) {
    const id = li.getAttribute('data-jump');
    const a = li.querySelector('a');
    const href = a && a.getAttribute('href');
    if (href !== '#' + id) { fail(slug, `entry "${id}" links to ${href}, not #${id}`); continue; }
    const target = doc.getElementById(id);
    if (!target) { fail(slug, `DEAD ANCHOR: #${id} is linked but no element has that id`); continue; }
    if (li.hasAttribute('hidden') !== target.hasAttribute('hidden')) {
      fail(slug, `#${id}: link is ${li.hasAttribute('hidden') ? 'hidden' : 'visible'} but the section is ${target.hasAttribute('hidden') ? 'hidden' : 'visible'}`);
      continue;
    }
    ok();
  }

  // 3. Anything on the allow-list that rendered has to be in the list.
  for (const id of JUMP_TARGETS) {
    if (!doc.getElementById(id)) continue;
    if (!listed.includes(id)) { fail(slug, `#${id} renders on this page but has no jump-list entry`); continue; }
    ok();
  }

  // 4. Nothing that is not a destination.
  for (const id of NOT_TARGETS) {
    if (listed.includes(id)) { fail(slug, `#${id} is not a reader-facing destination and must not be listed`); continue; }
    ok();
  }

  // 5. The list follows the page.
  const pos = id => { const el = doc.getElementById(id); return el ? [...doc.querySelectorAll('*')].indexOf(el) : -1; };
  const order = listed.map(pos).filter(n => n >= 0);
  const sorted = [...order].sort((a, b) => a - b);
  if (String(order) !== String(sorted)) fail(slug, `the list is out of document order: ${listed.join(', ')}`);
  else ok();
}

// 6. The jump offset, declared once for every target.
console.log('\n  jump offset (scroll-margin-top:' + SCROLL_OFFSET + 'px)');
if (missingOffset.length) {
  fails++;
  console.log(`  FAIL  these targets have no ${SCROLL_OFFSET}px offset, so a jump lands under the sticky nav: ${missingOffset.join(', ')}`);
} else {
  console.log(`  ok    all ${JUMP_TARGETS.length} targets clear the sticky nav at ${SCROLL_OFFSET}px`);
}

// A short census, so a run says what the lists actually look like rather than only that
// they passed. If every country shows the same count, the derivation is not deriving.
const census = {};
for (const slug of slugs) {
  const file = `dist/${slug}/index.html`;
  if (!fs.existsSync(file)) continue;
  const doc = new JSDOM(fs.readFileSync(file, 'utf8')).window.document;
  const n = doc.querySelectorAll('nav.onpage li[data-jump]:not([hidden])').length;
  census[n] = (census[n] || 0) + 1;
}
console.log('\n  visible entries per page:',
  Object.keys(census).sort((a, b) => a - b).map(n => `${n} links on ${census[n]} countries`).join(', '));
console.log('  assertions passed:', checks);

console.log('\nRESULT:', fails ? 'FAIL' : 'PASS');
process.exit(fails ? 1 : 0);
