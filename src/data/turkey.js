export default {
  slug: "turkey",
  iso2: "tr",
  live: true,
  name: "Turkey",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-10",
  emergency: { medical: "112", note: "112 now covers every emergency service, and calls to 911 are redirected to it.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "medium",
  region: "Middle East",
  signals: { cardFriendliness: 3, cashNeed: 3, taxRisk: 2 },
  hook: "Cards work in the cities, but bazaars, taxis and street food still want lira, and the lira moves fast.",
  aliases: ["turkey", "turkiye", "istanbul", "cappadocia", "antalya", "izmir", "ankara", "bodrum", "fethiye", "turkish lira", "try", "lira", "turkish"],

  title: "Money in Turkey (2026): Cards, Cash, Lira and Tipping | True Trip Costs",
  description: "How to handle money in Turkey as a US traveler in 2026: cards and tap work in cities but cash still rules the bazaars, why the lira moves fast with inflation, paying in lira not dollars, which ATMs to use, the accommodation tax, VAT that's already in the price, and how much to tip. Checked July 2026.",

  h1: "Money in Turkey, sorted.",
  lede: "A calm, current plan for the money side of your trip: where cards work and where you still need cash, why the lira moves so fast, and the small tips (bahsis) that smooth the way.",
  hero: {
    img: "/turkey-hero.jpg",
    h: 1375,
    alt: "A colorful cobbled Balat street in Istanbul at dusk with pastel painted houses, red geraniums in window boxes, strings of glowing mosaic lanterns overhead, a street cat on the wet stones, the silhouette of a great mosque's domes and slender minarets at the end of the lane against a soft sky, a figure walking away, and a plate of grilled kebab skewers with meze, baklava and Turkish delight beside a tulip-shaped glass of amber Turkish tea on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Turkey is easy for cards in the cities: hotels, restaurants, malls and supermarkets take Visa and Mastercard, and contactless, Apple Pay and Google Pay are common. The cash side is the <b>bazaars, street food, taxis, small cafes and tips</b>, where lira is king and cash often gets you a better price when you bargain. Bring a <b>no-foreign-fee Visa or Mastercard</b>, keep a stack of <b>lira</b> for markets and small vendors, and pull more from a <b>bank ATM</b> (Ziraat, Isbank, Garanti, Akbank, Yapi Kredi). The big thing to know is the <b>lira moves fast</b>: inflation has been high, so prices from an old blog or guidebook can be badly out of date, and the one rule that always saves money is to pay in <b>lira, not dollars</b>, on every card screen.",

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
      "Turkey is not in the EU, so EU roaming does not apply. An eSIM (Airalo, Nomad, Ubigi) is usually simplest, and it sidesteps the phone-registration rules that apply to longer stays."
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
      { n: "Budget", per: 35, cash: 0.4, room: 45 },
      { n: "Mid-range", per: 90, cash: 0.3, room: 100 },
      { n: "Comfort", per: 200, cash: 0.25, room: 220 }
    ]
  },

  connectivity: {
    works: "Good across the cities and tourist regions and along the coasts, with the usual thinning in remote mountains and the far east. The networks are Turkcell, Vodafone and Turk Telekom, all with wide 4G and growing 5G. Turkey is not in the EU, so European roaming does not apply here. An eSIM (Airalo, Nomad, Ubigi) is the easy choice for a visit, and it also avoids the phone-registration rule that can block a foreign handset used with a local SIM beyond a few months. You do not need mobile data to pay for anything; cards and cash stand on their own."
  },

  // ACCOMMODATION TAX (verified to Jul 2026 knowledge; confirm rate).
  // Turkey applies a national accommodation tax (konaklama vergisi) on the accommodation service,
  // added to hotel bills nationwide. The standard rate is 2%, but a Presidential Decision temporarily
  // cut it to 1% from 1 May through 31 December 2026, after which it returns to 2%. There is no
  // separate per-city tourist tax. VAT (KDV) on hotels is separate and generally shown within the
  // rate. This models the current 1% add-on.
  tax: {
    unit: "percentOfRoom",
    currency: "TRY",
    capNights: null,
    note: "Turkey's national accommodation tax is temporarily reduced to 1% of the room price through 31 December 2026 (down from the standard 2%, which returns in 2027), added to your bill and the same everywhere rather than varying by city. This estimates the current 1% add-on. VAT (KDV) on accommodation is separate and usually shown within the room rate.",
    regions: [
      { key: "all", label: "All of Turkey", pct: 1, note: "The national accommodation tax is temporarily 1% through 31 December 2026 (down from 2%), added to hotel bills across the country. Some room rates you book online already fold it in." }
    ]
  },

  currencyHeading: "The Turkish lira, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "Turkey uses the lira (TRY). As a rough mid-2026 guide at about 48 lira to 1 US dollar, 100 lira is roughly $2, 500 lira about $10.50, and 1000 lira about $21. Because the rate moves quickly, treat these as a snapshot and check a live converter." },
    { sym: "smallnotes", k: "Notes and coins", v: "Lira notes run 5, 10, 20, 50, 100 and 200, and the 200 is the largest, so day to day you will carry a thick stack. There are 1 lira and small kurus coins, but years of inflation have left the coins nearly worthless, so you will rarely bother with them." },
    { sym: "usd", k: "The lira moves fast", v: "This is the one to watch. High inflation means prices and the exchange rate can change noticeably within a year, so a cost quoted in an old blog, guidebook or forum post may be well off. Trust a current converter and current menus rather than anything dated." },
    { sym: "tag", k: "Tax is already in the price", v: "Turkish VAT (KDV) is included in the marked price: 20% on most things, and a reduced 10% on food and hotel stays. The shop or menu price is what you pay, and at affiliated Tax Free shops non-residents can reclaim the VAT on larger purchases at the airport." }
  ],

  taxfree: {
    label: "Taxes, tips and refunds",
    heading: "Tax in the price, a small hotel tax, and modest tips.",
    text: "In Turkey, <b>VAT (KDV) is already included</b> in the marked price: 20% on most goods and services, and a reduced 10% on food and hotel accommodation. Shops that display a <b>Tax Free</b> sign can issue a refund form so non-residents can reclaim the VAT on larger purchases when leaving the country, usually at the airport. Hotels add a small <b>national accommodation tax</b> to your bill, currently <b>1%</b> (temporarily reduced from 2% through the end of 2026), the same across the country. <b>Tipping (bahsis) is modest but expected</b>: at restaurants, around 5 to 10% for good service, though check first whether a <b>servis</b> (service) charge has already been added. Round up for taxis, leave a little for hotel staff and helpful guides, and small change is welcome at a hamam. Cash tips are preferred. There is no separate departure tax; airport charges are built into your ticket."
  },

  traps: [
    "<b>Trust today's price, not an old one.</b> Inflation moves fast, so a figure from an older guidebook, blog or forum can be badly out of date. Check a live converter and current menus, and do not anchor to numbers you read months ago.",
    "<b>Pay in lira, not dollars.</b> Terminals and ATMs offer to charge you in your home currency (dynamic currency conversion), which adds 3 to 8%. Some tourist shops also quote in euros or dollars; ask for the lira price and compare.",
    "<b>Cash rules the bazaar, and it bargains.</b> The Grand Bazaar, street stalls, small cafes and many taxis want lira, and paying cash gives you leverage when you haggle. Keep a real stack on you, since notes top out at 200 lira.",
    "<b>Mind the ATM limits and fees.</b> Use a bank machine (Ziraat, Isbank, Garanti, Akbank, Yapi Kredi), expect a modest per-withdrawal cap, decline the US-dollar conversion, and avoid standalone machines in tourist crush points."
  ],

  tippingHeading: "Modest but expected: about 5 to 10%.",
  tipping: "Tipping in Turkey, called bahsis, is modest but part of the culture, so keep small notes handy. At a sit-down restaurant, around 5 to 10% for good service is normal, but first check the bill for a servis (service) charge, which some places add; if it is there, a little extra is enough. For a quick cafe or street food, rounding up is fine. Taxis get rounded up to a convenient figure. Leave a little for hotel housekeeping and porters, tip a helpful guide or driver, and small change is customary for a hamam attendant or a mosque-shoe minder. Cash tips are preferred, since a card tip rarely reaches the staff.",
  sources: {
    changed: "Re-checked July 2026. Turkey's accommodation tax is set at 2% of the room price under the Expense Taxes Law, but a Presidential Decision temporarily reduced it to 1% from 1 May through 31 December 2026, after which it returns to 2%. We updated the guide to the current 1%. Standard VAT (KDV) is 20%, with a reduced 10% on accommodation.",
    links: [
      { label: "Turkey accommodation tax guidance: the 2% rate (Konaklama Vergisi), temporarily reduced to 1% through 31 December 2026", url: "https://regfollower.com/turkey-revenue-administration-updates-guidance-on-accommodation-tax-rules/", type: "revenue" },
      { label: "VAT in Turkey tax guide: the 20% standard KDV and the tourist VAT refund from 2,000 lira in a single store", url: "https://sadarethukuk.com/en/vat-turkey-foreigner/", type: "guide" },
    ],
    judgment: "This guide estimates the accommodation tax at the current temporary 1%, which applies through 31 December 2026; it returns to the standard 2% in 2027, so a stay from then on would carry a little more. The daily cash share, tipping norms and likely ATM behavior are our own estimate from experience, not an official figure.",
  },

  faqs: [
    { q: "Do I need cash in Turkey?", a: "Yes, a fair amount. Cards work well in cities for hotels, restaurants, malls and supermarkets, but the Grand Bazaar, street food, small cafes, many taxis and tips all run on lira, and cash helps you bargain. Keep a healthy stack and top up at a bank ATM, expecting a modest per-withdrawal cap." },
    { q: "Should I pay in Turkish lira or US dollars?", a: "Lira. If a card terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion typically adds 3 to 8%. Some tourist shops quote in dollars or euros too, so ask for the lira price and compare before you pay." },
    { q: "Why does everything cost a different amount than my guidebook says?", a: "Inflation. The lira has been sliding quickly, so prices and the exchange rate can shift a lot within a year, and older guidebooks, blogs and forum posts are often well out of date. Check a live converter and current menus rather than trusting dated figures." },
    { q: "What is the best ATM to use in Turkey?", a: "A major bank's machine, such as Ziraat, Isbank, Garanti, Akbank or Yapi Kredi. Read the fee, expect a modest per-withdrawal limit, and always decline the offer to convert to US dollars. Avoid the standalone machines clustered in tourist areas, which push poor conversions." },
    { q: "How much should I tip in Turkey?", a: "Around 5 to 10% at restaurants for good service, but check first for a servis (service) charge on the bill. Round up for taxis, leave a little for hotel staff and guides, and keep small change for a hamam attendant. Cash tips are preferred, as card tips rarely reach the staff." },
    { q: "Does Turkey charge a tourist tax?", a: "There is a national accommodation tax added to hotel bills, the same across the country rather than varying by city. It is temporarily 1% through 31 December 2026 (down from the standard 2%, which returns in 2027), and some room rates you book online already include it. There is no separate per-night city tourist tax." }
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
  },

  spokes: [
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Turkish lira (TRY)" },
        { k: "Cards", v: "Widely accepted in cities" },
        { k: "Cash for", v: "Bazaars, small vendors, taxis" },
        { k: "Note", v: "Prices move fast (inflation)" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in Turkey, or can I use cards? (2026) | True Trip Costs",
      description: "Both. Turkey is card-friendly in cities, but carry lira cash for bazaars, small vendors and taxis. Prices move fast with inflation. Choose lira, not dollars or euros. Checked July 2026.",
      h1: "Do I need cash in Turkey, or can I use cards?",
      lede: "Short answer: a card for cities and larger purchases, lira cash for bazaars, small vendors and taxis. And with high inflation, prices move fast. Here is how to handle it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Both. Turkey is <b>card-friendly in cities</b>, where <b>contactless</b> is common in shops, restaurants and hotels. But <b>carry lira cash</b> for <b>bazaars, small vendors, street food and taxis</b>, and for haggling in markets. The currency is the <b>Turkish lira</b>, and with <b>high inflation, prices move fast</b>, so treat older price info with caution. Choose <b>lira, not dollars or euros</b>, on any card or ATM. Do not rely on paying in dollars: pay in lira.",
      sections: [
        {
          h: "Cards in cities, cash for bazaars",
          icon: "cash",
          key: { fig: "Carry lira", tag: "Bazaars and taxis are cash", text: "Cards are widely accepted in cities, but carry lira cash for bazaars, small vendors, street food and taxis.", tone: "teal" },
          p: [
            "Turkey is <b>card-friendly in cities and tourist areas</b>: <b>contactless</b>, Apple Pay and Google Pay work in <b>shops, restaurants, malls and hotels</b>, and <b>Visa and Mastercard</b> are widely accepted.",
            "But <b>carry lira cash</b> for the <b>bazaars, small vendors, street food, and taxis</b>, and for <b>haggling</b> in markets, where cash is expected and gives you room to negotiate. A card for the big stuff, cash for the rest."
          ]
        },
        {
          h: "Choose lira, not dollars or euros",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose lira", text: "When a terminal or ATM offers dollars, euros or lira, pick lira. Foreign currency triggers dynamic currency conversion at a rate about 3 to 8% worse.", tone: "amber" },
          p: [
            "When a card terminal or ATM asks whether to charge in <b>dollars, euros or lira, always choose lira</b>. Foreign currency triggers dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. Decline it every time.",
            "For cash, use an ATM attached to a <b>major bank</b>, which are common in cities. Some ATMs charge a fee for foreign cards, so take out a sensible amount. Use a <b>debit card</b> to avoid cash-advance fees."
          ]
        },
        {
          h: "Inflation, and how much cash",
          icon: "coins",
          key: { fig: "Prices move", tag: "High inflation", text: "Turkey has high inflation, so prices change fast and older figures may be stale. Draw cash in modest amounts as you go.", tone: "teal" },
          p: [
            "One thing to know: Turkey has had <b>high inflation</b>, so <b>prices change quickly</b> and older price guides can be out of date. Draw <b>lira in modest amounts as you go</b> rather than one large sum, and check current prices rather than relying on old figures.",
            "For tipping norms, see <a href='/turkey/tipping'>tipping in Turkey</a>, and for the wider picture, the <a href='/turkey'>Turkey money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Turkey?", a: "Yes, alongside a card. Cards are widely accepted in cities, but carry lira cash for bazaars, small vendors, street food, taxis and haggling in markets." },
        { q: "Should I pay in lira or dollars in Turkey?", a: "Always lira. If a card machine or ATM offers dollars or euros, decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better. Pay in lira." },
        { q: "Is Turkey cash or card?", a: "Both. Cities and tourist areas are card-friendly with contactless common, but bazaars, small vendors and taxis run on cash. Carry lira for those, and use cards for larger purchases." },
        { q: "Does inflation affect prices in Turkey?", a: "Yes. Turkey has had high inflation, so prices change quickly and older figures may be stale. Draw lira in modest amounts as you go and check current prices rather than relying on old guides." }
      ],
      sources: {
        links: [
          { label: "Central Bank of the Republic of Turkiye: official exchange rates", url: "https://www.tcmb.gov.tr/wps/wcm/connect/en/tcmb+en", type: "gov" },
          { label: "US State Department: Turkey country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Turkey.html", type: "gov" }
        ],
        judgment: "Turkey is card-friendly in cities but bazaars and small vendors run on cash, and high inflation means prices move fast. The lira rate moves, and the firm rule is to decline foreign-currency conversion. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Modest, about 5 to 10%" },
        { k: "Restaurants", v: "Round up, or 5 to 10%" },
        { k: "Check the bill", v: "Some add service" },
        { k: "How", v: "Cash, in lira" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in Turkey: modest, and what you actually owe (2026) | True Trip Costs",
      description: "How tipping works in Turkey for US travelers in 2026: why it is modest at 5 to 10%, the service charge to check for, and small tips for a hamam, guides and taxis. Checked July 2026.",
      h1: "Tipping in Turkey",
      lede: "Turkey has a modest tipping culture: about 5 to 10% at restaurants, plus small tips for a hamam attendant, guides and hotel staff. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Turkey has a <b>modest tipping culture</b>. At a <b>restaurant</b>, <b>rounding up</b> or leaving <b>5 to 10%</b> for good service is normal; some tourist places add a <b>service charge</b>, so check the bill. Small tips are customary for <b>hotel staff, a hamam (bath) attendant and guides</b>. For <b>taxis</b>, round up the meter (and insist it is running). Leave tips in <b>cash</b>, in lira, which reaches the staff directly.",
      sections: [
        {
          h: "Modest: 5 to 10% at restaurants",
          icon: "coins",
          key: { fig: "5-10%", tag: "For good service", text: "Rounding up or leaving 5 to 10% for good service is normal at a restaurant. It is modest, not a US-style percentage.", tone: "teal" },
          p: [
            "Turkey tips <b>modestly</b>. At a <b>sit-down restaurant</b>, <b>rounding up</b> or leaving <b>5 to 10%</b> for good service is the norm, well below US levels. At a <b>cafe or for drinks</b>, leaving the small change is plenty.",
            "It is a courtesy, and staff earn a wage, so there is no set percentage to track."
          ]
        },
        {
          h: "Check the bill for a service charge",
          icon: "receipt",
          key: { fig: "Check first", tag: "Tourist-area spots", text: "Some tourist-area restaurants add a service charge. If it is on the bill, you do not need to tip on top.", tone: "teal" },
          p: [
            "Most places do <b>not</b> add a service charge, but some <b>tourist-area restaurants</b> do. If a <b>service charge appears</b> on the bill, you <b>do not need to tip on top</b>, so read the bill first.",
            "A small extra for excellent service is still a kind gesture."
          ]
        },
        {
          h: "Hamam, guides, taxis, paying",
          icon: "cash",
          key: { fig: "Lira", tag: "Small tips, in cash", text: "Small tips are customary for hotel staff, a hamam attendant and guides. Round up taxis; leave tips in lira.", tone: "teal" },
          p: [
            "Small tips are customary for <b>hotel staff, a hamam (Turkish bath) attendant, and tour guides</b>. For <b>taxis</b>, <b>round up</b> the meter, and make sure the meter is running before you set off. Leave tips in <b>cash, in lira</b>. For the wider picture, see the <a href='/turkey'>Turkey money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Turkey?", a: "Modestly. At a restaurant, rounding up or leaving 5 to 10% for good service is normal. Small tips are customary for hotel staff, a hamam attendant and guides. It is well below US levels." },
        { q: "Is a service charge added in Turkey?", a: "Usually not, but some tourist-area restaurants add one. If a service charge is on the bill, you do not need to tip on top, so read the bill first." },
        { q: "How much do you tip at a Turkish restaurant?", a: "About 5 to 10% for good service, or round up. At a cafe or for drinks, the small change is plenty. It is a courtesy, not an obligation." },
        { q: "Do you tip taxi drivers in Turkey?", a: "Rounding up the metered fare is normal. Make sure the meter is running before you set off, and leave the tip in cash, in lira." }
      ],
      sources: {
        links: [
          { label: "US State Department: Turkey country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Turkey.html", type: "gov" }
        ],
        judgment: "Turkish tipping is modest, and the tourist-area service charge is real but not universal. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Apps", v: "BiTaksi (also Uber)" },
        { k: "Istanbul Uber", v: "Calls a licensed yellow taxi, metered" },
        { k: "The meter (taksimetre)", v: "Must be on from the start" },
        { k: "Airport", v: "No fixed price, the meter decides" }
      ],
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Which taxi app to use in Istanbul, and the airport done right (2026) | True Trip Costs",
      description: "How the Istanbul taxi meter works, why Uber here just calls a licensed yellow taxi, the flat-rate and fake-night-surcharge tricks to know, and the cheap way in from Istanbul Airport. Checked July 2026.",
      h1: "Istanbul taxis, the meter, and the airport done right",
      lede: "Istanbul taxis are metered and mostly fine, but a handful of tricks target visitors, and the airport is a long way out. Here is which app to install, how the meter really works, and the calm way to get into town.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Install <b>BiTaksi</b>, and <b>Uber</b> too. In Istanbul, Uber does not run its own cars, it simply calls a licensed <b>yellow taxi</b>, so the meter still runs, but you get a fare estimate, a tracked route and a receipt. The meter (<b>taksimetre</b>) must be on from the start, and if a driver refuses it or says it is broken and quotes a flat price, get out and wave the next one over. There is a single 24-hour rate, so any <b>night surcharge</b> is a con. Bosphorus tolls are real and added to the meter, but watch for padding. From <b>Istanbul Airport</b>, the M11 metro or the HAVAIST shuttle beats a taxi.",
      sections: [
        {
          h: "Which app to install",
          icon: "phoneok",
          key: { fig: "BiTaksi", tag: "In English, takes card", text: "BiTaksi is the most popular ride app in Istanbul, Turkish-made, fully in English and takes card. Uber works too, but in Istanbul it simply calls a licensed yellow taxi, so the meter still runs.", tone: "teal" },
          p: [
            "<b>BiTaksi</b> is the most popular ride app in Istanbul, Turkish-made, fully in English, and it takes card as well as cash. <b>Uber</b> works too, but understand what it is here: it does not have its own private cars, it dispatches the same licensed <b>yellow or turquoise taxis</b>, and the meter still runs, so the price is not locked the way it is in most countries. Think of the apps as a way to get a fare estimate, track the route and keep a receipt, not as a fixed-price hack. The city's own <b>iTaksi</b> app does the same with a strict metered rate and no surge.",
            "All three call the same licensed taxis, so the real benefit is accountability: no language barrier when you type the destination, a driver and plate on record, and a log if anything goes wrong. Install <b>BiTaksi</b> and <b>Uber</b> before you arrive and you will use them often. Bolt exists but has thin driver coverage in Istanbul, so it is not the one to rely on."
          ]
        },
        {
          h: "The meter, the flat-rate trick, and the fake night surcharge",
          icon: "alert",
          key: { tag: "Meter on before you move", text: "The meter (taksimetre) must be running before the car moves. The classic trick is a driver who refuses it or claims it is broken and names a flat price well above the meter. Insist on it or book BiTaksi.", tone: "amber" },
          p: [
            "The meter must be running before the car moves. The classic trick is a driver who refuses it, or claims it is broken, and names a flat price that runs well over the metered fare, especially from tourist spots like Sultanahmet. The answer is simple and needs no argument: get out and take the next taxi, because there is always another one. Keep <b>Google Maps</b> open and watch the route, since the long way round is the most common way a fare gets padded.",
            "One thing worth knowing saves money at night: Turkey uses a <b>single 24-hour rate</b>, so the meter reads the same at 3am as at midday. A driver who claims a night surcharge, a <b>gece tarifesi</b>, is overcharging you. The rate and the minimum fare are set by the city, and they have been rising with inflation, so treat any figure you read online as a rough, recent guide rather than a fixed number."
          ]
        },
        {
          h: "Tolls, the note-swap, and paying",
          icon: "cash",
          key: { fig: "Count it", tag: "The note-swap", text: "Crossing between the European and Asian sides, the passenger pays the bridge or tunnel toll. Watch the note-swap too, where a driver claims your 200 lira note was a 20, so count what you hand over.", tone: "teal" },
          p: [
            "If your trip crosses between the European and Asian sides over a <b>Bosphorus bridge</b> or through the <b>Eurasia Tunnel</b>, the passenger pays the toll and the driver adds it to the meter fare. That is legitimate and correct. What is not is an inflated toll, or a surprise <b>credit card charge</b>, tacked on so the total suddenly jumps, so if the final number is far above the meter plus a normal toll, question it.",
            "The other move to watch is the <b>note-swap</b>, where a driver takes your larger note, palms it, shows you a smaller one and asks for more. Paying by app or card avoids it entirely, and if you do pay cash, say the amount out loud as you hand it over. For the wider money picture, including how much cash to carry and where cards work, see the <a href=\"/turkey\">Turkey money guide</a>."
          ]
        },
        {
          h: "Getting in from Istanbul Airport",
          icon: "plane",
          key: { fig: "The bus", tag: "No fixed fare", text: "Istanbul Airport is a long way out with no fixed taxi price, so the meter decides and traffic is the wildcard. The cheapest reliable option is usually the HAVAIST airport bus into the center.", tone: "teal" },
          p: [
            "Istanbul Airport (IST) is a long way from the center, and there is no fixed taxi price, so the meter decides and traffic is the wildcard. The cheapest, most reliable way in is the <b>M11 metro</b> to Gayrettepe, where you transfer to the M2 metro or the tram, sidestepping the traffic entirely. The <b>HAVAIST</b> shuttle bus is the comfortable option, running to major hubs with room for luggage.",
            "If you do take a taxi, use the <b>official rank</b> and, ideally, order through BiTaksi or Uber so the driver comes to the marked spot and the ride is logged. Ignore anyone who approaches you inside arrivals offering a ride. On the Asian side, from Sabiha Gokcen airport (SAW), the M4 metro to Kadikoy is the easy equivalent."
          ]
        }
      ],
      faqs: [
        { q: "Does Uber work in Istanbul?", a: "Yes, but not the way it does elsewhere. In Istanbul, Uber does not run its own cars; it dispatches licensed yellow or turquoise taxis, and the meter still runs, so the fare is not locked. It is still worth having for the route tracking, the receipt and no language barrier. BiTaksi is the main local app and iTaksi is the city's own; all three call the same licensed taxis." },
        { q: "Do Istanbul taxis have a night rate?", a: "No. Turkey uses a single 24-hour meter rate, so it reads the same at 3am as at noon. A driver claiming a night surcharge, a gece tarifesi, is overcharging you. The one legitimate extra is a Bosphorus bridge or Eurasia Tunnel toll, which the passenger pays and the driver adds to the meter." },
        { q: "What is the best way from Istanbul Airport to the city?", a: "There is no fixed taxi price, and the meter plus traffic can balloon the cost. The M11 metro to Gayrettepe, then the M2 metro or tram, is cheapest and dodges the traffic, while the HAVAIST shuttle is comfortable with luggage space. For a taxi, use the official rank and an app like BiTaksi or Uber, and ignore anyone offering a ride inside arrivals." },
        { q: "Are Istanbul taxis a scam?", a: "Most are fine, but the well-worn tricks are meter refusal or a 'broken' meter with a flat price, the long way round, a fake night surcharge and the note-swap. Using BiTaksi, Uber or iTaksi makes most of them impossible, since you get a fare estimate, a tracked route and a logged payment. If a street driver will not run the meter, take the next taxi." }
      ],
      sources: {
        links: [
          { label: "US Department of State: Turkey country information, general safety and local-travel context for US visitors", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Turkey.html", type: "gov" },
          { label: "Istanbul Tourist Information: a 2026 guide to the taxi apps, the metered fare and common scams", url: "https://istanbul-tourist-information.com/taxis-in-istanbul/", type: "guide" },
          { label: "Hemen Hesap: a 2026 breakdown of Istanbul taxi fares, the city meter tariff and airport pricing", url: "https://www.hemenhesap.com/en/istanbul-taxi-fare", type: "guide" }
        ],
        judgment: "Istanbul fares move fast with inflation, so treat any lira figures as a recent read and check the estimate in your app. The metered rate is set by the city, and app coverage and airport transport can change. Checked July 2026."
      }
    },
    {
      slug: "money-scams",
      glance: [
        { k: "Where", v: "Sultanahmet, Taksim, Grand Bazaar" },
        { k: "Taxis", v: "Meter off, note swap" },
        { k: "Restaurants", v: "Unordered extras on the bill" },
        { k: "The setup", v: "A dropped shoeshine brush" }
      ],
      live: true,
      topic: "scams",
      title: "Common money scams in Turkey, and what they cost you (2026) | True Trip Costs",
      description: "Istanbul's tourist money traps are avoidable: taxi meter tricks and note-swapping, the dropped-shoeshine-brush setup, the invitation-to-a-bar bill shock, unordered restaurant extras, and Grand Bazaar overcharging. Here is each one and how to sidestep it. Checked Jul 2026.",
      h1: "Common money scams in Turkey, and what they cost you",
      lede: "Turkey is safe and welcoming for the great majority of visitors, and the tricks that target tourists, mostly in Istanbul's busy quarters, are about money rather than danger. Each one relies on your politeness or confusion, and each is easy to sidestep once you know it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "The recurring money traps, mostly around <b>Sultanahmet, Taksim and the Grand Bazaar</b>: <b>taxi tricks</b> (meter off, long routes, no change, and the <b>note swap</b> where a driver claims your 200 lira was a 20), the <b>dropped shoeshine brush</b> you helpfully return and are then charged to have your shoes shined, the <b>invitation to a bar</b> that ends in a <b>huge bill</b>, <b>unordered extras</b> that appear on a restaurant bill, and <b>Grand Bazaar overcharging</b>. The habits that beat them: use <b>BiTaksi or Uber</b> or insist on the meter, <b>pay by card or state the note out loud</b>, <b>decline unsolicited approaches</b>, and <b>check every menu and bill</b>.",
      sections: [
        {
          h: "Taxis: the meter, the long route, the note swap",
          icon: "taxi",
          key: { tag: "Meter off, note swap", text: "Taxis are the most common way tourists lose money here. Drivers may turn the meter off or claim it is broken, take a long route, have no change, or run the note swap. Use BiTaksi and count your change.", tone: "amber" },
          p: [
            "Taxis are the most common way tourists lose money in Turkey. Drivers may <b>turn the meter off</b> or claim it is broken, take a <b>long route</b>, have <b>no change</b>, or run the <b>note swap</b>: you pay with a <b>200 lira</b> note, the driver quickly swaps it for a similar-looking <b>20</b> and says you underpaid. The clean fixes: use <b>BiTaksi or Uber</b> (which dispatch licensed taxis in Istanbul at the metered rate), and where you pay a street cab in cash, <b>state the note out loud</b>, here is <b>200 lira</b>, and <b>pay by card</b> when you can, which removes change and swap tricks entirely.",
            "At <b>Istanbul airport (IST) and Sabiha Gokcen (SAW)</b>, some drivers set the meter to the higher <b>night rate</b> in daytime or take the long coastal road instead of the highway, turning a legitimate <b>250 to 350 lira</b> fare into <b>450 to 600</b>. Avoid drivers who approach you before the <b>official rank</b>, and consider the <b>metro or an airport shuttle</b>, which are far cheaper into the city."
          ]
        },
        {
          h: "The shoeshine brush and the drink invitation",
          icon: "cocktail",
          key: { tag: "The drink-invitation bill", text: "Two politeness traps: a shoeshiner drops a brush ahead of you then charges after you hand it back, and, costlier, a friendly man invites you for a drink that ends in a huge bar bill. Decline both politely.", tone: "amber" },
          p: [
            "The classic Istanbul street setup is the <b>dropped shoeshine brush</b>: a shoeshiner walking ahead of you drops a brush, you kindly pick it up and hand it back, and he insists on shining your shoes as a <b>thank you</b>, then presents a <b>hefty bill</b>. If someone drops something and then offers you a free service, <b>decline and keep walking</b>.",
            "The costlier one, which tends to target <b>solo male travelers</b> around Taksim, is the <b>friendly invitation</b>: a personable stranger strikes up a conversation and suggests a drink at a bar he knows, where the <b>menu prices are astronomical</b> and staff make sure you pay a bill that can run into the <b>hundreds</b>. Be politely wary of an over-eager new acquaintance leading you to a specific venue; <b>choose your own bar</b>, and if a bill is wildly wrong, you can call the police on <b>155</b> rather than pay quietly."
          ]
        },
        {
          h: "Restaurants and the Grand Bazaar",
          icon: "receipt",
          key: { fig: "Ask prices", tag: "Unordered extras", text: "In tourist-area restaurants, watch for unordered extras, bread, water or meze that arrive unasked and look free, then appear on the bill. Ask the price of anything you did not order.", tone: "teal" },
          p: [
            "In tourist-area restaurants, watch for <b>unordered extras</b>, bread, water, meze or a salad that arrive unasked and look complimentary, then appear on the <b>bill</b>, and for <b>menus with no prices</b> or inflated tourist pricing (the fish-by-weight bill is a common one). <b>Check the menu and prices before ordering</b>, wave away anything you did not ask for, and <b>read the itemized bill</b>.",
            "The <b>Grand Bazaar</b> is a genuine and safe experience, but the risk is financial: <b>opening prices are hugely inflated</b> for tourists, the sales pressure is persistent, and short-changing is occasionally reported. Treat it as browsing, <b>start at roughly a quarter to a third</b> of the first price, <b>compare a few shops</b>, and remember that <b>accepting tea is a sales tactic, not an obligation</b> to buy."
          ]
        },
        {
          h: "Fake officers, and the pay-in-lira trap",
          icon: "passport",
          key: { fig: "Real ID", tag: "Officers do not ask for cash", text: "Rarely, someone poses as a plainclothes officer and asks to inspect your passport and wallet to lift cash or card details. Real officers do not, so decline and step into a shop or crowd.", tone: "teal" },
          p: [
            "Rarely, someone may pose as a <b>plainclothes police officer</b> and ask to <b>inspect your passport and wallet</b>, aiming to lift cash or card details. Real officers <b>do not need to inspect your money</b>: keep your wallet, decline to hand it over, and ask to verify identity or walk to a tourist-police point.",
            "At the <b>ATM and card machine</b>, choose to be charged in <b>lira, not dollars or euros</b>: the convert-for-you option uses a poor built-in rate that costs several percent. Use <b>bank ATMs</b>, and be aware that with <b>high inflation</b> the lira figures here move quickly, so check your app's estimate for a current sense of a fare or price."
          ]
        },
        {
          h: "What this means for your money",
          icon: "coins",
          key: { fig: "Habits", tag: "How to avoid it", text: "Almost all of it relies on politeness or confusion and costs from a few lira to a nasty bar bill. The same habits defuse it: use BiTaksi, agree prices first, count change, and decline unasked extras and invitations.", tone: "teal" },
          p: [
            "Almost all of it relies on <b>politeness or confusion</b> and costs from a few lira to, at worst, a nasty bar bill, and the same habits defuse nearly everything: <b>BiTaksi or Uber or the meter</b>, <b>pay by card or state the note out loud</b>, <b>decline unsolicited approaches</b>, <b>check menus and bills</b>, and <b>choose your own bar</b>. The two worth active care are the <b>bar-bill invitation</b> and any <b>fake officer</b>, both of which you avoid by not following a stranger and not handing over your wallet.",
            "Known in advance, none of this should shape a trip to one of the world's great cities. For getting around, see the <a href=\"/turkey/taxis-and-apps\">Turkey taxis and apps guide</a>, and for the wider picture the <a href=\"/turkey\">Turkey cost guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Istanbul safe for tourists?", a: "For the great majority of visitors, yes. Violent crime against tourists is rare, and the main risks are petty: pickpocketing and the money scams in this guide, concentrated in busy areas like Sultanahmet, Taksim and the Grand Bazaar. Using BiTaksi or Uber, checking bills, and declining unsolicited approaches avoids nearly all of them." },
        { q: "What is the most common scam in Istanbul?", a: "Taxi tricks and the dropped shoeshine brush. Taxi drivers may turn off the meter, take a long route, claim no change, or swap your large note for a smaller one; the shoeshiner drops a brush, you return it, and he charges you for a shine. Use BiTaksi or Uber, pay by card or state your note out loud, and decline the shoeshine and keep walking." },
        { q: "How does the taxi note-swap scam work in Turkey?", a: "You pay a cash fare with a 200 lira note, the driver quickly swaps it for a similar-looking 20 and insists you only gave 20, then demands the rest. Beat it by stating the denomination out loud as you hand it over, here is 200 lira, paying with exact change, or simply paying by card, which most Istanbul taxis now accept and which removes the trick entirely." },
        { q: "Someone invited me for a drink and the bill was huge, is that a scam?", a: "Yes, it is a well-known Istanbul trap that targets solo male travelers especially: a friendly stranger leads you to a specific bar with astronomical prices and staff who ensure you pay, sometimes hundreds of dollars. Be wary of an over-eager new acquaintance steering you to a particular venue, choose your own bar, and if a bill is wildly wrong you can call the police on 155 rather than pay quietly." },
        { q: "How much should I haggle in the Grand Bazaar?", a: "A lot. Opening prices are hugely inflated for tourists, so start at roughly a quarter to a third of the first number, compare several shops, and be ready to walk away. Accepting tea is a sales tactic and creates no obligation to buy, and you never have to buy because a seller has shown you many items." },
        { q: "Should I pay in Turkish lira or dollars in Turkey?", a: "Turkish lira. Accepting a card machine's or ATM's offer to charge in dollars or euros uses a poor built-in rate that costs several percent. Use bank ATMs, and note that with high inflation lira prices move quickly, so check a current estimate in your taxi or maps app rather than relying on a figure from an old guide." }
      ],
      sources: {
        links: [
          { label: "US State Department: Turkey (Turkiye) country information and safety guidance for travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Turkey.html", type: "gov" },
          { label: "Istanbul Tourist Information: a 2026 rundown of common Istanbul scams and how to avoid them", url: "https://istanbul-tourist-information.com/common-scams-in-istanbul/", type: "guide" }
        ],
        judgment: "These are the money traps most consistently reported in Istanbul in 2025 and 2026, not a ranked risk list, and with high inflation the lira figures move quickly, so treat them as a recent read and check your app. The city is safe for the vast majority of visitors; these tricks rely on politeness and confusion and are easy to sidestep. Checked July 2026."
      }
    }
  ]
};
