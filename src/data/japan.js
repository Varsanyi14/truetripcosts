export default {
  slug: "japan",
  live: true,
  name: "Japan",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-10",
  emergency: { medical: "119", note: "119 is for an ambulance or fire, and 110 is the police. The 112 and 911 numbers do not work here.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  region: "Asia",
  signals: { cardFriendliness: 3, cashNeed: 3, taxRisk: 3 },
  title: "Money in Japan (2026): Cash, Cards, IC Cards, ATMs and Tax-Free Shopping | True Trip Costs",
  description: "How to handle money in Japan as a US traveler in 2026: cash vs card, the best ATMs (7-Eleven), IC cards like Suica, tax-free shopping, tipping, and the traps to avoid. Checked July 2026.",
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
      slug: "cash-or-card",
      live: true,
      topic: "cash",
      title: "Do I need cash in Japan, or can I use cards? (2026) | True Trip Costs",
      description: "Japan is going cashless fast, but you still need some yen. Which ATMs actually take foreign cards (7-Eleven and Japan Post), when cash is unavoidable, IC cards for transit, and the one setting to get right. Checked July 2026.",
      h1: "Do I need cash in Japan, or can I use cards?",
      lede: "Short answer: bring some cash, but you will tap and swipe for most of a city trip. The catch is that most Japanese bank ATMs reject foreign cards. Here is where to get yen, when you truly need it, and how to pay for the rest.",
      checked: "Jul 2026",
      checkedISO: "2026-07-08",
      answer: "Both, and the mix matters. Japan went <b>58% cashless in 2025</b>, so in cities you can tap a card or phone almost everywhere, but <b>cash is still essential</b> for shrines, small restaurants, market stalls and vending machines. The trap: <b>most Japanese bank ATMs reject foreign cards</b>, so pull yen from a <b>7-Eleven (Seven Bank) or Japan Post</b> ATM, get an <b>IC card</b> (Suica) for transit, and always choose <b>yen, not dollars</b>, at the terminal.",
      sections: [
        {
          h: "The real picture: cashless, but not cash-free",
          p: [
            "Japan's reputation as a cash country is fading fast. Cashless payments hit <b>58% of spending in 2025</b> (Japan's METI), and across Tokyo, Osaka and the other big cities you can tap a contactless card or phone at convenience stores, chains, hotels and department stores without thinking about it.",
            "But <b>cash is still essential</b> in the places travelers love most: temples and shrines (entry fees and goshuin stamps), small family restaurants and coffee shops, market and festival stalls, older ryokan inns, coin lockers, and most vending machines (card acceptance there is under 10%). A useful rule: <b>big things on a card, small and old-fashioned things in cash</b>."
          ]
        },
        {
          h: "Getting yen: only some ATMs take foreign cards",
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
          p: [
            "For cards, <b>Visa and Mastercard</b> are the most widely accepted, JCB is good, and <b>Amex is patchy</b>, so carry a Visa or Mastercard as your main. The single most useful thing to set up is an <b>IC card</b>, Suica, Pasmo or ICOCA, which you tap for trains, most convenience stores and many vending machines.",
            "The slickest route is a <b>digital Suica in your phone's wallet</b>: iPhone users can add Suica in Apple Wallet and top it up (some foreign cards are declined for the top-up, in which case load cash onto a physical card at any station machine). Set it up before you fly and you skip the airport ticket lines entirely."
          ]
        },
        {
          h: "The one setting to get right, and no tipping",
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
      live: true,
      topic: "pets",
      title: "Bringing a dog or cat to Japan from the US (2026): the 180-day clock and what it costs | True Trip Costs",
      description: "Moving to Japan with a pet from the US: why the rabies antibody test and its fixed 180-day waiting period make this a 7 to 8 month process, the full step order, and a realistic all-in cost. Checked July 2026.",
      h1: "Bringing your dog or cat to Japan.",
      lede: "Japan is one of the long-lead destinations. Two numbers decide everything: the lead time, which is 7 to 8 months because of a fixed 180-day wait you cannot shorten, and the all-in cost, which runs into the thousands. Miss the sequence and the clock resets. Here is the order, the official route, and what to budget.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Start early: this is a <b>7 to 8 month</b> process, not a few weeks. Japan protects its rabies-free status with a <b>rabies antibody test followed by a fixed 180-day wait</b> that cannot be shortened, so the timeline is set by biology, not paperwork. Do the steps <b>in order</b>: microchip, two rabies shots, the antibody test, the 180-day wait, then advance notice to the port at least 40 days out. All in, budget <b>roughly $3,000 to $8,000 or more</b>, driven mostly by flying your pet as cargo. A dog coming the other way, home to the US from Japan, has an easy time.",
      sections: [
        {
          h: "The two numbers: lead time and cost",
          p: [
            "Before the detail, the two things that decide a move to Japan with a pet. <b>Lead time is 7 to 8 months</b>, and most of that is a single fixed waiting period you cannot buy your way out of. <b>All-in cost is roughly $3,000 to $8,000 or more</b>, with the biggest line being air transport, since pets on this route usually fly as cargo rather than in the cabin. Vet visits, the rabies antibody test, and the health paperwork make up most of the rest.",
            "The reason Japan takes so long is that it is rabies-free and works hard to stay that way. Every step below exists to prove your pet is not carrying rabies, and the order is strict. One misstep, such as a rabies shot given before the microchip, can invalidate the work and restart the clock."
          ]
        },
        {
          h: "The steps, in the order that matters",
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
          p: [
            "For the rabies antibody test, the two Japan-designated laboratories in the US are the <b>Kansas State University Rabies Laboratory</b> in Manhattan, Kansas, which is open to any US exporter, and the Department of Defense laboratory at Fort Sam Houston in Texas, used mainly by military families. Your USDA-accredited vet sends the sample; you do not ship blood yourself.",
            "After arrival, Japan asks you to register a dog at the local municipal office within 30 days, keep up an annual rabies vaccination, and hold onto the Import Quarantine Certificate you are given, so keep it somewhere safe."
          ]
        },
        {
          h: "Coming back to the US is the easy part",
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
      live: true,
      topic: "tipping",
      title: "Tipping in Japan: why you should not tip, and the rare exceptions (2026) | True Trip Costs",
      description: "Japan has no tipping culture and leaving extra money can cause confusion or offense. Here is why you do not tip, what to do instead, and the rare situations where a small thank-you is appropriate. Checked July 2026.",
      h1: "Tipping in Japan",
      lede: "The answer here is simple and genuinely freeing: do not tip. Japan has no tipping culture, nobody expects one, and leaving extra money can cause confusion rather than gratitude. A polite thank-you is all that is needed.",
      checked: "Jul 2026",
      checkedISO: "2026-07-20",
      answer: "Japan has <b>no tipping culture</b>, and there is no awkwardness in not tipping: it is simply the norm. Leaving extra money can <b>confuse or even mildly offend</b>, and staff may chase you down to return it. Exceptional service is met with a <b>polite thank-you</b>, not a gratuity. This applies everywhere: restaurants, taxis, hotels, bars and hair salons. The rare exception is handing a small <b>thank-you in an envelope</b> to a private guide or a ryokan (traditional inn) host, in person.",
      sections: [
        {
          h: "Why tipping does not work here",
          p: [
            "In Japan, good service is the professional standard, not something extra that earns a reward. Staff are paid a proper salary and take pride in the quality of their work. Offering money on top can feel <b>transactional</b> in a way that clashes with that ethos.",
            "If you leave cash on a restaurant table, do not be surprised if a server <b>chases you to return it</b>, thinking you forgot it. This is not rudeness, it is the opposite: they are looking after you."
          ]
        },
        {
          h: "The rare exceptions",
          p: [
            "There are a few quiet exceptions where a small thank-you gift is appropriate, but even these are not cash-on-the-table situations. For a <b>private guide</b> who has gone well beyond the brief, or a <b>ryokan host</b> who has looked after you personally, you can offer a small amount of cash <b>in an envelope</b>, handed directly and discreetly. The envelope matters: handing over bare cash feels abrupt.",
            "At a <b>high-end ryokan</b>, some guests leave a <b>kokorozuke</b> (a gesture of gratitude, typically 1,000 to 3,000 yen in an envelope) for the nakai-san who attends your room. It is not expected, but it is understood. Beyond these, the answer is simply: do not tip."
          ]
        },
        {
          h: "What to do instead",
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
    }
  ]
};
