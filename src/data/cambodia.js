export default {
  slug: "cambodia",
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
  title: "Money in Cambodia (2026): US Dollars, Riel, ATMs, Visa and Tipping | True Trip Costs",
  description: "How to handle money in Cambodia as a US traveler in 2026: why you spend US dollars, how riel change works, ATM fees and the 100 dollar bill problem, the visa, tipping, and the traps to avoid. Checked July 2026.",
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
    styles: [ { n: "Budget", per: 25, cash: 0.75 }, { n: "Mid-range", per: 50, cash: 0.6 }, { n: "Comfort", per: 95, cash: 0.45 } ]
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
  }
};
