import { S } from './carrier-spine.js';

export default {
  slug: "greece",
  iso2: "gr",
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
  rentalCommon: true,
  region: "Europe",
  signals: { cardFriendliness: 3, cashNeed: 3, taxRisk: 3 },
  hook: "Cards work in the cities, but the islands still run on cash and a nightly climate fee.",

  title: "How much cash to bring to Greece: money in 2026",
  description: "Cards work in Athens and the bigger towns, but the islands want euros in hand. Greek bank ATMs are fee-free, and hotels add a climate fee. Checked 2026.",

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
      { n: "Budget", per: 45, cash: 0.5, room: 70 },
      { n: "Mid-range", per: 90, cash: 0.4, room: 140 },
      { n: "Comfort", per: 160, cash: 0.25, room: 290 }
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
  ],

  culture: {
    heading: "A little Greek goes a long way",
    intro: "A few words and a couple of stories that turn you from a tourist into a guest. Locals notice, and it opens doors, in a taverna, a taxi, anywhere.",
    phrases: [
      { mean: "Hello", say: "YAH-soo", word: "Yia sou", native: "Γειά σου" },
      { mean: "Please", say: "pah-rah-kah-LOH", word: "Parakalo", native: "Παρακαλώ" },
      { mean: "Thank you", say: "ef-hah-ree-STOH", word: "Efharisto", native: "Ευχαριστώ" },
      { mean: "Cheers", say: "YAH-mas", word: "Yamas", native: "Γειά μας" },
      { mean: "Delicious", say: "NOH-stee-moh", word: "Nostimo", native: "Νόστιμο" },
      { mean: "Beautiful!", say: "oh-RAY-ah", word: "Oraia", native: "Ωραία" },
    ],
    tip: "with elders or people you have just met, use the polite form <b>Yia sas</b> (YAH-sas).",
    stories: [
      { img: "/greece-culture-1.jpg",
        alt: "WPA-style illustration of King Leonidas and the Spartan phalanx braced behind bronze shields at the narrow pass of Thermopylae, sea on one side and cliffs on the other",
        h: "Molon labe: come and take them",
        p: "In 480 BC, King Leonidas and 300 Spartans held the narrow pass at Thermopylae against a vast Persian army. Ordered to hand over their weapons, Leonidas answered with two words: molon labe, come and take them. Drop it into conversation and you will get a knowing grin.",
        note: "Say it: mo-LOHN lah-VEH" },
      { img: "/greece-culture-2.jpg",
        alt: "WPA-style illustration of a Spartan elder in a crimson cloak calmly handing back a scroll to a Macedonian envoy inside a stark colonnaded hall, helmeted warriors behind",
        h: "The one word reply",
        p: "Philip II of Macedon, father of Alexander, warned Sparta: if I invade, I will raze your city to the ground. The Spartans answered with a single word: if. Their homeland was Laconia, which is exactly where we get laconic, few words and dry wit. Greeks are quietly proud of it.",
        note: "Good to know: the root of the word laconic" },
      { img: "/greece-culture-3.jpg",
        alt: "WPA-style illustration of the ancient messenger Pheidippides running across sunlit Attic hills toward Athens, one arm raised in triumph",
        h: "The first marathon",
        p: "By legend, the runner Pheidippides carried news of the victory at Marathon all the way to Athens, gasped nenikekamen, we have won, and collapsed. That run, about 40 km, is why the race is called the marathon. A perfect thing to mention if you have ever run one.",
        note: "Say it: neh-nee-KAH-men" },
    ],
    pride: "Greece gave the world democracy, philosophy, theatre and the Olympic Games. A little sincere awe for that, mentioned in passing, goes a long way."
  },

  spokes: [
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Euro (EUR)" },
        { k: "Cards", v: "Fine in cities, cash on islands" },
        { k: "Cash for", v: "Tavernas, kiosks, small islands" },
        { k: "On a card", v: "Choose euros, not dollars" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Greece? Euros for the islands",
      description: "Greece is card-friendly in the cities, but carry euro cash for tavernas, kiosks and the smaller islands, where some places take cash only. Choose euros.",
      h1: "Do I need cash in Greece, or can I use cards?",
      lede: "Short answer: cards work in the cities and big resorts, but carry euro cash for tavernas, kiosks and the smaller islands. Here is how to handle it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "A mix. Greece is <b>card-friendly in cities and tourist areas</b> (Athens, Thessaloniki, big resorts), where <b>contactless</b>, Apple Pay and Google Pay work well. But <b>carry euro cash</b> for <b>tavernas, kiosks (periptero), small shops, and especially the smaller islands</b>, where cards are less certain and some places are cash-only. The currency is the <b>euro</b>. Choose <b>euros, not dollars</b> on any card or ATM.",
      sections: [
        {
          h: "Cards in cities, cash on the islands",
          icon: "phoneok",
          key: { fig: "Carry cash", tag: "Islands lean cash", text: "Cards work well in cities and tourist areas, but carry euro cash for tavernas, kiosks and the smaller islands, which lean on cash.", tone: "teal" },
          p: [
            "Greece is <b>card-friendly in cities and larger tourist areas</b>, such as Athens, Thessaloniki and the big resorts, where <b>contactless</b> and mobile pay work well and <b>Visa and Mastercard</b> are accepted.",
            "But <b>carry euro cash</b> for <b>tavernas, kiosks (periptero), bakeries, small shops, and the smaller islands</b>, where some places are <b>cash-only</b> or prefer it. The more remote you go, the more cash matters."
          ]
        },
        {
          h: "Choose euros, not dollars",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose euros", text: "When a terminal or ATM offers dollars or euros, pick euros. Dollars trigger dynamic currency conversion at a rate about 3 to 8% worse than your bank's.", tone: "amber" },
          p: [
            "When a card terminal or ATM asks whether to charge in <b>dollars or euros, always choose euros</b>. Dollars trigger dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. Decline it every time.",
            "For cash, use an ATM attached to a <b>real bank</b> (a Greek bank branch) rather than a standalone <b>Euronet</b> kiosk, which charges high fees and pushes the dollar conversion."
          ]
        },
        {
          h: "How much cash, and the islands",
          icon: "euro",
          key: { fig: "Plan ahead", tag: "ATMs thin on small islands", text: "Take out enough euro cash before heading to a small island, where ATMs can be few, run dry, or charge high fees.", tone: "teal" },
          p: [
            "Plan your cash around the islands. On <b>small islands</b>, ATMs can be <b>few, occasionally out of cash, or high-fee</b>, so take out a sensible amount of euros <b>before you go</b> or in a larger town. Use a <b>debit card</b> to avoid cash-advance fees.",
            "For tipping norms, see <a href='/greece/tipping'>tipping in Greece</a>, and for the wider picture, the <a href='/greece'>Greece money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Greece?", a: "Yes, more than in some of Europe. Cards work well in cities and tourist areas, but carry euro cash for tavernas, kiosks, small shops and especially the smaller islands, where some places are cash-only." },
        { q: "Should I pay in euros or dollars in Greece?", a: "Always euros. If a card machine or ATM offers dollars, decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
        { q: "Do I need cash on the Greek islands?", a: "Yes. On smaller islands, cards are less certain and ATMs can be few, out of cash, or high-fee. Take out enough euros before you go or in a larger town." },
        { q: "Are cards accepted in Greece?", a: "Widely in cities and tourist areas, with contactless and mobile pay common. Smaller islands, tavernas and kiosks lean on cash, so carry some euros. Always choose euros, not dollars, on the terminal." }
      ],
      sources: {
        links: [
          { label: "European Central Bank: the official euro reference exchange rates", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html", type: "gov" },
          { label: "US State Department: Greece country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Greece.html", type: "gov" }
        ],
        judgment: "Greece is card-friendly in cities but cash still matters on smaller islands, where ATMs can be sparse. The euro rate moves, and the firm rule is to decline dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Modest, appreciated" },
        { k: "Restaurants", v: "Round up, or 5 to 10%" },
        { k: "Check the bill", v: "For a service charge" },
        { k: "How", v: "Cash, in euros" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Greece: what you owe at the taverna",
      description: "Greek tipping is modest. How much to leave at tavernas and cafes, and when a service charge is already sitting on the bill. Checked 2026.",
      h1: "Tipping in Greece",
      lede: "Greece has a modest tipping culture. Staff earn a wage, tips are appreciated rather than expected, and there is no US-style percentage. Here is what you actually owe, and when to check the bill first.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Greece has a <b>modest tipping culture</b>. Staff earn a <b>wage</b>, so tips are <b>appreciated but not obligatory</b>, and there is <b>no US-style percentage</b>. At a <b>restaurant or taverna</b>, <b>rounding up</b> or leaving <b>5 to 10%</b> for good service is generous; at a <b>cafe or for drinks</b>, the <b>small change</b> is plenty. Some tourist-area places add a <b>service charge</b>, so check the bill before adding more. Leave tips in <b>cash</b> (euros), which reaches the staff directly.",
      sections: [
        {
          h: "How much to leave, by situation",
          icon: "euro",
          key: { fig: "5-10%", tag: "Tavernas, if you like", text: "Tips are appreciated but not obligatory. For good service at a taverna, round up or leave 5 to 10%. At a cafe, the small change is plenty.", tone: "teal" },
          p: [
            "At a <b>restaurant or taverna</b>, tipping is <b>optional but appreciated</b>: for good service, <b>rounding up</b> or leaving <b>5 to 10%</b> is generous. At a <b>cafe, bar or for drinks</b>, leaving the <b>small change</b> or a coin or two is normal, and often nothing at all.",
            "Elsewhere: <b>round up</b> a taxi fare, leave <b>1 to 2 euros per bag</b> for a hotel porter, and a euro or two a day for housekeeping if you like. For a private guide or boat tour, a larger tip reflects a real service."
          ]
        },
        {
          h: "Check the bill for a service charge",
          icon: "receipt",
          key: { fig: "Check first", tag: "Tourist-area spots", text: "Some tourist-area tavernas add a service charge. If it is on the bill, you do not need to tip on top, so read the bill first.", tone: "teal" },
          p: [
            "Most places do <b>not</b> add a service charge, and the listed price is what you pay. But some <b>tourist-area tavernas and restaurants</b>, especially on the islands and in central Athens, add a <b>service charge</b> to the bill.",
            "If a <b>service charge appears</b>, you <b>do not need to tip on top</b>, so read the bill before you add anything. A small extra for excellent service is still a kind gesture."
          ]
        },
        {
          h: "Leave it in cash",
          icon: "cash",
          key: { fig: "Cash", tag: "In euros", text: "Leave a tip in coins or small notes on the table. Card terminals often have no tip line, and cash reaches the staff directly.", tone: "teal" },
          p: [
            "Leave any tip in <b>cash, in euros</b>, on the table or in the dish. Greek card machines often have <b>no tip prompt</b>, and cash reaches the staff directly. Keep a few <b>euro coins and small notes</b> for tips and cafe change. For the wider picture, see the <a href='/greece'>Greece money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Greece?", a: "Modestly, if you want to. Staff earn a wage, so tips are appreciated but not obligatory. For good taverna service, round up or leave 5 to 10%. At a cafe, the small change is plenty." },
        { q: "Is a service charge added in Greece?", a: "Usually not, but some tourist-area tavernas and restaurants, especially on the islands and in central Athens, add one. If a service charge is on the bill, you do not need to tip on top, so read the bill first." },
        { q: "How much should I tip at a Greek taverna?", a: "Nothing is required. For good service, rounding up or 5 to 10% is generous. At a cafe or bar, the small change or a coin or two is normal, and often nothing at all." },
        { q: "Cash or card for tips in Greece?", a: "Cash. Card terminals often have no tip line, so leave coins or small notes on the table, where they reach the staff directly." }
      ],
      sources: {
        links: [
          { label: "US State Department: Greece country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Greece.html", type: "gov" }
        ],
        judgment: "Greek tipping is cultural and modest, and the tourist-area service charge is real but not universal. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Apps", v: "FreeNow (also Uber, Bolt)" },
        { k: "What they call", v: "Licensed yellow taxis, metered" },
        { k: "Athens airport", v: "Flat 40 euros in the daytime" },
        { k: "Watch for", v: "Meter tricks at ports and islands" }
      ],
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Greece taxi apps, and the Athens airport fare",
      description: "FreeNow leads in Greece, with Uber Taxi and Bolt, and all call licensed yellow cabs. The fixed Athens airport fare, and the meter tricks at the port.",
      h1: "Taxis in Greece, and the Athens airport flat fare",
      lede: "Greek taxis are cheap and useful, but a few meter games target visitors, especially at the port and on the islands. Here is which app to install, the airport fare fixed by law, and how to keep the meter honest.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Install <b>FreeNow</b>, the local favorite, and <b>Uber</b> or <b>Bolt</b> work too. In Greece these apps all call licensed <b>yellow taxis</b> at the regulated meter price, because the cheap UberX private-car model is not legal here. The big protection is the <b>Athens Airport flat fare</b>: a fixed <b>40 euros</b> by day and <b>55 euros</b> at night to the city center, tolls and luggage included, from the official rank at <b>Exit 3</b>. The scam to know is meter refusal, a towel over the meter, or an <b>announced fare</b>, especially at the port and on the islands, so insist the meter is running.",
      sections: [
        {
          h: "Which app to install",
          icon: "phoneok",
          key: { fig: "FreeNow", tag: "Licensed taxis only", text: "FreeNow, formerly Beat, is the app Greeks use most and has the largest fleet. Uber and Bolt work too, but all of them call a licensed yellow taxi at the regulated meter, since cheap UberX is not legal here.", tone: "teal" },
          p: [
            "<b>FreeNow</b>, formerly Beat, is the app most used by Greeks themselves and has the largest fleet, so it is the one to install first. <b>Uber</b> works too, as <b>Uber Taxi</b>, which dispatches the same licensed yellow taxis rather than private cars, and <b>Bolt</b> arrived in 2025 and uses the same fleet with frequent promo codes. The catch to understand is that <b>UberX</b>, the private-car model, is <b>not legal in Greece</b>, so every app here simply calls a regular licensed yellow taxi.",
            "The real advantage of the apps is not a different car but a better ride: you see the fare estimate, the plate and the driver in advance, and you can pay by <b>card</b>, which solves the age-old problem of an older taxi with no working card machine. Coverage is strong in <b>Athens</b> and <b>Thessaloniki</b> and on the bigger islands like <b>Santorini</b>, <b>Mykonos</b>, <b>Corfu</b>, <b>Paros</b> and <b>Crete</b>."
          ]
        },
        {
          h: "The Athens Airport flat fare",
          icon: "plane",
          key: { fig: "40 euros", tag: "Fixed by law", text: "The key protection arriving is a flat fare fixed by law from Athens Airport into the city center: 40 euros in the daytime, from 05:00 to midnight, and a higher fixed fare overnight.", tone: "teal" },
          p: [
            "The key protection for arriving visitors is a <b>flat fare fixed by law</b> from <b>Athens Airport</b> (ATH) into the city center: <b>40 euros</b> in the daytime, from 05:00 to midnight, and <b>55 euros</b> at night, from midnight to 05:00, with <b>tolls and luggage included</b> and no surge. Yellow taxis wait 24 hours a day at <b>Exit 3</b> on the arrivals level, with no booking needed, and a dispatcher assigns you a cab.",
            "The apps charge the <b>same flat fare</b> plus a small booking fee, so ordering an Uber Taxi, Bolt or FreeNow costs about the same as the rank and can be quicker. Note the flat fare is for the city center specifically, while other destinations from the airport run on the meter. If you are traveling light, the <b>metro</b> into the city is only about 9 euros."
          ]
        },
        {
          h: "The meter tricks, at the port and on the islands",
          icon: "alert",
          key: { tag: "Insist on the meter", text: "The classic Greek problem is meter games: a driver refuses to switch it on, drapes a towel over it, or just announces a flat price, worst at ports and on the islands. Insist on the meter or use an app.", tone: "amber" },
          p: [
            "The classic Greek taxi problem is meter games. A driver refuses to switch on the meter, drapes a <b>hand towel</b> over it, or simply <b>announces</b> a flat price, and this happens most at the <b>port</b>, like Piraeus, and on the <b>islands</b>, where oversight is looser and tourist demand is high. The fix is to insist the meter is on from the start and to refuse any announced fare, and to watch for an invented <b>service fee</b> tacked on at the end.",
            "Booking through <b>FreeNow</b>, <b>Uber</b> or <b>Bolt</b> avoids the whole thing, because the fare is the regulated meter price shown before you ride and paid by card. If you do take a street taxi, check the meter is running and visible before you set off, and keep an eye on it during the trip."
          ]
        },
        {
          h: "Fares, paying and tipping",
          icon: "euro",
          key: { fig: "Metered", tag: "In the city", text: "The Athens day meter is roughly a 1.80 euro base plus about 0.90 euro per kilometer, with legitimate higher rates at night and on holidays. Round up rather than tip a set percentage.", tone: "teal" },
          p: [
            "The Athens day meter is roughly a <b>1.80 euro</b> base plus about <b>0.90 euro per kilometer</b>, with legitimate higher rates at night and on holidays and a small charge for luggage. Those surcharges are set by the state, not invented by the driver. In the apps you pay by card, and tipping is not expected, so rounding up to a convenient figure is plenty.",
            "In central Athens you often do not need a taxi at all, since the <b>metro</b> and walking cover the sights well, from Syntagma to the Acropolis and Plaka. For the wider money picture, including how much cash to carry, see the <a href=\"/greece\">Greece money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Does Uber work in Greece?", a: "Yes, but as Uber Taxi, which dispatches licensed yellow taxis at the regulated meter price, not private cars; the cheap UberX model is not legal in Greece. FreeNow, formerly Beat, is the most popular local app, and Bolt also operates. All three call regular yellow taxis, with card payment as the main advantage." },
        { q: "What is the taxi fare from Athens airport?", a: "A flat fare fixed by law to the city center: 40 euros in the daytime, from 05:00 to midnight, and 55 euros at night, with tolls and luggage included and no surge. Yellow taxis wait 24 hours a day at Exit 3 on the arrivals level, and the apps charge the same flat fare plus a small fee. Other destinations from the airport run on the meter." },
        { q: "Are Greek taxis a scam?", a: "Most are fine, but the common trick is meter games: refusing the meter, covering it with a towel, or announcing a flat fare, especially at the port and on the islands. Insist the meter runs from the start, refuse an announced fare, and watch for an invented service fee. Booking through FreeNow, Uber or Bolt avoids it, since the fare is the regulated meter price." },
        { q: "Which taxi app is best in Greece?", a: "FreeNow, formerly Beat, is the local favorite with the largest fleet, especially in Athens, Thessaloniki and Crete. Uber Taxi is handy if you already use Uber, and Bolt often runs promotions. All call the same licensed yellow taxis at the regulated meter price, so choose on availability and price." }
      ],
      sources: {
        links: [
          { label: "US Department of State: Greece country information, general safety and local-travel context for US visitors", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Greece.html", type: "gov" },
          { label: "Athens Tourism: a 2026 guide to Athens taxi prices and the ride apps", url: "https://www.athenstourism.org/getting-around-athens/athens-taxi-prices-uber-ride-sharing/", type: "guide" },
          { label: "Taxi to Athens: a 2026 guide to the Athens Airport flat fare, the rank and the apps", url: "https://taxitoathens.com/athens-airport-taxi-guide-2026/", type: "guide" }
        ],
        judgment: "The Athens Airport flat fare and the city meter tariff are set by the government and can change, and app coverage on the islands varies, so confirm the meter is on and treat euro figures as a recent read. Checked July 2026."
      }
    },
    {
      slug: "bringing-your-pet",
      glance: [
        { k: "Process", v: "Shared EU entry" },
        { k: "Need", v: "ISO chip, rabies, EU health cert" },
        { k: "Enter within", v: "10 days of endorsement" },
        { k: "Coming home", v: "Simple CDC path" }
      ],
      live: true,
      topic: "pets",
      insurance: true,
      title: "Bringing a dog or cat to Greece from the US 2026",
      description: "Greece runs on the shared EU health-certificate process, with no quarantine and no titer. What is Greece-specific on arrival and after you settle in.",
      h1: "Bringing your dog or cat to Greece.",
      lede: "Greece runs on the single EU pet-entry process for a US-origin dog or cat: microchip, rabies in the right order, and an EU health certificate on a 10-day clock. No quarantine, no rabies titer. Here is what that means for Greece, and the local parts worth knowing.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Greece uses the <b>shared EU pet-entry process</b>, so there is no separate national permit and nothing unusual at the border. Your pet needs an <b>ISO microchip, a rabies vaccination given after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS</b>, then must enter within <b>10 days</b> of that endorsement. There is <b>no quarantine and no rabies titer</b> for a pet coming straight from the US. The full step-by-step, the ordering trap, and the current fees are on one page: see <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a>. Below are the Greece-specific notes. Coming home to the US is the easy part.",
      sections: [
        {
          h: "Greece runs on the EU process",
          icon: "health",
          key: { fig: "10 days", tag: "No Greece-only permit", text: "The standard EU move: an ISO microchip first, a rabies shot after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS. Enter Greece within 10 days of that endorsement.", tone: "teal" },
          p: ["There is no Greece-only pet permit and no national quarantine. Bringing a dog or cat into Greece from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.", "Because the core process is identical across the EU (and the countries that follow its rules), we do not repeat it per country. The full sequence, the microchip-before-rabies trap that costs people the most time, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the Greece notes."]
        },
        {
          h: "The Greece-specific parts",
          icon: "receipt",
          key: { fig: "Check", tag: "At the border", text: "Greek customs may ask to see the endorsed certificate and confirm the chip, and pets should arrive through a designated traveller point of entry, which the major airports are.", tone: "teal" },
          p: ["At the border, Greek customs may ask to see the endorsed certificate and confirm the microchip, and pets should enter through a designated traveller point of entry, which Athens airport is. There is no dog or cat tapeworm rule for Greece, unlike Ireland, Finland or Malta.", "After you settle in, Greece requires dogs to be microchipped and registered in the national pet registry, which a local vet handles once you have an address, and rabies vaccination must be kept current. Standard leash and control rules apply in public spaces. Register the dog once you have an address and keep the EU certificate until you do."]
        },
        {
          h: "The money side, honestly",
          p: [
            "No insurance product reimburses quarantine boarding anywhere, so if you later move on to a destination that requires it, budget that as an out-of-pocket cost. Nationwide is the one US pet insurer that reimburses vet care at any licensed vet worldwide, and even it excludes boarding.",
            "US pet insurance is written around a pet that lives in the US. Most policies carry a policy territory, typically the US and sometimes Canada or Puerto Rico, and even the ones that reimburse vet care worldwide generally require your primary residence to stay in the US. So a policy may well pay a vet bill on a trip abroad and still lapse the day the move becomes permanent. Read your own policy's territory and residency wording before you assume it travels with you, and for a permanent move plan on taking out local pet insurance in your new country.",
            "As a rough sanity check on any quote, and this is our read of current market pricing rather than an official figure: a standard international pet move tends to run about $1,500 to $6,000. Full-service door-to-door typically costs 30 to 50 percent more than a transport-only booking where you handle the vet work and paperwork yourself.",
            "The costs people forget are the small ones. USDA APHIS charges a user fee to endorse an export health certificate, currently $101 where no test verification is needed, $160 for a certificate covering one or two tests, and $206 for three to six tests, with rabies vaccination not counted in that tally. These rates rose on 10 January 2025, the first APHIS fee adjustment since 2012. Add an airline-compliant crate (roughly $50 to $400), the travel vet visits themselves, boarding on a layover, and summer heat surcharges.",
            "Pet shipping attracts scammers, so verify any company before you send money. IPATA, the International Pet and Animal Transportation Association, is a trade association: its members ship under their own company names, IPATA itself does not ship pets, and there is no legitimate shipper with \"ipata\" in its name. Scammers clone real shippers' sites, logos and testimonials, so check the company in the member directory at ipata.org rather than trusting a logo on a website. Treat these as red flags: a quote dramatically below every other quote, a domain registered less than six months ago, email coming from a gmail address rather than the company domain, and any request to pay by Western Union or MoneyGram.",
            "One dated note for EU moves: the EU's pet travel rules were remade by Commission Delegated Regulation (EU) 2026/131, which applies from 22 April 2026, with the new certificate models set out in Implementing Regulation (EU) 2026/705. On the US side, APHIS is switching to the new non-commercial certificate on 1 October 2026 and can endorse the current one up to 30 September 2026. We cover the detail on the <a href=\"/eu-pet-health-certificate\">EU pet health certificate</a> page."
          ]
        },
        {
          h: "Coming back to the US is the easy part",
          icon: "plane",
          key: { fig: "Easy", tag: "The return trip", text: "A dog flying home from Greece is on the simplest CDC path: usually a CDC Dog Import Form receipt, a microchip, and a minimum age of 6 months.", tone: "teal" },
          p: ["Good news for the return trip: a dog flying home to the US from Greece is on the simplest CDC path, typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement.", "For the wider picture, including how Greece compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Greece",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-greece",
        note: "The US-side steps and the EU health certificate for Greece. Greece applies the shared EU process, and the destination's own authorities are the final word on the day."
      },
      faqs: [
        {
          q: "Is there anything Greece-specific beyond the EU rules?",
          a: "A little. Greece has no tapeworm rule (that applies to Ireland, Finland and Malta). After you arrive, dogs are microchipped and registered in the national pet registry through a local vet, and rabies vaccination must be kept current."
        },
        {
          q: "Does my pet have to go into quarantine in Greece?",
          a: "No. Greece applies the shared EU pet-entry process, which has no quarantine and no rabies titer for a pet coming straight from the US. Your pet needs a microchip, a rabies vaccination in the right order, and an EU Animal Health Certificate endorsed by APHIS, then must arrive within 10 days of endorsement. See our EU pet health certificate page for the full process."
        },
        {
          q: "Do I need to quarantine my pet coming back to the US from Greece?",
          a: "No. A dog returning to the US from Greece is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details."
        }
      ],
      sources: {
        links: [
          {
            label: "True Trip Costs: the EU pet health certificate, the shared microchip, rabies and certificate process for all EU countries including Greece",
            url: "/eu-pet-health-certificate",
            type: "internal"
          },
          {
            label: "USDA APHIS: pet travel from the United States to Greece, the US-side steps and EU health certificate",
            url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-greece",
            type: "gov"
          },
          {
            label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg",
            url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html",
            type: "gov"
          }
        ],
        judgment: "Greece applies the shared EU pet-entry framework, set by the EU and administered on the US side by APHIS, not by us. The process is stable in substance, though the EU certificate format changes on 1 October 2026, which we cover on the EU pet health certificate page. The local registration and any breed rules vary, so we point you to the official pages and dated this July 2026."
      }
    },
    {
      slug: "money-scams",
      glance: [
        { k: "Biggest cost trap", v: "The airport taxi that runs the meter" },
        { k: "Athens from ATH", v: "40 euros day, 55 euros night, fixed" },
        { k: "Watch for", v: "Tariff 2 in town, bar invitations" },
        { k: "Rule of thumb", v: "Ask for the flat rate by name" }
      ],
      live: true,
      topic: "scams",
      caution: "medium",
      title: "Common money scams in Greece, and what they cost",
      description: "The airport taxi that ignores the legal flat fare, the tariff-2 meter trick in Athens, the bar invitation downtown, and island ATM fees. Checked 2026.",
      h1: "Common money scams in Greece, and what they cost you",
      lede: "Greece has a reputation for taxi trouble that is now mostly out of date, and one setup in central Athens that is still worth knowing about. The useful thing is that the airport fare is fixed by law, so the biggest number of your trip is already decided.",
      checked: "Jul 2026",
      checkedISO: "2026-07-30",
      answer: "The airport run is fixed by law: <b>40 euros in the day and 55 euros overnight</b> between Athens airport and central Athens, tolls and standard luggage included, so <b>ask for the flat rate by name</b> and the meter is irrelevant. In town, the trick to know is a driver running <b>tariff 2</b>, the higher out-of-town and overnight rate, during a normal daytime city trip. The costliest thing in central Athens is not a taxi at all but the <b>friendly invitation to a bar</b>, which ends in a bill running to hundreds. On the islands, watch <b>non-bank ATM fees</b> and the <b>dollar conversion</b> offer. Restaurants add money through <b>extras you did not order</b> and <b>fish priced by weight</b>.",
      sections: [
        {
          h: "The airport fare is fixed, so use it",
          icon: "taxi",
          key: { fig: "40 or 55 euros", tag: "Athens airport, fixed by law", text: "The flat fare between Athens airport and central Athens is 40 euros from 05:00 to midnight and 55 euros overnight, including tolls and standard luggage. Ask for the flat rate before you set off.", tone: "amber" },
          p: [
            "Between <b>Athens International Airport (ATH)</b> and <b>central Athens</b>, a <b>regulated flat fare</b> applies rather than the meter: as of 2026 that is <b>40 euros between 05:00 and midnight</b> and <b>55 euros from midnight to 05:00</b>, covering <b>tolls and normal luggage</b>. It is set by law, it does not change with traffic or route, and the way to invoke it is simply to <b>say flat rate</b> before you set off. Destinations beyond the central zone are metered, so if your hotel is out in the suburbs or on the coast, expect the meter instead.",
            "Use the <b>official rank</b> outside arrivals and the <b>yellow licensed taxis</b>, not an offer made to you in the terminal. Two useful alternatives: <b>Metro Line 3</b> runs from the airport to Syntagma for a fraction of the fare, and the <b>X95 express bus</b> runs around the clock, which matters for a late arrival when the night fare applies. If you prefer an app, <b>Uber, FREE NOW and Bolt</b> in Greece dispatch <b>licensed yellow taxis on the regulated meter</b> rather than private drivers, which gives you a record of the trip. See also <a href='/greece/taxis-and-apps'>taxis and apps in Greece</a>."
          ]
        },
        {
          h: "Tariff 2, and other meter habits",
          icon: "receipt",
          key: { fig: "Tariff 1", tag: "For a daytime city trip", text: "Greek meters have a low urban daytime rate and a higher rate for nights and out-of-town runs. A daytime trip inside Athens should be on the lower one, so glance at the meter.", tone: "amber" },
          p: [
            "Greek taxi meters run <b>two tariff bands</b>: the lower one for daytime trips inside the city, and a higher one for overnight hours and journeys outside the urban zone. The classic overcharge is a driver setting the meter to the <b>higher band during a normal daytime city trip</b>, which roughly doubles the rate for the same ride. You do not need to know the per-kilometer figures to catch it: <b>glance at the tariff number on the meter</b> at the start, and ask if it looks like the higher one.",
            "The rest of the picture is ordinary and mostly honest: legitimate <b>surcharges exist</b> for a phone booking, for the airport and ports, and for large luggage, and they should be small and explainable. Ask for a <b>receipt</b>, which drivers are required to give. Sharing a cab with strangers is normal practice in Athens and is not itself a trick, though each passenger pays their own fare. Tipping is a matter of <b>rounding up</b>, not a percentage."
          ]
        },
        {
          h: "The bar invitation, the bill, and island cash machines",
          icon: "alert",
          key: { fig: "Walk away", tag: "The bar invitation", text: "A friendly stranger in central Athens suggests a drink at a bar he knows, where the drinks and the company arrive unasked and the bill runs to hundreds. Choose your own bar.", tone: "amber" },
          p: [
            "The most expensive setup in central Athens is social. A <b>personable stranger</b> strikes up a conversation near Syntagma, Plaka or Monastiraki and suggests a drink at a place he knows; inside, <b>drinks and company arrive unasked</b>, prices bear no relation to any menu, and the bill runs to <b>hundreds of euros</b> with staff making it awkward to leave. It tends to target solo travelers. The defence is simply to <b>choose your own bar</b> and be politely wary of a new acquaintance steering you to a specific venue. If you are landed with a wildly wrong bill, you can involve the <b>tourist police</b> rather than paying quietly.",
            "Two smaller leaks. In restaurants, especially on the tourist strips, watch for <b>bread, water or dips arriving unasked</b> and appearing on the bill, and for <b>fish priced by the kilo</b> where the weight is never shown to you: ask what a by-weight dish will cost before agreeing. On the <b>islands</b>, cash machines are often <b>standalone kiosks rather than bank ATMs</b>, charging their own fee and pushing the offer to convert to dollars hardest, so use a bank machine where you can, take a larger amount less often, and <b>always choose euros</b>. This guide is written for US travelers departing the US. For more, see <a href='/greece/cash-or-card'>cash or card in Greece</a>, <a href='/greece/tipping'>tipping in Greece</a>, and the <a href='/greece'>Greece money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "How much is a taxi from Athens airport to the city center?", a: "A flat fare set by law: as of 2026, 40 euros between 05:00 and midnight and 55 euros overnight, including tolls and standard luggage, to anywhere in central Athens. Say flat rate before you set off. Destinations outside the central zone are metered instead." },
        { q: "What is the tariff 2 taxi trick in Athens?", a: "Greek meters have a lower urban daytime rate and a higher rate for overnight hours and out-of-town journeys. Some drivers set the higher band for a normal daytime trip inside the city, which roughly doubles the rate. Glance at the tariff number on the meter when you set off." },
        { q: "Is the bar scam in Athens still a thing?", a: "It is still reported in the center. A friendly stranger suggests a drink at a bar he knows, drinks and company appear unasked, and the bill runs to hundreds. Choose your own bar, and if you are presented with a wildly wrong bill you can involve the tourist police rather than paying quietly." },
        { q: "Are ATMs on the Greek islands expensive?", a: "They can be. Many island machines are standalone kiosks rather than bank ATMs, with their own fee on top of your bank's and the hardest push to convert to dollars. Use a bank machine where you can, withdraw a larger amount less often, and always choose euros." }
      ],
      sources: {
        links: [
          { label: "US State Department: Greece country information, including the bar and nightclub overcharging reported in central Athens", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Greece.html", type: "gov" },
          { label: "Athens airport taxi guide: the regulated day and night flat fares to central Athens, with the rank location and alternatives", url: "https://taxitoathens.com/athens-airport-taxi-guide-2026/", type: "official" }
        ],
        judgment: "The flat airport fare is set by law and consistently reported, though it is periodically revised, so check before you travel. The per-kilometer meter rates are quoted inconsistently across sources, which is why we describe the tariff-band trick rather than printing figures. Checked July 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Strong on the mainland and big islands" },
        { k: "Carrier roaming", v: "$10 to $12 a day" },
        { k: "Cheapest", v: "A travel eSIM, a few $ per GB" },
        { k: "Signal gaps", v: "Ferry crossings, small islands" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "eSIM for Greece: the cost math, and ferry dead zones",
      description: "Greek coverage is strong in Athens and on the big islands, so this is a cost question. The gaps are the ferry crossings and the smaller islands, which no plan fixes.",
      h1: "Staying connected in Greece.",
      lede: "Greece covers its cities and its big islands well, so the decision is mostly financial. The exception is the bit of a Greek holiday that involves being on a boat, where everybody loses signal equally.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>strong</b> in Athens, Thessaloniki and on the larger islands including Crete, Rhodes, Corfu and most of the Cyclades, and it thins on <b>ferry crossings</b>, the smaller islands and in the mountainous interior of the Peloponnese and Epirus. Your US carrier charges about <b>${S.dayPass}</b> to roam (<b>AT&amp;T and Verizon</b> day passes), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon has ${S.verizonNoCap}</b> and keeps billing daily. <b>T-Mobile</b>'s mid and upper tiers include <b>${S.tmoRange}</b> of high-speed data abroad before slowing to <b>${S.throttle}</b>. A <b>Nomad eSIM</b> is a few dollars per gigabyte and works from landing. A <b>local prepaid SIM</b> is also cheap here and, because this is an <b>EU</b> country, it carries <b>Roam Like At Home</b> across the rest of the union at no surcharge, which is worth pricing if the trip continues into other EU countries. For island hopping, the practical move is not a different plan but <b>downloading your ferry tickets and maps before you sail</b>, since a two-hour crossing is often two hours offline. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "A cost question first",
          icon: "roamfee",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: "A US carrier day pass is the expensive default. AT&T caps it at 10 daily fees a bill period, Verizon does not cap at all, and T-Mobile's mid and upper tiers include 5GB to 30GB abroad.", tone: "teal" },
          p: [
            `Greek networks are good where visitors go, so the question is price. A US carrier day pass is about <b>${S.dayPass}</b>, roughly <b>${S.week}</b> a week, with the <b>AT&amp;T</b> cap meaning a long trip stops compounding after ten billed days and <b>Verizon</b> not capping at all. <b>T-Mobile</b>'s current tiers include roughly <b>${S.tmoLow}</b> on Experience More, Magenta MAX and Go5G Plus, <b>${S.tmoMid}</b> on Experience Beyond and Go5G Next and <b>${S.tmoHigh}</b> on Better Value.`,
            `A <b>Nomad eSIM</b> at a few dollars per gigabyte is cheaper than the day pass for a normal week. A local <b>Cosmote</b>, <b>Vodafone</b> or <b>Nova</b> tourist pack is inexpensive and carries EU roaming, so on a trip through several EU countries it competes. Do not roam with <b>no plan</b>, at about <b>${S.ppu}</b>.`
          ]
        },
        {
          h: "The ferries are the real gap",
          icon: "alert",
          key: { fig: "Mid-crossing", tag: "Where signal drops", text: "Open-water stretches between islands lose signal on every network. Download tickets, maps and reading before you board.", tone: "amber" },
          p: [
            `The Greek connectivity complaint is not the islands, it is getting between them. Once a ferry is <b>out of sight of land</b>, coverage drops on every network, and the longer Cyclades and Dodecanese runs can be several hours. Onboard wifi, where it exists, is usually satellite-backed, shared with a full deck and slow. Small islands can also be thin once you leave the port town, and the interior mountains of the <b>Peloponnese</b>, <b>Epirus</b> and <b>Crete</b>'s Lefka Ori have real gaps.`,
            `None of that is fixed by which plan you buy, so plan around it: <b>download your ferry tickets</b> so they open offline, save your accommodation address, and grab offline maps for the island before you sail rather than after you land. The habit also covers a hiking day in the Samaria gorge or the Vikos.`
          ]
        },
        {
          h: "On the big islands you are fine",
          icon: "phoneok",
          key: { fig: "The big islands", tag: "Well covered", text: "Crete, Rhodes, Corfu and most of the Cyclades have solid 4G in the towns and along the main roads.", tone: "teal" },
          p: [
            `Where visitors spend most of their time, coverage is good: <b>Athens</b> has fast 4G and 5G including much of the metro, and <b>Crete, Rhodes, Corfu, Santorini, Naxos, Paros</b> and the other larger islands have solid 4G in the towns, at the ports and along the main roads. Archaeological sites near towns are fine.`,
            `The thinner spots on an island are the far headlands, the mountain villages and the remote beaches reached by dirt track, which is the sort of thing to check before relying on a phone to summon a taxi at the end of the day. This guide is written for US travelers departing the US. For more, see <a href='/greece/cash-or-card'>cash or card in Greece</a>, <a href='/greece/money-scams'>money traps in Greece</a>, and the <a href='/greece'>Greece money guide</a>.`
          ]
        }
      ],
      faqs: [
        { q: `Will I have phone signal on Greek ferries?`, a: `Not for the whole crossing. Once the ferry is out of sight of land, coverage drops on every network, and the longer Cyclades and Dodecanese runs can be hours. Onboard wifi is usually satellite-backed and slow. Download your tickets, maps and reading before you board.` },
        { q: `How much does it cost to use my US phone in Greece?`, a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}.` },
        { q: `Do I need an eSIM for Greece?`, a: `It is the cheapest way for most US travelers to get real data, at a few dollars per gigabyte against about $10 to $12 a day for a carrier pass. A local Cosmote, Vodafone or Nova tourist pack is also cheap and carries EU roaming, which is worth pricing if the trip continues into other EU countries.` },
        { q: `Is coverage good on the Greek islands?`, a: `On the big ones, yes. Crete, Rhodes, Corfu, Santorini and most of the Cyclades have solid 4G in the towns, at the ports and on the main roads. Smaller islands thin out beyond the port town, and remote headlands and mountain villages can have nothing.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "US State Department: Greece country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Greece.html", type: "gov" }
        ],
        judgment: "Checked Aug 2026. The ferry gap is the honest headline here, and it is worth stating plainly on a page that carries an eSIM link, because no data plan closes it: it is open water and there are no towers. The coverage read on the larger islands is the desk's from operator footprints and consistent traveler accounts. Carrier figures are an Aug 2026 snapshot."
      }
    }
  ]
};
