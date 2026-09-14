// BRIEF-bite2-flight-mechanics-page. The durable facts stated outright on
// /airline-fees-what-your-fare-doesnt-include, one fact one home, read by the page itself
// AND by scripts/check-fact-staleness.mjs (see the pass named for this file there), so the
// two can never quietly drift apart on what was checked and when.
//
// Only THREE facts live here, on purpose. Every dollar amount for an actual bag, seat, or
// change fee is deliberately absent: those vary by carrier, route, and season and rot within
// a season, so the page links out to the carrier instead of storing them (see the brief's
// "no stored fee tables" rule). What is stored here is narrower and more durable: a Senate
// investigative finding, one airline's own announced policy change, and a federal
// regulation's own definition. None of the three is a price a reader would shop against.
//
// PER-FACT CADENCE, not one shared number. Unlike flight-refund-rights.js (Bite 1), where
// every fact is the same species (a live DOT regulation, uniformly quarterly), these three
// facts age at different rates:
//   - bagBounty is a historical investigative finding. The underlying event will not change,
//     but whether the PROGRAM is still running can, so it gets re-confirmed yearly rather than
//     treated as permanently settled.
//   - southwestBasicFareChange is live carrier policy, freshly effective and the most likely
//     of the three to be revised, so it gets the tighter quarterly mark, matching Bite 1's
//     cadence for live rules.
//   - cfpbForeignTransactionFee cites a standing federal regulation's own definition. Slower
//     than either of the above, so it sits on the site's general 180-day mark rather than
//     inventing a fourth cadence.
// See reviewDays on each entry below; the scanner reads that field per fact rather than one
// constant for the whole file.
//
// checkedISO: last verified against the primary source itself, not a summary of it.
// sourceUrl: the primary source for that specific fact.

export const flightFeeMechanics = {
  bagBounty: {
    label: 'Gate-agent bag-fee incentive finding (Frontier and Spirit)',
    checkedISO: '2026-09-14',
    reviewDays: 365, // yearly: historical finding, but confirm the program's still-running status
    sourceUrl: 'https://www.blumenthal.senate.gov/newsroom/press/release/senate-permanent-subcommittee-on-investigations-releases-majority-staff-report-slamming-sky-high-airline-junk-fees',
    secondarySourceUrl: 'https://www.hsgac.senate.gov/wp-content/uploads/2024-12-4-Blumenthal-Letter-to-Secretary-Buttigieg.pdf',
    totalAmountUSD: 26000000,
    years: '2022-2023',
    carriers: ['Frontier', 'Spirit'],
    frontierPerBagUSD: 10,
    frontierShareOfTotalUSD: 18800000, // MAIN's cross-check figure; not currently rendered on the page, kept for reference
    note: 'Two named ultra-low-cost carriers, not airlines generally. Both denied the incentive programs led to abuse. State as the documented Senate Permanent Subcommittee on Investigations finding it is, never generalized to "airlines."',
  },

  southwestBasicFareChange: {
    label: 'Southwest Basic fare and assigned seating change',
    checkedISO: '2026-09-14',
    reviewDays: 90, // quarterly: recent, live carrier policy, most likely of the three to move
    sourceUrl: 'https://www.southwest.com/customer-enhancements/assigned-seating/',
    effectiveISO: '2026-01-27',
    nonrefundable: true,
    nonChangeable: true,
    changeableExceptionHours: 24, // free cancellation within this window of booking
    seatAssignedAt: 'check-in',
    note: 'Ended over fifty years of open seating and free-bags-for-all branding. The point on the page is the convergence (a fully restricted cheapest fare is now close to universal), not Southwest specifically.',
  },

  cfpbForeignTransactionFee: {
    label: 'Foreign transaction fee definition (Regulation Z)',
    checkedISO: '2026-09-14',
    reviewDays: 180, // general mark: a standing regulatory definition, slower to move than either fact above
    sourceUrl: 'https://www.consumerfinance.gov/rules-policy/regulations/1026/4/',
    note: "The fee attaches to a transaction with a foreign merchant or in a foreign currency, not to whatever currency the receipt shows. Paying in US dollars does not exempt a purchase from it. Correction only; no savings percentage is published, since the real-world cost depends entirely on the card's own terms.",
  },
};
