#!/usr/bin/env node
// Sends a Buttondown alert to a country's subscribers when that country's cost
// data changes. Triggered by .github/workflows/country-alerts.yml on pushes
// that touch src/data/**.
//
// A country "changed" when its top-level costUpdate.on differs from the value
// in the previous commit. costUpdate is a field the author sets ONLY when the
// money actually changed, so routine re-checks (checkedISO bumps) never fire an
// alert. costUpdate.note becomes the body of the email.
//
// Expected shape in a country data file (top level, optional):
//   costUpdate: { on: "2026-07-15", note: "What changed, in a sentence or two." }
//
// Safety:
//   - Sends to exactly one tag (country:<slug>) per country, resolved to its
//     tag id. If that tag does not exist yet (nobody picked the country), it
//     sends nothing for that country. It never sends with an empty filter, so
//     it can never reach the whole list.
//   - If the previous commit cannot be read, it sends nothing.
//   - Set the GitHub repo variable ALERTS_DRY_RUN=true to create drafts you can
//     review in Buttondown instead of sending.
//
// Env: BUTTONDOWN_API_KEY (a key with Emails: write and Sending: on),
//      BEFORE_SHA (github.event.before), ALERTS_DRY_RUN ("true" to dry-run).

import { execSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { existsSync } from 'node:fs';
import path from 'node:path';

const API = 'https://api.buttondown.com/v1';
const SITE = 'https://truetripcosts.com';
const DATA_INDEX = 'src/data/index.js';
const DRY_RUN = String(process.env.ALERTS_DRY_RUN || '').toLowerCase() === 'true';
const KEY = process.env.BUTTONDOWN_API_KEY;

function die(msg) { console.error('ERROR: ' + msg); process.exit(1); }
function log(msg) { console.log(msg); }

if (!KEY) die('BUTTONDOWN_API_KEY is not set. Add it as the GitHub secret BUTTONDOWN_SEND_KEY.');

async function loadCountries(rootDir) {
  const abs = path.resolve(rootDir, DATA_INDEX);
  if (!existsSync(abs)) return null;
  const mod = await import(pathToFileURL(abs).href + '?t=' + Date.now() + '-' + Math.random());
  const list = mod.countries || [];
  const map = {};
  for (const c of list) { if (c && c.slug) map[c.slug] = c; }
  return map;
}

function resolveBeforeSha() {
  const before = (process.env.BEFORE_SHA || '').trim();
  if (before && !/^0+$/.test(before)) return before;
  try { return execSync('git rev-parse HEAD^', { encoding: 'utf8' }).trim(); } catch { return ''; }
}

async function loadOldCountries(beforeSha) {
  if (!beforeSha) return null;
  const dir = '/tmp/ttc-old';
  try { execSync('git worktree remove --force ' + dir, { stdio: 'ignore' }); } catch {}
  try { execSync('git worktree add --detach ' + dir + ' ' + beforeSha, { stdio: 'ignore' }); }
  catch { return null; }
  return loadCountries(dir);
}

async function bd(method, endpoint, body) {
  const res = await fetch(API + endpoint, {
    method,
    headers: { 'Authorization': 'Token ' + KEY, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined
  });
  const text = await res.text();
  let json = null; try { json = text ? JSON.parse(text) : null; } catch {}
  return { ok: res.ok, status: res.status, json, text };
}

// Returns the tag id for a tag name, null if it does not exist, or undefined on error.
async function findTagId(name) {
  let endpoint = '/tags';
  for (let i = 0; i < 25; i++) {
    const r = await bd('GET', endpoint);
    if (!r.ok) { console.error('Tag lookup failed (' + r.status + '): ' + r.text); return undefined; }
    const results = (r.json && (r.json.results || (Array.isArray(r.json) ? r.json : []))) || [];
    for (const t of results) { if (t && t.name === name) return t.id; }
    const next = r.json && r.json.next;
    if (!next) return null;
    endpoint = String(next).replace(API, '');
  }
  return null;
}

function emailFor(country) {
  const name = country.name;
  const note = (country.costUpdate && country.costUpdate.note) || 'The money side of this guide has changed.';
  const subject = 'The money side of ' + name + ' just changed';
  const body = [
    'Here is a heads-up: the money side of ' + name + ' just changed.',
    '',
    note,
    '',
    'The full guide, updated and dated, is [right here](' + SITE + '/' + country.slug + ').',
    '',
    'You are getting this because you picked ' + name + ' when you signed up. If it changes again before your trip, we will let you know.'
  ].join('\n');
  return { subject, body };
}

async function sendForCountry(country) {
  const tagName = 'country:' + country.slug;
  const tagId = await findTagId(tagName);
  if (tagId === undefined) { console.error('Skipping ' + country.slug + ': could not read tags, sending nothing.'); return 'error'; }
  if (tagId === null) { log('Skipping ' + country.slug + ': no subscribers with tag ' + tagName + ' yet.'); return 'skipped'; }

  const { subject, body } = emailFor(country);
  const payload = {
    subject, body,
    email_type: 'public',
    status: DRY_RUN ? 'draft' : 'sent',
    filters: { filters: [{ field: 'subscriber.tags', operator: 'contains', value: tagId }], groups: [], predicate: 'and' }
  };
  const r = await bd('POST', '/emails', payload);
  if (!r.ok) { console.error('Send failed for ' + country.slug + ' (' + r.status + '): ' + r.text); return 'error'; }
  if (DRY_RUN) { log('[DRY RUN] Created a draft for ' + tagName + ' (tag id ' + tagId + '). Review it in Buttondown; it will NOT send.'); return 'dry'; }
  log('Sent alert to ' + tagName + ' (tag id ' + tagId + ').');
  return 'sent';
}

async function main() {
  const beforeSha = resolveBeforeSha();
  log('Diffing against previous commit: ' + (beforeSha || '(none)'));

  const now = await loadCountries('.');
  if (!now) die('Could not load ' + DATA_INDEX + ' from the current tree.');

  const old = await loadOldCountries(beforeSha);
  if (!old) { log('No readable previous commit, so no baseline to compare. Sending nothing (safe).'); return; }

  const changed = [];
  for (const slug of Object.keys(now)) {
    const c = now[slug];
    if (!c.live) continue;
    const newOn = c.costUpdate && c.costUpdate.on;
    if (!newOn) continue;
    const oldOn = old[slug] && old[slug].costUpdate && old[slug].costUpdate.on;
    if (newOn !== oldOn) changed.push(c);
  }

  if (changed.length === 0) { log('No country costUpdate changed in this push. Nothing to send.'); return; }
  log((DRY_RUN ? '[DRY RUN] ' : '') + 'Countries with a new cost update: ' + changed.map(c => c.slug).join(', '));

  let sent = 0;
  for (const c of changed) { if (await sendForCountry(c) === 'sent') sent++; }
  log('Done. ' + (DRY_RUN ? '(dry run: drafts only, nothing sent)' : (sent + ' alert(s) sent.')));
}

main().catch(e => die((e && e.stack) || String(e)));
