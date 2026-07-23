export default {
  slug: "france",
  iso2: "fr",
  live: true,
  name: "France",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Sources added. Verified that Paris raised its taxe de sejour on 1 January 2026, so a mid-range hotel now runs about 6 euros a person per night and the top categories more, while most towns outside Paris stay at a euro or two. The detaxe VAT refund still starts at 100 euros spent in one store. The guide's figures are current.",
    links: [
      { label: "French government (service-public.fr): the Paris taxe de sejour rates that took effect 1 January 2026", url: "https://www.service-public.gouv.fr/particuliers/actualites/A17929?lang=en", type: "gov" },
      { label: "Paris Convention and Visitors Bureau: the tourist tax by accommodation category, per person per night", url: "https://parisjetaime.com/eng/article/tourist-tax-a616", type: "tourism" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "112", note: "112 reaches every service, and 15 connects you straight to the medical service, the SAMU.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  rentalCommon: true,
  region: "Europe",
  signals: { cardFriendliness: 4, cashNeed: 2, taxRisk: 3, atmRisk: 4 },
  title: "Money in France (2026): Cash, Cards, ATMs, Tipping and the VAT Refund | True Trip Costs",
  description: "How to handle money in France as a US traveler in 2026: cash vs card, which ATMs to use and which to avoid, the dollar conversion trap, tipping with service compris, the tourist tax, and the VAT refund. Checked July 2026.",
  h1: "Money in France, sorted.",
  lede: "A calm, current plan for the money side of your trip: what to tap, the little cash you still want, and the small rules that trip up first-timers.",
  hero: {
    img: "/france-hero.jpg",
    h: 1375,
    alt: "A quiet French village street at dusk with string lights overhead, blue shutters and red flowers, a bell tower and lavender fields in the distance, a lone figure walking away, and a bowl of cassoulet, a baguette and a glass of rose on a wooden table in the foreground"
  },
  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',
  verdict: "France runs on <b>cards</b>. Visa and Mastercard work almost everywhere, contactless (\"sans contact\") is the norm, and Apple Pay and Google Pay are widely accepted. You still want <b>a little cash</b> for bakeries, open-air markets, small cafes and tips. Bring a <b>no-fee Visa or Mastercard</b>, pull euros from a <b>bank ATM</b> rather than a Euronet kiosk, and one rule everywhere: <b>always choose euros, never dollars</b>.",
  meter: {
    heading: "Day to day, France is mostly card.",
    cashPct: 25,
    note: "A rough feel for everyday spending. Cities, shops, restaurants and transit are overwhelmingly card and contactless. The cash you do want is for bakeries, open-air markets, small village cafes, a few tips, and the odd shop with a card minimum. Out in the countryside, carry a little more."
  },
  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken nearly everywhere, and contactless is standard, including Apple Pay and Google Pay. Amex is less widely accepted. A few small shops set a card minimum, often around 5 to 10 euros.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "A little, for the small stuff", p: "You can get through most days on a card, but keep some euros for bakeries, open-air markets, small cafes, tips and rural spots. A few coins are handy for some public toilets too.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy, skip the Euronet ones", p: "Plentiful in towns and cities. Use a machine attached to a real bank (BNP Paribas, Credit Agricole, Societe Generale, LCL), not a standalone Euronet or Travelex kiosk, which charge more and push the dollar conversion.", cta: { label: "See fee-saving cards", href: "#" } }
  ],
  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> for almost everything, plus a backup card from a different bank.",
      "Add a <b>no-fee debit card</b> for ATM cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "Set your cards up for <b>contactless</b> and add them to Apple Pay or Google Pay. Most US issuers no longer need a travel notice, but it does not hurt to flag the trip."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters; their rates are poor.",
      "For cash, find a <b>bank ATM</b> rather than the bright <b>Euronet</b> kiosks near the exits, and <b>decline \"convert to USD.\"</b> Always choose euros.",
      "Pull a larger amount at once so any per-withdrawal fee stings less."
    ], cta: { label: "Find fee-saving cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card or phone</b> for almost everything: shops, restaurants, museums and transit.",
      "Keep <b>cash</b> for bakeries, open-air markets, small village cafes and tips.",
      "<b>Always choose euros</b> on the card terminal and the ATM screen, never dollars."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in euros, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "This is true at shop card terminals and at ATMs alike, and the standalone Euronet machines push it hardest."
    ], cta: null }
  ],
  cash: {
    rate: 0.88, cur: "EUR", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 1.14 dollars to the euro in mid-2026, so roughly 0.88 euros per dollar. France is card-first, so this is the smaller, cash-in-hand slice of your spending.",
    styles: [ { n: "Budget", per: 50, cash: 0.35, room: 90 }, { n: "Mid-range", per: 105, cash: 0.25, room: 170 }, { n: "Comfort", per: 190, cash: 0.15, room: 330 } ]
  },
  connectivity: {
    works: "Yes across the cities, tourist regions and main routes, with excellent 4G and 5G growing in the bigger cities and along the TGV lines. Signal thins in the Alps and Pyrenees valleys and remote rural areas like inland Brittany and the Dordogne."
  },
  // TOURIST TAX (high-churn, verified Jul 2026). A nightly tourist tax (taxe de sejour)
  // charged per person and collected by your accommodation. The amount rises with the
  // hotel's rating, so the calculator uses a mid-range figure per city. Children under
  // 18 are exempt.
  // Typical economy round trip per person from major US gateways, as a verified
  // RANGE, never a point. Sourced from fare-tracker averages (Kayak, momondo,
  // Skyscanner published route data), deliberately wide to cover season and
  // gateway. HIGH-CHURN: re-verify on the tourist-tax cadence. The calculator
  // prefills the midpoint, feeds low/high into the confidence range until the
  // traveler enters their own fare, and hides the estimate if this block is absent.
  flight: { low: 550, high: 1150, checked: "Jul 2026", checkedISO: "2026-07-18" },
  tax: {
    unit: "perPersonPerNight",
    currency: "EUR",
    capNights: null,
    note: "A nightly tourist tax (taxe de sejour) charged per person and collected by your accommodation. The amount depends on the hotel rating, so this is a mid-range estimate. Children under 18 are exempt.",
    regions: [
      { key: "paris", label: "Paris", rate: 6, note: "Paris raised its tourist tax for 2026. Grand and palace hotels pay well above this mid-range figure, while simple hotels pay less." },
      { key: "nice", label: "Nice and the Riviera", rate: 3 },
      { key: "lyon", label: "Lyon", rate: 3 },
      { key: "other", label: "Elsewhere in France", rate: 1.5, note: "Most French towns charge a small per-person tax, commonly 1 to 3 euros a night by hotel rating. Some rural spots charge very little." }
    ]
  },
  currencyHeading: "The euro, in plain terms.",
  facts: [
    { sym: "euro", k: "Quick conversion", v: "About 1.14 dollars to 1 euro in mid-2026, so a 10 euro lunch is roughly $11 and 50 euros is about $57. Prices show the euro sign, often after the number, as in \"12 \u20AC\"." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 5, 10, 20, 50, 100, 200 and 500 euros, though many shops dislike anything above 50; coins go from 1 cent to 2 euros. Keep small notes and a few coins for bakeries, markets and toilets." },
    { sym: "card", k: "Contactless is king", v: "Tap to pay is everywhere, usually with no PIN under about 50 euros, and Apple Pay and Google Pay are widely accepted. Carry a chip-and-PIN card as backup for the odd machine that wants it." },
    { sym: "tip", k: "Service is included", v: "Restaurant and cafe prices include a service charge by law (\"service compris\"), so tipping is optional and small. There is no US-style percentage to track." }
  ],
  taxfree: {
    label: "Taxes and refunds",
    heading: "The tourist tax on your room, and money back on shopping.",
    text: "Two things to know. Most towns add a small <b>tourist tax (taxe de sejour)</b> to your lodging, charged per person per night, usually a euro or two, collected at the hotel or built into an Airbnb booking, and children under 18 are exempt. It is higher in Paris, which raised its rates in 2026, where a mid-range hotel can run around 6 euros and up per adult per night. Separately, non-EU visitors can claim a <b>VAT refund (detaxe)</b> on shopping. French VAT is 20%, and if you spend <b>over 100 euros in one store on the same day</b>, ask for a tax-free form (\"detaxe\"), show your passport, keep the goods unused, and validate at a <b>PABLO kiosk</b> when you leave the EU. After fees you get roughly 10 to 15% back. Apps like ZappTax or Wevat can combine smaller receipts to clear the threshold."
  },
  recentChange: {
    date: "Jan 2026",
    text: "<b>Paris raised its tourist tax.</b> From January 1, 2026 the city's nightly <i>taxe de sejour</i> went up, partly to fund transport and 2028 Olympic-legacy projects. Expect roughly 6 euros and up per adult per night at a mid-range Paris hotel, and more at higher categories, charged separately from your room rate. Children under 18 are still exempt, and most towns outside Paris stay at a euro or two."
  },
  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> At a card terminal or ATM, choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%. Pick euros every time.",
    "<b>Avoid the Euronet and Travelex kiosks.</b> The bright standalone machines at airports, stations and tourist squares charge high fees and push dollar conversion. One traveler was charged a flat 3.95 euro fee on a 20 euro withdrawal even after declining the conversion. Use a bank-branch ATM instead.",
    "<b>Watch your pockets in crowds.</b> Paris pickpockets work the metro, the steps at Sacre-Coeur and the lines at big sights. Keep cards and phone in a front or zipped pocket, and be wary of the friendship-bracelet and clipboard-petition distractions.",
    "<b>Some small spots are cash, or have a minimum.</b> A few bakeries, market stalls and village cafes are cash-preferred or set a card minimum around 5 to 10 euros, so keep a little cash and some coins on you.",
    "<b>Tap water is free.</b> Ask for \"une carafe d'eau\" at restaurants instead of paying for bottled water. It is normal, expected and safe."
  ],
  tippingHeading: "Service is included, so tip lightly.",
  tipping: "By French law, restaurant and cafe prices already include a service charge, shown as \"service compris,\" and staff earn a full wage. So tipping is optional and modest, not the US 15 to 20%. For good service, round up or leave a euro or two; in a nicer restaurant, about 5% is generous. Cash is best, since a tip left in cash goes straight to the staff, while the newer card-terminal tip prompts may be pooled or skipped. At a hotel, a euro or two for housekeeping or a couple of euros per bag for a porter is plenty, and a few euros for a helpful taxi driver or tour guide. There is never any pressure, and no one will think less of you for not tipping.",
  faqs: [
    { q: "Do I need cash in France?", a: "Not much. France is card-first, and contactless works almost everywhere, including Apple Pay and Google Pay. Keep some euros for bakeries, open-air markets, small village cafes, tips and the occasional shop with a card minimum, but you can put most spending on a card." },
    { q: "What ATM should I use in France?", a: "Use a machine attached to a real bank, such as BNP Paribas, Credit Agricole, Societe Generale or LCL. Avoid the standalone Euronet and Travelex kiosks at airports, stations and tourist squares; they charge more and push the dollar conversion. Always choose to be charged in euros." },
    { q: "Should I pay in euros or dollars in France?", a: "Always euros. If a card machine or ATM offers to charge you in dollars, decline. That dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
    { q: "Do you tip in France?", a: "Only lightly. Service is included by law (\"service compris\") and staff are paid a full wage, so tipping is optional. Round up or leave a euro or two for good service, or about 5% in a nicer restaurant. Cash is better than the card-terminal prompt." },
    { q: "What is the tourist tax and VAT refund in France?", a: "Most towns add a small taxe de sejour to your lodging, per person per night, usually a euro or two and higher in Paris, with under-18s exempt. Separately, non-EU visitors can reclaim VAT (detaxe) on shopping over 100 euros in one store on the same day: ask for the tax-free form, keep the goods unused, and validate at a PABLO kiosk when you leave. After fees you get roughly 10 to 15% back." },
    { q: "How much cash should I bring for a week in France?", a: "For two mid-range travelers, very roughly 200 to 300 euros in day-to-day cash across a week, beyond your hotel, pulled in one or two ATM visits. France is card-first, so most spending goes on a card and the cash is for small extras." }
  ],

  culture: {
    heading: "A little French goes a long way",
    intro: "A little French, starting with Bonjour, changes everything here. Say it as you walk into any shop, cafe or lift, add a story or two, and you become a guest rather than a tourist.",
    phrases: [
      { mean: "Hello, good day", say: "bawn-ZHOOR", word: "Bonjour" },
      { mean: "Please", say: "seel voo PLEH", word: "S'il vous plaît" },
      { mean: "Thank you", say: "mair-SEE", word: "Merci" },
      { mean: "Excuse me, sorry", say: "pahr-DOHN", word: "Pardon" },
      { mean: "Cheers", say: "sahn-TAY", word: "Santé" },
      { mean: "Delicious", say: "deh-lee-SYUH", word: "Délicieux" },
    ],
    tip: "The single most important word in France is <b>Bonjour</b>. Say it before anything else when you enter a shop or approach someone, because skipping straight to your question can read as rude. Add <b>Madame</b> or <b>Monsieur</b> and you will be met warmly.",
    stories: [
      { img: "/france-culture-1.jpg",
        alt: "WPA-style illustration of a painter seen from behind at an easel beside a still water-lily pond, a green Japanese footbridge and weeping willows in soft light",
        h: "Painting the light itself",
        p: "In gardens like these, French painters broke the old rules and chased the light itself, dabbing colour straight onto the canvas to catch a passing moment. Claude Monet painted his own water-lily pond at Giverny again and again across the seasons. The movement they began, Impressionism, changed art forever.",
        note: "Good to know: Monet's garden at Giverny still blooms" },
      { img: "/france-culture-2.jpg",
        alt: "WPA-style illustration of prehistoric artists by torchlight painting a great ochre horse and a red bull on a curving cave wall deep underground",
        h: "Art from the dawn of time",
        p: "Deep in a cave in the Dordogne, early hunters painted horses, bulls and deer on the walls around 17,000 years ago, by the light of flickering lamps. The Lascaux paintings are so alive they are called the Sistine Chapel of prehistory. The real cave is closed now to protect it, but a faithful replica nearby lets you see them.",
        note: "Good to know: see the replica, Lascaux IV" },
      { img: "/france-culture-3.jpg",
        alt: "WPA-style illustration of a grand Belle Epoque Paris cafe at dusk, patrons at little marble tables under a striped awning and a waiter carrying a tray",
        h: "Life at the cafe",
        p: "The Paris cafe is not fast food, it is a place to sit, watch the street and let time pass, and a single coffee buys you the table for as long as you like. In the Belle Epoque, the golden years around 1900, cafes were where artists, writers and everyone else met. Order un café, take a little table on the pavement, and you are part of it.",
        note: "Say it: un café (uhn kah-FAY)" },
    ],
    pride: "The French are proud of their art of living, the food, the wine, the language and the long lunch, and they love to share it with anyone who makes a little effort. Lead with Bonjour and a smile, and any coolness melts fast."
  },

  spokes: [
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Light, service included" },
        { k: "Service compris", v: "Already in the price, by law" },
        { k: "If you tip", v: "Round up, or up to 5%" },
        { k: "How", v: "Cash, no card tip line" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in France: service compris, and what you actually owe (2026) | True Trip Costs",
      description: "How tipping works in France for US travelers in 2026: why service is already included by law (service compris), whether to leave a pourboire, and how much when you do. Checked July 2026.",
      h1: "Tipping in France",
      lede: "France is not a US-style tipping country. Service is included in the price by law, staff earn a full wage, and no one expects 15 to 20%. A small pourboire for good service is a kindness, not an obligation. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "France has a <b>light tipping culture</b> because <b>service is included by law</b> (service compris): the listed price already covers service, and staff earn a <b>full minimum wage</b>. So there is <b>no expected percentage</b> and no line to add. For genuinely good service, a small <b>pourboire</b> is a kind gesture: <b>round up</b> or leave a <b>euro or two</b> at a cafe, and up to roughly <b>5%</b> at a nicer restaurant. Leave it in <b>cash</b>, since card terminals rarely have a tip line. Do not feel pressured to tip the way you would at home.",
      sections: [
        {
          h: "Service compris: why the tip is already in the price",
          icon: "euro",
          key: { fig: "Included", tag: "Service compris", text: "By law the listed price includes service, and staff earn a full wage, so there is no service line to add and no expected percentage.", tone: "teal" },
          p: [
            "Since a <b>1987 law</b>, French menus and bills are <b>service compris</b>: the price you see already <b>includes service</b>, and you may see the words printed on the menu or receipt. Waiters earn a <b>full salary</b> (the French minimum wage, the SMIC), so they do <b>not depend on tips</b> the way US servers do.",
            "That means there is <b>no service charge to add</b> and <b>no expected percentage</b>. A tip in France, the <b>pourboire</b>, is a genuine extra for service you liked, not part of the bill."
          ]
        },
        {
          h: "When and how much to leave",
          icon: "coins",
          key: { fig: "Round up", tag: "A courtesy", text: "For good service, round up or leave a euro or two at a cafe, and up to about 5% at a nicer restaurant. It is optional.", tone: "teal" },
          p: [
            "For everyday meals, <b>rounding up</b> or leaving the <b>small change</b> is plenty. At a <b>cafe or bar</b>, leaving a <b>euro or two</b>, or the coins from your change, is a normal kindness. At a <b>nicer restaurant</b> where service was excellent, up to roughly <b>5%</b> is generous, well below the US 15 to 20%.",
            "Elsewhere: <b>round up</b> a taxi fare, leave <b>1 to 2 euros per bag</b> for a hotel porter, and <b>1 to 2 euros a day</b> for housekeeping if you like. For a private guide or a long tour, a larger tip reflects a real service."
          ]
        },
        {
          h: "Leave it in cash",
          icon: "cash",
          key: { fig: "Cash", tag: "No tip line on cards", text: "Card terminals in France rarely have a tip line, so leave a pourboire in coins or small notes on the table or in the dish.", tone: "teal" },
          p: [
            "Leave any <b>pourboire in cash</b>. French card machines usually have <b>no tip prompt</b>, so a card tip is awkward or impossible, and cash reaches the staff directly. Keep a few <b>euro coins and small notes</b> for this and for cafe change."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in France?", a: "Only lightly, and only if you want to. Service is included in the price by law (service compris) and staff earn a full wage, so there is no obligation and no expected percentage. For good service, round up or leave a euro or two, up to about 5% at a nicer restaurant." },
        { q: "What does service compris mean?", a: "It means service is included in the listed price. Since a 1987 law, French menus and bills already cover service, and waiters earn a full salary. You do not add a service charge, and any tip is a genuine extra, not part of the bill." },
        { q: "How much should I tip in a French restaurant?", a: "Nothing is required. For excellent service, up to roughly 5% at a nicer restaurant is generous, or simply round up. At a cafe, leaving a euro or two or the small change is normal. Do not feel pressured to tip 15 to 20% the way you would at home." },
        { q: "Should I tip in cash or on the card in France?", a: "Cash. French card terminals rarely have a tip line, so a card tip is usually not possible, and cash goes straight to the staff. Keep a few euro coins and small notes handy." }
      ],
      sources: {
        links: [
          { label: "US State Department: France country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/France.html", type: "gov" }
        ],
        judgment: "French tipping is cultural, and service compris is a longstanding legal rule, not a recent change. The amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Best options", v: "Uber, Bolt, or a licensed taxi" },
        { k: "Book a cab", v: "G7 or FreeNow" },
        { k: "CDG airport", v: "Flat 56 euros to the Right Bank" },
        { k: "Watch for", v: "Unlicensed touts at CDG" }
      ],
      live: true,
      topic: "taxis",
      caution: "low",
      title: "How taxis and Uber work in Paris, and the CDG airport fixed fare (2026) | True Trip Costs",
      description: "How Paris taxis and ride apps work (real Uber and Bolt here, plus G7 and FreeNow), the government-fixed CDG and Orly airport fares, the unlicensed touts to skip, and when the RER B train wins. Checked July 2026.",
      h1: "Paris taxis and Uber, and the CDG fixed fare",
      lede: "Paris gives you real choice, a hailable licensed taxi or a proper Uber, but the airport is where money is won or lost. Here is how the two compare, the fixed fare that protects you, and the tout trick to skip.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Paris has real choice: hail a licensed <b>taxi</b> on a regulated meter, or use <b>Uber</b> and <b>Bolt</b>, which run proper ride-hailing cars here, plus <b>G7</b> or <b>FreeNow</b> to book a licensed cab. The big protection is the airport <b>fixed fare</b>: from <b>Charles de Gaulle</b>, a licensed taxi to the <b>Right Bank</b> is a flat <b>56 euros</b> and to the <b>Left Bank</b> <b>65 euros</b>, luggage and tolls included, 24/7, for up to 4 people. Uber has <b>no fixed airport rate</b>, so it surges. The scam to skip is the unlicensed <b>touts</b> at CDG who quote 120 to 200 euros for that ride, so ignore anyone who approaches you and follow the signs to the official rank.",
      sections: [
        {
          h: "Taxi or app: you have real choice here",
          icon: "phoneok",
          key: { fig: "Real Uber", tag: "Unlike Italy", text: "France has proper ride-hailing: Uber and Bolt run real private-hire cars (VTC), so the app works the way it does at home. G7 or FreeNow book a licensed metered taxi.", tone: "teal" },
          p: [
            "Unlike Italy or Greece, France has proper ride-hailing. <b>Uber</b> and <b>Bolt</b> run real private-hire cars (called <b>VTC</b>), so opening Uber works the way it does at home, with an upfront price and, yes, surge pricing at busy times. You can <b>also</b> hail a licensed <b>taxi</b> on the street or at a rank, running a regulated meter with three tariffs that change by time of day and zone and a starting charge of about 4 euros. To book a licensed taxi through an app, use <b>G7</b>, Paris's biggest taxi network, or <b>FreeNow</b>.",
            "One rule for the apps: you cannot just grab an Uber or Bolt <b>spontaneously at the airport</b>. You book in the app and walk to the designated pickup point, which the app shows by door and level. For a short city trip, an Uber is often a few euros cheaper than a metered taxi, and licensed taxis must accept a card."
          ]
        },
        {
          h: "The CDG and Orly fixed fare",
          icon: "plane",
          key: { fig: "56 euros", tag: "Set by decree", text: "From Charles de Gaulle, a licensed taxi to the Right Bank is a flat 56 euros, identical day and night, luggage and tolls included, for up to 4 passengers. Orly has set fares too.", tone: "teal" },
          p: [
            "The key protection is the airport <b>fixed fare</b>, set by government decree, identical day and night, with luggage and tolls included, for up to 4 passengers, on <b>licensed taxis from the official rank</b>. From <b>Charles de Gaulle</b> (CDG): the <b>Right Bank</b> is <b>56 euros</b> and the <b>Left Bank</b> is <b>65 euros</b>. From <b>Orly</b> it is roughly <b>37 to 44 euros</b>. It is worth knowing which bank your hotel is on, since the fixed fare depends on it.",
            "The catch that costs people money: <b>Uber and Bolt have no fixed airport rate</b>, so their price rises with demand and can reach 80 to 120 euros from CDG at peak times or in bad weather. For the airport specifically, the <b>fixed-fare licensed taxi is often the cheaper and more predictable</b> choice, which is the opposite of the usual city advice."
          ]
        },
        {
          h: "The CDG touts, and the cheap train",
          icon: "alert",
          key: { tag: "The airport tout", text: "The classic scam at Charles de Gaulle is the unlicensed tout who approaches you in the terminal and overcharges. Use only the official taxi rank, or take the RER B train.", tone: "amber" },
          p: [
            "The notorious scam at Charles de Gaulle is the <b>unlicensed tout</b>. Someone approaches you inside or just outside the terminal, asks if you are <b>going to Paris</b> or need a taxi, and then charges <b>120 to 200 euros</b> for the same ride the official fixed fare covers for 56, in an unmarked car. The Paris airports openly warn about these <b>false taxis</b>. The rule is simple: <b>ignore anyone who approaches you</b>, follow the signs, the blue circles on the floor and the overhead <b>Taxi</b> signs, to the official taxi rank, where a marshal points you to a licensed cab and the fixed fare applies.",
            "The cheap alternative into central Paris is the <b>RER B</b> train, about <b>12 euros</b> to <b>Chatelet-Les Halles</b> and <b>Saint-Michel</b> in 30 to 35 minutes, which is the best value for a solo traveler. For a family or a group of up to four with luggage, the fixed-fare taxi works out competitive per person and drops you at the door."
          ]
        },
        {
          h: "Fares, paying and tipping",
          icon: "euro",
          key: { fig: "Metered", tag: "In the city", text: "In town the meter runs one of three tariffs (day, evening, and night or suburbs), shown by a roof light, with no haggling for a city trip. Round up rather than tip a percentage.", tone: "teal" },
          p: [
            "In the city, the meter runs one of <b>three tariffs</b>, daytime, evening and Sunday, and night and suburbs, shown by a light on the roof, and there is no flat-rate haggling for a city trip. Licensed taxis must <b>accept a card</b> and give a receipt for any fare of 25 euros or more, so ask for one if you need proof. On the airport <b>fixed fare</b>, no extra supplements apply.",
            "Tipping is not expected in France, and rounding up to the nearest euro, or 5 to 10 percent for good service, is plenty. For the wider money picture, including how much cash to carry and where cards work, see the <a href=\"/france\">France money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Does Uber work in Paris?", a: "Yes, properly. France has real ride-hailing, so Uber and Bolt run private-hire (VTC) cars with upfront pricing, unlike Italy or Greece where the apps only dispatch licensed taxis. You can also hail a licensed metered taxi or book one through G7 or FreeNow. Note that Uber and Bolt surge and have no fixed airport rate, so compare them against the fixed taxi fare for airport runs." },
        { q: "What is the taxi fare from CDG to Paris?", a: "A government-set flat fare on licensed taxis from the official rank: 56 euros to the Right Bank and 65 euros to the Left Bank, luggage and tolls included, identical day and night, for up to 4 passengers. Orly is roughly 37 to 44 euros. Know which bank your hotel is on. Uber and Bolt have no fixed airport rate and surge, so the fixed-fare taxi is often cheaper and more predictable." },
        { q: "How do I avoid the taxi scam at Charles de Gaulle?", a: "Ignore anyone who approaches you inside or near the terminal asking if you need a taxi or are going to Paris; they are unlicensed touts who charge 120 to 200 euros for the ride the fixed fare covers for 56. Follow the signs, the blue circles on the floor and overhead Taxi signs, to the official rank, where a marshal assigns you a licensed cab at the fixed fare. For an Uber or Bolt, book in the app and go to the designated pickup point." },
        { q: "Should I take a taxi or the train from CDG?", a: "For value, the RER B train is about 12 euros to central Paris (Chatelet-Les Halles, Saint-Michel) in 30 to 35 minutes, best for a solo traveler. For door-to-door with luggage or a group of up to four, the fixed-fare taxi (56 euros to the Right Bank, 65 to the Left Bank) is competitive per person and hassle-free. Uber works but surges at the airport." }
      ],
      sources: {
        links: [
          { label: "US Department of State: France country information, general safety and local-travel context for US visitors", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/France.html", type: "gov" },
          { label: "Hootling: a 2026 guide to the CDG to Paris fixed taxi fare, the unlicensed touts and the RER B train", url: "https://www.hootling.com/blog/taxi-cdg-to-paris", type: "guide" },
          { label: "AlloTaxi: Paris taxi rates for 2026, the decree-set airport flat fares and the three meter tariffs", url: "https://www.allotaxi.net/service-taxi/en/paris-taxi-rates.html", type: "guide" }
        ],
        judgment: "The fixed airport fares are set by decree but can be revised, and city meter tariffs and app surge pricing move, so confirm the fixed fare before you ride and treat euro figures as a recent read. Checked July 2026."
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
      title: "Bringing a dog or cat to France from the US (2026): the EU process, and the France-specific parts | True Trip Costs",
      description: "Moving to France with a pet from the US: why it runs on the shared EU health-certificate process, no quarantine and no titer, plus what is specific to France on arrival and after you settle in. Checked July 2026.",
      h1: "Bringing your dog or cat to France.",
      lede: "France is one of the most common EU destinations for US pet owners, and the good news is there is nothing France-specific to fear at the border. It runs on the single EU pet-entry process: microchip, rabies in the right order, and an EU health certificate on a 10-day clock. No quarantine, no rabies titer. Here is what that means for France, and the local parts worth knowing.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "France uses the <b>shared EU pet-entry process</b>, so there is no separate French permit and nothing unusual at the border. Your pet needs an <b>ISO microchip, a rabies vaccination given after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS</b>, then must enter France within <b>10 days</b> of that endorsement. There is <b>no quarantine and no rabies titer</b> for a pet coming straight from the US. We keep the full step-by-step, the ordering trap, and the current fees on one page: see <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a>. Below are the France-specific notes. Coming home to the US is the easy part.",
      sections: [
        {
          h: "France runs on the EU process",
          icon: "health",
          key: { fig: "10 days", tag: "No France-only permit", text: "The standard EU move: an ISO microchip first, a rabies shot after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS. Enter France within 10 days of that endorsement.", tone: "teal" },
          p: [
            "There is no France-only pet permit and no national quarantine. Bringing a dog or cat into France from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.",
            "Because the process is identical across all 27 member countries, we do not repeat it per country. The full sequence, the microchip-before-rabies trap that costs people the most time, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the France notes."
          ]
        },
        {
          h: "The France-specific parts",
          icon: "receipt",
          key: { fig: "Check", tag: "At the border", text: "French customs may ask to see the endorsed certificate and confirm the chip, and pets should arrive through a designated traveller point of entry, which the major airports are.", tone: "teal" },
          p: [
            "At the border, French customs may ask to see the endorsed certificate and confirm the microchip, and pets should enter through a designated traveller point of entry, which the major airports are. There is no cat or dog tapeworm rule for France, unlike Ireland, Finland or Malta.",
            "After you settle in, the practical French thing to know is identification. France requires pets to be identified and registered in the national database (I-CAD), and a French vet can update your pet's ISO microchip details into that system once you have a local address. Certain dog types classed as category 1 and 2 (some guarding and attack breeds) face extra French rules on ownership, insurance and muzzling, so if your dog is a bull-type or mastiff-type breed, check the French classification before you travel."
          ]
        },
        {
          h: "Coming back to the US is the easy part",
          icon: "plane",
          key: { fig: "Easy", tag: "The return trip", text: "A dog flying home from France is on the simplest CDC path: usually a CDC Dog Import Form receipt, a microchip, and a minimum age of 6 months.", tone: "teal" },
          p: [
            "Good news for the return trip: a dog flying home to the US from France is on the simplest CDC path, typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement.",
            "For the wider picture, including how France compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."
          ]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to France",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-france",
        note: "The US-side steps and the EU health certificate for France. France applies the shared EU process, and the destination's own agriculture ministry is the final word on the day."
      },
      faqs: [
        { q: "Does my pet have to go into quarantine in France?", a: "No. France applies the shared EU pet-entry process, which has no quarantine and no rabies titer for a pet coming straight from the US. Your pet needs a microchip, a rabies vaccination in the right order, and an EU Animal Health Certificate endorsed by APHIS, then must arrive within 10 days of endorsement. See our EU pet health certificate page for the full process." },
        { q: "Is there anything France-specific beyond the EU rules?", a: "A little. There is no French tapeworm rule (that applies to Ireland, Finland and Malta, not France). After you settle in, France requires pets to be registered in its national I-CAD identification database, which a local vet can handle. Some guarding and attack dog breeds face extra French ownership rules, so check the French breed classification if that applies to you." },
        { q: "Do I need to quarantine my pet coming back to the US from France?", a: "No. A dog returning to the US from France is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details." }
      ],
      sources: {
        links: [
          { label: "True Trip Costs: the EU pet health certificate, the shared microchip, rabies and certificate process for all EU countries including France", url: "/eu-pet-health-certificate", type: "internal" },
          { label: "USDA APHIS: pet travel from the United States to France, the US-side steps and EU health certificate", url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-france", type: "gov" },
          { label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg", url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html", type: "gov" }
        ],
        judgment: "France applies the shared EU pet-entry framework, set by the EU and administered on the US side by APHIS, not by us. The process is stable in substance, though the EU certificate format changes on 1 October 2026, which we cover on the EU pet health certificate page. We point you to the official pages and dated this July 2026. Costs vary with your pet and route, so treat any figure as a starting point and confirm on the source."
      }
    },
    {
      slug: "tourist-tax",
      glance: [
        { k: "What", v: "Per-adult, per-night tax" },
        { k: "Collected", v: "By your accommodation" },
        { k: "Most of France", v: "About 1 to 6 euros a night" },
        { k: "Children under 18", v: "Exempt" }
      ],
      live: true,
      topic: "tourist-tax",
      title: "France's tourist tax (taxe de sejour) in 2026, and why Paris is now so much higher | True Trip Costs",
      description: "The per-adult, per-night tax France adds at your accommodation, not in the online price: how it works, why Paris and the Ile-de-France region stack surcharges that push it into the mid-teens in euros in 2026, and who is exempt. Checked Jul 2026.",
      h1: "France's tourist tax, and the Paris surcharges.",
      lede: "France adds a small per-adult, per-night tax to your stay, set by each town. In most places it is a euro or two. In Paris it is now much more, because the region stacks extra charges on top. Here is what to expect in 2026.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "France charges a <b>taxe de sejour</b>, a <b>per-adult, per-night</b> tax collected by your accommodation and set by each <b>commune</b>. <b>Children under 18 are exempt</b>. In most of France it is modest, roughly <b>1 to 6 euros</b> a night by accommodation category, and on the Riviera (Nice, Cannes) about <b>1.50 to 6 euros</b>. <b>Paris is the outlier</b>: since <b>1 January 2026</b> the base rate rose, and the Paris region adds a <b>200% surcharge for Ile-de-France transport</b> plus other add-ons, pushing the all-in figure into the <b>mid-teens in euros per adult, per night</b> at the top hotel categories, and up to about <b>15.93 euros</b> for an unclassified place. It is usually <b>not</b> in the price you booked, and is paid at the accommodation.",
      sections: [
        {
          h: "How it works, and who pays",
          icon: "calendar",
          key: { fig: "Per adult", tag: "Set by the town", text: "The taxe de sejour is a local tax voted by each commune, charged per adult per night and collected by your accommodation. Children under 18 pay nothing.", tone: "teal" },
          p: [
            "The taxe de sejour is a <b>local</b> tax, voted by each town or inter-communal body, so whether it applies and how much depends on where you stay. It is charged <b>per adult, per night</b>. <b>Under-18s do not pay</b>, which is the big difference from Italy and Spain, where the exemption is usually only for young children. Your accommodation collects it and passes it to the local authority; on Airbnb and Booking, the platform usually collects it for you.",
            "For a <b>classified</b> hotel the rate is a set amount per night by star level. For an <b>unclassified</b> or not-yet-rated place, it is instead <b>a percentage of the room price</b> (5% in Paris) per person, capped at the top rate. As with Italy, the charge is <b>rarely in the online total</b>, so expect it at check-in or checkout. For the broader money picture see the <a href=\"/france\">France money guide</a>."
          ]
        },
        {
          h: "Why Paris is now so much higher",
          icon: "alert",
          key: { fig: "+200%", tag: "The Paris surcharge", text: "Paris used to be a few euros a night. Now the Ile-de-France region adds a 200% surcharge on the base city rate to fund transport, so a Paris hotel tax runs well above the rest of France.", tone: "amber" },
          p: [
            "Paris used to cost a few euros a night. That changed. On top of the base city rate, the <b>Ile-de-France region</b> now adds a <b>200% surcharge</b> to fund regional transport, and there are further add-ons: a Grand Paris projects surcharge and a departmental surcharge. Stacked together, these can <b>more than triple</b> the base figure.",
            "The practical result for 2026 is that a night in a classified Paris hotel runs from roughly <b>6 euros at the mid-range</b> up toward the <b>mid-teens in euros</b> at 5-star and palace properties, <b>per adult, per night</b>. An <b>unclassified</b> Paris rental is charged at <b>5% of the nightly price</b>, capped at about <b>15.93 euros</b> per adult per night. Sources differ on the exact per-star numbers because of how the surcharges are applied, so treat these as a <b>2026 range</b> and confirm the figure with your hotel."
          ]
        },
        {
          h: "Elsewhere in France, and the coast",
          icon: "tag",
          key: { fig: "1-6 euros", tag: "Gentler outside Paris", text: "Away from Paris the tax is much gentler, roughly 1 to 6 euros per adult per night by accommodation category, with campsites and hostels at the low end.", tone: "teal" },
          p: [
            "Away from Paris the tax is much gentler. Most towns charge somewhere in the <b>1 to 6 euro</b> range per adult per night depending on the accommodation category, and campsites and hostels sit at the bottom, often about <b>1 euro</b>. On the <b>Riviera</b>, Nice and Cannes are around <b>1.50 to 6 euros</b>.",
            "A few departments beyond Paris (in the Alpes-Maritimes, Bouches-du-Rhone and Var, and some south-western departments) also add a regional surcharge, but nothing like the scale of the Paris region. Wherever you are, the <b>per-adult, per-night</b> shape is the same, and the amount is set locally."
          ]
        },
        {
          h: "Exemptions and keeping it small",
          icon: "euro",
          key: { fig: "Kids free", tag: "Built-in saving", text: "The clearest saving is built in: children under 18 pay nothing, so a family pays only for the adults. Seasonal workers and some social housing are also exempt.", tone: "teal" },
          p: [
            "The clearest saving is built in: <b>children under 18 pay nothing</b>, so a family pays only for the adults. People staying for <b>seasonal work</b> or in certain <b>emergency or social housing</b> are also exempt in most communes, and some places cap the charge, with Paris limiting it to a set amount per person per month for very long stays.",
            "There is no legitimate way to avoid the tax at a real property, and you should not try. As with Italy, the honest levers are a <b>lower accommodation category</b> and, in Paris specifically, understanding that the headline surcharge goes to the region's transport system, not to the hotel."
          ]
        }
      ],
      faqs: [
        { q: "How much is the Paris tourist tax in 2026?", a: "Roughly 6 euros per adult per night at a mid-range classified hotel, rising into the mid-teens in euros at 5-star and palace properties, after the 1 January 2026 increase and the Ile-de-France surcharges. An unclassified rental is charged at 5% of the nightly price, capped near 15.93 euros per adult per night. Children under 18 are exempt." },
        { q: "Do children pay the tourist tax in France?", a: "No. France exempts everyone under 18 from the taxe de sejour, so a family pays only for the adults. This is more generous than Italy or Spain, where the exemption is usually only for young children." },
        { q: "Why is the tourist tax in Paris so high now?", a: "On top of the base city rate, the Ile-de-France region adds a 200% surcharge to fund regional transport, plus a Grand Paris projects surcharge and a departmental surcharge. Stacked together they can more than triple the base amount, which is why Paris is far above the rest of France." },
        { q: "Is the taxe de sejour included in my hotel price?", a: "Usually not. It is generally collected at the accommodation at check-in or checkout, though on Airbnb and Booking the platform often collects it with your payment. Ask your hotel for the per-night amount so the final bill is no surprise." }
      ],
      sources: {
        links: [
          { label: "Service-Public.fr: the French government's 2026 taxe de sejour rates for Paris, including the Ile-de-France surcharge and the 15.93 euro cap", url: "https://entreprendre.service-public.gouv.fr/actualites/A17929?lang=en", type: "gov" }
        ],
        judgment: "France's tax is set by each commune, and Paris raised its rates on 1 January 2026 while stacking regional surcharges, so published per-star figures for Paris vary by source depending on how the surcharges are applied. The mechanics (per adult, under-18 exempt, 5% for unclassified, the 15.93 euro Paris cap) are from the French government page, and the euro ranges are a recent 2026 read. Confirm the exact amount with your accommodation. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Euro (EUR)" },
        { k: "Cards", v: "Card-first, contactless everywhere" },
        { k: "Backup", v: "A chip-and-PIN card for kiosks" },
        { k: "Cash for", v: "Bakeries and small stalls" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in France, or can I use cards? (2026) | True Trip Costs",
      description: "Barely any. France is card-first: tap almost everywhere, with a chip-and-PIN card as backup for unmanned machines. The catches: small spots set card minimums, skip the Euronet kiosks, and choose euros, not dollars. Checked Jul 2026.",
      h1: "Do I need cash in France, or can I use cards?",
      lede: "Short answer: card for almost everything, a little cash for bakeries and market stalls. France is firmly card-first, and contactless runs the day. The things to get right are a chip-and-PIN backup, the fee-heavy kiosk ATMs, and the dollar prompt.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Cards, almost entirely. France is <b>card-first</b>: <b>contactless</b> is everywhere, usually with no PIN under about <b>50 euros</b>, and Apple Pay and Google Pay are widely taken. Carry a <b>chip-and-PIN card</b> as backup for the odd unmanned machine (a toll, a station kiosk) that wants one. Keep <b>a little cash</b> for bakeries, open-air markets, village cafes and the occasional small shop with a <b>card minimum</b> around 5 to 10 euros. Two traps: avoid the standalone <b>Euronet and Travelex</b> ATMs, and always choose <b>euros, not dollars</b>.",
      sections: [
        {
          h: "Card-first, with a chip-and-PIN backup",
          icon: "phoneok",
          key: { fig: "Tap", tag: "Contactless default", text: "France runs on the Carte Bancaire network, and Visa and Mastercard ride on it almost everywhere. Contactless is the default, usually no PIN under about 50 euros. Carry a chip-and-PIN card for the odd unmanned kiosk.", tone: "teal" },
          p: [
            "France runs on the <b>Carte Bancaire</b> network, and in practice <b>Visa and Mastercard</b> ride on it and are taken almost everywhere. <b>Contactless</b> is the default, usually with <b>no PIN under about 50 euros</b>, and <b>Apple Pay and Google Pay</b> are widely accepted. The one thing worth carrying is a <b>chip-and-PIN card</b>: a few <b>unmanned machines</b>, such as autoroute toll booths, some train and metro kiosks and parking machines, expect a chip and PIN and may reject a tap or a swipe.",
            "Keep <b>a little cash and some coins</b> for the corners that stay cash-friendly: <b>bakeries</b>, open-air <b>markets</b>, small <b>village cafes</b>, public toilets, and the occasional small shop that sets a <b>card minimum</b> of around 5 to 10 euros. Shops also dislike notes above 50 euros, so break big notes at a supermarket."
          ]
        },
        {
          h: "The euro-versus-dollar trap, and the kiosk ATMs",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose euros", text: "When a terminal or ATM asks to charge in dollars or euros, pick euros. Dollars trigger dynamic currency conversion at a rate about 3 to 8% worse than your bank rate.", tone: "amber" },
          p: [
            "When a card terminal or an ATM asks whether to charge in <b>dollars or euros, always choose euros</b>. Choosing dollars triggers dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. Decline it every time, at terminals and machines alike.",
            "Avoid the <b>standalone Euronet and Travelex ATMs</b> at airports, stations and tourist squares. They charge high flat fees and push the dollar conversion hardest, and the fee can bite even after you decline the conversion. Use a machine <b>attached to a real bank</b>, BNP Paribas, Credit Agricole, Societe Generale or LCL, and read the fee on screen first."
          ]
        },
        {
          h: "Getting cash, and keeping the card route cheap",
          icon: "cash",
          key: { fig: "Bank ATM", tag: "By a branch, by day", text: "Use a bank-branch ATM in daylight, take a few days worth at once to limit per-visit fees, and use a debit card rather than credit to avoid cash-advance charges.", tone: "teal" },
          p: [
            "Use a <b>bank-branch ATM</b> in daylight, take out a few days' worth at once to limit per-visit fees, and use a <b>debit card</b> rather than a credit card, since a credit-card withdrawal is a cash advance with a fee and interest from day one. Carry a <b>no-foreign-fee card</b> plus a backup on a different network.",
            "As a rough guide, two mid-range travelers might pull <b>200 to 300 euros</b> of day-to-day cash across a week beyond the hotel, with cards covering the rest. France is genuinely card-first, so the cash is for small extras rather than the bulk of your spending. Watch pockets in the Paris metro and at busy sights."
          ]
        },
        {
          h: "Tipping and the city tax",
          icon: "tip",
          key: { fig: "Included", tag: "Service compris", text: "Tipping is light because service is included by law (service compris) and staff earn a full wage. For good service, round up. Your hotel collects the city tourist tax separately.", tone: "teal" },
          p: [
            "Tipping is light in France because <b>service is included by law</b> (service compris) and staff earn a full wage, so there is no US-style percentage to track. For good service you might round up or leave a euro or two, best left in <b>cash</b>, since the card-terminal tip prompt may be pooled or skipped. A small habit that saves money: ask for <b>une carafe d'eau</b>, free tap water, rather than paying for bottled.",
            "Separately, most French towns add a small <b>per-night tourist tax</b> (the taxe de sejour), collected at your accommodation, modest in most places and much higher in Paris. What it costs and why Paris is now steep is in <a href=\"/france/tourist-tax\">France's tourist tax</a>. For the wider picture, see the <a href=\"/france\">France money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in France?", a: "Not much. France is card-first, and contactless works almost everywhere, including Apple Pay and Google Pay. Keep some euros for bakeries, open-air markets, village cafes, tips and the occasional shop with a card minimum, but most spending can go on a card. Carry a chip-and-PIN card as backup for unmanned machines." },
        { q: "Will my US card work at French toll booths and station machines?", a: "Usually, if it has a chip and PIN. Contactless and chip-and-signature work at staffed terminals, but some unmanned machines, such as autoroute tolls, some train and metro kiosks and parking machines, expect a chip and PIN. So carry a card that has a PIN set as a backup, or use a staffed counter." },
        { q: "Should I pay in euros or dollars in France?", a: "Always euros. If a card machine or ATM offers to charge you in dollars, decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
        { q: "What ATM should I use in France?", a: "A machine attached to a real bank, such as BNP Paribas, Credit Agricole, Societe Generale or LCL. Avoid the standalone Euronet and Travelex kiosks at airports, stations and tourist squares, which charge high fees and push the dollar conversion. Always choose to be charged in euros." }
      ],
      sources: {
        links: [
          { label: "European Central Bank: the official euro reference exchange rates", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html", type: "gov" },
          { label: "US Department of State: France country information, including safety context relevant to ATM use", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/France.html", type: "gov" }
        ],
        judgment: "France is strongly card-first, but ATM and card fees vary by your own bank and the chip-and-PIN quirk at unmanned machines is fading rather than gone, so much of this is our practical read. The euro rate moves, and the firm rule is to decline dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "vat-refund",
      glance: [
        { k: "VAT rate", v: "20%" },
        { k: "Minimum", v: "Over 100 euros, one store, one day" },
        { k: "You net", v: "About 10 to 15%" },
        { k: "Validate", v: "At a PABLO kiosk on EU exit" }
      ],
      live: true,
      topic: "vat-refund",
      title: "France VAT refund (detaxe) for tourists (2026): the 100 euro minimum, PABLO, and what you get back | True Trip Costs",
      description: "Non-EU visitors can reclaim France's 20% VAT (detaxe) on goods over 100 euros in one store. How the PABLO kiosk validation works, who qualifies, and why operator fees leave you closer to 10 to 15%. Checked Jul 2026.",
      h1: "France's VAT refund (detaxe), and what you get back.",
      lede: "France charges 20% VAT, and non-EU visitors can claim some of it back on shopping through the detaxe scheme. It is fully digital via the PABLO kiosks, but operator fees mean the real refund is well under the headline. Here is how it works.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Yes, over a threshold. Non-EU visitors can reclaim France's <b>20% VAT</b> (the <b>detaxe</b>) on goods over <b>100 euros</b> bought in <b>one store on the same day</b>. Ask for a <b>tax-free form</b> with your passport at checkout, keep the goods <b>unused</b>, and scan the form's barcode at a <b>PABLO</b> kiosk when you leave the EU: a green screen means done, a red one sends you to a customs desk. After <b>operator fees</b> you net closer to <b>10 to 15%</b>, not the full 20%. You must be a <b>non-EU resident aged 16 or over</b>, and validate at your <b>final EU exit</b>.",
      sections: [
        {
          h: "Who qualifies, and the 100 euro minimum",
          icon: "receipt",
          key: { fig: "100 euros", tag: "One store, one day", text: "The detaxe is for non-EU residents aged 16 or over taking goods home unused. Since 2021 the minimum is over 100 euros spent in the same store on the same day.", tone: "teal" },
          p: [
            "The detaxe is for <b>non-EU residents aged 16 or over</b> taking goods home unused. Since 2021 the minimum has been <b>over 100 euros</b> spent in the <b>same store on the same day</b>. Only <b>goods</b> qualify, for personal use and carried out of the EU; <b>services</b> you use in France, hotels, restaurants, transport, do not, and the goods must be <b>new and unused</b> when you leave.",
            "Ask for the <b>tax-free form</b> (bordereau de detaxe) at the register, with your <b>passport</b>. If your individual receipts fall under 100 euros, apps like <b>ZappTax or Wevat</b> can combine purchases across shops onto one invoice to clear the threshold, which is the one legitimate way around the single-store rule."
          ]
        },
        {
          h: "PABLO: scan and go",
          icon: "qr",
          key: { fig: "Scan", tag: "Self-service kiosks", text: "France validates through PABLO, its self-service customs kiosks at CDG, Orly and other exit points. Scan the barcode on your form and a green screen means you are validated.", tone: "teal" },
          p: [
            "France validates through <b>PABLO</b>, its self-service customs kiosks at the airports and other exit points, including <b>Paris Charles de Gaulle and Orly</b>. You <b>scan the barcode</b> on your form: a <b>green</b> checkmark means it is validated and you head to your gate, while a <b>red</b> cross sends you to the customs desk (Bureau de douane) for a manual check, which is routine, not a problem.",
            "Do this <b>before you check bags</b>, since customs may want to see the goods, and <b>before security</b>. Look for the blue Detaxe or Tax Refund signs. Give yourself time at busy Paris airports, and note the goods must leave the EU by the <b>end of the third month</b> after purchase."
          ]
        },
        {
          h: "What you actually get back",
          icon: "coins",
          key: { fig: "10-15%", tag: "Not the full 20%", text: "The 20% VAT is the headline, but the refund operators, Global Blue, Planet and others, take a cut, so you typically net closer to 10 to 15% of the price.", tone: "amber" },
          p: [
            "The <b>20% VAT</b> is the headline, but the <b>refund operators</b> (Global Blue, Planet and others) take a cut, so you typically net closer to <b>10 to 15%</b> of the price. A <b>cash refund</b> at the airport is the quickest and pays the least; a refund <b>to your card</b> nets more but can take a few weeks.",
            "So the detaxe is worth the effort on a <b>real purchase</b>, but marginal on a small one once you weigh the queue and fees. If PABLO or customs is closed or out of order when you leave, France has a limited <b>after-the-fact process</b> you must follow within six months, but do not rely on it."
          ]
        },
        {
          h: "Validate at your final EU exit, and the rest of the picture",
          icon: "alert",
          key: { tag: "Validate at your EU exit", text: "As across the EU, you validate at your last EU departure point, not necessarily in France. If you connect through another EU country, scan PABLO or get the stamp there, not in France.", tone: "amber" },
          p: [
            "As across the EU, you <b>validate at your last EU departure point</b>, not necessarily in France. If you connect through another EU country on the way home, you scan PABLO or get the stamp <b>there</b>, then send the form back if needed.",
            "The detaxe is the shopping side of money in France. For the tax on your hotel bill, see <a href=\"/france/tourist-tax\">France's tourist tax</a>, and for paying day to day, <a href=\"/france/cash-or-card\">cash or card in France</a>. The wider picture is in the <a href=\"/france\">France money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "What is the minimum spend for a VAT refund in France?", a: "Over 100 euros in one store on the same day, in place since 2021. Only goods for personal use qualify, taken out of the EU unused. If your receipts are individually under 100 euros, apps like ZappTax or Wevat can combine purchases across shops onto one invoice to reach the threshold." },
        { q: "How much VAT do I actually get back in France?", a: "Less than the 20% headline. After the refund operators take their cut, you typically net closer to 10 to 15% of the price. A cash refund at the airport is quickest and pays the least; a refund to your card nets more but can take a few weeks." },
        { q: "What is PABLO in France?", a: "PABLO is France's self-service customs kiosk system for validating a tax-free form. You scan the form's barcode at the airport: a green checkmark means it is validated, a red cross sends you to the customs desk for a manual check. Do it before checking bags and before security, with the goods accessible." },
        { q: "Who can claim the detaxe in France?", a: "Non-EU residents aged 16 or over, visiting for less than six months, taking new and unused goods home. What matters is your country of residence, not the passport you hold, so you may need to show proof of non-EU residence at the till. Services like hotels and meals do not qualify." }
      ],
      sources: {
        links: [
          { label: "French Customs (Douane): the official detaxe and PABLO rules, including the over-100-euro threshold and eligibility", url: "https://www.douane.gouv.fr/en/fiche/tax-exemption-france-tourists-pablo", type: "gov" },
          { label: "Expatica: a 2026 explainer on claiming the French detaxe and what to do if PABLO fails", url: "https://www.expatica.com/fr/finance/taxes/vat-refund-france-2173730/", type: "guide" }
        ],
        judgment: "The 20% rate, the over-100-euro threshold, the non-EU-resident-16-plus rule and the PABLO validation are from the French Customs guidance. The net-refund figure is a market estimate after operator fees and varies by operator and payout method, so treat 10 to 15% as a guide. Checked July 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Strong in cities and towns" },
        { k: "Carrier roaming", v: "About $12 a day" },
        { k: "Cheapest", v: "A travel eSIM, a few $ per GB" },
        { k: "Signal gaps", v: "Mountains and deep countryside" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "Staying connected in France (2026): the eSIM math, and where the Alps lose signal | True Trip Costs",
      description: "France's coverage is excellent in cities and towns, so it is a cost question. Your US carrier charges about 12 dollars a day to roam; a Nomad eSIM is a few dollars per gigabyte. Expect gaps in the mountains. Checked Jul 2026.",
      h1: "Staying connected in France.",
      lede: "France is well covered where you will be, from Paris to the villages, so the real decision is how you pay for data. For most US travelers an eSIM is far cheaper than the carrier day pass. Here is the math, and the few places signal drops.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Coverage is <b>strong</b> across cities and towns, so this is mostly a cost question. Your US carrier charges about <b>12 dollars a day</b> to roam in France (<b>AT&amp;T and Verizon</b> day passes), and <b>T-Mobile</b>'s included roaming is often <b>slow 2G</b>, fine for messages but not maps. A <b>Nomad eSIM</b> is a few dollars per gigabyte, activates before you fly and works from landing, so for a data-first trip it is the cheapest option. Expect <b>weaker signal in the mountains</b> (the Alps and Pyrenees) and deep rural areas. Never roam <b>pay-per-use</b>, which runs about 2 dollars a megabyte.",
      sections: [
        {
          h: "A cost question first",
          icon: "roamfee",
          key: { fig: "$12/day", tag: "Roaming default", text: "Coverage is good where visitors go, so this is mainly about cost. A US carrier day pass runs about $12 a day, and T-Mobile included roaming is often slow 2G, fine for messages but not maps.", tone: "teal" },
          p: [
            "France has good mobile coverage across the places visitors go, so the main decision is how you pay. The expensive default is roaming on your US plan: <b>AT&amp;T and Verizon</b> charge about <b>12 dollars a day</b>, roughly <b>84 dollars</b> for a week. <b>T-Mobile</b> and some Google Fi and Visible plans include roaming, but often at <b>slow 2G-style speeds</b> that handle messaging but struggle with maps and rideshare, so check your plan's fine print.",
            "Whatever you pick, do not roam with <b>no plan</b>. Pay-per-use data is around <b>2 dollars a megabyte</b>, thousands per gigabyte, and phones use data in the background, so <b>turn off data roaming</b> until an eSIM or pass is active."
          ]
        },
        {
          h: "Why an eSIM is usually cheapest",
          icon: "tag",
          key: { fig: "Few $/GB", tag: "The cheap option", text: "A travel eSIM is the cheapest way to get real data in France, a few dollars per gigabyte, well under day-pass fees. A Nomad eSIM activates before you fly and works on arrival.", tone: "teal" },
          p: [
            "A <b>travel eSIM</b> is the cheapest way for most visitors to get real data in France. A <b>Nomad eSIM</b> is a few dollars per gigabyte, well under day-pass fees, <b>activates before you fly</b> and works from landing, with no SIM counter. Your US number stays reachable on your normal plan while the eSIM carries the data.",
            "The network barely matters where you will be: a Nomad eSIM rides a <b>major French network</b>, and coverage in the cities and towns is strong on all of them. Set it up before departure, since installing it needs a connection."
          ]
        },
        {
          h: "Where signal drops, and the practical bits",
          icon: "alert",
          key: { fig: "The Alps", tag: "Where signal thins", text: "Gaps are in the mountains and deep countryside: parts of the Alps and Pyrenees, the remote Massif Central, and some rural roads and small villages. In Paris and the towns you are fine.", tone: "teal" },
          p: [
            "The gaps are in the <b>mountains and deep countryside</b>: parts of the <b>Alps and Pyrenees</b>, the remote Massif Central, and some rural roads and small villages. In Paris and the towns you will have fast 4G and 5G, but an alpine hike or a back-road drive can lose signal, and the Paris Metro has coverage on most, not all, lines.",
            "So <b>download offline maps</b> before a mountain day or a rural drive. For paying as you go, see <a href=\"/france/cash-or-card\">cash or card in France</a>, and the <a href=\"/france\">France money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need an eSIM for France?", a: "For most US travelers it is the cheapest way to get real data. France's coverage is strong in cities and towns, so it is a cost question: a Nomad eSIM is a few dollars per gigabyte, versus about 12 dollars a day for an AT&T or Verizon roaming pass. Set it up before you fly and it works from landing." },
        { q: "How much does it cost to use my US phone in France?", a: "About 12 dollars a day on an AT&T or Verizon day pass, so roughly 84 dollars a week. T-Mobile and some other plans include roaming but often at slow 2G speeds. Never roam with no plan, since pay-per-use runs about 2 dollars a megabyte." },
        { q: "Will I have signal in the French Alps?", a: "Not always. Coverage is strong in cities and towns, but parts of the Alps and Pyrenees and the remote Massif Central have gaps. Download offline maps before a mountain hike or a back-road drive, whatever network or eSIM you use." },
        { q: "Is an eSIM or a local SIM better for France?", a: "An eSIM is simpler for most visitors: no SIM counter and it works from landing if you set it up beforehand. A physical French SIM can suit very heavy, long-stay use, but for a normal trip a Nomad eSIM is more convenient, and coverage is strong either way." }
      ],
      sources: {
        links: [
          { label: "US Department of State: France country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/France.html", type: "gov" },
          { label: "Tom's Guide: a 2026 comparison of US carrier international roaming plans and day-pass prices", url: "https://www.tomsguide.com/us/wireless-carriers-international-travel-plans,review-4327.html", type: "guide" }
        ],
        judgment: "Carrier prices and inclusions change with your exact plan, so treat the day-pass figures as a July 2026 snapshot and check your own plan. The steady points are that French coverage is strong where visitors go, that a day pass is the pricey default, and that signal thins in the mountains and deep countryside."
      }
    },
    {
      slug: "renting-a-car",
      glance: [
        { k: "Tolls", v: "Autoroute, by the kilometer" },
        { k: "Long drive", v: "50 to 90 euros in tolls" },
        { k: "City centers", v: "Need a Crit'Air sticker" },
        { k: "License", v: "US license OK, IDP recommended" }
      ],
      live: true,
      topic: "driving",
      carExcess: true,
      title: "Renting a car in France (2026): autoroute tolls, the Crit'Air sticker, and the insurance excess | True Trip Costs",
      description: "France's autoroute tolls add up (a long drive can top 50 to 90 euros), city low-emission zones need a Crit'Air sticker, and your US card usually will not cover you. Skip the counter's excess cover for a cheaper standalone policy. Checked Jul 2026.",
      h1: "What does renting a car in France really cost?",
      lede: "France is a joy to drive, with quiet back roads and superb motorways, and the motorways are where the meter runs. The costs to plan for are per-kilometer tolls, the low-emission sticker some cities require, and getting the insurance right before the counter.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "France is straightforward to rent in, with a few real costs. The <b>autoroute</b> motorways are tolled <b>by the kilometer</b> (about <b>0.10 to 0.13 euros per km</b>), so a long north-south drive can run <b>50 to 90 euros or more</b> in tolls; pay by <b>card or cash</b> at the booth. Many city centers are <b>low-emission zones (ZFE)</b> that require a <b>Crit'Air sticker</b>; most rentals already have one, but <b>confirm at pickup</b>, since driving in a ZFE without it risks a <b>68 euro fine</b>. Your <b>US card and policy generally do not cover you in Europe</b>, so decline the counter's pricey excess reduction and buy a <b>cheaper standalone excess policy</b>. A US license is accepted for short visits, though an <b>IDP is recommended</b>.",
      sections: [
        {
          h: "Tolls: paid by the kilometer",
          icon: "euro",
          key: { fig: "50-90€", tag: "Autoroute peage", text: "France has the largest toll-motorway network in Western Europe, charged per kilometer at barriers, not by vignette. A long north-south drive can run 50 to 90 euros, paid by card or cash.", tone: "teal" },
          p: [
            "France has the largest toll-motorway network in Western Europe, and unlike Switzerland or Austria it uses <b>per-kilometer tolls (peage)</b> at barriers, not a windshield vignette. Reckon on about <b>0.10 to 0.13 euros per kilometer</b> for a car, highest on the southern routes, so a long drive adds up fast: <b>Paris to Lyon</b> is around <b>40 euros</b> in tolls alone, and Paris toward the Riviera can be <b>double that</b>.",
            "You pay at the booth by <b>card</b> (Visa and Mastercard work almost everywhere, Amex less so) or <b>cash</b> at manned lanes, or with a <b>Liber-t or Ulys tag</b> for the fast telepeage lanes. Free non-motorway routes exist and are prettier but much slower. Note that on a few peak summer weekends, tolls on the busiest southern corridors can be <b>30 to 50 percent higher</b> in the middle of the day."
          ]
        },
        {
          h: "Crit'Air and the low-emission zones",
          icon: "alert",
          key: { tag: "Crit'Air sticker", text: "Many French cities run a low-emission zone (ZFE) where vehicles must display a Crit'Air sticker classifying emissions. Paris, Lyon, Grenoble and others enforce it, so order the sticker before you drive in.", tone: "amber" },
          p: [
            "Many French cities now run a <b>low-emission zone (ZFE)</b>, where vehicles must show a <b>Crit'Air sticker</b> classifying their emissions. The zones in force in 2026 include <b>Paris, Lyon, Grenoble, Strasbourg, Marseille, Montpellier, Rouen, Nice and others</b>. Driving in a ZFE without a valid sticker risks a fine of about <b>68 euros</b>.",
            "The good news for renters: agencies have mostly <b>modern, low-emission fleets that already carry the correct sticker</b>, so this is rarely a problem in practice. Still, <b>ask at pickup</b> whether your car has the right Crit'Air sticker for the cities on your route, and do not assume an older car is fine everywhere."
          ]
        },
        {
          h: "Insurance: decline the counter, cover the excess",
          icon: "receipt",
          key: { fig: "Cover it", tag: "US cover does not apply", text: "As across Europe, your US auto policy and credit-card collision generally do not apply in France, so you need some collision protection. The rental comes with a high excess.", tone: "teal" },
          p: [
            "As across Europe, your <b>US auto policy and credit-card collision cover generally do not apply in France</b>, so you need some collision protection. The rental comes with a <b>high excess</b> (what you owe for damage), often <b>800 to 1,500 euros</b>, and the counter will push a costly daily fee to reduce it.",
            "The cheaper path is to <b>decline the counter's excess reduction</b> and hold a <b>standalone excess policy</b> bought ahead, which reimburses the excess for far less. That is what the option on this page covers. A credit card in the main driver's name is needed for the <b>deposit hold</b>."
          ]
        },
        {
          h: "Paperwork, parking and the extras",
          icon: "passport",
          key: { fig: "License OK", tag: "IDP recommended", text: "France recognizes a US license for short tourist visits, so a permit is not strictly required, though an International Driving Permit is recommended as an official translation.", tone: "teal" },
          p: [
            "France recognizes a <b>US license for short tourist visits</b>, so a permit is not strictly required, but an <b>International Driving Permit is recommended</b> as an official translation and some agencies prefer to see one, so it is cheap insurance against a hassle. Rental cars must carry a <b>reflective vest and warning triangle</b> (they usually do; check).",
            "In town, <b>blue-zone</b> parking needs a cardboard time disc, and <b>metered</b> street parking left unpaid triggers a fixed penalty (commonly <b>17 to 75 euros</b>). One-way drops and under-25 drivers cost extra, and supermarket rental desks (Leclerc, U Location) can undercut the big brands. For paying day to day, see <a href=\"/france/cash-or-card\">cash or card in France</a>, and the <a href=\"/france\">France money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "How much are the tolls to drive in France?", a: "Autoroutes are tolled by the kilometer, about 0.10 to 0.13 euros per km for a car, so a long drive adds up: Paris to Lyon is around 40 euros in tolls, and Paris toward the Riviera can be double that. Pay by card or cash at the booth, or use a Liber-t tag for the fast lanes. Slower free routes exist." },
        { q: "Do I need a Crit'Air sticker for a rental car in France?", a: "If you drive into a city low-emission zone (ZFE) such as Paris, Lyon or others, the car needs a Crit'Air sticker, or you risk about a 68 euro fine. Most rental cars are newer and already carry the correct sticker, but confirm at pickup that yours is right for the cities on your route." },
        { q: "Do I need an International Driving Permit for France?", a: "Not strictly for a short tourist visit, since France recognizes a valid US license, but an IDP is recommended as an official translation and some rental agencies prefer to see one. It is cheap and quick to get from AAA in the US, so it is worth carrying to avoid any hassle at the counter." },
        { q: "Does my US insurance cover a rental car in France?", a: "Generally no. Unlike in Canada, US auto policies and credit-card collision cover usually do not apply in Europe, so you need collision protection in France. Rather than pay the counter's steep excess-reduction fee, a standalone excess policy bought in advance covers the rental's high excess for less." }
      ],
      sources: {
        links: [
          { label: "US Department of State: France country information and road travel guidance", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/France.html", type: "gov" },
          { label: "Selectra: a 2026 guide to renting a car in France, including tolls and the ZFE Crit'Air rules", url: "https://en.selectra.info/moving-to-france/driving/car-rental", type: "guide" }
        ],
        judgment: "Toll rates, the Crit'Air fine and parking penalties are current for 2026 but vary by route, city and company, and ZFE rules can change, so treat the figures as typical ranges and confirm your car's Crit'Air sticker and the all-in price at pickup. The steady advice is to budget tolls, confirm the sticker, and cover the insurance excess before the counter. Checked July 2026."
      }
    }
  ]
};
