// THE CARRIER SPINE: one home for the US carrier roaming facts that every connectivity
// spoke repeats, plus the list of figures we have already corrected and must never print
// again.
//
// WHY THIS EXISTS. The same half-dozen numbers appear in every staying-connected spoke:
// the day-pass rate, the AT&T fee cap, T-Mobile's included allowance by tier, the
// pay-per-use rate. At 40-plus spokes that is roughly 200 hand-typed instances of facts
// that change faster than anything else on this site except exchange rates. Three
// incidents in the space of one wave made the case for this file:
//   1. The 31 July 2026 correction. A flat "12 dollars a day" and a description of
//      T-Mobile's included roaming as slow 2G were both wrong, both in the direction that
//      flattered the eSIM we earn a commission on, and both had to be fixed by hand in 12
//      files. The hand fix left an artifact ("10 to 10 to 12 dollars") live in 7 of them
//      for three weeks.
//   2. August 2026. AT&T's own pages cap the Day Pass at 10 daily fees per bill period.
//      No spoke said so, which overstated roaming on any trip past 10 days, and japan
//      stated a two-week figure of 170 dollars that the cap makes wrong.
//   3. August 2026. Verizon has no equivalent cap, which is the more useful half of the
//      fact, and it needed adding to 23 files in one sweep.
// Every one of those was a fact drifting out of sync across many files with nothing
// watching. This file plus scripts/check-carrier-spine.mjs is the thing watching.
//
// WHAT THIS IS NOT. It is not a template and nothing here is interpolated into prose.
// The rail that makes verdict.js trustworthy is that prose is written and checked by a
// human, never assembled, and assembling these sentences would break it. (It would also
// repeat a real failure: the leaked identifier that broke the build on 18 August 2026 came
// from exactly that kind of string assembly.) So `canonical` below holds the figures as
// they are actually written in the spokes, and the checker asserts that no spoke states a
// day-pass figure the spine does not know about and that no retired figure has come back.
// A human still edits the prose. The checker just makes the drift loud.
//
// HOW TO USE IT WHEN A CARRIER MOVES A PRICE.
//   1. Update the figure here, move the old one into `retired` with a reason and a date.
//   2. Run `node scripts/check-carrier-spine.mjs`. Every spoke still carrying the old
//      figure now fails loudly, with the file list.
//   3. Fix the prose in those files by hand, re-run, and update `checkedISO`.
//
// REVIEW CADENCE. Carrier terms move faster than the 180-day general threshold in
// check-fact-staleness.mjs, so this file carries its own tighter `reviewDays` and its own
// checker reports when it is due. The 47-spoke connectivity wave means dozens of spokes
// share one review date, and the honest way to handle that is one review of this file
// rather than 47 pretend-independent ones.

export const carrierSpine = {
  checked: "Aug 2026",
  checkedISO: "2026-08-18",
  // Tighter than the 180-day general threshold on purpose. These are the fastest-moving
  // facts on the site after exchange rates.
  reviewDays: 90,

  // The figures as they are actually written in the spokes. `canonical` strings are what
  // the checker looks for and allows; anything close but different is reported.
  figures: [
    {
      id: "day-pass",
      label: "AT&T and Verizon day-pass rate, per line per day, on land",
      canonical: ["10 to 12 dollars a day", "$10 to $12 a day", "$10-12/day"],
      note: "AT&T's own page says $12 and third parties still list $10 for eligible plans, "
        + "so the honest figure is a range rather than a single number. Verizon's support "
        + "page says $12, and $6 for Mexico and Canada.",
      source: "https://www.att.com/international/day-pass/",
    },
    {
      id: "att-cap",
      label: "AT&T Day Pass fee cap, per line per bill period, land and air only",
      canonical: ["10 daily fees per line per bill period", "120 dollars"],
      note: "AT&T: you never pay more than 10 daily fees per line per bill period for land "
        + "or air travel, and you keep using the phone for the rest of that bill period at "
        + "no further daily charge. A trip straddling two bill periods can meet the cap "
        + "twice. This is the fact that makes straight daily multiplication wrong past day 10.",
      source: "https://www.att.com/support/article/wireless/KM1175103/",
    },
    {
      id: "verizon-no-cap",
      label: "Verizon TravelPass has no equivalent per-cycle cap",
      canonical: ["no equivalent cap"],
      note: "TravelPass keeps billing daily with no ceiling, so a three-week trip is roughly "
        + "252 dollars against about 120 on AT&T for the same days. The asymmetry is more "
        + "useful to a reader than the AT&T cap stated alone.",
      source: "https://www.verizon.com/support/travelpass-faqs/",
    },
    {
      id: "tmobile-tiers",
      label: "T-Mobile included high-speed roaming allowance by plan tier",
      canonical: ["5GB", "15GB", "30GB", "256kbps"],
      note: "5GB on Experience More, Magenta MAX and Go5G Plus. 15GB on Experience Beyond "
        + "and Go5G Next. 30GB on Better Value, which is a limited-time plan. Unlimited at "
        + "up to 256kbps after the allowance. Entry Essentials is throttled from the start. "
        + "Describing any of this as slow 2G is the error corrected on 31 July 2026.",
      source: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data",
    },
    {
      id: "pay-per-use",
      label: "Pay-per-use data rate with no plan active",
      canonical: ["2 dollars a megabyte"],
      note: "Verizon publishes $2.05/MB. Roughly 2 dollars a megabyte is the honest round "
        + "figure and it is thousands per gigabyte, which is where the horror-story bills "
        + "come from. Every spoke should tell a reader to turn data roaming off until "
        + "something is active.",
      source: "https://www.verizon.com/plans/international/international-travel/travel-pass/",
    },
    {
      id: "att-cruise",
      label: "AT&T Day Pass at sea",
      canonical: ["20 dollars"],
      note: "$20 per day per line for any day used at sea, covering ship and shore that "
        + "day, with data reduced to 512kbps after 500MB on some ships. Relevant to the "
        + "Caribbean spokes, where a cruise day is the real bill-shock risk.",
      source: "https://www.att.com/support/article/wireless/KM1175103/",
    },
    {
      id: "tmobile-calls",
      label: "T-Mobile roaming call rate",
      canonical: ["0.50"],
      note: "Rose from $0.25 to $0.50 a minute effective 25 June 2026. Not currently stated "
        + "in most spokes, which is fine: they are data pages. Recorded here so nobody "
        + "reintroduces the old figure.",
      source: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data",
    },
    {
      id: "att-covered",
      label: "AT&T Day Pass covered-destination footprint",
      canonical: ["210"],
      note: "210+ destinations. Verified on 18 August 2026 that every country in the "
        + "connectivity wave is on the list, including cambodia, laos, georgia, namibia and "
        + "el-salvador, which were the ones worth doubting. Greenland, the Faroes, Svalbard, "
        + "the Galapagos, Madeira and the Azores are listed as separate destinations: covered "
        + "for a US day pass, and still outside EU roaming and most regional eSIM plans.",
      source: "https://www.att.com/support/article/wireless/KM1395068/",
    },
  ],

  // Figures we have already corrected. The checker FAILS if any of these reappears in
  // reader-facing prose, which is the mechanism that would have caught both the 31 July
  // artifact and the japan two-week figure before they shipped.
  //
  // Scope note that matters: these patterns are deliberately NOT checked inside
  // sources.judgment, because that is where the desk documents what it got wrong and
  // quoting the retired figure there is the point.
  retired: [
    {
      pattern: "10 to 10 to 12",
      why: "Find-and-replace artifact from the 31 July 2026 correction sweep. Rendered as "
        + "visible nonsense in an FAQ answer in 7 spokes for about three weeks.",
      correctedISO: "2026-08-18",
    },
    {
      pattern: "approaches 170",
      why: "japan's pre-cap two-week roaming figure. AT&T's 10-fee cap makes a two-week "
        + "trip nearer 120 dollars, so this overstated roaming in the direction that "
        + "flatters the product we earn on.",
      correctedISO: "2026-08-18",
    },
    {
      pattern: "slow 2G",
      why: "T-Mobile's included roaming was described as slow 2G that could not handle "
        + "maps. Its own pages list a real high-speed allowance by tier. Corrected 31 July "
        + "2026.",
      correctedISO: "2026-07-31",
    },
    {
      pattern: "long trips people take here make the gap bigger",
      why: "australia's claim that the roaming gap grows with trip length. Past day 10 on "
        + "AT&T it stops growing, because of the fee cap.",
      correctedISO: "2026-08-18",
    },
    {
      pattern: "0\\.25 a minute",
      why: "T-Mobile roaming calls rose to $0.50 a minute on 25 June 2026.",
      correctedISO: "2026-08-18",
    },
    {
      pattern: "AT&T Passport",
      why: "Discontinued: its page now redirects to the Day Pass. Medium confidence, single "
        + "source, so this is retired rather than restated. Do not present it as an option "
        + "for long trips.",
      correctedISO: "2026-08-18",
    },
  ],

  // Open questions the desk has NOT closed. The checker prints these on every run, the way
  // check-fact-staleness surfaces hero-fact flags, so an unresolved question stays visible
  // instead of being quietly forgotten between waves.
  unverified: [
    "Verizon Unlimited Ultimate includes international data outright, and some Verizon "
      + "plans carry a 3 TravelPass Days per bill cycle perk. Both are you-may-already-be-"
      + "covered facts of the same kind as the Canada and Mexico framing, and neither is "
      + "stated anywhere on the site yet.",
    "Whether any existing spoke's section prose still carries a softer version of the "
      + "pre-cap roaming overstatement, beyond the two sentences corrected on 18 August "
      + "2026. Needs a human reading pass, not a pattern match.",
    "Whether Verizon applies any per-cycle ceiling on prepaid TravelPass specifically. The "
      + "postpaid position (no cap) is confirmed; prepaid was not checked separately.",
  ],
};

export default carrierSpine;
