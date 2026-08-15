#!/usr/bin/env node
// Flags high-churn facts that may be due for another look. Reads the keyFacts
// array on each live country and checks the age of every item's `checked` date
// against a per-type threshold, so the fastest-moving numbers get flagged first.
// Triggered by workflows/fact-staleness.yml on a schedule.
//
// This is ADVISORY and has NO side effects. It reads data, prints findings, and
// exits 0 even when it finds stale items, so it never blocks anything and never
// sends an email (keyFacts edits are separate from the costUpdate field that the
// alert script watches, so nothing here can reach a subscriber). Set the GitHub
// repo variable FACT_STALENESS_STRICT=true if you later want a run with findings
// to exit non-zero; by default it does not.
//
// What it looks at, per keyFacts item:
//   - `checked` older than the threshold for its type          -> "stale"
//   - status "proposed"                                        -> "still a proposal, confirm"
//   - a "proposed" item whose `effective` date has passed      -> "proposed but its date passed"
//   - an "upcoming" `effective` date within the next 30 days   -> "takes effect soon, re-check wording"
//   - an `effective` date that has just passed (last 45 days)  -> "should be in effect now, confirm"
//   - a missing or unparseable `checked` date                  -> "no checked date"
// As a secondary, clearly-separated pass it also flags any live guide whose
// page-level checkedISO is older than the general threshold, so guides without a
// keyFacts block still get a nudge while that rollout is in progress.
//
// As a third, clearly-separated pass it walks every live spoke (the focused
// sub-pages under each country) and flags any whose page-level checkedISO is
// missing or older than the general threshold. Spokes carry a page-level date
// rather than a keyFacts block, so this mirrors the secondary pass, one row per
// live spoke, using the general threshold for every topic (no per-topic spoke
// thresholds). Findings are identified as country-slug / spoke-slug.
//
// As a fourth, clearly-separated pass it reads hero-facts.js, the one-per-country
// gut-punch that is the first thing a traveler reads, and therefore the most
// visible place on the site to be wrong. Two checks per fact:
//   - checked-age, against the same thresholds as everything else
//   - every `flag`, surfaced on EVERY run regardless of date age
// The flag surfacing is the point of this pass. A flag means "a human needs to
// look at this on a schedule a date threshold will not catch", so it is reported
// until somebody removes it from the data. That is what keeps a note like "swap
// this fact once the surcharge ban takes effect" from being forgotten. Every kind
// is surfaced, both the reader-facing ones (volatile, seasonal, freshness) and the
// desk notes (date-conflict, novelty, watch, sourcing, verify, expiry), through one
// general path, so a kind added later behaves the same with no code change here.
// A `volatile` flag sorts first and is marked, because it moves fastest.
//
// Two notes on where the hero-fact dates actually come from, because the field
// names are not what you would guess. A hero fact carries no date of its own
// today: it inherits the country's date, and the parseable one is `checkedISO`
// (the country's `checked` field is a display string like "Jul 2026", which is not
// a machine date). A per-fact override is read when present, in either spelling,
// so the override path is live the day somebody uses it. On thresholds: a hero
// fact is a prose sentence, not a labelled figure, so running the keyword
// classifier over its full text misreads it badly (any sentence containing the
// word "rate" lands in the 30-day exchange bucket). The classifier is therefore
// run over the fact's curated accent label only, and only its fee and tax verdicts
// are accepted. Everything else is general, per the rule that an unsure read
// should take the general threshold rather than a tight one.
//
// As a fifth pass it reads arrival-forms.js, the free-vs-fake thesis data, and
// flags two things: a checked date past the general mark, and every entry in
// `pendingForms`. The pending list is a standing to-do rather than an error, so it
// is listed every run: each one that gets a sourced official URL raises the thesis
// count on /arrival-forms. Note that the forms carry no per-entry date today, only
// one file-level `arrivalFormsChecked` covering the whole list, written in a human
// "Mon YYYY" form. That is read as the first of the month and reported as a single
// list-level row rather than repeated against every form, which would be the same
// finding printed nine times. A per-entry date is read when present.
//
// Thresholds (days) match the review cadence described on /methodology:
//   exchange rate 30, fee or entry rule 90, tax or levy 120, general 180.
//
// TWO COUNTS AT THE END, and they are not the same number. "Past a threshold" is the
// count of items that genuinely aged out, and it is what fact-staleness.yml delivers
// on. "Done. N item(s) worth a look." is the full count including standing items, the
// hero flags and pending forms, which report on every run by design. The weekly issue
// fires off the first number so it stays an exception signal rather than a Monday
// ritual; the standing rows still print in the run output either way.
//
// Env: FACT_STALENESS_STRICT ("true" to exit non-zero when findings exist).
// Note that STRICT still reads the full total, as originally specified. Because
// standing items never clear, turning STRICT on today would make every run exit
// non-zero. Point it at `aged` instead of `total` below if that is ever wanted.

import { pathToFileURL } from 'node:url';
import { existsSync } from 'node:fs';
import path from 'node:path';

const DATA_INDEX = 'src/data/index.js';
const HERO_FACTS = 'src/data/hero-facts.js';
const ARRIVAL_FORMS = 'src/data/arrival-forms.js';
const STRICT = String(process.env.FACT_STALENESS_STRICT || '').toLowerCase() === 'true';

const THRESHOLDS = { exchange: 30, fee: 90, tax: 120, general: 180 };

// Sort order for surfaced hero-fact flags. Lower sorts first. `volatile` leads
// because it moves fastest, then the rest of the reader-facing kinds, then the desk
// notes. An unknown kind falls to the end rather than being dropped, which matches
// how GutPunch treats one: unrecognised is a desk note, never an error.
const FLAG_ORDER = {
  volatile: 0, seasonal: 1, freshness: 2,
  'date-conflict': 3, expiry: 4, verify: 5, watch: 6, sourcing: 7, novelty: 8,
};
const flagRank = (kind) => (kind in FLAG_ORDER ? FLAG_ORDER[kind] : 99);
const SOON_DAYS = 30;   // an upcoming effective date this close is worth a look
const JUST_DAYS = 45;   // an effective date this recently past is worth confirming

function die(msg) { console.error('ERROR: ' + msg); process.exit(1); }
function log(msg) { console.log(msg); }

async function loadCountries(rootDir) {
  const abs = path.resolve(rootDir, DATA_INDEX);
  if (!existsSync(abs)) return null;
  const mod = await import(pathToFileURL(abs).href + '?t=' + Date.now() + '-' + Math.random());
  const list = mod.countries || [];
  const out = [];
  for (const c of list) { if (c && c.slug) out.push(c); }
  return out;
}

// Read any data module the same cache-busted, read-only way loadCountries does.
// Returns null when the file is not in the tree, so a missing source degrades to a
// skipped pass rather than a failed run.
async function loadModule(rootDir, rel) {
  const abs = path.resolve(rootDir, rel);
  if (!existsSync(abs)) return null;
  return import(pathToFileURL(abs).href + '?t=' + Date.now() + '-' + Math.random());
}

// Parse an ISO date (YYYY-MM-DD) at UTC midnight. Returns null if unusable.
function parseISO(iso) {
  if (!iso || typeof iso !== 'string') return null;
  const d = new Date(iso + 'T00:00:00Z');
  return isNaN(d.getTime()) ? null : d;
}

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

// Parse either a machine date (YYYY-MM-DD) or the display form the desk writes on
// file-level dates ("Aug 2026"), which is read as the first of that month. Used so
// the arrival-forms pass can judge the one date that file actually carries.
function parseLooseDate(value) {
  const iso = parseISO(value);
  if (iso) return iso;
  if (!value || typeof value !== 'string') return null;
  const m = value.trim().toLowerCase().match(/^([a-z]{3})[a-z]*\.?\s+(\d{4})$/);
  if (!m) return null;
  const idx = MONTHS.indexOf(m[1]);
  if (idx < 0) return null;
  return parseISO(m[2] + '-' + String(idx + 1).padStart(2, '0') + '-01');
}

function daysBetween(a, b) {
  return Math.round((a.getTime() - b.getTime()) / 86400000);
}

// Pick a threshold from the item's label, the same kind of keyword read the
// guide component uses to choose a source icon. No new data field required.
function classify(item) {
  const s = String((item && item.label) || '').toLowerCase();
  if (/exchange|\bfx\b|\brate\b|conversion/.test(s)) return { key: 'exchange', label: 'exchange rate', days: THRESHOLDS.exchange };
  if (/tax|levy|ortstaxe|tourist|accommodation|lodging|occupancy|city tax/.test(s)) return { key: 'tax', label: 'tax or levy', days: THRESHOLDS.tax };
  if (/fee|visa|\beta\b|entry|arrival|departure|permit|tourist card/.test(s)) return { key: 'fee', label: 'fee or entry rule', days: THRESHOLDS.fee };
  return { key: 'general', label: 'general', days: THRESHOLDS.general };
}

async function main() {
  const now = new Date();
  const today = parseISO(now.toISOString().slice(0, 10)) || now;
  log('Fact staleness check (advisory, no side effects). Today: ' + now.toISOString().slice(0, 10));
  if (STRICT) log('Strict mode on: findings will make this run exit non-zero.');

  const countries = await loadCountries('.');
  if (!countries) die('Could not load ' + DATA_INDEX + ' from the current tree.');

  const live = countries.filter(c => c.live);
  log('Scanning ' + live.length + ' live guides.\n');

  const findings = [];
  const add = (slug, item, msg) => findings.push({ slug, item, msg });

  // --- primary pass: keyFacts items ---
  let withKeyFacts = 0;
  for (const c of live) {
    const kf = Array.isArray(c.keyFacts) ? c.keyFacts : null;
    if (!kf || kf.length === 0) continue;
    withKeyFacts++;
    for (const item of kf) {
      const label = (item && item.label) || '(unlabeled fact)';
      const cls = classify(item);
      const checked = parseISO(item && item.checked);
      const eff = parseISO(item && item.effective);
      const status = (item && item.status) || '';

      if (!checked) {
        add(c.slug, label, 'no usable checked date, so its age cannot be judged');
      } else {
        const age = daysBetween(today, checked);
        if (age > cls.days) {
          add(c.slug, label, 'stale: checked ' + age + ' days ago, over the ' + cls.days + '-day mark for a ' + cls.label);
        }
      }

      if (status === 'proposed') {
        add(c.slug, label, 'still marked proposed, so confirm it has not been enacted or dropped');
        if (eff && daysBetween(today, eff) > 0) {
          add(c.slug, label, 'marked proposed but its effective date has already passed, so its status likely needs updating');
        }
      } else if (eff) {
        const d = daysBetween(eff, today); // positive = in the future
        if (d > 0 && d <= SOON_DAYS) {
          add(c.slug, label, 'takes effect in ' + d + ' days, so re-check the wording around it');
        } else if (d < 0 && -d <= JUST_DAYS) {
          add(c.slug, label, 'effective date passed ' + (-d) + ' days ago, so confirm it is now in effect as written');
        }
      }
    }
  }

  // --- secondary pass: page-level check date for guides without keyFacts ---
  const noKf = [];
  for (const c of live) {
    if (Array.isArray(c.keyFacts) && c.keyFacts.length > 0) continue;
    const checked = parseISO(c.checkedISO);
    if (!checked) { noKf.push({ slug: c.slug, msg: 'no usable checkedISO on the guide' }); continue; }
    const age = daysBetween(today, checked);
    if (age > THRESHOLDS.general) noKf.push({ slug: c.slug, msg: 'guide last checked ' + age + ' days ago, over the ' + THRESHOLDS.general + '-day general mark' });
  }

  // --- third pass: page-level check date on each live spoke ---
  // One row per live spoke. Spokes carry a page-level checkedISO rather than a
  // keyFacts block, so this mirrors the secondary pass above and uses the general
  // threshold for every topic. Kept deliberately simple: no per-topic spoke
  // thresholds. Each finding is identified as country-slug / spoke-slug (with the
  // topic in parentheses when present) so the row stays unambiguous even when two
  // spokes share a topic.
  const spokeFindings = [];
  let liveSpokes = 0;
  for (const c of live) {
    if (!Array.isArray(c.spokes)) continue;
    for (const s of c.spokes) {
      if (!s || s.live !== true) continue;
      liveSpokes++;
      const id = c.slug + ' / ' + (s.slug || '(unslugged spoke)') + (s.topic ? ' (' + s.topic + ')' : '');
      const checked = parseISO(s.checkedISO);
      if (!checked) { spokeFindings.push({ id, msg: 'no usable checkedISO' }); continue; }
      const age = daysBetween(today, checked);
      if (age > THRESHOLDS.general) spokeFindings.push({ id, msg: 'spoke last checked ' + age + ' days ago, over the ' + THRESHOLDS.general + '-day general mark' });
    }
  }

  // --- fourth pass: hero facts ---
  // The gut-punch fact on each country page. Two independent checks per fact: how
  // old its date is, and whether it carries a flag. The flag check ignores the date
  // entirely and reports on every run, which is the whole reason this pass exists.
  const heroFindings = [];
  let heroScanned = 0;
  let heroEntries = 0;
  const heroMod = await loadModule('.', HERO_FACTS);
  const heroFacts = (heroMod && heroMod.heroFacts) || null;
  if (heroFacts) {
    const liveBySlug = {};
    for (const c of live) liveBySlug[c.slug] = c;
    heroEntries = Object.keys(heroFacts).length;

    for (const slug of Object.keys(heroFacts).sort()) {
      const f = heroFacts[slug];
      if (!f) continue;
      const c = liveBySlug[slug];
      if (!c) continue;               // a fact on a country that is not live yet
      heroScanned++;

      // A short handle for the row, so a finding names the fact and not just its
      // country. The accent label is the curated one where a fact has an accent;
      // failing that the shape; failing that a clipped opening of the fact itself,
      // which is always present and always tells you which claim is meant.
      const clip = String(f.fact || '').replace(/\s+/g, ' ').trim().slice(0, 48);
      const handle = (f.accent && f.accent.label)
        || f.shape
        || (clip ? clip + (String(f.fact || '').length > 48 ? '...' : '') : 'hero fact');
      const id = slug + ' / ' + handle;

      // Date: the fact's own override in either spelling, else the country's
      // machine date. See the header note on why this is checkedISO and not checked.
      const own = parseISO(f.checkedISO) || parseISO(f.checked);
      const checked = own || parseISO(c.checkedISO);
      const source = own ? 'the fact' : 'its guide';

      // Threshold: classify the curated accent label only, and accept only the fee
      // and tax verdicts. Anything else, including no accent at all, is general.
      const verdict = classify({ label: (f.accent && f.accent.label) || '' });
      const cls = (verdict.key === 'fee' || verdict.key === 'tax')
        ? verdict
        : { key: 'general', label: 'general', days: THRESHOLDS.general };

      if (!checked) {
        heroFindings.push({ id, rank: 50, standing: false, msg: 'no usable checked date on the fact or its guide, so its age cannot be judged' });
      } else {
        const age = daysBetween(today, checked);
        if (age > cls.days) {
          heroFindings.push({ id, rank: 50, standing: false, msg: 'stale: ' + source + ' was checked ' + age + ' days ago, over the ' + cls.days + '-day mark for a ' + cls.label });
        }
      }

      // Flag surfacing. Reported regardless of age, every run, until the flag is
      // removed from the data. One general path, so any kind added later is carried
      // with no change here. Marked standing: a flag never ages out, so it is listed
      // in the run output but does not by itself trigger the weekly issue.
      const flag = f.flag;
      if (flag && flag.kind) {
        const kind = String(flag.kind);
        const note = String(flag.note || '(no note)');
        const lead = kind === 'volatile' ? 'flagged volatile (moves fastest, look here first)' : 'flagged ' + kind;
        heroFindings.push({ id, rank: flagRank(kind), standing: true, msg: lead + ': ' + note });
      }
    }
  }

  // --- fifth pass: arrival forms ---
  // Stale dates, plus the pending list, which is a standing to-do rather than an
  // error and is therefore printed on every run.
  const formFindings = [];
  let formsScanned = 0;
  const formsMod = await loadModule('.', ARRIVAL_FORMS);
  if (formsMod) {
    const forms = Array.isArray(formsMod.arrivalForms) ? formsMod.arrivalForms : [];
    const pending = Array.isArray(formsMod.pendingForms) ? formsMod.pendingForms : [];
    formsScanned = forms.length;

    // The one date the file carries covers the whole list, so it is judged once and
    // reported as one row. Repeating it against every form would print the same
    // finding nine times and bury the pending list underneath it.
    const listDate = parseLooseDate(formsMod.arrivalFormsChecked);
    if (!listDate) {
      formFindings.push({ id: 'the forms list', standing: false, msg: 'no usable arrivalFormsChecked date, so the list age cannot be judged' });
    } else {
      const age = daysBetween(today, listDate);
      if (age > THRESHOLDS.general) {
        formFindings.push({ id: 'the forms list', standing: false, msg: 'list last checked ' + age + ' days ago, over the ' + THRESHOLDS.general + '-day general mark' });
      }
    }

    // Per-entry dates, for the day a form carries its own.
    for (const f of forms) {
      if (!f) continue;
      const own = parseLooseDate(f.checkedISO) || parseLooseDate(f.checked);
      if (!own) continue;
      const age = daysBetween(today, own);
      const id = (f.country || f.slug || 'unnamed') + ' / ' + (f.name || 'unnamed form');
      if (age > THRESHOLDS.general) {
        formFindings.push({ id, standing: false, msg: 'last checked ' + age + ' days ago, over the ' + THRESHOLDS.general + '-day general mark' });
      }
    }

    // Pending forms are a standing to-do, not something that ages out, so they are
    // listed every run but excluded from the past-a-threshold count.
    for (const p of pending) {
      if (!p) continue;
      const id = (p.country || p.slug || 'unnamed') + ' / ' + (p.name || 'unnamed form');
      const need = String(p.need || '').trim();
      formFindings.push({ id, standing: true, msg: 'pending, still needs a sourced official URL.' + (need ? ' ' + need : '') });
    }
  }

  // --- report ---
  log('Guides carrying a keyFacts block: ' + withKeyFacts + ' of ' + live.length + '.');
  log('Scanned ' + liveSpokes + ' live spokes across the catalogue.');
  if (heroFacts) log('Scanned ' + heroScanned + ' hero facts on live guides, of ' + heroEntries + ' in the map.');
  if (formsMod) log('Scanned ' + formsScanned + ' arrival forms.');
  if (findings.length === 0) {
    log('keyFacts: nothing due for a look right now.\n');
  } else {
    log('keyFacts findings (' + findings.length + '):');
    const bySlug = {};
    for (const f of findings) { (bySlug[f.slug] = bySlug[f.slug] || []).push(f); }
    for (const slug of Object.keys(bySlug).sort()) {
      log('  ' + slug + ':');
      for (const f of bySlug[slug]) log('    - ' + f.item + ': ' + f.msg);
    }
    log('');
  }

  if (noKf.length > 0) {
    log('Guides without keyFacts that are past the general mark (' + noKf.length + '):');
    for (const g of noKf.sort((a, b) => a.slug.localeCompare(b.slug))) log('    - ' + g.slug + ': ' + g.msg);
    log('');
  }

  if (spokeFindings.length > 0) {
    log('Spokes past the general mark (' + spokeFindings.length + '):');
    for (const f of spokeFindings.sort((a, b) => a.id.localeCompare(b.id))) log('    - ' + f.id + ': ' + f.msg);
    log('');
  }

  if (heroFindings.length > 0) {
    log('Hero facts worth a look (' + heroFindings.length + '):');
    // Flags sort ahead of date findings, volatile ahead of everything, then by row.
    const sorted = heroFindings.slice().sort((a, b) => (a.rank - b.rank) || a.id.localeCompare(b.id));
    for (const f of sorted) log('    - ' + f.id + ': ' + f.msg);
    log('');
  }

  if (formFindings.length > 0) {
    log('Arrival forms worth a look (' + formFindings.length + '):');
    for (const f of formFindings) log('    - ' + f.id + ': ' + f.msg);
    log('');
  }

  // Two counts, because they answer different questions. `aged` is the trigger: items
  // that genuinely passed a date threshold, which is a new event worth an email.
  // `total` also includes standing items, the hero flags and pending forms, which
  // report on every run by design and never age out. Delivering off the total would
  // mean an issue every single Monday forever, which trains everyone to ignore it.
  // The standing rows still print above, so nothing is hidden from the run log.
  const standing = heroFindings.filter(f => f.standing).length
    + formFindings.filter(f => f.standing).length;
  const aged = findings.length + noKf.length + spokeFindings.length
    + heroFindings.filter(f => !f.standing).length
    + formFindings.filter(f => !f.standing).length;
  const total = findings.length + noKf.length + spokeFindings.length + heroFindings.length + formFindings.length;

  log('Past a threshold: ' + aged + ' item(s) that aged out.'
    + (standing > 0 ? ' Plus ' + standing + ' standing item(s), the hero flags and pending forms listed above, which report every run and never age out.' : ''));
  log('Done. ' + total + ' item(s) worth a look.' + (STRICT && total > 0 ? ' Exiting non-zero (strict mode).' : ''));
  if (STRICT && total > 0) process.exit(1);
}

main().catch(e => die((e && e.stack) || String(e)));
