export default {
  slug: "colombia",
  iso2: "co",
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

  title: "Colombia ATM fees, cards and cash: money in 2026",
  description: "ATM fees are steep and limits low, so withdraw more, less often. Cards work in the cities, and foreign tourists do not owe the 19% hotel IVA. Checked 2026.",

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
      { n: "Budget", per: 30, cash: 0.5, room: 40 },
      { n: "Mid-range", per: 55, cash: 0.4, room: 85 },
      { n: "Comfort", per: 120, cash: 0.28, room: 180 }
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
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Colombian peso (COP)" },
        { k: "Cards", v: "Cities, hotels, nicer restaurants" },
        { k: "Cash for", v: "Markets, small shops, taxis" },
        { k: "ATMs", v: "Use ones inside bank branches" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Colombia? Cards vs pesos 2026",
      description: "Cards work in Colombian cities, but markets, small shops and taxis run on cash. Use ATMs inside bank branches, and choose pesos, not dollars. Checked 2026.",
      h1: "Do I need cash in Colombia, or can I use cards?",
      lede: "Short answer: cards in cities for hotels and nicer places, and peso cash for markets, small shops and taxis. Use ATMs inside banks or malls for safety. Here is how to handle it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Both. Colombia takes <b>cards in cities</b>, at <b>hotels, malls and nicer restaurants</b>, where <b>contactless</b> is common, but <b>markets, small shops, street food and taxis</b> are largely cash. The currency is the <b>peso</b>, which runs into <b>large numbers</b>. For safety, use <b>ATMs inside bank branches or malls</b> rather than street machines, since card skimming happens. Choose <b>pesos, not dollars</b>, on any card or ATM. Use <b>DiDi or inDrive</b> for taxis.",
      sections: [
        {
          h: "Cards in cities, cash for daily life",
          icon: "phoneok",
          key: { fig: "Cards in cities", tag: "Cash for markets", text: "Cards work in cities at hotels, malls and nicer restaurants, but markets, small shops and taxis are largely cash. Carry pesos.", tone: "teal" },
          p: [
            "Colombia takes <b>cards in cities</b>, at <b>hotels, malls, chains and nicer restaurants</b>, where <b>contactless</b> is common. But <b>markets, small shops, street food and taxis</b> are largely <b>cash</b>, so carry <b>pesos</b>.",
            "The peso runs into <b>large numbers</b> (everyday amounts in the thousands and tens of thousands), so keep an eye on the zeros. Away from cities and tourist areas, plan on <b>more cash</b>."
          ]
        },
        {
          h: "Choose pesos, not dollars",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose pesos", text: "When a terminal or ATM offers dollars or pesos, pick pesos. Dollars trigger dynamic currency conversion at a rate about 3 to 8% worse.", tone: "amber" },
          p: [
            "When a card terminal or ATM asks whether to charge in <b>dollars or pesos, always choose pesos</b>. Dollars trigger dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. Decline it every time.",
            "For cash, use ATMs at <b>major banks</b> (such as Bancolombia or Davivienda). Some cap withdrawals or charge foreign-card fees, so take out a sensible amount. Use a <b>debit card</b> to avoid cash-advance fees."
          ]
        },
        {
          h: "Use ATMs safely, and taxis",
          icon: "peso",
          key: { fig: "Bank ATMs", tag: "Guard against skimming", text: "Use ATMs inside bank branches or malls rather than street machines, to guard against skimming. Use DiDi or inDrive for taxis.", tone: "teal" },
          p: [
            "For safety, use <b>ATMs inside bank branches or shopping malls</b> rather than exposed street machines, since <b>card skimming</b> does happen, and shield the keypad. For <b>taxis</b>, use <b>DiDi or inDrive</b>, which show a fixed or metered price and are safer than hailing on the street.",
            "For tipping norms, see <a href='/colombia/tipping'>tipping in Colombia</a>, and for the wider picture, the <a href='/colombia'>Colombia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Colombia?", a: "Yes. Cards work in cities at hotels, malls and nicer restaurants, but markets, small shops, street food and taxis are largely cash. Carry pesos, and more of them away from cities." },
        { q: "Should I pay in pesos or dollars in Colombia?", a: "Always pesos. If a card machine or ATM offers dollars, decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
        { q: "Are ATMs safe in Colombia?", a: "Use ATMs inside bank branches or shopping malls rather than exposed street machines, since card skimming happens. Shield the keypad, and take out a sensible amount at once." },
        { q: "How do I pay for taxis in Colombia?", a: "Use DiDi or inDrive, which show a fixed or metered price and are safer than hailing on the street. For a street taxi, agree the fare or use the meter, and pay in pesos." }
      ],
      sources: {
        links: [
          { label: "Banco de la Republica: official exchange rate information", url: "https://www.banrep.gov.co/en", type: "gov" },
          { label: "US State Department: Colombia country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Colombia.html", type: "gov" }
        ],
        judgment: "Colombia takes cards in cities but daily life runs on cash, and ATM skimming is a known risk, so bank-branch machines are safest. The peso rate moves, and the firm rule is to decline dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "A 10% voluntary tip" },
        { k: "Restaurants", v: "The server asks to add it" },
        { k: "Just say", v: "Yes, that is the tip" },
        { k: "Taxis", v: "No tip, round up" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Colombia: the voluntary 10%, explained",
      description: "Servers ask whether to add a 10% voluntary tip. When to say yes, when it is fine to decline, and what to do about taxis. Checked 2026.",
      h1: "Tipping in Colombia",
      lede: "In Colombia, restaurants add a voluntary 10% tip that the server asks you about. Say yes and that is the tip, no extra needed. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "In Colombia, sit-down restaurants add a <b>voluntary 10% tip</b> (the <b>propina voluntaria</b>), and the server will usually <b>ask whether to include it</b>, saying something like desea incluir la propina. <b>Say yes</b> and that <b>is the tip</b>, with nothing extra needed; you can decline if service was poor. At <b>casual spots and street food</b>, no tip is expected. For <b>taxis</b>, no tip is expected, though rounding up is a courtesy. Leave anything extra in <b>cash</b>, in pesos.",
      sections: [
        {
          h: "The voluntary 10%, and the question",
          icon: "receipt",
          key: { fig: "10%", tag: "The server asks", text: "Restaurants add a voluntary 10% tip and the server asks whether to include it. Say yes and that is the tip.", tone: "teal" },
          p: [
            "At <b>sit-down restaurants</b>, a <b>voluntary 10% tip</b>, the <b>propina voluntaria</b>, is the norm. By law it is optional, so the server will usually <b>ask</b> whether to add it (desea incluir la propina, do you want to include the tip).",
            "The easy answer is <b>yes</b>: that 10% <b>is the tip</b>, and nothing extra is needed. If service was genuinely poor, you can politely decline."
          ]
        },
        {
          h: "Where and how much",
          icon: "coins",
          key: { fig: "Casual: none", tag: "Restaurants only", text: "The 10% applies at sit-down restaurants. At casual spots, street food and cafes, no tip is expected.", tone: "teal" },
          p: [
            "The <b>10%</b> applies at <b>sit-down restaurants</b>. At <b>casual eateries, street food and cafes</b>, <b>no tip is expected</b>, and you simply pay the price.",
            "It is a kind gesture to tip a <b>guide, driver or hotel porter</b> a small amount for good service, but it is not obligatory."
          ]
        },
        {
          h: "Taxis, and paying",
          icon: "cash",
          key: { fig: "No taxi tip", tag: "Round up if you like", text: "No tip is expected for taxis, though rounding up is a courtesy. Leave anything extra in cash, in pesos.", tone: "teal" },
          p: [
            "For <b>taxis</b>, <b>no tip is expected</b>, though rounding up the fare is a small courtesy. An app such as DiDi or inDrive shows a fixed or metered price, and the total is final. Leave any extra in <b>cash, in Colombian pesos</b>. For the wider picture, see the <a href='/colombia'>Colombia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Colombia?", a: "At sit-down restaurants, yes: a voluntary 10% tip that the server asks whether to include. Say yes and that is the tip, with nothing extra needed. At casual spots and street food, no tip is expected." },
        { q: "What is the propina voluntaria in Colombia?", a: "A voluntary 10% tip that restaurants add. By law it is optional, so the server usually asks whether to include it. Saying yes covers the tip; you can decline if service was poor." },
        { q: "Do you tip taxi drivers in Colombia?", a: "No, it is not expected, though rounding up is a small courtesy. With an app such as DiDi or inDrive, the shown price is final." },
        { q: "How much do you tip at a Colombian restaurant?", a: "The voluntary 10% the server asks about, and nothing more. At casual eateries, street food and cafes, no tip is expected." }
      ],
      sources: {
        links: [
          { label: "US State Department: Colombia country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Colombia.html", type: "gov" }
        ],
        judgment: "Colombia's voluntary 10% and the server asking to include it are well-established restaurant conventions. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "The one rule", v: "Never hail on the street" },
        { k: "Best apps", v: "DiDi, inDrive (also Uber, Cabify)" },
        { k: "Legit taxi", v: "Yellow, white plate, meter" },
        { k: "Airport", v: "Use the desks inside El Dorado" }
      ],
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Taxi apps in Colombia, and why not to hail one",
      description: "Book by app, never hail: DiDi and inDrive lead, with Uber and Cabify. How the point-to-peso meter works, and the safe way out of Bogota El Dorado.",
      h1: "Taxi apps in Colombia, and the one rule that matters",
      lede: "In Colombia the how-you-get-a-taxi matters more than which app. Here is the single rule to follow, the apps locals actually use, and how to leave Bogota's airport without the roadside gamble.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "The one rule in Colombia is simple: <b>never hail a taxi off the street</b>, anywhere, and least of all at night. Use an app instead. <b>DiDi</b> and <b>inDrive</b> are the everyday choices, and <b>Uber</b> and <b>Cabify</b> also work, all giving you a tracked route, a driver on record, and card or cash payment. If you want a licensed <b>yellow taxi</b>, summon it through an app rather than flagging it down. From Bogota's <b>El Dorado airport</b>, use the authorized taxi desk inside the terminal or a pre-booked transfer, not the line outside.",
      sections: [
        {
          h: "The one rule: do not hail on the street",
          icon: "alert",
          key: { tag: "Always use an app", text: "This is the whole game in Colombia: a taxi flagged on the street carries a real, documented risk, from a rigged meter to worse after dark. Never hail one, anywhere, and least of all at night. Use an app.", tone: "amber" },
          p: [
            "This is the whole game in Colombia. A taxi flagged down on the street carries a real, documented risk, from a rigged meter and tourist overcharging to worse after dark, which is exactly why locals and expats book through an app or ask a hotel or restaurant to call the cab. It is not that every taxi is dangerous, it is that an app gives you a <b>driver on record</b>, a <b>tracked route</b> and a paper trail that a random street cab simply does not.",
            "So the habit to build is: order a ride in an app, or have someone call a known company, and skip the raised hand at the curb. This one change removes the large majority of taxi trouble in Bogota, Medellin, Cartagena and Cali in a single step."
          ]
        },
        {
          h: "Which app to install",
          icon: "phoneok",
          key: { fig: "DiDi first", tag: "Tracked, on record", text: "DiDi is strong across Bogota and Cali and competitively priced. inDrive is the local favorite on a bid model. Uber and Cabify also work, all giving a tracked route and a driver on record.", tone: "teal" },
          p: [
            "<b>DiDi</b> is strong across Bogota and Cali, competitively priced, and often running promotions. <b>inDrive</b> is the local favorite and works on a bid model, where you propose a fare and drivers accept or counter, usually paid in cash. <b>Uber</b> is widely available and a little pricier, and <b>Cabify</b> is the premium choice, with vetted drivers and fixed fares. Beat, once common, has faded, so skip it. Install <b>DiDi</b> and <b>inDrive</b>, and keep Uber as a backup.",
            "One local quirk is worth expecting: a driver may ask you to <b>sit in the front seat</b> so the ride looks like a casual carpool rather than a regulated ride-share. This is normal here, because ride-hailing sits in a <b>legal gray zone</b> in Colombia, and riding up front is simply how drivers keep a low profile. It is not a red flag."
          ]
        },
        {
          h: "Yellow taxis and the point-to-peso meter",
          icon: "coins",
          key: { fig: "Yellow", tag: "White plate, meter", text: "A legitimate Colombian taxi is yellow with a white license plate, the number shown on the doors and roof, and the driver's details inside. The meter shows points that convert to pesos on a card.", tone: "teal" },
          p: [
            "A legitimate Colombian taxi is <b>yellow</b> with a white license plate, the plate number shown on the doors and roof, and the driver's details visible inside. The meter shows a <b>point number</b>, not pesos directly, and that number converts to the fare through a <b>printed table</b> kept in the car, so at the end you check the meter's number against the table rather than reading pesos off the display.",
            "Even with a proper yellow taxi, the safe way to get one is to summon it through an app's taxi mode rather than hailing it, because you still get the plate and a ride record. If you ever do end up in a street taxi, confirm the meter is running from the start and check the final number against that conversion table before paying."
          ]
        },
        {
          h: "El Dorado airport and paying",
          icon: "plane",
          key: { fig: "Use a desk", tag: "Skip the outside line", text: "At Bogota's El Dorado, skip the long chaotic taxi line outside and use the authorized taxi desks inside the terminal, which is markedly safer. Or book a DiDi to the app pickup point.", tone: "teal" },
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
    },
    {
      slug: "check-mig",
      glance: [
        { k: "Visa", v: "None for US citizens, up to 90 days" },
        { k: "Check-Mig", v: "Required, free, before every flight" },
        { k: "Stay", v: "90 days, extendable to 180 a year" },
        { k: "Where", v: "migracioncolombia.gov.co only" }
      ],
      live: true,
      topic: "visas",
      title: "Colombia visa and Check-Mig for US travelers 2026",
      description: "No visa for US citizens for up to 90 days, but everyone files the free Check-Mig form before each flight. When to do it, and the sites that charge.",
      h1: "Do US citizens need a visa for Colombia?",
      lede: "Short answer: no visa, but yes to one free online form. US citizens enter Colombia visa-free for up to 90 days; the catch is Check-Mig, which every traveler files before flying. Here is how it works, and how not to overpay for it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-26",
      answer: "US citizens need <b>no visa</b> for Colombia for tourism or business, up to <b>90 days</b> on arrival (extendable once, to a maximum of 180 days a calendar year). What you <b>do</b> need is <b>Check-Mig</b>, a <b>free online form</b> from Migracion Colombia that every traveler completes <b>between 1 and 72 hours before</b> each flight to or from Colombia. It is <b>free</b> on the official site, airlines check it at boarding, and it is not a visa, just a registration.",
      official: {
        label: "Migracion Colombia: the official Check-Mig form",
        url: "https://apps.migracioncolombia.gov.co/check-mig",
        note: "The official government Check-Mig portal. It is completely free. Complete it in the 72 hours before each flight to or from Colombia. Many third-party sites charge $30 to $50 to file this free form, so use only this official page."
      },
      expediter: false,
      sections: [
        {
          h: "No visa, but you must file Check-Mig",
          icon: "passport",
          key: { fig: "Free", tag: "Every traveler, every flight", text: "US citizens need no visa for up to 90 days. Everyone, visa or not, must complete the free Check-Mig form online before each flight to or from Colombia. Airlines check it at boarding.", tone: "teal" },
          p: [
            "US passport holders enter Colombia <b>visa-free</b> for tourism or business and are stamped in for up to <b>90 days</b> on arrival. The one thing you must not skip is <b>Check-Mig</b>: a short <b>online form</b> from <b>Migracion Colombia</b> that <b>every</b> traveler completes, whether or not they need a visa, before <b>each</b> flight to or from Colombia.",
            "It is <b>not a visa</b> and does not guarantee entry, it is a registration that speeds the border and that <b>airlines check at boarding</b>. Skip it and you may be held up at check-in."
          ]
        },
        {
          h: "How and when to file it",
          icon: "calendar",
          key: { fig: "1 to 72 hours", tag: "Before each flight", text: "Complete Check-Mig online in the window from 72 hours to 1 hour before departure, once for arrival and again for your departure flight. Save the confirmation.", tone: "teal" },
          p: [
            "Fill it in <b>between 72 hours and 1 hour before</b> your flight. It takes a few minutes and asks for your passport details and your flight (airline, number, dates), so have your booking to hand. You complete it <b>twice</b>: once for your <b>arrival</b> flight and again for your <b>departure</b>. Save or print the confirmation."
          ],
          steps: [
            "Go to the official Migracion Colombia site, apps.migracioncolombia.gov.co/check-mig. Go there directly, not through a search ad.",
            "Enter your passport and personal details and your flight information for the trip into Colombia.",
            "Submit and save the confirmation. It is free, so if you are asked to pay, you are on the wrong site.",
            "Repeat the whole thing for your departure flight before you leave Colombia."
          ]
        },
        {
          h: "The free-form trap",
          icon: "alert",
          key: { tag: "The form is free", text: "Check-Mig is completely free on the official site. A crowd of third-party sites charge $30 to $50 to file it for you. Use only the official Migracion Colombia portal.", tone: "amber" },
          p: [
            "Because the form is <b>free and required</b>, a whole industry of <b>third-party sites</b> has sprung up charging <b>$30 to $50</b> to fill in the same government form. They are not official and add nothing you cannot do yourself in a few minutes. Use only <b>apps.migracioncolombia.gov.co</b>.",
            "A few practical extras: carry a passport with a <b>blank page</b>, have a <b>return or onward ticket</b> to show, and note that <b>yellow fever</b> vaccination is required for some national parks, and if you are arriving from a country where yellow fever is a risk."
          ]
        },
        {
          h: "A couple of notes",
          icon: "tag",
          key: { tag: "Extendable to 180", text: "You can extend the 90-day stay once inside Colombia, up to 180 days in a calendar year. Working or longer stays need a visa. Then see the money guide.", tone: "amber" },
          p: [
            "The <b>90 days</b> can be <b>extended once</b> inside Colombia (through Migracion Colombia) up to a total of <b>180 days per calendar year</b>. Working, studying or living there needs a proper <b>visa</b> arranged separately, Check-Mig does not cover any of that.",
            "For how money works once you are there, cash, cards, the peso and the rest, see the <a href=\"/colombia\">Colombia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for Colombia?", a: "No. US citizens visit Colombia visa-free for tourism or business, and are stamped in for up to 90 days on arrival, extendable once to a maximum of 180 days per calendar year. You do need a valid passport and a completed Check-Mig form. Working or longer stays require a visa." },
        { q: "What is Check-Mig and is it required?", a: "Check-Mig is a free online pre-registration form from Migracion Colombia that every traveler must complete before each flight to or from Colombia, whether or not they need a visa. It is not a visa; it is a border registration that airlines check at boarding. Complete it between 72 hours and 1 hour before departure." },
        { q: "How much does the Colombia Check-Mig cost?", a: "Nothing. Check-Mig is completely free on the official Migracion Colombia site, apps.migracioncolombia.gov.co/check-mig. Many third-party sites charge $30 to $50 to file the same form; they are not official. Use only the government portal, and if you are asked to pay, you are on the wrong site." },
        { q: "Do I need to fill out Check-Mig to leave Colombia too?", a: "Yes. Check-Mig applies to both entry and exit, so you complete it once for your arrival flight and again for your departure, each time within the 72-hour-to-1-hour window before the flight. Save the confirmation, as airlines may ask for it at check-in." }
      ],
      sources: {
        links: [
          { label: "Migracion Colombia: the official, free Check-Mig registration form", url: "https://apps.migracioncolombia.gov.co/check-mig", type: "gov" },
          { label: "US Department of State: Colombia country information, entry and exit requirements for US citizens", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Colombia.html", type: "gov" },
          { label: "US Department of State: the country information pages, the official router for entry requirements by destination", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html", type: "gov" }
        ],
        judgment: "Colombia's 90-day visa-free entry for US citizens is stable, and Check-Mig has been required since 2022 and remains so in 2026, though airport enforcement can be inconsistent, so complete it to be safe. The form is free; only the official Migracion Colombia site is legitimate. Checked July 2026."
      }
    },
    {
      slug: "money-scams",
      glance: [
        { k: "The real risk", v: "Being unable to say no" },
        { k: "Taxis", v: "Never hail one, anywhere" },
        { k: "Drinks and food", v: "Not from new acquaintances" },
        { k: "Your hotel bill", v: "You are exempt from 19%" }
      ],
      live: true,
      topic: "scams",
      title: "Common money scams in Colombia, and what they cost",
      description: "In Colombia the money traps work by making you unable to refuse, through drugging or an unlicensed taxi. What each one is, how to stay out of the situation, and the 19% you should not be paying.",
      h1: "Common money scams in Colombia, and what they cost you",
      lede: "Millions of people visit Colombia and have a straightforwardly good time, and most trips pass without any of this. But we are not going to tell you a few habits defuse it, because that is not true here. The way money is taken from foreign visitors in Colombia is mostly not an inflated bill or a rigged meter. It is being made unable to refuse, by something in a drink or by a car you cannot get out of. That changes the advice: it is about not entering the situation rather than watching your wallet. The situations are few, specific and recognisable, and the decisions that avoid them are small. Note that this page covers money; the US State Department currently has Colombia at Level 3 with a kidnapping indicator, so read the full advisory for the wider picture.",
      checked: "Aug 2026",
      checkedISO: "2026-08-15",
      answer: "Three things account for most money taken from foreign visitors here, and they share a mechanism. <b>Drug-facilitated robbery</b>, where something is put in a drink, food, a cigarette or gum, most often in nightlife settings or after a dating-app meeting, and cards, phone and cash go while you cannot resist. The <b>paseo millonario</b>, an express kidnapping in a street-hailed taxi, where you are driven between ATMs. And people <b>claiming to be police</b> who want to inspect your cash. The escapes are situational, not financial: <b>never accept a drink, food or a cigarette from someone you do not know well</b>, <b>never hail a taxi off the street</b>, <b>use DiDi, inDrive, Uber or Cabify</b>, <b>withdraw inside banks in daylight</b>, and <b>set a low daily withdrawal cap before you fly</b>. Separately, and in your favour: as a foreign tourist you are <b>exempt from the 19 percent IVA</b> on your hotel room.",
      sections: [
        {
          h: "How money is actually taken here",
          icon: "alert",
          key: { tag: "Do not accept it", text: "The US Embassy warns that criminals use drugs you cannot see, smell or taste, slipped into drinks or food, to make a victim helpless and then rob them. Never accept a drink from someone you do not know well.", tone: "teal" },
          p: [
            "This is the one that makes Colombia different from the other guides on this site, so it is worth stating plainly rather than gently. The US Embassy in Bogota's own current guidance says criminals use drugs you <b>cannot see, smell or taste</b>, slipped into drinks or food, to make someone helpless so they can rob them, and that these are especially dangerous mixed with alcohol. <b>Scopolamine</b> is the substance most often named. US security reporting places these incidents in <b>nightlife settings, bars and clubs</b>, with people who look wealthy targeted, and says the approach commonly comes through <b>dating apps</b>. What leaves is your phone, cards, cash and sometimes more, taken while you are unable to object. There is a real medical risk here too, not just a financial one, which is the honest reason to take it seriously rather than treat it as a wallet problem.",
            "The escapes are entirely about the moment before. <b>Never accept a drink, food, a cigarette or gum from someone you do not know well</b>, and never leave a drink or plate unattended and come back to it. Canada's advice adds the detail that undercuts the obvious defense: victims often build a relationship over <b>several dates in public places first</b>, and the drugging comes after trust is established, so meeting in public a few times is not the safeguard it sounds like. Be wary of inviting someone new to where you are staying, or going to theirs. Tell someone at home who you are meeting, which app, and where. Both men and women, alone and in groups, have been targeted. If a night goes wrong, the embassy's other instruction applies: <b>do not resist a robbery</b>, because your phone is replaceable."
          ]
        },
        {
          h: "Taxis, and the paseo millonario",
          icon: "taxi",
          key: { fig: "Never hail one", tag: "Use an app", text: "Express kidnappings, known locally as the paseo millonario, commonly involve a cab hailed from the street. US government employees are prohibited from using street taxis. Book through an app instead.", tone: "teal" },
          p: [
            "Colombia has one transport rule and it is absolute: <b>never hail a taxi off the street</b>, anywhere, and least of all at night. US security reporting names the crime directly, the <b>paseo millonario</b>, or millionaire's ride, an express kidnapping in which a passenger is driven around for hours and made to withdraw money at a series of ATMs before being released. It says these and other taxi crimes <b>commonly involve a cab hailed from the street</b>. Canada's advice puts express kidnappings and assaults in <b>unlicensed taxis</b>. The State Department prohibits US government employees from using street taxis at all, which is the clearest signal available about how seriously to take a rule.",
            "The replacement is easy and cheap. <b>DiDi and inDrive</b> are the everyday choices, with <b>Uber and Cabify</b> also working, and all of them give you a driver on record, a tracked route and a fare set in advance. If you want a licensed yellow taxi, <b>summon it through an app</b> rather than flagging it down. From Bogota's El Dorado airport, use the <b>authorized taxi desk inside the terminal</b> or a pre-booked transfer, not the line outside; Canada notes that El Dorado permits only authorized taxis to collect passengers at its terminals. One more habit from the same advisory: <b>note the plate number and driver's name and send them to someone</b> as you set off. The <a href=\"/colombia/taxis-and-apps\">Colombia taxis and apps guide</a> has the detail."
          ]
        },
        {
          h: "At the ATM, and anyone who wants to see your cash",
          icon: "atm",
          key: { fig: "Set a low cap", tag: "Inside a bank", text: "Lower your daily withdrawal limit before you fly, so the ceiling is set no matter what happens. Use ATMs inside bank branches or malls in daylight, never street machines at night.", tone: "teal" },
          p: [
            "Two separate problems meet at the cash machine. The first is ordinary <b>card skimming</b>, which is why the rule here is to use ATMs <b>inside bank branches or malls, in daylight</b>, rather than street machines. The second is that the express-kidnapping scenario above ends at a sequence of ATMs, which gives you a genuinely useful piece of preparation: <b>lower your daily withdrawal limit with your bank before you fly</b>, and keep less in the account the card draws on. That caps the worst case in advance, whatever happens, and costs you nothing. Colombia has no fee-free ATMs and per-withdrawal charges are steep, so plan fewer, larger withdrawals inside banks rather than frequent small ones, as the <a href=\"/colombia/cash-or-card\">Colombia cash and cards guide</a> explains.",
            "Then there is the person who wants to look at the money you are carrying. Travelers and Colombian press report people <b>posing as police</b>, sometimes in plain clothes claiming to be detectives, who stop foreigners to check documents or inspect cash for counterfeits; Bogota police have arrested people running exactly this. It is not in a government travel advisory, so treat it as reported rather than official, but the escape is clean and worth memorizing. <b>Real officers do not demand cash on the spot or ask to see how much you are carrying.</b> Ask to see their <b>placa</b>, offer to walk together to the nearest <b>CAI</b>, the small police posts found every few blocks, and do not get into a vehicle or hand over your phone. Carry a photocopy or phone photo of your passport rather than the original. On card machines, always choose <b>pesos</b>, and note that some Colombian ATMs convert without asking, so check the screen."
          ]
        },
        {
          h: "The 19 percent you should not be paying",
          icon: "receipt",
          key: { fig: "19%", tag: "Ask at check-in", text: "Foreign tourists are exempt from the 19 percent IVA on hotel rooms, but hotels frequently add it anyway. Show your passport at check-in, ask for it to be removed, and read the bill.", tone: "amber" },
          p: [
            "Now the item that goes the other way, and it is the most valuable thing on this page in pure money terms. As a <b>foreign tourist</b>, you are <b>exempt from the 19 percent IVA</b> on your hotel room in Colombia. It is not a discount you negotiate, it is an exemption you qualify for. The catch is that plenty of hotels add it anyway, either because the booking system defaults to it or because nobody asked, and it is not refunded automatically. On a two-week trip that is a meaningful number.",
            "Getting it is simple if you do it at the right moment. <b>Show your passport and entry stamp at check-in</b>, say you are a foreign tourist and ask for the IVA to be removed, and then <b>read the bill before you pay</b> rather than at the airport afterwards. Booking through an international platform that has already charged you does not always apply it, so check the invoice either way. While you are reading bills: restaurants add a <b>voluntary 10 percent tip</b> and will usually ask whether to include it, which the <a href=\"/colombia/tipping\">Colombia tipping guide</a> covers, and airport and tourist-area exchange counters can shave <b>6 to 8 percent</b> off your dollars, so an ATM inside a bank is the fairer route."
          ]
        },
        {
          h: "What this means for your money",
          icon: "coins",
          key: { fig: "Decisions", tag: "Not just vigilance", text: "The habits here are decisions made in advance: never hail a taxi, never accept a drink from someone new, withdraw inside banks in daylight, and lower your daily cap before you fly.", tone: "teal" },
          p: [
            "What separates Colombia from the rest of these guides is that vigilance is not the tool. You cannot watch your wallet carefully enough to beat a drink you did not see prepared, or negotiate your way out of a car. So the list is short, and every item is a <b>decision made in advance</b>: <b>never hail a taxi off the street</b>, <b>never accept a drink, food or a cigarette from someone you do not know well</b>, <b>withdraw inside banks in daylight</b>, <b>lower your daily withdrawal cap before you fly</b>, and <b>tell someone where you are going and who you are meeting</b>. The local phrase for the whole idea is <b>no dar papaya</b>, do not hand someone an easy opportunity, and it is the frame Colombians themselves use.",
            "If something does happen: emergency services are <b>123</b>, you file a report, a <b>denuncia</b>, at a Fiscalia office or online, and Bogota, Medellin and Cartagena have a <b>tourist police</b> unit used to dealing with foreigners. Report it even if you expect nothing back, because your insurer will want the record. Call your card issuer immediately and freeze the account. And to be clear about proportion: most visits involve none of this, Colombia is a genuinely rewarding place to travel, and the reason to read a page like this is so the few decisions that matter are already made before you are tired at an airport. For getting and spending money well while you are there, see the <a href=\"/colombia/cash-or-card\">Colombia cash and cards guide</a> and the <a href=\"/colombia\">Colombia cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Colombia safe for tourists?", a: "Millions visit and most trips pass without incident, but the honest answer is that Colombia is not in the same category as the other destinations on this site. The US State Department currently has it at Level 3, reconsider travel, with a kidnapping indicator. This page covers money specifically, where the risks are drug-facilitated robbery, express kidnapping in street taxis, and card fraud. Read the current advisory for the wider picture." },
        { q: "What is scopolamine, and how do I avoid being drugged in Colombia?", a: "It is the substance most often named in drug-facilitated robbery, given in a drink, food, a cigarette or gum, and the US Embassy notes these drugs cannot be seen, smelled or tasted and are more dangerous mixed with alcohol. The avoidance is entirely upstream: never accept a drink, food or a cigarette from someone you do not know well, never leave a drink unattended, and be cautious about going somewhere private with a new acquaintance." },
        { q: "Are dating apps risky in Colombia?", a: "US and Canadian government advice both warn about them specifically. The pattern Canada describes is worth knowing because it defeats the obvious defense: victims often meet the same person several times in public places first, and the drugging comes once trust is established. Meet in public, tell someone at home who you are meeting and which app, avoid private settings, and never accept a drink you did not watch being poured." },
        { q: "What is the paseo millonario?", a: "An express kidnapping, literally the millionaire's ride. A passenger who hailed a taxi in the street is driven around for hours and made to withdraw money from a series of ATMs before being released. US security reporting says these and other taxi crimes commonly involve a street-hailed cab. Never hail a taxi in Colombia; use DiDi, inDrive, Uber or Cabify, or summon a licensed yellow taxi through an app." },
        { q: "How do I get taxis safely in Colombia?", a: "Book through an app, every time. DiDi and inDrive are the everyday choices, and Uber and Cabify work too, all giving a driver on record, a tracked route and a fare set in advance. US government employees are prohibited from using street taxis. At Bogota's El Dorado airport, use the authorized taxi desk inside the terminal or a pre-booked transfer, not the line outside, and send someone the plate and driver name." },
        { q: "Do I have to pay the 19 percent hotel tax in Colombia?", a: "No. Foreign tourists are exempt from the 19 percent IVA on hotel rooms, but many hotels add it anyway and it is not removed automatically. Show your passport and entry stamp at check-in, say you are a foreign tourist, ask for the IVA to be taken off, and read the bill before you pay rather than discovering it afterwards. Check the invoice even when you prepaid through a booking platform." }
      ],
      sources: {
        links: [
          { label: "US Embassy in Colombia: straight talk about crime in Colombia, including drugging and dating app warnings", url: "https://co.usembassy.gov/straight-talk-about-crime-in-colombia/", type: "gov" },
          { label: "US State Department: Colombia travel advisory, currently Level 3 with a kidnapping indicator", url: "https://travel.state.gov/en/international-travel/travel-advisories/colombia.html", type: "gov" },
          { label: "Government of Canada: Colombia travel advice, including express kidnapping in unlicensed taxis and the dating app pattern", url: "https://travel.gc.ca/destinations/colombia", type: "gov" }
        ],
        judgment: "The drugging mechanism, the dating app warning and the do-not-resist advice come from the US Embassy in Bogota's own current crime guidance, dated July 2026. The paseo millonario, its association with street-hailed cabs, and the kidnapping indicator come from US security reporting for Colombia. The express kidnapping in unlicensed taxis, the El Dorado authorized-taxi rule, the note-the-plate habit and the detail that dating app victims often meet several times in public before being drugged all come from current Government of Canada travel advice. We have deliberately not quoted the national estimate of scopolamine incidents that circulates widely, because it is a single-source figure for a whole country and would read as a per-visitor risk, which it is not. We have attached no dollar figure to the drugging or express-kidnapping sections because no honest typical figure exists; the loss is whatever your cards and accounts allow, which is exactly why lowering the daily cap in advance is the useful advice. The 19 percent IVA exemption for foreign tourists is a standing Colombian rule but is applied inconsistently by hotels, so treat it as something to claim rather than expect. Checked August 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Good cities and the coffee region" },
        { k: "Carrier roaming", v: "$10 to $12 a day" },
        { k: "Cheapest", v: "A Claro SIM, a few dollars" },
        { k: "Signal gaps", v: "Amazon, Pacific coast, La Guajira" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "Colombia SIM card: Claro for a few dollars",
      description: "A Claro SIM is a few dollars for plenty of data and has the widest reach in the country. Coverage is good in the cities and thin in the Amazon and on the Pacific coast.",
      h1: "Staying connected in Colombia.",
      lede: "Colombia is cheap and easy on this front: a Claro SIM costs a few dollars, covers more of the country than anything else, and takes a passport and a few minutes.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: "Coverage is <b>good in Bogota, Medellin, Cartagena and the coffee region</b> and along the main highways, and thin in the <b>Amazon</b>, on the <b>Pacific coast</b> and across <b>La Guajira</b>. On price the local option is clearly cheaper: a <b>Claro</b> SIM with a data package costs a <b>few dollars</b>, sold in carrier shops, malls and at the airports with your <b>passport</b>, and <b>Claro</b> has the widest reach in the country by a clear margin, with <b>Movistar</b> and <b>Tigo</b> fine in the cities. Your US carrier charges about <b>10 to 12 dollars a day</b> (<b>AT&amp;T and Verizon</b> day passes), though <b>AT&amp;T caps its Day Pass at 10 daily fees per line per bill period</b>, about <b>120 dollars</b>, and covers the rest of that bill period on land, so the daily arithmetic stops past day 10, and <b>T-Mobile</b>'s mid and upper tiers include <b>5GB to 30GB</b> of high-speed data abroad before slowing to <b>256kbps</b>. A <b>Nomad eSIM</b> is a few dollars per gigabyte and worth it if you want data before you leave the airport, which in Bogota is a reasonable thing to want. Never roam <b>pay-per-use</b>, at about 2 dollars a megabyte.",
      sections: [
        {
          h: "Claro, and it is not really a contest",
          icon: "tag",
          key: { fig: "A few $", tag: "Claro prepaid", text: "Claro has the widest reach in Colombia and sells data cheaply. Movistar and Tigo are fine in the cities and thinner outside them.", tone: "teal" },
          p: [
            "<b>Claro</b> is the default here for the same reason Telcel is in Mexico: it reaches places the others do not, including much of the rural coffee region, the Santander highlands and the smaller Caribbean towns. A prepaid SIM with a data package is a <b>few dollars</b>, bought with your <b>passport</b> at a carrier shop, a mall counter or the airport. <b>Movistar</b> and <b>Tigo</b> compete well in Bogota, Medellin and Cali and fade faster outside them.",
            "The comparison with roaming is not close: a week of <b>AT&amp;T or Verizon</b> day passes is <b>70 to 84 dollars</b> against a few dollars for the local package, and a travel eSIM costs several times the local option for less data. We earn on eSIM links and nothing on a Claro SIM."
          ]
        },
        {
          h: "The gaps, and the reason to have data at all",
          icon: "phoneok",
          key: { fig: "The Amazon", tag: "Where signal thins", text: "Cities, the coffee region and main highways are covered. The Amazon, the Pacific coast and La Guajira are not, on any network.", tone: "amber" },
          p: [
            "In the cities you will have fast 4G and 5G in the bigger centers. The gaps are geographic and predictable: the <b>Amazon</b> around Leticia, the <b>Pacific coast</b> toward Nuqui and Bahia Solano where towns are reached by boat or small plane, much of <b>La Guajira</b> beyond Cabo de la Vela, and stretches of mountain highway between departments. <b>Tayrona</b> has patchy coverage inside the park.",
            "Worth naming why data matters here more than the price suggests. Ride-hailing and <b>InDrive, Uber, Cabify and DiDi</b> availability varies by city and is how most visitors avoid the fare arguments and the security judgment calls that come with hailing on the street, and that needs a live connection. Having working data is a safety-adjacent convenience in Colombia rather than a luxury, which is a reason not to travel here on a throttled roaming connection."
          ]
        },
        {
          h: "Roaming and the eSIM case",
          icon: "roamfee",
          key: { fig: "$10-12/day", tag: "Roaming default", text: "AT&T caps its Day Pass at 10 daily fees per bill period. T-Mobile's mid and upper tiers include 5GB to 30GB of high-speed data abroad.", tone: "teal" },
          p: [
            "<b>AT&amp;T and Verizon</b> day passes are about <b>10 to 12 dollars a day</b>, so a week is <b>70 to 84 dollars</b>, and <b>AT&amp;T caps its Day Pass at 10 daily fees per line per bill period</b>, about <b>120 dollars</b>, and covers the rest of that bill period on land, so the daily arithmetic stops past day 10. <b>T-Mobile</b>'s current tiers include roughly <b>5GB</b> on Experience More, Magenta MAX and Go5G Plus, <b>15GB</b> on Experience Beyond and Go5G Next and <b>30GB</b> on Better Value, so check your own plan before buying anything.",
            "The genuine case for a <b>Nomad eSIM</b> in Colombia is having a working connection <b>before you leave the terminal</b>, so you can order a ride rather than negotiate one, and that is worth a few dollars per gigabyte to plenty of people. It is the convenience option and not the cheap one, and both beat roaming comfortably. This guide is written for US travelers departing the US. For more, see <a href='/colombia/cash-or-card'>cash or card in Colombia</a>, <a href='/colombia/taxis-and-apps'>taxis and apps in Colombia</a>, and the <a href='/colombia'>Colombia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Which network is best in Colombia?", a: "Claro, by a clear margin on reach, including much of the rural coffee region and the smaller Caribbean towns. Movistar and Tigo compete well in Bogota, Medellin and Cali but fade faster outside the cities." },
        { q: "How much is a SIM card in Colombia?", a: "A few dollars for a Claro prepaid SIM with a data package, bought with your passport at a carrier shop, a mall counter or the airport. That is a fraction of a week of US carrier roaming." },
        { q: "Is an eSIM worth it for Colombia?", a: "On price, no: a Claro SIM is cheaper. The real argument is arriving with data already working so you can order a ride rather than negotiate one at the terminal, which matters more in Colombia than the few dollars it costs. Both options beat roaming comfortably." },
        { q: "How much does it cost to use my US phone in Colombia?", a: "About 10 to 12 dollars a day on an AT&T or Verizon day pass, so roughly 70 to 84 dollars a week. AT&T caps its Day Pass at 10 daily fees per line per bill period, so about 120 dollars covers the rest of that bill period on land. T-Mobile is worth checking first, since its mid and upper tiers include 5GB to 30GB of high-speed data abroad." }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "Claro Colombia: prepaid plan and data package pages", url: "https://www.claro.com.co/", type: "official" },
          { label: "US State Department: Colombia country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Colombia.html", type: "gov" }
        ],
        judgment: "Checked Aug 2026. The local SIM is cheaper and we earn nothing on it, so that is stated first. The counter-argument on this page is not commercial padding: in Colombia, ordering a ride through an app rather than hailing on the street is a judgment most travelers are advised to make, and that needs a live connection from the moment you land, which is the one thing a pre-installed eSIM does better than a SIM bought after baggage claim. Claro's reach advantage is the desk's read from operator footprints and consistent traveler accounts."
      }
    }
  ]
};
