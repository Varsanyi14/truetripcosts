export default {
  slug: "japan",
  live: true,
  name: "Japan",
  from: "United States",
  checked: "Jun 2026",
  checkedISO: "2026-06-28",
  emergency: { medical: "119", note: "119 is for an ambulance or fire, and 110 is the police. The 112 and 911 numbers do not work here.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  title: "Money in Japan (2026): Cash, Cards, IC Cards, ATMs and Tax-Free Shopping | True Trip Costs",
  description: "How to handle money in Japan as a US traveler in 2026: cash vs card, the best ATMs (7-Eleven), IC cards like Suica, tax-free shopping, tipping, and the traps to avoid. Checked June 2026.",
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
    styles: [ { n: "Budget", per: 45, cash: 0.6 }, { n: "Mid-range", per: 80, cash: 0.45 }, { n: "Comfort", per: 150, cash: 0.3 } ]
  },
  connectivity: {
    works: "Yes, and it is among the best anywhere. Japan has 4G almost everywhere, including the bullet trains and most rural and mountain areas, with 5G growing in the cities. You will rarely think about your signal."
  },
  // TOURIST TAX (high-churn, verified Jun 2026). A per-person, per-night lodging tax
  // (shukuhakuzei) that only some cities charge, billed in bands by the nightly room
  // price and paid at the hotel. No cap on nights. Most of Japan charges nothing.
  // Bands read in order: the first band whose upTo the per-person nightly rate falls
  // under wins; upTo null is the top band.
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
    changed: "Sources added on first publish, checked June 2026. Kyoto raised its lodging tax in March 2026, with top-tier rooms now taxed up to 10,000 yen per night, and from 1 November 2026 Japan switches tax-free shopping from an instant discount at the till to a refund claimed at the airport.",
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
  }
};
