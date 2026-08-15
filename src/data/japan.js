export default {
  slug: "japan",
  iso2: "jp",
  live: true,
  name: "Japan",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-10",
  emergency: { medical: "119", note: "119 is for an ambulance or fire, and 110 is the police. The 112 and 911 numbers do not work here.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  region: "Asia",
  signals: { cardFriendliness: 3, cashNeed: 3, taxRisk: 3 },
  title: "Do you need cash in Japan? Money tips for 2026",
  description: "Less than you think, though cash still matters at shrines and small shops. Pull yen at a 7-Eleven ATM and load a Suica for transit. Checked 2026.",
  h1: "Money in Japan, sorted.",
  lede: "A calm, current plan for the money side of your trip: what to tap, where you still need cash, and the small rules that trip up first-timers.",
  hero: {
    img: "/japan-hero.jpg",
    h: 1375,
    alt: "A quiet Japan street at dusk with paper lanterns, a small noodle shop, and a steaming bowl of ramen on a wooden table in the foreground"
  },
  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',
  verdict: "Japan is friendlier to cards than its reputation, but <b>cash</b> still rules temples, small restaurants and vending machines. Put a <b>Suica or ICOCA IC card on your phone</b> for trains and convenience stores, bring a <b>no-fee Visa or Mastercard</b> for hotels and shops, and pull yen from a <b>7-Eleven ATM</b>. Carry 10,000 to 20,000 yen, and one golden rule: <b>never tip</b>.",
  recentChange: {
    date: "March 2026",
    text: "Kyoto raised its lodging tax, with top-tier rooms now taxed up to 10,000 yen per night. Most travelers pay far less, but factor it in for a high-end stay."
  },
  meter: {
    heading: "Japan is more card-friendly than its reputation, but cash still rules the small stuff.",
    cashPct: 45,
    note: "A rough feel for everyday spending. Tokyo, Osaka and other cities lean increasingly cashless, and an IC card on your phone covers most small taps. But temples, shrines, small restaurants, vending machines and rural areas are still cash-only, so always keep some yen on you."
  },
  trio: [
    { sym: "card", kind: "warn", h: "Your card", verd: "Works widely in cities", p: "Visa and Mastercard are accepted at hotels, department stores, chain restaurants, convenience stores and JR or Shinkansen counters. Amex is less widely taken, JCB is local. Small izakaya, temples and vending machines are often cash-only.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Still needed daily", p: "Temples, shrines, small restaurants, vending machines, markets and rural spots want yen. Carry 10,000 to 20,000 yen and top up as you go.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy, if you pick the right one", p: "7-Eleven (Seven Bank) ATMs are the most reliable: 24/7, English, low fee (around 110 to 220 yen). Japan Post Bank, AEON, FamilyMart and Lawson also work. Avoid bank ATMs like Mizuho, MUFG and SMBC, which often reject foreign cards.", cta: { label: "See the ATM map", href: "#" } }
  ],
  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Get a <b>no-foreign-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "Bring a <b>no-fee Visa or Mastercard</b> for hotels and shops.",
      "<b>Add a Suica or ICOCA IC card to your phone's Apple or Google Wallet before you land</b>, it is the smoothest way to pay for trains and convenience stores.",
      "<b>Tell your bank</b> you are traveling so it doesn't block the card."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters, or grab just 10,000 to 20,000 yen for day one.",
      "Pull yen from a <b>7-Eleven (Seven Bank) ATM</b> and <b>decline \"convert to USD,\"</b> always choose yen."
    ], cta: { label: "Find 7-Eleven ATMs", tag: "free", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your phone's IC card</b> for trains, buses and convenience stores.",
      "<b>Card</b> for hotels, department stores and chains.",
      "<b>Cash</b> for temples, small restaurants, vending machines and rural spots.",
      "If you are staying more than a few days, <b>PayPay</b> (a QR app) opens up small shops that take no cards."
    ], cta: { label: "Set up PayPay", tag: "free", href: "#" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Never tip.</b> It is not customary and can cause confusion or mild offense.",
      "A warm thank-you is all that is expected."
    ], cta: null }
  ],
  cash: {
    rate: 160, cur: "JPY", round: 10000, defaultIndex: 1,
    rateNote: "Rough guide at 160 yen to the dollar. The yen is historically weak right now, which stretches your money further.",
    styles: [ { n: "Budget", per: 45, cash: 0.6, room: 65 }, { n: "Mid-range", per: 80, cash: 0.45, room: 140 }, { n: "Comfort", per: 150, cash: 0.3, room: 300 } ]
  },
  connectivity: {
    works: "Yes, and it is among the best anywhere. Japan has 4G almost everywhere, including the bullet trains and most rural and mountain areas, with 5G growing in the cities. You will rarely think about your signal."
  },
  // TOURIST TAX (high-churn, verified Jul 2026). A per-person, per-night lodging tax
  // (shukuhakuzei) that only some cities charge, billed in bands by the nightly room
  // price and paid at the hotel. No cap on nights. Most of Japan charges nothing.
  // Bands read in order: the first band whose upTo the per-person nightly rate falls
  // under wins; upTo null is the top band.
  // Typical economy round trip per person from major US gateways, as a verified
  // RANGE, never a point. Sourced from fare-tracker averages (Kayak, momondo,
  // Skyscanner published route data), deliberately wide to cover season and
  // gateway. HIGH-CHURN: re-verify on the tourist-tax cadence. The calculator
  // prefills the midpoint, feeds low/high into the confidence range until the
  // traveler enters their own fare, and hides the estimate if this block is absent.
  flight: { low: 700, high: 1300, checked: "Jul 2026", checkedISO: "2026-07-18" },
  tax: {
    unit: "tieredPerPersonPerNight",
    currency: "JPY",
    capNights: null,
    note: "A per-person, per-night lodging tax that only some cities charge, set in bands by the nightly room price and paid at the hotel. There is no cap on the number of nights. Most of Japan, including rural areas, charges nothing.",
    regions: [
      { key: "tokyo", label: "Tokyo", bands: [ { upTo: 10000, rate: 0 }, { upTo: 15000, rate: 100 }, { upTo: null, rate: 200 } ] },
      { key: "osaka", label: "Osaka", bands: [ { upTo: 5000, rate: 0 }, { upTo: 15000, rate: 200 }, { upTo: 20000, rate: 400 }, { upTo: null, rate: 500 } ] },
      { key: "kyoto", label: "Kyoto", bands: [ { upTo: 6000, rate: 200 }, { upTo: 20000, rate: 400 }, { upTo: 50000, rate: 1000 }, { upTo: 100000, rate: 4000 }, { upTo: null, rate: 10000 } ], note: "Kyoto raised its lodging tax from March 2026, with the highest bands aimed at luxury stays. It is charged per person, per night, by room price." },
      { key: "other", label: "Elsewhere in Japan", bands: [ { upTo: null, rate: 0 } ], note: "Most of Japan charges no lodging tax, though a few other cities (such as Kanazawa or Fukuoka) add a small one. Check your hotel confirmation." }
    ]
  },
  currencyHeading: "The yen, in plain terms.",
  facts: [
    { sym: "yen", k: "Quick conversion", v: "About 160 yen to $1 right now. A rough gut check: 1,000 yen is about $6, and 10,000 yen about $62. The weak yen is good news for your budget." },
    { sym: "coins", k: "Notes and coins", v: "Notes come in 1,000, 5,000 and 10,000 yen. Coins go down to 1 yen and pile up fast, so spend them at convenience-store kiosks and vending machines." },
    { sym: "notip", k: "No tipping", v: "Japan has no tipping culture. Leaving extra can confuse staff or be politely refused. A thank-you is enough." },
    { sym: "ic", k: "IC cards", v: "Suica, ICOCA and Pasmo are tap-to-pay cards for transit and convenience stores. The easiest route is adding one to your phone's Apple or Google Wallet before arrival." }
  ],
  taxfree: {
    heading: "Shop tax-free as a tourist.",
    text: "Tourists can buy consumption-tax-free (10%) at shops marked \"Tax Free,\" including department stores, electronics chains like Bic Camera and Yodobashi, and many drugstores. Show your passport at the register. Consumables are sealed and must leave Japan unopened. Confirm the details at the till, as the tax-free system is being reformed."
  },
  traps: [
    "<b>\"Pay in USD?\" Always say no.</b> At a card machine or ATM, choosing your home currency (dynamic currency conversion) quietly adds 3 to 7%. Pick yen every time.",
    "<b>Most bank ATMs reject foreign cards.</b> Mizuho, MUFG and SMBC machines will refuse you. Head to a 7-Eleven (Seven Bank) or Japan Post ATM instead.",
    "<b>Never tip.</b> It is genuinely not done here, and a tip can cause awkwardness rather than gratitude.",
    "<b>Cash-only surprises.</b> Temples, small ramen shops, vending machines and rural spots take only yen, so keep at least 10,000 yen on you even in big cities."
  ],
  tippingHeading: "Don't tip, really.",
  tipping: "Japan has no tipping culture, and there is no awkwardness in not tipping, it is simply the norm. Leaving extra money can confuse or even mildly offend, and staff may chase you to return it. Exceptional service is met with a polite thank-you, not a gratuity. The rare exception is handing a small thank-you in an envelope to a private guide or a ryokan host, in person.",
  sources: {
    changed: "Re-checked July 2026, both confirmed on track. Kyoto raised its lodging tax from 1 March 2026, with top-tier rooms now taxed up to 10,000 yen per person per night, and from 1 November 2026 Japan switches tax-free shopping from an instant discount at the till to a refund claimed at the airport.",
    links: [
      { label: "Ministry of Finance, Japan: the 10% consumption tax that applies to most goods and services", url: "https://www.mof.go.jp/english/policy/tax_policy/tax_system/consumption/index.html", type: "revenue" },
      { label: "Japan National Tourism Organization: tax-free shopping for visitors and the move to airport refunds from November 2026", url: "https://www.japan.travel/en/plan/japans-tax-exemption/", type: "tourism" },
      { label: "National Tax Agency: the notice to foreign travelers on tax-free purchases and how the refund works", url: "https://www.nta.go.jp/publication/pamph/shohi/menzei/201805/pdf/explanation_eng.pdf", type: "revenue" },
    ],
    judgment: "Japan's lodging tax is set city by city rather than as one national rate, so the figure here is a typical band, not an official single rate. The daily cash share, tipping norms and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  faqs: [
    { q: "Do I need cash in Japan?", a: "Yes, though less than before. Temples, small restaurants, vending machines and rural areas are still cash-only. Carry 10,000 to 20,000 yen and top up at 7-Eleven ATMs." },
    { q: "Which ATM works with my foreign card in Japan?", a: "7-Eleven (Seven Bank) ATMs are the most reliable, open 24/7 with English and a low fee. Japan Post Bank, AEON, FamilyMart and Lawson also work. Avoid Mizuho, MUFG and SMBC, which often reject foreign cards." },
    { q: "Should I tip in Japan?", a: "No. Tipping is not customary and can cause confusion or offense. A polite thank-you is enough." },
    { q: "Do I need a Suica or IC card in Japan?", a: "It is the smoothest way to pay for trains, buses and convenience stores. The easiest route is adding a Suica or ICOCA to your phone's Apple or Google Wallet before you arrive." },
    { q: "How much cash should I bring for a week in Japan?", a: "For two mid-range travelers, plan very roughly 80,000 to 100,000 yen in day-to-day cash across a week, beyond hotels, withdrawn in a couple of ATM visits. Adjust for your style." },
    { q: "Can I shop tax-free as a tourist in Japan?", a: "Yes. At \"Tax Free\" shops, show your passport to buy consumption-tax-free. Consumables are sealed and must leave Japan unopened. Confirm at the register, as the system is being reformed." }
  ],

  culture: {
    heading: "A little Japanese goes a long way",
    intro: "A few words and a couple of stories that turn you from a tourist into a guest. In Japan, small signs of respect and understanding are noticed, and quietly returned.",
    phrases: [
      { mean: "Hello", say: "kohn-nee-chee-WAH", word: "Konnichiwa", native: "こんにちは" },
      { mean: "Please", say: "oh-neh-gah-ee-shee-mahss", word: "Onegai shimasu", native: "お願いします" },
      { mean: "Thank you", say: "ah-ree-GAH-toh goh-zah-ee-mahss", word: "Arigatou gozaimasu", native: "ありがとうございます" },
      { mean: "Cheers", say: "kahn-PIE", word: "Kanpai", native: "乾杯" },
      { mean: "Delicious", say: "oy-SHEE", word: "Oishii", native: "おいしい" },
      { mean: "Beautiful!", say: "kee-RAY", word: "Kirei", native: "きれい" },
    ],
    tip: "a small bow with your thanks goes far, and <b>Sumimasen</b> (soo-mee-mah-sen) covers both excuse me and sorry, the word you will reach for most.",
    stories: [
      { img: "/japan-culture-1.jpg",
        alt: "WPA-style illustration of the forty-seven ronin marching in single file through falling snow at night with paper lanterns",
        h: "The forty-seven who kept faith",
        p: "When their lord was forced to take his own life, forty-seven samurai became masterless ronin, waited patiently, then avenged him, knowing it would cost their own lives. The tale of the forty-seven ronin is Japan's cherished story of loyalty and duty, giri.",
        note: "Good to know: giri means duty and loyalty, deeply valued here" },
      { img: "/japan-culture-2.jpg",
        alt: "WPA-style illustration of Mount Fuji beyond a calm lake with a red torii gate and cherry blossoms in bloom",
        h: "The beauty of things passing",
        p: "Cherry blossoms bloom gloriously and fall within days, and the Japanese have a phrase for the tender feeling it stirs: mono no aware, an awareness of how fleeting things are. Admire it aloud in spring and you are speaking their language.",
        note: "Say it: mono no aware (moh-noh noh ah-wah-reh)" },
      { img: "/japan-culture-3.jpg",
        alt: "WPA-style illustration of a lone samurai standing in calm readiness at dawn beside a blossoming plum tree",
        h: "The way of the warrior",
        p: "The samurai lived by bushido, a code of honor, discipline, and self-control that still shapes how respect works in Japan today. It is why the small bow, the quiet politeness, and the care taken over everything matter so much.",
        note: "Good to know: bushido, the samurai code of honor" },
    ],
    pride: "Japan blends deep tradition with the cutting edge like nowhere else. Respect shown through small gestures, a bow, patience, care, is noticed and quietly appreciated."
  },

  // HUB-AND-SPOKE SPOKES. Data-driven, single-source, each independently dated,
  // rendered by components/Spoke.astro via src/pages/[slug]/[spoke].astro.
  spokes: [
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Apps", v: "GO (Uber also calls taxis)" },
        { k: "Taxis", v: "Honest, metered, doors open for you" },
        { k: "From the airport", v: "Trains usually beat a taxi" },
        { k: "Tipping", v: "None, ever" }
      ],
      live: true,
      topic: "taxis",
      caution: "low",
      title: "Taxis in Japan: the GO app, or take the train",
      description: "The GO app leads in Japan, and Uber calls taxis. Why trains beat a cab from Narita or Haneda, how the honest meter works, and why you never tip.",
      h1: "Taxis in Japan, and the GO app",
      lede: "Japanese taxis are spotless, honest and metered, with doors that open for you and no tipping ever. They are also pricey, so from the airport the train usually wins. Here is how it works.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Install <b>GO</b>, the taxi app most used in Japan, and <b>Uber</b> works too, though in Japan it <b>calls a licensed taxi</b> rather than a private car (the cheap UberX model is restricted here). Japanese taxis are <b>famously honest</b>: metered, clean, the rear door <b>opens and closes automatically</b>, and there is <b>no tipping</b>, ever. They are also <b>expensive</b>, so from <b>Narita or Haneda</b> the <b>train usually wins</b>. Most city taxis now take <b>cards and IC cards</b> (Suica, Pasmo) as well as cash.",
      sections: [
        {
          h: "Which app to install",
          icon: "phoneok",
          key: { fig: "GO", tag: "Uber calls taxis too", text: "GO is the taxi app most used in Japan. Uber works but calls a licensed taxi, not a private car, so both simply dispatch a metered cab.", tone: "teal" },
          p: [
            "<b>GO</b> is the app most Japanese use to hail a taxi, with the widest coverage in cities, so install it first. <b>Uber</b> works too, but in Japan it <b>dispatches a licensed taxi</b> rather than a private car, since the cheap UberX private-car model is restricted. <b>DiDi</b> also operates in some cities.",
            "The point of the app is convenience, not a cheaper ride: you see the car coming, avoid explaining directions in Japanese, and pay in the app. Coverage is strong in <b>Tokyo, Osaka, Kyoto</b> and other cities, thinner in rural areas where you may phone a local company."
          ]
        },
        {
          h: "From the airport, the train usually wins",
          icon: "plane",
          key: { fig: "Train", tag: "A taxi is pricey", text: "A taxi from Narita to central Tokyo can run 20,000 to 30,000 yen. The Narita Express, Skyliner or Airport Limousine bus cost a fraction of that.", tone: "teal" },
          p: [
            "A taxi from <b>Narita (NRT)</b> to central Tokyo can run <b>20,000 to 30,000 yen</b>, so unless you have heavy bags or a group, the <b>train wins</b>: the <b>Narita Express (N EX)</b> or the <b>Keisei Skyliner</b> reach the city in under an hour for a fraction of the price, and the <b>Airport Limousine bus</b> serves major hotels.",
            "<b>Haneda (HND)</b> is much closer, so a taxi to central Tokyo is more reasonable (roughly <b>6,000 to 9,000 yen</b>), but the <b>Keikyu train or monorail</b> are still far cheaper and quick. Buy an <b>IC card</b> (Suica or Pasmo, or the mobile version) on arrival and trains become tap-and-go."
          ]
        },
        {
          h: "How Japanese taxis work",
          icon: "wheel",
          key: { fig: "Auto doors", tag: "Honest and metered", text: "The rear door opens and closes automatically, so do not touch it. Taxis are metered, honest and clean, with no need to negotiate or watch the meter.", tone: "teal" },
          p: [
            "A few things surprise first-timers. The <b>rear passenger door opens and closes automatically</b>, operated by the driver, so <b>stand back and do not pull it</b>. Drivers often wear white gloves, the cars are spotless, and the <b>meter is honest</b>, so there is no haggling or watching for tricks.",
            "Have your <b>destination written down</b> or shown on a map on your phone, since not all drivers speak English and Japanese addresses are hard to convey. A green light in the windscreen means the taxi is <b>available</b>."
          ]
        },
        {
          h: "Fares, paying and no tipping",
          icon: "yen",
          key: { fig: "No tip", tag: "Metered, pricey", text: "Taxis are metered with a base fare and a per-distance rate, plus a late-night surcharge. You never tip, and most city taxis take cards and IC cards.", tone: "teal" },
          p: [
            "Fares are <b>metered</b>: a base fare of a few hundred yen plus a per-distance charge, with a <b>late-night surcharge</b> (roughly 22:00 to 05:00). Most <b>city taxis take cards and IC cards</b> (Suica, Pasmo) as well as cash, though a small-town taxi may be cash-only.",
            "You do <b>not tip</b> in Japan, and trying to can cause confusion. Just pay the metered fare. For more, see <a href='/japan/tipping'>tipping in Japan</a>, <a href='/japan/cash-or-card'>cash or card in Japan</a>, and the <a href='/japan'>Japan money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Uber in Japan?", a: "Yes, but in Japan Uber dispatches a licensed taxi rather than a private car, since the cheap UberX model is restricted. The app most Japanese use is GO, which works the same way. Both simply call a metered cab." },
        { q: "Should I take a taxi from Narita to Tokyo?", a: "Usually not: a taxi can run 20,000 to 30,000 yen. The Narita Express, Keisei Skyliner or Airport Limousine bus reach the city for a fraction of that. Haneda is closer and cheaper, but its trains still win." },
        { q: "Do you tip taxi drivers in Japan?", a: "No, never. Tipping is not part of Japanese culture and can cause confusion. Just pay the metered fare, by card, IC card or cash." },
        { q: "Do Japanese taxis take cards?", a: "Most city taxis take cards and IC cards like Suica and Pasmo, as well as cash. A small-town or rural taxi may be cash-only, so carry some yen as a backup." }
      ],
      sources: {
        links: [
          { label: "Japan National Tourism Organization: official travel information", url: "https://www.japan.travel/en/", type: "gov" },
          { label: "US State Department: Japan country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Japan.html", type: "gov" }
        ],
        judgment: "Japanese taxis are honest and metered, GO is the leading app, and trains beat a taxi from the airports. Fares and app coverage shift over time, so this is our practical read. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Japanese yen (¥ JPY)" },
        { k: "Cards", v: "Fine across cities" },
        { k: "Still cash", v: "Shrines, small shops, vending" },
        { k: "Get yen at", v: "7-Eleven, Japan Post" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Japan? Some yen, yes 2026",
      description: "Japan is going cashless fast, but you still need yen. Which ATMs take foreign cards, when cash is unavoidable, IC cards for transit, and one setting.",
      h1: "Do I need cash in Japan, or can I use cards?",
      lede: "Short answer: bring some cash, but you will tap and swipe for most of a city trip. The catch is that most Japanese bank ATMs reject foreign cards. Here is where to get yen, when you truly need it, and how to pay for the rest.",
      checked: "Jul 2026",
      checkedISO: "2026-07-08",
      answer: "Both, and the mix matters. Japan went <b>58% cashless in 2025</b>, so in cities you can tap a card or phone almost everywhere, but <b>cash is still essential</b> for shrines, small restaurants, market stalls and vending machines. The trap: <b>most Japanese bank ATMs reject foreign cards</b>, so pull yen from a <b>7-Eleven (Seven Bank) or Japan Post</b> ATM, get an <b>IC card</b> (Suica) for transit, and always choose <b>yen, not dollars</b>, at the terminal.",
      sections: [
        {
          h: "The real picture: cashless, but not cash-free",
          icon: "qr",
          key: { fig: "58%", tag: "Cashless in 2025", text: "But shrines, small shops and vending machines are still cash. Big things on a card, the small old-fashioned things in cash.", tone: "teal" },
          p: [
            "Japan's reputation as a cash country is fading fast. Cashless payments hit <b>58% of spending in 2025</b> (Japan's METI), and across Tokyo, Osaka and the other big cities you can tap a contactless card or phone at convenience stores, chains, hotels and department stores without thinking about it.",
            "But <b>cash is still essential</b> in the places travelers love most: temples and shrines (entry fees and goshuin stamps), small family restaurants and coffee shops, market and festival stalls, older ryokan inns, coin lockers, and most vending machines (card acceptance there is under 10%). A useful rule: <b>big things on a card, small and old-fashioned things in cash</b>."
          ]
        },
        {
          h: "Getting yen: only some ATMs take foreign cards",
          icon: "atm",
          key: { tag: "Watch out", text: "Most bank ATMs (Mizuho, MUFG, SMBC) reject foreign cards. Pull yen at a 7-Eleven or Japan Post ATM instead.", tone: "amber" },
          p: [
            "Here is the part that catches first-timers. <b>Most ordinary Japanese bank ATMs</b> (Mizuho, MUFG, SMBC and the like) simply <b>will not accept a card issued outside Japan</b>, they reject it and hand it back. Use these instead:"
          ],
          steps: [
            "7-Eleven (Seven Bank) ATMs: inside every 7-Eleven, open 24/7, English menu, take Visa, Mastercard, Amex, JCB and UnionPay, with a roughly 100,000 yen per-withdrawal cap. These are the go-to.",
            "Japan Post Bank (Yucho) ATMs: at post offices and many stations, similar acceptance, but not 24/7, so do not count on one late at night.",
            "Lawson and Family Mart konbini ATMs: a fine backup where there is no 7-Eleven, so look for the card-network logos on the machine."
          ]
        },
        {
          h: "Cards and taps, and an IC card for the rest",
          icon: "ic",
          key: { fig: "Suica", tag: "Set this up first", text: "A digital IC card in your phone taps you through transit and konbini. Carry a Visa or Mastercard as your main, Amex is patchy.", tone: "teal" },
          p: [
            "For cards, <b>Visa and Mastercard</b> are the most widely accepted, JCB is good, and <b>Amex is patchy</b>, so carry a Visa or Mastercard as your main. The single most useful thing to set up is an <b>IC card</b>, Suica, Pasmo or ICOCA, which you tap for trains, most convenience stores and many vending machines.",
            "The slickest route is a <b>digital Suica in your phone's wallet</b>: iPhone users can add Suica in Apple Wallet and top it up (some foreign cards are declined for the top-up, in which case load cash onto a physical card at any station machine). Set it up before you fly and you skip the airport ticket lines entirely."
          ]
        },
        {
          h: "The one setting to get right, and no tipping",
          icon: "notip",
          key: { fig: "Yen", tag: "At the terminal", text: "Always choose yen, never dollars, on both card machines and ATMs. Dollars triggers dynamic currency conversion, a marked-up rate.", tone: "teal" },
          p: [
            "When a card terminal or ATM asks whether to charge in <b>US dollars or Japanese yen, always choose yen</b>. Choosing dollars triggers dynamic currency conversion, a poor exchange rate dressed up as a convenience, and you pay more. Picking yen lets your own bank do the conversion, which is almost always cheaper.",
            "Two smaller notes: <b>tipping is not expected</b> in Japan and can feel awkward, and travelers checks are effectively dead there. For how much to carry and the rest of the money picture, see the <a href=\"/japan\">Japan money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Can I get by in Japan with just a card, or do I need cash?", a: "You need some cash. Japan hit 58% cashless in 2025 and cards or phone taps cover most city spending, but cash is still essential for shrines, small restaurants, market stalls, coin lockers and vending machines. A good approach: carry 15,000 to 30,000 yen, use a card for bigger things, and tap an IC card for transit and convenience stores." },
        { q: "Which ATMs in Japan accept foreign cards?", a: "7-Eleven (Seven Bank) ATMs are the most reliable, open 24/7 with an English menu and accepting Visa, Mastercard, Amex, JCB and UnionPay. Japan Post Bank ATMs also work but are not 24/7, and Lawson and Family Mart konbini ATMs are a backup. Most regular bank-branch ATMs (Mizuho, MUFG, SMBC) reject foreign cards." },
        { q: "Do I need a Suica or IC card in Japan?", a: "It is not required, but it is the most convenient thing you can set up. An IC card (Suica, Pasmo or ICOCA) taps you through train gates and pays at most convenience stores and many vending machines. iPhone users can add a digital Suica in Apple Wallet before the trip and skip the ticket machines." },
        { q: "Should I choose yen or dollars when a card machine asks in Japan?", a: "Always choose yen. Choosing US dollars triggers dynamic currency conversion, a marked-up exchange rate, so you pay more. Selecting yen lets your own bank handle the conversion at a better rate. The same applies at ATMs: decline any offer to convert to dollars." }
      ],
      sources: {
        links: [
          { label: "Japan METI (Ministry of Economy, Trade and Industry): the cashless payment ratio reaching 58.0% in 2025, from its March 2026 data", url: "https://www.meti.go.jp/english/", type: "gov" },
          { label: "Seven Bank: the official page on using overseas-issued cards to withdraw yen at 7-Eleven ATMs", url: "https://www.sevenbank.co.jp/intlcard/index2.html", type: "card" },
          { label: "Japan Post Bank: using cards issued overseas at Japan Post (Yucho) ATMs", url: "https://www.jp-bank.japanpost.jp/en/", type: "card" }
        ],
        judgment: "The cashless figure is Japan's official METI data; the ATM, card and IC-card details are our practical read from recent trips and the operators' own pages, and acceptance can vary by machine and card, so carry a backup. Checked July 2026."
      }
    },
    {
      slug: "bringing-your-pet",
      glance: [
        { k: "Lead time", v: "7 to 8 months" },
        { k: "Cost", v: "About $3,000 to $8,000" },
        { k: "Fixed wait", v: "180 days, cannot shorten" },
        { k: "Advance notice", v: "40+ days to the port" }
      ],
      live: true,
      topic: "pets",
      title: "Bringing a dog or cat to Japan: the 180-day clock",
      description: "The rabies antibody test and its fixed 180-day wait make this a 7 to 8 month process. The full step order, and a realistic all-in cost. Checked 2026.",
      h1: "Bringing your dog or cat to Japan.",
      lede: "Japan is one of the long-lead destinations. Two numbers decide everything: the lead time, which is 7 to 8 months because of a fixed 180-day wait you cannot shorten, and the all-in cost, which runs into the thousands. Miss the sequence and the clock resets. Here is the order, the official route, and what to budget.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Start early: this is a <b>7 to 8 month</b> process, not a few weeks. Japan protects its rabies-free status with a <b>rabies antibody test followed by a fixed 180-day wait</b> that cannot be shortened, so the timeline is set by biology, not paperwork. Do the steps <b>in order</b>: microchip, two rabies shots, the antibody test, the 180-day wait, then advance notice to the port at least 40 days out. All in, budget <b>roughly $3,000 to $8,000 or more</b>, driven mostly by flying your pet as cargo. A dog coming the other way, home to the US from Japan, has an easy time.",
      sections: [
        {
          h: "The two numbers: lead time and cost",
          icon: "calendar",
          key: { fig: "180 days", tag: "The fixed wait", text: "A rabies antibody test, then a set 180-day wait you cannot shorten. That, not paperwork, is what makes it a 7 to 8 month process.", tone: "teal" },
          p: [
            "Before the detail, the two things that decide a move to Japan with a pet. <b>Lead time is 7 to 8 months</b>, and most of that is a single fixed waiting period you cannot buy your way out of. <b>All-in cost is roughly $3,000 to $8,000 or more</b>, with the biggest line being air transport, since pets on this route usually fly as cargo rather than in the cabin. Vet visits, the rabies antibody test, and the health paperwork make up most of the rest.",
            "The reason Japan takes so long is that it is rabies-free and works hard to stay that way. Every step below exists to prove your pet is not carrying rabies, and the order is strict. One misstep, such as a rabies shot given before the microchip, can invalidate the work and restart the clock."
          ]
        },
        {
          h: "The steps, in the order that matters",
          icon: "health",
          key: { tag: "Order matters", text: "Microchip, then two rabies shots, then the antibody test, then the wait. Doing these out of order is the most common and most expensive mistake.", tone: "amber" },
          p: [
            "Follow these in sequence. Skipping ahead or doing them out of order is the most common and most expensive mistake."
          ],
          steps: [
            "Microchip first. Your pet needs an ISO 11784 or 11785 microchip, implanted before any rabies vaccination that counts for this process.",
            "Two rabies vaccinations, after the chip. The first can be given once your pet is at least 91 days old, and the second at least 30 days after the first. Both must come after the microchip.",
            "Rabies antibody test (FAVN or RNATT). A blood sample goes to a Japan-designated laboratory, and the result must be at least 0.5 IU per ml. The draw can be the same day as the second shot, and the result stays valid for 2 years from the blood-draw date.",
            "The 180-day wait. This is the big one. A 180-day clock starts on the day the blood is drawn, which counts as day zero, and your pet cannot enter Japan until it is complete. Arrive early and your pet is held in quarantine at the port for the remainder, up to 180 days. There is no way to shorten it.",
            "Advance notice to the Animal Quarantine Service (AQS). Tell the arrival port at least 40 days before you land. You can file this during the 180-day wait, and AQS issues an Approval of Import Inspection.",
            "Pre-export exam and endorsed certificate. Within 10 days of travel, a USDA-accredited vet examines your pet and completes the health certificate, which USDA APHIS then endorses.",
            "Import inspection on arrival. If every document lines up and the 180 days are complete, inspection at the airport is usually quick."
          ]
        },
        {
          h: "Which lab, and what to do after you land",
          icon: "receipt",
          key: { fig: "2 labs", tag: "Use a designated lab", text: "The antibody test must go to a Japan-approved lab. Kansas State University in Manhattan, Kansas is open to any US exporter.", tone: "teal" },
          p: [
            "For the rabies antibody test, the two Japan-designated laboratories in the US are the <b>Kansas State University Rabies Laboratory</b> in Manhattan, Kansas, which is open to any US exporter, and the Department of Defense laboratory at Fort Sam Houston in Texas, used mainly by military families. Your USDA-accredited vet sends the sample; you do not ship blood yourself.",
            "After arrival, Japan asks you to register a dog at the local municipal office within 30 days, keep up an annual rabies vaccination, and hold onto the Import Quarantine Certificate you are given, so keep it somewhere safe."
          ]
        },
        {
          h: "The money side, honestly",
          p: [
            "No insurance product reimburses mandatory quarantine. Not pet health insurance, not travel insurance with a pet add-on, not a shipper's own protection plan. If your destination requires a quarantine stay, treat that boarding bill as an out-of-pocket cost and budget it from the start. Nationwide is the one US pet insurer that reimburses vet care at any licensed vet worldwide, and even it excludes boarding, which is what quarantine is.",
            "US pet insurance is written around a pet that lives in the US. Most policies carry a policy territory, typically the US and sometimes Canada or Puerto Rico, and even the ones that reimburse vet care worldwide generally require your primary residence to stay in the US. So a policy may well pay a vet bill on a trip abroad and still lapse the day the move becomes permanent. Read your own policy's territory and residency wording before you assume it travels with you, and for a permanent move plan on taking out local pet insurance in your new country.",
            "As a rough sanity check on any quote, and this is our read of current market pricing rather than an official figure: a standard international pet move tends to run about $1,500 to $6,000, while destinations with mandatory quarantine sit higher, roughly $3,000 to $12,000 and up. Australia in particular often lands between $5,000 and $15,000 once quarantine and the limited set of approved flights are counted. Full-service door-to-door typically costs 30 to 50 percent more than a transport-only booking where you handle the vet work and paperwork yourself.",
            "The costs people forget are the small ones. USDA APHIS charges a user fee to endorse an export health certificate, currently $101 where no test verification is needed, $160 for a certificate covering one or two tests, and $206 for three to six tests, with rabies vaccination not counted in that tally. These rates rose on 10 January 2025, the first APHIS fee adjustment since 2012. Add an airline-compliant crate (roughly $50 to $400), the travel vet visits themselves, boarding on a layover, and summer heat surcharges.",
            "Pet shipping attracts scammers, so verify any company before you send money. IPATA, the International Pet and Animal Transportation Association, is a trade association: its members ship under their own company names, IPATA itself does not ship pets, and there is no legitimate shipper with \"ipata\" in its name. Scammers clone real shippers' sites, logos and testimonials, so check the company in the member directory at ipata.org rather than trusting a logo on a website. Treat these as red flags: a quote dramatically below every other quote, a domain registered less than six months ago, email coming from a gmail address rather than the company domain, and any request to pay by Western Union or MoneyGram."
          ]
        },
        {
          h: "Coming back to the US is the easy part",
          icon: "plane",
          key: { fig: "Easy", tag: "The return trip", text: "Because Japan is rabies-free, a dog flying home usually needs only a free CDC form receipt, with no titer and no quarantine.", tone: "teal" },
          p: [
            "Good news for the return trip: because Japan is rabies-free, a dog flying home to the US from Japan is on the simplest path. In most cases the only document you need is a free CDC form receipt, with no titer and no quarantine. We cover exactly what that involves in our guide to <a href=\"/bringing-a-dog-into-the-us\">bringing a dog into the US</a>.",
            "For the wider picture, including how Japan compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."
          ]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Japan",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-japan",
        note: "The US-side steps, the health certificate, and the link to Japan's own rules. Japan's Animal Quarantine Service is the final word on the day."
      },
      faqs: [
        { q: "How long does it take to bring a pet to Japan from the US?", a: "Plan for 7 to 8 months. The timeline is driven by a fixed 180-day waiting period that begins on the day blood is drawn for the rabies antibody test, and it cannot be shortened. Add the microchip, two rabies shots spaced at least 30 days apart, the antibody test, and advance notice to the port at least 40 days before arrival, and the front end adds up quickly too. Start early." },
        { q: "How much does it cost to bring a dog or cat to Japan?", a: "Realistically about $3,000 to $8,000 or more, all in. The largest cost is air transport, since pets on this route usually fly as cargo, not in the cabin. Vet visits, the rabies antibody test at a designated lab, and the endorsed health certificate make up most of the rest. A large dog costs more than a small cat, mostly because of crate size and cargo pricing." },
        { q: "What happens if I arrive in Japan before the 180 days are up?", a: "Your pet is held in quarantine at the port for the remaining days, up to a maximum of 180. The waiting period cannot be shortened for any reason, so the safe approach is to count 180 days from the blood-draw date and only book travel after that." },
        { q: "Do I need to quarantine my pet coming back to the US from Japan?", a: "No. Japan is rabies-free, so a dog returning to the US from Japan is on the CDC easy path: in most cases a free CDC Dog Import Form receipt is the only document required, with no titer and no quarantine. See our guide to bringing a dog into the US for the details." }
      ],
      sources: {
        links: [
          { label: "USDA APHIS: pet travel from the United States to Japan, the US-side requirements and health certificate", url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-japan", type: "gov" },
          { label: "Japan Animal Quarantine Service (AQS): Japan's own import rules for dogs and cats, including the 180-day rule and advance notification", url: "https://www.maff.go.jp/aqs/english/index.html", type: "gov" },
          { label: "USDA APHIS: the US to Japan step-by-step flowchart for the full sequence and timing", url: "https://www.aphis.usda.gov/sites/default/files/japan-flowchart.pdf", type: "gov" }
        ],
        judgment: "The steps and the 180-day rule are set by Japan's Animal Quarantine Service and administered on the US side by APHIS, not by us. Timing is unusually unforgiving here, so we point you to the official pages and dated this in July 2026. Costs vary with your pet's size and your route, so treat the range as a starting point and confirm current requirements before you begin."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Not customary" },
        { k: "Restaurants & taxis", v: "No tip expected" },
        { k: "Leaving extra", v: "Can confuse or offend" },
        { k: "Instead", v: "Say thank you" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Japan: why you should not tip 2026",
      description: "Japan has no tipping culture, and leaving extra money can cause confusion. What to do instead, and the rare cases where a small thank-you fits.",
      h1: "Tipping in Japan",
      lede: "The answer here is simple and genuinely freeing: do not tip. Japan has no tipping culture, nobody expects one, and leaving extra money can cause confusion rather than gratitude. A polite thank-you is all that is needed.",
      checked: "Jul 2026",
      checkedISO: "2026-07-20",
      answer: "Japan has <b>no tipping culture</b>, and there is no awkwardness in not tipping: it is simply the norm. Leaving extra money can <b>confuse or even mildly offend</b>, and staff may chase you down to return it. Exceptional service is met with a <b>polite thank-you</b>, not a gratuity. This applies everywhere: restaurants, taxis, hotels, bars and hair salons. The rare exception is handing a small <b>thank-you in an envelope</b> to a private guide or a ryokan (traditional inn) host, in person.",
      sections: [
        {
          h: "Why tipping does not work here",
          icon: "notip",
          key: { tag: "Do not tip", text: "Good service is the professional standard, and staff are paid a proper salary. Money on top can feel transactional, and staff may chase you to return it.", tone: "amber" },
          p: [
            "In Japan, good service is the professional standard, not something extra that earns a reward. Staff are paid a proper salary and take pride in the quality of their work. Offering money on top can feel <b>transactional</b> in a way that clashes with that ethos.",
            "If you leave cash on a restaurant table, do not be surprised if a server <b>chases you to return it</b>, thinking you forgot it. This is not rudeness, it is the opposite: they are looking after you."
          ]
        },
        {
          h: "The rare exceptions",
          icon: "tip",
          key: { fig: "Envelope", tag: "The one exception", text: "For a private guide or ryokan host who went well beyond, a small thank-you goes in an envelope, never cash left on the table.", tone: "teal" },
          p: [
            "There are a few quiet exceptions where a small thank-you gift is appropriate, but even these are not cash-on-the-table situations. For a <b>private guide</b> who has gone well beyond the brief, or a <b>ryokan host</b> who has looked after you personally, you can offer a small amount of cash <b>in an envelope</b>, handed directly and discreetly. The envelope matters: handing over bare cash feels abrupt.",
            "At a <b>high-end ryokan</b>, some guests leave a <b>kokorozuke</b> (a gesture of gratitude, typically 1,000 to 3,000 yen in an envelope) for the nakai-san who attends your room. It is not expected, but it is understood. Beyond these, the answer is simply: do not tip."
          ]
        },
        {
          h: "What to do instead",
          icon: "bowl",
          key: { fig: "Thanks", tag: "Instead of a tip", text: "A sincere arigatou gozaimasu, or gochisousama deshita as you leave a restaurant, is the real thank-you here.", tone: "teal" },
          p: [
            "A sincere <b>thank-you</b> goes a long way. In Japanese, a warm <b>arigatou gozaimasu</b> is the standard. At a restaurant, a simple <b>gochisousama deshita</b> (thank you for the meal) as you leave is the polite equivalent of what a tip is meant to convey at home."
          ]
        }
      ],
      faqs: [
        { q: "Should I tip in Japan?", a: "No. Tipping is not customary in Japan and can cause confusion or mild offense. A polite thank-you is enough. Staff are paid a proper salary and do not expect or depend on tips." },
        { q: "Is it rude to tip in Japan?", a: "It can feel that way. Leaving cash on a table may confuse a server, who could chase you to return it. It is not considered rude so much as puzzling, and it is best avoided." },
        { q: "Do you tip at a ryokan in Japan?", a: "It is not expected, but at a high-end ryokan some guests leave a small kokorozuke (typically 1,000 to 3,000 yen in an envelope) for the nakai-san who attends the room. Hand it over discreetly and in person. At a standard ryokan or hotel, no tip is needed." },
        { q: "Do you tip taxi drivers in Japan?", a: "No. Taxi drivers do not expect tips. The fare on the meter is the fare, and rounding up or leaving change is not customary." }
      ],
      sources: {
        links: [
          { label: "US State Department: Japan country information and local customs", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Japan.html", type: "gov" }
        ],
        judgment: "Tipping norms in Japan are cultural and longstanding, not a recent policy. The no-tipping standard is consistent across the country and is not a judgment call. The ryokan kokorozuke exception is a soft custom, not a rule. Checked July 2026."
      }
    },
    {
      slug: "visa",
      glance: [
        { k: "Visa", v: "None for stays up to 90 days" },
        { k: "Authorization", v: "None required, JESTA not yet in force" },
        { k: "Need", v: "A valid passport and onward ticket" },
        { k: "Visit Japan Web", v: "Optional, free, speeds entry" }
      ],
      live: true,
      topic: "visas",
      title: "Do US citizens need a visa for Japan? No 2026",
      description: "No visa for US citizens up to 90 days, and no travel authorization to apply for. What Visit Japan Web is, and the JESTA system that is coming.",
      h1: "Do US citizens need a visa for Japan?",
      lede: "Short answer: no, for stays up to 90 days, and there is nothing to apply for. Japan is one of the easiest countries for Americans to enter. Here is what you actually need, what Visit Japan Web does, and the change that is coming but is not here yet.",
      checked: "Jul 2026",
      checkedISO: "2026-07-26",
      answer: "US citizens need <b>no visa</b> for Japan for stays of <b>up to 90 days</b> for tourism or short business, under Japan's visa-exemption program, and there is <b>no travel authorization to apply for</b>. You just need a <b>valid passport</b> and, in practice, an <b>onward or return ticket</b>. Japan's <b>Visit Japan Web</b> lets you pre-fill the immigration and customs forms for a faster airport arrival, but it is <b>optional and free</b>.",
      official: {
        label: "Japan MOFA: visa exemption for short stays",
        url: "https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html",
        note: "The Ministry of Foreign Affairs page listing the countries, the US among them, whose citizens do not need a visa for a short stay of up to 90 days. There is nothing to apply for or pay as a US tourist. For the optional digital arrival step, see Visit Japan Web below."
      },
      expediter: false,
      sections: [
        {
          h: "Do you need a visa? No, for 90 days",
          icon: "passport",
          key: { fig: "90 days", tag: "Visa-free", text: "US citizens enter visa-free for up to 90 days for tourism or short business, on nationality alone. You get a stamp on arrival. There is nothing to apply for and no fee.", tone: "teal" },
          p: [
            "US passport holders enter Japan <b>visa-free for up to 90 days</b> for tourism, visiting, or short business that does not involve being paid by a Japanese source. You are simply admitted and stamped on arrival on the strength of your <b>nationality</b>, so a US green card does not help a non-US citizen here. This has held for decades.",
            "Your passport must be <b>valid for your stay</b>. Japan does not formally demand the six-month buffer some countries do, but airlines occasionally want to see comfortable validity, so do not travel on a nearly expired passport."
          ]
        },
        {
          h: "Visit Japan Web, the optional digital shortcut",
          icon: "qr",
          key: { fig: "Free", tag: "Optional, speeds entry", text: "Visit Japan Web lets you pre-register immigration and customs before you land and clear on a QR code. It is free and official, but optional: you can still fill paper forms on the plane.", tone: "teal" },
          p: [
            "<b>Visit Japan Web</b> is Japan's official online service for pre-filling your <b>immigration and customs</b> forms before you land, so you scan a QR code at the airport instead of filling cards by hand. It also streamlines <b>tax-free shopping</b>. It is <b>free</b> and run by the government's Digital Agency, and it is <b>optional</b>: skip it and you fill the paper arrival and customs cards on the plane as travelers always have.",
            "Because it is free, ignore any site or app charging a fee to do Visit Japan Web for you. The only official site is on a go.jp government domain, linked in the sources below."
          ]
        },
        {
          h: "Visa-free does not mean preparation-free",
          icon: "alert",
          key: { tag: "Show your onward plans", text: "Immigration can ask for a return or onward ticket, an address for your first night, and evidence of funds. A few travelers are turned away for having none, so have them ready.", tone: "amber" },
          p: [
            "Entry is easy but not automatic. Japanese immigration can ask to see a <b>return or onward ticket</b>, the <b>address</b> where you are staying your first night, and that you have <b>enough funds</b> for the trip. Travelers have been refused at Narita for being unable to show any onward plan, so have these to hand, and put your first hotel on the arrival form.",
            "The 90 days is for <b>tourism and short business</b> only. Paid work, teaching, performing for a fee, or a long study program all need the right visa arranged before you travel, and overstaying even by a day can mean detention and a re-entry ban."
          ]
        },
        {
          h: "What is not required, yet",
          icon: "tag",
          key: { tag: "JESTA is coming", text: "Japan has announced a JESTA authorization along the lines of the US ESTA, but it is not in force in 2026 and there is nothing to apply for. Watch the official MOFA site for a start date.", tone: "amber" },
          p: [
            "You may have read about <b>JESTA</b>, an electronic travel authorization Japan has announced along the lines of the US ESTA. As of 2026 it is <b>not in force</b>: US citizens still enter visa-free with <b>nothing to apply for in advance</b>. If it launches, it will be announced ahead of time on the official government sites, so there is nothing to buy now and no early-signup site to trust.",
            "For how money works once you are there, cards, cash, IC transit cards and the rest, see the <a href=\"/japan\">Japan money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for Japan?", a: "No. US citizens can enter Japan visa-free for up to 90 days for tourism or short business, under Japan's visa-exemption program. You are stamped in on arrival, with nothing to apply for and no fee. Longer stays, paid work or study need a visa arranged before you travel." },
        { q: "Is Visit Japan Web required for US citizens?", a: "No, it is optional and free. Visit Japan Web lets you pre-fill the immigration and customs forms and clear on a QR code for a faster arrival, but you can still complete the paper cards on the plane. Because it is free, do not pay any third-party site to do it for you." },
        { q: "Do US citizens need a JESTA for Japan?", a: "Not in 2026. Japan has announced a JESTA travel authorization similar to the US ESTA, but it is not yet in force, and US citizens still enter visa-free with nothing to apply for. Any site selling a JESTA now is premature; watch the official MOFA site for a real start date." },
        { q: "How long can US citizens stay in Japan without a visa?", a: "Up to 90 days for tourism or short business. Tourist stays generally cannot be extended, so for longer you must leave and re-enter, which can draw questions, or arrange the appropriate visa in advance. Overstaying can lead to detention and a re-entry ban." }
      ],
      sources: {
        links: [
          { label: "Japan Ministry of Foreign Affairs: visa exemptions for short-term stays, listing the US among visa-free nationalities", url: "https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html", type: "gov" },
          { label: "Digital Agency of Japan: the official, free Visit Japan Web service for immigration and customs", url: "https://services.digital.go.jp/en/visit-japan-web/", type: "gov" },
          { label: "US Department of State: the country information pages, the official router for entry requirements by destination", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html", type: "gov" }
        ],
        judgment: "Japan's 90-day visa-free access for US citizens is long-standing MOFA policy, and Visit Japan Web is an optional, free government service. A JESTA authorization has been announced but is not in force as of July 2026, so treat any earlier start date with caution and confirm on the official MOFA site. Checked July 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Among the best anywhere" },
        { k: "Carrier roaming", v: "$10 to $12 a day" },
        { k: "Cheapest", v: "A travel eSIM, a few $ per GB" },
        { k: "Signal gaps", v: "Effectively none worth planning around" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "eSIM for Japan: the cost math, coverage is fine",
      description: "Japan has some of the best coverage anywhere, bullet trains included, so this is purely cost. US roaming runs 10 to 12 dollars a day; an eSIM is less.",
      h1: "Staying connected in Japan.",
      lede: "Japan is the rare country where you can stop thinking about coverage entirely, because it is excellent almost everywhere including at 200 miles an hour on a bullet train. That leaves one question, and it is purely about money.",
      checked: "Jul 2026",
      checkedISO: "2026-07-31",
      answer: "Coverage in Japan is <b>among the best anywhere</b>: 4G almost everywhere, including the <b>bullet trains</b> and most rural and mountain areas, with 5G growing in the cities. So there is nothing to plan around and this is <b>purely a cost decision</b>. Your US carrier charges about <b>10 to 12 dollars a day</b> to roam (<b>AT&amp;T and Verizon</b> day passes), and <b>T-Mobile</b> is worth checking before you buy anything, because its current mid and upper tiers include a real <b>high-speed allowance</b> abroad, from <b>5GB up to 30GB</b> depending on plan, and only slow to <b>256kbps</b> after that. A <b>Nomad eSIM</b> is a few dollars per gigabyte and works from landing. Never roam <b>pay-per-use</b>, at about 2 dollars a megabyte.",
      sections: [
        {
          h: "Almost purely a cost question",
          icon: "roamfee",
          key: { fig: "$10-12/day", tag: "Roaming default", text: "Coverage is a non-issue in Japan, so the only question is what you pay. A US carrier day pass runs about $10 to $12 a day, and T-Mobile is the exception, with 5GB to 30GB of high-speed data abroad on its current mid and upper tiers, so check yours before buying.", tone: "teal" },
          p: [
            "Because coverage is not a problem here, the whole decision is price. Roaming on your US plan is the expensive default: <b>AT&amp;T and Verizon</b> day passes run about <b>10 to 12 dollars a day</b>, so a week is roughly <b>70 to 84 dollars</b> and a two-week trip approaches <b>170</b>. <b>T-Mobile</b> is the exception worth checking first: its current tiers include a genuine <b>high-speed allowance</b> abroad, roughly <b>5GB</b> on Experience More, Magenta MAX and Go5G Plus, <b>15GB</b> on Experience Beyond and Go5G Next, and <b>30GB</b> on Better Value, slowing to <b>256kbps</b> only once that is used up. The entry <b>Essentials</b> tier is the one throttled from the start. Google Fi and Visible set their own terms, so read your own plan rather than assuming. That matters more in Japan than in most places, because you will lean on <b>maps and transit apps</b> constantly to navigate a rail network with more exits per station than some towns have streets, and a throttled 256kbps connection handles that badly.",
            "The thing not to do is roam with <b>no plan</b>. Pay-per-use data runs about <b>2 dollars a megabyte</b>, thousands per gigabyte, and background app activity alone can run a bill up before you have opened anything, so <b>turn off data roaming</b> until an eSIM or a pass is active."
          ]
        },
        {
          h: "The eSIM, and the pocket wifi it replaced",
          icon: "qr",
          key: { fig: "Few $/GB", tag: "The cheap option", text: "Set it up at home the night before and connectivity is solved before you board. The one case left for the old rented wifi box is a group who want to share a single connection.", tone: "teal" },
          p: [
            "A <b>travel eSIM</b> is the cheapest way for most visitors to get real data in Japan. A <b>Nomad eSIM</b> is a few dollars per gigabyte, well under day-pass pricing, and it <b>activates before you fly</b> and works from landing, with no counter to find at Narita or Kansai after a long flight. Your US number stays reachable on your normal plan while the eSIM carries the data. Since Japanese networks are strong across the board, which one the eSIM rides is not something you need to research the way you would in Australia.",
            "Japan's traditional answer was the <b>rented pocket wifi</b> box, reserved in advance and collected at the airport. It still exists and it still makes sense for a family or a group sharing one connection, but for one or two people an eSIM is cheaper and simpler: nothing to collect, nothing to return, nothing extra to charge each night, and no deposit. <b>Free wifi</b> is also widespread in stations, convenience stores, cafes and hotels, which is a useful backstop but not a plan, since it usually wants a sign-in and rarely follows you onto a train."
          ]
        },
        {
          h: "Coverage you can forget about",
          icon: "phoneok",
          key: { fig: "Even at speed", tag: "Including the shinkansen", text: "Japan has 4G almost everywhere, including bullet trains and most rural and mountain areas, with 5G growing in the cities. There is no gap worth planning around.", tone: "teal" },
          p: [
            "This section is short because there is little to warn you about. Japan has <b>4G almost everywhere</b>, including on the <b>shinkansen</b> at full speed, in most <b>rural and mountain areas</b>, and in the long tunnels that would break the signal elsewhere, with <b>5G growing across the cities</b>. Deep in the mountains or far out on a small island you may find a thin patch, and it is not the sort of thing most itineraries need to plan around.",
            "One practical note that is about money rather than signal: Japan still runs on <b>cash more than most rich countries</b>, and having working data is what lets you find the right ATM, read a menu, buy rail tickets in an app and top up an IC card without guesswork, which is a real reason not to travel here on a throttled roaming connection. This guide is written for US travelers departing the US. For more, see <a href='/japan/cash-or-card'>cash or card in Japan</a>, <a href='/japan/taxis-and-apps'>taxis and apps in Japan</a>, and the <a href='/japan'>Japan money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is an eSIM cheaper than roaming in Japan?", a: "For most US travelers, clearly yes. A Nomad eSIM is a few dollars per gigabyte, against about 10 to 10 to 12 dollars a day for an AT&T or Verizon roaming pass, so a week of roaming at roughly 70 to 84 dollars buys far more data as an eSIM. Set it up before you fly and it works from landing." },
        { q: "Do I need pocket wifi in Japan?", a: "Not usually. A rented pocket wifi box still suits a family or group sharing one connection, but for one or two people an eSIM is cheaper and simpler: nothing to collect or return, no deposit, and no extra device to charge each night." },
        { q: "Will I have signal on the bullet train in Japan?", a: "Yes, generally throughout, including in the long tunnels that would break the signal in most countries. Japanese coverage is among the best anywhere, so there is no gap worth planning your trip around." },
        { q: "How much does it cost to use my US phone in Japan?", a: "About 10 to 12 dollars a day on an AT&T or Verizon day pass, so roughly 70 to 84 dollars a week. T-Mobile is worth checking first, since its current mid and upper tiers include 5GB to 30GB of high-speed data abroad before slowing to 256kbps. Never roam with no plan, since pay-per-use runs about 2 dollars a megabyte." }
      ],
      sources: {
        links: [
        { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
        { label: "Verizon: international travel pages, TravelPass rate and the North America inclusion", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "Tom's Guide: a 2026 comparison of US carrier international roaming plans and day-pass prices", url: "https://www.tomsguide.com/us/wireless-carriers-international-travel-plans,review-4327.html", type: "news" },
          { label: "Japan National Tourism Organization: official visitor information for travel in Japan", url: "https://www.japan.travel/en/", type: "official" }
        ],
        judgment: "Carrier prices and inclusions change with your exact plan, so treat the day-pass figures as a July 2026 snapshot and check your own account before you fly. Japan's coverage strength is consistent across every account the True Trip Costs desk has seen, which is why this spoke leans on the money math rather than warning about gaps. Checked Jul 2026. Corrected on 31 July 2026, and worth saying what changed. This page previously quoted a flat 12 dollars a day for a carrier day pass and described T-Mobile's included roaming as slow 2G that could not handle maps. Both were wrong in the same direction, the direction that flatters the eSIM we earn a commission on. On price, 10 dollars a day is the current eligible-plan rate for both AT&T's International Day Pass and Verizon's TravelPass, with 12 dollars applying to AT&T's non-eligible plans, so the honest figure is a range. On T-Mobile, its own roaming pages now list a real high-speed allowance abroad, 5GB on Experience More, Magenta MAX and Go5G Plus, 15GB on Experience Beyond and Go5G Next and 30GB on Better Value, dropping to 256kbps only after that, with the entry Essentials tier the one throttled from the start. We have rewritten the figures and the T-Mobile description throughout and cite the carriers directly. Carrier terms move faster than anything else we cover, so check your own plan rather than trusting this paragraph."
      }
    },
    {
      slug: "rail",
      glance: [
        { k: "Pass?", v: "Only for long Shinkansen runs" },
        { k: "Point-to-point", v: "Cheaper on most first trips" },
        { k: "Book at", v: "The official JR Pass site" },
        { k: "Watch for", v: "Nozomi costs extra on a pass" }
      ],
      live: true,
      topic: "rail",
      caution: "medium",
      title: "Is the Japan Rail Pass worth it in 2026?",
      description: "Often not. The nationwide pass only pays off across long Shinkansen legs, and agency prices rise on October 1, 2026. Here is the break-even.",
      h1: "Do you need a Japan Rail Pass?",
      lede: "For years the answer was a reflexive yes. Since the 2023 price jump it is usually no, and the honest test is arithmetic you can do in about a minute before you spend anything.",
      checked: "Aug 2026",
      checkedISO: "2026-08-11",
      answer: "For most first trips to Japan, <b>no</b>. The nationwide pass is <b>50,000 yen for seven days</b> in ordinary class, and it only pays off once your planned long-distance legs add up to roughly that much on their own. A <b>Tokyo to Kyoto round-trip does not get there</b>, and neither does a Tokyo stay with a day trip attached. It starts to win on a <b>wide Shinkansen spread</b>, something like Tokyo to Kyoto to Hiroshima inside one seven-day window, or a run out to Kyushu or Hokkaido. Two things narrow it further: a <b>regional pass</b> often beats the nationwide one on a single-region trip, and the pass does <b>not cover Nozomi or Mizuho</b> trains without paying a surcharge. Prices rise on <b>October 1, 2026</b>, but only through overseas agencies, so <b>buy direct</b>.",
      sections: [
        {
          h: "The test: add up your long legs first",
          icon: "ticket",
          key: { fig: "50,000 yen", tag: "What you have to beat", text: "Price your actual route as individual tickets before you look at a pass. If the total for your long-distance legs lands under the pass, the pass is a worse deal, and no amount of convenience closes a gap of tens of thousands of yen.", tone: "teal" },
          p: [
            "There is only one honest way to answer this and it is not a rule of thumb. Open the fare search, price the <b>long-distance legs you already know you are taking</b>, and add them up. That total is the number the pass has to beat. Everything else, the local trains, the buses, the airport runs, is small change by comparison and will not swing the decision.",
            "Run that math on the itineraries most Americans actually book and the pass loses. A <b>Tokyo base with a Kyoto round-trip</b> comes in well under the seven-day pass. So does <b>Tokyo, Hakone and back</b>. So does a single one-way to Osaka with flights home from Kansai. The pass starts to make sense when you are covering real ground: <b>Tokyo to Kyoto to Hiroshima</b> and back inside the window, or pushing out to <b>Fukuoka, Kanazawa, Sapporo</b>. If your trip reads as two cities and a day trip, buy tickets.",
            "The reason this flipped is worth knowing, because a lot of older advice has not caught up. In <b>October 2023</b> the nationwide pass went up by roughly <b>70 percent</b> in one step, from around 29,650 yen to 50,000 for the seven-day ordinary pass. Guidance written before that, including plenty still sitting high in search results, was correct when it was published and is wrong now. If a page tells you the pass is an automatic buy, check when it was last touched."
            // FUTURE UtilityBox MOUNT POINT.
            // A rail-pass affiliate belongs here, at the end of this section, once one is
            // vetted. Nothing renders now on purpose: for most readers the answer above is
            // "do not buy a pass," and that has to read as a finished thought rather than a
            // run-up to a product. Activating it is a data change in three parts, no
            // restructuring: (1) add `railPass: true` to this spoke object, (2) add a
            // railPass entry to the affiliate registry in src/data/links.js, (3) add the
            // matching `railPassUrl` gate and <UtilityBox> block to Spoke.astro alongside
            // the existing esim, insurance and carExcess blocks, which already carry the
            // disclosure. Prop shape is the same: href, label, and the do-you-need-it prose
            // passed as the slot.
          ]
        },
        {
          h: "What it costs, and the October 1 change",
          icon: "coins",
          key: { tag: "Buy direct", text: "From October 1, 2026 the same pass has two prices. Overseas travel agencies charge the higher one, and JR has said its own booking site holds the pre-October rate for a limited period. The reseller is the expensive door.", tone: "amber" },
          p: [
            "The ordinary nationwide pass runs <b>50,000 yen for seven days, 80,000 for fourteen and 100,000 for twenty-one</b>. Green Car versions sit higher and rarely change the answer, since the gap buys comfort rather than savings. Children aged six to eleven pay half, and under-sixes travel free if they are not taking a reserved seat of their own.",
            "JR Group announced in <b>April 2026</b> that prices rise about <b>5 to 6 percent on October 1</b>: the seven-day ordinary pass to 53,000 yen, the fourteen-day to 84,000 and the twenty-one-day to 105,000. The part worth your attention is that the increase applies to passes bought through <b>overseas agencies</b>, while JR has said the <b>official booking site</b> will hold the earlier price for a limited window. It has not published how long that window runs, so we are not going to invent an end date. The practical read is the same one that applies to rail almost everywhere: <b>buy from the operator</b>, not from a reseller, and you are on the better side of the split.",
            "If your dates fall either side of October 1, the trigger is when you buy rather than when you travel. An exchange order bought before the change holds its price into 2027, so a trip in November booked in September is charged at the earlier rate."
          ]
        },
        {
          h: "The narrower pass, and two things it is not",
          icon: "ic",
          key: { tag: "Nozomi is not included", text: "The nationwide pass does not cover Nozomi or Mizuho, the fastest services on the main line, unless you pay a surcharge for that leg. Pass holders normally ride Hikari or Sakura instead, which are slower by a modest margin.", tone: "amber" },
          p: [
            "If your trip sits inside one region, the nationwide pass is usually the wrong product rather than a close call. <b>JR East, JR West and the Kansai area passes</b> cover a smaller map for a lot less, and on a Tokyo-and-around trip or a Kyoto-Osaka-Nara trip one of those often wins outright. This is the most common way readers overpay here: comparing the nationwide pass against individual tickets, deciding the pass is not worth it, and never checking whether a <b>narrower pass</b> would have been.",
            "Two things get folded into this decision that do not belong in it. The first is the <b>IC card</b>, a Suica, ICOCA or Pasmo. Those are for local transit and convenience stores, they are not an intercity product, and having one changes nothing about the pass question. See <a href='/japan/cash-or-card'>cash or card in Japan</a> for where they do matter. The second is <b>seat reservations</b>. A pass is not a boarding pass: some services still require a reserved seat, which you arrange at a JR ticket office, the <b>midori-no-madoguchi</b>, or online. It is free with the pass, but it is a step, and on a busy holiday route it is the step that decides whether you are sitting down.",
            "Rail economics do not travel well, and what holds here fails in Italy for different reasons, so our <a href='/rail-passes'>country-by-country verdict on rail passes</a> sets Japan against the rest. Everything else on the money side sits in the <a href='/japan'>Japan money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is the Japan Rail Pass worth it in 2026?", a: "Only for wide itineraries. Price your long-distance legs as individual tickets first: if they total less than the pass, tickets win. A Tokyo to Kyoto round-trip does not reach it, while Tokyo to Kyoto to Hiroshima and back inside one week can." },
        { q: "How much is the Japan Rail Pass now?", a: "The ordinary nationwide pass is 50,000 yen for seven days, 80,000 for fourteen and 100,000 for twenty-one. From October 1, 2026 those rise to 53,000, 84,000 and 105,000 through overseas agencies, while JR has said its official site holds the earlier price for a limited period." },
        { q: "Does the Japan Rail Pass cover the Nozomi?", a: "Not without a surcharge. Nozomi and Mizuho, the fastest services on the Tokaido and Sanyo line, sit outside the pass unless you pay extra for that leg. Pass holders usually take Hikari or Sakura, which cover the same route a little slower." },
        { q: "Should I get a regional JR pass instead?", a: "Often, yes. If your trip stays in one region, a JR East, JR West or Kansai area pass covers what you need for considerably less than the nationwide pass. Check the regional option before concluding that no pass is worth it." },
        { q: "Is a Suica the same as a rail pass?", a: "No. Suica, ICOCA and Pasmo are stored-value cards for local trains, buses and shops. They do not cover Shinkansen travel as a pass does, and owning one has no bearing on whether the pass is worth buying." }
      ],
      sources: {
        links: [
          { label: "Japan Rail Pass: the official site, the current price table and the direct booking channel", url: "https://japanrailpass.net/en/", type: "official" },
          { label: "Japan National Tourism Organization: the JR Group announcement of the October 1, 2026 price increase and the official-site pricing window", url: "https://www.japan.travel/en/ca/news/price-increases-are-coming-to-the-nationwide-japan-rail-pass-2026/", type: "official" },
          { label: "Japan Guide: the nationwide pass, the Nozomi and Mizuho exclusion, and the regional pass alternatives", url: "https://www.japan-guide.com/e/e2361.html", type: "guide" }
        ],
        judgment: "The pass prices and the October 1, 2026 increase come from JR Group and its official site, so those are firm. The break-even framing is our own read: we deliberately lead on the arithmetic rather than a single verdict, because the answer genuinely depends on your route and any fixed verdict would be wrong for somebody. Our sense that most US first trips fall below the break-even is a judgment drawn from the itineraries these guides see most often, not a measured figure. The duration of the official-site pricing window was not published when we checked, so we describe it without an end date rather than guess one. Rail pricing moves, and this page sits in the quarterly review cycle. Checked Aug 2026."
      }
    },
    {
      slug: "money-scams",
      glance: [
        { k: "Most cost", v: "Nothing, if you skip touts" },
        { k: "At the ATM", v: "Choose yen, not dollars" },
        { k: "Sitting down", v: "Ask about the seat charge" },
        { k: "Nightlife", v: "Never follow a street tout" }
      ],
      live: true,
      topic: "scams",
      title: "Common money scams in Japan, and what they cost",
      description: "Japan is one of the safest countries anywhere. What surprises Americans is the seat charge, the pay-in-dollars prompt, and rip-off bars in a few nightlife blocks.",
      h1: "Common money scams in Japan, and what they cost you",
      lede: "Japan is one of the safest countries in the world to visit, and on the great majority of trips none of this comes up at all. Most of what surprises Americans is not a con but a charge nobody explained: a seat fee at an izakaya, a service charge at a hotel restaurant, a card machine offering dollars. There is one genuine scam, it lives in a handful of nightlife blocks, and a single habit defuses it completely. Here is each one, what it costs, and how to sidestep it.",
      checked: "Aug 2026",
      checkedISO: "2026-08-15",
      answer: "Most of what catches Americans out in Japan is not a scam at all: the <b>otoshi</b> seat charge at an izakaya, a flat <b>table charge</b> at a bar, a <b>service charge</b> at a hotel restaurant, and the <b>pay in dollars</b> prompt on card machines and ATMs, which uses a poor built-in rate. The one real con is the <b>rip-off bar</b> (in Japanese, <b>bottakuri</b>), where a street tout walks you into a bar in Kabukicho or Roppongi and the bill arrives inflated, sometimes alongside <b>drink spiking and card fraud</b>. The golden rules that beat all of it: <b>always choose yen</b>, <b>ask what the seat charge is before you sit down</b>, and <b>never follow a street tout into a bar</b>. That last habit costs you nothing and removes the only expensive scenario here.",
      sections: [
        {
          h: "The charges that are not scams",
          icon: "receipt",
          key: { fig: "$2-6 a head", tag: "Ask before you sit", text: "The otoshi seat charge at an izakaya is a real Japanese custom, not a tourist markup: roughly 300 to 600 yen per person, charged to locals too. Ask what it is before you sit.", tone: "amber" },
          p: [
            "The single most common surprise on a Japanese bill is the <b>otoshi</b>, a small dish that arrives unordered at an izakaya and is charged per person. It is a seat fee in the shape of an appetizer, and it is a genuine custom rather than a tourist markup: the regular at the counter pays it too. Reckon on roughly <b>300 to 600 yen</b> a head, about <b>2 to 4 dollars</b>, occasionally up to 1,000 yen at a smarter place. A group of six can therefore see it six times, which is where the shock usually comes from.",
            "The same idea turns up as a flat <b>table charge</b> at bars, often <b>500 to 1,000 yen</b> per person and more at hotel or Ginza bars, and as a <b>service charge</b> of 10 to 15 percent at hotel restaurants. None of these is a tip, and none of them is a con, but they are frequently not on the menu. Asking what the charge is before you sit down is completely normal and costs nothing. Japan does not tip at all, which is why these charges exist in the first place, and the full picture is in the <a href=\"/japan/tipping\">Japan tipping guide</a>."
          ]
        },
        {
          h: "At the ATM and the card machine",
          icon: "atm",
          key: { tag: "Choose yen", text: "When a machine asks whether to charge in US dollars or yen, always pick yen. Dollars triggers dynamic currency conversion, a poor built-in rate that costs you a few percent every time.", tone: "amber" },
          p: [
            "When a card terminal or ATM asks whether to charge you <b>in US dollars or yen</b>, always choose <b>yen</b>. Choosing dollars triggers dynamic currency conversion, a marked-up rate dressed up as a convenience, and it costs you a few percent on every transaction you accept it on. This is legal and it is everywhere, which is what makes it the most expensive habit on this page over a whole trip. The mechanics are in the <a href=\"/japan/cash-or-card\">Japan cash and cards guide</a>.",
            "Japan is still a cash country in a lot of small restaurants, shrines and rural taxis, so you will use ATMs. Many Japanese bank machines reject foreign cards outright, so use <b>7-Eleven (Seven Bank) or Japan Post</b> ATMs, which do work. Skimming is rare in Japan compared with most of the world, but the FCDO does note card skimming and cloning when you pay for food or drink, so keep your card in sight and turn on transaction alerts before you fly."
          ]
        },
        {
          h: "The one real con: touts and rip-off bars",
          icon: "cocktail",
          key: { fig: "Walk past", tag: "Never follow a tout", text: "A street tout leads you to a bar and the bill arrives inflated. Padded bills typically add tens of dollars, full rip-off bar bills run into the hundreds, and reported cases go far higher.", tone: "teal" },
          p: [
            "In a handful of Tokyo nightlife blocks, a friendly, fluent English-speaking promoter (a <b>kyakuhiki</b>, or customer puller) offers a cheap all-you-can-drink deal at a bar just around the corner. Inside, charges you were not told about accumulate: table fees, weekend fees, drinks ordered by staff on your tab. In the mild version, a promised 3,500 yen night lands at 15,000, so the padding is typically <b>tens of dollars, roughly 40 to 100</b>. In the full <b>bottakuri</b> version the bill runs into the <b>hundreds of dollars</b>, and reported police cases have been far higher than that. Treat the high numbers as what can happen, not as the going rate.",
            "Japanese police name the same four Tokyo districts every time: <b>Kabukicho, Roppongi, Shibuya and Ikebukuro</b>. The UK FCDO advice is a single sentence and it is the whole defense: do not follow street touts into bars. Street soliciting is itself illegal under local ordinance, with fines up to 500,000 yen, so a venue that recruits on the pavement is already breaking the law before you walk in. Choose the bar yourself, and if a bill still looks wrong, ask for it itemized, say clearly that you will call the police, and dial <b>110</b>. That threat works in your favor, not theirs."
          ]
        },
        {
          h: "Drink spiking and card fraud",
          icon: "card",
          key: { tag: "Card in sight", text: "Reported losses from spiking plus card fraud in nightlife districts range from hundreds to many thousands of dollars. Do not accept drinks from strangers, and set up transaction alerts.", tone: "teal" },
          p: [
            "The version worth real care, because it is the one that can cost serious money, is <b>drink spiking followed by card fraud</b>. The FCDO describes victims waking with no memory of the night and finding large amounts billed to their cards, with losses reported from the hundreds into the thousands. The US State Department's own country reporting notes cases of Americans being taken to ATMs and made to withdraw cash after being unable to pay an inflated tab. This is concentrated in the same few nightlife blocks and almost never touches anyone who did not follow a stranger into a venue.",
            "The habits are ordinary ones: do not accept drinks from strangers, do not leave a drink unattended, keep your card in sight when you pay, and turn on <b>push alerts for card transactions</b> so a bad charge wakes your phone rather than surfacing weeks later. Carrying a little cash for an unfamiliar bar and leaving the card in the hotel safe also caps the downside neatly."
          ]
        },
        {
          h: "What this means for your money",
          icon: "yen",
          key: { fig: "Habits", tag: "How to avoid it", text: "Choose yen, ask about the seat charge, pick your own bar, and keep your card in sight. Taxis, trains and shops in Japan are honest and metered, so the rest of the trip takes care of itself.", tone: "teal" },
          p: [
            "Almost everything on this page costs you a few dollars and is not a scam at all, and the one expensive scenario is avoided by a decision you make on the pavement. The habits: <b>choose yen</b>, <b>ask about the seat charge</b>, <b>pick your own bar rather than a tout's</b>, and <b>keep your card in sight</b>. Everyday Japan does not need defending: taxis are tightly regulated and metered, trains are fixed-price, shop prices are the shop prices, and short-changing is close to unheard of. See the <a href=\"/japan/taxis-and-apps\">Japan taxis and apps guide</a> for how transport actually prices.",
            "Handled calmly, none of this should shape your trip, and for most visitors none of it will come up. For getting and spending money well while you are there, see the <a href=\"/japan/cash-or-card\">Japan cash and cards guide</a> and the <a href=\"/japan\">Japan cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Japan safe for tourists?", a: "Yes, and it is one of the safest countries in the world for a visitor. Violent crime against tourists is rare and everyday transactions are honest. The issues travelers actually meet are money ones: an unexplained seat charge, the pay-in-dollars prompt on a card machine, and rip-off bars in a few Tokyo nightlife blocks. A handful of habits avoid all of them." },
        { q: "What is the otoshi charge on my Japanese restaurant bill?", a: "It is a seat charge served as a small unordered appetizer at izakaya, typically 300 to 600 yen per person and occasionally up to 1,000 at smarter places. It is a genuine Japanese custom, charged to locals as well, and it stands in for tipping, which Japan does not do. It is charged per person, so a group sees it once each. Ask what it is before you sit down." },
        { q: "What is a bottakuri bar in Tokyo?", a: "A rip-off bar. A street tout offers a cheap deal, then charges you far more than agreed once you are inside, often through table fees and drinks ordered by staff on your tab. Mild cases add tens of dollars; full cases run into the hundreds, and reported police cases have gone much higher. The defense is total: never follow a street tout into a bar." },
        { q: "Which parts of Tokyo should I be careful in at night?", a: "Japanese police repeatedly name four Tokyo districts as higher risk for tout-led bar scams and drink spiking: Kabukicho, Roppongi, Shibuya and Ikebukuro. They are all perfectly fine to visit and eat in. The risk is specific to accepting an invitation from someone who approached you on the street, so choose your own venue and the risk goes away." },
        { q: "Should I pay in yen or dollars in Japan?", a: "Yen, always. Accepting a card machine's offer to charge you in US dollars triggers dynamic currency conversion, which uses a marked-up rate and costs you a few percent every time. Choosing yen lets your own bank set the rate. The same applies at ATMs, so decline any convert-to-dollars prompt. See the Japan cash and cards guide." },
        { q: "What do I do if a bar in Japan hands me an inflated bill?", a: "Stay calm, ask for the bill itemized, and refuse charges you did not agree to. Say plainly that you will call the police, and then call 110. Street soliciting is illegal under local ordinance in Tokyo's entertainment districts, so police involvement works against the venue, not you. If you feel physically unsafe, pay and report it afterwards, keeping the receipt." }
      ],
      sources: {
        links: [
          { label: "UK FCDO: Japan travel advice, safety and security, including drink spiking and credit card fraud", url: "https://www.gov.uk/foreign-travel-advice/japan/safety-and-security", type: "gov" },
          { label: "US State Department: Japan country information and safety guidance for travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Japan.html", type: "gov" }
        ],
        judgment: "The seat and table charge ranges are typical 2026 figures from Japanese restaurant reporting, not a fixed price list, and every venue sets its own. The rip-off bar figures are deliberately given as a typical range plus a note that reported cases run much higher, because the headline police cases are extreme single incidents rather than what a visitor should expect. The four named Tokyo districts come from Japanese police, relayed in UK and US government advice. The vast majority of visits to Japan see none of this. Checked August 2026."
      }
    }
  ]
};
