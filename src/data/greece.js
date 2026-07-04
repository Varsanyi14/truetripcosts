export default {
  slug: "greece",
  live: true,
  name: "Greece",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Sources added. Verified with AADE, the Greek tax authority, that the climate crisis resilience fee is charged per room per night (not per person), by the accommodation's star rating and season (higher from April to October), with standard VAT at 24%. The guide's figures are current.",
    links: [
      { label: "AADE (Greek tax authority): the climate crisis resilience fee charged per room per night by category and season", url: "https://www.aade.gr/en/climate-crisis-resilience-fee-issuance-statement", type: "revenue" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "112", note: "112 works across the mainland and the islands. Reaching a major hospital from a smaller island can take time.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "medium",
  region: "Europe",
  hook: "Cards work in the cities, but the islands still run on cash and a nightly climate fee.",

  title: "Money in Greece (2026): Cash, Cards, ATMs and the Climate Resilience Fee | True Trip Costs",
  description: "How to handle money in Greece as a US traveler in 2026: cards in Athens and Thessaloniki, why the islands still want cash, fee-free Greek bank ATMs, the per-night Climate Resilience Fee by hotel rating, tipping, and the VAT refund. Checked July 2026.",

  h1: "Money in Greece, sorted.",
  lede: "A calm, current plan for the money side of your trip: what to tap in the cities, how much cash to carry for the islands, and the per-night fee that surprises first-timers at checkout.",
  hero: {
    img: "/greece-hero.jpg",
    h: 1375,
    alt: "A whitewashed Cycladic lane at dusk with string lights overhead, blue-shuttered houses and bougainvillea, a blue-domed church and the Aegean Sea below, a lone figure walking away down the steps, and a plate of grilled skewers with a bowl of olives and a glass of something amber over ice on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "In Athens and Thessaloniki, Greece is now mostly <b>card-friendly</b>: Visa and Mastercard work at most hotels, restaurants and shops, and merchants are legally required to have a terminal. Once you reach smaller islands, village tavernas and beach bars, plan to lean on <b>cash</b>. Bring a <b>no-fee Visa or Mastercard</b> for the cities, pull euros from a <b>Greek bank ATM</b> rather than a standalone machine, and pull enough cash before a ferry to a small island in case its one or two ATMs are empty. At checkout, expect a separate <b>Climate Resilience Fee</b> of a few euros a night, charged per room and not included in your room rate.",

  meter: {
    heading: "Greece splits in two: card-friendly cities, cash-leaning islands.",
    cashPct: 42,
    note: "A rough feel for everyday spending. Athens and Thessaloniki run close to the rest of card-friendly southern Europe. Smaller islands, village tavernas, beach loungers, kiosks and local ferries still lean heavily on cash, and that pulls the country-wide average up."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works well in the cities", p: "Visa and Mastercard are widely accepted in Athens, Thessaloniki and the bigger resort towns, and businesses are legally required to have a working terminal. On smaller islands and at traditional tavernas, a card machine that is conveniently \"broken\" still happens.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Keep more than you think", p: "Beach bars, kiosks (periptera), local ferries, taxis and small island shops still run on cash, and the per-night Climate Resilience Fee is usually settled in cash at checkout. Carry more here than you would in Italy or France.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Free at Greek banks, scarcer on tiny islands", p: "Withdrawals at Greek bank ATMs (Alpha Bank, National Bank of Greece, Eurobank, Piraeus Bank) carry no local withdrawal fee. Independent machines are capped but still cost more. On small islands, pull cash before you arrive, since the one or two local ATMs can run dry in peak season.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> for cities and hotels, plus a backup card from a different bank.",
      "Get a <b>no-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "If you are island-hopping, plan to <b>carry more cash than usual</b> between stops.",
      "<b>Set a travel notice</b> with your bank so a first-day tap or ATM pull does not get blocked."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, the rates are poor.",
      "Pull euros from a <b>Greek bank ATM</b> (Alpha Bank, National Bank of Greece, Eurobank, Piraeus Bank), not a standalone tourist-zone machine, and <b>decline \"convert to USD.\"</b>",
      "If you are heading straight to a smaller island, withdraw a larger amount now rather than hoping for an ATM there."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card</b> for hotels, bigger restaurants and shops in Athens, Thessaloniki and the main resort towns.",
      "<b>Cash</b> for tavernas, kiosks, beach loungers, local ferries and small island shops.",
      "Keep small notes on hand, since the Climate Resilience Fee is usually paid in cash at checkout.",
      "<b>Always choose euros</b>, never dollars, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in euros, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "If a taxi or taverna says the card machine is \"broken,\" have cash ready rather than arguing the point."
    ], cta: null }
  ],

  cash: {
    rate: 0.88, cur: "EUR", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 1.14 dollars to the euro in mid-2026, so roughly 0.88 euros per dollar.",
    styles: [
      { n: "Budget",    per: 45,  cash: 0.5 },
      { n: "Mid-range", per: 90,  cash: 0.4 },
      { n: "Comfort",   per: 160, cash: 0.25 }
    ]
  },

  connectivity: {
    works: "Yes, and coverage is strong on the mainland and the main islands. Greece's three networks, Cosmote, Vodafone Greece and Wind Hellas (now branded Nova), give near-universal 4G and growing 5G across Athens, Thessaloniki and tourist islands like Santorini, Mykonos, Crete and Rhodes. Cosmote has the widest reach on smaller islands and rural mountain areas. Signal can thin out on tiny islands, remote beaches and in the mountainous interior, so download offline maps before heading somewhere isolated, and bring an eSIM rather than relying on hotel wifi alone."
  },

  // TOURIST TAX (high-churn, verified Jul 2026). Greece's Climate Crisis Resilience Fee
  // is charged per room or rental unit per night, not per person, and varies by the
  // accommodation's official star rating and the season. These are the April-to-October
  // peak-season rates, which is when most US travelers visit; November-to-March rates
  // run roughly a quarter of these. No cap on nights, no child exemption, no regional
  // variation, so this uses accommodation category instead of a place picker.
  tax: {
    unit: "flatPerNight",
    currency: "EUR",
    capNights: null,
    note: "Greece's Climate Resilience Fee, charged per room or rental unit per night (not per person), based on the official star rating of your hotel or rental. These are the April to October peak rates that apply for most US trips; November to March rates run about a quarter of these. There is no cap on nights and no exemption for children.",
    regions: [
      { key: "midrange", label: "3-star hotel", rate: 5 },
      { key: "budget", label: "1 or 2-star hotel, or a room/apartment", rate: 2 },
      { key: "rental", label: "Short-term rental (Airbnb-style)", rate: 8, note: "Registered short-term rentals (apartments, houses) are charged per property per night, the same as a hotel room." },
      { key: "upscale", label: "4-star hotel", rate: 10 },
      { key: "luxury", label: "5-star hotel or furnished villa", rate: 15 }
    ]
  },

  currencyHeading: "The euro, in plain terms.",
  facts: [
    { sym: "euro", k: "Quick conversion", v: "About 1.14 dollars to 1 euro in mid-2026, so euro prices run a touch higher than the same number in dollars. A 10 euro meal is roughly $11.40, and 100 euros is about $114." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 5, 10, 20, 50, 100, 200 and 500 euros, though the 200 and 500 are rare and many small shops cannot break them. Coins run from 1 cent to 2 euros and add up fast, useful for kiosks and tips." },
    { sym: "smallnotes", k: "Carry small notes", v: "Keep 5s, 10s and 20s on hand for tavernas, kiosks (periptera), beach loungers, taxis and local ferries between islands, several of which are cash-only." },
    { sym: "qr", k: "Local instant-payment app", v: "IRIS, Greece's bank-to-bank instant payment system, is built for Greek bank accounts, so it is not a tool for a US visitor. Stick to your card or cash." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "The per-night fee on your room, and money back on shopping.",
    text: "Greece's standard VAT is 24%, among the highest in the EU, though it runs lower (17%, 9% or 4%) on a handful of eastern Aegean islands including Leros, Lesvos, Kos, Samos and Chios. Non-EU visitors who spend <b>over 50 euros in one store on one day</b> can claim a VAT refund: ask the shop for a tax-free form, keep the goods unused, and get it stamped by customs at the airport before you leave the EU. After the refund operator's fee, expect back roughly 10 to 14%, not the full 24%. This is separate from the per-night Climate Resilience Fee on your accommodation, which is not a VAT and is not refundable."
  },

  recentChange: {
    date: "Aug 2025",
    text: "<b>Greek bank ATMs dropped their withdrawal fees.</b> Since August 2025, cash withdrawals at ATMs run by Greek banks, Alpha Bank, National Bank of Greece, Eurobank and Piraeus Bank, carry no local commission for any cardholder, tourists included. Independent, non-bank machines are now legally capped at a modest fee per withdrawal, well down from the 2 to 4 euros they used to charge. Your own bank's foreign transaction fee or ATM fee can still apply, so a no-fee card still matters, but the Greek side of the cost has gotten meaningfully cheaper."
  },

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Choosing your home currency at a card terminal or ATM (dynamic currency conversion) quietly adds 3 to 8%. Pick euros every time.",
    "<b>The \"broken\" card machine.</b> Despite a legal requirement to accept cards, some taxis and small tavernas still claim the terminal is down to push a cash payment. It is usually not worth arguing, just have euros ready.",
    "<b>The Climate Resilience Fee is not in your room rate.</b> Booking sites rarely show it. Expect to pay it separately at your hotel, often in cash, based on the property's star rating.",
    "<b>Small-island ATMs run dry in peak season.</b> Islands like Hydra, Folegandros and Koufonisia can have only one or two machines, and they sometimes run out of cash on busy summer weekends. Withdraw on the mainland or a larger island before you take the ferry."
  ],

  tippingHeading: "Tip lightly, and keep it in cash.",
  tipping: "Tipping in Greece is not mandatory but is genuinely appreciated, and it runs lighter than US norms. At a taverna or restaurant, rounding up the bill or leaving 5 to 10% is normal, a little more for a meal you really loved. For taxis, round up to the nearest euro. Hotel porters generally get 1 to 2 euros a bag, and a euro a night left for housekeeping is a kind gesture, not an obligation. Leave tips in cash when you can, since a cash tip goes straight to the person who earned it rather than into a pooled card total.",

  faqs: [
    { q: "Do I need cash in Greece?", a: "More than you might expect, especially outside Athens and Thessaloniki. Cards work well in the cities, but tavernas, kiosks, beach bars, local ferries and small island shops often run on cash, and the Climate Resilience Fee is usually paid in cash at checkout. Carry more euros here than you would in Italy or France." },
    { q: "What is the best ATM to use in Greece?", a: "Use a machine run by a Greek bank, Alpha Bank, National Bank of Greece, Eurobank or Piraeus Bank, which since August 2025 charge no local withdrawal fee. Avoid standalone independent machines in tourist zones, which are capped but still cost more, and always decline the \"convert to USD\" option." },
    { q: "Should I bring US dollars to Greece?", a: "No. Greece runs on euros, and dollars are not accepted for everyday spending. Pull euros from a Greek bank ATM after you land rather than exchanging cash at home or at an airport counter." },
    { q: "Do you tip in Greece?", a: "Lightly, and it is appreciated rather than required. Round up the bill or leave 5 to 10% at a taverna, round up a taxi fare, and a euro or two for porters or housekeeping is a kind gesture. Cash tips are better than a card-terminal prompt." },
    { q: "How much cash should I bring for a week in Greece?", a: "For two mid-range travelers island-hopping, very roughly 350 to 500 euros (about $400 to $570) in day-to-day cash across a week, on top of cards for hotels and bigger restaurants. Carry more if you are visiting smaller islands with limited ATMs, less if you are staying mostly in Athens." }
  ]
};
