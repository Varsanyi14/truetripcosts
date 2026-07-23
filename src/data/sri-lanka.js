export default {
  slug: "sri-lanka",
  iso2: "lk",
  live: true,
  name: "Sri Lanka",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-22",
  sources: {
    changed: "Sources added on first publish. The big one for US travelers: since 25 May 2026 the tourist ETA is free of charge for nationals of 40 countries, and the United States is on that list, confirmed on the official Department of Immigration and Emigration page. The ETA is still mandatory before arrival, just no longer a paid fee for Americans. Verified the Sri Lankan rupee as the everyday currency with the Central Bank of Sri Lanka, and the cash-first, card-in-cities reality from recent traveler and bank reports. State Department advisory is Level 2 as of October 2025.",
    links: [
      { label: "Sri Lanka Department of Immigration and Emigration: the 40-country free tourist ETA scheme (US included), effective 25 May 2026", url: "https://www.immigration.gov.lk/pages_e.php?id=60", type: "gov" },
      { label: "Sri Lanka ETA (official government portal): apply for the mandatory Electronic Travel Authorization before arrival", url: "https://www.eta.gov.lk", type: "gov" },
      { label: "Central Bank of Sri Lanka: the official USD to LKR indicative exchange rate", url: "https://www.cbsl.gov.lk/en/rates-and-indicators/exchange-rates", type: "gov" },
      { label: "US State Department: Sri Lanka travel advisory (Level 2) and local conditions", url: "https://travel.state.gov/en/international-travel/travel-advisories/sri-lanka.html", type: "gov" }
    ],
    judgment: "The daily cash share, the tipping norms, and the ATM fee ranges are our own read from recent traveler and bank reports, not a single official table. Treat them as a planning guide and confirm anything critical before you travel. The free-ETA scheme is new, so we dated it and point you to the official portal to confirm your passport shows a zero fee before you rely on it."
  },
  emergency: { medical: "1990", note: "1990 reaches the Suwa Seriya ambulance service, which is free and widely praised, with 119 for police. Response is good in Colombo and the main tourist areas and slower in remote hill country. The US 911 number does not work here.", checked: "Jul 2026", checkedISO: "2026-07-22" },
  insuranceLevel: "medium",
  region: "Asia",
  signals: { cardFriendliness: 2, cashNeed: 4, taxRisk: 2, atmRisk: 3 },
  hook: "Sri Lanka runs largely on cash in rupees, so plan to pull LKR from a bank ATM on arrival, keep small notes for tuk-tuks, markets and tips, and decline any screen that offers to charge you in dollars. Your mandatory ETA is now free for US travelers, but you still must get it before you fly.",
  aliases: ["sri lanka", "sri-lanka", "srilanka", "sri lankan", "ceylon", "colombo", "kandy", "galle", "sigiriya", "ella", "mirissa", "unawatuna", "arugam bay", "nuwara eliya", "anuradhapura", "polonnaruwa", "yala", "rupee", "lkr", "eta", "pickme", "tuk tuk", "tuk-tuk", "hoppers", "kottu", "cultural triangle", "hill country"],
  title: "Money in Sri Lanka (2026): Rupees, Cards, ATMs, the Free ETA and Tipping | True Trip Costs",
  description: "How to handle money in Sri Lanka as a US traveler in 2026: why it is a cash-first country, how ATMs and cards work, the mandatory ETA that is now free for Americans, tipping, and the traps to avoid. Checked July 2026.",
  h1: "Money in Sri Lanka, sorted.",
  lede: "A calm, current plan for the money side of your trip: why you carry rupees, where cards fit, the free-but-mandatory ETA, and the small rules that trip up first-timers.",
  hero: {
    img: "/sri-lanka-hero.jpg",
    h: 1375,
    alt: "A classic Sri Lankan hill-country scene, a blue train crossing a tall arched stone viaduct through emerald tea terraces and jungle, misty green mountains and a low sun behind, in a vintage travel-poster style"
  },
  recentChange: {
    date: "Jul 2026",
    text: "The headline change for US travelers landed on <b>25 May 2026</b>: Sri Lanka made its tourist ETA <b>free of charge for nationals of 40 countries, and the United States is on the list</b>. The ETA is still <b>mandatory</b> and must be obtained online before you fly, but Americans no longer pay the old tourist fee for it. Separately, Cyclone Ditwah in late 2025 damaged some <b>hill-country rail and road</b> infrastructure that is still under repair, so check current conditions if your route runs through the hill country. It is a developing picture, so confirm your ETA shows a zero fee on the official portal and check the <b>US State Department advisory</b> before you book."
  },
  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',
  verdict: "Sri Lanka is a <b>cash-first country</b> for travelers. The <b>Sri Lankan rupee (LKR)</b> is the everyday money, and while hotels, nicer restaurants and larger shops in Colombo and the tourist south take <b>Visa and Mastercard</b>, tuk-tuks, markets, street food, small guesthouses and rural stops all run on <b>cash</b>. Pull rupees from a <b>bank ATM</b> on arrival rather than bringing a big wad of dollars, keep a stack of <b>small notes</b> for daily spending and tips, and <b>always choose rupees, not dollars</b>, on any card terminal or ATM. One good-news note: your mandatory <b>ETA is now free</b> for US citizens, though you still must get it before you fly.",
  meter: {
    heading: "Sri Lanka runs on cash, in rupees.",
    cashPct: 60,
    note: "A rough feel for everyday spending. Colombo, Galle and the main tourist hotels and restaurants increasingly take cards, so you can put bigger bills on plastic. But tuk-tuks, markets, street food, small guesthouses, national-park stops and anywhere rural run on cash. Keep a stack of small rupee notes, and break big notes when you can."
  },
  trio: [
    { sym: "card", kind: "warn", h: "Your card", verd: "Fine in cities, cash elsewhere", p: "Visa and Mastercard work at hotels, tour operators, larger shops and nicer restaurants in Colombo and the tourist south, and some accept a mobile wallet. Amex and Diners are rarely taken. Tuk-tuks, markets, street food, small guesthouses and rural areas are cash only. Bring a <b>no-foreign-fee card</b> and keep a backup, since a single declined card can leave you stuck.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Yes, rupees, small notes", p: "The rupee is the everyday currency, so plan to carry it. You do not need to buy LKR before you travel, since it is hard to get abroad at a fair rate; pull it from a bank ATM on arrival instead. Keep a stack of <b>small notes</b>, because tuk-tuk drivers, market sellers and small shops often cannot break a 5,000 rupee note.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Widely available, watch the fee", p: "Bank ATMs (Commercial Bank, HNB, Sampath, People's Bank) are easy to find in cities, airports and tourist areas, and take Visa and Mastercard. Some cap withdrawals low, so you may pull several times. Expect a per-withdrawal fee of around <b>400 to 600 rupees</b> on top of your own bank's, so <b>withdraw a larger amount</b> at once where the limit allows.", cta: { label: "See fee-saving cards", href: "#" } }
  ],
  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Sort your <b>ETA</b> at the official government portal before you fly. It is now <b>free for US citizens</b>, but it is still mandatory, so confirm the fee shows as zero and keep your approval.",
      "Get a <b>no-foreign-fee debit card</b> for ATM cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee. Pack a no-fee Visa or Mastercard plus a backup card.",
      "<b>Tell your bank</b> you are traveling so a first-day charge or withdrawal does not get blocked."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Pull your first <b>rupees from a bank ATM</b> in the arrivals hall rather than the exchange counter, and <b>decline any offer to convert or lock a rate</b>.",
      "Ask for or break into <b>small notes</b> early, since tuk-tuks and small shops struggle with big ones.",
      "Use the <b>PickMe</b> app (Sri Lanka's ride app) or an official taxi desk for the ride into town rather than negotiating at the curb."
    ], cta: { label: "Find fee-saving cards", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Cash</b> for tuk-tuks, markets, street food, small guesthouses and national-park stops.",
      "<b>Card</b> at hotels, tour operators and nicer restaurants in Colombo and the tourist south.",
      "Keep <b>small notes</b> handy, and break 5,000 and 2,000 rupee notes at supermarkets or your hotel front desk.",
      "In the hill country and rural areas, <b>carry extra cash</b>, since ATMs thin out."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Pay in rupees, always.</b> If a card terminal or ATM offers to charge you in US dollars (dynamic currency conversion), decline it; it adds a poor rate and a fee.",
      "Some tourist businesses quote in dollars, but paying in rupees or by card is almost always better value."
    ], cta: null }
  ],
  cash: {
    rate: 336, cur: "LKR", round: 500, defaultIndex: 1,
    rateNote: "Rates move, so treat this as a recent snapshot and let your bank handle the conversion. Sri Lanka is inexpensive day to day, especially for street food, local transport and guesthouses, though tourist-site entry fees and organized tours add up.",
    styles: [ { n: "Budget", per: 30, cash: 0.75, room: 25 }, { n: "Mid-range", per: 60, cash: 0.6, room: 70 }, { n: "Comfort", per: 120, cash: 0.45, room: 170 } ]
  },
  connectivity: {
    works: "Yes across Colombo, Kandy, Galle and the main tourist areas and roads, with solid 4G and growing 5G. Signal thins in the hill country interior, parts of the north and east, and inside the national parks."
  },
  tax: {
    none: true,
    currency: "LKR",
    note: "Sri Lanka has no separate nightly tourist tax to pay at checkout. An 18% VAT applies to most goods and services, and hotels and nicer restaurants often add a 10% service charge plus other levies, so a bill can run noticeably above the menu price. There is no broad tourist VAT refund scheme, so the tax is simply part of what you pay."
  },
  currencyHeading: "The rupee, and how you pay day to day.",
  facts: [
    { sym: "cash", k: "Rupees are the everyday money", v: "Sri Lanka runs on the Sri Lankan rupee (LKR). Prices are quoted in rupees, and most daily spending, tuk-tuks, markets, street food and small guesthouses, is cash. You do not need to buy rupees before you travel; pull them from a bank ATM on arrival." },
    { sym: "atm", k: "ATMs are easy in cities", v: "Bank ATMs are widely available in Colombo, the airport and tourist towns, and take Visa and Mastercard. Expect a per-withdrawal fee of around 400 to 600 rupees on top of your bank's, and low caps at some machines, so withdraw a larger amount where you can and carry extra cash into the hill country." },
    { sym: "smallnotes", k: "Small notes matter", v: "Big notes like the 5,000 rupee are hard to break with tuk-tuk drivers and small sellers. Break them at supermarkets, larger shops or your hotel, and keep a stack of small notes for daily spending and tips." },
    { sym: "tip", k: "Tipping, in rupees", v: "Tipping is not mandatory but is increasingly common in tourism and appreciated, given low service wages. Check for a 10% service charge first, then round up or add a little. Tip in rupees rather than dollars. See the tipping section below." }
  ],
  taxfree: {
    label: "Taxes and refunds",
    heading: "What is on your bill, and why there is little to reclaim.",
    text: "Two things worth knowing. Sri Lanka charges an <b>18% VAT</b> on most goods and services, and hotels and nicer restaurants commonly add a <b>10% service charge</b> and sometimes other small levies on top of the net price, so a bill can land well above the menu figure. Ask whether a quoted price is <b>all in</b> if it matters to your budget. Second, there is <b>no broad tourist VAT refund</b> scheme for visitors, so unlike some countries there is little to claim back at the airport; the tax is simply part of the price."
  },
  keyFacts: [
    { label: "Sri Lanka tourist ETA (30 days, US citizens)", value: "Free of charge for US citizens since 25 May 2026 under the 40-country fee-waiver scheme, but still mandatory: apply online at the official ETA portal before you fly. Valid 30 days with double-entry. Confirm the fee shows as zero for your passport before you rely on it.", status: "enacted", effective: "2026-05-25", source: "https://www.immigration.gov.lk/pages_e.php?id=60", checked: "2026-07-22" }
  ],
  traps: [
    "<b>Free does not mean skip the ETA.</b> The tourist ETA is now free for US citizens, but it is still mandatory and must be obtained online before you fly. Apply on the official government portal, not a lookalike site that adds a fee, and confirm the charge shows as zero.",
    "<b>Watch for the convert-to-dollars offer.</b> At an ATM or card terminal, if you are asked to be charged in US dollars instead of rupees (dynamic currency conversion), decline it. Paying in rupees and letting your own bank convert is almost always cheaper.",
    "<b>Big notes are hard to break.</b> Tuk-tuk drivers and small sellers often cannot change a 5,000 rupee note. Break large notes at supermarkets, larger shops or your hotel, and keep a stack of small ones for daily spending.",
    "<b>Check for a service charge before tipping.</b> Hotels and nicer restaurants often add a 10% service charge, so you are not expected to tip again on top unless the service was exceptional. Read the bill first.",
    "<b>Carry extra cash into the hill country and parks.</b> ATMs are common in cities but thin out in rural areas, on safari and in the hill country, so withdraw enough before you head off the main routes."
  ],
  tippingHeading: "Tip a little, in rupees.",
  tipping: "Tipping is not mandatory in Sri Lanka but is increasingly common in tourism and genuinely appreciated, since service wages are low. First, <b>check for a 10% service charge</b> on hotel and restaurant bills; if it is there, tipping again is optional unless the service was exceptional, and if it is not, around <b>10%</b> is a normal restaurant tip. For hotel housekeeping, <b>200 to 500 rupees a day</b> is kind; a safari or site guide, <b>500 to 1,000 rupees per person</b>; and tuk-tuk drivers do not expect a tip, though rounding up is a nice gesture. Always tip in <b>Sri Lankan rupees</b> rather than dollars, since it spares staff an exchange, and keep small notes handy for it.",
  faqs: [
    { q: "Do US citizens need a visa or ETA for Sri Lanka?", a: "You need an ETA (Electronic Travel Authorization), and it is mandatory before you fly. Since 25 May 2026 it is free of charge for US citizens under a 40-country fee-waiver scheme, but you still must apply online on the official government portal and get approval before travel. It is valid for 30 days with double-entry." },
    { q: "Is the Sri Lanka ETA really free now?", a: "For US citizens, yes, since 25 May 2026, Sri Lanka waived the tourist ETA fee for nationals of 40 countries, and the United States is on the list. The ETA itself is still required. Apply on the official portal and confirm the fee shows as zero for your passport, and ignore third-party sites that add a service charge." },
    { q: "Do I need cash in Sri Lanka?", a: "Yes, daily. Sri Lanka is a cash-first country for travelers: tuk-tuks, markets, street food, small guesthouses and national-park stops usually want rupees. Hotels, tour operators and nicer restaurants in Colombo and the tourist south take Visa and Mastercard. Pull rupees from a bank ATM on arrival and keep small notes." },
    { q: "Should I bring US dollars or use ATMs in Sri Lanka?", a: "Use ATMs. The Sri Lankan rupee is hard to buy abroad at a fair rate, so rather than bringing a lot of dollars, pull rupees from a bank ATM on arrival. If a machine or terminal offers to charge you in US dollars, decline it and choose rupees." },
    { q: "How much should I tip in Sri Lanka?", a: "Check for a 10% service charge first; if it is there, tipping again is optional. If not, around 10% at restaurants is normal. Housekeeping appreciates 200 to 500 rupees a day and a guide 500 to 1,000 rupees per person. Tip in rupees, not dollars." },
    { q: "How much cash should I bring for a week in Sri Lanka?", a: "For two mid-range travelers, very roughly 350 to 500 US dollars worth of rupees in day-to-day cash across a week beyond your hotel, pulled in a few ATM visits. Adjust for your style, how much you put on a card, and whether you are doing paid safaris and site entries, which add up." }
  ],
  culture: {
    heading: "A few words of Sinhala open doors",
    intro: "Sri Lanka has two main languages, Sinhala and Tamil, and English is widely understood in tourism, so no one expects you to be fluent. But a warm Ayubowan with palms together and a little curiosity mark you as a guest rather than a tourist. Sri Lankans are famously warm and hospitable, and a small effort is met with real kindness.",
    phrases: [
      { mean: "Hello (may you live long)", say: "AH-yu-bo-wan", word: "Ayubowan", native: "ආයුබෝවන්" },
      { mean: "Thank you", say: "IS-tu-tee", word: "Istuti", native: "ස්තූතියි" },
      { mean: "Yes", say: "o-WU", word: "Ovu", native: "ඔව්" },
      { mean: "No", say: "NAY-ye", word: "Naa", native: "නැහැ" },
      { mean: "Delicious", say: "ra-sai", word: "Rasai", native: "රසයි" },
      { mean: "Good, fine", say: "hon-dai", word: "Hondai", native: "හොඳයි" }
    ],
    tip: "Sri Lankans greet with palms pressed together and a warm <b>Ayubowan</b>, which returns easily and is always appreciated. At temples, <b>cover shoulders and knees</b>, remove shoes and hats, and never turn your back to a Buddha statue to pose for a photo, which is taken as a serious insult and has landed travelers in real trouble. The <b>head is respected</b> and pointing your <b>feet</b> at a person or a shrine is rude. Use your <b>right hand</b> for giving and eating.",
    stories: [
      { img: "/sri-lanka-culture-1.jpg",
        alt: "WPA-style illustration of the Sigiriya rock fortress rising from green jungle at sunrise, an ancient stairway climbing its flank and the geometric water gardens and reflecting pools spread out below",
        h: "The fortress in the sky",
        p: "Sigiriya, the Lion Rock, is a fifth-century royal citadel built atop a sheer 200-metre column of rock, ringed by water gardens and painted with frescoes of celestial maidens. A king raised his palace in the clouds here, reached by a stairway that once passed through the jaws of a giant carved lion. It is Sri Lanka's most breathtaking ancient site and a UNESCO wonder.",
        note: "Good to know: Sigiriya is often called the eighth wonder of the ancient world" },
      { img: "/sri-lanka-culture-2.jpg",
        alt: "WPA-style illustration of a small herd of elephants, including a calf, drinking and bathing at a jungle waterhole in warm light, with lush green foliage behind and two white egrets on the near bank",
        h: "Where the wild herds gather",
        p: "Sri Lanka packs an astonishing amount of wildlife into a small island, and its elephants are its pride. In parks like Udawalawe, Yala and Minneriya, herds gather at the water to drink and bathe, and the great seasonal Gathering of elephants is one of Asia's finest wildlife spectacles. Leopards, sloth bears and a riot of birdlife share the same forests. A morning at a waterhole here is unforgettable.",
        note: "Good to know: the annual Gathering at Minneriya draws hundreds of wild elephants" },
      { img: "/sri-lanka-culture-3.jpg",
        alt: "WPA-style illustration of a cobbled street in Galle Fort at dusk, whitewashed colonial buildings with red-tiled roofs and shuttered balconies, string lights overhead, the old lighthouse and the ramparts meeting the Indian Ocean beyond, and a plate of rice and curry with tea in the foreground",
        h: "The old fort by the sea",
        p: "On the south coast, Galle Fort is a beautifully preserved walled town the Dutch built in the seventeenth century, its ramparts wrapped around cobbled lanes, colonial villas, cafes and a white lighthouse above the Indian Ocean. Sunset on the walls, with the sea breeze and the call to prayer mixing with temple bells, captures Sri Lanka's layered history. It is the island's most romantic corner and a UNESCO World Heritage site.",
        note: "Good to know: Galle Fort is a UNESCO World Heritage site built by the Dutch" }
    ],
    pride: "Sri Lankans carry themselves with warmth and quiet resilience, proud of an island that survived a long civil conflict and a hard economic crisis and keeps welcoming the world with a smile. Greet people with Ayubowan, show respect at the temples, and the kindness you get in return is genuine and generous."
  },

  spokes: [
    {
      slug: "eta",
      live: true,
      topic: "visas",
      title: "Do US citizens need a visa for Sri Lanka? The free ETA, explained (2026) | True Trip Costs",
      description: "Since 25 May 2026, Sri Lanka's tourist ETA is free for US citizens, but it is still mandatory: you must get it online before you fly. Older guides still say it costs about $50. Here is the official portal and how to confirm your fee shows zero. Checked July 2026.",
      h1: "The free Sri Lanka ETA for US citizens",
      lede: "Sri Lanka made its tourist ETA free for Americans in May 2026, but free does not mean skip it: you still have to get one before you board. Here is how, and how to make sure you are not overcharged by a lookalike site.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Yes, you need an <b>ETA</b> (Electronic Travel Authorization), and since <b>25 May 2026 it is free</b> for US citizens, but it is <b>still mandatory</b>. You must apply online <b>before you fly</b> at the official portal, and you get a <b>30-day stay with double entry</b>. Most older guides still say it costs about $50, which is now out of date for Americans. Apply only on a <b>.gov.lk</b> site so you are not charged a bogus fee.",
      official: {
        label: "Sri Lanka Department of Immigration and Emigration: the official ETA portal",
        url: "https://eta.gov.lk",
        note: "The official government ETA site (the department also links it from immigration.gov.lk). The fee for eligible nationals, including US citizens, now shows zero. Confirm the web address ends in .gov.lk before entering any details, and apply at least a week before you fly."
      },
      expediter: false,
      sections: [
        {
          h: "Free now, but still required",
          p: [
            "This is the part travelers get wrong. As of <b>25 May 2026</b>, Sri Lanka waived the tourist ETA fee for citizens of 40 countries, <b>including the US</b>. But the ETA itself is <b>still compulsory</b>: no one, whatever their nationality, may enter Sri Lanka without an approved ETA obtained <b>before arrival</b>. Free changed the price, not the requirement.",
            "It grants a <b>30-day stay</b> with <b>double entry</b> (you can leave and come back once within the 30 days). Your passport needs <b>six months</b> of validity, and you should have proof of onward travel and enough funds for your stay. It does not permit any work, paid or unpaid."
          ]
        },
        {
          h: "How to get it, and how to confirm it is free",
          p: [
            "The whole thing is online and takes about ten to fifteen minutes."
          ],
          steps: [
            "Go to the official portal at eta.gov.lk. Check the address ends in .gov.lk before you type anything.",
            "Complete the tourist ETA form with your passport and travel details.",
            "At the payment step, confirm the fee shows zero for your nationality. If a site tries to charge you around $50, you are not on the official one, so close it.",
            "Submit and wait for the approval email, usually within 24 to 72 hours. Apply at least a week ahead, since the system has had occasional outages, and save the approval to show on arrival."
          ]
        },
        {
          h: "Why the overpaying happens",
          p: [
            "The fee change is recent, so <b>search results are full of stale guides</b> quoting the old $50 charge, and plenty of <b>third-party sites</b> will happily still charge you that (their markup) to file a form that is now free. The Department of Immigration warns travelers directly to verify they are on a <b>.gov.lk</b> domain before paying.",
            "A visa on arrival is also technically available at Colombo and Mattala airports, but the department strongly advises getting your ETA online first, since it is smoother and avoids any airport queue or confusion."
          ]
        },
        {
          h: "If you want to stay longer",
          p: [
            "The free ETA covers <b>30 days</b>. If you want more time, you can <b>extend</b> at the Department of Immigration and Emigration in Colombo, and the extension itself does carry a fee, so budget for it if you are planning a long stay.",
            "For how money works once you land, cards, cash, ATMs and the rest, see the <a href=\"/sri-lanka\">Sri Lanka money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for Sri Lanka in 2026?", a: "You need an ETA (Electronic Travel Authorization), which since 25 May 2026 is free for US citizens but still mandatory. Apply online before you fly at the official portal eta.gov.lk. It gives a 30-day stay with double entry. A visa on arrival exists at Colombo and Mattala airports, but applying online first is strongly advised." },
        { q: "Is the Sri Lanka ETA really free now?", a: "Yes, for citizens of 40 countries including the US, effective 25 May 2026. The fee was waived, but the ETA is still required before arrival. Many older guides still quote about $50, which is out of date, and third-party sites may still charge that as a markup. On the official .gov.lk portal, the fee shows zero." },
        { q: "What is the official Sri Lanka ETA website?", a: "eta.gov.lk, run by the Department of Immigration and Emigration (also linked from immigration.gov.lk). The department warns travelers to confirm the address ends in .gov.lk before entering details or paying, since lookalike sites charge inflated fees for the free authorization." },
        { q: "How long can US citizens stay in Sri Lanka on the ETA?", a: "30 days, with double entry, from your first arrival. You can extend your stay at the Department of Immigration and Emigration in Colombo for a fee. The tourist ETA does not permit any work, paid or unpaid." }
      ],
      sources: {
        links: [
          { label: "Sri Lanka Department of Immigration and Emigration: the free tourist ETA scheme for 40 countries from 25 May 2026", url: "https://www.immigration.gov.lk/pages_e.php?id=60", type: "gov" },
          { label: "Sri Lanka Department of Immigration and Emigration: the official ETA application portal", url: "https://eta.gov.lk", type: "gov" },
          { label: "US State Department: Sri Lanka country information, confirming the no-cost 30-day ETA for US citizens", url: "https://travel.state.gov/en/international-travel/travel-advisories/sri-lanka.html", type: "gov" }
        ],
        judgment: "The free ETA scheme is recent (effective 25 May 2026) and fees and rules can change, so confirm the current fee shows zero on the official .gov.lk portal before you travel. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      live: true,
      topic: "cash",
      title: "Do I need cash in Sri Lanka, or can I use cards? (2026) | True Trip Costs",
      description: "Sri Lanka is a cash-first country: cards work in Colombo and hotels, but tuk-tuks, street food, markets and small towns want rupees. How to get LKR from a bank ATM, decline the dollar conversion, and how much cash to carry. Checked July 2026.",
      h1: "Do I need cash in Sri Lanka, or can I use cards?",
      lede: "Short answer: carry rupees. Cards work fine in Colombo and at hotels, but most of the everyday, and most of the fun, runs on cash. Here is how to get it well and what to keep on hand.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Cash for most things, cards in the cities. The <b>Sri Lankan rupee (LKR)</b> is what you need day to day: <b>tuk-tuks, street food, markets, temple donations and small towns are cash</b>, while <b>Visa and Mastercard</b> work at hotels, nicer restaurants and shops in Colombo and the tourist south (Amex less so). Pull rupees from a <b>bank ATM</b>, always choose <b>rupees, not dollars</b>, at the machine, and keep small notes handy.",
      sections: [
        {
          h: "A cash-first country, with card islands",
          p: [
            "Sri Lanka runs largely on <b>cash</b>. Tuk-tuks, street food, market stalls, bus fares, temple donations and small guesthouses expect <b>rupees</b>, and outside Colombo and the main tourist towns, cards are often not an option at all. <b>Visa and Mastercard</b> are accepted at hotels, established restaurants, supermarkets and shops in Colombo and along the southern coast, with Amex much patchier.",
            "So the working approach is simple: <b>card for the bigger, formal things, cash for everything else</b>, and always carry enough rupees for a day of small spending."
          ]
        },
        {
          h: "Getting rupees, and the dollar trap",
          p: [
            "Use a <b>bank ATM</b>, the major ones being Commercial Bank, Sampath, Hatton National Bank, Bank of Ceylon and People's Bank, which take foreign Visa and Mastercard. Many charge a <b>local withdrawal fee</b> per transaction on top of your own bank's, so take out a useful amount at once rather than lots of small withdrawals.",
            "When the ATM or a card terminal asks whether to charge you in <b>US dollars or rupees, always choose rupees</b>. The dollar option is dynamic currency conversion, a poor rate. Use ATMs attached to a bank branch during the day, and decline any offer of help from a stranger at the machine."
          ]
        },
        {
          h: "Dollars, and leftover rupees",
          p: [
            "Do not plan to <b>spend US dollars</b> locally, you will need rupees, and paying in dollars where accepted gets a poor rate. If you bring some dollars to exchange, use a bank or an authorized money changer rather than the airport or your hotel for a better rate.",
            "One local rule to know: the rupee is a <b>restricted currency</b>, so change any leftover rupees back before you fly home (keep your exchange receipts), since taking large amounts of LKR out of the country is not allowed and you will struggle to exchange them elsewhere."
          ]
        },
        {
          h: "How much to carry",
          p: [
            "Carry enough rupees for the day, tuk-tuks, meals, entry fees and tips, and top up every couple of days rather than holding a large wad. A little cash also smooths the moments cards fail, which do happen outside the cities.",
            "For the fuller money picture and the rest, see the <a href=\"/sri-lanka\">Sri Lanka money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Sri Lanka, or can I use cards?", a: "Sri Lanka is cash-first. Cards (Visa and Mastercard) work at hotels and in Colombo and the tourist south, but tuk-tuks, street food, markets, bus fares and small towns want rupees. Carry small notes for daily spending and use a card for larger, formal purchases." },
        { q: "Which ATMs work with foreign cards in Sri Lanka?", a: "Bank ATMs from Commercial Bank, Sampath, Hatton National Bank, Bank of Ceylon and People's Bank take foreign Visa and Mastercard. Many add a local per-withdrawal fee on top of your own bank's, so withdraw a useful amount at once, and always choose rupees rather than dollars." },
        { q: "Can I use US dollars in Sri Lanka?", a: "Not for everyday spending, you need rupees, and paying in dollars where accepted gets a poor rate. If you bring dollars to change, use a bank or an authorized money changer rather than the airport or a hotel, which give weaker rates." },
        { q: "Can I take Sri Lankan rupees out of the country?", a: "The rupee is a restricted currency, so change any leftover rupees back before you leave and keep your exchange receipts. Taking large amounts of LKR out is not allowed, and you will struggle to exchange rupees once home." }
      ],
      sources: {
        links: [
          { label: "Central Bank of Sri Lanka: the official rupee (LKR) reference and currency rules", url: "https://www.cbsl.gov.lk/en", type: "bank" },
          { label: "US State Department: Sri Lanka country information and money guidance for travelers", url: "https://travel.state.gov/en/international-travel/travel-advisories/sri-lanka.html", type: "gov" }
        ],
        judgment: "Card acceptance and ATM fees vary by your own bank, and the currency-export rule is set by the Central Bank of Sri Lanka; much of the rest is our practical read, so treat amounts as a guide. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      live: true,
      topic: "tipping",
      title: "Tipping in Sri Lanka: how much, and when it is already on the bill (2026) | True Trip Costs",
      description: "Tipping in Sri Lanka for US travelers: the 10% service charge often already on restaurant bills, what to give drivers and guides (a bigger deal here), and the small notes for hotel staff and tuk-tuks. Cash in rupees. Checked July 2026.",
      h1: "Tipping in Sri Lanka",
      lede: "Sri Lanka has a modest, warm tipping culture. The main things to know: restaurants often add a service charge already, and the person you will most want to tip well is your driver or guide.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Tipping in Sri Lanka is <b>modest and appreciated, not obligatory</b>. Restaurants frequently add a <b>10% service charge</b> to the bill, so <b>check first</b>: if it is there, you need not add more; if not, around <b>10%</b> is generous. <b>Round up</b> tuk-tuk fares, leave <b>small rupee notes</b> for hotel staff, and, if you have a <b>driver or guide</b> for a tour, a daily tip is genuinely valued. Always tip in <b>cash, in rupees</b>.",
      sections: [
        {
          h: "Restaurants: check for the service charge",
          p: [
            "Many Sri Lankan restaurants, especially hotels and tourist spots, add a <b>10% service charge</b> to the bill by default. If it is already there, you have effectively tipped, and anything extra is optional for standout service. If there is <b>no</b> service charge, leaving around <b>10%</b> is a generous, welcome gesture.",
            "As always, <b>read the bill before you add anything</b>, so you are not paying a tip twice."
          ]
        },
        {
          h: "Drivers and guides: the one that matters most",
          p: [
            "This is the Sri Lanka specific point. Many visitors hire a <b>car and driver, or a driver-guide</b>, for part of their trip, and a good one makes the whole experience. Here a tip is <b>customary and meaningful</b>: something like <b>LKR 1,000 to 2,000 a day</b> for a driver-guide who has looked after you well is a fair benchmark, more for exceptional service, handed over at the end.",
            "For a one-off guide at a site or temple, a smaller tip of a few hundred rupees is fine."
          ]
        },
        {
          h: "Everyone else, and how to tip",
          p: [
            "<b>Tuk-tuks:</b> rounding up the fare is a kind touch, not expected. <b>Hotel staff:</b> a small note (say LKR 100 to 500) for porters and housekeeping is appreciated. At <b>temples</b>, a modest donation in the box is customary rather than a tip.",
            "Tip in <b>cash and in rupees</b>. It is the easiest thing for staff to use, and it reaches them directly, unlike a card tip. Keep a stash of small notes separate from your main wallet."
          ]
        }
      ],
      faqs: [
        { q: "How much should I tip in Sri Lanka?", a: "Tipping is modest. Check restaurant bills for a 10% service charge already added; if it is there, you need not add more, and if not, around 10% is generous. Round up tuk-tuk fares, give hotel staff small rupee notes, and tip a driver or guide a daily amount. Always in cash, in rupees." },
        { q: "Do Sri Lankan restaurants add a service charge?", a: "Often yes, around 10%, especially at hotels and tourist restaurants. Read the bill before adding your own tip. If a service charge is already included, anything extra is optional for excellent service." },
        { q: "How much do you tip a driver or guide in Sri Lanka?", a: "A daily tip is customary and appreciated. Roughly LKR 1,000 to 2,000 a day for a good driver-guide is a fair benchmark, more for exceptional service, handed over at the end of your time together. A one-off site guide can get a few hundred rupees." },
        { q: "Should I tip in rupees or dollars in Sri Lanka?", a: "Rupees, in cash. It is the easiest thing for staff to use and it reaches them directly, unlike a card tip. Keep a stash of small notes separate from your main wallet for tips and tuk-tuks." }
      ],
      sources: {
        links: [
          { label: "US State Department: Sri Lanka country information and local customs", url: "https://travel.state.gov/en/international-travel/travel-advisories/sri-lanka.html", type: "gov" }
        ],
        judgment: "Tipping norms are cultural, not legislated rates, so the figures here are our own read from recent traveler reports and local guidance, not a single official table. The service-charge practice varies by establishment. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Taxis and tuk-tuks in Sri Lanka: use the app, skip the haggle (2026) | True Trip Costs",
      description: "Getting around Sri Lanka without overpaying: PickMe and Uber book metered tuk-tuks and cars so you skip the negotiation, how to handle street tuk-tuks and the airport, and the tourist-price traps to avoid. Checked July 2026.",
      h1: "Taxis and tuk-tuks in Sri Lanka",
      lede: "The tuk-tuk is how you will get around Sri Lankan towns, and the easy way to avoid overpaying is to let an app set the fare. Here is how, plus the airport and the traps.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Use an <b>app</b> and you skip the haggling. <b>PickMe</b> (the main local app) and <b>Uber</b> (in Colombo and larger cities) both book <b>metered tuk-tuks and cars</b>, so you pay a fair, set fare instead of negotiating. For a <b>street tuk-tuk</b>, agree the price before you get in or insist on the meter. At the <b>airport</b>, use the official taxi counter or an app pickup, and ignore the touts. Fares are low, so overpaying is more about principle than big money.",
      sections: [
        {
          h: "The app is your friend: PickMe and Uber",
          p: [
            "The simplest way to get around Sri Lankan towns fairly is a ride app. <b>PickMe</b> is the homegrown leader and covers the most ground, including <b>metered tuk-tuks</b> as well as cars; <b>Uber</b> operates in <b>Colombo and some larger cities</b>. Both show the fare up front and let you pay by app or cash, which <b>takes the negotiation out of it entirely</b>, the single best thing you can do to avoid tourist pricing.",
            "Download PickMe before you arrive and add a payment method, and you will rarely need to argue about a fare."
          ]
        },
        {
          h: "Street tuk-tuks: agree first or use the meter",
          p: [
            "Flagging a <b>tuk-tuk</b> on the street is part of the fun, but it is where overcharging happens. Many Colombo tuk-tuks have <b>meters</b>, so look for one and ask the driver to use it. If there is no meter, <b>agree the fare before you climb in</b>, and have a rough idea of the going rate from a quick app quote first.",
            "The common lines are that the <b>meter is broken</b>, or a flat tourist price several times the real fare. It is rarely a lot of money, but a quick PickMe check keeps you honest and unbothered."
          ]
        },
        {
          h: "From the airport",
          p: [
            "At <b>Bandaranaike International Airport (CMB)</b> near Colombo, use the <b>official airport taxi counter</b> for a set fare, or book a <b>PickMe or Uber</b> from the app at the designated pickup area. Both are fine, and the counter is simplest late at night.",
            "Do not agree a ride with a <b>tout</b> who approaches you inside the terminal. If your hotel offers a fixed-price airport transfer, that is also a safe, easy option, just confirm the price in advance."
          ]
        },
        {
          h: "Longer trips and drivers",
          p: [
            "For getting between towns, many visitors hire a <b>car and driver</b> for a day or several, which is affordable and common in Sri Lanka; agree the daily rate, and whether fuel and the driver's meals are included, up front. Trains and buses are cheap and scenic but cash-only and often crowded.",
            "For how money works more broadly, and what to tip a driver, see the <a href=\"/sri-lanka\">Sri Lanka money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "What is the best taxi app in Sri Lanka?", a: "PickMe is the local leader and covers the most of the country, booking metered tuk-tuks and cars. Uber operates in Colombo and some larger cities. Both set a fair, metered fare and remove the haggling, so download PickMe before you arrive." },
        { q: "How do I avoid being overcharged by tuk-tuks in Sri Lanka?", a: "Book through PickMe or Uber for a set fare. For a street tuk-tuk, use the meter or agree the price before you get in, checking a quick app quote for the going rate first. The common overcharges are a 'broken' meter and a flat tourist price several times the real fare." },
        { q: "How do I get from Colombo airport to the city?", a: "Use the official airport taxi counter at Bandaranaike International Airport (CMB) for a set fare, or book a PickMe or Uber from the app at the designated pickup area, or arrange a fixed-price hotel transfer in advance. Ignore touts who approach you in the terminal." },
        { q: "Is Uber available in Sri Lanka?", a: "Yes, in Colombo and some larger cities. PickMe has wider coverage across the country and also books metered tuk-tuks. Either app avoids fare negotiation by setting the price up front." }
      ],
      sources: {
        links: [
          { label: "PickMe: Sri Lanka's main ride-hailing app, for metered tuk-tuks and cars", url: "https://pickme.lk", type: "guide" },
          { label: "US State Department: Sri Lanka country information and local transport safety", url: "https://travel.state.gov/en/international-travel/travel-advisories/sri-lanka.html", type: "gov" }
        ],
        judgment: "Ride-app coverage and fares change, and this is partly our practical read, so confirm the apps operate where you are going and treat fares as a guide. Checked July 2026."
      }
    }
  ]
};
