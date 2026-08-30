#!/usr/bin/env node
// Change-log gate. Run from the repo root, after a build:
//   npm run build && node scripts/check-changelog.mjs
//
// WHY THIS EXISTS. The /what-changed page is the site's maintenance discipline made
// visible, and it is the first page whose whole value is that nothing on it is padded:
// an undated entry, a dead link, an entry claiming a change that is really a check, or
// a fabricated future date would poison exactly the trust the page exists to build. The
// data file's header carries the editorial rules; this gate holds the mechanical ones,
// which are the ones a future edit can break without anything looking wrong.
//
// WHAT IT ASSERTS:
//
//   1. EVERY ENTRY IS WHOLE. date, kind, title, what, why, link, linkLabel all present
//      and non-empty, kind is one of the two allowed values, and no two entries share a
//      date and title. Absence-is-not-zero: an empty entry list also fails, because the
//      page should not exist as an empty shell.
//   2. EVERY DATE IS HONEST IN SHAPE. YYYY-MM-DD or YYYY-MM only, a real calendar date,
//      and never in the future: a future world change belongs on its guide as an
//      upcoming fact, not here as if it had happened.
//   3. EVERY LINK RESOLVES. Each entry's link is a real page in dist, so a rename can
//      never leave the log pointing at a 404.
//   4. THE PAGE RENDERS THE DATA, WHOLE. dist/what-changed/index.html carries exactly
//      one rendered entry per data entry, each with a machine-readable <time datetime>
//      equal to the data's date and a link to the entry's page. Reverse-chronological
//      order is asserted on the rendered page, not just in the data.
//   5. NO SCRIPT CAME ALONG. The changelog page ships zero external scripts beyond the
//      site's own inline base-layout scripts: no third-party src anywhere, and the
//      subscribe form is a native <form method="post"> to Buttondown's embed-subscribe
//      endpoint with an email input and the hidden tag hook. The JSON-LD block is
//      type="application/ld+json", which is data, and its dateModified must equal the
//      newest entry's date.
//   6. THE PLACEHOLDER IS LOUD. While the Buttondown username is still the
//      GARY-USERNAME placeholder the gate PASSES but prints a WARN on every run, so the
//      fill-before-deploy step cannot be forgotten in silence. A form action pointing
//      anywhere other than buttondown.com's embed-subscribe path FAILS.
//   7. EVERY ENTRY HAS A WELL-FORMED, UNIQUE id. The id is the entry's permanent URL at
//      /updates/{id}/, so two entries sharing one is not a duplicate, it is one record
//      silently overwriting the other at build time and one citation quietly pointing at
//      the wrong change. Shape is enforced too, since the id goes straight into a path.
//   8. EVERY RECORD PAGE BUILT. dist/updates/{id}/index.html exists for every entry, the
//      same existence rail check 3 applies to the guide links, applied to the new route.
//   9. EVERY RECORD RENDERS ITS OWN ENTRY. Each record page carries that entry's title
//      and a <time datetime> equal to its data date, so a routing or props mistake that
//      built 31 pages of the same entry cannot pass. Checks the permalink on the list
//      page too: the list must point at each entry's own record.
//  10. THE HOOK CANNOT ROT. Any country whose recentChange carries `updateId` must name
//      a real entry id. The hook is inert today, and a forward hook nothing verifies is
//      how a 404 ships eighteen months from now with nobody's fingerprints on it.
//
// Exits 1 on any FAIL.

import fs from 'fs';
import { JSDOM } from 'jsdom';
import { changelogEntries, changelog } from '../src/data/changelog.js';

let fails = 0;
let warns = 0;
const fail = (check, msg) => { fails++; console.error(`FAIL [${check}] ${msg}`); };
const warn = (msg) => { warns++; console.warn(`WARN ${msg}`); };
const ok = (check, msg) => console.log(`ok   [${check}] ${msg}`);

const DIST = 'dist';
if (!fs.existsSync(DIST)) {
  console.error('FAIL no dist/ directory. Run npm run build first.');
  process.exit(1);
}

// Today, as a local calendar date string, for the no-future-dates rail.
const now = new Date();
const todayISO = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

// -- 1. every entry is whole -------------------------------------------------------
if (changelogEntries.length === 0) {
  fail(1, 'the entry list is empty. An empty log should not ship as a page.');
}
const seen = new Set();
for (const [i, e] of changelogEntries.entries()) {
  const where = `entry ${i} ("${(e && e.title) || 'untitled'}")`;
  for (const field of ['date', 'kind', 'title', 'what', 'why', 'link', 'linkLabel']) {
    if (!e || typeof e[field] !== 'string' || e[field].trim() === '') {
      fail(1, `${where}: missing or empty ${field}`);
    }
  }
  if (e && e.kind && !['change', 'correction'].includes(e.kind)) {
    fail(1, `${where}: kind "${e.kind}" is not one of change|correction`);
  }
  const key = `${e && e.date}|${e && e.title}`;
  if (seen.has(key)) fail(1, `${where}: duplicate date+title`);
  seen.add(key);
}
if (fails === 0) ok(1, `${changelogEntries.length} entries, all whole, no duplicates`);

// -- 2. every date is honest in shape ----------------------------------------------
const before2 = fails;
for (const e of changelogEntries) {
  const d = String(e.date || '');
  const dayForm = /^\d{4}-\d{2}-\d{2}$/.test(d);
  const monthForm = /^\d{4}-\d{2}$/.test(d);
  if (!dayForm && !monthForm) { fail(2, `"${e.title}": date "${d}" is not YYYY-MM-DD or YYYY-MM`); continue; }
  const resolved = monthForm ? d + '-01' : d;
  const parsed = new Date(resolved + 'T00:00:00');
  if (isNaN(parsed.getTime()) || resolved !== parsed.toISOString().slice(0, 10)) {
    fail(2, `"${e.title}": date "${d}" is not a real calendar date`);
    continue;
  }
  if (resolved > todayISO) fail(2, `"${e.title}": date "${d}" is in the future. A change that has not happened is not a change.`);
}
if (fails === before2) ok(2, 'every date is well-formed, real, and not in the future');

// -- 3. every link resolves ---------------------------------------------------------
const before3 = fails;
function distPathFor(link) {
  const clean = String(link || '').replace(/^\/+|\/+$/g, '');
  return clean === '' ? `${DIST}/index.html` : `${DIST}/${clean}/index.html`;
}
for (const e of changelogEntries) {
  if (!/^\/[a-z0-9\-\/]+$/.test(String(e.link || ''))) {
    fail(3, `"${e.title}": link "${e.link}" is not an on-site path`);
    continue;
  }
  const p = distPathFor(e.link);
  if (!fs.existsSync(p)) fail(3, `"${e.title}": link ${e.link} has no built page at ${p}`);
}
if (fails === before3) ok(3, 'every entry links to a real built page on this site');

// -- 4. the page renders the data, whole -------------------------------------------
const before4 = fails;
const PAGE = `${DIST}/what-changed/index.html`;
let doc = null;
if (!fs.existsSync(PAGE)) {
  fail(4, `no built page at ${PAGE}`);
} else {
  const html = fs.readFileSync(PAGE, 'utf8');
  doc = new JSDOM(html).window.document;

  const rendered = [...doc.querySelectorAll('.wc-entry')];
  if (rendered.length !== changelogEntries.length) {
    fail(4, `page renders ${rendered.length} entries, data has ${changelogEntries.length}`);
  }

  const sorted = changelog();
  const times = rendered.map(el => el.querySelector('time'));
  times.forEach((t, i) => {
    if (!t) { fail(4, `rendered entry ${i} has no <time> element`); return; }
    const dt = t.getAttribute('datetime');
    if (sorted[i] && dt !== sorted[i].date) {
      fail(4, `rendered entry ${i} has datetime "${dt}", expected "${sorted[i].date}" (order or data drift)`);
    }
  });

  // Reverse-chronological on the page itself, resolving month precision to the 1st.
  const resolve = d => (d && d.length === 7 ? d + '-01' : d);
  for (let i = 1; i < times.length; i++) {
    const prev = resolve(times[i - 1] && times[i - 1].getAttribute('datetime'));
    const cur = resolve(times[i] && times[i].getAttribute('datetime'));
    if (prev && cur && cur > prev) {
      fail(4, `rendered order is not reverse-chronological at entry ${i} (${cur} after ${prev})`);
    }
  }

  // Each rendered entry links where its data says.
  rendered.forEach((el, i) => {
    const a = el.querySelector('a.wc-link');
    if (!a) { fail(4, `rendered entry ${i} has no guide link`); return; }
    if (sorted[i] && a.getAttribute('href') !== sorted[i].link) {
      fail(4, `rendered entry ${i} links to ${a.getAttribute('href')}, expected ${sorted[i].link}`);
    }
  });
}
if (fails === before4) ok(4, 'the page renders every entry, dated, linked, reverse-chronological');

// -- 5. no script came along, and the form is the no-JS shape -----------------------
const before5 = fails;
if (doc) {
  // The rail is THIRD-PARTY scripts: a src on another origin. The site's own bundled
  // scripts (the nav search box ships from /_astro on every page) are first-party and
  // predate this page; a same-origin path is therefore allowed, an absolute URL to any
  // other origin is not, and a protocol-relative src counts as another origin.
  for (const s of doc.querySelectorAll('script[src]')) {
    const src = s.getAttribute('src') || '';
    const thirdParty = /^(https?:)?\/\//i.test(src) && !src.startsWith('https://truetripcosts.com/');
    if (thirdParty) fail(5, `third-party script shipped on the page: ${src}`);
  }

  const forms = [...doc.querySelectorAll('form.bd')];
  if (forms.length === 0) fail(5, 'no subscribe form on the changelog page');
  for (const f of forms) {
    const action = f.getAttribute('action') || '';
    if ((f.getAttribute('method') || '').toLowerCase() !== 'post') {
      fail(5, `subscribe form method is "${f.getAttribute('method')}", expected post`);
    }
    if (!/^https:\/\/buttondown\.com\/api\/emails\/embed-subscribe\/[^\/\s]+$/.test(action)) {
      fail(5, `subscribe form action "${action}" is not Buttondown's embed-subscribe endpoint`);
    }
    if (!f.querySelector('input[type="email"][name="email"][required]')) {
      fail(5, 'subscribe form has no required email input named "email"');
    }
    if (!f.querySelector('input[type="hidden"][name="tag"]')) {
      fail(5, 'subscribe form has no hidden tag input (the per-page forward hook)');
    }
  }

  // The JSON-LD freshness stamp: dateModified equals the newest entry, resolved.
  const lds = [...doc.querySelectorAll('script[type="application/ld+json"]')];
  const newest = changelog()[0];
  const expected = newest ? (newest.date.length === 7 ? newest.date + '-01' : newest.date) : null;
  const hit = lds.some(s => {
    try { return JSON.parse(s.textContent).dateModified === expected; } catch { return false; }
  });
  if (expected && !hit) fail(5, `no JSON-LD block carries dateModified ${expected} (the newest entry)`);
}
if (fails === before5) ok(5, 'zero external scripts, native no-JS Buttondown form, JSON-LD dateModified matches the newest entry');

// -- 6. the placeholder is loud -----------------------------------------------------
if (doc) {
  const placeholder = [...doc.querySelectorAll('form.bd')].some(f =>
    (f.getAttribute('action') || '').includes('GARY-USERNAME'));
  if (placeholder) {
    warn('the Buttondown username is still the GARY-USERNAME placeholder. Fill it in ButtondownForm.astro before deploy.');
  } else {
    ok(6, 'the Buttondown username placeholder has been filled');
  }
}

// -- 7. every entry has a well-formed, unique id ------------------------------------
const before7 = fails;
const ID_SHAPE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const idsSeen = new Map();
for (const [i, e] of changelogEntries.entries()) {
  const where = `entry ${i} ("${(e && e.title) || 'untitled'}")`;
  const id = e && e.id;
  if (typeof id !== 'string' || id.trim() === '') {
    fail(7, `${where}: missing or empty id. Every entry needs a permanent URL segment.`);
    continue;
  }
  if (!ID_SHAPE.test(id)) {
    fail(7, `${where}: id "${id}" is not lowercase words joined by single hyphens`);
  }
  if (idsSeen.has(id)) {
    fail(7, `${where}: id "${id}" is already used by "${idsSeen.get(id)}". Two entries cannot share a URL.`);
  } else {
    idsSeen.set(id, e.title);
  }
}
if (fails === before7) ok(7, `${changelogEntries.length} ids, all well-formed and unique`);

// -- 8. every record page built -----------------------------------------------------
const before8 = fails;
const recordPathFor = (id) => `${DIST}/updates/${id}/index.html`;
for (const e of changelogEntries) {
  if (!e || !e.id) continue; // already failed check 7
  const p = recordPathFor(e.id);
  if (!fs.existsSync(p)) fail(8, `"${e.title}": no built record page at ${p}`);
}
if (fails === before8) ok(8, `every entry has a built record at /updates/{id}/`);

// -- 9. every record renders its own entry, and the list points at it ---------------
const before9 = fails;
for (const e of changelogEntries) {
  if (!e || !e.id) continue;
  const p = recordPathFor(e.id);
  if (!fs.existsSync(p)) continue; // already failed check 8
  const rdoc = new JSDOM(fs.readFileSync(p, 'utf8')).window.document;

  const h1 = rdoc.querySelector('h1.upd-title');
  if (!h1) {
    fail(9, `${e.id}: record page has no h1.upd-title`);
  } else if (h1.textContent.trim() !== e.title.trim()) {
    fail(9, `${e.id}: record renders title "${h1.textContent.trim().slice(0, 60)}", expected "${e.title.slice(0, 60)}"`);
  }

  const t = rdoc.querySelector('time.upd-date');
  if (!t) {
    fail(9, `${e.id}: record page has no <time class="upd-date">`);
  } else if (t.getAttribute('datetime') !== e.date) {
    fail(9, `${e.id}: record has datetime "${t.getAttribute('datetime')}", expected "${e.date}"`);
  }

  const guide = rdoc.querySelector('a.upd-link');
  if (!guide || guide.getAttribute('href') !== e.link) {
    fail(9, `${e.id}: record links to ${guide && guide.getAttribute('href')}, expected ${e.link}`);
  }
}
// The list page must carry one permalink per entry, each pointing at its own record.
if (doc) {
  const sorted = changelog();
  const rendered = [...doc.querySelectorAll('.wc-entry')];
  const perma = [...doc.querySelectorAll('a.wc-permalink')];
  if (perma.length !== changelogEntries.length) {
    fail(9, `list page has ${perma.length} permalinks, data has ${changelogEntries.length} entries`);
  }
  rendered.forEach((el, i) => {
    const a = el.querySelector('a.wc-permalink');
    if (!a) { fail(9, `rendered entry ${i} has no permalink to its record`); return; }
    const want = `/updates/${sorted[i] && sorted[i].id}/`;
    if (a.getAttribute('href') !== want) {
      fail(9, `rendered entry ${i} permalinks to ${a.getAttribute('href')}, expected ${want}`);
    }
  });
}
if (fails === before9) ok(9, 'every record renders its own entry, and the list permalinks to each one');

// -- 10. the guide change-card hook cannot rot --------------------------------------
// `updateId` on a country's recentChange is an optional deep link to that change's
// record. Nothing sets it today. This asserts that anything which ever does names a real
// entry, so the hook cannot quietly become a 404.
const before10 = fails;
const { countries } = await import('../src/data/index.js');
let hooked = 0;
for (const c of countries) {
  const uid = c && c.recentChange && c.recentChange.updateId;
  if (!uid) continue;
  hooked++;
  if (!idsSeen.has(uid)) {
    fail(10, `${c.slug}: recentChange.updateId "${uid}" is not a change-log entry id`);
  }
}
if (fails === before10) {
  ok(10, hooked === 0
    ? 'no guide change card sets updateId yet (the hook is inert, as intended)'
    : `${hooked} guide change card(s) point at a real entry id`);
}

console.log('');
if (fails > 0) {
  console.error(`check-changelog: ${fails} failure(s)${warns ? `, ${warns} warning(s)` : ''}`);
  process.exit(1);
}
console.log(`check-changelog: all checks passed${warns ? ` (${warns} warning(s))` : ''}`);
