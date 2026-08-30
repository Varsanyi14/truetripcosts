#!/usr/bin/env node
/**
 * scripts/draft-monthly-digest.mjs
 *
 * Turns recent src/data/changelog.js entries into a paste-ready Buttondown
 * draft (Markdown) on stdout. Diagnostics go to stderr so stdout stays clean
 * enough to pipe or paste.
 *
 * DRAFTS ONLY. This file contains no network call, no API key read, and no
 * send path of any kind. Sending is a human pasting the reviewed draft into
 * Buttondown. scripts/check-monthly-digest.mjs proves that by inspecting this
 * file's own source and its import list.
 *
 * Country identity comes from the real country data, never from a list kept in
 * this file. A link whose first segment is not a real country slug (a topic
 * page like /passports-and-visas, a hub like /hotel-tax-map) contributes to the
 * general log only and never mints a per-country block.
 *
 * Usage:
 *   node scripts/draft-monthly-digest.mjs
 *   node scripts/draft-monthly-digest.mjs --since 2026-08-04
 *   node scripts/draft-monthly-digest.mjs --month 2026-08
 *   node scripts/draft-monthly-digest.mjs --out drafts/2026-09.md --record
 *   node scripts/draft-monthly-digest.mjs --help
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

/* ------------------------------------------------------------------ config */

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(HERE, '..');
const CHANGELOG_PATH = join(REPO_ROOT, 'src', 'data', 'changelog.js');
const LAST_DIGEST_PATH = join(REPO_ROOT, '.last-digest');

/** Where the country records live. Tried in order. */
const COUNTRY_DATA_PATHS = [
  join(REPO_ROOT, 'src', 'data', 'index.js'),
  join(REPO_ROOT, 'src', 'data', 'index.mjs'),
  join(REPO_ROOT, 'src', 'data', 'countries.js'),
];

const WORDS_MIN = 500;
const WORDS_MAX = 750;
/** Hard cap on full detail blocks. Beyond this the tail compresses. */
const MAX_FULL_BLOCKS = 6;
const SUBJECT_MAX = 78;
const STALE_LAST_DIGEST_DAYS = 45;

/** The public record page. The gate resolves this like any other link. */
const LOG_PATH = '/what-changed/';

/** The broad-list tag from the capture form. Must match worker.js. */
const GENERAL_TAG = 'general';

/**
 * A correction is a fix to our own number, not a change in the world, so it
 * does not earn a "For <Country>:" lead block. A subscriber whose country only
 * had a correction gets the reassurance line and still sees the correction in
 * the log below. Flip to true if you would rather lead with corrections too.
 */
const LEAD_BLOCKS_INCLUDE_CORRECTIONS = false;

/** Segments that wrap a country, e.g. /countries/portugal/. */
const CONTAINER_SEGMENTS = new Set(['countries', 'country', 'guides', 'guide']);

/**
 * Cosmetic only. These slugs read better with an article in "For <name>:".
 * Identity and spelling still come from the country data; this only adds a word.
 */
export const COSMETIC_SLUGS = new Set(['united-kingdom', 'uk', 'usa', 'united-states', 'uae',
  'netherlands', 'philippines', 'maldives', 'bahamas', 'gambia', 'czech-republic',
  'dominican-republic']);
const NEEDS_ARTICLE = COSMETIC_SLUGS;

/** Fixed copy. Calm, desk voice, no hype, no exclamation marks. */
const COPY = {
  month: {
    opener: 'What changed in travel money this month, and nothing else.',
    generalLeadIn: 'Here is everything that moved this month:',
    reassurance: 'Nothing changed this month for the country you follow. Its guide stands as it is.',
    tailLeadIn: 'Also this month:',
  },
  span: {
    opener: 'What changed in travel money since the last issue, and nothing else.',
    generalLeadIn: 'Here is everything that moved since the last issue:',
    reassurance: 'Nothing changed for the country you follow since the last issue. Its guide stands as it is.',
    tailLeadIn: 'Also since then:',
  },
  correctionsLeadIn: 'We also corrected:',
  footer: 'This is the monthly companion to the guides, which stay current between issues.',
  emptyOpener: 'Nothing material changed in the countries we track this month.',
  emptyBody: 'No tax rose, no rule took effect, no fee was added in anything we watch. The guides stand as they are. We will write again when something actually moves.',
};

/* ------------------------------------------------------------- house rules */

const BANNED_CHARS = [
  ['\u2014', 'em dash'],
  ['\u2013', 'en dash'],
  ['\u2012', 'figure dash'],
  ['\u2015', 'horizontal bar'],
  ['\u2212', 'minus sign'],
  ['\u2011', 'non-breaking hyphen'],
];

const HARD_PATTERNS = [
  [/\bU\.\s?S\.(\s?A\.)?/g, 'periods form of US, write US'],
  [/unbiased/gi, 'the word unbiased is banned'],
  [/!/g, 'exclamation mark'],
  [/\bGary\b|\bVarsanyi\b/g, 'personal name, the voice is the desk'],
];

const SOFT_PATTERNS = [
  [/(^|[^\w'])I([^\w']|$)/g, 'first person singular I, the voice is we'],
  [/(^|\W)(my|me)(\W|$)/gi, 'first person singular my or me, the voice is we'],
];

/**
 * Returns { hard: [...], soft: [...] } with a line number and the offending
 * line for each violation, so a bad changelog entry is easy to find.
 */
export function checkHouseRules(text) {
  const hard = [];
  const soft = [];
  const lines = String(text).split('\n');

  lines.forEach((line, i) => {
    for (const [char, label] of BANNED_CHARS) {
      if (line.includes(char)) hard.push({ line: i + 1, rule: label, text: line.trim() });
    }
    for (const [re, label] of HARD_PATTERNS) {
      re.lastIndex = 0;
      if (re.test(line)) hard.push({ line: i + 1, rule: label, text: line.trim() });
    }
    for (const [re, label] of SOFT_PATTERNS) {
      re.lastIndex = 0;
      if (re.test(line)) soft.push({ line: i + 1, rule: label, text: line.trim() });
    }
  });

  return { hard, soft };
}

/* ----------------------------------------------------------- date handling */

const RE_FULL = /^\d{4}-\d{2}-\d{2}$/;
const RE_MONTH = /^\d{4}-\d{2}$/;

function pad(n) {
  return String(n).padStart(2, '0');
}

function isoOf(d) {
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

function lastDayOfMonth(ym) {
  const [y, m] = ym.split('-').map(Number);
  return isoOf(new Date(Date.UTC(y, m, 0)));
}

function shiftDays(iso, days) {
  const [y, m, d] = iso.split('-').map(Number);
  return isoOf(new Date(Date.UTC(y, m - 1, d + days)));
}

function daysBetween(a, b) {
  const ms = Date.parse(`${b}T00:00:00Z`) - Date.parse(`${a}T00:00:00Z`);
  return Math.round(ms / 86400000);
}

/**
 * A 'YYYY-MM' entry means "sometime that month". Comparing its span rather
 * than a single day keeps it in the cycle that covers that month and out of
 * the next one.
 */
function spanOf(rawDate) {
  const raw = String(rawDate || '').trim();
  if (RE_FULL.test(raw)) return { start: raw, end: raw, partial: false };
  if (RE_MONTH.test(raw)) return { start: `${raw}-01`, end: lastDayOfMonth(raw), partial: true };
  return null;
}

function fallbackDisplayDate(rawDate) {
  const raw = String(rawDate || '').trim();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  if (RE_MONTH.test(raw)) {
    const [y, m] = raw.split('-').map(Number);
    return `${months[m - 1]} ${y}`;
  }
  if (RE_FULL.test(raw)) {
    const [y, m, d] = raw.split('-').map(Number);
    return `${d} ${months[m - 1]} ${y}`;
  }
  return raw;
}

/* --------------------------------------------------- the real country data */

const RE_SLUG = /^[a-z0-9-]+$/;

function slugsFromValue(value) {
  const out = new Map(); // slug -> display name or null
  const take = (slug, name) => {
    const s = String(slug || '').trim().toLowerCase();
    if (RE_SLUG.test(s) && !out.has(s)) out.set(s, typeof name === 'string' && name.trim() ? name.trim() : null);
  };

  if (Array.isArray(value)) {
    for (const item of value) {
      if (typeof item === 'string') take(item, null);
      else if (item && typeof item === 'object') {
        const slug = item.slug || item.id || item.code || item.key;
        const name = item.name || item.country || item.title || item.label;
        if (slug) take(slug, name);
      }
    }
    return out;
  }

  if (value && typeof value === 'object') {
    for (const [key, item] of Object.entries(value)) {
      if (item && typeof item === 'object') take(item.slug || key, item.name || item.country || item.title);
      else if (typeof item === 'string') take(key, item);
    }
  }
  return out;
}

/**
 * Loads country slugs and display names from the repo's own data. There is no
 * hardcoded country list anywhere in this file, so the set cannot drift from
 * the site. If it cannot be loaded the caller must stop rather than guess.
 */
export async function loadCountries(paths = COUNTRY_DATA_PATHS) {
  const tried = [];
  for (const path of paths) {
    if (!existsSync(path)) {
      tried.push(`${path} (not found)`);
      continue;
    }
    const mod = await import(pathToFileURL(path).href);
    const candidates = [];

    for (const [name, value] of Object.entries(mod)) {
      let resolved = value;
      if (typeof value === 'function' && /countr/i.test(name) && value.length === 0) {
        try {
          resolved = value();
        } catch {
          continue;
        }
      }
      const found = slugsFromValue(resolved);
      if (found.size) candidates.push({ name, found, named: /countr/i.test(name) });
    }

    if (!candidates.length) {
      tried.push(`${path} (no export looked like country records)`);
      continue;
    }

    candidates.sort((a, b) => (b.named - a.named) || (b.found.size - a.found.size));
    const best = candidates[0];
    return {
      slugs: new Set(best.found.keys()),
      names: best.found,
      source: `${path.replace(`${REPO_ROOT}/`, '')} export "${best.name}"`,
    };
  }

  throw new Error(
    `could not load the country set. Tried:\n  ${tried.join('\n  ')}\n`
    + 'Expected an export holding country records: an array of { slug, name }, an array of\n'
    + 'slug strings, or an object keyed by slug. Point COUNTRY_DATA_PATHS at the right file.',
  );
}

/**
 * Pulls the country slug out of an entry link. A first segment is a country
 * only if it is a member of the real country set, so a topic page such as
 * /passports-and-visas returns null and never gets a per-country block.
 */
export function deriveCountry(link, countrySlugs) {
  if (!link || typeof link !== 'string') return null;
  if (!countrySlugs || typeof countrySlugs.has !== 'function') {
    throw new Error('deriveCountry needs the real country set, see loadCountries()');
  }
  const raw = link.trim();
  if (!raw.startsWith('/')) return null; // external or anchor only
  const segments = raw.replace(/^\/+/, '').split(/[/?#]/).filter(Boolean).map((s) => s.toLowerCase());
  if (!segments.length) return null;

  const first = segments[0];
  if (countrySlugs.has(first)) return first;
  if (CONTAINER_SEGMENTS.has(first) && segments[1] && countrySlugs.has(segments[1])) return segments[1];
  return null;
}

export function countryLabel(slug, names) {
  const fromData = names && typeof names.get === 'function' ? names.get(slug) : null;
  const base = fromData
    || slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return NEEDS_ARTICLE.has(slug) ? `the ${base}` : base;
}

/* --------------------------------------------------------------- selection */

export function selectEntries(entries, { from, to }) {
  const kept = [];
  const skipped = [];

  for (const entry of entries || []) {
    const span = spanOf(entry && entry.date);
    if (!span) {
      skipped.push({ entry, reason: `unreadable date: ${JSON.stringify(entry && entry.date)}` });
      continue;
    }
    if (span.end >= from && span.start <= to) kept.push({ ...entry, _span: span });
  }

  // Sort on the span START, not the end. A vague 'YYYY-MM' entry would
  // otherwise outrank every dated entry in its own month.
  kept.sort((a, b) => {
    if (a._span.start !== b._span.start) return a._span.start < b._span.start ? 1 : -1;
    const ak = a.kind === 'correction' ? 1 : 0;
    const bk = b.kind === 'correction' ? 1 : 0;
    if (ak !== bk) return ak - bk;
    return String(a.title || '').localeCompare(String(b.title || ''));
  });

  return { kept, skipped };
}

/* ----------------------------------------------------------------- writing */

/** Words whose trailing period does not end a sentence. */
const ABBREVIATIONS = new Set(['e.g', 'i.e', 'approx', 'vs', 'no', 'mr', 'mrs', 'ms', 'dr',
  'st', 'jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'aug', 'sep', 'sept', 'oct', 'nov', 'dec',
  'fig', 'est', 'incl', 'max', 'min', 'etc']);

/**
 * First sentence, without splitting on an abbreviation. A period only ends a
 * sentence if whitespace and a capital follow it, the head is long enough to be
 * a sentence, and the word before it is not an abbreviation or an initial.
 */
function firstSentence(text) {
  const s = String(text || '').trim();
  if (!s) return '';
  const re = /([.?])\s+(?=[A-Z(])/g;
  let m = re.exec(s);
  while (m) {
    const head = s.slice(0, m.index + 1);
    const lastWord = (head.slice(0, -1).match(/[A-Za-z.]+$/) || [''])[0].toLowerCase();
    const isAbbrev = ABBREVIATIONS.has(lastWord.replace(/\.$/, ''));
    const isInitial = /^[A-Za-z]$/.test(lastWord) || /[A-Za-z]\.[A-Za-z]$/.test(lastWord);
    if (head.length >= 30 && !isAbbrev && !isInitial) return head.trim();
    m = re.exec(s);
  }
  return s;
}

function stripTrailingPeriod(s) {
  return String(s || '').trim().replace(/\.+$/, '');
}

function ensurePeriod(s) {
  const t = String(s || '').trim();
  if (!t) return '';
  return /[.?:]$/.test(t) ? t : `${t}.`;
}

function mdLink(entry) {
  const label = String(entry.linkLabel || 'Read the guide').trim();
  const href = String(entry.link || '').trim();
  return href ? `[${label}](${href})` : '';
}

/** Title as its own link, for the compressed tail. */
function titleLink(entry) {
  const title = stripTrailingPeriod(entry.title);
  const href = String(entry.link || '').trim();
  return href ? `[${title}](${href})` : title;
}

/** Counts what one reader sees: templating scaffolding does not count. */
export function countReaderWords(body, largestCountryBlock = '') {
  const withoutBlocks = String(body)
    .replace(/\{%[\s\S]*?%\}/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  const single = String(largestCountryBlock)
    .replace(/\{%[\s\S]*?%\}/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  const count = (s) => (s.match(/[^\s]+/g) || []).length;
  return count(withoutBlocks) + count(single);
}

const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function spellCount(n) {
  return n < NUMBER_WORDS.length ? NUMBER_WORDS[n] : String(n);
}

function buildSubject(lead, otherCount) {
  const base = stripTrailingPeriod(lead.title);
  if (otherCount <= 0) return base;
  // If the title already carries an "and" clause, a second one reads badly.
  const joiner = /,\s+(and|or)\s/.test(base) ? ' plus' : ', and';
  const suffix = otherCount === 1
    ? `${joiner} one other update`
    : `${joiner} ${spellCount(otherCount)} other updates`;
  return `${base}${suffix}`;
}

/**
 * Assembles the draft. Pure: no I/O, so the gate can call it on a fixture.
 * countrySlugs is required and must come from the repo's country data.
 * Returns { subject, body, draft, meta, warnings }.
 */
export function buildDigest({
  entries, from, to, displayDate = fallbackDisplayDate, countrySlugs, countryNames = null,
}) {
  if (!countrySlugs || typeof countrySlugs.has !== 'function' || countrySlugs.size === 0) {
    throw new Error('buildDigest needs a non-empty country set from the repo data, see loadCountries()');
  }

  const warnings = [];
  const { kept, skipped } = selectEntries(entries, { from, to });
  skipped.forEach((s) => warnings.push(`skipped an entry: ${s.reason}`));

  // A window covering more than one calendar month must not say "this month".
  const multiMonth = from.slice(0, 7) !== to.slice(0, 7);
  const copy = multiMonth ? COPY.span : COPY.month;

  const dateOf = (entry) => {
    try {
      const out = displayDate(entry.date);
      if (typeof out === 'string' && /\d{4}/.test(out) && !/invalid/i.test(out)) return out;
    } catch {
      /* fall through */
    }
    return fallbackDisplayDate(entry.date);
  };

  const annotated = kept.map((e) => ({ ...e, _country: deriveCountry(e.link, countrySlugs) }));
  const changes = annotated.filter((e) => e.kind !== 'correction');
  const corrections = annotated.filter((e) => e.kind === 'correction');

  // One block per changed country, newest entry wins if a country moved twice.
  const leadCandidates = LEAD_BLOCKS_INCLUDE_CORRECTIONS ? annotated : changes;
  const countryLead = new Map();
  for (const e of leadCandidates) {
    if (e._country && !countryLead.has(e._country)) countryLead.set(e._country, e);
  }
  const changedCountries = [...countryLead.keys()].sort();
  const nonCountryLinks = [...new Set(annotated.filter((e) => !e._country && e.link).map((e) => e.link))];

  if (!kept.length) {
    const body = [COPY.emptyOpener, '', COPY.emptyBody, '', COPY.footer].join('\n');
    return {
      subject: 'Nothing material changed this month',
      body,
      draft: `SUBJECT: Nothing material changed this month\n\n${body}\n`,
      meta: {
        from, to, multiMonth, selected: [], changes: [], corrections: [], changedCountries: [],
        nonCountryLinks: [], readerWords: countReaderWords(body), totalWords: countReaderWords(body),
        fullBlocks: 0, tail: [], compressedCorrections: false, empty: true,
      },
      warnings,
    };
  }

  const render = (fullCount, compressCorrections) => {
    const full = changes.slice(0, fullCount);
    const tail = changes.slice(fullCount);
    const parts = [];

    parts.push(copy.opener);
    parts.push('');

    const countryBlocks = [];
    for (const slug of changedCountries) {
      const e = countryLead.get(slug);
      const why = firstSentence(e.why || e.what || '');
      const line = `**For ${countryLabel(slug, countryNames)}:** ${ensurePeriod(stripTrailingPeriod(e.title))} ${ensurePeriod(why)} ${mdLink(e)}`.replace(/\s+/g, ' ').trim();
      countryBlocks.push(line);
      parts.push(`{% if "country:${slug}" in subscriber.tags %}`);
      parts.push(line);
      parts.push('');
      parts.push('{% endif %}');
    }

    // Fires for subscribers who are not on the broad list and do not follow any
    // country that changed. In a corrections-only cycle the negation list is
    // empty and every country subscriber correctly gets the reassurance.
    const negatives = changedCountries.map((s) => `"country:${s}" not in subscriber.tags`);
    const test = [`"${GENERAL_TAG}" not in subscriber.tags`, ...negatives].join(' and ');
    parts.push(`{% if ${test} %}`);
    parts.push(copy.reassurance);
    parts.push('');
    parts.push('{% endif %}');
    parts.push('');

    parts.push(copy.generalLeadIn);
    parts.push('');

    for (const e of full) {
      parts.push(`**${stripTrailingPeriod(e.title)}** (${dateOf(e)})`);
      if (e.what) parts.push(ensurePeriod(e.what));
      if (e.why) parts.push(ensurePeriod(e.why));
      const link = mdLink(e);
      if (link) parts.push(link);
      parts.push('');
    }

    if (tail.length) {
      parts.push(`${copy.tailLeadIn} ${ensurePeriod(tail.map(titleLink).join('; '))}`);
      parts.push('');
    }

    if (corrections.length) {
      if (compressCorrections) {
        parts.push(`${COPY.correctionsLeadIn} ${ensurePeriod(corrections.map(titleLink).join('; '))}`);
      } else {
        parts.push(COPY.correctionsLeadIn);
        for (const e of corrections) {
          const detail = firstSentence(e.what || '');
          parts.push(`- ${ensurePeriod(stripTrailingPeriod(e.title))} ${ensurePeriod(detail)} ${mdLink(e)}`.replace(/\s+/g, ' ').trim());
        }
      }
      parts.push('');
    }

    parts.push(COPY.footer);

    const body = parts.join('\n').replace(/\n{3,}/g, '\n\n').trim();
    const largest = countryBlocks.reduce((a, b) => (countReaderWords(b) > countReaderWords(a) ? b : a), '');
    return { body, tail, full, largest, compressCorrections };
  };

  // The country blocks all sit in body; discount them and add back just one,
  // because a reader only ever sees their own.
  const readerWords = (r) => countReaderWords(
    r.body.replace(/\{% if "country:[^%]*%\}[\s\S]*?\{% endif %\}/g, ' '),
    r.largest,
  );

  // Hard cap on full blocks first, then trim further only if still too long.
  let fullCount = Math.min(MAX_FULL_BLOCKS, changes.length);
  let out = render(fullCount, false);
  while (readerWords(out) > WORDS_MAX && fullCount > 1) {
    fullCount -= 1;
    out = render(fullCount, false);
  }
  if (readerWords(out) > WORDS_MAX && corrections.length > 1) {
    out = render(fullCount, true);
  }

  const words = readerWords(out);
  if (changes.length > MAX_FULL_BLOCKS) {
    warnings.push(`heavy cycle: ${changes.length} changes, showing ${out.full.length} in full and naming ${out.tail.length} in the tail line.`);
  }
  if (words > WORDS_MAX) {
    warnings.push(`reader-facing body is about ${words} words, over the ${WORDS_MAX} word ceiling even after compressing. Shorten a what or why field in changelog.js.`);
  }
  if (words < WORDS_MIN) {
    warnings.push(`reader-facing body is about ${words} words, under the ${WORDS_MIN} word target. Fine for a quiet cycle. Do not pad it.`);
  }

  const lead = out.full[0] || changes[0] || corrections[0];
  const subject = buildSubject(lead, kept.length - 1);
  if (subject.length > SUBJECT_MAX) {
    warnings.push(`subject is ${subject.length} characters, consider a shorter title in changelog.js: ${subject}`);
  }

  return {
    subject,
    body: out.body,
    draft: `SUBJECT: ${subject}\n\n${out.body}\n`,
    meta: {
      from,
      to,
      multiMonth,
      selected: kept,
      changes,
      corrections,
      changedCountries,
      nonCountryLinks,
      readerWords: words,
      totalWords: countReaderWords(out.body),
      fullBlocks: out.full.length,
      tail: out.tail.map((e) => e.title),
      compressedCorrections: Boolean(out.compressCorrections),
      empty: false,
    },
    warnings,
  };
}

/* --------------------------------------------------------------- CLI parts */

function parseArgs(argv) {
  const args = { since: null, month: null, out: null, record: false, help: false, ignoreLastDigest: false, emptyNote: false };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '--help' || a === '-h') args.help = true;
    else if (a === '--since') args.since = argv[++i];
    else if (a === '--month') args.month = argv[++i];
    else if (a === '--out') args.out = argv[++i];
    else if (a === '--record') args.record = true;
    else if (a === '--ignore-last-digest') args.ignoreLastDigest = true;
    else if (a === '--empty-note') args.emptyNote = true;
    else throw new Error(`unknown argument: ${a}`);
  }
  return args;
}

export function resolveWindow(args, today, lastDigestPath = LAST_DIGEST_PATH) {
  if (args.since) {
    if (!RE_FULL.test(args.since)) throw new Error(`--since needs YYYY-MM-DD, got: ${args.since}`);
    return { from: shiftDays(args.since, 1), to: today, source: `--since ${args.since}` };
  }
  if (args.month) {
    if (!RE_MONTH.test(args.month)) throw new Error(`--month needs YYYY-MM, got: ${args.month}`);
    return { from: `${args.month}-01`, to: lastDayOfMonth(args.month), source: `--month ${args.month}` };
  }
  if (!args.ignoreLastDigest && existsSync(lastDigestPath)) {
    const recorded = readFileSync(lastDigestPath, 'utf8').trim().split(/\s+/)[0];
    if (RE_FULL.test(recorded)) {
      const stale = daysBetween(recorded, today) > STALE_LAST_DIGEST_DAYS;
      return {
        from: shiftDays(recorded, 1),
        to: today,
        source: `.last-digest (${recorded})`,
        stale: stale ? daysBetween(recorded, today) : 0,
      };
    }
  }
  const [y, m] = today.split('-').map(Number);
  const prev = `${m === 1 ? y - 1 : y}-${pad(m === 1 ? 12 : m - 1)}`;
  return { from: `${prev}-01`, to: lastDayOfMonth(prev), source: `default: last calendar month (${prev})` };
}

async function loadChangelog(path) {
  if (!existsSync(path)) throw new Error(`cannot find ${path}. Run this from the repo.`);
  const mod = await import(pathToFileURL(path).href);
  let entries = null;
  if (Array.isArray(mod.changelogEntries)) entries = mod.changelogEntries;
  else if (typeof mod.changelog === 'function') entries = mod.changelog();
  else if (Array.isArray(mod.default)) entries = mod.default;
  else if (Array.isArray(mod.entries)) entries = mod.entries;
  if (!Array.isArray(entries)) {
    throw new Error('changelog.js did not give an array. Expected changelogEntries, changelog(), or a default export.');
  }
  return { entries, displayDate: typeof mod.displayDate === 'function' ? mod.displayDate : fallbackDisplayDate };
}

const HELP = `
draft-monthly-digest.mjs: drafts the monthly what-changed email. It never sends.

  --since YYYY-MM-DD     entries after this date (the date of your last issue)
  --month YYYY-MM        one whole calendar month
  --out PATH             also write the draft to a file
  --record               after a good draft, write today's date to .last-digest
  --ignore-last-digest   skip .last-digest and use the last calendar month
  --empty-note           if nothing changed, print the short quiet-cycle note
  --help

Order of precedence: --since, then --month, then .last-digest, then the last
calendar month. The window used is always printed to stderr. The draft goes to
stdout; everything else goes to stderr.
`.trim();

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    process.stderr.write(`${HELP}\n`);
    return 0;
  }

  const today = isoOf(new Date());
  const win = resolveWindow(args, today);
  const { entries, displayDate } = await loadChangelog(CHANGELOG_PATH);
  const countries = await loadCountries();

  const result = buildDigest({
    entries,
    from: win.from,
    to: win.to,
    displayDate,
    countrySlugs: countries.slugs,
    countryNames: countries.names,
  });

  const log = (s) => process.stderr.write(`${s}\n`);
  log('');
  log(`window    ${win.from} to ${win.to}  (${win.source})`);
  if (win.stale) log(`WARNING   .last-digest is ${win.stale} days old. Check it is really your last issue date.`);
  log(`countries ${countries.slugs.size} slugs from ${countries.source}`);
  log(`entries   ${result.meta.selected.length} of ${entries.length} in the log`);
  log(`          ${result.meta.changes.length} change, ${result.meta.corrections.length} correction`);
  log(`blocks    ${result.meta.fullBlocks} full, ${result.meta.tail.length} named in the tail line`);
  log(`per-country ${result.meta.changedCountries.join(', ') || 'none'}`);
  if (result.meta.nonCountryLinks.length) {
    log(`not a country (general log only): ${result.meta.nonCountryLinks.join(', ')}`);
  }
  result.meta.selected.forEach((e) => log(`          ${e.date}  ${e.kind || 'change'}  ${e.title}`));

  if (result.meta.empty && !args.emptyNote) {
    log('');
    log('Nothing changed in this window. The honest move is to send nothing.');
    log('If you want the short quiet-cycle note instead, rerun with --empty-note.');
    log('');
    return 0;
  }

  const { hard, soft } = checkHouseRules(result.draft);
  if (hard.length) {
    log('');
    log('HOUSE RULES FAILED. No draft written. Fix the source text in src/data/changelog.js:');
    hard.forEach((v) => log(`  line ${v.line}: ${v.rule}\n    ${v.text}`));
    log('');
    return 1;
  }
  soft.forEach((v) => log(`NOTE      line ${v.line}: ${v.rule}\n            ${v.text}`));
  result.warnings.forEach((w) => log(`NOTE      ${w}`));

  process.stdout.write(result.draft);

  if (args.out) {
    const target = resolve(REPO_ROOT, args.out);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, result.draft, 'utf8');
    log(`wrote     ${target}`);
  }
  if (args.record) {
    writeFileSync(LAST_DIGEST_PATH, `${today}\n`, 'utf8');
    log(`recorded  ${today} in .last-digest`);
  }

  log('');
  log('Next: read it as a reader, paste into Buttondown, send yourself a preview,');
  log('open the preview on your phone, then schedule. Nothing here sends anything.');
  log('');
  const verdict = result.meta.readerWords > WORDS_MAX
    ? 'OVER, trim a what or why field'
    : result.meta.readerWords < WORDS_MIN
      ? 'under target, fine for a quiet cycle, do not pad'
      : 'in range';
  log(`WORD COUNT ${result.meta.readerWords} per reader (target ${WORDS_MIN} to ${WORDS_MAX}): ${verdict}`);
  log('');
  return 0;
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  main()
    .then((code) => process.exit(code))
    .catch((err) => {
      process.stderr.write(`\nERROR     ${err.message}\n\n`);
      process.exit(1);
    });
}
