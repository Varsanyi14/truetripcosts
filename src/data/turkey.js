export default {
  slug: "turkey",
  live: true,
  name: "Türkiye",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-10",
  emergency: { medical: "112", note: "112 now covers every emergency service, and calls to 911 are redirected to it.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "medium",
  region: "Middle East",
  signals: { cardFriendliness: 3, cashNeed: 3, taxRisk: 2 },
  hook: "Cards work in the cities, but bazaars, taxis and street food still want lira, and the lira moves fast.",
  aliases: ["turkey", "turkiye", "istanbul", "cappadocia", "antalya", "izmir", "ankara", "bodrum", "fethiye", "turkish lira", "try", "lira", "turkish"],

  title: "Money in Türkiye (2026): Cards, Cash, Lira and Tipping | True Trip Costs",
  description: "How to handle money in Türkiye (Turkey) as a US traveler in 2026: cards and tap work in cities but cash still rules the bazaars, why the lira moves fast with inflation, paying in lira not dollars, which ATMs to use, the accommodation tax, VAT that's already in the price, and how much to tip. Checked July 2026.",

  h1: "Money in Türkiye, sorted.",
  lede: "A calm, current plan for the money side of your trip: where cards work and where you still need cash, why the lira moves so fast, and the small tips (bahsis) that smooth the way.",
  hero: {
    img: "/turkey-hero.jpg",
    h: 1375,
    alt: "A colorful cobbled Balat street in Istanbul at dusk with pastel painted houses, red geraniums in window boxes, strings of glowing mosaic lanterns overhead, a street cat on the wet stones, the silhouette of a great mosque's domes and slender minarets at the end of the lane against a soft sky, a figure walking away, and a plate of grilled kebab skewers with meze, baklava and Turkish delight beside a tulip-shaped glass of amber Turkish tea on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Türkiye is easy for cards in the cities: hotels, restaurants, malls and supermarkets take Visa and Mastercard, and contactless, Apple Pay and Google Pay are common. The cash side is the <b>bazaars, street food, taxis, small cafes and tips</b>, where lira is king and cash often gets you a better price when you bargain. Bring a <b>no-foreign-fee Visa or Mastercard</b>, keep a stack of <b>lira</b> for markets and small vendors, and pull more from a <b>bank ATM</b> (Ziraat, Isbank, Garanti, Akbank, Yapi Kredi). The big thing to know is the <b>lira moves fast</b>: inflation has been high, so prices from an old blog or guidebook can be badly out of date, and the one rule that always saves money is to pay in <b>lira, not dollars</b>, on every card screen.",

  meter: {
    heading: "Cards in the cities, cash for the bazaar.",
    cashPct: 40,
    note: "A rough feel for everyday spending. In cities and tourist areas cards work widely and contactless is common. Cash is for the Grand Bazaar and street markets, street food, many taxis, small family cafes, mosque donations and tips. Cash also gives you leverage when you bargain, so keep a healthy stack of lira on you even though cards cover the bigger bills."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Great in cities, not the bazaar", p: "Visa and Mastercard are taken at hotels, restaurants, malls and supermarkets, and contactless, Apple Pay and Google Pay are common. Amex is patchier. Where cards fall short is the bazaars, street stalls, small cafes and many taxis, which are cash and often cheaper if you bargain with it.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Keep a real stack", p: "Lira is essential for markets, street food, small vendors, taxis and tips, and cash helps you haggle. Because of inflation, notes top out at 200 lira, which is not much, so you will carry a thick wad. ATM withdrawal limits can be low, so you may pull cash more than once.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Use a bank machine", p: "Bank ATMs (Ziraat, Isbank, Garanti, Akbank, Yapi Kredi) are everywhere. Read the on-screen fee, expect a modest per-withdrawal limit, and always decline \"convert to US dollars.\" Avoid standalone machines in heavy tourist spots, which push poor conversions and fees.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> with contactless, plus a backup card from a different bank.",
      "Get a <b>no-foreign-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "Türkiye is not in the EU, so EU roaming does not apply. An eSIM (Airalo, Nomad, Ubigi) is usually simplest, and it sidesteps the phone-registration rules that apply to longer stays."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, the rates are poor.",
      "Pull lira from a <b>bank ATM</b> (Ziraat, Isbank, Garanti, Akbank, Yapi Kredi) and <b>decline \"convert to US dollars.\"</b>",
      "Take a decent amount, but expect a per-withdrawal cap, so you may need a second visit for the bazaar."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card or phone</b> for hotels, restaurants, malls and supermarkets.",
      "<b>Cash for the bazaar</b>, street food, small cafes, many taxis and tips, and to bargain.",
      "Prices already <b>include VAT</b> (KDV), so the marked price is what you pay in shops.",
      "<b>Always choose lira</b>, never US dollars, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in lira, not dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "<b>Trust today's price, not an old one.</b> Inflation moves fast here, so a figure from an old guidebook, blog or even last year can be far off. Check a current converter and current menus."
    ], cta: null }
  ],

  cash: {
    rate: 48, cur: "TRY", round: 100, defaultIndex: 1,
    rateNote: "This is the fast-moving one. Turkish inflation has been high, so the lira keeps sliding: as a rough mid-2026 guide, about 48 lira to 1 US dollar, meaning 1000 lira is roughly $21. Treat any lira figure as a snapshot, and check a live converter right before and during your trip, because it can shift noticeably even over a few months.",
    styles: [
      { n: "Budget",    per: 35,  cash: 0.4 },
      { n: "Mid-range", per: 90,  cash: 0.3 },
      { n: "Comfort",   per: 200, cash: 0.25 }
    ]
  },

  connectivity: {
    works: "Good across the cities and tourist regions and along the coasts, with the usual thinning in remote mountains and the far east. The networks are Turkcell, Vodafone and Turk Telekom, all with wide 4G and growing 5G. Türkiye is not in the EU, so European roaming does not apply here. An eSIM (Airalo, Nomad, Ubigi) is the easy choice for a visit, and it also avoids the phone-registration rule that can block a foreign handset used with a local SIM beyond a few months. You do not need mobile data to pay for anything; cards and cash stand on their own."
  },

  // ACCOMMODATION TAX (verified to Jul 2026 knowledge; confirm rate).
  // Türkiye applies a national accommodation tax (konaklama vergisi) on the accommodation service,
  // added to hotel bills nationwide. The standard rate is 2%, but a Presidential Decision temporarily
  // cut it to 1% from 1 May through 31 December 2026, after which it returns to 2%. There is no
  // separate per-city tourist tax. VAT (KDV) on hotels is separate and generally shown within the
  // rate. This models the current 1% add-on.
  tax: {
    unit: "percentOfRoom",
    currency: "TRY",
    capNights: null,
    note: "Türkiye's national accommodation tax is temporarily reduced to 1% of the room price through 31 December 2026 (down from the standard 2%, which returns in 2027), added to your bill and the same everywhere rather than varying by city. This estimates the current 1% add-on. VAT (KDV) on accommodation is separate and usually shown within the room rate.",
    regions: [
      { key: "all", label: "All of Türkiye", pct: 1, note: "The national accommodation tax is temporarily 1% through 31 December 2026 (down from 2%), added to hotel bills across the country. Some room rates you book online already fold it in." }
    ]
  },

  currencyHeading: "The Turkish lira, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "Türkiye uses the lira (TRY). As a rough mid-2026 guide at about 48 lira to 1 US dollar, 100 lira is roughly $2, 500 lira about $10.50, and 1000 lira about $21. Because the rate moves quickly, treat these as a snapshot and check a live converter." },
    { sym: "smallnotes", k: "Notes and coins", v: "Lira notes run 5, 10, 20, 50, 100 and 200, and the 200 is the largest, so day to day you will carry a thick stack. There are 1 lira and small kurus coins, but years of inflation have left the coins nearly worthless, so you will rarely bother with them." },
    { sym: "usd", k: "The lira moves fast", v: "This is the one to watch. High inflation means prices and the exchange rate can change noticeably within a year, so a cost quoted in an old blog, guidebook or forum post may be well off. Trust a current converter and current menus rather than anything dated." },
    { sym: "tag", k: "Tax is already in the price", v: "Turkish VAT (KDV) is included in the marked price: 20% on most things, and a reduced 10% on food and hotel stays. The shop or menu price is what you pay, and at affiliated Tax Free shops non-residents can reclaim the VAT on larger purchases at the airport." }
  ],

  taxfree: {
    label: "Taxes, tips and refunds",
    heading: "Tax in the price, a small hotel tax, and modest tips.",
    text: "In Türkiye, <b>VAT (KDV) is already included</b> in the marked price: 20% on most goods and services, and a reduced 10% on food and hotel accommodation. Shops that display a <b>Tax Free</b> sign can issue a refund form so non-residents can reclaim the VAT on larger purchases when leaving the country, usually at the airport. Hotels add a small <b>national accommodation tax</b> to your bill, currently <b>1%</b> (temporarily reduced from 2% through the end of 2026), the same across the country. <b>Tipping (bahsis) is modest but expected</b>: at restaurants, around 5 to 10% for good service, though check first whether a <b>servis</b> (service) charge has already been added. Round up for taxis, leave a little for hotel staff and helpful guides, and small change is welcome at a hamam. Cash tips are preferred. There is no separate departure tax; airport charges are built into your ticket."
  },

  traps: [
    "<b>Trust today's price, not an old one.</b> Inflation moves fast, so a figure from an older guidebook, blog or forum can be badly out of date. Check a live converter and current menus, and do not anchor to numbers you read months ago.",
    "<b>Pay in lira, not dollars.</b> Terminals and ATMs offer to charge you in your home currency (dynamic currency conversion), which adds 3 to 8%. Some tourist shops also quote in euros or dollars; ask for the lira price and compare.",
    "<b>Cash rules the bazaar, and it bargains.</b> The Grand Bazaar, street stalls, small cafes and many taxis want lira, and paying cash gives you leverage when you haggle. Keep a real stack on you, since notes top out at 200 lira.",
    "<b>Mind the ATM limits and fees.</b> Use a bank machine (Ziraat, Isbank, Garanti, Akbank, Yapi Kredi), expect a modest per-withdrawal cap, decline the US-dollar conversion, and avoid standalone machines in tourist crush points."
  ],

  tippingHeading: "Modest but expected: about 5 to 10%.",
  tipping: "Tipping in Türkiye, called bahsis, is modest but part of the culture, so keep small notes handy. At a sit-down restaurant, around 5 to 10% for good service is normal, but first check the bill for a servis (service) charge, which some places add; if it is there, a little extra is enough. For a quick cafe or street food, rounding up is fine. Taxis get rounded up to a convenient figure. Leave a little for hotel housekeeping and porters, tip a helpful guide or driver, and small change is customary for a hamam attendant or a mosque-shoe minder. Cash tips are preferred, since a card tip rarely reaches the staff.",
  sources: {
    changed: "Re-checked July 2026. Turkiye's accommodation tax is set at 2% of the room price under the Expense Taxes Law, but a Presidential Decision temporarily reduced it to 1% from 1 May through 31 December 2026, after which it returns to 2%. We updated the guide to the current 1%. Standard VAT (KDV) is 20%, with a reduced 10% on accommodation.",
    links: [
      { label: "Turkiye accommodation tax guidance: the 2% rate (Konaklama Vergisi), temporarily reduced to 1% through 31 December 2026", url: "https://regfollower.com/turkey-revenue-administration-updates-guidance-on-accommodation-tax-rules/", type: "revenue" },
      { label: "VAT in Turkiye tax guide: the 20% standard KDV and the tourist VAT refund from 2,000 lira in a single store", url: "https://sadarethukuk.com/en/vat-turkey-foreigner/", type: "guide" },
    ],
    judgment: "This guide estimates the accommodation tax at the current temporary 1%, which applies through 31 December 2026; it returns to the standard 2% in 2027, so a stay from then on would carry a little more. The daily cash share, tipping norms and likely ATM behavior are our own estimate from experience, not an official figure.",
  },

  faqs: [
    { q: "Do I need cash in Türkiye?", a: "Yes, a fair amount. Cards work well in cities for hotels, restaurants, malls and supermarkets, but the Grand Bazaar, street food, small cafes, many taxis and tips all run on lira, and cash helps you bargain. Keep a healthy stack and top up at a bank ATM, expecting a modest per-withdrawal cap." },
    { q: "Should I pay in Turkish lira or US dollars?", a: "Lira. If a card terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion typically adds 3 to 8%. Some tourist shops quote in dollars or euros too, so ask for the lira price and compare before you pay." },
    { q: "Why does everything cost a different amount than my guidebook says?", a: "Inflation. The lira has been sliding quickly, so prices and the exchange rate can shift a lot within a year, and older guidebooks, blogs and forum posts are often well out of date. Check a live converter and current menus rather than trusting dated figures." },
    { q: "What is the best ATM to use in Türkiye?", a: "A major bank's machine, such as Ziraat, Isbank, Garanti, Akbank or Yapi Kredi. Read the fee, expect a modest per-withdrawal limit, and always decline the offer to convert to US dollars. Avoid the standalone machines clustered in tourist areas, which push poor conversions." },
    { q: "How much should I tip in Türkiye?", a: "Around 5 to 10% at restaurants for good service, but check first for a servis (service) charge on the bill. Round up for taxis, leave a little for hotel staff and guides, and keep small change for a hamam attendant. Cash tips are preferred, as card tips rarely reach the staff." },
    { q: "Does Türkiye charge a tourist tax?", a: "There is a national accommodation tax added to hotel bills, the same across the country rather than varying by city. It is temporarily 1% through 31 December 2026 (down from the standard 2%, which returns in 2027), and some room rates you book online already include it. There is no separate per-night city tourist tax." }
  ],

  culture: {
    heading: "A few words of Turkish go a long way",
    intro: "Turkish is written in the Latin alphabet, and a warm Merhaba and a story or two mark you as a guest rather than a tourist. Turks are famously hospitable to visitors.",
    phrases: [
      { mean: "Hello", say: "MER-ha-ba", word: "Merhaba" },
      { mean: "Please", say: "LOOT-fen", word: "Lütfen" },
      { mean: "Thank you", say: "teh-shek-kur-LEHR", word: "Teşekkürler" },
      { mean: "Cheers", say: "SHEH-reh-feh", word: "Şerefe" },
      { mean: "Yes", say: "eh-VET", word: "Evet" },
      { mean: "Delicious", say: "neh-FEES", word: "Nefis" },
    ],
    tip: "Hospitality is sacred in Turkey, and you will constantly be offered small tulip-shaped glasses of <b>çay</b>, black tea, as a gesture of welcome, so accept with a smile. In the <b>bazaar</b>, gentle haggling is part of the fun, often over yet another glass of tea. <b>Teşekkürler</b> means thank you.",
    stories: [
      { img: "/turkey-culture-1.jpg",
        alt: "WPA-style illustration of an enormous wooden horse on great wheels standing before the massive stone gates and walls of an ancient city at dawn, small robed figures gazing up at it",
        h: "The most famous trick in history",
        p: "On Turkey's western coast lie the ruins of Troy, the ancient city of Homer's tales. Legend says a long war ended when the attackers left a giant wooden horse at the gates as a false gift, hid soldiers inside, and slipped out once it was wheeled within the walls. A trojan horse has meant a hidden trap ever since.",
        note: "Good to know: ancient Troy stood on Turkey's Aegean coast" },
      { img: "/turkey-culture-2.jpg",
        alt: "WPA-style illustration of robed dervishes in tall camel-hair hats and wide white flaring skirts spinning slowly in a warm candlelit domed hall, one hand raised and one lowered",
        h: "A dance that becomes a prayer",
        p: "In central Turkey, the followers of the beloved medieval poet Rumi developed the sema, a meditative ceremony in which robed dervishes spin slowly for a very long time, one hand turned up to the heavens and one down to the earth. The turning is a form of devotion and of love. It is mesmerizing to watch.",
        note: "Say it: the whirling dervishes of Konya" },
      { img: "/turkey-culture-3.jpg",
        alt: "WPA-style illustration of colorful hot-air balloons drifting at dawn over the surreal fairy-chimney rock spires and cave dwellings of Cappadocia in soft golden light",
        h: "A landscape from a dream",
        p: "In the region of Cappadocia, wind and water have carved soft volcanic rock into a fairyland of cones, spires and hollows. For thousands of years people carved homes, churches and even whole underground cities right into the stone. Today hundreds of colorful balloons drift over it at sunrise.",
        note: "Good to know: people have lived in Cappadocia's caves for millennia" },
    ],
    pride: "Turks are warm, proud and endlessly hospitable, living at a crossroads of Europe and Asia layered with ancient cities, empires and faiths. They are proud of that history, of their food and their tea, and of a welcome that treats a guest almost as a gift. A little Turkish delights them."
  }
};
