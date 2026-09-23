// THE FACT REGISTRY. One provenance record for every fact on this site that the schema is
// responsible for, derived from the data that is already here.
//
// WHY THIS IS DERIVED AND NOT WRITTEN INTO THE DATA FILES. There are 798 of these facts
// across 106 data files. Hand-writing a provenance block into each one would be a diff
// touching nearly every file on the site, and the one thing this stage must not do is
// disrupt what is already live. So the registry READS what the desk already wrote and
// normalizes it. The 59 country files, hotel-tax-map.js, carrier-roaming.js and the rest
// are byte-identical after this commit.
//
// THE OVERRIDE PATH IS LIVE FROM DAY ONE. Every adapter below checks for an explicit
// `provenance` block on the record first and prefers it. So the day a real re-check
// happens, it writes a provenance block onto that one fact, that fact stops being derived,
// and its status becomes verified. Nothing has to be migrated again. That is the whole
// reason the schema goes in before the tooling.
//
// LEGACY-SAFE, and this is the part to read twice. Every record this file produces carries
// status 'legacy' and its EXISTING date. Nothing is unpublished, nothing is build-blocked,
// nothing is given a fresh "Checked today" stamp for having been read by this file.
// Importing is not verifying. Where a fact has no date at all, checked_date is null and
// stays null, because a fact whose age nobody knows is a finding, not a gap to fill with
// the date of whatever file it happens to live in.
//
// WHO READS THIS. The staleness scanner, for the coverage metric. Not the page components:
// this file imports every dataset on the site, and a country page has no business pulling
// hotel-tax-map.js and carrier-roaming.js into its build to render one date. The pages
// read the light helpers in provenance.js instead.
//
// TIERS, from the Step 0 census, because coverage has to be reported against the facts the
// schema actually owns:
//   A  facts that already carry some provenance (447). The schema fills in what is missing.
//   B  hard facts carrying none at all (351). The real exposure. 98 of them are the
//      per-city tourist tax rates the calculator multiplies.
//   Not registered: the 579 page-level stamps, which are page dates and not facts, and the
//      706 prose and disclosed-judgment values (the daily-spend styles, the fact cards, the
//      traps), which are the desk's own estimates and are already labelled as such in each
//      guide's sources panel. Registering an estimate as a sourced fact would be the same
//      over-claim in the other direction.

import { countries } from './index.js';
import { provenanceRecord, sourceTypeFromIconType, changedFromEffective, cadenceFromLabel } from './provenance.js';

import { hotelTaxMap, hotelTaxWatchlist } from './hotel-tax-map.js';
import { carrierRoaming, CARRIER_PROFILES } from './carrier-roaming.js';
import {
  HOTEL_EXTRAS, JUNKFEE_RULES, PARITY_BY_REGION, PROPERTY_FEE_BAND, DRIP_AVERAGES,
  OTA_COMMISSION, DIRECT_COST, PLATFORM_TAKE_RATE, MEMBER_SAVING, REFUNDABLE_PREMIUM,
} from './booking-tactics.js';
import { truthChecks } from './truth-checks.js';
import { flightRefundRights } from './flight-refund-rights.js';
import { flightFeeMechanics } from './flight-fee-mechanics.js';
import { flightBookingMyths } from './flight-booking-myths.js';
import { entryCharges } from './entry-charges.js';
import { schengen } from './schengen.js';
import { railPasses } from './rail-passes.js';
import { seasons } from './seasons.js';
import { tipping } from './tipping.js';
import { outbound } from './outbound.js';

// A stable id. Slugged from the dataset and the fact's own label so it survives a
// reordering of the data, which an array index would not. Two facts that genuinely share a
// label inside one dataset get a numeric suffix rather than silently colliding.
const seen = new Map();
function factId(scope, slug, label) {
  const base = [scope, slug, String(label || 'unlabeled')]
    .map(s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''))
    .filter(Boolean)
    .join(':');
  const n = (seen.get(base) || 0) + 1;
  seen.set(base, n);
  return n === 1 ? base : base + '--' + n;
}

// An explicit provenance block always wins over anything derived here. This is the hook
// the later stages write through.
function explicit(node) {
  return node && typeof node === 'object' && node.provenance ? node.provenance : null;
}

const records = [];

function register(input) {
  const ex = explicit(input.node);
  const merged = ex ? { ...input, ...ex, status: ex.status || 'verified' } : input;
  records.push(provenanceRecord({
    ...merged,
    id: factId(input.scope, input.slug, input.label),
  }));
}

// ---------------------------------------------------------------------------
// TIER A: facts that already carry provenance
// ---------------------------------------------------------------------------

// A1. Country keyFacts (47). The closest thing in the country files to this schema
// already: label, value, status, effective, source, checked.
//
// The Changed date here is the fact's OWN effective date when the charge is in force, and
// null otherwise. It is deliberately NOT the country's changelog entry: see
// changedFromEffective in provenance.js for the over-claim that produced.
for (const c of countries) {
  for (const k of (c.keyFacts || [])) {
    register({
      node: k, scope: 'keyfact', slug: c.slug, label: k.label, value: k.value, tier: 'A',
      effective_date: k.effective,
      checked_date: k.checked,
      changed_date: changedFromEffective(k.effective, k.status),
      changed_entry_id: null,
      source_url: k.source || null,
      // keyFacts carry a bare URL with no label and no icon type, so there is nothing to
      // derive a source_type from. Null, not guessed.
      source_name: null,
      source_type: null,
      cadence: cadenceFromLabel(k.label).cadence,
      // `status` on a keyFact means enacted or proposed, a different axis entirely, so it
      // travels as a condition on the assertion rather than as provenance status.
      conditions: { enactment: k.status || null },
    });
  }
}

// A2. hotelTaxMap[].government[] (61). The reference shape. It already models the
// charging basis and whether the charge sits inside the quoted price, so those come
// through as conditions rather than being flattened into a bare percentage.
for (const e of hotelTaxMap) {
  for (const g of (e.government || [])) {
    const src = g.source || {};
    register({
      node: g, scope: 'hoteltax-gov', slug: e.slug || e.iso, label: g.label, value: g.figure, tier: 'A',
      unit: g.basis || null,
      currency: g.currency || null,
      effective_date: g.effective,
      checked_date: g.checkedISO,
      // 14 of the 61 components carry an effective date, and where it has passed it is a
      // genuine per-fact changed date. The Dutch VAT row is the clean example: effective
      // 1 January 2026, and its own note says it rose from 9% that day.
      changed_date: changedFromEffective(g.effective),
      source_url: src.url || null,
      source_name: src.label || null,
      source_type: sourceTypeFromIconType(src.type),
      cadence: 'tax',
      conditions: {
        basis: g.basis || null,
        inQuotedPrice: typeof g.inQuotedPrice === 'boolean' ? g.inQuotedPrice : null,
        note: g.note || null,
        amount: g.amount === undefined ? null : g.amount,
      },
    });
  }
}

// A3. hotelTaxMap entries (67). The country-level rollup the choropleth paints from. It
// carries its own checkedISO, which can be newer than its components, and no source of
// its own, since the sources sit on the components.
for (const e of hotelTaxMap) {
  register({
    node: e, scope: 'hoteltax-entry', slug: e.slug || e.iso, label: e.country + ' added tax', tier: 'A',
    value: typeof e.addedPct === 'number' ? e.addedPct : null,
    unit: 'percentOfQuotedPrice',
    checked_date: e.checkedISO,
    cadence: 'tax',
    conditions: {
      state: e.state || null,
      display: e.display || null,
      addedBasis: e.addedBasis || null,
      modelled: Boolean(e.modelled),
      representative: e.representative || null,
      cityBasis: e.cityBasis || null,
      pendingVerification: e.pendingVerification || null,
    },
  });
}

// A4. hotelTaxWatchlist (12). Forward-dated rows, mostly unsourced on purpose: a row stays
// hidden from readers until it has a source, and visible to the desk either way. Only 3 of
// 12 carry a date, and the other 9 honestly have none.
for (const w of hotelTaxWatchlist) {
  register({
    node: w, scope: 'hoteltax-watch', slug: w.place || w.iso || 'watch', label: w.label || w.note, tier: 'A',
    value: w.figure || null,
    effective_date: w.effective,
    checked_date: w.checkedISO,
    source_url: (w.source && w.source.url) || null,
    source_name: (w.source && w.source.label) || null,
    source_type: sourceTypeFromIconType(w.source && w.source.type),
    cadence: 'tax',
    conditions: { status: w.status || null, pendingSource: w.pendingSource || null },
  });
}

// A5. carrierRoaming cells (177, of which 166 are sourced). Per-country, per-carrier
// roaming positions. 11 cells carry no date and stay null.
for (const iso of Object.keys(carrierRoaming || {})) {
  const row = carrierRoaming[iso] || {};
  for (const carrier of Object.keys(row)) {
    const cell = row[carrier];
    if (!cell || typeof cell !== 'object') continue;
    register({
      node: cell, scope: 'carrier-cell', slug: iso + '-' + carrier, label: carrier + ' roaming in ' + iso, tier: 'A',
      value: cell.verdict || cell.note || null,
      checked_date: cell.checkedISO,
      source_url: typeof cell.source === 'string' ? cell.source : (cell.source && cell.source.url) || null,
      // MAIN ruling (2026-09): the carrier-roaming dataset is, by construction, each carrier's
      // OWN day-rate and cap page (AT&T, Verizon, T-Mobile), verified cell by cell against it,
      // so a sourced cell is operator-official, not a guess. An unsourced cell stays null.
      source_type: (typeof cell.source === 'string' ? cell.source : (cell.source && cell.source.url)) ? 'operator-official' : null,
      cadence: 'sampled',
    });
  }
}

// A6. CARRIER_PROFILES (13). The flat day-rate and cap table the calculator multiplies.
for (const key of Object.keys(CARRIER_PROFILES || {})) {
  const p = CARRIER_PROFILES[key] || {};
  register({
    node: p, scope: 'carrier-profile', slug: key, label: (p.label || key) + ' day rate', tier: 'A',
    value: p.dayRate === undefined ? null : p.dayRate,
    currency: 'USD',
    checked_date: p.checkedISO,
    source_url: typeof p.source === 'string' ? p.source : (p.source && p.source.url) || null,
    // MAIN ruling (2026-09): the same carrier-own-page dataset, so a sourced profile is operator-official.
    source_type: (typeof p.source === 'string' ? p.source : (p.source && p.source.url)) ? 'operator-official' : null,
    cadence: 'sampled',
    conditions: { cap: p.cap === undefined ? null : p.cap },
  });
}

// A7. The booking-tactics single figures (7), each one export holding one number.
const BT_SINGLES = [
  ['PROPERTY_FEE_BAND', PROPERTY_FEE_BAND], ['DRIP_AVERAGES', DRIP_AVERAGES],
  ['OTA_COMMISSION', OTA_COMMISSION], ['DIRECT_COST', DIRECT_COST],
  ['PLATFORM_TAKE_RATE', PLATFORM_TAKE_RATE], ['MEMBER_SAVING', MEMBER_SAVING],
  ['REFUNDABLE_PREMIUM', REFUNDABLE_PREMIUM],
];
for (const [name, v] of BT_SINGLES) {
  if (!v) continue;
  register({
    node: v, scope: 'booking-figure', slug: name, label: v.label || name, tier: 'A',
    value: v.pct === undefined ? (v.value === undefined ? null : v.value) : v.pct,
    checked_date: v.checkedISO,
    source_url: (v.source && v.source.url) || null,
    source_name: (v.source && v.source.label) || null,
    source_type: sourceTypeFromIconType(v.source && v.source.type),
    cadence: 'sampled',
  });
}

// A8. HOTEL_EXTRAS (3). Parking, wifi and breakfast. The scanner already runs these at
// three different cadences, and structural is the name for the two long ones.
for (const key of Object.keys(HOTEL_EXTRAS || {})) {
  const v = HOTEL_EXTRAS[key] || {};
  register({
    node: v, scope: 'hotel-extra', slug: key, label: v.label || key, tier: 'A',
    value: v.pct === undefined ? (v.usd === undefined ? null : v.usd) : v.pct,
    checked_date: v.checkedISO,
    source_url: (v.source && v.source.url) || null,
    source_name: (v.source && v.source.label) || null,
    source_type: sourceTypeFromIconType(v.source && v.source.type),
    cadence: 'structural',
  });
}

// A9. JUNKFEE_RULES (4). Effective dates but no checked date, which is honest: these are
// statutes with commencement dates, and nobody has recorded a re-check of them.
for (const r of (JUNKFEE_RULES || [])) {
  register({
    node: r, scope: 'junkfee-rule', slug: r.jurisdiction || r.label, label: r.label || r.jurisdiction, tier: 'A',
    value: r.summary || r.rule || null,
    effective_date: r.effectiveISO || r.effective,
    // A statute commencement date that has passed is the day the rule changed. No checked
    // date exists on these rows, which is honest: nobody has recorded a re-read of them.
    changed_date: changedFromEffective(r.effectiveISO || r.effective),
    checked_date: null,
    source_url: (r.source && r.source.url) || null,
    source_name: (r.source && r.source.label) || null,
    source_type: sourceTypeFromIconType(r.source && r.source.type),
    cadence: 'fee',
  });
}

// A10. PARITY_BY_REGION (15). Sourced on 11 of 15 rows and dated on none of them. A
// sourced but undated fact is exactly the case this schema needs to be able to state.
for (const r of (PARITY_BY_REGION || [])) {
  register({
    node: r, scope: 'parity-row', slug: r.iso || r.region || r.label, label: r.label || r.region, tier: 'A',
    value: r.status || null,
    checked_date: null,
    source_url: (r.source && r.source.url) || null,
    source_name: (r.source && r.source.label) || null,
    source_type: sourceTypeFromIconType(r.source && r.source.type),
    cadence: 'structural',
  });
}

// A11. truthChecks (22). The one dataset that already carries a confidence rating, all 22
// at high. Its vocabulary is lowercase, which is the one this schema adopted.
for (const t of (truthChecks || [])) {
  register({
    node: t, scope: 'truth-check', slug: t.id, label: t.claim, value: t.finding, tier: 'A',
    checked_date: t.checkedISO,
    confidence: t.confidence,
    source_url: (t.source && t.source.href) || null,
    source_name: (t.source && t.source.label) || null,
    source_type: null,
    cadence: 'general',
  });
}

// A12. flightRefundRights (7). Legal rather than priced facts, on the quarterly cadence
// the data file exports for itself.
for (const [key, e] of Object.entries(flightRefundRights || {})) {
  if (!e) continue;
  register({
    node: e, scope: 'flight-right', slug: key, label: e.label || key, value: e.value || e.rule || null, tier: 'A',
    checked_date: e.checkedISO,
    source_url: e.sourceUrl || null,
    source_name: e.sourceName || null,
    source_type: null,
    cadence: 'fee',
  });
}

// A13. flightFeeMechanics (3), each carrying its own reviewDays.
for (const [key, e] of Object.entries(flightFeeMechanics || {})) {
  if (!e) continue;
  register({
    node: e, scope: 'flight-mechanic', slug: key, label: e.label || key, value: e.value || null, tier: 'A',
    effective_date: e.effectiveISO,
    checked_date: e.checkedISO,
    changed_date: changedFromEffective(e.effectiveISO),
    source_url: e.sourceUrl || null,
    source_type: null,
    cadence: 'structural',
  });
}

// A14. flightBookingMyths (9). Enumerated exactly as the scanner's twelfth pass does, so
// the registry count and the scanner count cannot disagree: the two study groups, then
// personalizedPricing at the finer deployments and scrutiny grain, then the last two.
(() => {
  const m = flightBookingMyths || {};
  const one = (key, e, cadence) => {
    if (!e) return;
    register({
      node: e, scope: 'flight-myth', slug: key, label: e.label || key, value: e.finding || e.value || null, tier: 'A',
      checked_date: e.checkedISO,
      source_url: e.sourceUrl || null,
      source_type: null,
      cadence: cadence || 'structural',
    });
  };
  one('bookingDayStudies', m.bookingDayStudies);
  one('advanceWindowStudies', m.advanceWindowStudies);
  const pp = m.personalizedPricing;
  if (pp) {
    for (const [k, d] of Object.entries(pp.deployments || {})) one(k, d, 'sampled');
    for (const [k, s] of Object.entries(pp.scrutiny || {})) one(k, s, 'sampled');
  }
  one('mistakeFarePolicy', m.mistakeFarePolicy);
  one('cookieIncognitoTest', m.cookieIncognitoTest);
})();

// ---------------------------------------------------------------------------
// TIER B: hard facts carrying no provenance at all
// ---------------------------------------------------------------------------
// These get a record with checked_date null. That is the point of registering them: a
// null date is a visible finding in the coverage tracker, where today these facts are
// invisible because the page they render on has a date and they do not.

// B1. Country tax objects (34) and B2. their per-city regions (98). The regions are the
// sharpest case on the site: tax.regions[].rate is a real government percentage that the
// calculator multiplies into a traveler's total, and it has never carried a date or a
// source. Rome at 6 euros a night is only correct until Rome changes it.
for (const c of countries) {
  const t = c.tax;
  if (!t || t.none) continue;
  const tSrc = t.source || {};
  register({
    node: t, scope: 'country-tax', slug: c.slug, label: c.name + ' tourist tax', tier: 'B',
    value: t.rate === undefined ? null : t.rate,
    unit: t.unit || null,
    currency: t.currency || null,
    // Read the same top-level provenance the A2 reference rows use. All null today, since no
    // tax object carries these yet; they light up the moment the desk adds them.
    effective_date: t.effective,
    checked_date: t.checkedISO,
    changed_date: changedFromEffective(t.effective),
    source_url: tSrc.url || null,
    source_name: tSrc.label || null,
    source_type: sourceTypeFromIconType(tSrc.type),
    cadence: 'tax',
    conditions: { capNights: t.capNights === undefined ? null : t.capNights, note: t.note || null },
  });
  for (const r of (t.regions || [])) {
    const rSrc = r.source || {};
    register({
      node: r, scope: 'country-tax-region', slug: c.slug + '-' + (r.key || r.label), label: c.name + ': ' + r.label, tier: 'B',
      // The figure is captured exactly as the region states it, whether that is a flat rate
      // or a percentage. This does not touch the value the calculator reads; it only records
      // it in the registry, and a pct-only region used to record null here.
      value: r.rate === undefined ? (r.pct === undefined ? null : r.pct) : r.rate,
      unit: r.unit || t.unit || null,
      currency: t.currency || null,
      // Same top-level provenance shape as everywhere else. All null today.
      effective_date: r.effective,
      checked_date: r.checkedISO,
      changed_date: changedFromEffective(r.effective),
      source_url: rSrc.url || null,
      source_name: rSrc.label || null,
      source_type: sourceTypeFromIconType(rSrc.type),
      cadence: 'tax',
      conditions: { note: r.note || null },
    });
  }
}

// B3. entryCharges (25), B4. schengen (17). Undated and unsourced.
for (const key of Object.keys(entryCharges || {})) {
  const e = entryCharges[key];
  register({
    node: e, scope: 'entry-charge', slug: key, label: key + ' entry charge', tier: 'B',
    value: e && typeof e === 'object' ? (e.usd === undefined ? null : e.usd) : e,
    checked_date: null, cadence: 'fee',
  });
}
for (const s of (schengen || [])) {
  register({
    node: s, scope: 'schengen', slug: (s && (s.slug || s.name)) || 'row', label: ((s && (s.name || s.slug)) || 'row') + ' Schengen status', tier: 'B',
    value: s && s.status !== undefined ? s.status : null,
    checked_date: null, cadence: 'structural',
  });
}

// B5. railPasses (10), B6. seasons (59), B7. tipping (58). Each of these files carries ONE
// file-level date covering every row, which is the whole-dataset version of the
// whole-country stamp. The rows themselves are undated, so that is what the records say.
for (const r of (railPasses || [])) {
  register({
    node: r, scope: 'rail-pass', slug: r.id || r.name, label: (r.name || r.id) + ' pass', tier: 'B',
    value: r.priceUsd === undefined ? null : r.priceUsd, currency: 'USD',
    checked_date: null, cadence: 'sampled',
  });
}
for (const s of (seasons || [])) {
  register({
    node: s, scope: 'season', slug: s.slug, label: (s.slug || 'country') + ' season windows', tier: 'B',
    value: s.peak || null, checked_date: null, cadence: 'structural',
    conditions: { off: s.off || null, cheapestWindow: s.cheapestWindow || null, confidence: s.confidence || null },
  });
}
for (const t of (tipping || [])) {
  register({
    node: t, scope: 'tipping', slug: t.slug, label: (t.slug || 'country') + ' tipping norm', tier: 'B',
    value: t.tier || null, checked_date: null, cadence: 'structural',
    conditions: { addsPercent: t.addsPercent === undefined ? null : t.addsPercent, restaurant: t.restaurant === undefined ? null : t.restaurant },
  });
}

// B8. outbound (50). Sourced and confidence-rated on every row, and dated on none. Its
// confidence vocabulary is capitalized, which is left exactly as it is in the data file
// per the ruling, and lowercased only on the way into this record.
for (const r of (outbound || [])) {
  register({
    node: r, scope: 'outbound', slug: r.slug || r.country, label: r.country + ' US outbound volume', tier: 'B',
    value: r.point === undefined ? null : r.point,
    unit: 'travelers',
    checked_date: null,
    confidence: typeof r.confidence === 'string' ? r.confidence.toLowerCase() : null,
    source_name: r.source || null,
    source_type: null,
    cadence: 'structural',
    conditions: { year: r.year || null, low: r.low, high: r.high, basis: r.basis || null },
  });
}

// ---------------------------------------------------------------------------
// THE REGISTRY, AND ITS COVERAGE
// ---------------------------------------------------------------------------

export const factRegistry = records;

export function registryById(id) {
  return records.find(r => r.id === id) || null;
}

export function factsForCountry(slug) {
  return records.filter(r => r.slug === slug || String(r.slug || '').startsWith(slug + '-'));
}

// The coverage metric. A PROGRESS METER, not a gate. It counts and it reports; nothing
// here can fail a build or block a publish, and a legacy or undated fact is a number in
// this report rather than an error anywhere.
export function coverage(today = new Date()) {
  const out = {
    total: records.length,
    byTier: {},
    verified: 0,
    legacy: 0,
    dated: 0,
    undated: 0,
    sourced: 0,
    sourceTyped: 0,
    withChanged: 0,
    withConfidence: 0,
    cadenceSet: 0,
    cadenceInferred: 0,
    withinCadence: 0,
    pastCadence: 0,
    unjudgeable: 0,
  };

  for (const r of records) {
    const p = r.provenance;
    const tier = p.tier || 'untiered';
    out.byTier[tier] = out.byTier[tier] || { total: 0, dated: 0, sourced: 0, verified: 0 };
    out.byTier[tier].total++;

    if (p.status === 'verified') { out.verified++; out.byTier[tier].verified++; } else out.legacy++;
    if (p.checked_date) { out.dated++; out.byTier[tier].dated++; } else out.undated++;
    if (p.source_url || p.source_name) { out.sourced++; out.byTier[tier].sourced++; }
    if (p.source_type) out.sourceTyped++;
    if (p.changed_date) out.withChanged++;
    if (p.confidence) out.withConfidence++;
    if (p.cadence_set) out.cadenceSet++;
    if (p.cadence_inferred) out.cadenceInferred++;

    if (!p.checked_date) { out.unjudgeable++; continue; }
    const d = new Date((p.checked_date.length === 7 ? p.checked_date + '-01' : p.checked_date) + 'T00:00:00Z');
    if (isNaN(d.getTime())) { out.unjudgeable++; continue; }
    const age = Math.round((today.getTime() - d.getTime()) / 86400000);
    if (age <= p.cadence_days) out.withinCadence++; else out.pastCadence++;
  }

  return out;
}

// ---------------------------------------------------------------------------
// THE UNREGISTERED-FACT FLAG
// ---------------------------------------------------------------------------
// Coverage is only honest if the denominator is. This lists the fact-shaped datasets the
// registry does NOT yet cover, so a dataset added later cannot quietly sit outside the
// count. It is a FLAG and not a blocker, per the brief: it reports and the build carries
// on.
//
// The three below are deliberate exclusions rather than omissions, and they are listed so
// the decision stays visible rather than being rediscovered as a bug:
export const UNREGISTERED = [
  {
    what: 'country cash.styles[] daily and room figures',
    approx: 177,
    why: 'The desk own estimate, already disclosed as judgment in every guide sources panel. Registering an estimate as a sourced fact would over-claim it.',
  },
  {
    what: 'country facts[] cards and traps[]',
    approx: 529,
    why: 'Prose explanation rather than a single asserted value. A later stage may extract the figures embedded in them, which is where the F interpolation object would be registered too.',
  },
  {
    what: 'page-level checkedISO on 59 countries and 447 live spokes',
    approx: 506,
    why: 'These are page re-check dates and not facts. They are reported by the scanner own first three passes and are what the Checked and Changed split now renders honestly.',
  },
];
