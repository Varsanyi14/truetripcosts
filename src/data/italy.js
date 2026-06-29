export default {
  slug: "italy",
  live: true,
  name: "Italy",
  from: "United States",
  checked: "Jun 2026",
  checkedISO: "2026-06-28",
  title: "Money in Italy (2026): Cards, Cash, ATMs, the Coperto, Tipping and Tourist Taxes | True Trip Costs",
  description: "How to handle money in Italy as a US traveler in 2026: cards work almost everywhere, the dollar conversion trap, bank Bancomats vs Euronet ATMs, the coperto cover charge, light tipping, and the tourist taxes in Rome, Florence and Venice plus the Venice access fee. Checked June 2026.",
  h1: "Money in Italy, sorted.",
  lede: "A calm, current plan for the money side of your trip: what you can tap, the little things you still want euros for, and the small rules that trip up first-timers.",
  hero: {
    img: "/italy-hero.jpg",
    h: 1375,
    alt: "A quiet Italian old-town street at dusk with string lights overhead, pastel shuttered buildings, a Vespa parked to one side, a lone figure walking away toward a bell tower, and a plate of pasta with an espresso steaming on a wooden table in the foreground"
  },
  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',
  verdict: "Italy is now very <b>card-friendly</b>. Visa and Mastercard work almost everywhere, contactless is standard, and merchants are legally required to accept cards. Bring a <b>no-fee Visa or Mastercard</b> for nearly everything, keep <b>50 to 100 euros</b> in small notes for the coperto cover charge, espresso bars, markets, tips and the rare cash-only spot, and pull euros from a <b>bank Bancomat</b> rather than the blue Euronet machines. One rule above all: <b>always choose euros, never dollars</b>. Tipping is light here. If your trip includes Rome, Florence or Venice, budget the per-night tourist tax, and day-trippers to Venice on busy 2026 dates need the separate access fee.",
  recentChange: {
    date: "2026",
    text: "Venice runs its day-tripper <b>access fee</b> again in 2026, on 60 set days from <b>3 April to 26 July</b>, between 08:30 and 16:00. It is <b>5 euros</b> per person if you book at least four days ahead at the official site, <b>cda.ve.it</b>, and <b>10 euros</b> if you pay within three days or on the day. Children under 14 are exempt. If you sleep in Venice you do not pay it, since your lodging tax covers it, but you still must register for a free exemption QR code. It applies only to the historic center, not the islands like Murano, Burano and the Lido. Book on the official site, not the markup resellers that show up in search ads."
  },
  meter: {
    heading: "Italy is very card-friendly now, but keep some euros for the little things.",
    cashPct: 30,
    note: "A rough feel for everyday spending. Cards and contactless work almost everywhere, restaurants, shops, supermarkets, museums, trains and even taxis, and merchants legally have to accept them. You still want a little cash for the coperto cover charge, espresso bars, small markets, tips and the occasional cash-only trattoria, so carry some euros and top up at a bank ATM."
  },
  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken nearly everywhere, contactless is the norm, and merchants are legally required to accept cards. Amex is patchier at small spots. The only real catch is the screen that offers to charge you in dollars, which you always decline.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "A little, for the small stuff", p: "You do not need much, but keep 50 to 100 euros in small notes. Espresso bars, the coperto cover charge, neighborhood markets, tips and the odd cash-only trattoria still run on cash, and a 20 is easier to spend than a 50.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy, pick a bank Bancomat", p: "Bank ATMs (called Bancomat) from Intesa Sanpaolo, UniCredit, BNL or BancoPosta are everywhere in towns and cities. Avoid the bright blue standalone Euronet machines at tourist sites, which charge more and push the dollar conversion. Read the on-screen fee, and always decline \"convert to dollars.\"", cta: { label: "See low-fee cards", href: "#" } }
  ],
  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> with contactless for nearly everything, and pack a backup card from a different bank.",
      "Get a <b>no-foreign-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "You will need little cash, so plan to pull a modest amount once you land rather than buying euros at home.",
      "<b>Set a travel notice</b> with your bank so a first-day tap or ATM pull does not get blocked."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters and the airport ATMs, which carry the poorest rates and highest fees.",
      "Pull a modest amount of euros from a <b>bank Bancomat</b> (look for BNL, Intesa or UniCredit, not the blue Euronet box) and <b>decline \"convert to USD.\"</b>",
      "Heading into the city by train? You can usually <b>tap your card</b> at the ticket machine or gate, no cash needed."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card or contactless</b> for almost everything: restaurants, shops, supermarkets, museums, trains and taxis.",
      "<b>A little cash</b> for the coperto, espresso bars, markets, tips and the rare cash-only spot.",
      "<b>Always choose euros</b> on every card terminal and ATM screen.",
      "When you do need a Bancomat, pick one attached to a bank branch, not a standalone tourist-zone machine."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in euros, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "Same at the ATM: if it asks \"with or without conversion,\" choose <b>without conversion</b> (senza conversione), the charge-in-euros option."
    ], cta: null }
  ],
  cash: {
    rate: 0.88, cur: "EUR", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 0.88 euros to the dollar, so a euro costs you a little over a dollar. The rate has softened a touch through 2026, trading near 1.14 dollars per euro in mid-year.",
    styles: [ { n: "Budget", per: 45, cash: 0.45 }, { n: "Mid-range", per: 95, cash: 0.3 }, { n: "Comfort", per: 175, cash: 0.2 } ]
  },
  connectivity: {
    works: "Yes, and coverage is excellent. Italy has near-universal 4G and widespread 5G across the cities, tourist regions and main rail and road routes. Signal can dip in remote mountain valleys and parts of the far south and islands."
  },
  currencyHeading: "The euro, in plain terms.",
  facts: [
    { sym: "euro", k: "Quick conversion", v: "About 1 euro to 1.14 dollars in mid-2026, so euro prices are roughly the same as dollars, just a touch more. A quick gut check: a 10 euro lunch is about 11 and a half dollars, and 100 euros is about 114. The rate has been fairly steady, softening slightly over the year." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 5, 10, 20, 50, 100, 200 and 500 euros, though the 200 and 500 are rare and awkward to spend. Note that 1 and 2 euros are coins, not notes, and add up fast, so keep a small stash of coins and small notes for cafes, the coperto and tips." },
    { sym: "tip", k: "Tipping is light", v: "Italy is not a US-style tipping culture. Servers earn a real salary and do not live on tips, so there is no expected percentage. Rounding up or leaving a few euros for great service is a kind gesture, not an obligation." },
    { sym: "bowl", k: "The coperto", v: "Most sit-down restaurants add a per-person cover charge called the coperto, commonly 2 to 3 euros and more in tourist spots. It is normal and not a scam, it is separate from any tip, and it is banned in Rome's Lazio region, where you may instead be offered (and can decline) a bread charge." }
  ],
  taxfree: {
    label: "Tourist taxes",
    heading: "The city taxes that surprise people at checkout.",
    text: "Italy has no single national tourist tax. Most cities charge their own <b>tassa di soggiorno</b>, a per-person, per-night fee that is almost never in your room rate and is usually collected by the hotel at checkout, often in cash. The rate depends on the city and the star rating, and it is capped after a set number of nights, with young children exempt. In <b>Rome</b>, expect roughly 4 euros a night at a 1-star up to 10 euros at a 5-star, for up to 10 nights, with under-10s exempt. In <b>Florence</b>, it runs about 3.50 to 8 euros per person per night, for up to 7 nights. In <b>Venice</b>, the overnight tax is roughly 1 to 5 euros per person per night depending on category and season, for up to 5 nights, and Venice also has the <b>separate day-tripper access fee</b> covered in the update above. Separately, if you shop, non-EU visitors can reclaim part of Italy's 22% VAT on goods over 70.01 euros bought in one store on one day: ask for a tax-free form with your passport, keep the goods unused, and validate at the airport when you leave. After the operators' fees you get back closer to 11 to 15%."
  },
  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> At a shop terminal or a Bancomat, choosing dollars (dynamic currency conversion) quietly adds 3 to 8%. Pick euros every time. At an Italian bank ATM the prompt reads \"con conversione\" or \"senza conversione,\" so choose senza conversione, without conversion.",
    "<b>Skip the blue Euronet ATMs.</b> The bright blue standalone machines clustered at tourist sites in Rome, Florence, Venice and Milan charge the most and push the dollar conversion hardest. Use a Bancomat attached to a bank branch (Intesa Sanpaolo, UniCredit, BNL, BancoPosta) and read the on-screen fee before you confirm.",
    "<b>The coperto and \"servizio.\"</b> Many restaurants add a per-person coperto cover charge, commonly 2 to 3 euros, and a few tourist spots add a separate service charge. Neither is a scam, but read the bill before you add a tip on top.",
    "<b>The tourist tax is paid at the hotel.</b> The per-night city tax is usually not in your room rate, so expect to settle it at checkout, often in cash. Budget roughly 3 to 10 euros per person per night in Rome, Florence and Venice.",
    "<b>Venice day-trip? Sort the access fee first.</b> On the 60 set 2026 dates you need a paid QR code to enter the historic center, and even exempt overnight guests must register. Book on the official site, cda.ve.it, well ahead to pay 5 euros rather than 10, and ignore the markup resellers in search ads."
  ],
  tippingHeading: "Tip lightly, if at all.",
  tipping: "Italy is not a US-style tipping culture, and this surprises many first-timers. Servers are paid a real salary and do not depend on tips, so there is no expected percentage and nobody will chase you for one. The coperto cover charge on your bill is not a tip, it is a separate seat-and-bread charge. For genuinely great service you can round up or leave a few euros, or up to roughly 5 to 10% at a nicer meal, but it is a kind gesture rather than an obligation. Check the bill first for a \"servizio\" service charge, more common in tourist areas, so you do not pay it twice, and leave any tip in cash. Round up a taxi fare, and a euro or two for a porter or for housekeeping is appreciated. Do not feel pressured to tip 15 to 20% the way you would at home.",
  faqs: [
    { q: "Do I need cash in Italy?", a: "Less than you would think. Cards and contactless work almost everywhere and merchants are legally required to accept them. But carry 50 to 100 euros in small notes for the coperto cover charge, espresso bars, neighborhood markets, tips and the occasional cash-only trattoria, and top up at a bank Bancomat as needed." },
    { q: "Should I pay in euros or dollars in Italy?", a: "Always euros. If a card terminal or ATM offers to charge you in dollars, decline. That dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better. At an Italian bank ATM, the option is worded \"senza conversione,\" without conversion, which is the charge-in-euros choice." },
    { q: "What is the coperto in Italy?", a: "The coperto is a small per-person cover charge most sit-down restaurants add, commonly 2 to 3 euros and more in tourist spots. It is normal and not a scam, and it is separate from any tip. It is actually banned in Rome's Lazio region, where some places instead offer a bread charge you can decline." },
    { q: "How much is the tourist tax in Italy?", a: "It is a per-person, per-night city tax (tassa di soggiorno) set by each city and paid at your accommodation, not included in the room rate. It is roughly 4 to 10 euros a night in Rome (up to 10 nights, under-10s exempt), about 3.50 to 8 euros in Florence (up to 7 nights), and around 1 to 5 euros in Venice. Venice also has a separate day-tripper access fee." },
    { q: "Do I have to pay the Venice access fee?", a: "Only if you visit the historic center as a day-tripper on one of the 60 set 2026 dates, from 3 April to 26 July, between 08:30 and 16:00. It is 5 euros per person booked at least four days ahead at cda.ve.it, or 10 euros last-minute, and under-14s are exempt. Overnight guests do not pay it but must still register for a free exemption QR code. The islands, like Murano, Burano and the Lido, are excluded for 2026." },
    { q: "How much cash should I bring for a week in Italy?", a: "For two mid-range travelers, very roughly 300 to 400 euros (about 350 to 450 dollars) in day-to-day cash across a week, beyond your hotel, pulled in a couple of bank-ATM visits. Cards and contactless cover most of the rest. Adjust for your style and how much you tap versus pay in cash." }
  ]
};
