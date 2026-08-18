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
// RAIL 3. A FLAT FEE IS NOT CONVERTED INTO A PERCENTAGE.
// ============================================================================
// This is the decision most likely to be revisited, so here is the reasoning in full.
// Several government stacks mix a percentage with a flat charge: the Maldives is 17%
// TGST PLUS 12 dollars per person per night. A flat charge has no percentage until you
// assume a room rate and a party size, which is exactly why the honest published figure
// for the Maldives is a range and not a number.
//
// So the colour is driven by the PERCENTAGE components only, and a country that also
// carries a flat government charge is marked with a stipple overlay meaning "there is
// more here than this colour can show". The detail then gives the flat charge in its
// native units and works it through at two room rates, so the reader sees the range
// rather than a single number that quietly depends on a room rate nobody told them about.
//
// The alternative is a declared reference stay: pick a room rate and a party size, state
// them in the legend, convert every flat fee at that basket. That buys one comparable
// number per country at the cost of putting a precise-looking fill on an assumption, and
// it reads badly at the extremes (a 12 dollar per-person charge is 16% of a guesthouse
// and 3% of an overwater villa). MAIN's call. If it is wanted, the switch is this rail
// plus the stipple, and the site already has a basket to match rather than invent:
// CostChart converts hotel tax at one traveler and one room, TAX_TRAVELERS = 1.
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
  varies:    { fill: '#CFD8D3', label: 'Varies too much within the country for one figure' },
  // CHECKED, AND THERE IS NO BED TAX. Not a band, and deliberately not on the teal ramp,
  // because we have verified a COMPONENT (no tourist or hotel tax) and not the map's axis
  // (what VAT adds on top). Putting it in the light band would claim a percentage nobody
  // checked; leaving it grey would call our own research ignorance, which is what the first
  // version of this map did to 26 countries. A warm off-scale fill says "we looked, and
  // here is what we found" without implying a number.
  noBedTax:  { fill: '#F5E3C4', label: 'Checked: no tourist or hotel tax' },
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

// Anything we can honestly say something definite about, which is the number worth showing
// a reader. NOT the same as `colours`, because a no-bed-tax finding carries no percentage.
export const isChecked = (e) => colours(e) || isNoBedTax(e) || (!!e && e.state === 'varies');

// Does this country carry a flat government charge the percentage fill cannot show?
export const hasFlat = (e) => !!e && Array.isArray(e.flat) && e.flat.length > 0;

export const hotelTaxMapChecked = 'Aug 2026';
export const hotelTaxMapCheckedISO = '2026-08-17';

// --- the countries ----------------------------------------------------------
// PHASE 1 CONTENT NOTE, read this before adding anything.
// This list is deliberately short and contains NO invented figures. Every state the map
// can render is represented by a country that genuinely is in that state, so the shape
// can be reviewed without a single placeholder number existing anywhere in the tree:
//   checked, coloured, city basis, mixed display  -> Netherlands
//   checked, coloured, flat charge stipple        -> Maldives
//   varies within country                         -> United States, Canada, Switzerland
//   pending, proposal named, nothing coloured     -> Thailand
//   pending, inclusive display, nothing coloured  -> Japan
//   not yet checked                               -> every other country on earth
// Bands 1, 2 and 5 are unoccupied for now. The legend still shows them.
export const hotelTaxMap = [
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
    // MAIN-verified anchor. Figures come from the Phase 1 brief and still need their
    // official URLs attached in Phase 2, which is what pendingSource records. They colour
    // because MAIN verified them; the missing URL is a Phase 2 blocker, not a Phase 1 one,
    // and the checker lists it every run until it is filled.
    iso: 'MV',
    country: 'Maldives',
    slug: null,
    spoke: null,
    state: 'checked',
    addedPct: 17,
    addedBasis: 'The 17% TGST is what the percentage fill shows. The green tax is a flat charge per person per night, so it has no percentage until you fix a room rate, which is why this country is stippled rather than pushed into a darker band.',
    governmentTotalPct: null,
    display: 'added',
    displayNote: 'Resort rates here are routinely quoted before tax, so the whole stack arrives at checkout rather than in the price you compared.',
    government: [
      {
        label: 'Tourism Goods and Services Tax (TGST)',
        figure: '17%',
        basis: 'percentOfRoom',
        inQuotedPrice: false,
        note: 'Charged on tourism-sector goods and services including accommodation.',
        source: null,
        pendingSource: 'Needs the Maldives Inland Revenue Authority page for the current TGST rate and its effective date.',
        checkedISO: '2026-08-17',
      },
      {
        label: 'Green tax',
        figure: '12 US dollars per person per night',
        basis: 'perPersonPerNight',
        amount: 12,
        currency: 'USD',
        inQuotedPrice: false,
        note: 'A flat environmental charge on each guest for each night. Rates differ by property type, so confirm the figure for where you are staying.',
        source: null,
        pendingSource: 'Needs the official green tax schedule, including the per-property-type rates and any child exemption.',
        checkedISO: '2026-08-17',
      },
    ],
    // The flat components restated for the stipple and the worked examples. Same figures
    // as the government rows above, kept here so the component never has to guess which
    // rows are flat by sniffing a label.
    flat: [
      { label: 'Green tax', amount: 12, currency: 'USD', unit: 'perPersonPerNight' },
    ],
    property: [
      { label: 'Service charge', range: '10%', note: 'Set by the property, not the government. Widely applied but not a tax, and not refundable.' },
    ],
    checkedISO: '2026-08-17',
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
    variesNote: 'A low national VAT on accommodation, then a per-person visitor tax set by each commune, which commonly includes a local transport card. The levy and what it buys both change from one valley to the next.',
    cities: [],
    pendingVerification: 'Needs the accommodation VAT rate plus representative commune visitor taxes, each sourced, and a note on where the fee includes transport.',
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
    state: 'pending',
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
    ],
    property: [],
    checkedISO: '2026-08-17',
  },
];

// --- scheduled changes we are tracking --------------------------------------
// Read by scripts/check-fact-staleness.mjs on every run so a date cannot quietly pass.
// NOT displayed to a reader until an entry carries a source: the component filters on it.
// Dates below come from the Phase 1 research brief and each still needs its official URL,
// which is why every one carries pendingSource. A date is not a rate, but an unsourced
// date on a public page is still an unsourced claim, so none of these are shown yet.
export const hotelTaxWatchlist = [
  { iso: 'NL', where: 'Amsterdam', label: 'Accommodation VAT rose to 21%', effective: '2026-01-01', status: 'in-force', source: { label: 'Dutch government: VAT on overnight accommodation goes up', url: 'https://business.gov.nl/amendments/vat-overnight-accommodation-goes-up/', type: 'gov' }, checkedISO: '2026-07-04' },
  { iso: 'JP', where: 'Kyoto', label: 'Accommodation tax tiers rise', effective: '2026-03-01', status: 'scheduled', source: null, pendingSource: 'Needs the City of Kyoto tier schedule.' },
  { iso: 'BT', where: 'Bhutan', label: 'GST comes into force', effective: '2026-01-01', status: 'scheduled', source: null, pendingSource: 'Needs the Bhutan Department of Revenue and Customs commencement notice, and a check on whether it replaced or sits beside the Sustainable Development Fee.' },
  { iso: 'ES', where: 'Barcelona', label: 'City surcharge escalates in steps to 2029', effective: '2026-01-01', status: 'scheduled', source: null, pendingSource: 'Needs the Barcelona city council schedule showing each step and its date.' },
  { iso: 'GB', where: 'Glasgow', label: 'Visitor levy begins', effective: '2027-01-25', status: 'scheduled', source: null, pendingSource: 'Needs the Glasgow City Council scheme document.' },
  { iso: 'GB', where: 'Edinburgh', label: 'Visitor levy in force', effective: '2026-07-24', status: 'in-force', source: null, pendingSource: 'Needs the City of Edinburgh Council scheme document confirming the live rate.' },
  { iso: 'TR', where: 'Turkey', label: 'Temporary 1% accommodation tax window', effective: '2026-05-01', ends: '2026-12-31', status: 'scheduled', source: null, pendingSource: 'Needs the Turkish Revenue Administration notice, including whether the window was extended.' },
  { iso: 'TH', where: 'Thailand', label: 'Proposed air arrival fee, raised to 450 baht in August 2026', status: 'proposed', source: null, pendingSource: 'Needs the current cabinet position. Still not collected, so it is excluded from the map. The Thailand guide carries the live wording.' },
  { iso: 'GB', where: 'London', label: 'Proposed visitor levy', status: 'proposed', source: null, pendingSource: 'Needs the current position from the Greater London Authority. Excluded from the map until collected.' },
  { iso: 'NZ', where: 'Auckland', label: 'Proposed bed tax', status: 'proposed', source: null, pendingSource: 'Needs the current Auckland Council position. Excluded from the map until collected.' },
];

export const byIso = Object.fromEntries(hotelTaxMap.map(e => [e.iso, e]));
