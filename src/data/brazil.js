export default {
  slug: "brazil",
  live: true,
  name: "Brazil",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-02",
  sources: {
    changed: "Sources added. Confirmed US citizens have needed a visitor e-visa to enter Brazil since April 2025, applied for on the official VFS portal, and that Brazil has no general tourist tax or tourist VAT refund, though some destinations such as Fernando de Noronha charge their own daily fee.",
    links: [
      { label: "Brazil eVisa official portal (VFS Global): the visitor e-visa US, Canadian and Australian citizens need before boarding, about 81 dollars", url: "https://brazil.vfsevisa.com/", type: "gov" },
      { label: "District of Fernando de Noronha: the daily environmental preservation fee (TPA) charged to visitors, an example of the local fees a few beach destinations now add", url: "https://www.noronha.pe.gov.br/", type: "gov" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "192", note: "192 is the SAMU ambulance line, 190 reaches the police and 193 the fire brigade. Operators may not speak English, so have your address written in Portuguese to read out.", checked: "Jul 2026", checkedISO: "2026-07-02" },
  insuranceLevel: "medium",
  rentalCommon: true,
  region: "Americas",
  signals: { cardFriendliness: 5, cashNeed: 1, taxRisk: 3 },
  hook: "One of the most cashless places anywhere: tap your card almost everywhere, keep a little cash for the beach, always pay in reais, and sort your e-visa before you fly.",
  aliases: ["brazil", "brasil", "rio", "rio de janeiro", "sao paulo", "salvador", "iguazu", "iguacu", "amazon", "real", "reais", "brl", "pix", "carnival", "carnaval", "copacabana", "evisa", "e-visa"],

  title: "Money in Brazil (2026): Cards, Pix, the E-Visa, ATMs and Tipping | True Trip Costs",
  description: "How to handle money in Brazil as a US traveler in 2026: near-universal cards and contactless, what Pix is and whether you actually need it, the required e-visa, ATM limits and the dollar-conversion trap, light tipping, and the new 2026 taxes and coastal fees. Checked July 2026.",

  h1: "Money in Brazil, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your card covers almost everything, what Pix is and whether you need it, the cash worth carrying, and the e-visa you have to sort before you fly.",
  hero: {
    img: "/brazil-hero.jpg",
    h: 1375,
    alt: "A steep, colorful hillside street in the Santa Teresa neighborhood of Rio de Janeiro at dusk, with pastel colonial houses, wrought-iron balconies and tropical foliage, string lights overhead, the silhouette of Sugarloaf Mountain and the bay glowing at the end of the street, a lone figure walking downhill, and a caipirinha, small cheese breads and a coffee on a wooden table in the foreground"
  },

  recentChange: {
    date: "Jan 2026",
    text: "A national tax reform that began in January 2026 is nudging service prices (hotels, car hire, tours) up by a few points, and some coastal spots such as Angra dos Reis and Ilha Grande have added visitor fees of up to 95 reais. Budget a little extra and check for a local fee at beach destinations."
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Brazil is <b>about as cashless as travel gets</b>. Visa and Mastercard, including contactless and Apple or Google Pay, work almost everywhere, even small shops and beach bars, so a <b>no-foreign-fee card is all most trips need</b>. Amex is less consistent. The famous local system, <b>Pix</b>, runs the country, but it needs a Brazilian tax ID to use directly, and you can happily skip it: cards cover a normal itinerary, and a little cash handles the few beach kiosks and tiny towns that are Pix-only. Always <b>pay in reais, never dollars</b>. If you need an ATM, use Banco do Brasil, Bradesco, Santander or a Banco24Horas machine, expect low per-withdrawal limits, and watch one bank's steep conversion markup (below). One thing you must not forget: <b>US travelers now need an e-visa, arranged before you fly.</b>",

  meter: {
    heading: "Cards and Pix run the country; cash is a small backup.",
    cashPct: 15,
    note: "A rough feel for everyday spending. Cards and contactless cover almost everything, from restaurants and shops to taxis and hotels. Cash is a small reserve for beach vendors, tiny towns, tips and the odd Pix-only stall, and it matters a bit more once you leave the cities for remote spots."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are near-universal, including small shops, markets and beach bars, and contactless plus Apple and Google Pay are standard. Amex is accepted in bigger cities but not consistently. Bring a no-foreign-fee card and you are set for most of the trip.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "A small backup", p: "You need far less than you would expect. Keep a modest reserve of reais (say 150 to 300) for beach vendors, tiny towns, tips and the occasional Pix-only stall, and top up only as needed. US dollars are not spent directly; exchange them at a casa de cambio if you bring any.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Low limits, one to avoid", p: "Use <b>Banco do Brasil, Bradesco, Santander</b> or a <b>Banco24Horas</b> machine inside a bank or mall. Per-withdrawal limits are low, often around 800 to 1,000 reais, and lower at night. Bradesco has been adding a steep conversion markup it shows before you confirm, so read the screen and cancel if you see it.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "<b>Get your e-visa.</b> US travelers need one, applied for on the official VFS portal. It runs roughly 80 to 100 dollars, is valid for years and multiple entries, and airlines will not let you board without it, so apply a month or two ahead.",
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> for tap-to-pay, plus a backup from a different bank.",
      "Add a <b>fee-free ATM debit card</b> for the little cash you will need. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "Ask your bank to <b>raise your daily ATM limit</b>, since Brazil's per-withdrawal caps are low."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters; you rarely need cash on arrival since cards work everywhere.",
      "If you want a little cash, pull reais from a Banco do Brasil, Santander or Banco24Horas machine and <b>decline \"convert to dollars.\"</b>",
      "Set up an eSIM before landing. A local SIM needs a Brazilian tax ID, so an eSIM is the easy route for maps and ride apps."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card</b> for almost everything, from restaurants to taxis to beach bars.",
      "Keep a little <b>cash</b> for beach vendors, small towns, tips and Pix-only stalls.",
      "<b>Pix is optional</b> for tourists. It is everywhere, but cards cover you; only some small vendors are Pix-only, and cash handles those.",
      "<b>Always choose reais</b>, never dollars, on every card terminal and ATM."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in reais, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds about 3 to 6% on card terminals and ATMs.",
      "And do not forget: <b>no e-visa, no boarding.</b> It is the one thing that can end a Brazil trip before it starts."
    ], cta: null }
  ],

  cash: {
    rate: 5.2, cur: "BRL", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 5.2 reais to the dollar in mid-2026, so 50 reais is roughly 10 dollars and 100 reais about 19. The real moves against the dollar, so check a current converter before you travel.",
    styles: [
      { n: "Budget",    per: 35,  cash: 0.2 },
      { n: "Mid-range", per: 65,  cash: 0.15 },
      { n: "Comfort",   per: 140, cash: 0.1 }
    ]
  },

  connectivity: {
    works: "Strong across the cities and tourist areas. Vivo has the widest reach, with Claro and TIM close behind, and 4G is strong with growing 5G in Rio, Sao Paulo, Salvador and the main beach hubs. Signal thins in the Amazon and the remote interior. One catch: buying a local prepaid SIM requires a Brazilian tax ID (CPF), so an eSIM from Airalo, Nomad or Holafly is the easier route for visitors. You do not need mobile data to pay by card, but you will want it for maps, ride apps and any Pix payment."
  },

  tax: {
    none: true,
    currency: "BRL",
    note: "Brazil has no standard nightly tourist tax and no tourist VAT-refund scheme. A few beach destinations have recently added visitor fees, and a 2026 tax reform nudged service prices up a little (see below)."
  },

  currencyHeading: "The real, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "At about 5.2 reais (R$) to the dollar in mid-2026, 10 reais is roughly 2 dollars, 50 about 10, and 100 about 19. To ballpark a price fast, halve the reais and knock off a bit. Notes run 2, 5, 10, 20, 50, 100 and 200 reais." },
    { sym: "qr", k: "What Pix is, and if you need it", v: "Pix is Brazil's instant QR-code payment system and it is everywhere, but using it directly needs a Brazilian tax ID and bank account. As a tourist you can skip it: cards cover a normal trip, and cash handles the few Pix-only beach stalls. Workarounds exist (a free tax ID plus Wise, or tourist Pix apps) but they are optional." },
    { sym: "card", k: "Cards are king", v: "Visa and Mastercard work almost everywhere, including small shops and beach bars, with contactless and mobile wallets standard. Amex is patchy outside big cities. Card machines can struggle on weak signal in remote spots, so carry a little cash there." },
    { sym: "tip", k: "Tipping is light", v: "A 10% service charge (taxa de servico) is usually already on restaurant bills, and that is the tip. Nothing extra is expected, and outside restaurants (taxis, tours) tipping is not the norm. See the tipping section below." }
  ],

  taxfree: {
    label: "Entry, taxes and fees",
    heading: "The e-visa you need, and the 2026 cost changes.",
    text: "The big one is entry: <b>US travelers now need an e-visa for Brazil</b>, applied for on the official VFS portal (brazil.vfsevisa.com). It costs roughly <b>80 to 100 dollars</b>, is valid for years with multiple entries, and <b>airlines will not board you without it</b>, so apply a month or two before you fly and confirm the current fee on the official site. On taxes, Brazil has <b>no tourist VAT-refund scheme</b>, so there is nothing to reclaim on shopping. A <b>2026 tax reform</b> has nudged the price of hotels, car hire and tours up by a few points, and some coastal spots such as <b>Angra dos Reis and Ilha Grande</b> have introduced visitor fees of up to 95 reais, with a handful of cities weighing hotel bed taxes. There is no separate departure tax to pay at the airport; it is built into your ticket."
  },

  // High-churn entry and tax facts, each tracked on its own with a status, an
  // effective date, a primary source and the date we last checked it. Rendered as
  // a small always-open card after the tax-free section.
  keyFacts: [
    { label: "Brazil visitor e-visa (US citizens)", value: "about 81 dollars, on the official VFS portal before boarding", status: "enacted", effective: "2025-04-10", source: "https://brazil.vfsevisa.com/", checked: "2026-07-11" }
  ],

  traps: [
    "<b>No e-visa, no boarding.</b> US travelers need a Brazil e-visa arranged in advance on the official VFS portal. Airlines are fined for boarding passengers without it, so this is the one thing to sort weeks ahead, not at the gate.",
    "<b>\"Pay in dollars?\" Always say no.</b> Card terminals and ATMs may offer to charge you in dollars (dynamic currency conversion), which quietly adds a few percent. Choose reais every time.",
    "<b>Mind the ATM, and one bank in particular.</b> Foreign-card withdrawal limits are low, often 800 to 1,000 reais and lower at night. Bradesco has been adding a steep conversion markup (reported around 9.5%) that it discloses before you confirm, so read the screen and cancel if you see it. Banco do Brasil, Santander and Banco24Horas are usually cleaner.",
    "<b>Card cloning is common.</b> Use ATMs inside bank branches or malls, cover the keypad, and keep an eye on your card. Skip standalone street machines, especially at night.",
    "<b>Remote spots run thin.</b> On islands and in small beach towns (Ilha Grande, Jericoacoara, Fernando de Noronha, parts of the Amazon), ATMs are unreliable and card machines can drop signal, so bring enough cash before you go."
  ],

  tippingHeading: "Light, and usually already on the bill.",
  tipping: "Tipping in Brazil is refreshingly low-key. Sit-down restaurants almost always add a 10% service charge (taxa de servico, often called \"os dez por cento\") to the bill, and that counts as the tip, so there is no need to add more on top. It is technically optional and you can ask for it to be removed if service was poor, but most people simply leave it. Outside restaurants, tipping is not really expected: rounding up a taxi fare is a kind gesture, not an obligation, and tour guides or drivers appreciate a little cash for a great day but do not rely on it. If you want to reward exceptional service, a small cash tip in reais is the surest way to reach the person.",

  faqs: [
    { q: "Do I need cash in Brazil?", a: "Not much. Brazil is one of the most cashless countries anywhere, and cards with contactless work almost everywhere, including small shops and beach bars. Keep a small reserve of reais (150 to 300) for beach vendors, tiny towns, tips and the occasional Pix-only stall, and top up from an ATM only as needed." },
    { q: "Do I need Pix as a tourist in Brazil?", a: "No. Pix is Brazil's instant payment system and it is everywhere, but using it directly requires a Brazilian tax ID (CPF) and bank account. Cards cover a normal tourist trip, and a little cash handles the few vendors that are Pix-only. There are workarounds (a free CPF plus Wise, or tourist Pix apps), but they are optional, not necessary." },
    { q: "Do US citizens need a visa for Brazil?", a: "Yes. As of 2025, US travelers need an e-visa, applied for in advance on the official VFS portal. It costs roughly 80 to 100 dollars, is valid for years with multiple entries, and airlines will not let you board without it, so apply a month or two before you travel and confirm the current fee on the official site." },
    { q: "Should I pay in reais or dollars in Brazil?", a: "Always reais. If a card terminal or ATM offers to charge you in dollars, decline; that dynamic currency conversion adds a few percent. US dollars are not spent directly in shops; exchange any you bring at a casa de cambio." },
    { q: "What is the best ATM to use in Brazil?", a: "Use Banco do Brasil, Santander or a Banco24Horas machine inside a bank branch or mall. Withdrawal limits for foreign cards are low, often 800 to 1,000 reais and lower at night, so you may need more than one withdrawal. Avoid Bradesco's steep conversion markup, always choose reais, and cover the keypad, since card cloning is common." },
    { q: "How much cash should I bring for a week in Brazil?", a: "Very little. For two mid-range travelers, roughly 500 to 800 reais (about 100 to 155 dollars) of cash across a week is plenty beyond your card spending, since cards and contactless cover almost everything. The cash is for beach vendors, tips, small towns and any Pix-only stalls." }
  ],

  culture: {
    heading: "A little Portuguese goes a long way",
    intro: "Brazil speaks Portuguese, not Spanish, and a warm Oi and a story or two mark you as a guest rather than a tourist. Brazilians are famously friendly, and a little effort goes a long way.",
    phrases: [
      { mean: "Hi, hello, informal", say: "oy", word: "Oi" },
      { mean: "How are you, and all good", say: "TOO-doo beng", word: "Tudo bem" },
      { mean: "Please", say: "por fah-VOR", word: "Por favor" },
      { mean: "Thank you, said by a man or a woman", say: "oh-bree-GAH-doo / dah", word: "Obrigado / Obrigada" },
      { mean: "Cheers", say: "sah-OO-jee", word: "Saúde" },
      { mean: "Cool, great, nice", say: "leh-GOW", word: "Legal" },
    ],
    tip: "First, it is <b>Portuguese</b>, not Spanish, so Obrigado, not Gracias. And Brazilians love the <b>jeitinho</b>, the knack of finding a warm, creative way around a problem. A smile, a little patience and some friendly chat open almost any door.",
    stories: [
      { img: "/brazil-culture-1.jpg",
        alt: "WPA-style illustration of samba dancers in towering feathered headdresses and sequined costumes dancing before a great ornate carnival float on a floodlit night avenue, drummers to one side",
        h: "The greatest party on Earth",
        p: "Every year before Lent, Brazil throws Carnival, and Rio's is the most famous of all: samba schools in dazzling costumes parade through a purpose-built stadium, the Sambadrome, while the whole country dances for days on end. Millions pour into the streets. It is joy turned into a national art form.",
        note: "Good to know: Rio parades in the Sambadrome" },
      { img: "/brazil-culture-2.jpg",
        alt: "WPA-style illustration of two capoeira players mid-movement in a circle on a golden beach at sunset, one arcing into a kick, others clapping and playing a berimbau, palms and surf behind",
        h: "The fight hidden in a dance",
        p: "Capoeira is a martial art that looks like a dance, all sweeping kicks and cartwheels done to the twang of a bow-shaped instrument called the berimbau. Enslaved Africans created it in Brazil centuries ago, and it is said they disguised their training as dancing so it would be allowed. Today it is played in a roda, a circle, the world over.",
        note: "Say it: capoeira (kah-poo-AY-rah)" },
      { img: "/brazil-culture-3.jpg",
        alt: "WPA-style illustration of a steep cobbled street of pastel baroque townhouses in old Salvador, women in white lace dress walking toward a pink colonial church with gilded towers, green hills beyond",
        h: "The first capital, and Brazil's soul",
        p: "Salvador, up on the northeast coast, was Brazil's first capital, and its old heart, the Pelourinho, is a hillside of pastel baroque houses and gilded churches. It is the center of Afro-Brazilian culture, of the music, food and faith carried across the Atlantic. Much of what the world loves about Brazil was born here.",
        note: "Good to know: Salvador was the first capital" },
    ],
    pride: "Brazilians are warm, expressive and quick to fold a stranger into the fun, whether over football, music or a long shared meal. They are proud of a vast, mixed country that speaks Portuguese and moves to its own beat, and they love it when a visitor joins in."
  }
};
