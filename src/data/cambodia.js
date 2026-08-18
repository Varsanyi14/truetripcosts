export default {
  slug: "cambodia",
  iso2: "kh",
  live: true,
  name: "Cambodia",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-16",
  sources: {
    changed: "Sources added on first publish. Confirmed with PwC's tax summary that Cambodia charges a 10% VAT and a 2% accommodation tax, and that there is no visitor VAT refund. Verified the tourist visa on the official Ministry of Foreign Affairs e-visa portal, with the separate, free e-Arrival Card required for air arrivals. The US dollar's role as the everyday currency, with the riel used as change near 4,000 to the dollar, is long standing and widely reported. Note that overland travel from Thailand is largely suspended, so most travelers fly in; see the US Embassy advisory.",
    links: [
      { label: "PwC Worldwide Tax Summaries: Cambodia's 10% VAT and 2% accommodation tax, and no visitor refund", url: "https://taxsummaries.pwc.com/cambodia/corporate/other-taxes", type: "revenue" },
      { label: "Cambodia e-Visa (official government portal, Ministry of Foreign Affairs): the tourist e-visa and fee", url: "https://www.evisa.gov.kh", type: "gov" },
      { label: "US Embassy in Cambodia: the current Cambodia to Thailand land border travel advisory", url: "https://kh.usembassy.gov/travel-advisory-cambodia-thailand-border/", type: "gov" },
      { label: "Cambodianess: how the US dollar and the riel work side by side, with the riel near 4,000 to the dollar", url: "https://cambodianess.com/article/cambodias-dual-currency-system-how-de-dollarization-is-reshaping-daily-transactions", type: "media" }
    ],
    judgment: "The daily cash share, the tipping norms, and the ATM fee and withdrawal ranges are our own read from recent traveler and bank reports, not a single official table. Treat them as a planning guide and confirm anything critical before you travel."
  },
  emergency: { medical: "119", note: "119 is the ambulance line, with 117 for police and 118 for fire. Response can be slow even in the cities, so for anything serious a taxi or tuk-tuk straight to a private hospital is often faster. The US 911 number does not work here.", checked: "Jul 2026", checkedISO: "2026-07-16" },
  insuranceLevel: "medium",
  region: "Asia",
  signals: { cardFriendliness: 2, cashNeed: 4, taxRisk: 2, atmRisk: 4 },
  hook: "Cambodia runs on US dollars, so there is barely anything to convert: pay and withdraw in clean, newer dollar bills, take your change in riel, keep small notes for markets and tuk-tuks, and just decline any screen that offers to lock in a rate.",
  aliases: ["cambodia", "cambodian", "khmer", "phnom penh", "siem reap", "angkor", "angkor wat", "sihanoukville", "battambang", "kampot", "koh rong", "tonle sap", "riel", "khr", "usd", "us dollar", "dollarized", "aba", "acleda", "bakong", "khqr", "e-arrival card", "evisa", "fish amok", "apsara", "tuk tuk"],
  title: "Cambodia runs on US dollars: money guide 2026",
  description: "You spend US dollars and get riel as change, so there is little to convert. Bring clean, newer small bills, because worn notes get refused. Checked 2026.",
  h1: "Money in Cambodia, sorted.",
  lede: "A calm, current plan for the money side of your trip: why you pay in dollars, where the riel fits, and the small rules that trip up first-timers.",
  hero: {
    img: "/cambodia-hero.jpg",
    h: 1375,
    alt: "A quiet Cambodian old-quarter street at dusk with French-colonial shophouses, string lights overhead, an Angkor-style temple tower in the distance, a lone figure walking away, and a steaming banana-leaf cup of fish amok with a bowl of rice on a wooden table in the foreground"
  },
  recentChange: {
    date: "Jul 2026",
    text: "If you were thinking of reaching Cambodia overland from Thailand, that plan is on hold. The land border crossings have been <b>largely suspended</b> since 2025 after a border dispute, so the old cheap Bangkok to Siem Reap bus is not running and most travelers now <b>fly in</b>, which adds to the trip cost. Flights and travel inside Cambodia are not affected. It is a developing situation, so check the <b>US State Department travel advisory</b> before you book."
  },
  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',
  verdict: "Cambodia is one of the few places where you spend in <b>US dollars</b>. Prices are in dollars, ATMs hand out dollars, and the riel shows up only as <b>change under a dollar</b>, at a steady 4,000 to the dollar. Bring <b>clean, newer dollar bills</b> in small denominations, because torn or old notes get refused and machines love to give you hundreds. Cards work at hotels and nicer spots in Phnom Penh and Siem Reap, but markets, tuk-tuks and street food are <b>cash</b>. The one screen to watch is any offer to <b>lock in a rate</b> at a terminal or ATM: decline it.",
  meter: {
    heading: "Cambodia runs on cash, and that cash is US dollars.",
    cashPct: 65,
    note: "A rough feel for everyday spending. Phnom Penh and Siem Reap increasingly take cards and the KHQR phone system at hotels, malls and nicer restaurants, and you can pay a lot by app. But street food, markets, tuk-tuks and anywhere rural run on cash, which here means US dollar notes with riel for the change. Keep a stack of small bills."
  },
  trio: [
    { sym: "card", kind: "warn", h: "Your card", verd: "Fine in the cities", p: "Visa and Mastercard work at hotels, tour operators and nicer restaurants in Phnom Penh and Siem Reap, and many places take Apple Pay, Google Pay or a KHQR scan through the free Bakong Tourist app. Markets, tuk-tuks, street food and rural areas are cash only. Because charges are processed abroad, your US bank may add a <b>foreign transaction fee</b> even though the bill is in dollars, so a no-fee card still helps.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Yes, in US dollars", p: "Dollars are the everyday currency, so you rarely need to buy local money. Carry <b>clean, newer bills</b> in small denominations (ones, fives, tens and twenties), since torn or old notes are often refused and big notes are hard to break. Your change under a dollar comes back in <b>riel</b>.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "They give dollars, for a flat fee", p: "Bank ATMs (ABA, ACLEDA) dispense <b>US dollars</b>, and many now give only 100 dollar bills, which are a pain at a market. Expect a flat <b>4 to 6 dollar</b> fee per withdrawal on top of your bank's, with a limit around 500 dollars. Pull a larger amount at once, and if you want smaller notes try an ACLEDA machine.", cta: { label: "See fee-saving cards", href: "#" } }
  ],
  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Get a <b>no-foreign-fee debit card</b> for ATM cash. Charles Schwab refunds ATM fees worldwide, which softens Cambodia's flat fee; Wise and Revolut are low-fee.",
      "Ask your bank for <b>clean, newer dollar bills</b> in small denominations, and pack a no-fee Visa or Mastercard plus a backup card.",
      "Sort your <b>e-visa</b> at the official site or plan to get one on arrival, and file the free <b>e-Arrival Card</b> within 7 days of your flight.",
      "<b>Tell your bank</b> you are traveling so a first-day charge does not get blocked."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters; you are spending dollars anyway, so there is little to change.",
      "If you need cash, pull dollars from a <b>bank ATM</b> and <b>decline any offer to convert or lock a rate</b>.",
      "Grab a few small bills for a tuk-tuk or taxi, and use a ride app or the official taxi desk."
    ], cta: { label: "Find fee-saving cards", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Dollars</b> for almost everything, with <b>riel</b> for change under a dollar.",
      "<b>Card or a KHQR scan</b> at hotels, malls and nicer restaurants in the cities.",
      "Keep <b>small, clean notes</b> for markets, tuk-tuks and street food, and check any bills you are handed.",
      "Turn down any <b>torn or heavily worn</b> dollar note as change; it may not be accepted later."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "Here the usual advice flips: <b>US dollars are the local currency</b>, so pay and withdraw in dollars.",
      "The trap to refuse is still <b>dynamic currency conversion</b>, any screen offering to lock in its own rate. Say no."
    ], cta: null }
  ],
  cash: {
    rate: 1, cur: "USD", round: 5, defaultIndex: 1,
    rateNote: "No conversion to do here: you spend US dollars, and ATMs dispense them. Cambodia stays inexpensive day to day, especially for street food, markets and local transport.",
    styles: [ { n: "Budget", per: 25, cash: 0.75, room: 30 }, { n: "Mid-range", per: 50, cash: 0.6, room: 70 }, { n: "Comfort", per: 95, cash: 0.45, room: 160 } ]
  },
  connectivity: {
    works: "Yes across Phnom Penh, Siem Reap, Sihanoukville and the main towns and roads, with solid 4G and growing 5G. Signal thins on the islands, in the northeast and in remote countryside."
  },
  tax: {
    none: true,
    currency: "USD",
    note: "Cambodia has no separate nightly tourist tax to pay at checkout. A 10% VAT and a small 2% accommodation tax apply to hotel rooms and are usually built into the price, though some hotels and restaurants show them, with a service charge, as extras on top. There is no visitor VAT refund, so the tax is simply part of what you pay."
  },
  currencyHeading: "The US dollar, and where the riel fits.",
  facts: [
    { sym: "usd", k: "Dollars are the everyday money", v: "Cambodia runs on the US dollar. Prices are quoted in dollars, hotels, tours and most shops are paid in dollars, and there is nothing to convert. You do not need to buy local currency before you travel." },
    { sym: "smallnotes", k: "Riel is only for change", v: "The Cambodian riel (KHR) turns up as your change under a dollar, at a fixed 4,000 riel to the dollar that everyone uses, so a 1,000 riel note is about 25 cents. Spend any riel before you fly home, since it is hard to use elsewhere." },
    { sym: "atm", k: "ATMs pay out US dollars", v: "Bank machines dispense US dollars, often only in 100 dollar bills, with a flat fee of about 4 to 6 dollars a withdrawal and a limit near 500 dollars. Pull a larger amount at once, and try an ACLEDA machine if you want smaller notes." },
    { sym: "tip", k: "Tipping, in dollars", v: "Tipping is not required but is common and appreciated, given the low local wages. A dollar or two for a tuk-tuk, a few dollars a day for housekeeping, and rounding up at a meal all go a long way. See the tipping section below." }
  ],
  taxfree: {
    label: "Taxes and refunds",
    heading: "What is on your bill, and why there is nothing to reclaim.",
    text: "Two things worth knowing. Cambodia charges a <b>10% VAT</b> on most goods and services and a small <b>2% accommodation tax</b> on hotel rooms, and at nicer hotels and restaurants you may see these added on top of a net price, sometimes with a <b>service charge</b> of around 10%, so a room can end up a bit above the headline rate. Ask whether a quoted price is <b>all in</b> if it matters to your budget. Second, there is <b>no tourist VAT refund</b> in Cambodia, so unlike some countries there is nothing to claim back at the airport; the tax is simply part of the price."
  },
  keyFacts: [
    { label: "Cambodia tourist visa (30 days, US citizens)", value: "About $36 on the official e-visa site (a $30 visa plus a $6 processing fee), or $30 as a visa on arrival at the airport, with clean US dollars and a passport photo. A free e-Arrival Card is also required within 7 days of arrival.", status: "enacted", effective: null, source: "https://www.evisa.gov.kh", checked: "2026-07-16" }
  ],
  traps: [
    "<b>Torn or old dollar bills get refused.</b> Cambodia is strict about US note condition, so hand back anything ripped, taped or heavily worn, and check the bills you are given as change. A 2025 rule eased this for lightly marked notes, but badly worn ones are still turned away.",
    "<b>ATMs love to give hundreds.</b> Many machines dispense only 100 dollar bills, which markets and tuk-tuks struggle to break. Arrive with a mix of tens and twenties, and try an ACLEDA machine if you need smaller notes.",
    "<b>The change math slightly favors the shop.</b> Change under a dollar comes in riel at 4,000 to the dollar, a touch below the roughly 4,100 market rate, so you lose a cent or two here and there. It is not worth stressing over.",
    "<b>Pay in dollars, but still refuse the convert offer.</b> Dollars are the local currency here, so you pay in them. If a card terminal or ATM offers to lock in its own rate (dynamic currency conversion), decline it anyway.",
    "<b>Your US card may add a foreign fee.</b> Even though the bill is in dollars, some US banks add a 1 to 3% foreign transaction fee on a charge made abroad. A no-foreign-fee card avoids it."
  ],
  tippingHeading: "Tip a little, in dollars.",
  tipping: "Tipping is not a strict custom in Cambodia, but wages are low and a little goes a long way, so it is genuinely appreciated. At local eateries just round up; at a sit-down restaurant, <b>5 to 10%</b> is generous when no service charge is on the bill, so check first. A <b>dollar or two</b> for a tuk-tuk driver, <b>a few dollars a day</b> for housekeeping, and a similar amount for a helpful guide are all normal. Tip in <b>US dollars</b>, and hand it over directly rather than leaving it on a table.",
  faqs: [
    { q: "Do I need to bring US dollars to Cambodia?", a: "Yes. The US dollar is the everyday currency, so bring clean, newer dollar bills in small denominations. You do not need to buy Cambodian riel before you travel; it will come to you as change under a dollar." },
    { q: "Why did I get riel as change?", a: "Because riel is Cambodia's stand-in for coins, for amounts under a dollar. If something costs $3.50 and you pay $5, you may get $1 back plus 2,000 riel, both counted at the standard 4,000 riel to the dollar. Keep the riel for small buys and spend it before you leave." },
    { q: "Will my dollar bills really be refused if they are old?", a: "They can be. Cambodia is strict about the condition of US notes, and torn, taped or heavily worn bills are often turned away, even at banks. A 2025 directive eased this for lightly marked notes, but bring clean ones and inspect your change." },
    { q: "How much are ATM fees in Cambodia?", a: "Most bank ATMs charge a flat fee of about 4 to 6 dollars per withdrawal, on top of anything your own bank adds, with a limit around 500 dollars. They dispense US dollars, often only in 100 dollar bills, so withdraw a larger amount at once and try an ACLEDA machine for smaller notes." },
    { q: "Should I pay in dollars or riel in Cambodia?", a: "Pay in US dollars; that is the working currency, and prices are set in dollars. The only thing to decline is a card terminal or ATM offering to convert to your home currency at its own rate, which is worse than paying in dollars directly." },
    { q: "Can I use cards in Cambodia?", a: "In Phnom Penh and Siem Reap, yes, at hotels, tour operators and nicer restaurants, and many places take Apple Pay, Google Pay or a KHQR scan through the free Bakong Tourist app. Markets, tuk-tuks, street food and rural areas are cash only." },
    { q: "Do US citizens need a visa for Cambodia?", a: "Yes. You can get an e-visa in advance at the official site for about 36 dollars, or a visa on arrival at the airport for 30 dollars, both for a 30-day stay. Every air arrival also files a free e-Arrival Card within 7 days of the flight, which is separate from the visa." },
    { q: "Can I travel overland between Thailand and Cambodia right now?", a: "Not reliably. The land border crossings have been largely suspended since 2025 after a territorial dispute, so the once-popular overland route from Bangkok to Siem Reap or Phnom Penh is not a dependable option and most travelers fly in. Flights and travel within Cambodia are not affected. Because this can change, check the US State Department travel advisory before you book." },
    { q: "How much cash should I bring for a week in Cambodia?", a: "For two mid-range travelers, very roughly 300 to 450 US dollars in day-to-day cash across a week beyond your hotel, pulled in a couple of ATM visits or brought as clean small bills. Adjust for your style and how much you put on a card." }
  ],
  culture: {
    heading: "A few words of Khmer open doors",
    intro: "Khmer is written in its own flowing script, among the longest alphabets in the world, and no one expects you to read it, but a warm Suostei with a little smile and a story or two mark you as a guest rather than a tourist. Cambodians are gentle and welcoming, and a small effort is met with real warmth.",
    phrases: [
      { mean: "Hello", say: "soo-SDEY", word: "Suostei", native: "សួស្តី" },
      { mean: "Thank you", say: "aw-KOON", word: "Aw kun", native: "អរគុណ" },
      { mean: "Please, may I", say: "sohm", word: "Sohm", native: "សូម" },
      { mean: "Sorry, excuse me", say: "sohm-TOH", word: "Sohm toh", native: "សុំទោស" },
      { mean: "Delicious", say: "ch-NGANH", word: "Chnganh", native: "ឆ្ងាញ់" },
      { mean: "Good, fine", say: "la-OR", word: "La'or", native: "ល្អ" }
    ],
    tip: "Cambodians greet each other with the <b>sampeah</b>, palms pressed together at the chest with a small bow, much like the Thai wai; returning it is polite and appreciated. As in much of the region, the <b>head is sacred</b> and the <b>feet are lowest</b>, so avoid touching people on the head and never point your feet at a person or a Buddha image. Dress modestly at temples, covering shoulders and knees, and always speak of the monarchy and the Buddha with respect.",
    stories: [
      { img: "/cambodia-culture-1.jpg",
        alt: "WPA-style illustration of saffron-robed monks and pilgrims walking along the causeway toward the five lotus towers of Angkor Wat at dawn, the temple mirrored in a still reflecting pool",
        h: "The heart of a civilization",
        p: "Angkor Wat is the largest religious monument on earth, built in the twelfth century as the crown of the mighty Khmer Empire and still the soul of the nation, its five towers stamped on the flag. At dawn the towers glow above the reflecting pools while monks and pilgrims move quietly through the stone. To stand there at sunrise is to feel Cambodia's deep pride in what its ancestors built.",
        note: "Good to know: Angkor Wat's towers appear on the national flag" },
      { img: "/cambodia-culture-2.jpg",
        alt: "WPA-style illustration of two classical Cambodian Apsara dancers in golden headdresses and patterned silk, captured mid-pose with gracefully curved fingers before a temple backdrop",
        h: "The dance of the heavenly maidens",
        p: "Cambodia's classical Apsara dance, all slow grace and impossibly curved fingers, was nearly lost under the Khmer Rouge and lovingly revived, and it is now honored by UNESCO. The dancers, in golden headdresses and silk, bring to life the celestial maidens carved in their thousands into the walls of Angkor. It is Khmer beauty and resilience in a single art form.",
        note: "Good to know: the Apsara are the celestial dancers carved at Angkor" },
      { img: "/cambodia-culture-3.jpg",
        alt: "WPA-style illustration of a long ornate dragon-prow racing boat crowded with paddlers surging across a river during the Water Festival, with crowds cheering on the bank",
        h: "When the river runs backward",
        p: "Each November, Bon Om Touk, the Water Festival, marks the rare moment when the Tonle Sap river reverses its flow, and Cambodia celebrates with days of long-boat races, music and light on the water in Phnom Penh. Teams of paddlers drive ornate dragon boats past roaring crowds. It is the country's biggest and most joyful gathering.",
        note: "Good to know: the festival celebrates the Tonle Sap reversing its flow" }
    ],
    pride: "Cambodians carry themselves with warmth and a quiet strength, proud of Angkor and of a culture that endured its darkest years and came back. Greet people with a sampeah, show respect at the temples, and the welcome you get in return is genuine and generous."
  },

  spokes: [
    {
      slug: "cash-or-card",
      glance: [
        { k: "Everyday money", v: "US dollars" },
        { k: "Change", v: "Riel, at 4,000 to the dollar" },
        { k: "Cards", v: "Hotels and nicer city spots" },
        { k: "Bring", v: "Clean, newer small bills" }
      ],
      live: true,
      topic: "cash",
      caution: "low",
      title: "Do I need cash in Cambodia? Yes, US dollars 2026",
      description: "Cambodia prices in US dollars and hands back riel as change, with cards mainly in the cities. Bring clean, newer small bills. Checked 2026.",
      h1: "Do I need cash in Cambodia, or can I use cards?",
      lede: "Cash, mostly, and here is the unusual part: the everyday cash is the US dollar. That makes Cambodia one of the simplest countries anywhere for an American to handle, with one condition about the state of your banknotes.",
      checked: "Jul 2026",
      checkedISO: "2026-07-30",
      answer: "Cash for most things, and the cash is <b>US dollars</b>. Prices are quoted in dollars, ATMs hand out dollars, and the <b>riel</b> appears only as your <b>change under a dollar</b>, counted at a steady 4,000 to the dollar. Bring <b>clean, newer bills in small denominations</b>, because torn or heavily worn notes get refused. <b>Cards</b> work at hotels, tour operators and nicer restaurants in Phnom Penh and Siem Reap, and a growing number of places take a <b>KHQR scan</b>, but markets, tuk-tuks and street food are cash. You barely need to convert anything, so the only screen to refuse is one offering to lock in its own rate.",
      sections: [
        {
          h: "You spend dollars, and get riel as change",
          icon: "usd",
          key: { fig: "4,000 riel", tag: "Riel is the small change", text: "Anything under a dollar comes back in riel at a steady 4,000 to the dollar, so 2,000 riel is about 50 cents. Spend it down before you fly home, since it is hard to use elsewhere.", tone: "teal" },
          p: [
            "Cambodia runs on the <b>US dollar</b>. Hotels, tours, restaurants and most shops price in dollars, and there is nothing for you to convert before you travel. The <b>Cambodian riel</b> does the job that coins do elsewhere: if something costs 3 dollars 50 and you pay with a 5, expect a dollar back plus riel for the rest, counted at <b>4,000 riel to the dollar</b>.",
            "That 4,000 convention sits a touch below the market rate the National Bank of Cambodia publishes, so you lose a cent or two here and there. It is not worth a second thought. What is worth doing is <b>spending your riel down before you leave</b>, since it is a currency you cannot easily use or exchange outside the country."
          ]
        },
        {
          h: "Bring clean, newer bills, and keep them small",
          icon: "cash",
          key: { fig: "Clean notes", tag: "Worn bills get refused", text: "Cambodia is strict about the condition of US notes. Torn, taped or heavily worn bills are often turned away, even at banks, so check what you are handed as change.", tone: "amber" },
          p: [
            "This is the one rule that catches people out: <b>the condition of your dollar bills matters</b>. Torn, taped or badly worn notes are frequently refused by shops and sometimes by banks, and a 2025 directive eased this for lightly marked notes without changing the rule for badly damaged ones. Ask your bank for <b>clean, newer bills</b>, and <b>inspect the change you are given</b>, because a note you accept today is a note you have to spend tomorrow.",
            "Keep them <b>small</b>: ones, fives, tens and twenties. A market stall or a tuk-tuk driver cannot break a fifty, and ATMs here are fond of handing out hundreds, which is exactly the note you least want. Small bills also make the easiest tips."
          ]
        },
        {
          h: "ATMs, cards and paying by QR",
          icon: "atm",
          key: { fig: "4 to 6 dollars", tag: "Flat fee per withdrawal", text: "Bank ATMs dispense dollars for a flat fee of roughly 4 to 6 dollars, with a limit near 500. Take a larger amount at once, and try an ACLEDA machine if you want smaller notes.", tone: "teal" },
          p: [
            "Bank ATMs from the likes of <b>ABA and ACLEDA</b> dispense <b>US dollars</b>, typically for a flat fee of about <b>4 to 6 dollars</b> per withdrawal on top of anything your own bank adds, with a limit around 500 dollars. Because the fee is flat, <b>one larger withdrawal beats several small ones</b>, and a card that refunds ATM fees removes the cost entirely. If you want notes smaller than a hundred, an ACLEDA machine is the one to try.",
            "<b>Cards</b> are fine at hotels, tour operators, malls and nicer restaurants in <b>Phnom Penh and Siem Reap</b>, and many places now take Apple Pay, Google Pay or a <b>KHQR scan</b> through the free Bakong Tourist app. Two small things to know: because the transaction is processed abroad, your US bank may add a <b>foreign transaction fee even though the bill is in dollars</b>, and if any terminal or ATM offers to lock in its own rate, decline it. This guide is written for US travelers departing the US. For more, see <a href='/cambodia/tipping'>tipping in Cambodia</a>, <a href='/cambodia/taxis-and-ride-hailing'>taxis and ride-hailing in Cambodia</a>, and the <a href='/cambodia'>Cambodia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Cambodia?", a: "Yes, and it is US dollars. Markets, street food, tuk-tuks and anywhere rural are cash. Cards cover hotels, tours and nicer restaurants in Phnom Penh and Siem Reap, but you will want a stack of clean, small dollar bills for daily life." },
        { q: "Should I buy Cambodian riel before I travel?", a: "No. Prices are in dollars and ATMs dispense dollars, so riel will simply come to you as change under a dollar at 4,000 to the dollar. Spend it down before you leave, since it is hard to use or exchange abroad." },
        { q: "Will my old dollar bills be refused in Cambodia?", a: "They can be. Cambodia is strict about the condition of US notes, and torn, taped or heavily worn bills are often turned away. Bring clean, newer bills in small denominations and check the notes you are handed as change." },
        { q: "How much do ATMs charge in Cambodia?", a: "Usually a flat fee of about 4 to 6 dollars per withdrawal on top of your own bank's charge, with a limit around 500 dollars, and they dispense US dollars, often only in hundreds. Because the fee is flat, take a larger amount at once, and try an ACLEDA machine for smaller notes." }
      ],
      sources: {
        links: [
          { label: "National Bank of Cambodia: the official daily riel exchange rate, published each working day", url: "https://www.nbc.gov.kh/english/", type: "bank" },
          { label: "US State Department: Cambodia country information for US travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Cambodia.html", type: "gov" }
        ],
        judgment: "The dual-currency system and the 4,000 riel convention are long established and easy to verify. The ATM fee range, the withdrawal limits and how strictly worn notes are refused are our own read from recent traveler and bank reports rather than one official table. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Not required, genuinely welcome" },
        { k: "Restaurants", v: "Round up, or 5 to 10 percent" },
        { k: "Service charge", v: "Check the bill first" },
        { k: "How", v: "Small dollar bills, handed over" }
      ],
      live: true,
      topic: "tipping",
      caution: "low",
      title: "Tipping in Cambodia: how much and when 2026",
      description: "Tipping is optional but appreciated in Cambodia. What to leave at restaurants, and what tuk-tuk drivers, guides and hotel staff usually get. Checked 2026.",
      h1: "Tipping in Cambodia",
      lede: "Nothing here is obligatory, and a small tip goes a long way. Because you are already spending US dollars, tipping is simpler than almost anywhere: a dollar or two, handed over, in the currency you are carrying.",
      checked: "Jul 2026",
      checkedISO: "2026-07-30",
      answer: "Tipping is <b>not required</b> in Cambodia, and it is <b>genuinely appreciated</b>, because local wages are low. At a local eatery, <b>rounding up</b> is plenty; at a sit-down restaurant, <b>5 to 10 percent</b> is generous when no service charge is on the bill, so <b>check the bill first</b>. A <b>dollar or two</b> suits a tuk-tuk driver, <b>a few dollars a day</b> works for housekeeping, and a guide who looked after you well is worth more. Tip in <b>US dollars</b>, in clean small bills, and <b>hand it to the person</b> rather than leaving it on a table.",
      sections: [
        {
          h: "Not required, and it matters more than the amount suggests",
          icon: "coins",
          key: { fig: "Round up", tag: "Optional, not expected", text: "No one will chase you for a tip, and small amounts are meaningful against local wages. Rounding up at a local eatery is fine, and 5 to 10 percent is generous at a sit-down restaurant.", tone: "teal" },
          p: [
            "Cambodia has <b>no strict tipping custom</b>, and nothing bad happens if you leave nothing. It is also a place where a small amount is worth real money to the person receiving it, which is why tipping has become normal on the tourist trail. At a <b>street stall or local eatery</b>, rounding up or leaving your riel change is plenty.",
            "At a <b>sit-down restaurant</b>, <b>5 to 10 percent</b> is a generous tip where nothing has been added for you. Some hotels and nicer restaurants add a <b>service charge</b> of around 10 percent, and a 10 percent VAT may be shown separately, so <b>read the bill</b> before deciding what to add."
          ]
        },
        {
          h: "Drivers, guides and hotel staff",
          icon: "tip",
          key: { fig: "A dollar or two", tag: "For a tuk-tuk ride", text: "A dollar or two suits a tuk-tuk driver, a few dollars a day covers housekeeping, and a guide or driver who made your day is worth more than either.", tone: "teal" },
          p: [
            "For a <b>tuk-tuk driver</b>, a <b>dollar or two</b> on top of the fare is a normal thank you, and a driver who waits for you at temples all day deserves considerably more. For <b>housekeeping</b>, <b>a few dollars a day</b> left at the end of your stay is well received, and for a <b>guide</b> at Angkor or on a day tour, more again, scaled to how long you had them.",
            "<b>Spa and massage staff</b> are usually tipped a few dollars, and porters a dollar a bag. None of it is a rule, and all of it is noticed."
          ]
        },
        {
          h: "How to give it",
          icon: "usd",
          key: { fig: "Clean bills", tag: "Dollars, handed over", text: "Tip in US dollars in clean, newer small notes, and hand it directly to the person. Worn or torn notes cause the same problem as a tip as they do in a shop.", tone: "amber" },
          p: [
            "Tip in <b>US dollars</b>, since that is the working currency, and keep the notes <b>clean and small</b>. A torn or heavily worn bill is as awkward for the person you hand it to as it would be at a market stall, so it is not much of a gift. Riel is fine for rounding up a small bill.",
            "<b>Hand the tip over directly</b> rather than leaving it on the table, which is both the local habit and the surest way for it to reach the person who earned it. This guide is written for US travelers departing the US. For the wider picture, see <a href='/cambodia/cash-or-card'>cash or card in Cambodia</a>, <a href='/cambodia/taxis-and-ride-hailing'>taxis and ride-hailing in Cambodia</a>, and the <a href='/cambodia'>Cambodia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Cambodia?", a: "It is not required and it is genuinely appreciated. Rounding up at a local eatery is fine, 5 to 10 percent is generous at a sit-down restaurant where no service charge has been added, and a dollar or two suits a tuk-tuk driver." },
        { q: "Should I tip in dollars or riel in Cambodia?", a: "US dollars, in clean, newer small bills, because that is the everyday currency. Riel works for rounding up a small bill. Hand the tip over directly rather than leaving it on the table." },
        { q: "How much should I tip a tuk-tuk driver?", a: "A dollar or two on top of the fare for a short ride. A driver who waits for you around the Angkor temples for a full day is doing a different job and should get considerably more." },
        { q: "Do restaurants in Cambodia add a service charge?", a: "Some hotels and nicer restaurants add around 10 percent, and a 10 percent VAT may appear separately on the bill. Check before you add anything, since where a service charge is already there you have done your part." }
      ],
      sources: {
        links: [
          { label: "US State Department: Cambodia country information for US travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Cambodia.html", type: "gov" },
          { label: "National Bank of Cambodia: the official riel exchange rate, for how dollar and riel change is counted", url: "https://www.nbc.gov.kh/english/", type: "bank" }
        ],
        judgment: "Tipping norms are social rather than official, so the amounts here are the True Trip Costs desk's read from recent traveler reports and local practice, not a published schedule. The one hard rule is the same as for any cash in Cambodia: clean, newer notes. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-ride-hailing",
      glance: [
        { k: "Apps", v: "PassApp and Grab" },
        { k: "Rides", v: "Tuk-tuk, rickshaw, car or moto" },
        { k: "Fares", v: "App price or meter, not haggling" },
        { k: "Paying", v: "Cash in dollars, or card in app" }
      ],
      live: true,
      topic: "taxis",
      caution: "low",
      title: "Taxis and tuk-tuks in Cambodia: PassApp and Grab",
      description: "PassApp and Grab set the price, which beats haggling on the street. What a tuk-tuk ride should cost to settle, and how to pay. Checked 2026.",
      h1: "Taxis, tuk-tuks and ride apps in Cambodia",
      lede: "The tuk-tuk is how you get around here, and the apps have taken the negotiation out of it. Install one before you land and the fare stops being something you argue about on a hot street corner.",
      checked: "Jul 2026",
      checkedISO: "2026-07-30",
      answer: "Install <b>PassApp</b>, the Cambodian app, and <b>Grab</b>, the regional one. Both show the <b>fare before you ride</b> and both dispatch tuk-tuks, rickshaws, cars and motos, so you are not haggling on the street. If you take a ride the old-fashioned way, <b>agree the price before you get in</b> or use a metered vehicle: those are the two clean options, and negotiating mid-journey is not one of them. Fares are small and paid in <b>US dollars</b>, so carry <b>small clean bills</b>, though Grab also lets you pay by card in the app. At the airport, use the <b>official taxi desk or the app pickup point</b>.",
      sections: [
        {
          h: "Which app to install",
          icon: "qr",
          key: { fig: "PassApp", tag: "The local one", text: "PassApp was built in Phnom Penh and dispatches metered tuk-tuks, rickshaws and cars. Grab covers the same ground and more often lets you pay by card in the app.", tone: "teal" },
          p: [
            "<b>PassApp</b> is the Cambodian-built app and the one many locals use, dispatching <b>metered tuk-tuks, rickshaws, cars and SUVs</b> with the fare estimated up front and a receipt emailed after. <b>Grab</b> is the regional app most visitors already have, covering cars and motos as well as tuk-tuks, and it more often supports <b>paying by card in the app</b> rather than cash to the driver.",
            "Either removes the part of a Cambodian tuk-tuk ride that visitors dislike most: working out what a fair price is, in a language you do not speak, before you can leave. Coverage is strongest in <b>Phnom Penh and Siem Reap</b>, and you will want mobile data for it, so sort an eSIM or local SIM early. Away from the cities, the app cars thin out and a driver arranged through your guesthouse is the normal route."
          ]
        },
        {
          h: "If you are not using an app, settle it first",
          icon: "taxi",
          key: { fig: "Agree first", tag: "Or use the meter", text: "Fix the price before you get in, or take a metered vehicle. What you want to avoid is starting a journey with the fare still open, which is where the disagreements happen.", tone: "amber" },
          p: [
            "Tuk-tuks waiting outside hotels, temples and markets do not run on meters, so the fare is whatever you agree. <b>Agree it before you get in</b>, for the whole trip, including waiting time if you are asking the driver to hold. A price settled on the pavement is a price; a price left open until you arrive is a negotiation you will lose.",
            "For a <b>full day</b> around the Angkor temples, hiring a tuk-tuk driver for the day is the standard arrangement, and it is worth agreeing the route as well as the price, since the small and grand circuits are different amounts of driving. A good driver you can rebook for a second day is the most useful thing you will find in Siem Reap."
          ]
        },
        {
          h: "Paying, tipping and the airport",
          icon: "usd",
          key: { fig: "Small bills", tag: "Dollars in hand", text: "The hundred-dollar note an ATM just handed you is useless to a tuk-tuk driver. Break it at a hotel or a supermarket before you need a ride, and save the riel for rounding up.", tone: "teal" },
          p: [
            "Fares are low and paid in <b>US dollars</b>, so a hundred-dollar note from an ATM is no help at all: keep <b>ones and fives</b> in your pocket. Riel is handy for rounding. A <b>dollar or two on top</b> is a normal thank you, and a driver who waited around for you all day deserves more.",
            "Arriving at <b>Phnom Penh or Siem Reap</b>, use the <b>official taxi desk</b> in the terminal or the marked <b>app pickup area</b>, rather than the first offer you get walking out. Because ride apps need data, having your eSIM working before you land is what makes this easy. This guide is written for US travelers departing the US. For the wider picture, see <a href='/cambodia/cash-or-card'>cash or card in Cambodia</a>, <a href='/cambodia/tipping'>tipping in Cambodia</a>, and the <a href='/cambodia'>Cambodia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is there Uber in Cambodia?", a: "No. The apps to use are PassApp, which was built in Cambodia and dispatches metered tuk-tuks and cars, and Grab, the regional app. Both show the fare before you ride." },
        { q: "How do I avoid overpaying for a tuk-tuk in Cambodia?", a: "Use PassApp or Grab so the fare is set in the app, or agree the price out loud before you get in. What causes trouble is starting the journey with the fare still undecided." },
        { q: "Can I pay for rides by card in Cambodia?", a: "In Grab, often yes. PassApp leans towards cash to the driver. Either way, keep small US dollar bills on you, since fares are small and a large note is useless to a tuk-tuk driver." },
        { q: "How much should I pay a tuk-tuk driver for a day at Angkor?", a: "Hiring a driver for a full day is the standard arrangement, and the price depends on which temple circuit you want, so agree the route and the fare together before you set out. A generous tip on top is normal for a long, hot day of waiting." }
      ],
      sources: {
        links: [
          { label: "PassApp: the Cambodian ride app's own listing, describing metered tuk-tuk, rickshaw and car bookings", url: "https://play.google.com/store/apps/details?id=kh.com.passapp.passenger", type: "official" },
          { label: "US State Department: Cambodia country information, including road and transportation safety", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Cambodia.html", type: "gov" }
        ],
        judgment: "Which app has the most cars, and what a fair tuk-tuk fare looks like, both move around, so we have avoided quoting prices and stuck to the habits that hold: use an app, or agree the fare before you get in. Checked July 2026."
      }
    },
    {
      slug: "money-scams",
      glance: [
        { k: "Most cost", v: "A few dollars at a time" },
        { k: "Your change", v: "Check the dollar bills" },
        { k: "Angkor tickets", v: "One official seller only" },
        { k: "Visas", v: "Know the fee before you go" }
      ],
      live: true,
      topic: "scams",
      title: "Common money scams in Cambodia, and what they cost",
      description: "Fake dollar bills in your change, Angkor ticket resale, inflated visa fees at land borders and commission-driven tuk-tuk routing. What each costs, and how to sidestep it.",
      h1: "Common money scams in Cambodia, and what they cost you",
      lede: "Cambodia is safe for the great majority of visitors and almost none of this is dramatic. Because the country runs on US dollars, its money traps are unusually simple: a fake note in your change, a fee somebody padded, a ticket sold by the wrong person. They cost a few dollars at a time, and a handful of habits defuse nearly all of them. Here is each one, what it costs, and how to sidestep it.",
      checked: "Aug 2026",
      checkedISO: "2026-08-15",
      answer: "Cambodia's money traps follow from its dollarized cash: <b>fake dollar bills handed back as change</b>, and short-changing in <b>riel</b>. Add three more: <b>Angkor passes</b> bought from anyone other than the official seller, <b>inflated visa fees</b> at land borders, and <b>commission-driven tuk-tuk routing</b>, where a helpful driver steers you to shops and guesthouses that pay him. One avoidable mistake sits under several of them: <b>handing over your passport as a rental deposit</b>. The golden rules that beat most of it: <b>check every note you are handed</b>, <b>buy Angkor passes only from Angkor Enterprise</b>, <b>know the official visa fee before you travel</b>, <b>use an app or agree the fare first</b>, and <b>never leave your passport as security</b>.",
      sections: [
        {
          h: "Your change, and the fake dollar bill",
          icon: "usd",
          key: { fig: "$1-20", tag: "Check every note", text: "The UK FCDO reports travelers being given fake dollar bills as change in shops and clubs. The loss is the face value of the note, so usually a few dollars, occasionally twenty.", tone: "teal" },
          p: [
            "Cambodia prices in <b>US dollars</b> and gives <b>riel</b> as change under a dollar, which makes it one of the easiest countries anywhere for an American to handle, and also creates its most common trap. The UK FCDO records travelers being handed <b>fake dollar bills as change</b> in shops and clubs. The cost is simply the face value of whatever note you were given, so usually a dollar or five, sometimes a twenty, and the annoyance is that you will not discover it until the next place refuses it. Check that notes you receive are genuine, and also that they are not torn or heavily worn, because Cambodia rejects damaged dollars and a battered note in your pocket is money you cannot spend.",
            "The riel side is quieter. Change under a dollar comes back at a steady <b>4,000 riel to the dollar</b>, so 2,000 riel is 50 cents. Know that one number and short-changing has nowhere to hide. Carrying <b>clean, newer small bills</b> is the single best preparation for the whole country, and the mechanics are in the <a href=\"/cambodia/cash-or-card\">Cambodia cash and cards guide</a>."
          ]
        },
        {
          h: "Angkor tickets: one official seller",
          icon: "ticket",
          key: { fig: "$37/$62/$72", tag: "Official seller only", text: "Angkor passes cost 37 dollars for one day, 62 for three and 72 for seven, and Angkor Enterprise is the only official seller. A discount pass from a driver is a markup or a dud.", tone: "amber" },
          p: [
            "The Angkor pass has one price and one seller. In 2026 it is <b>37 dollars for one day, 62 for three days and 72 for seven</b>, sold only by <b>Angkor Enterprise</b>, either online at its official government site or at the ticket centre on Road 60 and its self-service kiosks. The price is identical wherever you buy it, so there is no such thing as a discount pass. Anything offered by a driver or a shop is therefore either a markup on the same ticket or a counterfeit that will not scan at the gate, which means paying twice. Children under 12 enter free with a passport as proof. A licensed tour that includes the pass in its price is fine; a stranger selling you the pass itself is not.",
            "Two smaller Angkor costs are worth planning for. Several nearby sites are <b>not covered</b> by the Angkor pass and need separate tickets, so check before you set off rather than at the gate. And the Cambodian authorities enforce a <b>dress code</b> at Angkor Wat and other religious sites: you can be refused entry in shorts or skirts above the knee, or with bare shoulders. Being turned away on a ticket you have already paid for is a real and entirely avoidable cost."
          ]
        },
        {
          h: "Visas, land borders and padded fees",
          icon: "passport",
          key: { fig: "$30-36", tag: "Know the fee", text: "The official e-visa is about 36 dollars all in and the visa on arrival about 30. The FCDO warns that officials and tour operators at land borders can add unofficial fees or inflate the price.", tone: "teal" },
          p: [
            "The Cambodian tourist visa has a published price, and knowing it is the whole defense. The official <b>e-visa</b> costs about <b>36 dollars</b> all in, a 30 dollar visa plus a 6 dollar processing fee, applied for on the government portal. A <b>visa on arrival</b> at the airport is about <b>30 dollars</b> in clean US cash with a passport photo. Every air arrival also files a separate <b>e-Arrival Card</b>, which is free. Third-party visa sites charge well above the official fee for the same document, so use the government site, and see the <a href=\"/cambodia\">Cambodia cost guide</a> for the current entry requirements.",
            "The FCDO is specific about where this goes wrong: at land crossings, <b>local officials and tour operators can ask for unofficial fees or inflate visa prices</b>, and it advises knowing the correct requirements and fees before you travel. Note that the land borders with Thailand, including the Poipet crossing, remain suspended, so most visitors now fly in and this applies mainly to the Vietnam and Laos crossings. If you are quoted more than the published fee at a border, the published fee is the answer."
          ]
        },
        {
          h: "Tuk-tuks, commissions and your passport",
          icon: "taxi",
          key: { tag: "Agree it first", text: "Travelers consistently report drivers steering them to guesthouses and shops that pay a commission. The service is real, the advice is not neutral. Use an app, or agree the fare and the stops first.", tone: "teal" },
          p: [
            "Cambodia's tuk-tuks are genuinely useful and most drivers are exactly what they appear to be. The pattern travelers report consistently, though it is not something government advisories track, is <b>commission routing</b>: a driver who befriends you at the airport or bus station, then mentions your guesthouse has closed or moved, or knows a better shop, a better tailor, a better tour. The ride is real; the recommendation is paid for. It rarely costs much directly, but it costs you the afternoon and it inflates whatever you buy at the other end. Verify a closure yourself with a phone call, and <b>agree the fare and the stops before you set off</b>, or use <b>PassApp or Grab</b>, where the price is fixed in advance. The <a href=\"/cambodia/taxis-and-ride-hailing\">Cambodia taxis and ride-hailing guide</a> covers how each option works.",
            "One rule from the FCDO is worth pulling out because it turns a small dispute into a large one: <b>do not hand over your passport as a guarantee for returning a motorcycle or scooter</b>. Offer a cash deposit instead. The same advisory notes that police can issue on-the-spot fines for riding without a helmet, and that riding without one may also void your insurance, so a cheap helmet is the cheapest thing you will buy in Cambodia."
          ]
        },
        {
          h: "What this means for your money",
          icon: "cash",
          key: { fig: "Habits", tag: "How to avoid it", text: "Check every note, buy Angkor passes from the official seller, know the visa fee, agree fares and stops first, and never leave your passport as security. That is most of it.", tone: "teal" },
          p: [
            "Almost everything here costs a few dollars at a time and is avoided by the same short list: <b>check every note you are handed</b>, <b>buy the Angkor pass from Angkor Enterprise</b>, <b>know the official visa fee</b>, <b>agree the fare and the stops before you set off</b>, and <b>never leave your passport as security</b>. The ones worth active care, because they can reach real money, are the passport deposit and buying an Angkor pass from anyone other than the official seller.",
            "Handled calmly, none of this should shape your trip, and Cambodia's dollarized cash means there is barely anything to convert in the first place. For getting and spending money well while you are there, see the <a href=\"/cambodia/cash-or-card\">Cambodia cash and cards guide</a> and the <a href=\"/cambodia\">Cambodia cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Cambodia safe for tourists?", a: "For the great majority of visitors, yes, and most trips are trouble free. The issues tourists actually meet are money ones rather than anything dramatic: fake dollar bills in change, padded fees at land borders, and commission-driven recommendations from drivers. Checking your notes, knowing the official prices and agreeing fares in advance avoid nearly all of them." },
        { q: "Are there fake US dollars in Cambodia?", a: "Yes, and the UK FCDO records travelers being given fake dollar bills as change in shops and clubs. Check that notes handed to you are genuine, and check they are not torn or heavily worn either, since Cambodia refuses damaged dollars. The cost is the face value of the note, so usually a few dollars, and the problem only surfaces when the next place declines it." },
        { q: "How much is an Angkor Wat ticket in 2026, and where do I buy it?", a: "Thirty seven dollars for one day, 62 for three days and 72 for seven, and the only official seller is Angkor Enterprise, either on its government website or at the ticket centre on Road 60 and its kiosks in Siem Reap. The price is the same everywhere, so a discounted pass offered by a driver is either a markup or a counterfeit that will not scan. Under 12s enter free with a passport." },
        { q: "How much is a Cambodian visa, and can I be overcharged?", a: "The official e-visa is about 36 dollars all in, a 30 dollar visa plus a 6 dollar processing fee, on the government portal. A visa on arrival at the airport is about 30 dollars in clean US cash. The FCDO warns that at land borders, officials and tour operators can ask for unofficial fees or inflate the price, so know the published fee before you travel. The e-Arrival Card is separate and free." },
        { q: "Should I leave my passport as a deposit for a scooter in Cambodia?", a: "No. The UK FCDO says plainly not to hand over your passport as a guarantee for returning a motorcycle or scooter. A shop holding your passport controls whatever repair or late figure it decides to name, and replacing the document abroad is slow. Offer a cash deposit instead, and wear a helmet, since police issue on-the-spot fines and riding without one can void your insurance." },
        { q: "Do tuk-tuk drivers in Cambodia take you to shops for commission?", a: "It is a pattern travelers report consistently, though government advisories do not track it. A driver may say your guesthouse has closed or moved, or steer you toward a particular shop, tailor or tour that pays him. The ride itself is real. Verify any closure yourself, agree the fare and the stops before you set off, or use PassApp or Grab so the price is fixed in advance." }
      ],
      sources: {
        links: [
          { label: "UK FCDO: Cambodia travel advice, safety and security, including scams, land borders and vehicle hire", url: "https://www.gov.uk/foreign-travel-advice/cambodia/safety-and-security", type: "gov" },
          { label: "Angkor Enterprise: the official government ticketing site for the Angkor Archaeological Park", url: "https://www.angkorenterprise.gov.kh/", type: "gov" },
          { label: "Cambodia e-Visa: official government portal for the tourist visa and its fee", url: "https://www.evisa.gov.kh", type: "gov" }
        ],
        judgment: "The fake dollar bills, the inflated visa prices at land borders, the passport deposit warning and the Angkor dress code all come from current UK FCDO advice for Cambodia. Angkor pass prices are the official Angkor Enterprise figures for 2026 and the visa fees are the official portal figures, both of which can change. The tuk-tuk commission pattern is not in any government advisory; it is a consistent traveler report and we have marked it as such rather than dressing it up as an official warning, and we have not attached a figure to it because there is no honest one. The riel converts at a steady 4,000 to the dollar. Checked August 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Good in the cities and Siem Reap" },
        { k: "Carrier roaming", v: "$10 to $12 a day" },
        { k: "Cheapest", v: "A local SIM, a few dollars" },
        { k: "Signal gaps", v: "Cardamoms, islands, rural east" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "Cambodia SIM card: data is close to free here",
      description: "A Smart or Cellcard SIM costs a few dollars for tens of gigabytes, one of the cheapest data markets anywhere. Coverage is good in the cities and thins in the Cardamoms.",
      h1: "Staying connected in Cambodia.",
      lede: "Cambodian mobile data is among the cheapest in the world. A few dollars buys more gigabytes than most travelers use in a month, which makes the decision here easy and makes our commission argument weak.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: "Coverage is <b>good in Phnom Penh, Siem Reap, Battambang and Sihanoukville</b> and along the main roads, thinner in the <b>Cardamom mountains</b>, on the southern islands and in the rural northeast. On price, Cambodia is at the cheap end of the world: a <b>local SIM</b> from <b>Smart</b> or <b>Cellcard</b> costs a <b>few dollars</b> for tens of gigabytes, bought at the airport or any phone shop with your <b>passport</b>. Your US carrier charges about <b>10 to 12 dollars a day</b> (<b>AT&amp;T and Verizon</b> day passes, and Cambodia is on AT&amp;T's covered list), though <b>AT&amp;T caps its Day Pass at 10 daily fees per line per bill period</b>, about <b>120 dollars</b>, and covers the rest of that bill period on land, so the daily arithmetic stops past day 10, and <b>T-Mobile</b>'s mid and upper tiers include <b>5GB to 30GB</b> of high-speed data abroad before slowing to <b>256kbps</b>. So one day of roaming costs more than a month of local data. A <b>Nomad eSIM</b> is a few dollars per gigabyte and earns its place if you are crossing several borders or want data from touchdown. Never roam <b>pay-per-use</b>, at about 2 dollars a megabyte.",
      sections: [
        {
          h: "One of the cheapest data markets anywhere",
          icon: "tag",
          key: { fig: "A few $", tag: "For tens of GB", text: "Smart and Cellcard sell tourist SIMs for a few dollars with more data than a trip needs. One day of carrier roaming costs more.", tone: "teal" },
          p: [
            "Cambodia went straight to mobile, skipped fixed-line almost entirely, and the competition drove prices to the floor. A <b>Smart</b> or <b>Cellcard</b> SIM with a tourist data pack costs a <b>few dollars</b> and carries tens of gigabytes over a week or a month, sold at <b>Phnom Penh and Siem Reap airports</b> and in phone shops everywhere. You need your <b>passport</b> to register, which is quick.",
            "The comparison is not close and we would rather say so than dress it up: a single day of a US carrier day pass costs more than the whole local pack, and a travel eSIM costs several times it. <b>Smart</b> generally has the better reach and speed, <b>Cellcard</b> is competitive and sometimes better in the provinces. Either is fine for a temple-and-cities trip."
          ]
        },
        {
          h: "Where the signal goes, and the wifi habit",
          icon: "phoneok",
          key: { fig: "The Cardamoms", tag: "Where signal thins", text: "Cities, Siem Reap and the main roads are well covered. The Cardamom mountains, the southern islands and the rural northeast are not.", tone: "amber" },
          p: [
            "In <b>Phnom Penh, Siem Reap, Battambang</b> and <b>Sihanoukville</b> you will have solid 4G, with 5G appearing in the capital, and the temple complex at <b>Angkor</b> is covered well enough to look things up between temples. Along <b>National Road 6</b> and the other main routes it holds up. Where it drops: the <b>Cardamom mountains</b>, <b>Koh Rong</b> and the smaller southern islands where a guesthouse may run on generator power and satellite wifi, stretches of the <b>rural northeast</b> toward Ratanakiri, and the boat routes.",
            "Cambodia also has generous <b>free wifi</b> in cafes, guesthouses and restaurants across the tourist trail, which is a real backstop for a light user. It is not a plan for a tuk-tuk at night or a Grab pickup, which is the main practical reason to carry data at all."
          ]
        },
        {
          h: "When roaming or an eSIM makes sense anyway",
          icon: "roamfee",
          key: { fig: "$10-12/day", tag: "Roaming default", text: "Cambodia is on AT&T's covered-destination list, so the day pass applies rather than pay-per-use. Check T-Mobile first if that is your carrier.", tone: "teal" },
          p: [
            "Worth confirming because it changes the numbers: <b>Cambodia is on AT&amp;T's covered-destination list</b>, so a day pass applies at about <b>10 to 12 dollars a day</b> rather than the pay-per-use rate you would face in an uncovered country. AT&amp;T also caps its Day Pass at 10 daily fees per line per bill period</b>, about <b>120 dollars</b>, and covers the rest of that bill period on land, so the daily arithmetic stops past day 10. <b>T-Mobile</b>'s current tiers include roughly <b>5GB</b> on Experience More, Magenta MAX and Go5G Plus, <b>15GB</b> on Experience Beyond and Go5G Next and <b>30GB</b> on Better Value.",
            "The genuine case for a <b>Nomad eSIM</b> in Cambodia is a <b>multi-country trip</b>: if you are moving Thailand to Cambodia to Vietnam, one regional plan beats buying a SIM at every border, and the per-gigabyte premium buys you not repeating the errand three times. For a Cambodia-only trip, buy local. This guide is written for US travelers departing the US. For more, see <a href='/cambodia/cash-or-card'>cash or card in Cambodia</a>, <a href='/cambodia/taxis-and-apps'>taxis and apps in Cambodia</a>, and the <a href='/cambodia'>Cambodia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "How much does a SIM card cost in Cambodia?", a: "A few dollars for a Smart or Cellcard tourist pack carrying tens of gigabytes, sold at the airports and in phone shops everywhere. You need your passport to register. Cambodian data is among the cheapest in the world, and one day of US carrier roaming costs more than the whole pack." },
        { q: "Is an eSIM worth it for Cambodia?", a: "For a Cambodia-only trip, not on price: a local SIM is a few dollars for far more data. An eSIM earns its place on a multi-country trip through Thailand, Cambodia and Vietnam, where one regional plan saves buying a SIM at each border, or if you want data working the moment you land." },
        { q: "Which network is best in Cambodia?", a: "Smart generally has the better reach and speed, with Cellcard competitive and sometimes stronger in the provinces. Either covers Phnom Penh, Siem Reap, Battambang and the main roads well. Both thin out in the Cardamom mountains, on the southern islands and in the rural northeast." },
        { q: "How much does it cost to use my US phone in Cambodia?", a: "About 10 to 12 dollars a day on an AT&T or Verizon day pass, and Cambodia is on AT&T's covered-destination list so the day pass applies rather than pay-per-use. AT&T caps its Day Pass at 10 daily fees per line per bill period, so about 120 dollars covers the rest of that bill period on land, while Verizon's TravelPass has no equivalent cap and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include 5GB to 30GB of high-speed data abroad." }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "AT&T: the International Day Pass destination list, which includes Cambodia", url: "https://www.att.com/support/article/wireless/KM1395068/", type: "card" },
          { label: "US State Department: Cambodia country information for US travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Cambodia.html", type: "gov" }
        ],
        judgment: "Checked Aug 2026. Cambodia's inclusion on AT&T's covered-destination list was verified directly against AT&T's own list on this check, because it changes the advice completely: in an uncovered country the honest line is a pay-per-use warning rather than a daily rate. Local pack contents move with promotions and the pricing is low enough that the exact figure rarely changes the decision, so this page says a few dollars rather than inventing precision. We earn on eSIM links and nothing on a Smart or Cellcard SIM."
      }
    }
  ]
};
