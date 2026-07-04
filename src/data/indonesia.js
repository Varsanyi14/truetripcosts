export default {
  slug: "indonesia",
  live: true,
  name: "Indonesia",
  from: "United States",
  checked: "Jun 2026",
  checkedISO: "2026-06-30",
  emergency: { medical: "119", note: "119 is the medical line, and 112 works as a general emergency number in the cities. Outside them, ambulance cover is thin and a taxi is often faster.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "high",
  region: "Asia",
  hook: "Bali runs more on cash and QR codes than tourists expect, plus a one-time entry levy on top.",

  title: "Money in Indonesia (2026): Cash, Cards, QRIS and the Bali Entry Levy | True Trip Costs",
  description: "How to handle money in Indonesia as a US traveler in 2026: cash vs card in Bali and beyond, why QRIS mostly is not a tool for tourists, fee-free bank ATMs, the one-time Bali entry levy, the 21% hotel tax and service charge, and tipping. Checked June 2026.",

  h1: "Money in Indonesia, sorted.",
  lede: "Most US trips to Indonesia mean Bali, so this guide leads there, with notes for Jakarta and beyond. A calm, current plan for what to pay with, how much cash to carry, and the one-time fee that catches first-timers at the airport.",
  hero: {
    img: "/indonesia-hero.jpg",
    h: 1375,
    alt: "A Balinese temple gate at dusk framed by a plumeria tree in bloom, string lights strung between the branches, stone guardian statues in checked cloth on either side of the split gate, a lone figure walking away up a stone path toward terraced rice fields and a distant temple silhouette, and a wooden table in the foreground with grilled satay skewers, a bowl of peanut sauce, a bowl of sambal and a young coconut with a straw"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "In Bali's tourist areas, cards work at hotels, restaurants and bigger shops, but many add a 3% surcharge and cash still covers about 80% of everyday spending. Bring a <b>no-fee debit card</b> for ATM cash and a <b>no-fee credit card</b> as backup, pull rupiah from a <b>bank-branch ATM</b> (BCA, Mandiri, BNI), and keep <b>200,000 to 300,000 IDR</b> on hand for warungs, markets, parking and boats where cards and QR codes do not reach. If you are visiting Bali, pay the <b>one-time IDR 150,000 entry levy</b> at the official Love Bali site before you fly, it is separate from any hotel tax and easy to confuse with it.",

  meter: {
    heading: "Cash still does most of the work, even in Bali's tourist strip.",
    cashPct: 65,
    note: "A rough feel for everyday spending. Hotels, larger restaurants and shops in South Bali and Jakarta take cards, but cash still covers most transactions islandwide, around 80% by some estimates. Outside the main tourist corridor, on smaller islands, and at local warungs, cash is close to the only option."
  },

  trio: [
    { sym: "card", kind: "warn", h: "Your card", verd: "Works in tourist areas, with a catch", p: "Visa and Mastercard are accepted at hotels, resorts and bigger restaurants in South Bali and Jakarta. Many add a 3% card surcharge, and some set a minimum spend. Smaller shops, local warungs and most of Indonesia outside the main tourist hubs are cash only.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Still the main way to pay", p: "Cash covers warungs, markets, parking, boats, tipping and most of daily life outside resorts. Carry more rupiah than you would for a card-friendly country, and top up before heading to a smaller island.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy in Bali and Jakarta, scarcer beyond", p: "Bank-branch ATMs (BCA, Mandiri, BNI, Permata) are common in South Bali's tourist areas and major cities, with fees for foreign cards typically 25,000 to 100,000 IDR per withdrawal. ATMs thin out fast outside the main hubs and on smaller islands, where they can also run dry.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee debit card</b> for ATM cash and a <b>no-fee credit card</b> as backup.",
      "If you are heading to Bali, pay the <b>one-time IDR 150,000 entry levy</b> at lovebali.baliprov.go.id before you fly. Avoid lookalike sites that overcharge.",
      "Set up <b>Grab or Gojek</b> with your international card before you land, both are the easiest way to get around and order food.",
      "<b>Set a travel notice</b> with your bank so a first-day ATM pull or card swipe does not get blocked."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport money changers for anything beyond pocket change, the rates are weak.",
      "Pull rupiah from a <b>bank-branch ATM</b> (BCA, Mandiri, BNI), not a standalone machine, and <b>decline \"convert to USD.\"</b>",
      "Withdraw a larger amount at once. ATM fees are often a flat charge per withdrawal, so fewer trips cost less overall."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card</b> for hotels and bigger restaurants in tourist areas, watch for the 3% surcharge.",
      "<b>Cash</b> for warungs, markets, parking, temple donations, boats and most things outside the main resort strip.",
      "QRIS, Indonesia's QR payment system, is everywhere, but most US cards and apps cannot scan it without a local SIM and e-wallet, so do not count on it.",
      "<b>Always choose rupiah</b>, never dollars, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in rupiah, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "The Bali entry levy and any hotel tax are two separate charges. Paying one does not cover the other."
    ], cta: null }
  ],

  cash: {
    rate: 17900, cur: "IDR", round: 50000, defaultIndex: 1,
    rateNote: "Rough guide at about 17,900 rupiah to the dollar in mid-2026. Amounts in rupiah carry a lot of zeros, so double-check before handing over cash.",
    styles: [
      { n: "Budget",    per: 35,  cash: 0.75 },
      { n: "Mid-range", per: 70,  cash: 0.6 },
      { n: "Comfort",   per: 140, cash: 0.4 }
    ]
  },

  connectivity: {
    works: "Mostly, with real gaps once you leave the tourist strip. Telkomsel has by far the widest reach, including smaller islands, rural Bali and remote dive areas, while XL Axiata and Indosat cover South Bali's resort belt and Jakarta well but thin out fast beyond it. 4G is the everyday standard; 5G is limited to parts of Jakarta and Denpasar. Coverage drops hard on Nusa Penida's clifftop viewpoints, in the Gili Islands away from the main villages, and on boats and remote trekking routes, so download offline maps and pick a Telkomsel-backed eSIM if your trip goes beyond South Bali."
  },

  // TOURIST TAX / FEES (high-churn, verified Jun 2026). Two separate charges, often confused:
  // (1) a national hotel tax-and-service add-on, commonly quoted as "21%++" (10% service
  // charge, then a 10% regional hospitality tax, PB1, calculated on top of that, working out
  // to about 21% combined), charged nightly and added to the room rate if quoted "++" rather
  // than "nett". (2) Bali's one-time Foreign Tourist Levy of IDR 150,000 per person, paid once
  // per trip via the official Love Bali portal, which applies only in Bali and has nothing to
  // do with the hotel tax. Modeled here as a nightly percentage plus, for Bali, a one-time
  // per-person add-on (the engine already supports this shape, see Mexico's VISITAX).
  tax: {
    unit: "percentOfRoom",
    currency: "IDR",
    capNights: null,
    note: "Most Indonesian hotels quote rates \"nett\" (tax and service already included) or \"++\" (tax and service added at checkout). This estimate assumes a \"++\" rate: a 10% service charge, then a 10% regional hotel tax (PB1) calculated on top of that, for about 21% combined. Budget guesthouses and homestays often charge less or nothing extra.",
    regions: [
      { key: "bali", label: "Bali", pct: 21, oneTimePerPerson: 150000, taxLabel: "Hotel tax & service + Bali entry levy", note: "On top of the 21% hotel tax and service, every foreign visitor to Bali pays a one-time IDR 150,000 entry levy, paid once per trip regardless of length of stay. It is separate from the hotel tax and is not covered by it." },
      { key: "other", label: "Elsewhere in Indonesia (Jakarta, Yogyakarta, and beyond)", pct: 21, note: "The same 21% hotel tax and service add-on applies nationwide. There is no Bali-style entry levy outside Bali." }
    ]
  },

  currencyHeading: "The rupiah, in plain terms.",
  facts: [
    { sym: "denom", k: "Quick conversion", v: "About 17,900 rupiah to the dollar in mid-2026. A 100,000 IDR meal is roughly $5.60, and 1,000,000 IDR is about $56. The long strings of zeros take getting used to, so double-check the number before paying." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 1,000, 2,000, 5,000, 10,000, 20,000, 50,000 and 100,000 rupiah. Coins (50 to 1,000 rupiah) are nearly worthless and rarely used. Carry a stack of 20,000s and 50,000s for everyday spending." },
    { sym: "smallnotes", k: "Keep small notes handy", v: "Warungs, parking attendants, Gojek and Grab drivers, and temple donation boxes all want small cash. Crisp, undamaged notes matter too, both for spending and if you ever exchange cash, since worn or torn bills are often refused." },
    { sym: "qr", k: "QRIS is not really for you", v: "QRIS, Indonesia's QR payment standard, is everywhere, but scanning it usually requires an Indonesian SIM card and a local e-wallet (GoPay, OVO) linked to your card. A few countries have direct QRIS links for their banking apps; the US is not one of them, so stick to your card or cash." }
  ],

  taxfree: {
    label: "Fees and taxes",
    heading: "The entry levy and the hotel tax are not the same thing.",
    text: "Two separate charges trip up first-time visitors to Bali. The <b>Foreign Tourist Levy</b> is IDR 150,000 per person, paid once per trip (not per night) through the official Love Bali portal, lovebali.baliprov.go.id, or at a counter on arrival. It funds cultural and environmental programs and applies to every foreign visitor, including children, with limited exemptions for long-stay visa holders. Separately, most hotels add a <b>21% tax and service charge</b> to the nightly room rate if it was quoted \"++\" rather than \"nett.\" Paying one does not cover the other, and neither shows up reliably in a Booking.com or Airbnb total, so budget for both."
  },

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Choosing your home currency at a card terminal or ATM (dynamic currency conversion) quietly adds 3 to 8%. Pick rupiah every time.",
    "<b>Only pay the Bali levy at the official site.</b> Lookalike websites charge two to three times the real IDR 150,000 fee and exist mainly to steal card details. The only official domain ends in .go.id; if in doubt, pay at the counter on arrival instead.",
    "<b>Count the zeros twice.</b> A 100,000 IDR note and a 10,000 IDR note are easy to confuse at a glance, especially after a long flight. Slow down when paying cash, and use a calculator app if a total feels off.",
    "<b>Use ATMs inside a bank branch or mall.</b> Standalone street-side ATMs in tourist areas carry a higher skimming risk. Stick to machines inside BCA, Mandiri, BNI or Permata branches, or in shopping malls."
  ],

  tippingHeading: "Not traditional, but increasingly expected in tourist Bali.",
  tipping: "Indonesia does not have a deep-rooted tipping culture, but tourism has shifted norms in Bali's resort areas. Check your bill first: many hotels, restaurants and spas in tourist zones already add a 5 to 10% service charge, and if so, an extra tip is a kind gesture rather than an expectation. Where no service charge is added, 10% at a sit-down restaurant is generous. Local warungs and small family eateries do not expect tips, though rounding up is appreciated. For a private driver or guide, IDR 50,000 to 150,000 for a full day is a strong tip; for Grab or Gojek rides, IDR 5,000 to 10,000 in the app is a nice bonus. Spa and massage staff typically see IDR 20,000 to 50,000. Tip in rupiah and in cash where you can, since card tips often get pooled, and hand it over with your right hand, which is the polite custom.",
  sources: {
    changed: "Sources added on first publish, checked June 2026. Indonesia's VAT is an effective 11% on most goods and services. Bali charges a separate 150,000 rupiah foreign-tourist levy, paid once per entry, and as of mid-2026 there is no fine or entry refusal for not paying it.",
    links: [
      { label: "Bali Provincial Government (Love Bali): the 150,000 rupiah foreign-tourist levy, paid once per entry to Bali", url: "https://lovebali.baliprov.go.id/", type: "gov" },
      { label: "PwC Worldwide Tax Summaries: Indonesia's effective 11% VAT on most goods and services", url: "https://taxsummaries.pwc.com/indonesia/corporate/other-taxes", type: "revenue" },
    ],
    judgment: "Most hotels quote rates nett (tax and service included) or ++ (added at checkout), so the estimate here assumes a ++ rate. The daily cash share, tipping norms and likely ATM behavior are our own estimate from experience, not an official figure.",
  },

  faqs: [
    { q: "Do I need cash in Indonesia?", a: "Yes, more than in most card-friendly destinations. Cash covers around 80% of everyday spending in Bali, and even more outside the main tourist areas. Cards work at hotels and bigger restaurants in South Bali and Jakarta, often with a 3% surcharge, but warungs, markets, parking and boats are usually cash only." },
    { q: "What is the best ATM to use in Bali or Indonesia?", a: "Use a machine inside a bank branch or shopping mall, BCA, Mandiri, BNI or Permata are the most common. Expect a foreign-card fee of roughly 25,000 to 100,000 IDR per withdrawal, and always decline the \"convert to USD\" prompt. ATMs get scarce outside South Bali and the major cities, so plan ahead." },
    { q: "What is the Bali entry levy, and is it different from the hotel tax?", a: "Yes, they are two unrelated charges. The Bali entry levy is a one-time IDR 150,000 (about $10) fee per visitor, paid once per trip via the official Love Bali portal or at the airport. It is separate from the roughly 21% hotel tax and service charge added to most room rates, and paying one does not cover the other." },
    { q: "Do you tip in Bali or Indonesia?", a: "It is not traditional, but it is appreciated and increasingly common in Bali's tourist areas. Check your bill for a service charge first; if there isn't one, 10% at a restaurant is generous, and IDR 50,000 to 150,000 for a full-day driver or guide is a strong tip. Local warungs do not expect tips." },
    { q: "How much cash should I bring for a week in Bali?", a: "For two travelers on a mid-range trip, very roughly 2 to 3 million IDR (about $110 to $170) in day-to-day cash across a week, on top of cards for hotels and bigger restaurants. Carry more if you are island-hopping to Nusa Penida or the Gilis, where ATMs are limited." }
  ]
};
