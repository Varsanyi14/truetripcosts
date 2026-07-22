export default {
  slug: "mexico",
  live: true,
  name: "Mexico",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Sources added, and an update. Confirmed VISITAX in Quintana Roo (Cancun, Tulum, Cozumel and the Riviera Maya) is about 283 pesos, roughly 16 dollars, per person, paid online at visitax.gob.mx and now scanned at airport departure, with a 2026 proposal to fold it into hotel bills rejected. Added two places the guide had not covered: Baja California Sur (Los Cabos, La Paz, Loreto) charges a one-time 'Embrace It' visitor fee of about 28 dollars per person, and Puerto Vallarta began its own foreign-visitor fee in 2026. Confirmed the 16% IVA and the small per-room environmental tax. The peso figure, about 17.5 to the dollar, is current.",
    links: [
      { label: "VISITAX: official Quintana Roo state tourism tax portal", url: "https://www.visitax.gob.mx/sitio/", type: "gov" },
      { label: "Mexico News Daily: Baja California Sur (Los Cabos) tourist tax for 2026", url: "https://mexiconewsdaily.com/travel/baja-california-sur-bumps-uptourist-tax-fund-conservation/", type: "media" },
      { label: "Mexico News Daily: Puerto Vallarta foreign-visitor fee approved", url: "https://mexiconewsdaily.com/travel/foreign-visitors-puerto-vallarta-tourist-fee-new-law/", type: "media" }
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "911", note: "911 works nationwide, with English-speaking operators mainly in the cities. In remote areas, response can be slow.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "medium",
  rentalCommon: true,
  region: "Americas",
  signals: { cardFriendliness: 2, cashNeed: 4, taxRisk: 3, atmRisk: 4 },
  title: "Money in Mexico (2026): Cash, Cards, ATMs, Tipping and VISITAX | True Trip Costs",
  description: "How to handle money in Mexico as a US traveler in 2026: cash vs card, dodging the dollar conversion trap, the best ATMs, tipping, card surcharges, and VISITAX for Cancun and Tulum. Checked July 2026.",
  h1: "Money in Mexico, sorted.",
  lede: "A calm, current plan for the money side of your trip: what to put on a card, where you still need pesos, and the small rules that trip up first-timers.",
  hero: {
    img: "/mexico-hero.jpg",
    h: 1375,
    alt: "A quiet Mexican coastal street at dusk with papel picado banners and string lights, a person walking toward the sea, and a steaming bowl of food on a wooden table in the foreground"
  },
  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',
  verdict: "Mexico runs on a mix. <b>Cards</b> work at hotels, resorts and established restaurants, but you need <b>pesos</b> every day for taxis, street food, markets and tips. Bring a <b>no-fee Visa or Mastercard</b>, pull pesos from a <b>bank ATM</b> rather than the airport or a street machine, and follow one rule above all: <b>always pay in pesos, never in dollars</b>. If you are headed to the Cancun, Tulum or Cozumel area, <b>pay VISITAX online before you fly</b> and save the QR code.",
  recentChange: {
    date: "2026",
    text: "Quintana Roo (Cancun, Tulum, Cozumel and the rest of the Riviera Maya) now actively scans <b>VISITAX</b> QR codes at airport departure checkpoints, after years of loose enforcement. Pay the roughly 283 peso (about $16) fee per person online at visitax.gob.mx before you fly, and keep the QR code on your phone. A proposal to fold it into hotel bills was rejected in early 2026, so it stays on you to pay."
  },
  meter: {
    heading: "Mexico is card-friendly in resorts and cities, but cash still runs daily life.",
    cashPct: 55,
    note: "A rough feel for everyday spending. Hotels, resorts, malls and established restaurants take cards happily, especially in tourist areas. But taxis, street food, markets, small shops and tips are largely cash, and a good share of everyday transactions across the country still settle in pesos, so always keep some on you."
  },
  trio: [
    { sym: "card", kind: "warn", h: "Your card", verd: "Works in tourist areas", p: "Visa and Mastercard are taken at hotels, resorts, malls, chain stores and established restaurants. Amex is patchier. The catches: some places add a 3 to 5% surcharge for paying by card, and taxis, stalls and small shops are often cash only.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Needed every day", p: "Pesos are the everyday currency for taxis, street food, markets, small shops and tips. Carry a stack of small notes (20, 50, 100 and 200 pesos) and top up as you go.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy at bank ATMs", p: "Use a machine inside a bank branch or a supermarket (BBVA, Santander, Banorte, HSBC). Inbursa often has the lowest fee for foreign cards. Avoid airport and standalone street ATMs, which charge the most and see the most skimming, and always decline the \"convert to dollars\" offer.", cta: { label: "See low-fee cards", href: "#" } }
  ],
  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Get a <b>no-foreign-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "Bring a <b>no-fee Visa or Mastercard</b> for hotels, resorts and shops, and pack a backup card from a different bank.",
      "Heading to Cancun, Tulum, Playa or Cozumel? <b>Pay VISITAX online at visitax.gob.mx</b> and save the QR code. Skip the lookalike sites that charge two to three times as much.",
      "<b>Set a travel notice</b> with your bank so a taco-stand tap on day one does not get blocked."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters and the airport ATMs, which carry the highest fees.",
      "Grab just enough pesos for day one from a <b>bank ATM</b>, then <b>decline \"convert to USD\"</b> and choose pesos.",
      "Have a taxi plan: use the official airport taxi desk or a ride app, and keep small notes for the fare."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Cash</b> for taxis, street food, markets, tips and small shops.",
      "<b>Card</b> for hotels, resorts, established restaurants and bigger stores, but ask if a surcharge applies first.",
      "<b>Always choose pesos</b> on every card terminal and ATM screen.",
      "Keep small notes handy; 500 and 1,000 peso notes are hard to break for everyday spending."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in pesos, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 5 to 10%.",
      "On a Mexican price tag, the <b>\"$\" sign already means pesos</b>, not dollars."
    ], cta: null }
  ],
  cash: {
    rate: 17.5, cur: "MXN", round: 500, defaultIndex: 1,
    rateNote: "Rough guide at about 17.5 pesos to the dollar. The peso has been fairly steady, trading near 17 to 18 through 2026, so your dollar goes a long way day to day.",
    styles: [ { n: "Budget", per: 28, cash: 0.55, room: 45 }, { n: "Mid-range", per: 65, cash: 0.4, room: 95 }, { n: "Comfort", per: 120, cash: 0.3, room: 200 } ]
  },
  connectivity: {
    works: "Yes in the cities and tourist areas, where 4G is near-universal and 5G is live in places like Mexico City, Guadalajara and Cancun. Signal thins in remote mountains, jungle and small towns off the main routes."
  },
  // TOURIST TAX (high-churn, verified Jul 2026). A growing few states charge visitor taxes.
  // Quintana Roo (Cancun and the Riviera Maya) adds a hotel eco tax per room each night plus
  // a one-time state tourist tax (VISITAX) per person. Baja California Sur (Los Cabos, La Paz,
  // Loreto) charges a one-time "Embrace It" visitor fee per person, and Puerto Vallarta began
  // its own foreign-visitor fee in 2026. Most of Mexico still has nothing beyond the room rate.
  // Typical economy round trip per person from major US gateways, as a verified
  // RANGE, never a point. Sourced from fare-tracker averages (Kayak, momondo,
  // Skyscanner published route data), deliberately wide to cover season and
  // gateway. HIGH-CHURN: re-verify on the tourist-tax cadence. The calculator
  // prefills the midpoint, feeds low/high into the confidence range until the
  // traveler enters their own fare, and hides the estimate if this block is absent.
  flight: { low: 300, high: 700, checked: "Jul 2026", checkedISO: "2026-07-18" },
  tax: {
    unit: "flatPerNight",
    currency: "MXN",
    capNights: null,
    note: "A growing few areas (Quintana Roo, Baja California Sur and Puerto Vallarta) now charge visitor taxes, but most of Mexico has no separate tourist tax beyond what is already in your room rate.",
    regions: [
      { key: "qroo", label: "Cancun, Riviera Maya, Tulum, Cozumel (Quintana Roo)", rate: 76, oneTimePerPerson: 283, taxLabel: "Quintana Roo taxes", note: "Quintana Roo adds a hotel eco tax of about 4 dollars a room each night, plus a one-time state tourist tax (VISITAX) of about 16 dollars per person. VISITAX is paid once for the whole trip, easiest online before you travel." },
      { key: "bcs", label: "Los Cabos, La Paz, Loreto (Baja California Sur)", rate: 0, oneTimePerPerson: 488, taxLabel: "Baja California Sur tax", note: "Baja California Sur charges a one-time \"Embrace It\" visitor fee of about 28 dollars per person (ages 12 and up, staying over 24 hours), paid online with a QR code and checked at the airport. Los Cabos hotels also add a lodging tax and a small nightly sanitation fee." },
      { key: "other", label: "Elsewhere in Mexico", rate: 0, note: "Most of Mexico has no separate tourist tax. A few hotels add a small local lodging tax, which shows up on your bill." }
    ]
  },
  currencyHeading: "The peso, in plain terms.",
  facts: [
    { sym: "peso", k: "Quick conversion", v: "About 17.5 pesos to $1 in mid-2026. A quick gut check: 100 pesos is roughly $6, and 500 pesos about $29. One trap to remember: in Mexico, the \"$\" sign means pesos, not dollars." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 20, 50, 100, 200, 500 and 1,000 pesos. The 500 and 1,000 are awkward to break, so keep a stack of 20s, 50s and 100s for taxis, tips and small shops." },
    { sym: "tip", k: "Tipping is expected", v: "Unlike somewhere like Japan, Mexico has a real tipping culture, la propina. Around 10 to 15% at sit-down restaurants, and cash in pesos handed to your server is the surest way for it to reach them." },
    { sym: "card", k: "Card surcharges happen", v: "Some shops and smaller restaurants add a 3 to 5% surcharge for card payment, and many taxis and stalls take cash only. Ask before you tap, and keep pesos for everything else." }
  ],
  taxfree: {
    label: "Tourist taxes",
    heading: "The taxes nobody mentions until the airport.",
    text: "Two charges catch first-timers in the Cancun and Riviera Maya area. <b>VISITAX</b> is a Quintana Roo state tax of about 283 pesos (roughly $16) per person, for anyone visiting Cancun, Tulum, Playa del Carmen, Cozumel or Isla Mujeres. You pay it once for your whole stay at the official site, visitax.gob.mx, and save the QR code; as of 2026 it is checked at the airport on departure. Steer clear of the lookalike sites that charge two to three times the real amount. Separately, many Quintana Roo hotels add a small <b>environmental or sanitation tax</b>, commonly a few dollars per room per night (around 75 pesos in Cancun, varying by town), collected by the hotel at check-in or checkout. Quintana Roo is no longer the only place: <b>Baja California Sur</b> (Los Cabos, La Paz, Loreto) now charges its own one-time <b>\"Embrace It\"</b> visitor fee of about 28 dollars per person, also paid online and checked at the airport, and <b>Puerto Vallarta</b> added a smaller foreign-visitor fee in 2026. None is large, but they are easy to forget."
  },
  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> At a card terminal or ATM, choosing dollars (dynamic currency conversion) quietly adds 5 to 10%. Pick pesos every time, and remember the \"$\" on a price tag already means pesos.",
    "<b>Skip the airport and street ATMs.</b> Airport machines and standalone tourist-zone ATMs charge the highest fees and see the most card skimming. Use one inside a bank branch or supermarket (BBVA, Santander, Banorte, HSBC); Inbursa often has the lowest foreign-card fee.",
    "<b>VISITAX is now checked at the airport.</b> If you visit the Cancun, Tulum or Cozumel area, pay the roughly 283 peso fee per person online at visitax.gob.mx beforehand and keep the QR code ready. Departure checkpoints scan it in 2026.",
    "<b>Surcharges and cash-only spots.</b> Some places add 3 to 5% for card, and taxis, street food and small shops are often cash only. Carry small peso notes and ask before you tap.",
    "<b>Double-tipping at resorts.</b> Tourist restaurants sometimes print \"propina\" or \"servicio\" on the bill already. Read it before adding more so you do not pay the tip twice."
  ],
  tippingHeading: "Yes, you tip here.",
  tipping: "Mexico has a genuine tipping culture, the opposite of somewhere like Japan. At sit-down restaurants, 10 to 15% is standard, and 15 to 20% for excellent service or at upscale and resort spots. Cash in pesos, handed to your server, is the surest way for it to reach them, since card tips are sometimes pooled or shaved by fees. Before adding a tip, check the bill for \"propina\" or \"servicio\" already added, common at tourist resorts, so you do not pay twice. Round up for taxis, leave 20 to 50 pesos a bag for porters and 20 to 50 pesos a night for housekeeping, and drop small change in the jar at a taco stand.",
  faqs: [
    { q: "Do I need cash in Mexico?", a: "Yes, daily. Taxis, street food, markets, small shops and tips are often cash only, even though hotels and bigger restaurants take cards. Carry pesos in small notes and top up at bank ATMs." },
    { q: "Should I pay in pesos or dollars in Mexico?", a: "Always pesos. If a card machine or ATM offers to charge you in dollars, decline. That \"convenience,\" dynamic currency conversion, adds roughly 5 to 10%, and your own bank's rate is better. On a price tag, the \"$\" sign already means pesos." },
    { q: "What is VISITAX and do I have to pay it?", a: "VISITAX is a Quintana Roo state tourist tax, about 283 pesos (roughly $16) per person, for visitors to Cancun, Tulum, Playa del Carmen, Cozumel and Isla Mujeres. Pay it once online at visitax.gob.mx, save the QR code, and as of 2026 expect it to be checked at the airport on departure. It is per visit, not per night." },
    { q: "How much should I tip in Mexico?", a: "At sit-down restaurants, 10 to 15% is standard and 15 to 20% for excellent or upscale service. Cash in pesos handed to your server is best. Check first for \"propina\" or \"servicio\" already on the bill so you do not tip twice." },
    { q: "Which ATM is best in Mexico for a foreign card?", a: "Use an ATM inside a bank branch or a supermarket rather than the airport or a standalone street machine, which charge more and see more skimming. BBVA, Santander, Banorte and HSBC are reliable; Inbursa often has the lowest fee. Always decline the \"convert to dollars\" offer." },
    { q: "How much cash should I bring for a week in Mexico?", a: "For two mid-range travelers, very roughly 6,000 to 9,000 pesos (about $350 to $510) in day-to-day cash across a week, beyond your hotel, pulled in a couple of ATM visits. Adjust for your style and how much you put on a card." }
  ],

  culture: {
    heading: "A little Spanish goes a long way",
    intro: "A few words and a couple of stories that turn you from a tourist into a guest. Mexicans return warmth generously, over a meal, in a plaza, wherever the day takes you.",
    phrases: [
      { mean: "Hello", say: "OH-lah", word: "Hola" },
      { mean: "Please", say: "por fah-VOR", word: "Por favor" },
      { mean: "Thank you", say: "GRAH-see-ahs", word: "Gracias" },
      { mean: "Cheers", say: "sah-LOOD", word: "Salud" },
      { mean: "Delicious", say: "keh REE-koh", word: "Qué rico" },
      { mean: "Beautiful!", say: "keh boh-NEE-toh", word: "Qué bonito" },
    ],
    tip: "greet with <b>Buenos días</b> (BWEH-nohs DEE-ahs) in the morning, Buenas tardes in the afternoon. De nada means you are welcome.",
    stories: [
      { img: "/mexico-culture-1.jpg",
        alt: "WPA-style illustration of a golden eagle perched on a nopal cactus with a serpent, on a rock in a lake ringed by volcanoes",
        h: "The eagle on the flag",
        p: "The Mexica, the Aztecs, were told to build their city where they saw an eagle perched on a cactus, devouring a serpent. They found the sign on a lake and founded Tenochtitlan, today's Mexico City. That very scene sits at the heart of the Mexican flag.",
        note: "Good to know: that is the scene at the center of the flag" },
      { img: "/mexico-culture-2.jpg",
        alt: "WPA-style illustration of a warm Day of the Dead altar at dusk with marigolds, candles, painted calavera faces and papel picado",
        h: "A joyful Day of the Dead",
        p: "Dia de los Muertos is not morbid. It is a warm, colorful celebration when families welcome back the souls of loved ones with marigolds, candles, favorite foods, and laughter. Understanding it as joyful, not spooky, means a great deal.",
        note: "Good to know: it is a celebration, not a mourning" },
      { img: "/mexico-culture-3.jpg",
        alt: "WPA-style illustration of a great stepped Maya pyramid rising from jungle mist at dawn under a violet sky",
        h: "Master astronomers",
        p: "Long before the Aztecs, the Maya built vast pyramid cities and tracked the stars so precisely their calendar rivaled any in the world. Their ruins still stand across the south. A nod to that genius is always appreciated.",
        note: "Good to know: the Maya were extraordinary astronomers" },
    ],
    pride: "Mexico layers ancient civilizations, Spanish heritage, and a fierce modern creativity in food, art, and music. Warmth, and a little Spanish, are always returned in kind."
  },

  // HUB-AND-SPOKE SPOKES. Data-driven, single-source, each independently dated,
  // rendered by components/Spoke.astro via src/pages/[slug]/[spoke].astro.
  spokes: [
    {
      slug: "fmm-and-visitax",
      live: true,
      topic: "visas",
      title: "Do I need the FMM tourist card for Mexico, and what is Visitax? (2026) | True Trip Costs",
      description: "If you fly to Mexico, the tourist card (FMM) is already paid inside your airfare. The one fee actually on you is Visitax, and only in Quintana Roo (Cancun, Tulum): about $15 to $17, paid online at the official site. Checked July 2026.",
      h1: "Do I need the FMM tourist card for Mexico, and what is Visitax?",
      lede: "Short answer: if you fly in, the tourist card is already in your ticket, so you do nothing separate. The one fee that is genuinely on you is Visitax, but only if you are headed to Cancun or the Riviera Maya. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-08",
      answer: "If you <b>fly</b> to Mexico, the tourist card (the <b>FMM</b>) is <b>already paid inside your airfare</b>, so you do nothing separate, the officer just stamps you in (check the days, up to 180). The one fee genuinely <b>on you is Visitax</b>, and only if you visit <b>Quintana Roo</b> (Cancun, Tulum, Playa del Carmen, Cozumel): about <b>$15 to $17 per person</b>, paid online at the official <b>visitax.gob.mx</b>. US citizens need <b>no visa</b> for tourism.",
      official: {
        label: "Official Quintana Roo Visitax portal",
        url: "https://www.visitax.gob.mx",
        note: "If your trip touches Quintana Roo (Cancun, the Riviera Maya, Cozumel, Tulum), this is the official state site to pay Visitax, about $15 to $17 per person, once for the whole stay. Pay before you fly out to skip the airport kiosk queue. Ignore sites that charge more."
      },
      expediter: false,
      sections: [
        {
          h: "The tourist card (FMM): usually already handled",
          p: [
            "The <b>FMM</b> (Forma Migratoria Multiple) is Mexico's entry permit, often called the tourist card. It is <b>not a visa</b>, and for US citizens on a tourist trip it works differently depending on how you arrive. If you <b>fly in</b>, its fee is <b>bundled into your airline ticket</b> (you may spot it as a \"tourism tax\" on the receipt), and the major airports have gone digital, so there is usually <b>no paper form</b>, the officer scans your passport and stamps you in.",
            "The one thing to check: the FMM allows a maximum of <b>180 days</b>, but the <b>officer decides how many days to grant</b>, and lately it is often less than the full 180. <b>Look at the number stamped in your passport</b> so you know your real departure deadline. The permit is single-entry, so a hop out of the country means a new one on return. If you <b>drive across by land</b>, you handle the FMM yourself at the immigration (INM) office: free for stays of seven days or less, otherwise about 983 pesos."
          ]
        },
        {
          h: "Visitax: the one fee that is actually on you (Quintana Roo)",
          p: [
            "If your trip touches <b>Quintana Roo</b>, the state that holds <b>Cancun, Playa del Carmen, Tulum, Cozumel and the Riviera Maya</b>, there is a separate state tourist tax called <b>Visitax</b>. It is about <b>283 pesos, roughly $15 to $17 per person</b>, charged once and covering your whole stay in the state, and it is <b>legally required</b> for foreign visitors.",
            "Pay it online at the official state site, <b>visitax.gob.mx</b>, which gives you a QR code. You can pay before, during or at the end of your trip, but doing it <b>before you fly home</b> avoids the kiosk queue at Cancun airport, where it is enforced on departure. Enforcement has tightened, so do not skip it."
          ]
        },
        {
          h: "Why it feels confusing: most fees are already paid",
          p: [
            "Here is what clears it up. A trip to Cancun can involve several Mexican fees, but <b>most are tucked inside your airfare</b> already: the airport use fee, the federal tourism fees and the FMM tourist card all ride along invisibly in your ticket. <b>Visitax is the only one you pay yourself</b>, which is exactly why it feels like a surprise, it is really just the one that is visible.",
            "So for a typical US traveler flying to the Riviera Maya, the honest checklist is short: your passport, the entry stamp the officer gives you (already paid), and Visitax paid online. Everything else is handled."
          ]
        },
        {
          h: "A couple of things to know",
          p: [
            "Your passport should have <b>six months</b> of validity to be safe, and US citizens can stay visa-free for up to <b>180 days</b> for tourism (subject to the days the officer grants). Cruise passengers to Quintana Roo do not pay Visitax; a separate cruise charge is collected through the cruise line instead.",
            "Hotels also add their own nightly lodging tax at checkout, which is separate from all of the above. For those city and lodging taxes across destinations, see <a href=\"/tourist-taxes\">tourist taxes and entry fees</a>, and for cards, cash and ATMs, the <a href=\"/mexico\">Mexico money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need the FMM tourist card to fly to Mexico?", a: "You need the entry permit, but if you fly in you do nothing separate for it: the FMM fee is bundled into your airfare and the major airports are digital, so the officer just scans your passport and stamps you in. It is not a visa. Check the number of days stamped, up to 180, since the officer decides how many to grant. Driving in by land, you handle the FMM at the border." },
        { q: "What is Visitax and do I have to pay it?", a: "Visitax is a Quintana Roo state tourist tax for foreign visitors to Cancun, Playa del Carmen, Tulum, Cozumel and the rest of the state. It is legally required, about $15 to $17 per person, paid once for the whole stay. It is separate from the FMM and is the one Mexican fee a flying tourist actually settles themselves. Cruise passengers pay a separate cruise charge instead." },
        { q: "How much is Visitax and where do I pay it?", a: "About 283 pesos, roughly $15 to $17 per person, and the peso amount is fixed for 2026. Pay it online at the official state portal, visitax.gob.mx, which issues a QR code. Third-party sites charge more for the same thing. Pay before you fly home to avoid the enforcement kiosk queue at Cancun airport." },
        { q: "How long can US citizens stay in Mexico?", a: "Up to 180 days visa-free for tourism, but the immigration officer decides how many days to actually grant, and it is often less than 180 now, so check the stamp in your passport. Staying longer, or working or studying, requires a visa. Transit is allowed visa-free for up to 30 days." }
      ],
      sources: {
        links: [
          { label: "Quintana Roo Government: the official Visitax portal to pay the state tourist tax", url: "https://www.visitax.gob.mx", type: "gov" },
          { label: "Instituto Nacional de Migracion (INM): Mexico's immigration authority and the FMM entry permit", url: "https://www.gob.mx/inm", type: "gov" },
          { label: "US Department of State: the country information pages, the official router for entry and exit requirements by destination", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html", type: "gov" }
        ],
        judgment: "The FMM fee is set annually by INM and Visitax is fixed in pesos (so the US-dollar amount shifts with the exchange rate); rules and enforcement change, so confirm the current amounts on the official sites before you travel. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      live: true,
      topic: "cash",
      title: "Do I need cash in Mexico, or can I use cards? (2026) | True Trip Costs",
      description: "Both. Cards work at hotels, resorts and city restaurants, but you need pesos for taxis, street food and tips. Mexico's big trap: always pay in pesos, never dollars, and decline the ATM's dollar conversion. Checked July 2026.",
      h1: "Do I need cash in Mexico, or can I use cards?",
      lede: "Short answer: cards for the big things, pesos for the small ones. The mistake that costs tourists most is paying in dollars instead of pesos. Here is how to pay well and get cash safely.",
      checked: "Jul 2026",
      checkedISO: "2026-07-08",
      answer: "Both. <b>Cards work</b> at hotels, resorts, chains and city restaurants (Visa and Mastercard best, Amex patchy), but you need <b>pesos in cash</b> for taxis, street food, markets, small shops and tips. Mexico's single biggest money trap: <b>always pay in pesos, never US dollars</b>, and <b>decline the dollar conversion</b> that ATMs and card terminals push, its rate is 5 to 8% worse. Pull pesos from a bank ATM and carry small notes.",
      sections: [
        {
          h: "Cards where they work, pesos where they do not",
          p: [
            "In cities and resort areas, <b>cards are routine</b> at hotels, established restaurants, chains and shops, with Visa and Mastercard the most accepted and Amex hit or miss. Apple Pay and Google Pay work at many tourist-area terminals.",
            "But <b>cash still rules</b> for street food, taxis, markets, small family shops, local buses and tips, much of everyday spending outside the resort bubble runs on cash. Carry <b>small peso notes</b> (20, 50 and 100), since vendors often cannot break a 500."
          ]
        },
        {
          h: "The peso-versus-dollar trap",
          p: [
            "This is the one that quietly costs tourists the most. When an ATM or a card terminal asks whether to charge you in <b>US dollars or pesos, always choose pesos</b>. Choosing dollars triggers dynamic currency conversion, where the machine sets a rate that is typically <b>5 to 8% worse</b> than your own bank's. If a waiter returns a terminal already showing dollars, ask them to <b>redo it in pesos</b>.",
            "And although resorts and border towns often <b>accept US dollars</b>, they give a mediocre rate and hand back change in pesos, so you lose either way. Pay in pesos, and <b>tip in pesos</b> too, it is far easier for staff to use than dollars."
          ]
        },
        {
          h: "Getting pesos safely",
          p: [
            "Use <b>bank ATMs</b>, BBVA, Banorte, Santander or HSBC, ideally the machines <b>inside a branch, mall or supermarket</b> and during the day, which are better lit and less prone to card skimming. Avoid airport and hotel exchange kiosks (markups of 5 to 15%) and standalone or damaged-looking machines.",
            "Use a <b>debit card</b> at the ATM, not a credit card (a credit-card withdrawal is a cash advance, with a fee and interest from day one), and bring a card with no foreign-transaction fee plus a <b>backup card</b> on a different network. Withdraw a few days' worth at a time, shield your PIN, and keep cash out of sight."
          ]
        },
        {
          h: "Tipping, and the fees you already paid",
          p: [
            "In restaurants, <b>10 to 15%</b> is standard for good service if a service charge is not already added, and small tips for hotel staff, guides and drivers are appreciated, all in pesos.",
            "This covers day-to-day money. For the entry side, the tourist card and the Visitax fee for Cancun and the Riviera Maya, see <a href=\"/mexico/fmm-and-visitax\">the FMM and Visitax walkthrough</a>, and for the fuller picture, the <a href=\"/mexico\">Mexico money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Should I use cash or card in Mexico?", a: "Both. Cards work at hotels, resorts, chains and city restaurants (Visa and Mastercard best, Amex patchy), but you need pesos in cash for taxis, street food, markets, small shops and tips. Carry small peso notes for the everyday things and use a card for larger purchases at established businesses." },
        { q: "Can I use US dollars in Mexico?", a: "In resort areas and border towns, often yes, but at a poor rate and with change given in pesos, so you lose value. Outside tourist zones, pesos are necessary. It is better to pay in pesos everywhere, and to tip in pesos, which is far easier for staff to use." },
        { q: "Pesos or dollars when the ATM or terminal asks in Mexico?", a: "Always choose pesos. Selecting US dollars triggers dynamic currency conversion, and the rate offered is typically 5 to 8% worse than your own bank's. Decline it at ATMs and card terminals, and if a terminal already shows dollars, ask for it to be redone in pesos." },
        { q: "Which ATMs are safe to use in Mexico, and what about fees?", a: "Use bank ATMs (BBVA, Banorte, Santander, HSBC) inside a branch, mall or supermarket and during the day, which are safer from skimming. Avoid airport and hotel exchange kiosks and standalone machines. Use a debit card rather than a credit card, bring a no-foreign-fee card plus a backup, and always choose pesos over dollars." }
      ],
      sources: {
        links: [
          { label: "Banco de Mexico: the official peso exchange-rate reference", url: "https://www.banxico.org.mx/", type: "gov" },
          { label: "US Department of State: Mexico country information, including safety context relevant to ATM use", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html", type: "gov" }
        ],
        judgment: "The peso-dollar rate moves and card and ATM fees vary by your own bank, and much of this is our practical read, so treat amounts as a guide and always decline dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Uber or DiDi in Mexico, and the Cancun airport taxi problem (2026) | True Trip Costs",
      description: "Which ride app to use in Mexico (Uber, DiDi and inDrive all work), why the Mexico City airport rules keep changing, and why you cannot count on an app from Cancun airport thanks to the taxi union. Checked July 2026.",
      h1: "Uber and DiDi in Mexico, and the Cancun airport catch",
      lede: "In most of Mexico an app makes the whole thing easy, but the airports are where it gets complicated, and Cancun is its own world. Here is which app to install, what the Mexico City airport rules actually are, and how to leave Cancun airport without getting stung.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Install <b>Uber</b> and <b>DiDi</b> before you travel, and lean on <b>DiDi</b> in most cities, since it is often cheaper and local drivers use it too. Both show a fixed price up front, so there is no meter to argue about. <b>inDrive</b>, where you name your own fare, is a common backup. The catch is the airports. At <b>Mexico City</b> the rules keep shifting, and the reliable fallback is the official prepaid taxi kiosk inside the terminal. At <b>Cancun</b> and across the Riviera Maya, the taxi union blocks the apps, so you cannot count on an Uber or DiDi from the airport, and the calm answer is the <b>ADO bus</b> or a pre-booked shuttle.",
      sections: [
        {
          h: "Which app, and where it just works",
          p: [
            "For everyday travel in Mexico City, Guadalajara, Monterrey and most of the country, <b>Uber</b> and <b>DiDi</b> both work well and show the fare before you accept. <b>DiDi</b> is the one many locals reach for first, often a little cheaper, and in some tourist areas it draws less friction from taxi drivers than Uber does. <b>inDrive</b>, where you propose a price and drivers accept or counter, is a common third option. <b>Lyft</b> does not operate in Mexico at all, so ignore it here.",
            "Two small habits save trouble. First, some travelers hit card-billing glitches with Uber in Mexico, so switching the app to <b>cash</b> and paying at the end is a simple workaround. Second, fake drivers hang around tourist spots, so always check the <b>plate, car and driver photo</b> in the app before getting in, and never accept a ride from someone who simply walks up and says they are your driver."
          ]
        },
        {
          h: "Mexico City airport: the rules keep changing",
          p: [
            "Mexico City's airport (AICM) has been a running battle between the licensed airport taxis and the apps. Officially, ride-hailing is not allowed to pick up inside the federal airport zone, and enforcement has come and gone. Ahead of the 2026 World Cup, though, the airport set up a <b>designated pickup zone</b> for Uber and DiDi, roughly an eight-minute walk between Terminals 1 and 2, so app pickups are increasingly workable if you follow the in-app instructions to that spot.",
            "Because that situation still shifts, the dependable fallback is the <b>official prepaid taxi</b>. Pay at one of the authorized kiosks inside the terminal, where the price is set by zone and you hand a receipt to the driver waiting outside. One wrinkle worth knowing: quotes can vary between kiosks, and travelers have found one kiosk quoting several times more than another for the same trip, so check <b>two or three kiosks</b> before you pay. Federal airport taxis carry a green license plate."
          ]
        },
        {
          h: "Cancun and the Riviera Maya: a different world",
          p: [
            "This is the part that catches people out. Across <b>Cancun</b>, <b>Playa del Carmen</b> and the wider Riviera Maya, a powerful taxi union has fought the apps hard, and in practice you <b>cannot rely on an Uber or DiDi from Cancun airport</b>. The app may let you book, then send you to wait outside the airport, and drivers often will not accept the ride at all. Some union members have even posed as officials to stop app cars. The clean options from the airport are the <b>ADO bus</b>, which is cheap and reliable into Cancun and Playa del Carmen, or a <b>pre-booked private shuttle</b>.",
            "Once you are at your hotel, <b>DiDi</b> is the better app for getting around the Hotel Zone and town, since local drivers use it too and there is less conflict than with Uber. Keep a low profile when you get picked up, and if a driver is nervous, a quiet side street away from the taxi rank helps. Good news for the way out: dropping off at the airport is not restricted the way pickups are, so an app ride from your hotel to the airport is usually fine."
          ]
        },
        {
          h: "Fares, paying and tipping",
          p: [
            "In Uber and DiDi the price is fixed before you ride, and an app trip is usually well below what a street or airport taxi quotes for the same route. Regular Cancun street taxis are often cash-only and priced by zone rather than a meter, so agree the number before you get in and carry small peso notes. In downtown Mexico City, if a libre taxi does use a meter, watch that it starts fresh, but an app is simpler and safer.",
            "Tipping is not expected for a taxi or app ride in Mexico, though rounding up is a kind gesture. For the wider money picture, including how much cash to carry and where cards work, see the <a href=\"/mexico\">Mexico money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Does Uber work in Mexico?", a: "Yes. Uber operates in Mexico City and most of the country, alongside DiDi, which is often cheaper and more widely used by locals, and inDrive, where you name your fare. Lyft does not operate in Mexico. All show a fixed price before you ride, which is why an app beats a street taxi in most places." },
        { q: "Can I take an Uber from Cancun airport?", a: "Not reliably. A powerful taxi union across Cancun and the Riviera Maya fights the apps, so even when the app lets you book, few drivers will accept a pickup at the airport. Take the ADO bus or a pre-booked private shuttle from the airport instead. Once at your hotel, DiDi is the best app for getting around, and an app ride back to the airport is usually fine." },
        { q: "Is Uber allowed at Mexico City airport?", a: "It is contested. Officially, ride-hailing is not authorized to pick up inside the federal airport zone, but ahead of the 2026 World Cup the airport set up a designated Uber and DiDi pickup zone about an eight-minute walk between Terminals 1 and 2. Because the rules still shift, the reliable fallback is the official prepaid taxi kiosk inside the terminal. Check two or three kiosks, since quotes can vary." },
        { q: "Are Mexico City street taxis safe?", a: "Most travelers use an app rather than hailing a libre taxi on the street. If you do take a taxi, use a registered sitio or radio taxi rather than one flagged down at random, and confirm the fare first. With Uber or DiDi, verify the plate, car and driver photo in the app before getting in, and be wary of anyone who approaches claiming to be your driver." }
      ],
      sources: {
        links: [
          { label: "US Department of State: Mexico country information, including safety context for Mexico City and Quintana Roo", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Mexico.html", type: "gov" },
          { label: "Mexico Business News: reporting on the Mexico City airport's Uber and DiDi pickup zones and authorized-taxi fares", url: "https://mexicobusiness.news/aerospace/news/aicm-cuts-taxi-fares-adds-uber-and-didi-pickup-zones", type: "news" },
          { label: "Let's Travel to Cancun: a 2026 guide on why app pickups at Cancun airport are unreliable and what to use instead", url: "https://www.letstraveltocancun.com/can-you-take-an-uber-from-cancun-airport/", type: "guide" }
        ],
        judgment: "The airport app rules are moving fast, especially around the 2026 World Cup, and the Cancun taxi-union situation shifts, so check your app and keep a backup like the ADO bus or a pre-booked transfer. Fares move with the peso, so treat any amounts as a recent read. Checked July 2026."
      }
    },
    {
      slug: "bringing-your-pet",
      live: true,
      topic: "pets",
      title: "Bringing a dog or cat to Mexico from the US (2026): the easy entry and the screwworm catch on the way home | True Trip Costs",
      description: "Moving to Mexico with a pet from the US: why entry is one of the simplest anywhere, no health certificate and a quick SENASICA inspection, and why the real paperwork is on the return leg for dogs. Checked July 2026.",
      h1: "Bringing your dog or cat to Mexico.",
      lede: "Mexico is one of the easiest destinations for a US pet owner. There is no health certificate to file, no quarantine, and no waiting period. The catch is not getting your pet in, it is bringing a dog back: since late 2024 Mexico is treated as screwworm-affected, so US dogs returning home need an extra certification. Here is the whole picture, both directions.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Good news: this is one of the simplest moves there is. Mexico dropped its pet health-certificate requirement for dogs and cats from the US back in 2019, so there is <b>no certificate to file, no quarantine, and no waiting period</b>. Your pet is inspected by <b>SENASICA</b> at the port of entry to confirm it looks healthy and parasite-free, and you are through. Bring a <b>current rabies vaccination record and parasite-treatment history</b> anyway, since airlines usually require them and it speeds the inspection. The real paperwork is on the way home: because Mexico is treated as <b>screwworm-affected</b>, a dog returning to the US needs a screwworm-freedom certification, plus the CDC Dog Import Form and a microchip. Budget <b>roughly $200 to $500</b> if you drive, more if your pet flies as cargo.",
      sections: [
        {
          h: "Getting in is the easy part",
          p: [
            "Mexico is refreshingly light on entry rules. Since 16 December 2019, a health certificate is <b>no longer required</b> for dogs and cats traveling from the US. You take your pet to the border or airport, and officials from SENASICA, Mexico's agricultural health authority, carry out a physical inspection at the Animal and Plant Health Inspection Office (known by its Spanish initials, OISA).",
            "At that inspection they confirm three things: your pet shows no signs of infectious or contagious disease, it is free of external parasites such as fleas and ticks, and it has no fresh or healing wounds. If parasites are found, you will need to have them treated at your own cost before the pet is released. There is no quarantine and no waiting period for a healthy animal that passes inspection."
          ]
        },
        {
          h: "What to bring, even though it is not officially required",
          p: [
            "Mexico does not require you to present a rabies certificate or vaccination record to SENASICA for a US-origin pet. In practice, though, you should travel with a <b>current rabies vaccination certificate and a record of recent internal and external parasite treatment</b>. Airlines almost always ask for proof of rabies vaccination before they will board your pet, and having clean records on hand makes the SENASICA inspection faster. Treat these as things you will want in your folder, not optional extras.",
            "A few practical limits: the simple personal-pet process covers up to three animals per person. Bring more and Mexican customs may treat it as a commercial shipment with extra rules. Your pet's carrier must arrive clean, with no bedding, toys, or edible products inside, as officials may require these be removed and destroyed. Only the food needed for the day of arrival is allowed."
          ]
        },
        {
          h: "Driving versus flying",
          p: [
            "Land crossings are common and simple, especially for people driving into Baja California, Sonora, or other northern states. The SENASICA inspection is the same at a land border as at an airport, and driving avoids airline cargo fees and crate rules entirely, which is why the all-in cost can be as low as a couple hundred dollars.",
            "Flying adds cost and logistics. Pets too large for the cabin fly as cargo, which is the single biggest expense on this route and pushes a fly-in move well above the drive-in figure. Check your airline's specific pet policy early, since cabin size limits, cargo booking windows, and seasonal embargoes vary by carrier."
          ]
        },
        {
          h: "Coming home is where the paperwork lives",
          p: [
            "This is the part that surprises people. Entering Mexico is easy, but bringing a dog back to the US has become the harder leg. As of 22 November 2024, Mexico is considered affected by New World screwworm, so <b>every dog entering or re-entering the US after time in Mexico must meet APHIS screwworm-freedom certification requirements</b>. That is on top of the standard CDC rules for dogs: a completed <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a>, a microchip readable by a universal scanner, a minimum age of 6 months, and a healthy appearance on arrival.",
            "Because Mexico is not high-risk for dog rabies, US-vaccinated dogs returning from Mexico avoid the strictest CDC titer-and-quarantine path, and the CDC form receipt can cover multiple entries for up to 6 months as long as the pet stays within the US, Mexico, and Canada. Cats have it far easier in both directions: no CDC import form, no microchip mandate, and no screwworm certificate. If you are moving a dog, plan the screwworm certification before you travel home, not at the border. Our guide to <a href=\"/bringing-a-dog-into-the-us\">bringing a dog into the US</a> covers the return in detail, and for how Mexico compares with other destinations on effort and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."
          ]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Mexico",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-mexico",
        note: "The US-side view of Mexico's rules, including the no-health-certificate policy and the screwworm notice for dogs returning to the US. SENASICA is the authority on the day of entry."
      },
      faqs: [
        { q: "Do I need a health certificate to bring my dog or cat to Mexico?", a: "No. Since December 2019, Mexico no longer requires a health certificate for dogs and cats traveling from the US. Your pet is inspected physically by SENASICA at the port of entry instead. It is still smart to travel with a current rabies vaccination certificate and parasite-treatment records, because airlines usually require them and they speed up the inspection." },
        { q: "Is there a quarantine or waiting period for pets entering Mexico?", a: "No. There is no quarantine and no waiting period for a healthy pet. SENASICA inspects your dog or cat on arrival to confirm it shows no sign of disease, is free of external parasites, and has no fresh wounds. If it passes, you are through the same day." },
        { q: "How much does it cost to bring a pet to Mexico?", a: "If you drive across the border, it can be as little as $200 to $500, since there are no Mexican government fees and the main costs are your vet visit and travel. Flying costs more, sometimes much more, because a pet too big for the cabin travels as cargo, which is the largest single expense on this route." },
        { q: "What do I need to bring my dog back to the US from Mexico?", a: "More than you needed to get in. Since November 2024 Mexico is treated as screwworm-affected, so a dog returning to the US must meet APHIS screwworm-freedom certification requirements, in addition to the standard CDC rules: a CDC Dog Import Form, a microchip, a minimum age of 6 months, and a healthy appearance. Cats do not need any of this. Sort the dog paperwork before you travel home." }
      ],
      sources: {
        links: [
          { label: "USDA APHIS: pet travel from the United States to Mexico, the no-health-certificate policy, SENASICA inspection, and the screwworm notice for returning dogs", url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-mexico", type: "gov" },
          { label: "SENASICA (gob.mx): Mexico's national agricultural health authority and pet-import requirements", url: "https://www.gob.mx/senasica", type: "gov" },
          { label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, the CDC Dog Import Form and microchip rules for the return leg", url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html", type: "gov" }
        ],
        judgment: "Mexico's entry rules are set by SENASICA and, on the US side, administered by APHIS, with the dog-return rules set by the CDC. The no-certificate entry policy is unusually simple, but the screwworm situation on the return leg is recent and has shifted more than once, so we point you to the official pages and dated this July 2026. Costs vary with your route and your pet's size, so treat the range as a starting point and confirm the current screwworm and CDC requirements before you travel home."
      }
    },
    {
      slug: "tipping",
      live: true,
      topic: "tipping",
      title: "Tipping in Mexico: how much, where, and the propina trap at resorts (2026) | True Trip Costs",
      description: "How tipping works in Mexico for US travelers in 2026: the 10 to 15% restaurant standard, why cash in pesos is best, how much for hotel staff and drivers, and the resort double-tip trap to watch for. Checked July 2026.",
      h1: "Tipping in Mexico",
      lede: "Mexico has a genuine tipping culture, la propina, and it works a lot like home but with a few important differences: the amounts are a little lower, cash in pesos is strongly preferred, and tourist resorts sometimes slip a service charge onto the bill before you add one yourself.",
      checked: "Jul 2026",
      checkedISO: "2026-07-20",
      answer: "Mexico has a real <b>tipping culture</b>. At sit-down restaurants, <b>10 to 15%</b> is standard, and <b>15 to 20%</b> for excellent service or at upscale and resort spots. <b>Cash in pesos</b>, handed to your server, is the surest way for it to reach them, since card tips are sometimes pooled or shaved by fees. Before adding a tip, <b>check the bill</b> for <b>propina</b> or <b>servicio</b> already added, common at tourist resorts, so you do not pay twice. Round up for <b>taxis</b>, leave <b>20 to 50 pesos a bag</b> for porters and <b>20 to 50 pesos a night</b> for housekeeping, and drop small change in the jar at a taco stand.",
      sections: [
        {
          h: "How much to tip, by situation",
          p: [
            "At <b>sit-down restaurants</b>, <b>10 to 15%</b> is standard for good service, and <b>15 to 20%</b> at upscale or resort restaurants. <b>Cash in pesos</b> handed directly to your server is best, since card tips are sometimes pooled or reduced by processing fees.",
            "At <b>hotels</b>, leave <b>20 to 50 pesos a night</b> for housekeeping (on the pillow or bedside table each morning, so it reaches the person who cleaned your room that day) and <b>20 to 50 pesos per bag</b> for porters. For <b>taxis</b>, <b>rounding up</b> the fare is a kind gesture but not expected. At a <b>taco stand or street stall</b>, a few coins in the tip jar is appreciated."
          ]
        },
        {
          h: "The resort double-tip trap",
          p: [
            "Tourist restaurants and all-inclusive resorts sometimes print <b>propina</b> or <b>servicio</b> on the bill, meaning a service charge is <b>already included</b>. If you add 15 to 20% on top without checking, you have paid the tip twice.",
            "<b>Read the bill before you sign.</b> If a service charge is already there, a small extra in cash for outstanding service is generous but not expected. If nothing is added, tip the standard 10 to 15%."
          ]
        },
        {
          h: "Cash, pesos, and why not dollars",
          p: [
            "Always tip in <b>cash</b>. Card tips do not always reach the person who served you, and at smaller spots they cannot process a card tip at all.",
            "Tip in <b>pesos, not dollars</b>. Dollars are harder for staff to use, since they need to exchange them and often get a poor rate. Pesos in small notes (20s, 50s, 100s) are the most useful thing you can hand over. Keep a small stack separate from your main wallet so you are not fumbling at the table."
          ]
        }
      ],
      faqs: [
        { q: "How much should I tip in Mexico?", a: "At sit-down restaurants, 10 to 15% is standard and 15 to 20% for excellent or upscale service. Cash in pesos handed to your server is best. Check first for propina or servicio already on the bill so you do not tip twice." },
        { q: "Should I tip in dollars or pesos in Mexico?", a: "Pesos. Dollars are harder for staff to use, since they need to exchange them at a poor rate. Tip in cash, in pesos, in small notes. It is far easier for the person receiving it." },
        { q: "Do resorts in Mexico include a tip on the bill?", a: "Some do. Look for propina or servicio on the bill before adding your own tip. If it is already there, you do not need to add the full amount again, though a small extra in cash for outstanding service is a kind gesture." },
        { q: "Do you tip taxi drivers in Mexico?", a: "Rounding up the fare is a kind gesture but not expected. For a ride-hail app like Uber or DiDi, tipping through the app is fine but also not required." }
      ],
      sources: {
        links: [
          { label: "US State Department: Mexico country information and local customs", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Mexico.html", type: "gov" }
        ],
        judgment: "Tipping norms are cultural, not legislated rates, so the figures here are our own read from recent traveler reports and local guidance, not a single official table. The resort service-charge practice varies by establishment. Checked July 2026."
      }
    },
    {
      slug: "medical-costs",
      live: true,
      topic: "health",
      title: "What does seeing a doctor cost in Mexico as a tourist? (2026) | True Trip Costs",
      description: "Routine care in Mexico is cheap: a pharmacy doctor is about $2 to $3 and a private GP visit about $18 to $25, paid out of pocket. The real money risk is a serious emergency, where hospitals want a deposit upfront. Checked July 2026.",
      h1: "What does seeing a doctor cost in Mexico?",
      lede: "Good news for the small stuff: routine care in Mexico is fast, walk-in, and inexpensive, often just a few dollars. The part worth planning for is the rare, expensive emergency, where a private hospital asks for a deposit before it will treat you.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "As a tourist you <b>pay out of pocket</b> (free public healthcare is for residents), but routine private care is cheap. A doctor attached to a <b>pharmacy</b> (the consultorio) runs about <b>$2 to $3</b> for minor issues, a <b>private GP visit</b> about <b>$18 to $25</b>, and a <b>specialist</b> around <b>$45 to $55</b>. The real financial risk is a <b>serious emergency</b>: private hospitals ask for a <b>deposit upfront</b>, from a few hundred to several thousand dollars, and an ICU stay, surgery, or a flight home can run into the <b>tens of thousands</b>. That gap, not the doctor visit, is what <b>travel medical insurance</b> is for.",
      insurance: true,
      sections: [
        {
          h: "Routine care: cheap, fast, and walk-in",
          p: [
            "For everyday problems, Mexico is refreshingly easy. Most pharmacies have a <b>doctor attached</b> (the <b>consultorio</b>), where a consultation for something minor, a stomach bug, a cold, a small infection, costs about <b>45 to 60 pesos, roughly $2 to $3</b>, and sometimes nothing at all if you buy the medicine there. No appointment needed, and in tourist areas the doctor often speaks English.",
            "For something more involved, a <b>private GP</b> visit runs about <b>350 to 500 pesos, roughly $18 to $25</b>, a <b>specialist</b> around <b>800 to 1,000 pesos, roughly $45 to $55</b>, and a full <b>lab panel</b> often under <b>$55</b>. In a big-city private hospital the fees sit at the higher end. You pay at the time of care unless your insurer has a direct-billing arrangement with the clinic."
          ]
        },
        {
          h: "The part that actually costs: a serious emergency",
          p: [
            "This is where the money is, and where tourists get caught. Private hospitals in Mexico typically ask for a <b>deposit before they treat you</b>, anywhere from about <b>5,000 pesos (around $300)</b> to <b>100,000 pesos or more (several thousand dollars)</b> depending on the situation. An <b>ICU stay, major surgery, or a medical flight home</b> can climb into the <b>tens of thousands of dollars</b>.",
            "As a foreign visitor you are <b>not covered</b> by Mexico's public system, so without insurance that deposit and the bill come straight out of your own pocket. This single risk, not the price of a doctor visit, is the reason to carry cover."
          ]
        },
        {
          h: "Pharmacies and prescriptions",
          p: [
            "Mexican pharmacies are everywhere, and many medicines that need a prescription back home are sold <b>over the counter</b> here. For anything controlled, the consultorio doctor next door can write a prescription on the spot. Larger <b>primera clase</b> pharmacies stock the full range, including regulated drugs.",
            "Keep every <b>receipt</b>, the doctor's note, the pharmacy slip, the hospital invoice. If you have travel insurance, those are what you submit to claim the cost back."
          ]
        },
        {
          h: "What this means for your money",
          p: [
            "Budget a little cash for the small stuff and do not overthink it: a pharmacy doctor or a GP visit is a few dollars to a few tens of dollars, easily paid on the spot. The thing to plan for is the <b>big, unlikely emergency</b>, because that is the bill that can wreck a trip.",
            "That is exactly the shape travel insurance fits: cheap routine care you pay yourself, and a <b>large emergency, hospital deposit, or evacuation</b> the policy absorbs. For getting cash for the small payments, see the <a href=\"/mexico/cash-or-card\">Mexico cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do tourists get free healthcare in Mexico?", a: "No. Free public care is for residents enrolled in the IMSS system. As a foreign visitor you pay out of pocket for treatment, or claim it back through travel insurance. Routine private care is inexpensive; a serious emergency is not." },
        { q: "How much does a doctor visit cost in Mexico?", a: "A doctor attached to a pharmacy (consultorio) is about 45 to 60 pesos, roughly $2 to $3, for minor issues. A private GP visit is about 350 to 500 pesos, roughly $18 to $25, and a specialist around $45 to $55. Big-city private hospitals sit at the higher end." },
        { q: "Can I buy medicine without a prescription in Mexico?", a: "Many medicines that need a prescription elsewhere are sold over the counter in Mexico. For controlled drugs you need a prescription, which the pharmacy consultorio doctor can write on the spot for a couple of dollars." },
        { q: "Do I need travel insurance for Mexico?", a: "Routine care is cheap enough to pay for yourself, so the reason to carry travel insurance is the rare, expensive emergency: a private hospital deposit, surgery, or a medical flight home, which can run into the tens of thousands of dollars. That is the gap a travel medical policy covers." },
        { q: "What happens if I need a hospital in Mexico without insurance?", a: "Private hospitals usually ask for a deposit before treating you, from a few hundred to several thousand dollars, and you pay the full bill out of pocket. Public hospitals will stabilize a true emergency but are not set up for foreign visitors, and you still pay. This is the scenario travel insurance is designed for." }
      ],
      sources: {
        links: [
          { label: "US State Department: Mexico country information, including medical care and insurance guidance for travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Mexico.html", type: "gov" }
        ],
        judgment: "Medical prices in Mexico vary widely by city, clinic, and the seriousness of the problem, so the figures here are typical ranges from recent 2025 and 2026 reporting, not a fixed price list, and hospital deposits in particular depend on the case. Confirm costs at the point of care. Checked July 2026."
      }
    },
    {
      slug: "renting-a-car",
      live: true,
      topic: "driving",
      title: "What does renting a car in Mexico really cost? The insurance trap (2026) | True Trip Costs",
      description: "The cheap rate you booked is not the real price. Mexican law requires local liability insurance your US card and policy do not cover, and agencies leave it out of the online quote, so the counter price jumps. Plus cash-only tolls and gas near US prices. Checked July 2026.",
      h1: "What does renting a car in Mexico really cost?",
      lede: "Booking a car in Mexico is where a great-looking rate turns into a surprise at the counter. The reason is one mandatory insurance that almost never shows up in the online price, and that your US coverage does not satisfy.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "The rock-bottom rate you booked online is <b>not the real price</b>. Mexican law requires <b>local third-party liability insurance</b> (often shown as <b>TPL</b>, or in Spanish <b>seguro de responsabilidad civil</b>), and your <b>US car insurance and credit-card coverage do not satisfy it</b>. Agencies routinely <b>leave it out of the online quote</b>, so a $12 a day booking can become <b>$40 to $60 a day</b> at the counter. That mandatory liability is <b>not optional</b>; the extra collision and theft waivers (<b>CDW, LDW, PAI</b>) are. Also budget <b>cash for tolls</b> and gas at <b>roughly US prices</b>.",
      carExcess: true,
      sections: [
        {
          h: "The insurance that is not in your quote",
          p: [
            "Mexican federal law requires every vehicle on the road to carry <b>third-party liability insurance</b> from a <b>Mexican insurer</b>. Driving without it is treated as a serious matter, not a minor ticket. The catch for visitors: your <b>US auto policy and the coverage on your credit card do not count</b> for this, so you have to buy the local liability cover from the rental company, or prove you already hold a valid Mexican policy.",
            "The problem is that many agencies <b>do not include this mandatory cover in the online rate</b>. You book what looks like a bargain, then at the counter you are told, correctly, that liability insurance is required by law, and it is added on the spot. That is how a headline rate of a few dollars a day becomes <b>$40 to $60 a day</b> once the required insurance is in."
          ]
        },
        {
          h: "What is mandatory versus what is an upsell",
          p: [
            "Only the <b>third-party liability</b> cover is legally required. Everything else the counter offers is <b>optional</b>: the <b>collision damage waiver</b> (CDW or LDW) that caps what you owe if the car is damaged or stolen, and <b>personal accident</b> cover (PAI). An agent cannot force these on you, and you can decline them.",
            "Your US <b>credit card</b> may already cover the car's own damage if you decline the counter's collision waiver and pay with that card, but check two things: that your card's cover <b>applies in Mexico</b> (some exclude it), and remember it <b>never covers the mandatory liability</b>. So the honest sequence is: accept the required liability, then decide on the collision waiver based on what your card actually does."
          ]
        },
        {
          h: "Tolls and gas: the other real costs",
          p: [
            "Mexico's fast <b>cuota</b> (toll) highways are excellent, but the <b>casetas</b> (toll booths) are largely <b>cash only</b> and add up over a long drive, so keep pesos in the car. The slower <b>libre</b> roads are free but much slower, and sometimes rougher.",
            "Gas is not the bargain people expect. Regular (<b>Magna</b>) runs about <b>22 to 24 pesos a liter</b> in 2026, since the government caps it near 24, roughly <b>$1.25 a liter</b>, which works out to about <b>$4.50 to $5 a gallon</b>. Budget for fuel at <b>roughly US prices</b>, not below. It is also common to hand the attendant cash and tip a few pesos, since stations are full service."
          ]
        },
        {
          h: "What this means for your money",
          p: [
            "Do not trust the online rate on its own. Either get a quote that <b>explicitly includes the mandatory liability insurance</b>, or assume the real price is <b>$40 to $60 a day</b> once it is added, and compare cars on that basis. Decide on the optional collision waiver by <b>what your card actually provides in Mexico</b>, not by the counter's pitch.",
            "Carry <b>pesos for tolls</b>, expect gas at US-level prices, and for the cheapest way to pay for fuel and tolls on a card where they take one, see the <a href=\"/mexico/cash-or-card\">Mexico cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is car rental insurance required in Mexico?", a: "Yes. Mexican law requires third-party liability insurance from a Mexican insurer on every vehicle. It is mandatory, not an upsell, and you must either buy it from the rental company or prove you hold a valid Mexican policy. The optional extras, collision and personal accident cover, are separate." },
        { q: "Does my US insurance or credit card cover it?", a: "Not the mandatory part. US auto policies and credit-card rental coverage are not accepted for Mexico's required liability insurance. Your card may cover the car's own collision damage if it applies in Mexico, but never the liability, which you still have to buy locally." },
        { q: "Why is the rental so much more expensive at the counter?", a: "Because many agencies leave the mandatory liability insurance out of the online quote. The law requires it, so it is added when you pick up the car, turning a cheap-looking rate into roughly $40 to $60 a day. The insurance itself is legitimate; the lack of upfront disclosure is what catches people." },
        { q: "Can I decline the extra insurance in Mexico?", a: "You can decline the optional collision (CDW or LDW) and personal accident (PAI) cover; an agent cannot force those on you. You cannot decline the mandatory third-party liability, which is required by law. If you have credit-card collision cover valid in Mexico, you may be able to skip the counter's collision upsell." },
        { q: "Do I need cash for toll roads in Mexico?", a: "Mostly yes. The cuota toll highways are largely cash only at the casetas, so keep pesos in the car. The free libre roads avoid tolls but are much slower." }
      ],
      sources: {
        links: [
          { label: "US State Department: Mexico country information, including road safety and driving guidance for travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Mexico.html", type: "gov" }
        ],
        judgment: "The liability-insurance requirement is federal Mexican law, but the daily cost of the required cover varies by agency, car, and state, and toll and fuel prices shift, so treat the daily figures as typical ranges and confirm the all-in price, with the mandatory insurance included, before you book. Checked July 2026."
      }
    },
    {
      slug: "entry-fees",
      live: true,
      topic: "entry-fees",
      title: "Entry fees in Mexico: Chichen Itza's double fee, cenotes, and why to bring cash (2026) | True Trip Costs",
      description: "Mexico's big sites surprise you: Chichen Itza charges two separate fees totaling about 690 to 700 pesos ($40) for foreigners, cenotes run about $9 to $38, and almost everything is cash only. Foreigners also pay more than locals. Checked July 2026.",
      h1: "What do attractions really cost in Mexico?",
      lede: "Two things catch visitors out at Mexico's big attractions: the headline sites often charge more than one fee at more than one window, and almost everything wants pesos in cash. Here is what the gate actually costs.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Two surprises. First, marquee sites charge <b>more than one fee</b>: <b>Chichen Itza</b> costs foreign adults about <b>690 to 700 pesos (roughly $40)</b> in 2026, split into a <b>federal (INAH)</b> ticket and a <b>Yucatan state (CULTUR)</b> ticket paid at <b>two separate windows</b>. Second, <b>foreigners pay more than locals</b>, and the <b>Sunday free entry</b> is for Mexican citizens and residents only. <b>Cenotes</b> run about <b>$9 to $38</b> each. And almost everything is <b>cash only</b> in practice, since card readers fail and on-site ATMs are unreliable, so <b>bring pesos</b>.",
      sections: [
        {
          h: "Chichen Itza: one site, two fees",
          p: [
            "The price you see quoted online is often only half the story. Chichen Itza is run jointly by the <b>federal INAH</b> agency and the <b>Yucatan state</b> tourism body (CULTUR), so there are <b>two tickets</b>, sold at <b>two separate windows</b>: the INAH fee (about <b>100 to 105 pesos</b>) and the larger state CULTUR fee (about <b>592 pesos</b>). For a foreign adult in 2026 that totals about <b>690 to 700 pesos, roughly $40</b>. Parking is extra and cash only, about <b>80 to 150 pesos</b>.",
            "Two things to watch. Touts near the parking sometimes sell <b>cheap tickets that cover only one of the two fees</b>, leaving you to pay the other at the gate anyway, so buy at the official windows or from a reseller that clearly states both INAH and CULTUR are included. And note Chichen Itza is in <b>Yucatan state, not Quintana Roo</b>, so this is completely separate from the Cancun-area Visitax."
          ]
        },
        {
          h: "Foreigners pay more, and Sunday is not free for you",
          p: [
            "Mexico's government sites use <b>dual pricing</b>. At Chichen Itza a foreign adult pays about <b>697 pesos</b>, a Mexican citizen about <b>300 pesos</b> with national ID, and a Yucatan resident about <b>105 pesos</b>. This is normal and legal across INAH sites, not a scam, just something to expect.",
            "INAH sites are <b>free on Sundays, but only for Mexican citizens and residents</b> with ID. As a foreign visitor you pay the full foreign rate every day, Sundays included, so there is no saving in timing your visit for a Sunday, and the sites are far busier then anyway."
          ]
        },
        {
          h: "Cenotes: cheap to pricey, nearly always cash",
          p: [
            "Cenotes vary a lot. A simple one might be around <b>150 pesos</b>, popular spots like <b>Ik Kil</b> run about <b>180 to 250 pesos</b>, and a top-tier one like <b>Gran Cenote</b> near Tulum is about <b>500 pesos (roughly $30)</b>. Across the peninsula, expect roughly <b>$9 to $38</b> depending on how developed the site is, with a life jacket sometimes a little extra.",
            "The constant is <b>cash</b>. Most cenotes are <b>cash only</b>, and the busy ones often have <b>no ATM on site</b>, so carry enough pesos for the whole day. Bring small notes, since change can be limited."
          ]
        },
        {
          h: "What this means for your money",
          p: [
            "Plan the gate as a real line item, not an afterthought. A day trip to Chichen Itza plus a cenote is roughly <b>900 to 1,200 pesos ($50 to $70) per person</b> in entry fees alone, before transport, a guide, or lunch. Other ruins are cheaper: <b>Tulum</b> and <b>Coba</b> are around <b>200 to 250 pesos</b>.",
            "Carry <b>pesos in cash</b> for all of it. Card machines at these sites are unreliable and dollars are not useful at the gate. For getting pesos well and avoiding the airport-ATM traps, see the <a href=\"/mexico/cash-or-card\">Mexico cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "How much is Chichen Itza in 2026?", a: "About 690 to 700 pesos, roughly $40, for a foreign adult. It is two separate tickets: a federal INAH fee of about 100 to 105 pesos and a Yucatan state CULTUR fee of about 592 pesos, paid at two different windows. Parking is extra and cash only." },
        { q: "Why are there two ticket windows at Chichen Itza?", a: "Because the site is run jointly by the federal INAH agency and the Yucatan state tourism body, and each collects its own fee, so you pay both. Watch for touts selling cheap tickets that only cover one of the two; buy at the official windows or from a reseller that states both are included." },
        { q: "Do foreigners pay more than locals at Mexican sites?", a: "Yes, at government-run sites, and it is legal dual pricing. At Chichen Itza a foreign adult pays about 697 pesos, a Mexican citizen about 300 with ID, and a Yucatan resident about 105. Foreigners also do not get the Sunday free entry, which is for citizens and residents only." },
        { q: "How much do cenotes cost?", a: "Roughly $9 to $38 (about 150 to 650 pesos) depending on the cenote. Simple ones are cheap; developed or famous ones like Gran Cenote near Tulum are about 500 pesos ($30). Most are cash only, and many have no ATM on site, so bring pesos." },
        { q: "Can I pay by card at Mexican ruins and cenotes?", a: "Sometimes, but do not count on it. Card readers at the ruins go offline regularly, and many cenotes are cash only with no ATM nearby. Bring enough pesos in cash to cover entry, parking, and extras for the whole day." }
      ],
      sources: {
        links: [
          { label: "Instituto Nacional de Antropologia e Historia (INAH): Mexico's federal authority for archaeological sites and their admission fees", url: "https://www.inah.gob.mx", type: "gov" }
        ],
        judgment: "Site fees are set annually by INAH and the state agencies and typically rise each year, and cenote prices are set by their operators, so the figures here are the 2026 rates from recent on-site reporting and can change. Confirm at the gate, and always carry pesos. Checked July 2026."
      }
    },
    {
      slug: "prices-by-season",
      live: true,
      topic: "seasons",
      title: "When is Mexico cheapest, and when do prices spike? A cost calendar (2026) | True Trip Costs",
      description: "Mexico's prices swing 30 to 50 percent by season. High season is mid-December to April, the real spikes are Christmas, spring break, and Semana Santa, and the cheapest window is September to October, which is also hurricane season. Here is the money calendar. Checked July 2026.",
      h1: "When is Mexico cheapest, and when do prices spike?",
      lede: "The same hotel in Cancun can cost twice as much in January as in June. When you go changes the price more than almost anything else, so here is the calendar in money terms, including one domestic surge most foreign visitors never see coming.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Prices swing hard by season, often <b>30 to 50 percent</b>. <b>High season</b> is <b>mid-December to April</b>, and the sharpest spikes are <b>Christmas and New Year</b>, <b>US spring break</b> (March), and <b>Semana Santa</b>, the week before Easter, which is a huge <b>domestic</b> surge that catches foreign visitors out. The <b>cheapest</b> window is <b>September and October</b> (roughly <b>30 to 50 percent below</b> peak), but that is also <b>hurricane season</b> on the coasts. The best value with low weather risk is the <b>May to June</b> and <b>November</b> shoulders.",
      sections: [
        {
          h: "The expensive windows",
          p: [
            "High season runs <b>mid-December through April</b>, when North Americans and Europeans escape the winter. Within it, three spikes stand out. <b>Christmas and New Year</b> (roughly December 20 to January 3) is the single most expensive stretch, with beachfront resorts at premium rates and flights up sharply. <b>Spring break</b> (mid-February into March) fills Cancun, Playa del Carmen, Los Cabos and Puerto Vallarta with college crowds. For popular spots in this window, book <b>3 to 6 months ahead</b>.",
            "The one most foreign visitors miss is <b>Semana Santa</b>, the week before Easter (it moves each year, usually late March or April). This is a <b>domestic</b> surge: Mexican families take their big holiday, the beaches and colonial towns fill, and prices climb even where foreign tourism is light. If your dates are flexible, avoiding Semana Santa week is one of the easiest ways to cut cost."
          ]
        },
        {
          h: "The cheapest window, and its catch",
          p: [
            "The lowest prices, roughly <b>30 to 50 percent below</b> high season, land in the <b>rainy and low season</b>, especially <b>September and October</b>. September is often the cheapest month of the year: a Cancun all-inclusive that runs around <b>$400 a night in January</b> can fall to the <b>$180 to $220</b> range at a comparable property outside peak, with September the steepest of all.",
            "The catch is weather. <b>Hurricane season</b> runs <b>June 1 to November 30</b>, with the highest storm and heavy-rain risk in <b>August, September and October</b> on both coasts. A direct hit is uncommon, but the risk is real, which is exactly why prices drop. If you book this window, favor <b>refundable rates</b>, watch the forecast in the two weeks before you travel, and consider <b>travel insurance</b> that covers trip cancellation. Inland cities like <b>Mexico City and Oaxaca</b> see no hurricane impact at all, so they are a smart low-season choice."
          ]
        },
        {
          h: "Festivals worth the surge, in the right place",
          p: [
            "Some spikes are local and tied to an event. <b>Day of the Dead</b> (November 1 and 2, with build-up in late October) sends prices soaring specifically in <b>Oaxaca, Mexico City and Michoacan</b> (Patzcuaro), the best places to experience it. If that is your goal, book <b>well ahead</b> and expect a premium. If it is not, simply <b>avoid those cities</b> in that window and prices elsewhere are unaffected.",
            "Summer (<b>July and August</b>) is a second, milder peak: Mexican school holidays plus international summer travel push coastal resorts back up, and Cancun in particular reverts toward high-season rates. On the Caribbean coast, <b>sargassum</b> (seaweed) can also be a factor in these months."
          ]
        },
        {
          h: "What this means for your money",
          p: [
            "If you want the <b>best value with low weather risk</b>, aim for the <b>May to early June</b> or <b>November</b> shoulders: prices drop <b>20 to 40 percent</b> from peak, crowds thin, and the weather is still good. If you want the <b>rock-bottom price</b> and can accept storm risk, go in <b>September or October</b>, book refundable, and lean inland.",
            "Whatever you pick, the single biggest lever is <b>shifting your dates a week or two</b> around Christmas, spring break, and Semana Santa. For what your day-to-day spending will actually look like once you are there, see the <a href=\"/mexico\">Mexico cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "When is the cheapest time to visit Mexico?", a: "September and October, roughly 30 to 50 percent below high season, because it is the rainy and hurricane season and demand is lowest. September is often the single cheapest month. For low prices with less weather risk, the May to June and November shoulders are the smarter value windows." },
        { q: "When is Mexico most expensive?", a: "High season is mid-December to April. The sharpest spikes are Christmas and New Year, US spring break in March, and Semana Santa (the week before Easter). Summer, July and August, is a second, milder peak, and Cancun in particular reverts to high-season prices then." },
        { q: "What is Semana Santa and why does it raise prices?", a: "Semana Santa is the week before Easter, Mexico's biggest domestic travel holiday. Mexican families travel en masse, so beaches and colonial towns fill and prices climb even where foreign tourism is light. Its dates move each year, usually late March or April. Avoiding that week is an easy way to save." },
        { q: "Is it safe to visit Mexico during hurricane season?", a: "Usually yes. Hurricane season runs June 1 to November 30, with the highest risk in August to October on the coasts, but a direct hit is uncommon and most trips still get sunshine. Prices drop because of the risk, not guaranteed bad weather. Book refundable rates, watch the forecast, consider trip-cancellation insurance, or choose inland cities like Mexico City and Oaxaca, which see no hurricane impact." },
        { q: "When is Day of the Dead and does it affect prices?", a: "November 1 and 2, with build-up in late October. It spikes prices specifically in Oaxaca, Mexico City, and Michoacan (Patzcuaro), the top places to experience it, so book well ahead if you are going. Elsewhere in the country it has little effect on prices." }
      ],
      sources: {
        links: [
          { label: "NOAA National Hurricane Center: official Atlantic hurricane season dates and forecasts", url: "https://www.nhc.noaa.gov", type: "gov" }
        ],
        judgment: "Hurricane-season dates are from NOAA. The pricing patterns and percentage swings are seasonal market behavior drawn from recent 2025 and 2026 travel reporting, not fixed figures, and actual prices depend on destination, property, and how far ahead you book. Semana Santa and Easter dates move each year, so confirm them for your travel year. Checked July 2026."
      }
    },
    {
      slug: "all-inclusive-costs",
      live: true,
      topic: "all-inclusive",
      title: "What does an all-inclusive really cost in Mexico? The extras that are not included (2026) | True Trip Costs",
      description: "All-inclusive does not mean everything. Specialty restaurants ($25 to $80), premium drinks, spa, motorized water sports, excursions, airport transfers, and a per-night environmental tax at the desk all cost extra. Here is what to budget on top. Checked July 2026.",
      h1: "What does an all-inclusive really cost in Mexico?",
      lede: "All-inclusive covers the basics well, but it is not everything, and a few costs are added at the front desk rather than shown when you book. Here is what the package leaves out, so the final bill does not surprise you.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "The package reliably covers your <b>room, meals, house-brand drinks, non-motorized water sports, and entertainment</b>. What it usually does not cover, and where the extra money goes: <b>specialty restaurant surcharges</b> (about <b>$25 to $80 per person</b>), <b>premium and top-shelf drinks</b>, the <b>spa</b> ($100 to $300), <b>motorized water sports</b> ($75 to $150), and <b>off-resort excursions</b> ($35 to $80). Add a <b>per-night environmental tax</b> collected at the desk (about <b>$4 a night in Cancun</b>), <b>tips</b> (still expected), and often the <b>airport transfer</b>. Budget these on top of the headline price.",
      sections: [
        {
          h: "What the package actually covers",
          p: [
            "The standard inclusions are consistent across Mexican resorts: your <b>room</b>, <b>all meals</b> at the buffet and most sit-down restaurants, <b>unlimited house-brand</b> drinks alcoholic and soft, <b>non-motorized water sports</b> like kayaks and snorkeling, <b>kids' clubs</b>, <b>nightly entertainment</b>, and pool and beach access with chairs and towels. For a lot of trips that genuinely is most of the cost, which is the appeal.",
            "The gap is everything framed as premium or optional, and it adds up faster than people expect. A mid-range week can start at the base rate and end <b>25 to 40 percent higher</b> once the extras and fees are in."
          ]
        },
        {
          h: "What is not included, and what it costs",
          p: [
            "The common extras, with typical 2026 prices: <b>specialty or a la carte restaurants</b> often carry a <b>$25 to $80 per person</b> surcharge and may need a reservation; <b>premium or top-shelf alcohol and champagne</b> are excluded or served only at upcharge bars ($8 to $15 a drink); <b>spa treatments</b> run <b>$100 to $300</b>; <b>motorized water sports</b> like jet ski or parasail are <b>$75 to $150</b>; and <b>room service</b> sometimes carries a delivery fee even when the food is free.",
            "Two big ones travelers assume are included but often are not: <b>off-resort excursions</b> (a cenote, Chichen Itza, Isla Mujeres) at <b>$35 to $80 per person</b>, which are extra even on an all-inclusive, and the <b>airport transfer</b>, which is only covered at certain room categories or booking tiers. Booking excursions independently rather than at the resort desk is usually cheaper."
          ]
        },
        {
          h: "The fees added at the desk",
          p: [
            "Some charges are not in the online price and appear at check-in or checkout. The main one is the <b>Quintana Roo environmental tax</b>, about <b>76 pesos (roughly $4) per room per night</b> in Cancun and similar in Playa del Carmen and Tulum, often <b>collected in cash</b> at the front desk. Expect a <b>refundable deposit hold</b> on your card at check-in too.",
            "Two other charges are separate from the resort and covered in their own guide: the <b>Visitax</b> (about $15 per person, paid online) and the federal <b>DNR</b> fee (usually inside your airfare). See the <a href=\"/mexico/fmm-and-visitax\">Mexico entry fees and Visitax guide</a> for those."
          ]
        },
        {
          h: "Tips are still expected",
          p: [
            "All-inclusive does not mean no tipping. Bartenders, servers, housekeeping, a butler if you have one, and excursion guides are all customarily tipped, and it adds up: many families spend <b>$100 to $200 a week</b> on tips alone. Some resorts fold a service charge into the rate, but individual tipping is still expected on top. See the <a href=\"/mexico/tipping\">Mexico tipping guide</a> for who and how much."
          ]
        },
        {
          h: "What this means for your money",
          p: [
            "Treat the headline package as the <b>floor, not the total</b>. On top of it, plan for the <b>per-night environmental tax</b>, <b>tips</b>, at least one or two <b>specialty dinners or excursions</b>, and the <b>airport transfer</b> if your tier does not include it. For a week, that realistically adds <b>several hundred dollars</b> beyond the advertised price.",
            "The single best money move is to read the resort's own what-is-included page, not the marketing homepage, and ask directly <b>which restaurants, drink brands, and activities carry a surcharge</b> before you book. For what you will spend once you step off the resort, see the <a href=\"/mexico\">Mexico cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is an all-inclusive resort in Mexico really all-inclusive?", a: "It covers the basics reliably: room, meals, house-brand drinks, non-motorized water sports, and entertainment. It usually does not cover specialty-restaurant surcharges, premium alcohol, spa, motorized water sports, off-resort excursions, or, at many tiers, the airport transfer. A per-night environmental tax is also added at the desk." },
        { q: "What extra costs should I expect at a Mexican all-inclusive?", a: "Specialty restaurants about $25 to $80 per person, spa $100 to $300, motorized water sports $75 to $150, off-resort excursions $35 to $80 per person, premium drinks $8 to $15, plus the Quintana Roo environmental tax (about $4 per room per night, often cash at the desk) and tips. Budget several hundred dollars on top of a week's package." },
        { q: "Do I have to tip at an all-inclusive in Mexico?", a: "It is not required, but it is expected and customary. Bartenders, servers, housekeeping, and guides are tipped, and many families spend $100 to $200 a week. Some resorts include a service charge, but individual tips are still normal on top. See the Mexico tipping guide for amounts." },
        { q: "What is the resort environmental fee charged at check-in?", a: "A Quintana Roo environmental tax of about 76 pesos, roughly $4, per room per night in Cancun, and similar in Playa del Carmen and Tulum. It is usually not in the online price and is often collected in cash at the front desk. It is separate from the Visitax you pay online." },
        { q: "Are airport transfers included in all-inclusive packages?", a: "Not always. Transfers are often only included at certain room categories or booking tiers, so many guests pay separately. Check before you travel, and compare a pre-booked shuttle against the resort's price, since the official airport taxi can run $40 to $60. See the Mexico taxis and apps guide." }
      ],
      sources: {
        judgment: "The prices here are typical 2026 ranges for on-property extras (specialty dining, spa, motorized water sports, premium drinks) and off-resort excursions, drawn from recent travel-cost reporting, not a fixed price list, and every resort sets its own. The one government charge, the Quintana Roo environmental tax of about 76 pesos per room per night, is a state and municipal levy usually collected at the desk; the separate Visitax and federal DNR fee are covered in the Mexico entry fees guide. Confirm the specifics with your resort before booking. Checked July 2026."
      }
    },
    {
      slug: "money-scams",
      live: true,
      topic: "scams",
      title: "Common money scams in Mexico, and what they cost you (2026) | True Trip Costs",
      description: "Most trips to Mexico are trouble-free. The money traps that do exist are avoidable: taxi overcharges, the 'pay in dollars' card trick, ATM skimming, padded bar bills, roadside police 'fines', and timeshare pressure. Here is each one and how to sidestep it. Checked July 2026.",
      h1: "Common money scams in Mexico, and what they cost you",
      lede: "Mexico is safe for the great majority of visitors, and almost none of this is dramatic. These are ordinary money traps, overcharges and pressure tactics aimed at tourists, and a few simple habits defuse nearly all of them. Here is each one, what it costs, and how to sidestep it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "A handful of money traps come up again and again: <b>taxi overcharges</b> and the <b>no change for a big note</b> trick, the <b>pay in dollars</b> prompt on card machines and ATMs (a poor built-in rate), <b>ATM skimming</b>, <b>padded restaurant or bar bills</b>, roadside <b>police fines</b> demanded in cash, and high-pressure <b>timeshare</b> pitches sold as a free breakfast or tour. The golden rules that beat most of them: <b>always pay in pesos</b>, <b>carry small notes</b>, <b>use official taxis or apps</b>, <b>withdraw from bank-lobby ATMs</b>, and <b>check every bill</b>. None of it should ruin a trip.",
      sections: [
        {
          h: "At the ATM and the card machine",
          p: [
            "The most common everyday trap is not a con at all, it is a legitimate-looking prompt. When a card machine or ATM asks whether to charge <b>in US dollars or pesos</b>, always choose <b>pesos</b>: the dollar option uses a poor built-in rate that quietly costs you <b>3 to 12 percent</b>. The same goes for shops and resorts that say dollars are welcome, the rate is usually bad. The full mechanics are in the <a href=\"/mexico/cash-or-card\">Mexico cash and cards guide</a>.",
            "The one worth real care is <b>ATM skimming</b> and card cloning. Use ATMs <b>inside a bank</b> rather than free-standing street machines, cover the keypad, and glance at the card slot for anything loose. If a machine <b>keeps your card</b>, do not walk away: that can be a trap to lift it once you leave, so call your bank or 911 from the spot. Watch cards at bars too, where a card can be taken away to swipe and double-charged or swapped."
          ]
        },
        {
          h: "Taxis: overcharges and the no-change trick",
          p: [
            "At airports and on the street, the classic is a <b>flat overcharge</b> or an unofficial driver, which is how a short ride becomes <b>$40 to $60</b>. Use the <b>official taxi desk, a pre-booked transfer, or an app</b>, and track the route on your phone. The related move is the <b>closed hotel</b> line, where a driver insists your destination is shut and offers to take you somewhere better, which racks up the meter or steers you to a shop for commission. A polite no keeps you on track. The full breakdown is in the <a href=\"/mexico/taxis-and-apps\">Mexico taxis and apps guide</a>.",
            "The <b>no change</b> trick is simple: you hand over a 500 peso note for a 120 peso ride, the driver claims to have no change and keeps the difference. Carry <b>small notes</b> (20, 50, 100) and settle close to the exact fare. On a similar note, you can spend slightly <b>torn notes</b> in Mexico or swap them free at a bank, so a refusal to accept one is not your problem to solve. Using official transport and bank ATMs also quietly avoids the rare but real risk that comes with unmarked street taxis late at night."
          ]
        },
        {
          h: "Bars, restaurants, and free tastings",
          p: [
            "Check the <b>itemized bill</b> before you pay. The usual issues are a <b>double charge</b>, items you did not order, or a service charge added twice. In bars, drinks are sometimes <b>watered down</b>, so if it matters, ask which brands they pour and order one by name.",
            "Be wary of <b>free tastings</b>, especially artisanal mezcal or tequila near markets, that quietly <b>obligate a purchase</b>: a tasting that looked complimentary can land as a <b>400 to 800 peso</b> bill. Confirm whether there is a charge before you accept, and you avoid the awkward surprise."
          ]
        },
        {
          h: "Roadside police fines and timeshare pitches",
          p: [
            "If someone in a uniform stops you and demands an <b>on-the-spot cash fine</b> for a minor infraction, stay calm and polite. Real fines are <b>paid at a station, not by the roadside</b>. You can ask for the written ticket (the <b>infraccion</b>) and to settle it at the station, and note the officer's name and patrol number. You are not obliged to hand over your wallet or cash on the spot.",
            "The <b>free breakfast or free tour</b> offer is a <b>timeshare</b> sales pitch: a long, high-pressure presentation in exchange for the perk, sometimes with a deposit to guarantee you attend. It is not always a scam, but do not sign anything on the day. Separately, never pay <b>upfront fees</b> to a company offering to resell a timeshare you own, that is a well-documented fraud. You can check any company through Mexico's consumer agency, <b>PROFECO</b>."
          ]
        },
        {
          h: "What this means for your money",
          p: [
            "Almost everything here costs you tens of dollars at most and is avoided by the same few habits: <b>pay in pesos</b>, <b>carry small notes</b>, <b>use official taxis or apps</b>, <b>use bank-lobby ATMs</b>, and <b>read the bill</b>. The ones worth active care, because they can cost real money, are <b>ATM skimming</b> and <b>timeshare resale fraud</b>, so guard your card details and never pay an upfront resale fee.",
            "Handled calmly, none of this should shape your trip. For getting and spending money well while you are there, see the <a href=\"/mexico/cash-or-card\">Mexico cash and cards guide</a> and the <a href=\"/mexico\">Mexico cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Mexico safe for tourists?", a: "For the great majority of visitors, yes, and most trips are trouble-free. The issues tourists actually meet are usually money ones, overcharges and pressure tactics, rather than anything dramatic, and a few habits (pay in pesos, carry small notes, use official taxis and bank ATMs, check bills) avoid nearly all of them." },
        { q: "What is the most common money scam in Mexico?", a: "Taxi overcharging and the no change for a big note trick, along with the pay in dollars prompt on card machines and ATMs, which uses a poor built-in rate. Agree the fare first, carry small notes, and always choose to be charged in pesos." },
        { q: "Should I pay in pesos or dollars in Mexico?", a: "Pesos, always. Paying in dollars, or accepting a card machine's offer to charge in dollars, uses a poor built-in rate that costs you roughly 3 to 12 percent. Shops and resorts that welcome dollars usually give a bad rate too. See the Mexico cash and cards guide." },
        { q: "A police officer is asking me to pay a fine in cash, what should I do?", a: "Stay calm and polite. Real fines in Mexico are paid at a station, not by the roadside, so you can ask for the written ticket (infraccion) and to pay at the station, and note the officer's name and patrol number. You are not obliged to hand over cash or your wallet on the spot." },
        { q: "Are the free breakfast or free tour offers a scam?", a: "They are timeshare sales pitches: a long, high-pressure presentation in exchange for the perk, sometimes with a deposit to attend. Not always fraud, but do not sign anything on the day, and never pay upfront fees to resell a timeshare you own, which is a known fraud. Check companies through Mexico's consumer agency, PROFECO." },
        { q: "How do I avoid ATM card skimming in Mexico?", a: "Use ATMs inside banks rather than free-standing street machines, cover the keypad, check the card slot for anything loose, and decline any convert to dollars prompt. If the machine keeps your card, do not leave; call your bank or 911 from the spot, since a retained card can be a trap." }
      ],
      sources: {
        links: [
          { label: "US State Department: Mexico country information and safety guidance for travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Mexico.html", type: "gov" }
        ],
        judgment: "These are the money traps most consistently reported by travelers in 2025 and 2026, not a ranked risk list, and amounts vary by place and situation. The vast majority of visits see none of this, and the habits above avoid nearly all of it. For timeshare or consumer disputes, Mexico's PROFECO is the official consumer agency. Checked July 2026."
      }
    }
  ]
};
