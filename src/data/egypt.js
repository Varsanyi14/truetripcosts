export default {
  slug: "egypt",
  live: true,
  name: "Egypt",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-10",
  emergency: { medical: "123", note: "123 is the ambulance line. 126 reaches the tourist police, who are more likely to speak English.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "high",
  region: "Middle East",
  signals: { cardFriendliness: 1, cashNeed: 5, taxRisk: 3, atmRisk: 4 },
  hook: "A cash country: cards work at hotels and malls, but markets, taxis, tips and street food all want pounds.",
  aliases: ["cairo", "giza", "luxor", "aswan", "alexandria", "sharm el sheikh", "hurghada", "egyptian pound", "egp", "pound", "nile", "pyramids", "egyptian"],

  title: "Money in Egypt (2026): Cash, Cards, Pounds and Tipping | True Trip Costs",
  description: "How to handle money in Egypt as a US traveler in 2026: why it's a cash country, how much to tip (baksheesh), paying in Egyptian pounds not dollars, the service and tax that hotels and restaurants add, which ATMs to use, and why prices move with the pound. Checked July 2026.",

  h1: "Money in Egypt, sorted.",
  lede: "A calm, current plan for the money side of your trip: why you should carry cash and small notes, how tipping (baksheesh) really works, and the service and tax that gets added at hotels and tourist restaurants.",
  hero: {
    img: "/egypt-hero.jpg",
    h: 1375,
    alt: "A narrow old bazaar lane in Islamic Cairo at dusk with warm sandstone buildings and carved wooden screens, strings of glowing colored-glass lanterns overhead, a street cat on the worn stones, the silhouette of a mosque's dome and minarets at the end of the lane against a soft sky, a figure in flowing dress walking away, and a plate of koshari with golden falafel and a piece of honey-soaked basbousa beside a tall glass of deep red hibiscus iced tea on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Egypt runs on <b>cash</b>. Cards work at hotels, malls and upscale restaurants, but markets, taxis, street food, small shops, site extras and above all <b>tips</b> all want Egyptian pounds. Bring a <b>no-foreign-fee debit card</b> as your main tool for pulling cash, carry a <b>thick stack of small notes</b> for the constant small tips (baksheesh), and pull pounds from a <b>bank ATM</b> (National Bank of Egypt, Banque Misr, CIB, QNB). Two things surprise first-timers: hotels and tourist restaurants often add a <b>service charge plus tax</b> on top of listed prices, and <b>tipping is everywhere</b>, in small amounts, for almost any help. Always pay in <b>pounds, not dollars</b>, and skip the street money changers.",

  meter: {
    heading: "Cash first, and lots of small notes for tips.",
    cashPct: 72,
    note: "A rough feel for everyday spending. Cards are fine at hotels, malls and higher-end restaurants, but most of daily life, markets, taxis, street food, small shops, entry extras and the many small tips, happens in cash. The real habit to build is carrying a stack of small notes (5, 10, 20 pounds) so you always have something for baksheesh."
  },

  trio: [
    { sym: "card", kind: "warn", h: "Your card", verd: "Only in the upscale spots", p: "Visa and Mastercard work at hotels, malls and higher-end restaurants, and contactless is spreading in Cairo. Outside those, cards are rarely accepted: markets, taxis, street food, small shops and tips are cash. Treat a card as a backup for big bills, not your main way to pay.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "This is how Egypt runs", p: "Egyptian pounds cover almost everything, and you will want a lot of small notes for tips. Keep 5, 10 and 20 pound notes on you at all times for baksheesh, and larger notes for meals and shopping. Break big notes when you can, since small ones vanish quickly.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Use a bank machine", p: "Bank ATMs (National Bank of Egypt, Banque Misr, CIB, QNB) are your best source of pounds. Read the fee, take a good amount when a machine is working (some run empty), and always decline \"convert to US dollars.\" Skip the street money changers entirely.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee debit card</b> as your main tool, since Egypt runs on cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> too, for hotels, malls and bigger restaurants.",
      "A few small, clean US dollar or euro notes can be handy for tipping guides or on a Nile cruise, but plan to pay for daily life in pounds."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, the rates are poor.",
      "Pull pounds from a <b>bank ATM</b> (National Bank of Egypt, Banque Misr, CIB, QNB) and <b>decline \"convert to US dollars.\"</b>",
      "Take a healthy amount and ask for or break into <b>small notes</b> early, because you will tip constantly."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Cash for almost everything</b>: markets, taxis, street food, small shops and tips.",
      "<b>Card</b> only for hotels, malls and higher-end restaurants.",
      "Keep a pocket of <b>small notes</b> ready for baksheesh, all day.",
      "<b>Always choose pounds</b>, never US dollars, on any card terminal or ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "cash", when: "A golden rule", bullets: [
      "<b>Carry small notes and tip often.</b> Baksheesh is woven into daily life, in small amounts, for almost any help, so a wad of 5, 10 and 20 pound notes is your most useful tool.",
      "<b>Pay in pounds and avoid street changers.</b> Decline dollar conversion on cards and ATMs, and change money only at banks, ATMs or your hotel, never on the street."
    ], cta: null }
  ],

  cash: {
    rate: 50, cur: "EGP", round: 50, defaultIndex: 1,
    rateNote: "Egypt floated the pound in 2024 and it lost a lot of value, so it now sits far weaker than it once did: as a rough mid-2026 guide, about 50 pounds to 1 US dollar, meaning 100 pounds is roughly $2. Inflation is high and the rate can drift, so check a live converter before and during your trip.",
    styles: [
      { n: "Budget", per: 30, cash: 0.7, room: 40 },
      { n: "Mid-range", per: 75, cash: 0.6, room: 90 },
      { n: "Comfort", per: 180, cash: 0.5, room: 200 }
    ]
  },

  connectivity: {
    works: "Good in Cairo, the Nile cities and the Red Sea resorts, and along the main tourist routes, thinning out in the deep desert. The networks are Orange, Vodafone, Etisalat and WE, with wide 4G and some 5G. You can buy a tourist SIM at the airport or in town with your passport, or use an eSIM (Airalo, Nomad, Ubigi), which is simplest for a short trip. Egypt is not in the EU, so European roaming does not apply. You do not need mobile data to pay for anything; cash covers you either way."
  },

  // HOTEL / RESTAURANT SERVICE + TAX (verified to Jul 2026 knowledge; confirm rates).
  // Egypt has no European-style per-night tourist tax. Instead, hotels and tourist restaurants
  // commonly add a service charge (about 12%) plus taxes (VAT around 14%, sometimes a small
  // municipal levy on top), the "plus plus," to the listed price. This models roughly a 26% add-on
  // for mid and upscale places; budget and local spots often include everything or add no service.
  tax: {
    unit: "percentOfRoom",
    currency: "EGP",
    capNights: null,
    note: "Egypt has no European-style per-night tourist tax. Instead, hotels and tourist restaurants usually add a service charge (about 12%) plus taxes (VAT around 14%, sometimes a small local levy) to the listed price, the so-called plus plus. This estimates roughly a 26% add-on. Some booking-site room rates already include it, and budget or local places often add nothing.",
    regions: [
      { key: "upscale", label: "Hotels and tourist restaurants (service + tax)", pct: 26, note: "Mid and upscale places commonly add about 12% service plus roughly 14% tax to the listed price. Budget and local spots often fold it in or skip the service charge, so treat this as an upper estimate." }
    ]
  },

  currencyHeading: "The Egyptian pound, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "Egypt uses the pound (EGP), written LE or E-pound. As a rough mid-2026 guide at about 50 pounds to 1 US dollar, 50 pounds is roughly $1, 100 pounds about $2, and 500 pounds about $10. The rate can move, so check a live converter before you go." },
    { sym: "smallnotes", k: "Notes and coins", v: "Pound notes run 5, 10, 20, 50, 100 and 200, with newer polymer 10 and 20 pound notes in circulation. There are small coins, but they are low value. Keep plenty of the small notes: 5, 10 and 20 pounds are the workhorses for tipping." },
    { sym: "cash", k: "Cash is king, and tips are constant", v: "Egypt is a cash economy, and tipping (baksheesh) is woven into daily life: a few pounds for the person who helps with a door, a photo, directions or a bag. Carry a thick stack of small notes so you always have something to hand over." },
    { sym: "tag", k: "Watch the plus plus", v: "At hotels and tourist restaurants, the listed price is often not the final one: many add a service charge of about 12% plus tax of around 14%, the plus plus, at the bottom of the bill. Street food and local spots usually just charge the price shown." }
  ],

  taxfree: {
    label: "Taxes, tips and refunds",
    heading: "A service charge on top, tips everywhere, and no easy refund.",
    text: "Egypt has no European-style per-night tourist tax, but two money habits shape your trip. First, at <b>hotels and tourist restaurants</b> the listed price is often not the final one: many add a <b>service charge of about 12% plus tax of around 14%</b> (VAT, sometimes with a small local levy), the so-called plus plus, at the bottom of the bill, so budget above the sticker at mid and upscale places. Street food and local spots usually just charge the marked price. Second, <b>tipping (baksheesh) is everywhere</b>: small amounts for almost any help, so carry a stack of small notes. There is <b>no easy tourist refund</b> on everyday spending, so do not count on claiming tax back. And always <b>pay in pounds</b>, changing money only at banks, ATMs or your hotel, never with a street changer."
  },

  // High-churn entry and tax facts, each tracked on its own with a status, an
  // effective date, a primary source and the date we last checked it. Rendered as
  // a small always-open card after the tax-free section.
  keyFacts: [
    { label: "Egypt tourist visa (30-day, US citizens)", value: "about 25 to 30 dollars single entry, as an e-visa on the official portal or on arrival", status: "enacted", effective: null, source: "https://visa2egypt.gov.eg/", checked: "2026-07-11" }
  ],

  traps: [
    "<b>Do not expect cards to work outside hotels and malls.</b> Markets, taxis, street food, small shops and tips are all cash. Carry plenty of pounds and treat your card as a backup for the biggest bills only.",
    "<b>Watch the plus plus.</b> Hotels and tourist restaurants often add about 12% service plus around 14% tax to the listed price, so a meal or room can land noticeably higher than the number you first saw. Budget and local places usually do not.",
    "<b>Keep small notes for baksheesh.</b> Tipping is constant and expected in small amounts, so a card is no help. A pocket of 5, 10 and 20 pound notes is the single most useful thing to carry.",
    "<b>Pay in pounds and skip the street changers.</b> Decline the US-dollar conversion on cards and ATMs, and change money only at banks, ATMs or your hotel. Street money changers are best avoided."
  ],

  tippingHeading: "Baksheesh: small amounts, and often.",
  tipping: "Tipping in Egypt, called baksheesh, is a genuine part of daily life, so the trick is to carry lots of small notes and give little and often. At restaurants, a service charge of around 12% is frequently already on the bill; if it is, a little extra for good service is enough, and if it is not, around 10% is normal. Beyond meals, small tips smooth almost everything: a few pounds for a porter, a helpful doorman, someone who gives directions or watches your shoes, a driver, or a guide (guides and Nile cruise crews are tipped more generously, often at the end). Have 5, 10 and 20 pound notes ready, since you will reach for them many times a day, and a card is no substitute.",
  sources: {
    changed: "Re-checked July 2026. Egypt's standard VAT is 14%, and tourist hotels and restaurants usually add a service charge of about 12% on top, both confirmed still current. There is no European-style per-night tourist tax.",
    links: [
      { label: "PwC Worldwide Tax Summaries: Egypt's standard VAT rate of 14%", url: "https://taxsummaries.pwc.com/egypt/individual/other-taxes", type: "revenue" },
      { label: "My Egypt Travel: the tourist police number (126), who are more likely to speak English", url: "https://www.myegypttravel.com/faqs/how-do-i-contact-tourist-police/", type: "police" },
    ],
    judgment: "The 12% service charge and the mix of VAT and small local levies vary by establishment, so the figure here is a typical add-on rather than a fixed rate. The daily cash share, tipping norms and likely ATM behavior are our own estimate from experience, not an official figure.",
  },

  faqs: [
    { q: "Do I need cash in Egypt?", a: "Yes, cash is essential. Cards work at hotels, malls and upscale restaurants, but markets, taxis, street food, small shops and the constant tips all run on Egyptian pounds. Bring a no-foreign-fee debit card as your main tool, pull pounds from bank ATMs, and always keep small notes for baksheesh." },
    { q: "Should I pay in Egyptian pounds or US dollars?", a: "Pounds for daily life. If a card terminal or ATM offers to charge you in US dollars, decline; that conversion adds roughly 3 to 8%. A few small, clean dollar or euro notes can be handy for tipping guides or on a Nile cruise, but change money only at banks, ATMs or your hotel, never on the street." },
    { q: "How much should I tip in Egypt?", a: "Often and in small amounts. At restaurants, check for a service charge (about 12%) already on the bill; if it is there, a little extra is enough, and if not, around 10% is normal. Beyond that, a few pounds smooths almost any help, and guides and cruise crews are tipped more generously. Carry lots of 5, 10 and 20 pound notes." },
    { q: "Why is my hotel or restaurant bill higher than the listed price?", a: "The plus plus. Hotels and tourist restaurants often add a service charge of about 12% plus tax of around 14% to the price shown, so the total lands higher. Street food and local spots usually just charge the marked price, and some booking-site room rates already include the extras." },
    { q: "What is the best ATM to use in Egypt?", a: "A bank ATM, such as National Bank of Egypt, Banque Misr, CIB or QNB. Read the fee, take a good amount while a machine is working since some run out of cash, and always decline the US-dollar conversion. Avoid street money changers entirely." },
    { q: "Is Egypt cheap for US travelers right now?", a: "Yes, relatively. The pound lost a lot of value after Egypt floated it in 2024, so for visitors changing dollars, meals, taxis and many services are inexpensive. Prices in pounds can still climb with inflation, so check a live converter, but your dollar generally stretches a long way." }
  ],

  culture: {
    heading: "A little Arabic goes a long way",
    intro: "A few words and a couple of stories that turn you from a tourist into a guest. A little warmth and curiosity carry a long way in Egypt, in a shop, a cafe, wherever you land.",
    phrases: [
      { mean: "Hello", say: "AH-lan", word: "Ahlan", native: "أهلاً" },
      { mean: "Please", say: "min FAD-lak", word: "Min fadlak", native: "من فضلك" },
      { mean: "Thank you", say: "SHOK-ran", word: "Shukran", native: "شكراً" },
      { mean: "Cheers", say: "fee SAH-heh-tak", word: "Fi sahetak", native: "في صحتك" },
      { mean: "Delicious", say: "la-ZEEZ", word: "Lazeez", native: "لذيذ" },
      { mean: "Beautiful!", say: "ga-MEEL", word: "Gameel", native: "جميل" },
    ],
    tip: "the warm greeting is <b>As-salamu alaykum</b> (as-sah-LAM-u ah-LAY-kum), peace be upon you. The reply is wa alaykum as-salam, and Egyptians love hearing a visitor try it.",
    stories: [
      { img: "/egypt-culture-1.jpg",
        alt: "WPA-style illustration of the Great Sphinx and the pyramids of Giza at golden hour with a small camel caravan crossing the sand",
        h: "Older than you can imagine",
        p: "The pyramids and the Sphinx at Giza are around 4,500 years old, so ancient that Cleopatra lived closer in time to us than to their building. Show awe for that depth of history and Egyptians warm to you at once.",
        note: "Good to know: the pyramids long predate Cleopatra" },
      { img: "/egypt-culture-2.jpg",
        alt: "WPA-style illustration of the golden funerary mask of the boy pharaoh Tutankhamun glowing in warm torchlight",
        h: "The boy king",
        p: "Tutankhamun became pharaoh as a child and died young, all but forgotten, until Howard Carter opened his tomb in 1922 and found its treasures intact. His golden mask is Egypt's most beloved icon.",
        note: "Good to know: his tomb was found nearly intact in 1922" },
      { img: "/egypt-culture-3.jpg",
        alt: "WPA-style illustration of an ancient Egyptian scribe writing hieroglyphs on papyrus before a carved and painted wall",
        h: "Where writing began",
        p: "Egypt is one of the birthplaces of writing, its walls covered in hieroglyphs that stayed a mystery until the Rosetta Stone unlocked them. A little curiosity about the script goes a long way.",
        note: "Good to know: the Rosetta Stone was the key to hieroglyphs" },
    ],
    pride: "Egypt carries one of the longest continuous civilizations on earth, thousands of years of it. Treating that history with wonder, not just a quick photo, earns real warmth."
  },

  spokes: [
    {
      slug: "taxis-and-apps",
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Uber or Careem in Egypt? The Cairo airport taxi trap, explained (2026) | True Trip Costs",
      description: "Which ride app to install for Egypt (Uber and Careem both work, with inDrive as a budget backup), why the old street cabs say the meter is broken, and how to leave Cairo airport without the flat-rate rip. Checked July 2026.",
      h1: "Uber or Careem in Egypt, and the Cairo airport taxi trap",
      lede: "Egypt is one of the places where an app quietly solves the problem. Here is which one to install, why the old street cabs are best skipped, and how to get out of Cairo airport without the invented fees.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Install <b>Uber</b> or <b>Careem</b> before you travel. Both are fully active in Egypt, Uber actually owns Careem, and either one shows a fixed price up front so there is no meter and no haggling. They work well in <b>Cairo</b>, <b>Giza</b>, <b>Alexandria</b> and the Red Sea resorts. <b>inDrive</b>, where you name your own price, is a common budget backup. The old black-and-white street taxis have no working meter and are the source of most fare arguments, so an app is the calm choice. At <b>Cairo airport</b>, ignore the drivers who approach you in the hall and book your own ride to the pickup point.",
      sections: [
        {
          h: "Which app to install, and where it works",
          p: [
            "Egypt is genuinely an app country. <b>Uber</b> and <b>Careem</b> both operate here, and although Uber owns Careem they run as two separate apps, so having both gives you a fallback when one is short on cars. Each shows the fare before you accept, which removes the entire meter argument that dogs the street cabs. Careem also lets you order a licensed metered cab through its <b>White Taxi</b> option inside the app if you would rather ride in a traditional taxi with the price still tracked.",
            "Coverage is strong in <b>Cairo</b>, <b>Giza</b>, <b>Alexandria</b> and the Red Sea resort areas like Hurghada and Sharm el-Sheikh. It is thinner in <b>Luxor</b> and <b>Aswan</b>, where you may find few or no app cars, so there you either agree a fixed fare with a driver before setting off or hire a car and driver for the day through your hotel. <b>inDrive</b>, where you propose a price and drivers accept or counter, is popular as a cheaper option and works in the bigger cities too."
          ]
        },
        {
          h: "The old street cabs and the broken-meter line",
          p: [
            "You will still see the old <b>black-and-white</b> taxis, especially in Cairo. Most have no working meter, and the fare is whatever you can negotiate, which for a visitor usually means paying well over the going rate. The newer <b>white</b> Cairo taxis do have meters, but a common move is to claim the meter is broken and name a flat price instead. Neither is a disaster if you agree the fare clearly before you get in, but the simpler path is to open an app and skip the negotiation.",
            "A few small tricks show up around tourists: a helper who grabs your bag and then expects a tip, a driver who is suddenly short of change, or a claim that your destination is closed and he knows somewhere better. None of these are dangerous, but they are easier to avoid than to argue about. Booking on an app, paying the fare shown, and keeping your bag with you removes most of them at once."
          ]
        },
        {
          h: "Getting out of Cairo airport",
          p: [
            "Cairo International is the sharpest moment. Inside and just outside arrivals, drivers and fixers will approach you offering a taxi, quoting a high flat rate, and sometimes inventing an <b>airport entrance fee</b> or a luggage charge. Politely decline and keep walking. The clean option is to open <b>Uber</b> or <b>Careem</b>, request a car, and follow the app to the marked ride-hailing pickup area rather than taking the first car pressed on you at the door.",
            "If you would rather use a traditional cab, use Careem's <b>White Taxi</b> option or agree a firm total with the driver before you load your bags, and do not pay any extra fee that appears only after you are moving. For getting around the city once you are settled, the <b>Cairo Metro</b> is very cheap and has women-only cars near the middle of each train, which many solo female travelers prefer at busy times."
          ]
        },
        {
          h: "Fares, paying and baksheesh",
          p: [
            "In Uber and Careem you can pay in cash or, in many cases, by card, and cash is still widely used, so carry small Egyptian pound notes. If you take a street taxi, settle the number before the trip and have close to the right change ready, because rounding disputes are common. Fares are low by US standards for short city hops, which is part of why the invented extras stand out.",
            "Tipping, or <b>baksheesh</b>, is woven into daily life in Egypt, and rounding a taxi fare up is normal and appreciated, though not required on an app ride where the price is set. For the wider money picture, including how much cash to carry and where cards are accepted, see the <a href=\"/egypt\">Egypt money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Does Uber work in Egypt?", a: "Yes. Uber operates across Egypt and also owns Careem, which runs as a separate app. A 2018 court order that briefly threatened to suspend them was overturned, and both are fully active today in Cairo, Giza, Alexandria and the Red Sea resorts. Either shows a fixed price before you ride, which is why an app beats hailing an old street cab." },
        { q: "Uber or Careem in Egypt, which should I use?", a: "Both are fine and cover the same major cities, so many travelers install both and use whichever has a car nearby. Careem has a useful White Taxi option that books a licensed metered cab through the app. inDrive, where you name your own fare, is a common cheaper alternative. In Luxor and Aswan app coverage is thin, so agree a fare first or hire a driver for the day." },
        { q: "Is the taxi from Cairo airport a rip-off?", a: "The touts in the arrivals hall usually are. They quote a high flat rate and sometimes invent an airport entrance fee or a luggage charge. Ignore anyone who approaches you, and instead book Uber or Careem and walk to the marked ride-hailing pickup point. If you want a traditional cab, use Careem's White Taxi or agree a firm total before you load your bags." },
        { q: "Do taxis use the meter in Egypt?", a: "The old black-and-white taxis generally have no working meter, so the fare is negotiated, which tends to favor the driver. Newer white Cairo taxis have meters, but drivers often claim they are broken and quote a flat price. To avoid the whole issue, use Uber or Careem, where the fare is fixed in the app before you get in." }
      ],
      sources: {
        links: [
          { label: "Uber: confirming Uber operates in Egypt, with cities served and how fares are shown before the ride", url: "https://www.uber.com/eg/en/", type: "app" },
          { label: "Careem: the Uber-owned ride app widely used in Egypt, including its in-app White Taxi option", url: "https://www.careem.com", type: "app" },
          { label: "US Department of State: Egypt country information, general safety and local-travel context for US visitors", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Egypt.html", type: "gov" }
        ],
        judgment: "App coverage is strong in the big cities and Red Sea resorts but thin in Luxor and Aswan, and fares move with fuel prices, so treat this as a recent read and check the price in your own app. Ride-hailing rules have changed before in Egypt, so confirm both apps are active when you travel. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      live: true,
      topic: "tipping",
      title: "Tipping in Egypt: how baksheesh works and how much to give (2026) | True Trip Costs",
      description: "How tipping (baksheesh) works in Egypt for US travelers in 2026: why you tip often and in small amounts, what to give at restaurants, to guides, on a Nile cruise and for everyday help, and why small pound notes are essential. Checked July 2026.",
      h1: "Tipping in Egypt",
      lede: "Tipping in Egypt, called baksheesh, is not an extra: it is woven into daily life. The trick is to carry lots of small notes and give little and often. Here is how much, when, and in what currency.",
      checked: "Jul 2026",
      checkedISO: "2026-07-20",
      answer: "Tipping in Egypt is <b>constant and expected</b>, in small amounts, for almost any help. At restaurants, a <b>service charge of around 12%</b> is frequently already on the bill; if it is, a <b>little extra for good service</b> is enough, and if it is not, around <b>10%</b> is normal. Beyond meals, small tips smooth almost everything: a few pounds for a <b>porter, a doorman, someone who gives directions or watches your shoes</b>. <b>Guides and Nile cruise crews</b> are tipped more generously, often at the end. Always tip in <b>cash, in Egyptian pounds</b>, and have <b>5, 10 and 20 pound notes</b> ready, since you will reach for them many times a day.",
      sections: [
        {
          h: "How much to tip, by situation",
          p: [
            "At <b>restaurants</b>, check the bill first. Many add a <b>service charge of about 12%</b>; if it is there, a small extra for good service is enough. If it is not, <b>around 10%</b> is normal. Street food and takeaway do not expect tips.",
            "<b>Guides</b> are tipped more generously. For a day tour, roughly <b>100 to 200 EGP per person</b> for the guide and <b>50 to 100 EGP</b> for the driver is a common range. <b>Nile cruise crews</b> receive a pooled tip at the end, often <b>200 to 400 EGP per person</b> for a multi-day cruise, handed to the purser or placed in a communal envelope.",
            "For everyday help, a <b>porter, a doorman, a bathroom attendant, someone who gives directions</b>, or anyone who opens a tomb or unlocks a viewing platform, a few <b>5 to 20 pound notes</b> is the norm. Hotel housekeeping appreciates <b>20 to 50 EGP per day</b>. For taxis, <b>rounding up</b> is fine."
          ]
        },
        {
          h: "Why small notes matter so much",
          p: [
            "Baksheesh runs on <b>small denominations</b>. You will tip many times a day, and nobody can break a 200 pound note at a tomb entrance. Keep a <b>thick pocket of 5, 10 and 20 pound notes</b> separate from your main cash, so you can reach for one without pulling out a large wad.",
            "ATMs often dispense 100 and 200 pound notes, so <b>break bills early</b>: buy a water or a snack at a shop and ask for small change, or request smaller notes at your hotel front desk."
          ]
        },
        {
          h: "Cash and currency for tips",
          p: [
            "Always tip in <b>cash</b>. A card is no substitute for baksheesh, and many of the people you tip do not have a way to process one. Tip in <b>Egyptian pounds</b> for everyday situations.",
            "A few small, clean <b>US dollar or euro notes</b> can be handy for tipping guides or on a Nile cruise, where staff sometimes prefer hard currency, but pounds are the default and work everywhere."
          ]
        }
      ],
      faqs: [
        { q: "How much should I tip in Egypt?", a: "Often and in small amounts. At restaurants, check for a service charge (about 12%) already on the bill; if it is there, a little extra is enough, and if not, around 10% is normal. Beyond meals, a few pounds smooths almost any help, and guides and cruise crews are tipped more generously. Carry lots of 5, 10 and 20 pound notes." },
        { q: "What is baksheesh in Egypt?", a: "Baksheesh is the local word for a small tip or gratuity, and it is woven into daily life. You give a few pounds for almost any small service: a porter carrying bags, a guard unlocking a viewing platform, someone giving directions, or a bathroom attendant. It is expected and normal, not a scam." },
        { q: "Do I tip in dollars or Egyptian pounds in Egypt?", a: "Pounds for everyday tipping. Keep a stack of 5, 10 and 20 pound notes for daily use. A few small, clean US dollar or euro notes can be handy for guides or on a Nile cruise, but pounds work everywhere and are easier for most people to use." },
        { q: "How much do you tip a guide in Egypt?", a: "For a day tour, roughly 100 to 200 Egyptian pounds per person for the guide and 50 to 100 for the driver is a common range. For a multi-day Nile cruise, a pooled tip of 200 to 400 pounds per person for the crew, handed to the purser at the end, is typical." }
      ],
      sources: {
        links: [
          { label: "US State Department: Egypt country information and local customs", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Egypt.html", type: "gov" }
        ],
        judgment: "Tipping norms in Egypt are cultural, not legislated rates, so the amounts here are our own read from recent traveler reports and local guidance, not a single official table. The 12% restaurant service charge is a common practice but not universal, and how much extra to leave is a judgment call. Checked July 2026."
      }
    }
  ]
};
