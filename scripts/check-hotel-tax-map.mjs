// Hotel tax map audit. Run from the repo root: node scripts/check-hotel-tax-map.mjs
//
// The choropleth on /hotel-tax-map is the most screenshot-exposed thing on the site, and a
// screenshot travels without its checked stamp, without its legend and without the sentence
// explaining that light does not mean cheap. One wrong fill therefore outlives every caveat
// around it. This script exists so the honesty rails in src/data/hotel-tax-map.js are
// enforced by a gate rather than by a reviewer remembering them.
//
// It checks STRUCTURE, not truth. It cannot tell you whether 17% is the right TGST rate;
// only a person reading the tax authority can. What it can guarantee is that no country
// colours without a figure behind it, that no property-set charge can ever reach a fill,
// that a forward-dated rise is not being counted as though it were live, and that the
// not-yet-checked fill stays visibly distinct from the light end of the scale. Those are
// the failures that would put a confident colour on something nobody verified.
//
// Exits 1 on any FAIL. Notes are advisory and do not fail the run.

import { readFileSync } from 'node:fs';
import {
  BANDS, STATES, bandFor, colours, hasModelledFlat, modelledShare, isNoBedTax, isCheckedShape,
  SHAPE_WORDS, REFERENCE_STAY, referenceRoomUsd, referencePct,
  hotelTaxMap, hotelTaxWatchlist, hotelTaxMapCheckedISO, byIso,
} from '../src/data/hotel-tax-map.js';
import world from '../src/data/maps/world.js';
import { countries } from '../src/data/index.js';
import fxFallback from '../src/data/fxFallback.js';

// The data file is read as TEXT as well as imported, for one check that cannot be done any
// other way: proving no entry HAND-WRITES a percentage for a flat fee. By the time the module
// has loaded, a derived addedPct and a pasted one are the same number, so the only place the
// difference is visible is the source.
const DATA_PATH = 'src/data/hotel-tax-map.js';
const dataText = readFileSync(new URL('../' + DATA_PATH, import.meta.url), 'utf8');

// The component derives a no-bed-tax entry for every live country with tax.none === true
// that hotel-tax-map.js does not already cover. Rebuilt here the same way so the gate audits
// what actually renders, not just the hand-written half.
// Mirrors the component: a country is a no-charge finding if the flag says so OR if every
// region figure is zero, which is how Costa Rica, the Dominican Republic and India record it.
const noCharge = (c) => {
  if (c.tax.none === true) return true;
  const rs = Array.isArray(c.tax.regions) ? c.tax.regions : [];
  if (typeof c.tax.pct === 'number') return !(c.tax.pct > 0);
  const any = rs.some(r => (typeof r.pct === 'number' && r.pct > 0) || (typeof r.rate === 'number' && r.rate > 0));
  return rs.length > 0 && !any;
};

const derived = countries
  .filter(c => c.live && c.tax && !byIso[(c.iso2 || '').toUpperCase()])
  .map(c => ({
    iso: (c.iso2 || '').toUpperCase(), country: c.name, slug: c.slug,
    spoke: ((c.spokes || []).find(s => s && s.live === true && s.topic === 'taxes') || {}).slug || null,
    state: noCharge(c) ? 'noBedTax' : 'checkedShape',
    note: c.tax.note, shape: noCharge(c) ? null : (c.tax.unit || null),
    checkedISO: c.checkedISO, derived: true,
  }));
const rendered = [...hotelTaxMap, ...derived];

let fails = 0, notes = 0;
const check = (ok, label, detail) => {
  if (!ok) fails++;
  console.log(`  ${ok ? 'ok   ' : 'FAIL '} ${label}${detail ? '  ' + detail : ''}`);
};
const note = (label, detail) => { notes++; console.log(`  note  ${label}${detail ? '  ' + detail : ''}`); };

console.log('== TTC hotel tax map audit ==\n');

// ---------------------------------------------------------------------------
console.log('1. The colour scale is a real scale');
// A gap or an overlap in the bands means some percentage either colours nothing or colours
// two things, and the legend would be describing a scale the fills do not follow.
let contiguous = BANDS.length > 0 && BANDS[0].from === 0;
for (let i = 1; i < BANDS.length; i++) if (BANDS[i].from !== BANDS[i - 1].to) contiguous = false;
check(contiguous, 'bands start at 0 and each one begins where the last ended');
check(BANDS[BANDS.length - 1].to === null, 'the top band is open-ended, so no figure can fall off the scale');

const bandFills = BANDS.map(b => b.fill);
check(new Set(bandFills).size === bandFills.length, 'every band has its own distinct fill');

// The whole absence-is-not-zero rail depends on a reader being able to SEE that grey is not
// the bottom of the ramp. If the not-yet-checked fill were reused as a band, or sat between
// two bands, an unchecked country would read as a low figure.
const stateFills = Object.values(STATES).map(s => s.fill);
check(!stateFills.some(f => bandFills.includes(f)),
  'the off-scale state fills are not reused by any band');
check(new Set(stateFills).size === stateFills.length,
  'the off-scale states are all visually distinct from each other',
  stateFills.join(' '));

// Spot-check the gate at the boundaries so an off-by-one in bandFor cannot ship.
check(bandFor(0) === BANDS[0], 'zero lands in the first band');
check(bandFor(BANDS[0].to) === BANDS[1], 'a figure exactly on a boundary lands in the upper band');
check(bandFor(999) === BANDS[BANDS.length - 1], 'an extreme figure lands in the top band');
check(bandFor(null) === null && bandFor(-1) === null && bandFor('12') === null,
  'a missing, negative or non-numeric figure colours nothing');

// ---------------------------------------------------------------------------
console.log('\n2. Every entry can actually be put on the map');
const drawn = new Set(world.countries.map(c => c.iso).filter(Boolean));
const micro = new Set(world.micro.map(m => m.iso));
const isos = rendered.map(e => e.iso);
check(new Set(isos).size === isos.length, 'no country appears twice in the data');
const unmappable = rendered.filter(e => !drawn.has(e.iso) && !micro.has(e.iso));
check(unmappable.length === 0, 'every entry has a shape or a centroid in the geometry',
  unmappable.length ? unmappable.map(e => `${e.iso} (${e.country})`).join(', ') : '');
check(/^0 0 \d+(\.\d+)? \d+(\.\d+)?$/.test(world.viewBox), 'the geometry carries a usable viewBox', world.viewBox);

// ---------------------------------------------------------------------------
console.log('\n3. Nothing colours without a figure behind it');
const coloured = hotelTaxMap.filter(colours);
for (const e of coloured) {
  const id = `${e.iso} (${e.country})`;
  check(typeof e.addedPct === 'number' && e.addedPct >= 0 && e.addedPct <= 100,
    `${id}: its figure is a plausible percentage`, String(e.addedPct));
  check(Array.isArray(e.government) && e.government.length > 0,
    `${id}: it names the government charges behind that figure`);
  check(!!e.checkedISO, `${id}: it carries a checked date`);
  // A number that nobody can trace is the exact thing this map cannot ship.
  const traceable = (e.government || []).some(g => (g.source && g.source.url) || g.pendingSource);
  check(traceable, `${id}: at least one component carries a source or a note saying which source is still needed`);
}

// ---------------------------------------------------------------------------
// THE FILL IS A SOURCED CLAIM. Hard rail, and the reason this block exists at all.
//
// The check above accepts `pendingSource` in place of a real source, which is right for an
// entry we are still building but wrong the moment that entry COLOURS. The Maldives shipped
// shaded with `source: null` on both of its government figures and a pendingSource note on
// each, and passed every gate, because "verified by MAIN, URL to follow" satisfied
// traceability. That put an unsourced fill on half the shaded map while the page's own panel
// told readers a country colours only when its rate is read off the authority that sets it.
// A rule the code states in prose and does not enforce is not a rule.
//
// WHY THIS IS STRICTER THAN "figures that feed the fill". The honest line would be to demand
// sources only on the figures behind `addedPct`, but that line is not drawable from this
// data: `addedPct` is one hand-computed number explained in prose by `addedBasis`, and no
// field links a government row to it. The Netherlands proves the point. Its 21% VAT is
// `basis: percentOfRoom` yet contributes nothing to the 10.3% fill, because the VAT is
// already inside the quoted price, so neither `basis` nor `inQuotedPrice` identifies a
// contributor. Rather than guess, this demands a source on EVERY government figure of a
// colouring country. That is stricter than strictly necessary and never wrong, and it
// actually matches the promise better: every government row is DISPLAYED to the reader in
// that country's detail, not just the one driving the colour.
//
// If a future coloured country genuinely needs to show a flat charge whose source is still
// pending, do not loosen this. Make the exception explicit in the data so it is visible in
// review, because the failure mode being prevented here is precisely an exception that
// nobody could see.
console.log('\n3a. Every government figure behind a fill is sourced, not just promised');
for (const e of coloured) {
  const id = `${e.iso} (${e.country})`;
  for (const g of (e.government || [])) {
    const sourced = !!(g.source && g.source.url);
    check(sourced,
      `${id}: "${g.label}" carries a real source`,
      sourced ? g.source.url : (g.pendingSource ? 'source is null, only a pendingSource note' : 'source is null'));
  }
}

// The inverse rail: a state that is not "checked" must not be able to colour, so it must
// not carry a figure at all. A stray addedPct on a varies or pending entry is one edit away
// from a fill nobody intended.
for (const e of hotelTaxMap.filter(e => e.state !== 'checked')) {
  check(e.addedPct === undefined || e.addedPct === null,
    `${e.iso} (${e.country}): state "${e.state}" carries no figure that could colour it`);
}

// ---------------------------------------------------------------------------
console.log('\n3b. Derived findings are honest about what they are');
// These say "we checked and there is no tourist tax", which is a COMPONENT finding, not an
// answer on this map's axis. So the one thing they must never do is carry a percentage: that
// would put them on the colour scale and claim a number nobody verified.
for (const e of derived) {
  const id = `${e.iso} (${e.country})`;
  check(e.addedPct === undefined || e.addedPct === null,
    `${id}: carries no percentage, so it cannot reach the colour scale`);
  check(!!e.note && e.note.length > 40, `${id}: carries the researched note from its guide`);
  check(!!e.checkedISO, `${id}: carries the guide's checked date`);
  const target = !e.slug ? null : (e.spoke ? `/${e.slug}/${e.spoke}` : `/${e.slug}`);
  check(!!target, `${id}: resolves to a page rather than linking nowhere`, String(target));
}
check(derived.every(e => isNoBedTax(e) || isCheckedShape(e)),
  'every derived entry is either a no-bed-tax finding or a known-shape finding');
check(!derived.some(e => colours(e)), 'no derived entry can colour a band');
// A known-shape row states the SHAPE of the charge, so the shape has to be a unit we have
// words for. An unrecognised unit would render as a vague fallback and quietly lose meaning.
for (const e of rendered.filter(isCheckedShape)) {
  check(!!e.shape && !!SHAPE_WORDS[e.shape],
    `${e.iso} (${e.country}): its tax unit has plain-language words`, String(e.shape));
}
// A row saying "a government charge applies here" must have a non-zero figure behind it
// somewhere, or it is asserting a charge the guide does not record.
for (const e of derived.filter(isCheckedShape)) {
  const c = countries.find(x => (x.iso2 || '').toUpperCase() === e.iso);
  check(!!c && !noCharge(c),
    `${e.iso} (${e.country}): claims a charge applies and has a non-zero figure to back it`);
}
// Every covered country must land in some checked state. If this fails, the map has gone back
// to calling researched countries unchecked, which is the failure this whole state exists for.
const coveredLive = countries.filter(c => c.live);
const unaccounted = coveredLive.filter(c => {
  const i = (c.iso2 || '').toUpperCase();
  return !byIso[i] && !derived.some(d => d.iso === i);
});
check(unaccounted.length === 0,
  'every covered country appears on the map in some checked state',
  unaccounted.map(c => c.slug).join(', '));

// ---------------------------------------------------------------------------
console.log('\n4. Property charges cannot reach a fill');
// Structural, not editorial: the only field that colours is addedPct, so the test is that
// no property row carries anything numeric that a future refactor could mistake for it.
const NUMERIC_ON_PROPERTY = ['pct', 'addedPct', 'amount', 'rate'];
for (const e of hotelTaxMap) {
  for (const p of (e.property || [])) {
    const leaked = NUMERIC_ON_PROPERTY.filter(k => typeof p[k] === 'number');
    check(leaked.length === 0,
      `${e.iso}: property row "${p.label}" holds no numeric field a fill could read`,
      leaked.join(', '));
    check(typeof p.note === 'string' && /propert|hotel|resort/i.test(p.note),
      `${e.iso}: property row "${p.label}" says who sets it`);
  }
}

// ---------------------------------------------------------------------------
console.log('\n5. Arithmetic sanity on the coloured figures');
// Real invariants only. The map's figure is NOT a plain sum of its components (Amsterdam's
// city tax is levied on the ex-VAT base, so 12.5% of the room becomes about 10.3% of the
// price you were quoted), so equality cannot be asserted. These two can be:
for (const e of coloured) {
  const id = `${e.iso} (${e.country})`;
  const pctComponents = (e.government || []).filter(g => g.basis === 'percentOfRoom');
  const sum = pctComponents.reduce((n, g) => n + (parseFloat(String(g.figure).replace(/[^\d.]/g, '')) || 0), 0);
  // THE CEILING NOW INCLUDES THE MODELLED FLATS, and it had to. Phase 1's invariant was
  // "addedPct cannot exceed the sum of the percentage charges", which was right when a flat
  // fee could not reach a fill. Under Rail 3 a flat fee legitimately does, so the old form
  // would have failed the Maldives (17% of percentages, 24% of fill) and, worse, would have
  // passed every flat-only country trivially because their percentage sum is zero. The
  // honest ceiling is the percentages plus what the basket contributed.
  const ceiling = sum + modelledShare(e);
  check(ceiling === 0 || e.addedPct <= ceiling + 0.05,
    `${id}: what is added on top does not exceed its percentage charges plus its modelled flats`,
    `added ${e.addedPct}%, components ${sum}% + modelled ${modelledShare(e)}%`);
  if (typeof e.governmentTotalPct === 'number') {
    check(e.addedPct <= e.governmentTotalPct + 0.01,
      `${id}: what is added on top does not exceed the total government take`,
      `added ${e.addedPct}%, total ${e.governmentTotalPct}%`);
  }
  // A country whose stack includes a flat charge must be stippled, or the fill quietly
  // understates it with nothing on the map to say so.
  const flatInGov = (e.government || []).some(g => /perPerson|perRoom|flat/i.test(String(g.basis || '')));
  check(flatInGov === hasModelledFlat(e),
    flatInGov
      ? `${id}: its flat government charge is mirrored in modelled[], so it is converted AND stippled`
      : `${id}: has no flat government charge and correctly claims none`);
  // A figure derived by anything other than adding up its parts has to explain itself, or
  // the detail view leaves a reader unable to reconstruct it.
  if (Math.abs(e.addedPct - sum) > 0.01) {
    check(!!e.addedBasis, `${id}: its figure differs from a plain sum of its percentages, so it explains how it was derived`);
  }
}

// ---------------------------------------------------------------------------
// THE DECLARED REFERENCE STAY. Hard rail, and the newest one, so here is what it is for.
//
// Rail 3 changed in Phase 2: a flat government fee is now converted into a percentage at a
// declared basket, which is what lets most of Europe reach this scale at all. That buys a
// comparable number and pays for it with an assumption, so the assumption has to be
// visible, stated once, and impossible to apply inconsistently. Three failure modes are
// worth naming because each of them would look fine in review:
//
//   1. A PASTED PERCENTAGE. Someone computes 3.7% for Iceland by hand and types it in. It
//      is correct on the day and wrong forever after, because it no longer moves when the
//      rate does, and nothing on the page says which of the two it is. Caught by reading the
//      SOURCE TEXT, since a pasted number and a derived one are identical once loaded.
//   2. A SILENT NULL. A currency with no rate in fxFallback.js yields null, and a fill
//      computed as "percentages only, flat charge quietly dropped" would understate the
//      country while looking complete. The derivation returns null for the whole figure
//      instead, which drops the country off the scale, and this asserts that.
//   3. AN UNSTIPPLED MODEL. A modelled fill that does not carry the stipple is a precise
//      colour resting on an assumption with nothing on the map to say so, which is the exact
//      thing the old stipple existed to prevent.
console.log('\n5a. The declared reference stay is declared, applied once, and never pasted');

check(typeof REFERENCE_STAY.nightly === 'number' && REFERENCE_STAY.nightly > 0,
  'the basket names a positive room rate', String(REFERENCE_STAY.nightly));
check(REFERENCE_STAY.guests >= 1 && REFERENCE_STAY.rooms >= 1,
  'the basket names a party size and a room count',
  `${REFERENCE_STAY.guests} guest(s), ${REFERENCE_STAY.rooms} room(s)`);
check(!!fxFallback.rates[REFERENCE_STAY.currency],
  `the basket currency has a rate in fxFallback.js`, REFERENCE_STAY.currency);
check(typeof referenceRoomUsd === 'number' && referenceRoomUsd > 0,
  'the reference room converts to a usable dollar figure', String(referenceRoomUsd));
// The words in the legend must contain the numbers the arithmetic uses. A legend that says
// 150 euros while the code uses 120 is the worst outcome available here, because the whole
// defence of this rail is that the assumption is stated.
check(REFERENCE_STAY.words.includes(String(REFERENCE_STAY.nightly)),
  'the words the legend prints name the same room rate the code converts at', REFERENCE_STAY.words);

// Every flat charge is convertible, and its unit is one the site has words for.
const UNITS = ['perPersonPerNight', 'perRoomPerNight'];
for (const e of hotelTaxMap.filter(hasModelledFlat)) {
  const id = `${e.iso} (${e.country})`;
  for (const f of e.modelled) {
    check(typeof f.amount === 'number' && f.amount > 0,
      `${id}: modelled charge "${f.label}" holds a positive amount`, String(f.amount));
    check(f.currency === fxFallback.base || !!fxFallback.rates[f.currency],
      `${id}: modelled charge "${f.label}" is in a currency fxFallback.js can convert`, String(f.currency));
    check(UNITS.includes(f.unit),
      `${id}: modelled charge "${f.label}" carries a unit the basket knows how to apply`, String(f.unit));
  }
  // The derivation, re-run here rather than trusted. If these disagree, either the module
  // did not derive the figure or something overwrote it afterwards.
  const parts = e.modelled.map(f => referencePct(f.amount, f.currency, f.unit));
  const expected = parts.some(p => p == null)
    ? null
    : Math.round(((e.basePct || 0) + parts.reduce((n, p) => n + p, 0)) * 10) / 10;
  check(e.addedPct === expected || (expected == null && (e.addedPct == null)),
    `${id}: its figure is exactly what the basket produces, not something near it`,
    `holds ${e.addedPct}, basket gives ${expected}`);
  check(!colours(e) || e.addedPct != null,
    `${id}: a charge in a currency with no rate would drop it off the scale rather than colour it short`);
  // The native figure has to survive to the reader, or the modelled percent is all they get.
  check((e.government || []).some(g => /perPerson|perRoom|flat/i.test(String(g.basis || ''))),
    `${id}: the flat charge is also stated as a government row in its own units`);
}

// THE NO-PASTED-PERCENTAGE CHECK. Splits the data file into entry blocks and refuses any
// block that holds both a modelled charge and a hand-written addedPct.
const blocks = dataText.split(/\n  \{\n/).slice(1);
check(blocks.length >= hotelTaxMap.length,
  'the source splits into at least as many entry blocks as there are entries, so this check still covers them all',
  `${blocks.length} blocks, ${hotelTaxMap.length} entries`);
const pasted = blocks.filter(b => /\n\s+modelled: \[/.test(b) && /\n\s+addedPct:/.test(b));
check(pasted.length === 0,
  'no entry holds both a modelled flat charge and a hand-written percentage for it',
  pasted.length ? `${pasted.length} block(s) do; the percent must be derived, not pasted` : '');

// THE STIPPLE RAIL. A modelled fill must be marked as modelled.
for (const e of hotelTaxMap.filter(e => colours(e))) {
  const modelled = hasModelledFlat(e);
  check(modelled === (modelledShare(e) > 0) || !modelled,
    `${e.iso}: if it carries modelled charges, they contribute a real share of its fill`,
    `modelled share ${modelledShare(e)}%`);
}

// A country that refuses a single figure must not hold a route to one.
for (const e of hotelTaxMap.filter(e => e.state !== 'checked')) {
  check(!hasModelledFlat(e),
    `${e.iso} (${e.country}): state "${e.state}" carries no modelled charge that could colour it`);
}

// ---------------------------------------------------------------------------
console.log('\n6. Forward-dated and proposed charges are not counted as live');
const today = new Date(new Date().toISOString().slice(0, 10) + 'T00:00:00Z');
const parse = (s) => { const d = new Date(String(s) + 'T00:00:00Z'); return isNaN(d.getTime()) ? null : d; };

for (const e of hotelTaxMap) {
  for (const g of (e.government || [])) {
    const eff = parse(g.effective);
    if (eff && eff > today) {
      note(`${e.iso}: component "${g.label}" takes effect ${g.effective}, in the future`,
        'confirm by hand that the coloured figure excludes it');
    }
    // "proposed" means announced and not collected, so it must never sit inside the stack
    // that a fill is computed from.
    check(g.status !== 'proposed',
      `${e.iso}: no government component behind a figure is still only proposed`,
      g.status === 'proposed' ? g.label : '');
  }
  // Watch rows are the correct home for a proposal or a scheduled rise. They must stay
  // inert: nothing numeric a fill could pick up.
  for (const w of (e.watch || [])) {
    const leaked = ['pct', 'addedPct', 'amount'].filter(k => typeof w[k] === 'number');
    check(leaked.length === 0, `${e.iso}: watch row "${w.label}" holds nothing a fill could read`, leaked.join(', '));
  }
}

// ---------------------------------------------------------------------------
console.log('\n7. The two kinds of "it depends" stay apart');
for (const e of hotelTaxMap.filter(e => e.state === 'varies')) {
  check(!!e.variesNote, `${e.iso}: says why one national figure would be wrong`);
  check(!e.cityBasis, `${e.iso}: does not also claim a single city basis, which would contradict varying`);
}
for (const e of coloured.filter(e => e.cityBasis)) {
  check(!!e.cityBasisNote, `${e.iso}: names the city its figure is for AND says what the rest of the country does`);
}
// A THIRD KIND OF "IT DEPENDS", ADDED IN PHASE 2. Croatia's rate is set by municipality
// category and season, and Greece's by star rating and season, so neither has a city to name
// and neither is honestly a national rate. Both colour on a REPRESENTATIVE rung and say which
// rung it is. That is only defensible with the note attached, so the note is mandatory here
// for the same reason cityBasisNote is: without it the map states a national figure.
for (const e of coloured.filter(e => e.representative)) {
  check(!!e.representativeNote,
    `${e.iso}: names which case its figure represents AND what the rest of the range looks like`);
}
// The two must not be silently interchangeable: a representative figure that is really one
// city should say so with cityBasis, which is the narrower and more useful claim.
for (const e of coloured) {
  check(!(e.state === 'varies' && (e.cityBasis || e.representative)),
    `${e.iso}: does not claim both that no figure is possible and that one figure represents it`);
}

// ---------------------------------------------------------------------------
console.log('\n8. No placeholder can survive to a build');
// The one rule that makes a review shell safe: if a demo or placeholder figure is ever
// added to get the shape reviewed, this gate refuses to pass until it is gone.
const BANNED = ['demo', 'placeholder', 'sample', 'fake', 'todo', 'tbd', 'xxx'];
const scan = (obj, path) => {
  if (!obj || typeof obj !== 'object') return [];
  let hits = [];
  for (const [k, v] of Object.entries(obj)) {
    if (BANNED.includes(k.toLowerCase()) && v) hits.push(`${path}.${k}`);
    if (typeof v === 'string' && /\b(placeholder|lorem ipsum|FIXME)\b/i.test(v)) hits.push(`${path}.${k}`);
    if (v && typeof v === 'object') hits = hits.concat(scan(v, `${path}.${k}`));
  }
  return hits;
};
const placeholders = hotelTaxMap.flatMap((e, i) => scan(e, e.iso || `entry${i}`))
  .concat(hotelTaxWatchlist.flatMap((w, i) => scan(w, `watch${i}`)));
check(placeholders.length === 0, 'no entry carries a demo or placeholder marker', placeholders.join(', '));

// ---------------------------------------------------------------------------
console.log('\n9. Nothing unsourced is shown to a reader');
// The component filters the watchlist on source, so this asserts the filter has something
// to filter on rather than a half-shaped row that slips through.
for (const w of hotelTaxWatchlist) {
  const id = `${w.where}, ${w.label}`;
  const sourced = !!(w.source && w.source.url);
  check(sourced || !!w.pendingSource,
    `watchlist ${id}: either carries a source or says which source is needed`);
  if (w.status === 'proposed') {
    check(!w.effective, `watchlist ${id}: a proposal carries no effective date, since nothing was set`);
  }
}
check(!!parse(hotelTaxMapCheckedISO), 'the map carries a parseable page-level checked date', hotelTaxMapCheckedISO);

// ---------------------------------------------------------------------------
console.log('\n== shape ==');
const byState = {};
for (const e of rendered) byState[e.state] = (byState[e.state] || 0) + 1;
console.log('  entries:', rendered.length, '(' + hotelTaxMap.length, 'hand-written +', derived.length, 'derived) |',
  Object.entries(byState).map(([k, v]) => `${k} ${v}`).join(', '));
console.log('  coloured:', coloured.length, coloured.length ? '(' + coloured.map(e => `${e.iso} ${e.addedPct}%${hasModelledFlat(e) ? ' modelled' : ''}`).join(', ') + ')' : '');
console.log('  reference stay:', REFERENCE_STAY.words, '=', referenceRoomUsd.toFixed(2), 'USD at the fxFallback snapshot of', fxFallback.date);
console.log('  fills resting on that basket:',
  coloured.filter(hasModelledFlat).map(e => `${e.iso} ${modelledShare(e)}% of ${e.addedPct}%`).join(', ') || 'none');
console.log('  occupied bands:', BANDS.filter(b => coloured.some(e => bandFor(e.addedPct) === b)).map(b => b.label).join(', ') || 'none');
console.log('  empty bands (legend still shows them):',
  BANDS.filter(b => !coloured.some(e => bandFor(e.addedPct) === b)).map(b => b.label).join(', ') || 'none');
// Count COVERED countries only. The rendered set also holds entries for countries TTC does
// not cover (the Maldives, the US), so counting the whole set against 59 produced "60 of 59".
const coveredIsos = new Set(countries.filter(c => c.live).map(c => (c.iso2 || '').toUpperCase()));
const coveredChecked = rendered.filter(e => coveredIsos.has(e.iso) && e.state !== 'pending').length;
console.log('  checked position on', coveredChecked, 'of the', coveredIsos.size, 'countries TTC covers');
console.log('  entries for countries TTC does not cover:',
  rendered.filter(e => !coveredIsos.has(e.iso)).map(e => e.iso).join(', ') || 'none');
console.log('  sources still needed:',
  hotelTaxMap.flatMap(e => (e.government || []).filter(g => !g.source || !g.source.url).map(g => `${e.iso}/${g.label}`)).length
  + hotelTaxWatchlist.filter(w => !w.source || !w.source.url).length);

console.log('\nRESULT:', fails ? 'FAIL' : (notes ? 'PASS (notes)' : 'PASS'));
process.exit(fails ? 1 : 0);
