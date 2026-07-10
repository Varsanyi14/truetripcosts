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
// Thresholds (days) match the review cadence described on /methodology:
//   exchange rate 30, fee or entry rule 90, tax or levy 120, general 180.
//
// Env: FACT_STALENESS_STRICT ("true" to exit non-zero when findings exist).

import { pathToFileURL } from 'node:url';
import { existsSync } from 'node:fs';
import path from 'node:path';

const DATA_INDEX = 'src/data/index.js';
const STRICT = String(process.env.FACT_STALENESS_STRICT || '').toLowerCase() === 'true';

const THRESHOLDS = { exchange: 30, fee: 90, tax: 120, general: 180 };
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

// Parse an ISO date (YYYY-MM-DD) at UTC midnight. Returns null if unusable.
function parseISO(iso) {
  if (!iso || typeof iso !== 'string') return null;
  const d = new Date(iso + 'T00:00:00Z');
  return isNaN(d.getTime()) ? null : d;
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

  // --- report ---
  log('Guides carrying a keyFacts block: ' + withKeyFacts + ' of ' + live.length + '.');
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

  const total = findings.length + noKf.length;
  log('Done. ' + total + ' item(s) worth a look.' + (STRICT && total > 0 ? ' Exiting non-zero (strict mode).' : ''));
  if (STRICT && total > 0) process.exit(1);
}

main().catch(e => die((e && e.stack) || String(e)));
