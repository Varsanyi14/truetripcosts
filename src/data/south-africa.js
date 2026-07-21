export default {
  slug: "south-africa",
  live: true,
  name: "South Africa",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-12",
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

  title: "Money in South Africa (2026): Cards, Cash, ATMs, the VAT Refund, Tipping and Load-Shedding | True Trip Costs",
  description: "How to handle money in South Africa as a US traveler in 2026: near-universal cards and contactless, the cash you still need for tips and petrol attendants, ATM safety, the dollar-conversion trap, the 15% VAT refund on goods, the new ETA, load-shedding, and how tipping works. Checked July 2026.",

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
    { label: "Electronic Travel Authorisation (ETA)", value: "Now live for nationals of China, India, Indonesia and Mexico but not required for US visitors, who still get a free 90-day stamp on arrival; confirm on the official Home Affairs site before you fly", status: "proposed", effective: null, source: "https://www.saembassy.org/visas/civic_immigration/visitor_visa/", checked: "2026-07-21" }
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
      slug: "taxis-and-apps",
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Which taxi app to use in South Africa, and the airport e-hailing bays (2026) | True Trip Costs",
      description: "Which ride app to install for South Africa (Uber and Bolt), why airport pickups happen at designated e-hailing bays not the curb, the taxi turf tension to know, and the Gautrain from Johannesburg airport. Checked July 2026.",
      h1: "Taxis in South Africa, and the airport e-hailing bays",
      lede: "Uber and Bolt make getting around South Africa's cities easy, but the airports have a pickup quirk and there is some turf tension worth understanding. Here is the app to use, where it collects you, and what to avoid.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Install <b>Uber</b> and <b>Bolt</b>; both work well in the big cities and Bolt is usually a little cheaper. Two things to know. At the airports, app pickup is at a <b>designated e-hailing bay</b>, not the arrivals curb, and at <b>Cape Town</b> that bay is up at <b>Parkade 1</b> via the skybridge. And never take an <b>unsolicited</b> ride from someone inside the terminal. There is also real, sometimes tense competition between the apps and the traditional taxi operators at certain spots, so some pickups get moved a short distance. Avoid the <b>minibus taxis</b> as a visitor, and in Johannesburg the <b>Gautrain</b> is the easy airport link.",
      sections: [
        {
          h: "Which app to install",
          p: [
            "<b>Uber</b> and <b>Bolt</b> are both widely available in <b>Johannesburg</b>, <b>Cape Town</b>, <b>Durban</b> and <b>Pretoria</b>, and they are the way most visitors get around. <b>Bolt</b> is usually 10 to 20 percent cheaper on the same route, so many travelers keep both and compare, especially when one is surging. <b>inDriver</b>, where you propose a fare, is another option.",
            "Two safety habits are worth building. Verify the <b>driver and plate</b> in the app before you get in, and where you can, request pickups from <b>inside a mall or hotel</b> rather than standing on the street. Since 2025, e-hailing drivers must hold a licence and are limited to set areas, which is mostly invisible to you but can occasionally affect how quickly a car turns up."
          ]
        },
        {
          h: "The airport e-hailing bays",
          p: [
            "The operational catch is that at the airports, Uber and Bolt do <b>not</b> pick up at the arrivals door. You walk to a <b>designated e-hailing bay</b>. At <b>Cape Town</b> (CPT), the bays are at <b>Parkade 1, Ground Floor</b>, reached via the departures-level skybridge, so you pass the metered-taxi rank outside arrivals and follow the <b>e-hailing</b> signs. The airport Wi-Fi is free, so you can book on arrival, and it is roughly <b>150 to 250 rand</b> into the city bowl. At Johannesburg's <b>OR Tambo</b>, there are designated pickup areas outside the terminals.",
            "The single most important rule for an arriving passenger: <b>never accept an unsolicited ride</b> from anyone who approaches you inside the terminal. Use the official metered-taxi rank outside arrivals, or the app's e-hailing bay, and nothing offered to you in the hall."
          ]
        },
        {
          h: "The taxi turf tension, and minibus taxis",
          p: [
            "There is a long-running, sometimes violent conflict between <b>e-hailing drivers</b> and the traditional <b>metered-taxi</b> and <b>minibus-taxi</b> operators, and it flares at certain transport hubs. Notably, some <b>Gautrain stations</b> are effectively no-go zones for app pickups: at <b>Sandton</b>, for example, drop-off at the station is fine, but pickup is moved about a kilometre away and the app will direct you there. It rarely touches a normal hotel-to-restaurant ride, so if the app ever sends you to an odd pickup point near a station, that is the reason.",
            "Separately, the <b>minibus taxis</b>, the packed shared vans that most South Africans rely on, are best <b>avoided by visitors</b>. They are cheap and everywhere, but the safety standards, route confusion and periodic disputes between operators make them a poor fit for a traveler who does not know the system."
          ]
        },
        {
          h: "Johannesburg: the Gautrain, and paying",
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
    }
  ]
};
