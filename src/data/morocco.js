export default {
  slug: "morocco",
  live: true,
  name: "Morocco",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-12",
  sources: {
    changed: "First publication. Confirmed the things that catch US visitors here: the dirham is a closed currency you cannot buy abroad or take out beyond 2,000 MAD, so you withdraw it on arrival and convert any leftover before flying home. Also confirmed that Morocco is cash-first (cards mainly at city hotels, supermarkets and upscale restaurants), that a per-person nightly tourist tax (the taxe de sejour) is paid in cash at your hotel or riad, that tipping is customary, and that US citizens get 90 days visa-free.",
    links: [
      { label: "UK government and Moroccan customs guidance on the closed-currency rule: up to 2,000 MAD may be taken in or out, and foreign cash worth 100,000 MAD or more must be declared", url: "https://www.gov.uk/foreign-travel-advice/morocco/entry-requirements", type: "gov" },
      { label: "Analysis of Moroccan hotel taxation (Law 30-89, article 130): the per-person, per-night tourist and city taxes by property class, and the reduced 10% VAT on accommodation", url: "https://www.upsilon-consulting.com/en/hotel-taxation/", type: "other" },
      { label: "US visa-free entry for 90 days on arrival, passport valid at least six months, confirmed across current entry guidance", url: "https://visasin.com/us/morocco", type: "other" },
    ],
    judgment: "The daily cash share, the tipping norms, and the everyday tourist-tax amounts are our own estimate from experience and consistent traveler reports, not an official figure. The tax varies by property class and municipality, so treat our bands as a guide, not a guarantee.",
  },
  emergency: { medical: "15", note: "15 (SAMU) is the ambulance and medical emergency line, 19 is the police in cities, and 177 is the Royal Gendarmerie for rural areas and highways. 112 works from any mobile, even without a local SIM. The US number 911 does not work here.", checked: "Jul 2026", checkedISO: "2026-07-12" },
  insuranceLevel: "high",
  rentalCommon: true,
  region: "Africa",
  signals: { cardFriendliness: 2, cashNeed: 4, taxRisk: 3, atmRisk: 4 },
  hook: "Morocco runs on cash. The dirham is a closed currency you can only get once you arrive, so plan to withdraw it from a bank ATM on landing, keep small notes for souks, taxis and tips, and use cards mainly for city hotels and bigger restaurants.",
  aliases: ["morocco", "maroc", "marrakech", "marrakesh", "fes", "fez", "casablanca", "rabat", "tangier", "chefchaouen", "essaouira", "agadir", "sahara", "atlas mountains", "medina", "souk", "dirham", "mad", "taxe de sejour", "riad"],

  title: "Money in Morocco (2026): the Closed Dirham, Cash, Cards, ATMs, the Tourist Tax and Tipping | True Trip Costs",
  description: "How to handle money in Morocco as a US traveler in 2026: why the dirham is a closed currency you get on arrival, how cash-first the country really is, where cards work, the dollar-conversion trap, ATM fees, the per-night taxe de sejour, bargaining, and how tipping works. Checked July 2026.",

  h1: "Money in Morocco, sorted.",
  lede: "A calm, current plan for the money side of your trip: why Morocco runs on cash, how to get the closed dirham on arrival, where your card actually works, the small tips that are expected, and the nightly tourist tax to keep cash aside for.",
  hero: {
    img: "/morocco-hero.jpg",
    h: 1375,
    alt: "A flat editorial illustration of a Marrakech rooftop terrace at dusk. A lone figure in a flowing terracotta djellaba walks away across warm tiled paving toward a low wall, beyond which the ochre rooftops of the medina, a square minaret and the Atlas Mountains rise in violet silhouette under an amber and blue gradient sky, with strings of small warm lanterns overhead, and in the foreground a round table with a patterned cloth holding a silver teapot pouring mint tea into a glass and a conical tagine dish"
  },

  recentChange: {
    date: "Jul 2026",
    text: "Nothing has changed structurally, but two things are worth knowing before you go. Some city hotels have begun adding card surcharges of about 2 to 3% and more places are unbundling the nightly tourist tax onto the final bill, so ask for an all-in price when you book directly. The dirham remains a closed currency, so plan to get cash on arrival and convert any leftover before you fly home."
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Morocco <b>runs on cash</b>. The first thing to understand is the money itself: the dirham is a <b>closed currency</b>, which means you cannot buy it before you fly or take much of it out (the limit is 2,000 MAD), so plan to <b>withdraw dirham from a bank ATM on arrival</b>, decline the dollar conversion, and always choose dirham. Cards work at <b>city hotels, big supermarkets, upscale restaurants and train stations</b>, and Visa and Mastercard are the most reliable, but the <b>souks, taxis, street food, small shops, rural areas and every tip</b> are cash, and 'the machine is broken' is a common line. Carry <b>small notes and coins</b>, keep a backup card, and expect to <b>bargain</b> in the souks. Two more things: there is a small <b>nightly tourist tax</b> (the taxe de sejour) that you pay in cash at your riad or hotel, and <b>tipping is customary</b> here, so keep coins handy. At the end of the trip, <b>convert leftover dirham before you leave</b> and keep your exchange receipt, because you cannot change it back once you are home. US visitors get <b>90 days visa-free</b>.",

  meter: {
    heading: "A cash-first country, with cards for the bigger things.",
    cashPct: 65,
    note: "A rough feel for everyday spending. Cash covers most of daily life here: souks, taxis, cafes, street food, small shops and tips. Cards are useful mainly for hotels, bigger restaurants, supermarkets and train tickets in the cities, so plan to carry more cash than you would in Europe."
  },

  trio: [
    { sym: "card", kind: "warn", h: "Your card", verd: "Cities and bigger things only", p: "Visa and Mastercard work at city hotels, large supermarkets, upscale restaurants and train stations, with Amex spotty. They are not accepted in souks, petits taxis, street stalls, small shops or rural areas, and even where a terminal exists, 'the machine is broken' is common. Treat cards as a backup, not your main way to pay.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "What Morocco runs on", p: "Physical dirham is the main way to pay. Because it is a <b>closed currency</b> you cannot get abroad, withdraw it from a bank ATM on arrival, then carry small notes and coins for souks, taxis, cafes, tips and the nightly tourist tax. Bargaining is expected in the souks, and cash gives you the leverage.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Your source of dirham, decline dollars", p: "Bank ATMs are common in cities and towns and much rarer in rural areas, so stock up before heading into the mountains or desert. Many charge a per-withdrawal fee for foreign cards on top of your bank's, so <b>withdraw a larger amount at once</b> (odd numbers like 490 give you smaller notes), and always <b>choose dirham, not US dollars</b>.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b>, plus a backup from a different bank. Amex is spotty here.",
      "<b>Do not buy dirham before you fly.</b> It is a closed currency, hard and costly to get abroad. Bring some clean US dollar or euro notes as an emergency backup instead.",
      "Set up an <b>eSIM</b>. Coverage is good in cities and towns, thinner in the mountains and desert.",
      "Know the shape of it: <b>cash-first</b>, a small <b>nightly tourist tax</b> paid in cash, and <b>tipping is normal</b>."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Withdraw dirham from a <b>bank ATM</b> in arrivals, and <b>decline 'convert to dollars,'</b> always choose dirham.",
      "Take out enough for your <b>first day or two</b> (taxi, tips, a meal), since rural ATMs are scarce.",
      "Skip the exchange counters for large sums, their rates are weak. Change only a little cash if you must.",
      "<b>Keep the ATM or exchange receipt</b>, you may need it to convert leftover dirham back before you leave."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "Carry <b>small notes and coins</b>, and pay cash in souks, taxis, cafes, street food and for tips.",
      "Use <b>cards</b> for hotels, bigger restaurants, supermarkets and train tickets in the cities.",
      "<b>Bargain</b> in the souks: the first price is often at least double, so start around 30 to 40% and work up.",
      "Keep a little cash aside for the <b>nightly tourist tax</b> at your riad, usually paid at check-in or checkout."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in dirham, never in US dollars or euros.</b> Choosing your home currency, or letting a shop set the rate, quietly costs you 5 to 15%.",
      "<b>Convert leftover dirham before you leave</b> and keep your receipt. It is a closed currency, so you cannot change it back once you are home."
    ], cta: null }
  ],

  cash: {
    rate: 10, cur: "MAD", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 10 dirham to the US dollar, so MAD 100 is roughly US$10. Morocco is cash-first and inexpensive, so this cash-in-hand slice is a big share of everyday spending.",
    styles: [
      { n: "Budget",    per: 40,  cash: 0.85 },
      { n: "Mid-range", per: 80,  cash: 0.75 },
      { n: "Comfort",   per: 150, cash: 0.6 }
    ]
  },

  connectivity: {
    works: "Good across the cities, towns and main roads, and thinner in the High Atlas mountains and the desert, where you can lose signal. The carriers are Maroc Telecom (IAM), Orange and Inwi. A prepaid SIM is cheap and easy to buy (bring your passport), but for most visitors an eSIM from Airalo, Nomad or a similar provider is the simple route. You do not need mobile data to pay cash, but you will want it for maps and taxi apps in the cities."
  },

  tax: {
    unit: "perPersonPerNight",
    currency: "MAD",
    capNights: null,
    note: "Morocco charges a per-person, per-night tourist tax (the taxe de sejour, sometimes split into a tourism promotion tax and a city tax) on hotels and riads. The amount depends on the property class and the city, and it is usually not in the room rate, so you pay it in cash at check-in or checkout. Children under 12 are exempt. VAT on accommodation is a reduced 10% and already included in prices.",
    regions: [
      { key: "cities", label: "Marrakech, Casablanca, Fes, Rabat, Agadir and other big cities", rate: 25, note: "In the main tourist cities a mid-range or upscale riad or hotel commonly works out to about 20 to 30 MAD per person per night once the tourism tax and city tax are combined, and luxury places can reach 30 to 50 MAD. This uses a representative figure." },
      { key: "guesthouses", label: "Smaller hotels and guesthouses", rate: 12, note: "Lower-category hotels and guesthouses charge less, commonly around 5 to 15 MAD per person per night." },
      { key: "other", label: "Rural inns and simple lodges", rate: 5, note: "Simple inns, boarding houses and rural lodges sit at the bottom of the scale, often just a few dirham per person per night." }
    ]
  },

  currencyHeading: "The Moroccan dirham, in plain terms.",
  facts: [
    { sym: "mad", k: "Quick conversion", v: "Morocco uses the dirham, written DH or MAD. At about 10 to the US dollar, MAD 100 is roughly US$10 and MAD 20 about US$2. Notes come in 20, 50, 100 and 200 dirham, with coins from 1 up to 10. It is a closed currency, so you get it on arrival, not before." },
    { sym: "cash", k: "Cash is king", v: "Most of Morocco runs on cash. Cards work only at city hotels, large supermarkets, upscale restaurants and train stations, so keep a steady supply of small notes and coins for everything else, from a taxi to a glass of orange juice in the square." },
    { sym: "atm", k: "Getting dirham", v: "ATMs at banks are your source: common in cities, scarce in the countryside. Many add a per-withdrawal fee for foreign cards, so take out a larger amount at once and choose dirham, not dollars. At the end, convert any leftover before you fly, since you cannot change it back at home." },
    { sym: "tip", k: "Tipping is normal", v: "Small tips (a pourboire) are part of daily life. Round up or leave about 5 to 10% at cafes and restaurants, hand a porter 5 to 10 MAD a bag, and keep coins for the many small courtesies, from a helpful hand to a parking attendant." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "A nightly tourist tax, and no VAT refund on shopping.",
    text: "Two things to know about tax here. First, Morocco charges a <b>per-person, per-night tourist tax</b> (the taxe de sejour) on hotels and riads, usually <b>paid in cash</b> at check-in or checkout and often not shown in the online room rate, so ask for an all-in price when you book directly. Children under 12 are exempt, and the amount rises with the property's class and city (see the estimate above). Second, unlike South Africa or the EU, Morocco has <b>no tourist VAT refund</b> on ordinary shopping. VAT (a reduced 10% on accommodation, 20% standard on most goods) is simply included in the price, and there is no refund desk at the airport. The way to save in Morocco is not a refund form, it is to <b>bargain well and pay in dirham</b>."
  },

  keyFacts: [
    { label: "Tourist tax (taxe de sejour)", value: "About 10 to 50 MAD per person per night depending on the property class and city; children under 12 exempt; usually paid in cash at your hotel or riad", status: "enacted", effective: null, source: null, checked: "2026-07-12" },
    { label: "Closed currency", value: "The dirham cannot be bought abroad or taken out beyond 2,000 MAD; withdraw it on arrival and convert any leftover before you fly home", status: "enacted", effective: null, source: null, checked: "2026-07-12" }
  ],

  traps: [
    "<b>'Pay in US dollars or euros?' Always say no.</b> ATMs and card terminals may offer to charge you in your home currency, and shops may quote you in euros; both set a poor rate and quietly cost you 5 to 15%. Pay in dirham every time.",
    "<b>Do not buy dirham before you fly.</b> It is a closed currency, hard to find and expensive abroad. Bring a little US dollar or euro cash as backup and withdraw dirham from a bank ATM on arrival.",
    "<b>'The card machine is broken' is common.</b> Never arrive at a restaurant or shop assuming you can pay by card. Carry enough cash, and keep a second card from a different bank in case one is blocked.",
    "<b>Watch ATM fees and rural scarcity.</b> Many Moroccan ATMs add their own per-withdrawal fee on top of your bank's, and machines are scarce outside cities. Withdraw a larger amount at once, in odd numbers for smaller notes, and stock up before heading into the mountains or desert.",
    "<b>Keep your exchange receipts.</b> To convert leftover dirham back to dollars or euros before you leave, some bureaux ask to see the receipt proving you bought it legally. No receipt can mean no change-back.",
    "<b>Faux guides and 'helpful' strangers.</b> Someone who leads you through the medina or to a shop will often expect a fee or is steering you to a commission. Agree any guide's price up front, and a polite 'la, shukran' turns down the rest."
  ],

  tippingHeading: "Tipping is part of the culture here.",
  tipping: "Unlike much of Europe, Morocco has a real tipping culture, and small gratuities (a pourboire) are woven into daily life, so it helps to <b>keep a pocket of coins and small notes</b>. At <b>cafes and restaurants</b>, round up or leave about <b>5 to 10%</b>, checking first whether a service charge is already on the bill. Hand a <b>hotel porter 5 to 10 MAD</b> a bag and leave a little for housekeeping. A <b>private guide</b> might get <b>50 to 100 MAD</b> for a good day, a <b>taxi</b> driver a rounded-up fare, and the many small courtesies of a Moroccan day, someone watching your car or pointing the way, a few dirham. None of it is huge, but it is expected and appreciated."

,
  faqs: [
    { q: "Should I use cash or card in Morocco?", a: "Mostly cash. Morocco is a cash-first country: souks, taxis, street food, small shops, rural areas and tips are all cash. Cards work at city hotels, big supermarkets, upscale restaurants and train stations, so treat them as a backup for the bigger things and carry plenty of small notes and coins." },
    { q: "Can I get Moroccan dirham before I travel?", a: "No, not in any real amount. The dirham is a closed currency, so you cannot buy it at your bank at home, and the limit for bringing it in is 2,000 MAD. Bring some US dollars or euros as backup and withdraw dirham from a bank ATM when you arrive." },
    { q: "Should I pay in dirham or US dollars?", a: "Always dirham. If an ATM or terminal offers to charge you in US dollars, decline; that dynamic currency conversion adds a few percent. If a shop offers to take dollars or euros in cash, the rate they set is usually 5 to 15% worse than paying in dirham." },
    { q: "Are ATMs easy to use in Morocco, and do they charge?", a: "In cities and towns they are common and have English menus, but they are scarce in rural areas, so withdraw before you head out. Many charge a per-withdrawal fee for foreign cards on top of your own bank's, so take out a larger amount at once, choose dirham not dollars, and try odd amounts like 490 to get smaller notes." },
    { q: "Do I need a visa for Morocco?", a: "No. US citizens can enter visa-free for up to 90 days for tourism, receiving a stamp on arrival. Your passport should be valid for at least six months, and border officers may ask for a return ticket and your accommodation address." },
    { q: "Is there a tourist tax in Morocco?", a: "Yes, a per-person, per-night taxe de sejour on hotels and riads, usually paid in cash at check-in or checkout and often not shown in the online rate. It rises with the property's class and city, roughly 10 to 50 MAD per person per night, and children under 12 are exempt. Ask for an all-in price when booking directly." },
    { q: "Do you tip in Morocco?", a: "Yes, small tips are customary. Round up or leave about 5 to 10% at cafes and restaurants, give a porter 5 to 10 MAD a bag, and keep coins for guides, drivers and the many small courtesies of the day. Keeping a pocket of small change makes it easy." },
    { q: "How much cash should I bring for a week in Morocco?", a: "More than you would in Europe, since so much is cash. A comfortable mid-range day runs roughly 600 to 1,200 MAD (about US$60 to US$120) for meals, taxis, tips and small entries, mostly in cash, topped up from bank ATMs. Bring some US dollars or euros as an emergency backup." }
  ],

  culture: {
    heading: "A warm word and a glass of tea",
    intro: "Morocco is warm, social and deeply hospitable, and a little effort goes a long way. Greetings matter, bargaining is a friendly exchange rather than a fight, and an offer of mint tea is an act of welcome you should rarely refuse. French and Moroccan Arabic (Darija) are widely spoken, with Amazigh (Berber) across the south, and a few words open many doors.",
    phrases: [
      { mean: "Hello (peace be with you)", say: "sah-LAAM", word: "Salam", native: "\u0633\u0644\u0627\u0645" },
      { mean: "Thank you", say: "shoo-KRAN", word: "Shukran", native: "\u0634\u0643\u0631\u0627" },
      { mean: "No, thank you (for polite refusals)", say: "la shoo-KRAN", word: "La, shukran", native: "\u0644\u0627 \u0634\u0643\u0631\u0627" },
      { mean: "Too much (handy when bargaining)", say: "be-ZAAF", word: "Bezaf", native: "\u0628\u0632\u0627\u0641" },
      { mean: "Okay, fine", say: "WA-kha", word: "Wakha", native: "\u0648\u0627\u062e\u0627" },
      { mean: "Goodbye", say: "b-sla-MA", word: "Bslama", native: "\u0628\u0633\u0644\u0627\u0645\u0629" },
    ],
    tip: "A warm <b>salam</b> opens almost any interaction, and accepting a glass of <b>mint tea</b> is part of the ritual of welcome. When a seller or would-be guide is persistent, a smiling <b>la, shukran</b> (no, thank you) is the polite, effective way to move on.",
    stories: [
      { img: "/morocco-culture-1.jpg",
        alt: "Vintage WPA travel-poster illustration of a Marrakech souk alley at dusk, keyhole archways and hanging carpets and glowing metal lanterns overhead, pyramids of colorful spices in baskets, an artisan pouring from a pot and figures in djellabas browsing, in flat blocks of terracotta, saffron, teal and indigo",
        h: "The souk and the art of the deal",
        p: "The medinas are a maze of stalls where <b>bargaining is expected</b> and treated as a friendly ritual, not a confrontation. The first price is usually at least double, so start low, stay warm, and be ready to walk away, which often brings the price down. Bring cash and small notes, since almost no souk stall takes cards.",
        note: "Say it: start around 30 to 40% of the first price" },
      { img: "/morocco-culture-2.jpg",
        alt: "Vintage WPA travel-poster illustration of Moroccan hospitality, a hand pouring golden mint tea in a long high arc from an ornate silver teapot into small decorated glasses on a brass tray, a plate of almond pastries beside it, patterned cushions and a woven rug, in flat blocks of green, gold, terracotta and cream",
        h: "Mint tea and the rules of welcome",
        p: "Sweet mint tea, poured in a long arc from high above the glass, is the heart of Moroccan hospitality, so often offered that it is nicknamed Berber whisky. Accepting a glass from a host or a shopkeeper is part of the courtesy, and refusing outright can feel abrupt. Take the tea, take your time, and the visit goes better.",
        note: "Good to know: accepting tea is part of the welcome, not a sales trap" },
      { img: "/morocco-culture-3.jpg",
        alt: "Vintage WPA travel-poster illustration of the Sahara at sunset, a caravan of camels crossing rolling sand dunes casting long shadows, a small cluster of Berber desert tents in the distance, a wide glowing sky in apricot, rose, dusty violet and sand",
        h: "The desert and the Amazigh south",
        p: "South and east of the Atlas, Morocco opens into the Sahara, where camel treks and desert camps are the classic experience and the culture is strongly <b>Amazigh (Berber)</b>. Nights in the dunes are cold and cash is essential, since there are no ATMs out here, so carry enough dirham for guides, camps and tips before you leave the last town.",
        note: "Good to know: carry cash before heading into the desert, there are no ATMs" },
    ],
    pride: "Morocco is proud of its hospitality, its craftsmanship, and the blend of Amazigh, Arab, Andalusian and Saharan cultures that shapes its cities, food and music. Meet it with warmth and patience, and it opens up quickly."
  },

  spokes: [
    {
      slug: "taxis-and-apps",
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Which taxi app to use in Morocco: petit taxi, grand taxi and inDrive (2026) | True Trip Costs",
      description: "How Morocco's two-tier taxi system works, why petit-taxi drivers dodge the meter, which app to install (inDrive leads, with Careem and a limited Uber), and the right price from Marrakech airport into the medina. Checked July 2026.",
      h1: "Taxis in Morocco, and the app that actually works",
      lede: "Morocco runs on two kinds of taxi and a set of ride apps that sit in a legal gray area, which is not what most visitors expect. Here is how the petit and grand taxis work, how to handle the meter, and which app to actually install.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Morocco has two taxi types. A <b>petit taxi</b> handles rides inside a city, is color-coded by town, and by law runs a meter (the <b>compteur</b>), though drivers often refuse it. A <b>grand taxi</b> is a shared car for trips between towns. For apps, <b>inDrive</b> is the one to install, since it works in the most cities and lets you name your own price. <b>Careem</b> covers a few big cities, and <b>Uber</b> returned in late 2025 but only in Casablanca and Marrakech. The simple rule in a petit taxi is to say <b>the meter, please</b>, and if the driver will not use it, agree the price before you move or wave the next one over.",
      sections: [
        {
          h: "Petit taxi and grand taxi: the two-tier system",
          p: [
            "A <b>petit taxi</b> is a small car that works only within a single city, takes up to three passengers, and is painted a city color: ochre in <b>Marrakech</b>, red in <b>Casablanca</b>, blue in <b>Rabat</b>. By law it runs a meter, which usually starts around 2 to 3 dirham with a similar rate per kilometer, so most city hops land in the <b>10 to 30 dirham</b> range, a bit more out to the edges, and roughly 50 percent higher at night after about 8 or 9pm. Sharing is normal, so a driver may pick up someone else going your way, and each passenger pays their own metered fare.",
            "A <b>grand taxi</b> is the shared workhorse between cities, towns and villages, these days often a modern minivan rather than the old Mercedes. You go to the grand-taxi rank for your destination, pay per seat, and the car leaves once it is full, or you can buy the empty seats to leave straight away. For longer routes, buses like CTM and Supratours, or the train, are usually the more comfortable choice."
          ]
        },
        {
          h: "The meter, and 'the meter is broken'",
          p: [
            "The one money issue you will meet again and again in a petit taxi is a driver who will not switch on the meter and instead names a flat, higher price, especially with an obvious visitor. This is overpaying rather than anything dangerous. The phrase that solves most of it is simple: <b>the meter, please</b>, or in the local phrasing, <b>le compteur, afak</b>. If the driver still refuses, agree a clear price before the car moves, and if the number is silly, just step out and take the next taxi.",
            "As a sense of the right figure, a short ride across a city center is a handful of dirham to the low tens, not a flat 100. Because sharing is normal, do not be surprised if the driver stops for another passenger, and that does not change your own fare. Rounding up a dirham or two at the end is a normal, friendly tip."
          ]
        },
        {
          h: "Which app to install",
          p: [
            "The most useful app to have is <b>inDrive</b>, which operates in Marrakech, Casablanca, Rabat, Fes, Tangier and Agadir and works on a bidding model: you propose a fare, the driver accepts or counters, and you pay in cash. <b>Careem</b>, owned by Uber, works well in Casablanca and Rabat and also in Marrakech and Tangier, and feels familiar if you have used Uber. <b>Uber</b> itself left Morocco in 2018 and came back in a limited way in late 2025, so far only in Casablanca and Marrakech, so do not count on it elsewhere.",
            "One honest caveat: these ride apps sit in a <b>legal gray area</b> in Morocco, and many drivers are unlicensed private individuals. To avoid friction with licensed taxis, app drivers often ask you to walk a short distance from a taxi rank or an airport terminal for the pickup. The trade-off is that the price is fixed and the ride is tracked, and it is usually cheaper than a tourist-priced street taxi. Keep inDrive as your main app and Careem or Uber as backups."
          ]
        },
        {
          h: "Airports, getting into town and paying",
          p: [
            "At <b>Marrakech Menara</b>, the correct metered or fixed price for a petit taxi into the medina or Gueliz is about <b>70 to 100 dirham</b> (roughly 7 to 10 US dollars). Anything well above that is an overcharge, so ignore the men who approach you inside the terminal and walk to the clearly marked taxi rank, or use a pre-booked transfer. Official airport taxis post their own, higher, fixed tariffs, so check the posted rate or agree the price first. <b>Casablanca</b>'s airport has a train into the city, which is an easy and cheap way in.",
            "Carry <b>dirham</b> in cash, since street taxis and app drivers expect it, and watch for a currency-switch line where a quoted number quietly turns from dirham into the same figure in euros. Agree everything in dirham. For the wider money picture, including how much cash to carry and where cards work, see the <a href=\"/morocco\">Morocco money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Uber available in Morocco?", a: "Only partly. Uber left Morocco in 2018 and returned in a limited way in late 2025, so far only in Casablanca and Marrakech. The most widely used app across Moroccan cities is inDrive, with Careem strong in Casablanca and Rabat. Do not plan to rely on Uber alone; install inDrive as your main option." },
        { q: "Which taxi app is best in Morocco?", a: "inDrive is the most consistent, working in Marrakech, Casablanca, Rabat, Fes, Tangier and Agadir on a name-your-price model paid in cash. Careem is a good choice in Casablanca and Rabat. These apps are a legal gray area in Morocco, so drivers may pick you up a short walk from taxi ranks, but the fare is fixed and cheaper than a tourist-priced street taxi. For short city hops, a petit taxi on the meter is also fine." },
        { q: "How much is a taxi from Marrakech airport to the medina?", a: "The correct metered or fixed petit-taxi price from Marrakech Menara airport into the medina or Gueliz is roughly 70 to 100 dirham, about 7 to 10 US dollars. Any quote well above that is an overcharge. Ignore the men approaching you inside the terminal and walk to the marked taxi rank, or use a pre-booked transfer. Official airport taxis charge more on a posted tariff." },
        { q: "Do Moroccan taxis use the meter?", a: "Petit taxis are legally required to run the meter, but drivers often refuse and quote a flat, higher price to visitors. Say 'the meter, please' (le compteur, afak), and if the driver still refuses, agree a price before you move or take the next taxi. A ride-hailing app like inDrive avoids the whole issue by fixing the fare in advance." }
      ],
      sources: {
        links: [
          { label: "US Department of State: Morocco country information, general safety and local-travel context for US visitors", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Morocco.html", type: "gov" },
          { label: "Morocco Guide: a recent overview of petit and grand taxis, the meter and the ride-hailing apps", url: "https://www.morocco-guide.com/transport/taxis-in-morocco/", type: "guide" },
          { label: "Days Morocco Tours: a 2026 taxi guide confirming inDrive and Careem coverage and the Marrakech airport fare", url: "https://daysmoroccotours.com/taking-taxis-in-morocco/", type: "guide" }
        ],
        judgment: "Ride-hailing in Morocco is a legal gray area and app coverage varies by city, with Uber only recently back in Casablanca and Marrakech, so keep inDrive as your main app and confirm the price before you ride. Fares move, so treat the dirham figures as a recent read. Checked July 2026."
      }
    }
  ]
};
