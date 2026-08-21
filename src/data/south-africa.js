import { S } from './carrier-spine.js';

export default {
  slug: "south-africa",
  iso2: "za",
  live: true,
  name: "South Africa",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-25",
  sources: {
    changed: "Re-checked July 2026. The Electronic Travel Authorisation is now live for nationals of China, India, Indonesia and Mexico but is still not required for US citizens, who continue to get a free 90-day stamp on arrival. Load-shedding, VAT refund and tipping unchanged.",
    links: [
      { label: "South African Revenue Service (SARS): the tourist VAT refund, the 15% rate, the R250 minimum, the 90-day export window and the refund offices at the main airports", url: "https://www.sars.gov.za/types-of-tax/value-added-tax/vat-refunds-for-tourists-and-foreign-enterprises/", type: "gov" },
      { label: "US Embassy South Africa: emergency numbers, 10111 for police and 112 from a cell phone, 10177 for an ambulance", url: "https://za.usembassy.gov/emergency-assistance/", type: "gov" },
      { label: "South African Embassy: US passport holders do not need a visa for visits of 90 days or less for tourism or business", url: "https://www.saembassy.org/visas/civic_immigration/visitor_visa/", type: "gov" },
    ],
    judgment: "The daily cash share and the tipping amounts are our own estimate from experience and consistent traveler reports, not an official figure. The Electronic Travel Authorisation is rolling out in phases, so check the official Home Affairs site before you fly.",
  },
  emergency: { medical: "112", note: "112 from any mobile phone is free (even with no SIM or airtime) and routes you to police, ambulance and fire. 10111 is the police line and 10177 is the ambulance and fire line from a landline. The US number 911 does not work here. Private ambulance services such as ER24 (084 124) and Netcare 911 (082 911) can be faster in the cities.", checked: "Jul 2026", checkedISO: "2026-07-12" },
  insuranceLevel: "high",
  rentalCommon: true,
  region: "Africa",
  signals: { cardFriendliness: 4, cashNeed: 2, taxRisk: 2 },
  hook: "South Africa is very card-friendly, so you can tap almost everywhere. Keep some cash for tips, petrol attendants and car guards, use bank ATMs carefully, and remember the 15% VAT is refundable on things you take home.",
  aliases: ["south africa", "sa", "cape town", "johannesburg", "joburg", "jozi", "durban", "pretoria", "stellenbosch", "kruger", "garden route", "table mountain", "safari", "rand", "zar", "vat refund", "braai", "bo-kaap", "load shedding"],

  title: "South Africa money 2026: cards, cash and ATM fees",
  description: "Tap almost everywhere, but keep cash for tips, petrol attendants and car guards. Use bank ATMs with care, and claim 15% VAT back on goods. Checked 2026.",

  h1: "Money in South Africa, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your card covers almost everything, the cash worth keeping for tips and petrol attendants, how to use ATMs safely, the VAT you can claim back on shopping, and the entry rules to check before you fly.",
  hero: {
    img: "/south-africa-hero.jpg",
    h: 1375,
    alt: "A flat editorial illustration of Cape Town at dusk. A lone figure in a dark jacket with a tote bag walks away along a wooden waterfront boardwalk toward a lit harbour, the flat-topped silhouette of Table Mountain rising behind the city under a blue and warm-gold sky, with strings of small bulbs, moored boats and a lighthouse on a distant hill, and in the foreground a wooden table holding a glass of red wine and a plate of grilled steak and boerewors sausage with a small side dish"
  },

  recentChange: {
    date: "Jul 2026",
    text: "Two things are worth a fresh check this year. South Africa's Electronic Travel Authorisation (ETA) is now live for nationals of China, India, Indonesia and Mexico, but it is <b>not required for US visitors</b>, who still get a free 90-day stamp on arrival. The system may eventually expand, so confirm on the official Home Affairs site before you fly. And after years of rolling blackouts, load-shedding has now been suspended for over a year, so card machines and ATMs are far more reliable, though a little backup cash is still smart."
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "South Africa is <b>very card-friendly</b>. You can <b>tap a card or phone almost everywhere</b>, from city restaurants and shops to fuel stations and supermarkets, with Visa and Mastercard taken widely and Amex less so. What keeps cash in your pocket is <b>tips and a few local habits</b>: fuel is full-service, so you tip the <b>petrol attendant</b> who fills up and cleans your windscreen, you tip the <b>car guard</b> who watches your parked car, and restaurant tips of around <b>10 to 15%</b> are expected. Get rand from a <b>bank ATM</b> and be <b>ATM-smart</b>: use machines inside malls, decline any stranger's 'help', and be discreet. Always <b>choose rand, not US dollars</b>, on any terminal or ATM. Two more things: the <b>15% VAT is refundable</b> on goods you take home (ask for a tax invoice), and while <b>load-shedding</b> has been suspended for over a year, keeping a little backup cash is still smart in case an outage knocks out a card machine. US visitors get <b>90 days visa-free</b>, though a new entry authorization is rolling out, so check before you fly.",

  meter: {
    heading: "Card-friendly, with cash kept back for tips.",
    cashPct: 20,
    note: "A rough feel for everyday spending. Cards and phones cover most things, from restaurants and shops to fuel and supermarkets. Cash is mainly for tips (petrol attendants, car guards, restaurants), markets and township tours, plus a small backup in case a power outage takes a card machine offline."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Contactless is everywhere, so Visa and Mastercard tap for almost everything, from restaurants and shops to fuel stations and supermarkets, with Amex less widely taken. Always <b>choose rand, not US dollars</b>, on the terminal. Cards are your default; the main thing to keep cash for is tipping.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "For tips and small stuff", p: "Keep some rand for the things cards do not cover: <b>tipping</b> petrol attendants and car guards, markets, craft stalls and township tours, and a small backup in case a power outage briefly knocks out card machines. You will not need a lot, but a supply of small notes is handy.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Fine, but be ATM-smart", p: "Bank ATMs are widely available, ideally the ones <b>inside shopping malls</b>. Some add a fee for foreign cards, so <b>choose rand, not dollars</b>. Card skimming and distraction scams happen, so <b>never accept a stranger's help</b>, cover the keypad, be discreet, and do not count cash in the open.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b>, plus a backup from a different bank. Amex is less widely accepted here.",
      "You will get <b>90 days visa-free</b> as a US visitor (a free stamp on arrival), but a new <b>Electronic Travel Authorisation</b> is rolling out, so check the official Home Affairs site before you fly.",
      "Set up an <b>eSIM</b>. A local SIM needs RICA registration with your passport, which an eSIM skips.",
      "Know the shape of it: <b>cards work almost everywhere</b>, and you keep cash mainly for <b>tips</b>."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Withdraw rand from a <b>bank ATM</b> in arrivals, and <b>decline 'convert to dollars,'</b> always choose rand.",
      "Take out enough for <b>tips and your first day</b>, in smaller notes where you can.",
      "Skip the exchange counters, their rates are weak.",
      "If you shopped duty-free, keep receipts, and remember the <b>VAT refund</b> desk for goods you are taking home."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card or phone</b> for most things, and choose rand every time.",
      "Keep small notes for <b>tips</b>: the petrol attendant (R5 to R10), the car guard (about R5), and around 10 to 15% at restaurants.",
      "Use <b>mall or bank ATMs</b>, be discreet, and never let a stranger 'help' you at the machine.",
      "Ask for a <b>tax invoice</b> on bigger purchases so you can reclaim the VAT at the airport."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in rand, never in US dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds a few percent on card terminals and ATMs.",
      "<b>Keep a little backup cash.</b> Load-shedding has been suspended for over a year, but localized outages still happen and can briefly take a card machine or ATM offline."
    ], cta: null }
  ],

  cash: {
    rate: 16.4, cur: "ZAR", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 16.4 rand to the US dollar in mid-2026, so ZAR 100 is roughly US$6 and ZAR 20 about US$1.20. South Africa is card-first, so this cash-in-hand slice is mostly tips and small extras.",
    styles: [
      { n: "Budget", per: 45, cash: 0.25, room: 55 },
      { n: "Mid-range", per: 90, cash: 0.2, room: 120 },
      { n: "Comfort", per: 180, cash: 0.12, room: 250 }
    ]
  },

  connectivity: {
    works: "Excellent across the cities, towns and along the main tourist routes, with strong 4G and growing 5G, and patchy inside remote game reserves, the Drakensberg and quiet rural stretches. The carriers are Vodacom, MTN, Cell C and Telkom. A local prepaid SIM requires RICA registration (bring your passport), so for most visitors an eSIM from Airalo, Nomad or a similar provider is the simpler route. You do not need mobile data to pay by card, but you will want it for maps and ride apps."
  },

  tax: {
    none: true,
    currency: "ZAR",
    note: "South Africa has no nightly tourist or bed tax at checkout. A 15% VAT is already included in the price you see, and, unlike Morocco or the EU, you can claim that VAT back on goods you take home (see below). A small tourism levy (about 1%, the TOMSA levy) is included in many accommodation bills but is not something you pay separately."
  },

  currencyHeading: "The South African rand, in plain terms.",
  facts: [
    { sym: "zar", k: "Quick conversion", v: "South Africa uses the rand, written R or ZAR. At about 16.4 to the US dollar in mid-2026, ZAR 100 is roughly US$6 and ZAR 200 about US$12. Notes come in 10, 20, 50, 100 and 200 rand, with coins up to 5 rand. Prices already include the 15% VAT." },
    { sym: "card", k: "Tap almost everywhere", v: "South Africa is very card-friendly, and contactless is the norm. Visa and Mastercard work almost everywhere, including fuel stations and supermarkets, with Amex less widely taken. Just remember to choose rand, not dollars, and to tip the petrol attendant in cash." },
    { sym: "cash", k: "Keep some for tips", v: "You do not need much cash, but keep a supply of small notes for tipping petrol attendants and car guards, for markets and craft stalls, and as a backup if a power outage briefly knocks out a card machine or ATM." },
    { sym: "tip", k: "Tipping is expected", v: "Plan for roughly 10 to 15% at restaurants (check whether a service charge was added for a large group), R5 to R10 for the petrol attendant who fills up and cleans your windscreen, about R5 for a car guard, and R10 to R20 a bag for a porter." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "A 15% VAT you can claim back on goods you take home.",
    text: "South Africa keeps tax straightforward, and in your favor as a shopper. There is <b>no nightly tourist tax</b> at checkout, and the <b>15% VAT</b> is already included in the price. The win worth acting on: as a foreign visitor you can <b>reclaim the VAT on goods</b> you take out of the country, as long as the total on your invoices is <b>more than R250</b>. When you buy, tell the shop you are a foreign tourist and ask for a <b>tax invoice</b> showing the VAT. On departure you claim at the <b>VAT Refund Administrator</b> desks at OR Tambo (Johannesburg), Cape Town and King Shaka (Durban) international airports, and at major land borders and harbours: present your <b>passport, the tax invoices and the goods</b> (items in checked luggage must be inspected and stamped before you check in), within <b>90 days</b> of buying them. The refund is paid onto a card or by bank transfer, minus a small commission. <b>Services</b>, such as hotels, tours and car hire, do not qualify, only physical goods you carry out."
  },

  keyFacts: [
    { label: "Tourist VAT refund", value: "The 15% VAT is refundable to foreign visitors on goods over R250 taken out of the country; ask for a tax invoice and claim at the airport with your passport and the goods", status: "enacted", effective: null, source: "https://www.sars.gov.za/types-of-tax/value-added-tax/vat-refunds-for-tourists-and-foreign-enterprises/", checked: "2026-07-12" },
    { label: "Electronic Travel Authorisation (ETA)", value: "Live for nationals of China, India, Indonesia and Mexico but not required for US visitors, who still get a free 90-day stamp on arrival; confirm on the official Home Affairs site before you fly", status: "enacted", effective: null, source: "https://www.saembassy.org/visas/civic_immigration/visitor_visa/", checked: "2026-07-25" }
  ],

  traps: [
    "<b>'Pay in US dollars?' Always say no.</b> Card terminals and ATMs may offer to charge you in US dollars (dynamic currency conversion), which quietly adds a few percent. Choose rand every time.",
    "<b>Be ATM-smart.</b> Use ATMs inside shopping malls or banks, cover the keypad, and be discreet. Card skimming and distraction scams happen, so never accept help from a stranger at the machine, and do not count cash in the open.",
    "<b>Tip the petrol attendant and the car guard.</b> Fuel is full-service, so the attendant who fills up, checks your oil and cleans your windscreen expects R5 to R10, and the car guard who watches your parked car expects about R5. Keep small notes for both.",
    "<b>Keep a little backup cash.</b> Load-shedding has been suspended for over a year, so it is far less of an issue than it was, but localized outages still happen and can briefly knock out card machines and ATMs. Do not rely on a card alone.",
    "<b>Check the entry rules before you fly.</b> US visitors still get 90 days visa-free (a free stamp on arrival), but South Africa is rolling out an Electronic Travel Authorisation, so verify the current requirement on the official Home Affairs site.",
    "<b>Get a tax invoice for bigger buys.</b> To reclaim the 15% VAT at the airport you need a proper tax invoice showing the VAT and, for checked items, to have the goods stamped before check-in."
  ],

  tippingHeading: "Tipping is expected here.",
  tipping: "South Africa has a real tipping culture, and a few situations are unique to the country, so keep small notes handy. At <b>restaurants</b>, tip around <b>10 to 15%</b>, checking first whether a service charge was added (some places add about 10% automatically for a table of eight or more). Fuel is <b>full-service</b>, so tip the <b>petrol attendant</b> who fills up and cleans your windscreen <b>R5 to R10</b>. Almost everywhere you park, a <b>car guard</b> in a numbered vest will watch your car, and a tip of <b>about R5</b> (a little more overnight) is the norm. A <b>porter</b> gets R10 to R20 a bag, a <b>taxi or ride-hail</b> a rounded-up fare, and on safari it is customary to tip your <b>guide and tracker</b> at the end of your stay. These are small amounts, but they are genuinely expected."

,
  faqs: [
    { q: "Should I use cash or card in South Africa?", a: "Mostly card. South Africa is very card-friendly, and you can tap almost everywhere, including fuel stations and supermarkets. Keep some cash for tips (petrol attendants, car guards, restaurants), markets and township tours, plus a small backup in case a power outage briefly takes a card machine offline." },
    { q: "Should I pay in rand or US dollars?", a: "Always rand. If a card terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion adds a few percent. Choosing rand lets your card's network handle the exchange at a fair rate." },
    { q: "Do I tip in South Africa, and how much?", a: "Yes, tipping is expected. Around 10 to 15% at restaurants (check whether a service charge was added for a large group), R5 to R10 for the petrol attendant, about R5 for a car guard, R10 to R20 a bag for a porter, and a per-day tip for a safari guide and tracker. Keep small notes for these." },
    { q: "Is it safe to use ATMs in South Africa?", a: "Yes, with common sense. Use ATMs inside shopping malls or banks rather than isolated street machines, cover the keypad, and be discreet. Card skimming and distraction scams do happen, so never accept a stranger's offer of help at the machine, and do not count cash in the open." },
    { q: "Do I need a visa or an ETA for South Africa?", a: "As a US visitor you do not need a visa or an ETA for stays up to 90 days; you get a free stamp on arrival. South Africa's ETA is now live for nationals of China, India, Indonesia and Mexico, but it is not required for Americans. Because the rollout may expand, check the official Department of Home Affairs site a week or so before you fly." },
    { q: "Can I claim the VAT back on shopping in South Africa?", a: "Yes, on goods you take home. The 15% VAT is refundable to foreign visitors when your invoices total more than R250. Ask each shop for a tax invoice, then claim at the VAT Refund desks at the main airports (Johannesburg, Cape Town, Durban) or major land and sea borders, showing your passport and the goods, within 90 days. Services like hotels and tours do not qualify." },
    { q: "Is load-shedding still a problem for travelers?", a: "Much less than it was. After years of rolling blackouts, load-shedding has been suspended for over a year, so card machines, ATMs and Wi-Fi are far more reliable. Localized outages still happen in some areas, so keeping a little backup cash and choosing accommodation with a generator or inverter is still sensible, but you are unlikely to hit scheduled cuts." },
    { q: "How much cash should I bring for a week in South Africa?", a: "Not much, since cards work almost everywhere. Enough small notes for a week of tips, markets and the odd cash-only stop is plenty, refreshed from a mall ATM as needed. Everything else can go on a tapped card." }
  ],

  culture: {
    heading: "A warm welcome and many languages",
    intro: "South Africa is diverse, sociable and warm, often called the rainbow nation, with 12 official languages and a strong sense of community captured in the word ubuntu. English is widely spoken and understood everywhere, so you do not need another language, but a friendly greeting and a relaxed manner go a long way, and an invitation to a braai is a real welcome.",
    phrases: [
      { mean: "Hi, how's it going (all-purpose greeting)", say: "HOW-zit", word: "Howzit" },
      { mean: "Hello (Zulu, to one person)", say: "sah-woo-BOH-nah", word: "Sawubona" },
      { mean: "Thank you (Afrikaans)", say: "DUN-kee", word: "Dankie" },
      { mean: "Nice, great, tasty", say: "LEK-ker", word: "Lekker" },
      { mean: "A barbecue, and a social institution", say: "br-EYE", word: "Braai" },
      { mean: "Soon, but not immediately", say: "just now", word: "Just now" },
    ],
    tip: "<b>Howzit</b> is the universal hello, and a big one to learn is timing: <b>just now</b> means later rather than immediately, while <b>now now</b> means sooner. If someone invites you to a <b>braai</b>, that is a genuinely warm gesture, and the spirit of <b>ubuntu</b>, I am because we are, runs through everyday life.",
    stories: [
      { img: "/south-africa-culture-1.jpg",
        alt: "Vintage WPA travel-poster illustration of a South African safari at sunset, elephants and two giraffes among flat-topped acacia trees on the open savanna, distant low hills and a large soft sun, in flat blocks of ochre, burnt umber, dusty green and warm orange",
        h: "The bushveld and the Big Five",
        p: "The safari is the heart of a South African trip, from the vast Kruger National Park to private reserves, where dawn and dusk game drives are the best time to see the Big Five. It is customary to <b>tip your guide and tracker</b> at the end of your stay, and many lodges suggest an amount, so set aside some rand for it before you head into the bush.",
        note: "Good to know: tip your guide and tracker at the end of a safari" },
      { img: "/south-africa-culture-2.jpg",
        alt: "Vintage WPA travel-poster illustration of the Bo-Kaap quarter in Cape Town, a steep cobbled street lined with brightly painted flat-fronted houses in pink, blue, green and yellow climbing the hill, with the soft silhouette of Table Mountain behind, in bold flat blocks of color",
        h: "Cape Town and the Bo-Kaap",
        p: "Cape Town sits beneath the flat crown of Table Mountain, and its most photographed street is the <b>Bo-Kaap</b>, the historically Cape Malay quarter of vividly painted houses and cobbled lanes. The Cape's layered history shows up in its food, its wine country just outside the city, and a walkability that makes cards and contactless the easy way to pay.",
        note: "Say it: Bo-Kaap (boh-KAAP), the painted Cape Malay quarter" },
      { img: "/south-africa-culture-3.jpg",
        alt: "Vintage WPA travel-poster illustration of a South African braai, a warm and diverse group of friends gathered around an outdoor fire and grill at golden hour, sharing plates of grilled food, with a simple backyard fence and trees behind, in flat blocks of ember orange, ochre, deep green and dusk blue",
        h: "The braai and the rainbow nation",
        p: "The <b>braai</b>, a wood or charcoal barbecue, is South Africa's great social institution, cutting across every community and often the warmest welcome a visitor can get. Gathering around the fire to share boerewors, steak and stories is the everyday expression of <b>ubuntu</b>, the sense that people are made whole through others. If you are invited, go.",
        note: "Good to know: a braai invitation is a genuine welcome" },
    ],
    pride: "South Africa is proud of its diversity and its languages, its extraordinary landscapes and wildlife, and a warm, sociable spirit. Meet it with openness and a bit of curiosity, and it gives a lot back."
  },

  spokes: [
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "South African rand (ZAR)" },
        { k: "Cards", v: "Card-friendly, contactless common" },
        { k: "Cash for", v: "Markets, car guards, petrol, tips" },
        { k: "ATMs", v: "Use secure spots, watch skimming" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in South Africa? Cards plus rand",
      description: "Cards work well in South African cities, but carry rand for markets, car guards, petrol attendants and tips. Use ATMs in secure spots, and choose rand.",
      h1: "Do I need cash in South Africa, or can I use cards?",
      lede: "Short answer: a card for most of the day, and rand cash for markets, car guards, petrol attendants and tips. Use ATMs in secure spots and mind the skimming scams. Here is how to handle it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Card-friendly, with cash for the extras. South Africa is <b>more card-friendly</b> than much of the region: <b>contactless</b> is common, and cards work at <b>restaurants, shops, malls and hotels</b>. But <b>carry rand cash</b> for <b>markets, car guards, petrol attendants, tips and small vendors</b>. The currency is the <b>rand</b>. Use <b>ATMs in secure spots</b> (inside malls or banks) and beware skimming and 'helpful stranger' scams. Choose <b>rand, not dollars</b>, on any card or ATM.",
      sections: [
        {
          h: "Card-friendly, cash for the extras",
          icon: "phoneok",
          key: { fig: "Cards widely", tag: "Contactless common", text: "South Africa is card-friendly, with contactless common in cities. Carry rand cash for markets, car guards, petrol and tips.", tone: "teal" },
          p: [
            "South Africa is <b>more card-friendly</b> than much of the region. <b>Contactless</b> cards, Apple Pay and Google Pay work well, and <b>Visa and Mastercard</b> are accepted at <b>restaurants, shops, malls and hotels</b> in cities and tourist areas.",
            "But <b>carry rand cash</b> for the extras: <b>markets, car guards, petrol station attendants, tips and small vendors</b>, some of which are cash-only. A card covers most of the day, cash handles the rest."
          ]
        },
        {
          h: "Choose rand, not dollars",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose rand", text: "When a terminal or ATM offers dollars or rand, pick rand. Dollars trigger dynamic currency conversion at a rate about 3 to 8% worse.", tone: "amber" },
          p: [
            "When a card terminal or ATM asks whether to charge in <b>dollars or rand, always choose rand</b>. Dollars trigger dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. Decline it every time.",
            "For cash, use ATMs at <b>major banks</b> (such as Standard Bank, FNB, Absa or Nedbank). Use a <b>debit card</b> to avoid cash-advance fees, and take out a sensible amount at once."
          ]
        },
        {
          h: "Use ATMs safely",
          icon: "zar",
          key: { fig: "Secure ATMs", tag: "Skimming happens", text: "Use ATMs inside malls or banks, not isolated street machines. Decline help from strangers at the ATM, a common scam.", tone: "amber" },
          p: [
            "ATM fraud is a real risk, so use machines <b>inside malls or bank branches</b>, not isolated street ATMs, and shield the keypad. If a <b>stranger offers to help</b> at the ATM, decline firmly and walk away: this is a <b>common scam</b> to distract you and swap or capture your card.",
            "For tipping norms, see <a href='/south-africa/tipping'>tipping in South Africa</a>, and for the wider picture, the <a href='/south-africa'>South Africa money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in South Africa?", a: "Some. South Africa is card-friendly, with contactless common in cities, so a card covers most of the day. Carry rand cash for markets, car guards, petrol attendants, tips and small vendors." },
        { q: "Should I pay in rand or dollars in South Africa?", a: "Always rand. If a card machine or ATM offers dollars, decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
        { q: "Are ATMs safe in South Africa?", a: "Use machines inside malls or bank branches rather than isolated street ATMs, and shield the keypad. Decline help from strangers at the ATM, which is a common scam to distract you and swap or capture your card." },
        { q: "Are cards widely accepted in South Africa?", a: "Yes, more so than in much of the region. Contactless is common and cards work at restaurants, shops, malls and hotels. Carry rand for markets, car guards, petrol attendants and tips." }
      ],
      sources: {
        links: [
          { label: "South African Reserve Bank: official exchange rate information", url: "https://www.resbank.co.za", type: "gov" },
          { label: "US State Department: South Africa country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/SouthAfrica.html", type: "gov" }
        ],
        judgment: "South Africa is notably card-friendly for the region, but cash covers markets, car guards and petrol, and ATM skimming is a known risk. The rand rate moves, and the firm rule is to decline dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "10 to 15%, expected" },
        { k: "Why", v: "Servers rely on tips" },
        { k: "Also tipped", v: "Car guards, petrol attendants" },
        { k: "How", v: "Cash, in rand" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in South Africa: 10 to 15%, and car guards",
      description: "10 to 15% is expected at South African restaurants, plus a few rand for the car guard and the petrol attendant, local customs worth knowing about.",
      h1: "Tipping in South Africa",
      lede: "South Africa does have a tipping culture, and it is expected: 10 to 15% at restaurants. There are also two local customs to know, tipping car guards and petrol attendants. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "South Africa <b>does</b> have a tipping culture, and it is <b>expected</b>: at a <b>restaurant</b>, <b>10 to 15%</b> is normal, and servers rely on it. Some places add a <b>service charge for larger groups</b>, so check the bill. Two local things to know: you tip <b>car guards</b> (who watch your parked car) a few rand, and <b>petrol station attendants</b> (who fill your tank) a few rand. Round up for <b>taxis</b> and tip a rideshare. Tips are in <b>rand</b>, in cash.",
      sections: [
        {
          h: "10 to 15%, and servers rely on it",
          icon: "coins",
          key: { fig: "10-15%", tag: "Expected", text: "At a restaurant, 10 to 15% is expected, and servers rely on tips. Some places add a service charge for larger groups.", tone: "teal" },
          p: [
            "Unlike the light-tipping norms elsewhere, South Africa <b>does have a tipping culture</b>, and a restaurant tip is <b>expected</b>. At a <b>sit-down restaurant</b>, <b>10 to 15%</b> is normal for good service, and <b>servers genuinely rely on it</b>.",
            "Some places add a <b>service charge for larger groups</b>, so check the bill; if it is there, you need not tip on top."
          ]
        },
        {
          h: "Car guards and petrol attendants",
          icon: "cash",
          key: { fig: "A few rand", tag: "A local custom", text: "You tip car guards (who watch your parked car) and petrol station attendants (who fill your tank) a few rand each.", tone: "teal" },
          p: [
            "Two local customs surprise visitors. <b>Car guards</b>, who watch over your parked car in a lot or on the street, are tipped a <b>few rand</b> when you return (more if they helped you park or it was a while).",
            "And South African <b>petrol stations are full-service</b>: an attendant fills your tank, checks oil and cleans the windscreen, and is tipped a <b>few rand</b> for it."
          ]
        },
        {
          h: "Taxis, and paying",
          icon: "zar",
          key: { fig: "Rand", tag: "Round up, tip rideshare", text: "Round up a metered taxi and tip a rideshare driver a little. Tips are in rand, in cash.", tone: "teal" },
          p: [
            "For <b>taxis</b>, <b>round up</b> the metered fare, and for <b>Uber or Bolt</b>, a small tip in the app or in cash is appreciated. <b>Hotel porters</b> and <b>housekeeping</b>, a few rand is a kind gesture. Tips are in <b>rand</b>, in cash. For the wider picture, see the <a href='/south-africa'>South Africa money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in South Africa?", a: "Yes, and it is expected. At a restaurant, 10 to 15% is normal for good service, and servers rely on it. This is unlike the light-tipping norms of much of Europe." },
        { q: "Do you tip car guards in South Africa?", a: "Yes, a few rand. Car guards watch over your parked car and are tipped when you return, a little more if they helped you park or it was a while." },
        { q: "Do you tip petrol attendants in South Africa?", a: "Yes, a few rand. South African petrol stations are full-service: an attendant fills your tank and cleans the windscreen, and is tipped a small amount for it." },
        { q: "How much do you tip at a South African restaurant?", a: "About 10 to 15% for good service, which is expected since servers rely on tips. Some places add a service charge for larger groups, so check the bill first." }
      ],
      sources: {
        links: [
          { label: "US State Department: South Africa country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/SouthAfrica.html", type: "gov" }
        ],
        judgment: "South Africa has a real tipping culture where servers rely on tips, and the car guard and petrol attendant customs are widely observed. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Apps", v: "Uber and Bolt (Bolt cheaper)" },
        { k: "Airport pickup", v: "A designated e-hailing bay" },
        { k: "Never", v: "An unsolicited ride" },
        { k: "Johannesburg", v: "The Gautrain from OR Tambo" }
      ],
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "South Africa taxi apps, and airport e-hailing bays",
      description: "Uber and Bolt cover South Africa. Airport pickups happen at designated e-hailing bays, not the curb, plus the Gautrain from Johannesburg airport.",
      h1: "Taxis in South Africa, and the airport e-hailing bays",
      lede: "Uber and Bolt make getting around South Africa's cities easy, but the airports have a pickup quirk and there is some turf tension worth understanding. Here is the app to use, where it collects you, and what to avoid.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Install <b>Uber</b> and <b>Bolt</b>; both work well in the big cities and Bolt is usually a little cheaper. Two things to know. At the airports, app pickup is at a <b>designated e-hailing bay</b>, not the arrivals curb, and at <b>Cape Town</b> that bay is up at <b>Parkade 1</b> via the skybridge. And never take an <b>unsolicited</b> ride from someone inside the terminal. There is also real, sometimes tense competition between the apps and the traditional taxi operators at certain spots, so some pickups get moved a short distance. Avoid the <b>minibus taxis</b> as a visitor, and in Johannesburg the <b>Gautrain</b> is the easy airport link.",
      sections: [
        {
          h: "Which app to install",
          icon: "phoneok",
          key: { fig: "10-20% off", tag: "Bolt is cheaper", text: "Uber and Bolt are both widely available in Johannesburg, Cape Town, Durban and Pretoria. Bolt is usually 10 to 20 percent cheaper, so compare the two before you ride.", tone: "teal" },
          p: [
            "<b>Uber</b> and <b>Bolt</b> are both widely available in <b>Johannesburg</b>, <b>Cape Town</b>, <b>Durban</b> and <b>Pretoria</b>, and they are the way most visitors get around. <b>Bolt</b> is usually 10 to 20 percent cheaper on the same route, so many travelers keep both and compare, especially when one is surging. <b>inDriver</b>, where you propose a fare, is another option.",
            "Two safety habits are worth building. Verify the <b>driver and plate</b> in the app before you get in, and where you can, request pickups from <b>inside a mall or hotel</b> rather than standing on the street. Since 2025, e-hailing drivers must hold a licence and are limited to set areas, which is mostly invisible to you but can occasionally affect how quickly a car turns up."
          ]
        },
        {
          h: "The airport e-hailing bays",
          icon: "plane",
          key: { fig: "The bay", tag: "Not the arrivals curb", text: "At the airports, Uber and Bolt do not pick up at the arrivals door. Walk to the designated e-hailing bay; at Cape Town that is up at Parkade 1 via the skybridge.", tone: "teal" },
          p: [
            "The operational catch is that at the airports, Uber and Bolt do <b>not</b> pick up at the arrivals door. You walk to a <b>designated e-hailing bay</b>. At <b>Cape Town</b> (CPT), the bays are at <b>Parkade 1, Ground Floor</b>, reached via the departures-level skybridge, so you pass the metered-taxi rank outside arrivals and follow the <b>e-hailing</b> signs. The airport Wi-Fi is free, so you can book on arrival, and it is roughly <b>150 to 250 rand</b> into the city bowl. At Johannesburg's <b>OR Tambo</b>, there are designated pickup areas outside the terminals.",
            "The single most important rule for an arriving passenger: <b>never accept an unsolicited ride</b> from anyone who approaches you inside the terminal. Use the official metered-taxi rank outside arrivals, or the app's e-hailing bay, and nothing offered to you in the hall."
          ]
        },
        {
          h: "The taxi turf tension, and minibus taxis",
          icon: "alert",
          key: { tag: "Avoid the flashpoints", text: "There is a long-running, sometimes violent conflict between e-hailing drivers and traditional metered and minibus-taxi operators, and it flares at certain transport hubs. Never take an unsolicited ride, and use the app bays.", tone: "amber" },
          p: [
            "There is a long-running, sometimes violent conflict between <b>e-hailing drivers</b> and the traditional <b>metered-taxi</b> and <b>minibus-taxi</b> operators, and it flares at certain transport hubs. Notably, some <b>Gautrain stations</b> are effectively no-go zones for app pickups: at <b>Sandton</b>, for example, drop-off at the station is fine, but pickup is moved about a kilometre away and the app will direct you there. It rarely touches a normal hotel-to-restaurant ride, so if the app ever sends you to an odd pickup point near a station, that is the reason.",
            "Separately, the <b>minibus taxis</b>, the packed shared vans that most South Africans rely on, are best <b>avoided by visitors</b>. They are cheap and everywhere, but the safety standards, route confusion and periodic disputes between operators make them a poor fit for a traveler who does not know the system."
          ]
        },
        {
          h: "Johannesburg: the Gautrain, and paying",
          icon: "ticket",
          key: { fig: "Gautrain", tag: "Safe rail link", text: "In Johannesburg the Gautrain is the safe, fast rail link from OR Tambo airport to Sandton, Rosebank and Pretoria, running frequently until evening and beating the highway traffic.", tone: "teal" },
          p: [
            "In Johannesburg, the <b>Gautrain</b> is the safe, fast rail link from <b>OR Tambo</b> airport to <b>Sandton</b>, <b>Rosebank</b> and <b>Pretoria</b>, running frequently until the evening and beating the highway traffic. Pick up a <b>Gautrain Gold Card</b> at the airport station, which also works on the buses that fan out from the stations.",
            "In the apps you pay by card, which is one less thing to manage. Metered taxis prefer cash and remain handy for Cape Town airport runs, where the regulated rate can beat app surge pricing. Tipping around 10 percent is normal for a good ride. For the wider money picture, including how much cash to carry, see the <a href=\"/south-africa\">South Africa money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Does Uber work in South Africa?", a: "Yes. Uber and Bolt are widely available in Johannesburg, Cape Town, Durban and Pretoria, with Bolt usually a little cheaper. Verify the driver and plate in the app, and for safety request pickups from inside a mall or hotel where you can. Avoid the minibus taxis, which locals use but are not recommended for visitors." },
        { q: "Where do I get an Uber at Cape Town airport?", a: "Not at the arrivals door. The e-hailing bays are at Parkade 1, Ground Floor, reached via the departures-level skybridge, so walk past the metered-taxi rank and follow the e-hailing signs. Free airport Wi-Fi lets you book on arrival, and it is roughly 150 to 250 rand into the city. Never take an unsolicited ride from anyone inside the terminal." },
        { q: "Why did my Uber pickup move near a Gautrain station?", a: "Because of turf tension between e-hailing and the traditional taxi operators. Some Gautrain stations are effectively no-go zones for app pickups; at Sandton, drop-off at the station is fine, but pickup is about a kilometre away and the app will direct you. It is a known arrangement, not an error." },
        { q: "What is the best way from OR Tambo airport to the city?", a: "The Gautrain is the safe, fast rail link to Sandton, Rosebank and Pretoria, running frequently until the evening and skipping the traffic; buy a Gautrain Gold Card at the airport station. Otherwise, Uber or Bolt from the designated pickup bays outside the terminals, or a metered taxi from the official rank. Ignore anyone offering a ride inside arrivals." }
      ],
      sources: {
        links: [
          { label: "US Department of State: South Africa country information, general safety and local-travel context for US visitors", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/SouthAfrica.html", type: "gov" },
          { label: "Wikipedia: Transport in South Africa, on e-hailing licensing since 2025 and the Uber and Bolt operators", url: "https://en.wikipedia.org/wiki/Transportation_in_South_Africa", type: "reference" },
          { label: "Cape Town Airport guide: the e-hailing bays at Parkade 1 and the rule against unsolicited rides", url: "https://capetown-airport.co.za/uber-taxi", type: "guide" }
        ],
        judgment: "The airport e-hailing bays and the no-go zones can shift, and fares move with the rand and surge pricing, so treat rand figures as a recent read and check your app. The advice to avoid minibus taxis and unsolicited rides is the constant. Checked July 2026."
      }
    },
    {
      slug: "money-scams",
      glance: [
        { k: "The real risk", v: "Being helped at the ATM" },
        { k: "Your card", v: "Never let it leave you" },
        { k: "ATM security guards", v: "Not allowed to help you" },
        { k: "Set before you fly", v: "A daily withdrawal cap" }
      ],
      live: true,
      topic: "scams",
      title: "Common money scams in South Africa, and what they cost",
      description: "The ATM card swap, skimming at machines and till points, and the airport follow-home. What each one is, how to stay out of the situation, and how to claim your 15% VAT back.",
      h1: "Common money scams in South Africa, and what they cost you",
      lede: "South Africa is a magnificent country to travel in and most visits are trouble free, and the money scams here are unusually well documented, which makes them unusually avoidable. But we are not going to pretend the context is ordinary. The US State Department has South Africa at Level 2 with crime, terrorism, unrest and kidnapping indicators, and it notes that kidnappers target foreign travelers specifically to make them withdraw cash or hand over account passwords. So the advice is partly about the con at the cash machine, and partly about limiting what anyone can take. Read the full advisory for the wider picture; this page covers money.",
      checked: "Aug 2026",
      checkedISO: "2026-08-15",
      answer: "The signature scam here is the <b>ATM card swap</b>, where a stranger offers to help, cancels your transaction so the card ejects, and swaps it for another before you notice. Around it: <b>skimming</b> at machines and at till points, the <b>follow-home</b> from OR Tambo airport, and unlicensed taxis. South African police and the banking industry both publish the escapes, and they are specific: <b>never accept help at an ATM from anyone, including the security guard</b>, <b>go inside the bank instead</b>, <b>never let your card leave your sight</b>, and <b>set a daily withdrawal limit with your bank before you fly</b>. Separately, and in your favour, you can reclaim the <b>15 percent VAT</b> on bigger purchases at the airport.",
      sections: [
        {
          h: "The card swap, and the person offering to help",
          icon: "atm",
          key: { tag: "Refuse all help", text: "SABRIC describes the method exactly: a stranger offers to assist, presses cancel so your card ejects, and swaps it for another before you notice, usually before you enter your PIN.", tone: "teal" },
          p: [
            "This is South Africa's signature money scam and the banking industry body, <b>SABRIC</b>, publishes the method step by step. While you are at an ATM, an unknown person approaches to <b>assist</b> you. They press cancel so the machine ejects your card, and swap it for another one without you realising, usually <b>before you have entered your PIN</b>, which is why the transaction then fails and you assume the machine is faulty. You walk away with somebody else's card and they walk away with yours. SABRIC also describes how the confusion is manufactured: changing the <b>screen language</b> so the display looks unfamiliar, activating the <b>cardless function</b> to alter the layout, or <b>jamming the card slot or PIN pad</b> so you go to a quieter machine around the corner.",
            "The instructions from SABRIC and from the South African Police Service are unusually absolute, and one of them surprises people. <b>Do not accept help at an ATM from anyone</b>, and SABRIC spells out the exception that is not an exception: <b>not even the security personnel guarding the ATM, and not even someone presenting as a bank official</b>. SAPS says the same, noting that security staff at ATMs are there to deter crime and are <b>not authorised to assist with transactions</b>. Go inside the branch instead. If the machine keeps your card, call your bank's stop-card line yourself and <b>never let anyone else make that call for you</b>. Do not use a machine whose screen looks unfamiliar or whose slot or keypad appears tampered with, and never force a card into a slot."
          ]
        },
        {
          h: "Your card at the till, and skimming",
          icon: "card",
          key: { tag: "It never leaves you", text: "Card skimmers can be fitted to any reader, not just an ATM. If a card cannot be processed at your table, walk with it rather than letting it go out of sight.", tone: "teal" },
          p: [
            "The second half of the card problem happens away from the machine. <b>Skimming devices can be fitted to any card reader</b>, including till points at restaurants and filling stations, and South Africa is a country where fuel is full service, so handing a card through a car window is routine. The rule is the one South African banks give their own customers: <b>your card never leaves your sight</b>. If a staff member needs a different machine, either walk with them or ask them to bring the machine to you. Cover the keypad every time, including at a till.",
            "Two practical additions. Turn on <b>transaction alerts</b> before you travel so a bad charge reaches your phone in minutes rather than at the end of the month, and check your statement while you are still in the country, since reporting from home is much harder. On any terminal or ATM, choose <b>rand</b> rather than US dollars, because the dollar option adds a marked-up rate to every transaction you accept it on. The <a href=\"/south-africa/cash-or-card\">South Africa cash and cards guide</a> covers how to carry money here."
          ]
        },
        {
          h: "Arriving, and the follow-home",
          icon: "taxi",
          key: { fig: "E-hailing bay", tag: "Not the arrivals curb", text: "The State Department notes crime victims have been followed from OR Tambo airport in Johannesburg and robbed on reaching their hotel. Book transport in advance and use the designated pickup bay.", tone: "teal" },
          p: [
            "One specific pattern is worth planning around because it happens at the moment you are least alert. The US State Department records that crime victims have been <b>followed from OR Tambo airport in Johannesburg and then robbed when they reach their home or hotel</b>. It is not a scam in the con-artist sense, but it is how money leaves people who have just landed with everything they brought. The countermeasures are ordinary: <b>arrange your transport before you land</b> rather than sorting it at the curb, keep laptops and camera bags out of sight in the car, and if you think you are being followed, drive to a petrol station or police station rather than to where you are staying.",
            "For transport generally, use <b>Uber or Bolt</b>, both of which work well in the big cities. Two local details matter: at the airports, app pickup is at a <b>designated e-hailing bay</b> rather than the arrivals curb, and at Cape Town that bay is up at Parkade 1 via the skybridge. And <b>never take an unsolicited ride from someone inside the terminal</b>. The <a href=\"/south-africa/taxis-and-apps\">South Africa taxis and apps guide</a> has the rest, including the friction between app drivers and metered taxis at some pickup points."
          ]
        },
        {
          h: "The 15 percent you can claim back",
          icon: "refund",
          key: { fig: "15% VAT", tag: "Get a tax invoice", text: "Foreign visitors can reclaim the 15 percent VAT on goods taken home, but you need a proper tax invoice showing the VAT, and checked items must be inspected before you check in.", tone: "amber" },
          p: [
            "Now the item that goes the other way, and on a safari-and-shopping trip it is worth real money. Foreign visitors can <b>reclaim the 15 percent VAT</b> on goods they take out of South Africa. The catch is entirely procedural, and people miss it at the airport rather than at the shop. You need a proper <b>tax invoice</b> showing the VAT amount and the seller's VAT number, with your name on it for larger purchases, so ask for it at the till rather than accepting a card slip. Then, for anything going in <b>checked luggage</b>, the goods must be <b>inspected and the paperwork stamped before you check in</b>, which means arriving early and going to the VAT desk first.",
            "Two smaller money habits that are customs rather than cons. Fuel is full service, so the attendant who fills up and cleans your windscreen expects a few rand, and the <b>car guard</b> who watches your parked car expects a few rand when you return. Neither is a scam, both are normal, and the amounts are small; the <a href=\"/south-africa/tipping\">South Africa tipping guide</a> has the going rates. Keep a little cash for exactly this, and for the occasional localized power outage that briefly knocks out card machines."
          ]
        },
        {
          h: "What this means for your money",
          icon: "zar",
          key: { fig: "Decisions", tag: "Set it in advance", text: "SAPS itself recommends setting a daily ATM withdrawal limit with your bank. Do that before you fly, carry one card, refuse all help at machines, and book transport in advance.", tone: "teal" },
          p: [
            "The best single piece of advice here is not ours, it is the South African Police Service's own: <b>consider setting a daily ATM withdrawal limit with your bank</b>. Do it before you fly. It costs nothing, and it puts a ceiling on the worst case, including the scenario the State Department describes where someone is made to withdraw cash. Alongside it: <b>refuse all help at a cash machine, including from guards</b>, <b>never let your card leave your sight</b>, <b>carry one card and a little cash rather than your whole wallet</b>, <b>use ATMs inside malls and banks in daylight</b>, and <b>book transport before you land</b>.",
            "If something happens: emergency numbers are <b>10111</b> for police and <b>112</b> from a mobile, and SAPS runs <b>Crime Stop on 08600 10111</b> and the MySAPS app for reports. Call your bank's stop-card line yourself, immediately, and file a police report even if you expect nothing back, since your insurer will need it. And to keep proportion: these are documented, patterned scams with published countermeasures, which is exactly what makes them avoidable. For getting and spending money well while you are there, see the <a href=\"/south-africa/cash-or-card\">South Africa cash and cards guide</a> and the <a href=\"/south-africa\">South Africa cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is South Africa safe for tourists?", a: "Most visits are trouble free, but the context is not ordinary. The US State Department has South Africa at Level 2 with crime, terrorism, unrest and kidnapping indicators, and notes that kidnappers target foreign travelers to make them withdraw cash or hand over account passwords. This page covers money scams, which are well documented and avoidable. Read the current advisory for the wider picture." },
        { q: "What is the ATM card swap scam in South Africa?", a: "A stranger offers to help you at the machine, presses cancel so your card ejects, and swaps it for another before you notice, usually before you have entered your PIN. The banking body SABRIC publishes the method. Criminals also change the screen language or jam the slot to create confusion. Refuse all help and go inside the branch instead." },
        { q: "Should I let the ATM security guard help me?", a: "No. This surprises people, but both SABRIC and the South African Police Service are explicit: do not accept assistance at an ATM from anyone, not even the security personnel guarding it or someone presenting as a bank official. SAPS notes that ATM security staff are there to deter crime and are not authorised to assist with transactions. Go inside the bank for help." },
        { q: "What should I do if an ATM keeps my card in South Africa?", a: "Contact your bank's stop-card line yourself, immediately, and never allow anyone else to make that call on your behalf, which SAPS flags as a fraud method in itself. Do not accept help from bystanders. If the machine's screen looked unfamiliar or the slot or keypad seemed tampered with, mention that to the bank, and check your statement straight away." },
        { q: "How do I reclaim VAT in South Africa?", a: "You can reclaim the 15 percent VAT on goods you take home, but you need a proper tax invoice showing the VAT amount and the seller's VAT number, so ask at the till rather than accepting a card slip. For anything going in checked luggage, the goods must be inspected and the paperwork stamped before you check in, so go to the VAT desk first and arrive early." },
        { q: "How do I get from Johannesburg airport safely?", a: "Arrange transport before you land rather than sorting it at the curb, and never accept an unsolicited ride from someone inside the terminal. Uber and Bolt both work, but app pickup is at a designated e-hailing bay, not the arrivals curb. The State Department notes victims have been followed from OR Tambo and robbed on arriving at their hotel, so keep bags out of sight in the car." }
      ],
      sources: {
        links: [
          { label: "SABRIC: ATM card swopping, the banking industry warning describing the method and the refuse-all-help rule", url: "https://www.sabric.co.za/media-and-news/press-releases/atm-card-swopping/", type: "gov" },
          { label: "SAnews: South African Police Service warning on ATM scams, including the daily withdrawal limit advice", url: "https://www.sanews.gov.za/south-africa/saps-warns-increase-atm-related-scams", type: "gov" },
          { label: "US State Department: South Africa travel advisory, including the OR Tambo follow-home pattern and kidnapping indicator", url: "https://travel.state.gov/en/international-travel/travel-advisories/south-africa.html", type: "gov" }
        ],
        judgment: "The card swap method, the confusion tactics and the instruction to refuse help from anyone including ATM security personnel and apparent bank officials come from SABRIC, the South African Banking Risk Information Centre. The parallel police guidance, the point that ATM security staff are not authorised to assist with transactions, the warning never to let anyone else call your bank for you and the recommendation to set a daily ATM withdrawal limit come from a South African Police Service statement carried by the government news service. The follow-home from OR Tambo and the kidnapping context come from the current US State Department advisory, which sits at Level 2 with crime, terrorism, unrest and kidnapping indicators. We have attached no figure to the card swap because the loss depends entirely on your daily limit, which is exactly why setting it low in advance is the advice. Rand conversions use roughly 16.4 to the dollar. Checked August 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Good in cities and on the N-routes" },
        { k: "SIM registration", v: "RICA: passport and an address" },
        { k: "Carrier roaming", v: `${S.dayPassGlance}` },
        { k: "Cheapest", v: "An MTN bundle, if you do RICA" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "medium",
      title: "South Africa SIM card: RICA, and the bundle gap",
      description: "MTN bundles are cheap, Vodacom tourist bundles are not, and every SIM needs RICA registration with a passport and an address. Here is which route is worth the paperwork.",
      h1: "Staying connected in South Africa.",
      lede: "South Africa has a real price gap hidden in plain sight: an ordinary MTN data bundle and a Vodacom tourist bundle can differ by four times for the same gigabytes. The catch on both is RICA, the registration law, and whether it is worth your first afternoon.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>good in Cape Town, Johannesburg, Durban and along the N1, N2 and N3</b>, and thinner in the <b>Kruger interior</b>, the <b>Karoo</b>, the <b>Drakensberg</b> and along the Wild Coast. On price there is a real gap: an ordinary <b>MTN</b> prepaid data bundle can be around <b>5 dollars for 10GB</b>, while <b>Vodacom</b>'s tourist bundles run nearer <b>20 dollars for 3GB</b>, so which counter you walk up to matters more than which network. Every SIM needs <b>RICA</b> registration: your <b>passport</b> plus a <b>local address</b>, where airport counters will normally accept your accommodation booking, and activation can take up to <b>24 hours</b>. A <b>Nomad eSIM</b> at a few dollars per gigabyte skips RICA entirely, which is the honest case for it here. Your US carrier's day pass is about <b>${S.dayPass}</b> (<b>AT&amp;T and Verizon</b>), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon's TravelPass has ${S.verizonNoCap}</b> and keeps billing daily. <b>Vodacom</b> and <b>MTN</b> have the widest reach; for game reserves and the Drakensberg, <b>download offline maps</b>. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "The bundle gap is the real money story",
          icon: "zar",
          key: { fig: "4x apart", tag: "Bundle vs tourist pack", text: "An ordinary MTN bundle can be about $5 for 10GB where a Vodacom tourist bundle is nearer $20 for 3GB. Ask for the standard bundle, not the tourist one.", tone: "amber" },
          p: [
            "This is the part nobody tells visitors. South African carriers sell <b>ordinary prepaid data bundles</b> to their own market at competitive prices, and separately sell <b>tourist bundles</b> at prices set for people who will not comparison shop. The spread is large: an <b>MTN</b> promotional bundle can be around <b>5 dollars for 10GB</b>, while a <b>Vodacom tourist bundle</b> sits nearer <b>20 dollars for 3GB</b>. Same country, same towers, roughly a four-fold difference per gigabyte.",
            "So the useful move is to buy a cheap SIM, complete RICA, and then <b>load a standard prepaid data bundle</b> through the carrier's app or USSD menu rather than accepting the tourist pack you are offered at the counter. Ask what the ordinary bundles cost before agreeing to anything. If that sounds like more effort than a holiday deserves, that is a legitimate view, and it is the honest argument for the eSIM."
          ]
        },
        {
          h: "RICA, and what it actually requires",
          icon: "passport",
          key: { fig: "Up to 24h", tag: "RICA activation", text: "Passport plus a local address, with airport counters normally accepting your accommodation booking. Activation can take up to a day.", tone: "amber" },
          p: [
            "South Africa's <b>RICA</b> law requires every SIM to be registered before it works: your <b>passport</b>, and a <b>local address</b>, which is the part that trips up visitors since the rule was written for residents with utility bills. In practice the counters at <b>Cape Town and Johannesburg</b> airports and the RICA agents in supermarkets deal with tourists constantly and will normally accept your <b>hotel, B&amp;B or lodge booking</b> as the address. Some agents are stricter than others, so carry the booking confirmation with the address on it.",
            "Activation is usually minutes at an airport counter and can take up to <b>24 hours</b> elsewhere, which is worth knowing if you land in the evening and want data for the drive out. The alternative is a <b>Nomad eSIM</b>, which needs no RICA, no address and no counter, at a few dollars per gigabyte: more than an MTN bundle, less than a Vodacom tourist pack, and available before you land. That is the trade, stated plainly, and we do earn on the eSIM."
          ]
        },
        {
          h: "Coverage, and one warning that has expired",
          icon: "phoneok",
          key: { fig: "The Kruger", tag: "Where signal thins", text: "Cities and the main N-routes are well covered. Game reserve interiors, the Karoo, the Drakensberg and the Wild Coast are not.", tone: "teal" },
          p: [
            "<b>Vodacom</b> and <b>MTN</b> have the widest footprints and are effectively interchangeable for a city-and-Garden-Route trip, with strong 4G and urban 5G. The gaps are where you would guess: the interior of <b>Kruger</b> and the private reserves, much of the <b>Karoo</b> between towns, the <b>Drakensberg</b> passes and hiking areas, the <b>Wild Coast</b>, and stretches of the northern Cape. A lodge will usually have wifi and often nothing else, so <b>download offline maps</b> for self-drive safari and mountain days.",
            "One correction worth making, because older guidance still repeats it: for years the honest advice here included a warning that <b>load shedding</b> could degrade mobile towers during rolling blackouts. As of this check that no longer applies. South Africa has had <b>no national load shedding since May 2025</b>, a run of well over a year, and Eskom projected none through the 2026 winter. Localised load reduction continues in some residential areas for infrastructure reasons, and it is not the visitor-facing coverage problem it was in 2023. This guide is written for US travelers departing the US. For more, see <a href='/south-africa/cash-or-card'>cash or card in South Africa</a>, <a href='/south-africa/taxis-and-apps'>taxis and apps in South Africa</a>, and the <a href='/south-africa'>South Africa money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "What is RICA and do I need it as a tourist?", a: "RICA is South Africa's SIM registration law, and yes, every SIM needs it before it works. You need your passport and a local address, and airport counters will normally accept your accommodation booking, so carry the confirmation. Activation is usually minutes at an airport counter and can take up to 24 hours elsewhere." },
        { q: "How much should a data bundle cost in South Africa?", a: "Much less than the tourist packs suggest. An ordinary MTN prepaid bundle can be around 5 dollars for 10GB, while a Vodacom tourist bundle sits nearer 20 dollars for 3GB. Buy a cheap SIM, complete RICA, then load a standard bundle through the carrier's app rather than accepting the tourist pack at the counter." },
        { q: "Does load shedding still affect phone coverage in South Africa?", a: "Not as of this check. South Africa has had no national load shedding since May 2025 and Eskom projected none through the 2026 winter, so the old warning about blackouts degrading towers no longer applies. Localised load reduction continues in some residential areas for infrastructure reasons rather than generation shortfalls." },
        { q: "How much does it cost to use my US phone in South Africa?", a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "Vodacom: RICA registration requirements and what documents are accepted", url: "https://www.vodacom.co.za/vodacom/help/rica", type: "official" },
          { label: "Eskom: system status and the winter outlook behind the load shedding position", url: "https://www.eskom.co.za/", type: "official" },
          { label: "US State Department: South Africa country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/SouthAfrica.html", type: "gov" }
        ],
        judgment: "Checked Aug 2026, and two things here are deliberate. First, the bundle gap: we are pointing you at the cheaper local route even though we earn nothing on it, because a four-fold difference per gigabyte between an ordinary bundle and a tourist pack is the single most useful fact on this page. Second, the load shedding line is a retirement rather than a warning. We checked it specifically because older travel guidance still repeats it, and the position as of August 2026 is 441 consecutive days without national load shedding since 16 May 2025, with Eskom projecting none through the winter. If that changes it will be widely reported, and this page should be re-checked before it is trusted on the point."
      }
    },
    {
      slug: "medical-costs",
      exposureCategory: "depositFirst",
      exposureQuote: "the private hospitals where a visitor belongs ask for a substantial deposit or proof of cover at admission",
      glance: [
        { k: "Two systems", v: "You want the private one" },
        { k: "Admission", v: "Deposit or proof of cover" },
        { k: "Quality", v: "Private care is excellent" },
        { k: "Real risk", v: "A safari far from the city" }
      ],
      live: true,
      topic: "health",
      title: "Getting sick in South Africa: two systems, one deposit",
      description: "South Africa splits sharply: excellent private hospitals that want a deposit or proof of cover at admission, and a public system a visitor should not plan around.",
      h1: "What does getting sick in South Africa cost a visitor?",
      lede: "South Africa has two health systems living in one country. The private one is excellent, and it is where a visitor belongs; the private hospitals where a visitor belongs ask for a substantial deposit or proof of cover at admission. The public one is overstretched, and it is not the plan.",
      checked: "Aug 2026",
      checkedISO: "2026-08-21",
      answer: "The split decides everything about the money. South Africa's <b>private hospitals</b>, the big national groups in Johannesburg, Cape Town, Durban and the other cities, deliver care at a first-world standard, and they run first-world billing to match: at admission they want a <b>substantial deposit or proof of cover</b>, and doctors bill separately on top of the hospital's account. The <b>public system</b> treats the great majority of South Africans with far fewer resources, and while it will take an emergency, it is not where a visitor should plan to be treated. The second structural fact is distance: on safari, along the Garden Route or anywhere far from the metros, the first medical event is a <b>road or air transfer</b> to a private hospital, and the private ambulance networks that do it are also paid services.",
      insurance: true,
      insuranceNote: "South African private medicine is genuinely excellent, so this is not a page about quality. It is a page about the gate: a substantial deposit or proof of cover at admission, doctors billed on top, and a paid private ambulance or air transfer if the trip is a safari or a coast drive far from the metros. Cover here should be judged on the guarantee-of-payment machinery and the medical transport line. Faye covers trip medical and evacuation.",
      careFirst: "If it looks serious, get to a private emergency department first and sort the deposit out afterwards.",
      sections: [
        {
          h: "The private system is the plan, and it has a gate",
          icon: "alert",
          key: { tag: "Deposit or proof", text: "Private hospitals want a substantial deposit or proof of cover at admission, and the doctors treating you bill separately on top of the hospital's account.", tone: "amber" },
          p: [
            "Be clear-eyed about which system you would use. A visitor with anything serious belongs in the <b>private system</b>, which is excellent, English-speaking and concentrated in the cities. Its gate is financial: at admission the desk wants a <b>substantial deposit or proof of cover</b>, card holds are normal, and the specialists who treat you <b>invoice separately</b> from the hospital, so the hospital's number is not the whole bill.",
            "If it looks serious, get to a private emergency department first and sort the deposit out afterwards. An insurer whose assistance line can send a <b>guarantee of payment</b> to a South African private group is the practical key to that gate."
          ]
        },
        {
          h: "Distance is the second bill",
          icon: "plane",
          key: { tag: "Getting to care", text: "On safari or far from the metros, the first event is a road or air transfer to a private hospital, run by paid private ambulance networks.", tone: "amber" },
          p: [
            "South Africa's serious private capacity sits in the metros, and the trips people fly here for, safari lodges, the Garden Route, the Drakensberg, the winelands beyond the towns, sit hours from it. The country handles that with well-run <b>private emergency and air ambulance networks</b>, and they are paid services like the hospitals they deliver to.",
            "So for the classic South African trip, the realistic serious scenario starts with a <b>transfer</b>, and the medical transport line on a policy is doing real work. If your itinerary is remote lodges, check that line the way you would check the medical limit."
          ]
        },
        {
          h: "Why there are no prices on this page",
          icon: "receipt",
          key: { tag: "Absence is not zero", text: "We have not sourced a South African price list for visitor care that we would stand behind, so we have published none.", tone: "teal" },
          p: [
            "We would rather say this than pad the page. South African private care is priced group by group and case by case, and we did not source a published visitor tariff we would put our name to, so no rand figure appears here. On a medical page a plausible-sounding number is not a small error, because it is something a person might act on while unwell.",
            "The structure is dependable: the private system is the plan, the deposit or proof of cover is its gate, doctors bill on top, and distance adds a paid transfer. Those facts, not a consultation fee, decide the money."
          ]
        },
        {
          h: "What this means for your money",
          icon: "cash",
          key: { tag: "Gate and distance", text: "Judge a policy on the guarantee-of-payment machinery for the admission gate, and on the medical transport line for the distance between your lodge and a city hospital.", tone: "teal" },
          p: [
            "Everyday problems in the cities are straightforward: private GPs and clinics see visitors quickly at prices that will not wreck a trip, paid on the spot. The planning belongs to the serious case: an admission gate that opens on a deposit or a guarantee, separate specialist invoices to keep, and a transfer bill if you are far from the metros.",
            "Save the private emergency numbers your lodge or hotel uses, keep every invoice separately for the claim, and for paying on the ground, see the <a href=\"/south-africa/cash-or-card\">South Africa cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do private hospitals in South Africa require a deposit?", a: "At admission they want a substantial deposit or proof of cover, and card holds are normal. A guarantee of payment from your insurer's assistance line is the practical substitute, and the specialists treating you bill separately on top of the hospital account." },
        { q: "Can a tourist use public hospitals in South Africa?", a: "A public emergency department will take a true emergency, but the public system is overstretched and not where a visitor should plan to be treated. The realistic plan is the private system, which is excellent and billed accordingly." },
        { q: "What happens if I get sick on safari in South Africa?", a: "The first event is a transfer, by road or air, to a private hospital in a metro, run by paid private ambulance networks. That transfer is a real bill of its own, which is why the medical transport line on a policy matters for a safari trip." },
        { q: "Does my US health insurance work in South Africa?", a: "Rarely, and Medicare not at all. Private hospitals bill you directly and want the deposit or proof of cover regardless, so what counts is an insurer that can wire a guarantee of payment quickly." },
        { q: "Do I need travel insurance for South Africa?", a: "For a city trip, the honest reason is the admission gate and the bills behind it. For a safari or a remote coast trip, add the transfer: getting to the private hospital is a paid journey, and the medical transport line is the one to read first." }
      ],
      sources: {
        links: [
          { label: "US State Department: South Africa country information for US travelers, including health and medical care guidance", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/SouthAfrica.html", type: "gov" }
        ],
        judgment: "The deposit-or-proof-of-cover admission practice at private hospitals, the separate physician billing, and the reliance on paid private emergency transfer networks outside the metros are the consistent, well-attested shape of South African private healthcare in official US guidance, stated qualitatively. No rand figure appears because private pricing varies by group and case and we did not source a published visitor tariff we would defend. Checked August 2026.",
      }
    }
  ]
};
