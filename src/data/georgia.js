export default {
  slug: "georgia",
  live: true,
  name: "Georgia",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-20",
  sources: {
    changed: "Sources added on first publish. Confirmed that US citizens can stay visa-free for up to 365 days, that from 1 January 2026 all foreign tourists must carry travel insurance under Decree 602 with at least 30,000 GEL of medical and accident cover (most standard policies qualify), and the lari at about 2.6 to 2.7 to the US dollar. Prices include an 18% VAT. Overall the country is at US State Department Level 1, with a Do Not Travel warning only for the Russian-occupied regions.",
    links: [
      { label: "US State Department: Georgia country information, including 365-day visa-free entry for US citizens", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Georgia.html", type: "gov" },
      { label: "Georgia Ministry of Foreign Affairs (geoconsul.gov.ge): the Decree 602 travel-insurance rule for tourists from 1 January 2026", url: "https://geoconsul.gov.ge/", type: "gov" },
      { label: "National Bank of Georgia: the official lari exchange rate", url: "https://nbg.gov.ge/en/monetary-policy/currency", type: "currency" },
      { label: "US State Department: the Georgia travel advisory, Level 1 with occupied-region exceptions", url: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/georgia-travel-advisory.html", type: "gov" }
    ],
    judgment: "The daily cash share, tipping habits, likely ATM behavior, and the note on the Tbilisi protests are our own read from advisories and recent traveler reports, not a single official table. The insurance rule's enforcement is still settling in, so confirm the current position before you travel."
  },
  emergency: { medical: "112", note: "112 reaches police, ambulance and fire from any phone, with a fluent English operator available 24/7, and dialing 911 redirects to the same 112 center.", checked: "Jul 2026", checkedISO: "2026-07-20" },
  insuranceLevel: "medium",
  region: "Europe",
  signals: { cardFriendliness: 4, cashNeed: 2, taxRisk: 2, atmRisk: 3 },
  hook: "US citizens can stay in Georgia visa-free for up to a year, but from 2026 you must carry travel insurance to enter. The lari is the currency, Tbilisi and Batumi are very card-friendly, and you will want cash for markets, rural areas and shared minibuses.",
  aliases: ["georgia", "tbilisi", "batumi", "kutaisi", "sakartvelo", "caucasus", "kakheti", "svaneti", "kazbegi", "mtskheta", "gel", "lari", "georgian lari", "georgian", "republic of georgia"],

  title: "Money in Georgia (2026): the Lari, Cards, ATMs, the New Travel-Insurance Rule and Tipping | True Trip Costs",
  description: "How to handle money in the country of Georgia as a US traveler in 2026: the lari, tap-friendly Tbilisi and Batumi, ATMs and the dollar trick, the 18% VAT, light tipping, the 365-day visa-free entry, and the new Decree 602 rule that requires travel insurance to enter. Checked July 2026.",

  h1: "Money in Georgia, sorted.",
  lede: "A calm, current plan for the money side of your trip: what you can tap (most of Tbilisi and Batumi), the cash worth carrying for markets and the mountains, the lari in plain terms, and the two entry rules that surprise first-timers, a full year visa-free but insurance now required.",
  hero: {
    img: "/georgia-hero.jpg",
    h: 1375,
    alt: "A quiet cobblestone lane in the old town of Tbilisi at dusk, with traditional houses and carved wooden balconies, the brick domes of the sulfur bathhouses, and the Narikala Fortress and the Mother of Georgia statue on the ridge in silhouette, string lights across the lane, a lone figure walking away, and a steaming boat-shaped Adjaruli khachapuri with a golden egg and a glass of red Georgian wine on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "The country of Georgia is <b>very card-friendly</b> in its cities. In Tbilisi, Batumi and Kutaisi you can <b>tap a Visa or Mastercard</b> almost everywhere, contactless and Apple or Google Pay are common, and <b>Bank of Georgia</b> and <b>TBC</b> are the big banks behind it all. Where you still want <b>cash</b> is the local side: markets, bakeries, small towns, rural guesthouses, tips, and the shared <b>marshrutka</b> minibuses that link the country. Pull <b>lari</b> from a bank ATM, and on any terminal or machine <b>choose lari, not dollars or euros</b>, to dodge the poor conversion. Two entry rules stand out, and one is new: US citizens get a full <b>year visa-free</b> (365 days), and from <b>1 January 2026 every tourist must carry travel insurance</b> to enter, at least <b>30,000 GEL</b> (about 11,000 dollars) of medical and accident cover. <b>Most standard US travel insurance meets this</b>, but carry proof, since it can be checked at the border. Prices include an <b>18% VAT</b>, and tipping is light, often a service charge already on the bill.",

  recentChange: {
    date: "Jul 2026",
    text: "From <b>1 January 2026</b>, Georgia requires every foreign tourist to hold <b>travel insurance</b> covering the whole stay, with at least <b>30,000 GEL</b> (about 11,000 dollars) of medical and accident cover. <b>Most standard US travel insurance policies meet this</b>, but carry proof (a PDF or printout in English), since border officers can ask for it, and travelers without it can be turned away or fined about <b>300 GEL</b>. Enforcement is still settling in, so treat it as a real requirement and buy a policy before you fly."
  },

  meter: {
    heading: "The cities are strongly card-first. Keep a little cash for markets, minibuses and the mountains.",
    cashPct: 25,
    note: "A rough feel for everyday spending. Cards and contactless work almost everywhere in Tbilisi, Batumi and Kutaisi, in shops, restaurants, cafes and taxis. The cash you want is for markets, bakeries, small vendors, rural guesthouses, tips, and the shared marshrutka minibuses, which take cash only."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works across the cities", p: "Visa and Mastercard are taken almost everywhere in Tbilisi, Batumi and Kutaisi, contactless is common, and Apple Pay and Google Pay work widely. Bank of Georgia and TBC are the main banks. A no-foreign-fee card covers most of a city trip. Amex is patchier, so carry a Visa or Mastercard backup.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "For markets, minibuses and rural areas", p: "You can go nearly cashless in the cities, but keep some lari for <b>markets, bakeries, small vendors and tips</b>, for <b>rural guesthouses</b> that prefer cash, and for the shared <b>marshrutka minibuses</b>, which are cash only. Carry small notes, since change for large ones can be scarce outside the cities.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy, but choose lari", p: "Bank of Georgia and TBC ATMs are everywhere in the cities and dispense lari. Many are low-fee, though some charge a small amount and standalone machines can push a poor \"pay in dollars\" rate. <b>Choose lari</b>, use a bank machine, decline any dollar conversion, and pull enough before heading into the mountains, where machines thin out.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Buy <b>travel insurance</b> that covers Georgia with at least <b>30,000 GEL</b> (about 11,000 dollars) of medical and accident cover. Since 1 January 2026 it is <b>required to enter</b>, and most standard policies qualify. Save a <b>PDF or printout in English</b> to show at the border.",
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> for nearly everything, plus a backup from a different bank.",
      "Add a <b>fee-free ATM debit card</b> (Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee) for pulling lari.",
      "You need very little cash to start, so plan to pull a small amount of lari once you land rather than buying it at home."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Have your <b>insurance proof</b> ready in case a border officer asks for it.",
      "If you want cash, use a <b>Bank of Georgia or TBC ATM</b> in the terminal and <b>decline \"convert to dollars,\"</b> so you are charged in lari.",
      "Install <b>Bolt</b> for taxis, which is the easy, fair-priced way from Tbilisi airport into the city.",
      "Set up an <b>eSIM</b> before you land, or grab a cheap local SIM (Magti or Silknet) with your passport, for maps and ride apps."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card</b> for almost everything in the cities: shops, restaurants, cafes and taxis.",
      "Keep <b>a little cash</b> for markets, bakeries, tips, rural guesthouses and the shared marshrutka minibuses.",
      "<b>Choose lari</b> on every card terminal and ATM screen, never dollars or euros.",
      "Use <b>Bolt</b> for city taxis, and agree the fare first with any street taxi that has no meter."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in lari, never in dollars or euros.</b> Choosing your home currency (dynamic currency conversion) on a terminal or ATM quietly adds a few percent, and standalone machines can be worse. Let your own bank do the exchange.",
      "<b>Carry your insurance proof and choose bank ATMs.</b> The insurance is an entry rule now, and a Bank of Georgia or TBC machine is cheaper and safer than a standalone one."
    ], cta: null }
  ],

  cash: {
    rate: 2.63, cur: "GEL", round: 20, defaultIndex: 1,
    rateNote: "Roughly 2.6 to 2.7 lari to the US dollar in 2026 (about 0.38 dollars per lari), so a 30 lari lunch is about 11 dollars and 100 lari is about 38. This is only the small, cash-in-hand slice of your spending, since the cities are strongly card-first.",
    styles: [
      { n: "Budget",    per: 30,  cash: 0.40 },
      { n: "Mid-range", per: 65,  cash: 0.25 },
      { n: "Comfort",   per: 130, cash: 0.20 }
    ]
  },

  connectivity: {
    works: "Strong across Tbilisi, Batumi and Kutaisi and most towns, where 4G is near-universal and 5G is growing, and thinner in the high Caucasus (Svaneti, Kazbegi and remote valleys). The carriers are Magti, Silknet and Cellfie, all inexpensive. A local prepaid SIM is cheap and needs your passport, and travel eSIMs from Airalo, Nomad or Holafly work well too. You do not need mobile data to pay by card, but you will want it for maps, ride apps and calls. Most hotels and guesthouses have Wi-Fi."
  },

  flight: { low: 650, high: 1400, checked: "Jul 2026", checkedISO: "2026-07-20" },

  tax: {
    none: true,
    currency: "GEL",
    note: "Georgia has no per-person nightly tourist tax to add at the desk. Prices carry an 18% VAT, usually baked into what you see, and there is no broad tourist VAT refund to count on. The one thing to plan for in 2026 is not a tax but an entry rule: every tourist must now hold travel insurance for the whole stay (at least 30,000 GEL of medical and accident cover), covered below."
  },

  currencyHeading: "The lari, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "About 2.6 to 2.7 lari (GEL) to 1 US dollar in 2026, so lari prices are a little under half the same number in dollars: a 30 lari meal is about 11 dollars, and 100 lari is about 38. The lari is written with the symbol that looks like a curved capital L, and prices include 18% VAT." },
    { sym: "card", k: "Very card-friendly in cities", v: "Tbilisi, Batumi and Kutaisi are strongly card-first: Visa and Mastercard work almost everywhere, contactless and Apple or Google Pay are common, and Bank of Georgia and TBC are the big banks. Cash takes over in villages, markets, bakeries and the shared marshrutka minibuses." },
    { sym: "atm", k: "ATMs and the dollar trick", v: "Bank of Georgia and TBC ATMs are everywhere in the cities and dispense lari. Many are low-fee, though some charge a small amount and standalone machines can push a poor pay-in-dollars rate. Choose lari, use a bank machine, and pull enough before heading into the mountains." },
    { sym: "tip", k: "Tipping is light", v: "Tipping is modest and often optional. Many Tbilisi restaurants add a service charge of about 10% to the bill; if it is there, that is the tip. Otherwise rounding up or leaving about 10% is generous, and there is no need to tip at bakeries or fast counters." }
  ],

  taxfree: {
    label: "Taxes and the insurance rule",
    heading: "An 18% VAT in the price, and insurance now required to enter.",
    text: "Georgia keeps tax simple for visitors. Prices include an <b>18% VAT</b>, usually baked into what you see, and there is <b>no per-person nightly tourist tax</b> to hand over. There is <b>no broad tourist VAT refund</b> to count on. The change to know for 2026 is not a tax but an entry rule: from <b>1 January 2026</b> every foreign tourist must hold <b>travel insurance</b> for the whole stay, with at least <b>30,000 GEL</b> (about 11,000 dollars) of medical and accident cover. <b>Most standard US travel policies qualify</b>, so this is usually a box you already tick, but carry <b>proof in English</b> (a PDF or printout), since it can be checked at the border and going without risks a fine of about <b>300 GEL</b> or refused entry. Buy a policy before you fly. Healthcare in Tbilisi and Batumi is good and affordable by US standards, but the insurance is now a rule, not just a good idea."
  },

  keyFacts: [
    { label: "Mandatory travel insurance (Decree 602)", value: "Required for all tourists from 1 Jan 2026, at least 30,000 GEL of medical and accident cover", status: "enacted", effective: "2026-01-01", source: "https://geoconsul.gov.ge/", checked: "2026-07-20" },
    { label: "Visa-free stay for US citizens", value: "Up to 365 days per entry, no visa", status: "enacted", effective: null, source: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Georgia.html", checked: "2026-07-20" }
  ],

  traps: [
    "<b>Carry proof of travel insurance.</b> Since 1 January 2026 every tourist must hold cover of at least 30,000 GEL for the whole stay. Most standard US policies qualify, but keep a PDF or printout in English, since border officers can ask and going without risks a fine of about 300 GEL.",
    "<b>Choose lari, never dollars or euros.</b> On a card terminal or ATM, picking your home currency (dynamic currency conversion) quietly adds a few percent, and standalone machines can be worse. Pick lari every time and let your own bank convert.",
    "<b>Central Tbilisi has evening protests.</b> Since late 2024 there have been demonstrations most evenings on Rustaveli Avenue near Parliament. They are rarely aimed at tourists, but police have at times used tear gas or water cannon, so avoid the crowds, expect traffic there in the evening, and know the rest of the city and country are unaffected.",
    "<b>Marshrutka minibuses and markets are cash.</b> The shared minibuses that link towns, and most market stalls and bakeries, take cash only, so keep small lari notes on hand.",
    "<b>Do not travel to Abkhazia or South Ossetia.</b> These Russian-occupied regions carry a Do Not Travel warning, the US government cannot help you there, and entering from the Georgian side is not permitted."
  ],

  tippingHeading: "Light, and often already on the bill.",
  tipping: "Tipping in Georgia is <b>light</b> and often optional. At sit-down restaurants, many places in Tbilisi and Batumi add a <b>service charge of about 10%</b> to the bill, and if it is there, that is the tip, so check first. Where there is no service charge, rounding up or leaving about <b>10%</b> for good service is generous. At <b>cafes, bakeries and fast counters</b>, nothing is expected, though you can drop small change in a jar. <b>Round up</b> a taxi fare rather than tipping a percentage, and with Bolt you can tip in the app if you like. For a <b>guide</b>, a few lari or a small note per person for a day tour is kind, more for a private or multi-day guide, and for a <b>hotel porter</b> or <b>housekeeping</b>, a lari or two is plenty. Tip in cash where you can, in small lari notes, so it reaches the person directly.",

  faqs: [
    { q: "Do US citizens need a visa for Georgia?", a: "No. US citizens can enter the country of Georgia visa-free and stay for up to 365 days per entry, one of the most generous policies in the world, for tourism, business or study. You need a passport valid for your stay, and since 1 January 2026 you must also carry travel insurance to enter. Border control at Tbilisi airport is usually quick." },
    { q: "Do I need travel insurance to enter Georgia in 2026?", a: "Yes. From 1 January 2026, under Decree 602, every foreign tourist must hold travel insurance covering the whole stay, with at least 30,000 GEL (about 11,000 dollars) of medical and accident cover. Most standard US travel insurance policies meet this. Carry proof in English (a PDF or printout), since border officers can ask, and going without risks a fine of about 300 GEL or refused entry." },
    { q: "Do I need cash in Georgia, or can I use cards?", a: "Cards cover most of a city trip. Tbilisi, Batumi and Kutaisi are strongly card-first, with contactless almost everywhere. Keep some lari for markets, bakeries, small vendors, tips, rural guesthouses and the shared marshrutka minibuses, which take cash only. Pull lari from a Bank of Georgia or TBC ATM, and carry small notes outside the cities." },
    { q: "Should I pay in lari or dollars in Georgia?", a: "Always lari. If a card terminal or ATM offers to charge you in US dollars or euros, decline. That dynamic currency conversion adds a few percent, and standalone machines can be worse. Choosing lari lets your own bank handle the exchange at a better rate. Use a Bank of Georgia or TBC machine rather than a standalone one." },
    { q: "Is Georgia safe to visit, and what about the Tbilisi protests?", a: "The country is at US State Department Level 1 (normal precautions), with a Do Not Travel warning only for the Russian-occupied regions of Abkhazia and South Ossetia. Since late 2024 there have been demonstrations most evenings on Rustaveli Avenue in central Tbilisi; they are rarely aimed at tourists, but police have at times used tear gas or water cannon, so avoid the crowds and expect some evening traffic there. Batumi, Kutaisi and the countryside are unaffected. Check the current advisory before you go." },
    { q: "How much cash should I bring for a week in Georgia?", a: "Not much, since the cities are card-first. For two travelers, very roughly 200 to 400 lari (about 75 to 150 dollars) in day-to-day cash across a week, beyond your card spending, covers markets, tips, minibuses and rural stops, pulled from a bank ATM once or twice. Carry small notes, and take out more before heading into the mountains, where machines are scarce." }
  ],

  culture: {
    heading: "A few Georgian words go a long way",
    intro: "Georgian is its own language with its own beautiful alphabet, so nobody expects you to read it, but a warm gamarjoba and a toast at the table will delight your hosts. Georgians are famous for hospitality, where a guest is treated as a gift, and for a feast, the supra, built around wine and heartfelt toasts.",
    phrases: [
      { mean: "Hello", say: "gah-mar-JOH-bah", word: "Gamarjoba", native: "\u10D2\u10D0\u10DB\u10D0\u10E0\u10EF\u10DD\u10D1\u10D0" },
      { mean: "Thank you", say: "gmad-LOBT", word: "Gmadlobt", native: "\u10D2\u10DB\u10D0\u10D3\u10DA\u10DD\u10D1\u10D7" },
      { mean: "Cheers (to victory)", say: "gau-mar-JOS", word: "Gaumarjos", native: "\u10D2\u10D0\u10E3\u10DB\u10D0\u10E0\u10EF\u10DD\u10E1" },
      { mean: "Please", say: "too shay-DZLEH-bah", word: "Tu sheidzleba", native: "\u10D7\u10E3 \u10E8\u10D4\u10D8\u10EB\u10DA\u10D4\u10D1\u10D0" },
      { mean: "It is delicious", say: "gem-ree-EH-lee-ah", word: "Gemrielia", native: "\u10D2\u10D4\u10DB\u10E0\u10D8\u10D4\u10DA\u10D8\u10D0" },
      { mean: "Goodbye", say: "nakh-VAM-dis", word: "Nakhvamdis", native: "\u10DC\u10D0\u10EE\u10D5\u10D0\u10DB\u10D3\u10D8\u10E1" }
    ],
    tip: "At a Georgian feast, the <b>supra</b>, a <b>tamada</b> (toastmaster) leads long, heartfelt toasts, and everyone drinks together to each one. Raise your glass and say <b>gaumarjos</b>, to victory, and pace yourself, because the wine and the toasts keep coming.",
    stories: [
      { img: "/georgia-culture-1.jpg",
        alt: "WPA-style vintage travel poster of Georgian qvevri winemaking, a winemaker tending large egg-shaped clay vessels buried in the earthen floor of a cellar, with grapevines and a vineyard through an arch behind",
        h: "The birthplace of wine",
        p: "Georgia is where winemaking began. For roughly 8,000 years Georgians have made wine in the qvevri, a large egg-shaped clay vessel buried in the ground, where the juice, skins and stems ferment together into deep amber and red wines. The method is UNESCO-listed, and Kakheti in the east is the heart of it. A glass of Georgian wine is a taste of the oldest wine tradition on Earth.",
        note: "Good to know: qvevri winemaking is around 8,000 years old" },
      { img: "/georgia-culture-2.jpg",
        alt: "WPA-style vintage travel poster of a Georgian supra feast, men in traditional black chokha coats raising curved drinking horns of wine in a toast at a candlelit table laden with food",
        h: "The supra and the toastmaster",
        p: "The Georgian feast, the supra, is a ritual of food, wine and words. A tamada, or toastmaster, leads a series of toasts to peace, family, ancestors and guests, and the table drinks together to each. You may hear polyphonic singing, three voices weaving in harmony, another Georgian art the world treasures. To be a guest at a supra is to be honored.",
        note: "Good to know: the toastmaster is called the tamada" },
      { img: "/georgia-culture-3.jpg",
        alt: "WPA-style vintage travel poster of the Gergeti Trinity Church on a green ridge beneath the snow-capped peak of Mount Kazbek in the Georgian Caucasus, with a wildflower meadow in the foreground",
        h: "Churches in the high Caucasus",
        p: "Georgia was one of the first countries in the world to adopt Christianity, around the fourth century, and its ancient stone churches sit in some of the most dramatic places imaginable. The Gergeti Trinity Church, alone on a ridge beneath Mount Kazbek, is the picture of it. In the northwest, the medieval stone towers of Svaneti guard villages under snow peaks.",
        note: "Good to know: Georgia adopted Christianity around 326 AD" }
    ],
    pride: "Georgia calls itself Sakartvelo, and it is proud of things that are wholly its own: the cradle of wine, a unique alphabet, polyphonic song, and a hospitality so deep that the word for guest carries the sense of a gift from God. It is a small country at the crossroads of Europe and Asia, and it wears its identity with warmth."
  },

  spokes: [
    {
      slug: "visa-and-insurance",
      live: true,
      topic: "visas",
      title: "Do US citizens need a visa for Georgia, and the new insurance rule (2026) | True Trip Costs",
      description: "US citizens need no visa for Georgia and can stay up to 365 days. But from 1 January 2026, Decree 602 requires all tourists to carry travel insurance (at least 30,000 GEL of cover) to enter. What qualifies, and how to be ready. Checked July 2026.",
      h1: "Do US citizens need a visa for Georgia?",
      lede: "Short answer: no visa, and you can stay a whole year. The catch for 2026 is new and easy to miss: you now have to carry travel insurance to get in. Here is what you need and how to prove it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-20",
      answer: "No visa. US citizens can enter Georgia <b>visa-free for up to 365 days</b> per entry, one of the most generous policies anywhere, for tourism, business or study. You need a <b>passport valid for your stay</b>. The new requirement is insurance: since <b>1 January 2026</b>, under <b>Decree 602</b>, every tourist must hold <b>travel insurance</b> for the whole stay with at least <b>30,000 GEL</b> (about 11,000 dollars) of medical and accident cover. <b>Most standard US travel insurance qualifies</b>, but carry proof in English.",
      official: {
        label: "US State Department: Georgia country information",
        url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Georgia.html",
        note: "The official US-side page for entry requirements and local conditions. The insurance rule is set by Georgia and published on the Georgian foreign ministry's geoconsul.gov.ge portal; confirm both before you travel."
      },
      expediter: false,
      sections: [
        {
          h: "The visa-free part is easy",
          p: [
            "US citizens are admitted <b>visa-free for up to 365 days</b> per entry, granted at the border, so a normal trip needs no visa and no application. Time in Georgia does not count toward the Schengen 90-day limit, since Georgia is not in the Schengen area.",
            "Have your <b>passport</b> ready, and be prepared to answer basic questions about your trip. Overstaying the 365 days brings a fine, and if you plan to live or work there long-term you would arrange residency separately."
          ]
        },
        {
          h: "The insurance rule, new for 2026",
          p: [
            "This is the part that trips people. From <b>1 January 2026</b>, Georgia requires every foreign tourist to hold <b>travel insurance</b> valid for the entire stay, covering <b>medical treatment and accidents</b> up to at least <b>30,000 GEL</b>, roughly 11,000 dollars. It applies regardless of nationality or how long you stay.",
            "The good news: <b>most standard US or international travel insurance policies already meet this</b>. Your policy should name <b>Georgia</b> in the covered region, meet the <b>30,000 GEL</b> minimum for medical and accident cover, and show <b>dates that match your trip</b>. Residents and diplomats are exempt."
          ]
        },
        {
          h: "How to be ready at the border",
          p: [
            "Buy a policy <b>before you fly</b> and save the certificate as a <b>PDF on your phone and a printout</b>, in <b>English</b> (Georgian is also accepted). Border officers, and sometimes airlines at check-in, can ask to see it.",
            "Going without risks a <b>fine of about 300 GEL</b> or, in principle, refused entry. Enforcement is <b>still settling in</b> and not every traveler is checked, but treat it as a firm requirement rather than a gamble."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for the country of Georgia?", a: "No. US citizens can enter visa-free and stay up to 365 days per entry, for tourism, business or study, with just a passport valid for the stay. There is no visa application or fee. Since 1 January 2026 you must also carry travel insurance to enter, which is the one new requirement to plan for." },
        { q: "Is travel insurance mandatory to enter Georgia?", a: "Yes, since 1 January 2026. Under Decree 602, every foreign tourist must hold travel insurance covering the whole stay, with at least 30,000 GEL (about 11,000 dollars) of medical and accident cover. Most standard US travel insurance meets this. Carry proof in English, since border officers can ask and going without risks a fine or refused entry." },
        { q: "Will my US travel insurance be accepted in Georgia?", a: "Usually yes. Most standard US or international travel insurance policies meet the Decree 602 rule. Check that your policy lists Georgia in the covered region, provides at least 30,000 GEL (about 11,000 dollars) for medical and accident expenses, and shows dates matching your trip. Keep the certificate as a PDF and a printout in English." },
        { q: "How long can Americans stay in Georgia without a visa?", a: "Up to 365 days per entry, which is among the most generous visa-free allowances in the world. It covers tourism, business and study, and time there does not count toward the Schengen 90-day limit. Overstaying brings a fine, and long-term living or working requires arranging residency separately." }
      ],
      sources: {
        links: [
          { label: "US State Department: Georgia country information and entry requirements", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Georgia.html", type: "gov" },
          { label: "Georgia Ministry of Foreign Affairs (geoconsul.gov.ge): the Decree 602 travel-insurance requirement", url: "https://geoconsul.gov.ge/", type: "gov" }
        ],
        judgment: "The visa-free allowance is long-standing, but the insurance rule is new for 2026 and its enforcement is still settling in, so confirm the current requirement and what your policy needs to show before you travel. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      live: true,
      topic: "cash",
      title: "Do I need cash in Georgia, or can I use cards? (2026) | True Trip Costs",
      description: "The country of Georgia is card-first in Tbilisi, Batumi and Kutaisi: tap almost everywhere. Keep some lari for markets, bakeries, tips and the shared marshrutka minibuses, and always choose lari over dollars at the terminal. Checked July 2026.",
      h1: "Do I need cash in Georgia, or can I use cards?",
      lede: "Short answer: cards cover most of a city trip, but a little lari is worth carrying, and one habit saves you money at every terminal. Here is how to pay.",
      checked: "Jul 2026",
      checkedISO: "2026-07-20",
      answer: "Cards, mostly. In <b>Tbilisi, Batumi and Kutaisi</b> you can <b>tap a Visa or Mastercard</b> almost everywhere, with contactless and Apple or Google Pay common. Keep <b>some lari</b> for <b>markets, bakeries, small vendors, tips and rural guesthouses</b>, and for the shared <b>marshrutka minibuses</b>, which are cash only. Pull lari from a <b>Bank of Georgia or TBC ATM</b>, and on any terminal or machine <b>choose lari, not dollars or euros</b>.",
      sections: [
        {
          h: "The cities are card-first",
          p: [
            "In Georgia's cities, <b>cards work almost everywhere</b>, from restaurants and cafes to shops and taxis, and contactless is the norm. <b>Bank of Georgia</b> and <b>TBC</b> are the big banks. A no-foreign-fee Visa or Mastercard covers most of a trip, with an Amex as a backup at best.",
            "The main exceptions are the <b>local everyday</b>: market stalls, bakeries, small family places, tips, and rural guesthouses that prefer cash."
          ]
        },
        {
          h: "Where you need lari",
          p: [
            "Carry small lari notes for the <b>shared marshrutka minibuses</b> that link towns and regions, since they take cash only, and for <b>markets</b> and <b>bakeries</b>. Change for large notes can be scarce outside the cities.",
            "Pull cash from a <b>bank ATM</b> (Bank of Georgia or TBC). Many are low-fee; some standalone machines charge more and push a poor dollar rate, so use a bank machine and take out enough before heading into the mountains."
          ]
        },
        {
          h: "The one money habit: choose lari",
          p: [
            "On any card terminal or ATM that asks whether to charge in <b>lari or your home currency, always choose lari</b>. Picking dollars or euros triggers dynamic currency conversion at a poor rate; lari lets your own bank convert, which is cheaper.",
            "For the fuller money picture, tipping and the new insurance rule, see the <a href=\"/georgia\">Georgia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Georgia?", a: "Not much in the cities, which are card-first, but some is worth carrying. Tbilisi, Batumi and Kutaisi take cards almost everywhere. Keep small lari notes for markets, bakeries, small vendors, tips, rural guesthouses and the shared marshrutka minibuses, which are cash only. Pull lari from a Bank of Georgia or TBC ATM." },
        { q: "Should I pay in lari or dollars in Georgia?", a: "Always lari. If a terminal or ATM offers to charge you in US dollars or euros, decline. That dynamic currency conversion adds a few percent, and standalone machines can be worse. Choosing lari lets your own bank do the exchange at a better rate. Use a bank ATM rather than a standalone one." },
        { q: "Can I use my card on Georgia's marshrutka minibuses?", a: "No. The shared marshrutka minibuses that link towns and regions take cash only, so keep small lari notes for them. City buses and the Tbilisi metro use a rechargeable card, but for marshrutkas and most rural transport, plan on cash." },
        { q: "Which ATM should I use in Georgia?", a: "A Bank of Georgia or TBC machine, which are everywhere in the cities and dispense lari. Many are low-fee, though some charge a small amount, and standalone machines can push a poor pay-in-dollars rate. Choose lari, decline any dollar conversion, and pull enough before heading into the mountains, where machines are scarce." }
      ],
      sources: {
        links: [
          { label: "National Bank of Georgia: the official lari exchange rate", url: "https://nbg.gov.ge/en/monetary-policy/currency", type: "currency" }
        ],
        judgment: "Card acceptance, ATM fees and the cash-only points are our read from recent traveler reports, not a single official table, so treat them as a planning guide. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Taxis and ride apps in Georgia: Bolt, Yandex and street cabs (2026) | True Trip Costs",
      description: "How to get around the country of Georgia: Bolt is the go-to ride app in Tbilisi and Batumi, cheap and fair-priced. With street taxis, agree the fare first, since older cabs have no meter. Marshrutkas are cash. Checked July 2026.",
      h1: "Taxis and ride apps in Georgia",
      lede: "Getting around Georgia's cities is cheap and easy once you have the right app. Here is what to install, how to handle a street taxi, and the way locals travel between towns.",
      checked: "Jul 2026",
      checkedISO: "2026-07-20",
      answer: "Use <b>Bolt</b>. It is the dominant ride app in Tbilisi, Batumi and other cities, shows the price and driver up front, and is cheap and fair. <b>Yandex Go</b> also works in places. With a <b>street taxi</b> (often an unmarked car with no meter), <b>agree the fare before you get in</b>, since drivers may quote high to visitors. Between towns, locals use shared <b>marshrutka minibuses</b>, which are cash only and very cheap.",
      official: {
        label: "Tbilisi public transport (Bolt is the main ride app)",
        url: "https://ttc.com.ge/en",
        note: "City buses and the Tbilisi metro use a rechargeable travel card; for door-to-door trips, Bolt is the simplest option. Confirm current fares locally."
      },
      sections: [
        {
          h: "Bolt first",
          p: [
            "<b>Bolt</b> is how most visitors and locals get around Tbilisi and Batumi: you see the fare and the driver before you book, it is inexpensive, and it removes any haggling. It is the easy, fair-priced way in from Tbilisi airport too.",
            "You can usually pay <b>in the app or in cash</b>. If paying cash, carry small lari notes, since drivers may not have change for large ones."
          ]
        },
        {
          h: "Street taxis, agree the fare",
          p: [
            "Plenty of <b>street taxis</b> are older cars with <b>no meter</b>, so a driver names a price. <b>Agree the fare before you get in</b>, and expect an opening quote to visitors that is higher than the going rate. If it feels off, book a Bolt instead.",
            "Fares are low by US standards, so this is about avoiding a small overcharge rather than a big risk. Having the Bolt price in mind gives you a fair benchmark to negotiate against."
          ]
        },
        {
          h: "Between towns: the marshrutka",
          p: [
            "For travel between towns and regions, the shared <b>marshrutka minibus</b> is how the country moves: frequent, very cheap, and <b>cash only</b>. They leave from set stations when full or on a rough schedule.",
            "For the money side, tipping and choosing lari over dollars, see the <a href=\"/georgia\">Georgia money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Bolt available in Georgia?", a: "Yes. Bolt is the main ride app in Tbilisi, Batumi and other Georgian cities, and it is the easiest way to get around, including from Tbilisi airport into the city. You see the fare and driver up front, it is cheap, and you can pay in the app or in cash. Yandex Go also works in some areas." },
        { q: "Do Georgian taxis have meters?", a: "Often not. Many street taxis are older cars without a meter, so the driver names a price, and quotes to visitors can be high. Agree the fare before you get in, or use Bolt, which sets the price in advance. Fares are low by US standards, so it is mainly about avoiding a small overcharge." },
        { q: "How do I get from Tbilisi airport to the city?", a: "The simplest option is Bolt, which is cheap and fair-priced and shows the fare before you book. There is also a city bus and a train into central Tbilisi for very little. If you take a street taxi, agree the fare first, since airport drivers may quote high." },
        { q: "How do Georgians travel between cities?", a: "Mostly by shared marshrutka minibuses, which are frequent, very cheap and cash only, leaving from set stations. There are also trains between major cities like Tbilisi and Batumi. For door-to-door city trips, Bolt is the go-to. Keep small lari notes for marshrutkas and cash fares." }
      ],
      sources: {
        links: [
          { label: "Tbilisi Transport Company: city buses and metro", url: "https://ttc.com.ge/en", type: "gov" }
        ],
        judgment: "App coverage and the street-taxi habits are our read from recent traveler reports, not an official transport table, so use your judgment and check current fares locally. Checked July 2026."
      }
    }
  ]
};
