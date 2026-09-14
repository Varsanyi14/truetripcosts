// BRIEF-bite1-money-owed-rights-page. The legal facts behind
// /money-your-airline-owes-you, one fact one home, read by the page itself AND by
// scripts/check-fact-staleness.mjs (see the pass named for this file there), so the two
// can never quietly drift apart on what was checked and when.
//
// These are REVIEW-DATED LEGAL FACTS, not one-time content. A hotel tax rate just needs a
// periodic recheck against a still-current law; these are the RULES themselves, and DOT
// enforcement posture or a new rulemaking can move inside a single quarter (see the
// enforcement-discretion note on significantChangeOther below). Cadence is quarterly,
// tighter than the site's general 180-day mark, per Gary's explicit call in the brief.
// See FLIGHT_LEGAL_CADENCE_DAYS.
//
// checkedISO: last verified against the primary source itself, not a summary of it.
// sourceUrl: the primary source for that specific fact.
//
// No dollar figures live here, by design. The rules rot; there is nothing priced to store.

export const FLIGHT_LEGAL_CADENCE_DAYS = 90; // quarterly review, not the 180-day general mark

const ECFR_PART_260 = 'https://www.ecfr.gov/current/title-14/chapter-II/subchapter-A/part-260';
const DOT_REFUNDS_PAGE = 'https://www.transportation.gov/individuals/aviation-consumer-protection/refunds';
const DOT_ENFORCEMENT_DISCRETION_NOTICE = 'https://www.federalregister.gov/documents/2025/12/05/2025-22140/airline-refunds-and-other-consumer-protections';
const DOT_ANCILLARY_DISCLOSURE_REPEAL = 'https://www.federalregister.gov/documents/2026/07/02/2026-13450/increasing-flexibility-on-disclosure-of-airline-ancillary-fees';

export const flightRefundRights = {
  // Situation 1, path A: a schedule move past a threshold.
  significantChangeSchedule: {
    label: 'Significant change, the schedule-move path',
    checkedISO: '2026-09-14',
    sourceUrl: ECFR_PART_260,
    departureDomesticHours: 3,
    departureInternationalHours: 6,
    arrivalDomesticHours: 3,
    arrivalInternationalHours: 6,
    note: 'One of two separate qualifying paths, not the only one. See significantChangeOther for the path that needs no schedule move at all.',
  },

  // Situation 1, path B: qualifies on its own, independent of any hour threshold. This is
  // the precision fix from the approved-mock build notes: the mock listed these as flat
  // bullets beside the schedule thresholds, which read as though they also needed 3 or 6
  // hours. They do not. Keep the two paths visually distinct on the page.
  significantChangeOther: {
    label: 'Significant change, the other-qualifying-change path',
    checkedISO: '2026-09-14',
    sourceUrl: ECFR_PART_260,
    changes: [
      'a different origin or destination airport',
      'an added connection',
      'a downgrade to a lower cabin',
      'certain aircraft or connection changes that reduce accessibility for a passenger with a disability',
    ],
    note: 'Qualifies on its own. None of these need to also clear the schedule thresholds above.',
  },

  refundTiming: {
    label: 'Refund timing clock',
    checkedISO: '2026-09-14',
    sourceUrl: ECFR_PART_260,
    cardBusinessDays: 7,
    otherCalendarDays: 20,
    note: 'The regulation itself says 20 CALENDAR days for a non-card refund. A DOT consumer-facing summary elsewhere mis-states this as business days; the page follows the regulation, not that summary.',
  },

  twentyFourHourRule: {
    label: '24-hour hold or refund rule',
    checkedISO: '2026-09-14',
    sourceUrl: DOT_REFUNDS_PAGE,
    minDaysBeforeDeparture: 7,
    note: 'Airline must offer EITHER a free 24-hour hold OR free cancellation within 24 hours of purchase, not both. Direct-airline bookings only: DOT confirms this does not extend to online travel agencies, travel agents, or other third-party agents.',
  },

  delayedBagFeeReturn: {
    label: 'Delayed-bag fee return thresholds',
    checkedISO: '2026-09-14',
    sourceUrl: ECFR_PART_260,
    domesticHours: 12,
    internationalShortSegmentHours: 15,
    internationalLongSegmentHours: 30,
    segmentSplitHours: 12,
    note: 'Returns the bag fee only, never the contents, and only after a filed mishandled-baggage report. The 15-hour mark applies when the nonstop US-international segment ran 12 hours or less; the 30-hour mark applies when that segment ran longer.',
  },

  // Standing watch item, not a right stated on the page. Kept here so the scanner
  // surfaces it on the same cadence as everything else, per the brief's instruction to
  // track "the status of the ancillary-fee disclosure rule" alongside the active facts.
  ancillaryFeeDisclosureRuleStatus: {
    label: 'Ancillary-fee disclosure rule, status watch',
    checkedISO: '2026-09-14',
    sourceUrl: DOT_ANCILLARY_DISCLOSURE_REPEAL,
    note: "Not an active right on this page. The 2024 upfront fee-disclosure rule was vacated by the Fifth Circuit and repealed by the July 2 2026 final rule; there is currently no federal requirement to show ancillary fees next to the fare. Flagged to monitor for any revised rule. A SEPARATE track from the refund rights above, which stand regardless of this rule's status.",
  },

  // Context for the page's "our own read" note, not a right in its own right. A narrow
  // DOT enforcement carve-out lets a flight-number-only change pass without triggering a
  // refund, as long as nothing about the itinerary itself significantly changes. Tracked
  // here so a change to its scope or expiry gets caught on the same quarterly pass,
  // rather than living only as prose the scanner cannot see.
  flightRenumberingEnforcementDiscretion: {
    label: 'Flight-renumbering enforcement discretion, status watch',
    checkedISO: '2026-09-14',
    sourceUrl: DOT_ENFORCEMENT_DISCRETION_NOTICE,
    expiresISO: '2027-07-07',
    note: 'Narrow and temporary: covers a flight-number-only change with no significant change or delay. Not a general suspension of the refund rule, and the page must never read as though it were. Extended by FR doc 2026-13675 for one year, expiring 2027-07-07; re-check status on or before that date (the pending Refund III rulemaking may make it permanent, let it lapse, or change its scope).',
  },
};
