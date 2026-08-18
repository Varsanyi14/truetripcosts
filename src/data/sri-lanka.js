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
  title: "Do I need cash in Sri Lanka? Money in 2026",
  description: "Yes, it is a cash-first country. Pull rupees from a bank ATM on arrival, keep small notes for tuk-tuks and markets, and the ETA is now free. Checked 2026.",
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
      glance: [
        { k: "ETA", v: "Required, but free since May 2026" },
        { k: "Cost", v: "Free for US citizens" },
        { k: "Stay", v: "30 days, double entry" },
        { k: "Where", v: "The official portal only" }
      ],
      live: true,
      topic: "visas",
      title: "Sri Lanka ETA for US citizens: now free 2026",
      description: "Since May 2026 the Sri Lanka tourist ETA is free for US citizens, but still mandatory before you fly. The official portal, and checking the fee is zero.",
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
          icon: "receipt",
          key: { fig: "Free", tag: "Still mandatory", text: "As of 25 May 2026, Sri Lanka waived the tourist ETA fee for citizens of 40 countries, including the US. The ETA itself is still required, so apply online before you fly. It gives 30 days, double entry.", tone: "teal" },
          p: [
            "This is the part travelers get wrong. As of <b>25 May 2026</b>, Sri Lanka waived the tourist ETA fee for citizens of 40 countries, <b>including the US</b>. But the ETA itself is <b>still compulsory</b>: no one, whatever their nationality, may enter Sri Lanka without an approved ETA obtained <b>before arrival</b>. Free changed the price, not the requirement.",
            "It grants a <b>30-day stay</b> with <b>double entry</b> (you can leave and come back once within the 30 days). Your passport needs <b>six months</b> of validity, and you should have proof of onward travel and enough funds for your stay. It does not permit any work, paid or unpaid."
          ]
        },
        {
          h: "How to get it, and how to confirm it is free",
          icon: "qr",
          key: { fig: "10-15 min", tag: "Online, official portal", text: "The whole thing is online and takes about ten to fifteen minutes. Use only the official government portal, where the fee for eligible nationalities now shows as zero.", tone: "teal" },
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
          icon: "alert",
          key: { tag: "Ignore stale $50 quotes", text: "The fee change is recent, so search results are full of stale guides quoting the old $50 charge, and third-party sites will still charge it plus a markup. Apply direct on the official portal.", tone: "amber" },
          p: [
            "The fee change is recent, so <b>search results are full of stale guides</b> quoting the old $50 charge, and plenty of <b>third-party sites</b> will happily still charge you that (their markup) to file a form that is now free. The Department of Immigration warns travelers directly to verify they are on a <b>.gov.lk</b> domain before paying.",
            "A visa on arrival is also technically available at Colombo and Mattala airports, but the department strongly advises getting your ETA online first, since it is smoother and avoids any airport queue or confusion."
          ]
        },
        {
          h: "If you want to stay longer",
          icon: "calendar",
          key: { fig: "30 days", tag: "Extend in Colombo", text: "The free ETA covers 30 days. For more time, extend at the Department of Immigration and Emigration in Colombo, though the extension itself does carry a fee.", tone: "teal" },
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
      glance: [
        { k: "Currency", v: "Sri Lankan rupee (LKR)" },
        { k: "Cards", v: "Colombo, hotels, tourist south" },
        { k: "Cash for", v: "Tuk-tuks, street food, temples" },
        { k: "Get rupees", v: "Bank ATMs in town" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Sri Lanka? Yes, rupees 2026",
      description: "Sri Lanka is cash-first: cards work in Colombo and hotels, but tuk-tuks, street food, markets and small towns want rupees. How to get them, and how much.",
      h1: "Do I need cash in Sri Lanka, or can I use cards?",
      lede: "Short answer: carry rupees. Cards work fine in Colombo and at hotels, but most of the everyday, and most of the fun, runs on cash. Here is how to get it well and what to keep on hand.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Cash for most things, cards in the cities. The <b>Sri Lankan rupee (LKR)</b> is what you need day to day: <b>tuk-tuks, street food, markets, temple donations and small towns are cash</b>, while <b>Visa and Mastercard</b> work at hotels, nicer restaurants and shops in Colombo and the tourist south (Amex less so). Pull rupees from a <b>bank ATM</b>, always choose <b>rupees, not dollars</b>, at the machine, and keep small notes handy.",
      sections: [
        {
          h: "A cash-first country, with card islands",
          icon: "cash",
          key: { fig: "Cash-first", tag: "Rupees day to day", text: "Sri Lanka runs largely on cash. Tuk-tuks, street food, markets, bus fares, temple donations and small guesthouses expect rupees. Cards work in Colombo, hotels and the tourist south.", tone: "teal" },
          p: [
            "Sri Lanka runs largely on <b>cash</b>. Tuk-tuks, street food, market stalls, bus fares, temple donations and small guesthouses expect <b>rupees</b>, and outside Colombo and the main tourist towns, cards are often not an option at all. <b>Visa and Mastercard</b> are accepted at hotels, established restaurants, supermarkets and shops in Colombo and along the southern coast, with Amex much patchier.",
            "So the working approach is simple: <b>card for the bigger, formal things, cash for everything else</b>, and always carry enough rupees for a day of small spending."
          ]
        },
        {
          h: "Getting rupees, and the dollar trap",
          icon: "atm",
          key: { tag: "Choose rupees at the ATM", text: "Use a bank ATM (Commercial Bank, Sampath, Hatton National, Bank of Ceylon, People's Bank), which take foreign cards. When asked, choose rupees, not dollars, to avoid a marked-up rate.", tone: "amber" },
          p: [
            "Use a <b>bank ATM</b>, the major ones being Commercial Bank, Sampath, Hatton National Bank, Bank of Ceylon and People's Bank, which take foreign Visa and Mastercard. Many charge a <b>local withdrawal fee</b> per transaction on top of your own bank's, so take out a useful amount at once rather than lots of small withdrawals.",
            "When the ATM or a card terminal asks whether to charge you in <b>US dollars or rupees, always choose rupees</b>. The dollar option is dynamic currency conversion, a poor rate. Use ATMs attached to a bank branch during the day, and decline any offer of help from a stranger at the machine."
          ]
        },
        {
          h: "Dollars, and leftover rupees",
          icon: "usd",
          key: { fig: "Use rupees", tag: "Not US dollars", text: "Do not plan to spend US dollars locally, you will need rupees, and paying in dollars where accepted gets a poor rate. Bring some dollars only to exchange at a bank if needed.", tone: "teal" },
          p: [
            "Do not plan to <b>spend US dollars</b> locally, you will need rupees, and paying in dollars where accepted gets a poor rate. If you bring some dollars to exchange, use a bank or an authorized money changer rather than the airport or your hotel for a better rate.",
            "One local rule to know: the rupee is a <b>restricted currency</b>, so change any leftover rupees back before you fly home (keep your exchange receipts), since taking large amounts of LKR out of the country is not allowed and you will struggle to exchange them elsewhere."
          ]
        },
        {
          h: "How much to carry",
          icon: "coins",
          key: { fig: "A day", tag: "Top up often", text: "Carry enough rupees for the day, tuk-tuks, meals, entry fees and tips, and top up every couple of days rather than holding a large wad.", tone: "teal" },
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
      glance: [
        { k: "Tipping", v: "Modest, appreciated, not required" },
        { k: "Restaurants", v: "10% often already added, check" },
        { k: "Tip well", v: "Drivers and driver-guides" },
        { k: "How", v: "Cash, in rupees" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Sri Lanka: how much, and the 10% charge",
      description: "A 10% service charge is often already on restaurant bills. What to give drivers and guides, which matters more here, and small notes for hotel staff.",
      h1: "Tipping in Sri Lanka",
      lede: "Sri Lanka has a modest, warm tipping culture. The main things to know: restaurants often add a service charge already, and the person you will most want to tip well is your driver or guide.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Tipping in Sri Lanka is <b>modest and appreciated, not obligatory</b>. Restaurants frequently add a <b>10% service charge</b> to the bill, so <b>check first</b>: if it is there, you need not add more; if not, around <b>10%</b> is generous. <b>Round up</b> tuk-tuk fares, leave <b>small rupee notes</b> for hotel staff, and, if you have a <b>driver or guide</b> for a tour, a daily tip is genuinely valued. Always tip in <b>cash, in rupees</b>.",
      sections: [
        {
          h: "Restaurants: check for the service charge",
          icon: "receipt",
          key: { fig: "10%", tag: "Often already added", text: "Many Sri Lankan restaurants, especially hotels and tourist spots, add a 10% service charge by default. If it is there, you have tipped, if not, around 10% is generous.", tone: "teal" },
          p: [
            "Many Sri Lankan restaurants, especially hotels and tourist spots, add a <b>10% service charge</b> to the bill by default. If it is already there, you have effectively tipped, and anything extra is optional for standout service. If there is <b>no</b> service charge, leaving around <b>10%</b> is a generous, welcome gesture.",
            "As always, <b>read the bill before you add anything</b>, so you are not paying a tip twice."
          ]
        },
        {
          h: "Drivers and guides: the one that matters most",
          icon: "wheel",
          key: { fig: "Tip well", tag: "The Sri Lanka point", text: "Many visitors hire a car and driver or a driver-guide, and a good one makes the trip. This is where tipping matters most: a fair daily gratuity on top of the agreed rate is genuinely valued.", tone: "teal" },
          p: [
            "This is the Sri Lanka specific point. Many visitors hire a <b>car and driver, or a driver-guide</b>, for part of their trip, and a good one makes the whole experience. Here a tip is <b>customary and meaningful</b>: something like <b>LKR 1,000 to 2,000 a day</b> for a driver-guide who has looked after you well is a fair benchmark, more for exceptional service, handed over at the end.",
            "For a one-off guide at a site or temple, a smaller tip of a few hundred rupees is fine."
          ]
        },
        {
          h: "Everyone else, and how to tip",
          icon: "coins",
          key: { fig: "In rupees", tag: "Cash, small notes", text: "Tuk-tuks: round up, not expected. Hotel staff: a small note, say LKR 100 to 500, for porters and housekeeping. At temples, a small donation. Always in cash, in rupees.", tone: "teal" },
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
      glance: [
        { k: "Best apps", v: "PickMe (local) and Uber" },
        { k: "What they book", v: "Metered tuk-tuks and cars" },
        { k: "Street tuk-tuks", v: "Agree first or use the meter" },
        { k: "Airport", v: "Official counter or the app" }
      ],
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Sri Lanka tuk-tuks: use the app, skip the haggle",
      description: "PickMe and Uber book metered tuk-tuks and cars, so you skip the negotiation. How to handle street tuk-tuks, the airport, and the tourist-price traps.",
      h1: "Taxis and tuk-tuks in Sri Lanka",
      lede: "The tuk-tuk is how you will get around Sri Lankan towns, and the easy way to avoid overpaying is to let an app set the fare. Here is how, plus the airport and the traps.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Use an <b>app</b> and you skip the haggling. <b>PickMe</b> (the main local app) and <b>Uber</b> (in Colombo and larger cities) both book <b>metered tuk-tuks and cars</b>, so you pay a fair, set fare instead of negotiating. For a <b>street tuk-tuk</b>, agree the price before you get in or insist on the meter. At the <b>airport</b>, use the official taxi counter or an app pickup, and ignore the touts. Fares are low, so overpaying is more about principle than big money.",
      sections: [
        {
          h: "The app is your friend: PickMe and Uber",
          icon: "phoneok",
          key: { fig: "PickMe", tag: "Skip the haggling", text: "The simplest way to get around fairly is a ride app. PickMe is the homegrown leader with the widest coverage, including metered tuk-tuks and cars, and Uber works in Colombo and larger cities.", tone: "teal" },
          p: [
            "The simplest way to get around Sri Lankan towns fairly is a ride app. <b>PickMe</b> is the homegrown leader and covers the most ground, including <b>metered tuk-tuks</b> as well as cars; <b>Uber</b> operates in <b>Colombo and some larger cities</b>. Both show the fare up front and let you pay by app or cash, which <b>takes the negotiation out of it entirely</b>, the single best thing you can do to avoid tourist pricing.",
            "Download PickMe before you arrive and add a payment method, and you will rarely need to argue about a fare."
          ]
        },
        {
          h: "Street tuk-tuks: agree first or use the meter",
          icon: "alert",
          key: { tag: "Agree the fare first", text: "Flagging a tuk-tuk is part of the fun, but it is where overcharging happens. Many Colombo tuk-tuks have meters, so ask the driver to use it, or agree the price before you get in.", tone: "amber" },
          p: [
            "Flagging a <b>tuk-tuk</b> on the street is part of the fun, but it is where overcharging happens. Many Colombo tuk-tuks have <b>meters</b>, so look for one and ask the driver to use it. If there is no meter, <b>agree the fare before you climb in</b>, and have a rough idea of the going rate from a quick app quote first.",
            "The common lines are that the <b>meter is broken</b>, or a flat tourist price several times the real fare. It is rarely a lot of money, but a quick PickMe check keeps you honest and unbothered."
          ]
        },
        {
          h: "From the airport",
          icon: "plane",
          key: { fig: "CMB", tag: "Counter or app", text: "At Bandaranaike International (CMB) near Colombo, use the official airport taxi counter for a set fare, or book a PickMe or Uber from the app at the designated pickup area.", tone: "teal" },
          p: [
            "At <b>Bandaranaike International Airport (CMB)</b> near Colombo, use the <b>official airport taxi counter</b> for a set fare, or book a <b>PickMe or Uber</b> from the app at the designated pickup area. Both are fine, and the counter is simplest late at night.",
            "Do not agree a ride with a <b>tout</b> who approaches you inside the terminal. If your hotel offers a fixed-price airport transfer, that is also a safe, easy option, just confirm the price in advance."
          ]
        },
        {
          h: "Longer trips and drivers",
          icon: "wheel",
          key: { fig: "Per day", tag: "Car and driver", text: "For getting between towns, many visitors hire a car and driver for a day or several, which is affordable and common. Agree the daily rate, and whether fuel and the driver's meals are included.", tone: "teal" },
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
    },
    {
      slug: "money-scams",
      glance: [
        { k: "Most cost", v: "A few dollars a time" },
        { k: "Tuk-tuks", v: "Meter, or agree it first" },
        { k: "Gems", v: "Do not buy to resell" },
        { k: "Rented gear", v: "Photograph it first" }
      ],
      live: true,
      topic: "scams",
      title: "Common money scams in Sri Lanka, and what they cost",
      description: "The tuk-tuk meter that is broken, the gem shop your driver recommended and the surf school that finds damage. What each costs a US visitor, and how to sidestep it.",
      h1: "Common money scams in Sri Lanka, and what they cost you",
      lede: "Sri Lanka is a warm, welcoming country and the money traps here are small ones. Fares are so low that overpaying is usually a matter of a few dollars, and the two that can reach real money, the gem shop and the damage claim, are both defused by a decision you make before you spend anything. Almost all of it starts in the same place: a tuk-tuk driver who suggests somewhere you were not going. Here is each one, what it costs, and how to sidestep it.",
      checked: "Aug 2026",
      checkedISO: "2026-08-15",
      answer: "The US State Department and its own security reporting name these directly. <b>Tuk-tuk fare tricks</b>, where the meter is broken and a phone app does the charging instead. The <b>special tour</b>, where a driver offers festivals, temples or a <b>gem shop</b> and you are pressed to buy cut glass at sapphire prices. And the <b>surf school damage claim</b>, where the board you returned is suddenly broken. Add the commission diversion, where somewhere you booked is reported closed. The golden rules: <b>insist on the meter or agree the fare first</b>, <b>use PickMe or Uber</b>, <b>never buy gems to resell</b>, <b>photograph rented gear before you use it</b>, and <b>phone your hotel yourself</b>.",
      sections: [
        {
          h: "The tuk-tuk, the meter and the phone",
          icon: "taxi",
          key: { fig: "Agree it first", tag: "Or use PickMe", text: "The State Department notes drivers claiming a broken meter and charging inflated prices through third-party apps. Sri Lanka's security reporting describes the phone slipping away near the destination.", tone: "teal" },
          p: [
            "The State Department puts it plainly: tuk-tuk scams are frequent, and drivers may claim their <b>meter is broken</b> and charge inflated prices using third-party apps. The US security reporting for Sri Lanka describes the mechanism in detail, and it is a neat one. The driver runs your ride on an app on <b>his</b> phone rather than the meter, and as you approach the destination the phone slips down out of view or the app closes, after which the figure quoted is well above the routine fare.",
            "Three escapes, in order of how well they work. Best is to <b>book through an app yourself</b>: <b>PickMe</b> is the main local one and <b>Uber</b> runs in Colombo and larger cities, and both set a fair fare with no negotiation. Next is to <b>insist the meter runs</b> from the start in a metered tuk-tuk. Failing both, <b>agree the price before you get in</b>, out loud, and the official advice adds a useful detail: <b>carry the exact amount</b> so there is no change conversation at the end. Fares are genuinely low here, so this is about principle more than money, but it also sets the tone for the rest of the ride. The <a href=\"/sri-lanka/taxis-and-apps\">Sri Lanka taxis and apps guide</a> has the full picture."
          ]
        },
        {
          h: "The special tour, and the gem shop",
          icon: "tag",
          key: { tag: "Never buy to resell", text: "The State Department warns about drivers offering special tours or access to gem shops, where tourists are pressed to buy stones that are cut glass or worth far less than the asking price.", tone: "teal" },
          p: [
            "This is the one that can reach real money, and both the State Department and its security reporting name it. A tuk-tuk or taxi driver offers a <b>special tour</b>, or access to a festival, a temple opening or a <b>gem shop</b>. Sri Lanka genuinely is a sapphire country, which is exactly what makes the pitch work. Inside, the pressure is heavy and the stones are, in the official wording, either <b>cut glass or worth far less</b> than the price being asked, sometimes with a certificate that means nothing. The same structure powers the spice-garden and jewellery versions, where the driver takes a commission on whatever you spend.",
            "The rule that protects you is not about spotting fake stones, because you cannot. It is: <b>never buy gems as an investment or to resell at home</b>. That single decision removes the entire premise of the pitch, since the scam depends on you believing you are getting export-profit value. If you want a stone as a souvenir, buy it at a price you would be happy to have paid for costume jewellery, from a shop <b>you</b> found rather than one a driver suggested, and walk out the moment anyone applies pressure. A driver who insists on a stop you did not ask for is telling you who is paying him."
          ]
        },
        {
          h: "The rented board, and the damage that appears",
          icon: "wheel",
          key: { fig: "Photograph it", tag: "Before you use it", text: "The State Department advises taking photos of your surfboard before using it, because surf schools have claimed renters damaged boards and demanded high repair fees.", tone: "teal" },
          p: [
            "The US State Department gives this one a specific instruction, which tells you how routine it has become on the south coast: surf schools sometimes claim that customers <b>damaged boards</b> and demand high repair fees, so <b>take photos of your surfboard before using it</b>. Boards pick up dings constantly, most of them are old, and once you are standing on the sand with wet hair and a flight to catch, arguing about which ding is yours is a fight you will lose.",
            "Ninety seconds fixes it, and the habit generalizes to everything you rent in Sri Lanka. <b>Photograph or video the item from every angle before you take it</b>, with the shop in shot so the file is timestamped and located. That covers boards, snorkel gear and, importantly, <b>scooters</b>, where the same claim is worth far more. And do not leave your <b>passport</b> as a deposit with anyone; offer cash instead, because a shop holding your passport controls whatever number it decides to name."
          ]
        },
        {
          h: "Somewhere you booked, suddenly closed",
          icon: "phoneok",
          key: { tag: "Phone them yourself", text: "Travelers consistently report drivers claiming a booked hotel has closed, burned down or become unreachable, then offering somewhere better that pays them a commission. Call your hotel and check.", tone: "teal" },
          p: [
            "This one is not named in a government advisory, so treat it as a consistent traveler report rather than an official warning, but it follows exactly the commission logic the advisories do describe. You arrive at a station or airport, and a driver tells you the place you booked has <b>closed, burned down, is full, or the road is shut</b>. He knows somewhere better. The alternative pays him a referral fee, and it is usually worse and dearer than what you had.",
            "The escape takes one minute: <b>phone your hotel yourself</b> and ask. Have the number and the address saved offline before you land, along with a map, so you can check the road independently. If the driver still refuses to take you to the address you asked for, <b>get out and find another</b>, or open PickMe. The related version at temples and sites is the unofficial guide who starts walking and explaining before you have agreed anything, then asks for payment; a firm no thank you at the first sentence is enough, and it is not rude here."
          ]
        },
        {
          h: "What this means for your money",
          icon: "coins",
          key: { fig: "Habits", tag: "How to avoid it", text: "Use PickMe or insist on the meter, never buy gems to resell, photograph anything you rent, and phone your hotel yourself. Keep small notes, since nobody can break a 5,000 rupee note.", tone: "teal" },
          p: [
            "Almost everything here costs a few dollars, and the two that do not, the gem purchase and the damage claim, are both settled by a decision made before you spend anything. The habits: <b>use PickMe or insist on the meter</b>, <b>never buy gems to resell</b>, <b>photograph anything you rent</b>, and <b>phone your hotel yourself</b>. One practical detail that prevents more small friction than any of them: <b>carry small notes</b>, because tuk-tuk drivers and small sellers often genuinely cannot change a 5,000 rupee note, and a missing note is easy to lose track of in the confusion.",
            "Two that are not scams but do cost money. Many hotels and nicer restaurants add a <b>10 percent service charge</b>, so read the bill before tipping again, which the <a href=\"/sri-lanka/tipping\">Sri Lanka tipping guide</a> covers. And the tourist <b>ETA</b> is now free for US citizens but still mandatory, so apply only on the official government portal and ignore any site charging a fee, as the <a href=\"/sri-lanka/eta\">Sri Lanka ETA guide</a> explains. For getting and spending money well while you are there, see the <a href=\"/sri-lanka/cash-or-card\">Sri Lanka cash and cards guide</a> and the <a href=\"/sri-lanka\">Sri Lanka cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "What are the most common tourist scams in Sri Lanka?", a: "The US State Department names three: tuk-tuk drivers claiming a broken meter and charging inflated fares through an app on their phone, drivers offering special tours or gem shops where you are pressed to buy overpriced or fake stones, and surf schools claiming you damaged a board and demanding a high repair fee. All three are avoidable with a habit each." },
        { q: "How do I avoid tuk-tuk overcharging in Sri Lanka?", a: "Book through PickMe, the main local app, or Uber in Colombo and larger cities, so the fare is set without negotiation. Otherwise insist the meter runs from the start, or agree the price out loud before you get in. Official advice adds a useful detail: carry the exact amount so there is no change conversation at the end of the ride." },
        { q: "Are gems in Sri Lanka a scam?", a: "The country genuinely produces sapphires, which is what makes the pitch work. The scam is the pressure sale, usually reached through a driver's special tour, where stones turn out to be cut glass or worth far less than the asking price. The rule that protects you is simple: never buy gems as an investment or to resell at home, and only buy from a shop you found yourself." },
        { q: "Why should I photograph a rented surfboard in Sri Lanka?", a: "Because the US State Department advises it directly. Surf schools have claimed renters damaged boards and demanded high repair fees, and boards carry old dings constantly, so proving which one is yours is impossible after the fact. Photograph or video the board from every angle before you use it, and do the same for scooters and any other rented gear." },
        { q: "A driver told me my hotel is closed. Is that true?", a: "Probably not. Travelers consistently report drivers claiming a booked hotel has closed, burned down or become unreachable, then offering an alternative that pays them a commission. Phone your hotel and ask. Save the number, address and an offline map before you land. If the driver still will not take you to the address you gave, get out and book through PickMe." },
        { q: "Is Sri Lanka dangerous for tourists?", a: "This page covers money traps only, and on that front Sri Lanka is a low-stakes place: the common scams are small overcharges and pressure sales, not threats. The US advisory level for Sri Lanka reflects separate civil unrest and terrorism considerations rather than anything about tourist money scams, so check the current advisory for that side of the picture before you travel." }
      ],
      sources: {
        links: [
          { label: "US State Department: Sri Lanka travel advisory and travel guidance, including tuk-tuk, gem shop and surf school scams", url: "https://travel.state.gov/en/international-travel/travel-advisories/sri-lanka.html", type: "gov" },
          { label: "OSAC: Sri Lanka country security report, including the tuk-tuk phone app mechanism and the gem shop pressure sale", url: "https://www.osac.gov/Country/SriLanka/Content/Detail/Report/ab831dc8-9e0d-489e-aa01-1ce3ecc6106f", type: "gov" }
        ],
        judgment: "The broken-meter and phone-app tuk-tuk trick, the special tour and gem shop pressure sale with stones described as cut glass or worth far less than the asking price, the surf school damage claim and the instruction to photograph a board before using it all come from current US State Department travel guidance for Sri Lanka and its accompanying country security report. The hotel-closed commission diversion and the spice garden version are consistent traveler reports rather than advisory items, and we have marked them as such and attached no figure. This page covers money scams only; Sri Lanka's overall advisory level reflects civil unrest and terrorism considerations that are unrelated to tourist money traps, and we have not imported that framing here. Rupee conversions use roughly 336 to the dollar. Checked August 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Good coast, Colombo, hill country" },
        { k: "Carrier roaming", v: "$10 to $12 a day" },
        { k: "Cheapest", v: "An airport SIM, $5 to $10" },
        { k: "Signal gaps", v: "Yala, the deep interior" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "Sri Lanka SIM card: the airport one is the cheap answer",
      description: "A Dialog or Mobitel tourist pack at Colombo airport runs 5 to 10 dollars for 25GB or more. That undercuts roaming and an eSIM, and takes about ten minutes.",
      h1: "Staying connected in Sri Lanka.",
      lede: "Sri Lanka is one of the countries where the cheap answer is also an easy one. The tourist SIM counters sit in the Colombo arrivals hall, they take about ten minutes, and what they sell costs less than a single day of carrier roaming.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: "Coverage is <b>good along the coast, in Colombo and through the hill country</b>, thinner in <b>Yala</b>, the deep interior and on some hill roads. The cheapest option is not the eSIM. A <b>tourist SIM</b> from <b>Dialog</b> or <b>Mobitel</b>, bought at the counters in the <b>Colombo arrivals hall</b>, runs about <b>5 to 10 dollars</b> for <b>25GB or more</b> with local calls included, which is less than one day of carrier roaming. You need your <b>passport</b> and about ten minutes. Your US carrier charges about <b>10 to 12 dollars a day</b> (<b>AT&amp;T and Verizon</b> day passes), though <b>AT&amp;T caps its Day Pass at 10 daily fees per line per bill period</b>, about <b>120 dollars</b>, and covers the rest of that bill period on land, so the daily arithmetic stops past day 10, and <b>T-Mobile</b>'s mid and upper tiers include <b>5GB to 30GB</b> of high-speed data abroad before slowing to <b>256kbps</b>. A <b>Nomad eSIM</b> is a few dollars per gigabyte and is the right call if you want data working before you land or you would rather not queue. Never roam <b>pay-per-use</b>, at about 2 dollars a megabyte.",
      sections: [
        {
          h: "The airport SIM is cheap, generous and quick",
          icon: "tag",
          key: { fig: "$5 to $10", tag: "For 25GB or more", text: "Dialog and Mobitel sell tourist packs in the Colombo arrivals hall. Passport, about ten minutes, and it costs less than one day of roaming.", tone: "teal" },
          p: [
            "The <b>tourist SIM</b> counters at <b>Bandaranaike airport</b> are in the arrivals hall before you leave the building, and both <b>Dialog</b> and <b>Mobitel</b> sell packs aimed squarely at visitors: roughly <b>5 to 10 dollars</b> for <b>25GB to 50GB</b>, valid a month, with local calls and often some international minutes included. Bring your <b>passport</b>. The staff do this all day and it takes about ten minutes.",
            "Set that against the alternatives and the case makes itself. A week of <b>AT&amp;T or Verizon</b> day passes is <b>70 to 84 dollars</b>. A travel eSIM is a few dollars per gigabyte, so a 10GB allowance costs several times the local pack. We earn a commission on eSIMs and nothing on a Dialog SIM, and the honest recommendation for most trips here is still the counter in the arrivals hall."
          ]
        },
        {
          h: "Which network, and the coverage that actually varies",
          icon: "phoneok",
          key: { fig: "Dialog", tag: "The widest reach", text: "Dialog generally has the broadest coverage, Mobitel is close and sometimes better in the hills. Both thin out in Yala and the deep interior.", tone: "teal" },
          p: [
            "<b>Dialog</b> is usually the safe default on reach, with <b>Mobitel</b> close behind and sometimes stronger in the <b>hill country</b> around Ella and Nuwara Eliya. Either handles Colombo, Galle, the south coast, Kandy and the cultural triangle comfortably, with 4G almost everywhere a visitor goes and 5G in the bigger centers. The <b>train</b> to Ella, which is the ride everybody takes, holds a signal for most of the route and loses it in the tunnels and cuttings.",
            "Where it genuinely thins: inside <b>Yala</b> and the other big parks, deep in the <b>Knuckles</b> range, on some interior roads and at remote surf points on the east coast. None of it is a trip-planning problem, and it is worth <b>downloading offline maps</b> for a park day or a hill drive rather than assuming."
          ]
        },
        {
          h: "When roaming or an eSIM is the better buy",
          icon: "roamfee",
          key: { fig: "$10-12/day", tag: "Roaming default", text: "T-Mobile is the exception worth checking, with 5GB to 30GB of high-speed data abroad on its mid and upper tiers. AT&T caps its Day Pass at 10 fees a bill period.", tone: "teal" },
          p: [
            "Roaming on your US plan is the expensive default: <b>AT&amp;T and Verizon</b> day passes are about <b>10 to 12 dollars a day</b>, so a week is <b>70 to 84 dollars</b>, though <b>AT&amp;T caps its Day Pass at 10 daily fees per line per bill period</b>, about <b>120 dollars</b>, and covers the rest of that bill period on land, so the daily arithmetic stops past day 10. <b>T-Mobile</b> is the exception worth checking before you buy anything: its current tiers include roughly <b>5GB</b> on Experience More, Magenta MAX and Go5G Plus, <b>15GB</b> on Experience Beyond and Go5G Next and <b>30GB</b> on Better Value, slowing to <b>256kbps</b> after that. If you are on one of those and travelling light, you may need nothing at all.",
            "The honest case for a <b>Nomad eSIM</b> here is a late landing, a pre-booked transfer to confirm, or simply not wanting to queue after a long flight. It is a few dollars per gigabyte and it works from touchdown. That is convenience, not price. This guide is written for US travelers departing the US. For more, see <a href='/sri-lanka/cash-or-card'>cash or card in Sri Lanka</a>, <a href='/sri-lanka/taxis-and-apps'>taxis and apps in Sri Lanka</a>, and the <a href='/sri-lanka'>Sri Lanka money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is a local SIM cheaper than an eSIM in Sri Lanka?", a: "Clearly. A Dialog or Mobitel tourist pack at Colombo airport is about 5 to 10 dollars for 25GB or more, which is less than one day of carrier roaming and a fraction of an equivalent eSIM allowance. You need your passport and about ten minutes at the arrivals counter." },
        { q: "Where do I buy a SIM card in Sri Lanka?", a: "At the Dialog and Mobitel counters in the Colombo airport arrivals hall, before you leave the building. Bring your passport. They also sell in town, but the airport counters are set up for visitors and the pricing is the same tourist pack." },
        { q: "Which network has the best coverage in Sri Lanka?", a: "Dialog generally has the widest reach, with Mobitel close behind and sometimes better in the hill country. Both cover Colombo, the south coast, Kandy and the cultural triangle well. Coverage thins inside Yala and the other parks and in the deep interior." },
        { q: "How much does it cost to use my US phone in Sri Lanka?", a: "About 10 to 12 dollars a day on an AT&T or Verizon day pass, so roughly 70 to 84 dollars a week. AT&T caps its Day Pass at 10 daily fees per line per bill period, so about 120 dollars covers the rest of that bill period on land, while Verizon's TravelPass has no equivalent cap and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include 5GB to 30GB of high-speed data abroad before slowing to 256kbps." }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "Dialog Axiata: tourist SIM and prepaid data pack pages", url: "https://www.dialog.lk/", type: "official" },
          { label: "US State Department: Sri Lanka country information for US travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/SriLanka.html", type: "gov" }
        ],
        judgment: "Checked Aug 2026. We earn on eSIM links and nothing on a Dialog or Mobitel SIM, so it is worth being direct that the airport counter is the cheap answer here and the eSIM is the convenient one. Tourist pack contents change with promotions, so treat 25GB and the 5 to 10 dollar range as the current shape of the offer rather than a fixed product, and check what is on the board at the counter. Carrier day-pass figures are an Aug 2026 snapshot and move faster than anything else we cover."
      }
    }
  ]
};
