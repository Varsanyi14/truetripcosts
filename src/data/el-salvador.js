import { S } from './carrier-spine.js';

// EL SALVADOR. Dollarized since 2001, so the money advice inverts almost every other
// guide on this site: there is no exchange rate, no conversion spread and no
// pay-in-dollars prompt to decline, because dollars are the local money. Modeled on
// ecuador.js, the site's other dollarized guide, for the cash/tax handling.
//
// Two findings drive this guide and both are in `sources.judgment`:
//   1. The $12 Tarjeta Migratoria de Ingreso was abolished by the Legislative Assembly
//      in April 2025, but the US Embassy's own travel-requirements page still described
//      the fee months later. We say entry is free and tell people to carry $12 anyway.
//   2. The 10% propina is frequently already printed on the bill, so the real money
//      mistake here is tipping twice, not tipping too little.

// SINGLE SOURCE OF TRUTH. Facts that appear in more than one sentence, or that get
// corrected later, live here and are interpolated below. Fix once, updates everywhere.
const F = {
  iva: "13%",
  propina: "10%",
  atmFee: "about 3 to 6 dollars",
  entryCard: "12 dollars",
  emergency: "911",
  advisory: "Level 1, Exercise Normal Precautions",
};

export default {
  // ---- identity ----
  slug: "el-salvador",
  iso2: "sv",
  live: true,
  name: "El Salvador",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-31",
  region: "Americas",
  insuranceLevel: "medium",
  rentalCommon: true,

  hook: "Your dollars are the local money, so there is no exchange rate to lose anything to. The costs that remain are a flat ATM fee and a tip that may already be on the bill.",

  title: "El Salvador money: it uses the US dollar (2026)",
  description: "El Salvador runs on the US dollar, nothing to exchange. Watch the 10% propina on the bill, flat ATM fees, and the scrapped entry card. Checked 2026.",
  h1: "What does a trip to El Salvador really cost?",
  lede: "El Salvador is the rare country where the honest answer to most money questions is that it costs you nothing extra. It has used the US dollar since 2001, so there is no conversion, no spread and no prompt to decline. That frees us up to talk about the three things that do cost money here.",

  hero: {
    img: "/el-salvador-hero.jpg",
    h: 1375,
    alt: "A quiet cobbled street in a Salvadoran colonial hill town at dusk, whitewashed houses with terracotta tile roofs and warm lit windows lining both sides, a small white church with twin bell towers at the end of the street and the dark cone of a volcano rising behind it against a deep teal sky, a woman in a pale shawl walking away up the cobbles with a dog asleep at the roadside, and a plate of handmade pupusas beside bowls of shredded cabbage curtido and red salsa on a wooden table in the foreground"
  },

  notice: "We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href=\"#\" onclick=\"return false\"><b>Sign up for an alert</b></a>.",

  signals: { cardFriendliness: 3, cashNeed: 4, taxRisk: 1, atmRisk: 3 },

  verdict: `El Salvador is one of the <b>simplest countries for money</b> a US traveler can visit, because it has used the <b>US dollar</b> as its currency since 2001. There is <b>nothing to exchange</b>, prices are already in dollars, and the <b>pay in dollars or local currency</b> question that costs you a few percent everywhere else simply does not arise. <b>Visa and Mastercard</b> work well in San Salvador and the main tourist areas, less so beyond them, so a <b>no-fee card</b> covers a good share of a trip. Three things do cost you. First, <b>small bills</b>: a pupuseria cannot break a fifty, so arrive with ones, fives and tens. Second, <b>ATM fees</b> of ${F.atmFee} a withdrawal, and because there is no conversion that flat fee is the <b>entire</b> cost, which makes fewer, larger withdrawals genuinely cheaper. Third, the <b>${F.propina} propina</b>, which is often already printed on the bill at mid-range and better restaurants, so the classic mistake here is <b>tipping twice</b>. One piece of good news that most guides have not caught up with: the old <b>${F.entryCard} entry card is gone</b>, abolished in 2025, so entry is free.`,

  meter: {
    heading: "Cards handle the capital and the beach towns; everything else runs on small bills.",
    cashPct: 55,
    note: `A rough feel for everyday spending. Cards are reliable in San Salvador, in the Zona Rosa, Colonia Escalon and the big malls, in the wealthier suburbs of Santa Tecla and Antiguo Cuscatlan, at international hotel chains and at established surf-town businesses. Outside that, and at markets, comedores, pupuserias, buses and small-town shops, it is cash. Since the currency is the dollar there is nothing to convert either way, so this is purely about where a terminal exists.`
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Good in the capital and tourist areas",
      p: "Visa and Mastercard are accepted at hotels, better restaurants, supermarkets, malls and tour operators in San Salvador and the main beach and surf towns. Amex is patchier and Discover is rarely useful. Because El Salvador uses the dollar, a card transaction here is a domestic-currency transaction, so there is no conversion markup to worry about. Some US cards may still apply a foreign transaction fee based on where the merchant is, so a no-fee card is still the safer choice.",
      cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Dollars, and the small ones matter",
      p: "This is the part to plan. Vendors, taxis, market stalls and pupuserias often cannot break a twenty, let alone a fifty or a hundred. Arrive with a working float of ones, fives and tens in good condition, and treat that as the single most useful piece of preparation for the trip. Cash is also the way to tip, since tips on a card rarely reach the person who served you.",
      cta: { label: "How much to carry", href: "#plan" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Flat fee, and it is the whole cost",
      p: `Machines are easy to find in banks and shopping malls and they dispense dollars. Expect ${F.atmFee} per withdrawal on top of anything your own bank charges. The useful quirk of a dollarized country is that with no exchange spread hiding in the transaction, that flat fee is the entire cost, so the arithmetic is simple: withdraw less often and take more each time. Use machines inside banks or malls in daylight rather than street-facing ones.`,
      cta: { label: "Fee-free options", href: "#calc" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go",
      bullets: [
        "Bring a <b>no-foreign-fee credit or debit card</b> for most spending, plus a backup card on a different network.",
        "Pack a real float of <b>small US bills, ones, fives and tens, in good condition</b>. This matters more here than almost anywhere, because nothing you buy from a street vendor can be paid with a fifty.",
        `You need <b>no visa</b> and, since 2025, <b>no entry card fee</b>. Carry <b>${F.entryCard}</b> in small bills anyway as cheap insurance, because some official pages still list the old charge.`,
        "You do <b>not</b> need to buy any foreign currency, or set up a Bitcoin wallet, or download anything to pay for things. Dollars work."
      ],
      cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport",
      bullets: [
        "At San Salvador airport follow signs for <b>Extranjeros</b>. Have your passport and onward ticket ready; there are no forms to fill in.",
        "Skip the airport currency desk entirely. There is nothing to change.",
        "If you want data, <b>Tigo, Claro and Movistar</b> sell prepaid SIMs from around <b>5 dollars</b>, with roughly 5GB for about 10 dollars a month. An eSIM bought before you fly saves queueing.",
        "Pre-book your ride or use <b>Uber</b>, which operates in the capital. Agree any taxi fare before the door closes."
      ],
      cta: null },
    { sym: "bowl", when: "Day to day",
      bullets: [
        `<b>Read the bill before you tip.</b> Mid-range and better restaurants frequently print a <b>${F.propina} propina</b> or <b>propina sugerida</b> as a line item. Tip again without noticing and you have paid roughly 20%.`,
        `<b>${F.iva} IVA</b> is normally already inside the displayed price, so a menu or shelf price is usually what you pay.`,
        "Keep your small bills topped up. Break notes at supermarkets and chain shops, which can, and save the small ones for stalls and taxis.",
        "Tip in <b>cash</b>, always, even when you pay the bill by card."
      ],
      cta: null },
    { sym: "usd", when: "A golden rule",
      bullets: [
        "<b>You are already in dollars, so the rule here is about denominations, not exchange.</b> Ones, fives and tens are what actually spend. A fifty is close to unusable outside a bank or a large supermarket.",
        `<b>Read the check before you tip.</b> The ${F.propina} propina is frequently already printed on it, and adding a second one takes you to roughly 20% without meaning to.`
      ],
            cta: null }
  ],

  cash: {
    rate: 1,
    cur: "USD",
    round: 20,
    defaultIndex: 1,
    rateNote: "El Salvador uses the US dollar, so there is nothing to convert and this is simply the cash-in-hand slice of your spending. Unlike Ecuador, El Salvador does not mint its own coins, so the coins in your change are ordinary US cents.",
    styles: [
      { n: "Budget", per: 40, cash: 0.6, room: 35 },
      { n: "Mid-range", per: 90, cash: 0.45, room: 80 },
      { n: "Comfort", per: 180, cash: 0.3, room: 170 }
    ]
  },

  connectivity: {
    works: "Well, by regional standards. Claro, Tigo and Movistar all run 4G that reaches most of the country, and coverage along the populated Pacific coast and around San Salvador is good enough for maps, ride-hailing and calls. Prepaid SIMs start around 5 dollars and roughly 5GB runs about 10 dollars a month, so a local SIM is genuinely cheap if you would rather not buy an eSIM. Expect thinner service in the northern mountains and remote stretches of the east. One practical note reported by travelers: the arrivals and customs hall at San Salvador airport can be a dead zone, so having an eSIM already installed and activated before you land saves a frustrating first twenty minutes."
  },

  currencyHeading: "There is no local currency to learn.",

  tax: {
    none: true,
    currency: "USD",
    note: `El Salvador has no per-person nightly tourist tax to settle at the desk, and since 2025 no arrival fee either. What you will see instead is <b>IVA of ${F.iva}</b>, which is normally already included in displayed prices, and at sit-down restaurants a <b>service charge of about ${F.propina}</b> printed on the bill as propina. Lodging can come to more than ${F.iva} in total, because hotels also carry a separate tourism levy, so treat the total shown on your reservation as the figure to check rather than assuming the room rate plus ${F.iva}. There is no general tourist VAT refund scheme to count on. Departure tax is included in your airline ticket, so there is nothing to pay at the airport on the way out.`
  },

  // NOTE: `facts` is the array of cards rendered in the currency section, shape
  // { sym, k, v }. It is NOT the F single-source object above, despite what
  // _TEMPLATE.js implies with `facts: F`. Setting it to an object breaks the build
  // with "c.facts.map is not a function".
  facts: [
    { sym: "usd", k: "You are already in dollars",
      v: "El Salvador adopted the US dollar as legal tender in 2001, replacing the colon, so prices are quoted in dollars and there is nothing to convert. Unlike Ecuador, it does not mint its own coins, so the change you get is ordinary US cents. The practical upshot is that the conversion markup we warn about on almost every other guide simply does not exist here." },
    { sym: "smallnotes", k: "Small bills are what actually spend",
      v: "This is the one to prepare for. A pupuseria, market stall, bus or taxi often cannot break a twenty, and a fifty or hundred is close to unusable outside a bank or large supermarket. Arrive with a real float of ones, fives and tens in good condition, and break bigger notes at supermarkets and chain shops, which can." },
    { sym: "card", k: "Cards in the capital, cash beyond it",
      v: "Visa and Mastercard are reliable in San Salvador, especially the Zona Rosa, Colonia Escalon and the malls, in Santa Tecla and Antiguo Cuscatlan, at international hotels and at established surf-coast businesses. Amex is patchy and Discover rarely useful. Outside that footprint, assume cash." },
    { sym: "atm", k: "The flat ATM fee is your entire cost",
      v: `Machines in banks and malls dispense dollars and charge ${F.atmFee} a withdrawal, plus anything your own bank adds. Because a dollarized country has no exchange spread hiding in the transaction, that flat fee is the whole cost, which makes the maths unusually clear: withdraw less often and take more each time.` },
    { sym: "receipt", k: "The tip may already be on the bill",
      v: `Mid-range and better restaurants frequently print a ${F.propina} propina or propina sugerida line on the check. Miss it and add another ${F.propina} and you have paid roughly 20%. Read the check before you sign. IVA of ${F.iva} is normally already inside displayed prices, so a menu price is usually what you pay.` }
  ],

  taxfree: {
    label: "Taxes, tips and the fee that was abolished",
    heading: "The tax is usually inside the price. The tip may already be on the bill.",
    text: `Two charges and one absence. <b>IVA at ${F.iva}</b> is normally baked into displayed prices, so a menu or shelf price is generally what you pay, which is a pleasant contrast to shopping at home. At mid-range and upscale restaurants a <b>${F.propina} propina</b>, sometimes labelled <b>propina sugerida</b>, is commonly added to the printed check, and this is the single most common way visitors overpay here: they miss the line and add another ${F.propina} on top, arriving at roughly 20% without meaning to. Read the check line by line before you sign. The absence is the <b>${F.entryCard} Tarjeta Migratoria de Ingreso</b>. El Salvador's Legislative Assembly voted in April 2025 to strike every article of the migration law that created it, on the argument that charging visitors to enter the country was indefensible. Entry is now free, though official US pages were slow to reflect it, so carrying the old amount in small bills remains cheap insurance against a booth applying the old rule out of habit.`
  },

  traps: [
    `<b>Tipping twice.</b> The ${F.propina} propina is frequently already printed on the bill. Check the line items before adding anything, or you are paying about 20%.`,
    "<b>Arriving with big bills.</b> A fifty or a hundred is close to unusable outside banks and chain supermarkets. Ones, fives and tens are what actually work.",
    `<b>Making lots of small ATM withdrawals.</b> With no exchange spread in the transaction, the ${F.atmFee} flat fee is your whole cost, so three small withdrawals cost roughly three times what one larger one does.`,
    "<b>Assuming you need Bitcoin.</b> You do not. No business is obliged to accept it, taxes cannot be paid in it, and the overwhelming majority of Salvadorans do not transact in it. Cash and cards cover everything.",
    `<b>Paying the old entry fee without question.</b> The ${F.entryCard} card was abolished in 2025. If a booth asks, it is cheap enough to pay rather than argue, but know that the law changed.`,
    "<b>Taking public buses because they are cheap.</b> They are, but US government employees are prohibited from using them, which is a strong signal. Use ride-hailing, shuttles or a hotel-arranged driver."
  ],

  tippingHeading: "Tipping, and how not to do it twice.",
  tipping: `Tipping in El Salvador is modest, and the main skill is reading the bill. At sit-down restaurants the convention is around ${F.propina}, but mid-range and upscale places commonly add that themselves as a <b>propina</b> or <b>propina sugerida</b> line, in which case nothing more is expected unless the service was genuinely special. At comedores and pupuserias no tip is expected at all, and leaving fifty cents or a dollar is generous. Taxi and ride-hailing drivers do not expect a tip, so rounding up a good ride is plenty. Hotel porters run about a dollar a bag and housekeeping a dollar or two a night. Guides are where tipping matters most, because it is a real part of the income: roughly 5 to 10 dollars per person for a half-day guide at a site like Joya de Ceren or on a volcano hike, and surf instructors in the El Tunco area are usually in the same range per session. Tip in cash in every case, even when the bill goes on a card, because a card tip often does not reach the person who served you.`,

  faqs: [
    { q: "What currency does El Salvador use?", a: "The US dollar, and it has since 2001. There is nothing to exchange, prices are quoted in dollars, ATMs dispense dollars, and the pay-in-dollars-or-local-currency prompt that costs you a few percent elsewhere does not arise. El Salvador does not mint its own coins, so your change is ordinary US cents." },
    { q: "Do I need to pay a tourist card fee to enter El Salvador?", a: `No. The ${F.entryCard} Tarjeta Migratoria de Ingreso was abolished in April 2025, when the Legislative Assembly voted to remove every article of the migration law that created it. Entry is free for US citizens for up to 90 days. Some official pages, including the US Embassy's own travel-requirements page, were still describing the old fee well after the change, so carry ${F.entryCard} in small bills as cheap insurance in case a booth applies the old rule.` },
    { q: "Do I need Bitcoin to visit El Salvador?", a: "No, and this is the most widely misunderstood thing about the country. Bitcoin's status was amended in January 2025 as a condition of an IMF programme: acceptance by businesses became voluntary, taxes can no longer be paid in it, and the requirement on the private sector was repealed. In practice the great majority of Salvadorans do not use it for transactions. Dollars and cards cover everything you will need." },
    { q: "How much should I tip in El Salvador?", a: `Around ${F.propina} at sit-down restaurants, but read the bill first, because mid-range and better places frequently add that themselves as a propina line. Missing it and tipping again is the most common way visitors overpay here. Nothing is expected at pupuserias or comedores, taxi drivers do not expect a tip, and guides are worth roughly 5 to 10 dollars a person for a half day. Always tip in cash.` },
    { q: "Are ATM fees high in El Salvador?", a: `Expect ${F.atmFee} per withdrawal plus whatever your own bank adds. The thing worth understanding is that in a dollarized country there is no exchange spread buried in the transaction, so that flat fee is the entire cost. That makes the arithmetic unusually clear: fewer, larger withdrawals are straightforwardly cheaper. Use machines inside banks or malls during daylight.` },
    { q: "Is El Salvador safe to visit?", a: `The US State Department currently rates it ${F.advisory}, its lowest tier, having raised the rating in 2025 to reflect a large fall in violent crime. That is the same tier as most of western Europe. Two caveats worth knowing: the state of exception introduced in 2022 remains in force, and other governments note a risk of arbitrary enforcement of local laws under it; and US government employees in the country are barred from using public buses and from travelling between cities after dark. Petty theft is the usual risk to visitors. ${F.emergency} is the emergency number and POLITUR is the tourist police.` }
  ],

  emergency: { medical: "911", note: "911 reaches police, ambulance and fire, the same number as at home, though operators generally speak Spanish. The fire service can also be reached on 913. POLITUR, the tourist police, patrol 19 tourist areas and are the right people for questions about local conditions.", checked: "Jul 2026", checkedISO: "2026-07-31" },

  culture: {
    heading: "A little Spanish, and three stories",
    intro: "Salvadorans have a reputation across Central America for being warm and direct, and the country sees few enough US visitors that making an effort still registers. A handful of words goes a long way.",
    phrases: [
      { mean: "Hello", say: "OH-lah", word: "Hola" },
      { mean: "Please", say: "por fah-VOR", word: "Por favor" },
      { mean: "Thank you", say: "GRAH-syahs", word: "Gracias" },
      { mean: "How much is it?", say: "KWAHN-toh KWES-tah", word: "Cuanto cuesta" },
      { mean: "The bill, please", say: "lah KWEN-tah", word: "La cuenta" },
      { mean: "Is the tip included?", say: "es-TAH een-kloo-EE-dah lah pro-PEE-nah", word: "Esta incluida la propina" }
    ],
    tip: "The word to know is <b>chero</b> (CHEH-roh), meaning mate or buddy, which is about as Salvadoran as language gets. You will also hear <b>guanaco</b>, which Salvadorans use affectionately for themselves. And <b>que chivo</b> (keh CHEE-voh) means how cool, used constantly.",
    stories: [
      { img: "/el-salvador-culture-1.jpg",
        alt: "WPA-style illustration of a dark symmetrical volcanic cone glowing red at its summit against a deep teal night sky, a plume of smoke drifting sideways, and a small two-masted sailing ship silhouetted on the calm water below in the volcano's reflected light",
        h: "The lighthouse that was a volcano",
        p: "Izalco rose out of a field in 1770 on the flank of the Santa Ana volcano and then erupted, on and off, for nearly two centuries. Sailors on the Pacific steered by the red glow at its summit, and it earned the name El Faro del Pacifico, the Lighthouse of the Pacific. It has been quiet since 1966. You can hike it from Cerro Verde National Park, and from the ridge you get it alongside Santa Ana's turquoise crater lake.",
        note: "Say it: Izalco (ee-SAHL-koh)" },
      { img: "/el-salvador-culture-2.jpg",
        alt: "WPA-style illustration of an excavated ancient Maya farming village sunk into pale volcanic ash, an adobe house with a thatched roof beside a round clay hearth and abandoned ceramic bowls, maize plants growing along the rim above and a hazy volcano on the far horizon",
        h: "The Pompeii where everybody lived",
        p: "Around AD 600 the Loma Caldera vent buried a farming village under ash, and because the ash fell cool and fast it preserved the place almost perfectly. Joya de Ceren is El Salvador's only UNESCO World Heritage site, and what makes it rare is that it is not a palace or a pyramid but ordinary life: thatched houses, a communal granary, grinding stones, painted pots, food left in bowls. And unlike Pompeii, no human remains have ever been found there. Everyone got out.",
        note: "Say it: Joya de Ceren (HOY-ah deh seh-REN)" },
      { img: "/el-salvador-culture-3.jpg",
        alt: "WPA-style illustration of a long clean wave peeling along a Salvadoran point break with a lone surfer riding the face, black volcanic rocks and dark sand in the foreground, palm trees leaning over the headland and volcanic ridges inland under a low golden sun",
        h: "The best waves nobody talked about",
        p: "El Salvador's Pacific coast has long right-hand point breaks that work with remarkable consistency, and for decades hardly anyone outside the surfing world knew. Punta Roca at La Libertad is the famous one, with El Tunco and El Sunzal as the places people actually stay. The government has leaned into it heavily as Surf City, and the coast is now the most developed part of the country for visitors, which is why it is also where cards work best.",
        note: "Say it: El Tunco (el TOON-koh)" }
    ],
    pride: "Here is the number that reframes the country: El Salvador is roughly the size of New Jersey, has more than twenty volcanoes, and is the only nation in the Americas with no Caribbean coastline at all. Everything faces the Pacific."
  },

  sources: {
    changed: "New guide, July 2026. Built around two corrections to what is widely published: the 12 dollar entry card was abolished in 2025 although official US pages were slow to say so, and the 10% propina is frequently already on the bill, which makes overtipping the more likely mistake than undertipping.",
    links: [
      { label: "Asamblea Legislativa de El Salvador: the reform that removed the Tarjeta Migratoria de Ingreso and its 12 dollar fee from the migration law", url: "https://www.asamblea.gob.sv/node/13554", type: "gov" },
      { label: "US State Department: the El Salvador travel advisory and its current level", url: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/el-salvador-travel-advisory.html", type: "gov" },
      { label: "US Embassy in El Salvador: entry requirements, and the page that still described the abolished entry fee", url: "https://sv.usembassy.gov/services/travel-requirements/", type: "gov" },
      { label: "PwC Tax Summaries: El Salvador IVA confirmed at 13%", url: "https://taxsummaries.pwc.com/el-salvador/corporate/other-taxes", type: "revenue" }
    ],
    judgment: `Two things here are firmer than what most guides publish, and both are primary-sourced. The <b>entry fee</b> is the bigger one: the Legislative Assembly's own record shows it reformed the Ley Especial de Migracion y de Extranjeria in April 2025 and derogated every article covering the Tarjeta Migratoria de Ingreso, including the ${F.entryCard} charge in article 325, at the request of the director of migration. The US Embassy's travel-requirements page still instructed travelers to pay it months afterward, and several commercial visa sites still do. We therefore say entry is free and also tell you to carry the cash, because the risk is not the money, it is a booth applying the old habit. The ${F.iva} IVA rate is confirmed on PwC's tax summary. The advisory level is quoted from the State Department's own page and advisory levels change, so check it before you travel rather than trusting this line. Everything with a dollar sign beyond the tax rate is a market range, not an official figure: the ${F.atmFee} ATM fee, the daily spending styles, the guide and porter tipping bands and the SIM prices are current typical figures from operators and from consistent traveler reporting, and they move. The ${F.propina} propina is a widespread commercial practice rather than a legal requirement, so it is not on every bill and the amount varies, which is exactly why we tell you to read the check instead of assuming a number. On lodging we could not confirm a primary source for the total tax on a hotel room; the figures in circulation suggest it exceeds ${F.iva} because a separate tourism levy applies, so we point you at your reservation total rather than publish a rate we have not verified. On Bitcoin, sources genuinely conflict over whether it remains legal tender after the January 2025 amendment, with the IMF's country report describing the reform as removing the essential features of legal tender while others say the status survives on paper with acceptance made voluntary. For a visitor the distinction is academic, so we answer the practical question instead: nobody has to take it, and you do not need it. Checked July 2026.`
  },

  spokes: [
    {
      slug: "visa-and-tourist-card",
      topic: "visas",
      live: true,
      glance: [
        { k: "Visa", v: "Not required for US citizens" },
        { k: "Tourist card", v: "Abolished in 2025, entry is free" },
        { k: "Length of stay", v: "90 days, shared with 3 countries" },
        { k: "Still worth packing", v: "$12, as insurance" }
      ],
      title: "El Salvador visa and tourist card for US citizens",
      description: "El Salvador scrapped the $12 tourist card in 2025, so entry is free. What the booth actually asks for, and why your 90 days are shared with 3 neighbors.",
      h1: "Do you need a visa or a tourist card for El Salvador?",
      lede: "The short answer is no to both, and the second half of that is recent enough that most of the internet, including some official pages, still says otherwise.",
      checked: "Jul 2026",
      checkedISO: "2026-07-31",
      answer: `<b>No visa</b>, and <b>no tourist card fee</b>. US citizens enter for tourism or business for up to <b>90 days</b> on a passport, with no form to fill in. The <b>${F.entryCard} Tarjeta Migratoria de Ingreso</b>, which nearly every guide still tells you to budget for, was <b>abolished in April 2025</b>: El Salvador's Legislative Assembly struck every article of the migration law that created it. Two things to understand anyway. Official US pages were <b>slow to reflect the change</b>, so carry <b>${F.entryCard}</b> in small bills as cheap insurance against a booth working from habit. And your 90 days are not really El Salvador's: under the <b>CA-4 agreement</b> they are <b>shared with Guatemala, Honduras and Nicaragua</b>, which catches people doing a Central America loop.`,
      sections: [
        {
          h: "The fee that no longer exists",
          icon: "receipt",
          key: { fig: "Abolished", tag: "The 12 dollar entry card", text: "El Salvador's Legislative Assembly removed the Tarjeta Migratoria de Ingreso from the migration law in April 2025, including the fee itself. Entry is free.", tone: "teal" },
          p: [
            `For years, entering El Salvador meant buying a <b>Tarjeta Migratoria de Ingreso</b>, commonly called the tourist card, for <b>${F.entryCard}</b> in cash at the border. It was not a visa, just a fee, and it applied to Americans, Canadians, Mexicans, Brazilians and a long list of others.`,
            "In April 2025 the <b>Legislative Assembly</b> reformed the <b>Ley Especial de Migracion y de Extranjeria</b> and derogated the card entirely, striking the fee from article 325 along with the supporting references elsewhere in the law. The request came from the director general of migration himself, whose argument was blunt: telling people they have to pay to enter the country is unacceptable, particularly when Salvadorans pay nothing to enter the United States or Mexico. The stated aim was to remove a barrier and encourage tourism.",
            "So there is nothing to buy on arrival. You will not be issued a card, and the officer will simply stamp your passport. This is the single most common thing published about El Salvador entry that is now wrong."
          ]
        },
        {
          h: "Why so many sources still say twelve dollars",
          icon: "alert",
          key: { fig: "Carry $12", tag: "Cheap insurance anyway", text: "Official US pages continued to describe the fee well after it was abolished. The cost of carrying the cash is nothing; the cost of arguing at a booth is your afternoon.", tone: "amber" },
          p: [
            "This is worth being specific about, because it is a useful lesson in how travel information decays. The <b>US Embassy in El Salvador's own travel-requirements page</b> was still instructing US citizens to obtain a tourist card for ${F.entryCard} at the port of entry months after the Salvadoran legislature had abolished it. Commercial visa sites, which largely copy from official pages, carried the old figure too, and many still do.",
            "We are not pointing that out to score a point. Official sources are still the right place to check, and we link them below. But an official page can be out of date, and where a foreign legislature has changed its own law, the legislature's record is the better authority than another country's summary of it.",
            `The practical upshot is not to argue. Put <b>${F.entryCard}</b> in small bills in your passport and forget about it. If an officer asks, paying twelve dollars costs less than a twenty-minute dispute at a booth after a long flight, and if nobody asks, which is what should happen, you have lost nothing.`
          ]
        },
        {
          h: "Your 90 days are shared with three other countries",
          icon: "calendar",
          key: { fig: "90 days", tag: "Pooled across four countries", text: "The CA-4 agreement treats El Salvador, Guatemala, Honduras and Nicaragua as one zone for your 90 days. Crossing between them does not reset the clock.", tone: "amber" },
          p: [
            "El Salvador belongs to the <b>Central America-4 Border Control Agreement</b>, alongside <b>Guatemala, Honduras and Nicaragua</b>. For a visitor this has one important consequence: your <b>90 days apply to all four countries combined</b>, not to each in turn. Hopping from El Salvador into Guatemala and back does not give you a fresh 90 days, and the clock starts at your <b>first entry into the CA-4 zone</b>, wherever that was.",
            "The officer at that first entry point sets the length of stay you are granted, which may be the full 90 days or less. That matters if you are doing the classic Central America overland loop, because people plan it assuming each border resets the count. To genuinely reset, you have to <b>leave the CA-4 region</b>, for example to Costa Rica, Belize or Mexico, and come back.",
            "If you need longer, extensions are requested from the <b>Direccion General de Migracion y Extranjeria</b> in San Salvador, and the application has to be filed <b>before</b> your existing permission expires rather than afterward. No holiday runs into this, but a longer stay or a remote-work trip might."
          ]
        },
        {
          h: "What the booth actually wants",
          icon: "passport",
          key: { fig: "3 things", tag: "Passport, onward ticket, address", text: "There is no arrival form to complete. Have your passport, proof of onward travel and your accommodation details ready, and be able to show you can fund the stay if asked.", tone: "teal" },
          p: [
            "Follow the signs for <b>Extranjeros</b>. There are <b>no landing cards or forms</b> to fill in. The officer will ask the purpose of your visit and how long you are staying, then stamp you in. Have three things to hand: your <b>passport</b>, <b>proof of onward or return travel</b>, and the <b>address of your first night's accommodation</b>. You may also be asked to show <b>sufficient funds</b> for the stay, and entry can be refused for lack of either that or the documents needed for your next destination.",
            "On <b>passport validity</b>, sources conflict and it is worth knowing which to trust. Commercial visa sites commonly state a six-month requirement. The <b>US Embassy in El Salvador states there is no requirement</b> for a US passport to be valid for any particular period, nor to have a specific number of blank pages. We would still not travel on a passport with a couple of weeks left, because onward countries and airlines have their own rules, but the six-month figure appears to be imported rather than Salvadoran.",
            "One carve-out worth knowing, given how many Salvadoran-Americans travel here: if your <b>US passport lists El Salvador as your place of birth</b>, the embassy's guidance is that neither the tourist card nor the proof-of-funds question applies to you. Show the passport and go through.",
            "Finally, there is <b>no departure tax to pay at the airport</b>. It is included in your airline ticket, so nobody should be asking you for cash on the way out."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for El Salvador?", a: "No. US citizens enter visa-free for tourism or business for up to 90 days, with no form to complete on arrival. You need a passport, proof of onward or return travel, and ideally your first night's address. Proof of sufficient funds can be requested." },
        { q: "Is there still a $12 tourist card fee for El Salvador?", a: `No. The ${F.entryCard} Tarjeta Migratoria de Ingreso was abolished in April 2025, when El Salvador's Legislative Assembly reformed the Ley Especial de Migracion y de Extranjeria and struck every article covering it, including the fee in article 325. Entry is free. Because several official and commercial pages were slow to update, carrying ${F.entryCard} in small bills is cheap insurance rather than a necessity.` },
        { q: "How long can I stay in El Salvador?", a: "Up to 90 days, but the important detail is that those days are shared. Under the CA-4 agreement the same 90 days cover El Salvador, Guatemala, Honduras and Nicaragua combined, and the clock starts when you first enter any of the four. Crossing between them does not reset it; you have to leave the CA-4 region entirely for that." },
        { q: "Does my passport need six months of validity for El Salvador?", a: "Sources disagree. Commercial visa sites often say six months, but the US Embassy in El Salvador states there is no specific validity requirement for a US passport, and no requirement for a set number of blank pages. Airlines and any onward country may still impose their own rules, so travelling with very little validity left is unwise regardless." },
        { q: "Is there a departure tax when leaving El Salvador?", a: "Not one you pay separately. Departure tax is included in the price of your airline ticket, so there should be no cash demand at the airport on your way out." }
      ],
      sources: {
        links: [
          { label: "Asamblea Legislativa de El Salvador: the April 2025 reform that removed the Tarjeta Migratoria de Ingreso and its fee from the migration law", url: "https://www.asamblea.gob.sv/node/13554", type: "gov" },
          { label: "US Embassy in El Salvador: entry requirements for US citizens, including the passport-validity position and the place-of-birth exemption", url: "https://sv.usembassy.gov/services/travel-requirements/", type: "gov" },
          { label: "US State Department: El Salvador country information and current travel advisory", url: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/el-salvador-travel-advisory.html", type: "gov" }
        ],
        judgment: `The central claim on this page is primary-sourced and we are confident in it: the Legislative Assembly's own published record shows it reformed the Ley Especial de Migracion y de Extranjeria in April 2025, derogating the articles covering the Tarjeta Migratoria de Ingreso including the ${F.entryCard} charge in article 325, at the request of the director general of migration. Salvadoran press and legal summaries of the reform agree. Set against that, the US Embassy's travel-requirements page still described the fee as payable months afterward, and many commercial visa services still do. We treat the legislature's record as authoritative on El Salvador's own law, and we tell you to carry the cash anyway because enforcement habit at a booth is not something a statute fixes overnight. The CA-4 pooling of 90 days is consistently documented and is the detail most likely to catch someone on an overland loop. On passport validity the sources genuinely conflict, and we quote the US Embassy's explicit statement that there is no set requirement rather than the six-month figure that circulates commercially, while still advising against cutting it fine. One source we found claimed a 180-day stay for US citizens; that is an outlier against the CA-4 framework and every other source, so we have not used it. Note also that this same law was amended again in March 2026 on investor residency and family reunification, so it is an actively changing statute: check the official pages before you fly rather than relying on this line. Overstay penalties are reported but we could not confirm the amounts on a primary source, so we have not published a figure. Checked July 2026.`
      }
    },
    {
      slug: "cash-or-card",
      topic: "cash",
      live: true,
      glance: [
        { k: "Currency", v: "US dollar, nothing to exchange" },
        { k: "Conversion cost", v: "None, there is no conversion" },
        { k: "ATM fee", v: "About $3 to $6, flat" },
        { k: "What matters", v: "Small bills, ones to tens" }
      ],
      title: "Cash or card in El Salvador? It uses US dollars",
      description: "El Salvador uses the US dollar, so no conversion and no pay-in-dollars trap. Where terminals exist, the flat ATM fee, and why small bills matter here.",
      h1: "Cash or card in El Salvador?",
      lede: "Most of our cash-or-card guides are about avoiding a bad exchange rate. This one cannot be, because there is no exchange rate. What replaces it is a simpler question about where you can tap and what you can break.",
      checked: "Jul 2026",
      checkedISO: "2026-07-31",
      answer: `Carry <b>both</b>, and think about denominations rather than currencies. El Salvador has used the <b>US dollar</b> since 2001, so paying cash costs you <b>nothing extra</b> and there is <b>no dynamic currency conversion prompt</b> to decline, because there is nothing to convert. Cards work well in <b>San Salvador</b> and the developed surf coast and thin out quickly beyond them. Cash is essential everywhere else, and specifically <b>small</b> cash: ones, fives and tens. On ATMs, expect ${F.atmFee} a withdrawal, and because no exchange spread is hiding in the transaction that flat fee is your <b>entire</b> cost, so take more out less often.`,
      sections: [
        {
          h: "The good news, stated plainly",
          icon: "coins",
          key: { fig: "Zero", tag: "Conversion cost to you", text: "There is no exchange rate between your money and El Salvador's, because they are the same money. The single biggest hidden cost we write about elsewhere does not exist here.", tone: "teal" },
          p: [
            "El Salvador abandoned the colon and adopted the <b>US dollar</b> as legal tender in 2001. For an American traveler that removes, at a stroke, most of what this site normally warns about. There is no airport exchange desk worth using because there is nothing to exchange. There is no <b>dynamic currency conversion</b> prompt on card terminals asking whether you would like to be billed in dollars, because the bill is in dollars already. There is no mental arithmetic and no rate to check.",
            "It also removes a subtler cost. In most countries a card payment carries a conversion spread you never see itemised, so the true cost of a transaction is slightly more than the price. Here a purchase is a purchase. The one thing worth checking is your own card's terms, because a few US issuers levy a <b>foreign transaction fee</b> based on where the merchant is located rather than on whether a currency conversion happened, which would be a fee for nothing. A no-foreign-fee card removes that doubt.",
            "El Salvador also does not mint its own coins, unlike Ecuador, the other dollarized country we cover. The coins in your change are ordinary US cents."
          ]
        },
        {
          h: "Where cards actually work",
          icon: "card",
          key: { fig: "2 zones", tag: "The capital and the coast", text: "Card acceptance is concentrated in San Salvador's wealthier districts and along the developed surf coast. Beyond those, assume cash.", tone: "amber" },
          p: [
            "<b>Visa and Mastercard</b> are the useful networks. Acceptance is strongest in San Salvador, particularly the <b>Zona Rosa</b>, <b>Colonia Escalon</b> and the large malls, and in the affluent suburbs of <b>Santa Tecla</b> and <b>Antiguo Cuscatlan</b>, where paying by card feels like any mid-sized Latin American capital. International hotel chains take cards without issue, and the established businesses along the surf coast around <b>El Tunco</b> and <b>El Sunzal</b> generally do too.",
            "Outside that footprint, plan for cash. Markets, comedores, pupuserias, buses, small-town shops, parking attendants and most rural tourism run on notes. <b>Amex</b> is accepted at some upmarket hotels and restaurants but should never be your only card, and <b>Discover</b> is rarely worth carrying.",
            "One habit that pays off: use cards deliberately at the places that can take them, especially supermarkets and chain shops, and treat those transactions as your opportunity to <b>preserve small bills</b> rather than break them. Your small notes are a resource with a real use, and spending them on a supermarket shop that would have taken a card is a small waste."
          ]
        },
        {
          h: "Why the ATM fee is unusually easy to optimise",
          icon: "receipt",
          key: { fig: "$3-6", tag: "Per withdrawal, flat", text: "With no exchange spread in the transaction, the flat fee is the whole cost. That makes fewer, larger withdrawals cheaper in a way that is rarely so clear-cut.", tone: "amber" },
          p: [
            `Machines are common in bank branches and shopping malls and they dispense dollars. Expect ${F.atmFee} per withdrawal from the local bank, plus whatever your own bank charges on top. In most countries this calculation is muddied, because alongside the visible fee there is an invisible exchange margin, and a card that waives fees can still lose you money on the rate.`,
            "Here there is no rate. The flat fee is the total cost of getting cash, which means the optimisation is unambiguous: <b>withdraw less often and take more each time</b>. Three withdrawals of a hundred dollars can cost roughly three times what one withdrawal of three hundred does, for exactly the same cash in your pocket. Decide your rough cash budget for the trip and take it in as few trips to the machine as you are comfortable carrying.",
            "On which machine: prefer ATMs <b>inside</b> a bank branch or a mall, during daylight, over street-facing ones. That is ordinary sense rather than an El Salvador peculiarity, but it applies. And ask for smaller denominations if the machine offers the choice, because a machine that hands you fifties has just created the problem the next section is about."
          ]
        },
        {
          h: "The denomination problem",
          icon: "alert",
          key: { fig: "1s to 10s", tag: "What you actually need", text: "A pupuseria cannot break a fifty. Small bills are the most useful thing you can bring, and running out of them is the most common daily friction here.", tone: "amber" },
          p: [
            "This is the part travelers underestimate, because in a dollarized country it feels like your money should just work. It does, but only in the denominations the seller can handle. A <b>pupuseria, market stall, bus or taxi generally cannot break a twenty</b>, and a fifty or a hundred is close to unusable outside a bank or a large supermarket. Turning up with three crisp hundreds is turning up with very little spendable money.",
            "So arrive with a genuine float of <b>ones, fives and tens</b>, in reasonable condition, and manage it actively during the trip. Break larger notes where breaking is easy, at supermarkets, chain pharmacies and international hotels, and keep the small ones for the street. Splitting your cash across a pocket, a day bag and the hotel safe is worth doing here as anywhere.",
            "Small bills are also how you tip, and tipping in cash matters in El Salvador because a tip added to a card slip often does not reach the person who served you. See the <a href='/el-salvador/tipping'>El Salvador tipping guide</a> for how much, and read the bill first, because the service charge may already be on it."
          ]
        }
      ],
      faqs: [
        { q: "Do I need to exchange money for El Salvador?", a: "No. El Salvador has used the US dollar as its currency since 2001, so your money is already the local money. Skip the airport exchange desk, ignore any prompt about billing currency, and simply bring dollars and a card." },
        { q: "Will I be charged a foreign transaction fee in El Salvador?", a: "You should not be charged a conversion cost, because no conversion happens. However, a small number of US card issuers apply a foreign transaction fee based on where the merchant is located rather than on whether currency was converted, which would mean paying a fee for nothing. A card with no foreign transaction fee removes the question entirely." },
        { q: "How much cash should I bring to El Salvador?", a: "Enough small bills to cover the cash-only part of your spending, which is a larger share here than in most places we cover. Ones, fives and tens are what matter; fifties and hundreds are hard to spend outside banks and big supermarkets. Top up from ATMs as you go, in larger, less frequent withdrawals." },
        { q: "Are ATMs easy to find in El Salvador?", a: `Yes in San Salvador and the main towns, where machines sit in bank branches and shopping malls and dispense dollars. Expect ${F.atmFee} a withdrawal on top of your own bank's charge. Prefer machines inside banks or malls in daylight, and take out more per visit, since the flat fee is your entire cost.` },
        { q: "Can I pay with Bitcoin in El Salvador?", a: "Sometimes, but you never need to. Since the law was amended in January 2025 acceptance is voluntary for businesses, taxes cannot be paid in it, and most Salvadorans do not use it for everyday transactions. Dollars and cards cover everything." }
      ],
      sources: {
        links: [
          { label: "PwC Tax Summaries: El Salvador IVA confirmed at 13%", url: "https://taxsummaries.pwc.com/el-salvador/corporate/other-taxes", type: "revenue" },
          { label: "US State Department: El Salvador country information, including local conditions", url: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/el-salvador-travel-advisory.html", type: "gov" }
        ],
        judgment: `Dollarization since 2001 is settled fact and drives most of this page. The ${F.iva} IVA rate is from PwC's tax summary. Everything else here is a current market picture rather than an official figure. The ${F.atmFee} withdrawal fee is the band travelers and money guides consistently report in 2026 and it varies by bank and machine, so treat it as a planning number. The card-acceptance geography, naming San Salvador's wealthier districts and the developed surf coast, is our own read from consistent reporting rather than a published coverage map, and card infrastructure spreads over time, so it will understate acceptance sooner or later. The point about a few US issuers charging a foreign transaction fee where no conversion occurred is a real quirk of card terms rather than a rule, so check your own agreement. Checked July 2026.`
      }
    },

    {
      slug: "tipping",
      topic: "tipping",
      live: true,
      glance: [
        { k: "Restaurants", v: "About 10%, often already added" },
        { k: "The real risk", v: "Tipping twice, not too little" },
        { k: "Taxis", v: "No tip expected" },
        { k: "Always", v: "Tip in cash" }
      ],
      title: "Tipping in El Salvador: read the bill first 2026",
      description: "The 10% propina is often already printed on the check, so the common mistake is tipping twice and paying about 20%. Guides, drivers and hotel staff too.",
      h1: "Tipping in El Salvador, and how not to do it twice",
      lede: "Most tipping guides worry you are about to under-tip. In El Salvador the more likely error runs the other way, because the tip is often already on the bill and easy to miss.",
      checked: "Jul 2026",
      checkedISO: "2026-07-31",
      answer: `The convention at sit-down restaurants is around <b>${F.propina}</b>, but mid-range and upscale places frequently <b>add it themselves</b> as a <b>propina</b> or <b>propina sugerida</b> line on the printed check. If it is there, nothing more is expected. Miss it and add another ${F.propina} and you have paid roughly <b>20%</b>, which is the single most common way visitors overpay in El Salvador. So the instruction is simply: <b>read the check before you sign</b>. Elsewhere, tipping is light. <b>Taxi and ride-hailing drivers do not expect a tip.</b> Nothing is expected at a pupuseria. <b>Guides are the exception</b> and are worth real money, roughly <b>5 to 10 dollars per person</b> for a half day. Tip in <b>cash</b> every time.`,
      sections: [
        {
          h: "Read the check, then decide",
          icon: "receipt",
          key: { fig: "10%", tag: "Often already printed", text: "At mid-range and better restaurants the propina is commonly added for you. It is a line item on the check, not a legal requirement, so it is not always there and the amount varies.", tone: "amber" },
          p: [
            `The habit to build in El Salvador takes five seconds: before you sign anything, look down the check for a line reading <b>propina</b>, <b>propina sugerida</b> or <b>servicio</b>. At mid-range and upscale restaurants, and particularly in San Salvador, it is commonly there at around <b>${F.propina}</b> of the food total. When it is, the tip is done and nothing further is expected unless the service was genuinely special, in which case rounding up in cash is a kind gesture rather than an obligation.`,
            `Where it is <b>not</b> there, ${F.propina} in cash on the table is the normal thing. The reason this matters more than the usual tipping small print is the size of the mistake: adding a full tip on top of an included one takes you to roughly 20% of the bill, and on a week of dinners that is real money spent by accident rather than by choice.`,
            "It is worth being clear that this is a <b>commercial practice, not a law</b>. Nobody is obliged to add it and the percentage is not fixed, which is exactly why we cannot tell you a number that will be on your bill and why looking is the only reliable method. The phrase to ask, if the check is unclear, is <b>esta incluida la propina</b>."
          ]
        },
        {
          h: "What the rest of a trip looks like",
          icon: "coins",
          key: { fig: "$5-10", tag: "Per person, half-day guide", text: "Guiding is the one place where tipping is a real part of the income. Everywhere else in El Salvador, tipping is genuinely light.", tone: "teal" },
          p: [
            "<b>Guides</b> matter most. For a half-day at <b>Joya de Ceren</b> or <b>Tazumal</b>, or a guided volcano hike at <b>Cerro Verde</b>, roughly <b>5 to 10 dollars per person</b> is the normal band, more for something outstanding or a full day. <b>Surf instructors</b> along the coast around <b>El Tunco</b> sit in about the same range per session. These are people for whom the tip is a meaningful share of earnings, not a garnish.",
            "<b>Hotels</b> are simple: about a dollar a bag for porters, a dollar or two a night for housekeeping, left where it will be found. <b>Taxi and ride-hailing drivers do not expect anything</b>, so rounding up a fare you were happy with is more than enough, and a fixed-price ride needs nothing at all.",
            "At <b>comedores and pupuserias</b>, the everyday places you will probably enjoy most, no tip is expected. Leaving the change, or fifty cents to a dollar, reads as generous rather than as the minimum. This is a country where light tipping is normal and nobody is quietly judging an American for not producing 20%."
          ]
        },
        {
          h: "Why cash, specifically",
          icon: "cash",
          key: { fig: "Cash only", tag: "For the tip itself", text: "A tip added to a card slip frequently does not reach the person who served you. Small bills are the working currency of tipping here.", tone: "amber" },
          p: [
            "Pay the bill however you like, but <b>tip in cash</b>. Where a card tip is routed through a business rather than handed over, there is no reliable guarantee it reaches the individual, and that is a general truth in much of Latin America rather than a specific accusation about El Salvador. Cash removes the doubt.",
            "This connects to the one piece of preparation that matters most for a trip here: bringing <b>small bills</b>. Ones, fives and tens are what tipping runs on, and they are also what taxis, stalls and pupuserias need. Arriving with only twenties and fifties makes tipping awkward in a way that has nothing to do with generosity. The <a href='/el-salvador/cash-or-card'>El Salvador cash and cards guide</a> covers how to manage that float.",
            "One last thing worth saying plainly, because the currency invites the assumption: the fact that El Salvador uses the dollar does <b>not</b> mean US tipping norms apply. Wages, prices and expectations are local. Around ${F.propina} where it is not already included, light everywhere else, and generous with guides is the shape of it."
          ]
        }
      ],
      faqs: [
        { q: "Is the tip included in El Salvador?", a: `Often, at mid-range and upscale restaurants, as a propina or propina sugerida line of about ${F.propina} on the printed check. It is a commercial practice rather than a legal requirement, so it is not on every bill and the amount varies. Read the check before you sign, and if it is there, nothing more is expected.` },
        { q: "How much do you tip in restaurants in El Salvador?", a: `Around ${F.propina} where it has not already been added for you, left in cash. Where it has been added, the tip is done. The common and expensive mistake is missing the included line and adding a second ${F.propina}, which takes the bill to roughly 20%.` },
        { q: "Do you tip taxi drivers in El Salvador?", a: "No, taxi and ride-hailing drivers do not expect a tip. Rounding up a fare you were pleased with is plenty, and a ride at an agreed fixed price needs nothing added." },
        { q: "How much should I tip a guide in El Salvador?", a: "Roughly 5 to 10 dollars per person for a half-day guide at a site like Joya de Ceren or on a volcano hike, and more for a full day or exceptional service. Surf instructors around El Tunco are usually in the same range per session. Guiding is the one area where the tip is a real part of the income." },
        { q: "Should I tip in dollars or local currency in El Salvador?", a: "Dollars, because the dollar is the local currency. What matters is the denomination rather than the currency: keep ones, fives and tens for tipping, since that is what tipping runs on, and always hand the tip over in cash rather than adding it to a card slip." }
      ],
      sources: {
        links: [
          { label: "PwC Tax Summaries: El Salvador IVA at 13%, the tax shown separately from any service charge", url: "https://taxsummaries.pwc.com/el-salvador/corporate/other-taxes", type: "revenue" }
        ],
        judgment: `Nothing on this page is a regulated figure, and that is the honest headline. The ${F.propina} propina is a commercial practice, not a legal service charge, so we cannot tell you it will be on your bill or exactly what it will be, which is why the advice is to read the check rather than to expect a number. That it is commonly added at mid-range and better restaurants is consistently reported across current travel and money sources and by long-standing guidebook coverage, and it is the most corroborated claim here. The specific amounts for guides, porters, housekeeping and instructors are typical bands from those same sources plus our own read, not official rates, and they will drift. The ${F.iva} IVA figure is from PwC. Checked July 2026.`
      }
    },

    {
      slug: "taxis-and-apps",
      topic: "taxis",
      live: true,
      glance: [
        { k: "Best option", v: "Uber, in the capital" },
        { k: "Street taxis", v: "No meters, agree first" },
        { k: "Airport to city", v: "Roughly $25 to $35" },
        { k: "Buses", v: "Cheap, but widely advised against" }
      ],
      title: "Taxis and ride-hailing in El Salvador 2026",
      description: "Uber works in San Salvador and fixes both problems with local taxis: no meters and no agreed price. What the airport run costs, and the truth on buses.",
      h1: "Taxis and ride-hailing in El Salvador",
      lede: "Getting around San Salvador is one of the places where an app is not just cheaper but genuinely simpler, because the alternative involves negotiating every fare from scratch.",
      checked: "Jul 2026",
      checkedISO: "2026-07-31",
      answer: `Use <b>Uber</b> in San Salvador. It operates in the capital, the fare is fixed and visible before you accept, and it removes the two frictions of a Salvadoran street taxi: there are <b>no meters</b>, so every ride is a negotiation, and you have no reference price. Expect roughly <b>25 to 35 dollars</b> from the airport into the city, which is a long run of around 50 kilometres. Where there is no app, use a taxi arranged through your hotel and <b>agree the fare before you get in</b>. On <b>public buses</b>, be aware that US government employees in El Salvador are prohibited from using them, which is a clearer signal than any review.`,
      sections: [
        {
          h: "Why the app matters more here",
          icon: "phoneok",
          key: { fig: "No meters", tag: "In Salvadoran taxis", text: "Street taxis do not run meters, so the fare is whatever you agree. An app replaces a negotiation you cannot benchmark with a price you can see.", tone: "amber" },
          p: [
            "Salvadoran taxis do not generally have <b>meters</b>. That is not presented as a trick; it is simply how they work, and locals negotiate as a matter of course. The difficulty for a visitor is that negotiating requires knowing roughly what a ride should cost, and on your first day you do not. The gap between what a local pays and what a newly arrived tourist agrees to can be considerable, without anyone doing anything improper.",
            "<b>Uber</b> resolves this cleanly in San Salvador. The price is calculated and shown before you accept, the route is recorded, payment can go on the card in the app, and there is no conversation about money at all. Because El Salvador uses the dollar, the fare you see is a plain dollar figure with no conversion to think about.",
            "Outside the capital, app coverage thins out. In the surf towns and smaller places, the reliable approach is a taxi <b>arranged through your hotel</b>, which gives you a known driver and usually a quoted price, or a pre-booked shuttle between destinations. For longer hops between tourist areas, private shuttles are the normal way visitors move around and are worth pricing against a day of taxis."
          ]
        },
        {
          h: "The airport run",
          icon: "plane",
          key: { fig: "$25-35", tag: "Airport to San Salvador", text: "San Salvador's airport sits a long way out, so this is a substantial ride rather than a hop. Settle the price before you move.", tone: "teal" },
          p: [
            "San Salvador International sits roughly <b>50 kilometres</b> south of the city, near the coast, so the transfer is a proper journey of around 45 minutes to an hour depending on traffic. Budget in the region of <b>25 to 35 dollars</b> for a car into the city. That range covers app pricing and a sensibly negotiated official taxi; a much higher opening quote from someone who approaches you in the terminal is the thing to walk away from.",
            "If you are heading straight to the <b>coast</b> instead, the airport is actually closer to the surf towns than it is to the capital, which is a pleasant surprise and worth factoring into where you spend your first night. Many visitors go directly to <b>El Tunco</b> or nearby and never touch San Salvador on arrival.",
            "Two practical notes. Arrange the ride <b>before</b> you walk out, either through your hotel or in the app, rather than negotiating on the pavement with bags. And install your <b>eSIM before you fly</b>, because travelers consistently report that the arrivals and customs area has poor or no signal, which is an awkward moment to discover you cannot open a ride-hailing app."
          ]
        },
        {
          h: "Buses, and being straight about them",
          icon: "alert",
          key: { fig: "Not advised", tag: "Public buses", text: "Buses are very cheap and used by everyone, but US government staff are barred from them and several governments advise against them. We think you should know that before choosing.", tone: "amber" },
          p: [
            "El Salvador's public buses cost a fraction of anything else and they are how most Salvadorans travel. We are not going to pretend they are unusable. But the honest position is that the <b>US State Department prohibits US government employees in El Salvador from using public buses</b> outright, and other governments' advice points the same way, generally citing crime on routes and vehicle safety rather than any single incident.",
            "That is a stronger and more specific signal than a review, and it is the kind of thing we would want to know rather than have smoothed over. It does not mean a bus ride will go wrong. It does mean that if something did, you would have chosen a mode that the traveler's own government explicitly avoids, and we would rather you make that choice with the information than without it.",
            "The practical alternatives are ride-hailing in the capital, hotel-arranged taxis locally, and <b>pre-booked shuttles</b> between tourist destinations, which are the standard way visitors cover ground and are reasonable value when split. If you do rent a car, the standing advice from several governments is to avoid <b>driving at night</b> and to be careful on unpaved roads."
          ]
        }
      ],
      faqs: [
        { q: "Does Uber work in El Salvador?", a: "Yes, in San Salvador. It is the easiest way to get around the capital, because the fare is fixed and shown before you accept, which sidesteps the fact that Salvadoran taxis do not use meters. Coverage is thinner outside the capital, where a hotel-arranged taxi or a pre-booked shuttle is the practical alternative." },
        { q: "How much is a taxi from San Salvador airport to the city?", a: "Roughly 25 to 35 dollars. The airport is about 50 kilometres from the city, so it is a substantial ride of around 45 minutes to an hour. Arrange it through your hotel or an app before you leave the terminal rather than negotiating outside with your bags, and be wary of anyone who approaches you inside." },
        { q: "Do taxis in El Salvador have meters?", a: "Generally not, so the fare is whatever you and the driver agree before you set off. That is normal practice rather than a scam, but it does mean a visitor with no reference price is at a disadvantage, which is why an app with a visible fixed fare is worth using where one is available." },
        { q: "Are public buses safe in El Salvador?", a: "They are very cheap and widely used by Salvadorans, but we would want you to know that the US State Department prohibits US government employees in the country from using them, and other governments advise against them too. That is a specific signal worth weighing. Ride-hailing, hotel taxis and pre-booked shuttles are the alternatives visitors normally use." },
        { q: "Should I rent a car in El Salvador?", a: "It is workable, and the country is small enough that driving is appealing. The standing official advice is to avoid driving at night and to be cautious on unpaved roads, and one local quirk worth knowing is that stolen manhole covers sometimes leave open holes in the road. For getting around San Salvador itself, ride-hailing is easier than parking." }
      ],
      sources: {
        links: [
          { label: "US State Department: El Salvador travel advisory, including the restrictions placed on US government employees", url: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/el-salvador-travel-advisory.html", type: "gov" }
        ],
        judgment: "The restriction on US government employees using public buses, and the prohibition on intercity travel after dark, are quoted from the State Department's own advisory and are the firmest claims here. That Salvadoran taxis do not generally use meters, and that Uber operates in San Salvador, are consistently reported and match how visitors describe getting around, but app coverage changes and is worth checking before you rely on it. The 25 to 35 dollar airport fare is a current market range from traveler reporting rather than a regulated tariff, and unlike Rome or Athens there is no official flat airport fare here to hold anyone to, which is precisely why we suggest fixing the price in advance. The distance from the airport to the city is approximate. Checked July 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Good in San Salvador and on the coast" },
        { k: "Carrier roaming", v: "$10 to $12 a day" },
        { k: "Cheapest", v: "A local SIM, and it is cheap" },
        { k: "Signal gaps", v: "The northern mountains" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "El Salvador: cheap local data, and a small country to cover",
      description: "Salvadoran coverage is good in the capital, along the coast and on the main highways. Local data is cheap, and the country is small enough that gaps are brief.",
      h1: "Staying connected in El Salvador.",
      lede: "El Salvador is small, increasingly visited, and reasonably well covered where visitors go. Local data is cheap and the gaps are short, which makes this a short page.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>good in San Salvador, along the Pacific coast</b> from La Libertad to El Tunco and El Zonte, and on the main highways including the route to Santa Ana and Suchitoto. It thins in the <b>northern mountains</b> toward the Honduran border, in the Morazan interior and on some volcano approaches. A local <b>Tigo</b> or <b>Claro</b> prepaid SIM with a data bundle is cheap, bought with your <b>passport</b>, and it is the cheaper option; a <b>Nomad eSIM</b> at a few dollars per gigabyte works from landing. Your US carrier charges about <b>${S.dayPass}</b> to roam (<b>AT&amp;T and Verizon</b> day passes), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon has ${S.verizonNoCap}</b> and keeps billing daily. <b>T-Mobile</b>'s mid and upper tiers include <b>${S.tmoRange}</b> of high-speed data abroad before slowing to <b>${S.throttle}</b>. El Salvador is on <b>AT&amp;T's covered-destination list</b>, so a day pass applies rather than pay-per-use. The country uses the <b>US dollar</b>, which removes a layer of friction from topping up. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "Cheap, and the local SIM wins on price",
          icon: "tag",
          key: { fig: "Cheap local", tag: "Tigo or Claro", text: "A local prepaid bundle is inexpensive and priced in US dollars, which removes the top-up puzzle. Either network covers the visitor route.", tone: "teal" },
          p: [
            `A <b>Tigo</b> or <b>Claro</b> prepaid SIM with a data bundle is inexpensive, sold in carrier shops, malls and at the airport with your <b>passport</b>, and both networks cover the capital, the coast and the main highways comfortably, so there is no network worth paying extra for. One quiet advantage: El Salvador uses the <b>US dollar</b>, so topping up does not involve a currency conversion or an unfamiliar payment app.`,
            `That makes the local SIM the cheaper answer, and we earn nothing on it. A <b>Nomad eSIM</b> at a few dollars per gigabyte is the convenience option: no shop, working from landing, useful if you are arriving late at Comalapa and want a ride sorted before you leave the terminal.`
          ]
        },
        {
          h: "Where it thins, briefly",
          icon: "phoneok",
          key: { fig: "The north", tag: "Where signal thins", text: "The northern mountains, the Morazan interior and some volcano approaches are patchy. The country is small, so gaps are short.", tone: "teal" },
          p: [
            `The gaps here are real but brief, because the country is small: the <b>northern mountains</b> toward the Honduran border, the <b>Morazan</b> interior, the higher approaches on <b>Santa Ana</b> and <b>Izalco</b>, and some of the back roads inland from the coast. You are rarely more than an hour from coverage, which is a different situation from Patagonia or Namibia.`,
            `So the usual habit is enough: <b>download offline maps</b> for a volcano hike or a drive into the hills, and save your accommodation's number. Surf towns along the coast have workable coverage and widespread cafe wifi. This guide is written for US travelers departing the US. For more, see <a href='/el-salvador/cash-or-card'>cash or card in El Salvador</a>, <a href='/el-salvador/taxis-and-apps'>taxis and apps in El Salvador</a>, and the <a href='/el-salvador'>El Salvador money guide</a>.`
          ]
        },
        {
          h: "What roaming costs, and the covered-list check",
          icon: "roamfee",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: "A US carrier day pass is the expensive default. AT&T caps it at 10 daily fees a bill period, Verizon does not cap at all, and T-Mobile's mid and upper tiers include 5GB to 30GB abroad.", tone: "teal" },
          p: [
            `Worth confirming because it changes the advice completely: <b>El Salvador is on AT&amp;T's covered-destination list</b>, so a day pass applies at about <b>${S.dayPass}</b> rather than the pay-per-use rate you would face in an uncovered country. <b>AT&amp;T</b> caps land fees at <b>${S.capFees}</b>, about <b>${S.capAmount}</b>, and <b>Verizon has ${S.verizonNoCap}</b>.`,
            `<b>T-Mobile</b>'s current tiers include roughly <b>${S.tmoLow}</b> on Experience More, Magenta MAX and Go5G Plus, <b>${S.tmoMid}</b> on Experience Beyond and Go5G Next and <b>${S.tmoHigh}</b> on Better Value, slowing to <b>${S.throttle}</b> after, so check your own plan first: on a week of surfing with cafe wifi that may be all you need. Do not roam with <b>no plan</b>, at about <b>${S.ppu}</b>.`
          ]
        }
      ],
      faqs: [
        { q: `How much is a SIM card in El Salvador?`, a: `A Tigo or Claro prepaid bundle is cheap, bought with your passport in a carrier shop, a mall or at the airport. Since El Salvador uses the US dollar, topping up involves no currency conversion, which removes the usual friction.` },
        { q: `Is El Salvador covered by US carrier day passes?`, a: `Yes. El Salvador is on AT&T's covered-destination list, so a day pass applies at about $10 to $12 a day rather than the pay-per-use rate that would apply in an uncovered country. That is worth confirming, because the advice would be completely different otherwise.` },
        { q: `Will I have signal on the Salvadoran coast?`, a: `Yes, generally good along the Pacific coast from La Libertad through El Tunco and El Zonte, with widespread cafe wifi in the surf towns. It thins in the northern mountains, the Morazan interior and on the higher volcano approaches.` },
        { q: `How much does it cost to use my US phone in El Salvador?`, a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "AT&T: the International Day Pass destination list, which includes El Salvador", url: "https://www.att.com/support/article/wireless/KM1395068/", type: "card" },
          { label: "US State Department: El Salvador country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/ElSalvador.html", type: "gov" }
        ],
        judgment: "Checked Aug 2026. El Salvador's inclusion on AT&T's covered-destination list was verified against AT&T's own list, because it was one of two countries in this wave we would not state a day-pass price for without checking: in an uncovered country the honest line is a pay-per-use warning instead. The local SIM is cheaper than the eSIM we earn on and the page says so. Coverage reads are the desk's from operator footprints and traveler accounts, and the country's size means the gaps are short."
      }
    },
    {
      slug: "medical-costs",
      exposureCategory: "evacuationIsTheCost",
      exposureQuote: "routine care you handle, the transfer you insure",
      glance: [
        { k: "You pay", v: "Out of pocket as a visitor" },
        { k: "Where care is", v: "San Salvador, and limited" },
        { k: "Ambulances", v: "State service is very basic" },
        { k: "Real risk", v: "Evacuation to the US" }
      ],
      live: true,
      topic: "health",
      title: "Getting sick in El Salvador: what a visitor pays",
      description: "Doctors in the main hospitals are often US-trained, but emergency services are basic even in San Salvador and serious cases can mean flying home. Checked 2026.",
      h1: "What does getting sick in El Salvador cost?",
      lede: "El Salvador has a specific and slightly unusual shape: the doctors in the main private hospitals are frequently well trained, often in the US, while the emergency and ambulance layer around them is thin. That gap is what to plan around.",
      checked: "Aug 2026",
      checkedISO: "2026-08-20",
      answer: "As a visitor you <b>pay out of pocket</b>, and the practical route is a <b>private hospital in San Salvador</b>. The US Embassy's own assessment is worth reading carefully: <b>medical care is limited</b>, <b>emergency services even in San Salvador are very basic</b>, and <b>state-funded ambulances are not staffed by well-trained personnel and sometimes lack life-saving necessities</b>. At the same time, <b>physicians in the major hospitals are generally well trained, often in US hospitals</b>, while nursing and support staff are not to US standards. The Embassy notes that problems requiring hospitalisation or <b>medical evacuation to the United States can cost thousands of dollars</b>. That gap, not a consultation, is what cover is for.",
      insurance: true,
      careFirst: "If it looks serious, get to a private hospital first and deal with the bill afterwards.",
      sections: [
        {
          h: "Good doctors, thin emergency layer",
          icon: "alert",
          key: { tag: "The gap", text: "Physicians in the major hospitals are often US-trained, but emergency services even in San Salvador are described as very basic and state ambulances may lack life-saving equipment.", tone: "amber" },
          p: [
            "This is the honest shape of El Salvador and it is not the shape people expect. The US Embassy in San Salvador states that <b>physicians in the major hospitals are generally well trained, often in US hospitals</b>, while <b>nursing and support staff is not up to US standards</b>. In the same assessment it says <b>medical care is limited</b> and that <b>emergency services, even in San Salvador, are very basic</b>.",
            "The sharpest part is the ambulance layer: <b>state-funded ambulance services are not staffed by well-trained personnel and sometimes lack life-saving necessities</b>. The practical read is that <b>getting to the hospital is the weak link, not the hospital</b>. If you are in a position to be driven to a private facility rather than waiting for a public ambulance, that is often the faster route. <b>If it looks serious, get to a private hospital first and deal with the bill afterwards.</b>"
          ]
        },
        {
          h: "The expensive scenario is a flight",
          icon: "plane",
          key: { tag: "Evacuation", text: "The Embassy notes that hospitalisation or medical evacuation to the United States can cost thousands of dollars. Proximity to the US makes that cheaper here than from most places, but it is still the big number.", tone: "amber" },
          p: [
            "The Embassy is explicit that medical problems requiring <b>hospitalisation and, or, medical evacuation to the United States can cost thousands of dollars</b>. El Salvador is close enough to the US that this is a shorter and cheaper flight than from most of the countries we cover, which is genuinely reassuring, and it is still the largest number in the picture by a wide margin.",
            "So the sentence we would put on a fridge magnet for El Salvador is: <b>routine care you handle, the transfer you insure</b>. Check your policy's <b>evacuation limit</b> and whether it will <b>guarantee payment</b> to a hospital rather than reimburse you weeks later, because a private admission may want money before it wants your paperwork."
          ]
        },
        {
          h: "Why there are no prices on this page",
          icon: "tag",
          key: { tag: "Absence is not zero", text: "We could not source Salvadoran routine-care prices we would defend, so we published none rather than estimating on a medical page.", tone: "teal" },
          p: [
            "We have <b>not printed local price figures</b> here, because we could not source Salvadoran routine-care prices we would stand behind. On a page about being unwell abroad, we think a short honest account beats a longer one propped up by numbers we cannot show you the source for.",
            "The structure is what plans a trip anyway: <b>you pay</b>, <b>private is the route</b>, <b>the ambulance layer is the weak point</b>, and <b>the transfer is the expensive event</b>. Ask your insurer for its evacuation limit and its assistance number, and you will know more about your actual exposure than any consultation fee would tell you."
          ]
        },
        {
          h: "What this means for your money",
          icon: "cash",
          key: { tag: "Private, and documented", text: "Plan to use private care, keep every receipt and report, and carry the assistance line offline. US health plans and Medicare will not cover you here.", tone: "teal" },
          p: [
            "Assume <b>private care and out-of-pocket payment</b>, keep <b>every receipt, invoice and medical report</b>, and carry your insurer's <b>24 hour assistance number</b> somewhere you can reach it without data. Your US health plan will almost certainly not pay a Salvadoran hospital directly, and <b>Medicare does not apply overseas at all</b>.",
            "For how to hold and move money day to day, including where cards work and where they do not, see the <a href='/el-salvador/cash-or-card'>El Salvador cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is medical care good in El Salvador?", a: "It is uneven in a specific way. The US Embassy notes that physicians in the major hospitals are generally well trained, often in US hospitals, while nursing and support staff are not to US standards, medical care overall is limited, and emergency services even in San Salvador are very basic." },
        { q: "Are ambulances reliable in El Salvador?", a: "The US Embassy states that state-funded ambulance services are not staffed by well-trained personnel and sometimes lack life-saving necessities. Where you have the option, being driven directly to a private hospital is often the faster route." },
        { q: "Do I need travel insurance for El Salvador?", a: "The reason to carry it is the transfer rather than the clinic. The Embassy notes that hospitalisation or medical evacuation to the United States can cost thousands of dollars. Check the evacuation limit on your policy and whether your insurer guarantees payment to the hospital." },
        { q: "How much does a doctor cost in El Salvador?", a: "We have not sourced Salvadoran prices we would stand behind, so we have not published any. You pay out of pocket, and private hospitals in San Salvador are the practical route for a visitor. Confirm cost at the point of care." },
        { q: "Does Medicare cover me in El Salvador?", a: "No. Medicare does not apply overseas, and most hospitals and doctors abroad do not accept US health insurance. Expect to pay and claim the cost back through a travel medical policy." }
      ],
      sources: {
        links: [
          { label: "US Embassy San Salvador: medical assistance page, on limited care, basic emergency services, ambulance staffing and evacuation cost", url: "https://sv.usembassy.gov/services/medical-assistance/", type: "gov" }
        ],
        judgment: "No local price figures appear on this page, because we could not source Salvadoran routine-care prices we would defend. The assessments of care quality, emergency services and ambulances are the US Embassy's own words on its medical assistance page, last updated February 2026, not our characterisation. Individual facilities differ, so confirm at the point of care. Checked August 2026."
      }
    }
  ]
};
