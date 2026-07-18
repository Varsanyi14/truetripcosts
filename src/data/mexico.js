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
    styles: [ { n: "Budget", per: 28, cash: 0.55 }, { n: "Mid-range", per: 65, cash: 0.4 }, { n: "Comfort", per: 120, cash: 0.3 } ]
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
    }
  ]
};
