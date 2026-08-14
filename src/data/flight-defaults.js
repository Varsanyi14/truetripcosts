// ROUGH FLIGHT PLACEHOLDERS, for the 45 guides with no tracked `flight{}` range.
//
// THE PROBLEM THIS SOLVES. The flight field used to ship blank wherever we hold no tracked
// fare, so "Getting there" read $0 and the TTC-ed card could go out looking as though the
// country's total already included getting there. A $0 flight leg is a worse lie than a
// labelled rough number: it reads as a fact ("no flight cost") rather than as a gap.
//
// SO THIS IS A PLACEHOLDER, AND IT MUST NEVER READ AS ANYTHING ELSE. Everything downstream
// depends on that distinction being visible:
//   - a guide WITH `flight{}` prefills from its own tracked, dated range and is labelled as
//     a figure we track
//   - a guide WITHOUT one prefills from here and is labelled a rough placeholder to change,
//     in the field hint, on the hero note, and inside the Getting there section
// If a reader cannot tell which of those two they are looking at, this file has failed.
//
// WHERE THE NUMBERS COME FROM, which is the only reason they are defensible at all. They are
// not researched fares and they are not guesses pulled from the air: each one is the rounded
// average of the midpoints of TTC's OWN tracked ranges for that region. So Europe's
// placeholder is what the six European guides we do track actually average, rounded hard to
// the nearest 50 so it reads as approximate rather than computed.
//
//   Americas   3 tracked guides (Mexico, Ecuador, Aruba)                  average 600
//   Asia       5 tracked guides (Vietnam, Japan, Thailand, China, PH)     average 1095
//   Europe     6 tracked guides (Italy, France, Spain, Portugal, UK, GE)  average 846
//
// THE HONEST WEAKNESS, stated here rather than buried. Three regions have NO tracked fare at
// all, so their placeholder cannot be region-derived and falls back to the average across all
// 14 tracked guides:
//
//   Africa        3 guides   no regional anchor
//   Middle East   8 guides   no regional anchor
//   Oceania       2 guides   no regional anchor, and almost certainly UNDERSTATED, because
//                            Australia and New Zealand are the longest hauls on the site and
//                            the all-region average is pulled down by short-haul Americas
//
// Those 13 guides get a number that rests on nothing specific to them. It is still better
// than $0, because it is labelled as rough and the traveler is told to change it, but the
// real fix is tracked `flight{}` data for those regions, which is a sourcing job for the
// desk and not something this file can invent. Flagged to MAIN.
//
// Rounded to the nearest 50 deliberately. A placeholder of 846 would imply a precision that
// does not exist; 850 reads as the estimate it is.

// Region to rough placeholder, in USD, round trip per traveler.
export const flightPlaceholders = {
  Americas: 600,
  Asia: 1100,
  Europe: 850,
};

// Used where a region has no tracked fare of its own. The average across all 14 tracked
// guides, rounded the same way.
export const FLIGHT_PLACEHOLDER_FALLBACK = 900;

// Regions with no tracked fare, so their placeholder is the all-region fallback rather than
// anything specific to them. Exported so a page or a check can say so out loud.
export const REGIONS_WITHOUT_TRACKED_FARES = ['Africa', 'Middle East', 'Oceania'];

// Returns null where the guide has its own tracked range, because there is nothing to
// placeholder: the real figure wins and is labelled as tracked. Otherwise returns the rough
// number plus whether it is region-derived, so the UI can be honest about which it is.
export function flightPlaceholderFor(country) {
  if (!country || country.flight) return null;
  const region = country.region || '';
  const regional = flightPlaceholders[region];
  return {
    usd: regional || FLIGHT_PLACEHOLDER_FALLBACK,
    // false means "not even region-derived", which is the weakest case and the one the desk
    // should fix with real data.
    regionDerived: !!regional,
    region,
  };
}
