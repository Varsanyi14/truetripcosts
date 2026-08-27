import { S } from './carrier-spine.js';

export default {
  slug: "croatia",
  iso2: "hr",
  live: true,
  name: "Croatia",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-31",
  sources: {
    changed: "First publication. Confirmed the money facts that matter most this year: Croatia is now on the euro (adopted in 2023), which is worth about 1.15 US dollars, cards are widely taken, and there is a small nightly sojourn tax that is higher on the coast in summer. VAT is 25%, and non-EU visitors can reclaim it on shopping over about 100 euros. On entry, Croatia joined Schengen in 2023 and the EU's biometric Entry/Exit System went live in April 2026, with a US passport still all you need for now. Updated 31 July 2026: the EU removed its late-2026 ETIAS target, so this guide no longer quotes a start date for it.",
    links: [
      { label: "Croatian Tax Administration (Porezna uprava): the 25% VAT and the tax-free refund for travelers from outside the EU", url: "https://www.porezna-uprava.hr/en", type: "revenue" },
      { label: "European Union travel portal: the Entry/Exit System (EES) at Schengen borders, and the ETIAS travel authorization", url: "https://travel-europe.europa.eu/ees_en", type: "gov" },
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

  title: "Tipping in Croatia, plus cards, cash and the euro",
  description: "Croatia has used the euro since 2023 and cards work widely. Tipping is light, near 10% for good service, and cash helps on the islands. Checked 2026.",

  h1: "Money in Croatia, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your card covers the towns, the euros worth keeping for the islands and konobas, the ATMs to skip, and the taxes to know now that Croatia is on the euro.",
  hero: {
    img: "/croatia-hero.jpg",
    h: 1375,
    alt: "A quiet Dalmatian coastal old-town street at dusk with warm string lights strung between pale limestone buildings whose shutters glow, polished stone paving underfoot, laundry lines above, and at the end of the street the terracotta rooftops and old city wall opening onto a calm teal Adriatic. A lone figure seen from behind walks away down the street toward the sea, and in the foreground on a wooden table sits a plate of glossy black cuttlefish risotto and a chilled glass of white wine with a wedge of lemon"
  },

  recentChange: {
    date: "Jul 2026",
    text: "Two changes since a pre-2023 visit. On <b>1 January 2023 Croatia joined both the euro and the Schengen area</b>, so the old kuna is gone (everything is now priced and paid in euros) and there are no longer routine passport checks at land borders with neighbors like Slovenia or Hungary. Because Croatia is now inside Schengen, the EU's biometric border system applies when you arrive from outside the EU."
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
      "At the border you will be fingerprinted and photographed under the EU's <b>EES</b> system, so allow extra time on arrival in summer."
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
      { n: "Budget", per: 45, cash: 0.35, room: 65 },
      { n: "Mid-range", per: 95, cash: 0.28, room: 130 },
      { n: "Comfort", per: 185, cash: 0.2, room: 260 }
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
      { key: "coast-peak", label: "Coast and islands, summer", rate: 2, note: "Coastal and island towns in the summer high season charge the top rate, commonly around 2 to 2.70 euros per adult per night, with the busiest spots like Dubrovnik at the top of that range. Treat this as a representative figure; the exact amount is set by town and season." },
      { key: "elsewhere", label: "Inland or off-season", rate: 1.85, note: "Zagreb charges around 1.85 euros per adult per night year-round; inland towns and the coast outside high summer are commonly in the 1 to 1.85 euro range." }
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
    { q: "Do you tip in Croatia?", a: "Lightly. Round up or leave about 10% for good table service, in cash, after checking touristy bills for a service charge. Tipping is not expected for a quick coffee or drink beyond rounding up." }
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
  },

  spokes: [
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Apps", v: "Uber, Bolt (often cheapest)" },
        { k: "Taxis", v: "Metered, but apps usually beat them" },
        { k: "From the airport", v: "Shuttle bus, or an app" },
        { k: "Currency", v: "Euros (since 2023)" }
      ],
      live: true,
      topic: "taxis",
      caution: "low",
      title: "Taxis in Croatia: Uber, Bolt and the airports",
      description: "Uber and Bolt usually beat traditional taxis. Getting in from the airports by shuttle or app, summer pricing on the coast, and how much to tip.",
      h1: "Taxis in Croatia, and the apps to use",
      lede: "In Croatia the ride apps are usually cheaper than a traditional taxi, especially on the coast in summer. Install Uber and Bolt, take an airport shuttle where it makes sense, and round up to tip. Here is how it works.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Install <b>Uber</b> and <b>Bolt</b>, which both operate in <b>Zagreb, Split, Dubrovnik</b> and other cities and are usually <b>cheaper than a traditional taxi</b>. Regular taxis are metered, but on the tourist coast in summer they can be pricey, so an app is often the better deal. From the airports, a <b>shuttle bus</b> into town is cheap where it runs, or use an app. Croatia is on the <b>euro</b> (since 2023), and you <b>tip</b> by rounding up.",
      sections: [
        {
          h: "Which apps to install",
          icon: "phoneok",
          key: { fig: "Uber, Bolt", tag: "Often cheapest", text: "Uber and Bolt both operate in Zagreb, Split, Dubrovnik and other cities, and are usually cheaper than a traditional taxi.", tone: "teal" },
          p: [
            "<b>Uber</b> and <b>Bolt</b> both work in <b>Zagreb, Split, Dubrovnik, Zadar</b> and other cities, and they are usually <b>cheaper than hailing a traditional taxi</b>, with the fare and driver shown up front and card payment in the app.",
            "This is the main thing to know in Croatia: the apps often <b>undercut the regular taxis</b>, particularly in the tourist coastal cities, so they are the easy default for visitors."
          ]
        },
        {
          h: "From the airport",
          icon: "plane",
          key: { fig: "Shuttle", tag: "Or an app", text: "Airport shuttle buses run into town at Zagreb, Split and Dubrovnik and are cheap. An app or taxi works too; agree or confirm the fare.", tone: "teal" },
          p: [
            "At <b>Zagreb, Split and Dubrovnik</b>, an <b>airport shuttle bus</b> runs into the city or old town and is the cheapest option where the timing suits you. An <b>app</b> (Uber or Bolt) is the easy door-to-door choice.",
            "A traditional <b>taxi</b> from the airport works too, but confirm the fare or that the meter is running first, since airport and coastal rides are where prices climb."
          ]
        },
        {
          h: "Apps usually beat traditional taxis",
          icon: "alert",
          key: { tag: "Confirm the fare", text: "Traditional taxis are metered but can be pricey on the coast in summer, and a few quote inflated flat fares to tourists. Use an app, or confirm the fare and meter before you set off.", tone: "amber" },
          p: [
            "Traditional taxis are metered, but on the <b>tourist coast in summer</b> they can be <b>expensive</b>, and a few drivers quote an <b>inflated flat fare</b> to visitors rather than using the meter.",
            "So <b>use Uber or Bolt</b> where you can, since the fare is set in advance, or if you take a street taxi, <b>confirm the fare or that the meter is on</b> before you get in. This matters most in Split and Dubrovnik in high season."
          ]
        },
        {
          h: "Fares, paying and tipping",
          icon: "euro",
          key: { fig: "Round up", tag: "In euros", text: "Croatia uses the euro since 2023. Apps show the fare up front; tip by rounding up, with no set percentage.", tone: "teal" },
          p: [
            "Croatia adopted the <b>euro in 2023</b>, so fares are in euros (ignore older kuna figures). Apps show the price before you ride, and traditional taxis are metered. To <b>tip</b>, <b>round up</b> the fare; there is no set percentage.",
            "For more, see <a href='/croatia/tipping'>tipping in Croatia</a>, <a href='/croatia/cash-or-card'>cash or card in Croatia</a>, and the <a href='/croatia'>Croatia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Uber in Croatia?", a: "Yes, Uber and Bolt both operate in Zagreb, Split, Dubrovnik, Zadar and other cities, and are usually cheaper than a traditional taxi. Both show the fare up front and take card in the app." },
        { q: "How do I get from a Croatian airport to town?", a: "Airport shuttle buses run into the city or old town at Zagreb, Split and Dubrovnik and are cheap where the timing suits. An app is the easy door-to-door choice; a traditional taxi works too if you confirm the fare first." },
        { q: "Are Croatian taxis expensive?", a: "Traditional taxis are metered but can be pricey on the tourist coast in summer, and a few quote inflated flat fares. Uber and Bolt usually beat them, so use an app or confirm the fare before you set off." },
        { q: "Do you tip taxi drivers in Croatia?", a: "Lightly: round up the fare. There is no set percentage. Croatia uses the euro since 2023, so tips are in euros, not the old kuna." }
      ],
      sources: {
        links: [
          { label: "Croatian National Tourist Board: official travel information", url: "https://croatia.hr/en-gb", type: "gov" },
          { label: "US State Department: Croatia country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Croatia.html", type: "gov" }
        ],
        judgment: "In Croatia the ride apps usually beat traditional taxis, especially on the coast in summer, and the country is now on the euro. Fares and app coverage shift over time, so this is our practical read. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Modest, appreciated" },
        { k: "Restaurants", v: "Round up, or about 10%" },
        { k: "Currency", v: "Euros (since 2023)" },
        { k: "How", v: "Cash, in euros" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Croatia: how much and when 2026",
      description: "Croatian tipping is modest. How much to leave at restaurants and cafes, and why you now tip in euros rather than kuna. Checked 2026.",
      h1: "Tipping in Croatia",
      lede: "Croatia has a modest tipping culture. Staff earn a wage, tips are appreciated rather than expected, and since 2023 you tip in euros, not the old kuna. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Croatia has a <b>modest tipping culture</b>. Staff earn a <b>wage</b>, so tips are <b>appreciated but not required</b>, and there is <b>no US-style percentage</b>. At a <b>restaurant</b>, <b>rounding up</b> or leaving about <b>10%</b> for good service is generous, more in a smart tourist spot; at a <b>cafe or konoba</b>, the <b>small change</b> is plenty. Since <b>2023 the currency is the euro</b> (not the old kuna), so leave tips in <b>euro cash</b>. Do not feel pressured to tip the way you would at home.",
      sections: [
        {
          h: "How much to leave, by situation",
          icon: "euro",
          key: { fig: "About 10%", tag: "Restaurants, if you like", text: "Tips are appreciated but not required. For good restaurant service, round up or leave about 10%. At a cafe, the small change is plenty.", tone: "teal" },
          p: [
            "At a <b>sit-down restaurant</b>, tipping is <b>optional but appreciated</b>: for good service, <b>rounding up</b> or leaving about <b>10%</b> is generous, a little more at a smart tourist restaurant. At a <b>cafe, bar or konoba</b> (tavern), leaving the <b>small change</b> or a coin or two is normal.",
            "Elsewhere: <b>round up</b> a taxi fare, leave <b>1 to 2 euros per bag</b> for a hotel porter, and a euro or two a day for housekeeping if you like. For a private guide or boat trip, a larger tip reflects a real service."
          ]
        },
        {
          h: "It is euros now, so tip in euros",
          icon: "receipt",
          key: { fig: "Euros now", tag: "Not the old kuna", text: "Croatia switched to the euro in 2023, so tip in euros. Some tourist spots may add a service charge, so check the bill first.", tone: "teal" },
          p: [
            "Since Croatia <b>joined the euro in 2023</b>, tips are in <b>euros</b>, not the old kuna, so ignore older advice quoting kuna amounts.",
            "Most places do <b>not</b> add a service charge, but some <b>tourist-area restaurants</b> do. If a <b>service charge appears</b> on the bill, you <b>do not need to tip on top</b>, so read the bill before adding anything."
          ]
        },
        {
          h: "Leave it in cash",
          icon: "cash",
          key: { fig: "Cash", tag: "In euros", text: "Leave a tip in euro coins or small notes. Card terminals often have no tip line, and cash reaches the staff directly.", tone: "teal" },
          p: [
            "Leave any tip in <b>cash, in euros</b>, on the table. Croatian card machines often have <b>no tip prompt</b>, and cash reaches the staff directly. Keep a few <b>euro coins and small notes</b> for tips and cafe change. For the wider picture, see <a href='/croatia/cash-or-card'>cash or card in Croatia</a> and the <a href='/croatia'>Croatia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Croatia?", a: "Modestly, if you want to. Staff earn a wage, so tips are appreciated but not required. For good restaurant service, round up or leave about 10%. At a cafe, the small change is plenty." },
        { q: "Do you tip in euros or kuna in Croatia?", a: "Euros. Croatia adopted the euro in 2023, retiring the kuna, so tips are in euros now. Ignore older advice quoting kuna amounts." },
        { q: "How much should I tip at a Croatian restaurant?", a: "Nothing is required. For good service, rounding up or about 10% is generous, a little more at a smart tourist spot. At a cafe or konoba, the small change is normal." },
        { q: "Is a service charge added in Croatia?", a: "Usually not, but some tourist-area restaurants add one. If a service charge is on the bill, you do not need to tip on top, so read the bill first." }
      ],
      sources: {
        links: [
          { label: "US State Department: Croatia country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Croatia.html", type: "gov" }
        ],
        judgment: "Croatian tipping is cultural and modest, and the euro switch in 2023 means older kuna guidance is out of date. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "tourist-tax",
      glance: [
        { k: "What", v: "Tourist tax, per person, per night" },
        { k: "Coast in summer", v: "About 2 euros a night" },
        { k: "Children under 12", v: "Exempt" },
        { k: "Ages 12 to 18", v: "Half price" }
      ],
      live: true,
      topic: "tourist-tax",
      title: "Croatia tourist tax 2026: what your stay adds a night",
      description: "Croatia charges a tourist tax per person, per night, set town by town and by season. About 2 euros on the coast in summer, and under-12s pay nothing.",
      h1: "Croatia's tourist tax, and the family exemptions.",
      lede: "Croatia charges a small tourist tax for each person, for each night, set town by town for each calendar year rather than nationally. On the coast in summer it lands around two euros. The part worth knowing is how generous the exemptions are.",
      checked: "Aug 2026",
      checkedISO: "2026-08-26",
      answer: "Croatia charges a <b>tourist tax</b> (turisticka pristojba, still widely called the sojourn tax or boravisna pristojba), collected by your accommodation <b>per person, per night</b>. There is <b>no single national rate</b>: national law sets a floor and a ceiling, and each county then fixes an amount for every town for each calendar year, with a <b>higher main-season figure</b> and a lower one outside it. The main season generally runs <b>1 April to 30 September</b>. In practice most coastal and island towns land near <b>2 euros per adult per night in season</b> and roughly <b>1 to 1.50 euros</b> outside it, with the busiest spots at the top of the band and inland towns lower. <b>Campsites are charged less.</b> <b>Children under 12 pay nothing</b> and <b>anyone aged 12 to 18 pays half</b>. A private apartment host asking for it in cash on arrival is normal, not a scam.",
      sections: [
        {
          h: "How it works, and who pays",
          icon: "calendar",
          key: { fig: "Per person", tag: "Set town by town", text: "National law sets a range, each county fixes the amount for every town for the year, and your accommodation collects it for each person for each night.", tone: "teal" },
          p: [
            "Croatia's tourist tax is <b>national in structure and local in amount</b>. The law and a national regulation set the <b>lowest and highest</b> permitted figures, then each <b>county assembly</b> adopts a decision, usually in the December more than a year ahead, fixing the amount for every town and municipality in its area for the coming calendar year. Istria County, for example, set its 2026 figures at a session in December 2024. So the only truly authoritative number is the one your own town's tourist board publishes.",
            "It is charged <b>per person, per night</b>, which means it scales with your party rather than attaching to the room, the opposite of the Greek model. Your accommodation collects it and registers every guest through the national <b>eVisitor</b> system within 24 hours of arrival, which is why even a small apartment host will ask for your passport and often for the tax in cash. For the wider picture see the <a href=\"/croatia\">Croatia money guide</a>."
          ]
        },
        {
          h: "What you will actually pay",
          icon: "euro",
          key: { fig: "About 2 euros", tag: "Coast, main season", text: "Most coastal towns sit near 2 euros per adult per night from April to September, and roughly 1 to 1.50 euros the rest of the year. Campsites are lower.", tone: "teal" },
          p: [
            "To make that concrete, <b>Rijeka</b>'s official 2026 figures are <b>2 euros</b> per person per night for hotel-type accommodation from <b>1 April to 30 September</b> and <b>1.50 euros</b> for the rest of the year, with <b>campsites</b> at <b>1.50 and 1 euro</b>. That is a fair template for a mainstream coastal town. The most in-demand destinations sit at the top of the band, with Dubrovnik reported around <b>2.65 euros</b> in season, and <b>Zagreb</b> runs a flat year-round figure just under <b>2 euros</b>. Two adults on a week at the coast in summer therefore pay about <b>28 euros</b> in total, roughly <b>32 dollars</b>.",
            "We are deliberately not publishing a town-by-town table, and it is worth saying why. Several widely shared Croatian rate tables reproduce the old <b>kuna-era</b> schedule converted into odd euro amounts, which is how figures like 1.86 and 1.33 euros ended up circulating as if they were current national bands. Official town decisions for 2026 do not always match them. Treat any tidy national table with suspicion and use the figure on your booking or your destination's tourist board page."
          ]
        },
        {
          h: "Children, teenagers and the other exemptions",
          icon: "tag",
          key: { fig: "Under 12 free", tag: "12 to 18 pay half", text: "Children under 12 pay nothing and 12 to 18-year-olds pay half, so a family with young children pays for the adults only.", tone: "teal" },
          p: [
            "The exemptions are set nationally, so they hold wherever you go, and they are unusually generous. <b>Children under 12 pay nothing.</b> <b>Anyone from 12 up to 18 pays half.</b> That means a family of two adults and two children under 12 pays exactly what the couple alone would, and a family with a 14-year-old adds only half a share. Also exempt: people with a <b>disability of 70 percent or more, plus one companion</b>, and students and pupils staying in the town where they study but do not live.",
            "One that almost nobody claims: anyone <b>up to 29</b> who is a member of an international youth organisation in the Hostelling International network pays <b>half</b> when staying in an HI hostel. People staying purely for <b>work</b> in a town where they do not live are exempt for the working period, and so are professional crew on charter and cruise vessels. Every exemption has to be evidenced with a document, a contract or a certificate, so carry proof rather than expecting the host to take your word."
          ]
        },
        {
          h: "Boats, cruise ships, and what to watch",
          icon: "alert",
          key: { fig: "Not just hotels", tag: "Charter and cruise too", text: "Nights on a charter yacht or a multi-day cruise boat are taxed too, and cruise ships pay while berthed in a Croatian port.", tone: "amber" },
          p: [
            "The tax reaches further than hotels, which matters in a sailing country. Nights spent aboard a <b>nautical tourism vessel</b>, meaning a chartered yacht or boat or a multi-day cruise boat, are charged the same way, and <b>cruise ships on international itineraries</b> pay while berthed in a Croatian port or at anchorage. Owners of holiday homes and private boats pay for themselves and their guests, sometimes as an annual flat sum. If you are chartering, ask the operator whether the tax is inside the quoted price, because on boats it often is.",
            "For 2026 the thing to watch is pressure rather than a change. Coastal municipalities and islands have been openly discussing <b>higher tourist taxes and additional seasonal or environmental levies</b>, and Dubrovnik has floated another increase. <b>None of that is law</b>, so budget the current figures and treat the rest as a 2027 question. If it is legislated, we will change this page."
          ]
        }
      ],
      faqs: [
        { q: "How much is the tourist tax in Croatia in 2026?", a: "There is no single national rate. Most coastal and island towns charge around 2 euros per adult per night from April to September and roughly 1 to 1.50 euros outside that, with the busiest places a little higher and inland towns lower. Campsites are charged less." },
        { q: "Do children pay the tourist tax in Croatia?", a: "Children under 12 pay nothing, and anyone aged 12 to 18 pays half. So two adults with two young children pay the same as the couple would alone. The exemptions are set in national law, so they apply in every town." },
        { q: "Is Croatia's tourist tax per person or per room?", a: "Per person, for each night, so it scales with the size of your party rather than attaching to the room. That is the opposite of the Greek and Icelandic fees. Nights on a chartered yacht or a multi-day cruise boat are charged too." },
        { q: "Why is my Croatian host asking for the tourist tax in cash?", a: "Because that is standard practice, particularly for private apartments. The host is required to register you through the national eVisitor system within 24 hours and to remit the tax to the local tourist board, so a cash request on arrival is normal. Ask for it to be shown on your receipt." }
      ],
      sources: {
        links: [
          { label: "Government of Croatia: who pays the tourist tax, the full exemption list, and the 50 percent reduction for 12 to 18-year-olds, in Croatian", url: "https://gov.hr/hr/turisticka-pristojba/1520", type: "gov" },
          { label: "Rijeka tourist board: the town's own 2026 amounts, 2 euros per person per night from 1 April to 30 September and 1.50 outside it, with lower campsite rates", url: "https://visitrijeka.hr/turisticka-pristojba", type: "tourism" },
          { label: "Total Croatia News: coastal municipalities and islands debating higher tourist taxes and extra seasonal levies ahead of the 2026 season", url: "https://total-croatia-news.com/news/croatia-s-tourism-taxes/", type: "news" }
        ],
        judgment: "The structure and every exemption on this page are from the Croatian government's own tourist tax page, so the under-12 and 12-to-18 rules are facts rather than a local courtesy. The amounts are the genuinely uncertain part, by design of the system: national law sets a band and each county fixes a figure per town per year, so we have used one official town decision, Rijeka's 2026 amounts, as the worked anchor and given a range for everywhere else. Dubrovnik's higher season figure is from reporting rather than a municipal decision we read. We have deliberately avoided the national rate tables in circulation, several of which look like the pre-euro kuna schedule converted and no longer match official town decisions. Confirm the figure with your accommodation. Checked August 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Euro (EUR), since 2023" },
        { k: "Was", v: "The kuna, now retired" },
        { k: "Cards", v: "Card-friendly, contactless common" },
        { k: "On a card", v: "Choose euros, not dollars" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Croatia? Euros vs cards 2026",
      description: "Croatia switched to the euro in 2023, so ignore older kuna advice. Cards are widely taken, but carry euros for small spots and the islands.",
      h1: "Do I need cash in Croatia, or can I use cards?",
      lede: "Short answer: a card for most things, a little euro cash for the rest. The big update: Croatia switched to the euro in 2023, so any older advice about the kuna is out of date. Here is how to handle it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Cards, mostly, with a little cash. The big change: Croatia <b>adopted the euro on 1 January 2023</b>, retiring the <b>kuna</b>, so any older guidance quoting kuna prices is <b>out of date</b>, it is <b>euros now</b>. Croatia is <b>card-friendly</b>: <b>contactless</b> is common in cities and along the coast, and Apple Pay and Google Pay are widely taken. Keep <b>some euro cash</b> for small shops, markets, islands and rural spots. Choose <b>euros, not dollars</b> on any card or ATM.",
      sections: [
        {
          h: "It is euros now, not kuna",
          icon: "phoneok",
          key: { fig: "Euro since 2023", tag: "The kuna is gone", text: "Croatia adopted the euro on 1 January 2023, so ignore older kuna advice. It is card-friendly, with contactless common in cities and along the coast.", tone: "teal" },
          p: [
            "The headline for returning visitors: Croatia <b>joined the euro on 1 January 2023</b> (and Schengen the same day), retiring the old <b>kuna</b>. Any guidebook or blog still quoting <b>kuna</b> prices is <b>out of date</b>; the currency is now the <b>euro</b>.",
            "Croatia is <b>card-friendly</b>. <b>Contactless</b>, Apple Pay and Google Pay are widely accepted in cities and along the tourist coast, and <b>Visa and Mastercard</b> work in most places. Keep <b>some euro cash</b> for small shops, <b>markets, islands, ferries and rural spots</b>, which lean more on cash."
          ]
        },
        {
          h: "Choose euros, not dollars",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose euros", text: "When a terminal or ATM offers dollars or euros, pick euros. Dollars trigger dynamic currency conversion at a rate about 3 to 8% worse than your bank's.", tone: "amber" },
          p: [
            "When a card terminal or ATM asks whether to charge in <b>dollars or euros, always choose euros</b>. Dollars trigger dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. Decline it every time.",
            "For cash, use an ATM (a <b>bankomat</b>) attached to a <b>real bank</b>, such as Zagrebacka banka or Privredna banka Zagreb, rather than a standalone <b>Euronet</b> kiosk, which charges high fees and pushes the dollar conversion."
          ]
        },
        {
          h: "How much cash, and paying",
          icon: "euro",
          key: { fig: "A little", tag: "For islands and markets", text: "A card covers most spending. Keep a little euro cash for markets, islands, ferries and rural spots, and use a debit card at the ATM.", tone: "teal" },
          p: [
            "A <b>card covers most spending</b>, especially in Dubrovnik, Split and Zagreb. Keep <b>a little euro cash</b> for <b>markets, islands, small ferries and rural areas</b>, where cards are less certain. Use a <b>debit card</b> at the ATM to avoid cash-advance fees.",
            "For the wider picture, see the <a href='/croatia'>Croatia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Croatia?", a: "A little. Croatia is card-friendly, and contactless is common in cities and along the coast. Keep some euro cash for markets, islands, ferries and rural spots, but a card covers most spending." },
        { q: "Does Croatia use the euro or the kuna?", a: "The euro. Croatia adopted the euro on 1 January 2023, retiring the kuna, so any older advice quoting kuna prices is out of date. The currency is now the euro." },
        { q: "Should I pay in euros or dollars in Croatia?", a: "Always euros. If a card machine or ATM offers dollars, decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
        { q: "Is Croatia still on the kuna?", a: "No. Croatia switched from the kuna to the euro on 1 January 2023. Prices, cards and cash are all in euros now, so ignore older kuna figures." }
      ],
      sources: {
        links: [
          { label: "European Central Bank: the official euro reference exchange rates", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html", type: "gov" },
          { label: "US State Department: Croatia country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Croatia.html", type: "gov" }
        ],
        judgment: "Croatia's euro adoption on 1 January 2023 is a fixed fact, and much older travel advice still references the kuna, so this update matters. The euro rate moves, and the firm rule is to decline dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "bringing-your-pet",
      glance: [
        { k: "Process", v: "Shared EU entry" },
        { k: "Need", v: "ISO chip, rabies, EU health cert" },
        { k: "Enter within", v: "10 days of endorsement" },
        { k: "Coming home", v: "Simple CDC path" }
      ],
      live: true,
      topic: "pets",
      insurance: true,
      title: "Bringing a dog or cat to Croatia from the US 2026",
      description: "Croatia runs on the shared EU health-certificate process, with no quarantine and no titer. What is Croatia-specific on arrival and after you settle in.",
      h1: "Bringing your dog or cat to Croatia.",
      lede: "Croatia runs on the single EU pet-entry process for a US-origin dog or cat: microchip, rabies in the right order, and an EU health certificate on a 10-day clock. No quarantine, no rabies titer. Here is what that means for Croatia, and the local parts worth knowing.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Croatia uses the <b>shared EU pet-entry process</b>, so there is no separate national permit and nothing unusual at the border. Your pet needs an <b>ISO microchip, a rabies vaccination given after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS</b>, then must enter within <b>10 days</b> of that endorsement. There is <b>no quarantine and no rabies titer</b> for a pet coming straight from the US. The full step-by-step, the ordering trap, and the current fees are on one page: see <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a>. Below are the Croatia-specific notes. Coming home to the US is the easy part.",
      sections: [
        {
          h: "Croatia runs on the EU process",
          icon: "health",
          key: { fig: "10 days", tag: "No Croatia-only permit", text: "The standard EU move: an ISO microchip first, a rabies shot after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS. Enter Croatia within 10 days of that endorsement.", tone: "teal" },
          p: ["There is no Croatia-only pet permit and no national quarantine. Bringing a dog or cat into Croatia from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.", "Because the core process is identical across the EU (and the countries that follow its rules), we do not repeat it per country. The full sequence, the microchip-before-rabies trap that costs people the most time, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the Croatia notes."]
        },
        {
          h: "The Croatia-specific parts",
          icon: "receipt",
          key: { fig: "Check", tag: "At the border", text: "Croatian customs may ask to see the endorsed certificate and confirm the chip, and pets should arrive through a designated traveller point of entry, which the major airports are.", tone: "teal" },
          p: ["At the border, Croatian customs may ask to see the endorsed certificate and confirm the microchip, and pets should enter through a designated traveller point of entry, which the major airports are. There is no dog or cat tapeworm rule for Croatia, unlike Ireland, Finland or Malta.", "After you settle in, Croatia requires dogs to be microchipped and registered in the national database once you have a local address, handled through a local vet, and rabies vaccination must be kept current. There is no national banned-breed list of the strictest kind, but standard leash and control rules apply in public. Register the dog once you have an address and keep the EU certificate until you do."]
        },
        {
          h: "The money side, honestly",
          p: [
            "No insurance product reimburses quarantine boarding anywhere, so if you later move on to a destination that requires it, budget that as an out-of-pocket cost. Nationwide is the one US pet insurer that reimburses vet care at any licensed vet worldwide, and even it excludes boarding.",
            "US pet insurance is written around a pet that lives in the US. Most policies carry a policy territory, typically the US and sometimes Canada or Puerto Rico, and even the ones that reimburse vet care worldwide generally require your primary residence to stay in the US. So a policy may well pay a vet bill on a trip abroad and still lapse the day the move becomes permanent. Read your own policy's territory and residency wording before you assume it travels with you, and for a permanent move plan on taking out local pet insurance in your new country.",
            "As a rough sanity check on any quote, and this is our read of current market pricing rather than an official figure: a standard international pet move tends to run about $1,500 to $6,000. Full-service door-to-door typically costs 30 to 50 percent more than a transport-only booking where you handle the vet work and paperwork yourself.",
            "The costs people forget are the small ones. USDA APHIS charges a user fee to endorse an export health certificate, currently $101 where no test verification is needed, $160 for a certificate covering one or two tests, and $206 for three to six tests, with rabies vaccination not counted in that tally. These rates rose on 10 January 2025, the first APHIS fee adjustment since 2012. Add an airline-compliant crate (roughly $50 to $400), the travel vet visits themselves, boarding on a layover, and summer heat surcharges.",
            "Pet shipping attracts scammers, so verify any company before you send money. IPATA, the International Pet and Animal Transportation Association, is a trade association: its members ship under their own company names, IPATA itself does not ship pets, and there is no legitimate shipper with \"ipata\" in its name. Scammers clone real shippers' sites, logos and testimonials, so check the company in the member directory at ipata.org rather than trusting a logo on a website. Treat these as red flags: a quote dramatically below every other quote, a domain registered less than six months ago, email coming from a gmail address rather than the company domain, and any request to pay by Western Union or MoneyGram.",
            "One dated note for EU moves: the EU's pet travel rules were remade by Commission Delegated Regulation (EU) 2026/131, which applies from 22 April 2026, with the new certificate models set out in Implementing Regulation (EU) 2026/705. On the US side, APHIS is switching to the new non-commercial certificate on 1 October 2026 and can endorse the current one up to 30 September 2026. We cover the detail on the <a href=\"/eu-pet-health-certificate\">EU pet health certificate</a> page."
          ]
        },
        {
          h: "Coming back to the US is the easy part",
          icon: "plane",
          key: { fig: "Easy", tag: "The return trip", text: "A dog flying home from Croatia is on the simplest CDC path: usually a CDC Dog Import Form receipt, a microchip, and a minimum age of 6 months.", tone: "teal" },
          p: ["Good news for the return trip: a dog flying home to the US from Croatia is on the simplest CDC path, typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement.", "For the wider picture, including how Croatia compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Croatia",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-croatia",
        note: "The US-side steps and the EU health certificate for Croatia. Croatia applies the shared EU process, and the destination's own authorities are the final word on the day."
      },
      faqs: [
        {
          q: "Is there anything Croatia-specific beyond the EU rules?",
          a: "A little. Croatia has no tapeworm rule (that applies to Ireland, Finland and Malta). After you arrive, dogs are microchipped and registered in the national database through a local vet, and rabies vaccination must be kept current. Standard leash rules apply in public."
        },
        {
          q: "Does my pet have to go into quarantine in Croatia?",
          a: "No. Croatia applies the shared EU pet-entry process, which has no quarantine and no rabies titer for a pet coming straight from the US. Your pet needs a microchip, a rabies vaccination in the right order, and an EU Animal Health Certificate endorsed by APHIS, then must arrive within 10 days of endorsement. See our EU pet health certificate page for the full process."
        },
        {
          q: "Do I need to quarantine my pet coming back to the US from Croatia?",
          a: "No. A dog returning to the US from Croatia is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details."
        }
      ],
      sources: {
        links: [
          {
            label: "True Trip Costs: the EU pet health certificate, the shared microchip, rabies and certificate process for all EU countries including Croatia",
            url: "/eu-pet-health-certificate",
            type: "internal"
          },
          {
            label: "USDA APHIS: pet travel from the United States to Croatia, the US-side steps and EU health certificate",
            url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-croatia",
            type: "gov"
          },
          {
            label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg",
            url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html",
            type: "gov"
          }
        ],
        judgment: "Croatia applies the shared EU pet-entry framework, set by the EU and administered on the US side by APHIS, not by us. The process is stable in substance, though the EU certificate format changes on 1 October 2026, which we cover on the EU pet health certificate page. The local registration and any breed rules vary, so we point you to the official pages and dated this July 2026."
      }
    },
    {
      slug: "driving-and-tolls",
      glance: [
        { k: "Vignette", v: "None, Croatia charges by distance" },
        { k: "How", v: "Ticket in, pay at the exit" },
        { k: "Paying", v: "Euro cash, card or an ENC device" },
        { k: "Coming change", v: "Free-flow tolling from March 2027" }
      ],
      live: true,
      topic: "driving",
      caution: "medium",
      title: "Driving in Croatia: tolls, no vignette, 2027 change",
      description: "No vignette in Croatia: you take a ticket and pay in euros at the exit, sometimes across several operators. Free-flow tolling is due in 2027.",
      h1: "Driving in Croatia: tolls and the 2027 change",
      lede: "Croatia is refreshingly simple to drive: there is no vignette to buy, and you pay for exactly the distance you use. The two things worth knowing are that a single trip can involve several toll operators, and that the whole system is due to change in 2027.",
      checked: "Jul 2026",
      checkedISO: "2026-07-30",
      answer: "Croatia has <b>no motorway vignette</b>. You pay by <b>distance</b>: take a ticket at the entry plaza, hand it in at the exit, and pay for the stretch you drove. Payment is by <b>euro cash, card or an ENC electronic device</b>, and tariffs include VAT. A long run like <b>Zagreb to Split costs roughly 30 euros</b> for a car as of 2026, so use the operator's calculator to price your route. One quirk: the network is run by <b>several operators</b>, so a multi-leg trip pays each one separately. And a real change is scheduled: the barrier system stays for now, with a <b>nationwide free-flow system due on 1 March 2027</b>, so confirm the position before a 2027 trip.",
      sections: [
        {
          h: "No vignette: ticket in, pay at the exit",
          icon: "wheel",
          key: { fig: "By distance", tag: "Not by time", text: "Unlike Slovenia, Austria or Switzerland, Croatia sells no time-based vignette. You take a ticket entering the motorway and pay at the exit for the distance driven.", tone: "teal" },
          p: [
            "If you have driven in Slovenia, Austria or Switzerland you will be looking for a sticker to buy at the border. In Croatia there is <b>nothing to buy in advance</b>. The motorways run a <b>distance-based toll</b>: on most of the network you take a <b>ticket at the entry plaza</b>, keep it somewhere you will not lose it, and <b>hand it in at the exit</b>, where the toll is calculated from the two points and your vehicle category. Some shorter stretches use a single plaza that is both entry and exit, where you simply pay as you pass.",
            "At the booth you can pay with <b>euro cash</b>, since Croatia has been on the euro since 2023, with a <b>card</b>, or with an <b>ENC electronic device</b>. Tariffs are <b>VAT inclusive</b>, and vehicle category depends on height and axles, which matters if you have rented something tall or fitted a roof box, since that can move you into a higher band. As a sense of scale, a full <b>Zagreb to Split</b> run is <b>roughly 30 euros</b> for an ordinary car as of 2026. Rates are revised periodically, so price your actual route on the motorway operator's own calculator rather than trusting a figure from a blog."
          ]
        },
        {
          h: "Several operators, and the change coming in 2027",
          icon: "calendar",
          key: { fig: "1 March 2027", tag: "Free-flow tolling", text: "Croatia plans to replace barriers with a nationwide free-flow system read from plates and devices, scheduled for 1 March 2027. Through 2026 the ticket-and-booth system still applies.", tone: "amber" },
          p: [
            "The network is not one company. <b>Hrvatske autoceste (HAC)</b> runs most of it, including the A1 down the Dalmatian coast, while <b>Bina Istra</b> operates the Istrian motorways, <b>AZM</b> the A2 towards Slovenia and <b>ARZ</b> the Zagreb to Rijeka corridor. The practical effect is that a <b>multi-leg trip pays each operator separately</b>, so Istria to Split can mean more than one toll transaction, and some tunnels are charged on their own. Budget for the total route rather than a single number.",
            "The <b>ENC device</b> is optional for cars. It gives you the electronic lanes and a discount, but the size of the discount depends on the account type and it needs registration and a deposit, so it earns its keep on a long or repeated trip rather than a week's holiday. Most <b>rental cars do not come with one</b>, so assume you are paying at the booth. Looking ahead: Croatia is <b>replacing the barriers with a nationwide free-flow system</b>, read from number plates and devices, currently scheduled for <b>1 March 2027</b>. Timelines here have moved before, and through 2026 the ticket-and-booth system is what you will meet, so <b>check the current position</b> if you are planning a 2027 drive."
          ]
        },
        {
          h: "The other costs of a Croatian road trip",
          icon: "receipt",
          key: { fig: "Ask first", tag: "Before crossing a border", text: "Taking a rental into Bosnia or Montenegro usually needs the company's permission and extra cover, arranged in advance. Turning up at the border without it is where a plan falls apart.", tone: "amber" },
          p: [
            "Three costs sit outside the toll booth. <b>Ferries</b> to the islands are separate and, at smaller ports, cash is the easy way to pay. <b>Parking</b> in the coastal towns is metered and often wants coins, which is one of the reasons to keep euros on you here. And the <b>coastal road</b>, the old Adriatic Highway, is toll-free and beautiful and much slower than the motorway, which makes the toll a genuine choice rather than a tax: on a long transfer day the motorway usually wins, on a scenic day it does not.",
            "If your route crosses a border, plan it before you collect the car. Taking a rental into <b>Bosnia and Herzegovina or Montenegro</b> normally requires the rental company's <b>permission and additional cross-border cover</b>, arranged in advance and usually for a fee, and the paperwork is checked at the frontier. Note that the <b>Peljesac Bridge</b> now carries the coastal route past the Bosnian corridor, so the Dubrovnik drive no longer requires those two crossings at all. Finally, carry an <b>International Driving Permit</b> with your US license: it is the standardised translation, cheap, valid for a year, and only obtainable in the US before you travel. Camera-caught fines reach you later through the rental company with an admin fee. This guide is written for US travelers departing the US. For more, see <a href='/croatia/cash-or-card'>cash or card in Croatia</a>, <a href='/croatia/taxis-and-apps'>taxis and apps in Croatia</a>, and the <a href='/croatia'>Croatia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Does Croatia have a motorway vignette?", a: "No. Croatia charges by distance rather than by time, so there is nothing to buy before you enter. You take a ticket at the motorway entry plaza and pay at the exit for the stretch you drove." },
        { q: "How much is the toll from Zagreb to Split?", a: "Roughly 30 euros for an ordinary car as of 2026, though rates are revised periodically and your exact entry and exit points change the figure. Price your route on the motorway operator's own calculator before you go." },
        { q: "Can I pay Croatian tolls by card?", a: "Yes. Toll plazas take euro cash, most international cards, or an ENC electronic device. The ENC gives you the faster lanes and a discount but needs registration and a deposit, and most rental cars do not come with one." },
        { q: "Can I take my Croatian rental car into Bosnia or Montenegro?", a: "Usually only with the rental company's permission and extra cross-border cover, arranged in advance and normally for a fee, with the paperwork checked at the border. Note that the Peljesac Bridge means the drive to Dubrovnik no longer crosses Bosnia at all." }
      ],
      sources: {
        links: [
          { label: "Hrvatske autoceste: the motorway operator's official toll page, explaining distance-based charging, the open and closed systems and accepted payment methods", url: "https://www.hac.hr/en/toll", type: "official" },
          { label: "Croatian National Tourist Board: official visitor information for driving and travel in Croatia", url: "https://croatia.hr/en-gb", type: "gov" }
        ],
        judgment: "The distance-based system and the payment methods come from the operator's own page. The Zagreb to Split figure is an approximation from recent published tariffs, ENC discounts vary by account type, and the 1 March 2027 free-flow date is a scheduled change that has already slipped once, so treat it as planned rather than certain. Checked July 2026."
      }
    },
    {
      slug: "money-scams",
      glance: [
        { k: "Most cost", v: "The bill, mostly" },
        { k: "Seafood", v: "Priced by the kilogram" },
        { k: "Receipts", v: "You are owed one by law" },
        { k: "Parking", v: "Do not scan a QR sticker" }
      ],
      live: true,
      topic: "scams",
      title: "Common money scams in Croatia, and what they cost",
      description: "Seafood priced by the kilo, unordered extras on the bill, port and airport taxi overcharging and fake parking QR codes. What each costs, and how to sidestep it.",
      h1: "Common money scams in Croatia, and what they cost you",
      lede: "Croatia is one of Europe's safest countries, it absorbs nearly twenty million visitors a year without much trouble, and violent crime against tourists is close to nonexistent. What can go wrong here is almost entirely about the bill: a fish priced by the kilogram, a plate you did not order, a taxi at the port with no meter running. These are coastal-season pricing habits more than cons, and reading one document defeats most of them. Here is each, what it costs, and how to sidestep it.",
      checked: "Aug 2026",
      checkedISO: "2026-08-15",
      answer: "Croatia's money traps are concentrated on the summer coast. <b>Fish and shellfish are priced by the kilogram</b>, so a shared fish can land at a number nobody expected. <b>Bread, olives or a small plate</b> brought unasked are chargeable items. <b>Taxis</b> at ferry ports, cruise berths and airports quote flat rates well above the meter. And in Dubrovnik, drivers have been caught by <b>fake QR stickers pasted over parking meter codes</b>. Two habits cover nearly all of it: <b>ask the price per kilo and the weight before the fish is cooked</b>, and <b>take the receipt</b>, which Croatian law requires the business to give you. Add the usual pair: <b>skip the Euronet ATMs</b> and <b>always choose euros</b>.",
      sections: [
        {
          h: "Seafood priced by the kilogram",
          icon: "bowl",
          key: { fig: "Ask the weight", tag: "Before it is cooked", text: "Coastal menus price fish and shellfish per kilogram, not per portion. Ask the price per kilo and the weight of the fish you are choosing, before it goes to the kitchen.", tone: "amber" },
          p: [
            "This is not a scam, it is how the Adriatic coast has always sold fish, and it is the single most common bill shock in Croatia. A konoba menu lists whole fish and shellfish <b>by the kilogram</b>, not by the plate. You pick a fish, it is weighed, and the price is the weight times the rate. A fish that looked like a reasonable shared main can weigh well over a kilo, and premium species carry premium per-kilo rates, so the number at the end can be several times what a per-portion reading suggested.",
            "The fix is one question, asked at the right moment: <b>before the fish goes to the kitchen</b>, ask the price per kilogram and the weight of the specific fish. A good restaurant will show you the fish and the scale without any awkwardness, and that is a decent test of the place. Frozen fish must be marked as such on Croatian menus, so check that too. None of this applies to the fixed-price grilled and fried dishes further down the menu, which are usually excellent value."
          ]
        },
        {
          h: "Unordered extras, and the receipt you are owed",
          icon: "receipt",
          key: { tag: "Take the receipt", text: "Bread, olives or a couvert brought unasked are chargeable, not complimentary. Croatian law requires a fiscalized receipt for consumer sales, so ask for it and check the itemization.", tone: "teal" },
          p: [
            "The second coastal habit is small plates arriving without being ordered: <b>bread, olives, a couvert, a dip</b>. These are chargeable items, itemized at a few euros each, and accepting them is treated as ordering them. Decline what you do not want as it arrives, rather than at the bill. In the busiest tourist streets you may also meet the version with no printed prices at all, or a menu produced verbally, which is the tell to walk on.",
            "Croatia gives you a strong tool here, and most visitors do not use it. Under the <b>Fiscalization Act</b>, a business is required to issue a <b>fiscalized receipt</b> for a consumer sale, reported to the Tax Administration, and from 1 January 2026 that applies regardless of how you paid. The receipt must show the supplier, the items, the total and the tax by rate. So <b>ask for the receipt and read it before you pay</b>. It is a completely normal request here, it is itemized rather than a scrawled total, and it is the quickest way to see a charge you did not agree to."
          ]
        },
        {
          h: "Taxis at the port and the airport",
          icon: "taxi",
          key: { fig: "Uber or Bolt", tag: "Not the one waiting", text: "Ferry terminals, cruise berths and airports are where flat rates well above the meter appear. Croatian taxis come in every colour, so you cannot spot a licensed one by looking.", tone: "teal" },
          p: [
            "Most Croatian drivers are straight, and the overcharging concentrates exactly where you would expect: <b>Dubrovnik's Port Gruz</b> at cruise arrival and departure, <b>Split's ferry terminal and airport</b>, and late-night arrivals generally. The move is a flat rate quoted instead of the meter, at a multiple of the metered fare. A complication worth knowing: <b>Croatian taxis come in many colours</b>, so unlike Budapest you cannot identify a licensed one by looking at it.",
            "<b>Uber and Bolt</b> both operate in Zagreb, Split, Dubrovnik and Zadar, they fix the fare before you get in, and they are usually cheaper than a traditional cab on the coast in summer. That is the default. If you do take a street taxi, check the <b>pricing table displayed on the vehicle</b> and make sure the meter runs from the start. Where an airport or port shuttle bus exists, it is cheaper than all of it. The <a href=\"/croatia/taxis-and-apps\">Croatia taxis and apps guide</a> has the detail."
          ]
        },
        {
          h: "Parking, and the QR sticker over the QR code",
          icon: "qr",
          key: { tag: "Pay at the meter", text: "Croatian press reported that in July 2025 fake QR stickers were found pasted over the real codes on Dubrovnik parking meters, sending drivers to a page that harvested card details.", tone: "teal" },
          p: [
            "This one is newer and worth a moment because the loss is your card details rather than a parking fee. In <b>July 2025</b>, Croatian press reported that stickers carrying <b>fake QR codes</b> had been pasted over the legitimate codes on parking meters in Dubrovnik, with the police involved and city staff peeling them off. Drivers who scanned were taken to a convincing copy of the payment page, which captured card number, expiry and security code, and the parking was never actually paid, so a ticket followed as well.",
            "The technique, known as quishing, is documented worldwide, with warnings from US law enforcement and councils in the UK and Australia, so treat it as a general habit rather than a Dubrovnik problem. Two defenses: <b>pay at the meter face itself</b>, by card or coin, or use the city's own official parking app rather than a code found on a post; and if you do scan, <b>look at the sticker first</b>, since a fake one sits slightly raised, misaligned, or over other printed text. Check the address in your browser before typing a card number into anything."
          ]
        },
        {
          h: "What this means for your money",
          icon: "euro",
          key: { fig: "Habits", tag: "How to avoid it", text: "Ask the price per kilo and the weight before the fish is cooked, take the receipt, book rides in an app, skip the Euronet ATMs, and always choose euros at the terminal.", tone: "teal" },
          p: [
            "Croatia's whole list is really two habits and a couple of housekeeping rules: <b>ask the price per kilo and the weight before the fish is cooked</b>, <b>take the receipt and read it</b>, <b>book rides in an app at ports and airports</b>, and <b>do not scan a roadside QR sticker</b>. Add the standard pair that costs quietly everywhere: <b>avoid the standalone Euronet ATMs</b> that cluster along the tourist coast and use a machine attached to a Croatian bank such as Zagrebacka, PBZ or Erste, and <b>always choose euros</b> rather than dollars at any terminal or ATM.",
            "One thing that is not a trap but does surprise people: Croatia switched fully to the <b>euro</b> in 2023, so any guidance quoting kuna prices is out of date, and leftover kuna cannot be spent. Carry some euro cash for the islands, small konobas and dockside sellers, since cards thin out once you leave the bigger towns. For getting and spending money well while you are there, see the <a href=\"/croatia/cash-or-card\">Croatia cash and cards guide</a> and the <a href=\"/croatia\">Croatia cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Croatia safe for tourists?", a: "Very. Croatia is one of Europe's safest countries, it hosts close to twenty million visitors a year, and violent crime against tourists is close to nonexistent. What travelers actually meet is billing: seafood priced by the kilogram, small plates charged as items, and taxi overcharging at ferry ports and airports. All of it is avoidable with a couple of habits." },
        { q: "Why was my fish so expensive in Croatia?", a: "Because coastal menus price whole fish and shellfish by the kilogram rather than per portion, so the bill is the weight times the rate. A fish that looks like a shared main can weigh well over a kilo. Ask the price per kilo and the weight of the specific fish before it goes to the kitchen. A good restaurant will show you the fish and the scale." },
        { q: "Am I entitled to a receipt in Croatia?", a: "Yes. Under Croatia's Fiscalization Act, a business must issue a fiscalized receipt for a consumer sale and report it to the Tax Administration, and from 1 January 2026 that applies regardless of how you paid. The receipt shows the supplier, the items, the total and the tax by rate, so asking for it and reading it before you pay is both normal and the fastest way to catch a charge you did not agree to." },
        { q: "Is the bread and olives free in a Croatian restaurant?", a: "Usually not. Bread, olives or a small plate brought without being ordered are chargeable items, itemized at a few euros each, and accepting them counts as ordering them. Decline what you do not want as it arrives rather than arguing at the bill. A restaurant with no printed prices at all is a reason to walk on." },
        { q: "How do I avoid taxi overcharging in Croatia?", a: "Use Uber or Bolt, which operate in Zagreb, Split, Dubrovnik and Zadar and fix the fare before you get in. Overcharging concentrates at Dubrovnik's Port Gruz on cruise days, Split's ferry terminal and airport, and late-night arrivals. Croatian taxis come in many colours, so you cannot spot a licensed one by looking; check the pricing table on the vehicle and that the meter runs." },
        { q: "Are the parking QR codes in Dubrovnik safe to scan?", a: "Be careful. Croatian press reported in July 2025 that fake QR stickers had been found pasted over the real codes on Dubrovnik parking meters, sending drivers to a page that harvested card details while the parking went unpaid. Pay at the meter face itself or use the city's official parking app, and inspect any sticker, since a fake one sits slightly raised or misaligned." }
      ],
      sources: {
        links: [
          { label: "UK FCDO: Croatia travel advice, safety and security", url: "https://www.gov.uk/foreign-travel-advice/croatia/safety-and-security", type: "gov" },
          { label: "US State Department: Croatia country information and safety guidance for travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Croatia.html", type: "gov" }
        ],
        judgment: "The receipt obligation comes from Croatia's Fiscalization Act, which took effect in its current form on 1 January 2026 and requires a fiscalized consumer receipt regardless of payment method. The per-kilogram seafood pricing and the chargeable unordered plates are long-standing coastal conventions rather than scams, and we have framed them that way; we have not attached a figure to either, because the amount depends entirely on the fish and the venue. The Dubrovnik fake QR parking codes are reported by Croatian press for July 2025 with police involvement, and we have described them as reported rather than as a government advisory item; the underlying technique is documented by law enforcement in several countries. Croatia has used the euro since 2023. Checked August 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Strong on the coast and in the cities" },
        { k: "Carrier roaming", v: "$10 to $12 a day" },
        { k: "Cheapest", v: "A travel eSIM, a few $ per GB" },
        { k: "Signal gaps", v: "Island ferries, the Velebit interior" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "eSIM for Croatia: the cost math, and island crossings",
      description: "Croatian coverage is strong along the coast and in the cities, so this is a cost question. The gaps are the island ferries and the mountainous interior.",
      h1: "Staying connected in Croatia.",
      lede: "Croatia covers its coast, its cities and its main islands well, so this is mostly a price decision. What thins out is the bit between islands and the limestone interior nobody drives through by accident.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>strong</b> in Zagreb, Split, Dubrovnik and along the Dalmatian coast, and good on the larger islands including Hvar, Brac and Korcula. It thins on <b>ferry and catamaran crossings</b>, on the smaller islands away from the port towns, and in the mountainous interior of the <b>Velebit</b> and around Plitvice's back trails. Your US carrier charges about <b>${S.dayPass}</b> to roam (<b>AT&amp;T and Verizon</b> day passes), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon has ${S.verizonNoCap}</b> and keeps billing daily. <b>T-Mobile</b>'s mid and upper tiers include <b>${S.tmoRange}</b> of high-speed data abroad before slowing to <b>${S.throttle}</b>. A <b>Nomad eSIM</b> is a few dollars per gigabyte and works from landing. A <b>local prepaid SIM</b> is also cheap here and, because this is an <b>EU</b> country, it carries <b>Roam Like At Home</b> across the rest of the union at no surcharge, which is worth pricing if the trip continues into other EU countries. For island hopping, <b>download your ferry times and maps before you sail</b>. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "A cost question first",
          icon: "roamfee",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: "A US carrier day pass is the expensive default. AT&T caps it at 10 daily fees a bill period, Verizon does not cap at all, and T-Mobile's mid and upper tiers include 5GB to 30GB abroad.", tone: "teal" },
          p: [
            `Croatian networks are good where visitors go, so the question is price. A US carrier day pass is about <b>${S.dayPass}</b>, so <b>${S.week}</b> for a week, with <b>AT&amp;T</b> capping at <b>${S.capFees}</b> and <b>Verizon</b> having <b>${S.verizonNoCap}</b>. <b>T-Mobile</b>'s tiers include roughly <b>${S.tmoLow}</b> on Experience More, Magenta MAX and Go5G Plus, <b>${S.tmoMid}</b> on Experience Beyond and Go5G Next and <b>${S.tmoHigh}</b> on Better Value.`,
            `A <b>Nomad eSIM</b> at a few dollars per gigabyte undercuts the pass for a normal week. An <b>A1</b>, <b>Hrvatski Telekom</b> or <b>Telemach</b> tourist pack is inexpensive and, since Croatia is in the EU, carries EU roaming, which is worth pricing if you are continuing to Slovenia or Italy. Do not roam with <b>no plan</b>, at about <b>${S.ppu}</b>.`
          ]
        },
        {
          h: "Between the islands, and inland",
          icon: "alert",
          key: { fig: "Mid-crossing", tag: "Where signal drops", text: "Catamaran and ferry crossings lose signal on open water. The Velebit interior and back trails are thin on every network.", tone: "amber" },
          p: [
            `The coast is well served and the water between it is not. Longer <b>catamaran and ferry runs</b>, to Vis, Lastovo and the outer Kornati, drop coverage on open water, and the smaller islands can be thin once you leave the port town. Inland, the <b>Velebit</b> range, the Lika plateau and the back trails around <b>Plitvice</b> and Krka have real gaps, as do some of the tunnels and gorges on the older inland roads.`,
            `So download the things you will want: <b>ferry timetables</b>, which change seasonally and matter more here than almost anywhere, your accommodation address, and offline maps for the island or the park. That is preparation rather than purchase, and no plan substitutes for it.`
          ]
        },
        {
          h: "On the coast you are fine",
          icon: "phoneok",
          key: { fig: "The coast", tag: "Well covered", text: "Zagreb, Split, Dubrovnik and the Dalmatian coast have fast 4G and urban 5G, and the big islands are solid in the towns.", tone: "teal" },
          p: [
            `Where most of a Croatian trip happens, there is little to warn about: <b>Zagreb, Split, Zadar, Dubrovnik</b> and the coastal road have fast 4G with 5G in the cities, and <b>Hvar, Brac, Korcula</b> and the other larger islands are solid in the towns, at the ports and along the main roads. Old-town Dubrovnik and Diocletian's palace are comfortably covered.`,
            `The practical reason to carry data here is the same as in Greece: ferry changes, parking apps and finding a konoba at the end of a driving day. This guide is written for US travelers departing the US. For more, see <a href='/croatia/cash-or-card'>cash or card in Croatia</a>, <a href='/croatia/taxis-and-apps'>taxis and apps in Croatia</a>, and the <a href='/croatia'>Croatia money guide</a>.`
          ]
        }
      ],
      faqs: [
        { q: `Will I have signal on Croatian ferries?`, a: `Not throughout. Longer catamaran and ferry runs to the outer islands lose coverage on open water, and smaller islands thin out beyond the port town. Download ferry timetables and offline maps before you sail, since Croatian schedules change seasonally.` },
        { q: `How much does it cost to use my US phone in Croatia?`, a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}.` },
        { q: `Do I need an eSIM for Croatia?`, a: `It is the cheapest way for most US travelers to get real data, at a few dollars per gigabyte against about $10 to $12 a day for a carrier pass. A local A1, Hrvatski Telekom or Telemach tourist pack is also cheap and carries EU roaming if you are continuing to Slovenia or Italy.` },
        { q: `Is coverage good on the Croatian islands?`, a: `On the larger ones, yes: Hvar, Brac and Korcula are solid in the towns, at the ports and on the main roads. Smaller and outer islands are thinner away from the port, and the water between them is the real gap.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "US State Department: Croatia country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Croatia.html", type: "gov" }
        ],
        judgment: "Checked Aug 2026. The ferry point is the honest headline and no data plan fixes it. The seasonal-timetable warning is included because it is the practical reason a Croatian island trip goes wrong, and it is a downloading habit rather than a purchase. Coverage reads are the desk's from operator footprints and traveler accounts. Carrier figures are an Aug 2026 snapshot."
      }
    },
    {
      slug: "medical-costs",
      exposureCategory: "routineAffordable",
      exposureQuote: "In season the coast runs marked tourist clinics, and the prices they charge are Croatian.",
      glance: [
        { k: "Summer coast", v: "Marked tourist clinics" },
        { k: "Hospitals", v: "State-run, bill visitors" },
        { k: "On the islands", v: "Small cases only" },
        { k: "Prices", v: "Croatian, not American" }
      ],
      live: true,
      topic: "health",
      title: "Getting sick in Croatia: tourist clinics on the coast, Croatian prices",
      description: "Croatia stands up marked tourist clinics along the coast and islands every summer, contracted to the national insurer. The serious case still travels to the mainland, and hospital care is state-run and billed to visitors.",
      h1: "What does getting sick in Croatia cost a visitor?",
      lede: "Croatia does something almost charming with its summer crowds: it stands up marked tourist clinics along the coast and islands, under the national health insurer, timed to the season. That is the everyday answer. The serious answer still involves a boat.",
      checked: "Aug 2026",
      checkedISO: "2026-08-21",
      answer: "Croatia's public insurance is for residents and EU card holders, and a US visitor is billed for care. The state has, however, built a lane for exactly the person reading this page: every summer the health authorities stand up <b>tourist clinics at dozens of coastal and island locations</b>, contracted to the national insurer HZZO, <b>clearly marked</b> and running through the end of September. In season the coast runs marked tourist clinics, and the prices they charge are Croatian. Above that lane, <b>hospital-based care is only available through government institutions</b>, per the State Department, and it bills visitors. The geography does the rest: islands carry clinics and small cases, and a serious case <b>moves to the mainland</b>, to Split, Rijeka or Zagreb, with the ride part of the bill.",
      insurance: true,
      insuranceNote: "The honest Croatian read is seasonal and calm: in summer, the state literally builds a clinic lane for tourists, everyday prices are Croatian, and a minor problem on the Riviera is an errand, not an event, which we would rather tell you than dramatise. What earns cover here is the island geometry: the serious case travels to a mainland hospital, and the transfer plus a real admission are the two Croatian bills that get big. Check the medical transport line of any policy before the outpatient one. Faye covers trip medical and evacuation.",
      careFirst: "If it is serious, call 112 and move; treatment comes first and the paying comes after.",
      sections: [
        {
          h: "The summer clinic lane",
          icon: "tag",
          key: { tag: "Built for tourists", text: "Every season Croatia stands up marked tourist clinics along the coast and islands, contracted to the national insurer, into late September.", tone: "teal" },
          p: [
            "Croatia's health ministry does something few countries bother with: each summer it organises <b>tourist clinics</b>, dozens of them, across the coastal counties and out on islands like Brac and Hvar, staffed under contract to the national insurer <b>HZZO</b> and, in the ministry's own words, <b>clearly marked for visibility</b>, running to the end of September.",
            "For the everyday holiday problem, the ear infection, the sea-urchin foot, the fever, that marked door is your door. You will be seen quickly, billed as a visitor, and the number on the receipt will be a Croatian one."
          ]
        },
        {
          h: "Hospitals are the state's, and they bill",
          icon: "receipt",
          key: { tag: "Above the clinic", text: "Hospital care runs through government institutions, which treat first and bill a non-EU visitor for the care.", tone: "teal" },
          p: [
            "Above the clinic tier, the State Department notes a Croatian structural fact: <b>hospital-based care is only available through government institutions</b>. The private sector here does clinics, dentistry and elective work, not the emergency ward, so the serious case lands in a state hospital regardless of your budget.",
            "Those hospitals treat first. If it is serious, call 112 and move; treatment comes first and the paying comes after. A non-EU visitor is then billed for the care, and providers on the ground may expect cash sooner than an American assumes, so keep the receipts and the assistance number together."
          ]
        },
        {
          h: "The island geometry",
          icon: "plane",
          key: { tag: "The real exposure", text: "Islands handle small cases. The serious one travels to Split, Rijeka or Zagreb, and the ride is part of the bill.", tone: "teal" },
          p: [
            "Croatia's thousand islands are the trip, and they are also the constraint. Island facilities, tourist clinics included, exist for the <b>small and the stabilisable</b>. The genuinely serious case, the cardiac event, the bad dive, the moped, moves to a mainland centre, by ferry, speedboat or helicopter, toward <b>Split, Rijeka or Zagreb</b>.",
            "That ride is the distinctly Croatian line on the bill, and it is the line a policy's <b>medical transport benefit</b> exists for. If your itinerary is Hvar and Vis rather than the Zagreb museums, read that line before the outpatient one."
          ]
        },
        {
          h: "What is still worth covering",
          icon: "alert",
          key: { tag: "Proportion", text: "Everyday coastal care is built for you and priced locally. The transfer and the admission are the bills that stay big.", tone: "teal" },
          p: [
            "Here is the honest, commission-costing sentence: on a normal Croatian holiday, <b>the everyday medical side is about as traveler-friendly as Europe gets</b>, a marked clinic lane in season, Croatian prices, competent doctors with long trauma experience.",
            "The bills that stay big are the pair the islands create: the <b>transfer to the mainland</b> and the <b>admission</b> that follows, plus the flight home in the worst case. Point cover there, and for the kuna-era-to-euro money mechanics on the ground, see the <a href='/croatia/cash-or-card'>Croatia cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Are there special clinics for tourists in Croatia?", a: "Yes. Each summer the health authorities stand up clearly marked tourist clinics at dozens of coastal and island locations, contracted to the national insurer HZZO, typically running to the end of September." },
        { q: "Is healthcare free for tourists in Croatia?", a: "No. Public insurance is for residents and EU card holders; a US visitor is treated first and billed, at Croatian rates, with cash sometimes expected on the ground." },
        { q: "What happens if I get seriously ill on a Croatian island?", a: "You move. Islands handle small and stabilisable cases; the serious one transfers to Split, Rijeka or Zagreb by boat or helicopter, and that ride is part of your bill, which is what a policy's transport benefit is for." },
        { q: "Are Croatian hospitals private or public?", a: "Hospital-based care runs through government institutions, per the State Department. The private sector does clinics and elective work, so the emergency ward is the state's regardless of your budget." },
        { q: "What is the emergency number in Croatia?", a: "112, nationwide, with English available. Treatment comes first and the paying comes after, and on an island the clinic and the harbourmaster both know the evacuation drill." }
      ],
      sources: {
        links: [
          { label: "Croatian Ministry of Tourism: announcement of HZZO-contracted, clearly marked tourist clinics operating at coastal and island locations through the season", url: "https://mint.gov.hr/news-11455/tourists-can-get-health-services-at-36-locations-along-coast/23914", type: "gov" },
          { label: "US State Department: Croatia country information, health section, including hospital care running through government institutions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Croatia.html", type: "gov" }
        ],
        judgment: "The tourist-clinic lane is the Croatian government's own announced arrangement, and the state-hospital structure is the State Department's statement. The island-transfer shape is geography plus how Croatian emergency medicine is organised, stated qualitatively. The clinic counts and season dates vary year to year, so we describe the arrangement rather than fixing this year's numbers, and no price figure appears because none was verified against an official tariff. Checked August 2026."
      }
    }
  ]
};
