// THE PROVENANCE SCHEMA. The fields that make a fact on this site diligence-grade, and
// the honest Checked / Changed dates the pages render from them.
//
// WHAT THIS FILE IS. Vocabularies, the cadence policy, the source-type mapping, the
// Changed-date resolver, and the append-only event log structure. It holds NO facts of its
// own and it invents no dates. Every date it returns came from data already in the repo.
//
// WHAT IT IS NOT. Not the registry. The census of every fact on the site lives in
// fact-registry.js, which imports every dataset and is read by the staleness scanner only.
// This file stays light so a country page can import it without pulling the world in.
//
// THE TWO HARD RULES, from the brief, and every function here is shaped by them.
//
//   1. IMPORTING IS NOT VERIFYING. A fact brought into this schema keeps its EXISTING
//      date. Nothing here sets a checked date to today, ever. Where no prior date is
//      known the field stays null and the display says so, rather than borrowing a date
//      from the page or the file the fact happens to live in.
//
//   2. ONLY A REAL VALUE CHANGE IS A CHANGE. A re-check that confirms nothing moved
//      advances the Checked date and nothing else. It must never touch changed_date, and
//      it must never reach JSON-LD dateModified. Google penalizes artificial freshening
//      and it buys no ranking, so the Checked date is a visible human trust signal and
//      only that.
//
// WHY THE SHAPE IS WHAT IT IS. hotelTaxMap[].government[] in hotel-tax-map.js was already
// carrying label, figure, charging basis, whether the charge sits inside the quoted price,
// conditions, an effective date, a source as { label, url, type }, and its own checkedISO,
// on all 61 rows, before this file existed. That is roughly four fifths of the target
// schema, arrived at by the desk rather than designed here, so it is the reference shape
// this file copies rather than a shape to be migrated. What it was missing, and what the
// schema below adds, is confidence, changed_date, an explicit re-check cadence, and a
// status saying whether a human has actually re-verified the row through the tool yet.
//
// EVERYTHING NEW IS NESTED UNDER `provenance`. It is not spread across new top-level keys.
// keyFacts[].status already means enacted-or-proposed on all 47 items, and
// latest-checks.js filters the front-door ticker on it, so a second meaning for that key
// would have been a silent breakage. Nesting also means a fact that has not been given a
// provenance block yet reads as absent rather than as wrong.
//
// HOUSE RULES: "US" not the periods form, no em dashes and no en dashes anywhere, and
// never fabricate precision. Null beats a plausible guess in every function below.

import { changelogEntries } from './changelog.js';

// ---------------------------------------------------------------------------
// VOCABULARIES
// ---------------------------------------------------------------------------

// How sure we are of the value itself.
//   high    a primary official source, current, and unambiguous on its face
//   medium  official but needs interpretation, or a reputable secondary confirms it
//   low     uncertain, or our own estimate, and always shown as such
export const CONFIDENCE_LEVELS = ['high', 'medium', 'low'];

// The diligence axis on a source. Deliberately three values and deliberately NOT the
// existing `type` field on a source link. That one picks the icon beside the link and is
// used on about 1,217 links across the site with roughly twenty values (gov, revenue,
// card, guide, official, news, tourism, police, currency, bank, airport, app and so on).
// Renaming it would have moved every icon on the site. So `type` keeps its job and this
// is a second, coarser read alongside it.
export const SOURCE_TYPES = ['official-government', 'operator-official', 'reputable-secondary'];

// Whether a human has re-verified this fact THROUGH the tool.
//   legacy    the fact predates the fact-management system. Its dates are real and its
//             source may be excellent. Nobody has run it through a recorded re-check.
//   verified  it passed a real re-check, which writes an event into the log below.
// Stage 1 sets every migrated fact to legacy. Nothing in Stage 1 promotes one to verified.
export const PROVENANCE_STATUS = ['legacy', 'verified'];

// ---------------------------------------------------------------------------
// THE CADENCE POLICY
// ---------------------------------------------------------------------------
// How often a kind of fact has to be looked at again. These are the same numbers the
// staleness scanner has used since it was written and the same ones /methodology states
// in prose, gathered here so the scanner, the pages and the public note cannot drift.
//
// The last two are new names for cadences the scanner was already applying per dataset:
// structural covers a fact that changes on a multi-year timescale (HOTEL_EXTRAS parking
// and breakfast already ride 365, wifi prevalence 730), and sampled covers a commercial
// price we re-sample rather than verify, because there is no authority to verify it
// against.
export const CADENCE = {
  exchange: 30,      // a rate that drifts continuously
  fee: 90,           // an entry fee, visa or ETA rule, a published card or ATM charge
  tax: 120,          // a tourist, accommodation or consumption tax
  general: 180,      // anything whose right cadence is not obvious
  structural: 365,   // a rule or prevalence figure that moves on a multi-year timescale
  sampled: 90,       // a commercial price, re-sampled rather than verified
};

// A fact whose cadence nobody has set takes `general` and is flagged, per the brief. It is
// never quietly given a tight cadence it will then fail, and never a loose one that hides
// it. GENERAL_IS_A_DEFAULT is what the scanner reports on, so an unset cadence stays
// visible as unset rather than passing as a decision.
export const CADENCE_FALLBACK = 'general';

// Pick a cadence from a fact's label, the same keyword read the guide component uses to
// choose a source icon and the same one the scanner's classify() has always used. Returns
// the cadence NAME plus whether the read was confident, so an unsure read can be reported
// rather than silently treated as settled.
export function cadenceFromLabel(label) {
  const s = String(label || '').toLowerCase();
  if (/exchange|\bfx\b|\brate\b|conversion/.test(s)) return { cadence: 'exchange', inferred: true };
  if (/tax|levy|ortstaxe|tourist|accommodation|lodging|occupancy|city tax/.test(s)) return { cadence: 'tax', inferred: true };
  if (/fee|visa|\beta\b|entry|arrival|departure|permit|tourist card/.test(s)) return { cadence: 'fee', inferred: true };
  return { cadence: CADENCE_FALLBACK, inferred: false };
}

export function cadenceDays(name) {
  return CADENCE[name] || CADENCE.general;
}

// ---------------------------------------------------------------------------
// SOURCE TYPE, DERIVED ONLY WHERE IT IS UNAMBIGUOUS
// ---------------------------------------------------------------------------
// Three icon types map onto official-government with no judgment required: a government
// or city page, a tax or revenue authority, an official tourism board. Those are derived.
//
// EVERYTHING ELSE RETURNS NULL, ON PURPOSE. The obvious next group is the operator's own
// page: `card` (about 171 links), `bank`, `carrier`, `app`. Those look like
// operator-official and probably are, but "probably" is exactly what this schema exists to
// stop, and a derived value is indistinguishable from a verified one once it is in the
// data. So they stay null for a human to set, and the coverage tracker counts them as
// unset rather than as done. That group is the cheapest win available to whoever runs
// Stage 2: one ruling closes roughly 183 links.
const SOURCE_TYPE_BY_ICON = {
  gov: 'official-government',
  revenue: 'official-government',
  tourism: 'official-government',
};

export function sourceTypeFromIconType(iconType) {
  return SOURCE_TYPE_BY_ICON[String(iconType || '').toLowerCase()] || null;
}

// ---------------------------------------------------------------------------
// DATES
// ---------------------------------------------------------------------------

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

// A machine date, or null. Accepts YYYY-MM-DD and YYYY-MM, because the changelog records
// month precision where the repo only knows the month and that is honest. Rejects
// everything else, which is the point: recentChange.date holds display strings like
// "Jul 2026", "2026", "Since 2025" and "From Apr 2027" on 31 of the 33 countries that
// carry one, so it cannot drive a machine date and is not read here.
export function asMachineDate(value) {
  if (typeof value !== 'string') return null;
  const v = value.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(v) || /^\d{4}-\d{2}$/.test(v)) return v;
  return null;
}

// Parse for arithmetic. A month-precision date is read as the first of that month, which
// is the same reading the scanner already gives a file-level "Aug 2026" stamp.
export function parseDate(value) {
  const v = asMachineDate(value);
  if (!v) return null;
  const iso = v.length === 7 ? v + '-01' : v;
  const d = new Date(iso + 'T00:00:00Z');
  return isNaN(d.getTime()) ? null : d;
}

export function daysSince(value, today = new Date()) {
  const d = parseDate(value);
  if (!d) return null;
  return Math.round((today.getTime() - d.getTime()) / 86400000);
}

// "Aug 2026" from a machine date. One prominent date on a page reads better as a month
// than as a day, and a month is also the honest precision for most of these facts.
export function monthYear(value) {
  const v = asMachineDate(value);
  if (!v) return '';
  const [y, m] = v.split('-');
  const idx = Number(m) - 1;
  if (idx < 0 || idx > 11) return '';
  return MONTHS[idx].charAt(0).toUpperCase() + MONTHS[idx].slice(1) + ' ' + y;
}

// "29 August 2026" for a per-fact line where the exact day is known and worth showing.
// Falls back to the month form when that is all the precision there is, rather than
// inventing a day.
const LONG_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

export function longDate(value) {
  const v = asMachineDate(value);
  if (!v) return '';
  const parts = v.split('-');
  if (parts.length === 2) return monthYear(v);
  const idx = Number(parts[1]) - 1;
  if (idx < 0 || idx > 11) return '';
  return String(Number(parts[2])) + ' ' + LONG_MONTHS[idx] + ' ' + parts[0];
}

// ---------------------------------------------------------------------------
// THE CHANGED DATE
// ---------------------------------------------------------------------------
// The only machine-readable record of when something actually CHANGED is changelog.js:
// 32 curated entries, 28 at day precision and 4 at month, each linked to the page where
// the current fact lives. Its own header already states the rule this schema needs, that
// a check which found nothing new adds nothing here, so it is the right and only source
// for a Changed date.
//
// 28 of 59 countries have one today. The other 31 get null, and a page with a null Changed
// date omits dateModified entirely rather than falling back to its re-check date. Absence
// is not zero, and this site already applies that rule elsewhere.
//
// A country entry is NOT inherited by that country's spokes. A change to the UK ETA is not
// a change to the UK tipping spoke, and letting it claim one would be the same over-claim
// at one level down. A spoke matches only an entry linking its own path.

function normalizePath(link) {
  const s = String(link || '').trim();
  if (!s.startsWith('/')) return '';
  return '/' + s.replace(/^\/+/, '').replace(/\/+$/, '');
}

// Newest wins. Lexical comparison is correct for these two shapes, with one known and
// accepted consequence: a month-precision "2026-07" sorts before a day-precision
// "2026-07-24" in the same month, so the less precise entry loses. That is the right way
// round, since the precise one is the better record.
function newestEntry(a, b) {
  if (!a) return b;
  if (!b) return a;
  return b.date > a.date ? b : a;
}

const changedByPath = (() => {
  const map = new Map();
  for (const e of changelogEntries) {
    const p = normalizePath(e.link);
    if (!p) continue;
    if (!asMachineDate(e.date)) continue;
    map.set(p, newestEntry(map.get(p), e));
  }
  return map;
})();

// The Changed record for one page path, or null. Returns the entry id as well as the date
// so the binding is machine-readable and a later stage can link the page straight to
// /updates/{id}/ without re-deriving anything.
export function changedForPath(path) {
  const e = changedByPath.get(normalizePath(path));
  if (!e) return null;
  return { date: e.date, entryId: e.id, kind: e.kind, title: e.title };
}

export function changedForCountry(slug) {
  return slug ? changedForPath('/' + slug) : null;
}

export function changedForSpoke(countrySlug, spokeSlug) {
  if (!countrySlug || !spokeSlug) return null;
  return changedForPath('/' + countrySlug + '/' + spokeSlug);
}

// A PER-FACT changed date, which is a narrower thing than a page's changed date and must
// not be taken from one.
//
// THE MISTAKE THIS FUNCTION EXISTS TO PREVENT, found while building the registry and worth
// recording. The first pass bound each keyFact's changed_date to its country's newest
// changelog entry. That produced, for Japan, a tax-free-shopping fact stamped "unchanged
// since 1 March 2026" off an entry about the Kyoto lodging tax. The two facts have nothing
// to do with each other. A country entry says something in Japan changed in March, never
// that THIS fact did, so inheriting it is the same over-claim as the country-level stamp,
// one level down and harder to spot. The changelog date belongs to the PAGE, where
// dateModified reads it, and nowhere else.
//
// What a fact honestly knows about its own last change is its effective date, and only
// when the charge is actually in force. So:
//   enacted, effective date in the past   the value changed then. Honest changed date.
//   upcoming, effective date in future    it has not changed yet. Null.
//   proposed                              it may never change. Null.
//   no effective date                     we do not know. Null.
export function changedFromEffective(effective, enactment, today = new Date()) {
  const eff = asMachineDate(effective);
  if (!eff) return null;
  if (enactment && enactment !== 'enacted') return null;
  const d = parseDate(eff);
  if (!d || d.getTime() > today.getTime()) return null;
  return eff;
}

// For a dataset page, where no changelog entry exists but the facts themselves carry
// effective dates. The newest effective date among them is an honest answer to "when did
// the world last move on this page". Returns null when nothing usable is present, which
// is then an omitted dateModified rather than a fallback to a re-check date.
export function newestEffective(values) {
  let best = null;
  for (const v of (values || [])) {
    const d = asMachineDate(v);
    if (!d) continue;
    if (!best || d > best) best = d;
  }
  return best;
}

// ---------------------------------------------------------------------------
// A FACT RECORD
// ---------------------------------------------------------------------------
// The normalizer every adapter in fact-registry.js passes through, so one place decides
// what a provenance block looks like and one place refuses to invent a value.
//
// CONDITIONS TRAVEL WITH THE ASSERTION. Where the source data models a charging basis,
// whether the charge is already inside the quoted price, a threshold, a cap, a category or
// an exemption, those come through in `conditions` rather than being flattened away. The
// schema does not yet SOLVE conditional modelling for every fact on the site, and it is
// not asked to. It just must not prevent it, so a fact that already knows it is "12.5% of
// the room rate excluding VAT, added at checkout" keeps knowing that.
export function provenanceRecord(input) {
  const o = input || {};
  const cadenceName = o.cadence && CADENCE[o.cadence] ? o.cadence : null;
  const inferred = cadenceName ? null : cadenceFromLabel(o.label);

  return {
    // identity
    id: o.id || null,
    scope: o.scope || null,              // 'country' | 'spoke' | 'dataset'
    slug: o.slug || null,
    label: o.label || null,

    // the assertion
    value: o.value === undefined ? null : o.value,
    unit: o.unit || null,
    currency: o.currency || null,
    conditions: o.conditions || null,

    provenance: {
      // dates. Existing values only. Nothing here is ever set to today.
      effective_date: asMachineDate(o.effective_date),
      checked_date: asMachineDate(o.checked_date),
      changed_date: asMachineDate(o.changed_date),
      changed_entry_id: o.changed_entry_id || null,

      // how sure, and on what
      confidence: CONFIDENCE_LEVELS.includes(o.confidence) ? o.confidence : null,
      source_url: o.source_url || null,
      source_name: o.source_name || null,
      source_type: SOURCE_TYPES.includes(o.source_type) ? o.source_type : null,

      // when it has to be looked at again
      cadence: cadenceName || (inferred ? inferred.cadence : CADENCE_FALLBACK),
      cadence_days: cadenceDays(cadenceName || (inferred ? inferred.cadence : CADENCE_FALLBACK)),
      cadence_set: Boolean(cadenceName),
      cadence_inferred: Boolean(!cadenceName && inferred && inferred.inferred),

      // has a human run this through a recorded re-check
      status: PROVENANCE_STATUS.includes(o.status) ? o.status : 'legacy',

      // which census tier this record belongs to, so coverage can be reported against
      // the facts the schema is actually responsible for
      tier: o.tier || null,
    },
  };
}

// Does this fact still sit inside its own review window. Returns null rather than false
// when there is no date to judge, because "we do not know" and "it is overdue" are
// different findings and the tracker reports them separately.
export function withinCadence(record, today = new Date()) {
  const p = (record && record.provenance) || {};
  const age = daysSince(p.checked_date, today);
  if (age === null) return null;
  return age <= (p.cadence_days || CADENCE.general);
}

// ---------------------------------------------------------------------------
// THE EVENT LOG
// ---------------------------------------------------------------------------
// The audit trail. Append-only: a correction adds a superseding record and never rewrites
// or deletes one that came before.
//
// IT IS EMPTY, AND THAT IS CORRECT. The routine events it will hold come from re-checks,
// which are a later stage. The structure exists from the first fact so history is captured
// from day one rather than reconstructed later, which is the single most expensive thing
// to retrofit.
//
// WHAT GIT ALREADY DOES, so this does not duplicate it. Git gives attributed, timestamped
// change history for every value on this site for free. What it cannot give is the human
// outcome of a look that changed nothing: a re-check where the answer was "still true", or
// "the authority's page is down and I could not confirm it". Those leave no diff, so they
// would otherwise leave no trace at all. That layer is this log's only job.
export const EVENT_OUTCOMES = ['confirmed-unchanged', 'changed', 'could-not-confirm'];

// Room for Step 4, and no more than room. When a genuine value change lands, a human
// should be able to mark the event as worth an entry on /what-changed, which then feeds
// the existing curated changelog and its newsletter flow by hand. Stage 1 only guarantees
// the event can CARRY that flag. Nothing auto-feeds anything, no review UI exists, and a
// confirmed-unchanged outcome can never raise it, because a re-check is not a change.
//
// The rest of that hook is already built: recentChange.updateId in CountryBriefing.astro
// renders a link to /updates/{id}/ when a country carries one, and has been inert waiting
// for exactly this.
export function provenanceEvent(input) {
  const o = input || {};
  const outcome = EVENT_OUTCOMES.includes(o.outcome) ? o.outcome : null;
  return Object.freeze({
    fact_id: o.fact_id || null,
    who: o.who || null,
    when: o.when || null,                    // full timestamp, set by the caller at event time
    outcome,
    source_url: o.source_url || null,        // what was actually consulted on this look
    note: o.note || null,                    // free text, e.g. why it could not be confirmed
    supersedes: o.supersedes || null,        // the event id this corrects, never an edit in place
    editorial_review: outcome === 'changed' ? Boolean(o.editorial_review) : false,
  });
}

// The log itself. A plain array today because Stage 1 has nothing to write into it and a
// store would be a stage-3 decision made early. appendProvenanceEvent is the only way in,
// and there is deliberately no update and no delete.
export const provenanceEvents = [];

export function appendProvenanceEvent(input) {
  const e = provenanceEvent(input);
  if (!e.outcome) throw new Error('A provenance event needs one of: ' + EVENT_OUTCOMES.join(', '));
  if (!e.fact_id) throw new Error('A provenance event needs the fact_id it describes.');
  provenanceEvents.push(e);
  return e;
}

// ---------------------------------------------------------------------------
// THE HONEST FRESHNESS LINE
// ---------------------------------------------------------------------------
// One function builds every freshness line the site renders, so the Checked and Changed
// split is decided once. The US federal model at standards.digital.gov is what this
// follows: a prominent Reviewed-equivalent date, with Updated and the source as supporting
// text rather than a competing headline.
//
//   checked   THE prominent date. "we re-checked this on [date]".
//   changed   secondary. "unchanged since [date]" when we know, absent when we do not.
//   source    secondary, beside the changed line.
//
// FOUR STATES, and the third and fourth are the ones that matter for Stage 1:
//   dated + changed   "Checked Aug 2026 . unchanged since Jan 2026"
//   dated only        "Checked Aug 2026"
//   inherited         the fact has no date of its own and is showing the date of the page
//                     or file it sits in. Labelled as that and never as the fact's own,
//                     because "Checked Jul 2026" on a fact nobody checked in July is the
//                     bug this whole stage exists to remove.
//   undated           no date anywhere. Says so. Never falls back to today.
export function freshnessLine(record, opts) {
  const o = opts || {};
  const p = (record && record.provenance) || {};
  const inherited = Boolean(o.inherited);
  const long = Boolean(o.long);
  const fmt = long ? longDate : monthYear;

  const checked = fmt(p.checked_date);
  const changed = fmt(p.changed_date);

  if (!checked) {
    return {
      state: 'undated',
      checkedLabel: 'Not yet dated',
      checkedDate: null,
      changedLabel: null,
      sourceName: p.source_name || null,
      sourceUrl: p.source_url || null,
      compact: 'Not yet dated',
    };
  }

  const checkedLabel = inherited ? 'Guide checked ' + checked : 'Checked ' + checked;
  const changedLabel = changed ? 'unchanged since ' + changed : null;

  return {
    state: inherited ? 'inherited' : (changed ? 'dated-and-changed' : 'dated'),
    checkedLabel,
    checkedDate: p.checked_date,
    changedLabel,
    changedDate: p.changed_date || null,
    changedEntryId: p.changed_entry_id || null,
    sourceName: p.source_name || null,
    sourceUrl: p.source_url || null,
    compact: changedLabel ? checkedLabel + ' \u00b7 ' + changedLabel : checkedLabel,
  };
}

// ---------------------------------------------------------------------------
// PAGE-LEVEL PROVENANCE
// ---------------------------------------------------------------------------
// What a country page or a spoke needs in one object, so the five surfaces that currently
// reprint one date each read from one source. The visual treatment of each surface is
// untouched here on purpose; this only makes sure they are all describing the same thing.
//
// COVERAGE, NOT A COUNTRY STAMP. `coverage` is the honest page-level line the brief asks
// for in place of a whole-country date: how many of this page's dated items are still
// inside their own review window. A country-level date is the original bug and this is
// what replaces it.
export function pageProvenance(country, today = new Date()) {
  const c = country || {};
  const changed = changedForCountry(c.slug);

  const items = [];
  const add = (label, date, cadence) => {
    if (!asMachineDate(date)) return;
    items.push({ label, date, cadence: cadence || CADENCE_FALLBACK });
  };

  for (const k of (c.keyFacts || [])) add(k.label, k.checked, cadenceFromLabel(k.label).cadence);
  if (c.emergency) add('Emergency number', c.emergency.checkedISO, 'structural');
  if (c.flight) add('Typical fare range', c.flight.checkedISO, 'sampled');
  for (const s of (c.spokes || [])) {
    if (s && s.live === true) add(s.slug, s.checkedISO, CADENCE_FALLBACK);
  }

  let within = 0;
  for (const it of items) {
    const age = daysSince(it.date, today);
    if (age !== null && age <= cadenceDays(it.cadence)) within++;
  }

  const dates = items.map(i => i.date).sort();

  // THE UNDATED SIDE, counted and named. A coverage line that only counted the items we DO
  // date would flatter the page: a guide with one dated keyFact and nine undated tax rates
  // would read "1 of 1 inside its review window" and look complete.
  //
  // The country's own undated fact-shaped values are its tourist-tax figures: the tax
  // object itself and each per-city rate under it. These are real government percentages
  // that the calculator multiplies into a traveler's total, and none of them has ever
  // carried a date or a source. Rome at 6 euros a night is right until Rome changes it,
  // and nothing on this site would currently tell us when that happened.
  //
  // Naming them is the whole point. An undated fact is a gap in our records, and a reader
  // is better served by being told which figures are not individually dated yet than by a
  // coverage number that quietly leaves them out of its denominator.
  const undated = [];
  if (c.tax && !c.tax.none) {
    const regions = Array.isArray(c.tax.regions) ? c.tax.regions.length : 0;
    undated.push({
      what: regions > 1
        ? 'the ' + regions + ' per-place tourist tax rates'
        : 'the tourist tax figure',
      count: 1 + regions,
    });
  }

  return {
    slug: c.slug || null,
    // The page's own re-check date. Still shown, still honest AS A PAGE DATE, and no
    // longer reused as though it were any single fact's date.
    pageChecked: asMachineDate(c.checkedISO),
    pageCheckedLabel: c.checked || monthYear(c.checkedISO),
    changed,
    // dateModified binds here and nowhere else. Null means the JSON-LD omits it.
    dateModified: changed ? changed.date : null,
    coverage: {
      dated: items.length,
      within,
      past: items.length - within,
      oldest: dates[0] || null,
      newest: dates[dates.length - 1] || null,
      // What this page shows that carries no date of its own yet, named rather than
      // omitted from the denominator.
      undated,
      undatedCount: undated.reduce((n, u) => n + u.count, 0),
    },
  };
}

// The same for a spoke. A spoke carries a page-level date rather than a keyFacts block, so
// there is no coverage line to compute, only the honest Checked and Changed pair.
export function spokeProvenance(country, spoke) {
  const c = country || {};
  const s = spoke || {};
  const changed = changedForSpoke(c.slug, s.slug);
  return {
    slug: s.slug || null,
    pageChecked: asMachineDate(s.checkedISO),
    pageCheckedLabel: s.checked || monthYear(s.checkedISO),
    changed,
    dateModified: changed ? changed.date : null,
  };
}
