export default {
  slug: "iceland",
  iso2: "is",
  live: true,
  name: "Iceland",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-07",
  sources: {
    changed: "Sources added on first publish, checked July 2026. Confirmed that Iceland (outside the EU, its own krona) charges VAT of 24% on most things and a reduced 11% on accommodation, food and books, all already in the price, and that non-residents can reclaim VAT on goods over 12,000 ISK in one store, worth up to about 14% after fees. The nightly lodging tax (gistinattaskattur) rose to 800 ISK per room at the start of 2025 (from 600 ISK), with 400 ISK for campsites. We also flag the per-kilometre road tax that started on 1 January 2026, which mostly affects rental-car drivers.",
    links: [
      { label: "Skatturinn (Iceland Revenue and Customs): the lodging tax, 800 ISK for hotels and 400 ISK for campsites per night", url: "https://www.skatturinn.is/english/companies/tax-issues/lodging-tax/", type: "revenue" },
      { label: "Skatturinn: the VAT-free refund for visitors, the 12,000 ISK minimum and how to claim it at Keflavik", url: "https://www.skatturinn.is/english/individuals/customs-matters/travelling-to-iceland/tax-free-vat-refund/", type: "revenue" },
      { label: "Visit Reykjavik: tax-free shopping, the 12,000 ISK minimum and the refund desk at the airport", url: "https://visitreykjavik.is/tax-refund", type: "tourism" },
      { label: "Blue Car Rental: driving costs, tolls, parking fees and the 2026 per-kilometre road tax", url: "https://www.bluecarrental.is/blog/iceland-travel-tips-taxes-vat-refunds-ways-to-save/", type: "guide" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "112", note: "112 is Iceland's single emergency number, reaching police, ambulance, fire and search-and-rescue from any phone, even with no SIM or credit. Operators speak English. There is also a free 112 Iceland app that can send your GPS location to responders, worth having if you head into the backcountry.", checked: "Jul 2026", checkedISO: "2026-07-07" },
  insuranceLevel: "low",
  rentalCommon: true,
  region: "Europe",
  signals: { cardFriendliness: 5, cashNeed: 1, taxRisk: 3 },
  hook: "Maybe the most cashless country on earth: tap for everything, carry almost no cash, decline dollar conversion, and budget for very high prices plus a small nightly lodging tax.",
  aliases: ["iceland", "reykjavik", "keflavik", "kef", "golden circle", "ring road", "blue lagoon", "akureyri", "vik", "icelandic krona", "isk", "krona", "kronur", "lopapeysa"],

  title: "Money in Iceland (2026): Cards, Cash, ATMs, VAT and the Lodging Tax | True Trip Costs",
  description: "How to handle money in Iceland as a US traveler in 2026: why it is one of the most cashless countries anywhere, why it is krona and not euros, the dollar-conversion trap, bank ATMs, the 24% VAT you can partly claim back on shopping, the small nightly lodging tax, and the new per-kilometre road tax for rental cars. Checked July 2026.",

  h1: "Money in Iceland, sorted.",
  lede: "A calm, current plan for the money side of your trip: why you can go the whole way without cash, why it is krona and not euros, the shopping tax you can claim back, the small nightly lodging tax, and the new road tax that can surprise anyone renting a car.",
  hero: {
    img: "/iceland-hero.jpg",
    h: 1375,
    alt: "A quiet Reykjavik street lined with pastel corrugated-iron houses under a pale northern sky, a lone figure in a patterned Icelandic wool sweater walking away down the lane, a person walking a dog in the distance, and a steaming enamel mug of coffee beside a pair of hand-knitted wool mittens on a low stone wall in the foreground"
  },

  recentChange: {
    date: "Jul 2026",
    text: "From 1 January 2026 Iceland replaced part of its fuel tax with a per-kilometre road tax on all vehicles. The government rate is about 6.95 ISK per km, but rental companies typically add an admin margin (often around 8.8 ISK per km), so a full Ring Road loop of roughly 1,500 km can add about 13,200 ISK (around 105 dollars), usually billed to your card after you drop the car off. Separately, the nightly lodging tax rose to 800 ISK per hotel room in 2025."
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Iceland is about as <b>cashless as travel gets</b>: cards, tap, Apple Pay and Google Pay work almost everywhere, from a Reykjavik cafe to a remote guesthouse, and you can complete a whole trip without touching a banknote. Bring a <b>no-foreign-fee Visa or Mastercard</b>, keep maybe <b>3,000 to 5,000 ISK</b> as a just-in-case backup, and if you do need more, pull it from a <b>bank ATM</b> (Landsbankinn, Islandsbanki or Arion), declining any offer to charge you in dollars. Two things actually matter here. First, it is <b>krona, not euros</b> (Iceland is not in the EU or the eurozone), so do not arrive with euros. Second, it is <b>genuinely expensive</b>, so the real budgeting is padding your daily number, not managing cash. A small <b>nightly lodging tax</b> (about 800 ISK a room) is added to hotel stays, and if you are <b>renting a car to tour</b>, the new per-kilometre road tax is the cost to watch (below). Always choose ISK, never dollars, and tipping is basically not a thing.",

  meter: {
    heading: "About as cashless as anywhere on earth; the real cost is the prices.",
    cashPct: 5,
    note: "A rough feel for everyday spending. Cards and contactless cover essentially everything: hotels, restaurants, fuel, tours, museums, even tiny rural stops and honesty-box farm stands increasingly take cards. Cash is a small just-in-case backup, nothing more. The thing to plan for is not cash at all, it is how much everything costs, so pad your daily budget rather than your wallet."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are near-universal, with contactless and Apple or Google Pay standard, on fuel pumps, in cafes, on tours and at remote guesthouses. Amex is accepted at bigger hotels and shops but is patchier, so bring a Visa or Mastercard as your main card. A no-foreign-fee card covers the whole trip.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "You barely need any", p: "Iceland is one of the most cashless countries anywhere. Keep maybe 3,000 to 5,000 ISK for a rare cash-only moment, but many visitors never use it. Do not change a big pile of dollars into krona; you will struggle to spend it and lose money on the way back.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Use a bank machine, rarely", p: "If you want a little cash, use a <b>bank ATM</b> (Landsbankinn, Islandsbanki, Arion), common in Reykjavik and towns but thin in the countryside. Read the on-screen fee, take a small amount, and always <b>decline \"convert to US dollars.\"</b> Your own bank's foreign-ATM fee usually matters more than the machine's.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> with contactless for nearly everything, plus a backup card from a different bank.",
      "Get a <b>no-foreign-fee debit card</b> (Charles Schwab, Wise or Revolut) for the rare cash you might pull, though you may never need it.",
      "Renting a car to tour? Sort the <b>insurance</b> and read the fine print: gravel and sand-and-ash protection matter here, and the new <b>per-kilometre road tax</b> is billed after you return the car (see below).",
      "You do not need travel insurance for money reasons, but standard travel medical cover is always sensible, especially if you plan to hike or drive the Highlands."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters at Keflavik. You can start tapping your card immediately, including for the Flybus or a rental car.",
      "If you want a little cash, pull it from a <b>bank ATM</b> and <b>decline \"convert to dollars.\"</b> A small amount goes a long way, since you will rarely spend it.",
      "Set up an <b>eSIM</b> before you land (Airalo, Nomad, or a Siminn prepaid plan). Coverage is strong around Reykjavik, towns and the Ring Road, thinner in the interior Highlands.",
      "Doing the <b>VAT refund</b> on the way out? Get forms stamped and refunded at the desk in the arrivals hall before you check bags, not after."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card or phone</b> for everything: fuel, food, tours, museums and admissions.",
      "Prices already <b>include VAT</b>, so the number on the tag or menu is what you pay.",
      "Driving? Download the <b>parking apps</b> (Parka, EasyPark) before your first stop, since many popular sites charge for parking with no booth, only a camera.",
      "<b>Always choose ISK</b>, never dollars, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "denom", when: "A golden rule", bullets: [
      "<b>It is krona, not euros, and always pay in krona.</b> Choosing dollars (dynamic currency conversion) quietly adds 3 to 8%, and euros do not spend here.",
      "<b>Budget high.</b> A coffee, a bowl of soup or a short tour all cost more than you expect, so plan a bigger daily number than almost anywhere else in Europe."
    ], cta: null }
  ],

  cash: {
    rate: 126, cur: "ISK", round: 1000, defaultIndex: 1,
    rateNote: "Rough guide at about 126 krona to the dollar in mid-2026, so 1,000 ISK is roughly 8 dollars and 10,000 ISK about 79. Iceland is card-first, so this is the tiny cash-in-hand slice of your spending, not your whole budget.",
    styles: [
      { n: "Budget", per: 70, cash: 0.08, room: 130 },
      { n: "Mid-range", per: 160, cash: 0.05, room: 230 },
      { n: "Comfort", per: 280, cash: 0.03, room: 400 }
    ]
  },

  connectivity: {
    works: "Strong in and around Reykjavik, the towns and most of the Ring Road, where you will have solid 4G and wide 5G. The three networks are Siminn (the widest reach), Vodafone Iceland and Nova. Coverage thins in the interior Highlands, some fjords and mountain passes, so expect dead zones if you go off the ring. A prepaid SIM is cheap, and eSIMs from Airalo, Nomad or Siminn are the easy route. Your US plan may include some roaming, so check the rate first. You do not need mobile data to pay by card, but you will want it for maps, weather and road conditions, and the 112 app is worth having for safety in remote areas."
  },

  // LODGING TAX (gistinattaskattur), verified against Skatturinn to Jul 2026. It is a flat
  // per-unit, per-night charge on top of the price, not a percentage: 800 ISK for hotels and
  // guesthouses, 400 ISK for campsites and motorhome pitches, and 400 ISK per passenger for
  // cruise ships on domestic voyages. It rose from 600 ISK for hotels at the start of 2025 and
  // is often not shown in the online room price, so it can appear at check-in or checkout. VAT
  // is separate and already in prices.
  tax: {
    unit: "flatPerNight",
    currency: "ISK",
    capNights: null,
    taxLabel: "Lodging tax",
    note: "Iceland charges a flat lodging tax (gistinattaskattur) per room or unit, per night, added on top of the price rather than as a percentage. It rose to 800 ISK a hotel room at the start of 2025 and is often left out of the online price, so it can turn up at check-in or checkout. Campsites and motorhome pitches are 400 ISK a night, and cruise ships on domestic voyages are 400 ISK per passenger, per night. VAT is separate and already included in prices.",
    regions: [
      { key: "hotel", label: "Hotels and guesthouses", rate: 800, note: "Hotels, guesthouses and similar licensed stays are charged 800 ISK per room, per night, on top of the room price. This is per room, not per person, so it does not double for two travelers sharing." },
      { key: "camp", label: "Campsites and motorhome pitches", rate: 400, note: "Campsites and pitches for motorhomes, caravans and campervans are charged 400 ISK per night, per unit." }
    ]
  },

  currencyHeading: "The Icelandic krona, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "Iceland uses the krona (ISK). At about 126 krona to the dollar in mid-2026, 1,000 ISK is roughly 8 dollars, 5,000 ISK about 40, and 10,000 ISK about 79. Prices already include VAT, so the figure on the tag or menu is what you pay." },
    { sym: "smallnotes", k: "Notes and coins", v: "Notes run 500, 1,000, 2,000, 5,000 and 10,000 kronur; coins are 1, 5, 10, 50 and 100 kronur. You will rarely handle any of it, since almost everything goes on a card." },
    { sym: "denom", k: "It's kronur, not euros or dollars", v: "Iceland is not in the EU or the eurozone, so the currency is the Icelandic krona. Euros and dollars are not accepted in normal shops, and there is no reason to carry them; your card handles everything." },
    { sym: "tip", k: "Tipping is not expected", v: "Service is included and there is no tipping culture. Rounding up or leaving a little for exceptional service is a kind gesture, never an obligation. See the tipping section below." }
  ],

  taxfree: {
    label: "Taxes, refunds and the lodging tax",
    heading: "High prices with tax in them, money back on shopping, and a small nightly tax.",
    text: "Iceland is expensive, and <b>VAT is already in the price</b>: 24% on most things, a reduced 11% on accommodation, food, books and some transport and culture, so the tag or menu figure is what you pay. The win worth acting on: as a <b>non-resident you can reclaim the VAT on goods</b> you buy to take home, on receipts of at least <b>12,000 ISK</b> in a single store. Ask for a tax-free form at the till, keep the goods handy, and get it validated and refunded at the desk in the <b>arrivals hall at Keflavik before you check your bags</b>; after fees you get back roughly <b>up to 14%</b>. It covers goods only, not hotels, tours, restaurant meals, fuel or groceries, and you have three months to claim. Separately, a small <b>nightly lodging tax</b> is added to stays: about <b>800 ISK per hotel room</b> a night (400 ISK for campsites), often not shown in the online price. And if you are <b>renting a car</b>, budget the new <b>per-kilometre road tax</b> (below), parking-app fees at popular sites, and the one toll tunnel near Akureyri (Vadlaheidargong), which is paid online by plate.",
  },

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Card terminals and ATMs may offer to charge you in dollars (dynamic currency conversion), which quietly adds 3 to 8%. Choose krona every time, and never bring euros expecting to spend them.",
    "<b>It is an expensive country, so budget up.</b> A coffee, a quick lunch, a beer or a short tour all cost more than you expect. Plan a higher daily number than for almost anywhere in Europe and it will not sting.",
    "<b>The rental-car road tax is the 2026 surprise.</b> Since 1 January 2026 a per-kilometre road tax applies to all vehicles. Rental firms often add an admin margin (around 8.8 ISK per km), and a Ring Road loop can add roughly 13,200 ISK, billed to your card after you return the car. Ask your agency whether it charges per kilometre or a flat daily rate before you drive off.",
    "<b>Parking and tolls sneak up on drivers.</b> Many popular sites (waterfalls, national parks) charge for parking with no booth, only a camera, so use the Parka or EasyPark app. The Vadlaheidargong tunnel near Akureyri is a barrier-free toll paid online. Unpaid parking or tolls get billed to your rental with an added admin fee.",
    "<b>Do the VAT refund at Keflavik before you check bags.</b> The refund on goods needs validation at the desk in the arrivals hall, and it covers goods only, not hotels, tours, meals or fuel. Keep receipts and forms handy and allow time; refunds can take a few weeks by card."
  ],

  tippingHeading: "Not expected: service is included.",
  tipping: "Tipping in Iceland is genuinely not a thing, so you can relax about it. Wages are decent and service is included, so there is <b>no expectation to tip</b> at restaurants, bars or cafes, and no card-terminal tip prompt culture as in North America. If service was exceptional, rounding up the bill or leaving a small amount is a warm gesture, never an obligation. <b>Taxis</b> are not tipped; just pay the fare. For a <b>private guide or driver</b> who makes your day, especially on a long tour, a tip is appreciated but still optional, and cash is easiest if you want to give one. In short, do not budget for tips here the way you would at home.",

  faqs: [
    { q: "Do I need cash in Iceland?", a: "Barely, if at all. Iceland is one of the most cashless countries anywhere: cards, tap and mobile wallets work almost everywhere, including fuel pumps, tours and remote guesthouses. Keep maybe 3,000 to 5,000 ISK as a just-in-case backup, but many visitors never spend it. Do not exchange a big pile of dollars into krona." },
    { q: "Should I pay in krona or dollars in Iceland?", a: "Always krona. If a card terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion adds roughly 3 to 8%. Choosing krona lets your own card handle the exchange at a fairer rate. Euros are not accepted in normal shops either, so do not bring them." },
    { q: "What is the best ATM to use in Iceland?", a: "A bank ATM: Landsbankinn, Islandsbanki or Arion. They are common in Reykjavik and towns but thin in the countryside, so pull a little when you see one if you want cash. Read the on-screen fee, take a modest amount, and always decline the dollar conversion. Your own bank's foreign-ATM fee usually matters more than the machine's." },
    { q: "How much does the lodging tax cost in Iceland?", a: "About 800 ISK per hotel room, per night (roughly 6 dollars), added on top of the room price; campsites are 400 ISK a night. It is charged per room, not per person, so it does not double for two people sharing. It rose from 600 ISK at the start of 2025 and is often left out of the online booking price, so it can appear at check-in or checkout." },
    { q: "Can I get a VAT refund on shopping in Iceland?", a: "Yes, if you live outside Iceland. You can reclaim the VAT on goods you take home, on receipts of at least 12,000 ISK in a single store. Ask for a tax-free form at the till, then validate and collect at the refund desk in the arrivals hall at Keflavik before you check your bags. After fees you get back roughly up to 14%. It covers goods only, not hotels, tours, meals, fuel or groceries." },
    { q: "Why is Iceland so expensive, and how much should I budget?", a: "High wages, remoteness and heavy import costs make almost everything pricey, from coffee to car hire. For everyday spending beyond your hotel, very roughly 15,000 to 25,000 ISK a day per person (about 120 to 200 dollars) is a realistic mid-range figure, mostly on card. The fix is to budget a higher daily number than elsewhere, and if you drive, add the new per-kilometre road tax and parking fees." }
  ],

  culture: {
    heading: "A few words of Icelandic go a long way",
    intro: "Icelandic has barely changed in a thousand years, so Icelanders can still read the old sagas, and a friendly Takk and a story or two mark you as a guest rather than a tourist.",
    phrases: [
      { mean: "Hello", say: "HAL-loh", word: "Halló" },
      { mean: "Thank you", say: "tahk", word: "Takk" },
      { mean: "Yes", say: "yow", word: "Já" },
      { mean: "Cheers", say: "skowl", word: "Skál" },
      { mean: "Good, tasty", say: "goht", word: "Gott" },
      { mean: "Bye, informal", say: "bless", word: "Bless" },
    ],
    tip: "Iceland was settled by Norse and Celtic voyagers over a thousand years ago, and the medieval <b>sagas</b> that tell their story are still read today. The language has changed so little that many Icelanders can trace their family right back to the settlers. A warm <b>Takk</b> for thank you goes a long way.",
    stories: [
      { img: "/iceland-culture-1.jpg",
        alt: "WPA-style illustration of a crowd of Norse chieftains and free folk with shields, spears and banners assembled among dramatic basalt cliffs on an open plain for the Althing",
        h: "The world's oldest parliament",
        p: "In the year 930, the chieftains of Iceland gathered on the plain at Thingvellir to make laws and settle disputes together, founding the Althing, the oldest parliament in the world still going. For two weeks each summer the whole island came to camp, trade and hear the law read aloud. It meets to this day in Reykjavik.",
        note: "Good to know: the Althing dates from the year 930" },
      { img: "/iceland-culture-2.jpg",
        alt: "WPA-style illustration of a Viking longship with a striped sail and a carved prow sliding onto a black volcanic sand beach as settlers wade ashore with chests and livestock, green cliffs behind",
        h: "A land settled by sea",
        p: "The first settlers came to this remote island in open Viking ships, carrying their families, livestock and everything they owned across the cold North Atlantic. They landed on black volcanic sands beneath green cliffs and built a new nation from scratch. Their voyages and feuds became the sagas.",
        note: "Good to know: the settlement began around the year 870" },
      { img: "/iceland-culture-3.jpg",
        alt: "WPA-style illustration of an elder telling a story by a hearth fire inside a turf longhouse at night, listeners of all ages gathered close on benches in the warm firelight",
        h: "Stories that kept a nation warm",
        p: "Through the long, dark winters, Icelanders gathered by the fire to tell the sagas, sweeping tales of settlers, feuds, love and adventure passed down for generations before they were ever written on calfskin. These medieval stories are Iceland's great gift to world literature. Many are still household names here.",
        note: "Say it: the Icelandic sagas" },
    ],
    pride: "Icelanders are independent, literary and quietly proud of a tiny nation that has kept its language, its sagas and the world's oldest parliament alive on a wild volcanic island. They say more books are written and read here, per person, than almost anywhere. Show real interest in the sagas and you win a friend."
  },

  spokes: [
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Icelandic krona (ISK)" },
        { k: "Cards", v: "Work essentially everywhere" },
        { k: "Carry", v: "Almost no cash" },
        { k: "On a card", v: "Choose krona, not dollars" }
      ],
      live: true,
      topic: "cash",
      caution: "low",
      title: "Do I need cash in Iceland, or can I use cards? (2026) | True Trip Costs",
      description: "Almost none. Iceland is about as cashless as travel gets, so tap for everything, keep a small krona backup at most, and choose krona rather than dollars. The real cost is the prices. Checked July 2026.",
      h1: "Do I need cash in Iceland, or can I use cards?",
      lede: "Short answer: barely any. Iceland is one of the most cashless countries on earth, and plenty of visitors complete a whole trip without touching a banknote. The money problem here is not payment, it is the prices.",
      checked: "Jul 2026",
      checkedISO: "2026-07-30",
      answer: "You can go the whole trip without cash. <b>Cards, contactless, Apple Pay and Google Pay work essentially everywhere</b> in Iceland, from a Reykjavik cafe to a remote guesthouse and, unusually, at unattended <b>fuel pumps</b>. Keep <b>3,000 to 5,000 krona</b> as a just-in-case backup if it makes you comfortable, and know that many visitors never spend it. It is <b>krona, not euros</b>: Iceland is outside the EU and the eurozone, so do not arrive with euros. Always choose <b>krona, not dollars</b>, on any screen. The real budgeting job here is <b>the prices</b>, not the cash.",
      sections: [
        {
          h: "Card for everything, including the fuel pump",
          icon: "card",
          key: { fig: "Tap it", tag: "Cards are near-universal", text: "Visa and Mastercard with contactless cover hotels, restaurants, tours, museums, rural stops and unattended fuel pumps. Amex is accepted in bigger places but is patchier.", tone: "teal" },
          p: [
            "<b>Visa and Mastercard</b> are near-universal, and <b>contactless</b> with Apple Pay or Google Pay is completely standard. That extends further than you might expect: small rural shops, tours, museums, swimming pools and even honesty-box farm stands increasingly take cards. <b>Amex</b> works at larger hotels and shops but is less reliable, so bring a Visa or Mastercard as your main card and a backup from a different bank.",
            "The one place a card is not optional is the <b>self-service fuel pump</b>, which many rural stations are. A pump may ask for a <b>PIN</b> and may place a temporary hold on your card, so travel with a card you know the PIN for, which matters more here than the fee difference between your cards."
          ]
        },
        {
          h: "The real cost is the prices, not the cash",
          icon: "coins",
          key: { fig: "Budget up", tag: "This is the expensive part", text: "High wages, remoteness and import costs make everything pricey, from a coffee to a short tour. Pad your daily number rather than your wallet.", tone: "amber" },
          p: [
            "Cambodia and Argentina give you a cash puzzle to solve. Iceland does not, and instead hands you a <b>price</b> problem: high wages, remoteness and import costs push the cost of a coffee, a bowl of soup, a beer or a short tour well above what most visitors expect. <b>VAT is already in the price</b>, so the number on the tag or the menu is what you pay, which at least makes it easy to see what you are spending.",
            "The practical response is to <b>plan a higher daily figure</b> than you would almost anywhere in Europe, and to look for the cheap wins that exist: the swimming pools, the tap water, which is excellent, a supermarket rather than a restaurant lunch. If you are <b>renting a car</b>, budget the 2026 per-kilometre road tax and the parking-app fees at popular sites too, both of which are billed after the fact and land on your card later."
          ]
        },
        {
          h: "Krona, not euros, and never dollars on the screen",
          icon: "atm",
          key: { fig: "Choose krona", tag: "Dollar offers cost you", text: "The dollar option on a screen is never the cheaper one. It hands the exchange to the machine instead of your bank, and it takes a few percent every time you accept it.", tone: "amber" },
          p: [
            "Two currency mistakes to avoid. First, <b>Iceland does not use the euro</b>, so euros brought from a European leg of your trip will not spend here. Second, when a terminal or an ATM asks whether to charge you in <b>dollars or krona, choose krona</b>: taking the dollar offer is dynamic currency conversion, which runs roughly <b>3 to 8 percent worse</b> than your own bank's rate.",
            "If you do want a little cash, use a <b>bank ATM</b> from <b>Landsbankinn, Islandsbanki or Arion</b>. They are easy to find in Reykjavik and the towns and thin in the countryside, so take what you need when you see one. Read the on-screen fee, take a modest amount, and remember that your own bank's foreign-ATM charge usually matters more than the machine's. Do not change a large pile of dollars into krona: you will struggle to spend it and lose money changing it back. This guide is written for US travelers departing the US. For more, see <a href='/iceland/tipping'>tipping in Iceland</a>, <a href='/iceland/taxis-and-ride-hailing'>taxis and ride-hailing in Iceland</a>, and the <a href='/iceland'>Iceland money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Iceland?", a: "Barely, if at all. Cards and contactless work essentially everywhere, including remote guesthouses and unattended fuel pumps. Keep 3,000 to 5,000 krona as a backup if you like, but many visitors never spend it, and there is no reason to exchange a large sum." },
        { q: "Can I use euros or dollars in Iceland?", a: "No. Iceland is outside the EU and the eurozone and uses the Icelandic krona, so euros and dollars are not accepted in normal shops. Your card handles everything, and it should be charged in krona." },
        { q: "Should I pay in krona or dollars in Iceland?", a: "Always krona. An offer to charge you in dollars is dynamic currency conversion, which costs roughly 3 to 8 percent more than letting your own bank do the exchange. Decline it on terminals and at ATMs alike." },
        { q: "Do I need a PIN for my card in Iceland?", a: "It is worth having one. Self-service fuel pumps, which many rural stations are, may ask for a PIN and can place a temporary hold on your card, so travel with a card whose PIN you know rather than relying on signature or tap alone." }
      ],
      sources: {
        links: [
          { label: "Central Bank of Iceland: the official reference exchange rate for the krona, published each business day", url: "https://cb.is/statistics/official-exchange-rate/", type: "bank" },
          { label: "US State Department: Iceland country information for US travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Iceland.html", type: "gov" }
        ],
        judgment: "How close Iceland is to fully cashless, and the small krona backup we suggest, are the True Trip Costs desk's read from recent traveler reports rather than an official figure. The krona rate moves, so check it before you travel. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Not expected" },
        { k: "Service", v: "Already in the price" },
        { k: "Restaurants", v: "Nothing needed" },
        { k: "Taxis", v: "Just pay the fare" }
      ],
      live: true,
      topic: "tipping",
      caution: "low",
      title: "Tipping in Iceland: what you actually owe (2026) | True Trip Costs",
      description: "Almost nothing. Service is included and tipping is not expected in Iceland, so you can relax at restaurants, bars and taxis. Here is where a tip is still a kind gesture. Checked July 2026.",
      h1: "Tipping in Iceland",
      lede: "This is the easiest tipping page we write. Service is included, wages are decent, and nobody is waiting for a percentage. You can put your mental arithmetic away for the whole trip.",
      checked: "Jul 2026",
      checkedISO: "2026-07-30",
      answer: "Tipping in Iceland is <b>not expected</b>. Wages are decent and <b>service is included in the price</b>, so there is <b>no obligation</b> at restaurants, bars or cafes, and none of the card-terminal tip prompting you are used to at home. <b>Taxis</b> are not tipped: just pay the fare. If service was genuinely exceptional, <b>rounding up</b> or leaving a small amount is a warm gesture and will be received as one. The only place a tip is at all common is for a <b>private guide or driver</b> on a long day out, and even there it is optional.",
      sections: [
        {
          h: "Service is in the price, so nothing is owed",
          icon: "notip",
          key: { fig: "Nothing owed", tag: "Service is included", text: "Restaurant, bar and cafe prices include service, and staff are paid a proper wage. Leaving nothing is normal and nobody will think twice about it.", tone: "teal" },
          p: [
            "Restaurant, bar and cafe prices in Iceland <b>include service</b>, and staff are on wages that do not depend on your generosity. Leaving <b>nothing at all</b> is completely normal, and no one will react to it. There is also no tipping-screen culture: you are unlikely to be prompted for a percentage when you tap your card.",
            "If a meal or a day was exceptional and you want to mark it, <b>rounding the bill up</b> or leaving a small amount is a kind gesture that will be taken as a compliment rather than an expectation. That is the whole rule, and the useful part is what it does to your budget: unlike at home, you do not need to add 15 to 20 percent to every estimate you make for the trip."
          ]
        },
        {
          h: "Where a tip is still a nice thing to do",
          icon: "tip",
          key: { fig: "Guides", tag: "Optional, appreciated", text: "A private guide or driver who makes a long day work is the one place a tip is reasonably common, and cash is easiest if you want to give one.", tone: "teal" },
          p: [
            "The exception, such as it is, is a <b>private guide or driver</b>: someone who spends a long day getting you to the right places in bad weather, or a small-group tour leader who clearly went beyond the itinerary. A tip there is <b>appreciated but still optional</b>, and since you are carrying almost no cash, it is worth keeping a little for exactly this if you think you might want to.",
            "<b>Hotel housekeeping and porters</b> are not routinely tipped in Iceland. For everything else, the answer is the same: the price is the price. This guide is written for US travelers departing the US. For the wider picture, see <a href='/iceland/cash-or-card'>cash or card in Iceland</a>, <a href='/iceland/taxis-and-ride-hailing'>taxis and ride-hailing in Iceland</a>, and the <a href='/iceland'>Iceland money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Iceland?", a: "Not really. Service is included in prices and staff are paid properly, so there is no obligation at restaurants, bars, cafes or in taxis. Rounding up for exceptional service is a kind gesture, never an expectation." },
        { q: "Do I tip taxi drivers in Iceland?", a: "No. Pay the metered or agreed fare and that is the transaction complete. Nobody is expecting a percentage on top." },
        { q: "Should I tip a tour guide in Iceland?", a: "It is the one place a tip is reasonably common, especially for a private guide or driver on a long day, and it is still optional. Cash is easiest if you want to give one, so keep a little back for it." },
        { q: "Will I be prompted to tip on the card machine in Iceland?", a: "Usually not. Iceland does not have the tipping-screen culture familiar in North America, so expect to tap and be done." }
      ],
      sources: {
        links: [
          { label: "US State Department: Iceland country information for US travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Iceland.html", type: "gov" },
          { label: "Visit Reykjavik: the city's official visitor information site", url: "https://visitreykjavik.is/", type: "official" }
        ],
        judgment: "That service is included and tipping is not expected is long established and widely stated locally. Where a tip is still normal, mainly private guides and drivers, is the True Trip Costs desk's read from recent traveler reports rather than a published rule. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-ride-hailing",
      glance: [
        { k: "Uber", v: "Not a thing here" },
        { k: "Instead", v: "Book by app or phone" },
        { k: "Apps", v: "Hopp Taxi, Hreyfill" },
        { k: "Cost", v: "Expensive, and card-friendly" }
      ],
      live: true,
      topic: "taxis",
      caution: "low",
      title: "Taxis in Iceland: no Uber, and how to book one (2026) | True Trip Costs",
      description: "How taxis work in Iceland for US travelers in 2026: why there is no widespread Uber, which apps to install, why taxis are booked rather than hailed, and why the airport coach beats a cab. Checked July 2026.",
      h1: "Taxis in Iceland, and why there is no Uber",
      lede: "There is no widespread Uber here, which surprises people. Taxis are licensed, metered, card-friendly and expensive, and the usual way to get one is to book it rather than wave at the street.",
      checked: "Jul 2026",
      checkedISO: "2026-07-30",
      answer: "There is <b>no widespread Uber in Iceland</b>. Taxis are <b>licensed and metered</b>, and you get one by <b>booking it</b>, by app or by phone, or from a rank at the airport, a hotel or a bus station, rather than hailing on the street. The apps to know are <b>Hopp Taxi</b>, which works much like a ride-hailing app, and <b>Hreyfill</b>, one of the long-established companies. Fares are <b>expensive by any standard</b>, so for the Keflavik run the <b>airport coach is far cheaper</b>. <b>Cards are fine</b>, and tipping is not expected.",
      sections: [
        {
          h: "No Uber, so book instead of hailing",
          icon: "taxi",
          key: { fig: "Book it", tag: "App or phone", text: "Iceland has no widespread Uber. Licensed taxi companies take app and phone bookings, and ranks sit outside the airport terminal, hotels and bus stations.", tone: "teal" },
          p: [
            "Ride-hailing as Americans know it never really arrived in Iceland. What exists instead is a small number of <b>licensed taxi companies</b> operating on <b>official meters</b>, several of them around the clock. You reach them by <b>app or telephone</b>, or you take one from a <b>rank</b> at Keflavik, a hotel or a bus station. Street hailing is not the habit here and, outside central Reykjavik, not much use.",
            "<b>Hopp Taxi</b> is the one that behaves most like the app you are used to: book, track and pay in the app without cash. <b>Hreyfill</b>, operating since 1943, is one of the established companies and also takes app and phone bookings, including <b>fixed-price airport transfers</b> when arranged in advance. Outside the capital area, taxis are scarce, and in much of the country a rental car or a scheduled bus is the only realistic way to move."
          ]
        },
        {
          h: "Expensive, so weigh the alternative",
          icon: "coins",
          key: { fig: "Take the coach", tag: "For the Keflavik run", text: "A taxi from Keflavik into Reykjavik is one of the priciest rides you can take here. The scheduled airport coach does the same journey for a fraction of it.", tone: "amber" },
          p: [
            "Iceland is expensive and taxis are no exception, which makes the <b>Keflavik to Reykjavik</b> journey the decision that matters most. It is roughly <b>45 minutes to an hour</b> by road, and a metered taxi for it is one of the priciest rides you are likely to take on your trip. The scheduled <b>airport coach</b> costs a fraction of that, runs to meet flights, and drops at a central terminal with hotel transfers, which is why most visitors take it.",
            "A taxi earns its keep in other situations: <b>late arrivals, heavy bags, a group splitting one fare</b>, or a fixed-price transfer booked ahead so the meter is not a surprise. Within Reykjavik, distances are short and the city is walkable, so the taxi is more of an occasional convenience than a daily expense."
          ]
        },
        {
          h: "Paying, and what not to worry about",
          icon: "card",
          key: { fig: "Card is fine", tag: "No tip needed", text: "Meters are official and cards are accepted, so there is nothing to negotiate. Pay the fare in krona and leave it there, since taxi drivers are not tipped.", tone: "teal" },
          p: [
            "Fares run on <b>official meters</b> set by the company and there is <b>nothing to haggle over</b>, so the games you watch for elsewhere are simply not part of the picture. <b>Cards are accepted</b>, and if you booked through an app you have already paid. Choose <b>krona</b> if a terminal offers you dollars.",
            "<b>Tipping is not expected</b>: pay the fare and that is the end of it. If you want a firm number before you commit, ask for a <b>fixed price</b> when you book a transfer, which the companies will quote. This guide is written for US travelers departing the US. For the wider picture, see <a href='/iceland/cash-or-card'>cash or card in Iceland</a>, <a href='/iceland/tipping'>tipping in Iceland</a>, and the <a href='/iceland'>Iceland money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is there Uber in Iceland?", a: "No, not in any widespread sense. Licensed taxi companies do the job instead, booked by app or phone or taken from a rank. Hopp Taxi is the app that works most like ride-hailing, and Hreyfill is one of the established companies." },
        { q: "How much is a taxi from Keflavik airport to Reykjavik?", a: "Expensive enough that most visitors take the coach instead. The drive is roughly 45 minutes to an hour and a metered taxi is one of the priciest rides on a typical Iceland trip, so ask for a fixed-price transfer if you want a taxi, or book the scheduled airport bus." },
        { q: "Can I hail a taxi on the street in Iceland?", a: "Sometimes in central Reykjavik, but it is not the habit and not reliable. Booking by app or phone, or using a rank at the airport, a hotel or a bus station, is how it works here." },
        { q: "Do Icelandic taxis take cards?", a: "Yes, cards are accepted, and if you book through an app you have already paid. Choose krona rather than dollars if a terminal offers you the choice, and no tip is expected." }
      ],
      sources: {
        links: [
          { label: "Visit Reykjavik: the city's official page on taxis, meters and fixed-price airport transfers, including the Hopp Taxi app", url: "https://visitreykjavik.is/getting-around-reykjavik/taxi-reykjavik", type: "official" },
          { label: "Hreyfill: the Reykjavik taxi company's own booking and airport transfer information", url: "https://www.hreyfill.is/en/", type: "official" }
        ],
        judgment: "That taxis are booked rather than hailed, and that the airport coach beats a cab on price, are well established. We have avoided quoting fares because Icelandic prices move and a metered ride depends on traffic and time of day. Checked July 2026."
      }
    }
  ]
};
