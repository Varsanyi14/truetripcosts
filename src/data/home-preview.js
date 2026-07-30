// Homepage sample-preview data: the six short facts the rotating card on the homepage
// shows for each featured country.
//
// WHY THIS FILE EXISTS. The country files already hold this knowledge, but as prose:
// `facts` entries are full sentences, `verdict` is a paragraph, and the cash and tipping
// spokes are pages. None of that fits a six-cell teaser card, and auto-extracting from it
// produces mush. So these values are authored (curated) by the desk, compressed by hand
// from the same guide the card links to.
//
// HOUSE RULES FOR EDITING.
//  1. Every value must be TRUE and traceable to that country's own guide. Each entry
//     below carries a `source` note naming where the answer came from, so the next editor
//     can re-check it instead of trusting it. If you cannot state a country's real answer
//     for all six slots with confidence, do not feature the country.
//  2. Two to four words per value. The nuance lives in the full guide; this is the teaser.
//  3. `checked` mirrors the country's own `checked` label. Never invent a date. When a
//     country guide is re-checked, update it here too, or the pill will lie.
//  4. `slug` must match a live country slug. It does double duty: the card links to
//     /<slug>, and the flag is read from public/flags/<slug>.svg. There is deliberately
//     NO flag field here. Flag emoji were tried and pulled: Windows renders a
//     regional-indicator pair as the letters (JP, DE) instead of a flag, so a large share
//     of desktop visitors never saw a flag at all.
//  5. `watchOut` is the single amber fact. The other five render teal.
//
// Order is the rotation order. EIGHT is a deliberate cap, not an accident: the footer row
// holds one dot per country beside the guide link, and past eight the dots no longer fit
// on that row at accessible tap sizes. If you add a ninth, the footer wraps.
//
// The set is deliberately mixed, so a visitor sees the real range rather than eight
// variations on one answer: card-first Europe (France, United Kingdom) against cash-first
// Asia (Thailand, Vietnam) and cash-loving Germany, no-tipping Japan against US-style
// Mexico, nightly tourist taxes (Italy, France) against city-only (United Kingdom,
// Germany) against none at all (Thailand, Vietnam).

export const homePreview = [
  {
    slug: "japan",
    name: "Japan",
    checked: "Jul 2026",
    facts: {
      cards: "Cities yes, rural cash",
      carry: "10k to 20k yen",
      atms: "7-Eleven works",
      touristTax: "Some cities only",
      tipping: "Not expected",
      watchOut: "Most bank ATMs refuse"
    },
    source: "verdict (carry 10,000 to 20,000 yen, never tip), trio (7-Eleven ATMs most reliable), tax note (only some cities charge), cash spoke (the trap: most Japanese bank ATMs reject foreign cards)"
  },
  {
    slug: "mexico",
    name: "Mexico",
    checked: "Jul 2026",
    facts: {
      cards: "Hotels yes, stalls cash",
      carry: "Pesos daily, small notes",
      atms: "Bank ATMs, not airport",
      touristTax: "A few areas only",
      tipping: "10 to 15%",
      watchOut: "Always pay in pesos"
    },
    source: "trio (cards at hotels and resorts, taxis and stalls often cash only, use a bank branch ATM and avoid airport machines), tax note (a growing few areas charge, most of Mexico does not), tipping spoke (10 to 15% standard), cash spoke (Mexico's single biggest money trap: always pay in pesos)"
  },
  {
    slug: "italy",
    name: "Italy",
    checked: "Jul 2026",
    facts: {
      cards: "Almost everywhere, by law",
      carry: "50 to 100 euros",
      atms: "Bancomat, not Euronet",
      touristTax: "Yes, most cities charge",
      tipping: "Round up only",
      watchOut: "Coperto, not a tip"
    },
    source: "verdict (cards almost everywhere, merchants legally required to accept, keep 50 to 100 euros, use a bank Bancomat), tourist-tax spoke (most Italian cities charge a tassa di soggiorno), tipping spoke (round up, and the coperto is a cover charge, not a tip)"
  },
  {
    slug: "france",
    name: "France",
    checked: "Jul 2026",
    facts: {
      cards: "Tap is the norm",
      carry: "Very little needed",
      atms: "Use a bank machine",
      touristTax: "Yes, per person nightly",
      tipping: "Service already included",
      watchOut: "Small shops set minimums"
    },
    source: "verdict (contactless is the norm, pull euros from a bank ATM), facts (service compris, so tipping is optional and small), cash spoke (France is card-first, keep only a little cash), trio (a few small shops set a card minimum around 5 to 10 euros), tax note (taxe de sejour, per person per night)"
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    checked: "Jul 2026",
    facts: {
      cards: "Nearly cashless country",
      carry: "20 to 40 pounds",
      atms: "Free LINK cashpoints",
      touristTax: "A few cities only",
      tipping: "Often 12.5% service charge",
      watchOut: "ETA needed before flying"
    },
    source: "cash spoke (in 2026 the UK is nearly cashless, keep maybe 20 to 40 pounds), verdict (free LINK cashpoint, discretionary 12.5% service charge, US visitors now need a UK ETA before they fly), tax data (Edinburgh, Manchester and Liverpool charge, most of the UK including London does not)"
  },
  {
    slug: "thailand",
    name: "Thailand",
    checked: "Jul 2026",
    facts: {
      cards: "Malls yes, street cash",
      carry: "Cash daily, small notes",
      atms: "Flat fee per withdrawal",
      touristTax: "None today",
      tipping: "Light, not expected",
      watchOut: "Always choose baht"
    },
    source: "verdict (cards at hotels and shopping centers, baht for street food and markets, always choose baht), trio (carry small notes, ATMs charge a flat foreign-card fee), tax note (Thailand has no hotel or tourist tax today), facts (tipping is light, not expected but appreciated)"
  },
  {
    slug: "germany",
    name: "Germany",
    checked: "Jul 2026",
    facts: {
      cards: "Widely, but not everywhere",
      carry: "50 to 100 euros",
      atms: "Sparkasse or Cash Group",
      touristTax: "City bed tax varies",
      tipping: "Round up the bill",
      watchOut: "Expect an ATM fee"
    },
    source: "verdict (carry 50 to 100 euros, pull cash from a Sparkasse or Cash Group ATM), trio (works widely but not everywhere, a foreign card is out of network almost everywhere so expect a fee), tax note (no national tax, cities charge their own Bettensteuer at rates that vary), facts (round up rather than calculating a percentage)"
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    checked: "Jul 2026",
    facts: {
      cards: "Cities yes, street cash",
      carry: "Small notes, used daily",
      atms: "VPBank is fee free",
      touristTax: "None at all",
      tipping: "Not expected, appreciated",
      watchOut: "Count the zeros"
    },
    source: "trio (cards in cities, cash needed daily, VPBank is fee-free), facts (carry small notes), tax note (no separate tourist or hotel tax, room rates already include VAT), tipping heading (not expected, always appreciated), cash spoke (check the number of zeros before you hand over a note, to avoid overpaying tenfold)"
  }
];

export default homePreview;
