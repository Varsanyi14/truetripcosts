export default {
  slug: "dominican-republic",
  iso2: "do",
  live: true,
  name: "Dominican Republic",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Sources added. Confirmed with the Dominican Republic's official tourism board that ITBIS (the value-added tax) is 18% and that restaurants, bars and hotels add a further 10% service charge by law, so a restaurant bill runs about 28% over the menu price. Verified there is no separate nightly tourist tax and that the old tourist card, about 10 dollars, is now bundled into the airfare. The US dollar is accepted in resort areas at poor rates, so pesos are better; the peso figure, about 60 to the dollar, is current.",
    links: [
      { label: "Dominican Republic Tourism (official): taxes and service charge FAQ", url: "https://www.godominicanrepublic.com/travel/faqs", type: "tourism" },
      { label: "E-Ticket: official migration entry portal", url: "https://eticket.migracion.gob.do", type: "gov" }
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "911", note: "911 covers the country, though ambulance response is quickest in the cities and resort areas.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "high",
  region: "Americas",
  signals: { cardFriendliness: 3, cashNeed: 3, taxRisk: 3 },
  hook: "Dollars work in the resort zones, but pesos and a watch for the 28% checkout jump save you money.",

  title: "Dominican Republic money: pesos, cards, the 28% bill",
  description: "Dollars work in the resort zones, pesos win outside them. Restaurant bills add 18% ITBIS plus 10% service, so read one before you tip again. Checked 2026.",

  h1: "Money in the Dominican Republic, sorted.",
  lede: "A calm, current plan for the money side of your trip: dollars go a long way in the resort zones, but knowing when to reach for pesos, and why your restaurant bill jumps about 28% at checkout, is what keeps your budget honest.",
  hero: {
    img: "/dominican-republic-hero.jpg",
    h: 1375,
    alt: "A colonial street in the Dominican Republic at dusk with a bell tower framed at the end, brightly painted houses with shutters, balconies and bougainvillea lining both sides, palm trees and string lights overhead, a lone figure walking up the cobblestone street, a cat sitting nearby, and a plate of rice with stewed meat and beans beside fried plantains and an iced drink on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "The Dominican Republic runs on two currencies at once: the Dominican peso (RD$) and the US dollar, which is widely accepted in resort zones like Punta Cana, the Santo Domingo Colonial Zone and La Romana. The simple rule is to <b>pay in whatever currency the price is quoted in</b>, dollars for resorts, tours and airport transfers, pesos for local restaurants, colmados (corner stores), taxis and guaguas (local buses), so you avoid a poor made-up exchange rate. Bring a <b>no-fee card</b> for hotels and bigger spending, pull <b>pesos from a bank ATM</b>, and carry small, pristine US bills as backup. The thing to watch: there's no separate tourist tax, but restaurant and bar bills add an <b>18% ITBIS tax plus a 10% service charge</b>, so a menu price can climb roughly 28% by the time you pay.",

  meter: {
    heading: "Cards cover the resort zones, but you'll want cash the moment you step outside them.",
    cashPct: 48,
    note: "A rough feel for everyday spending. Inside resorts and tourist areas, cards and dollars handle most things. Off the resort, the picture flips: taxis are usually cash only, and colmados, guaguas, motoconchos (motorbike taxis) and small local spots run on pesos. Carry some of both."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Fine in tourist zones, cash elsewhere", p: "Visa and Mastercard work at hotels, resorts, larger restaurants and shops in Punta Cana, Santo Domingo and other tourist areas. Amex is accepted less widely. Outside those zones, and for most taxis, you'll need cash. Apple Pay and Google Pay are turning up in Santo Domingo but aren't reliable nationwide yet.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Two currencies, used differently", p: "Dollars cover resorts, tours and transfers; pesos are better, and often required, for local restaurants, colmados, taxis and buses. Bring small US bills (twenties and under) in perfect condition, since torn or worn notes are routinely refused, and US coins can't be exchanged at all.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Easy, but mind the fees", p: "Bank ATMs (cajeros) are common in cities and tourist towns and dispense pesos, sometimes dollars. Expect a 1 to 3% foreign fee plus the bank's own charge. Use machines inside banks or malls, choose pesos, and decline the \"convert to USD\" prompt. The RD$2,000 note is the most common dispensed.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee card</b> for hotels and bigger spending, plus a backup card.",
      "Pack a stack of <b>small US bills (ones, fives, tens, twenties) in perfect condition</b> for tips and off-resort spending. Skip fifties and hundreds.",
      "You don't need to buy pesos before you travel. Pull them from a bank ATM on arrival at a better rate."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, they have the worst rates. The airport <b>ATM</b> is better if you need pesos right away.",
      "Pull cash from a <b>bank ATM</b> (BanReservas, Banco Popular or BHD Le\u00f3n), choose <b>pesos</b>, and <b>decline \"convert to USD.\"</b>",
      "Keep a few small US bills handy for the taxi or transfer if it's easier than pesos on arrival."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Pay in the quoted currency:</b> dollars for resorts, tours and transfers; pesos for colmados, taxis, guaguas and local restaurants.",
      "<b>Check the menu</b> for \"impuestos incluidos\" or \"no incluidos.\" If not included, expect about 28% added at checkout (see below).",
      "Keep small <b>peso</b> bills and coins for tips, baggers and motoconchos.",
      "When paying by card, <b>ask to be charged in pesos</b> to get your bank's rate, not the merchant's."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Match the currency to the price tag.</b> Paying dollars on a peso price (or vice versa) lets the seller pick the exchange rate, usually in their favor, and your change comes in pesos anyway.",
      "On any card terminal or ATM, <b>choose pesos, never dollars</b>, to dodge the dynamic-conversion markup of 3 to 8%."
    ], cta: null }
  ],

  cash: {
    rate: 59.6, cur: "DOP", round: 100, defaultIndex: 1,
    rateNote: "Rough guide at about 59.6 pesos to the dollar in mid-2026, though it moves daily. A quick trick: divide a peso price by 60 (or by 6, then drop a zero) for a rough dollar figure, so RD$1,000 is roughly 17 dollars.",
    styles: [
      { n: "Budget", per: 45, cash: 0.5, room: 70 },
      { n: "Mid-range", per: 110, cash: 0.35, room: 150 },
      { n: "Comfort", per: 220, cash: 0.2, room: 300 }
    ]
  },

  connectivity: {
    works: "Yes in the places most travelers go, with gaps in the mountains and remote stretches. The two main carriers are Claro and Altice, and a local SIM costs under 5 dollars with your passport, or you can use an eSIM. 4G is the everyday standard across cities, resort areas and main roads, with 5G in larger urban centers. Expect weaker or patchy signal in the interior, parts of the Cordillera Central, and some rural coastal pockets, so download offline maps before heading out. WhatsApp is the default way many local tour operators and drivers communicate, so set it up before you go."
  },

  // TOURIST TAX (verified Jul 2026). The Dominican Republic has NO per-night city/bed tourist
  // tax of the kind charged across much of Europe. The relevant charges are: (1) 18% ITBIS, the
  // DR's VAT/sales tax, which is SOMETIMES already in the displayed price and sometimes added at
  // checkout (tourist restaurants frequently show it added); and (2) a 10% "propina legal"
  // service charge added by law to most restaurant/bar/hotel bills. Combined, a menu price can
  // rise ~28% at the till. Neither is a per-night occupancy tax, so the calculator adds nothing
  // here (single "everywhere" region at 0). The taxfree block below explains the real charges.
  // A roughly $20 departure tax exists but is almost always bundled into the airfare.
  tax: {
    unit: "flatPerNight",
    currency: "DOP",
    capNights: null,
    note: "The Dominican Republic has no separate per-night tourist or city tax. What affects your bill is the 18% ITBIS tax and a 10% service charge added to most restaurant, bar and hotel bills (see below), so there is nothing extra to estimate per night here.",
    regions: [
      { key: "everywhere", label: "Anywhere in the Dominican Republic", rate: 0, note: "No nightly tourist tax applies. The charges you will actually see are 18% ITBIS and a 10% service charge, which together can add about 28% to a menu price at checkout." }
    ]
  },

  currencyHeading: "The peso (and the dollar), in plain terms.",
  facts: [
    { sym: "dop", k: "Quick conversion", v: "About 59.6 pesos to the dollar in mid-2026. To estimate dollars fast, divide the peso amount by 60: RD$1,000 is roughly 17 dollars, RD$2,000 about 33. The symbol is RD$, and prices are sometimes written with just a dollar sign, which still means pesos in local shops." },
    { sym: "coins", k: "Notes and coins", v: "Peso notes run 50, 100, 200, 500, 1,000 and 2,000, with the orange RD$2,000 the one ATMs most often dispense. Coins are 1, 5, 10 and 25 pesos. You'll usually get pesos as change even when you pay in dollars, and you can't exchange coins back, so spend them before you leave." },
    { sym: "usd", k: "Two currencies at once", v: "The US dollar is widely accepted in resort and tourist zones, but the peso is the only legal tender and is what local restaurants, colmados, taxis and buses expect. Pay in whatever the price is quoted in for the fairest rate, and watch that an RD$ price is pesos, not dollars." },
    { sym: "tip", k: "The 28% checkout jump", v: "Restaurants and bars add 18% ITBIS plus a 10% service charge to the food total, so a menu price can rise by roughly 28% by the time you pay. Some places fold it into listed prices; others add it at the end. The 10% is shared among staff and may not reach your server." }
  ],

  taxfree: {
    label: "Taxes and service charges",
    heading: "No tourist tax, but two charges can add about 28% to a bill.",
    text: "The Dominican Republic does not levy a per-night tourist or city tax. What you will see instead are two charges on restaurant, bar and hotel bills. <b>ITBIS</b>, the country's value-added tax, is <b>18%</b>. A <b>10% service charge</b> (the \"propina legal,\" sometimes labeled \"Ley\" or \"Servicio\") is added by law on top of the food total. Together they can lift a menu price by roughly <b>28%</b> at checkout. Sometimes both are already baked into the listed prices; often, especially at tourist restaurants, the menu notes \"impuestos no incluidos\" and they're added at the end, so check before you order. The 10% service charge is split among all staff and frequently does not reach your server directly, which is why an extra 5 to 10% in cash for good service is customary and genuinely appreciated. There is no VAT-refund scheme for tourists, so the 18% is simply part of the price. A small departure tax of around 20 dollars exists but is almost always included in your airfare."
  },

  traps: [
    "<b>Pay in the currency on the price tag.</b> If something is priced in pesos, pay pesos; if priced in dollars, pay dollars. Mixing them lets the seller set an exchange rate that favors them, and your change comes back in pesos regardless.",
    "<b>The menu price often isn't the final price.</b> Many restaurants add 18% ITBIS and a 10% service charge at checkout, roughly 28% on top, when the menu says \"impuestos no incluidos.\" A RD$150 beer can ring up closer to RD$190.",
    "<b>Bring small, flawless US bills, and don't count on coins.</b> Fifties and hundreds are hard to use outside banks, torn or worn notes are routinely refused, and US coins can't be exchanged anywhere.",
    "<b>Skip the street money changers.</b> Counterfeit notes and short-changing are real risks. Use bank ATMs or licensed casas de cambio (Gambi or Caribe Express, for example), and on any terminal or ATM, decline \"convert to USD.\""
  ],

  tippingHeading: "Light, since 10% is usually already on the bill, but bring small bills.",
  tipping: "Tipping in the Dominican Republic is modest and often partly handled. Most restaurants, bars and hotels add a 10% service charge (the propina legal) by law, so you aren't expected to tip a full amount again. Because that 10% is split among staff and may not reach your server, an extra 5 to 10% in cash for good service is customary and appreciated. At all-inclusive resorts, tips are still expected despite the label: roughly 1 to 2 dollars per drink at the bar, 2 to 5 dollars a day for housekeeping, and 5 to 10 dollars for a bellhop handling several bags. Supermarket baggers often work for tips alone, so 50 to 100 pesos is kind. For tours, 200 to 600 pesos per person depending on a half or full day is standard, with the driver tipped separately. Taxis don't expect a tip; rounding up is plenty. Small US bills work fine for resort tips, while pesos are better off the resort so staff don't lose money on the exchange.",

  faqs: [
    { q: "Should I use US dollars or pesos in the Dominican Republic?", a: "Both work, but pay in whatever currency the price is quoted in. Resorts, tours and airport transfers are usually priced in dollars, while local restaurants, colmados, taxis and buses expect pesos. Paying in pesos off the resort gives a fairer rate, and you'll often get pesos as change even when you pay in dollars." },
    { q: "Why is my restaurant bill higher than the menu price?", a: "Because of two charges added at checkout: 18% ITBIS (the sales tax) and a 10% service charge, which together can add about 28%. Some places include them in listed prices; many tourist restaurants note \"impuestos no incluidos\" and add them at the end, so check the menu before ordering." },
    { q: "Do I need cash in the Dominican Republic?", a: "Inside resorts and tourist zones, cards and dollars cover most things. Off the resort you'll want pesos: taxis are usually cash only, and colmados, guaguas, motoconchos and small local spots run on cash. Carry small bills in both currencies." },
    { q: "What is the best way to get pesos in the Dominican Republic?", a: "Bank ATMs (BanReservas, Banco Popular, BHD Le\u00f3n) give close to the official rate, with a 1 to 3% foreign fee plus the bank's charge. Licensed casas de cambio like Gambi or Caribe Express are fine too. Avoid airport and hotel counters and never change money on the street. Choose pesos, not dollars, at the machine." },
    { q: "Do you tip in the Dominican Republic if the 10% service charge is already added?", a: "Lightly. The 10% propina legal is added by law but is split among staff and may not reach your server, so an extra 5 to 10% in cash for good service is customary. At resorts, tips for bartenders, housekeeping and bellhops are still expected despite the all-inclusive label." },
    { q: "How much cash should I bring for a week in the Dominican Republic?", a: "For a resort week, bring roughly 150 to 250 dollars in small bills mainly for tips. If you plan to explore off the resort, add pesos pulled from an ATM for taxis, colmados and local meals. A no-fee card covers hotels and bigger spending." }
  ],

  culture: {
    heading: "A little Spanish goes a long way",
    intro: "The Dominican Republic speaks Spanish, and it moves to merengue. A little Spanish, a Qué lo que to say hello, and a story or two mark you as a guest rather than a tourist.",
    phrases: [
      { mean: "Hello", say: "OH-lah", word: "Hola" },
      { mean: "What is up, a very Dominican greeting", say: "keh loh KEH", word: "Qué lo que" },
      { mean: "Please", say: "por fah-VOR", word: "Por favor" },
      { mean: "Thank you", say: "GRAH-see-ahs", word: "Gracias" },
      { mean: "Cheers", say: "sah-LOOD", word: "Salud" },
      { mean: "Delicious", say: "deh-lee-see-OH-so", word: "Delicioso" },
    ],
    tip: "Two things are close to the national heart: <b>baseball</b>, which is practically a religion here and has sent more players to the US major leagues than any country but the States, and <b>merengue</b>, the fast, joyful music that is the island's heartbeat. Ask about either and you will make a friend.",
    stories: [
      { img: "/dominican-republic-culture-1.jpg",
        alt: "WPA-style illustration of couples dancing merengue in a colorful colonial street at dusk, one woman in a swirling red skirt, a small band with accordion and drum, string lights overhead",
        h: "The heartbeat is merengue",
        p: "Merengue is the Dominican Republic's own music and dance, fast and irresistible, played on the accordion, the two-headed tambora drum and the scraping güira. Its slower, romantic cousin, bachata, was born here too and has since swept the world. When the music starts, everyone dances.",
        note: "Good to know: merengue and bachata were both born here" },
      { img: "/dominican-republic-culture-2.jpg",
        alt: "WPA-style illustration of a boy mid-swing at home plate in a dusty sandlot baseball game at golden hour, a catcher crouched behind, pastel wooden houses and palms beyond a picket fence",
        h: "Baseball is close to a religion",
        p: "Baseball is the Dominican passion, played on every sandlot and beach, and the island has sent hundreds of players to the US major leagues, more than any country but the United States. Boys dream of the big leagues from the moment they can swing a bat. A winter league game here is electric.",
        note: "Good to know: a true baseball powerhouse" },
      { img: "/dominican-republic-culture-3.jpg",
        alt: "WPA-style illustration of the coral-stone twin-towered colonial cathedral of old Santo Domingo rising over a cobbled plaza, colonial houses and tropical trees around, big cloudy sky",
        h: "The first city of the Americas",
        p: "The old Zona Colonial of Santo Domingo is the oldest European city in the Americas, and it holds the first cathedral and the first university built in the New World, both from the 1500s. You can still walk its stone streets and the fort above the river. History on this side of the ocean began right here.",
        note: "Good to know: the first cathedral and university in the Americas" },
    ],
    pride: "Dominicans are warm, funny and full of life, and they carry their island's rhythm everywhere they go. They are proud that history in the Americas began on their shores, and prouder still of merengue, baseball and a welcome that pulls you straight onto the dance floor."
  },

  // HUB-AND-SPOKE SPOKES. Data-driven, single-source, each independently dated,
  // rendered by components/Spoke.astro via src/pages/[slug]/[spoke].astro.
  spokes: [
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Apps", v: "Uber, DiDi, inDrive (in cities)" },
        { k: "Taxis", v: "No meters, agree the fare first" },
        { k: "From Punta Cana", v: "Prebook a resort transfer" },
        { k: "Watch for", v: "Motoconchos, tourist pricing" }
      ],
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Taxis in the Dominican Republic: agree the fare",
      description: "Taxis have no meters in the DR, so agree the fare first. Which apps work in the cities, resort transfers from Punta Cana, and what to avoid. Checked 2026.",
      h1: "Taxis in the Dominican Republic",
      lede: "The key thing in the Dominican Republic: taxis do not use meters, so you agree the fare before you get in. In the cities an app removes the guesswork, and for resorts a prebooked transfer is simplest. Here is how it works.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "In the cities (<b>Santo Domingo, Santiago</b>), install <b>Uber</b>, <b>DiDi</b> or <b>inDrive</b>, which set the fare up front and remove the guesswork. The big thing to know: regular taxis <b>do not use meters</b>, so you <b>agree the fare before you get in</b>. For resort areas like <b>Punta Cana</b>, a <b>prebooked transfer</b> or your hotel's taxi is simplest, if pricey. Be wary of <b>motoconchos</b> (motorbike taxis) and tourist-rate overcharging. Pay in <b>pesos or US dollars</b>.",
      sections: [
        {
          h: "Apps in the cities",
          icon: "phoneok",
          key: { fig: "Uber, DiDi", tag: "In cities", text: "In Santo Domingo and Santiago, Uber, DiDi and inDrive set the fare up front. In resort areas, apps are patchier and transfers dominate.", tone: "teal" },
          p: [
            "In <b>Santo Domingo and Santiago</b>, <b>Uber</b>, <b>DiDi</b> and <b>inDrive</b> all operate and are the easy choice, since they <b>set the fare in advance</b> and remove the negotiation. They also feel safer, since the driver and route are tracked.",
            "In <b>resort areas</b> like Punta Cana, app coverage is patchier and <b>hotel taxis and transfers</b> dominate, so the app approach is mainly for the cities."
          ]
        },
        {
          h: "From Punta Cana airport",
          icon: "plane",
          key: { fig: "Prebook", tag: "Resort transfers", text: "Most resort guests prebook a transfer or use the hotel taxi. Airport taxis are fixed-rate and pricey; agree the price before you set off.", tone: "teal" },
          p: [
            "From <b>Punta Cana (PUJ)</b>, most resort guests <b>prebook a transfer</b> through the hotel or a shuttle company, which is the smoothest option. Official <b>airport taxis</b> are fixed-rate and <b>pricey</b> (often US$30 to US$40 even to nearby resorts).",
            "From <b>Santo Domingo (SDQ)</b>, an app or an airport taxi both work. Wherever you land, <b>agree the price before you set off</b> if there is no meter and no app."
          ]
        },
        {
          h: "No meters: agree the fare first",
          icon: "alert",
          key: { tag: "And avoid motoconchos", text: "Regular taxis have no meters, so settle the fare before getting in, ideally in pesos. Be wary of motoconchos (motorbike taxis), which are cheap but risky, and of tourist-rate quotes.", tone: "amber" },
          p: [
            "The habit to build: regular Dominican taxis <b>do not use meters</b>, so <b>agree the fare before you get in</b>, and confirm the currency (a quote may be in pesos or dollars). Have a rough idea of the fair price from your hotel first.",
            "Be wary of <b>motoconchos</b>, the motorbike taxis: they are cheap and everywhere, but <b>riskier</b> for a visitor (no helmet, traffic), so most travelers skip them. And expect the occasional <b>tourist-rate</b> quote, which is where an app or a hotel-arranged car helps."
          ]
        },
        {
          h: "Fares, paying and tipping",
          icon: "dop",
          key: { fig: "Pesos", tag: "Or US dollars", text: "Pay agreed fares or app fares in pesos or US dollars, both accepted in tourist areas. A small tip or rounding up is a kind gesture.", tone: "teal" },
          p: [
            "Pay an <b>agreed fare or an app fare</b> in <b>pesos or US dollars</b>, both widely accepted in tourist areas, though pesos give better value for a street deal. A <b>small tip or rounding up</b> is a kind gesture but not required for a ride.",
            "For more, see <a href='/dominican-republic/tipping'>tipping in the Dominican Republic</a>, <a href='/dominican-republic/cash-or-card'>cash or card in the Dominican Republic</a>, and the <a href='/dominican-republic'>Dominican Republic money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Uber in the Dominican Republic?", a: "Yes, in the cities: Uber, DiDi and inDrive all operate in Santo Domingo and Santiago and set the fare up front. In resort areas like Punta Cana, coverage is patchier and hotel taxis and transfers dominate." },
        { q: "Do Dominican taxis use meters?", a: "No. Regular taxis have no meters, so you agree the fare before you get in, and confirm whether the quote is in pesos or dollars. Get a rough idea of the fair price from your hotel first, or use an app in the cities." },
        { q: "How do I get from Punta Cana airport to my resort?", a: "Most guests prebook a transfer through the hotel or a shuttle company, which is smoothest. Official airport taxis are fixed-rate and pricey, often US$30 to US$40 even to nearby resorts, so agree the price first." },
        { q: "Are motoconchos safe in the Dominican Republic?", a: "They are cheap and everywhere, but riskier for a visitor (no helmet, heavy traffic), so most travelers skip them. Use an app in the cities or a hotel-arranged car instead." }
      ],
      sources: {
        links: [
          { label: "Dominican Republic Ministry of Tourism: official travel information", url: "https://www.godominicanrepublic.com/", type: "gov" },
          { label: "US State Department: Dominican Republic country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/DominicanRepublic.html", type: "gov" }
        ],
        judgment: "Dominican taxis are unmetered, so agreeing the fare first is essential, apps cover the cities, and resort transfers dominate at Punta Cana. Fares and app coverage shift over time, so this is our practical read. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Peso (DOP), dollars accepted" },
        { k: "Cards", v: "Resorts, hotels, nicer restaurants" },
        { k: "Cash for", v: "Small vendors, taxis, colmados" },
        { k: "On a card", v: "Choose pesos, not dollars" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in the Dominican Republic? 2026",
      description: "Cards work at resorts and hotels, but small vendors, taxis and colmados run on cash. Pay in pesos for the best value, not dollars. Checked 2026.",
      h1: "Do I need cash in the Dominican Republic, or can I use cards?",
      lede: "Short answer: cards at resorts and hotels, and peso cash for small vendors, taxis and corner stores. Dollars are accepted in tourist areas, but pesos give better value. Here is how to handle it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Both. The Dominican Republic takes <b>cards at resorts, hotels and nicer restaurants</b>, where <b>contactless</b> is common, but <b>small vendors, taxis, markets and colmados (corner stores)</b> run on cash. It is a <b>dual-currency</b> tourist economy: the <b>peso</b> is official, but <b>US dollars are widely accepted</b> in resort areas. Pay in <b>pesos</b> for local prices, since dollar change comes back in pesos at a variable rate. Keep <b>peso cash</b> for the small stuff. Choose <b>pesos, not dollars</b>, on any card or ATM.",
      sections: [
        {
          h: "Cards at resorts, cash for local life",
          icon: "phoneok",
          key: { fig: "Dual currency", tag: "Cards at resorts", text: "Cards work at resorts, hotels and nicer restaurants; small vendors, taxis and colmados are cash. Both pesos and US dollars circulate.", tone: "teal" },
          p: [
            "The Dominican Republic takes <b>cards at resorts, hotels, nicer restaurants and larger shops</b>, where <b>contactless</b> is common. But <b>small vendors, street food, markets, taxis and colmados (corner stores)</b> run largely on <b>cash</b>, so carry <b>pesos</b>.",
            "It is a <b>dual-currency</b> tourist economy: the <b>peso</b> is official, but <b>US dollars are widely accepted</b> in resort areas, though usually at a less favorable rate than paying in pesos."
          ]
        },
        {
          h: "Pay in pesos, not dollars",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Pesos give better value", text: "Choose pesos on a card, and prefer paying in pesos in cash: dollar change comes back in pesos at a variable rate.", tone: "amber" },
          p: [
            "On a <b>card</b>, if asked to charge in <b>dollars or pesos, choose pesos</b>, since dollars trigger dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your bank's. In <b>cash</b>, US dollars are accepted in tourist areas but <b>change comes back in pesos</b> at the vendor's rate, which is usually poor.",
            "So <b>pay in pesos</b> for local prices. Use a bank ATM (some dispense both pesos and dollars), and use a <b>debit card</b> to avoid cash-advance fees."
          ]
        },
        {
          h: "Cash for small vendors and taxis",
          icon: "dop",
          key: { fig: "Peso cash", tag: "For the small stuff", text: "Keep peso cash for small vendors, street food, taxis and colmados, where cards are not taken.", tone: "teal" },
          p: [
            "Keep <b>peso cash</b> for the small stuff: <b>street food, small vendors, taxis (agree the fare first) and colmados</b>. Small US bills can work in a pinch in tourist zones, but pesos are simpler and better value.",
            "For tipping norms, including the service charge and tax on restaurant bills, see <a href='/dominican-republic/tipping'>tipping in the Dominican Republic</a>, and for the wider picture, the <a href='/dominican-republic'>Dominican Republic money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in the Dominican Republic?", a: "Yes, for daily life. Cards work at resorts, hotels and nicer restaurants, but small vendors, street food, taxis, markets and colmados run on cash. Carry pesos." },
        { q: "Should I pay in pesos or dollars in the Dominican Republic?", a: "Pesos, for the best value. On a card, choose pesos, not dollars, to avoid the 3 to 8% conversion. In cash, dollars are accepted in tourist areas but change comes back in pesos at a poor rate, so pesos are better." },
        { q: "Are US dollars accepted in the Dominican Republic?", a: "Yes, widely in resort and tourist areas, though usually at a less favorable rate than paying in pesos. Away from tourist zones, pesos are expected." },
        { q: "Can I use cards everywhere in the Dominican Republic?", a: "At resorts, hotels and nicer restaurants, yes, with contactless common. Small vendors, taxis, markets and colmados run on cash, so carry pesos for those." }
      ],
      sources: {
        links: [
          { label: "Banco Central de la Republica Dominicana: official exchange rate information", url: "https://www.bancentral.gov.do", type: "gov" },
          { label: "US State Department: Dominican Republic country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/DominicanRepublic.html", type: "gov" }
        ],
        judgment: "The Dominican Republic is a dual-currency tourist economy where paying in pesos beats paying in dollars. The peso rate moves, and the firm rule is to decline dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "On the bill", v: "10% service + 18% tax" },
        { k: "Your server", v: "A small extra (5 to 10%) is customary" },
        { k: "Resorts", v: "Tips for staff are appreciated" },
        { k: "How", v: "US dollars or pesos" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in the Dominican Republic: the 10 and 18",
      description: "Your bill carries a 10% service charge and 18% tax, and a small extra for your server is still customary. Resort tipping too. Checked 2026.",
      h1: "Tipping in the Dominican Republic",
      lede: "In the Dominican Republic, a 10% service charge and an 18% tax are added to restaurant bills, so the total runs well above the menu. A small extra for your server is customary. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "In the Dominican Republic, restaurant bills add a <b>10% service charge</b> and an <b>18% tax (ITBIS)</b>, so the total runs <b>well above the menu price</b>. The 10% service is <b>pooled among staff</b>, so it is customary to leave a <b>small extra of about 5 to 10%</b> directly for your server for good service. At <b>all-inclusive resorts</b>, tips for helpful staff are appreciated. For <b>taxis</b>, agree the fare and round up. Tips can be in <b>US dollars or pesos</b>, both widely accepted.",
      sections: [
        {
          h: "The 10 and 18: service and tax",
          icon: "receipt",
          key: { fig: "10% + 18%", tag: "Total runs well above menu", text: "Bills add a 10% service charge and an 18% tax, so the total runs well above the menu price. Read the bill so you are not surprised.", tone: "amber" },
          p: [
            "The thing to know is what the locals call the <b>10 and 18</b>: restaurant bills add a <b>10% service charge</b> plus an <b>18% tax (ITBIS)</b> on top of the listed prices. So the <b>total runs roughly 28% above the menu</b>, which surprises visitors.",
            "<b>Read the bill</b> so you understand the two charges. The 10% is the service charge; the 18% is government tax, not a tip."
          ]
        },
        {
          h: "A small extra for your server",
          icon: "coins",
          key: { fig: "5-10%", tag: "Directly to your server", text: "The 10% service is pooled, so a small extra of about 5 to 10% directly to your server for good service is customary.", tone: "teal" },
          p: [
            "Because the <b>10% service charge is pooled</b> among staff and modest, it is <b>customary to leave a small extra</b>, about <b>5 to 10%</b>, <b>directly for your server</b> for good service. This is the tip that actually reaches the person who served you.",
            "At <b>all-inclusive resorts</b>, where meals are prepaid, tipping helpful <b>bar staff, servers and housekeeping</b> a small amount is appreciated and keeps service warm."
          ]
        },
        {
          h: "Taxis, and paying",
          icon: "cash",
          key: { fig: "USD or pesos", tag: "Both accepted", text: "For taxis, agree the fare and round up. Tips can be in US dollars or Dominican pesos, both widely accepted.", tone: "teal" },
          p: [
            "For <b>taxis</b>, <b>agree the fare first</b> (they are not always metered) and round up for a courtesy. Tips can be in <b>US dollars or Dominican pesos</b>, both widely accepted, so small US bills work fine. For the wider picture, see the <a href='/dominican-republic'>Dominican Republic money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in the Dominican Republic?", a: "Yes, a small extra. Bills already add a 10% service charge (plus 18% tax), but the 10% is pooled, so it is customary to leave about 5 to 10% directly for your server for good service." },
        { q: "What is the 10 and 18 in the Dominican Republic?", a: "A 10% service charge and an 18% tax (ITBIS) added to restaurant bills, so the total runs roughly 28% above the menu price. The 10% is the service charge; the 18% is government tax, not a tip." },
        { q: "Do you tip at all-inclusive resorts in the Dominican Republic?", a: "It is appreciated. Meals are prepaid, but tipping helpful bar staff, servers and housekeeping a small amount is customary and keeps service warm. US dollars or pesos both work." },
        { q: "Can you tip in US dollars in the Dominican Republic?", a: "Yes. Both US dollars and Dominican pesos are widely accepted for tips, so small US bills are fine." }
      ],
      sources: {
        links: [
          { label: "US State Department: Dominican Republic country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/DominicanRepublic.html", type: "gov" }
        ],
        judgment: "The 10% service charge and 18% ITBIS on Dominican bills are standard, and the customary small extra for your server is our practical read from traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "e-ticket",
      glance: [
        { k: "Visa", v: "None for a tourist stay" },
        { k: "E-Ticket", v: "Free, required both ways" },
        { k: "Where", v: "eticket.migracion.gob.do (free)" },
        { k: "Watch for", v: "Paid lookalike sites" }
      ],
      live: true,
      topic: "visas",
      title: "Dominican Republic E-Ticket: do you need it? 2026",
      description: "Yes, and twice: the free E-Ticket is required to enter and to leave, filed online before each flight. The official portal, and the sites that charge.",
      h1: "Do I need the E-Ticket for the Dominican Republic?",
      lede: "Short answer: yes, and most people miss that you need it twice, once to arrive and once to leave. It is free and takes about ten minutes. Here is the official site and how not to pay for it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-08",
      answer: "Yes. The <b>E-Ticket</b> is a free digital form <b>required to both enter and leave</b> the Dominican Republic, and you file it online before you fly, at the official site <b>eticket.migracion.gob.do</b>. It is <b>free</b>, so any site charging you for it is not the real one. US citizens need <b>no visa</b> for a tourist stay of up to 30 days; the E-Ticket is a separate arrival and departure form.",
      official: {
        label: "Official Dominican Republic E-Ticket portal",
        url: "https://eticket.migracion.gob.do",
        note: "This is the government's own site (note the .gob.do domain), run by the Directorate of Migration, and it is free. Fill it in before your flight, save the QR code it gives you, and do a second one for your departure. One person can file for up to seven family members."
      },
      expediter: false,
      sections: [
        {
          h: "Yes, you need it both ways",
          icon: "plane",
          key: { fig: "Both ways", tag: "Entry and exit", text: "The E-Ticket is required for both arrival and departure, so a round trip means filling it out twice, once for entry and once for exit. It is a quick digital form, not a visa.", tone: "teal" },
          p: [
            "The part that trips people up: the E-Ticket is required for <b>both your arrival and your departure</b>. A round trip means filling it out <b>twice</b>, once for entry and once for exit, each generating its own QR code (some travelers do a combined entry-and-exit form in one sitting to get it over with). Airlines check the QR code before they will issue a boarding pass, and immigration will not stamp you in without it.",
            "It is <b>not a visa</b>. US citizens get a tourist entry of up to <b>30 days</b> with no visa. The E-Ticket is purely the arrival and departure declaration, bundling immigration and customs into one form."
          ]
        },
        {
          h: "How to file it, step by step",
          icon: "qr",
          key: { fig: "Free", tag: "About ten minutes", text: "File free at the official site, eticket.migracion.gob.do, about ten minutes: your details, passport and flight, generating a QR code to show at the airport.", tone: "teal" },
          p: [
            "It is free and takes about ten minutes."
          ],
          steps: [
            "Go to the official site, eticket.migracion.gob.do, and choose English in the language menu. Go there directly, not through a search ad.",
            "Fill in your passport details, flight information, and where you are staying. You can do it once you have confirmed flight details.",
            "Submit and save the QR code it generates, screenshot it and print a backup. You show it at check-in and at immigration.",
            "Do a second E-Ticket for your departure before you leave, unless you completed the combined entry-and-exit form up front."
          ]
        },
        {
          h: "It is free, so do not pay for it",
          icon: "alert",
          key: { tag: "Skip the lookalikes", text: "Dominican search results are full of lookalike sites charging $20 to $50 to fill in the same free government form. Use only eticket.migracion.gob.do, where the charge is zero.", tone: "amber" },
          p: [
            "This is the trap the Dominican search results are full of. Because the E-Ticket is <b>mandatory and free</b>, lookalike sites charge <b>$20 to $50</b> to fill in the same free government form for you. The Directorate of Migration <b>does not charge</b> for it. Only the .gob.do site is real, so if a page asks for payment, it is not official.",
            "One practical tip: the site can be glitchy on phones and behaves better on a desktop, so fill it out at home rather than scrambling at the airport."
          ]
        },
        {
          h: "A couple of things to know",
          icon: "receipt",
          key: { fig: "The book", tag: "Not a passport card", text: "Bring your passport book, since a passport card is not accepted for international flights. Through 31 December 2026 a temporary measure lets US travelers enter without the old paper tourist card.", tone: "teal" },
          p: [
            "Bring your <b>passport book</b> (a passport card is not accepted for international flights). Through <b>31 December 2026</b> a temporary measure lets US and several other travelers enter on a passport valid for the length of the stay, but six months of validity is the safe standard, so confirm yours before you go.",
            "For how money actually works there, cards, cash, ATMs and the US-dollar question, see the <a href=\"/dominican-republic\">Dominican Republic money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need the E-Ticket for the Dominican Republic?", a: "Yes. The E-Ticket is mandatory for everyone entering or leaving the Dominican Republic, regardless of nationality. It is a free online form, not a visa, filed before each flight at eticket.migracion.gob.do. US citizens separately need no visa for a tourist stay of up to 30 days." },
        { q: "Is the Dominican Republic E-Ticket free?", a: "Yes, completely free through the official government portal, eticket.migracion.gob.do. The Directorate of Migration does not charge for it. Scam and lookalike sites charge $20 to $50 to fill in the same free form, so only use the official .gob.do site and never pay for the E-Ticket." },
        { q: "Do I need the E-Ticket to leave the Dominican Republic too?", a: "Yes. The E-Ticket is required for both entry and exit. On a round trip you complete it twice, once for arrival and once for departure, each producing its own QR code, or you can fill in a combined entry-and-exit form at the start of your trip. Airlines check it before boarding in both directions." },
        { q: "When should I fill out the E-Ticket?", a: "Once you have confirmed flight details. Many travelers do it a day or two before flying, and save the QR code to their phone. The site can be glitchy on mobile, so a desktop is easier, and doing it at home avoids stress at the airport." }
      ],
      sources: {
        links: [
          { label: "Dominican Republic Directorate of Migration: the official E-Ticket service, required for both entry and exit", url: "https://migracion.gob.do/en/servicio/e-ticket-application-passenger-arrival-and-departure/", type: "gov" },
          { label: "Dominican Republic E-Ticket portal: the official free government form (eticket.migracion.gob.do)", url: "https://eticket.migracion.gob.do", type: "gov" },
          { label: "US Department of State: the country information pages, the official router for entry and exit requirements by destination", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html", type: "gov" }
        ],
        judgment: "Entry rules and passport-validity measures change (a temporary passport-validity allowance runs through 31 December 2026), so confirm the current requirement on the official site before you travel. Checked July 2026."
      }
    },
    {
      slug: "money-scams",
      glance: [
        { k: "Most cost", v: "Tens of dollars, avoidable" },
        { k: "Your card", v: "Never let it leave you" },
        { k: "Taxis", v: "No meters, agree it first" },
        { k: "The E-Ticket", v: "Free, on the official site" }
      ],
      live: true,
      topic: "scams",
      title: "Common money scams in the Dominican Republic, and what they cost",
      description: "Card cloning, unmetered taxi fares, sites charging for the free E-Ticket and the menu price that is not the final price. What each costs, and how to sidestep it.",
      h1: "Common money scams in the Dominican Republic, and what they cost you",
      lede: "The Dominican Republic is safe for the great majority of visitors, most trips are resort-and-beach and entirely trouble free, and almost none of this is dramatic. The traps that actually take money off US travelers here are quiet ones: a card that leaves your table, a fare nobody agreed, a website charging for a free form, a bill that grew by a quarter between the menu and the checkout. Here is each one, what it costs, and how to sidestep it.",
      checked: "Aug 2026",
      checkedISO: "2026-08-15",
      answer: "Four things account for most of it. <b>Card cloning</b>, which the UK FCDO names directly and Canada describes as tampered card readers, is the one worth real care. <b>Taxis have no meters</b>, so an unagreed fare is whatever the driver says at the end. Sites that <b>charge for the E-Ticket</b> are selling you a free government form. And the <b>menu price is not the final price</b>, because 18 percent tax and a 10 percent service charge land at checkout. The golden rules: <b>keep your card in sight or pay cash</b>, <b>agree the fare before you get in or use an app</b>, <b>file the E-Ticket only at the official site</b>, and <b>read the bill before you tip</b>.",
      sections: [
        {
          h: "Cards, ATMs and the cloning problem",
          icon: "card",
          key: { tag: "Keep it in view", text: "The UK FCDO says plainly that bank card cloning is a risk here: keep your card in view when paying, or pay cash. Canada describes tampered card readers saving your details during a legitimate purchase.", tone: "teal" },
          p: [
            "This is the one that can cost real money, and both the UK and Canadian governments flag it. The FCDO's wording is a single actionable sentence: bank card cloning and identity theft are a risk, so <b>keep your payment card in view when paying, or pay in cash</b>. That matters because the local habit in many restaurants is for a server to carry your card away to a terminal. Ask for the machine to come to the table, or walk to the counter yourself. Canada adds the mechanism: <b>tampered card readers</b> that quietly save your card details during an otherwise legitimate purchase, which is why the charge often appears weeks or months after you have flown home.",
            "For ATMs, use machines <b>inside a bank branch</b>, a hotel lobby or a shopping mall rather than free-standing street machines, cover the keypad, and glance at the reader for anything irregular. Decline help from anyone who offers it at a machine. Then do the thing that actually limits the damage: turn on <b>transaction alerts</b>, check your statement while you are still travelling rather than after, and consider a card with a low limit for the trip. The <a href=\"/dominican-republic/cash-or-card\">Dominican Republic cash and cards guide</a> covers how to carry money here."
          ]
        },
        {
          h: "Taxis: there is no meter",
          icon: "taxi",
          key: { fig: "Agree it first", tag: "Or use an app", text: "Dominican taxis do not use meters, so the fare is whatever was agreed, or whatever is claimed at the end. Agree it before you get in, or use Uber, DiDi or inDrive where the app sets it.", tone: "teal" },
          p: [
            "The structural fact to know is that <b>regular Dominican taxis do not run meters</b>. There is nothing to insist on and nothing to check, so the fare is either what you agreed before the door closed or what the driver says when you arrive. Settle it first, out loud, every time. In Santo Domingo and Santiago, <b>Uber, DiDi and inDrive</b> remove the problem by fixing the price in the app, and they are the easy default. In resort areas like Punta Cana, a prebooked transfer or your hotel's own taxi is simplest, if pricier.",
            "Two notes from government advice. The US State Department recommends <b>asking a hotel or restaurant to call a taxi for you</b> rather than hailing one off the street, and using a well-known company or a ride-hailing app. Australia's Smartraveller advises using official airport taxis or a rideshare for airport runs, and travelling in daylight where you can. <b>Motoconchos</b>, the motorbike taxis, are cheap and tempting; US government employees are prohibited from using them, which tells you what you need to know. The full picture is in the <a href=\"/dominican-republic/taxis-and-apps\">Dominican Republic taxis and apps guide</a>."
          ]
        },
        {
          h: "The E-Ticket, and the sites that charge for it",
          icon: "passport",
          key: { fig: "It is free", tag: "Official site only", text: "The E-Ticket is a free government form required to enter and leave. Lookalike sites charge a fee for filing it for you. File it yourself at eticket.migracion.gob.do.", tone: "amber" },
          p: [
            "Every arrival and departure needs the <b>E-Ticket</b>, a digital form filed online before you fly. It is <b>free</b>, and it is filed on the official government portal at <b>eticket.migracion.gob.do</b>. That single fact is the whole defense, because a cottage industry of lookalike sites, some of them buying the top search results, will file it on your behalf for a fee. They are not doing anything you cannot do in a few minutes, and handing your passport details to an unnecessary middleman is its own small risk.",
            "The rule generalizes: <b>if a government form is free, any site charging for it is not the government</b>. Check the domain before you type anything, and be suspicious of a search result labelled as an ad. The requirement itself is straightforward and covered in the <a href=\"/dominican-republic/e-ticket\">Dominican Republic E-Ticket guide</a>."
          ]
        },
        {
          h: "The bill: the menu price is not the price",
          icon: "receipt",
          key: { fig: "About 28%", tag: "Read the bill", text: "Many restaurants add 18 percent ITBIS tax and a 10 percent service charge at checkout, roughly 28 percent on top, when the menu says impuestos no incluidos. The service charge is the tip.", tone: "amber" },
          p: [
            "This is not a scam, it is a pricing convention, and it catches almost every first-time visitor. Many Dominican restaurants add <b>18 percent ITBIS</b> tax and a <b>10 percent service charge</b> at checkout, roughly <b>28 percent</b> on top of the menu price, and the menu will say so in small type: <b>impuestos no incluidos</b>. A 150 peso beer rings up closer to 190. Nothing improper is happening, but if you budget from menu prices you will be out by more than a quarter across a week.",
            "The part worth acting on is the tip. That <b>10 percent service charge is the tip</b>, so you are not expected to add another American-sized one on top, though rounding up for good service is normal. Check the bill for the service line before you decide, which is covered in the <a href=\"/dominican-republic/tipping\">Dominican Republic tipping guide</a>. As with prices generally, <b>pay in the currency on the price tag</b>: paying dollars for a peso price hands the seller the exchange rate."
          ]
        },
        {
          h: "What this means for your money",
          icon: "peso",
          key: { fig: "Habits", tag: "How to avoid it", text: "Keep your card in sight, agree every taxi fare before you get in, file the E-Ticket only on the official site, and read the bill for the service charge before you tip.", tone: "teal" },
          p: [
            "Almost everything here costs tens of dollars and is avoided by the same short list: <b>keep your card in sight or pay cash</b>, <b>agree the fare before you get in</b>, <b>file the E-Ticket only at the official government site</b>, and <b>read the bill before you tip</b>. The one worth active care, because it can reach real money and you will not notice it at the time, is card cloning, so guard the card and watch the statement.",
            "Two smaller ones. <b>Street money changers</b> are best skipped entirely, given the counterfeit and short-changing risk; use bank ATMs or a licensed casa de cambio. And Canada's advice flags a distinctly local one: unofficial lawyers, known locally as <b>pirate lawyers</b>, wait near tourist police stations in areas like Punta Cana and offer help to detained foreigners at excessive fees, so if anything goes wrong, contact your embassy first. For getting and spending money well while you are there, see the <a href=\"/dominican-republic/cash-or-card\">Dominican Republic cash and cards guide</a> and the <a href=\"/dominican-republic\">Dominican Republic cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is the Dominican Republic safe for tourists?", a: "For the great majority of visitors, yes, and the overwhelming share of trips are resort-based and trouble free. What travelers actually meet are money issues rather than anything dramatic: card cloning, unagreed taxi fares, sites charging for a free entry form, and a bill that grows by about 28 percent at checkout. A few habits avoid nearly all of them." },
        { q: "Is credit card cloning really a problem in the Dominican Republic?", a: "It is flagged by the UK FCDO, the Canadian government and the US State Department. The FCDO's advice is to keep your payment card in view when paying, or pay in cash, which matters because servers often carry cards away to a terminal. Canada describes tampered card readers that save your details during a legitimate purchase, so charges can appear long after you get home." },
        { q: "Do taxis in the Dominican Republic use meters?", a: "No. Regular taxis do not run meters, so the fare is whatever you agreed before getting in or whatever the driver claims at the end. Agree it first, every time. In Santo Domingo and Santiago, Uber, DiDi and inDrive fix the price in the app. In resort areas, a prebooked transfer or your hotel's taxi is simplest." },
        { q: "Do I have to pay for the Dominican Republic E-Ticket?", a: "No. The E-Ticket is free and required both to enter and to leave, and you file it yourself at the official government site, eticket.migracion.gob.do. Any site charging you a fee for it is a middleman, not the government. Check the domain before entering passport details, and be wary of search results marked as ads." },
        { q: "Why was my restaurant bill higher than the menu prices?", a: "Many Dominican restaurants add 18 percent ITBIS tax and a 10 percent service charge at checkout, roughly 28 percent on top, and the menu usually notes it as impuestos no incluidos. It is a pricing convention, not a scam. The 10 percent service charge is the tip, so you are not expected to add an American-sized one on top." },
        { q: "Where should I change money in the Dominican Republic?", a: "At bank ATMs or a licensed casa de cambio, not with street money changers, where counterfeit notes and short-changing are real risks. Bring small, clean US bills as backup, since fifties and hundreds are hard to use outside banks and worn notes get refused. On any card machine or ATM, decline the convert-to-dollars option and choose pesos." }
      ],
      sources: {
        links: [
          { label: "UK FCDO: Dominican Republic travel advice, safety and security, including bank card cloning", url: "https://www.gov.uk/foreign-travel-advice/dominican-republic/safety-and-security", type: "gov" },
          { label: "Government of Canada: Dominican Republic travel advice, including card reader tampering and pirate lawyers", url: "https://travel.gc.ca/destinations/dominican-republic", type: "gov" },
          { label: "US State Department: Dominican Republic travel advisory and local transport guidance", url: "https://travel.state.gov/en/international-travel/travel-advisories/dominican-republic.html", type: "gov" }
        ],
        judgment: "The card cloning advice, the tampered card reader mechanism, the pirate lawyer warning and the taxi guidance all come from current UK FCDO, Canadian and US government advice for the Dominican Republic. The roughly 28 percent figure is the arithmetic of the 18 percent ITBIS and the 10 percent service charge applied at checkout, which is a legal and disclosed pricing convention rather than a scam, and not every restaurant applies both. We have deliberately not quoted specific taxi fares, since there are no meters and rates vary widely by route and season. Peso conversions use roughly 60 to the dollar. Checked August 2026."
      }
    },
    {
      slug: "hotel-taxes-and-fees",
      glance: [
        { k: "On top of the room", v: "About 28%" },
        { k: "ITBIS", v: "18%, the national VAT" },
        { k: "Service charge", v: "10%, added by law" },
        { k: "Nightly tourist tax", v: "None" }
      ],
      live: true,
      topic: "taxes",
      title: "Dominican Republic hotel taxes: the 28% on a bill",
      description: "A Dominican hotel bill adds 18% ITBIS and a 10% service charge set by law, roughly 28% over the rate. There is no nightly tourist tax. Checked 2026.",
      h1: "Dominican Republic hotel taxes and fees, explained",
      lede: "Short answer: roughly 28% more than the rate you were quoted, which is a bigger jump than almost anywhere in the Caribbean. The unusual part is that both charges are fixed in law rather than set by the hotel, so for once the numbers are not a range. Here is what stacks, and what changes when your stay is all-inclusive.",
      checked: "Aug 2026",
      checkedISO: "2026-08-17",
      answer: "Two charges sit on a Dominican room rate and both are set in law. <b>ITBIS</b>, the national value-added tax, is <b>18%</b>. On top of it a <b>10% service charge</b>, known as the propina legal, is added to hotel, restaurant and bar bills <b>by law</b> rather than at each property's discretion. Together they lift a rate by roughly <b>28%</b>. There is <b>no separate nightly tourist tax</b>, and no resort-fee culture of the kind Aruba or the Bahamas has. There is <b>no VAT refund</b> for visitors, so the 18% is simply part of the price, and the old tourist card, about 10 US dollars, is now inside your airfare. If your stay is <b>all-inclusive</b>, both charges are usually already inside the package price, so the number that matters is the all-in total.",
      official: {
        label: "Dominican Republic Tourism (official): taxes and the service charge",
        url: "https://www.godominicanrepublic.com/travel/faqs",
        note: "The official tourism board confirms ITBIS at 18% and that hotels, restaurants and bars add a further 10% service charge by law. Because the 10% is statutory rather than set by each property, it is one of the few hotel-side charges anywhere that can be stated as a fixed figure."
      },
      sections: [
        {
          h: "Both charges are set by law, not by the hotel",
          icon: "receipt",
          key: { fig: "28%", tag: "ITBIS plus service", text: "Eighteen percent ITBIS and a 10% service charge, both statutory. Applied to the room total they come to about 28%, which is a larger jump than almost anywhere in the region.", tone: "teal" },
          p: [
            "<b>ITBIS</b> is the Dominican Republic's value-added tax and it runs at <b>18%</b>. Alongside it, a <b>10% service charge</b>, the propina legal and sometimes labelled on a bill as Ley or Servicio, is added to hotel, restaurant and bar bills. Together they come to roughly <b>28%</b> on top of the base rate.",
            "That second charge deserves a note, because it breaks the usual rule. Almost everywhere else, a hotel service charge is set by the property, which is why we normally quote it as a range and tell you to read the fine print. Here it is <b>written into law</b>, so <b>10% is 10%</b> rather than a typical figure, and the same charge shows up on a restaurant bill down the road. The one thing to watch is presentation: some places fold both charges into the prices they display, while others note that taxes are not included and add them at the end, so read a menu or a rate quote before assuming which you are looking at."
          ]
        },
        {
          h: "What all-inclusive does to the arithmetic",
          icon: "usd",
          key: { fig: "All-in", tag: "Usually already inside", text: "At an all-inclusive the 28% is normally already in the package price you were quoted, so the trap is not a surprise at checkout. It is comparing a package total against a bare room rate elsewhere.", tone: "amber" },
          p: [
            "The Dominican market is dominated by <b>all-inclusive resorts</b>, and that changes where the risk sits. At a genuine all-inclusive the ITBIS and the service charge are normally <b>already inside the package price</b> you were quoted, so you are unlikely to be ambushed at checkout the way you might be at a European city hotel. Ask, and get it in writing, but that is the usual arrangement.",
            "The real trap is <b>comparison</b>. A Dominican package quote that already contains 28% in charges looks expensive beside a bare room rate somewhere that has not added its taxes yet, and travellers routinely draw the wrong conclusion from that. Compare all-in totals against all-in totals. Anything you buy outside the resort, a meal in town or a bar tab, will carry the same 18% and 10% on top of its own listed prices, which is worth knowing before your first bill arrives."
          ]
        },
        {
          h: "No bed tax, and nothing to reclaim",
          icon: "refund",
          key: { fig: "No refund", tag: "The 18% is a cost", text: "There is no per-night tourist tax to hand over and no VAT-refund scheme for visitors, so the 18% is simply part of the price rather than something to claim back on the way out.", tone: "teal" },
          p: [
            "Two absences worth stating plainly, because both are good news. There is <b>no per-night tourist or city tax</b> in the Dominican Republic, nothing to hand over at the desk on arrival, and nothing to budget per night beyond the percentages above. And the old <b>tourist card</b>, about 10 US dollars, is now <b>bundled into your airfare</b> rather than bought separately, as is the roughly 20 dollar departure tax.",
            "The one absence that is not good news: there is <b>no VAT-refund scheme</b> for visitors here, so the 18% is a cost rather than something to reclaim at the airport. Do not go looking for a refund desk. For pesos, cards, and why paying in US dollars in the resort zones quietly costs you, see the <a href=\"/dominican-republic\">Dominican Republic money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "How much tax is added to a hotel bill in the Dominican Republic?", a: "About 28%. There is 18% ITBIS, the national value-added tax, plus a 10% service charge that is added by law rather than set by the hotel. Both are statutory, so the figures are fixed rather than typical. There is no separate nightly tourist tax on top, and at an all-inclusive resort both charges are usually already inside the package price." },
        { q: "What is the 10% service charge in the Dominican Republic?", a: "It is the propina legal, a service charge added by law to hotel, restaurant and bar bills, often shown as Ley or Servicio. Unlike a discretionary hotel service charge it is statutory, which is why it is a flat 10% everywhere rather than a range. It is shared among staff and frequently does not reach your server directly, which is why a little extra cash for good service is still customary." },
        { q: "Is there a tourist tax in the Dominican Republic?", a: "No. There is no per-night tourist or city tax to pay at your hotel, unlike Aruba, the Bahamas or much of Europe. The charges that affect your bill are the 18% ITBIS and the 10% statutory service charge. The old tourist card of about 10 US dollars is now included in your airfare rather than bought on arrival." },
        { q: "Can I get a VAT refund in the Dominican Republic?", a: "No. There is no tourist VAT-refund scheme, so the 18% ITBIS is simply part of the price of whatever you buy, with nothing to reclaim at the airport when you leave. This is different from the Bahamas or Saudi Arabia, both of which do refund tax on shopping that visitors export." }
      ],
      sources: {
        links: [
          { label: "Dominican Republic Tourism (official): the 18% ITBIS and the 10% service charge added by law", url: "https://www.godominicanrepublic.com/travel/faqs", type: "tourism" },
          { label: "E-Ticket: the official migration portal, where the bundled entry charges are handled", url: "https://eticket.migracion.gob.do", type: "gov" }
        ],
        judgment: "The 18% ITBIS and the statutory 10% service charge are confirmed with the official tourism board, which is what allows us to state the 10% as a fixed figure rather than a range, unlike hotel service charges almost anywhere else. The roughly 28% is the arithmetic of the two applied at checkout, and not every establishment applies both to every line, so treat it as the working total rather than a guaranteed one. Whether an all-inclusive package has the charges inside it is a matter for your own booking, and worth confirming in writing. Checked August 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Good in resorts and cities" },
        { k: "Carrier roaming", v: "$10 to $12 a day" },
        { k: "Cheapest", v: "Often resort wifi, at $0" },
        { k: "Signal gaps", v: "The Cordillera, Samana back roads" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "Dominican Republic eSIM: resort wifi may be enough",
      description: "On an all-inclusive week, resort wifi covers most of it. Data earns its place the moment you leave the gate, and coverage thins in the Cordillera and on back roads.",
      h1: "Staying connected in the Dominican Republic.",
      lede: "If your week is an all-inclusive in Punta Cana, the resort wifi is probably all you need and we would rather tell you that than sell you something. If you are leaving the gate to drive, hike or move between towns, the answer changes.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: "Coverage is <b>good in Santo Domingo, Punta Cana, Puerto Plata and the resort corridors</b>, and thinner in the <b>Cordillera Central</b>, on the <b>Samana</b> back roads and in the rural interior. On an <b>all-inclusive week</b>, resort wifi covers most of what you need, and that is a legitimate answer rather than a fallback. The moment you leave the gate it changes: a <b>local SIM</b> from <b>Claro</b> or <b>Altice</b> is roughly <b>10 to 25 dollars</b> for a tourist bundle with your <b>passport</b>, and <b>Claro</b> has the wider reach outside the cities. A <b>Nomad eSIM</b> is a few dollars per gigabyte and is the simpler option for a short trip. Your US carrier's day pass is about <b>10 to 12 dollars a day</b> (<b>AT&amp;T and Verizon</b>), though <b>AT&amp;T caps its Day Pass at 10 daily fees per line per bill period</b>, about <b>120 dollars</b>, while <b>Verizon's TravelPass has no equivalent cap</b> and keeps billing daily. <b>T-Mobile</b>'s current tiers include roughly <b>5GB</b> on Experience More, Magenta MAX and Go5G Plus, <b>15GB</b> on Experience Beyond and Go5G Next and <b>30GB</b> on Better Value, slowing to <b>256kbps</b> after that. Never roam <b>pay-per-use</b>, at about 2 dollars a megabyte.",
      sections: [
        {
          h: "Inside the resort, wifi is usually enough",
          icon: "phoneok",
          key: { fig: "Often $0", tag: "On an all-inclusive", text: "Resort wifi covers an all-inclusive week for most people. Check whether your resort charges for the faster tier, which is the one real cost here.", tone: "teal" },
          p: [
            "The all-inclusive is the most common Dominican trip and it is also the one that needs the least. Resorts in <b>Punta Cana, Bavaro and Puerto Plata</b> have wifi throughout the property, usually free in the rooms and public areas, and for a week of beach, buffet and pool that is genuinely sufficient. Download your maps and any bookings before you fly and you are set.",
            "One thing worth checking, because it is the actual cost here rather than the phone plan: some resorts run a <b>free basic tier and a paid faster one</b>, and the free tier can struggle in the evening when a few hundred guests are all streaming. If that would ruin your week, a data plan is a cheaper fix than the resort's premium wifi upgrade, which is the one place buying data reliably saves money on this kind of trip."
          ]
        },
        {
          h: "Leaving the gate is when data earns its place",
          icon: "dop",
          key: { fig: "Claro", tag: "The wider reach", text: "Claro reaches further outside the cities than Altice. A tourist bundle runs about $10 to $25 with a passport, and an eSIM is simpler for a short trip.", tone: "teal" },
          p: [
            "Off the property the calculation flips. Fares here are negotiated rather than metered, ride-hailing works in the cities and not everywhere, and the roads reward having a map that updates. <b>Claro</b> is the network with the wider reach outside the main centers, with <b>Altice</b> competitive in Santo Domingo and Santiago; a tourist data bundle is roughly <b>10 to 25 dollars</b> with your <b>passport</b>, from a carrier shop or the airport.",
            "A <b>Nomad eSIM</b> at a few dollars per gigabyte is the easier route for a week and usually the cheaper of the two for light use, which is not the case in most countries but is here, because Caribbean prepaid is not priced like Latin American prepaid. We earn on the eSIM, so treat that as a fact to check rather than a recommendation to trust: compare the local bundle on the day."
          ]
        },
        {
          h: "Where the signal thins",
          icon: "alert",
          key: { fig: "The Cordillera", tag: "Where signal drops", text: "The Cordillera Central, the Samana back roads and the rural interior lose coverage. Whale-watching boats and mountain hikes are offline.", tone: "amber" },
          p: [
            "The gaps are geographic. The <b>Cordillera Central</b> around Jarabacoa and Constanza, the climb toward <b>Pico Duarte</b>, the back roads on the <b>Samana</b> peninsula and much of the rural interior lose signal on any network, and the <b>whale-watching boats</b> out of Samana bay are offline by definition. The far southwest toward Pedernales and Bahia de las Aguilas is thin.",
            "So for any day that leaves the coast road, <b>download offline maps</b> and save your accommodation details so they open without a connection. No plan changes the coverage, and that is worth saying on a page that carries an eSIM link. This guide is written for US travelers departing the US. For more, see <a href='/dominican-republic/cash-or-card'>cash or card in the Dominican Republic</a>, <a href='/dominican-republic/taxis-and-apps'>taxis and apps in the Dominican Republic</a>, and the <a href='/dominican-republic'>Dominican Republic money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need data for an all-inclusive in the Dominican Republic?", a: "Usually not. Resort wifi covers a week of beach and buffet, and downloading maps and bookings before you fly handles the rest. Check whether your resort charges for a faster wifi tier, since a data plan is often cheaper than the resort's premium upgrade." },
        { q: "Which network is best in the Dominican Republic?", a: "Claro has the wider reach outside the main centers, with Altice competitive in Santo Domingo and Santiago. Neither covers the Cordillera Central, the Samana back roads or the rural interior reliably." },
        { q: "How much is a SIM card in the Dominican Republic?", a: "Roughly 10 to 25 dollars for a Claro or Altice tourist bundle, bought with your passport at a carrier shop or the airport. Caribbean prepaid is not priced like Latin American prepaid, so a travel eSIM at a few dollars per gigabyte can work out cheaper for light use. Compare both." },
        { q: "How much does it cost to use my US phone in the Dominican Republic?", a: "About 10 to 12 dollars a day on an AT&T or Verizon day pass, so roughly 70 to 84 dollars a week. AT&T caps its Day Pass at 10 daily fees per line per bill period, so about 120 dollars covers the rest of that bill period on land, while Verizon's TravelPass has no equivalent cap and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include 5GB to 30GB of high-speed data abroad before slowing to 256kbps." }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "Claro Dominican Republic: prepaid and tourist plan pages", url: "https://www.claro.com.do/", type: "official" },
          { label: "US State Department: Dominican Republic country information and road conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/DominicanRepublic.html", type: "gov" }
        ],
        judgment: "Checked Aug 2026. For the most common trip here, an all-inclusive week, the honest answer is that resort wifi is enough and we earn nothing from saying so. The genuinely useful money note is the resort premium-wifi upsell, which a data plan often undercuts. Local bundle pricing is a current read and varies by outlet, and unlike our Latin American pages the local SIM is not automatically the cheaper option, so this page tells you to compare rather than asserting a winner."
      }
    }
  ]
};
