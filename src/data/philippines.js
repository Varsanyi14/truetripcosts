export default {
  slug: "philippines",
  live: true,
  name: "Philippines",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-25",
  sources: {
    changed: "Sources added on first publish. Confirmed that US citizens need no visa for stays up to 30 days but must complete the free, mandatory online eTravel registration before arrival and again on departure; that the peso trades around 60 to the US dollar; that the country is largely cash-first with cards mainly in the cities; and that from late 2024, under RA 12079, foreign tourists can reclaim the 12% VAT on qualifying shopping, a scheme the Supreme Court upheld in July 2026 and which is still rolling out.",
    links: [
      { label: "US State Department: Philippines entry requirements, safety and the 911 emergency number", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Philippines.html", type: "gov" },
      { label: "Official eTravel portal: the free, mandatory registration for arrival and departure", url: "https://etravel.gov.ph/", type: "gov" },
      { label: "Department of Finance: the new VAT refund for non-resident tourists (RA 12079)", url: "https://www.dof.gov.ph/ph-is-now-vat-free-for-foreign-tourists/", type: "gov" },
      { label: "Bangko Sentral ng Pilipinas: the peso exchange rate", url: "https://www.bsp.gov.ph/", type: "currency" }
    ],
    judgment: "The daily cash share, tipping habits, and likely ATM behavior are our own estimate from experience, not an official figure. ATM limits and fees vary by bank, and the tourist VAT refund is new, so accredited stores and refund counters are still expanding."
  },
  emergency: { medical: "911", note: "911 is the nationwide emergency number for police, ambulance and fire, adopted across the Philippines in 2016. It works from any phone, though in remote areas a local landmark and a Filipino speaker help. Private hospitals in Manila and Cebu are good; island and rural care is limited, so travel insurance is worth having.", checked: "Jul 2026", checkedISO: "2026-07-25" },
  insuranceLevel: "medium",
  region: "Asia",
  signals: { cardFriendliness: 3, cashNeed: 4, taxRisk: 2, atmRisk: 4 },
  hook: "The Philippines is affordable and largely cash-first: the peso is about 60 to the dollar, cards work in Manila, Cebu and the tourist hubs, but jeepneys, tricycles, markets and small islands run on cash, so carry small bills. Before you fly, do the free eTravel registration online, and only on the official site.",
  aliases: ["philippines", "filipino", "manila", "cebu", "boracay", "palawan", "el nido", "coron", "bohol", "siargao", "davao", "vigan", "banaue", "php", "peso", "philippine peso", "etravel", "e-travel", "pinas", "pilipinas"],
  title: "Money in the Philippines (2026): the Peso, Cash vs Cards, ATMs, eTravel and the New VAT Refund | True Trip Costs",
  description: "How to handle money in the Philippines as a US traveler in 2026: the peso, why it is a cash-first country, where cards work, ATM limits and fees, the free mandatory eTravel registration, modest tipping, and the new tourist VAT refund. Checked July 2026.",
  h1: "Money in the Philippines, sorted.",
  lede: "A calm, current plan for the money side of your trip: why you carry cash here, where a card actually works, the ATM habits that save you fees, and the free entry form you must do before you fly.",
  hero: {
    img: "/philippines-hero.jpg",
    h: 1375,
    alt: "The historic cobblestone street of Calle Crisologo in Vigan, the Philippines at dusk, lined with preserved Spanish-colonial heritage houses with wooden capiz-shell windows and balconies, a horse-drawn kalesa carriage in the distance, warm string lights and paper lanterns strung across the lane, a lone figure walking away, and a plate of chicken adobo with rice and atchara, a bottle of beer and a glass of calamansi juice on a wooden table in the foreground"
  },
  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',
  verdict: "The Philippines is an affordable, largely <b>cash-first</b> destination. The currency is the <b>peso</b>, about <b>60 to the dollar</b>, and while <b>cards work in Manila, Cebu and the tourist hubs</b> at malls, hotels and bigger restaurants, most everyday spending, jeepneys, tricycles, sari-sari stores, markets and small islands, runs on <b>cash</b>. Bring a <b>no-foreign-fee card</b> for the cities and a <b>fee-free ATM card</b>, because machines cap withdrawals low (often <b>10,000 to 20,000 pesos</b>) and add about a <b>250 peso</b> fee each, so you pull often. Carry <b>small bills</b> for the everyday, and on any card screen <b>choose pesos, not dollars</b>. Before you fly, complete the free, mandatory <b>eTravel registration</b> (and again when you leave), using the official site rather than the scam lookalikes. Prices include <b>12% VAT</b>, a <b>10% service charge</b> is often already on restaurant bills, and tipping beyond that is modest. New in 2026: a <b>VAT refund for tourists</b> on bigger shopping purchases.",
  recentChange: {
    date: "Jul 2026",
    text: "Good news for shoppers: the Philippines now refunds its <b>12% VAT to foreign tourists</b> under a new law (RA 12079). You can claim the tax back on goods of at least <b>3,000 pesos</b> per transaction bought from <b>accredited stores</b> and carried out of the country within <b>60 days</b>, refunded electronically or in cash. The law was signed in late 2024 and the Supreme Court upheld it in <b>July 2026</b>, and it is still <b>rolling out</b>, so the network of accredited stores and refund counters is growing. Ask whether a shop is accredited before you count on it."
  },
  meter: {
    heading: "Cards work in the cities and hubs. Most everyday spending is cash.",
    cashPct: 55,
    note: "A rough feel for everyday spending. Cards are fine at malls, hotels and bigger restaurants in Manila, Cebu and the tourist hubs. Cash takes over for jeepneys, tricycles, sari-sari stores, markets, small carinderias, tips and the smaller islands, where cards and ATMs are scarce."
  },
  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Fine in the cities and hubs", p: "Visa and Mastercard are taken at malls, hotels, bigger restaurants and chains in Manila, Cebu and the main tourist areas, with Amex less consistent. A <b>no-foreign-fee card</b> covers that side of a trip. On any terminal, <b>choose pesos, not dollars</b>, so your own bank sets the rate.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "The default off the malls", p: "Most everyday spending is <b>cash</b>: jeepneys, tricycles, sari-sari stores, markets, carinderias and the smaller islands rarely take cards. Carry <b>small bills</b> (20s, 50s and 100s), since change for large notes can be short, and the peso is the only thing many places accept.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Low limits, a fee, scarce on islands", p: "Cities and malls have plenty, but foreign-card withdrawals are often capped at <b>10,000 to 20,000 pesos</b> and add roughly a <b>250 peso</b> fee each. <b>Choose pesos</b> and decline any dollar conversion, pull larger amounts less often, and take out enough before heading to remote islands, where machines are few.", cta: { label: "See low-fee cards", href: "#" } }
  ],
  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Complete the free, mandatory <b>eTravel registration</b> at the official site, etravel.gov.ph, within 72 hours before you fly. It is <b>free</b>, so avoid the lookalike sites that charge for the same form.",
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> for the cities, plus a <b>fee-free ATM card</b> (Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee) and a backup.",
      "You do <b>not</b> need pesos in advance. Pull cash from a bank ATM on arrival rather than exchanging at home.",
      "Have your <b>onward or return ticket</b> handy, since immigration can ask to see it."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Use a <b>bank ATM</b> in the terminal, choose <b>pesos</b>, and decline any offer to charge in dollars.",
      "Take a <b>Grab</b> or an <b>official airport taxi</b> from the marshalled rank, not a driver who approaches you, and insist on the meter.",
      "Set up an <b>eSIM</b> before you land, or buy a <b>Globe or Smart</b> SIM at the airport, which must be registered with your passport.",
      "Keep small bills for the taxi, a porter or a first meal."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card</b> at city malls, hotels and bigger restaurants.",
      "<b>Cash</b> for jeepneys, tricycles, markets, carinderias and the smaller islands.",
      "On cards and ATMs, always <b>choose pesos</b>.",
      "Keep cash for small <b>island eco or terminal fees</b> (Boracay, El Nido, Coron)."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Pull cash in bigger, fewer chunks.</b> ATMs cap withdrawals low and charge about 250 pesos each, so a few larger pulls beat many small ones, and always choose pesos, not dollars, on the screen.",
      "<b>Keep small bills, and cash for the islands.</b> Jeepneys, tricycles, markets and remote islands are cash-only, and change for large notes is scarce, so break big bills when you can."
    ], cta: null }
  ],
  cash: {
    rate: 60, cur: "PHP", round: 100, defaultIndex: 1,
    rateNote: "About 60 pesos to the US dollar in 2026, so 1,000 pesos is roughly 17 dollars and a 300 peso meal is about 5. This is the cash-in-hand slice, which is large here, since the country runs mostly on cash.",
    styles: [ { n: "Budget", per: 30, cash: 0.75, room: 40 }, { n: "Mid-range", per: 65, cash: 0.55, room: 90 }, { n: "Comfort", per: 130, cash: 0.40, room: 200 } ]
  },
  connectivity: {
    works: "Yes, and it is cheap. The carriers are Globe, Smart and DITO, coverage is strong in Manila, Cebu and the main tourist areas and patchier on remote islands, and mobile data is inexpensive. A local prepaid SIM is cheap but must be registered with your passport under the SIM Registration Act, so a travel eSIM from Airalo, Nomad or Holafly is the simplest option if your phone supports it. Wi-Fi is common in hotels, cafes and malls, though island connections can be slow. You will want data for Grab and for maps."
  },
  flight: { low: 700, high: 1600, checked: "Jul 2026", checkedISO: "2026-07-25" },
  tax: {
    none: true,
    currency: "PHP",
    note: "The Philippines has no nightly tourist tax to hand over at the hotel. Prices include a 12% VAT, and restaurants and hotels often add a 10% service charge to the bill. What you will meet instead are small local fees at some island destinations, for example an environmental fee on Boracay and terminal or eco fees in El Nido and Coron, usually a few hundred pesos, paid in cash. Separately, from late 2024 foreign tourists can reclaim the 12% VAT on qualifying shopping, covered below."
  },
  currencyHeading: "The peso, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "About 60 pesos (the peso sign is written before the number) to 1 US dollar in 2026, so 1,000 pesos is roughly 17 dollars and a 300 peso meal is about 5. To picture peso prices in dollars, divide by about 60. Prices include 12% VAT." },
    { sym: "cash", k: "Cash-first, especially off the malls", v: "Cards work in Manila, Cebu and the tourist hubs at malls, hotels and bigger restaurants, but sari-sari stores, markets, jeepneys, tricycles, carinderias and the smaller islands are cash. Carry small bills, since the peso is the only thing many places take and change for large notes is scarce." },
    { sym: "atm", k: "ATMs: low limits and a fee", v: "ATMs are common in cities and malls, but foreign-card withdrawals are often capped around 10,000 to 20,000 pesos and add roughly a 250 peso fee each. Choose pesos rather than dollars, pull larger amounts less often, and carry enough cash before heading to remote islands, where machines are few." },
    { sym: "tip", k: "Tipping is modest", v: "Tipping is not obligatory. Restaurants and hotels often add a 10% service charge to the bill, so check first: if it is there, that is the tip. Otherwise rounding up or about 10% is generous, and small cash tips for drivers, porters, guides and boatmen are welcome in a low-wage service culture." }
  ],
  taxfree: {
    label: "Taxes and the new VAT refund",
    heading: "A 12% VAT in the price, now refundable on tourist shopping.",
    text: "Prices in the Philippines include a <b>12% VAT</b>, and restaurants and hotels often add a <b>10% service charge</b> on top, so a bill can carry both. There is <b>no nightly tourist tax</b>, though some islands charge small <b>local eco or terminal fees</b> (a few hundred pesos, in cash). The change worth knowing is new: under <b>RA 12079</b>, signed in late 2024 and upheld by the Supreme Court in July 2026, <b>foreign tourists can now reclaim the 12% VAT</b> on goods of at least <b>3,000 pesos</b> per transaction bought from <b>accredited stores</b> and taken out of the country within <b>60 days</b>. The refund can be electronic or cash. It is still <b>rolling out</b>, so ask whether a shop is accredited before you count on it, and keep your receipts and the goods unused."
  },
  keyFacts: [
    { label: "eTravel registration", value: "Free and mandatory online, within 72 hours before arrival and again on departure", status: "enacted", effective: null, source: "https://etravel.gov.ph/", checked: "2026-07-25" },
    { label: "Tourist VAT refund (RA 12079)", value: "12% VAT refundable on goods over 3,000 pesos from accredited stores, taken out within 60 days", status: "enacted", effective: "2024-12-24", source: "https://www.dof.gov.ph/ph-is-now-vat-free-for-foreign-tourists/", checked: "2026-07-25" }
  ],
  traps: [
    "<b>Complete the eTravel registration, and only on the official site.</b> It is free and mandatory, within 72 hours before you fly, and again when you leave. Use etravel.gov.ph, since third-party sites charge a fee for the same free form, which the government has flagged as a scam.",
    "<b>ATMs cap withdrawals low and charge a fee.</b> Foreign-card withdrawals are often limited to about 10,000 to 20,000 pesos and add roughly a 250 peso fee each, so pull larger amounts less often, and choose pesos, not dollars, on the screen.",
    "<b>Most of the country is cash-only.</b> Jeepneys, tricycles, sari-sari stores, markets, carinderias and small islands take cash, so carry small bills and top up before leaving the cities, where ATMs thin out.",
    "<b>Watch airport and city taxis.</b> Use Grab or an official airport taxi rather than a driver who approaches you, and insist on the meter, since a fixed special rate is usually a markup.",
    "<b>Keep cash for island fees.</b> Places like Boracay, El Nido and Coron charge small environmental or terminal fees, a few hundred pesos, payable in cash on arrival."
  ],
  tippingHeading: "Modest, and often already on the bill.",
  tipping: "Tipping in the Philippines is <b>modest</b> and not obligatory. At restaurants, check the bill first: a <b>10% service charge</b> is often already added, and if it is there, that stands in for a tip, though leaving a little extra in cash for good service is welcome. Where there is no service charge, rounding up or about <b>10%</b> is generous. <b>Round up</b> taxi and Grab fares, tip a <b>hotel porter</b> 50 to 100 pesos a bag and <b>housekeeping</b> a little a day, and tip <b>tour guides, drivers and boatmen</b> a few hundred pesos for a good day out. Small tips in <b>cash</b> are appreciated across a service culture where wages are low, but nobody will chase you for one.",
  faqs: [
    { q: "Can I use US dollars in the Philippines?", a: "Not for everyday spending. The currency is the peso, and while a few hotels and tour operators may quote or take dollars, shops, restaurants, taxis, jeepneys and markets expect pesos. Change money at a bank or an authorized money changer in town rather than the airport, where rates are poor, or simply withdraw pesos from a bank ATM. Cards work in the cities." },
    { q: "Do I need cash in the Philippines?", a: "Yes, more than in most places. It is a cash-first country: cards are fine at malls, hotels and bigger restaurants in Manila, Cebu and the tourist hubs, but jeepneys, tricycles, sari-sari stores, markets, carinderias and small islands run on cash. Carry small peso bills, and top up at an ATM before leaving the cities, where machines get scarce." },
    { q: "Do US citizens need a visa for the Philippines?", a: "No. US citizens can enter visa-free for up to 30 days for tourism, extendable through the Bureau of Immigration. You need a passport valid for at least six months, an onward or return ticket, and the free, mandatory eTravel registration completed online within 72 hours before arrival. eTravel is also required when you leave. Complete it at etravel.gov.ph and avoid sites that charge a fee." },
    { q: "What are ATMs like in the Philippines?", a: "Common in cities and malls, but with two catches: foreign-card withdrawals are often capped around 10,000 to 20,000 pesos per transaction, and most banks add a fee of roughly 250 pesos each. Pull larger amounts less often to save on fees, always choose pesos rather than dollars on the screen, and carry enough cash before heading to remote islands, where ATMs are few." },
    { q: "Is there a tourist tax or a VAT refund in the Philippines?", a: "There is no nightly tourist tax to hand over, though some islands charge small local environmental or terminal fees of a few hundred pesos in cash. Prices include a 12% VAT, and restaurants often add a 10% service charge. New since late 2024, foreign tourists can reclaim the 12% VAT on goods of at least 3,000 pesos per transaction from accredited stores, taken out of the country within 60 days." },
    { q: "How much cash should I bring for a week in the Philippines?", a: "It depends on your style, but because the country is cash-first, plan to keep a fair amount of pesos on hand. For two travelers, roughly 15,000 to 30,000 pesos in cash across a week (about 250 to 500 dollars) beyond card spending covers transport, markets, small restaurants, island fees and tips, topped up from ATMs. Keep it in small bills." }
  ],
  culture: {
    heading: "A few words of Filipino go a long way",
    intro: "Filipino, based on Tagalog, and English are both official, and English is very widely spoken, so you will get by easily across the islands. Still, a warm Salamat (thank you) and a Mabuhay are always welcome, and Filipino hospitality is the thing most visitors remember.",
    phrases: [
      { mean: "Welcome, a warm greeting", say: "mah-BOO-hai", word: "Mabuhay" },
      { mean: "Hello, how are you", say: "koo-moos-TAH", word: "Kumusta" },
      { mean: "Thank you", say: "sah-LAH-mat", word: "Salamat" },
      { mean: "Please", say: "pah-kee-oo-SAP", word: "Pakiusap" },
      { mean: "How much is it?", say: "mag-KAH-no", word: "Magkano" },
      { mean: "Delicious", say: "mah-sah-RAP", word: "Masarap" }
    ],
    tip: "English is widely spoken across the Philippines, so you will get by easily, but a little Filipino delights people. <b>Salamat</b> (thank you) and <b>Mabuhay</b> (a warm welcome, literally long life) go a long way, and Filipino hospitality, the spirit of <b>bayanihan</b> or helping one another, is genuine and generous.",
    stories: [
      { img: "/philippines-culture-1.jpg",
        alt: "WPA-style illustration of the Banaue rice terraces in the northern Philippines, vast emerald stepped paddies carved up steep mountainsides into the mist with a lone farmer and nipa huts",
        h: "The rice terraces",
        p: "Carved by hand into the steep Cordillera mountains of northern Luzon around two thousand years ago by the Ifugao people, the Banaue and Batad rice terraces are one of the great feats of ancient engineering, sometimes called the Eighth Wonder of the World. Still farmed today and UNESCO-listed, they climb the slopes like a green staircase into the clouds.",
        note: "Good to know: the terraces are around 2,000 years old" },
      { img: "/philippines-culture-2.jpg",
        alt: "WPA-style illustration of a tropical lagoon in El Nido, Palawan, towering limestone karst cliffs rising from turquoise water with a wooden bangka outrigger boat and a white-sand cove",
        h: "Seven thousand islands",
        p: "The Philippines is an archipelago of more than seven thousand islands, and its beaches and lagoons are world-famous. In Palawan, El Nido and Coron hide karst cliffs and hidden lagoons reached by wooden bangka outriggers, and the diving and snorkeling are among the best anywhere. Palawan is often voted one of the finest islands in the world.",
        note: "Good to know: the Philippines has over 7,000 islands" },
      { img: "/philippines-culture-3.jpg",
        alt: "WPA-style illustration of the near-perfect cone of Mayon Volcano in the Philippines rising above green fields and coconut palms with a wisp of smoke at its summit",
        h: "The perfect cone",
        p: "Near Legazpi in the south of Luzon, Mayon Volcano is famous for having one of the most symmetrical cones on Earth, a near-perfect triangle wreathed in cloud. It is also the country's most active volcano. The Philippines sits on the Pacific Ring of Fire, which is why it is dotted with volcanoes, from Mayon to Taal to the hills of Bohol.",
        note: "Good to know: Mayon is famed for its near-perfect cone" }
    ],
    pride: "The Philippines is an archipelago of more than seven thousand islands where Malay, Spanish, American and Chinese influences meet, English is widely spoken, and the warmth of Filipino hospitality is the thing visitors remember most. From the ancient rice terraces of the north to the karst lagoons of Palawan, it packs an extraordinary range into one sunny, friendly country."
  },
  spokes: [
    {
      slug: "cash-or-card",
      live: true,
      topic: "cash",
      title: "Do I need cash in the Philippines, or can I use cards? (2026) | True Trip Costs",
      description: "The Philippines is cash-first. Cards work at malls, hotels and bigger restaurants in Manila, Cebu and the tourist hubs, but jeepneys, tricycles, markets and small islands need cash. ATM limits, fees, and why to choose pesos. Checked July 2026.",
      h1: "Do I need cash in the Philippines, or can I use cards?",
      lede: "Short answer: carry cash, and use cards only where they are taken. Here is where each works, how to handle the low ATM limits, and the one habit that saves you money.",
      checked: "Jul 2026",
      checkedISO: "2026-07-25",
      answer: "Cash, mostly. The Philippines is a <b>cash-first</b> country: <b>cards work in Manila, Cebu and the tourist hubs</b> at malls, hotels and bigger restaurants, but <b>jeepneys, tricycles, sari-sari stores, markets, carinderias and small islands</b> run on cash. Pull pesos from a <b>bank ATM</b>, but expect <b>low limits</b> (often 10,000 to 20,000 pesos) and a <b>250 peso</b> fee each, so withdraw larger amounts less often. On any card or ATM screen, <b>choose pesos, not dollars</b>. Carry <b>small bills</b>.",
      sections: [
        {
          h: "Where cards work, and where they do not",
          p: [
            "In the cities and tourist hubs, <b>Visa and Mastercard</b> are fine at malls, hotels, department stores and bigger restaurants, with Amex less consistent. A no-foreign-fee card is worth carrying for those.",
            "Everywhere else, plan on <b>cash</b>. Jeepneys, tricycles, sari-sari (corner) stores, wet markets, carinderias (local eateries), and most of the smaller islands do not take cards, and even in cities many small vendors are cash-only."
          ]
        },
        {
          h: "ATMs: low limits and a fee",
          p: [
            "ATMs are easy to find in cities and malls (BPI, BDO, Metrobank and others), but foreign-card withdrawals are usually capped at <b>10,000 to 20,000 pesos</b> per transaction, and most banks charge a fee of about <b>250 pesos</b> on top of your home bank's. To limit fees, <b>pull larger amounts less often</b>.",
            "Always <b>choose pesos</b> if the machine offers to bill you in dollars, and take out enough <b>before heading to remote islands</b>, where ATMs are few and can run out of cash on weekends."
          ]
        },
        {
          h: "Carry small bills",
          p: [
            "Break large notes when you can, since jeepneys, tricycles, markets and small shops rarely have change for a 1,000 peso bill. Keep a stock of <b>20s, 50s and 100s</b> for daily spending and tips.",
            "For the fuller money picture, including the new tourist VAT refund and how tipping works, see the <a href=\"/philippines\">Philippines money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is the Philippines cash or card?", a: "Mostly cash. Cards are fine at malls, hotels and bigger restaurants in Manila, Cebu and the tourist hubs, but jeepneys, tricycles, sari-sari stores, markets, carinderias and small islands are cash-only. Carry small peso bills for daily spending, and use a card mainly in the cities. Even there, many small vendors take only cash." },
        { q: "How much can I withdraw from an ATM in the Philippines?", a: "Foreign-card withdrawals are typically capped at 10,000 to 20,000 pesos per transaction, depending on the bank, and most add a fee of around 250 pesos each. To save on fees, withdraw the maximum less often rather than small amounts frequently, and always choose pesos rather than dollars when the machine asks." },
        { q: "Should I pay in pesos or dollars on my card in the Philippines?", a: "Pesos. If a card terminal or ATM offers to charge you in US dollars, decline: that dynamic currency conversion adds a marked-up rate. Choosing pesos lets your own bank handle the exchange more cheaply. The same goes for the withdrawal screen at an ATM." },
        { q: "Can I use US dollars in the Philippines?", a: "Not for everyday spending. A few hotels and tours may take dollars, but shops, restaurants, taxis and markets expect pesos. Change dollars at a bank or authorized money changer in town, not the airport, or simply withdraw pesos from a bank ATM. Bring clean, unmarked bills if you do plan to exchange cash." }
      ],
      sources: {
        links: [
          { label: "Bangko Sentral ng Pilipinas: the peso and the financial system", url: "https://www.bsp.gov.ph/", type: "currency" },
          { label: "US State Department: Philippines local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Philippines.html", type: "gov" }
        ],
        judgment: "Card acceptance, ATM limits and fees are our read from recent traveler reports and bank information, not a single official table, and vary by bank, so treat the figures as a planning guide. Checked July 2026."
      }
    },
    {
      slug: "visa-and-etravel",
      live: true,
      topic: "visas",
      title: "Do US citizens need a visa for the Philippines, and what is eTravel? (2026) | True Trip Costs",
      description: "US citizens need no visa for the Philippines for stays up to 30 days, but every traveler must complete the free, mandatory online eTravel registration before arrival and again on departure. What you need, and how to avoid the scam sites. Checked July 2026.",
      h1: "Do US citizens need a visa for the Philippines?",
      lede: "Short answer: no visa for a normal visit, but there is a free form you must do before you fly, and scam sites try to charge for it. Here is exactly what you need.",
      checked: "Jul 2026",
      checkedISO: "2026-07-25",
      answer: "No visa. US citizens can enter the Philippines <b>visa-free for up to 30 days</b> for tourism, extendable through the Bureau of Immigration. You need a <b>passport valid for at least six months</b>, an <b>onward or return ticket</b>, and the <b>eTravel registration</b>: a <b>free, mandatory</b> online form completed within <b>72 hours before arrival</b>, and again when you <b>leave</b>. Do it only at the official site, <b>etravel.gov.ph</b>.",
      official: {
        label: "Official eTravel portal",
        url: "https://etravel.gov.ph/",
        note: "The only official site for the eTravel registration, and it is free. Third-party sites that charge a fee for the same form are scams the government has warned against."
      },
      expediter: false,
      sections: [
        {
          h: "No visa for a normal visit",
          p: [
            "US citizens are admitted <b>visa-free for 30 days</b> for tourism or business. If you want to stay longer, the Bureau of Immigration lets you extend, first to 59 days and then in increments up to a long-stay maximum, applied for before your current stay expires.",
            "Have a <b>passport valid for six months</b> beyond your stay, and be ready to show an <b>onward or return ticket</b> and proof of where you are staying, which the officer can ask for."
          ]
        },
        {
          h: "eTravel: free, mandatory, both ways",
          p: [
            "Every traveler must complete the <b>eTravel registration</b>, a digital arrival and health declaration that replaced the old paper card. Fill it in <b>within 72 hours before your flight</b>, and you receive a <b>QR code</b> that airlines and immigration scan. It is <b>not a visa</b>, just a required form.",
            "It is also required <b>when you leave</b> the Philippines, so you complete a departure eTravel too. Registration is <b>free</b>."
          ]
        },
        {
          h: "Use the official site, not a lookalike",
          p: [
            "Complete eTravel at <b>etravel.gov.ph</b>, where there is no charge. The Department of Foreign Affairs has warned that <b>third-party websites charging a fee</b> to file the same free form are scams, so go straight to the official portal.",
            "For the money side of your trip, including cash, ATMs and tipping, see the <a href=\"/philippines\">Philippines money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa to visit the Philippines?", a: "No. US citizens can visit visa-free for up to 30 days for tourism, and can extend through the Bureau of Immigration if they want to stay longer. You need a passport valid for at least six months, an onward or return ticket, and the free, mandatory eTravel registration completed online before arrival. There is no ESTA for the Philippines." },
        { q: "Is eTravel mandatory for the Philippines, and is it free?", a: "Yes and yes. The eTravel registration is mandatory for all travelers entering the Philippines, and it is required again on departure. It is free. Complete it at etravel.gov.ph within 72 hours before your flight and save the QR code. Avoid third-party sites that charge a fee, which the government has flagged as scams." },
        { q: "How long can Americans stay in the Philippines without a visa?", a: "Up to 30 days on arrival, visa-free. You can extend at a Bureau of Immigration office, first to 59 days and then in further increments, up to a long-stay maximum, as long as you apply before your current authorized stay runs out. Overstaying brings fines, so extend in good time." },
        { q: "What is the official website for Philippines eTravel?", a: "The official portal is etravel.gov.ph. It is the only site that files the registration, and it is free of charge. Several lookalike sites advertise Philippines entry help and charge a fee for the identical form, so register directly at the official portal to avoid overpaying." }
      ],
      sources: {
        links: [
          { label: "Official eTravel portal: the free mandatory registration", url: "https://etravel.gov.ph/", type: "gov" },
          { label: "US State Department: Philippines entry and exit requirements", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Philippines.html", type: "gov" }
        ],
        judgment: "Entry rules and the eTravel window are set by the Philippines and can change, so confirm the current requirement on the official portal before you travel. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Getting around the Philippines: Grab, jeepneys and tricycles (2026) | True Trip Costs",
      description: "How to get around the Philippines: Grab is the ride app in the cities, jeepneys and tricycles are cheap and cash-only, and taxis should run the meter. Watch airport taxi touts, and plan for ferries and flights between islands. Checked July 2026.",
      h1: "Getting around the Philippines: Grab and jeepneys",
      lede: "Short answer: use Grab in the cities, carry coins and small bills for jeepneys and tricycles, and be firm about the meter with taxis. Here is how each works and what it costs.",
      checked: "Jul 2026",
      checkedISO: "2026-07-25",
      answer: "In the cities, use <b>Grab</b>, the region's ride app (there is no Uber), which sets the fare and removes haggling. <b>Jeepneys</b> and <b>tricycles</b> are the cheap local transport, and both are <b>cash-only</b>, so carry small bills and coins. Ordinary <b>taxis</b> should run the <b>meter</b>: insist on it, and avoid the airport touts by taking Grab or the official rank. Between islands, you will use <b>ferries and domestic flights</b>.",
      official: {
        label: "US State Department: Philippines local travel and safety",
        url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Philippines.html",
        note: "Background on getting around and safety in the Philippines. Confirm current fares and conditions locally."
      },
      sections: [
        {
          h: "Grab first in the cities",
          p: [
            "<b>Grab</b> is the ride app across Metro Manila, Cebu and other cities, covering cars and sometimes motorbikes. It shows the fare up front and lets you pay by card in-app or in cash, which sidesteps meter disputes. It needs a data connection, so keep your eSIM topped up.",
            "Regular <b>taxis</b> are metered and cheap, but some drivers quote a flat rate to visitors. Insist on the meter, and if a driver refuses, use Grab instead."
          ]
        },
        {
          h: "Jeepneys, tricycles and the airport",
          p: [
            "<b>Jeepneys</b> (the flamboyant shared jeeps) and <b>tricycles</b> (motorbike sidecars) are how locals get around short distances, for very little, and both are <b>cash-only</b>, so keep small bills and coins. Fares are low and often fixed by route; for tricycles, agree the fare first.",
            "At the airport, take <b>Grab</b> or an <b>official metered taxi</b> from the marshalled rank, not a driver who approaches you inside the terminal, where fixed special rates are a markup."
          ]
        },
        {
          h: "Between the islands",
          p: [
            "With more than seven thousand islands, longer trips mean <b>ferries</b> and <b>domestic flights</b> (Cebu Pacific, Philippine Airlines, AirAsia). Book flights ahead for the best fares, and note that baggage and terminal details vary by island airport.",
            "For how to carry cash, ATM limits and tipping drivers, see the <a href=\"/philippines\">Philippines money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is there Uber in the Philippines?", a: "No, but Grab does the same job and is the main ride app in Metro Manila, Cebu and other cities. It shows the fare up front and lets you pay in the app or in cash, which avoids meter haggling. For it to work you need a data connection, so an eSIM or local SIM is worth setting up." },
        { q: "Are taxis in the Philippines metered?", a: "Ordinary city taxis are metered and cheap, but some drivers try to quote a flat rate to visitors, especially at airports. Insist on the meter, and if a driver refuses, walk away and use Grab. At the airport, take Grab or an official metered taxi from the marshalled rank rather than a tout inside the terminal." },
        { q: "How do I pay for a jeepney or tricycle?", a: "Cash only, in small bills and coins. Jeepneys (shared jeeps) and tricycles (motorbike sidecars) are the cheap local transport for short trips, and neither takes cards. Jeepney fares are low and fixed by route; for tricycles, agree the fare before you set off, as visitors are sometimes quoted more." },
        { q: "How do I get between islands in the Philippines?", a: "By ferry or domestic flight. With thousands of islands, longer journeys use ferries or budget airlines like Cebu Pacific, Philippine Airlines and AirAsia. Book flights in advance for the best prices, carry cash for smaller island terminals and fees, and allow buffer time, since island weather and schedules can shift." }
      ],
      sources: {
        links: [
          { label: "US State Department: Philippines local travel and road safety", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Philippines.html", type: "gov" }
        ],
        judgment: "App coverage, taxi practice and island transport are our read from recent traveler reports, not an official transport table, so check current fares and conditions locally. Checked July 2026."
      }
    }
  ]
};
