#!/usr/bin/env node
/**
 * scripts/check-monthly-digest.mjs
 *
 * Gate for the monthly digest generator. Asserts, on a fixed fixture and on the
 * real changelog:
 *   1. the drafted copy carries no em or en dash, no periods form of US, no
 *      exclamation mark, and no banned word
 *   2. every per-country {% if %} block names a real country slug that actually
 *      has an entry in the cycle (no orphan blocks, no topic pages)
 *   3. every internal link in the draft resolves to a real page, including
 *      country guides served by a top-level dynamic route
 *   4. the generator has no send path: no API key symbol, no network import,
 *      no fetch, nothing but node:fs, node:path and node:url
 *   5. the country set comes from the repo data and is not hardcoded
 *   6. a heavy cycle stays inside the full-block cap
 *
 * Run: node scripts/check-monthly-digest.mjs
 * Exit 0 pass, exit 1 fail.
 */

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import {
  buildDigest, deriveCountry, checkHouseRules, loadCountries, COSMETIC_SLUGS,
} from './draft-monthly-digest.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(HERE, '..');
const GENERATOR = join(HERE, 'draft-monthly-digest.mjs');
const GATE = join(HERE, 'check-monthly-digest.mjs');
const FIXTURE = join(HERE, 'fixtures', 'monthly-digest.fixture.mjs');
const CHANGELOG = join(REPO_ROOT, 'src', 'data', 'changelog.js');
const PAGES_DIR = join(REPO_ROOT, 'src', 'pages');

const MAX_FULL_BLOCKS = 6;

/** Countries invented for the fixture. Never used against the real repo. */
const FIXTURE_COUNTRIES = new Map([
  ['fixtureland', 'Fixtureland'],
  ['testonia', 'Testonia'],
  ['samplavia', 'Samplavia'],
]);

const failures = [];
const notes = [];

function fail(check, detail) {
  failures.push(`${check}: ${detail}`);
}

function ok(check, detail) {
  process.stdout.write(`  pass  ${check}${detail ? `: ${detail}` : ''}\n`);
}

/* ------------------------------------------- 4. drafts only, proved by source */

// Split into fragments so this gate's own source does not trip its own check.
const F = (...parts) => parts.join('');
const FORBIDDEN_SYMBOLS = [
  F('BUTTONDOWN', '_API_', 'KEY'),
  F('api.', 'buttondown'),
  F('process', '.env'),
  F('fetch', '('),
  F('XMLHttp', 'Request'),
  F('child', '_process'),
  F('exec', 'Sync'),
  F('axi', 'os'),
  F('node', 'mailer'),
  F('send', 'mail'),
];

const IMPORT_ALLOWLIST = new Set(['node:fs', 'node:path', 'node:url']);

function checkNoSendPath(label, path) {
  const src = readFileSync(path, 'utf8');
  const hits = FORBIDDEN_SYMBOLS.filter((sym) => src.includes(sym));
  if (hits.length) {
    fail('no send path', `${label} references ${hits.join(', ')}`);
    return;
  }
  const specifiers = [...src.matchAll(/(?:^|\n)\s*import[^;]*?from\s+['"]([^'"]+)['"]/g)].map((m) => m[1]);
  const bad = specifiers.filter((s) => !IMPORT_ALLOWLIST.has(s) && !s.startsWith('./') && !s.startsWith('../'));
  if (bad.length) {
    fail('no send path', `${label} imports outside the allowlist: ${bad.join(', ')}`);
    return;
  }
  for (const [char, name] of [['\u2014', 'em dash'], ['\u2013', 'en dash']]) {
    if (src.includes(char)) {
      fail('house rules', `${label} source contains an ${name}`);
      return;
    }
  }
  ok('no send path', `${label} is drafts only (${specifiers.length} imports, all allowlisted)`);
}

/* ------------------------------------------------------- 3. link resolution */

function readdirSafe(p) {
  try {
    return readdirSync(p);
  } catch {
    return [];
  }
}

function isDir(p) {
  try {
    return statSync(p).isDirectory();
  } catch {
    return false;
  }
}

const RE_DYNAMIC_FILE = /^\[[^\]]+\]\.(astro|md|mdx)$/;
const RE_REST_FILE = /^\[\.\.\.[^\]]+\]\.(astro|md|mdx)$/;

/**
 * Does a path have a page behind it? Static files first, then Astro dynamic
 * routes. A country guide such as /austria is served by a TOP-LEVEL dynamic
 * FILE, src/pages/[slug].astro, which is why a directory-only scan missed it.
 * A single-segment path resolves through that route only if the slug is a real
 * country, so a typo like /portgual still fails instead of passing on the
 * strength of the dynamic route alone.
 */
function pageExists(pathname, countrySlugs) {
  const clean = pathname.split(/[?#]/)[0].replace(/^\/+|\/+$/g, '');
  if (!clean) return existsSync(join(PAGES_DIR, 'index.astro'));

  const exts = ['astro', 'md', 'mdx', 'html'];
  const statics = [
    ...exts.map((e) => join(PAGES_DIR, clean, `index.${e}`)),
    ...exts.map((e) => join(PAGES_DIR, `${clean}.${e}`)),
  ];
  if (statics.some((c) => existsSync(c))) return true;

  const segments = clean.split('/');
  const topLevel = readdirSafe(PAGES_DIR);

  // Fix 1: a top-level dynamic FILE, e.g. src/pages/[slug].astro, serves a
  // single-segment path. Guard it with country membership.
  if (segments.length === 1) {
    const hasDynamicFile = topLevel.some((f) => RE_DYNAMIC_FILE.test(f) && !RE_REST_FILE.test(f));
    if (hasDynamicFile && countrySlugs && countrySlugs.has(segments[0])) return true;
  }

  // Nested dynamic routes, e.g. src/pages/[country]/tourist-tax.astro.
  const tail = segments.slice(1).join('/');
  const dynamicDirs = topLevel.filter((d) => d.startsWith('[') && isDir(join(PAGES_DIR, d)));
  for (const d of dynamicDirs) {
    if (!tail) {
      if (exts.some((e) => existsSync(join(PAGES_DIR, d, `index.${e}`)))) return true;
      continue;
    }
    const nested = [
      ...exts.map((e) => join(PAGES_DIR, d, tail, `index.${e}`)),
      ...exts.map((e) => join(PAGES_DIR, d, `${tail}.${e}`)),
    ];
    if (nested.some((c) => existsSync(c))) return true;
    // e.g. [country]/[topic].astro for a single tail segment
    if (!tail.includes('/') && readdirSafe(join(PAGES_DIR, d)).some((f) => RE_DYNAMIC_FILE.test(f))) return true;
  }

  // A catch-all route would make every path resolve, which weakens this check.
  if (topLevel.some((f) => RE_REST_FILE.test(f))) {
    notes.push('a catch-all route exists at the top level, so link resolution is weaker than it looks');
    return true;
  }
  return false;
}

/* ----------------------------------------------------------- shared asserts */

const RE_POSITIVE_COUNTRY = /\{%\s*if\s+"country:([a-z0-9-]+)"\s+in\s+subscriber\.tags\s*%\}/g;
const RE_ANY_COUNTRY_TAG = /"country:([a-z0-9-]+)"/g;
const RE_MD_LINK = /\[[^\]]*\]\((\/[^)]*)\)/g;

function assertDraft(label, result, { countrySlugs, checkLinks }) {
  const { draft, meta } = result;

  // 1. house rules on the drafted copy
  const { hard } = checkHouseRules(draft);
  if (hard.length) {
    hard.forEach((v) => fail('house rules', `${label} line ${v.line}: ${v.rule} in "${v.text}"`));
  } else {
    ok('house rules', `${label} draft is clean (no dashes, no periods form of US, no exclamation mark)`);
  }

  // 2. every country block names a real country with an entry this cycle
  const declared = [...draft.matchAll(RE_POSITIVE_COUNTRY)].map((m) => m[1]);
  const notReal = declared.filter((c) => !countrySlugs.has(c));
  const entryCountries = new Set(
    meta.selected.map((e) => deriveCountry(e.link, countrySlugs)).filter(Boolean),
  );
  const orphans = declared.filter((c) => !entryCountries.has(c));
  const dupes = declared.filter((c, i) => declared.indexOf(c) !== i);
  const missing = meta.changedCountries.filter((c) => !declared.includes(c));
  if (notReal.length) fail('country blocks are real countries', `${label} declares ${notReal.join(', ')}, not in the country data`);
  if (orphans.length) fail('no orphan country blocks', `${label} declares ${orphans.join(', ')} with no entry this cycle`);
  if (dupes.length) fail('no orphan country blocks', `${label} declares ${dupes.join(', ')} more than once`);
  if (missing.length) fail('no orphan country blocks', `${label} has entries for ${missing.join(', ')} but no lead block`);

  // the reassurance block must negate exactly the declared set, nothing more
  const allTags = [...new Set([...draft.matchAll(RE_ANY_COUNTRY_TAG)].map((m) => m[1]))];
  const extra = allTags.filter((c) => !declared.includes(c));
  if (extra.length) fail('reassurance block', `${label} negates a country with no lead block: ${extra.join(', ')}`);
  if (!notReal.length && !orphans.length && !dupes.length && !missing.length && !extra.length) {
    ok('country blocks', `${label} ${declared.length || 'no'} block(s), each a real country with an entry`);
  }

  // 6. the full-block cap
  if (meta.fullBlocks > MAX_FULL_BLOCKS) {
    fail('full block cap', `${label} rendered ${meta.fullBlocks} full blocks, cap is ${MAX_FULL_BLOCKS}`);
  } else {
    ok('full block cap', `${label} ${meta.fullBlocks} full block(s), ${meta.tail.length} named in the tail`);
  }

  // 3. links
  const links = [...new Set([...draft.matchAll(RE_MD_LINK)].map((m) => m[1]))];
  if (!checkLinks) {
    const malformed = links.filter((l) => !/^\/[a-z0-9-]+(\/[a-z0-9-]+)*\/?$/.test(l));
    if (malformed.length) fail('links well formed', `${label} odd link shape: ${malformed.join(', ')}`);
    else ok('links well formed', `${label} ${links.length} link(s) well formed (invented paths, not resolved on purpose)`);
  } else if (!links.length) {
    ok('links resolve', `${label} has no internal links to check`);
  } else {
    const broken = links.filter((l) => !pageExists(l, countrySlugs));
    if (broken.length) fail('links resolve', `${label} broken: ${broken.join(', ')}`);
    else ok('links resolve', `${label} ${links.length} link(s) all resolve`);
  }

  // soft: length, reported not enforced, because a quiet cycle must not be padded
  if (meta.readerWords > 750) notes.push(`${label} is about ${meta.readerWords} reader words, over the 750 ceiling`);
  else notes.push(`${label} is about ${meta.readerWords} reader words`);
}

/* --------------------------------------------------------------------- main */

async function loadEntries(path) {
  const mod = await import(pathToFileURL(path).href);
  const entries = Array.isArray(mod.changelogEntries)
    ? mod.changelogEntries
    : typeof mod.changelog === 'function'
      ? mod.changelog()
      : Array.isArray(mod.default) ? mod.default : null;
  return { entries, displayDate: typeof mod.displayDate === 'function' ? mod.displayDate : undefined };
}

async function main() {
  process.stdout.write('\ncheck-monthly-digest\n\n');

  checkNoSendPath('draft-monthly-digest.mjs', GENERATOR);
  checkNoSendPath('check-monthly-digest.mjs', GATE);

  // 5. the country set comes from the repo, not from a list in the scripts
  let real = null;
  try {
    real = await loadCountries();
  } catch (err) {
    fail('country set from repo data', err.message.split('\n')[0]);
  }
  if (real) {
    if (real.slugs.size < 10) {
      fail('country set from repo data', `only ${real.slugs.size} slugs loaded from ${real.source}, that looks wrong`);
    } else {
      ok('country set from repo data', `${real.slugs.size} slugs from ${real.source}`);
    }
    // Structural, not a threshold: every country slug quoted in the generator
    // must belong to the cosmetic article set. Any other one is a real list
    // creeping back in, which is exactly what would drift from the site.
    const genSrc = readFileSync(GENERATOR, 'utf8');
    const quoted = [...real.slugs].filter((s) => s.length >= 4 && new RegExp(`['"\`]${s}['"\`]`).test(genSrc));
    const smuggled = quoted.filter((s) => !COSMETIC_SLUGS.has(s));
    if (smuggled.length) {
      fail('no hardcoded country list', `generator source names ${smuggled.join(', ')}, which is a country list, not cosmetics`);
    } else {
      ok('no hardcoded country list', `${quoted.length} slug(s) quoted in the generator, all in the cosmetic article set`);
    }
    // a topic page must never be mistaken for a country
    for (const topic of ['passports-and-visas', 'hotel-tax-map', 'us-customs-allowance', 'rules']) {
      if (deriveCountry(`/${topic}/`, real.slugs) !== null) {
        fail('topic pages are not countries', `/${topic}/ derived a country slug`);
      }
    }
    if (!failures.some((f) => f.startsWith('topic pages'))) {
      ok('topic pages are not countries', 'passports-and-visas, hotel-tax-map, us-customs-allowance, rules all derive null');
    }
    // the resolver must not pass a slug that is not a real country
    if (existsSync(PAGES_DIR) && pageExists('/portgual/', real.slugs)) {
      fail('resolver is strict', '/portgual/ resolved, so the dynamic route is passing anything');
    } else if (existsSync(PAGES_DIR)) {
      ok('resolver is strict', 'a misspelled single-segment slug does not resolve');
    }
  }

  // Fixture run: fixed window and an explicit country set, so this assertion
  // never drifts with the calendar or with the real country data.
  if (!existsSync(FIXTURE)) {
    fail('fixture', `missing ${FIXTURE}`);
  } else {
    const { entries, displayDate } = await loadEntries(FIXTURE);
    const fixtureSlugs = new Set(FIXTURE_COUNTRIES.keys());
    const result = buildDigest({
      entries, from: '2026-07-01', to: '2026-07-31', displayDate,
      countrySlugs: fixtureSlugs, countryNames: FIXTURE_COUNTRIES,
    });
    if (result.meta.selected.length !== 5) {
      fail('fixture window', `expected 5 entries in July 2026, got ${result.meta.selected.length}`);
    } else {
      ok('fixture window', '5 of 6 fixture entries selected, the out of window entry excluded');
    }
    if (result.draft.includes('must never appear')) fail('fixture window', 'an out of window entry leaked into the draft');
    if (!result.draft.startsWith('SUBJECT: ')) fail('subject', 'draft does not start with a labelled SUBJECT line');
    else ok('subject', 'labelled SUBJECT line present');
    if (/!/.test(result.subject)) fail('subject', 'subject contains an exclamation mark');

    // the fixture carries a topic-page entry, which must not mint a block
    if (/country:topic-page-not-a-country/.test(result.draft)) {
      fail('topic pages are not countries', 'the fixture topic entry minted a per-country block');
    } else {
      ok('topic pages are not countries', 'the fixture topic entry appears in the log only');
    }
    assertDraft('fixture', result, { countrySlugs: fixtureSlugs, checkLinks: false });

    // empty window must not fabricate an issue
    const empty = buildDigest({
      entries, from: '2026-01-01', to: '2026-01-31', displayDate,
      countrySlugs: fixtureSlugs, countryNames: FIXTURE_COUNTRIES,
    });
    if (!empty.meta.empty) fail('empty month', 'an empty window did not report itself as empty');
    else ok('empty month', 'an empty window reports empty rather than inventing an issue');

    // buildDigest must refuse to run without the real country set
    let refused = false;
    try {
      buildDigest({ entries, from: '2026-07-01', to: '2026-07-31', countrySlugs: new Set() });
    } catch {
      refused = true;
    }
    if (!refused) fail('country set required', 'buildDigest ran with an empty country set instead of stopping');
    else ok('country set required', 'buildDigest refuses to run without a country set, so it cannot silently guess');
  }

  // Real changelog run, if we are in the repo.
  if (!existsSync(CHANGELOG)) {
    notes.push('src/data/changelog.js not found, real log assertions SKIPPED (fixture only run)');
  } else if (real) {
    const { entries, displayDate } = await loadEntries(CHANGELOG);
    if (!Array.isArray(entries)) {
      fail('real changelog', 'no entry array exported (expected changelogEntries, changelog(), or default)');
    } else {
      const today = new Date();
      const y = today.getUTCFullYear();
      const m = today.getUTCMonth(); // 0 based, so this is already last month
      const from = `${m === 0 ? y - 1 : y}-${String(m === 0 ? 12 : m).padStart(2, '0')}-01`;
      const to = new Date(Date.UTC(y, m, 0)).toISOString().slice(0, 10);
      const shared = { displayDate, countrySlugs: real.slugs, countryNames: real.names };
      const result = buildDigest({ entries, from, to, ...shared });
      if (result.meta.empty) {
        ok('real changelog', `no entries in ${from} to ${to}, nothing to assert on the draft`);
      } else {
        assertDraft(`real log ${from} to ${to}`, result, { countrySlugs: real.slugs, checkLinks: existsSync(PAGES_DIR) });
      }

      // Every entry in the whole log must be draftable, and the whole log is the
      // heaviest possible cycle, so it also exercises the full-block cap.
      const all = buildDigest({ entries, from: '1970-01-01', to: '2999-12-31', ...shared });
      const { hard } = checkHouseRules(all.draft);
      if (hard.length) {
        hard.forEach((v) => fail('whole log draftable', `line ${v.line}: ${v.rule} in "${v.text}"`));
      } else {
        ok('whole log draftable', `all ${all.meta.selected.length} entries pass house rules when drafted`);
      }
      assertDraft('whole log', all, { countrySlugs: real.slugs, checkLinks: existsSync(PAGES_DIR) });
    }
  }

  process.stdout.write('\n');
  notes.forEach((n) => process.stdout.write(`  note  ${n}\n`));
  if (notes.length) process.stdout.write('\n');

  if (failures.length) {
    failures.forEach((f) => process.stdout.write(`  FAIL  ${f}\n`));
    process.stdout.write(`\n${failures.length} failure(s)\n\n`);
    return 1;
  }
  process.stdout.write('all checks passed\n\n');
  return 0;
}

main()
  .then((code) => process.exit(code))
  .catch((err) => {
    process.stdout.write(`\nERROR ${err.stack}\n\n`);
    process.exit(1);
  });
