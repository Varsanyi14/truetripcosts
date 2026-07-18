// COUNTRY DATA TEMPLATE  (reference only, not imported anywhere)
// ---------------------------------------------------------------------------
// This file is a starting point and a checklist. It is NOT wired into the site:
// src/data/index.js imports each country explicitly, so nothing here renders.
// Copy the parts you need into a real country file.
//
// It exists to make two things routine:
//   1. A `sources` block on every guide. The expandable panel titled
//      "Sources, and how this guide was checked" renders automatically whenever
//      a country has a `sources` object. No component change is needed per guide.
//   2. Single source of truth for correction-prone facts, so fixing a number in
//      one place updates every sentence that uses it (see the `F` object below).
//
// The fullest real examples to copy from are src/data/ireland.js and
// src/data/united-kingdom.js. See AUTHORING-GUIDES.md for the how and the why.
//
// House rules that apply here too:
//   - No em dashes and no en dashes anywhere, in copy or in code. Hyphens only.
//   - Never claim the site is "unbiased", or any absolute you cannot prove.
//   - Commission labels come from data, never hand-typed.
//   - Never edit or import src/data/links.js.
// ---------------------------------------------------------------------------

// SINGLE SOURCE OF TRUTH.
// Put every fact that (a) appears in more than one sentence, or (b) is the kind
// of number that gets corrected later (rates, fees, dates, entry rules) into
// this one object, then interpolate it into the prose below with `${F.key}`.
// Fix it here and every sentence that uses it updates together. This is what
// stops a corrected fact from leaving a stale twin elsewhere (the M50 toll bug,
// where the same fact lived as loose prose in three places).
//
// The site already works this way for the emergency number (interpolated from
// `emergency.medical`), the tourist tax (the `tax` object, read by the
// calculator), and the foreign-fee default (fallbackFxPct in cards.js). Extend
// the same habit to the facts that still live only in prose.
const F = {
  currency: "the euro",                 // e.g. `Always pay in ${F.currency}.`
  fxNote: "about 1.10 dollars to 1 euro in 2026",
  vatRate: "20%",
  // Example of a fact that previously drifted because it was typed several times:
  tollLateFee: "about 4 euros",         // used in the toll warning AND the FAQ below
};

export default {
  // ---- identity ----
  slug: "country-slug",        // lowercase, matches the file name and the URL
  live: true,                  // false keeps it out of the index until it is ready
  name: "Country Name",
  from: "United States",
  checked: "Jul 2026",         // human-readable, shown on the guide and in `sources`
  checkedISO: "2026-07-03",    // machine date, YYYY-MM-DD

  // ---- SOURCES: renders the "Sources, and how this guide was checked" panel ----
  // Verify each high-stakes claim on the PRIMARY official source (government,
  // card issuer, city or tax authority), never an affiliate blog. Then fill:
  sources: {
    // A real one or two line change log for this check, not filler. If you
    // corrected something, say what it was, in plain language.
    changed: "Sources added. Confirmed [the highest-stakes claims] against the official pages below.",
    // Two to four official links. Label each so a reader knows what it backs.
    // Each link needs a "type", which picks its icon. Use one of:
    //   revenue (tax/VAT authority), gov (government, city, customs, immigration),
    //   tourism (official tourism board), police (police or emergency service),
    //   currency (central bank), card (card issuer or ATM), media (news outlet),
    //   guide (third-party travel guide or explainer).
    links: [
      { label: "Official source: what this link confirms", url: "https://example.gov/page", type: "gov" },
      { label: "City or tax authority: the charge it confirms", url: "https://example.gov/tax", type: "revenue" },
    ],
    // Name what is our estimate rather than an official figure. Keep it honest.
    judgment: "The daily cash share, tipping habits, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },

  // ---- emergency: already single-source, the number is interpolated in prose ----
  emergency: { medical: "112", note: "112 reaches police, ambulance and fire from any phone.", checked: "Jul 2026", checkedISO: "2026-07-03" },

  // ---- expose the facts object so the shape stays consistent across guides ----
  facts: F,

  // ---- keyFacts: OPTIONAL. Only for the high-churn fees and taxes that move on
  //      political timelines (arrival fees, city accommodation levies, ETA-style
  //      entry fees). Everyday, stable facts belong in `facts`/`F` above, not here.
  //      Each item tracks its own status so the honest stamp lives with the fact:
  //        label     short name of the fee or tax
  //        value     the amount, in plain words ("5% of the net room price")
  //        status    "enacted" once passed or in force, "proposed" while still a plan
  //        effective ISO date it takes (or took) effect, or null. A future date
  //                  renders as "upcoming"; a past date renders as "in effect".
  //        source    primary-source URL, or null when there is no clean official page
  //        checked   ISO date you last verified this specific line
  //      Rendered as a small always-open card after the tax-free section. Omit the
  //      key entirely when a country has nothing volatile to track. Example:
  // keyFacts: [
  //   { label: "City accommodation tax", value: "5% of the net room price", status: "enacted", effective: "2026-07-01", source: "https://example.gov/tax", checked: "2026-07-10" },
  // ],

  // ---- The rest of the shape (verdict, cards and meter, connectivity,
  //      insurance, tax, currency block, tipping, faq, notes, hero, art) follows
  //      the existing guides. Copy src/data/ireland.js as the fullest example and
  //      replace its content. The `tax` object and the interpolation pattern are
  //      shown below so corrections propagate. ----

  // The tourist-tax block the calculator reads. Its rate, cap and unit drive the
  // calculator AND should drive whatever you write in prose about the tax, so the
  // two never disagree. Use null when there is no nightly tax. See ireland.js.
  // OPTIONAL flight estimate. A verified typical economy round-trip RANGE per
  // person from major US gateways, from fare-tracker averages, date-stamped.
  // Omit the whole line until verified: the calculator then shows an empty
  // flight field and only counts flights the traveler enters themselves.
  // flight: { low: 550, high: 1200, checked: "Jul 2026", checkedISO: "2026-07-18" },
  tax: null,

  // Example prose that REFERENCES the facts above instead of re-typing them, so a
  // correction in `F` reaches every one of these at once:
  notes: [
    `Always pay in ${F.currency}, never in dollars, to skip the conversion markup.`,
    `Pay any road toll on time. Miss the deadline and the late fee is ${F.tollLateFee}, climbing if it stays unpaid.`,
  ],
  faq: [
    { q: "A question that repeats the toll fact?", a: `One source, no drift: the late fee is ${F.tollLateFee}.` },
  ],
};
