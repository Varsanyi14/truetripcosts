// Is a rail pass worth it? One honest verdict per country, for US travelers.
// TTC Desk research compilation, checked Aug 2026.
//
// WHY THIS CHARTS A DECISION AND NOT A PRICE. The obvious version of this page is a
// per-country rail-pass price chart. It cannot be built honestly. What rail costs you
// depends entirely on your specific route, so any single figure per country would be
// invented, which is the same reason the seasonal price chart was rejected sitewide
// (see the transparency block on /when-to-go). What IS honestly comparable is the
// decision: given a normal trip, does buying a pass beat buying tickets? That is a
// real categorical attribute, it exists for every country, and it is the thing the
// reader actually needs. So the verdict is the data and there are no prices here.
//
// ADDING A COUNTRY is a pure data change: append a row below, and make sure that
// country has a live `rail` spoke to link to. Nothing in rail-passes.astro needs
// touching. Keep rows to countries where we have done the work; an absent country is
// the safe default, exactly as with money-rules.js.
//
// REVIEW CADENCE: Tier 2, quarterly. Rail pricing and pass rules move faster than
// most of what we cover. The near-term item on the clock: the nationwide Japan Rail
// Pass rises on 1 October 2026 through overseas agencies while the official site
// holds the earlier price for an unpublished period, so the Japan row and the Japan
// rail spoke both want a look immediately after that date. When it lands, that is
// also a real money change, so set `costUpdate` in src/data/japan.js then, not now.
//
// House style: no em or en dashes, and "US" never the periods form. A gate enforces
// both (scripts/check-content.py).

export const railPassesChecked = '2026-08-11';

// The four verdict tiers. `rank` orders them from "the pass is the right buy" down to
// "rail is not the question here", which is the axis the legend reads along. Only the
// tiers actually used by a row are rendered, so `not-rail` is defined and dormant
// until a country needs it (a US-style driving country, or somewhere the intercity
// network genuinely is not how visitors move).
export const TIERS = [
  {
    key: 'worth',
    rank: 3,
    label: 'Usually worth a pass',
    short: 'Pass usually wins',
    gloss: 'On a normal trip here, the pass beats buying tickets for most itineraries.',
  },
  {
    key: 'depends',
    rank: 2,
    label: 'Depends on your route',
    short: 'Do the math',
    gloss: 'Genuinely balanced. A wide itinerary can justify a pass and a narrow one cannot, so this is a case where you have to price your own legs.',
  },
  {
    key: 'point-to-point',
    rank: 1,
    label: 'Usually cheaper point-to-point',
    short: 'Buy tickets',
    gloss: 'Buying individual tickets, ideally in advance and direct from the operator, normally costs less than a pass.',
  },
  {
    key: 'not-rail',
    rank: 0,
    label: 'Rail is not how you would get around',
    short: 'Not a rail trip',
    gloss: 'The intercity network is not the realistic way to cover this country, so the pass question does not arise.',
  },
];

// Confidence in each verdict, matching the vocabulary used by src/data/tipping.js and
// src/data/seasons.js: high, medium, low. This rates how firmly the VERDICT is
// supported, not how precise a number is, since there are no numbers here.
export const CONF_TITLE = {
  high: 'Verdict rests on published operator rules and pricing',
  medium: 'Verdict is clear in outline, with some of the math inferred',
  low: 'Too route-dependent or too poorly documented to state firmly',
};

export const railPasses = [
  {
    country: 'Japan',
    slug: 'japan',
    region: 'Asia',
    tier: 'depends',
    passType: 'Nationwide pass, plus regional passes',
    confidence: 'high',
    reason:
      'The nationwide pass only clears its own price across a wide Shinkansen spread. On a two-city trip, tickets or a regional pass cost less.',
    railSpoke: '/japan/rail',
  },
  {
    country: 'Italy',
    slug: 'italy',
    region: 'Europe',
    tier: 'point-to-point',
    passType: 'None worth buying',
    confidence: 'high',
    reason:
      'A pass excludes Italo, one of the two competing fast operators, and still charges a compulsory seat reservation on every Frecce leg.',
    railSpoke: '/italy/rail',
  },
  {
    country: 'Switzerland',
    slug: 'switzerland',
    region: 'Europe',
    tier: 'worth',
    passType: 'Swiss Travel Pass, or the Half Fare Card',
    confidence: 'medium',
    reason:
      'Point-to-point fares are high enough that a touring trip clears the pass price. On fewer moving days the cheaper Half Fare Card beats it.',
    railSpoke: '/switzerland/rail',
  },
  {
    country: 'Germany',
    slug: 'germany',
    region: 'Europe',
    tier: 'depends',
    passType: 'German Rail Pass, plus the regional Deutschland-Ticket',
    confidence: 'high',
    reason:
      'Seat reservations are optional here, so a pass is cheap to use. Advance saver fares still win on a fixed itinerary, and the flat regional ticket excludes fast trains.',
    railSpoke: '/germany/rail',
  },
  {
    country: 'France',
    slug: 'france',
    region: 'Europe',
    tier: 'point-to-point',
    passType: 'None worth buying',
    confidence: 'high',
    reason:
      'Every fast train charges a passholder a compulsory reservation fee from a small quota, while advance fares booked direct undercut the pass outright.',
    railSpoke: '/france/rail',
  },
  {
    country: 'Spain',
    slug: 'spain',
    region: 'Europe',
    tier: 'point-to-point',
    passType: 'None worth buying',
    confidence: 'high',
    reason:
      'Four operators compete on the fast corridors and a pass covers only the national one, so it removes the competition that made those fares cheap.',
    railSpoke: '/spain/rail',
  },
  {
    country: 'United Kingdom',
    slug: 'united-kingdom',
    region: 'Europe',
    tier: 'point-to-point',
    passType: 'A Railcard, not a pass',
    confidence: 'high',
    reason:
      'The gap between advance and walk-up fares is enormous, and a pass prices out near the flexible fare. A discount Railcard is the better buy.',
    railSpoke: '/united-kingdom/rail',
  },
  {
    country: 'Netherlands',
    slug: 'netherlands',
    region: 'Europe',
    tier: 'point-to-point',
    passType: 'None worth buying',
    confidence: 'high',
    reason:
      'Short distances, low fares, no domestic seat reservations and turn-up-and-go frequency leave a pass with no inefficiency to fix.',
    railSpoke: '/netherlands/rail',
  },
];
