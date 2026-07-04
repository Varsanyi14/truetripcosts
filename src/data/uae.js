export default {
  slug: "uae",
  live: true,
  name: "United Arab Emirates",
  from: "United States",
  checked: "Jun 2026",
  checkedISO: "2026-06-30",
  emergency: { medical: "998", note: "998 is the ambulance line and 999 is the police. The 112 and 911 numbers are not used here.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  region: "Middle East",
  hook: "One of the most cashless places on earth, and the dirham is pinned to the dollar, so prices never move.",
  aliases: ["uae", "u.a.e.", "dubai", "abu dhabi", "emirates", "emirati"],

  title: "Money in the UAE (2026): Cards, Cash, the Dollar-Pegged Dirham and Dubai's Tourist Tax | True Trip Costs",
  description: "How to handle money in the United Arab Emirates as a US traveler in 2026: why the dirham is fixed to the dollar, how little cash you need in Dubai and Abu Dhabi, the DCC trap to refuse, tipping, the 5% VAT you can reclaim, and Dubai's per-night Tourism Dirham. Checked June 2026.",

  h1: "Money in the UAE, sorted.",
  lede: "A calm, current plan for the money side of your trip: the dirham is locked to the US dollar so prices never surprise you, cards run almost everything, and the only real traps are the exchange counter and one sneaky terminal prompt.",
  hero: {
    img: "/uae-hero.jpg",
    h: 1375,
    alt: "A quiet old-town lane in the UAE at golden hour with traditional wind towers on the rooftops, a mosque dome and minaret in the haze, sand-toned buildings with carved teal doors and iron lantern sconces, string lights overhead, a figure in a white kandura walking away up the lane, and a plate of falafel, flatbread and dips beside a mint lemonade, a glass of red karak-style tea and a bowl of dates on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "The UAE is one of the easiest places in the world to handle money as an American. The dirham (AED) is <b>fixed to the US dollar</b> at about 3.67 to 1 and has been since 1997, so a price never moves against you mid-trip. Dubai and Abu Dhabi are close to fully cashless: bring a <b>no-fee card</b> plus Apple Pay or Google Pay and you can tap for almost everything, cabs, malls, the metro, dinner. Keep a little cash, roughly 200 to 500 dirhams, for souks, small eateries and tips. Skip the airport and hotel exchange desks, refuse the \"pay in dollars\" prompt on any terminal, and remember that hotel bills carry a <b>5% VAT</b> (reclaimable on shopping, not hotels) plus a small per-night tourism fee that varies by emirate.",

  meter: {
    heading: "Barely any cash changes hands here, cards and phones do almost everything.",
    cashPct: 15,
    note: "A rough feel for everyday spending. Dubai has a public goal of being 90% cashless, and terminals are already in every taxi, mall, restaurant and metro gate. The exception is the traditional souks, some small local eateries and cafeterias, the odd older taxi, and tipping, where a small amount of cash is still handy."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa, Mastercard and Amex are accepted across hotels, malls, restaurants, taxis and the metro, and Apple Pay and Google Pay are everywhere. The one habit to keep: if a terminal asks whether to charge you in dollars or dirhams, always choose dirhams to avoid a padded conversion rate.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "A little goes a long way", p: "You can go most of a trip on cards, but keep some dirhams for the souks (where you'll want to bargain in cash), small local eateries, an older taxi, and tips. Around 200 to 500 dirhams for a few days is plenty. Notes come in 5, 10, 20, 50, 100, 200, 500 and 1,000.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Everywhere, mind the double fee", p: "ATMs are in every mall and metro station and give close to the pegged rate. Expect a small machine fee (often around 20 to 30 dirhams) on top of your own bank's charge, so withdraw a sensible amount at once, choose dirhams, and decline the \"convert to USD\" offer.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee card</b> and add it to <b>Apple Pay or Google Pay</b>, which are accepted almost everywhere.",
      "Don't buy dirhams at home. The AED is a thinly traded currency abroad, so rates are typically 4 to 8% worse than exchanging on arrival.",
      "If you want a little arrival cash, plan to use an <b>in-mall exchange house or ATM</b>, not the airport counter."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters and hotel desks, they carry the worst rates (a 5 to 6% gap is common).",
      "If you need cash right away, use an <b>ATM</b>, choose <b>dirhams</b>, and <b>decline \"convert to USD.\"</b>",
      "Tap your contactless card or phone straight onto the Dubai Metro and most taxis, no need to load up on cash first."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card or phone</b> for nearly everything: taxis, malls, the metro, restaurants and attractions.",
      "Keep small <b>dirham</b> notes for the souks, small cafeterias, valet and housekeeping tips.",
      "In the souks, <b>bargain and pay in cash</b>; it's expected and gets you a better price.",
      "<b>Always choose dirhams</b>, never dollars, on any card terminal or ATM that asks."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "The easy part", bullets: [
      "<b>The dirham is pinned to the dollar</b> at about 3.67 to 1, so $100 is almost exactly 367 dirhams, and prices never shift against you during your stay.",
      "The only markup risk is self-inflicted: choosing dollars at a terminal (dynamic currency conversion), which quietly adds 3 to 8%. Pick dirhams every time."
    ], cta: null }
  ],

  cash: {
    rate: 3.67, cur: "AED", round: 25, defaultIndex: 1,
    rateNote: "Effectively fixed at about 3.67 dirhams to the dollar (the peg is 3.6725 and has held since 1997). An easy mental math: divide dirhams by 3.67, or roughly by 3.7, so 100 dirhams is about 27 dollars.",
    styles: [
      { n: "Budget",    per: 40,  cash: 0.2 },
      { n: "Mid-range", per: 110, cash: 0.15 },
      { n: "Comfort",   per: 260, cash: 0.1 }
    ]
  },

  connectivity: {
    works: "Yes, essentially everywhere you'll go, and it's excellent. The UAE has some of the fastest, most widespread mobile coverage in the world, with strong 5G blanketing Dubai, Abu Dhabi, the highways between them and out to the other emirates. The two carriers are Etisalat (e&) and du; a tourist SIM or an eSIM is easy to arrange with your passport, and many travelers just use an eSIM bought before arrival. Only remote desert stretches see weaker signal. One note: some calling apps like WhatsApp voice and video calling can be restricted on local networks, though this eases over time and hotel or paid VPN-friendly plans are common workarounds."
  },

  // TOURIST TAX (high-churn, verified Jun 2026). Unlike Costa Rica or the Dominican Republic, the
  // UAE DOES levy a per-night accommodation tax, and it varies by emirate:
  //  - Dubai: flat "Tourism Dirham" per room per night by hotel star rating (5-star AED 20,
  //    4-star AED 15, 3-star AED 10, budget/1-2-star/hotel-apartment AED 7). Capped at 30
  //    consecutive nights. This is the line modeled by the calculator. Separately, Dubai hotel
  //    bills also carry ~5% VAT + ~7% municipality fee + ~10% service charge baked in (~22-30%
  //    total); those percentage charges are described in taxfree/recentChange text, not this line,
  //    since they're a different kind of charge and usually already in the quoted rate.
  //  - Abu Dhabi: percentage model, a flat 4% tourism fee on the accommodation bill (uniform
  //    across categories), modeled here via a percentOfRoom unit override, plus its own ~AED 15/nt
  //    dirham + municipality + service + VAT noted in text.
  //  - Other emirates (Sharjah, Ajman, etc.): generally no separate nightly tourism fee for the
  //    traveler to plan; set to 0.
  tax: {
    unit: "flatPerNight",
    currency: "AED",
    capNights: 30,
    note: "In Dubai the nightly \"Tourism Dirham\" is a flat amount per room per night set by your hotel's official star rating, capped at 30 consecutive nights. Abu Dhabi instead adds a 4% tourism fee on the room bill. These are separate from the 5% VAT, roughly 7% municipality fee and roughly 10% service charge that hotels fold into the rate (covered below). Pick the closest match.",
    regions: [
      { key: "dubai5", label: "Dubai, 5-star hotel", rate: 20 },
      { key: "dubai4", label: "Dubai, 4-star hotel", rate: 15 },
      { key: "dubai3", label: "Dubai, 3-star hotel", rate: 10 },
      { key: "dubaibudget", label: "Dubai, budget hotel or hotel apartment", rate: 7 },
      { key: "abudhabi", label: "Abu Dhabi (any hotel)", unit: "percentOfRoom", pct: 4, note: "Abu Dhabi charges a 4% tourism fee on the accommodation bill, uniform across hotel categories, plus a separate small per-night fee, municipality fee, service charge and 5% VAT." },
      { key: "other", label: "Sharjah or another emirate", rate: 0, note: "Most other emirates do not add a separate nightly tourism fee for you to plan, though a municipality fee, service charge and 5% VAT may still appear on the bill." }
    ]
  },

  currencyHeading: "The dirham, in plain terms.",
  facts: [
    { sym: "usd", k: "Quick conversion", v: "The dirham is fixed to the US dollar at about 3.67 to 1, so it never moves against you. Divide dirhams by roughly 3.7 for dollars: 100 dirhams is about 27 dollars, 500 dirhams about 136. $100 is almost exactly 367 dirhams." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 5, 10, 20, 50, 100, 200, 500 and 1,000 dirhams, each a different color. Coins are 1 dirham, 50 fils and 25 fils, and in practice cash totals round to the nearest 25 fils, so you rarely handle small change." },
    { sym: "card", k: "One of the most cashless places on earth", v: "Dubai is aiming for 90% cashless, and cards and phone wallets work in taxis, the metro, malls and restaurants alike. The souks and some small local spots are the main places you'll still reach for cash." },
    { sym: "usd", k: "Only dirhams, really", v: "A few hotels quote or accept US dollars, but at a poor rate. Everywhere else it's dirhams only, and neighboring Gulf currencies (Saudi riyal, Omani rial, and so on) are not accepted, so change them or use a card." }
  ],

  taxfree: {
    label: "Taxes and the VAT refund",
    heading: "A low 5% VAT you can partly reclaim, plus small hotel fees.",
    text: "The UAE keeps taxes light. <b>VAT is just 5%</b> on most goods and services, and non-resident tourists can <b>reclaim it on shopping</b> (not on hotels, restaurants or anything consumed in the country) through the Planet tax-free system: spend at least 250 dirhams at a participating store, ask for a tax-free tag, and validate at a kiosk when you leave. You get back roughly 85 to 87% of the VAT after a small per-tag fee. On hotel bills, expect the 5% VAT plus a <b>service charge (around 10%)</b> and a <b>municipality fee (around 7% in Dubai)</b> already folded into the rate, along with a small per-night tourism fee (see the calculator above). Together these can add roughly 20 to 30% over a bare room rate, so read your quoted total carefully. There is no personal income tax and no departure tax to pay separately at the airport."
  },

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Because the dirham is pegged, there's no reason to let a terminal or ATM convert to dollars, doing so (dynamic currency conversion) quietly adds 3 to 8%. Choose dirhams every time.",
    "<b>Never exchange at the airport or your hotel.</b> Their rates run 4 to 6% worse than the in-mall exchange houses (Al Ansari, LuLu Exchange, UAE Exchange). If you're mostly on cards, you may not need to exchange at all.",
    "<b>Don't buy dirhams before you fly.</b> AED is thinly traded outside the UAE, so home-country rates are typically 4 to 8% worse. Bring dollars, or just rely on your card and an ATM on arrival.",
    "<b>Read the hotel total, not just the nightly rate.</b> A 5% VAT, roughly 10% service charge, roughly 7% municipality fee and a per-night tourism fee can add 20 to 30% to a quoted room rate."
  ],

  tippingHeading: "Appreciated, modest, and cash is best.",
  tipping: "Tipping in the UAE is customary but not heavy, and staff often rely on it since base wages can be low. Restaurants frequently add a 10% service charge, but it doesn't always reach your server, so rounding up or leaving an extra 10 to 15% in cash for good service is normal. For everyday help, a few dirhams goes a long way: 5 to 10 dirhams for a valet, 10 to 15 dirhams a day for hotel housekeeping, a few dirhams per bag for a porter, and rounding up the fare for taxis. Cash tips (in dirhams) are preferred over adding to a card, since they go straight to the person. Nobody will chase you for a tip, and a small one is always well received.",
  sources: {
    changed: "Sources added on first publish, checked June 2026. VAT is 5%, and visitors can reclaim it on shopping through the Planet scheme, about 85% of the VAT back on a minimum spend of 250 dirhams. Dubai adds a Tourism Dirham per room per night by hotel star rating, and Abu Dhabi adds a 4% accommodation fee instead.",
    links: [
      { label: "Federal Tax Authority: the 5% VAT and the tourist refund scheme operated with Planet", url: "https://tax.gov.ae/en/services/tourist.vat.refunds.aspx", type: "revenue" },
      { label: "UAE tourist-tax guide: Dubai's Tourism Dirham per room per night by star rating, and Abu Dhabi's 4% accommodation fee", url: "https://www.aaconsultancy.ae/international-tourist-taxes-and-restrictions/", type: "gov" },
    ],
    judgment: "The Tourism Dirham is set per room per night by star rating and capped at 30 nights, so the figure here is a typical nightly amount rather than one fixed rate. The dirham's peg to the US dollar is long standing. The daily cash share, tipping norms and likely ATM behavior are our own estimate from experience, not an official figure.",
  },

  faqs: [
    { q: "Do I need cash in the UAE?", a: "Not much. Dubai and Abu Dhabi are close to fully cashless, so cards and Apple Pay or Google Pay cover taxis, the metro, malls and restaurants. Keep around 200 to 500 dirhams for the souks (where cash helps you bargain), small local eateries and tips." },
    { q: "Is the UAE dirham tied to the US dollar?", a: "Yes. The dirham has been pegged to the dollar at about 3.6725 to 1 since 1997, so the rate effectively never changes. A price in dirhams stays constant against your dollars for your whole trip, which makes budgeting easy: divide dirhams by roughly 3.7 for the dollar figure." },
    { q: "Should I pay in dollars or dirhams on my card in the UAE?", a: "Always choose dirhams. If a terminal or ATM offers to charge you in US dollars (dynamic currency conversion), it adds a padded rate of 3 to 8%. Since the dirham is pegged to the dollar anyway, paying in dirhams and letting your own bank convert is always cheaper." },
    { q: "Where should I exchange money in the UAE?", a: "Use the in-mall or in-metro exchange houses like Al Ansari, LuLu Exchange or UAE Exchange, which have tight rates. Avoid airport counters and hotel desks, which can be 4 to 6% worse. Don't buy dirhams before your trip either, as rates abroad are poor. If you're mostly on cards, you may not need to exchange at all." },
    { q: "Can tourists get the VAT back in the UAE?", a: "Yes, on shopping. Non-residents can reclaim the 5% VAT on eligible goods bought from participating stores: spend at least 250 dirhams, ask for a tax-free tag, and validate at a Planet kiosk when you leave, getting back roughly 85 to 87% after a small fee. VAT on hotels, restaurants and anything you use in the country isn't refundable." },
    { q: "How much is Dubai's tourist tax?", a: "Dubai charges a flat \"Tourism Dirham\" per room per night by hotel star rating: about 20 dirhams for 5-star, 15 for 4-star, 10 for 3-star and 7 for budget hotels or hotel apartments, capped at 30 nights. Abu Dhabi instead adds a 4% tourism fee on the room bill. These sit on top of the 5% VAT, service charge and municipality fee hotels include in the rate." }
  ]
};
