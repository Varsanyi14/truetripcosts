// Which of a country's keyFacts are ENTRY or BORDER charges, and what kind each one is.
//
// WHY THIS FILE EXISTS: keyFacts is a mixed bag by design. Across the 29 guides that have
// one it holds entry visas and arrival fees, but also lodging taxes, VAT rates, VAT-refund
// schemes and card-surcharge rules. Nothing in the data distinguishes them, so anything
// that wants only the entry charges has to classify. Doing that with a regex on the label
// would be guesswork that fails badly and quietly: "Edinburgh visitor levy" is not an
// entry charge, "ED Card and sustainability fee" is, and no pattern separates them
// reliably.
//
// So the classification is written out, once, here. This file holds NO figures, NO dates
// and NO sources. It is an index: a slug, the exact keyFact label, and what kind of thing
// that fact is. Every value the traveler sees still comes from the country's own keyFacts
// entry, with that entry's own status, effective date, source and checked date. If a label
// here stops matching the guide, the lookup returns nothing and the line disappears,
// which is the correct failure: absence is not zero.
//
// THE KINDS, and why the distinction is load-bearing:
//   charge       An unconditional one-off cost to enter, for a US visitor on a normal
//                trip. These are the ones that belong in a total. There are 14.
//   conditional  A real charge that only applies to some trips (the Galapagos, a cruise
//                day visit). Never folded into a total: it would overcharge most readers.
//   zero         An explicit, sourced zero. A mandatory form that is free, or a fee
//                formally waived. Renders as a NAMED zero, never as a bare $0, and never
//                invented where the data is merely silent.
//   requirement  A condition of entry that carries no fee we can source (Georgia's
//                insurance decree). Named as a requirement, never priced.
//   exemption    A documented route to paying nothing (China's transit rule).
//   proposed     Announced but not being collected. A watch-flag zero, NOT a charge.
//                Thailand's 300-baht fee has sat here for years.
//
// UNIT DISCIPLINE: everything in this file is ONE-OFF PER PERSON. It multiplies by
// travelers and never by nights. That is the whole reason entry charges are kept apart
// from lodging taxes, which are per night. Any consumer of this file that multiplies by
// nights is a bug.

// slug -> [{ label (must match the guide's keyFacts label exactly), kind }]
export const entryCharges = {

  // ----- the 14 unconditional per-person charges -----
  aruba: [{ label: 'ED Card and sustainability fee', kind: 'charge' }],
  australia: [{ label: 'ETA (entry authorization)', kind: 'charge' }],
  brazil: [{ label: 'Brazil visitor e-visa (US citizens)', kind: 'charge' }],
  cambodia: [{ label: 'Cambodia tourist visa (30 days, US citizens)', kind: 'charge' }],
  egypt: [{ label: 'Egypt tourist visa (30-day, US citizens)', kind: 'charge' }],
  india: [{ label: 'India e-Tourist Visa (30-day, US citizens)', kind: 'charge' }],
  indonesia: [{ label: 'Indonesia visa on arrival (30-day, US citizens)', kind: 'charge' }],
  laos: [{ label: 'Laos tourist visa (30 days, US citizens)', kind: 'charge' }],
  'united-kingdom': [{ label: 'UK ETA fee', kind: 'charge' }],
  vietnam: [{ label: 'Vietnam e-visa (up to 90 days, US citizens)', kind: 'charge' }],

  // China: the visa is the charge, and the transit rule is the documented way to pay
  // nothing. Both belong on the page; only the first belongs in a total.
  china: [
    { label: 'Tourist (L) visa for US citizens', kind: 'charge' },
    { label: '240-hour visa-free transit', kind: 'exemption' },
  ],

  // Namibia: the visa is unconditional, the cruise fee only bites on a cruise day visit.
  namibia: [
    { label: 'Namibia tourist visa (US citizens)', kind: 'charge' },
    { label: 'Cruise day-visit fee (Walvis Bay and Luderitz)', kind: 'conditional' },
  ],

  // New Zealand charges twice at the border, and both are unconditional, which is exactly
  // the kind of stacking a single "visa fee" line would hide.
  'new-zealand': [
    { label: 'International Visitor Levy (IVL)', kind: 'charge' },
    { label: 'NZeTA (entry authorization)', kind: 'charge' },
  ],

  // ----- conditional: real, sourced, but only on some trips -----
  // Ecuador's mainland entry is free. The Galapagos is where the money is, and it is
  // cash at the gate, which is why it must never be averaged into a headline figure.
  ecuador: [
    { label: 'Galapagos National Park entrance fee', kind: 'conditional' },
    { label: 'Galapagos transit control card (INGALA)', kind: 'conditional' },
  ],

  // ----- named zeros: mandatory and explicitly free, or formally waived -----
  philippines: [{ label: 'eTravel registration', kind: 'zero' }],
  singapore: [{ label: 'SG Arrival Card (SGAC)', kind: 'zero' }],
  taiwan: [{ label: 'Taiwan Arrival Card (TWAC)', kind: 'zero' }],
  'sri-lanka': [{ label: 'Sri Lanka tourist ETA (30 days, US citizens)', kind: 'zero' }],
  'south-africa': [{ label: 'Electronic Travel Authorisation (ETA)', kind: 'zero' }],

  // South Korea: the free e-Arrival Card is a named zero now, and the K-ETA returns on
  // 1 January 2027. The keyFact carries that date, so the line dates itself.
  'south-korea': [
    { label: 'e-Arrival Card', kind: 'zero' },
    { label: 'K-ETA (entry authorization)', kind: 'zero' },
  ],

  // Georgia: visa-free is a genuine named zero; the insurance decree is a condition of
  // entry with no fee we can source, so it is named and never priced.
  georgia: [
    { label: 'Visa-free stay for US citizens', kind: 'zero' },
    { label: 'Mandatory travel insurance (Decree 602)', kind: 'requirement' },
  ],

  // ----- proposed: a watch-flag zero, never a charge -----
  thailand: [{ label: '300-baht air arrival fee', kind: 'proposed' }],
};

// Reads a country's own keyFacts and returns only the entry/border ones, each carrying the
// guide's own value, status, effective date, source and checked date, plus the kind from
// the index above. A country with no entry charges returns an empty array, and a label
// that no longer matches is dropped rather than guessed at.
export function entryChargesFor(country) {
  if (!country || !Array.isArray(country.keyFacts)) return [];
  const index = entryCharges[country.slug];
  if (!index) return [];
  const out = [];
  for (const entry of index) {
    const fact = country.keyFacts.find(k => k.label === entry.label);
    if (!fact) continue;   // the guide renamed or removed it: show nothing, flag nothing
    out.push({
      label: fact.label,
      value: fact.value,
      status: fact.status || null,
      effective: fact.effective || null,
      source: fact.source || null,
      checked: fact.checked || null,
      kind: entry.kind,
      // One-off per person, always. Stated on the object so a consumer cannot forget.
      unit: 'perPersonOneOff',
    });
  }
  return out;
}

// Just the ones that are genuinely a cost to a normal US trip. Deliberately excludes
// conditional, zero, requirement, exemption and proposed.
export const isBillable = (row) => row.kind === 'charge';

// The named zeros, for the "money you keep" reading. An explicit sourced zero only.
export const isNamedZero = (row) => row.kind === 'zero';
