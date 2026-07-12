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
  }
};
