// Search index gate. Run from the repo root, alongside the other checkers:
//
//   node scripts/check-search-index.mjs
//
// An index can rot in silence: a page gets renamed, a spoke is retired, a wave of new
// spokes lands, and the search either points a reader at a 404 or quietly stops finding
// half the site. Nothing about that shows up on screen. So this asserts the three things
// the brief asks for, in both directions, and then checks the box that actually ships.
//
//   1. Every indexed URL has a real page behind it: live in the data, or a real .astro
//      file, and a built HTML file in dist when the site has been built.
//   2. Every live country, live spoke, money rules card and registered page is present.
//      A new spoke wave is findable without anyone editing search by hand.
//   3. The shipped index is what a fresh read of the data produces, byte for byte. If it
//      has drifted, it is stale, and that is a failure rather than a warning.
//
// It also checks that every .astro page is classified either indexed or deliberately
// excluded, and it drives the real search box in jsdom to confirm the links it renders
// come from the index and nowhere else.

import fs from 'fs';
import path from 'path';
import { countries } from '../src/data/index.js';
import { rulesFor } from '../src/data/money-rules.js';
import { INDEXED_PAGES, EXCLUDED_PAGES, PAGES_DIR } from '../src/data/search-pages.js';
import { buildSearchIndex, indexCounts, START_HERE } from '../src/data/search-index.js';
import { countryUrl, spokeUrl, rulesCardUrl, pageUrlFromFile, distPathForUrl } from '../src/data/site-urls.js';

let fails = 0;
let skips = 0;
const check = (label, ok, detail) => {
  if (!ok) fails++;
  console.log(`  ${ok ? 'ok   ' : 'FAIL '} ${label}${detail ? '  ' + detail : ''}`);
};
const skip = (label, why) => {
  skips++;
  console.log(`  skip  ${label}  ${why}`);
};

const hasDist = fs.existsSync('dist');
const shippedPath = 'dist/search-index.json';

console.log('== Search index ==\n');
console.log(`  dist: ${hasDist ? 'present' : 'not built, page-level checks will be skipped'}\n`);

// ---------------------------------------------------------------------------
console.log('1. Every .astro page is classified, indexed or deliberately excluded');

function astroFiles(dir, prefix = '') {
  const out = [];
  for (const entry of fs.readdirSync(path.join(PAGES_DIR, dir), { withFileTypes: true })) {
    const rel = prefix + entry.name;
    if (entry.isDirectory()) out.push(...astroFiles(path.join(dir, entry.name), rel + '/'));
    else if (entry.name.endsWith('.astro')) out.push(rel);
  }
  return out;
}

const onDisk = astroFiles('.').map(f => f.replace(/^\.\//, ''));
const indexedFiles = INDEXED_PAGES.map(p => p.file);
const excludedFiles = EXCLUDED_PAGES.map(p => p.file);
const classified = new Set([...indexedFiles, ...excludedFiles]);

const unclassified = onDisk.filter(f => !classified.has(f));
check(`all ${onDisk.length} page files are accounted for`, unclassified.length === 0,
  unclassified.length ? 'unclassified: ' + unclassified.join(', ') : '');

const bothLists = indexedFiles.filter(f => excludedFiles.includes(f));
check('no file is both indexed and excluded', bothLists.length === 0, bothLists.join(', '));

const ghosts = [...indexedFiles, ...excludedFiles].filter(f => !fs.existsSync(path.join(PAGES_DIR, f)));
check('every registry entry names a file that exists', ghosts.length === 0,
  ghosts.length ? 'missing: ' + ghosts.join(', ') : '');

const dupes = indexedFiles.filter((f, i) => indexedFiles.indexOf(f) !== i);
check('no page is registered twice', dupes.length === 0, dupes.join(', '));

// ---------------------------------------------------------------------------
// The index is built here rather than at the top of the file on purpose: a registry entry
// naming a file that is not there makes the build itself impossible, and the reader of this
// output wants the plain sentence above rather than a stack trace.
let fresh, records, counts, byUrl;
try {
  fresh = buildSearchIndex();
  records = fresh.records;
  counts = indexCounts(records);
  byUrl = new Map(records.map(r => [r.u, r]));
} catch (err) {
  console.log('\n2. Every indexed URL has a real page behind it');
  check('the index can be built from the data at all', false, err.message);
  console.log('\nRESULT: FAIL (' + fails + ')');
  process.exit(1);
}

console.log(`\n  ${counts.total} records: ${counts.country} countries, ${counts.spoke} spokes, ` +
  `${counts.card} money rules cards, ${counts.page} standalone pages`);

// ---------------------------------------------------------------------------
console.log('\n2. Every indexed URL has a real page behind it');

const urlDupes = records.map(r => r.u).filter((u, i, a) => a.indexOf(u) !== i);
check('no duplicate URLs in the index', urlDupes.length === 0, urlDupes.join(', '));
check('every record carries a title', records.every(r => r.t && r.t.trim()), '');
check('every record carries a class', records.every(r => ['country', 'spoke', 'card', 'page'].includes(r.k)), '');

const liveCountries = countries.filter(c => c.live);
const countryBySlug = new Map(liveCountries.map(c => [c.slug, c]));

let orphans = [];
for (const r of records) {
  if (r.k === 'country') {
    if (!countryBySlug.has(r.u.slice(1))) orphans.push(r.u + ' (no live country)');
  } else if (r.k === 'spoke') {
    const [, cslug, sslug] = r.u.split('/');
    const c = countryBySlug.get(cslug);
    const s = c && (c.spokes || []).find(x => x.slug === sslug);
    if (!s) orphans.push(r.u + ' (no such spoke)');
    else if (s.live === false) orphans.push(r.u + ' (spoke is live:false)');
  } else if (r.k === 'card') {
    const cslug = r.u.split('/')[1];
    if (!countryBySlug.has(cslug) || !rulesFor(cslug)) orphans.push(r.u + ' (no money rules card)');
  } else if (r.k === 'page') {
    const entry = INDEXED_PAGES.find(p => pageUrlFromFile(p.file) === r.u);
    if (!entry) orphans.push(r.u + ' (not in the page registry)');
    else if (!fs.existsSync(path.join(PAGES_DIR, entry.file))) orphans.push(r.u + ' (no .astro file)');
  }
}
check('every record resolves to a live page in the data', orphans.length === 0,
  orphans.length ? orphans.slice(0, 5).join('; ') : '');

if (hasDist) {
  const missing = records.filter(r => !fs.existsSync(distPathForUrl(r.u))).map(r => r.u);
  check('every record has a built HTML page in dist', missing.length === 0,
    missing.length ? `${missing.length} missing, first: ` + missing.slice(0, 5).join(', ') : '');
} else {
  skip('every record has a built HTML page in dist', 'run npm run build first');
}

const startsMissing = START_HERE.filter(u => !byUrl.has(u));
check('the empty-state starting points are all real indexed pages', startsMissing.length === 0,
  startsMissing.join(', '));

// ---------------------------------------------------------------------------
console.log('\n3. Every live page is represented, so nothing goes missing from search');

const missingCountries = liveCountries.filter(c => !byUrl.has(countryUrl(c.slug))).map(c => c.slug);
check(`all ${liveCountries.length} live countries are indexed`, missingCountries.length === 0,
  missingCountries.join(', '));

const liveSpokes = liveCountries.flatMap(c => (c.spokes || [])
  .filter(s => s.live !== false).map(s => ({ c: c.slug, s: s.slug })));
const missingSpokes = liveSpokes.filter(x => !byUrl.has(spokeUrl(x.c, x.s))).map(x => x.c + '/' + x.s);
check(`all ${liveSpokes.length} live spokes are indexed`, missingSpokes.length === 0,
  missingSpokes.slice(0, 5).join(', '));

const cardCountries = liveCountries.filter(c => rulesFor(c.slug));
const missingCards = cardCountries.filter(c => !byUrl.has(rulesCardUrl(c.slug))).map(c => c.slug);
check(`all ${cardCountries.length} money rules cards are indexed`, missingCards.length === 0,
  missingCards.join(', '));

const missingPages = INDEXED_PAGES.filter(p => !byUrl.has(pageUrlFromFile(p.file))).map(p => p.file);
check(`all ${INDEXED_PAGES.length} registered standalone pages are indexed`, missingPages.length === 0,
  missingPages.join(', '));

const excludedIndexed = EXCLUDED_PAGES.filter(p => byUrl.has(pageUrlFromFile(p.file)))
  .map(p => p.file)
  // The three dynamic routes are excluded as FILES because their pages are indexed from
  // the data instead, so their URLs legitimately appear. Only a static exclusion showing
  // up in the index is a contradiction.
  .filter(f => !f.includes('['));
check('no deliberately excluded page is in the index anyway', excludedIndexed.length === 0,
  excludedIndexed.join(', '));

// ---------------------------------------------------------------------------
console.log('\n4. The shipped index is what the data produces right now');

if (!hasDist || !fs.existsSync(shippedPath)) {
  skip('the shipped index matches a fresh read of the data', 'run npm run build first');
} else {
  const shipped = fs.readFileSync(shippedPath, 'utf8');
  const regenerated = JSON.stringify(fresh);
  check('the shipped index matches a fresh read of the data, byte for byte',
    shipped === regenerated,
    shipped === regenerated ? '' : `shipped ${shipped.length} bytes, fresh ${regenerated.length} bytes`);
}

// ---------------------------------------------------------------------------
console.log('\n5. House style holds in the index, because this text ships to readers');

const text = records.flatMap(r => [r.t, r.d, r.c]).filter(Boolean).join('\n');
check('no em dashes', !text.includes('\u2014'));
check('no en dashes', !text.includes('\u2013'));
check('no periods-form U.S.', !text.includes('U.S.'));

// ---------------------------------------------------------------------------
console.log('\n6. The shipped search box only ever links into the index');

const bundleDir = 'dist/_astro';
const bundle = hasDist && fs.existsSync(bundleDir)
  ? fs.readdirSync(bundleDir).find(f => f.startsWith('SearchBox.astro'))
  : null;

if (!bundle || !fs.existsSync('dist/search/index.html')) {
  skip('the rendered results all point at indexed pages', 'run npm run build first');
} else {
  const { JSDOM } = await import('jsdom');
  const code = fs.readFileSync(path.join(bundleDir, bundle), 'utf8');
  const dom = new JSDOM(fs.readFileSync('dist/search/index.html', 'utf8'),
    { runScripts: 'outside-only', url: 'https://truetripcosts.com/search' });
  const w = dom.window;
  w.fetch = () => Promise.resolve({ ok: true, json: () => Promise.resolve(fresh) });
  w.eval(code);

  const root = w.document.querySelector('.ttcs[data-variant="page"]');
  const input = root.querySelector('.ttcs-input');
  const settle = () => new Promise(r => setTimeout(r, 10));

  async function type(q) {
    input.value = q;
    input.dispatchEvent(new w.Event('input', { bubbles: true }));
    await settle(); await settle();
    return Array.from(root.querySelectorAll('.ttcs-row')).map(a => a.getAttribute('href'));
  }

  // Nothing here is a search-quality test. Every query below is asked only so the box
  // renders links, and then every link it rendered has to be one the index published.
  const probes = ['japan', 'tipping', 'hotel tax', 'lisbon', 'rules', 'e', 'zzzz nothing here'];
  const rendered = [];
  for (const q of probes) rendered.push(...await type(q));
  const offIndex = rendered.filter(u => !byUrl.has(u));
  check(`${rendered.length} rendered links across ${probes.length} queries, all in the index`,
    offIndex.length === 0, offIndex.slice(0, 5).join(', '));

  const nonsense = await type('zzzz nothing here');
  const empty = root.querySelector('.ttcs-empty');
  check('a query with no match renders no results', nonsense.length === 0);
  check('a query with no match says so plainly', !empty.hasAttribute('hidden'));
  const starts = Array.from(root.querySelectorAll('.ttcs-starts-list a')).map(a => a.getAttribute('href'));
  check('the pages offered under an empty result are real indexed pages',
    starts.length > 0 && starts.every(u => byUrl.has(u)), starts.join(' '));
  check('the empty state is not dressed up as a match',
    root.querySelector('.ttcs-list').hasAttribute('hidden'));

  check('the box stores nothing on the reader machine',
    !/localStorage|sessionStorage|document\.cookie|indexedDB/.test(code));
}

console.log('\nRESULT:', fails ? `FAIL (${fails})` : skips ? `PASS (${skips} skipped)` : 'PASS');
process.exit(fails ? 1 : 0);
