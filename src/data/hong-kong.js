export default {
  slug: "hong-kong",
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
      { n: "Budget",    per: 70,  cash: 0.25 },
      { n: "Mid-range", per: 130, cash: 0.18 },
      { n: "Comfort",   per: 240, cash: 0.12 }
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
  }
};
