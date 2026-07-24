export default {
  slug: "hong-kong",
  iso2: "hk",
  live: true,
  name: "Hong Kong",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-15",
  sources: {
    changed: "First publication. Confirmed the money facts that matter most this year: the Hong Kong dollar is pegged near 7.8 to the US dollar within a 7.75 to 7.85 band, Hong Kong is a free port with no GST or VAT so there is nothing to reclaim, and the 3% Hotel Accommodation Tax on the room charge has been back in effect since 1 January 2025. Also confirmed the entry facts for US visitors: visa-free for up to 90 days with a passport valid at least one month beyond the stay, and no arrival card since 16 October 2024.",
    links: [
      { label: "Inland Revenue Department: the 3% Hotel Accommodation Tax on the room charge, in effect since 1 January 2025, and its exemptions", url: "https://www.ird.gov.hk/eng/tax/hat.htm", type: "revenue" },
      { label: "Immigration Department: visit and transit entry, the visa-free periods, adequate-funds and onward-ticket requirements", url: "https://www.immd.gov.hk/eng/services/visas/visit-transit/visit-visa-entry-permit.html", type: "gov" },
      { label: "US Consulate General Hong Kong and Macau: US citizens visit visa-free for up to 90 days with a passport valid at least one month beyond the stay", url: "https://hk.usconsulate.gov/visas-for-china-and-elsewhere/", type: "gov" },
      { label: "Hong Kong Tourism Board: general visitor essentials, transport and getting around", url: "https://www.discoverhongkong.com/", type: "tourism" },
    ],
    judgment: "The daily cash share, the tipping feel, and which taxis and stalls will want cash are our own estimate from experience and from consistent traveler reports, not an official figure. Card acceptance varies venue by venue, so treat our read as a guide, not a guarantee.",
  },
  emergency: { medical: "999", note: "999 reaches police, fire and ambulance across Hong Kong. The 911 number does not work here, though 112 dialled from a mobile is routed through to 999 as a backup. Hospital emergency care is excellent, but visitors pay in full without insurance, so travel cover is worth having.", checked: "Jul 2026", checkedISO: "2026-07-15" },
  insuranceLevel: "medium",
  region: "Asia",
  signals: { cardFriendliness: 4, cashNeed: 2, taxRisk: 1 },
  hook: "One of the easiest places anywhere to pay by card or phone, with a little cash kept back for taxis, red minibuses and the market stalls, an Octopus card for everything that moves, and Hong Kong dollars chosen over US dollars every time.",
  aliases: ["hong kong", "hongkong", "hk", "kowloon", "tsim sha tsui", "central", "mong kok", "hkd", "hk$", "hong kong dollar", "octopus", "octopus card", "mtr", "star ferry", "ding ding", "tram", "victoria harbour", "the peak", "dim sum", "yum cha", "man mo", "cha chaan teng"],

  title: "Money in Hong Kong (2026): Cards, Cash, Octopus, ATMs, Taxes and Tipping | True Trip Costs",
  description: "How to handle money in Hong Kong as a US traveler in 2026: near-universal cards and mobile pay, the cash you still want for taxis and markets, the Octopus card that runs the MTR, trams and Star Ferry, 24-hour ATMs, the dollar-conversion trap, the free-port no-VAT rule and the 3% hotel tax, and how tipping works. Checked July 2026.",

  h1: "Money in Hong Kong, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your card covers almost everything, the cash worth keeping for taxis and markets, the Octopus card that runs the MTR, trams and the Star Ferry, and the two taxes to know in a city with no sales tax.",
  hero: {
    img: "/hong-kong-hero.jpg",
    h: 1375,
    alt: "Victoria Harbour at dusk with the lit Hong Kong Island skyline and the Peak behind, a red-and-white Star Ferry crossing the calm water and warm light reflecting on the surface, a lone figure standing at the promenade railing looking across, and in the foreground a round table with a cup of milk tea, two egg tarts and a pineapple bun"
  },

  recentChange: {
    date: "Jul 2026",
    text: "One lodging cost is new since your last trip. On 1 January 2025 Hong Kong brought back its 3% Hotel Accommodation Tax on the room charge, after 17 years at zero. It is usually already in your hotel bill, though a few hotels collect it at check-in. Otherwise Hong Kong stays a free port with no sales tax, and the old paper arrival card was scrapped in October 2024, so there is no form to fill on the way in."
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Hong Kong is <b>about as card-friendly as travel gets</b>. Your <b>Visa, Mastercard or Amex</b> works at hotels, shops, restaurants and chains, alongside <b>Octopus</b>, Apple Pay, Google Pay, Alipay and WeChat Pay. Keep a little <b>cash</b> for the gaps: <b>taxis</b>, red minibuses, the <b>street and wet markets</b> (Temple Street, the Ladies' Market), and the <b>cha chaan tengs</b> and dai pai dong. For getting around, an <b>Octopus card</b> runs the MTR, buses, trams and the Star Ferry, and Apple Wallet supports it here. ATMs are <b>everywhere and open around the clock</b> with English menus, and you should <b>decline any offer to charge you in US dollars</b>. On tax, Hong Kong is a <b>free port</b>: there is no GST or VAT on the price you see, and nothing to reclaim. The one cost to know is a <b>3% Hotel Accommodation Tax</b> on your room, back since January 2025 and usually already in the bill. Tipping is light: a <b>10% service charge</b> is often already added at restaurants, so beyond that just round up.",

  meter: {
    heading: "About as cashless as travel gets, with cash for taxis and markets.",
    cashPct: 18,
    note: "A rough feel for everyday spending. Cards, phones and Octopus cover almost everything, from hotels and restaurants to shops, the MTR and the trams. Cash is a smaller share, for taxis, red minibuses, wet and street markets, and the cha chaan tengs and dai pai dong, and you rarely need much of it."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works nearly everywhere", p: "Visa, Mastercard and Amex are taken at hotels, shops, restaurants and chains, alongside Octopus, Apple Pay, Google Pay, Alipay and WeChat Pay. You can go most of a day without cash in the malls and big districts, tapping card or phone for almost everything.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "For taxis and markets", p: "Keep some <b>Hong Kong dollars</b> for taxis, red minibuses, the street and wet markets (Temple Street, the Ladies' Market), and the cha chaan tengs and dai pai dong. Note that merchants may refuse the big <b>HK$500 and HK$1,000</b> notes for a small purchase, so keep smaller ones.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Everywhere, 24 hours", p: "Machines are on nearly every block, open around the clock, with English menus and a fee around <b>HK$20</b>. As always, <b>choose Hong Kong dollars, not US dollars</b>, if the screen offers to convert, and pull from a bank ATM rather than an airport exchange counter.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b>; Amex is also widely taken. A backup card from a second bank never hurts.",
      "There is <b>no arrival card</b> to fill out; Hong Kong scrapped it in October 2024 and uses airline passenger data instead.",
      "Check your <b>passport is valid at least one month</b> beyond your stay, and have a return or onward ticket and enough funds for the trip.",
      "Budget for the <b>3% hotel tax</b> on your room; it is usually in the bill, but a few hotels collect it at check-in."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters. Pull <b>Hong Kong dollars</b> from an ATM in the arrivals hall, and <b>decline 'convert to US dollars,'</b> always choose Hong Kong dollars.",
      "Grab about <b>HK$500 to 800</b> for taxis, minibuses and market stalls in your first day or two.",
      "Buy an <b>Octopus card</b> (HK$50 refundable deposit plus load), or add Octopus to Apple Wallet. It runs the MTR, buses, trams and the Star Ferry.",
      "Set up an <b>eSIM</b> before you land; unlike mainland China, a Hong Kong tourist SIM needs no registration."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card, phone or Octopus</b> for almost everything, and choose Hong Kong dollars every time.",
      "<b>Tap Octopus</b> on the MTR, buses, trams and the Star Ferry, and top it up by cash or app.",
      "Keep a little <b>cash</b> for taxis, red minibuses, wet and street markets, and the cha chaan tengs.",
      "Break the big <b>HK$500 and HK$1,000</b> notes at a shop or chain, since small vendors and taxis may refuse them."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in Hong Kong dollars, never US dollars.</b> Dynamic currency conversion on a terminal or ATM quietly adds a few percent.",
      "<b>Tip lightly.</b> A 10% service charge is often already on a restaurant bill; beyond that, just round up a taxi or leave small change."
    ], cta: null }
  ],

  cash: {
    rate: 7.8, cur: "HKD", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 7.8 Hong Kong dollars to the US dollar, a currency pegged in a narrow 7.75 to 7.85 band, so the rate barely moves. Hong Kong is deeply card-first, so this is the small, cash-in-hand slice of your spending.",
    styles: [
      { n: "Budget", per: 70, cash: 0.25, room: 90 },
      { n: "Mid-range", per: 130, cash: 0.18, room: 170 },
      { n: "Comfort", per: 240, cash: 0.12, room: 330 }
    ]
  },

  connectivity: {
    works: "Among the best anywhere, including inside the MTR tunnels. Hong Kong has fast 4G and wide 5G across the territory. Tourist SIMs need no registration, unlike mainland China, and for most visitors an eSIM from Airalo, Nomad or a similar provider is the easiest route. Your US plan may include some roaming, so check the rate before you rely on it. You do not need mobile data to pay by card, but you will want it for maps and getting around."
  },

  tax: {
    none: true,
    currency: "HKD",
    note: "Hong Kong is a free port with no GST or VAT, so there is no sales tax on the price you see and nothing to reclaim at the airport. The one lodging cost to know is a 3% Hotel Accommodation Tax on the room charge, reinstated on 1 January 2025 (see below); it is usually already in your hotel bill."
  },

  currencyHeading: "The Hong Kong dollar, in plain terms.",
  facts: [
    { sym: "hkd", k: "Quick conversion", v: "Hong Kong uses the Hong Kong dollar, written HK$, pegged near 7.8 to the US dollar, so HK$100 is roughly 12.80. Notes run 10, 20, 50, 100, 500 and 1,000 from three different banks, so designs vary, and coins go up to 10 dollars. There is no sales tax on the price you see." },
    { sym: "card", k: "Very card-friendly", v: "Visa, Mastercard and Amex work almost everywhere, alongside Octopus, Apple Pay, Google Pay, Alipay and WeChat Pay. Cash is a smaller backup, mainly for taxis, red minibuses, market stalls and small eateries, so you rarely need much of it." },
    { sym: "ic", k: "Octopus runs transit", v: "An Octopus card is the stored-value key to the MTR, buses, trams, the Star Ferry and minibuses, and it pays at 7-Eleven and supermarkets too. The deposit is HK$50 and refundable, you top up by cash or app, and Apple Wallet supports Octopus in Hong Kong." },
    { sym: "tip", k: "Service charge, light tipping", v: "Tipping is modest here. Restaurants usually add a 10% service charge already, so beyond that just round up a taxi or leave small change, HK$10 to 20. Nothing more is expected." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "A free port with no sales tax, plus one hotel tax.",
    text: "Hong Kong is a <b>free port</b>: there is <b>no GST or VAT</b> on the price you see, so prices are tax-free and there is <b>nothing to reclaim</b> at the airport. The one lodging cost to know is a <b>3% Hotel Accommodation Tax</b> on the room charge, <b>reinstated on 1 January 2025</b> after 17 years at zero. It is usually already in your hotel bill, though some hotels collect it at check-in. A few cases are exempt, including <b>guesthouses with fewer than 10 rooms</b>, lodging run for non-profit purposes, and stays of <b>28 or more consecutive nights</b>. Because there is no VAT to begin with, there is no shopper's refund scheme like the ones in Taiwan or Europe."
  },

  keyFacts: [
    { label: "Hotel Accommodation Tax", value: "3% on the room charge, usually shown in the hotel bill; exemptions include stays of 28 or more consecutive nights and guesthouses with fewer than 10 rooms", status: "enacted", effective: "2025-01-01", source: "https://www.ird.gov.hk/eng/tax/hat.htm", checked: "2026-07-15" }
  ],

  traps: [
    "<b>'Pay in US dollars?' Always say no.</b> Terminals and ATMs may offer to charge you in dollars (dynamic currency conversion), which quietly adds a few percent. Choose Hong Kong dollars every time.",
    "<b>Big notes get refused.</b> Small vendors and taxis may not take the HK$500 or HK$1,000 note for a small purchase, so break them at a shop or chain and keep smaller notes handy.",
    "<b>Taxis and minibuses want cash.</b> Many taxis and the red minibuses are cash-first, as are the wet and street markets and the cha chaan tengs, so keep some Hong Kong dollars on you.",
    "<b>The 3% hotel tax may land at check-in.</b> It is usually in your room bill, but some hotels collect the 3% Hotel Accommodation Tax separately when you arrive, so read the folio.",
    "<b>The Macau pataca is not Hong Kong money.</b> The pataca trades near 1 to 1 with the Hong Kong dollar and Macau takes Hong Kong dollars, but Hong Kong shops do not take patacas, so spend or change them before you cross back.",
    "<b>The Octopus deposit is refundable.</b> The HK$50 is a deposit, not a fee, and you can get it and any balance back when you leave, so do not treat it as money spent."
  ],

  tippingHeading: "Tip lightly, if at all.",
  tipping: "Hong Kong tips modestly, and nobody will chase you for more. At most <b>restaurants a 10% service charge is already added</b> to the bill, so you do not need to add anything; if you like, round up or leave the small change. For <b>taxis</b>, rounding up to the next dollar or two is plenty, and a <b>hotel porter or housekeeping</b> might get <b>HK$10 to 20</b>. There is no expectation of the percentage tipping you may be used to at home, so pay the bill, round up if you wish, and that is that. The main thing to check is simply whether that 10% service charge is already on the bill before you add to it.",

  faqs: [
    { q: "Do I need cash in Hong Kong?", a: "Not much. Cards, phones and Octopus cover almost everything, from hotels and restaurants to the MTR and trams. Keep some Hong Kong dollars for taxis, red minibuses, wet and street markets and the cha chaan tengs, and pull it from a 24-hour ATM as needed." },
    { q: "What is an Octopus card and do I need one?", a: "Octopus is a stored-value card that runs the MTR, buses, trams, the Star Ferry and minibuses, and it pays at 7-Eleven and supermarkets. The HK$50 deposit is refundable, you top up by cash or app, and Apple Wallet supports Octopus in Hong Kong, so many visitors add it to their phone rather than carry the plastic." },
    { q: "Should I pay in Hong Kong dollars or US dollars?", a: "Always Hong Kong dollars. If a card terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion adds a few percent. Choosing the local currency lets your card's network handle the exchange at a fair rate." },
    { q: "Is there a sales tax or VAT in Hong Kong?", a: "No. Hong Kong is a free port with no GST or VAT, so the price you see is what you pay and there is nothing to reclaim at the airport. The only visitor-facing tax is the 3% Hotel Accommodation Tax on hotel rooms." },
    { q: "What is the Hong Kong hotel tax?", a: "A 3% Hotel Accommodation Tax on the room charge, back in effect since 1 January 2025 after 17 years at zero. It is usually already in your hotel bill, though some hotels collect it at check-in. Stays of 28 or more consecutive nights and guesthouses with fewer than 10 rooms are exempt." },
    { q: "Do I need a visa or an arrival card for Hong Kong?", a: "US citizens visit visa-free for up to 90 days, with a passport valid at least one month beyond the stay and a return or onward ticket. There is no arrival card; Hong Kong scrapped it on 16 October 2024 and now uses airline advance passenger information, with e-Channel gates available to eligible visitors." },
    { q: "Do you tip in Hong Kong?", a: "Lightly. Most restaurants already add a 10% service charge, so beyond that just round up or leave small change. A taxi gets rounded to the next dollar or two, and a hotel porter HK$10 to 20. There is no expectation of percentage tipping." },
    { q: "How much cash should I bring for a week in Hong Kong?", a: "Not much on top of card and Octopus spending. A few hundred Hong Kong dollars for taxis, minibuses and markets, refreshed from a 24-hour ATM as needed, is plenty. Keep smaller notes, since vendors and taxis may not break a HK$500 or HK$1,000 note." }
  ],
  culture: {
    heading: "A little Cantonese goes a long way",
    intro: "Nobody expects you to speak Cantonese, but a warm nei hou, an m goi, and a story or two mark you as a guest rather than a tourist. Hong Kong is fast and cosmopolitan, and English is widely understood, so a few local words are a friendly bonus rather than a necessity.",
    phrases: [
      { mean: "Hello", say: "nay-HO", word: "Nei hou", native: "你好" },
      { mean: "Thank you (for help)", say: "mm-GOY", word: "M goi", native: "唔該" },
      { mean: "Thank you (for a gift)", say: "daw-JEH", word: "Do je", native: "多謝" },
      { mean: "How much?", say: "GAY-daw chin", word: "Gei do chin", native: "幾多錢" },
      { mean: "Delicious", say: "HO-sik", word: "Hou sik", native: "好食" },
      { mean: "Cheers", say: "yam-BUI", word: "Yam bui", native: "飲杯" },
    ],
    tip: "In Hong Kong, <b>m goi</b> (mm-GOY) is the everyday magic word: it means both 'thank you' and 'excuse me,' and it is how you call a waiter, thank a driver or squeeze past on the MTR. At the street markets, friendly haggling is expected, so it is fine to ask for a better price with a smile, then meet somewhere in the middle.",
    stories: [
      { img: "/hong-kong-culture-1.jpg",
        alt: "WPA-style illustration of a yum cha scene, a tall tower of bamboo steamers, tea being poured from a red pot into a cup, and a round table with dumplings and glossy char siu bao",
        h: "Yum cha and the dim sum trolley",
        p: "A Hong Kong morning means yum cha, drinking tea over dim sum, where bamboo steamers of har gow, siu mai and char siu bao arrive at a round table. Pour tea for others before yourself, and tap two fingers on the table to say thank you without breaking the conversation, a small gesture locals will notice and appreciate.",
        note: "Say it: tap two fingers to thank someone pouring your tea" },
      { img: "/hong-kong-culture-2.jpg",
        alt: "WPA-style illustration of a red double-decker ding-ding tram climbing a steep Hong Kong Island street lined with market stalls, under a night sky",
        h: "The ding-ding tram",
        p: "Hong Kong Island's century-old double-decker trams, nicknamed ding-ding for their bell, rattle along the north shore for a couple of Hong Kong dollars, tapped with Octopus. Climb to the upper deck for a slow, front-row view of the city, one of the best-value rides anywhere and a fine way to get your bearings.",
        note: "Good to know: sit up top at the front for the view" },
      { img: "/hong-kong-culture-3.jpg",
        alt: "WPA-style illustration of a temple interior with large hanging spiral incense coils, tall red pillars, an altar with two candle flames and smoky air, and a single worshipper kneeling",
        h: "Incense coils at Man Mo Temple",
        p: "Tucked among the towers, old temples like Man Mo hang giant spiral incense coils from the ceiling that smoulder for days, filling the red-pillared hall with fragrant smoke. Step in quietly, and you get a moment of calm and old Hong Kong right in the middle of the modern city.",
        note: "Good to know: dress modestly and keep your voice low inside" },
    ],
    pride: "Hong Kong is fast, dense and proud of its mix of East and West, from dim sum and old temples to trams, harbour views and a skyline like nowhere else. A few words of Cantonese and a little market banter are noticed and warmly returned."
  },

  spokes: [
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Light, service often included" },
        { k: "Restaurants", v: "A 10% service charge is common" },
        { k: "On top", v: "Round up, or leave the small change" },
        { k: "Taxis", v: "No tip, or round up" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Hong Kong: light, and what you actually owe (2026) | True Trip Costs",
      description: "How tipping works in Hong Kong for US travelers in 2026: why it is light, the 10% service charge at restaurants, and what to leave at casual spots and in taxis. Checked July 2026.",
      h1: "Tipping in Hong Kong",
      lede: "Hong Kong has a light tipping culture. Most sit-down restaurants add a 10% service charge, so a tip is largely built in, and casual spots and taxis expect little or nothing. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Hong Kong has a <b>light tipping culture</b>. Most <b>sit-down restaurants add a 10% service charge</b> to the bill, so a tip is <b>largely built in</b>; if you were pleased, people often <b>round up</b> or leave the <b>small change</b> on top, but it is not required. At <b>casual places, cha chaan teng, dai pai dong and cafes</b>, no tip is expected. For <b>taxis</b>, drivers usually just <b>round up to the nearest dollar</b> or keep small change. Leave anything extra in <b>cash</b> (HK dollars).",
      sections: [
        {
          h: "Light tipping, mostly built in",
          icon: "notip",
          key: { fig: "Light", tag: "Not a big tipping culture", text: "Tipping is light in Hong Kong. Casual spots and taxis expect little or nothing, and a service charge covers most sit-down meals.", tone: "teal" },
          p: [
            "Hong Kong is <b>not a big tipping culture</b>. Staff earn a wage, and at <b>casual places, cha chaan teng (tea cafes), dai pai dong (open-air food stalls) and coffee shops</b>, <b>no tip is expected</b>.",
            "At <b>sit-down restaurants</b>, a <b>service charge</b> usually does the work (see below), so you rarely need to think in percentages the way you would at home."
          ]
        },
        {
          h: "The 10% service charge",
          icon: "receipt",
          key: { fig: "10%", tag: "Usually already added", text: "Most sit-down restaurants add a 10% service charge. That covers the tip, so you need not add more, though people often round up.", tone: "teal" },
          p: [
            "Most <b>sit-down restaurants</b> add a <b>10% service charge</b> to the bill. That <b>stands in for a tip</b>, so you do <b>not need to add more</b>. If you were especially pleased, it is common to <b>round up</b> or leave the <b>small change</b> or a few coins on top, but it is optional.",
            "If a place does <b>not</b> add a service charge, leaving the <b>small change</b> or roughly <b>10%</b> for good service is a kind gesture."
          ]
        },
        {
          h: "Taxis, and the rest",
          icon: "hkd",
          key: { fig: "Round up", tag: "Taxis and small change", text: "Taxi drivers usually just round up to the nearest dollar. Leave anything extra in HK dollars; an Octopus card covers most small spending.", tone: "teal" },
          p: [
            "For <b>taxis</b>, drivers typically <b>round up to the nearest HK dollar</b> or keep small change, and nothing more is expected. <b>Hotel porters</b>, a few HK dollars a bag is a kind gesture.",
            "Leave any extra in <b>cash, in HK dollars</b>. Day-to-day, an <b>Octopus card</b> covers most small spending anyway. For the wider picture, see <a href='/hong-kong/cash-or-card'>cash or card in Hong Kong</a> and the <a href='/hong-kong'>Hong Kong money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Hong Kong?", a: "Lightly. Most sit-down restaurants add a 10% service charge that covers the tip, so you need not add more, though people often round up. Casual spots and taxis expect little or nothing." },
        { q: "Is there a service charge in Hong Kong restaurants?", a: "Usually, at sit-down restaurants: a 10% service charge is common. It stands in for a tip, so you do not need to add more, though rounding up for good service is a kind gesture." },
        { q: "Do you tip taxi drivers in Hong Kong?", a: "Not really. Drivers usually just round up to the nearest HK dollar or keep the small change, and nothing more is expected." },
        { q: "How much do you tip in Hong Kong?", a: "Little. A 10% service charge covers most sit-down meals. Where none is added, leaving the small change or about 10% for good service is generous. Casual spots and taxis need no real tip." }
      ],
      sources: {
        links: [
          { label: "US State Department: Hong Kong information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/HongKong.html", type: "gov" }
        ],
        judgment: "Hong Kong tipping is light and mostly handled by the restaurant service charge. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Hong Kong dollar (HKD)" },
        { k: "The key", v: "Get an Octopus card" },
        { k: "Cards", v: "Widely taken, some cash for markets" },
        { k: "On a card", v: "Choose HKD, not US dollars" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Hong Kong, or can I use cards? (2026) | True Trip Costs",
      description: "A little, plus an Octopus card. Hong Kong is card-friendly, but the Octopus card runs transit and many shops. Keep some HK dollars for markets and street food. Choose HK dollars not US dollars. Checked July 2026.",
      h1: "Do I need cash in Hong Kong, or can I use cards?",
      lede: "Short answer: a card for most things, an Octopus card for the rest, and a little cash for markets. The Octopus card is the real key to Hong Kong. Here is how to handle it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Cards, plus an Octopus card. Hong Kong is <b>card-friendly</b>, but the real key is the <b>Octopus card</b>, a tap card that runs the city: transit, convenience stores, many shops and small eateries. <b>Visa and Mastercard</b> work at most shops and restaurants, and contactless is common. Keep <b>some HK dollars</b> for <b>markets, street food (dai pai dong) and small vendors</b>. The currency is the <b>Hong Kong dollar (HKD)</b>. Choose <b>HK dollars, not US dollars</b> on any card or ATM.",
      sections: [
        {
          h: "Get an Octopus card: it runs the city",
          icon: "ic",
          key: { fig: "Octopus", tag: "Taps for almost everything", text: "The Octopus card is the key to Hong Kong: transit, convenience stores, many shops and small eateries. Get one on arrival and top it up.", tone: "teal" },
          p: [
            "The single most useful thing in Hong Kong is an <b>Octopus card</b>, a rechargeable tap card that goes far beyond transit. It pays for the <b>MTR, buses and trams</b>, and also works at <b>convenience stores, many shops, fast food and small eateries</b>. Get one at the airport or any MTR station and top it up with cash or card.",
            "You can also add Octopus to a <b>phone wallet</b>, and locals use <b>AlipayHK and WeChat Pay</b>, but the physical Octopus is the simplest for a visitor."
          ]
        },
        {
          h: "Cards, and choosing HK dollars",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose HKD", text: "When a terminal or ATM offers US or HK dollars, pick HK dollars. US dollars trigger dynamic currency conversion at a rate about 3 to 8% worse than your bank's.", tone: "amber" },
          p: [
            "<b>Visa and Mastercard</b> are taken at most shops, malls and restaurants, and <b>contactless</b> is common. When a card terminal or ATM asks whether to charge in <b>US or HK dollars, always choose HK dollars</b>. US dollars trigger dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. Decline it every time.",
            "For cash, use an ATM attached to a <b>real bank</b>, such as HSBC, Hang Seng or Bank of China (Hong Kong), which are everywhere. Use a <b>debit card</b> to avoid cash-advance fees."
          ]
        },
        {
          h: "Cash for markets and street food",
          icon: "hkd",
          key: { fig: "Some HK$", tag: "For markets and stalls", text: "Keep some HK dollars for street markets, dai pai dong street food and small vendors, which take cash or Octopus.", tone: "teal" },
          p: [
            "Keep <b>some HK dollars</b> for the cash corners: <b>street markets</b> (such as the ones in Mong Kok), <b>dai pai dong</b> open-air food stalls, and small vendors, many of which take <b>cash or Octopus</b> rather than cards.",
            "For the wider picture, see the <a href='/hong-kong'>Hong Kong money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Hong Kong?", a: "Some. Hong Kong is card-friendly and an Octopus card covers transit and many shops and eateries, but keep some HK dollars for street markets, dai pai dong food stalls and small vendors." },
        { q: "What is an Octopus card in Hong Kong?", a: "A rechargeable tap card that runs the city: the MTR, buses and trams, plus convenience stores, many shops, fast food and small eateries. Get one at the airport or any MTR station and top it up with cash or card." },
        { q: "Should I pay in HK dollars or US dollars in Hong Kong?", a: "Always HK dollars. If a card machine or ATM offers US dollars, decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
        { q: "Are cards widely accepted in Hong Kong?", a: "Yes, Visa and Mastercard work at most shops, malls and restaurants, and contactless is common. Street markets and dai pai dong food stalls lean on cash or Octopus, so carry some HK dollars for those." }
      ],
      sources: {
        links: [
          { label: "Hong Kong Monetary Authority: official monetary and currency information", url: "https://www.hkma.gov.hk", type: "gov" },
          { label: "US State Department: Hong Kong information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/HongKong.html", type: "gov" }
        ],
        judgment: "Hong Kong is card-friendly, and the Octopus card is genuinely central to daily spending, so this is our practical read. The HK dollar is closely managed against the US dollar, but the firm rule is still to decline US-dollar conversion on your card. Checked July 2026."
      }
    },
    {
      slug: "bringing-your-pet",
      glance: [
        { k: "Classed", v: "Group II (no titer, no quarantine)" },
        { k: "The key", v: "An AFCD Special Permit first" },
        { k: "Permit", v: "Before you book any flight" },
        { k: "The risk", v: "Paperwork gaps trigger quarantine" }
      ],
      live: true,
      topic: "pets",
      title: "Bringing a dog or cat to Hong Kong from the US (2026): no quarantine, if you get the permit right | True Trip Costs",
      description: "Moving to Hong Kong with a pet from the US: why the US sits in Group II with no quarantine by default, the AFCD Special Permit you must get before booking flights, the cargo-only rule, and the paperwork slip that triggers months of quarantine. Checked July 2026.",
      h1: "Bringing your dog or cat to Hong Kong.",
      lede: "Hong Kong is stricter on paperwork than on waiting. The US sits in its middle risk tier, which means no quarantine by default, no rabies titer, and no long biology clock. The whole game is the AFCD Special Permit, which you must hold before you book a flight, and getting every document exactly right, because a single gap can turn a no-quarantine move into months of it. Here is the route.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Good news: the continental US is a <b>Group II</b> origin for Hong Kong, which means <b>no quarantine on arrival</b> if you fully meet the permit terms, and <b>no rabies titer test</b>. The work is the paperwork. You must obtain an <b>AFCD Special Permit before you book any flight</b> (it is valid 6 months, covers one dog, and takes about 5 working days), plus an <b>ISO microchip, a rabies vaccination given 30 days to 1 year before departure, a health certificate endorsed by USDA APHIS within 14 days of travel, and proof your pet lived in the US for at least 4 months</b>. Pets travel as <b>manifest cargo</b>, not in the cabin. The trap: any documentation gap can trigger quarantine of up to 6 months at your expense. Coming home to the US is the easy part.",
      sections: [
        {
          h: "Why Hong Kong is more manageable than it looks",
          icon: "health",
          key: { fig: "Group II", tag: "No titer needed", text: "Hong Kong sorts origins into risk groups, and the continental US is Group II, the rabies-controlled tier. A fully compliant Group II pet skips quarantine on arrival and needs no rabies titer test.", tone: "teal" },
          p: [
            "Hong Kong is rabies-controlled and sorts origins into risk groups. The continental US is <b>Group II</b>, the rabies-controlled tier, alongside Canada, most of Europe, Japan, and others. Group II is the good outcome: dogs and cats from Group II are <b>exempt from quarantine</b> on arrival, provided you comply fully with the permit conditions, and there is <b>no rabies antibody titer</b> required, unlike the higher-risk Group IIIA and IIIB origins that face a titer and a minimum 30-day quarantine.",
            "So Hong Kong is not a long-lead, biology-driven move like Australia or Japan. The lead time is set by paperwork and permit processing, not a fixed waiting clock. That makes it one of the more manageable rabies-controlled destinations, but the flip side is that the strictness lives entirely in getting the documents and the permit exactly right."
          ]
        },
        {
          h: "The permit comes before the plane ticket",
          icon: "receipt",
          key: { tag: "Permit before booking", text: "The rule that catches people: you must hold the AFCD Special Permit before you book travel, because airlines will not accept your pet without it. It is valid 6 months and covers one dog.", tone: "amber" },
          p: [
            "This is the rule that catches people. You must hold the AFCD Special Permit <b>before</b> you book travel, because airlines will not accept your pet without it. The permit is issued by Hong Kong's Agriculture, Fisheries and Conservation Department (AFCD), takes roughly 5 working days once your documents are in order, is valid for 6 months, and covers a single dog. Apply well ahead, and do not commit to a flight date until the permit is in hand."
          ],
          steps: [
            "ISO microchip first. Hong Kong's standard is an ISO 11784 or 11785 microchip. If your pet's chip is not readable by a universal scanner, a conforming chip may be implanted on arrival at your cost, so sort this before anything else.",
            "Rabies vaccination, given 30 days to 1 year before departure and recorded against the microchip.",
            "Apply to AFCD for the Special Permit (Form AF240 and Form UN110) before booking flights. AFCD issues a reference number and, once all documents are satisfactory, completes the permit.",
            "Health certificate. A USDA-accredited vet completes the Hong Kong health certificate within 14 days of departure, endorsed by USDA APHIS. For the continental-US form, this can be done digitally through the APHIS VEHCS system.",
            "Residence proof. You will need to declare your pet has lived in the US for at least 4 months before export.",
            "Fly as manifest cargo. Pets are imported as manifest cargo, not as cabin or excess baggage, so book the pet's transport accordingly with an airline experienced in live-animal cargo to Hong Kong."
          ]
        },
        {
          h: "The money side, honestly",
          p: [
            "If something in your paperwork slips and your pet is held, no insurance product covers that boarding bill. Not pet health insurance, not travel insurance with a pet add-on, not a shipper's protection plan. Nationwide is the one US pet insurer that reimburses vet care at any licensed vet worldwide, and even it excludes boarding, which is what quarantine is. The cheapest insurance here is getting the documents right.",
            "US pet insurance is written around a pet that lives in the US. Most policies carry a policy territory, typically the US and sometimes Canada or Puerto Rico, and even the ones that reimburse vet care worldwide generally require your primary residence to stay in the US. So a policy may well pay a vet bill on a trip abroad and still lapse the day the move becomes permanent. Read your own policy's territory and residency wording before you assume it travels with you, and for a permanent move plan on taking out local pet insurance in your new country.",
            "As a rough sanity check on any quote, and this is our read of current market pricing rather than an official figure: a standard international pet move tends to run about $1,500 to $6,000. Full-service door-to-door typically costs 30 to 50 percent more than a transport-only booking where you handle the vet work and paperwork yourself.",
            "The costs people forget are the small ones. USDA APHIS charges a user fee to endorse an export health certificate, currently $101 where no test verification is needed, $160 for a certificate covering one or two tests, and $206 for three to six tests, with rabies vaccination not counted in that tally. These rates rose on 10 January 2025, the first APHIS fee adjustment since 2012. Add an airline-compliant crate (roughly $50 to $400), the travel vet visits themselves, boarding on a layover, and summer heat surcharges.",
            "Pet shipping attracts scammers, so verify any company before you send money. IPATA, the International Pet and Animal Transportation Association, is a trade association: its members ship under their own company names, IPATA itself does not ship pets, and there is no legitimate shipper with \"ipata\" in its name. Scammers clone real shippers' sites, logos and testimonials, so check the company in the member directory at ipata.org rather than trusting a logo on a website. Treat these as red flags: a quote dramatically below every other quote, a domain registered less than six months ago, email coming from a gmail address rather than the company domain, and any request to pay by Western Union or MoneyGram."
          ]
        },
        {
          h: "The trap, the cost, and coming home",
          icon: "alert",
          key: { fig: "Paperwork", tag: "Get it exact", text: "The risk to plan around is documentation: a compliant pet skips quarantine, but any variation, an incomplete health certificate or missing records, can trigger it. Coming home to the US is simple.", tone: "teal" },
          p: [
            "The risk to plan around is documentation. A Group II pet that fully complies skips quarantine, but any variation, an incomplete health certificate, missing vaccination records, a permit condition not met, can trigger quarantine of up to 6 months at the owner's full expense. Pets under 5 months old are also held until they reach 5 months. In other words, the quarantine you are avoiding is only avoided by getting every document right, so this is a move where precision pays. Budget several thousand dollars all in, with air cargo the largest line, plus the permit, vet work, and health certificate.",
            "The return leg is easy. Because Hong Kong is not high-risk for rabies, a dog flying home to the US is on the simplest CDC path: typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to <a href=\"/bringing-a-dog-into-the-us\">bringing a dog into the US</a>, and <a href=\"/traveling-with-a-pet\">traveling with a pet</a> for how Hong Kong compares with other destinations."
          ]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Hong Kong",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-hong-kong",
        note: "The US-side steps and the health certificate, endorsed within 14 days of departure. Hong Kong's AFCD is the final word on the permit and the group classification, so confirm the current version."
      },
      faqs: [
        { q: "Does my pet have to go into quarantine in Hong Kong?", a: "Usually no. The continental US is a Group II origin, and Group II dogs and cats are exempt from quarantine on arrival if you fully meet the AFCD permit conditions. There is no rabies titer required either. But the exemption depends entirely on compliance: any documentation gap can trigger quarantine of up to 6 months at your expense, and pets under 5 months are held until they reach that age." },
        { q: "What is the AFCD Special Permit and when do I need it?", a: "It is Hong Kong's import permit for a dog or cat, issued by the Agriculture, Fisheries and Conservation Department using Forms AF240 and UN110. You must have it before you book a flight, because airlines will not accept your pet without it. It takes about 5 working days once your documents are in order, is valid for 6 months, and covers a single dog. Apply well ahead of travel." },
        { q: "Can my pet fly in the cabin to Hong Kong?", a: "No. Hong Kong requires pets to be imported as manifest cargo, not as cabin or excess baggage. Book your pet's transport with an airline experienced in live-animal cargo to Hong Kong, and factor the cargo cost in as the largest line of the move." },
        { q: "Do I need to quarantine my pet coming back to the US from Hong Kong?", a: "No. A dog returning to the US from Hong Kong is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details." }
      ],
      sources: {
        links: [
          { label: "USDA APHIS: pet travel from the United States to Hong Kong, the US-side steps and health certificate", url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-hong-kong", type: "gov" },
          { label: "Hong Kong AFCD: import of dogs and cats, the country groups, Special Permit, and quarantine rules", url: "https://www.afcd.gov.hk/english/quarantine/qua_ie/qua_ie_ipab/qua_ie_ipab_idc/qua_ie_ipab_idc.html", type: "gov" },
          { label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg", url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html", type: "gov" }
        ],
        judgment: "Hong Kong's group classification, Special Permit, and quarantine rules are set by AFCD and administered on the US side by APHIS, not by us. The Group II no-quarantine outcome is real but conditional on full compliance, and AFCD revised its country groupings in recent years, so we point you to the official pages and dated this July 2026. Costs vary with your pet's size and route, so treat the figures as a starting point and confirm the current AFCD requirements and your group before you begin."
      }
    }
  ]
};
