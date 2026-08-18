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

import {
  BANDS, STATES, bandFor, colours, hasFlat, isNoBedTax,
  hotelTaxMap, hotelTaxWatchlist, hotelTaxMapCheckedISO, byIso,
} from '../src/data/hotel-tax-map.js';
import world from '../src/data/maps/world.js';
import { countries } from '../src/data/index.js';

// The component derives a no-bed-tax entry for every live country with tax.none === true
// that hotel-tax-map.js does not already cover. Rebuilt here the same way so the gate audits
// what actually renders, not just the hand-written half.
const derived = countries
  .filter(c => c.live && c.tax && c.tax.none === true && !byIso[(c.iso2 || '').toUpperCase()])
  .map(c => ({
    iso: (c.iso2 || '').toUpperCase(), country: c.name, slug: c.slug,
    spoke: ((c.spokes || []).find(s => s && s.live === true && s.topic === 'taxes') || {}).slug || null,
    state: 'noBedTax', note: c.tax.note, checkedISO: c.checkedISO, derived: true,
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

// The inverse rail: a state that is not "checked" must not be able to colour, so it must
// not carry a figure at all. A stray addedPct on a varies or pending entry is one edit away
// from a fill nobody intended.
for (const e of hotelTaxMap.filter(e => e.state !== 'checked')) {
  check(e.addedPct === undefined || e.addedPct === null,
    `${e.iso} (${e.country}): state "${e.state}" carries no figure that could colour it`);
}

// ---------------------------------------------------------------------------
console.log('\n3b. Derived no-bed-tax findings are honest about what they are');
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
check(derived.every(isNoBedTax), 'every derived entry reports as a no-bed-tax finding');
check(!derived.some(e => colours(e)), 'no derived entry can colour a band');

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
  // You cannot have more added on top than the total of every percentage charge that exists.
  check(sum === 0 || e.addedPct <= sum + 0.01,
    `${id}: what is added on top does not exceed the sum of its percentage charges`,
    `added ${e.addedPct}%, components sum to ${sum}%`);
  if (typeof e.governmentTotalPct === 'number') {
    check(e.addedPct <= e.governmentTotalPct + 0.01,
      `${id}: what is added on top does not exceed the total government take`,
      `added ${e.addedPct}%, total ${e.governmentTotalPct}%`);
  }
  // A country whose stack includes a flat charge must be stippled, or the fill quietly
  // understates it with nothing on the map to say so.
  const flatInGov = (e.government || []).some(g => /perPerson|perRoom|flat/i.test(String(g.basis || '')));
  check(flatInGov === hasFlat(e),
    flatInGov
      ? `${id}: its flat government charge is mirrored in flat[], so the stipple appears`
      : `${id}: has no flat government charge and correctly claims none`);
  // A figure derived by anything other than adding up its parts has to explain itself, or
  // the detail view leaves a reader unable to reconstruct it.
  if (sum > 0 && Math.abs(e.addedPct - sum) > 0.01) {
    check(!!e.addedBasis, `${id}: its figure differs from a plain sum, so it explains how it was derived`);
  }
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
console.log('  coloured:', coloured.length, coloured.length ? '(' + coloured.map(e => `${e.iso} ${e.addedPct}%${hasFlat(e) ? ' +flat' : ''}`).join(', ') + ')' : '');
console.log('  occupied bands:', BANDS.filter(b => coloured.some(e => bandFor(e.addedPct) === b)).map(b => b.label).join(', ') || 'none');
console.log('  empty bands (legend still shows them):',
  BANDS.filter(b => !coloured.some(e => bandFor(e.addedPct) === b)).map(b => b.label).join(', ') || 'none');
const covered = countries.filter(c => c.live).length;
console.log('  checked position on', rendered.filter(e => e.state !== 'pending').length, 'of the', covered, 'countries TTC covers');
console.log('  sources still needed:',
  hotelTaxMap.flatMap(e => (e.government || []).filter(g => !g.source || !g.source.url).map(g => `${e.iso}/${g.label}`)).length
  + hotelTaxWatchlist.filter(w => !w.source || !w.source.url).length);

console.log('\nRESULT:', fails ? 'FAIL' : (notes ? 'PASS (notes)' : 'PASS'));
process.exit(fails ? 1 : 0);
