export default {
  slug: "dominican-republic",
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

  title: "Money in the Dominican Republic (2026): Dollars vs Pesos, Cards, ATMs and the 28% Bill | True Trip Costs",
  description: "How to handle money in the Dominican Republic as a US traveler in 2026: when to pay in US dollars versus pesos, the 18% ITBIS tax and 10% service charge that inflate restaurant bills, fee-aware bank ATMs, tipping, and why you need pesos off the resort. Checked July 2026.",

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
      { n: "Budget",    per: 45,  cash: 0.5 },
      { n: "Mid-range", per: 110, cash: 0.35 },
      { n: "Comfort",   per: 220, cash: 0.2 }
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
  }
};
