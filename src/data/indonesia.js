export default {
  slug: "indonesia",
  iso2: "id",
  live: true,
  name: "Indonesia",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-10",
  emergency: { medical: "119", note: "119 is the medical line, and 112 works as a general emergency number in the cities. Outside them, ambulance cover is thin and a taxi is often faster.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "high",
  region: "Asia",
  signals: { cardFriendliness: 2, cashNeed: 4, taxRisk: 4 },
  hook: "Bali runs more on cash and QR codes than tourists expect, plus a one-time entry levy on top.",

  title: "Bali and Indonesia money 2026: cash, ATM fees, levy",
  description: "Bali runs on cash more than visitors expect, and bank ATMs are the fee-free ones. Budget the one-time Bali entry levy and the 21% hotel tax. Checked 2026.",

  h1: "Money in Indonesia, sorted.",
  lede: "Most US trips to Indonesia mean Bali, so this guide leads there, with notes for Jakarta and beyond. A calm, current plan for what to pay with, how much cash to carry, and the one-time fee that catches first-timers at the airport.",
  hero: {
    img: "/indonesia-hero.jpg",
    h: 1375,
    alt: "A Balinese temple gate at dusk framed by a plumeria tree in bloom, string lights strung between the branches, stone guardian statues in checked cloth on either side of the split gate, a lone figure walking away up a stone path toward terraced rice fields and a distant temple silhouette, and a wooden table in the foreground with grilled satay skewers, a bowl of peanut sauce, a bowl of sambal and a young coconut with a straw"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "In Bali's tourist areas, cards work at hotels, restaurants and bigger shops, but many add a 3% surcharge and cash still covers about 80% of everyday spending. Bring a <b>no-fee debit card</b> for ATM cash and a <b>no-fee credit card</b> as backup, pull rupiah from a <b>bank-branch ATM</b> (BCA, Mandiri, BNI), and keep <b>200,000 to 300,000 IDR</b> on hand for warungs, markets, parking and boats where cards and QR codes do not reach. If you are visiting Bali, pay the <b>one-time IDR 150,000 entry levy</b> at the official Love Bali site before you fly, it is separate from any hotel tax and easy to confuse with it.",

  meter: {
    heading: "Cash still does most of the work, even in Bali's tourist strip.",
    cashPct: 65,
    note: "A rough feel for everyday spending. Hotels, larger restaurants and shops in South Bali and Jakarta take cards, but cash still covers most transactions islandwide, around 80% by some estimates. Outside the main tourist corridor, on smaller islands, and at local warungs, cash is close to the only option."
  },

  trio: [
    { sym: "card", kind: "warn", h: "Your card", verd: "Works in tourist areas, with a catch", p: "Visa and Mastercard are accepted at hotels, resorts and bigger restaurants in South Bali and Jakarta. Many add a 3% card surcharge, and some set a minimum spend. Smaller shops, local warungs and most of Indonesia outside the main tourist hubs are cash only.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Still the main way to pay", p: "Cash covers warungs, markets, parking, boats, tipping and most of daily life outside resorts. Carry more rupiah than you would for a card-friendly country, and top up before heading to a smaller island.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy in Bali and Jakarta, scarcer beyond", p: "Bank-branch ATMs (BCA, Mandiri, BNI, Permata) are common in South Bali's tourist areas and major cities, with fees for foreign cards typically 25,000 to 100,000 IDR per withdrawal. ATMs thin out fast outside the main hubs and on smaller islands, where they can also run dry.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee debit card</b> for ATM cash and a <b>no-fee credit card</b> as backup.",
      "If you are heading to Bali, pay the <b>one-time IDR 150,000 entry levy</b> at lovebali.baliprov.go.id before you fly. Avoid lookalike sites that overcharge.",
      "Set up <b>Grab or Gojek</b> with your international card before you land, both are the easiest way to get around and order food.",
      "<b>Set a travel notice</b> with your bank so a first-day ATM pull or card swipe does not get blocked."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport money changers for anything beyond pocket change, the rates are weak.",
      "Pull rupiah from a <b>bank-branch ATM</b> (BCA, Mandiri, BNI), not a standalone machine, and <b>decline \"convert to USD.\"</b>",
      "Withdraw a larger amount at once. ATM fees are often a flat charge per withdrawal, so fewer trips cost less overall."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card</b> for hotels and bigger restaurants in tourist areas, watch for the 3% surcharge.",
      "<b>Cash</b> for warungs, markets, parking, temple donations, boats and most things outside the main resort strip.",
      "QRIS, Indonesia's QR payment system, is everywhere, but most US cards and apps cannot scan it without a local SIM and e-wallet, so do not count on it.",
      "<b>Always choose rupiah</b>, never dollars, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in rupiah, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "The Bali entry levy and any hotel tax are two separate charges. Paying one does not cover the other."
    ], cta: null }
  ],

  cash: {
    rate: 17900, cur: "IDR", round: 50000, defaultIndex: 1,
    rateNote: "Rough guide at about 17,900 rupiah to the dollar in mid-2026. Amounts in rupiah carry a lot of zeros, so double-check before handing over cash.",
    styles: [
      { n: "Budget", per: 35, cash: 0.75, room: 35 },
      { n: "Mid-range", per: 70, cash: 0.6, room: 85 },
      { n: "Comfort", per: 140, cash: 0.4, room: 200 }
    ]
  },

  connectivity: {
    works: "Mostly, with real gaps once you leave the tourist strip. Telkomsel has by far the widest reach, including smaller islands, rural Bali and remote dive areas, while XL Axiata and Indosat cover South Bali's resort belt and Jakarta well but thin out fast beyond it. 4G is the everyday standard; 5G is limited to parts of Jakarta and Denpasar. Coverage drops hard on Nusa Penida's clifftop viewpoints, in the Gili Islands away from the main villages, and on boats and remote trekking routes, so download offline maps and pick a Telkomsel-backed eSIM if your trip goes beyond South Bali."
  },

  // TOURIST TAX / FEES (high-churn, verified Jul 2026). Two separate charges, often confused:
  // (1) a national hotel tax-and-service add-on, commonly quoted as "21%++" (10% service
  // charge, then a 10% regional hospitality tax, PB1, calculated on top of that, working out
  // to about 21% combined), charged nightly and added to the room rate if quoted "++" rather
  // than "nett". (2) Bali's one-time Foreign Tourist Levy of IDR 150,000 per person, paid once
  // per trip via the official Love Bali portal, which applies only in Bali and has nothing to
  // do with the hotel tax. Modeled here as a nightly percentage plus, for Bali, a one-time
  // per-person add-on (the engine already supports this shape, see Mexico's VISITAX).
  tax: {
    unit: "percentOfRoom",
    currency: "IDR",
    capNights: null,
    note: "Most Indonesian hotels quote rates \"nett\" (tax and service already included) or \"++\" (tax and service added at checkout). This estimate assumes a \"++\" rate: a 10% service charge, then a 10% regional hotel tax (PB1) calculated on top of that, for about 21% combined. Budget guesthouses and homestays often charge less or nothing extra.",
    regions: [
      { key: "bali", label: "Bali", pct: 21, oneTimePerPerson: 150000, taxLabel: "Hotel tax & service + Bali entry levy", note: "On top of the 21% hotel tax and service, every foreign visitor to Bali pays a one-time IDR 150,000 entry levy, paid once per trip regardless of length of stay. It is separate from the hotel tax and is not covered by it." },
      { key: "other", label: "Elsewhere in Indonesia (Jakarta, Yogyakarta, and beyond)", pct: 21, note: "The same 21% hotel tax and service add-on applies nationwide. There is no Bali-style entry levy outside Bali." }
    ]
  },

  currencyHeading: "The rupiah, in plain terms.",
  facts: [
    { sym: "denom", k: "Quick conversion", v: "About 17,900 rupiah to the dollar in mid-2026. A 100,000 IDR meal is roughly $5.60, and 1,000,000 IDR is about $56. The long strings of zeros take getting used to, so double-check the number before paying." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 1,000, 2,000, 5,000, 10,000, 20,000, 50,000 and 100,000 rupiah. Coins (50 to 1,000 rupiah) are nearly worthless and rarely used. Carry a stack of 20,000s and 50,000s for everyday spending." },
    { sym: "smallnotes", k: "Keep small notes handy", v: "Warungs, parking attendants, Gojek and Grab drivers, and temple donation boxes all want small cash. Crisp, undamaged notes matter too, both for spending and if you ever exchange cash, since worn or torn bills are often refused." },
    { sym: "qr", k: "QRIS is not really for you", v: "QRIS, Indonesia's QR payment standard, is everywhere, but scanning it usually requires an Indonesian SIM card and a local e-wallet (GoPay, OVO) linked to your card. A few countries have direct QRIS links for their banking apps; the US is not one of them, so stick to your card or cash." }
  ],

  taxfree: {
    label: "Fees and taxes",
    heading: "The entry levy and the hotel tax are not the same thing.",
    text: "Two separate charges trip up first-time visitors to Bali. The <b>Foreign Tourist Levy</b> is IDR 150,000 per person, paid once per trip (not per night) through the official Love Bali portal, lovebali.baliprov.go.id, or at a counter on arrival. It funds cultural and environmental programs and applies to every foreign visitor, including children, with limited exemptions for long-stay visa holders. Separately, most hotels add a <b>21% tax and service charge</b> to the nightly room rate if it was quoted \"++\" rather than \"nett.\" Paying one does not cover the other, and neither shows up reliably in a Booking.com or Airbnb total, so budget for both."
  },

  // High-churn entry and tax facts, each tracked on its own with a status, an
  // effective date, a primary source and the date we last checked it. Rendered as
  // a small always-open card after the tax-free section. This is the entry visa,
  // separate from the Bali tourist levy covered above.
  keyFacts: [
    { label: "Indonesia visa on arrival (30-day, US citizens)", value: "IDR 500,000 (about 35 dollars), as an e-VOA on the official portal or on arrival, extendable once", status: "enacted", effective: null, source: "https://evisa.imigrasi.go.id/", checked: "2026-07-11" }
  ],

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Choosing your home currency at a card terminal or ATM (dynamic currency conversion) quietly adds 3 to 8%. Pick rupiah every time.",
    "<b>Only pay the Bali levy at the official site.</b> Lookalike websites charge two to three times the real IDR 150,000 fee and exist mainly to steal card details. The only official domain ends in .go.id; if in doubt, pay at the counter on arrival instead.",
    "<b>Count the zeros twice.</b> A 100,000 IDR note and a 10,000 IDR note are easy to confuse at a glance, especially after a long flight. Slow down when paying cash, and use a calculator app if a total feels off.",
    "<b>Use ATMs inside a bank branch or mall.</b> Standalone street-side ATMs in tourist areas carry a higher skimming risk. Stick to machines inside BCA, Mandiri, BNI or Permata branches, or in shopping malls."
  ],

  tippingHeading: "Not traditional, but increasingly expected in tourist Bali.",
  tipping: "Indonesia does not have a deep-rooted tipping culture, but tourism has shifted norms in Bali's resort areas. Check your bill first: many hotels, restaurants and spas in tourist zones already add a 5 to 10% service charge, and if so, an extra tip is a kind gesture rather than an expectation. Where no service charge is added, 10% at a sit-down restaurant is generous. Local warungs and small family eateries do not expect tips, though rounding up is appreciated. For a private driver or guide, IDR 50,000 to 150,000 for a full day is a strong tip; for Grab or Gojek rides, IDR 5,000 to 10,000 in the app is a nice bonus. Spa and massage staff typically see IDR 20,000 to 50,000. Tip in rupiah and in cash where you can, since card tips often get pooled, and hand it over with your right hand, which is the polite custom.",
  sources: {
    changed: "Re-checked July 2026. Indonesia's VAT is an effective 11% on most goods and services, confirmed unchanged. Bali still charges a separate 150,000 rupiah foreign-tourist levy, paid once per entry, and the rate has not moved. Enforcement tightened through 2026, with spot checks of the payment QR code at some tourist sites and airports, so pay it at the official Love Bali site before you fly.",
    links: [
      { label: "Bali Provincial Government (Love Bali): the 150,000 rupiah foreign-tourist levy, paid once per entry to Bali", url: "https://lovebali.baliprov.go.id/", type: "gov" },
      { label: "PwC Worldwide Tax Summaries: Indonesia's effective 11% VAT on most goods and services", url: "https://taxsummaries.pwc.com/indonesia/corporate/other-taxes", type: "revenue" },
    ],
    judgment: "Most hotels quote rates nett (tax and service included) or ++ (added at checkout), so the estimate here assumes a ++ rate. The daily cash share, tipping norms and likely ATM behavior are our own estimate from experience, not an official figure.",
  },

  faqs: [
    { q: "Do I need cash in Indonesia?", a: "Yes, more than in most card-friendly destinations. Cash covers around 80% of everyday spending in Bali, and even more outside the main tourist areas. Cards work at hotels and bigger restaurants in South Bali and Jakarta, often with a 3% surcharge, but warungs, markets, parking and boats are usually cash only." },
    { q: "What is the best ATM to use in Bali or Indonesia?", a: "Use a machine inside a bank branch or shopping mall, BCA, Mandiri, BNI or Permata are the most common. Expect a foreign-card fee of roughly 25,000 to 100,000 IDR per withdrawal, and always decline the \"convert to USD\" prompt. ATMs get scarce outside South Bali and the major cities, so plan ahead." },
    { q: "What is the Bali entry levy, and is it different from the hotel tax?", a: "Yes, they are two unrelated charges. The Bali entry levy is a one-time IDR 150,000 (about $10) fee per visitor, paid once per trip via the official Love Bali portal or at the airport. It is separate from the roughly 21% hotel tax and service charge added to most room rates, and paying one does not cover the other." },
    { q: "Do you tip in Bali or Indonesia?", a: "It is not traditional, but it is appreciated and increasingly common in Bali's tourist areas. Check your bill for a service charge first; if there isn't one, 10% at a restaurant is generous, and IDR 50,000 to 150,000 for a full-day driver or guide is a strong tip. Local warungs do not expect tips." },
    { q: "How much cash should I bring for a week in Bali?", a: "For two travelers on a mid-range trip, very roughly 2 to 3 million IDR (about $110 to $170) in day-to-day cash across a week, on top of cards for hotels and bigger restaurants. Carry more if you are island-hopping to Nusa Penida or the Gilis, where ATMs are limited." }
  ],

  culture: {
    heading: "A little Indonesian goes a long way",
    intro: "Indonesia is the world's largest archipelago, thousands of islands and hundreds of languages, with Bahasa Indonesia the shared tongue. A Terima kasih for thank you and a story or two mark you as a guest rather than a tourist.",
    phrases: [
      { mean: "Hello", say: "HAH-loh", word: "Halo" },
      { mean: "Good morning", say: "seh-LAH-mat PAH-gee", word: "Selamat pagi" },
      { mean: "Please", say: "TOH-long", word: "Tolong" },
      { mean: "Thank you", say: "teh-REE-mah KAH-see", word: "Terima kasih" },
      { mean: "You are welcome", say: "SAH-mah SAH-mah", word: "Sama sama" },
      { mean: "Delicious, tasty", say: "EH-nak", word: "Enak" },
    ],
    tip: "Indonesia spans more than 17,000 islands, and its motto, <b>Bhinneka Tunggal Ika</b>, means Unity in Diversity, one nation drawn from many peoples and faiths. Dress modestly at temples and mosques, and use your right hand to give and receive. A little courtesy is warmly returned.",
    stories: [
      { img: "/indonesia-culture-1.jpg",
        alt: "WPA-style illustration of the vast terraced Buddhist temple of Borobudur emerging from morning mist at dawn, rows of bell-shaped stone stupas in silhouette, distant volcanoes and palms",
        h: "The greatest Buddhist temple on Earth",
        p: "On the island of Java stands Borobudur, the largest Buddhist temple in the world, raised more than 1,200 years ago and later left to slumber under volcanic ash and jungle for centuries before it was uncovered. Its nine stacked terraces are lined with hundreds of stone Buddhas. At dawn, wreathed in mist, it is unforgettable.",
        note: "Good to know: the world's largest Buddhist temple" },
      { img: "/indonesia-culture-2.jpg",
        alt: "WPA-style illustration of a shadow-puppet master seated behind a glowing screen working intricate leather puppets by lamplight, ornate silhouettes cast on the screen, gamelan instruments beside him",
        h: "Shadows that tell the old stories",
        p: "Wayang kulit is Indonesia's shadow-puppet theatre, among the oldest storytelling on Earth. A single master, the dalang, works dozens of intricate leather puppets behind a lamplit screen, voicing every character through the night to the shimmer of a gamelan orchestra. The tales are ancient epics of gods and heroes.",
        note: "Say it: wayang kulit (WAH-yang KOO-lit)" },
      { img: "/indonesia-culture-3.jpg",
        alt: "WPA-style illustration of a Balinese dancer in a gilded headdress and crimson brocade sarong poised mid-gesture with expressive hands, a carved temple gate and green rice terraces behind",
        h: "Where the island dances for the gods",
        p: "On Bali, dance is a living art and an act of devotion, performed at temples among the emerald rice terraces. In the Legong, dancers in gilded headdresses move with darting eyes and flickering fingers to tell stories older than memory. Every gesture carries meaning.",
        note: "Good to know: Balinese dance is UNESCO listed" },
    ],
    pride: "Indonesians are gentle, gracious and quick to smile, and they hold together an astonishing variety of islands, languages and faiths under one flag. They are proud of that unity in diversity, of ancient temples and living arts, and of a warmth that greets every guest."
  },

  spokes: [
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Indonesian rupiah (IDR)" },
        { k: "Cards", v: "Hotels, malls, upscale (Bali, Jakarta)" },
        { k: "Cash for", v: "Warungs, markets, drivers" },
        { k: "Watch", v: "Big numbers, ATM caps" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Indonesia? Yes, carry rupiah",
      description: "Cards work in Bali and Jakarta hubs, but warungs, markets and drivers run on cash. Mind the many zeros and the ATM withdrawal caps. Choose rupiah.",
      h1: "Do I need cash in Indonesia, or can I use cards?",
      lede: "Short answer: cards in tourist hubs like Bali and Jakarta, and rupiah cash for daily life. Watch the big numbers and the ATM withdrawal caps. Here is how to handle it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Both, and carry cash. Indonesia takes <b>cards at hotels, malls and upscale restaurants</b> in tourist hubs like <b>Bali and Jakarta</b>, but <b>warungs (local eateries), markets, small shops and drivers</b> are largely cash. The currency is the <b>rupiah</b>, which has <b>a lot of zeros</b> (amounts run into the tens and hundreds of thousands), so mind the notes. ATMs often <b>cap withdrawals</b> and dispense set denominations. Choose <b>rupiah, not dollars</b>, on any card or ATM.",
      sections: [
        {
          h: "Cash-reliant, and big numbers",
          icon: "cash",
          key: { fig: "Big numbers", tag: "Cards in tourist hubs", text: "Cards work in Bali and Jakarta hubs, but warungs, markets and drivers are cash. The rupiah runs into large numbers, so mind the notes.", tone: "teal" },
          p: [
            "Indonesia takes <b>cards at hotels, malls and upscale restaurants</b> in <b>Bali, Jakarta and tourist hubs</b>, and contactless is growing there. But <b>warungs (local eateries), markets, small shops and private drivers</b> are largely <b>cash</b>, so carry <b>rupiah</b>.",
            "The rupiah has <b>a lot of zeros</b>: amounts run into the <b>tens and hundreds of thousands</b>, so check the notes before you pay, since large and small denominations can look similar."
          ]
        },
        {
          h: "Choose rupiah, not dollars",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose rupiah", text: "When a terminal or ATM offers dollars or rupiah, pick rupiah. Dollars trigger dynamic currency conversion at a rate about 3 to 8% worse.", tone: "amber" },
          p: [
            "When a card terminal or ATM asks whether to charge in <b>dollars or rupiah, always choose rupiah</b>. Dollars trigger dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. Decline it every time.",
            "For cash, use ATMs at <b>major banks</b> (such as BCA, Mandiri or BNI). Many <b>cap withdrawals</b> per transaction and dispense either 50,000 or 100,000 notes (the machine usually says which), so plan around it. Use a <b>debit card</b> to avoid cash-advance fees."
          ]
        },
        {
          h: "ATMs, Bali drivers, and paying",
          icon: "coins",
          key: { fig: "Break big notes", tag: "For small vendors", text: "Break large notes for small vendors and warungs. A private Bali driver is usually paid in cash, in rupiah.", tone: "teal" },
          p: [
            "<b>Break large notes</b> at hotels or bigger shops so you have smaller ones for <b>warungs and small vendors</b>. A <b>private driver for the day</b> in Bali, a common way to get around, is usually paid in <b>cash, in rupiah</b>.",
            "For tipping norms, see <a href='/indonesia/tipping'>tipping in Indonesia</a>, and for the wider picture, the <a href='/indonesia'>Indonesia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Indonesia?", a: "Yes. Cards work at hotels, malls and upscale restaurants in Bali, Jakarta and tourist hubs, but warungs, markets, small shops and drivers are largely cash. Carry rupiah." },
        { q: "Should I pay in rupiah or dollars in Indonesia?", a: "Always rupiah. If a card machine or ATM offers dollars, decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
        { q: "Why does Indonesian money have so many zeros?", a: "The rupiah is a low-value unit, so everyday amounts run into the tens and hundreds of thousands. Large and small notes can look similar, so check before you pay." },
        { q: "Do Indonesian ATMs limit withdrawals?", a: "Often. Many cap the amount per transaction and dispense either 50,000 or 100,000 notes (the machine usually indicates which). Use ATMs at major banks like BCA, Mandiri or BNI, and always choose rupiah." }
      ],
      sources: {
        links: [
          { label: "Bank Indonesia: official exchange rate information", url: "https://www.bi.go.id/en/default.aspx", type: "gov" },
          { label: "US State Department: Indonesia country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Indonesia.html", type: "gov" }
        ],
        judgment: "Indonesia takes cards in tourist hubs but daily life runs on cash, and the rupiah's many zeros plus ATM caps are practical hurdles. The rupiah rate moves, and the firm rule is to decline dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Not obligatory" },
        { k: "Hotels, restaurants", v: "Often a ++ (service + tax)" },
        { k: "Where not added", v: "A small tip is appreciated" },
        { k: "Bali", v: "Small tips are common in tourist areas" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Indonesia: the plus plus, and how much",
      description: "Hotels and restaurants add a plus plus service charge. When a small tip is appreciated anyway, and what to give drivers and guides in Bali. Checked 2026.",
      h1: "Tipping in Indonesia",
      lede: "Indonesia has a light tipping culture, and the main thing to know is the plus plus (++) service charge at hotels and restaurants. Where it is added you need not tip; where it is not, a small tip is appreciated. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Indonesia has a <b>light tipping culture</b>, and the main thing to know is the <b>plus plus (++)</b>: many <b>hotels and restaurants</b>, especially in <b>Bali and tourist areas</b>, add roughly <b>10% service plus tax</b> on top of listed prices. Where a <b>service charge is added</b>, you do <b>not need to tip on top</b>. Where it is <b>not</b>, a <b>small tip</b> for good service is appreciated but not obligatory. It is common to tip <b>drivers, guides, porters and spa staff</b> modestly. Leave tips in <b>cash</b>, in rupiah.",
      sections: [
        {
          h: "The plus plus (++): service and tax",
          icon: "receipt",
          key: { fig: "The ++", tag: "Service plus tax", text: "Many hotels and restaurants add a ++ (roughly 10% service plus tax). Where it is added, you do not tip on top.", tone: "teal" },
          p: [
            "The main thing to understand is the <b>plus plus (++)</b>. Many <b>hotels and mid-range to upscale restaurants</b>, especially in <b>Bali and tourist areas</b>, add about <b>10% service charge plus a government tax</b> on top of the listed prices.",
            "Where a <b>service charge is on the bill</b>, that <b>stands in for a tip</b>, so you do <b>not add more</b>. Expect the total to run <b>meaningfully above the menu price</b> at these places."
          ]
        },
        {
          h: "Where a small tip is appreciated",
          icon: "coins",
          key: { fig: "A little", tag: "If no service charge", text: "Where no service charge is added, a small tip for good service is appreciated but not obligatory. At street warungs, no tip is expected.", tone: "teal" },
          p: [
            "Where there is <b>no service charge</b>, a <b>small tip</b> for good service is appreciated but <b>not obligatory</b>: rounding up or leaving a little. At a <b>street warung or local eatery</b>, no tip is expected.",
            "It is common to tip <b>drivers, guides, porters and spa staff</b> a modest amount for good service, especially in tourist areas."
          ]
        },
        {
          h: "Bali, drivers, and paying",
          icon: "cash",
          key: { fig: "Rupiah", tag: "Cash, small notes", text: "Leave tips in cash, in rupiah. Small notes are easiest, since rupiah figures run large.", tone: "teal" },
          p: [
            "Leave any tip in <b>cash, in rupiah</b>. Small notes are easiest, since rupiah figures run into the thousands. A <b>private driver for the day</b> in Bali, a common way to get around, is usually tipped a modest amount on top of the agreed fare. For the wider picture, see the <a href='/indonesia'>Indonesia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Indonesia?", a: "It is not obligatory. Many hotels and restaurants add a service charge (the ++), which covers the tip. Where none is added, a small tip for good service is appreciated. At street warungs, no tip is expected." },
        { q: "What is the plus plus (++) in Indonesia?", a: "It means a service charge (about 10%) plus a government tax are added on top of listed prices, common at hotels and mid-range to upscale restaurants, especially in Bali. Where it appears, you do not tip on top." },
        { q: "Should I tip a driver or guide in Indonesia?", a: "Yes, a modest tip for a driver, guide, porter or spa staff is common and appreciated for good service, especially in tourist areas. A private driver for the day in Bali is usually tipped a little on top of the fare." },
        { q: "How much do you tip in Indonesia?", a: "Little, and only where no service charge applies. Round up or leave a small amount in rupiah for good service. Where a ++ service charge is on the bill, no extra tip is needed." }
      ],
      sources: {
        links: [
          { label: "US State Department: Indonesia country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Indonesia.html", type: "gov" }
        ],
        judgment: "Indonesian tipping is light, with the plus plus service charge common at hotels and tourist restaurants, especially in Bali. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Best network", v: "Telkomsel, widest reach" },
        { k: "If beyond South Bali", v: "Telkomsel matters most" },
        { k: "Dead zones", v: "Islands, boats, remote treks" },
        { k: "Simplest", v: "A travel eSIM, ready on landing" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "medium",
      title: "eSIM for Bali: which carrier actually reaches you",
      description: "Indonesia has real coverage gaps once you leave South Bali, and it comes down to carrier. Telkomsel reaches the smaller islands where the others thin out.",
      h1: "Staying connected in Indonesia",
      lede: "Coverage in Indonesia is not one thing, it is a carrier question. If your trip stays in South Bali almost any plan is fine, but the moment you head to Nusa Penida, the Gili Islands or a remote dive site, the network behind your eSIM decides whether you have signal.",
      checked: "Jul 2026",
      checkedISO: "2026-07-20",
      answer: "Pick a <b>Telkomsel-backed eSIM</b> if your trip goes beyond South Bali. Telkomsel has by far the widest reach in Indonesia, including smaller islands, rural Bali and remote dive areas, while XL Axiata and Indosat cover the South Bali resort belt and Jakarta well but thin out fast beyond it. 4G is the everyday standard, with 5G only in parts of Jakarta and Denpasar. Set the eSIM up before you fly, and download offline maps for the places where signal drops, like Nusa Penida's clifftop viewpoints, the Gili Islands away from the main villages, and boat and trekking routes.",
      sections: [
        {
          h: "Why the carrier matters more than the plan",
          icon: "phoneok",
          key: { fig: "Telkomsel", tag: "Coverage, not plan size", text: "Indonesia is thousands of islands, and unlike many countries the networks do not all cover the tourist areas. Telkomsel has by far the widest reach, so pick an eSIM that runs on it, not the biggest plan.", tone: "teal" },
          p: [
            "In a lot of countries any travel eSIM is fine because the networks all cover the tourist areas. Indonesia is not like that. The country is thousands of islands, and coverage falls off sharply once you leave the main resort belt, so the network your eSIM rides on is the thing that decides whether you are connected.",
            "<b>Telkomsel</b> has the widest reach by a clear margin, including the smaller islands, rural Bali and the remote dive and trek spots. XL Axiata and Indosat are strong in South Bali and Jakarta but thin out beyond them. So the honest rule is simple: if you are staying in Seminyak, Canggu or Ubud the whole time, almost anything works, but if your trip goes further, choose a plan backed by Telkomsel."
          ]
        },
        {
          h: "Where signal actually drops",
          icon: "alert",
          key: { tag: "Islands and boats", text: "Expect dead zones on Nusa Penida's clifftop viewpoints, in the Gili Islands away from the main villages, on boats between islands, and on remote treks. Download maps and details before you go.", tone: "amber" },
          p: [
            "Expect dead zones on <b>Nusa Penida's clifftop viewpoints</b>, in the <b>Gili Islands</b> away from the main villages, on boats between islands, and on remote trekking routes. These are exactly the places people go for the day, so it catches travelers out.",
            "Download <b>offline maps</b> before you set off, so a lost signal does not leave you stranded on a scooter with no directions. This is cheap insurance and takes two minutes at your hotel Wi-Fi."
          ]
        },
        {
          h: "The simplest setup that works",
          icon: "qr",
          key: { fig: "eSIM", tag: "Skip the SIM counter", text: "A travel eSIM skips the airport SIM counter queue at Denpasar and the ID paperwork a local SIM needs, and it is ready the moment you land. A Nomad eSIM on Telkomsel is the simplest.", tone: "teal" },
          p: [
            "A travel eSIM avoids the airport SIM counter queue at Denpasar and the ID paperwork a local SIM needs, and it is ready the moment you land. <b>Nomad</b> runs its Indonesia eSIM on the <b>Telkomsel</b> network, which is the wide-reach carrier you want for a trip that goes past South Bali, so it lines up with the advice above rather than against it.",
            "Set it up before you fly, since you need a connection to install it, and keep an eye on your data if you are streaming or using maps heavily on longer days."
          ]
        }
      ],
      faqs: [
        {
          q: "Which eSIM carrier is best for Bali and Indonesia?",
          a: "Telkomsel, if your trip goes beyond the South Bali resort belt. It has the widest coverage in Indonesia, including the smaller islands, rural areas and remote dive and trek spots where XL Axiata and Indosat thin out. If you are staying in Seminyak, Canggu or Ubud the whole time, most plans are fine, but for anything further, pick a Telkomsel-backed eSIM."
        },
        {
          q: "Will my phone work on Nusa Penida and the Gili Islands?",
          a: "Patchily. Signal drops on Nusa Penida's clifftop viewpoints and in the Gili Islands away from the main villages, even on the widest network. A Telkomsel-backed eSIM gives you the best odds, but download offline maps before you go, since you can lose signal on the boat over and at the viewpoints themselves."
        },
        {
          q: "Do I need a local SIM, or is an eSIM enough?",
          a: "An eSIM is enough for most travelers and is simpler. It skips the airport SIM counter and the ID paperwork a local SIM requires, and it works from the moment you land if you set it up before you fly. A local Telkomsel SIM can be cheaper for very long or very heavy-data stays, but for a normal trip the convenience of an eSIM usually wins."
        },
        {
          q: "How much data do I need for a Bali trip?",
          a: "It depends on your habits, but maps, messaging and the odd ride app are light, while streaming and video calls are heavy. For a week of normal use, a mid-size plan is plenty, and most eSIM providers let you top up in-app if you run low, so you do not need to overbuy up front."
        }
      ],
      sources: {
        links: [
          {
            label: "US State Department: Indonesia country information and local conditions",
            url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Indonesia.html",
            type: "gov"
          }
        ],
        judgment: "Coverage and carrier reach can shift as networks expand, so treat this as a July 2026 snapshot. The core point, that Telkomsel has the widest reach and the carrier behind your eSIM matters once you leave South Bali, has held steady, but check current coverage for the specific islands on your route."
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Apps", v: "Grab and Gojek (cars + ojek)" },
        { k: "Trusted cab", v: "Bluebird, meter always on" },
        { k: "No-app zones", v: "Some areas ban app pickups" },
        { k: "Airport", v: "Official prepaid counter at Denpasar" }
      ],
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Bali taxi apps: Grab, Gojek and the no-app zones",
      description: "Grab and Gojek cover Indonesia, plus trusted Bluebird. A local taxi mafia blocks app pickups in parts of Ubud and Canggu. Leaving Denpasar airport too.",
      h1: "Taxi apps in Bali, and the pickup zones to know",
      lede: "Bali has no trains and barely any public transport, so the apps matter, but a local taxi mafia complicates them in a few tourist spots. Here is which app to install, how to spot a fake Bluebird, and where the apps quietly stop working.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Install <b>Grab</b> and <b>Gojek</b> before you land. Both show a fixed price up front for cars and for motorbike (<b>ojek</b>) rides, and they are almost always cheaper than a street taxi. For a trusted metered cab, use <b>Bluebird</b>, either its own app or the <b>GoBlueBird</b> option inside Gojek, and beware copycat blue cars. <b>Uber</b> does not operate in Indonesia. The catch in Bali is a local taxi <b>mafia</b> that blocks app pickups in certain zones, like central Ubud, parts of Canggu and Uluwatu, where a driver may ask you to walk to a nearby buffer spot. At <b>Denpasar airport</b>, use the official prepaid counter or a pre-booked transfer.",
      sections: [
        {
          h: "Which app to install",
          icon: "phoneok",
          key: { fig: "Grab/Gojek", tag: "Cars and motorbikes", text: "Grab and Gojek are the two big apps across Indonesia, both showing a fixed fare before you ride and both doing cars and motorbike (ojek) rides. Keep both, and they beat a street taxi.", tone: "teal" },
          p: [
            "<b>Grab</b> and <b>Gojek</b> are the two big apps across Indonesia, both showing a fixed fare before you ride and both doing cars and motorbike rides. Keep both, since prices differ by route and time, and Grab tends to have better availability for longer runs while Gojek often wins on short hops. <b>Maxim</b> and <b>inDrive</b> are cheaper backups. <b>Uber</b> left Southeast Asia in 2018, so it does not work here, and any old guide telling you to use it is out of date.",
            "For a traditional metered taxi, <b>Bluebird</b> is the one to trust, and the cleanest way to get a real one is through the Bluebird app or the <b>GoBlueBird</b> option inside Gojek. One practical catch: Grab and Gojek need a <b>local phone number</b> to register, so pick up a SIM as soon as you land, or ask the airport lounge staff to help, otherwise you may be stuck before you start."
          ]
        },
        {
          h: "Bluebird, and the fake-Bluebird trick",
          icon: "taxi",
          key: { fig: "Bluebird", tag: "Meter always on", text: "For a metered street cab, use Bluebird, a blue car with a white bird logo and the meter always on, via its own app or GoBlueBird inside Gojek. Watch for copycats using a similar name or color.", tone: "teal" },
          p: [
            "<b>Bluebird</b> is a blue car with a white bird logo, uniformed drivers, and a meter that is always on, and it is the metered taxi that locals and expats actually trust. The trick to know is the imitation: some drivers give a car a blue paint job and a similar-looking logo, and a name like <b>Bali Taxi</b> that is close but not the real thing. If a blue taxi looks not quite right, walk on and book a genuine Bluebird in the app.",
            "Even in a real Bluebird, make sure the meter is running from the start. The advantage of booking through the app rather than flagging one down is that you get the driver and plate on record and the fare tracked, which removes the two most common street problems in one go, the fake cab and the meter that mysteriously will not work."
          ]
        },
        {
          h: "The no-app zones (the taxi mafia)",
          icon: "alert",
          key: { tag: "Some areas ban app pickups", text: "Bali runs partly on banjar (village) rules, and in some areas a local taxi union bans Grab and Gojek pickups. Your driver may ask you to walk to a pickup point just outside the zone.", tone: "amber" },
          p: [
            "This is the part that surprises visitors. Bali runs partly on <b>banjar</b>, or village, rules, and in some areas a local taxi union bans Grab and Gojek pickups outright. The usual spots are <b>central Ubud</b> (around Monkey Forest Road, the palace and the market), parts of <b>Canggu</b>, the <b>Uluwatu</b> temple area, and some beaches and temple or ferry points. The apps still work, but a driver may ask you to walk <b>300 to 500 meters</b> to a buffer spot to be picked up, or to be dropped a short walk before your destination.",
            "The good news is that dropping off in these zones is usually fine, it is the pickup that is controlled, so getting out is rarely a problem. In the strictest spots, a motorbike <b>ojek</b> or a local fixed-rate car may be the only way, in which case agree the price first. None of this is dangerous, it is a turf arrangement, and a short walk to where the app driver can legally collect you is the normal workaround."
          ]
        },
        {
          h: "Denpasar airport and paying",
          icon: "plane",
          key: { fig: "Prepaid", tag: "On your left", text: "At Denpasar (Ngurah Rai, DPS), the official prepaid taxi counter is on your left before you exit arrivals, selling zone-based fixed fares. Or book a Grab to the app pickup point.", tone: "teal" },
          p: [
            "At <b>Denpasar</b> (Ngurah Rai, DPS), the official <b>prepaid taxi counter</b> sits on your left before you exit arrivals, selling zone-based fixed fares, roughly <b>150,000 to 450,000 rupiah</b> depending on how far you are going. <b>Grab</b> and <b>Gojek</b> also work from the airport, with a small airport exit fee added, and are usually comparable. A <b>pre-booked private transfer</b>, around 10 to 25 US dollars, gives you a fixed price and a driver waiting with your name.",
            "One honest point: in Bali's heavy traffic, a meter is not always the cheapest option, since it keeps ticking in a jam, so a fixed airport fare or a booked transfer can protect your wallet on the long run up to Ubud. Carry <b>rupiah</b> in cash for street rides and small extras. For the wider money picture, see the <a href=\"/indonesia\">Indonesia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Does Uber work in Bali or Indonesia?", a: "No. Uber left Southeast Asia in 2018. Install Grab and Gojek instead, both fixed-price for cars and motorbike rides, with Maxim and inDrive as cheaper backups. For a trusted metered taxi, use Bluebird through its own app or the GoBlueBird option inside Gojek." },
        { q: "Why can't I get a Grab in Ubud or Canggu?", a: "Because of Bali's local taxi mafia. Under village (banjar) rules, some areas ban app pickups, including central Ubud, parts of Canggu, Uluwatu and some beaches. The app still works, but a driver may ask you to walk 300 to 500 meters to a buffer spot, or you can take an ojek. Drop-offs in these zones are usually fine; it is the pickup that is blocked." },
        { q: "What is the taxi from Bali airport?", a: "At Denpasar, the official prepaid taxi counter inside arrivals sells zone-based fixed fares, roughly 150,000 to 450,000 rupiah by destination. Grab and Gojek also work with a small exit fee added, and a pre-booked private transfer runs about 10 to 25 US dollars and waits with your name. All beat haggling with a street taxi." },
        { q: "Are Bali taxis a scam?", a: "Most are fine, but watch for fake Bluebirds, drivers who say the meter is broken and quote a flat price, and a phantom toll fee on routes with no toll. Stick to Grab, Gojek or a genuine Bluebird booked in the app, and confirm the plate and driver name before you get in. In heavy traffic, a fixed fare often beats the meter." }
      ],
      sources: {
        links: [
          { label: "US Department of State: Indonesia country information, general safety and local-travel context for US visitors", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Indonesia.html", type: "gov" },
          { label: "A Walk in the World: a 2026 Bali airport taxi guide covering Bluebird, Grab, Gojek and prepaid fares", url: "https://awalkintheworld.com/how-to-avail-a-bluebird-taxi-in-bali-airport/", type: "guide" },
          { label: "TRAppe Travel: a 2026 Bali taxi guide on Bluebird, the app-restricted zones and avoiding fakes", url: "https://www.trappetravel.com/blogs/news/local-taxi-in-bali", type: "guide" }
        ],
        judgment: "The no-app zones and airport rules shift, and fares move, so treat rupiah figures as a recent read and check the price in your app. Grab and Gojek need a local SIM to register. Checked July 2026."
      }
    },
    {
      slug: "visa",
      glance: [
        { k: "Visa", v: "Required, visa on arrival" },
        { k: "Cost", v: "About $35, plus $10 Bali levy" },
        { k: "Stay", v: "30 days, extend once to 60" },
        { k: "Where", v: "evisa.imigrasi.go.id only" }
      ],
      live: true,
      topic: "visas",
      title: "Do US citizens need a visa for Bali? Yes, a VOA",
      description: "US citizens need a visa on arrival for Indonesia, about $35, plus a separate $10 Bali tourist levy. The e-VOA that skips the queue, and the arrival card.",
      h1: "Do US citizens need a visa for Bali and Indonesia?",
      lede: "Short answer: yes, a visa on arrival, and Bali adds a small tourist levy on top. US citizens are no longer visa-free here. Here is the real cost, the online version that skips the airport queue, and the extras to sort before you land.",
      checked: "Jul 2026",
      checkedISO: "2026-07-26",
      answer: "US citizens need a <b>visa on arrival (VoA)</b> for Indonesia, including Bali, they are <b>no longer visa-free</b>. It costs about <b>$35</b> (IDR 500,000), is <b>single entry</b> for <b>30 days</b>, and can be <b>extended once</b> for another 30. The easy way is the <b>e-VOA</b>, bought online before you fly at the official portal so you use the airport autogates. For Bali specifically, a separate <b>tourist levy of about $10</b> also applies. Your passport must be valid <b>six months</b>.",
      official: {
        label: "Indonesia Immigration: the official e-VOA portal",
        url: "https://evisa.imigrasi.go.id",
        note: "The Indonesian Directorate General of Immigration's official e-Visa and e-VOA portal. Apply for the e-VOA here, pay by card, and use the airport autogates on arrival. Fees change, so confirm the current amount; resellers add a markup for the same government visa. The Bali tourist levy is paid separately (below)."
      },
      expediter: false,
      sections: [
        {
          h: "You now need a visa on arrival",
          icon: "passport",
          key: { fig: "About $35", tag: "No longer visa-free", text: "US citizens are no longer visa-free for Indonesia. You need a visa on arrival, about $35, single entry for 30 days, extendable once to 60 days total.", tone: "teal" },
          p: [
            "This is the change that catches returning visitors: US citizens are <b>no longer visa-free</b> for Indonesia. You now need a <b>visa on arrival (VoA)</b>, which costs <b>IDR 500,000 (about $35)</b>, is <b>single entry</b>, and allows a stay of <b>30 days</b>. You can <b>extend it once</b> for another 30 days, a maximum of 60, after which you must leave.",
            "It covers <b>tourism and short business</b>, not paid work, and pointedly not <b>remote work</b> for pay, which needs a different permit. Your passport needs <b>six months</b> validity and two blank pages."
          ]
        },
        {
          h: "Get the e-VOA and skip the queue",
          icon: "qr",
          key: { fig: "Apply ahead", tag: "Use the autogates", text: "The e-VOA is the same visa, bought online before you fly. It lets you use the airport autogates and skip the arrival counter, and makes any extension easier. Apply a few days ahead.", tone: "teal" },
          p: [
            "The <b>e-VOA</b> is the electronic version of the same visa, bought <b>online before you fly</b> at the official portal, <b>evisa.imigrasi.go.id</b>. It is the same $35, but it lets you use the <b>automated e-gates</b> at Ngurah Rai (Bali) or Jakarta and skip the on-arrival visa counter, which can be a long, slow queue after a night flight. Apply <b>2 to 14 days</b> ahead.",
            "You can still queue for the paper <b>VoA</b> on arrival and pay $35 by cash or card, but the e-VOA is smoother and makes a later extension easier to do. Resellers charge a markup for the same government visa, so use the official site."
          ]
        },
        {
          h: "The Bali levy and the arrival card",
          icon: "receipt",
          key: { tag: "Two more small steps", text: "Bali charges a separate tourist levy of about $10, paid online for a QR receipt. Most visitors also complete a free online arrival and customs card before landing.", tone: "amber" },
          p: [
            "Two extras to sort before you land. For <b>Bali</b> specifically, there is a <b>tourist levy of IDR 150,000 (about $10)</b> per visitor, <b>separate</b> from your visa, paid online at the official <b>lovebali.baliprov.go.id</b> for a QR receipt to show if asked. It is Bali-only, not the rest of Indonesia.",
            "Most travelers should also complete the free <b>All Indonesia arrival card and customs declaration</b> online, usually within <b>72 hours</b> before arrival, which gives you a QR code for the airport. Both are <b>free</b> on their official government sites, so do not pay a third party for either."
          ]
        },
        {
          h: "A couple of gotchas",
          icon: "tag",
          key: { tag: "Onward ticket, strict overstay", text: "Bring a return or onward ticket; immigration can ask for it. Overstaying is expensive, about $65 a day. Then see the money guide.", tone: "amber" },
          p: [
            "Have a <b>return or onward ticket</b> ready, immigration can ask for proof you will leave within your stay, and visa-on-arrival does not guarantee entry. <b>Overstaying</b> is costly, around <b>IDR 1,000,000 (about $65) per day</b>, and going well over can mean deportation and a ban, so extend in time if you linger.",
            "For how money works once you are there, cash, cards, the rupiah and tipping, see the <a href=\"/indonesia\">Indonesia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for Bali?", a: "Yes. US citizens need a visa on arrival for Indonesia, including Bali; they are no longer visa-free. It costs about $35 (IDR 500,000), is single entry for 30 days, and can be extended once for another 30. For Bali, a separate tourist levy of about $10 also applies." },
        { q: "How much does the Indonesia visa on arrival cost?", a: "IDR 500,000, about $35 USD, whether you buy it online as an e-VOA or at the airport counter. An extension is another IDR 500,000. For Bali specifically, add a separate tourist levy of IDR 150,000 (about $10). Fees change, so confirm on the official immigration portal." },
        { q: "What is the difference between VOA and e-VOA for Indonesia?", a: "They are the same visa, cost and duration; the difference is where you get it. The e-VOA is bought online before you fly at evisa.imigrasi.go.id, letting you use the airport autogates and skip the on-arrival visa counter. The VOA is bought in that counter queue on landing. The e-VOA is smoother and makes extensions easier." },
        { q: "Is the Bali tourist levy the same as the visa?", a: "No, it is separate. The Bali tourist levy is IDR 150,000 (about $10) per foreign visitor, paid online at the official lovebali.baliprov.go.id for a QR receipt, and it applies only in Bali. It is on top of your $35 visa on arrival, and both are separate again from the free All Indonesia arrival card." }
      ],
      sources: {
        links: [
          { label: "Indonesia Directorate General of Immigration: the official e-Visa and e-VOA portal", url: "https://evisa.imigrasi.go.id", type: "gov" },
          { label: "Love Bali: the official Bali provincial government site for the tourist levy", url: "https://lovebali.baliprov.go.id", type: "gov" },
          { label: "US Department of State: the country information pages, the official router for entry requirements by destination", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html", type: "gov" }
        ],
        judgment: "US citizens now need a visa on arrival for Indonesia, a change from the earlier visa-free access, and Bali adds a separate tourist levy. Fees and the digital arrival requirements have shifted recently, so confirm the current amounts and steps on the official immigration and Love Bali sites before you travel. Checked July 2026."
      }
    },
    {
      slug: "money-scams",
      glance: [
        { k: "Most cost", v: "Tens of dollars, avoidable" },
        { k: "Scooters", v: "Film it before you ride" },
        { k: "Changing money", v: "Licensed only, count it" },
        { k: "Taxis", v: "Bluebird or an app" }
      ],
      live: true,
      topic: "scams",
      title: "Common money scams in Indonesia, and what they cost",
      description: "Scooter damage claims, money changer sleight of hand, taxi meter refusal and card fraud. What each costs a US visitor in Bali and beyond, and how to sidestep it.",
      h1: "Common money scams in Indonesia, and what they cost you",
      lede: "Indonesia is safe for the great majority of visitors and almost none of this is dramatic. What tourists actually meet, especially in Bali, are money traps built on confusion: a fast count at a money changer, damage on a scooter that was already there, a meter that stays off. They cost tens of dollars rather than hundreds, and a few habits defuse nearly all of them. Here is each one, what it costs, and how to sidestep it.",
      checked: "Aug 2026",
      checkedISO: "2026-08-15",
      answer: "Four traps come up again and again: the <b>scooter damage claim</b>, where a rental shop points at scratches that were already there; the <b>money changer</b> with an unbeatable board rate and a fast, confusing count; <b>taxi meter refusal</b> and airport flat rates; and <b>card and ATM fraud</b>, including a fake help number stuck on the machine. Underneath several of them sits one avoidable mistake: <b>leaving your passport as a deposit</b>. The golden rules that beat them: <b>film the scooter before you ride</b>, <b>change money only at a licensed counter and count it yourself</b>, <b>use Bluebird or an app</b>, <b>never hand over your passport as security</b>, and <b>always choose rupiah</b>. None of it should ruin a trip.",
      sections: [
        {
          h: "The scooter damage claim",
          icon: "wheel",
          key: { fig: "$50-300", tag: "Film it first", text: "You return the scooter and the shop points at scratches that were already there, then names a repair price. Photograph and video the bike from every angle before you ride off.", tone: "teal" },
          p: [
            "This is the classic Bali one. You rent a scooter, ride it carefully, bring it back, and the shop finds damage. Sometimes it was there before you arrived; sometimes it appears between drop-off and inspection. Either way you are asked for a repair figure you cannot argue with, typically in the range of <b>50 to 300 dollars</b>. The defense takes ninety seconds: before you ride off, <b>photograph the bike from every angle and take a slow video walk-around</b> with the shop's frontage in shot, so the timestamp and the location are both in the file. Read the rental agreement, and rent from a shop with a real review history rather than the nearest stand.",
            "The version that turns a nuisance into a problem is the <b>passport deposit</b>. Do not do it. A shop holding your passport has leverage over any figure it chooses to name, and you cannot replace the document quickly. Reputable shops take a cash deposit instead. Check too whether your travel insurance actually covers you on two wheels and whether your license is valid for it, because many policies exclude scooters or require the right permit, and Bali police do check."
          ]
        },
        {
          h: "Changing money, and the fast count",
          icon: "cash",
          key: { fig: "Count it twice", tag: "Licensed only", text: "An unlicensed changer offers a board rate that beats the banks, then counts fast and confusingly and palms notes back. Use a licensed counter and count the money yourself before you leave.", tone: "teal" },
          p: [
            "The UK and Australian governments both flag this one directly: <b>unlicensed money changers may short-change you</b>, and it clusters in the tourist strips of Kuta, Seminyak and Ubud. The bait is a board rate noticeably better than the banks, which should be the tell rather than the attraction. The method is a fast, chatty, confusing count, notes folded or palmed back out of the stack, or a calculator that shows one figure while another is paid. Because rupiah runs in large numbers, with roughly <b>17,900 to the dollar</b>, a short count is easy to miss.",
            "The escape is specific and worth memorizing. The FCDO says a licensed exchange is identified by a <b>Bank of Indonesia logo and a QR code</b>, and that you can open that code to check the business name and its operating licence. Then <b>count the money yourself, in front of them, before you leave the counter</b>, and do not let the notes go back across the desk once counted. Better still, skip cash exchange altogether and pull rupiah from a bank ATM, which is covered in the <a href=\"/indonesia/cash-or-card\">Indonesia cash and cards guide</a>."
          ]
        },
        {
          h: "Taxis, apps and the airport",
          icon: "taxi",
          key: { fig: "Meter or app", tag: "Bluebird or Grab", text: "Meter refusal and flat airport rates are the usual move. Use a registered company such as Bluebird, or Grab or Gojek, and check the driver matches the app before you get in.", tone: "teal" },
          p: [
            "Meter refused, or a flat fare quoted at the airport, is the standard transport trap and it is a markup rather than a mugging. The FCDO names the registered companies to use: <b>Bluebird, Silverbird and Express</b>. Bluebird in particular is widely imitated, so check the logo and the driver ID rather than the paint. Otherwise use <b>Grab or Gojek</b>, where the fare is set before you get in and the ride is tracked.",
            "One extra warning from the same advisory is worth carrying: <b>be wary of drivers who claim to be registered with an app and try to pick you up on the street</b>. If you booked in the app, check the car, the plate and the driver's face match what the app shows before you open the door, and share the journey. The full picture is in the <a href=\"/indonesia/taxis-and-apps\">Indonesia taxis and apps guide</a>."
          ]
        },
        {
          h: "Cards, ATMs and the number on the machine",
          icon: "atm",
          key: { tag: "Choose rupiah", text: "Card fraud is common, so keep the card in sight. Ignore any help number stuck on an ATM, since criminals put fake ones there to ask for your card details. And always choose rupiah, not dollars.", tone: "amber" },
          p: [
            "The FCDO calls <b>credit card fraud common</b> in Indonesia and gives two specific instructions: do not lose sight of your card during a transaction, and treat any phone number stuck to an ATM with suspicion, because criminals place <b>fake help numbers</b> on machines so that a caller can talk you through handing over your card details. If a machine misbehaves, call the number on the back of your own card instead. Use ATMs inside bank branches, cover the keypad, and glance at the card slot.",
            "The quieter, legal cost is the same one you meet everywhere: when a card machine or ATM offers to charge you <b>in US dollars or rupiah</b>, always choose <b>rupiah</b>. Dollars uses a poor built-in rate that costs you a few percent on every transaction you accept it on, and over a two-week trip that adds up to more than any single scam on this page."
          ]
        },
        {
          h: "What this means for your money",
          icon: "coins",
          key: { fig: "Habits", tag: "How to avoid it", text: "Film the scooter, use a licensed changer and count it yourself, book transport in an app, agree prices before any treatment, and never leave your passport as security.", tone: "teal" },
          p: [
            "Almost everything here costs tens of dollars and is avoided by the same short list: <b>film the scooter before you ride</b>, <b>change money only at a licensed counter and count it yourself</b>, <b>use Bluebird or an app</b>, <b>choose rupiah at the terminal</b>, and <b>never hand over your passport as security</b>. One more from the FCDO belongs on the list: there has been a rise in fee disputes at <b>tattoo parlours, nail salons and spas</b> in Bali, so agree the price before anything starts. Australia's Smartraveller adds a note about organised <b>card game</b> invitations in Bali, which is the same shape as everything else here: a stranger, a venue you did not pick, a bill.",
            "Handled calmly, none of this should shape your trip. For getting and spending money well while you are there, see the <a href=\"/indonesia/cash-or-card\">Indonesia cash and cards guide</a> and the <a href=\"/indonesia\">Indonesia cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Bali safe for tourists?", a: "For the great majority of visitors, yes, and most trips are trouble free. What tourists actually meet are money traps rather than anything dramatic: scooter damage claims, money changer short-changing, taxi meter refusal and card fraud. A few habits, chiefly filming the scooter, counting your own cash and booking transport in an app, avoid nearly all of them." },
        { q: "How do I avoid the Bali scooter rental scam?", a: "Photograph the scooter from every angle and take a slow video walk-around before you ride off, with the shop in shot so the file is timestamped and located. Read the agreement, rent from a shop with real reviews, and never leave your passport as the deposit. Reputable shops take cash instead. Inflated repair claims typically run 50 to 300 dollars." },
        { q: "Should I leave my passport as a deposit in Indonesia?", a: "No. A rental shop holding your passport has leverage over whatever repair figure it decides to name, and a lost or withheld passport is slow and expensive to replace abroad. Offer a cash deposit instead, and if a shop insists on the passport, walk away and find another. This applies to scooters, cars and tour operators alike." },
        { q: "How do I spot a legitimate money changer in Bali?", a: "A licensed exchange displays a Bank of Indonesia logo and a QR code, and the UK FCDO advises opening that code to check the business name and operating licence. Treat a board rate that clearly beats the banks as a warning rather than a bargain, count the money yourself before leaving the counter, and do not let notes go back across the desk once counted." },
        { q: "Which taxis are safe to use in Indonesia?", a: "Registered companies such as Bluebird, Silverbird and Express, or the Grab and Gojek apps where the fare is set before you get in. Bluebird is widely imitated, so check the logo and driver ID rather than the paint colour. Be wary of anyone claiming to be an app driver while touting on the street, and check the car, plate and driver match the app." },
        { q: "Is ATM fraud a risk in Indonesia?", a: "Card fraud is common enough that the UK FCDO advises never losing sight of your card during a transaction. Criminals have also stuck fake customer help numbers on ATMs so that a caller can ask for your card details. Use machines inside bank branches, cover the keypad, ignore any number on the machine, and call the number on the back of your own card if something goes wrong." }
      ],
      sources: {
        links: [
          { label: "UK FCDO: Indonesia travel advice, safety and security, including scams and money changers", url: "https://www.gov.uk/foreign-travel-advice/indonesia/safety-and-security", type: "gov" },
          { label: "Australian Government Smartraveller: Indonesia travel advice, safety and money", url: "https://www.smartraveller.gov.au/destinations/asia/indonesia", type: "gov" }
        ],
        judgment: "The money changer, card fraud, fake ATM number, registered taxi company and salon fee points all come from current UK FCDO and Australian Smartraveller advice for Indonesia. The 50 to 300 dollar scooter repair range is a typical reported range from traveler accounts and travel insurer guidance, not an official figure, and individual claims have been higher. The rupiah conversion uses roughly 17,900 to the dollar. The vast majority of visits see none of this. Checked August 2026."
      }
    },
    {
      slug: "medical-costs",
      exposureCategory: "depositFirst",
      exposureQuote: "hospitals here, including the private ones in Bali, want a deposit or a guarantee before they will admit you",
      glance: [
        { k: "Admission", v: "Deposit or guarantee first" },
        { k: "Bali included", v: "The private hospitals too" },
        { k: "Serious case", v: "Flies to Singapore" },
        { k: "Real risk", v: "The deposit, then the flight" }
      ],
      live: true,
      topic: "health",
      title: "Getting sick in Indonesia: the guarantee before the bed",
      description: "Indonesian hospitals, including Bali's private ones, want a deposit or a guarantee of payment before admission, and the genuinely serious case flies to Singapore.",
      h1: "What does getting sick in Indonesia cost a visitor?",
      lede: "Indonesia's medical money story has two gates. The first is at the hospital desk: hospitals here, including the private ones in Bali, want a deposit or a guarantee before they will admit you. The second is the map: for the genuinely serious case, the answer is a flight, usually to Singapore.",
      checked: "Aug 2026",
      checkedISO: "2026-08-21",
      answer: "As a visitor you pay for care in Indonesia, and the paying starts early: hospitals generally expect <b>payment up front</b>, and admission comes with a <b>deposit or a guarantee of payment</b>, at the international private hospitals in Bali and Jakarta as much as anywhere. An insurer that can issue a fast guarantee is the practical key to that gate. The second gate is capability: Indonesian care handles the everyday well and cheaply, but the genuinely serious case, major trauma, cardiac, anything complex, is stabilised and then <b>flown out, usually to Singapore</b>, sometimes to Australia from Bali. That flight is the largest number this page implies, and it is the line on a policy worth reading first.",
      insurance: true,
      insuranceNote: "Everyday care in Indonesia is inexpensive and easy to reach in the cities and tourist areas, and we will say that plainly rather than dress the small stuff up as a risk. Cover earns its place at the two gates: the deposit or guarantee a hospital wants before admitting you, and the flight to Singapore that the genuinely serious case takes. A policy for Indonesia should be judged on how fast it can wire a guarantee and on its evacuation limit, not on its outpatient benefit. Faye covers trip medical and evacuation.",
      careFirst: "If it looks serious, get to the nearest hospital first and let the deposit be someone else's problem while you are treated.",
      sections: [
        {
          h: "The deposit gate, Bali included",
          icon: "alert",
          key: { tag: "Guarantee first", text: "Hospitals expect payment up front, and admission takes a deposit or a guarantee of payment, at the international private hospitals as much as anywhere.", tone: "amber" },
          p: [
            "Do not let the resort polish fool you about the billing. Indonesian hospitals, including the international private hospitals that serve Bali and Jakarta, generally expect <b>payment up front</b> and want a <b>deposit or a guarantee of payment before admission</b>. Card holds are normal, and treatment beyond stabilisation waits on the money conversation.",
            "If it looks serious, get to the nearest hospital first and let the deposit be someone else's problem while you are treated. The practical preparation is an insurer with a 24-hour assistance line that Indonesian hospitals recognise, because a <b>guarantee of payment</b> from a known insurer opens the same door the deposit does."
          ]
        },
        {
          h: "The serious case leaves the country",
          icon: "plane",
          key: { tag: "Singapore", text: "Complex and critical cases are stabilised in Indonesia and flown out, usually to Singapore. The flight is the big bill, and the evacuation limit is the number that matters.", tone: "amber" },
          p: [
            "Indonesian medicine handles the everyday well. For the genuinely serious case, the established pattern, and the one your insurer's assistance line will follow, is to <b>stabilise locally and evacuate</b>, most often to <b>Singapore</b>, with Australia the alternative from Bali. That is not a criticism of Indonesia so much as a fact about where the region concentrates its top-end capacity.",
            "The consequence for your money is simple: the largest realistic bill here is not a ward, it is a medically supervised flight across the region, and the <b>evacuation limit</b> on a policy is the number to read before any other. Divers should add the nearest recompression chamber to that thinking, because the dive islands are exactly the places the transfer problem is hardest."
          ]
        },
        {
          h: "Why there are no prices on this page",
          icon: "receipt",
          key: { tag: "Absence is not zero", text: "We have not sourced an Indonesian price list for visitor care that we would stand behind, so we have published none.", tone: "teal" },
          p: [
            "We would rather say this than pad the page. Indonesian care is priced hospital by hospital and island by island, and we did not source a published visitor tariff we would put our name to, so no rupiah figure appears here. Everyday care is inexpensive by US standards, and that qualitative claim is as far as we will go.",
            "The structure is what to plan around: payment up front, a deposit or guarantee at admission, and a flight for the serious case. Those three facts, not a consultation fee, are what decide the money."
          ]
        },
        {
          h: "What this means for your money",
          icon: "cash",
          key: { tag: "Two numbers", text: "Judge a policy for Indonesia on two things: how fast it can wire a guarantee of payment, and the size of its evacuation limit.", tone: "teal" },
          p: [
            "Pay the small stuff yourself: clinics and pharmacies in the cities and tourist areas are inexpensive and easy. For the events that matter, judge a policy on exactly two things: whether its assistance line can put a <b>guarantee of payment</b> in front of an Indonesian admissions desk quickly, and whether its <b>evacuation limit</b> would genuinely cover a medically supervised flight to Singapore.",
            "Scooter riders, and Bali is full of them, should check the fine print twice: many policies exclude two wheels or require the right license, and the exclusion is discovered at the worst moment. For paying on the ground, see the <a href=\"/indonesia/cash-or-card\">Indonesia cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do hospitals in Bali require a deposit?", a: "The private hospitals serving Bali, like Indonesian hospitals generally, expect payment up front and want a deposit or a guarantee of payment before admission. An insurer whose assistance line can wire a guarantee quickly opens the same door." },
        { q: "Where do serious medical cases in Indonesia go?", a: "They are stabilised locally and usually flown to Singapore, or to Australia from Bali. That flight is the largest realistic bill for a Indonesia trip, which is why the evacuation limit on a policy matters more than the outpatient benefit." },
        { q: "Is healthcare in Indonesia cheap?", a: "Everyday care in the cities and tourist areas is inexpensive by US standards. The money story is the admission deposit and, for the serious case, the flight out of the country." },
        { q: "Does my US health insurance work in Indonesia?", a: "Rarely, and Medicare not at all. Hospitals bill you directly and want the deposit or a guarantee regardless. What counts is an insurer with an assistance line that can act fast across time zones." },
        { q: "Do I need travel insurance for Indonesia?", a: "The honest reasons are the deposit gate at admission and the Singapore flight for the serious case, plus dive and scooter cover if those are your trip. Check the guarantee-of-payment machinery and the evacuation limit before anything else." }
      ],
      sources: {
        links: [
          { label: "US State Department: Indonesia country information for US travelers, including health and medical care guidance", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Indonesia.html", type: "gov" }
        ],
        judgment: "The payment-up-front and deposit-or-guarantee-at-admission practice, and the stabilise-and-evacuate pattern for serious cases with Singapore as the usual destination, are the consistent shape of official US guidance and of how insurers actually move patients in this region, stated qualitatively. No rupiah figure appears because pricing varies by hospital and island and we did not source a published visitor tariff we would defend. Checked August 2026.",
      }
    }
  ]
};
