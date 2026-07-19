export default {
  slug: "colombia",
  live: true,
  name: "Colombia",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-02",
  sources: {
    changed: "Sources added. Confirmed with DIAN, Colombia's tax authority, that non-resident foreign tourists are exempt from the 19% IVA on hotel and tourism services (shown with the entry tourist stamp, and not applied automatically) and can reclaim IVA on goods bought in stores. Updated the goods-refund minimum to the current 3 UVT, about 150,000 pesos, since the old figure reflected a much earlier tax-unit value.",
    links: [
      { label: "DIAN (Colombia's tax authority): its ruling that hotel and tourism services for non-resident foreigners are IVA-exempt under article 481 of the tax code", url: "https://normograma.dian.gov.co/dian/compilacion/docs/oficio_dian_3522_2025.htm", type: "revenue" },
      { label: "DIAN: the IVA refund for foreign tourists on goods, what qualifies and how to claim it at the airport", url: "https://www.dian.gov.co/Viajeros-y-Servicios-aduaneros/Paginas/Devolucion-IVA-a-Turistas-Extranjeros-Esp.aspx", type: "revenue" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "123", note: "123 is the nationwide line for police, fire and ambulance, and the operator can route you to medical help. Save your hotel address in Spanish to read out.", checked: "Jul 2026", checkedISO: "2026-07-02" },
  insuranceLevel: "medium",
  region: "Americas",
  signals: { cardFriendliness: 3, cashNeed: 3, taxRisk: 2, atmRisk: 4 },
  hook: "Card-friendly in the cities, but carry cash for the coast and small towns, dodge the steep ATM fees, and skip the hotel tax you should not be paying.",
  aliases: ["colombia", "bogota", "medellin", "cartagena", "cali", "santa marta", "barranquilla", "coffee region", "eje cafetero", "peso", "cop", "colombian peso", "caribbean coast"],

  title: "Money in Colombia (2026): Cards, Cash, ATM Fees, the Hotel IVA Exemption and Tipping | True Trip Costs",
  description: "How to handle money in Colombia as a US traveler in 2026: where cards work and where cash is king, the steep ATM fees and low limits and how to beat them, the dollar-conversion trap, the 19% hotel IVA that foreign tourists do not owe, and light 10% tipping. Checked July 2026.",

  h1: "Money in Colombia, sorted.",
  lede: "A calm, current plan for the money side of your trip: what your card covers in the cities, the cash you want everywhere else, the ATM fees worth dodging, and the hotel tax you should not be paying.",
  hero: {
    img: "/colombia-hero.jpg",
    h: 1375,
    alt: "A colorful old-town street in Cartagena, Colombia at dusk, with coral and ochre colonial walls, teal wooden balconies draped in magenta bougainvillea, string lights overhead, the old clock tower gate silhouetted against an orange sunset, a lone figure walking away down the street, and a cup of black coffee, a golden arepa and a bowl of tropical fruit on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Colombia is <b>card-friendly in the cities and cash-first almost everywhere else</b>. Visa and Mastercard work in malls, supermarkets, chain restaurants and hotels in Bogota, Medellin, Cartagena and Cali, though contactless is patchy outside the big malls and Amex is often refused. Bring a <b>no-foreign-fee Visa or Mastercard</b> for city spending and a <b>fee-free ATM debit card</b> for cash, and keep pesos on hand for taxis, street food, small shops, the coast and tips. At the machine, use a <b>Servibanca or Davivienda</b> ATM (higher limits), expect a flat fee of 12,000 to 30,000 pesos so pull a big amount at once, and <b>always choose pesos, never dollars</b>. One easy win: at hotel check-in, show your passport, because as a foreign tourist you should not be paying the 19% IVA on the room.",

  meter: {
    heading: "Card-friendly in the cities, but cash still runs the coast and the small towns.",
    cashPct: 40,
    note: "A rough feel for everyday spending. Cards cover malls, supermarkets (Exito, Jumbo, Carulla), chain restaurants and hotels in the big cities. Cash takes over quickly for taxis, street food, neighborhood tiendas, markets, tips, small towns and the Caribbean coast, and it leans more essential the further you get from the city center."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Great in cities, patchy elsewhere", p: "Visa and Mastercard are widely taken in city malls, supermarkets, chain restaurants and hotels. Contactless is more hit-or-miss than you would expect outside the big malls, and Amex is often refused at smaller places and on the coast. Every foreign swipe also adds your bank's own foreign fee unless your card waives it.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Essential outside the malls", p: "Keep pesos on you. Taxis, street food, neighborhood tiendas, markets, tips and most of the Caribbean coast run on cash, and a rule of thumb is to hold about 100,000 to 200,000 pesos in small notes at any time. Break big notes in supermarkets, since small shops rarely can.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Mind the fee and the limit", p: "There are no fee-free ATMs; expect a flat 12,000 to 30,000 pesos per withdrawal. Limits vary a lot: <b>Servibanca and Davivienda</b> allow around 2,000,000 pesos while <b>Bancolombia</b> caps foreign cards near 800,000, so use the first two and pull a big amount to spread the fee. Withdraw at machines inside banks, malls or supermarkets in daylight.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> for city spending, plus a backup card from a different bank, since a card that works at one ATM may fail at another.",
      "Get a <b>fee-free ATM debit card</b> for cash. Charles Schwab refunds ATM fees worldwide, which cancels out Colombia's steep machine fees; Wise and Revolut are low-fee with high withdrawal limits.",
      "Ask your bank to <b>raise your daily ATM limit</b>, since Colombia's per-transaction caps plus your home limit can leave you short.",
      "Leave the physical dollars at home. You will get a better rate from an ATM than from an exchange booth."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, where the rate can be 6 to 8% worse than an ATM.",
      "Pull pesos from a <b>Servibanca or Davivienda</b> machine and <b>decline \"convert to dollars.\"</b>",
      "You will not get far on cards alone once you leave the terminal, so take out enough cash for your first day or two."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card</b> in city malls, supermarkets, chain restaurants and hotels.",
      "<b>Cash</b> for taxis, street food, tiendas, markets, tips, small towns and the coast.",
      "Order rides on <b>Uber, Cabify or DiDi</b> where you can, or agree the fare before getting into a street taxi.",
      "<b>Always choose pesos</b>, never dollars, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in pesos, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds about 5 to 10%, on both card terminals and ATMs.",
      "Some machines convert automatically without asking. If you are never offered pesos, that is DCC happening on its own, and there is nothing you can do at that machine except try a different one."
    ], cta: null }
  ],

  cash: {
    rate: 3400, cur: "COP", round: 50000, defaultIndex: 1,
    rateNote: "Rough guide at about 3,400 pesos to the dollar in mid-2026, so 100,000 pesos is roughly 29 dollars and 10,000 pesos about 3 dollars. The peso strengthened through 2026 and moves against the dollar, so check a current converter before you travel.",
    styles: [
      { n: "Budget",    per: 30,  cash: 0.5 },
      { n: "Mid-range", per: 55,  cash: 0.4 },
      { n: "Comfort",   per: 120, cash: 0.28 }
    ]
  },

  connectivity: {
    works: "Good in the cities and larger towns. Claro has the widest reach, with Movistar and Tigo close behind, and 4G is strong with growing 5G across Bogota, Medellin, Cartagena and Cali. Signal thins out in the Amazon, the Pacific coast and the high Sierra Nevada. A local prepaid SIM is cheap, and eSIMs from Airalo, Nomad or Holafly work well if your phone supports them. You do not need mobile data to pay for anything, cards and cash stand on their own, so data is mainly for maps and ride apps like Uber and DiDi."
  },

  tax: {
    none: true,
    currency: "COP",
    note: "Colombia has no nightly tourist tax. Better still, foreign tourists are exempt from the 19% IVA (VAT) on hotel rooms, though many hotels apply it by mistake, so show your passport at check-in and check the bill before you pay."
  },

  currencyHeading: "The peso, in plain terms.",
  facts: [
    { sym: "peso", k: "Quick conversion", v: "At about 3,400 pesos to the dollar in mid-2026, 10,000 pesos is roughly 3 dollars, 50,000 about 15, and 100,000 about 29. Locals say \"mil\" for thousand, so \"veinte mil\" (20,000) is about 6 dollars. To sanity-check a price fast, drop three zeros and divide by about 3 and a half." },
    { sym: "smallnotes", k: "Notes and coins", v: "Notes run 2,000, 5,000, 10,000, 20,000, 50,000 and 100,000 pesos; coins are 50, 100, 200, 500 and 1,000. The 50,000 and 100,000 are awkward in small shops and taxis, so ask the ATM for a mix where you can and break the big notes in supermarkets." },
    { sym: "card", k: "Cities yes, contactless maybe", v: "Visa and Mastercard are solid in city malls, supermarkets and hotels, but tap-to-pay is inconsistent outside the big malls and Amex is often refused. Carry a backup card, since the same card can work at one machine and be declined at the next." },
    { sym: "tip", k: "Tipping is light and asked", v: "A voluntary 10% (propina) is usually added to sit-down restaurant bills, and staff must ask if you want to include it. There is no US-style percentage on top. See the tipping section below." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "The hotel tax you should not pay, and money back on shopping.",
    text: "Colombia has <b>no nightly tourist tax</b>, and there is a bigger win hiding in the fine print: as a <b>foreign tourist you are exempt from the 19% IVA (VAT) on hotel rooms</b>. The catch is that the exemption is not automatic and many hotels charge it anyway, sometimes with creative excuses, so present your <b>passport and entry stamp at check-in</b>, ask them to remove the IVA, and check the final bill and the electronic invoice (factura electronica). Separately, if you shop, non-resident visitors can reclaim the <b>19% IVA on goods</b> over about 150,000 pesos, roughly 43 dollars, in a store (a 3 UVT minimum, so it edges up a little each year): keep the electronic invoice with your name and passport on it, and claim at the <b>DIAN desk at the airport</b> before you check your bags when you leave. After the operator's fee you get back a bit less than the full 19%. There is no separate departure tax to pay at the airport; it is built into your ticket."
  },

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Card terminals and ATMs love to offer to charge you in dollars (dynamic currency conversion), which quietly adds about 5 to 10%. Choose pesos every time. Some ATMs convert automatically without asking, so if you are never offered pesos, try a different machine.",
    "<b>Pick the right ATM, and pull a big amount.</b> There are no fee-free ATMs; the flat fee runs 12,000 to 30,000 pesos per withdrawal. Servibanca and Davivienda allow around 2,000,000 pesos while Bancolombia caps foreign cards near 800,000, so use the first two and take out a lot at once to spread the fee. Machines allow several withdrawals a day if your home bank's limit permits.",
    "<b>Do not pay the hotel IVA.</b> As a foreign tourist you are exempt from the 19% IVA on your room, but hotels often add it anyway. Show your passport at check-in, ask for it to be removed, and read the bill before paying.",
    "<b>Skip the street change booths.</b> Airport exchange counters and tourist-area kiosks can shave 6 to 8% off your dollars. An ATM gives a fairer rate; if you must exchange cash, use a proper casa de cambio and count it.",
    "<b>Do not give papaya.</b> The local phrase \"no dar papaya\" means do not create an easy opportunity: keep your phone and cash out of sight, withdraw at ATMs inside banks or malls in daylight, and use Uber, Cabify or DiDi rather than hailing a street taxi, or agree the fare first."
  ],

  tippingHeading: "The 10% is voluntary, and they will ask.",
  tipping: "Tipping in Colombia is light and refreshingly clear. In a sit-down restaurant a voluntary 10% service charge (propina voluntaria) is usually added to the bill, and by law the staff must ask whether you want to include it, often as \"¿Desea incluir la propina?\" You can say yes, no, or a different amount without any awkwardness, though most people leave it unless the service was poor. If you want to tip by card, tell the server before they bring the terminal, since it often has to be added manually; a <b>cash tip</b> is the surer way to reach the staff. Street food and casual counters do not carry the charge, so just round up if you like. A few thousand pesos is a kind tip for a porter or housekeeping, and for a private guide or driver, 5 to 10 dollars per person a day is fair and genuinely meaningful at local wages.",

  faqs: [
    { q: "Do I need cash in Colombia?", a: "Yes, more than in Europe. Cards work well in city malls, supermarkets, chain restaurants and hotels, but taxis, street food, small tiendas, markets, tips, small towns and much of the Caribbean coast run on cash. Keep roughly 100,000 to 200,000 pesos in small notes on you and top up from a Servibanca or Davivienda ATM as needed." },
    { q: "Should I pay in pesos or dollars in Colombia?", a: "Always pesos. If a card terminal or ATM offers to charge you in dollars, decline; that dynamic currency conversion adds about 5 to 10%. Some machines convert automatically without asking, so if you are never given the choice, try a different ATM." },
    { q: "What is the best ATM to use in Colombia?", a: "Use Servibanca or Davivienda, which allow larger withdrawals of around 2,000,000 pesos; Bancolombia caps foreign cards near 800,000. There are no fee-free ATMs, so expect a flat 12,000 to 30,000 peso fee and pull a big amount at once to spread it. Withdraw at machines inside banks, malls or supermarkets in daylight, and always choose pesos, not dollars." },
    { q: "Do I have to pay the hotel tax in Colombia?", a: "As a foreign tourist, no. Non-resident visitors are exempt from the 19% IVA on hotel rooms, but the exemption is not automatic and many hotels charge it anyway. Show your passport and entry stamp at check-in, ask for the IVA to be removed, and check the final bill and the electronic invoice." },
    { q: "Can I get an IVA (VAT) refund on shopping in Colombia?", a: "Yes. Non-resident tourists can reclaim the 19% IVA on goods bought in stores over about 150,000 pesos (roughly 43 dollars, a 3 UVT minimum that rises a little each year). Keep the electronic invoice showing your name and passport, and claim at the DIAN desk at the airport before checking your bags when you leave. After fees you get back a little under the full 19%." },
    { q: "How much cash should I bring for a week in Colombia?", a: "For two mid-range travelers, very roughly 1,000,000 to 1,500,000 pesos (about 300 to 440 dollars) in day-to-day cash across a week beyond your hotel, pulled from a couple of Servibanca or Davivienda withdrawals. Cards cover city malls, supermarkets and hotels; the cash is for taxis, food, tips, small towns and the coast." }
  ],

  culture: {
    heading: "A little Spanish goes a long way",
    intro: "A few words and a couple of stories that turn you from a tourist into a guest. Colombians are famously warm and quick to laugh, and a little Spanish, and a little curiosity, are always returned.",
    phrases: [
      { mean: "Hello", say: "OH-lah", word: "Hola" },
      { mean: "Please", say: "por fah-VOR", word: "Por favor" },
      { mean: "Thank you", say: "GRAH-syahs", word: "Gracias" },
      { mean: "Cheers", say: "sah-LOOD", word: "Salud" },
      { mean: "Delicious", say: "keh REE-koh", word: "Qué rico" },
      { mean: "How cool, how great", say: "keh CHEH-veh-reh", word: "Qué chévere" },
    ],
    tip: "Colombians pepper their speech with <b>chévere</b> (cool, great) and call a friend parcero, or just parce (buddy). A warm ¿Qué más? (kay MAHS), meaning what's up, is how friends say hello.",
    stories: [
      { img: "/colombia-culture-1.jpg",
        alt: "WPA-style illustration of the gilded Muisca chief on a reed raft on a still mountain lake at dawn, attendants lowering gold offerings into the water, emerald hills",
        h: "The real El Dorado",
        p: "The legend of El Dorado, the city of gold, began here with something real: the Muisca people would cover a new chief in gold dust and send him out on a raft on Lake Guatavita to offer gold and emeralds to the water. You can see the little golden raft in Bogota's Gold Museum.",
        note: "Good to know: see the gold raft at the Museo del Oro" },
      { img: "/colombia-culture-2.jpg",
        alt: "WPA-style illustration of a Colombian coffee farmer with a basket picking ripe red cherries on a steep misty green Andean slope, rows of coffee bushes",
        h: "Cafe de Colombia",
        p: "Colombia's mountains grow some of the finest coffee on Earth, picked by hand on impossibly steep green slopes. A tinto, a small black coffee, is offered everywhere as a gesture of welcome. It is a serious point of national pride.",
        note: "Say it: tinto (TEEN-toh), a small black coffee" },
      { img: "/colombia-culture-3.jpg",
        alt: "WPA-style illustration of a cloud of golden-yellow butterflies drifting over a whitewashed town with terracotta roofs at dusk, a lone figure watching from a doorway",
        h: "The land of magical realism",
        p: "Colombia gave the world Gabriel Garcia Marquez and his novel One Hundred Years of Solitude, where yellow butterflies follow a young lover and the ordinary and the magical live side by side. That blend, magical realism, feels true to the country itself.",
        note: "Good to know: Garcia Marquez won the Nobel Prize in 1982" },
    ],
    pride: "Colombians are proud, warm people who know the old headlines and would rather show you the real place: the coffee, the music, the second most biodiverse country on Earth, and a welcome you will not forget."
  },

  spokes: [
    {
      slug: "taxis-and-apps",
      live: true,
      topic: "taxis",
      title: "Which taxi app to use in Colombia, and why never to hail one (2026) | True Trip Costs",
      description: "The one taxi rule that matters in Colombia, which ride app to install (DiDi and inDrive lead, with Uber and Cabify), how the point-to-peso meter works, and the safe way out of Bogota's El Dorado airport. Checked July 2026.",
      h1: "Taxi apps in Colombia, and the one rule that matters",
      lede: "In Colombia the how-you-get-a-taxi matters more than which app. Here is the single rule to follow, the apps locals actually use, and how to leave Bogota's airport without the roadside gamble.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "The one rule in Colombia is simple: <b>never hail a taxi off the street</b>, anywhere, and least of all at night. Use an app instead. <b>DiDi</b> and <b>inDrive</b> are the everyday choices, and <b>Uber</b> and <b>Cabify</b> also work, all giving you a tracked route, a driver on record, and card or cash payment. If you want a licensed <b>yellow taxi</b>, summon it through an app rather than flagging it down. From Bogota's <b>El Dorado airport</b>, use the authorized taxi desk inside the terminal or a pre-booked transfer, not the line outside.",
      sections: [
        {
          h: "The one rule: do not hail on the street",
          p: [
            "This is the whole game in Colombia. A taxi flagged down on the street carries a real, documented risk, from a rigged meter and tourist overcharging to worse after dark, which is exactly why locals and expats book through an app or ask a hotel or restaurant to call the cab. It is not that every taxi is dangerous, it is that an app gives you a <b>driver on record</b>, a <b>tracked route</b> and a paper trail that a random street cab simply does not.",
            "So the habit to build is: order a ride in an app, or have someone call a known company, and skip the raised hand at the curb. This one change removes the large majority of taxi trouble in Bogota, Medellin, Cartagena and Cali in a single step."
          ]
        },
        {
          h: "Which app to install",
          p: [
            "<b>DiDi</b> is strong across Bogota and Cali, competitively priced, and often running promotions. <b>inDrive</b> is the local favorite and works on a bid model, where you propose a fare and drivers accept or counter, usually paid in cash. <b>Uber</b> is widely available and a little pricier, and <b>Cabify</b> is the premium choice, with vetted drivers and fixed fares. Beat, once common, has faded, so skip it. Install <b>DiDi</b> and <b>inDrive</b>, and keep Uber as a backup.",
            "One local quirk is worth expecting: a driver may ask you to <b>sit in the front seat</b> so the ride looks like a casual carpool rather than a regulated ride-share. This is normal here, because ride-hailing sits in a <b>legal gray zone</b> in Colombia, and riding up front is simply how drivers keep a low profile. It is not a red flag."
          ]
        },
        {
          h: "Yellow taxis and the point-to-peso meter",
          p: [
            "A legitimate Colombian taxi is <b>yellow</b> with a white license plate, the plate number shown on the doors and roof, and the driver's details visible inside. The meter shows a <b>point number</b>, not pesos directly, and that number converts to the fare through a <b>printed table</b> kept in the car, so at the end you check the meter's number against the table rather than reading pesos off the display.",
            "Even with a proper yellow taxi, the safe way to get one is to summon it through an app's taxi mode rather than hailing it, because you still get the plate and a ride record. If you ever do end up in a street taxi, confirm the meter is running from the start and check the final number against that conversion table before paying."
          ]
        },
        {
          h: "El Dorado airport and paying",
          p: [
            "At Bogota's <b>El Dorado</b> (BOG), skip the long, chaotic taxi line outside arrivals and use the <b>authorized taxi desks inside the terminal</b>, which is markedly safer. Expect roughly <b>35,000 to 65,000 pesos</b> (about 9 to 13 US dollars) into central districts like La Candelaria, Zona Rosa or Usaquen. The ride apps work from the airport too, though pickups there can involve a little gray-zone friction, so allow for a short wait.",
            "A <b>pre-booked private transfer</b>, around 70,000 to 120,000 pesos, is the smoothest option late at night or with luggage, waiting for you with your name. Ignore anyone who approaches you inside offering a ride, and carry small peso notes for cash rides. For the wider money picture, including how much cash to carry, see the <a href=\"/colombia\">Colombia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Uber legal in Colombia?", a: "Ride-hailing operates in a contested legal gray zone, and Uber even had its license briefly suspended in 2020 before it was reinstated. In practice, Uber, DiDi, inDrive and Cabify all operate and are used daily by locals. A common quirk is being asked to sit in the front seat so the ride looks like a carpool, which is normal here." },
        { q: "Which taxi app is best in Colombia?", a: "DiDi and inDrive are the everyday favorites, with DiDi strong in Bogota and Cali and inDrive using a name-your-price model. Uber is widely available but a little pricier, and Cabify is the premium option with vetted drivers and fixed fares. Install DiDi and inDrive, and keep Uber as a backup." },
        { q: "Can I hail a taxi on the street in Colombia?", a: "Better not to, anywhere, and especially not at night. Street-hailed taxis have a documented crime and overcharging pattern, so use an app, or have your hotel or restaurant call a licensed cab. If you want a yellow taxi, summon it through an app's taxi mode so you still get the plate and a ride record." },
        { q: "What is the taxi from Bogota airport?", a: "At El Dorado, use the authorized taxi desks inside the terminal rather than the line outside, roughly 35,000 to 65,000 pesos into central Bogota. The apps work too, and a pre-booked private transfer runs about 70,000 to 120,000 pesos and waits with your name. Ignore anyone soliciting a ride inside arrivals." }
      ],
      sources: {
        links: [
          { label: "US Department of State: Colombia country information, safety and local-travel context for US visitors", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Colombia.html", type: "gov" },
          { label: "Colombia Uncharted: a 2026 Bogota transport guide covering the ride apps and El Dorado airport options", url: "https://www.colombiauncharted.com/bogota/complete-bogota-transport-guide/", type: "guide" },
          { label: "LorenziGo: a 2026 Bogota guide on the apps, the airport taxi desks and the point-to-peso meter", url: "https://lorenzigo.com/how-to-get-around-bogota/", type: "guide" }
        ],
        judgment: "Ride-hailing in Colombia sits in a legal gray zone and can involve friction at airports, and fares move with the peso, so treat figures as a recent read and check the price in your app. The advice to never street-hail is the constant. Checked July 2026."
      }
    }
  ]
};
