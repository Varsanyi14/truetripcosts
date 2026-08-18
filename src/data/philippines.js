import { S } from './carrier-spine.js';

export default {
  slug: "philippines",
  live: true,
  name: "Philippines",
  iso2: "ph",
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
  title: "Philippines money 2026: the peso, cash and cards",
  description: "A cash-first country: cards work in Manila and the tourist hubs, but jeepneys, markets and small islands want pesos. eTravel is free to file. Checked 2026.",
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
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Customary, about 10%" },
        { k: "Restaurants", v: "Check for a 10% service charge" },
        { k: "Also tipped", v: "Bellhops, drivers, guides" },
        { k: "How", v: "Cash, in pesos" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in the Philippines: about 10%, explained",
      description: "About 10% is customary in the Philippines. The service charge on restaurant bills, who else to tip, and how to leave it. Checked 2026.",
      h1: "Tipping in the Philippines",
      lede: "The Philippines tips more than most of Asia, closer to the US: about 10% is customary and appreciated. The one thing to check is the service charge already on many bills. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "The Philippines has a <b>tipping culture</b>, more like the US than the rest of Asia: about <b>10%</b> is customary and appreciated for good service. Many restaurants already add a <b>10% service charge</b> (which by law now goes to staff), so <b>check the bill</b>: if it is there, an extra tip is optional, and if not, around 10% is normal. It is also customary to tip <b>bellhops, drivers, tour guides and Grab drivers</b> a small amount. Leave tips in <b>cash</b>, in pesos.",
      sections: [
        {
          h: "About 10%, and it is customary",
          icon: "coins",
          key: { fig: "About 10%", tag: "More than most of Asia", text: "The Philippines tips closer to the US than the rest of Asia. About 10% for good service is customary and appreciated.", tone: "teal" },
          p: [
            "Unlike much of Asia, the Philippines <b>does tip</b>, a legacy of close US ties. At a <b>restaurant</b>, about <b>10%</b> for good service is customary and genuinely appreciated, and staff often rely on it.",
            "At a <b>casual eatery or carinderia</b>, rounding up or leaving the small change is fine. It is warm and welcome rather than strictly obligatory."
          ]
        },
        {
          h: "Check the bill for a service charge",
          icon: "receipt",
          key: { fig: "10%", tag: "Goes to staff", text: "Many restaurants add a 10% service charge, which by law is distributed to employees. If it is on the bill, an extra tip is optional.", tone: "teal" },
          p: [
            "Many restaurants and hotels add a <b>10% service charge</b> to the bill, and by law this is <b>distributed to the staff</b>. If a <b>service charge appears</b>, you do <b>not need to add a full tip</b>, though leaving a little extra in cash for great service is a kind gesture.",
            "If there is <b>no service charge</b>, leaving around <b>10%</b> is the norm. So read the bill first to see which applies."
          ]
        },
        {
          h: "Who else to tip, and paying",
          icon: "peso",
          key: { fig: "Small tips", tag: "Bellhops, drivers, guides", text: "A small tip for bellhops, drivers, tour guides and Grab drivers is customary. Leave tips in cash, in pesos.", tone: "teal" },
          p: [
            "Beyond restaurants, a <b>small tip</b> is customary for <b>bellhops and porters, hotel housekeeping, drivers, tour guides</b>, and rounding up for a <b>Grab</b> driver. Amounts are modest, a few pesos to a couple of hundred depending on the service.",
            "Keep <b>small peso notes</b> for tips, since cash reaches the person directly. For more, see <a href='/philippines/taxis-and-apps'>taxis in the Philippines</a>, <a href='/philippines/cash-or-card'>cash or card in the Philippines</a>, and the <a href='/philippines'>Philippines money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in the Philippines?", a: "Yes, more than most of Asia and closer to the US: about 10% for good service is customary and appreciated. Many bills already include a 10% service charge, so check first, and tip bellhops, drivers and guides a small amount." },
        { q: "Is there a service charge in Philippine restaurants?", a: "Often: many restaurants and hotels add a 10% service charge, which by law is distributed to staff. If it is on the bill, an extra tip is optional; if not, around 10% is the norm." },
        { q: "How much should I tip in the Philippines?", a: "About 10% at a restaurant for good service if no service charge is added. For bellhops, drivers, housekeeping, guides and Grab drivers, a small amount, from a few pesos to a couple of hundred, is customary." },
        { q: "Cash or card for tips in the Philippines?", a: "Cash, in pesos. Keep small peso notes for tips, since cash reaches the person directly, even where you pay the bill itself by card." }
      ],
      sources: {
        links: [
          { label: "Philippine Department of Tourism: official travel information", url: "https://philippines.travel/", type: "gov" },
          { label: "US State Department: Philippines country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Philippines.html", type: "gov" }
        ],
        judgment: "Filipino tipping is customary at about 10%, closer to US norms than the rest of Asia, and the service charge on many bills is distributed to staff by law. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Peso (PHP), about 60 per dollar" },
        { k: "Cards", v: "Cities and malls only" },
        { k: "Cash for", v: "Jeepneys, markets, islands" },
        { k: "ATMs", v: "Low limits, about 250 peso fee" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in the Philippines? Yes, pesos",
      description: "The Philippines is cash-first. Cards work at malls, hotels and bigger restaurants, but jeepneys, tricycles, markets and small islands need pesos.",
      h1: "Do I need cash in the Philippines, or can I use cards?",
      lede: "Short answer: carry cash, and use cards only where they are taken. Here is where each works, how to handle the low ATM limits, and the one habit that saves you money.",
      checked: "Jul 2026",
      checkedISO: "2026-07-25",
      answer: "Cash, mostly. The Philippines is a <b>cash-first</b> country: <b>cards work in Manila, Cebu and the tourist hubs</b> at malls, hotels and bigger restaurants, but <b>jeepneys, tricycles, sari-sari stores, markets, carinderias and small islands</b> run on cash. Pull pesos from a <b>bank ATM</b>, but expect <b>low limits</b> (often 10,000 to 20,000 pesos) and a <b>250 peso</b> fee each, so withdraw larger amounts less often. On any card or ATM screen, <b>choose pesos, not dollars</b>. Carry <b>small bills</b>.",
      sections: [
        {
          h: "Where cards work, and where they do not",
          icon: "card",
          key: { fig: "Cash-first", tag: "Cards in cities only", text: "Cards work at malls, hotels and bigger restaurants in Manila, Cebu and the tourist hubs. Almost everywhere else, plan on cash.", tone: "teal" },
          p: [
            "In the cities and tourist hubs, <b>Visa and Mastercard</b> are fine at malls, hotels, department stores and bigger restaurants, with Amex less consistent. A no-foreign-fee card is worth carrying for those.",
            "Everywhere else, plan on <b>cash</b>. Jeepneys, tricycles, sari-sari (corner) stores, wet markets, carinderias (local eateries), and most of the smaller islands do not take cards, and even in cities many small vendors are cash-only."
          ]
        },
        {
          h: "ATMs: low limits and a fee",
          icon: "atm",
          key: { fig: "250 pesos", tag: "Choose pesos at the ATM", text: "Foreign-card withdrawals are capped around 10,000 to 20,000 pesos and add about a 250 peso fee each. Choose pesos, not dollars, and pull larger amounts less often.", tone: "amber" },
          p: [
            "ATMs are easy to find in cities and malls (BPI, BDO, Metrobank and others), but foreign-card withdrawals are usually capped at <b>10,000 to 20,000 pesos</b> per transaction, and most banks charge a fee of about <b>250 pesos</b> on top of your home bank's. To limit fees, <b>pull larger amounts less often</b>.",
            "Always <b>choose pesos</b> if the machine offers to bill you in dollars, and take out enough <b>before heading to remote islands</b>, where ATMs are few and can run out of cash on weekends."
          ]
        },
        {
          h: "Carry small bills",
          icon: "cash",
          key: { fig: "Small notes", tag: "Break big notes", text: "Jeepneys, tricycles, markets and small shops rarely have change for a 1,000 peso bill. Keep 20s, 50s and 100s for daily spending and tips.", tone: "teal" },
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
      glance: [
        { k: "Visa", v: "Not needed, 30 days" },
        { k: "eTravel", v: "Free and mandatory" },
        { k: "When", v: "Within 72 hrs, both ways" },
        { k: "Where", v: "etravel.gov.ph only" }
      ],
      live: true,
      topic: "visas",
      title: "Philippines visa and eTravel for US travelers 2026",
      description: "No visa for US citizens up to 30 days, but everyone files the free eTravel registration before arrival and again on departure. How to avoid scam sites.",
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
          icon: "passport",
          key: { fig: "30 days", tag: "Visa-free, extendable", text: "US citizens get 30 days visa-free, extendable through the Bureau of Immigration. Bring a passport valid six months and an onward ticket.", tone: "teal" },
          p: [
            "US citizens are admitted <b>visa-free for 30 days</b> for tourism or business. If you want to stay longer, the Bureau of Immigration lets you extend, first to 59 days and then in increments up to a long-stay maximum, applied for before your current stay expires.",
            "Have a <b>passport valid for six months</b> beyond your stay, and be ready to show an <b>onward or return ticket</b> and proof of where you are staying, which the officer can ask for."
          ]
        },
        {
          h: "eTravel: free, mandatory, both ways",
          icon: "ticket",
          key: { fig: "Free", tag: "Required both ways", text: "The eTravel registration is a free, mandatory online form, within 72 hours before arrival and again on departure. You receive a QR code that airlines and immigration scan.", tone: "teal" },
          p: [
            "Every traveler must complete the <b>eTravel registration</b>, a digital arrival and health declaration that replaced the old paper card. Fill it in <b>within 72 hours before your flight</b>, and you receive a <b>QR code</b> that airlines and immigration scan. It is <b>not a visa</b>, just a required form.",
            "It is also required <b>when you leave</b> the Philippines, so you complete a departure eTravel too. Registration is <b>free</b>."
          ]
        },
        {
          h: "Use the official site, not a lookalike",
          icon: "alert",
          key: { fig: "Official only", tag: "Ignore the paid lookalikes", text: "Complete eTravel only at etravel.gov.ph, where it is free. Third-party sites that charge a fee for the same form are scams the government has warned against.", tone: "amber" },
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
      glance: [
        { k: "Ride apps", v: "Grab (no Uber)" },
        { k: "Local", v: "Jeepneys, tricycles (cash)" },
        { k: "Taxis", v: "Insist on the meter" },
        { k: "Islands", v: "Ferries and flights" }
      ],
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Getting around the Philippines: Grab and jeepneys",
      description: "Grab is the ride app in the cities, jeepneys and tricycles are cheap and cash only, and taxis should run the meter. Watch airport touts, plan ferries.",
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
          icon: "phoneok",
          key: { fig: "Grab", tag: "Set fare, no haggling", text: "Grab is the ride app in Manila, Cebu and other cities, showing the fare up front, paid in-app or cash. Regular taxis are metered, but insist on the meter.", tone: "teal" },
          p: [
            "<b>Grab</b> is the ride app across Metro Manila, Cebu and other cities, covering cars and sometimes motorbikes. It shows the fare up front and lets you pay by card in-app or in cash, which sidesteps meter disputes. It needs a data connection, so keep your eSIM topped up.",
            "Regular <b>taxis</b> are metered and cheap, but some drivers quote a flat rate to visitors. Insist on the meter, and if a driver refuses, use Grab instead."
          ]
        },
        {
          h: "Jeepneys, tricycles and the airport",
          icon: "cash",
          key: { fig: "Cash only", tag: "Small bills and coins", text: "Jeepneys and tricycles are cash-only and very cheap. At the airport, take Grab or an official metered taxi from the rank, not a tout quoting a flat rate.", tone: "amber" },
          p: [
            "<b>Jeepneys</b> (the flamboyant shared jeeps) and <b>tricycles</b> (motorbike sidecars) are how locals get around short distances, for very little, and both are <b>cash-only</b>, so keep small bills and coins. Fares are low and often fixed by route; for tricycles, agree the fare first.",
            "At the airport, take <b>Grab</b> or an <b>official metered taxi</b> from the marshalled rank, not a driver who approaches you inside the terminal, where fixed special rates are a markup."
          ]
        },
        {
          h: "Between the islands",
          icon: "plane",
          key: { tag: "Book flights ahead", text: "Longer trips mean ferries or budget flights (Cebu Pacific, Philippine Airlines, AirAsia). Book ahead for better fares, and carry cash for small island terminals.", tone: "teal" },
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
    },
    {
      slug: "money-scams",
      glance: [
        { k: "Most cost", v: "Tens of dollars, avoidable" },
        { k: "At the airport", v: "Grab or the marshalled rank" },
        { k: "Taxis", v: "Meter, or use Grab" },
        { k: "New friends", v: "Decline food and drinks" }
      ],
      live: true,
      topic: "scams",
      title: "Common money scams in the Philippines, and what they cost",
      description: "Airport taxi flat rates, the friendly stranger swindle, ATM skimming and the pay-in-dollars prompt. What each costs a US visitor, and the habits that beat them.",
      h1: "Common money scams in the Philippines, and what they cost you",
      lede: "The Philippines is safe for the great majority of visitors, Filipino hospitality is real, and almost none of this is dramatic. The traps tourists actually meet are ordinary money ones: a fare quoted instead of metered, a stranger who is unusually keen to help, a card machine offering dollars. They cost tens of dollars and a few habits defuse nearly all of them. Here is each one, what it costs, and how to sidestep it.",
      checked: "Aug 2026",
      checkedISO: "2026-08-15",
      answer: "The list is short: the <b>airport ride</b>, where the meter stays off and a flat rate appears; the <b>friendly stranger</b>, known locally as <b>budol-budol</b>, where someone befriends you soon after arrival and you end up handing over cash or valuables; <b>ATM skimming</b> and card fraud; and the <b>pay in dollars</b> prompt on card machines, which uses a poor built-in rate. There is also the airport story everyone has heard, <b>tanim-bala</b>, and it is worth knowing what actually happened with it. The golden rules that beat most of it: <b>use Grab or the marshalled rank</b>, <b>insist on the meter</b>, <b>decline food, drinks and rides from new acquaintances</b>, and <b>always choose pesos</b>.",
      sections: [
        {
          h: "The airport ride",
          icon: "taxi",
          key: { fig: "Meter or Grab", tag: "Skip the tout", text: "The classic is a driver who approaches you inside arrivals with a flat rate instead of a meter. Use Grab or the marshalled rank outside, and confirm the meter is running before you move.", tone: "teal" },
          p: [
            "Manila's airport is where the money side of a Philippines trip most often goes wrong, and the mechanism is always the same: someone approaches you <b>inside the terminal</b> with a fixed price, or a driver announces the meter is broken. The flat rate is typically a few times what the ride is worth. The defense is to ignore anyone who approaches you, walk out to the <b>marshalled rank</b>, or book <b>Grab</b>, where the fare is set in the app before you get in and the trip is tracked. Confirm out loud that the meter will run before the doors close, and if a driver refuses, get out and take the next one. The full picture is in the <a href=\"/philippines/taxis-and-apps\">Philippines taxis and apps guide</a>.",
            "The extreme cases make the news precisely because they are extreme. One widely reported incident involved two visitors charged around <b>10,000 pesos, roughly 170 dollars</b>, for a short hop between terminals, with the driver producing an official-looking laminated rate card that turned out to be fake. Treat that as what can happen at the far end rather than the going rate. The US State Department also advises asking a hotel or restaurant to call a taxi for you rather than flagging one down, and making a note of the plate number, which is a sensible habit anywhere."
          ]
        },
        {
          h: "The unusually friendly stranger",
          icon: "alert",
          key: { tag: "Decline politely", text: "The US State Department advises being wary of people who befriend you just after you arrive, and declining food, drinks and rides from strangers. Travelers have been drugged and robbed after accepting an invitation.", tone: "teal" },
          p: [
            "Filipinos are genuinely, unusually welcoming, which is exactly what makes this one hard to spot and worth naming. The US State Department's advice is direct: be wary of unknown people who try to befriend you, <b>especially just after you arrive in the country</b>, and do not accept food, drinks or rides in private vehicles from strangers even when they seem legitimate. It notes that solo travelers have been drugged and robbed after accepting an invitation to visit a tourist spot. Locally the swindle-gang version is called <b>budol-budol</b>: a conversation, a second person joining in, a story, and cash or valuables changing hands.",
            "There is no honest average figure here, because the losses range from a wallet to a bank withdrawal, so treat it as a habit rather than a price. The habit is small and costs nothing socially: <b>decline invitations from people you did not seek out</b>, especially in your first days and especially anything involving a private car or a drink. Hospitality you meet through a hotel, a tour operator or a restaurant is a completely different thing, and there is no reason to be guarded about it."
          ]
        },
        {
          h: "Cards, ATMs and the dollars prompt",
          icon: "atm",
          key: { tag: "Choose pesos", text: "Card and ATM fraud are common, including skimming devices fitted to card readers. Use bank-lobby ATMs, cover the keypad, and always choose pesos rather than dollars at the terminal.", tone: "amber" },
          p: [
            "The State Department describes the exact mechanism worth guarding against: an <b>illicit device attached to an ATM card reader</b> that records the card details and PIN. Use machines <b>inside bank branches</b> rather than free-standing ones in convenience stores or malls, cover the keypad, and glance at the card slot for anything loose or bulky. Keep your card in sight when you pay, and turn on transaction alerts so a bad charge reaches your phone straight away. Philippine ATMs also charge their own withdrawal fee, so fewer, larger withdrawals cost less, which is covered in the <a href=\"/philippines/cash-or-card\">Philippines cash and cards guide</a>.",
            "The everyday cost that is not a scam at all: when a card machine or ATM asks whether to charge you <b>in US dollars or pesos</b>, always choose <b>pesos</b>. Dollars uses a poor built-in rate that costs you a few percent on every transaction you accept it on, and it is legal, so nobody is going to warn you. Carry small bills too, for jeepneys, tricycles and market stalls, since the no-change problem is real and 1,000 peso notes are awkward."
          ]
        },
        {
          h: "Tanim-bala, and what actually happened",
          icon: "plane",
          key: { fig: "About $3", tag: "Wrap the bag", text: "The 2015 bullet-planting extortion at Manila airport was real and documented, with about 30 police-recorded cases that year. The rules changed in 2016. Bag wrapping costs around 160 pesos.", tone: "amber" },
          p: [
            "You will read about <b>tanim-bala</b> (bullet planting), the Manila airport extortion scheme in which a bullet appeared in a passenger's bag at screening and a payment was demanded to make the problem go away. It was real: the Philippine National Police Aviation Security Group recorded about <b>30 cases in 2015</b>, up from 21 in 2013 and 12 in 2014, the national investigation bureau confirmed it existed, and criminal charges were filed against airport personnel over the case of an American traveler who refused to pay. It was a genuine documented episode, not a rumor, and it received a great deal of international coverage.",
            "It is also not the state of play today. In 2016 the rules were changed so that a passenger found with ammunition is profiled and cleared rather than arrested, which removed the leverage the scheme depended on. Occasional incidents since have revived the worry, so it is worth knowing rather than dismissing. The cheap defense is simply <b>wrapping your checked bag</b>, available at the airport for around <b>160 pesos, roughly 3 dollars</b>, and keeping your bags closed and in sight before they go to the belt. Treat this as a known airport story to be aware of, not something to expect."
          ]
        },
        {
          h: "What this means for your money",
          icon: "peso",
          key: { fig: "Habits", tag: "How to avoid it", text: "Book transport in Grab or take the marshalled rank, insist on the meter, decline invitations from strangers, use bank-lobby ATMs, and always choose pesos. That covers nearly all of it.", tone: "teal" },
          p: [
            "Almost everything here costs tens of dollars at most and is avoided by the same few habits: <b>book Grab or take the marshalled rank</b>, <b>insist on the meter</b>, <b>decline food, drinks and rides from new acquaintances</b>, <b>use bank-lobby ATMs</b>, and <b>always choose pesos</b>. The ones worth active care, because they can reach real money, are card skimming and the friendly-stranger swindle, so guard your card details and be a little reserved in your first few days.",
            "Handled calmly, none of this should shape your trip, and the Philippines rewards openness more than most places. For getting and spending money well while you are there, see the <a href=\"/philippines/cash-or-card\">Philippines cash and cards guide</a> and the <a href=\"/philippines\">Philippines cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is the Philippines safe for tourists?", a: "For the great majority of visitors, yes, and most trips are trouble free. What tourists actually meet are money traps rather than anything dramatic: airport taxi flat rates, the friendly-stranger swindle, and card or ATM fraud. Using Grab, insisting on the meter, declining invitations from people you did not seek out, and using bank ATMs avoid nearly all of them." },
        { q: "How do I avoid taxi scams at Manila airport?", a: "Ignore anyone who approaches you inside the terminal, and either book Grab, where the fare is set in the app, or take a taxi from the marshalled rank outside. Confirm the meter will run before the doors close, and if the driver refuses, get out and take the next one. It also helps to note the plate number, or ask a hotel to call a taxi for you." },
        { q: "What is budol-budol?", a: "The Filipino term for a swindle in which someone befriends or distracts a target and talks them into handing over cash or valuables, often with a second person joining the conversation. The US State Department advises being wary of strangers who befriend you soon after arrival and declining food, drinks and rides in private vehicles, since travelers have been drugged and robbed after accepting invitations." },
        { q: "Is the tanim-bala bullet scam at Manila airport still happening?", a: "It was a real documented episode. Philippine police recorded around 30 cases in 2015 and criminal charges were filed against airport staff. In 2016 the rules changed so that passengers found with ammunition are profiled and cleared rather than arrested, which removed the leverage. Occasional incidents have since caused concern, so know about it rather than expect it. Bag wrapping at the airport costs around 160 pesos." },
        { q: "Should I pay in pesos or dollars in the Philippines?", a: "Pesos, always. Accepting a card machine's offer to charge you in US dollars uses a poor built-in rate that costs you a few percent every time, and it is entirely legal, so no one will warn you. Choosing pesos lets your own bank set the rate. The same applies at ATMs, so decline any convert-to-dollars prompt." },
        { q: "How do I avoid ATM card skimming in the Philippines?", a: "Use ATMs inside bank branches rather than free-standing machines in stores or malls, cover the keypad while entering your PIN, and check the card slot for anything loose or bulky, since the State Department describes devices fitted to card readers that record card details and PINs. Keep your card in sight when paying, and turn on transaction alerts before you travel." }
      ],
      sources: {
        links: [
          { label: "US State Department: Philippines country information, crime and safety guidance for travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Philippines.html", type: "gov" },
          { label: "Rappler: a look back at the 2015 tanim-bala bullet-planting episode at Manila airport, with the police case figures", url: "https://www.rappler.com/newsbreak/iq/look-back-tanim-bala-bullet-planting-issue-naia-2015/", type: "media" }
        ],
        judgment: "The friendly-stranger, taxi and ATM skimming points come from current US State Department country information for the Philippines. The tanim-bala case counts are the Philippine National Police Aviation Security Group figures as reported by Rappler, and we describe the 2016 policy change alongside them rather than presenting a decade-old wave as current practice. The 10,000 peso airport fare is one widely reported extreme incident, flagged as such, not a typical fare, and we have deliberately not quoted zone-by-zone airport taxi tariffs because those move. Peso conversions use roughly 60 to the dollar. Checked August 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Decent in Manila and Cebu" },
        { k: "Signal gaps", v: "Islands, ferries, Palawan" },
        { k: "SIM registration", v: "Required, and tourist SIMs expire" },
        { k: "Carrier roaming", v: `${S.dayPassGlance}` }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "medium",
      title: "Philippines SIM card: registration, and a 30-day clock",
      description: "Every SIM must be registered under the SIM Registration Act, and a tourist SIM is typically valid about 30 days. Coverage is decent in the cities and patchy across the islands.",
      h1: "Staying connected in the Philippines.",
      lede: "The Philippines has two wrinkles that catch visitors: every SIM has to be registered under a 2022 law, and a tourist registration typically runs on a 30-day clock. Neither is hard, and both are worth knowing before you are standing at a counter with a boat to catch.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>decent in Metro Manila, Cebu and the bigger cities</b> and genuinely <b>patchy across the islands</b>: parts of Palawan away from El Nido and Puerto Princesa, the smaller Visayan islands, the inter-island <b>ferries</b> and boat transfers, and the mountain interior of northern Luzon. A local SIM from <b>Globe</b> or <b>Smart</b> runs roughly <b>9 to 18 dollars</b> for a tourist data pack, and every SIM must be <b>registered</b> under the SIM Registration Act: your <b>passport</b>, a local address, and sometimes an onward ticket, with a <b>tourist registration typically valid about 30 days</b>. A <b>Nomad eSIM</b> at a few dollars per gigabyte is an international roaming product rather than a Philippine SIM, so it sits outside that registration process entirely, which is the honest case for it here. Your US carrier's day pass is about <b>${S.dayPass}</b> (<b>AT&amp;T and Verizon</b>), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon's TravelPass has ${S.verizonNoCap}</b> and keeps billing daily. For island hopping, <b>download offline maps</b> and screenshot your ferry bookings. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "Registration, and the clock on a tourist SIM",
          icon: "passport",
          key: { fig: "About 30 days", tag: "Tourist SIM validity", text: "The SIM Registration Act requires passport, a local address and sometimes an onward ticket. A tourist registration typically runs about 30 days.", tone: "amber" },
          p: [
            "The <b>SIM Registration Act</b>, in force since 2022, requires every Philippine SIM to be registered before it can be used, and it applies to visitors. Expect to provide your <b>passport</b>, a <b>local address</b> (your hotel or resort booking normally works) and in some cases a <b>return or onward ticket</b>. Registration is done online or at the counter and takes a few minutes when the network cooperates.",
            "The part that surprises people is the <b>validity window</b>: a tourist registration is commonly described as running about <b>30 days</b> before the SIM deactivates unless extended. For a two-week trip that is irrelevant. For a longer stay, a return visit, or anyone leaving a SIM in a drawer for next year, it is not, and a number that stops working takes any app verifications tied to it with it. Buy from an official <b>Globe</b> or <b>Smart</b> store or airport counter rather than a stall, since a pre-registered SIM sold to you is registered to somebody else."
          ]
        },
        {
          h: "The islands are the coverage problem",
          icon: "alert",
          key: { fig: "The ferries", tag: "Where signal drops", text: "Manila and Cebu are decent. Smaller islands, boat transfers, Palawan away from the towns and the Luzon interior are patchy to absent.", tone: "amber" },
          p: [
            "An archipelago of seven thousand islands is a hard place to build a network, and it shows. <b>Metro Manila</b> and <b>Cebu</b> are decent, if not fast by regional standards, and the main resort towns are covered. Away from them: much of <b>Palawan</b> outside El Nido, Coron and Puerto Princesa, the smaller <b>Visayan</b> islands, the long <b>ferry and bangka</b> crossings that hold an itinerary together, the surf coasts of northern Luzon and the <b>Cordillera</b> interior around Sagada and Banaue.",
            "So island-hopping days are offline days. <b>Download offline maps</b>, screenshot your <b>ferry and transfer bookings</b> rather than trusting an email to load at the pier, and note down your accommodation's number. Resort and cafe <b>wifi</b> is common on the tourist trail and often satellite-backed, which means it works and it is slow. <b>Smart</b> generally has slightly wider reach, with <b>Globe</b> competitive in the cities and <b>DITO</b> cheaper and thinner."
          ]
        },
        {
          h: "The cost comparison",
          icon: "roamfee",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: "AT&T caps its Day Pass at 10 daily fees a bill period; Verizon does not. A local tourist pack is $9 to $18 and needs the registration.", tone: "teal" },
          p: [
            `A local tourist data pack at <b>9 to 18 dollars</b> undercuts roaming comfortably, since <b>AT&amp;T and Verizon</b> day passes are about <b>${S.dayPass}</b>, and <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon's TravelPass has ${S.verizonNoCap}</b> and keeps billing daily. <b>T-Mobile</b>'s current tiers include roughly <b>${S.tmoLow}</b> on Experience More, Magenta MAX and Go5G Plus, <b>${S.tmoMid}</b> on Experience Beyond and Go5G Next and <b>${S.tmoHigh}</b> on Better Value, slowing to <b>${S.throttle}</b> after that, so check your own plan before buying: on a week in Manila and Cebu a T-Mobile allowance may be enough.`,
            "Between the local SIM and a <b>Nomad eSIM</b> at a few dollars per gigabyte, the local pack is usually cheaper per gigabyte and the eSIM avoids the registration process, the address question and the 30-day clock, since a travel eSIM roams onto Philippine networks rather than being a Philippine SIM. That is a real distinction rather than a marketing one, and it is also the thing we earn on, so weigh it accordingly: if you are here for two weeks and do not mind the counter, buy local. This guide is written for US travelers departing the US. For more, see <a href='/philippines/cash-or-card'>cash or card in the Philippines</a>, <a href='/philippines/taxis-and-apps'>taxis and apps in the Philippines</a>, and the <a href='/philippines'>Philippines money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need to register a SIM card in the Philippines?", a: "Yes. The SIM Registration Act has required it since 2022 and it applies to visitors. Expect to provide your passport, a local address such as your hotel booking, and in some cases a return or onward ticket. A tourist registration is commonly valid about 30 days before the SIM deactivates unless extended." },
        { q: "Is an eSIM easier than a local SIM in the Philippines?", a: "It avoids the registration process entirely, because a travel eSIM roams onto Philippine networks rather than being a Philippine SIM, so there is no address question and no 30-day clock. A local tourist pack at 9 to 18 dollars is usually cheaper per gigabyte. If you are here two weeks and do not mind the counter, buy local." },
        { q: "Will I have signal island hopping in the Philippines?", a: "Often not. Ferry and bangka crossings, the smaller Visayan islands, much of Palawan outside the main towns and the Cordillera interior are patchy to absent. Download offline maps and screenshot your ferry bookings rather than relying on an email to load at the pier." },
        { q: "How much does it cost to use my US phone in the Philippines?", a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week, against 9 to 18 dollars for a local tourist pack. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "Globe Telecom: SIM registration requirements and tourist plan pages", url: "https://www.globe.com.ph/", type: "official" },
          { label: "US State Department: Philippines country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Philippines.html", type: "gov" }
        ],
        judgment: "Checked Aug 2026. The 30-day tourist validity is widely described in carrier-facing registration material and is the detail most likely to catch a long-stay visitor, so it is stated as commonly described rather than as a precise statutory figure, and anyone staying longer should confirm with the carrier at purchase. The registration distinction between a Philippine SIM and an international travel eSIM is real and it also favours the product we earn on, which is why this page states the local pack is cheaper per gigabyte in the same breath. Coverage is the desk's read from operator footprints and consistent traveler accounts."
      }
    }
  ]
};
