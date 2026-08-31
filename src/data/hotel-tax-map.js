import fxFallback from './fxFallback.js';
import { usdFromLocal } from './usd-bracket.js';

// THE HOTEL TAX WORLD MAP. What government adds on top of a quoted room rate, by country.
//
// This file is the whole honesty spine of /hotel-tax-map. The component paints what it
// finds here and nothing else, so every rail below is enforced by the shape of the data
// rather than by a reviewer remembering a rule.
//
// ============================================================================
// RAIL 1. THE COLOUR ENCODES WHAT GOVERNMENT ADDS ON TOP, NOT TOTAL TAX BURDEN.
// ============================================================================
// `addedPct` is the only field that decides a fill. It is the government-levied share
// that lands on the bill ON TOP of the price the traveler was quoted. It is NOT the
// country's tax burden on a hotel room, and those two numbers are wildly different in
// most of Europe and in Japan, where VAT is embedded in the sticker price by law.
//
// A country can therefore be LIGHT on this map and still be heavily taxed. That is the
// point, not a flaw: the traveler's question is "what will appear at checkout that I did
// not see when I compared prices", and a map coloured by total burden would answer a
// different question while looking like it answered this one. Every entry that is light
// for this reason carries display:"inclusive" and says so in its own words.
// `governmentTotalPct` records the total where a single figure honestly exists, for the
// detail view only. It never touches a fill.
//
// ============================================================================
// RAIL 2. PROPERTY CHARGES NEVER TOUCH THE COLOUR.
// ============================================================================
// Resort fees, service charges and discretionary daily gratuities are set by the
// property, not the government. There is no national figure to look up and anyone
// quoting one is guessing. They live in `property` as RANGES, they are labelled as the
// property's, and no code path lets them reach a fill.
//
// ============================================================================
// RAIL 3. A FLAT FEE IS CONVERTED AT A DECLARED REFERENCE STAY, NEVER SILENTLY.
// ============================================================================
// PHASE 1 REFUSED TO CONVERT FLAT FEES AT ALL, and the reasoning was sound: a flat charge
// has no percentage until you assume a room rate, so the Maldives' 12 dollars per person
// per night is 16% of a guesthouse and 3% of an overwater villa. Phase 1 therefore coloured
// on percentage components only and marked the rest with a stipple meaning "there is more
// here than this colour can show".
//
// The cost of that was a map that could not fill in. Most of Europe charges a few euros a
// night rather than a percentage, so the entire wave of European countries had no figure
// this scale could hold, and a choropleth where the honest answer is "no colour" for
// twenty countries is not a choropleth. MAIN's call, 2026-08-28, was the alternative the
// old rail named: a DECLARED REFERENCE STAY.
//
// THE BASKET IS ONE GUEST IN ONE ROOM AT 150 EUROS A NIGHT. Every flat government charge
// is expressed as a share of that room. The number this buys is comparable across
// countries, which is the whole point, and it is bought with an assumption.
//
// SO THE HONESTY RAIL MOVES, IT DOES NOT DISAPPEAR. Three things carry it:
//   1. The legend states the basket in plain words, including the consequence: a cheaper
//      room feels a flat fee harder and a pricier room barely notices it.
//   2. Every converted country keeps its NATIVE figure in its own currency on its row, so
//      the reader sees the real charge and not only the modelled percent.
//   3. The stipple survives with a NEW meaning: it now marks a fill that is modelled at
//      the basket rather than measured as a percentage. A screenshot of this map still
//      shows which countries rest on the assumption, which is what the stipple was for.
//
// ONE RATE, ONE PLACE. The conversion is computed at build time from fxFallback.js, the
// snapshot the currency panels already fall back to, so the map cannot disagree with the
// rest of the site and it moves when the rate does. No entry below holds a hand-typed
// percentage for a flat fee: it holds the fee, its currency and its unit, and the percent
// is derived. A pasted percentage is a rate source, and this file must never become one.
//
// ============================================================================
// RAIL 4. ABSENCE IS NEVER ZERO.
// ============================================================================
// A country with no entry here, or an entry whose state is not "checked", renders in an
// explicit not-yet-checked fill that is visibly distinct from the light end of the scale
// and carries its own legend line. It is never white and it never reads as "no tax".
// An entry may exist with NO figure at all: that is state:"pending", which is how a
// country gets listed, gets its proposals named and gets watched by the staleness scanner
// while still colouring exactly like a country nobody has looked at yet. An entry can
// only colour by holding a real figure, so a half-finished entry cannot leak a fill.
//
// ============================================================================
// RAIL 5. TWO DIFFERENT KINDS OF "IT DEPENDS", KEPT APART.
// ============================================================================
//   `cityBasis`  We colour this country and NAME the city the figure is for. The row and
//                the detail both say so, so the map never implies a national rate. Used
//                where one city is what a visitor overwhelmingly means (Amsterdam).
//   state:"varies"  We refuse a single figure because the internal spread is too wide for
//                any one city to stand for the country. Renders as a distinct hatch, never
//                a band, with representative city figures in the detail. The US, Canada
//                and Switzerland are the cases the brief names.
// Collapsing these two would either invent a national number or hide a real one.
//
// ============================================================================
// RAIL 6. FORWARD-DATED CHANGES ARE NOT SHOWN AS LIVE.
// ============================================================================
// A component carrying `effective` in the future is listed as scheduled and is excluded
// from the in-force figure. `status:"proposed"` means announced and not collected: it is
// named in the detail and excluded from every fill. `watch` entries are scheduled changes
// we are tracking; they are read by scripts/check-fact-staleness.mjs on every run and are
// only DISPLAYED once they carry a source, so nothing unsourced reaches a reader.
//
// ============================================================================
// RAIL 7. THE ONE RULE THAT DECIDES EVERY EUROPEAN CLASSIFICATION.
// ============================================================================
// Written down because it is the question every new European entry raises, and answering
// it from scratch each time is how two countries end up on two different axes.
//
// Across every major EU regime, VAT is EMBEDDED in the displayed hotel price by law, and
// the tourist tax is a SEPARATE line excluded from the VAT base. So on a European entry the
// VAT does NOT colour, because it is already inside the sticker the traveler compared, and
// only the tourist tax colours, because it is what arrives on top. That is why a wave of
// heavily taxed European countries lands in the bottom band on their small tourist tax
// rather than in the top band on their large VAT. It looks wrong at a glance and it is the
// correct answer to the question this map asks.
//
// TWO CONSEQUENCES WORTH KNOWING BEFORE EDITING AN ENTRY:
//   - The Netherlands is the exception, which is why it is handled specially: Amsterdam's
//     city tax is levied on the ex-VAT room, so it is rebased onto the VAT-inclusive price
//     the traveler was quoted (12.5% becomes 10.3%). That rebasing has NOT been applied to
//     the other percentage levies here, which colour on their stated rate. See the note on
//     the Austria entry: it is an open methodological question, not a settled one.
//   - The United Kingdom is the other exception, in the other direction. VAT applies to the
//     Edinburgh levy, so 5% of the ex-VAT room plus the VAT on it comes back to almost
//     exactly 5% of the VAT-inclusive rate. Headline and landed share coincide there.

// --- the declared reference stay --------------------------------------------
// The basket every flat government charge is converted at, per Rail 3. Held here so the
// legend, the entries and the gate cannot describe three different baskets.
//
// WHY 150 EUROS AND ONE GUEST. One guest because the site's own cost chart already converts
// hotel tax at one traveler (CostChart.astro, TAX_TRAVELERS = 1), so the map matches a
// basket the site had rather than inventing a second one. 150 euros because it is close to
// the middle of what a visitor pays in the European cities this wave is about, and because
// a round number is easier for a reader to re-run against their own room than a precise one.
export const REFERENCE_STAY = {
  guests: 1,
  rooms: 1,
  nightly: 150,
  currency: 'EUR',
  // The legend prints this verbatim. Kept beside the numbers so the words cannot drift
  // from the arithmetic they describe.
  words: 'one guest, one room, 150 euros a night',
};

// Units per US dollar, from the site's single baked snapshot. The base currency is not in
// the rates table, so it is handled here rather than by every caller.
const perUsd = (cur) => (cur === fxFallback.base ? 1 : fxFallback.rates[cur]);

// One decimal. A modelled percentage is an approximation resting on a declared assumption,
// and a second decimal would be precision it has not earned.
const round1 = (n) => Math.round(n * 10) / 10;

// The reference room, in dollars, so a fee in any currency can be compared with it through
// the one rate table. Null if the reference currency itself is missing a rate, which would
// make every conversion below impossible rather than merely wrong.
export const referenceRoomUsd = usdFromLocal(REFERENCE_STAY.nightly, perUsd(REFERENCE_STAY.currency));

// A flat charge as a share of the reference room. Returns null, never a zero and never a
// guess, if the currency has no rate: absence is not zero here either, and a null keeps the
// country off the colour scale instead of colouring it at nothing.
export function referencePct(amount, currency, unit) {
  const room = referenceRoomUsd;
  if (!room || !(room > 0)) return null;
  const usd = usdFromLocal(amount, perUsd(currency));
  if (usd == null) return null;
  // Per-person charges multiply by the party size the basket declares, which is one. Kept
  // explicit rather than implied, because the day the basket changes to two guests this is
  // the line that has to notice.
  const people = unit === 'perPersonPerNight' ? REFERENCE_STAY.guests : 1;
  return round1((usd * people) / room * 100);
}

// --- the colour scale -------------------------------------------------------
// Five bands on addedPct. The ramp is the site's teal, light to deep. Bands are held here
// rather than in the component so the legend, the fills and the checker cannot disagree.
// The legend renders every band whether or not a country currently occupies it, because
// hiding an empty band would make the scale change shape as data lands.
export const BANDS = [
  { key: 'b1', from: 0,  to: 5,    label: 'Under 5%',   fill: '#DCE9E4' },
  { key: 'b2', from: 5,  to: 10,   label: '5 to 10%',   fill: '#B6D4C9' },
  { key: 'b3', from: 10, to: 15,   label: '10 to 15%',  fill: '#7FB8A5' },
  { key: 'b4', from: 15, to: 22,   label: '15 to 22%',  fill: '#3D8F76' },
  { key: 'b5', from: 22, to: null, label: '22% and up', fill: '#0A5644' },
];

// The non-band fills. Named here so the legend and the SVG read the same source.
export const STATES = {
  unchecked: { fill: '#E7E4DC', label: 'Not yet checked' },
  // LABEL SOFTENED 2026-08-31. The fill is unchanged. The old wording read as a dead end,
  // and a varies country is the opposite of that: it is the one state where the country guide
  // has more to say than any fill could, so the label should send a reader there.
  varies:    { fill: '#CFD8D3', label: 'Depends on the city, and the guide has the numbers' },
  // CHECKED, AND THERE IS NO BED TAX. Not a band, and deliberately not on the teal ramp,
  // because we have verified a COMPONENT (no tourist or hotel tax) and not the map's axis
  // (what VAT adds on top). Putting it in the light band would claim a percentage nobody
  // checked; leaving it grey would call our own research ignorance, which is what the first
  // version of this map did to 26 countries. A warm off-scale fill says "we looked, and
  // here is what we found" without implying a number.
  noBedTax:  { fill: '#F5E3C4', label: 'Checked: no tourist or hotel tax' },
  // CHECKED, THERE IS A CHARGE, AND THE FIGURE IS NOT ON THIS SCALE YET. 29 covered
  // countries sat in the not-yet-checked grey while their guides carried a researched, dated
  // tax position: Morocco's per-person nightly charge, Egypt's percentage, and 27 more. The
  // figures live in the guides' prose rather than in a numeric field, so they cannot be lifted
  // onto this map's axis without MAIN reading each one. What CAN be stated honestly today is
  // that we checked, that there is a charge, and what SHAPE it takes, which is real
  // information a reader wants. Rendered as hairlines over the grey rather than a flat tone:
  // it reads as "grey with something in it", which is exactly the status.
  checkedShape: { fill: 'url(#htm-lines)', swatch: '#E7E4DC', label: 'Checked: there is a charge, figure not yet on this scale' },
};

export const bandFor = (pct) => {
  if (typeof pct !== 'number' || !Number.isFinite(pct) || pct < 0) return null;
  return BANDS.find(b => pct >= b.from && (b.to == null || pct < b.to)) || null;
};

// A country colours ONLY if it holds a real in-force figure. Everything else, including a
// half-written entry, falls through to the not-yet-checked fill. This is the single gate
// between the data and a fill, deliberately one function so it can be tested and so no
// component branch can route around it.
export const colours = (e) => !!e && e.state === 'checked' && bandFor(e.addedPct) !== null;

// A country we have checked and found to have no tourist or hotel tax. These are NOT
// hand-written here: they are derived in the component from `tax.none === true` in
// src/data/index.js, which is the same researched, dated field the country guides publish
// and the calculator reads. Deriving rather than transcribing means the map reflects what
// the site already knows the day a guide changes, and nobody has to remember to update two
// places. It also cannot invent a country, because the country has to exist to be derived.
export const isNoBedTax = (e) => !!e && e.state === 'noBedTax';

// Checked, a charge exists, and its shape is known, but no figure sits on this map's axis
// yet. Also derived in the component from src/data/index.js, same reasoning as noBedTax.
export const isCheckedShape = (e) => !!e && e.state === 'checkedShape';

// --- charges we know about and deliberately left out of the fill --------------
// ADDED IN PHASE 2 PART 2, and it exists because of a rule MAIN set: a component colours
// only if it carries a real government URL, and anything that cannot be sourced cleanly goes
// into the detail rather than into the fill. Better a slightly lower honest fill than a
// higher one resting on a guess.
//
// The problem with putting those charges in prose is that prose does not get audited. A
// figure we know about, believe, and cannot yet source is the single most likely thing to
// drift: it either quietly creeps into the fill later, or it quietly disappears and the
// country looks fully mapped when it is not. So it gets a field of its own, it renders to
// the reader in its own block, and the gate requires each row to say WHY it is not counted.
//
// This is not the same as `pendingVerification`, which means "this country has no figure at
// all". A country can be coloured, honest, and still carry one of these.
export const hasNotInFill = (e) => !!e && Array.isArray(e.notInFill) && e.notInFill.length > 0;

// Plain-language names for the tax shapes the guides record. Held here so the map, the rows
// and the gate all say the same thing about the same unit.
export const SHAPE_WORDS = {
  percentOfRoom: 'a percentage of the room rate',
  perPersonPerNight: 'a set amount per person, per night',
  perRoomPerNight: 'a set amount per room, per night',
  flatPerNight: 'a flat amount per night',
  tieredPerPersonPerNight: 'a banded amount per person, per night, rising with the room rate',
};

// Anything we can honestly say something definite about, which is the number worth showing
// a reader. NOT the same as `colours`, because a no-bed-tax finding carries no percentage.
export const isChecked = (e) => colours(e) || isNoBedTax(e) || isCheckedShape(e) || (!!e && e.state === 'varies');

// Does this country carry a flat government charge that had to be modelled at the declared
// reference stay to reach the colour scale? This is what the stipple marks, and it is the
// one thing a reader has to know about a fill before trusting it, so it is a function rather
// than a field: an entry cannot forget to declare it, because it is read off the charges.
export const hasModelledFlat = (e) => !!e && Array.isArray(e.modelled) && e.modelled.length > 0;

// The share of a fill that came from modelling rather than from a real percentage. Zero for
// a country whose whole charge is a percentage, the entire figure for a country whose whole
// charge is flat.
export const modelledShare = (e) => (hasModelledFlat(e) ? (e.modelledPct || 0) : 0);

// DERIVING addedPct FOR THE FLAT AND MIXED COUNTRIES. Entries below hold `basePct` for any
// real percentage component and `modelled` for the flat charges; this adds the two and
// writes addedPct. Done here, once, at module load, so no entry can hold a hand-typed
// conversion and the whole map moves together when fxFallback.js is refreshed.
//
// An entry that holds `modelled` must NOT also hand-write addedPct, and the gate enforces
// that. A charge whose currency has no rate yields null, which leaves addedPct undefined and
// drops the country to the not-yet-checked fill rather than colouring it at its percentage
// components alone, because a fill that silently omits a charge is the failure this rail
// exists to prevent.
function deriveReferenceFigures(list) {
  return list.map((e) => {
    if (!hasModelledFlat(e)) return e;
    const parts = e.modelled.map((f) => referencePct(f.amount, f.currency, f.unit));
    if (parts.some((p) => p == null)) return { ...e, modelledPct: null, addedPct: null };
    const modelledPct = round1(parts.reduce((n, p) => n + p, 0));
    return { ...e, modelledPct, addedPct: round1((e.basePct || 0) + modelledPct) };
  });
}

export const hotelTaxMapChecked = 'Aug 2026';
export const hotelTaxMapCheckedISO = '2026-08-31';

// --- the countries ----------------------------------------------------------
// PHASE 2 CONTENT NOTE, read this before adding anything.
//
// Phase 1 shipped six entries and no invented figures, one per renderable state, so the
// shape could be reviewed with nothing placeholder anywhere in the tree. Phase 2 fills in
// the European wave from MAIN's verified table of 2026-08-28 and turns on the declared
// reference stay, which is what lets a country whose whole charge is a few euros a night
// reach the scale at all.
//
// THE FOUR RULES THAT DECIDED WHAT IS AND IS NOT HERE:
//   1. Every entry that colours carries a real source URL on every government figure. That
//      is enforced by scripts/check-hotel-tax-map.mjs, not by review, and it is the reason
//      several countries MAIN's brief lists are still not coloured: the figure is verified
//      and the authority's URL is not yet in the tree. A verified number with no link is a
//      number a reader cannot check, and the fill is exactly the claim they would want to.
//   2. A flat charge is held in its own currency with its unit. Never as a percentage.
//   3. One entry per country. Austria colours on Vienna and names its flat provinces in the
//      detail rather than existing twice.
//   4. Where the internal spread defeats any single figure, the country stays "varies".
//      Switzerland is re-confirmed as exactly that case below.
//
// STATES REPRESENTED, so the shape stays reviewable:
//   checked, coloured on a real percentage        -> Netherlands, Austria, United Kingdom
//   checked, coloured at the reference stay       -> Iceland, Czechia, Portugal, Poland,
//                                                   Croatia, Greece
//   checked, percentage PLUS a modelled flat      -> Maldives
//   varies too much within the country            -> United States, Canada, Switzerland
//   checked, shape known, no figure on this scale -> Japan, and every derived entry
//   not yet checked                               -> every other country on earth
export const hotelTaxMap = deriveReferenceFigures([
  {
    // MAIN-verified anchor. Both figures are already carried, dated and sourced in
    // src/data/netherlands.js, so this entry reuses that guide's own sources rather than
    // establishing a second home for the same numbers.
    iso: 'NL',
    country: 'Netherlands',
    slug: 'netherlands',
    // The Netherlands tax spoke is slugged `tourist-tax`, NOT `hotel-taxes-and-fees`. Only
    // nine countries use the latter slug and the Netherlands is not one of them, so the
    // obvious guess here shipped a 404 until the link audit caught it.
    // EVERY slug/spoke pair in this file is hand-written and therefore capable of the same
    // mistake. Verify a new one against the country's own spokes in src/data/index.js
    // before adding it, or resolve it from that data rather than typing it.
    spoke: 'tourist-tax',
    state: 'checked',
    // WHY 10.3 AND NOT 33.5, which is the figure the research brief carries.
    // Dutch law requires consumer prices to include VAT, and Dutch hotels quote
    // VAT-inclusive rates: revenue systems send rates inclusive of VAT and exclusive of
    // tourist tax, and Amsterdam hotels confirm the 21% is already inside the price shown
    // at booking. So the 21% is real, heavy, and NOT added at checkout. What is added is
    // the city tax, and it is charged on the room rate EXCLUDING VAT: 12.5% of the ex-VAT
    // room is 12.5 / 1.21 = 10.33% of the VAT-inclusive price the traveler was actually
    // quoted. That is the honest "added on top" figure and it is what colours the map.
    // 33.5% is the total government take and lives in governmentTotalPct, detail only.
    addedPct: 10.3,
    addedBasis: 'The city tax is 12.5% of the room rate excluding VAT, so against the VAT-inclusive price you were quoted it lands at about 10.3%. The 21% VAT is already inside that quoted price.',
    governmentTotalPct: 33.5,
    display: 'mixed',
    displayNote: 'The VAT is embedded in the rate you are quoted, the city tax is added at checkout. Two government charges, and you only ever see one of them coming.',
    cityBasis: 'Amsterdam',
    cityBasisNote: 'Amsterdam only. Most other Dutch municipalities charge a flat few euros per person per night instead of a percentage, so a national figure would describe nowhere.',
    government: [
      {
        label: 'National VAT on accommodation',
        figure: '21%',
        basis: 'percentOfRoom',
        inQuotedPrice: true,
        note: 'Rose from 9% on 1 January 2026. Embedded in consumer-quoted rates, so it does not appear as a line at checkout.',
        effective: '2026-01-01',
        source: { label: 'Dutch government: VAT on overnight accommodation goes up', url: 'https://business.gov.nl/amendments/vat-overnight-accommodation-goes-up/', type: 'gov' },
        checkedISO: '2026-07-04',
      },
      {
        label: 'Amsterdam tourist tax',
        figure: '12.5% of the room rate excluding VAT',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'The highest city rate in Europe, and it keeps applying however long you stay.',
        source: { label: 'City of Amsterdam: tourist tax', url: 'https://www.amsterdam.nl/en/municipal-taxes/tourist-tax/', type: 'gov' },
        checkedISO: '2026-07-04',
      },
    ],
    property: [],
    checkedISO: '2026-08-11',
  },

  {
    // Both figures are read off MIRA, the authority that sets them, and dated.
    // WHY THIS COMMENT USED TO SAY OTHERWISE. This entry shipped coloured with both
    // sources null and a pendingSource note on each, on the reasoning that the figures were
    // verified and the URLs were a later chore. That made half the shaded map break the rule
    // the page states out loud, because the fill is exactly the claim a reader cannot check
    // for themselves. The rule is now enforced by scripts/check-hotel-tax-map.mjs: a country
    // that colours must carry a real source on every government figure, so this cannot
    // happen again by intent or by accident.
    iso: 'MV',
    country: 'Maldives',
    slug: null,
    spoke: null,
    state: 'checked',
    // THIS FIGURE CHANGED IN PHASE 2, from 17% to about 24%, and the change is the new Rail
    // 3 applied to the country the old rail was written around. Phase 1 coloured the
    // Maldives on its 17% TGST alone and stippled the green tax, because 12 dollars a person
    // a night has no percentage without a room rate. The declared reference stay now supplies
    // that room rate, and it has to supply it here too: modelling Iceland's flat fee while
    // leaving the Maldives' out would put two countries on two different axes and make the
    // scale meaningless. So the green tax converts at the basket like every other flat
    // charge, the stipple stays to say the fill is modelled, and the Maldives moves into the
    // top band, which is where a 17% tax plus 12 dollars a night actually belongs.
    basePct: 17,
    modelled: [
      { label: 'Green tax', amount: 12, currency: 'USD', unit: 'perPersonPerNight' },
    ],
    addedBasis: 'The 17% TGST is a real percentage. The green tax is 12 dollars per person per night, which is about 7% of the reference room, so the figure here is the two together at that declared room rate. At a cheap guesthouse the green tax is a far bigger share of the bill, and at an overwater villa it is a rounding error.',
    governmentTotalPct: null,
    display: 'added',
    displayNote: 'Resort rates here are routinely quoted before tax, so the whole stack arrives at checkout rather than in the price you compared.',
    government: [
      {
        label: 'Tourism Goods and Services Tax (TGST)',
        figure: '17%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'Charged on tourism-sector goods and services including accommodation. Rose from 16% on 1 July 2025 under the seventh amendment to the Goods and Services Tax Act.',
        effective: '2025-07-01',
        source: { label: 'Maldives Inland Revenue Authority: GST rates by sector', url: 'https://www.mira.gov.mv/Pages/View/gst', type: 'revenue' },
        checkedISO: '2026-08-19',
      },
      {
        label: 'Green tax',
        figure: '12 US dollars per person per night',
        basis: 'perPersonPerNight',
        amount: 12,
        currency: 'USD',
        inQuotedPrice: false,
        note: 'A flat environmental charge on each guest for each day of stay. Doubled from 6 dollars on 1 January 2025. Resorts, resort hotels and tourist vessels charge 12; a hotel or guesthouse on an inhabited island with 50 or fewer registered rooms charges 6. Children under two are exempt.',
        effective: '2025-01-01',
        source: { label: 'Maldives Inland Revenue Authority: green tax rates and exemptions', url: 'https://www.mira.gov.mv/Pages/View/whatisgreentax', type: 'revenue' },
        checkedISO: '2026-08-19',
      },
    ],
    // `flat` used to live here, restating the green tax for the stipple. It is gone: the
    // same charge is now in `modelled` above, which both drives the conversion and drives
    // the stipple, so there is one copy of the figure rather than two that can drift apart.
    property: [
      { label: 'Service charge', range: '10%', note: 'Set by the property, not the government. Widely applied but not a tax, and not refundable.' },
    ],
    checkedISO: '2026-08-19',
  },

  {
    iso: 'US',
    country: 'United States',
    slug: null,
    spoke: null,
    state: 'varies',
    variesNote: 'There is no national lodging tax. State, county and city occupancy taxes stack in combinations set locally, so the total swings widely between one city and the next and a single national figure would be wrong everywhere.',
    cities: [],
    pendingVerification: 'Needs representative city figures, each from that city or state revenue authority. Nothing is shown until they are sourced, because a half-filled city list reads as a complete one.',
    property: [
      { label: 'Resort fee', range: null, note: 'Set by the property, not the government, and often excluded from the headline rate. No national figure exists.' },
    ],
    checkedISO: '2026-08-17',
  },

  {
    iso: 'CA',
    country: 'Canada',
    slug: null,
    spoke: null,
    state: 'varies',
    variesNote: 'Federal GST or a combined HST applies, then provinces and cities add their own accommodation levies at rates they set, so the total depends on the province and often on the city inside it.',
    cities: [],
    pendingVerification: 'Needs the federal rate plus representative provincial and city levies, each sourced.',
    property: [],
    checkedISO: '2026-08-17',
  },

  {
    iso: 'CH',
    country: 'Switzerland',
    slug: null,
    spoke: null,
    state: 'varies',
    // RE-CONFIRMED IN PHASE 2 AND DELIBERATELY NOT GIVEN A REFERENCE-STAY FIGURE. The
    // declared basket can convert a flat fee, so the mechanical objection to colouring
    // Switzerland is gone. The real objection is not mechanical: the commune spread runs
    // from nothing to about 7 francs, and Zurich's charge is a voluntary hotel scheme rather
    // than a tax at all, so there is no city a visitor overwhelmingly means and no honest
    // representative to pick. That is what state "varies" is for, and converting an invented
    // average at a declared room rate would produce a precise-looking fill on two
    // assumptions instead of one.
    variesNote: 'A low national VAT on accommodation, then a per-person visitor tax set by each commune, which commonly includes a local transport card. The levy and what it buys both change from one valley to the next, and in Zurich the charge is a voluntary hotel scheme rather than a tax.',
    cities: [],
    pendingVerification: 'Needs the accommodation VAT rate plus representative commune visitor taxes, each sourced, and a note on where the fee includes transport. A single national figure is not the goal here: the spread is the finding.',
    property: [],
    checkedISO: '2026-08-17',
  },

  // THAILAND IS DELIBERATELY NOT HAND-WRITTEN HERE. Its guide already carries a researched,
  // dated finding (tax.none === true) plus the current position on the proposed arrival fee,
  // so the component derives it and the map shows what the guide shows. Transcribing it into
  // this file is how it went wrong the first time: the hand-written entry said the proposal
  // was 300 baht and marked the country unchecked, while the guide already said the proposal
  // had been raised to 450 baht in August 2026 and that there is no hotel tax at all. A
  // second copy of a fact is a fact that goes stale. Add an entry here only to say something
  // the guide does not.

  {
    // Carried to hold the inclusive-display note and the Kyoto change, with no figure yet.
    iso: 'JP',
    country: 'Japan',
    slug: 'japan',
    spoke: null,
    // Hand-written ONLY to add what the guide does not carry: the inclusive-display note and
    // the Kyoto change. The state and shape still match the guide (tiered per person per
    // night), because an entry here that contradicts the guide downward is how Japan and
    // Thailand both ended up marked unchecked while their guides said otherwise.
    state: 'checkedShape',
    shape: 'tieredPerPersonPerNight',
    display: 'inclusive',
    displayNote: 'Consumption tax is inside the price you are quoted, so very little appears on top at checkout. The tax is real and it is already in the rate you compared, which is not the same thing as a cheap tax.',
    pendingVerification: 'Needs the consumption tax treatment plus the city accommodation taxes that do land on top, each sourced, before this can colour.',
    watch: [
      {
        label: 'Kyoto accommodation tax tiers rise',
        effective: '2026-03-01',
        note: 'A scheduled increase to the banded per-person nightly rate. Not folded into any figure before its date.',
        source: null,
        pendingSource: 'Needs the City of Kyoto schedule of the new tiers.',
      },
      // ADDED 2026-08-31 from MAIN's coverage table. Both rows are additions to this entry,
      // not changes to it: its state, its display and its Kyoto row are all as they were.
      {
        label: 'A wave of new local lodging taxes takes effect',
        effective: '2026-04-01',
        note: 'Hokkaido introduced a prefecture-wide charge with Sapporo adding a city charge on top, and Hiroshima Prefecture, Gifu City, Toba City and Yugawara each began their own. All are flat per-person nightly amounts. Named here because the count of taxing municipalities is what changes fastest in Japan, and none of it is folded into any figure.',
        source: null,
        pendingSource: 'Needs each prefecture or city ordinance, ideally the Hokkaido and Hiroshima Prefecture schedules first, since those two cover the widest area.',
      },
      {
        label: 'Okinawa becomes the first prefecture-level accommodation tax',
        effective: '2027-02-01',
        note: 'A percentage rather than a flat amount, which would make it the first Japanese accommodation tax expressible directly on this map axis, and it carries a per-person nightly ceiling. Not counted before its date.',
        source: null,
        pendingSource: 'Needs the Okinawa Prefecture ordinance confirming the rate, the ceiling and the commencement date.',
      },
    ],
    property: [],
    checkedISO: '2026-08-17',
  },
  // ==========================================================================
  // THE EUROPEAN WAVE, added in Phase 2 from MAIN's verified table of 2026-08-28.
  //
  // Read Rail 7 before editing any of these. Every one of them colours on a small tourist
  // tax and not on a large VAT, because the VAT is already inside the price the traveler
  // compared. That is why a continent with some of the heaviest hotel taxation on earth
  // sits almost entirely in the bottom band of this map.
  // ==========================================================================

  {
    iso: 'AT',
    country: 'Austria',
    slug: 'austria',
    spoke: 'tourist-tax',
    state: 'checked',
    // A REAL PERCENTAGE, SO NO MODELLING AND NO STIPPLE. Vienna is one of the few European
    // cities that charges a share of the room rather than a few euros a head.
    //
    // AN OPEN QUESTION, FLAGGED RATHER THAN QUIETLY DECIDED. The 5% is charged on the room
    // with VAT taken out. The Netherlands entry rebases exactly that kind of figure onto the
    // VAT-inclusive price the traveler was quoted, which is how 12.5% became 10.3%. Applying
    // the same rebasing here would give about 4.5% and move Austria from the second band to
    // the first, so it is not a cosmetic difference. It is NOT applied, for two reasons:
    // MAIN's table states 5.0 and states the same treatment for Edinburgh in the same
    // breath, and rebasing needs a sourced accommodation VAT rate per country, which this
    // tree does not yet carry. The base is stated plainly to the reader below instead. If
    // MAIN wants the rebasing, it belongs in one helper applied to every percentage levy at
    // once, not country by country.
    addedPct: 5,
    addedBasis: 'Vienna charges 5% of the accommodation price with VAT and any breakfast taken out of the base first, so a rate that bundles breakfast pays the tax on a smaller number. It rose from 3.2% on 1 July 2026 and the 11% lump-sum deduction that used to apply was dropped at the same time.',
    cityBasis: 'Vienna',
    cityBasisNote: 'Vienna only, and Vienna is the outlier: it is the one Austrian city that charges a percentage. Everywhere else it is a flat per-person nightly fee, roughly 3.05 euros in Salzburg, 4.50 euros in Burgenland and Carinthia, and about 2.60 euros across Tyrol, which land between about 2 and 3% of the reference room.',
    display: 'added',
    displayNote: 'Austrian hotel prices include VAT by law, so the VAT is not a surprise. The local tax is the part that turns up at the desk, and it is often not in the rate a platform showed you.',
    government: [
      {
        label: 'Vienna local tax (Ortstaxe)',
        figure: '5% of the room charge, excluding VAT and breakfast',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'Raised from 3.2% on 1 July 2026 under an amendment to the Vienna Tourism Promotion Act passed on 12 December 2025. Anyone staying more than three unbroken months is exempt.',
        effective: '2026-07-01',
        source: { label: 'Vienna Tourist Board, on the City of Vienna local tax: the rise to 5% and the basis it is charged on', url: 'https://b2b.wien.info/en/services/products-services/local-tax-1086968', type: 'gov' },
        checkedISO: '2026-08-29',
      },
    ],
    watch: [
      {
        label: 'Vienna local tax rises to 8%',
        effective: '2027-07-01',
        note: 'The second step of the same amendment. Not folded into the figure above before its date.',
        source: { label: 'Vienna Tourist Board, on the City of Vienna local tax: the second step to 8%', url: 'https://b2b.wien.info/en/services/products-services/local-tax-1086968', type: 'gov' },
      },
    ],
    property: [],
    checkedISO: '2026-08-29',
  },

  {
    iso: 'GB',
    country: 'United Kingdom',
    slug: 'united-kingdom',
    spoke: 'tourist-tax',
    state: 'checked',
    // WHY THE HEADLINE AND THE LANDED SHARE AGREE HERE, WHICH THEY DO NOWHERE ELSE. The levy
    // is 5% of the accommodation cost before VAT, and then VAT applies to the levy. Five
    // percent of the ex-VAT room, grossed back up by the same 20%, is 5% of the VAT-inclusive
    // rate the traveler was quoted. So 5.0 is both the stated rate and the real uplift
    // against a quoted price, and MAIN's table figure needs no adjustment. The "about 6%"
    // in the brief is the same charge measured against the ex-VAT room instead, which is the
    // number a hotelier sees rather than the one a guest pays.
    addedPct: 5,
    addedBasis: 'Edinburgh charges 5% of the accommodation cost before VAT, and VAT is then charged on the levy, which brings it back to almost exactly 5% of the VAT-inclusive rate you were quoted. Measured against the room price before VAT, as an accommodation provider would, the same charge reads as about 6%.',
    cityBasis: 'Edinburgh',
    cityBasisNote: 'Edinburgh only, and it is the whole of the UK figure: England charges nothing, London charges nothing, and Glasgow and parts of Wales are scheduled rather than live. Manchester and Liverpool have small per-room charges of roughly 1 and 2 pounds a night, but those are business-district levies on the hotel rather than a tax, so they are not in this figure.',
    display: 'added',
    displayNote: 'UK price rules require the total shown at booking to include the levy, so a UK-facing site may already have it in the price while a rate quoted before taxes and fees will not.',
    government: [
      {
        label: 'Edinburgh visitor levy',
        figure: '5% of the accommodation cost before VAT',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'The first city-wide visitor levy in the UK, live since 24 July 2026 under the Visitor Levy (Scotland) Act 2024. Charged on the room only, not on meals, drinks, parking or transport, and capped at the first five consecutive nights of a stay. A stay booked and part-paid before 1 October 2025 is exempt.',
        effective: '2026-07-24',
        source: { label: 'City of Edinburgh Council: the visitor levy, its 5% rate and the five-night cap', url: 'https://www.edinburgh.gov.uk/business/visitor-levy-edinburgh', type: 'gov' },
        checkedISO: '2026-08-29',
      },
    ],
    property: [],
    checkedISO: '2026-08-29',
  },

  {
    iso: 'HU',
    country: 'Hungary',
    slug: 'hungary',
    spoke: 'tourist-tax',
    state: 'checked',
    addedPct: 4,
    addedBasis: 'Budapest charges 4% of the accommodation price with VAT taken out and compulsory breakfast and other services excluded from the base, for every night begun, with no cap on the number of nights.',
    cityBasis: 'Budapest',
    cityBasisNote: 'Budapest only. Elsewhere in Hungary the model is a flat few hundred forint per person per night, set town by town, which is well under 1% of the reference room, and many towns charge nothing at all.',
    display: 'added',
    displayNote: 'Hungarian VAT is 27%, the highest rate in the EU, and it is already inside the rate you were quoted. The 4% is the part that is not.',
    government: [
      {
        label: 'Budapest tourist tax (idegenforgalmi ado)',
        figure: '4% of the room price excluding VAT',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'Set by Budapest municipal decree 31/1994 under the national Local Taxes Act. Charged per night begun, on the accommodation charge with VAT and compulsory breakfast excluded. Under-18s are exempt.',
        source: { label: 'Budapest Assembly decree 31/1994 on the tourist tax, in the national law register: the 4% rate and its base', url: 'https://net.jogtar.hu/rendelet?council=fovaros&docid=99400031.FOV', type: 'gov' },
        checkedISO: '2026-08-29',
      },
    ],
    property: [],
    checkedISO: '2026-08-29',
  },

  {
    iso: 'IS',
    country: 'Iceland',
    slug: 'iceland',
    spoke: 'tourist-tax',
    state: 'checked',
    // The first entry to colour purely from the declared reference stay. Nothing here is a
    // percentage in real life: the whole charge is 800 kronur a room a night.
    modelled: [
      { label: 'Lodging tax', amount: 800, currency: 'ISK', unit: 'perRoomPerNight' },
    ],
    addedBasis: 'The whole charge is a flat 800 kronur per room per night, so this percentage is that fee measured against the reference room and nothing more. It is per room rather than per person, so it does not double for two people sharing, and on a cheap guesthouse night it is a much larger share of the bill than this figure suggests.',
    display: 'added',
    displayNote: 'The lodging tax is frequently left out of the price shown online and appears at check-in or checkout. VAT is separate and already in the rate.',
    government: [
      {
        label: 'Lodging tax (gistinattaskattur)',
        figure: '800 ISK per room, per night',
        basis: 'perRoomPerNight',
        inQuotedPrice: false,
        note: 'Charged on hotels, guesthouses and similar licensed stays, per unit rather than per guest. Rose to 800 kronur at the start of 2025. Campsites and motorhome pitches are 400 kronur a night, and cruise passengers on domestic voyages 400 kronur a night.',
        effective: '2025-01-01',
        source: { label: 'Skatturinn (Iceland Revenue and Customs): the lodging tax and its rates', url: 'https://www.skatturinn.is/english/companies/tax-issues/lodging-tax/', type: 'revenue' },
        checkedISO: '2026-08-29',
      },
    ],
    property: [],
    checkedISO: '2026-08-29',
  },

  {
    iso: 'CZ',
    country: 'Czechia',
    slug: 'czechia',
    spoke: 'tourist-tax',
    state: 'checked',
    modelled: [
      { label: 'Local accommodation fee', amount: 50, currency: 'CZK', unit: 'perPersonPerNight' },
    ],
    addedBasis: 'Prague charges the national maximum of 50 koruna per person per night, which is what this percentage models at the reference room. Because it is per person, two people sharing pay it twice while the room rate stays the same, so a couple lands at roughly double this share.',
    cityBasis: 'Prague',
    cityBasisNote: 'Prague, which sits at the legal ceiling. Other Czech towns set their own fee up to the same 50 koruna cap, many popular ones at or near it, and plenty of small municipalities charge nothing.',
    display: 'added',
    displayNote: 'One of the smaller charges in Europe in absolute terms, and it is genuinely added rather than embedded, which is why it appears here at all.',
    government: [
      {
        label: 'Local accommodation fee',
        figure: '50 CZK per person, per night',
        basis: 'perPersonPerNight',
        inQuotedPrice: false,
        note: 'Capped by national law at 50 koruna per person per night and set by each municipality up to that ceiling. Under-18s are exempt, and it applies only to the first 60 consecutive nights.',
        source: { label: 'City of Prague: the local tourist fee of 50 koruna per person per night, under Act 565/1990', url: 'https://sdileneubytovani.praha.eu/jnp/en/for_accommodation_providers/local_tourist_fee.html', type: 'gov' },
        checkedISO: '2026-08-29',
      },
    ],
    property: [],
    checkedISO: '2026-08-29',
  },

  {
    iso: 'PT',
    country: 'Portugal',
    slug: 'portugal',
    spoke: 'tourist-tax',
    state: 'checked',
    modelled: [
      { label: 'Municipal tourist tax', amount: 4, currency: 'EUR', unit: 'perPersonPerNight' },
    ],
    addedBasis: 'Lisbon charges 4 euros per person per night, which is what this models. Porto is 3 euros, about 2% of the reference room, and the Algarve 2 euros. It is per person, so a couple pays it twice.',
    cityBasis: 'Lisbon',
    cityBasisNote: 'Lisbon, because it is where most visitors stay. Most of Portugal charges nothing at all: the tax exists only in the municipalities that have adopted it, and it is capped at 7 nights with under-13s exempt.',
    display: 'added',
    displayNote: 'Frequently collected in cash at the property and rarely inside the rate you booked, so it arrives as a separate ask at the desk.',
    government: [
      {
        label: 'Municipal tourist tax (taxa municipal turistica)',
        figure: '4 EUR per person, per night in Lisbon',
        basis: 'perPersonPerNight',
        inQuotedPrice: false,
        note: 'Raised to 4 euros in Lisbon, capped at 7 consecutive nights, with under-13s exempt. Porto charges 3 euros and several Algarve municipalities 2 euros, each set locally.',
        source: { label: 'Lisbon City Council: the municipal tourist tax, its rise to 4 euros a person a night, the minimum age and the seven-night cap', url: 'https://informacoeseservicos.lisboa.pt/servicos/detalhe/taxa-municipal-turistica', type: 'gov' },
        checkedISO: '2026-08-29',
      },
    ],
    property: [],
    checkedISO: '2026-08-29',
  },

  {
    iso: 'PL',
    country: 'Poland',
    slug: 'poland',
    spoke: 'tourist-tax',
    state: 'checked',
    // A "MOSTLY NOTHING" COUNTRY, AND THE HONESTY CATCH THAT COMES WITH IT.
    // MAIN's brief offered two ways to handle this and asked which one shipped: colour it at
    // the small figure with the detail leading on the exemption, or invent a special low-band
    // fill. This is option (a), the first one, and the reason is that a special fill would be
    // a sixth state on a scale that already has five, readable only from a legend, to
    // describe a country whose figure is honestly 0.5%. A nearly-white fill in the bottom
    // band says "almost nothing is added here" and that is exactly the truth. What it must
    // not do is imply Warsaw charges this, so cityBasisNote leads with the exemption rather
    // than mentioning it at the end.
    modelled: [
      { label: 'Local fee (oplata miejscowa)', amount: 3.46, currency: 'PLN', unit: 'perPersonPerNight' },
    ],
    addedBasis: 'Most of Poland, including Warsaw and Krakow, charges nothing at all. Where the fee does apply it is a few zloty per person per night, and the figure here models the 2026 legal maximum for the ordinary local fee, which is what a town like Gdansk charges.',
    // `representative` rather than `cityBasis`, because the figure is the national ceiling
    // that a levying town may charge, not one named city's own rate. Rendered as
    // "Representative: ..." on the row, which is the honest label for it.
    representative: 'the towns that levy it, at the 2026 national ceiling',
    representativeNote: 'Read this before reading the colour. Poland has no nationwide tourist tax, Warsaw charges nothing, and Krakow legally cannot. The fee exists only in designated resort towns and spa towns, so this fill describes those places and not the two cities most visitors actually book. In a recognised spa town the higher spa fee applies instead, capped at 6.67 zloty a night in 2026, about 1.1% of the reference room, and the two are never charged together.',
    display: 'added',
    displayNote: 'Small enough in absolute terms that it rarely changes a decision, and it is collected by the property rather than shown at booking.',
    government: [
      {
        label: 'Local fee (oplata miejscowa)',
        figure: 'up to 3.46 PLN per person, per night in 2026',
        basis: 'perPersonPerNight',
        inQuotedPrice: false,
        note: 'A ceiling set each year by the finance minister, with each municipality free to charge less or nothing. The 2026 limits are 3.46 zloty for the ordinary local fee, 4.89 zloty in spa-protection areas and 6.67 zloty for the spa fee itself. Commonly charged only on stays longer than one night.',
        effective: '2026-01-01',
        source: { label: 'Monitor Polski 2025 item 726: the finance ministry notice setting the 2026 ceilings for local and spa fees', url: 'https://monitorpolski.gov.pl/MP/2025/726', type: 'gov' },
        checkedISO: '2026-08-29',
      },
    ],
    property: [],
    checkedISO: '2026-08-29',
  },

  {
    iso: 'HR',
    country: 'Croatia',
    slug: 'croatia',
    spoke: 'tourist-tax',
    state: 'checked',
    modelled: [
      { label: 'Sojourn tax', amount: 2.65, currency: 'EUR', unit: 'perPersonPerNight' },
    ],
    addedBasis: 'The sojourn tax is set by town and season, and this models the top of the range: the coast in peak summer, where Dubrovnik charges 2.65 euros per adult per night. Off season and inland it falls to roughly 1.10 to 1.85 euros, so the honest figure for Croatia is a range and this is its upper end.',
    representative: 'the coast in peak season, at the Dubrovnik rate',
    representativeNote: 'Not a national rate and not a single city. Croatia sets the sojourn tax by municipality category and by season, so the peak coastal figure is used as the representative because it is what most visitors meet, with the range given above. Under-12s are exempt and 12 to 18 year olds pay half.',
    display: 'added',
    displayNote: 'Usually not inside a booking platform price and often collected in cash on arrival, which is standard practice here rather than a scam.',
    government: [
      {
        label: 'Sojourn tax (boravisna pristojba)',
        figure: '2.65 EUR per adult, per night on the peak-season coast',
        basis: 'perPersonPerNight',
        inQuotedPrice: false,
        note: 'Charged per person per night at every kind of registered accommodation, at rates set by municipality category and season. The peak season runs April to September on the coast; outside it the rate drops to roughly 1.85 euros, and lower-category inland municipalities charge less again.',
        source: { label: 'Croatian National Tourist Board: the sojourn tax, who pays it and how it varies by place and season', url: 'https://croatia.hr/en-gb', type: 'tourism' },
        checkedISO: '2026-08-29',
      },
    ],
    property: [],
    checkedISO: '2026-08-29',
  },

  {
    iso: 'GR',
    country: 'Greece',
    slug: 'greece',
    spoke: 'tourist-tax',
    state: 'checked',
    // THE WIDEST INTERNAL RANGE OF ANY COLOURED COUNTRY HERE, AND WHY IT STILL COLOURS.
    // The Climate Crisis Resilience Fee is flat per room but scaled by star rating and by
    // season, running from 2 euros to 15. At the reference room that is 1.3% to 10%, which
    // crosses three bands. Switzerland is left as "varies" for a spread like that, so the
    // difference matters: Greece's spread is a PUBLISHED LADDER a reader can place
    // themselves on from their own booking, while Switzerland's is a patchwork of communes
    // with no rule connecting them. A ladder can carry a representative rung and name the
    // rest. A patchwork cannot.
    modelled: [
      { label: 'Climate Crisis Resilience Fee', amount: 6, currency: 'EUR', unit: 'perRoomPerNight' },
    ],
    addedBasis: 'The fee is flat per room per night and scales with the star rating and the season, from 2 euros at a one or two star hotel in low season to 15 euros at a five star hotel in peak. This models a mid ladder rung, 6 euros at a four star hotel in season, which is about 4% of the reference room. The full ladder at that room rate runs from about 1.3% to about 10%.',
    representative: 'a four-star hotel in peak season',
    representativeNote: 'One rung of a published ladder, not a national rate. Peak rates run April to October, which covers most US trips, and off-season rates are roughly a quarter of them. Registered short-term rentals are charged per property per night on the same basis, 8 euros in peak season. There is no cap on nights and no exemption for children.',
    display: 'added',
    displayNote: 'The 13% Greek VAT on accommodation is inside the rate you were quoted, so it is not in this figure. The resilience fee is the part that is added, and it is usually collected at the property.',
    government: [
      {
        label: 'Climate Crisis Resilience Fee',
        figure: '2 to 15 EUR per room, per night by star rating and season',
        basis: 'perRoomPerNight',
        inQuotedPrice: false,
        note: 'Introduced by Law 5073/2023 in place of the earlier overnight stay tax. Charged per room or rental unit rather than per person, on the official category of the property: 2 euros at one and two star hotels, 5 at three star, 10 at four star and 15 at five star in peak season, with registered rentals at 8. Off-season rates run about a quarter of these.',
        source: { label: 'AADE (Greek tax authority): the climate crisis resilience fee by category and season', url: 'https://www.aade.gr/en/climate-crisis-resilience-fee-issuance-statement', type: 'revenue' },
        checkedISO: '2026-08-29',
      },
    ],
    property: [],
    checkedISO: '2026-08-29',
  },

  // ==========================================================================
  // THE PRE-WAVE COUNTRIES, added in Phase 2 Part 2 under MAIN's rulings of 2026-08-29.
  //
  // These are tax-EXCLUSIVE markets: a US-facing booking site usually quotes the rate before
  // tax, so the stack genuinely arrives at checkout. That makes them the opposite case to the
  // European wave, and it is why the two halves of this map look nothing like each other.
  //
  // THE RULE THAT SHAPED EVERY ONE OF THEM. A component colours only if it carries a real
  // government URL. Anything verified but not yet sourceable goes into `notInFill`, where the
  // reader still sees it and the gate still audits it, but it does not touch a fill. Four of
  // the seven below therefore colour LOWER than the figure their own guide states, and each
  // one says so on its row. That is the trade MAIN chose and it is the right way round: a
  // fill is the one claim a screenshot carries away without its caveats.
  // ==========================================================================

  {
    iso: 'MX',
    country: 'Mexico',
    slug: 'mexico',
    spoke: 'hotel-taxes-and-fees',
    state: 'checked',
    addedPct: 21,
    addedBasis: 'Two percentages stack on a Mexican room and both are sourced: the 16% federal IVA, which applies to lodging everywhere, and Quintana Roo\'s 5% state lodging tax. Away from Quintana Roo the state rate differs, so the national floor is the 16% IVA alone and most tourist states land somewhere between.',
    representative: 'Quintana Roo, meaning Cancun, the Riviera Maya, Tulum and Cozumel',
    representativeNote: 'Not a national rate. The 16% IVA is federal and certain; the state lodging tax is set state by state, typically 2 to 5%, and several states changed it for 2026. Quintana Roo is used because it is where most US visitors stay, and it sits at the top of that band at 5%, or 6% when booked through a digital platform.',
    display: 'added',
    displayNote: 'A US-facing booking site normally quotes a Mexican rate before tax, so the whole 21% arrives at checkout. If your rate said impuestos incluidos, it is already inside the price and nothing more is added.',
    government: [
      {
        label: 'Federal VAT on lodging (IVA)',
        figure: '16%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'The general rate under Article 1 of the Value Added Tax Law, which applies to services including accommodation. The law is explicit that the tax does not form part of the price it is calculated on.',
        source: { label: 'SAT (Mexican tax authority): Article 1 of the Value Added Tax Law and the general 16% rate', url: 'https://wwwmat.sat.gob.mx/articulo/19848/articulo-1', type: 'revenue' },
        checkedISO: '2026-08-29',
      },
      {
        label: 'Quintana Roo state lodging tax (ISH)',
        figure: '5% of the room, or 6% booked through a digital platform',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'Set by the state rather than the federation, under the reform of Article 8 of the state lodging tax law. Some rate calculators still print 4% or 3% for Quintana Roo and we believe those are stale.',
        source: { label: 'SATQ (Quintana Roo tax authority): the state lodging tax law', url: 'https://satq.qroo.gob.mx/contenidos/dmarcolegal/e821150a-eda1-11f0-8e6b-005056a29996', type: 'revenue' },
        checkedISO: '2026-08-29',
      },
      {
        // A PER-TRIP FEE, AND THE ONE THING THE BASKET MUST NOT TOUCH. VISITAX is charged
        // once for the whole trip, not per night, so converting it at a nightly reference
        // room would need a nights count this map does not have. CostChart.astro already
        // refuses the same conversion for the same reason. `basis` is deliberately
        // 'oneTimePerTrip' rather than anything containing "perPerson", because the gate
        // reads that string to decide which charges must be modelled at the basket, and a
        // per-trip fee must not be.
        label: 'VISITAX, Quintana Roo visitor fee',
        figure: 'about 283 pesos per person, once per trip',
        basis: 'oneTimePerTrip',
        inQuotedPrice: false,
        note: 'Roughly 16 dollars a person for the whole stay, paid online before travel and now scanned at airport departure. A 2026 proposal to fold it into hotel bills was rejected. It is not in the percentage above because it is a per-trip charge, not a nightly one.',
        source: { label: 'VISITAX: the official Quintana Roo state visitor tax portal', url: 'https://www.visitax.gob.mx/sitio/', type: 'gov' },
        checkedISO: '2026-08-29',
      },
    ],
    notInFill: [
      { label: 'Quintana Roo environmental charge', figure: 'about 76 pesos, roughly 4 dollars, per room per night', why: 'Reported consistently but one secondary source quotes a very different figure for a similarly named charge, and we could not reconcile them against a state source, so it stays out of the fill.' },
    ],
    property: [
      { label: 'Resort fee and service charge', range: null, note: 'Set by the property rather than the government, and common at all-inclusive resorts where the IVA and state tax are usually already inside the package price.' },
    ],
    checkedISO: '2026-08-29',
  },

  {
    iso: 'SA',
    country: 'Saudi Arabia',
    slug: 'saudi-arabia',
    spoke: 'hotel-taxes-and-fees',
    state: 'checked',
    // COLOURS ON THE VAT ALONE, WHICH IS LOWER THAN THIS COUNTRY'S REAL STACK. The 5%
    // municipality levy on occupied rooms at four star and above is well attested and takes
    // the government total to about 20%, but we could not pin a single clean government URL
    // for it, and MAIN's rule is that a fill needs a real URL under it. Both figures land in
    // the same band, 15 to 22%, so the map looks identical either way; the row is what
    // differs, and it says so.
    addedPct: 15,
    addedBasis: 'This is the 15% VAT alone, the highest rate in the Gulf, which applies to hotel stays as it does to almost everything else. A municipality levy on the occupied room sits beside it and takes the government total to about 20% at four star and above, or about 17.5% at three star and below, but it is not in this figure because we do not yet have a government source for it.',
    display: 'added',
    displayNote: 'Quoted rates here frequently exclude tax, so the stack arrives at checkout rather than in the price you compared.',
    government: [
      {
        label: 'Value added tax',
        figure: '15%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'The standard rate, applied to accommodation. Unlike almost all of the region, VAT on goods a visitor carries home is reclaimable under the tourist refund scheme.',
        source: { label: 'ZATCA (Saudi tax authority): the 15% VAT and the tourist refund scheme', url: 'https://zatca.gov.sa/en', type: 'revenue' },
        checkedISO: '2026-08-29',
      },
    ],
    notInFill: [
      { label: 'Municipality levy on the occupied room', figure: '5% at four star and above, 2.5% at three star and below', why: 'Consistently reported and in the country guide, but we could not source it to a single government page, and a fill needs a real URL under every component. Add the source and this country moves from 15% to about 20%.' },
    ],
    property: [
      { label: 'Service charge', range: null, note: 'Added by many properties, set by the hotel rather than the government, and not a standard rate, so it never reaches the colour.' },
    ],
    checkedISO: '2026-08-29',
  },

  {
    iso: 'OM',
    country: 'Oman',
    slug: 'oman',
    spoke: 'hotel-taxes-and-fees',
    state: 'checked',
    // Same shape as Saudi Arabia and with a real consequence: here the unsourced component
    // crosses a band. Sourced, Oman is 9% and sits in the 5 to 10 band; with the municipality
    // charge it would be about 14% and sit a band higher. It colours on what can be checked.
    addedPct: 9,
    addedBasis: 'The 5% VAT and the 4% tourism tax, both sourced to the government. A municipality charge on hotel occupancy of about 5% sits beside them and would take this to roughly 14%, but it is not in the figure because we do not yet have a government page for it.',
    display: 'added',
    displayNote: 'Quoted room rates here often exclude the whole stack, so ask whether the rate is all in.',
    government: [
      {
        label: 'Value added tax',
        figure: '5%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'One of the lowest standard VAT rates in the world, in force since 16 April 2021 under Royal Decree 121/2020. Hotel stays are standard-rated; residential rental is exempt.',
        effective: '2021-04-16',
        source: { label: 'Oman Tax Authority: value added tax, the law and the standard rate', url: 'https://tms.taxoman.gov.om/portal/vat-tax', type: 'revenue' },
        checkedISO: '2026-08-29',
      },
      {
        label: 'Tourism tax',
        figure: '4%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'Levied under the Tourism Law on hotel establishments and on restaurants in designated tourist areas.',
        source: { label: 'Government of Oman: paying the 4% tourism tax for restaurants and hotel establishments', url: 'https://gov.om/en/w/pay-the-4-tourism-tax-for-restaurants-and-hotel-establishments', type: 'gov' },
        checkedISO: '2026-08-29',
      },
    ],
    notInFill: [
      { label: 'Municipality charge on hotel occupancy', figure: 'about 5%', why: 'Reported by regional media and in the country guide, but no government page states it, so it stays out of the fill. Add the source and Oman moves from 9% to about 14%, which crosses into the next band.' },
    ],
    property: [
      { label: 'Service charge', range: null, note: 'Added by many properties on top of the government stack. Set by the hotel, not a standard rate, and not something a guest can decline.' },
    ],
    checkedISO: '2026-08-29',
  },

  {
    iso: 'JM',
    country: 'Jamaica',
    slug: 'jamaica',
    spoke: 'hotel-taxes-and-fees',
    state: 'checked',
    addedPct: 10,
    addedBasis: 'The lower tourism rate of General Consumption Tax, 10% today, which is what a hotel room carries rather than the 15% standard rate charged on restaurant and shop bills. A small flat room tax sits beside it and is named below.',
    display: 'added',
    displayNote: 'There is no per-person nightly bed tax here. Arrival and departure taxes are almost always already inside your airfare.',
    government: [
      {
        label: 'Tourism rate of General Consumption Tax',
        figure: '10%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'The concessionary tourism rate on accommodation, against a 15% standard rate elsewhere. Legislated to rise to 15% on 1 April 2027, which is scheduled rather than live and is excluded from the figure above.',
        source: { label: 'Jamaica Information Service: the revenue measures legislating the tourism GCT rise from 10% to 15% in April 2027', url: 'https://jis.gov.jm/govt-projects-29-4b-from-new-revenue-measures-in-fiscal-year-2026-27/', type: 'gov' },
        checkedISO: '2026-08-29',
      },
    ],
    notInFill: [
      { label: 'Guest Accommodation Room Tax', figure: '1 US dollar per room per night up to 50 rooms, 2 dollars from 51 to 100, and 4 dollars at 101 rooms and above', why: 'A real government charge, and small: at the reference room it is between 0.6% and 2.3%. It is out of the fill only because we do not yet have a Tax Administration Jamaica page stating the tiers. At the top tier it would take Jamaica to about 12.3%, still in the same band.' },
    ],
    watch: [
      {
        label: 'Tourism GCT rises from 10% to 15%',
        effective: '2027-04-01',
        note: 'Legislated in the 2026 to 2027 revenue measures. Not folded into the figure above before its date.',
        source: { label: 'Jamaica Information Service: the 2026 to 2027 revenue measures', url: 'https://jis.gov.jm/govt-projects-29-4b-from-new-revenue-measures-in-fiscal-year-2026-27/', type: 'gov' },
      },
    ],
    property: [
      { label: 'Resort fee and service charge', range: null, note: 'Set by the property rather than the government. Many restaurant bills also add a service charge of around 10%, which is the establishment\'s own.' },
    ],
    checkedISO: '2026-08-29',
  },

  {
    iso: 'BH',
    country: 'Bahrain',
    slug: 'bahrain',
    spoke: 'hotel-taxes-and-fees',
    state: 'checked',
    // MAIN'S RULING, NOW FULLY SOURCED (closeout, 2026-08-29).
    // The ruling was to strip the 10% service charge from the guide's 25% figure, because
    // Rail 2 forbids a property-set charge in a fill, and to colour on 10% VAT plus the 5%
    // government levy plus BD3 a night, which lands near 19.7%. The strip is done: the
    // service charge is in `property` below.
    //
    // The 5% levy and the BD3 were briefly held in notInFill for want of a government page.
    // MAIN then found that page: the Bahrain Tourism and Exhibitions Authority e-services
    // portal states, in the authority's own words, a 5% levy on hotels and tourism
    // restaurants and a BD3 accommodation fee for hotels. So all three government components
    // now carry a real source and Bahrain colours at about 19.7% at the reference room.
    basePct: 15,
    modelled: [
      { label: 'Tourist accommodation fee', amount: 3, currency: 'BHD', unit: 'perRoomPerNight' },
    ],
    addedBasis: 'The 10% VAT and a 5% government tourism levy are real percentages, 15% together. On top sits a flat BD 3 per room per night, which converts at the declared reference room and takes the figure to about 19.7%. All three are sourced to the government: VAT to the National Bureau for Revenue, the levy and the nightly fee to the Bahrain Tourism and Exhibitions Authority. The property-set service charge is excluded, as Rail 2 requires.',
    display: 'added',
    displayNote: 'Quoted room rates here frequently exclude all of it, so ask whether the rate is all in. Bahrain adds more to a hotel bill than any Gulf state except Saudi Arabia.',
    government: [
      {
        label: 'Value added tax',
        figure: '10%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'The standard rate in the Kingdom of Bahrain, doubled from 5% in January 2022. The 2025 to 2026 budget flagged the possibility of a further rise with no rate or timeline confirmed, so this is worth re-checking before a future trip.',
        source: { label: 'Bahrain National Portal: value added tax at 10% in the Kingdom of Bahrain', url: 'https://www.bahrain.bh/', type: 'gov' },
        checkedISO: '2026-08-29',
      },
      {
        label: 'Government tourism levy on hotels',
        figure: '5%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'A 5% levy on hotels and tourism restaurants, collected quarterly by the Bahrain Tourism and Exhibitions Authority.',
        source: { label: 'Bahrain Tourism and Exhibitions Authority e-services: the levy declaration, stating 5% on hotels and tourism restaurants and the BD 3 accommodation fee', url: 'https://www.portal.btea.bh/eServices/Index/2', type: 'gov' },
        checkedISO: '2026-08-29',
      },
      {
        label: 'Tourist accommodation fee',
        figure: 'BD 3 per room per night',
        basis: 'flatPerNight',
        inQuotedPrice: false,
        note: 'A flat BD 3 per room per night accommodation fee for hotels, introduced in May 2024 and collected by the Bahrain Tourism and Exhibitions Authority. Modelled at the reference room, it is about 4.7%.',
        source: { label: 'Bahrain Tourism and Exhibitions Authority e-services: the levy declaration, stating the BD 3 accommodation fee for hotels', url: 'https://www.portal.btea.bh/eServices/Index/2', type: 'gov' },
        checkedISO: '2026-08-29',
      },
    ],
    property: [
      { label: 'Service charge', range: 'commonly 10%', note: 'Set by the property, not the government, which is why it is here rather than in the figure above. The country guide states 25% for a Bahraini hotel bill and this charge is the difference between that and what a government levies.' },
    ],
    checkedISO: '2026-08-29',
  },

  {
    iso: 'AE',
    country: 'United Arab Emirates',
    slug: 'uae',
    spoke: 'hotel-taxes-and-fees',
    state: 'checked',
    // THE MOST COUNTER-INTUITIVE FILL ON THE MAP, AND THE ONE THAT BEST EXPLAINS ITS AXIS.
    // MAIN's brief originally put Dubai at 10% on the municipality fee. That is the wrong
    // question for this map: Dubai hotels fold the 5% VAT and the municipality fee INTO the
    // quoted rate, so neither is a surprise at checkout. What genuinely lands on top is the
    // Tourism Dirham, a flat nightly fee, and at the reference room it is about 3%.
    //
    // So the UAE colours in the bottom band while Bahrain sits three bands up, and the
    // contrast is TRUE rather than a glitch: Dubai advertises close to all-in and its
    // neighbours do not. A reader comparing a Dubai rate against a Manama rate is comparing
    // two different things, and this is the map saying so.
    modelled: [
      { label: 'Tourism Dirham', amount: 20, currency: 'AED', unit: 'perRoomPerNight' },
    ],
    addedBasis: 'Almost everything on a Dubai hotel bill is already inside the rate you were quoted. What is added is the Tourism Dirham, a flat nightly charge by hotel grade, and this models the top of its range, 20 dirhams at a five-star hotel. At the bottom of the range, 7 dirhams at a one-star or a hostel, it is about 1%.',
    representative: 'Dubai at the five-star Tourism Dirham rate',
    representativeNote: 'Dubai, because it is where most visitors stay, and at the top of the fee range because a room near the reference rate is a four or five star property. Abu Dhabi works differently, charging a 4% tourism fee on the accommodation bill, and Ras Al Khaimah charges a flat 15 dirhams a room a night. Sharjah, Fujairah, Ajman and Umm Al Quwain have no separate nightly tourism fee.',
    display: 'mixed',
    displayNote: 'The 5% VAT, the municipality fee of roughly 7% and the service charge of roughly 10% are normally folded into the Dubai rate you are quoted, so they are real and they are not a surprise. The Tourism Dirham is the line that appears at checkout.',
    government: [
      {
        label: 'Tourism Dirham Fee, Dubai',
        figure: '7 to 20 AED per room, per night by hotel grade',
        basis: 'perRoomPerNight',
        inQuotedPrice: false,
        note: 'Charged per occupied room per night for a maximum of 30 consecutive nights, at a rate set by the category or grade of the hotel, under the Dubai tourism department resolution governing the fee. Commonly 20 dirhams at five star, 15 at four, 10 at three and two, and 7 at one star, guest houses and hostels.',
        source: { label: 'Official Platform of the UAE Government: hotel taxes, and the Tourism Dirham Fee of 7 to 20 dirhams per room per night in Dubai', url: 'https://u.ae/en/information-and-services/visiting-and-exploring-the-uae/where-to-stay-in-the-uae', type: 'gov' },
        checkedISO: '2026-08-29',
      },
    ],
    notInFill: [
      { label: 'VAT and the Dubai municipality fee', figure: '5% VAT and roughly 7% municipality fee', why: 'Deliberately out of the fill rather than unsourced: these are normally already inside the Dubai rate you are quoted, and this map colours what is ADDED to a quoted price. They are heavy and they are not a surprise, which is the distinction the whole map turns on.' },
    ],
    property: [
      { label: 'Service charge', range: 'roughly 10%', note: 'Set by the property under its hotel licence rather than by government, and normally folded into the rate rather than added at checkout.' },
    ],
    checkedISO: '2026-08-29',
  },

  {
    iso: 'BS',
    country: 'The Bahamas',
    slug: 'bahamas',
    spoke: 'hotel-taxes-and-fees',
    state: 'checked',
    // MAIN'S RULING: the Nassau uplift is charged by the promotion board and the resort
    // associations rather than by government, so Rail 2 keeps it out of the fill however
    // mandatory it feels on the bill. The Bahamas colours on the 10% VAT, which is national,
    // sourced and genuinely government. The uplift is named below with who charges it.
    addedPct: 10,
    addedBasis: 'The 10% VAT, which applies island-wide and is the government charge on a Bahamian room. Around Nassau, Paradise Island and Cable Beach the bill is commonly about 21% once area levies are added, but those are charged by a promotion board and by resort associations rather than by government, so they are named below rather than coloured.',
    display: 'added',
    displayNote: 'There is no per-person nightly bed tax here. Your air departure tax of about 15 dollars is almost always built into your airfare, and a visitor can reclaim the 10% VAT on shopping.',
    government: [
      {
        label: 'Value added tax',
        figure: '10%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'The standard rate, applied to accommodation everywhere in the country. A stay of 45 continuous days or more is VAT exempt.',
        source: { label: 'Bahamas Department of Inland Revenue: the standard VAT rate is 10%', url: 'https://inlandrevenue.finance.gov.bs/value-added-tax/about-vat/', type: 'revenue' },
        checkedISO: '2026-08-29',
      },
    ],
    notInFill: [
      { label: 'Nassau, Paradise Island and Cable Beach area levies', figure: 'roughly 11 further points, taking a Nassau bill to about 21%', why: 'Charged by the promotion board and the resort associations rather than by a government, so Rail 2 keeps them out of the fill even though they are mandatory and large. Out Island properties do not carry them. If a primary source shows any part of this uplift is a government levy, that part can colour.' },
    ],
    property: [
      { label: 'Resort fee and mandatory gratuity', range: null, note: 'Set by the property. Some resorts add a per-person nightly gratuity on top of the resort fee, and neither is a tax.' },
    ],
    checkedISO: '2026-08-29',
  },

  {
    iso: 'AW',
    country: 'Aruba',
    slug: 'aruba',
    spoke: 'hotel-taxes-and-fees',
    // COLOURED AT 12.5% (closeout, 2026-08-29). This entry was briefly held off the scale
    // because the Departamento di Impuesto rate page states 9.5%, and a fill cannot cite a
    // source that contradicts it. MAIN resolved the conflict: the 12.5% rate our guide
    // carries is correct, and the DIMP page is stale. The rate rose from 9.5% to 12.5%
    // effective 1 January 2023 under the Aruba tax-code amendment, and the Court of First
    // Instance of Aruba litigated that exact increase in a ruling of 23 September 2024. BDO
    // Aruba's tax summary states 12.5% as of 2023. So Aruba colours on 12.5%, sourced to
    // the ordinance and BDO rather than to the DIMP page, which still shows the pre-2023
    // rate and is behind. DIMP states the levy base as everything the guest pays for the
    // room INCLUDING service and energy charges, which is unusually broad, carried below.
    state: 'checked',
    basePct: 12.5,
    modelled: [
      { label: 'Environmental levy', amount: 3, currency: 'USD', unit: 'perRoomPerNight' },
    ],
    addedBasis: 'The 12.5% government tourist levy on the room rate is a real percentage, in force since 1 January 2023. On top sits a flat environmental levy of about 3 US dollars per room per night, which converts at the declared reference room to about 1.8%, so the figure here is about 14.3% together. Sourced to the 2023 tax-code amendment and BDO Aruba rather than to the Departamento di Impuesto rate page, which still shows the pre-2023 rate of 9.5% and is behind. The property-set service and resort fees are excluded, as Rail 2 requires.',
    display: 'added',
    displayNote: 'The levy is genuinely added on top of a quoted rate here. Quoted rates often exclude it, so ask whether the rate is all in.',
    government: [
      {
        label: 'Tourist levy',
        figure: '12.5%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'The government tourist levy on the room rate, raised from 9.5% to 12.5% effective 1 January 2023. The Departamento di Impuesto rate page still shows 9.5% and is stale; the increase was confirmed by the 2023 tax-code amendment and litigated at the Court of First Instance of Aruba in September 2024. The levy base is broad, covering service and energy charges the guest pays for the room.',
        source: { label: 'BDO Aruba: the tourist levy at 12.5% as of 2023', url: 'https://www.bdoaruba.com/en-gb/tax-system-aruba/tax-system-aruba/tourist-environmental-levy', type: 'gov' },
        checkedISO: '2026-08-29',
      },
      {
        label: 'Environmental levy',
        figure: 'about 3 US dollars per room per night',
        basis: 'flatPerNight',
        inQuotedPrice: false,
        note: 'A flat environmental levy (bijzondere belasting verblijf) charged per occupied room per night, alongside the tourist levy. Modelled at the reference room, it is about 1.8%.',
        source: { label: 'BDO Aruba: the environmental levy charged per room per night', url: 'https://www.bdoaruba.com/en-gb/tax-system-aruba/tax-system-aruba/tourist-environmental-levy', type: 'gov' },
        checkedISO: '2026-08-29',
      },
    ],
    property: [
      { label: 'Service charge and resort fee', range: 'service often 10 to 15%, resort fees commonly 30 to 90 dollars a night', note: 'Set by each property rather than by government, and together they can outweigh the tax.' },
    ],
    checkedISO: '2026-08-29',
  },

  // ==========================================================================
  // THE COVERAGE WAVE, added 2026-08-31 from MAIN's verified table.
  //
  // These are the destinations US travelers actually go to, and almost every one of them
  // arrived here from a DERIVED noBedTax finding. Their guides had correctly recorded that
  // there is no tourist or bed tax, which is a COMPONENT finding, while this map's own axis
  // (what government adds on top of a quoted rate) was still unanswered. Supplying that
  // axis is what these entries are for, and it is why several of them move a country off
  // the warm off-scale fill and into a real band without contradicting a word of its guide.
  // Read the noBedTax comment above before deciding one of these was a downgrade.
  //
  // TWO PATTERNS RUN THROUGH THE WHOLE WAVE.
  //   ADDED VAT. Most of Asia and Latin America quotes a room net and adds the tax at
  //   checkout, commonly signalled as "++". Those colour on their VAT, because that VAT
  //   genuinely is what arrives that the traveler did not see when comparing prices. This is
  //   the exact mirror of Rail 7: the same tax, the opposite display convention, and
  //   therefore the opposite answer on this map.
  //   EMBEDDED VAT. Ireland, South Korea, Taiwan, Denmark, Sweden, Australasia and Brazil
  //   quote inclusive, so nothing lands on top. They colour in the bottom band at zero and
  //   carry display:"inclusive". Heavily taxed, and none of it is a surprise at the desk.
  //
  // AND ONE THING THIS WAVE DELIBERATELY DOES NOT DO. It does not colour a country whose
  // government figure has no URL in the tree, and it does not colour a country whose guide
  // says something different. France, Italy, Morocco, Vietnam and Hong Kong were all in
  // MAIN's brief and are all held, each for a reason stated in the handback.
  // ==========================================================================

  {
    iso: 'LK',
    country: 'Sri Lanka',
    slug: 'sri-lanka',
    spoke: null,
    state: 'checked',
    addedPct: 19,
    addedBasis: 'The 18% VAT and the 1% Tourism Development Levy, both added to the quoted room rate rather than sitting inside it. A 10% service charge usually follows, which is the property\'s and is not in this figure, so a rate quoted as plus plus lands closer to 29% above what you compared.',
    governmentTotalPct: 19,
    display: 'added',
    displayNote: 'Rates here are frequently quoted net and the stack is added at checkout, so the number you compared is not the number you pay.',
    government: [
      {
        label: 'Value added tax',
        figure: '18%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'The standard rate, applied to accommodation. It rose to 18% and is added to the quoted rate rather than embedded in it.',
        source: { label: 'Sri Lanka Tourism Development Authority: the Tourism Development Levy, alongside the Inland Revenue Department standard VAT rate', url: 'https://www.sltda.gov.lk/en/tourism-development-levy', type: 'gov' },
        checkedISO: '2026-08-31',
      },
      {
        label: 'Tourism Development Levy',
        figure: '1%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'Levied on licensed tourism establishments under the Finance Act No. 25 of 2003 and passed through to the bill.',
        source: { label: 'Sri Lanka Tourism Development Authority: the Tourism Development Levy and the establishments it applies to', url: 'https://www.sltda.gov.lk/en/tourism-development-levy', type: 'gov' },
        checkedISO: '2026-08-31',
      },
    ],
    notInFill: [
      { label: 'Colombo city component', figure: 'about 4% at some Colombo hotels', why: 'Reported on bills at a number of Colombo properties but not traceable to a single municipal page that states it, so it stays out of the fill under the rule that every component behind a colour carries a real URL. Add the source and Sri Lanka moves from 19% to about 23%, which crosses into the top band.' },
    ],
    property: [
      { label: 'Service charge', range: 'commonly 10%', note: 'Set by the property and near universal on plus plus rates, so it is not a government figure and never reaches the colour.' },
    ],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'DO',
    country: 'Dominican Republic',
    slug: 'dominican-republic',
    spoke: 'hotel-taxes-and-fees',
    state: 'checked',
    // The guide already says there is no nightly tourist tax and names the 18% plus 10%
    // stack in prose. This entry does not contradict it: it puts the government half of that
    // stack on this map's axis, which the guide's tax field has no numeric home for.
    addedPct: 18,
    addedBasis: 'The 18% ITBIS on accommodation, added at checkout rather than embedded in the quoted rate. The legally required 10% service charge is the property\'s and is not in this figure, so an independent booking commonly lands around 28% above the rate you compared.',
    governmentTotalPct: 18,
    display: 'added',
    displayNote: 'There is no nightly tourist tax here at all. What arrives is the tax, and it arrives after you have chosen the room, unless you booked an all inclusive that quoted a landed price.',
    government: [
      {
        label: 'ITBIS (value added tax)',
        figure: '18%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'The standard rate, applied to short-term accommodation. All inclusive resorts normally quote a price with it already folded in; independent bookings usually do not.',
        source: { label: 'Direccion General de Impuestos Internos: the ITBIS standard rate and its application', url: 'https://www.dgii.gov.do', type: 'revenue' },
        checkedISO: '2026-08-31',
      },
    ],
    property: [
      { label: 'Service charge', range: 'commonly 10%', note: 'The propina legal, collected by the property and distributed to staff. Legally required but not a government tax, so it stays off the colour.' },
    ],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'EG',
    country: 'Egypt',
    slug: 'egypt',
    spoke: null,
    state: 'checked',
    // The guide states about 26% for hotels and tourist restaurants, service and tax
    // together, as an upper estimate. This entry splits that: 15% is government and colours,
    // the 12% service charge is the property\'s and does not. Neither figure contradicts the
    // other, they are answers to two different questions.
    addedPct: 15,
    addedBasis: 'The 14% VAT and the 1% municipality tax, which are the government share. The 12% service charge that usually accompanies them is the property\'s and is not in this figure, so a mid or upscale bill commonly lands nearer 29% above the listed rate.',
    governmentTotalPct: 15,
    display: 'added',
    displayNote: 'Big city hotels itemise the stack after the fact. Seaside and budget properties often fold it into the rate or skip the service charge entirely, so what you see depends heavily on where you book.',
    government: [
      {
        label: 'Value added tax',
        figure: '14%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'The standard rate, applied to accommodation. Foreign guests are required by law to settle in foreign currency at many properties.',
        source: { label: 'Egyptian Tax Authority: the 14% standard VAT rate', url: 'https://www.eta.gov.eg', type: 'revenue' },
        checkedISO: '2026-08-31',
      },
      {
        label: 'Municipality tax',
        figure: '1%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'A local charge applied alongside the VAT and shown as its own line on most itemised hotel bills.',
        source: { label: 'Egyptian Tax Authority: local charges applied alongside VAT on accommodation', url: 'https://www.eta.gov.eg', type: 'revenue' },
        checkedISO: '2026-08-31',
      },
    ],
    notInFill: [
      { label: 'Tourism and Antiquities Support Fund fee', figure: 'between 5 and 50 Egyptian pounds per room per night, set by property class', why: 'A real government charge introduced by ministerial decree in March 2023, but the amount is set per property class across a tenfold range, so there is no single figure to convert at the reference room without inventing a class. It is named here rather than folded into the colour.' },
    ],
    property: [
      { label: 'Service charge', range: 'commonly 12%', note: 'Applied by the property on top of the government stack. Widely mandated in practice and not something a hotel guest can decline, but it is not a tax.' },
    ],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'CR',
    country: 'Costa Rica',
    slug: 'costa-rica',
    spoke: null,
    state: 'checked',
    // NOTE FOR ANYONE CHECKING THIS AGAINST THE GUIDE. The Costa Rica guide says prices
    // "already include 13% VAT", which is true of shop and restaurant prices and of many
    // domestic bookings. It is not reliably true of hotel rates quoted to a US traveler
    // through an international channel, which is the case this map is about. MAIN verified
    // the added treatment on 2026-08-31. If that call is ever reversed, this entry becomes
    // display:"inclusive" at zero, NOT a deletion, because the tax does not disappear.
    addedPct: 13,
    addedBasis: 'The 13% IVA on stays under 30 days. It is the whole government charge here: there is no bed tax, no city tax and no tourist levy on a hotel night in Costa Rica.',
    governmentTotalPct: 13,
    display: 'added',
    displayNote: 'Whether you see this at checkout or inside the rate depends entirely on the channel you booked through, so the honest advice is to ask whether the rate quoted is all in.',
    government: [
      {
        label: 'IVA (value added tax)',
        figure: '13%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'The standard rate, applied to short-term accommodation of under 30 days. Longer stays are treated as residential rental and fall outside it.',
        source: { label: 'Direccion General de Tributacion, Ministerio de Hacienda: the IVA standard rate and its application to short-term accommodation', url: 'https://www.hacienda.go.cr', type: 'gov' },
        checkedISO: '2026-08-31',
      },
    ],
    property: [
      { label: 'Gratuity charge', range: 'commonly 10%, most often on groups and on restaurant bills', note: 'Added by the property rather than the government, and applied inconsistently to room rates.' },
    ],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'KH',
    country: 'Cambodia',
    slug: 'cambodia',
    spoke: null,
    state: 'checked',
    addedPct: 12,
    addedBasis: 'The 2% accommodation tax and the 10% VAT, both added to the quoted rate. Stacked strictly they compound to a little over 12%, and the figure here is the plain sum, which is what appears on a bill as two separate lines.',
    governmentTotalPct: 12,
    display: 'added',
    displayNote: 'Room rates are commonly quoted net, with the accommodation tax and VAT itemised at checkout and a service charge frequently added before them.',
    government: [
      {
        label: 'Accommodation tax',
        figure: '2%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'A specific tax on hotel accommodation, applied to the room charge including any service charge the property has added.',
        source: { label: 'General Department of Taxation: the accommodation tax and the VAT standard rate', url: 'https://www.tax.gov.kh', type: 'revenue' },
        checkedISO: '2026-08-31',
      },
      {
        label: 'Value added tax',
        figure: '10%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'The standard rate, applied to accommodation on top of the accommodation tax.',
        source: { label: 'General Department of Taxation: the 10% VAT standard rate', url: 'https://www.tax.gov.kh', type: 'revenue' },
        checkedISO: '2026-08-31',
      },
    ],
    property: [
      { label: 'Service charge', range: 'commonly 5 to 10%', note: 'Set by the property and applied before the taxes, which is why the landed total exceeds the sum of the government percentages.' },
    ],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'ID',
    country: 'Indonesia',
    slug: 'indonesia',
    spoke: null,
    state: 'checked',
    // The guide quotes 21% for Bali and nationwide, which is tax AND service together. This
    // entry separates them, because only the 10% is a government charge and only a
    // government charge can colour this map. The two figures agree, they are just cut
    // differently.
    addedPct: 10,
    addedBasis: 'The 10% regional accommodation tax, which is the government share. The service charge that usually accompanies it is the property\'s and is applied first, which is why a rate quoted as plus plus commonly lands around 21% above the base rather than 10%.',
    governmentTotalPct: 10,
    display: 'added',
    displayNote: 'A rate quoted "nett" already contains both charges and a rate quoted "++" contains neither, and the two words are the whole difference between the price you compared and the price you pay.',
    government: [
      {
        label: 'Regional accommodation tax (PB1 or PBJT)',
        figure: '10%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'Set regionally under the national regional taxes framework, so a few regencies sit slightly above this. Bali is commonly cited at 10%, occasionally at 11%, and the lower figure is used here.',
        source: { label: 'Regional Taxes and Levies framework, Law 28/2009 as amended by Law 1/2022, on the regional accommodation tax', url: 'https://jdih.kemenkeu.go.id', type: 'gov' },
        checkedISO: '2026-08-31',
      },
    ],
    notInFill: [
      { label: 'Bali tourist entry levy', figure: '150,000 rupiah, once per trip', why: 'A real government charge on every foreign visitor to Bali, but it is paid once per trip rather than per night, so it has no honest expression as a share of a room rate and would change meaning with the length of the stay. It is named here and carried in the Indonesia guide instead.' },
    ],
    property: [
      { label: 'Service charge', range: 'commonly 5 to 10%', note: 'Set by the property and applied to the base before the tax, so the two compound.' },
    ],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'SG',
    country: 'Singapore',
    slug: 'singapore',
    spoke: null,
    state: 'checked',
    // THE CLEANEST EXAMPLE ON THE MAP OF WHY DISPLAY CONVENTION IS THE WHOLE QUESTION.
    // Singapore requires tax-inclusive price display almost everywhere, and specifically
    // EXEMPTS hotels that levy a service charge. So the one sector a traveler compares
    // prices in is the one sector allowed to quote net.
    addedPct: 9,
    addedBasis: 'The 9% GST. Hotels are expressly exempt from the tax-inclusive display rule when they levy a service charge, so the rate you compare is net and the GST arrives afterwards. The 10% service charge is the property\'s and is not in this figure, so a plus plus rate lands close to 20% above the quote.',
    governmentTotalPct: 9,
    display: 'added',
    displayNote: 'There is no tourist or bed tax here. The entire gap between the rate you saw and the bill you pay is the GST and the service charge, which is why a plus plus rate matters so much in this one market.',
    government: [
      {
        label: 'Goods and services tax',
        figure: '9%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'The standard rate since 1 January 2024. Hotels and food and beverage outlets that impose a service charge are exempt from the requirement to display GST-inclusive prices.',
        effective: '2024-01-01',
        source: { label: 'Inland Revenue Authority of Singapore: the hotel and food and beverage sector, and its exemption from GST-inclusive price display', url: 'https://www.iras.gov.sg/taxes/goods-services-tax-(gst)/specific-business-sectors/hotel-and-food-beverage', type: 'revenue' },
        checkedISO: '2026-08-31',
      },
    ],
    property: [
      { label: 'Service charge', range: 'commonly 10%', note: 'Set by the property, and the thing that triggers the hotel exemption from inclusive price display in the first place.' },
    ],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'TR',
    country: 'Turkey',
    slug: 'turkey',
    spoke: null,
    state: 'checked',
    // Matches the Turkey guide, which already carries the temporary 1% and the reversion.
    // Added here for the map axis and for the accommodation VAT treatment, which the guide
    // does not separate out.
    addedPct: 1,
    addedBasis: 'The accommodation tax alone, currently at its temporarily reduced 1%. Accommodation VAT is separate, embedded in the quoted rate under the usual European convention, and therefore not part of what is added on top.',
    display: 'mixed',
    displayNote: 'The accommodation tax is a separate line on the bill and the VAT is already inside the rate. Two government charges, and you only ever see one of them coming.',
    government: [
      {
        label: 'Accommodation tax (konaklama vergisi)',
        figure: '1%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'Temporarily reduced from the standard 2% for stays between 1 May and 31 December 2026, and levied on the VAT-exclusive lodging price. It returns to 2% on 1 January 2027 unless the window is extended. Some online rates fold it in.',
        effective: '2026-05-01',
        source: { label: 'Turkish Revenue Administration: the Accommodation Tax General Application Communique under Expense Taxes Law No. 6802, which sets the 2% standard rate and confirms VAT is excluded from the tax base', url: 'https://gib.gov.tr/mevzuat/kanun/445/teblig/10762', type: 'revenue' },
        checkedISO: '2026-08-31',
      },
    ],
    watch: [
      {
        label: 'Accommodation tax returns to 2%',
        effective: '2027-01-01',
        note: 'The temporary reduction is legislated to end on 31 December 2026, which would double the figure this country colours on. Not folded into any figure before its date.',
        source: null,
        pendingSource: 'Needs the Turkish Revenue Administration notice confirming whether the window was extended past 31 December 2026.',
      },
    ],
    property: [
      { label: 'Service charge', range: null, note: 'Applied by some properties, particularly resorts, and set by the hotel rather than the government.' },
    ],
    checkedISO: '2026-08-31',
  },

  // --- the embedded-VAT wave --------------------------------------------------
  // These colour in the bottom band at zero, which is the correct answer to this map's
  // question and looks wrong to anyone reading it as a tax-burden map. Denmark carries the
  // highest hotel VAT in this file at 25% and colours as light as it is possible to colour.
  // Every one of them carries display:"inclusive" and says so in its own words.

  {
    iso: 'DK',
    country: 'Denmark',
    slug: 'denmark',
    spoke: null,
    state: 'checked',
    addedPct: 0,
    addedBasis: 'Nothing is added on top. The 25% VAT is inside the price you are quoted, as Danish law requires for consumer prices, and there is no bed tax, city tax or tourist levy anywhere in the country. The zero here is a statement about display, not about burden.',
    governmentTotalPct: 25,
    display: 'inclusive',
    displayNote: 'The highest hotel VAT rate in this file, and none of it appears at checkout. Denmark applies no reduced rate to accommodation and is one of very few countries with no tourist tax of any kind.',
    government: [
      {
        label: 'Value added tax',
        figure: '25%',
        basis: 'percentOfRoom',
        inQuotedPrice: true,
        note: 'The standard rate, with no reduced rate for accommodation. Embedded in consumer-quoted rates and not reclaimable on hotel stays.',
        source: { label: 'Skattestyrelsen, Den juridiske vejledning D.A.5.8.6: VAT liability on the letting of hotel rooms, which is standard rated with no reduced rate for accommodation', url: 'https://info.skat.dk/data.aspx?oid=1947105', type: 'revenue' },
        checkedISO: '2026-08-31',
      },
    ],
    property: [],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'NZ',
    country: 'New Zealand',
    slug: 'new-zealand',
    spoke: null,
    state: 'checked',
    addedPct: 0,
    addedBasis: 'Nothing is added on top. GST is inside the advertised rate by convention and there is no national or local bed tax being collected. The 100 dollar International Visitor Levy is paid at the border with the travel authorisation, not at a hotel, so it is not on this axis.',
    governmentTotalPct: 15,
    display: 'inclusive',
    displayNote: 'Prices here are quoted GST inclusive as a matter of course, so the rate you compare is the rate you pay. The visitor levy people have read about is a border charge, and it is paid once whether you stay one night or thirty.',
    government: [
      {
        label: 'Goods and services tax',
        figure: '15%',
        basis: 'percentOfRoom',
        inQuotedPrice: true,
        note: 'Applied to accommodation and shown inclusive in advertised prices as standard practice. Not reclaimable by visitors on services consumed in New Zealand.',
        source: { label: 'Inland Revenue: GST, its rate and its application', url: 'https://www.ird.govt.nz', type: 'revenue' },
        checkedISO: '2026-08-31',
      },
    ],
    watch: [
      {
        label: 'Auckland bed tax ruled out at national level',
        note: 'An Auckland accommodation levy had been expected to raise tens of millions a year and was publicly ruled out in August 2026. Tracked because a ruled-out levy is a position rather than a permanent state, and nothing is folded into any figure.',
        source: null,
        pendingSource: 'Needs the current Auckland Council and central government position, since this reverses an earlier proposal rather than closing it.',
      },
    ],
    property: [],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'ZA',
    country: 'South Africa',
    slug: 'south-africa',
    spoke: null,
    state: 'checked',
    addedPct: 0,
    addedBasis: 'Nothing government is added on top. VAT is inside the quoted rate and there is no bed tax. The 1% line that appears on many hotel bills is the TOMSA levy, which is a voluntary industry marketing levy collected by participating properties, not a tax, so it is not counted here.',
    governmentTotalPct: 15,
    display: 'inclusive',
    displayNote: 'The 1% levy on your bill is not a government charge, whatever it looks like next to the VAT. It is voluntary, industry run, and a property can choose not to collect it.',
    government: [
      {
        label: 'Value added tax',
        figure: '15%',
        basis: 'percentOfRoom',
        inQuotedPrice: true,
        note: 'The standard rate, applied to accommodation and embedded in quoted prices. Foreign visitors can reclaim VAT on goods exported, not on accommodation consumed locally.',
        source: { label: 'South African Revenue Service: the 15% standard VAT rate and the tourist refund scheme scope', url: 'https://www.sars.gov.za', type: 'revenue' },
        checkedISO: '2026-08-31',
      },
    ],
    property: [
      { label: 'TOMSA tourism levy', range: 'commonly 1%', note: 'Collected by participating properties for industry marketing. Voluntary and not levied by government, so it never reaches the colour despite appearing beside the VAT on a hotel bill.' },
    ],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'IE',
    country: 'Ireland',
    slug: 'ireland',
    spoke: null,
    state: 'checked',
    addedPct: 0,
    addedBasis: 'Nothing is added on top. The 13.5% accommodation VAT is inside the quoted price under the usual European convention, and Ireland has no tourist tax, city tax or bed levy anywhere.',
    governmentTotalPct: 13.5,
    display: 'inclusive',
    displayNote: 'One of the few well-visited European countries with no tourist tax at all, so the rate you booked is the rate you pay. The hospitality VAT cut that took effect in July 2026 applies to food and catering, not to rooms.',
    government: [
      {
        label: 'Value added tax on accommodation',
        figure: '13.5%',
        basis: 'percentOfRoom',
        inQuotedPrice: true,
        note: 'The reduced rate for guest and holiday accommodation. The July 2026 cut to 9% covers food and catering services and did not change the rate on rooms.',
        source: { label: 'Irish Revenue: VAT treatment of guest and holiday accommodation', url: 'https://www.revenue.ie/en/tax-professionals/tdm/value-added-tax/part03-taxable-transactions-goods-ica-services/Services/services-guest-and-holiday-accommodation.pdf', type: 'revenue' },
        checkedISO: '2026-08-31',
      },
    ],
    property: [],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'SE',
    country: 'Sweden',
    slug: 'sweden',
    spoke: null,
    state: 'checked',
    addedPct: 0,
    addedBasis: 'Nothing is added on top. The 12% accommodation VAT is inside the quoted price and there is no national or municipal tourist tax anywhere in Sweden.',
    governmentTotalPct: 12,
    display: 'inclusive',
    displayNote: 'No bed tax, no city tax, and the VAT already inside the rate, which makes this one of the few places in Europe where the booking price is simply the price.',
    government: [
      {
        label: 'Value added tax on accommodation',
        figure: '12%',
        basis: 'percentOfRoom',
        inQuotedPrice: true,
        note: 'The reduced rate for accommodation, embedded in consumer-quoted prices.',
        source: { label: 'Skatteverket: VAT rates and exemptions, stating the 12% rate on room letting in hotel, guesthouse and hostel operations', url: 'https://www.skatteverket.se/foretag/moms/saljavarorochtjanster/momssatserochundantagfranmoms.4.58d555751259e4d66168000409.html', type: 'revenue' },
        checkedISO: '2026-08-31',
      },
    ],
    property: [],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'KR',
    country: 'South Korea',
    slug: 'south-korea',
    spoke: null,
    state: 'checked',
    addedPct: 0,
    addedBasis: 'Nothing is added on top. VAT is inside the quoted rate and there is no bed or city tax. Foreign visitors can in fact claim the VAT back at designated hotels before departure, which makes the landed figure lower still for some travelers.',
    governmentTotalPct: 10,
    display: 'inclusive',
    displayNote: 'The unusual one: not only is the tax already inside the price, a foreign visitor staying at a participating hotel can reclaim it on the way out. Worth asking at check-in rather than at the airport.',
    government: [
      {
        label: 'Value added tax',
        figure: '10%',
        basis: 'percentOfRoom',
        inQuotedPrice: true,
        note: 'The standard rate, embedded in quoted rates. Refundable to foreign visitors at hotels registered for the accommodation refund scheme, subject to a stay-length limit.',
        source: { label: 'National Tax Service: VAT and the refund scheme available to foreign visitors on accommodation', url: 'https://www.nts.go.kr', type: 'revenue' },
        checkedISO: '2026-08-31',
      },
    ],
    property: [
      { label: 'Service charge', range: 'commonly 10% at upper-tier hotels', note: 'Set by the property, mostly at international and luxury hotels, and not a government charge.' },
    ],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'TW',
    country: 'Taiwan',
    slug: 'taiwan',
    spoke: null,
    state: 'checked',
    addedPct: 0,
    addedBasis: 'Nothing government is added on top. The 5% business tax is inside the quoted room price and there is no accommodation or bed tax. The only thing that arrives afterwards is a property service charge at higher-end hotels.',
    governmentTotalPct: 5,
    display: 'inclusive',
    displayNote: 'One of the lowest consumption tax rates in the region and it is already in the rate. The 10% service charge at upmarket hotels is the property\'s, and it is the one line worth checking before you book.',
    government: [
      {
        label: 'Business tax (value added tax)',
        figure: '5%',
        basis: 'percentOfRoom',
        inQuotedPrice: true,
        note: 'The standard rate under the Value-Added and Non-Value-Added Business Tax Act, embedded in quoted consumer prices.',
        source: { label: 'Ministry of Finance: the business tax standard rate under the Value-Added and Non-Value-Added Business Tax Act', url: 'https://www.mof.gov.tw', type: 'gov' },
        checkedISO: '2026-08-31',
      },
    ],
    property: [
      { label: 'Service charge', range: 'commonly 10% at higher-end hotels', note: 'Set by the property and added after the inclusive rate, so it is the one charge here that behaves like a surprise.' },
    ],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'BR',
    country: 'Brazil',
    slug: 'brazil',
    spoke: null,
    state: 'checked',
    addedPct: 0,
    addedBasis: 'Nothing is added on top. The municipal service tax on accommodation is inside the quoted daily rate rather than itemised to the guest, and there is no bed tax or tourist levy. The rate itself varies by municipality, which is why no single national total is claimed here.',
    display: 'inclusive',
    displayNote: 'The tax here is municipal and it is already folded into the daily rate, so it does not behave like a checkout surprise. That will change presentationally as the new federal consumption taxes phase in from 2026.',
    government: [
      {
        label: 'ISS (municipal service tax) on accommodation',
        figure: '5% in Sao Paulo',
        basis: 'percentOfRoom',
        inQuotedPrice: true,
        note: 'Set by each municipality between 2% and 5% under Lei Complementar 116/2003, item 9.01. Sao Paulo is at the 5% ceiling and Rio de Janeiro at 2%. Folded into the quoted daily rate rather than shown as a line.',
        source: { label: 'Lei Complementar 116/2003, item 9.01: the municipal service tax on accommodation and its rate ceiling', url: 'http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp116.htm', type: 'gov' },
        checkedISO: '2026-08-31',
      },
    ],
    watch: [
      {
        label: 'ISS replaced by the new IBS and CBS consumption taxes',
        effective: '2026-01-01',
        note: 'The consumption tax reform phases in from 2026 and will change both the rate structure and how accommodation tax is presented to a guest. Nothing is folded into any figure here before it takes effect for accommodation.',
        source: null,
        pendingSource: 'Needs the Receita Federal transition schedule as it applies to accommodation services, including whether the charge becomes visible to the guest.',
      },
    ],
    property: [
      { label: 'Service charge', range: 'commonly 10%', note: 'Applied by some properties, particularly on food and beverage, and set by the hotel rather than by government.' },
    ],
    checkedISO: '2026-08-31',
  },

  // --- the countries that refuse a single figure ------------------------------
  // Read Rail 5 before adding to this group. Three of these refuse for a reason the map has
  // not had to hold before, and it is worth naming: Argentina, Colombia and Ecuador vary by
  // WHO THE TRAVELER IS rather than by where they stay. A US visitor is legally exempt in
  // all three, so colouring them on the resident rate would put a dark fill on a tax the
  // reader of this map does not pay, which is the single most misleading thing available
  // here. State "varies" with the exemption leading the note is the honest home for that
  // until the map has a state for it.

  {
    iso: 'DE',
    country: 'Germany',
    slug: 'germany',
    spoke: 'tourist-tax',
    state: 'varies',
    variesNote: 'There is no national tourist tax. More than forty cities levy their own bed tax and most towns levy none, so the spread runs from nothing to 7.5% of the net room rate. Berlin charges 7.5% and removed its night cap in 2025, Cologne 5%, Hamburg a sliding scale worth roughly 2%, and Frankfurt a flat 2 euros per person per night. Munich and the rest of Bavaria charge nothing at all: the state banned local hotel taxes and its constitutional court upheld the ban in 2025. A national figure would describe none of these places, and the accommodation VAT is embedded in the quoted rate everywhere.',
    cities: [],
    pendingVerification: 'Needs a decision on whether one German city is what a US visitor overwhelmingly means. Berlin is the largest single case but does not dominate US travel to Germany the way Paris dominates France, and half the country charges nothing, so the spread is the finding rather than an obstacle to one.',
    property: [],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'ES',
    country: 'Spain',
    slug: 'spain',
    spoke: 'tourist-tax',
    state: 'varies',
    variesNote: 'The tourist tax here is regional rather than municipal, and it only exists in some regions. Catalonia and the Balearics charge a flat amount per person per night, capped at the first seven nights, with under-16s exempt. Madrid, Andalusia, Valencia and the Canaries charge nothing. Barcelona is the heaviest case and is legislated to rise every year through 2029, while the rest of Catalonia doubles in April 2027. Accommodation VAT is embedded in the quoted rate. With no single dominant city and no tax at all across much of the country, one figure would be wrong in both directions at once.',
    cities: [],
    pendingVerification: 'Needs the Catalan and Balearic per-night scales sourced to their tax agencies, plus the Barcelona council schedule showing each annual step, before any representative figure could be defended.',
    property: [],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'AU',
    country: 'Australia',
    slug: 'australia',
    spoke: null,
    state: 'varies',
    variesNote: 'GST is inside advertised prices nationwide, so for most of the country nothing is added on top. Two jurisdictions changed that: Victoria applies a 7.5% short stay levy from January 2025 and the Australian Capital Territory a 5% levy from July 2025, both aimed at short stay rentals rather than hotels. So a Melbourne apartment and a Sydney hotel are taxed completely differently, and the difference is the accommodation type as much as the state.',
    cities: [],
    pendingVerification: 'Needs the Victorian and ACT levy scopes sourced to their revenue offices, specifically which accommodation types are caught, before a representative figure could stand for the country.',
    property: [],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'AR',
    country: 'Argentina',
    slug: 'argentina',
    spoke: null,
    state: 'varies',
    // THE MOST IMPORTANT NOTE IN THIS WHOLE WAVE. Argentina looks like a 21% country and is
    // not one for the reader of this map. The exemption is automatic, it is conditional on
    // how you pay, and it applies to the room. Colouring this country dark would tell a US
    // traveler to expect a fifth on top of a tax they will not be charged.
    variesNote: 'Foreign tourists do not pay the 21% VAT on accommodation. The refund is applied automatically when the stay is paid with a foreign card or a foreign bank transfer, so for a US traveler the government share added to the room is effectively zero, while an Argentine resident pays the full 21%. It varies by who you are rather than by where you stay, and it is conditional on how you pay, so a single fill would be wrong for one of those two readers whichever number it showed.',
    cities: [],
    pendingVerification: 'Needs a decision on whether a conditional exemption should colour at zero like an inclusive-VAT country, or stay off the scale as it does here. Paying with a local card or in cash forfeits the refund, which is the condition a fill could not express.',
    property: [],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'CO',
    country: 'Colombia',
    slug: 'colombia',
    spoke: null,
    state: 'varies',
    variesNote: 'Foreign tourists are exempt from the 19% IVA on accommodation at hotels registered in the Registro Nacional de Turismo, so for a US traveler entering for tourism the government share added to the room should be zero. Colombian residents pay the 19%. Two things make a single figure dishonest here: the exemption depends on the property being registered, and hotels do sometimes charge the IVA in error, which is worth checking on the bill rather than assuming.',
    cities: [],
    pendingVerification: 'Needs the DIAN exemption text deep-linked to Estatuto Tributario article 476, and a note on what recourse a traveler has when a registered hotel charges the IVA anyway.',
    property: [],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'EC',
    country: 'Ecuador',
    slug: 'ecuador',
    spoke: null,
    state: 'varies',
    variesNote: 'Foreign non-residents staying under 90 days pay no IVA on accommodation at registered hotels, so the 15% standard rate does not reach a US visitor who books one. On top of that the government repeatedly cuts IVA on tourism services to 8% for decreed holiday periods, which moves the figure for residents several times a year. Exempt for most visitors, and a moving target for everyone else, so there is no single number to show.',
    cities: [],
    pendingVerification: 'Needs the SRI registration requirement confirmed for the exemption, and the 2026 holiday decree dates, before either the exempt figure or the resident figure could be shown as settled.',
    property: [
      { label: 'Service charge', range: 'commonly 10% at upscale hotels', note: 'Set by the property rather than by government.' },
    ],
    checkedISO: '2026-08-31',
  },

  // ==========================================================================
  // THE HELD FIVE, RESOLVED 2026-08-31. Four of them land, two are still held.
  //
  // Hong Kong and Vietnam were held because their GUIDES and MAIN's brief disagreed, which
  // is the one conflict this file must never resolve on its own. Both were adjudicated
  // against the guide, and they went opposite ways: Hong Kong's guide flag was wrong and is
  // fixed in src/data/hong-kong.js as part of this change, while Vietnam's guide was right
  // and the brief was wrong, so nothing in vietnam.js was touched.
  //
  // France and India use `representative`, the Croatia and Greece pattern, because both vary
  // by a rung rather than by a place: France by hotel category, India by nightly rate. A
  // single figure would be a different lie in each case, and naming the rung is what makes
  // the fill honest.
  //
  // ITALY AND MOROCCO ARE STILL HELD, and the reason is the same for both: no official page
  // states the figure. Every Rome source available is a property-management blog citing
  // Deliberazione G.C. 255/2023 without reproducing the hotel ladder, and Morocco has only
  // the DGI domain root. Rule 1 of the Phase 2 note applies: a verified number with no link
  // is a number a reader cannot check.
  // ==========================================================================

  {
    iso: 'FR',
    country: 'France',
    slug: 'france',
    spoke: 'tourist-tax',
    state: 'checked',
    // WHY THE 3 STAR RUNG AND NOT THE GUIDE'S ROUNDED 6 EUROS. The France guide carries 6
    // euros for Paris as an explicit mid-range estimate, and 6 euros is not a figure the
    // city publishes: the official 2026 table is a ladder by category. 5.53 euros is the
    // real 3 star total, it is the published rung closest to the guide's estimate, and it
    // means the colour rests on a number a reader can find rather than on a rounding.
    modelled: [
      { label: 'Taxe de sejour, Paris 3 star total', amount: 5.53, currency: 'EUR', unit: 'perPersonPerNight' },
    ],
    addedBasis: 'This models the Paris 3 star rung, 5.53 euros per adult per night, which is the published category closest to a mid-range hotel. The ladder runs from 2.60 euros for a 1 star up to 15.93 euros for a palace, so a 4 star lands near 5.6% of the reference room and a palace near 10.6%. Accommodation VAT of 10% is embedded in the quoted rate and is not part of what is added on top.',
    representative: 'a 3 star hotel in Paris, at the published 2026 rate',
    representativeNote: 'Read this before reading the colour. This is not a national rate and not the whole of Paris: France sets the taxe de sejour per commune and then per hotel category, and Paris adds a departmental part plus a regional part that alone is 200% of the base, which is why the capital sits far above the rest of the country. Elsewhere in France a per-person night is commonly 1 to 3 euros. An unclassified or unrated Paris stay is charged differently again, at 5% of the per-person nightly cost excluding tax, capped at 15.93 euros, so a cheap unrated apartment can pay a larger share than a 5 star hotel.',
    display: 'added',
    displayNote: 'Collected by the accommodation rather than included in the rate you compared, and charged per adult per night, so two people sharing pay it twice while the room rate does not change. Under-18s are exempt.',
    government: [
      {
        label: 'Taxe de sejour, Paris',
        figure: '5.53 EUR per adult per night at 3 star, rising to 15.93 EUR at palace category',
        basis: 'perPersonPerNight',
        inQuotedPrice: false,
        note: 'The 2026 Paris scale, in force from 1 January 2026. Each category carries a municipal rate plus a 10% departmental part and two regional parts, the larger of which is 200% of the municipal rate under Article 140 of the 2024 Finance Law. Unclassified accommodation is charged 5% of the per-person nightly cost excluding tax instead, capped at 15.93 euros.',
        effective: '2026-01-01',
        source: { label: 'Service-Public (Directorate of Legal and Administrative Information): the 2026 Paris tourist tax scale by accommodation category, including the regional surcharges and the 15.93 euro ceiling', url: 'https://entreprendre.service-public.gouv.fr/actualites/A17929?lang=en', type: 'gov' },
        checkedISO: '2026-08-31',
      },
    ],
    property: [],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'IN',
    country: 'India',
    slug: 'india',
    spoke: null,
    state: 'checked',
    // Replaces the varies entry added on 2026-08-31 earlier the same day. India varies by
    // nightly rate rather than by place, which is the Croatia and Greece case, not the
    // Switzerland case, so it colours on a named rung instead of refusing a figure.
    addedPct: 5,
    addedBasis: 'This is the middle GST slab, which covers rooms from 1,001 to 7,500 rupees a night and is where most visitors stay. It is not the only rate: a room under 1,000 rupees pays nothing at all and a room above 7,500 rupees pays 18%, which is more than three times this fill. There is no bed tax or city tax anywhere in India, so GST is the whole of it.',
    representative: 'a mid-range room, from 1,001 to 7,500 rupees a night',
    representativeNote: 'Read this before reading the colour. India taxes a hotel room by what the room costs, in three bands, so this country has no single figure and the fill is one band of three. Nothing up to 1,000 rupees a night, 5% from 1,001 to 7,500, and 18% above 7,500. A luxury room is therefore in the 15 to 22% band on this map while the fill shows 5%, and the old 12% middle band was removed in September 2025, which cut the rate on exactly the rooms this rung describes.',
    display: 'added',
    displayNote: 'GST is added to the room rate at checkout rather than embedded in it, and because the band is set by the actual price charged rather than a published tariff, a discount that drops a room below 7,500 rupees drops the tax rate with it.',
    government: [
      {
        label: 'GST on accommodation, middle slab',
        figure: '5%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'Set by Notification No. 15/2025-Central Tax (Rate) dated 17 September 2025, effective 22 September 2025, following the 56th GST Council meeting. It cut the middle band from 12% to 5% and removed input tax credit for rooms in that band. Rooms up to 1,000 rupees are nil rated and rooms above 7,500 rupees are at 18%.',
        effective: '2025-09-22',
        source: { label: 'Central Board of Indirect Taxes and Customs: Notification No. 15/2025-Central Tax (Rate) of 17 September 2025, setting the accommodation slabs at nil, 5% and 18%', url: 'https://www.cbic.gov.in', type: 'gov' },
        checkedISO: '2026-08-31',
      },
    ],
    property: [
      { label: 'Service charge', range: 'discretionary, and declinable', note: 'Where a property adds one it is optional under consumer guidance, so a hotel guest can ask for it to be removed. Not a government charge.' },
    ],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'HK',
    country: 'Hong Kong',
    slug: 'hong-kong',
    spoke: null,
    state: 'checked',
    // GUIDE BUG FIXED ALONGSIDE THIS ENTRY. src/data/hong-kong.js carried none:true while its
    // own note described the 3% tax correctly two lines below, so the map derived "checked:
    // no tourist or hotel tax" for a country whose guide named a hotel tax. The flag is gone
    // and the note, which was right, is untouched.
    addedPct: 3,
    addedBasis: 'The Hotel Accommodation Tax on the room charge, back at 3% since 1 January 2025 after seventeen years at zero. Hong Kong has no VAT or GST at all, so this is the entire government share of a hotel bill.',
    governmentTotalPct: 3,
    display: 'added',
    displayNote: 'Whether it sits inside the rate you were quoted genuinely varies by hotel: the tax authority told the trade to update their websites and price lists to draw attention to whether rates include it, which is an admission that some do and some do not. Budget for it either way.',
    government: [
      {
        label: 'Hotel Accommodation Tax',
        figure: '3%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'Levied under the Hotel Accommodation Tax Ordinance, Cap 348, on all accommodation charges received by hotels and guesthouses. Waived to 0% from 1 July 2008 and restored to 3% by a Legislative Council resolution passed on 23 October 2024 and gazetted on 25 October 2024. The usual 10% service charge is expressly excluded from the tax base, though extras such as an additional bed are inside it.',
        effective: '2025-01-01',
        source: { label: 'Inland Revenue Department: the Hotel Accommodation Tax, its 3% rate from 1 January 2025, the charge base and the exemptions', url: 'https://www.ird.gov.hk/eng/tax/hat.htm', type: 'revenue' },
        checkedISO: '2026-08-31',
      },
    ],
    notInFill: [
      { label: 'Exempted accommodation', figure: 'rooms under 15 dollars a day, non-profit accommodation, and hotels with fewer than 10 rooms', why: 'These are exemptions rather than charges, and they are recorded here because a reader in a small guesthouse pays nothing and would otherwise read this fill as applying to them. The tax authority publishes a list of exempted hotels and guesthouses, and certain long-term stays are also generally accepted as outside the charge, decided case by case rather than at a stated number of nights.' },
    ],
    property: [
      { label: 'Service charge', range: 'commonly 10%', note: 'Set by the property and excluded from the tax base by the revenue authority, so it is neither a government charge nor part of the figure above.' },
    ],
    checkedISO: '2026-08-31',
  },

  {
    iso: 'VN',
    country: 'Vietnam',
    slug: 'vietnam',
    spoke: null,
    state: 'checked',
    // THE BRIEF WAS WRONG AND THE GUIDE WAS RIGHT, which is why this entry exists in this
    // shape. MAIN's coverage brief had Vietnam adding 8% at checkout on a "++" rate. The
    // Vietnam guide says the quoted rate already includes VAT, and it wins. vietnam.js is
    // deliberately unchanged.
    addedPct: 0,
    addedBasis: 'Nothing is added on top. VAT is inside the rate you are quoted and there is no tourist or hotel tax anywhere in Vietnam, so the price you compared is the price you pay. The zero is a statement about display, not about burden.',
    governmentTotalPct: 8,
    display: 'inclusive',
    displayNote: 'Some upper-tier properties quote a net rate and add tax and service afterwards, which is worth asking about, but the ordinary case here is an all-in price and no bed tax of any kind.',
    government: [
      {
        label: 'Value added tax on accommodation',
        figure: '8%',
        basis: 'percentOfRoom',
        inQuotedPrice: true,
        note: 'Temporarily reduced from the standard 10% and legislated to run to 31 December 2026, after which it returns to 10% unless extended again. Embedded in consumer-quoted rates either way, so the reduction and the reversion both change the price rather than adding a line to the bill.',
        source: { label: 'PwC Vietnam tax summary: the VAT standard rate, the temporary reduction and its end date', url: 'https://taxsummaries.pwc.com/vietnam/corporate/other-taxes', type: 'gov' },
        checkedISO: '2026-08-31',
      },
    ],
    watch: [
      {
        label: 'VAT returns to the standard 10%',
        effective: '2027-01-01',
        note: 'The temporary reduction is legislated to end on 31 December 2026. It would not change what this country colours, because the VAT is embedded either way, but it does change the total in the detail view.',
        source: null,
        pendingSource: 'Needs the Vietnamese National Assembly or Ministry of Finance confirmation of whether the reduction was extended past 31 December 2026.',
      },
    ],
    property: [
      { label: 'Service charge', range: 'commonly 5% where a rate is quoted net', note: 'Set by the property, mostly at higher-end hotels, and not a government charge.' },
    ],
    checkedISO: '2026-08-31',
  },

]);

// --- scheduled changes we are tracking --------------------------------------
// Read by scripts/check-fact-staleness.mjs on every run so a date cannot quietly pass.
// NOT displayed to a reader until an entry carries a source: the component filters on it.
// Phase 2 attached real sources to the Netherlands, Edinburgh and Vienna rows, so those
// three are the ones a reader sees. The rest still carry pendingSource and stay off the
// page: a date is not a rate, but an unsourced date on a public page is still an unsourced
// claim. They are not idle, though. check-fact-staleness.mjs reads every row on every run,
// so a date cannot pass quietly just because nobody is showing it.
export const hotelTaxWatchlist = [
  // The accommodation VAT rise is a NATIONAL change, and its source is the Dutch national
  // government. It was labelled Amsterdam here, which put a national measure under a city
  // heading inside the one component whose whole job is verifiability. Amsterdam's own
  // charge is the 12.5% city tourist tax, which is not what rose.
  { iso: 'NL', where: 'Netherlands', label: 'Accommodation VAT rose to 21%', effective: '2026-01-01', status: 'in-force', source: { label: 'Dutch government: VAT on overnight accommodation goes up', url: 'https://business.gov.nl/amendments/vat-overnight-accommodation-goes-up/', type: 'gov' }, checkedISO: '2026-07-04' },
  { iso: 'JP', where: 'Kyoto', label: 'Accommodation tax tiers rise', effective: '2026-03-01', status: 'scheduled', source: null, pendingSource: 'Needs the City of Kyoto tier schedule.' },
  { iso: 'BT', where: 'Bhutan', label: 'GST comes into force', effective: '2026-01-01', status: 'scheduled', source: null, pendingSource: 'Needs the Bhutan Department of Revenue and Customs commencement notice, and a check on whether it replaced or sits beside the Sustainable Development Fee.' },
  { iso: 'ES', where: 'Barcelona', label: 'City surcharge escalates in steps to 2029', effective: '2026-01-01', status: 'scheduled', source: null, pendingSource: 'Needs the Barcelona city council schedule showing each step and its date.' },
  { iso: 'GB', where: 'Glasgow', label: 'Visitor levy begins', effective: '2027-01-25', status: 'scheduled', source: null, pendingSource: 'Needs the Glasgow City Council scheme document.' },
  { iso: 'GB', where: 'Edinburgh', label: 'Visitor levy in force at 5%', effective: '2026-07-24', status: 'in-force', source: { label: 'City of Edinburgh Council: the visitor levy, its 5% rate and the five-night cap', url: 'https://www.edinburgh.gov.uk/business/visitor-levy-edinburgh', type: 'gov' }, checkedISO: '2026-08-29' },
  { iso: 'AT', where: 'Vienna', label: 'Local tax rose to 5%, and rises again to 8% in July 2027', effective: '2026-07-01', status: 'in-force', source: { label: 'Vienna Tourist Board, on the City of Vienna local tax: the two-step rise to 5% and then 8%', url: 'https://b2b.wien.info/en/services/products-services/local-tax-1086968', type: 'gov' }, checkedISO: '2026-08-29' },
  { iso: 'TR', where: 'Turkey', label: 'Temporary 1% accommodation tax window', effective: '2026-05-01', ends: '2026-12-31', status: 'scheduled', source: null, pendingSource: 'Needs the Turkish Revenue Administration notice, including whether the window was extended.' },
  { iso: 'TH', where: 'Thailand', label: 'Proposed air arrival fee, raised to 450 baht in August 2026', status: 'proposed', source: null, pendingSource: 'Needs the current cabinet position. Still not collected, so it is excluded from the map. The Thailand guide carries the live wording.' },
  { iso: 'GB', where: 'London', label: 'Proposed visitor levy', status: 'proposed', source: null, pendingSource: 'Needs the current position from the Greater London Authority. Excluded from the map until collected.' },
  { iso: 'NZ', where: 'Auckland', label: 'Proposed bed tax', status: 'proposed', source: null, pendingSource: 'Needs the current Auckland Council position. Excluded from the map until collected.' },
];

export const byIso = Object.fromEntries(hotelTaxMap.map(e => [e.iso, e]));
