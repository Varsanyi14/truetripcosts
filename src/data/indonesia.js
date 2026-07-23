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

  title: "Money in Indonesia (2026): Cash, Cards, QRIS and the Bali Entry Levy | True Trip Costs",
  description: "How to handle money in Indonesia as a US traveler in 2026: cash vs card in Bali and beyond, why QRIS mostly is not a tool for tourists, fee-free bank ATMs, the one-time Bali entry levy, the 21% hotel tax and service charge, and tipping. Checked July 2026.",

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
      title: "Staying connected in Bali and Indonesia: which eSIM carrier actually reaches where you are going (2026) | True Trip Costs",
      description: "Indonesia has real coverage gaps once you leave South Bali, and it comes down to carrier. Telkomsel reaches the smaller islands, dive areas and remote treks where the others thin out, so the eSIM you pick matters. Checked July 2026.",
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
      title: "Which taxi app to use in Bali and Indonesia, and the no-app zones (2026) | True Trip Costs",
      description: "Which ride app to install for Bali and Indonesia (Grab and Gojek, plus trusted Bluebird), why a local taxi mafia blocks app pickups in parts of Ubud and Canggu, and how to leave Denpasar airport without overpaying. Checked July 2026.",
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
    }
  ]
};
