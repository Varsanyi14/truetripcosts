// BRIEF-bite4-booking-myths-page. The dated, volatile facts stated on
// /what-actually-makes-a-flight-cheaper, one fact one home, read by the page itself AND by
// scripts/check-fact-staleness.mjs (see the twelfth pass, named for this file, there), so the
// two can never quietly drift apart on what was checked and when.
//
// TWO SPECIES OF FACT IN THIS FILE, aged on two different clocks.
//
// bookingDayStudies and advanceWindowStudies are DATED HISTORICAL CONTEXT: what four named
// providers each published, and when. These are never printed as "book on this day" or "book
// this many days ahead" instruction; the page states them comparatively, as a field that
// disagrees with itself, which is the actual finding. Each provider re-runs its own study on
// its own annual schedule, so the right cadence is ~yearly per study, checked against that
// provider's own next release rather than a fixed calendar date.
//
// personalizedPricing is the FASTEST-ROTTING content in the whole flights domain, tighter than
// Bite 1's quarterly legal mark: an active regulatory proposal, an open congressional inquiry,
// pending litigation, and three live commercial deployments, all still moving as of this
// writing. reviewDays reflects that. The two scrutiny tracks (the FTC's general, proposed,
// airline-exempt action vs. the Pallone/JetBlue allegations) are kept as SEPARATE fields on
// purpose: collapsing them into one blob is exactly the mistake the page's own callout warns
// against, and a data shape that kept them apart from the start makes that mistake harder to
// reintroduce later.
//
// mistakeFarePolicy is a different species again, a standing DOT enforcement policy rather
// than a priced or contested fact: it moves only if DOT issues a superseding rule, so it sits
// on the site's general 180-day mark, its own entry below with its own reviewDays, the same
// way flight-fee-mechanics.js gives its slowest-moving fact (the CFPB citation) the general
// mark rather than inventing a new cadence for one fact.
//
// checkedISO: last verified against the primary source itself, not a summary of it.
// sourceUrl: the primary source for that specific fact.

export const flightBookingMyths = {
  bookingDayStudies: {
    label: 'Best day to book, three studies disagreeing',
    checkedISO: '2026-09-14',
    reviewDays: 365, // yearly: recheck when each provider posts its next annual edition
    note: 'Presented comparatively, as a field that disagrees with itself. Never state a single current "cheapest day" as instruction; the disagreement across providers, and its year-over-year drift, is the actual finding.',
    google: {
      label: 'Google, 2025 holiday travel trends',
      checkedISO: '2026-09-14',
      sourceUrl: 'https://blog.google/products-and-platforms/products/search/holiday-travel-trends-2025/',
      publishedISO: '2025-09-09',
      cheapestDay: 'Tuesday',
      vsDay: 'Sunday',
      pctCheaper: 1.3,
      methodology: 'Average round-trip fares observed Jan 1 2021 through Aug 1 2025, US-departure markets.',
    },
    expedia: {
      label: 'Expedia, 2026 Air Hacks Report',
      checkedISO: '2026-09-14',
      sourceUrl: 'https://www.expedia.com/newsroom/expedia-2026-air-hacks/',
      publishedISO: '2026-02-17',
      cheapestDay: 'Friday',
      vsDay: 'Sunday',
      pctCheaper: 3,
      note: 'Its tenth annual edition, and a change from the day it favored the prior year, itself evidence the "winning" day is not stable.',
    },
    kayak: {
      label: 'KAYAK, current-year search data',
      checkedISO: '2026-09-14',
      sourceUrl: 'https://www.kayak.com/news/when-are-flights-cheapest/',
      publishedISO: '2026-03-26',
      cheapestDay: 'a day distinct from either Google\u2019s or Expedia\u2019s pick',
      note: 'No day showed a consistent edge across the routes tested; stated qualitatively rather than with a specific percentage, since the source itself frames it that way.',
    },
  },

  advanceWindowStudies: {
    label: 'Advance-booking window, shape not a number',
    checkedISO: '2026-09-14',
    reviewDays: 365, // yearly: recheck when each provider posts its next annual edition
    note: 'The shape (a mid-range window, not the day inventory opens, not the final week) is the real finding. The specific day count is provider-specific and never pooled into one reconciled optimum.',
    google: {
      sourceUrl: 'https://blog.google/products-and-platforms/products/search/holiday-travel-trends-2025/',
      domesticDays: 39,
      domesticRange: '23-51',
      internationalDaysMin: 49,
      internationalNote: '49 days or more; Google states no upper bound for international.',
    },
    expedia: {
      sourceUrl: 'https://www.expedia.com/newsroom/expedia-2026-air-hacks/',
      domesticRange: '15-30',
      note: 'Its own international advance-savings dollar figure does not reconcile against its stated total (its appendix implies two different totals depending on whether the stated figure or the subtraction is used), so no dollar figure from Expedia\u2019s international study is printed on the page. Domestic day-range only.',
    },
    kayak: {
      sourceUrl: 'https://www.kayak.com/news/how-to-get-cheap-last-minute-flights/',
      domesticRange: '21-30',
    },
    cheapair: {
      sourceUrl: 'https://www.cheapair.com/blog/the-best-time-to-buy-flights/',
      domesticRange: '28-35',
      note: 'CheapAir\u2019s own annual figure has moved year to year (its most recent single-day average landed outside this range); re-verify against its current-year post at each recheck rather than treating 28-35 as fixed.',
    },
  },

  personalizedPricing: {
    label: 'AI-driven fare pricing and the Washington scrutiny around it',
    checkedISO: '2026-09-14',
    reviewDays: 90, // quarterly at minimum; also re-check immediately on any FTC, DOT, or deployment news
    note: 'The fastest-rotting content on the site. Keep the two scrutiny tracks below separate: collapsing the FTC action into the Pallone/JetBlue allegations, or vice versa, is the specific error this page exists to correct.',

    deployments: {
      deltaFetcherr: {
        label: 'Delta / Fetcherr',
        checkedISO: '2026-09-14',
        sourceUrl: 'https://news.delta.com/delta-responds-misinformation-around-ai-pricing',
        startedISO: '2024-11-01',
        note: 'AI-assisted dynamic pricing pilot, expanding through 2025. Delta has stated on the record that it has never used, tested, or planned a fare product that targets individual customers based on personal information; stated as Delta\u2019s own claim, not independently verified.',
      },
      prosLufthansa: {
        label: 'PROS / Lufthansa Group',
        checkedISO: '2026-09-14',
        sourceUrl: 'https://pros.com/news/lufthansa-group-extend-strategic-partnership/',
        announcedISO: '2026-01-21',
        note: 'Renewed and expanded partnership across revenue management, real-time dynamic pricing, continuous pricing, and ancillary pricing.',
      },
      amadeusSAS: {
        label: 'Amadeus / SAS',
        checkedISO: '2026-09-14',
        sourceUrl: 'https://amadeus.com/en/newsroom/press-releases/sas-ai-pricing-optimization-amadeus-aapo',
        announcedISO: '2026-07-20',
        note: 'Amadeus Air Pricing Optimization deployed across SAS\u2019s full network; Amadeus reports a vendor-provided 3%+ revenue increase in initial markets, not independently audited.',
      },
    },

    scrutiny: {
      pallonAndJetBlue: {
        label: 'Pallone congressional inquiry and JetBlue class actions',
        checkedISO: '2026-09-14',
        sourceUrl: 'https://pallone.house.gov/media/press-releases/pallone-presses-us-airlines-answers-surveillance-pricing',
        lettersSentISO: '2026-08-11',
        airlines: ['Alaska', 'American', 'Delta', 'Frontier', 'Hawaiian', 'JetBlue', 'Southwest', 'United'],
        status: 'allegation',
        note: 'Letters from the House Energy and Commerce Committee\u2019s ranking member, and a pending JetBlue class action alleging "surveillance pricing." Both are allegations under active process; neither is a governmental or judicial finding that any airline prices individual travelers off personal data.',
      },
      ftcProposal: {
        label: 'FTC proposed personalized-pricing enforcement statement',
        checkedISO: '2026-09-14',
        sourceUrl: 'https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-seeks-comment-enforcement-policy-statement-regarding-personalized-pricing',
        secondarySourceUrl: 'https://www.ftc.gov/news-events/news/press-releases/2026/09/ftc-extends-public-comment-proposed-policy-statement-regarding-personalized-pricing',
        proposedISO: '2026-08-19',
        commentDeadlineISO: '2026-09-25',
        status: 'proposal, not a final rule',
        scope: 'general; retail and grocery pricing practices are its stated focus',
        airlineCarveOut: {
          statute: 'FTC Act Section 5(a)(2)',
          note: 'Air carriers sit outside the FTC\u2019s Section 5 jurisdiction entirely, a structural exemption that predates this proposal by decades. The proposal does not newly regulate airlines. This is the load-bearing correction on the page: never present the FTC action as an airline crackdown.',
          analysisUrl: 'https://www.sidley.com/en/insights/newsupdates/2026/09/personalized-pricing-the-ftcs-newest-enforcement-priority',
        },
      },
    },
  },

  mistakeFarePolicy: {
    label: 'DOT Mistaken Fare Policy Statement (2015)',
    checkedISO: '2026-09-14',
    reviewDays: 180, // general mark: a standing enforcement policy, moves only on a superseding DOT rule
    sourceUrl: 'https://www.transportation.gov/sites/dot.gov/files/docs/Mistaken_Fare_Policy_Statement_05082015.pdf',
    issuedISO: '2015-05-08',
    conditions: [
      'the carrier demonstrates the fare was a genuine mistake',
      'the carrier refunds the ticket price and reimburses reasonable, verifiable, out-of-pocket costs incurred in reliance on the booking',
    ],
    note: 'Still the operative enforcement guidance, no superseding rule since. A prosecutorial-discretion policy, not a change to the underlying post-purchase price increase rule (14 CFR 399.88) itself. Conditions apply in both directions: not a blank check for an airline to void any fare it regrets, and not an automatic guarantee for a traveler either.',
  },

  cookieIncognitoTest: {
    label: 'Consumer Reports, 2016 cookie/incognito fare test',
    checkedISO: '2026-09-14',
    reviewDays: 730, // slow: a historical, one-time test, not a live figure; revisit if a comparable modern audit is ever published
    sourceUrl: 'https://www.consumerreports.org/airline-travel/how-to-get-the-lowest-airfares',
    testYear: 2016,
    searchCount: 372,
    siteCount: 9,
    note: 'The two browser versions (cookies intact vs. freshly scrubbed) came back identical the large majority of the time; where they differed, the scrubbed browser was not reliably cheaper. Historical evidence against the cookie-clearing claim specifically, stated as a 2016 test, never as a current audit.',
  },
};
