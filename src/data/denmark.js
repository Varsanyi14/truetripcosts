export default {
  slug: "denmark",
  live: true,
  name: "Denmark",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-07",
  sources: {
    changed: "Sources added on first publish, checked July 2026. Confirmed that Denmark (an EU member that kept its own krone, pegged to the euro but not in the eurozone) charges a flat VAT (moms) of 25% on almost everything, unusually with no reduced rate, all already in the price, and that non-EU visitors can reclaim VAT on goods over 300 DKK per receipt. On tourist tax: there is no national or nightly accommodation tax. Copenhagen has been weighing a city overnight levy (before the Business Ministry and not yet in force), and some Copenhagen hotels add a small voluntary sustainability surcharge, so we flag both honestly rather than treating either as a fixed charge.",
    links: [
      { label: "Skattestyrelsen (Danish Tax Agency): the flat 25% VAT (moms)", url: "https://skat.dk/en-us/businesses/vat", type: "revenue" },
      { label: "Global Blue: Denmark tax-free shopping, minimum 300 DKK per receipt", url: "https://www.globalblue.com/destinations/denmark/", type: "guide" },
      { label: "Danmarks Nationalbank: the krone's fixed-rate peg to the euro", url: "https://www.nationalbanken.dk/en/what-we-do/stable-prices-monetary-policy-and-the-danish-economy/the-fixed-exchange-rate-policy", type: "currency" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure. Copenhagen's proposed overnight levy is still moving through the process, so check your booking near travel time.",
  },
  emergency: { medical: "112", note: "112 reaches every emergency service, ambulance, police and fire, from any phone, even with no SIM. Operators speak English. For non-urgent medical help in the Copenhagen (Capital) region, call the medical helpline on 1813; elsewhere your accommodation can point you to the local out-of-hours doctor. Keep 112 for a genuine emergency.", checked: "Jul 2026", checkedISO: "2026-07-07" },
  insuranceLevel: "low",
  region: "Europe",
  signals: { cardFriendliness: 5, cashNeed: 1, taxRisk: 2 },
  hook: "Card-first and nearly cashless, with a flat 25% tax already in every price; the krone is tied to the euro but you still pay in kroner, not euros.",
  aliases: ["denmark", "copenhagen", "kobenhavn", "aarhus", "odense", "aalborg", "nyhavn", "billund", "danish krone", "dkk", "krone", "kroner"],

  title: "Money in Denmark (2026): Cards, Cash, Kroner, the Euro Peg and 25% VAT | True Trip Costs",
  description: "How to handle money in Denmark as a US traveler in 2026: near-universal cards and contactless, why the krone is pegged to the euro but you still pay in kroner, the dollar-conversion trap, bank ATMs, the flat 25% VAT you can partly claim back, light tipping, high prices, and the tourist-tax picture. Checked July 2026.",

  h1: "Money in Denmark, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your card covers almost everything, why the krone is tied to the euro yet you still pay in kroner, how little you tip, the shopping tax you can claim back, and where a tourist charge might turn up.",
  hero: {
    img: "/denmark-hero.jpg",
    h: 1375,
    alt: "A quiet cobbled quay along Copenhagen's Nyhavn canal under a soft grey sky, a row of tall red, blue and ochre townhouses on the left, a church spire in the misty distance, a red-sailed wooden boat moored on the water, a lone man in a flat cap standing with a bicycle and wicker basket on the right, and a cup of coffee with a Danish pastry on a small round cafe table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Denmark is clean, orderly and about as <b>card-friendly as anywhere in Europe</b>: tap, chip, Apple Pay and Google Pay work almost everywhere, and you rarely need cash. Bring a <b>no-foreign-fee Visa or Mastercard</b>, keep maybe <b>200 to 400 DKK</b> for the odd small or rural spot, and pull kroner from a <b>bank ATM</b>, declining any offer to charge you in dollars. The point to hold onto: the krone is <b>pegged to the euro</b>, but Denmark is <b>not in the eurozone</b>, so you still pay in <b>kroner, not euros</b>, and euros will not spend here. Prices carry a <b>flat 25% VAT</b> (Denmark has essentially no reduced rate), already included, and the country is <b>expensive</b>, so budget accordingly. There is <b>no national tourist tax</b>, though Copenhagen has been weighing one and a few hotels add a small voluntary green surcharge (below). Always choose kroner, never dollars, and tipping is light.",

  meter: {
    heading: "Nearly cashless; the real cost is how much everything costs.",
    cashPct: 8,
    note: "A rough feel for everyday spending. Cards and contactless cover almost everything, from hotels and restaurants to trains, buses, museums and small shops, and locals lean heavily on cards and the MobilePay app. You need a little cash only for the occasional market stall or rural spot. The real thing to plan for is not cash, it is the prices, so pad your daily budget."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken nearly everywhere, contactless is standard, and Apple or Google Pay are widely accepted, on trains, in shops and at museums. Locals often pay by the MobilePay app or the domestic Dankort, but you will not need either. Amex is accepted at bigger hotels and shops but is patchier, so carry a Visa or Mastercard.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "A little, rarely", p: "Cards cover almost everything. Keep maybe 200 to 400 DKK for a small market stall or a rural spot. Do not load up on kroner; you will struggle to spend a big pile, and leftover euros do not work here despite the currency being tied to the euro.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Use a bank machine", p: "Use a bank ATM (often labelled <b>Kontanten</b> or tied to a big bank), common in towns. Read the on-screen fee, take a sensible amount, and always <b>decline \"convert to US dollars.\"</b> Your own bank's foreign-ATM fee usually matters more than the machine's.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> with contactless for nearly everything, plus a backup card from a different bank.",
      "Get a <b>no-foreign-fee debit card</b> (Charles Schwab, Wise or Revolut) for the little cash you might pull.",
      "Check your US phone plan for Denmark. It is in the EU, so plans that include EU roaming usually cover it, but confirm the rate; otherwise an eSIM is cheap.",
      "Remember it is kroner, not euros, despite the euro peg. Do not arrive with euros expecting to spend them."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters. You can start tapping your card immediately, including for the Metro or train from Copenhagen Airport into the city.",
      "If you want a little cash, pull kroner from a bank ATM and <b>decline \"convert to dollars.\"</b>",
      "Set up an <b>eSIM</b> before you land (Airalo, Nomad, or a local plan) for maps and transit apps.",
      "Doing the <b>VAT refund</b> on the way out? Get forms validated at customs (at Copenhagen or Billund) before you check bags."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card or phone</b> for almost everything: trains, buses, shops, restaurants and museums.",
      "Prices already <b>include the 25% VAT</b>, so the number on the tag or menu is what you pay.",
      "Carry a little cash only for the odd <b>market stall or rural spot</b>.",
      "<b>Always choose kroner</b>, never dollars or euros, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "denom", when: "A golden rule", bullets: [
      "<b>It is kroner, not euros, even though the krone tracks the euro.</b> Denmark is not in the eurozone, so you pay in kroner, euros do not spend here, and choosing dollars or euros at a terminal (dynamic currency conversion) quietly adds 3 to 8%.",
      "<b>Budget high.</b> A coffee, a quick lunch, a beer or a museum ticket all cost more than you expect, so plan a bigger daily number than for much of Europe."
    ], cta: null }
  ],

  cash: {
    rate: 6.5, cur: "DKK", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 6.5 kroner to the dollar in mid-2026, so 100 DKK is roughly 15 dollars and 300 DKK about 46. Because the krone is pegged to the euro, this rate barely moves against the euro, but it still drifts against the dollar. Denmark is card-first, so this is the small cash-in-hand slice of your spending, not your whole budget.",
    styles: [
      { n: "Budget",    per: 70,  cash: 0.12 },
      { n: "Mid-range", per: 140,  cash: 0.08 },
      { n: "Comfort",   per: 260, cash: 0.05 }
    ]
  },

  connectivity: {
    works: "Excellent across the country, with strong 4G and wide 5G in cities, towns, and along the main roads and rail lines, and good coverage on the bridges and ferries between the islands. The main networks are TDC (Nuuday), Telenor, Telia and 3. Denmark is in the EU, so a US plan with EU roaming usually covers it, but confirm the rate; an eSIM (Airalo, Nomad, Ubigi) is often cheaper. You do not need mobile data to pay by card, but you will want it for maps and transit apps."
  },

  // TOURIST TAX: none nationally. Verified to Jul 2026. Denmark has no national or nightly
  // accommodation tax. Copenhagen has been weighing a city overnight levy (before the Business
  // Ministry, not yet in force), and some Copenhagen hotels add a small VOLUNTARY sustainability or
  // "green" surcharge (roughly a couple of euros a night). Both are flagged honestly rather than
  // modeled as a fixed charge. VAT (moms) is separate: a FLAT 25% with no reduced rate, already in
  // prices. Using the newer no-tax pattern.
  tax: {
    none: true,
    currency: "DKK",
    note: "Denmark has no national tourist tax or nightly accommodation tax, so there is normally nothing extra on your hotel bill. Two caveats: Copenhagen has been weighing a city overnight levy (still moving through government and not yet in force at last check), and a few Copenhagen hotels add a small voluntary sustainability surcharge of a couple of euros a night. Prices already include VAT (moms), a flat 25% on almost everything with essentially no reduced rate. As a non-EU visitor you can reclaim the VAT on goods you take home (see below)."
  },

  currencyHeading: "The Danish krone, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "Denmark uses the krone (DKK), plural kroner. At about 6.5 kroner to the dollar in mid-2026, 100 DKK is roughly 15 dollars, 200 DKK about 31, and 300 DKK about 46. Prices already include the 25% VAT, so the figure on the tag or menu is what you pay." },
    { sym: "smallnotes", k: "Notes and coins", v: "Notes run 50, 100, 200, 500 and 1,000 kroner (the 1,000 note is being phased out); coins include the 50-ore piece and 1, 2, 5, 10 and 20 kroner. You will rarely handle much of it, since almost everything goes on a card." },
    { sym: "denom", k: "Tied to the euro, but it's kroner", v: "The krone is pegged to the euro at a fixed central rate, so it barely moves against the euro. But Denmark is not in the eurozone, so you still pay in Danish kroner: euros will not spend here, and there is no reason to carry dollars." },
    { sym: "tip", k: "Tipping is light", v: "Service is included and staff are paid a proper wage, so tipping is modest: round up or leave about 5 to 10% for good service at a sit-down meal, nothing at a counter. See the tipping section below." }
  ],

  taxfree: {
    label: "Taxes, tips and refunds",
    heading: "A flat 25% tax in every price, a light tip, and money back on shopping.",
    text: "Denmark is expensive, and <b>VAT is already in the price</b>: a <b>flat 25%</b> on almost everything, unusual in Europe for having essentially no reduced rate, so hotels, meals, books and shop goods all carry the same 25%, and the tag or menu figure is what you pay. As a <b>non-EU visitor you can reclaim the VAT on goods</b> you take home, on receipts of at least <b>300 DKK</b>. Ask for a tax-free form, keep the goods unused, and get it validated by customs when you leave the EU; after the operator's fee you get back a useful chunk, though not the full 25%. <b>Tipping is light</b>: service is included, so rounding up or leaving about 5 to 10% for good service at a nice restaurant is generous, not expected, and there is no terminal tip-prompt culture as in the US. There is <b>no national tourist tax</b>, though Copenhagen has been weighing a city overnight levy and a few hotels there add a small voluntary green surcharge (above). There is no separate departure tax to pay; airport charges are built into your ticket.",
  },

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Terminals and ATMs offer to charge you in your home currency (dynamic currency conversion), which adds 3 to 8%. Pick kroner every time.",
    "<b>Tied to the euro is not the same as using the euro.</b> The krone tracks the euro closely, but Denmark is not in the eurozone. You pay in kroner, and euros do not spend here, so do not arrive expecting to use them.",
    "<b>It is an expensive country, so budget up.</b> The flat 25% VAT is baked into high prices. A coffee, a quick lunch, a beer or a museum ticket all cost more than you expect, so plan a higher daily number than for much of Europe.",
    "<b>Watch for a voluntary hotel surcharge in Copenhagen.</b> There is no national tourist tax, but a few Copenhagen hotels add a small optional sustainability charge, and the city has been weighing an overnight levy. Read your booking so a small extra line is not a surprise.",
    "<b>Have a backup card.</b> Because nearly everything is cashless, a declined or blocked card is a real headache. Carry a second card from a different bank and tell your bank you are travelling."
  ],

  tippingHeading: "Light: service is included, rounding up is plenty.",
  tipping: "Tipping in Denmark is modest, so relax about it. Service is included and staff are paid a proper wage, so locals simply round up or leave a little for good service. At a <b>sit-down restaurant</b>, rounding the bill up or adding about <b>5 to 10%</b> for good service is generous rather than expected; at a <b>cafe, bar or counter</b>, no tip is needed. For <b>taxis</b>, round up to the nearest note; for <b>hotel housekeeping</b>, a small amount is a kind gesture but not required; for a helpful <b>guide or driver</b> on a tour, a little extra is appreciated. Card terminals may show a tip line, but there is no strong tipping culture here as in North America, so do not feel obliged.",

  faqs: [
    { q: "Do I need cash in Denmark?", a: "Not much. Cards and tap work almost everywhere, including trains, buses and small shops, and locals lean on cards and the MobilePay app. Keep maybe 200 to 400 DKK for a market stall or rural spot, and pull it from a bank ATM if you run low. Do not exchange a big pile of dollars into kroner." },
    { q: "Does Denmark use the euro?", a: "No. The Danish krone is pegged to the euro at a fixed rate, so it barely moves against it, but Denmark is not in the eurozone. You still pay in kroner (DKK): euros will not spend here, so plan to pay by card in kroner and do not carry euros for this leg." },
    { q: "Should I pay in kroner or US dollars in Denmark?", a: "Kroner. If a card terminal or ATM offers to charge you in US dollars (or euros), decline; that dynamic currency conversion typically adds 3 to 8%. Paying in kroner and letting your own bank convert is almost always cheaper." },
    { q: "Is there a tourist tax in Denmark?", a: "There is no national tourist tax or nightly accommodation tax. Copenhagen has been weighing a city overnight levy (not yet in force at last check), and a few Copenhagen hotels add a small voluntary sustainability surcharge of a couple of euros a night, so check your booking. Elsewhere there is normally nothing extra." },
    { q: "Can I get a VAT refund on shopping in Denmark?", a: "Yes, if you live outside the EU and spend at least 300 DKK on a receipt. Ask for a tax-free refund form, keep the goods unused, and get it validated by customs when you leave the EU, then claim through the refund operator. After fees you get back a useful part of the flat 25% VAT, though not the full amount." },
    { q: "Why is Denmark so expensive, and how much should I budget?", a: "High wages, a high cost of living and a flat 25% VAT on nearly everything all feed into prices, from coffee to museum tickets. For everyday spending beyond your hotel, very roughly 700 to 1,300 DKK a day per person (about 108 to 200 dollars) is a realistic mid-range figure, mostly on card. The fix is to budget a higher daily number than for much of Europe." }
  ],

  culture: {
    heading: "A few words of Danish go a long way",
    intro: "Danes speak Danish, and they are experts at coziness. A friendly Tak and a story or two mark you as a guest rather than a tourist.",
    phrases: [
      { mean: "Hello", say: "hi", word: "Hej" },
      { mean: "Thank you", say: "tahk", word: "Tak" },
      { mean: "Yes", say: "ya", word: "Ja" },
      { mean: "Cheers", say: "skoal", word: "Skål" },
      { mean: "Delicious, yummy", say: "LECK-ert", word: "Lækkert" },
      { mean: "Goodbye", say: "fah-VEL", word: "Farvel" },
    ],
    tip: "The word to know is <b>hygge</b>, the Danish art of cozy contentment: candles, good company and warmth against the dark. Danes are also mad for cycling and famous for clean, simple design. Learn <b>Tak</b> for thank you and settle in by candlelight.",
    stories: [
      { img: "/denmark-culture-1.jpg",
        alt: "WPA-style illustration of a wistful little mermaid seated on a rock at the edge of a calm northern harbor at dusk, gazing across the water toward the town's spires and lamplight",
        h: "The father of the fairy tale",
        p: "Denmark gave the world Hans Christian Andersen, whose fairy tales, The Little Mermaid, The Ugly Duckling and The Emperor's New Clothes, are loved in every language. Born poor, he became the most famous storyteller of his age. A little bronze mermaid sits by Copenhagen's harbor in his honor.",
        note: "Good to know: the Little Mermaid sits in Copenhagen harbor" },
      { img: "/denmark-culture-2.jpg",
        alt: "WPA-style illustration of two ancient carved rune stones standing before a small white church and two great grassy burial mounds under a pale clear sky",
        h: "Denmark's birth certificate",
        p: "In a quiet churchyard at Jelling stand two carved stones raised by Viking kings over a thousand years ago. The larger one, set up by King Harald Bluetooth, boasts that he won all of Denmark and Norway and made the Danes Christian, and it is the first place the name Denmark was ever written. It is, in effect, the nation's birth certificate.",
        note: "Good to know: the Jelling stones name Denmark for the first time" },
      { img: "/denmark-culture-3.jpg",
        alt: "WPA-style illustration of a Renaissance astronomer in a ruffed collar sighting the heavens with a great brass quadrant on the terrace of a domed observatory beneath a sky brilliant with stars",
        h: "The astronomer who mapped the sky",
        p: "Four hundred years ago, the Danish astronomer Tycho Brahe built the finest observatory of his day and, night after night, measured the stars and planets more precisely than anyone before him, all with the naked eye, since the telescope had not yet been invented. His careful records later helped unlock the laws of planetary motion.",
        note: "Good to know: he charted the heavens before the telescope" },
    ],
    pride: "Danes are relaxed, egalitarian and reliably cheerful, regularly ranked among the happiest people on Earth. They are proud of their fairy tales, their design, their bikes and their hygge. Meet their easy warmth halfway and you will feel right at home."
  }
};
