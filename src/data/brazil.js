export default {
  slug: "brazil",
  iso2: "br",
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
      { n: "Budget", per: 35, cash: 0.2, room: 50 },
      { n: "Mid-range", per: 65, cash: 0.15, room: 100 },
      { n: "Comfort", per: 140, cash: 0.1, room: 210 }
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
  },

  // HUB-AND-SPOKE SPOKES. Data-driven, single-source, each independently dated,
  // rendered by components/Spoke.astro via src/pages/[slug]/[spoke].astro.
  spokes: [
    {
      slug: "entry-visa",
      glance: [
        { k: "Visa", v: "e-visa, apply online before you fly" },
        { k: "Cost", v: "US$80.90, valid 10 years" },
        { k: "Where", v: "brazil.vfsevisa.com only" },
        { k: "Timing", v: "Up to 10 working days" }
      ],
      live: true,
      topic: "visas",
      title: "Do US citizens need a visa for Brazil? (2026) | True Trip Costs",
      description: "Yes: since April 10, 2025, US citizens need a Brazil e-visa, applied for online before you fly. The official portal, the US$80.90 fee, how long it is valid, and how to avoid the overpriced lookalike sites. Checked July 2026.",
      h1: "Do US citizens need a visa for Brazil?",
      lede: "Short answer: yes, and it caught a lot of people out. Brazil brought back a visa for Americans in 2025, it is online only, and there is one official site. Here is the cost, the timing, and how not to overpay.",
      checked: "Jul 2026",
      checkedISO: "2026-07-08",
      answer: "Yes. Since <b>April 10, 2025</b>, US citizens need a <b>Brazil e-visa</b>, and you apply for it <b>online before you fly</b>, there is no visa on arrival. It costs <b>US$80.90</b>, is valid <b>10 years</b> with multiple entries, and comes only from the official government portal, <b>brazil.vfsevisa.com</b>. Apply a couple of weeks ahead, because airlines will not board you without it.",
      official: {
        label: "Official Brazil e-visa portal (VFS Global)",
        url: "https://brazil.vfsevisa.com",
        note: "This is the one government-authorized site, run by VFS Global for Brazil. The whole application happens here: create an account, fill the form, upload your passport page and a photo, and pay the fee by card."
      },
      expediter: true,
      expediterNote: "Short on time, or want someone to check the form? A private visa service can file it for you for a fee on top of the US$80.90. You never need one, the official portal above is cheaper and not hard, but some travelers on a tight deadline use one.",
      expediterLabel: "File with a visa service",
      sections: [
        {
          h: "What it costs, and what you get",
          icon: "usd",
          key: { fig: "$80.90", tag: "Valid 10 years", text: "The fee is US$80.90, an 80-dollar consular fee plus a 90-cent processing charge, paid by card and non-refundable. In return you get multiple entries for 10 years.", tone: "teal" },
          p: [
            "The fee is <b>US$80.90</b> (an 80-dollar consular fee plus a 90-cent processing charge), paid by card during the application, and it is <b>non-refundable</b> whether or not you are approved. The price is the same for a single trip or many.",
            "In return you get an e-visa that is <b>valid for 10 years</b> for US citizens, with multiple entries. Each visit can be up to <b>90 days</b>, and you can stay a maximum of 180 days in any 12-month period. It covers tourism, business and even transit through Brazil."
          ]
        },
        {
          h: "How to apply, step by step",
          icon: "qr",
          key: { fig: "Online", tag: "No consulate visit", text: "It is a straightforward online form on the official portal, brazil.vfsevisa.com, with no consulate visit: your passport, a photo, travel details and the card payment.", tone: "teal" },
          p: [
            "It is a straightforward online form, no consulate visit."
          ],
          steps: [
            "Go to the official portal, brazil.vfsevisa.com, and create an account. Go there directly, not through a search ad.",
            "Fill in the online form with your passport and travel details. It takes most people 15 to 20 minutes.",
            "Upload the documents: a color scan of your passport photo page and a passport-style photo. Some applicants are asked for proof of accommodation or funds.",
            "Pay the US$80.90 by credit or debit card.",
            "Wait for the approval email with your e-visa PDF, then save it to your phone and print a copy for check-in and immigration."
          ]
        },
        {
          h: "Give it time, and mind the lookalike sites",
          icon: "alert",
          key: { tag: "Apply weeks ahead", text: "Processing can take up to about 10 working days and the portal may ask for another document, so apply two to three weeks before you fly. Ignore lookalike sites that charge a markup.", tone: "amber" },
          p: [
            "Processing can take up to about <b>10 working days</b>, and the portal may come back asking for another document, so <b>apply two to three weeks before you fly</b> rather than the night before. The e-visa is tied into airline systems now, so no valid visa means no boarding pass.",
            "This is a genuinely paid, required visa, which is exactly the kind of thing the internet fills with <b>overpriced middlemen</b>. Plenty of sites will take your money to file the same government form at a hefty markup, and a few are outright scams. The honest route is the official portal above. If you do pick a paid service for the hand-holding, know you are paying extra for convenience, not for anything the government requires."
          ]
        },
        {
          h: "A couple of things that trip people up",
          icon: "receipt",
          key: { fig: "Old visa", tag: "If you already hold one", text: "If you hold a valid physical Brazil visa issued before April 10, 2025, it still works until it expires, so you do not need the e-visa on top. Otherwise, the e-visa is required for every trip.", tone: "teal" },
          p: [
            "If you already hold a <b>valid physical Brazil visa</b> issued before April 10, 2025, it still works until it expires, so you do not need the e-visa on top. And the e-visa does not guarantee entry: as anywhere, the border officer makes the final call, so carry your printed visa and be ready to show your onward plans.",
            "Brazil is otherwise a warm, card-friendly place once you are in. For how money actually works there, cards, cash, ATMs and the rest, the <a href=\"/brazil\">Brazil money guide</a> has you covered."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa to visit Brazil in 2026?", a: "Yes. Since April 10, 2025, US citizens need a Brazil e-visa, applied for online before travel. There is no visa on arrival. It costs US$80.90, is valid 10 years with multiple entries, and allows stays of up to 90 days at a time. Apply on the official portal, brazil.vfsevisa.com, a couple of weeks before you fly." },
        { q: "How much is the Brazil e-visa and how long is it valid?", a: "The fee is US$80.90 (an 80-dollar consular fee plus 90 cents processing), non-refundable, the same for single or multiple entries. For US citizens the e-visa is valid for 10 years with multiple entries, each stay up to 90 days, and a maximum of 180 days in any 12-month period." },
        { q: "What is the official website for the Brazil e-visa?", a: "brazil.vfsevisa.com, run by VFS Global for the Brazilian government. It is the only authorized portal, and the entire application, form, document upload and payment, happens there. Other sites that offer to file it charge a markup on top of the US$80.90 government fee, and some are scams." },
        { q: "How long does the Brazil e-visa take to process?", a: "Usually up to about 10 working days, though it can be quicker, and the portal may ask for an extra document. Apply two to three weeks before you travel to be safe. The e-visa is linked to airline check-in systems, so you will not be allowed to board without an approved one." }
      ],
      sources: {
        links: [
          { label: "US Mission Brazil: the official US Embassy notice that Brazil reinstated a visa requirement for all US nationals on April 10, 2025, pointing to the authorized e-visa site", url: "https://br.usembassy.gov/message-to-u-s-citizens-new-visitor-visa-requirements-for-u-s-citizens-traveling-to-brazil/", type: "gov" },
          { label: "Brazil e-visa portal (VFS Global): the official government-authorized application site, fee and process", url: "https://brazil.vfsevisa.com", type: "gov" },
          { label: "US Department of State: the country information pages, the official router for entry and visa requirements by destination", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html", type: "gov" }
        ],
        judgment: "Fees, processing times and document lists can change, so confirm the current details on the official portal before you pay. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Brazilian real (BRL)" },
        { k: "Cards", v: "Near-universal in cities (Amex less)" },
        { k: "Cash for", v: "Markets, beach vendors, small towns" },
        { k: "On a card", v: "Choose reais (mind the IOF)" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Brazil, or can I use cards? (2026) | True Trip Costs",
      description: "Cards work almost everywhere in Brazilian cities, and you need surprisingly little cash. But two local catches matter: Pix runs the country yet is mostly closed to tourists, and foreign cards get hit with the IOF tax. Checked July 2026.",
      h1: "Do I need cash in Brazil, or can I use cards?",
      lede: "Short answer: cards cover most of a city trip, and you need less cash than you would think. The wrinkles are Brazilian: Pix has taken over informal payments but tourists mostly cannot use it, and foreign cards carry a local tax. Here is how to pay well.",
      checked: "Jul 2026",
      checkedISO: "2026-07-08",
      answer: "Mostly cards, with a little cash. In Brazilian cities <b>Visa and Mastercard are accepted almost everywhere</b> (Amex less so), so you need <b>little cash</b>, though markets, beach vendors and small towns still want it. Two Brazil-specific catches: <b>Pix</b>, the instant-payment app everyone uses, is <b>mostly closed to tourists</b> (it needs a local tax ID), and foreign cards are hit with Brazil's <b>IOF tax</b> (around 4.38%). Carry a little cash in <b>reais, not dollars</b>, and always pay in reais at the terminal.",
      sections: [
        {
          h: "Cards work, but mind the IOF and the conversion trap",
          icon: "atm",
          key: { tag: "Choose reais on a card", text: "In cities cards are near-universal, Visa and Mastercard leading. Two card costs: a small IOF tax on foreign-card use, and the conversion trap, so if a terminal asks, choose reais, not dollars.", tone: "amber" },
          p: [
            "In cities, <b>cards are near-universal</b>, Visa and Mastercard lead, contactless is common, and Amex is accepted less often. The Brazil-specific cost to know about is the <b>IOF</b>, a federal tax of roughly <b>4.38%</b> on foreign-card transactions and withdrawals, so even a no-foreign-fee card still meets this local charge. Pick a card with low fees and treat it as your main way to pay.",
            "As everywhere, if a terminal or ATM offers to charge you in <b>US dollars instead of reais, always choose reais</b>. Picking dollars triggers dynamic currency conversion, a marked-up rate, and Brazilian machines do offer it. Reais lets your own bank convert, which is cheaper."
          ]
        },
        {
          h: "Pix runs Brazil, but mostly not for tourists",
          icon: "qr",
          key: { fig: "Local only", tag: "Needs a local account", text: "Pix, Brazil's instant bank-transfer system, is everywhere, with people paying by QR code for almost anything. But it generally needs a Brazilian bank account and CPF, so most tourists cannot use it.", tone: "teal" },
          p: [
            "You will hear about <b>Pix</b>, Brazil's instant bank-transfer system, and it is genuinely everywhere: people pay by scanning a QR code for almost anything. The catch for visitors is that a native Pix account needs a <b>CPF</b> (a Brazilian tax ID) and a local bank account, so <b>most tourists cannot use it directly</b>. A few apps let foreigners pay via Pix by acting as a middleman, but you do not need one, card acceptance in cities is broad enough to skip Pix entirely.",
            "Where Pix does bite is the informal economy: <b>beach kiosks, small pousadas in remote spots, street stalls and freelance drivers</b> increasingly take Pix or cash only, not cards. That is exactly where your small cash reserve earns its keep."
          ]
        },
        {
          h: "Cash: bring reais, and dollars will not help",
          icon: "cash",
          key: { fig: "Reais only", tag: "Dollars do not work", text: "Carry a small amount of reais for taxis, snacks, tips and markets, and anywhere off the tourist track. US dollars are not widely accepted in Brazil, so plan to use reais, not dollars.", tone: "teal" },
          p: [
            "Carry a <b>small amount of reais</b> for taxis, snacks, tips, markets and anywhere off the tourist track. <b>US dollars are not widely accepted</b> in Brazil, only a handful of upscale hotels and exchange houses take them, usually at poor rates, so do not plan to spend dollars.",
            "For reais, the reliable ATMs are the big banks, <b>Banco do Brasil, Bradesco, Santander, Itau</b> and the shared <b>Banco24Horas</b> network, which take foreign Visa and Mastercard. Withdrawals carry the IOF plus your bank's fees, so pull larger amounts less often, use machines inside banks or malls by day, and keep cash out of sight."
          ]
        },
        {
          h: "Tipping, and one last habit",
          icon: "tip",
          key: { fig: "10% added", tag: "The servico", text: "In restaurants a 10% service charge, the servico, is usually already on the bill, so you need not add more unless service was special. Round up a taxi fare, and keep small notes for tips.", tone: "teal" },
          p: [
            "In restaurants a <b>10% service charge</b> (the servico) is usually already on the bill, so you do not need to add more unless service was special. Tipping taxi and ride-app drivers is not expected.",
            "Spend your leftover reais before you fly home, the exchange back to dollars is poor. For the fuller money picture, cards, safety and how much to carry, see the <a href=\"/brazil\">Brazil money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Can I use cards everywhere in Brazil?", a: "In cities, mostly yes: Visa and Mastercard are accepted almost everywhere, contactless is common, and Amex works less often. You need little cash for day-to-day city spending. The exceptions are markets, beach vendors, street stalls and small towns, which often take only cash or Pix. Note that foreign cards are subject to Brazil's IOF tax, around 4.38%." },
        { q: "Can tourists use Pix in Brazil?", a: "Mostly no. Pix is Brazil's instant-payment system and locals use it constantly, but a native Pix account requires a CPF (Brazilian tax ID) and a local bank account, which tourists usually do not have. Some apps let foreigners pay via Pix as an intermediary, but you do not need one, card acceptance in cities is broad enough to complete a trip without Pix." },
        { q: "Are US dollars accepted in Brazil?", a: "Not widely. Only a few upscale hotels and currency-exchange houses take US dollars, generally at poor rates. Everywhere else wants Brazilian reais. Bring a small amount of dollars for emergencies at most, and pay in reais or by card for everything." },
        { q: "Which ATMs take foreign cards in Brazil, and what is the IOF?", a: "Banco do Brasil, Bradesco, Santander, Itau and the shared Banco24Horas network accept foreign Visa and Mastercard. Withdrawals are subject to the IOF, a Brazilian federal tax of around 4.38% on foreign-card transactions, plus your own bank's fees, so withdraw larger amounts less often and always choose reais, not dollars, at the machine." }
      ],
      sources: {
        links: [
          { label: "Banco Central do Brasil: Pix, the official instant-payment system, and its CPF and local-account requirements", url: "https://www.bcb.gov.br/en", type: "gov" },
          { label: "US Department of State: Brazil country information, general money, entry and safety context for travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html", type: "gov" }
        ],
        judgment: "Card acceptance, the IOF tax on foreign cards (around 4.38%) and Pix access for visitors are all shifting in Brazil, and much of the rest is our practical read, so treat amounts as a guide and confirm with your own bank. Checked July 2026."
      }
    }
  ]
};
