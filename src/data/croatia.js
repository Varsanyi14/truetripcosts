export default {
  slug: "croatia",
  live: true,
  name: "Croatia",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-16",
  sources: {
    changed: "First publication. Confirmed the money facts that matter most this year: Croatia is now on the euro (adopted in 2023), which is worth about 1.15 US dollars, cards are widely taken, and there is a small nightly sojourn tax that is higher on the coast in summer. VAT is 25%, and non-EU visitors can reclaim it on shopping over about 100 euros. On entry, Croatia joined Schengen in 2023 and the EU's biometric Entry/Exit System went live in April 2026, with a US passport still all you need for now.",
    links: [
      { label: "Croatian Tax Administration (Porezna uprava): the 25% VAT and the tax-free refund for travelers from outside the EU", url: "https://www.porezna-uprava.hr/en", type: "revenue" },
      { label: "European Union travel portal: the Entry/Exit System (EES) now in operation at Schengen borders, and ETIAS due to follow", url: "https://travel-europe.europa.eu/ees_en", type: "gov" },
      { label: "Croatia.hr: the official tourism site, for the sojourn tax, ferries and visitor basics", url: "https://croatia.hr/en-gb", type: "tourism" },
    ],
    judgment: "The daily cash share, the tipping feel, and the exact sojourn tax you pay are our own estimate from experience and consistent traveler reports, not an official figure. The sojourn tax varies by town and season and is shown here as a representative amount.",
  },
  emergency: { medical: "112", note: "112 reaches every service, in English. If you prefer the direct lines, 194 is an ambulance, 193 the fire service and 192 the police. The 911 number does not work here.", checked: "Jul 2026", checkedISO: "2026-07-16" },
  insuranceLevel: "low",
  region: "Europe",
  signals: { cardFriendliness: 4, cashNeed: 2, taxRisk: 2, atmRisk: 4 },
  hook: "On the euro since 2023 and widely card-friendly, so tap in the towns, keep some euros for the islands, konobas and ferries, use bank ATMs rather than the coastal Euronet machines, and always pay in euros, not US dollars.",
  aliases: ["croatia", "croatian", "hrvatska", "zagreb", "split", "dubrovnik", "hvar", "zadar", "rovinj", "istria", "dalmatia", "plitvice", "euro", "eur", "kuna", "konoba", "adriatic", "diocletian"],

  title: "Money in Croatia (2026): Cards, Cash, the Euro, ATMs, Taxes and Tipping | True Trip Costs",
  description: "How to handle money in Croatia as a US traveler in 2026: the euro (adopted in 2023), widely accepted cards, the cash you still want for islands and konobas, the coastal Euronet ATM trap, the dollar-conversion trap, the 25% VAT refund on shopping, the sojourn tax, and how tipping works. Checked July 2026.",

  h1: "Money in Croatia, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your card covers the towns, the euros worth keeping for the islands and konobas, the ATMs to skip, and the taxes to know now that Croatia is on the euro.",
  hero: {
    img: "/croatia-hero.jpg",
    h: 1375,
    alt: "A quiet Dalmatian coastal old-town street at dusk with warm string lights strung between pale limestone buildings whose shutters glow, polished stone paving underfoot, laundry lines above, and at the end of the street the terracotta rooftops and old city wall opening onto a calm teal Adriatic. A lone figure seen from behind walks away down the street toward the sea, and in the foreground on a wooden table sits a plate of glossy black cuttlefish risotto and a chilled glass of white wine with a wedge of lemon"
  },

  recentChange: {
    date: "Jul 2026",
    text: "Two changes since a pre-2023 visit. On <b>1 January 2023 Croatia joined both the euro and the Schengen area</b>, so the old kuna is gone (everything is now priced and paid in euros) and there are no longer routine passport checks at land borders with neighbors like Slovenia or Hungary. Since April 2026, arriving from outside the EU, you give a quick fingerprint and photo at the border under the new <b>EES</b> system, with <b>no fee and no form</b>. A separate authorization, ETIAS, is due later in 2026, but a US passport is all you need for now."
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Croatia is <b>easy on the money front</b>, and simpler than it used to be now that it is <b>on the euro</b> (adopted in 2023, so the kuna is gone). <b>Visa and Mastercard</b>, Apple Pay and Google Pay work in hotels, restaurants, shops and larger stores, so you can lean on your card in the towns and cities. Keep some <b>euros</b> for the islands, the small konobas (family taverns), market stalls, ferries and parking machines, where cash is still the easy way to pay. For cash, use a <b>bank ATM</b> and avoid the standalone <b>Euronet</b> machines common along the tourist coast, which give poor rates, and always <b>choose euros, not US dollars</b>, on any terminal or ATM. On tax, prices include <b>25% VAT</b>, and there is a small nightly <b>sojourn tax</b> (around a euro or two per adult, more on the coast in summer, children under 12 exempt); shoppers can reclaim VAT on purchases over about 100 euros. One local rule: your accommodation <b>registers you with the police</b> automatically, but if you stay privately with friends you must register yourself within 24 hours. Tipping is light: round up or leave about 10% for good service.",

  meter: {
    heading: "Card-friendly in the towns, with euros for islands, konobas and ferries.",
    cashPct: 30,
    note: "A rough feel for everyday spending. Cards cover hotels, restaurants and larger shops in the towns and cities. Cash is a moderate share, for the islands, small konobas, market stalls, ferries, parking machines and tips, so keep some euros on you."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Fine in the towns", p: "Visa and Mastercard, Apple Pay and Google Pay work in hotels, restaurants, shops and larger stores across the towns and cities. Amex is patchier. The soft spots are the islands and small konobas, where cash is smoother.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Euros for the coast", p: "Carry some <b>euros</b> for the islands, small konobas (family taverns), market stalls, ferries and parking machines. Croatia is fully on the euro now, so the old kuna is gone. Get cash from a bank ATM, not a coastal exchange kiosk.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Avoid coastal Euronet", p: "Use an ATM attached to a real bank (Zagrebacka, PBZ, Erste) and skip the standalone <b>Euronet</b> machines all over the tourist coast, which push poor rates. Whichever you use, <b>decline the 'pay in US dollars' offer</b> and choose euros.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b>, plus a backup. Amex is patchier here.",
      "Croatia is on the <b>euro</b> now, so pack as you would for any eurozone trip; the old kuna is gone.",
      "Plan to pay by card in the towns and carry some euros for islands, konobas and ferries.",
      "At the border you will now be fingerprinted and photographed under the new <b>EES</b> system. There is no fee and no form, and a US passport is all you need for now."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters and <b>Euronet</b> ATMs. Use a bank ATM, and <b>decline 'convert to US dollars.'</b>",
      "Grab about <b>100 to 150 euros</b> for your first day or two, for ferries, konobas and small stops.",
      "For islands, note that most car ferries and catamarans take cards online, but small vendors on board and at the dock often want cash.",
      "Set up an <b>eSIM</b> before you land; Croatia has fast, cheap mobile data along the coast and inland."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card or phone</b> in the towns, and choose euros every time.",
      "Keep some <b>euros</b> for the islands, konobas, markets, ferries and parking machines.",
      "On the coast, confirm the price of seafood sold by the kilogram before you order.",
      "If staying privately rather than in a hotel, <b>register with the police within 24 hours</b>."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in euros, never US dollars.</b> Dynamic currency conversion at a till or ATM, and coastal Euronet machines, both quietly add a few percent.",
      "<b>Tip lightly.</b> Round up or leave about 10% for good table service, in cash, after checking for any service charge in touristy spots."
    ], cta: null }
  ],

  cash: {
    rate: 0.87, cur: "EUR", round: 50, defaultIndex: 1,
    rateNote: "Rough guide with the euro worth about 1.15 US dollars in 2026, so figure roughly 0.87 euros to the dollar. Croatia is a little cheaper than Western Europe, pricier on the coast in high summer, and cards cover most town spending, so this is the cash slice for islands, konobas and ferries.",
    styles: [
      { n: "Budget",    per: 45,  cash: 0.35 },
      { n: "Mid-range", per: 95,  cash: 0.28 },
      { n: "Comfort",   per: 185, cash: 0.2 }
    ]
  },

  connectivity: {
    works: "Very good, coast and inland. Croatia has fast, wide 4G and solid 5G across the cities, the coast and the islands, from Hrvatski Telekom, A1 and Telemach. A prepaid SIM is cheap, but for most visitors an eSIM from Airalo, Nomad or a similar provider is the easy route. Your US plan may include some roaming, so check the rate first. You do not need mobile data to pay by card, but you will want it for maps, ferry times and tickets."
  },

  tax: {
    unit: "perPersonPerNight",
    currency: "EUR",
    capNights: null,
    note: "Croatia charges a sojourn tax (boravisna pristojba) per person per night, collected by your accommodation. It varies by season and location, higher on the coast in summer. Children under 12 are exempt, and those aged 12 to 18 pay half.",
    regions: [
      { key: "coast-peak", label: "Coast and islands, summer", rate: 1.5, note: "Coastal and island towns in the summer high season charge the top rate, commonly around 1.50 euros per adult per night, and a little more in the busiest spots like Dubrovnik." },
      { key: "elsewhere", label: "Inland or off-season", rate: 1, note: "Zagreb, inland towns and the coast outside high summer charge less, commonly around 1 euro per adult per night." }
    ]
  },

  currencyHeading: "The euro in Croatia, in plain terms.",
  facts: [
    { sym: "euro", k: "Quick conversion", v: "Croatia adopted the euro (EUR) in 2023, replacing the kuna. The euro is worth about 1.15 US dollars in 2026, so 100 euros is roughly 115 dollars and 10 euros about 11.50. The notes and coins are the standard euro ones used across the eurozone, and prices already include VAT." },
    { sym: "card", k: "Cards widely taken", v: "Cards, Apple Pay and Google Pay work in hotels, restaurants, shops and larger stores across the towns and cities. Amex is patchier. Lean on your card in town and keep euros for the islands and smaller places." },
    { sym: "cash", k: "Cash for the coast", v: "Keep some euros for the islands, the small konobas (family taverns), market stalls, ferries and parking machines, where cash is still the easy way to pay. The old kuna is gone, so do not seek it out." },
    { sym: "tip", k: "Tipping is light", v: "Tipping is modest. In restaurants, rounding up or leaving about 10% for good service is normal, in cash. In touristy coastal spots, check the bill first for a service charge. For a coffee or a drink, just round up." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "A small nightly sojourn tax, and money back on shopping.",
    text: "Two things to know. Croatia charges a <b>sojourn tax (boravisna pristojba)</b> per person per night, collected by your accommodation, usually around <b>1 to 2 euros</b> per adult and a little more on the coast in high summer, with <b>children under 12 exempt</b> and those 12 to 18 paying half. Everyday prices already include VAT, a <b>25%</b> standard rate with reduced rates of 13% on things like hotel stays and 5% on some basics, so the figure on the tag is what you pay. If you shop, non-EU visitors can reclaim the 25% VAT on goods: spend <b>over about 100 euros in one store</b>, ask for a tax-free form, keep the goods unused, and have customs stamp it when you leave the EU. After fees you get back roughly <b>17%</b>, not the full 25%. Refunds are for goods, not hotels or meals."
  },

  keyFacts: [],

  traps: [
    "<b>'Pay in US dollars?' Always say no.</b> Terminals and ATMs may offer to charge you in dollars (dynamic currency conversion), which quietly adds a few percent. Choose euros every time.",
    "<b>Avoid coastal Euronet ATMs.</b> The standalone machines all over the tourist coast push poor rates. Use an ATM attached to a real bank (Zagrebacka, PBZ, Erste) instead.",
    "<b>The kuna is gone.</b> Croatia switched fully to the euro in 2023, so do not try to buy or spend leftover kuna; everything is priced and paid in euros now.",
    "<b>Register with the police if you stay privately.</b> A hotel or registered rental does this for you automatically, but if you stay with friends you must register at the local police within 24 hours, with your passport.",
    "<b>Check seafood priced by the kilo.</b> On the coast, fish and shellfish are often sold by the kilogram, so confirm the weight and price before ordering to avoid a surprise bill.",
    "<b>Carry cash for the islands and ferries.</b> Small vendors, konobas and dockside sellers on the islands often take only cash, so do not rely on a card once you leave the bigger towns."
  ],

  tippingHeading: "Tip lightly.",
  tipping: "Croatia tips modestly, and nobody expects the percentages common in the US. In a restaurant with table service, <b>rounding up or leaving about 10%</b> for good service is normal, and cash straight to the server is best. In more touristy coastal spots, <b>check the bill first for a service charge</b> that may already be added. For a coffee, a drink or a quick bite, simply rounding up is plenty. Taxi fares are usually just rounded up, and a helpful hotel porter might get a euro or two. Nobody will chase you for more.",

  faqs: [
    { q: "Do I need cash in Croatia?", a: "Some. Cards cover hotels, restaurants and larger shops in the towns and cities, but the islands, small konobas, market stalls, ferries and parking machines often want cash. Keep some euros on you and top up from a bank ATM as needed." },
    { q: "Does Croatia use the euro or the kuna?", a: "The euro. Croatia adopted the euro on 1 January 2023, and the old kuna is gone. Everything is now priced, charged and given in euros, the same notes and coins used across the eurozone." },
    { q: "Which ATMs should I avoid in Croatia?", a: "Skip the standalone Euronet machines common along the tourist coast, which push poor rates. Use an ATM attached to a real bank such as Zagrebacka, PBZ or Erste, and always choose euros, not dollars." },
    { q: "Should I pay in euros or US dollars?", a: "Always euros. If a terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion adds a few percent. Paying in euros lets your card's network handle the exchange fairly." },
    { q: "What is the sojourn tax in Croatia?", a: "A small tourist tax charged per person per night and collected by your accommodation, usually around 1 to 2 euros per adult and a little more on the coast in high summer. Children under 12 are exempt, and those aged 12 to 18 pay half." },
    { q: "Can I get a VAT refund on shopping in Croatia?", a: "Yes. Non-EU visitors can reclaim the 25% VAT on goods: spend over about 100 euros in one store, ask for a tax-free form, keep the goods unused, and have customs stamp it when you leave the EU. After fees you get back roughly 17%, and it is for goods, not hotels or meals." },
    { q: "Do I need to register with the police in Croatia?", a: "If you stay in a hotel or a registered rental, it is done for you automatically at check-in. If you stay privately with friends or family, you must register yourself at the local police within 24 hours, with your passport." },
    { q: "Do you tip in Croatia?", a: "Lightly. Round up or leave about 10% for good table service, in cash, after checking touristy bills for a service charge. Tipping is not expected for a quick coffee or drink beyond rounding up." },
    { q: "Do I need a visa or ETIAS for Croatia?", a: "Not right now. US citizens visit visa-free for up to 90 days in any 180. Croatia joined Schengen in 2023, and since April 2026 you give a fingerprint and photo at the border under the new EES system, with no fee and no form. ETIAS, a small online fee, is due later in 2026." }
  ],
  culture: {
    heading: "A little Croatian goes a long way",
    intro: "Nobody expects a visitor to speak Croatian, but a warm dobar dan, a hvala, and an unhurried appreciation of the coast mark you as a guest rather than a tourist. Croatians are proud of their heritage and their food, and they notice the effort.",
    phrases: [
      { mean: "Hello / good day", say: "DOH-bar dahn", word: "Dobar dan", native: "Dobar dan" },
      { mean: "Thank you", say: "HVAH-lah", word: "Hvala", native: "Hvala" },
      { mean: "Please / you're welcome", say: "MOH-leem", word: "Molim", native: "Molim" },
      { mean: "How much?", say: "KOH-lee-koh KOSH-tah", word: "Koliko kosta", native: "Koliko košta" },
      { mean: "Excuse me / sorry", say: "oh-PROH-stee-teh", word: "Oprostite", native: "Oprostite" },
      { mean: "Cheers", say: "ZHEE-vyeh-lee", word: "Zivjeli", native: "Živjeli" },
    ],
    tip: "Along the coast, a konoba is a family-run tavern and the place for the best local food; meals there are unhurried, so settle in rather than rush. A quiet dobar dan as you walk into a shop or cafe is simple, expected courtesy, and it warms the welcome.",
    stories: [
      { img: "/croatia-culture-1.jpg",
        alt: "WPA-style illustration of the Roman emperor Diocletian in a red-bordered toga on a rise with one arm raised, overlooking the construction of his great seaside stone palace with tall columns and a colonnaded court, the Adriatic and warm hills beyond",
        h: "Diocletian's palace at Split",
        p: "The city of Split grew up inside a Roman emperor's retirement home. Around 300 AD, Diocletian built a vast seaside palace here, and centuries later locals moved in among its walls, turning the ruins into a living old town. You can still wander its colonnaded court and stone cellars today.",
        note: "Good to know: the palace basement halls are worth a wander" },
      { img: "/croatia-culture-2.jpg",
        alt: "WPA-style illustration of five men in simple shirts singing klapa harmony together in a narrow sunlit limestone alley of a Dalmatian old town, heads leaning close and one hand raised, warm light washing down the stone walls",
        h: "Klapa harmony in a stone alley",
        p: "Dalmatia's traditional music is klapa, unaccompanied male voices singing in close harmony, and it is UNESCO-listed for good reason. Wander the stone alleys of a coastal old town in the evening and you may catch a group singing, their voices ringing warmly off the limestone walls.",
        note: "Good to know: you may hear it in Split, Trogir and coastal towns" },
      { img: "/croatia-culture-3.jpg",
        alt: "WPA-style illustration of an old wooden sailing ship of the Dubrovnik Republic under full cream sails, sailors working the rigging, cutting across the deep teal Adriatic at golden hour with the walled stone city and its round towers on the shore behind",
        h: "The seafaring Republic of Dubrovnik",
        p: "For centuries Dubrovnik was a small but mighty maritime republic, its merchant ships trading across the Mediterranean and its diplomats keeping it independent between far larger powers. Walk the famous city walls today and you circle a place that punched well above its size.",
        note: "Good to know: walking the full city walls is the classic thing to do" },
    ],
    pride: "Croatia is proud of its dazzling coast, its Roman and maritime heritage, and its food and wine. A few words of Croatian and an unhurried appreciation of the coast are warmly returned."
  }
};
