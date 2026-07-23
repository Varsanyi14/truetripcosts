export default {
  slug: "taiwan",
  iso2: "tw",
  live: true,
  name: "Taiwan",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-15",
  sources: {
    changed: "First publication. Confirmed the money facts that matter most this year: the New Taiwan dollar sits at about 32 to the US dollar, the tourist VAT refund is 5% on goods of NT$2,000 or more per store per day claimed before departure within 90 days, and there is no nightly tourist or bed tax. Also confirmed the entry rule that catches US visitors now: since 1 October 2025 the paper arrival card has been replaced by the free online Taiwan Arrival Card, which can be filed up to seven days before arrival, while US citizens still enter visa-free for up to 90 days.",
    links: [
      { label: "Ministry of Finance: the tourist tax refund for foreign travelers, the 5% VAT, the NT$2,000 minimum per store per day and the 90-day claim rule", url: "https://www.mof.gov.tw/eng/singlehtml/f48d641f159a4866b1d31c0916fbcc71?cntId=32bc7af09c4840d1a781991c4f753851", type: "revenue" },
      { label: "Tourism Administration (Taiwan): the VAT refund for visitors, how the on-site and airport refunds work and where to claim", url: "https://eng.taiwan.net.tw/m1.aspx?sNo=0024567", type: "tourism" },
      { label: "American Institute in Taiwan: visa-free entry for US citizens up to 90 days and the online Taiwan Arrival Card that replaced the paper form", url: "https://www.ait.org.tw/taiwan-visas-and-entry-requirements/", type: "gov" },
      { label: "American Institute in Taiwan: the local emergency numbers, 110 for police and 119 for fire and ambulance", url: "https://www.ait.org.tw/local-emergency-numbers/", type: "police" },
    ],
    judgment: "The daily cash share, the tipping feel, and the likely behavior of foreign cards at bank ATMs are our own estimate from experience and from consistent traveler reports, not an official figure. Card acceptance varies terminal by terminal, so treat our read as a guide, not a guarantee.",
  },
  emergency: { medical: "119", note: "119 reaches an ambulance or the fire service, and 110 is the police. The 911 number does not work here. From a mobile with no local SIM you can dial 112 as a backup, mostly used when someone is lost in the mountains. For travel help in English, the free 24-hour tourist hotline is 0800-011-765.", checked: "Jul 2026", checkedISO: "2026-07-15" },
  insuranceLevel: "medium",
  region: "Asia",
  signals: { cardFriendliness: 3, cashNeed: 3, taxRisk: 1, atmRisk: 3 },
  hook: "Card-friendly in the cities, but night markets, small eateries and the old streets still run on cash, so tap where you can, keep a stack of New Taiwan dollars for the stalls, load an EasyCard for transit, and always choose New Taiwan dollars over US dollars.",
  aliases: ["taiwan", "taipei", "kaohsiung", "taichung", "tainan", "jiufen", "shifen", "taroko", "sun moon lake", "twd", "ntd", "nt$", "new taiwan dollar", "easycard", "taiwan arrival card", "twac", "mrt", "night market", "shilin", "raohe", "bubble tea", "beef noodle", "taipei 101", "hsr", "high speed rail"],

  title: "Money in Taiwan (2026): Cards, Cash, EasyCard, ATMs, the 5% Tax Refund and Tipping | True Trip Costs",
  description: "How to handle money in Taiwan as a US traveler in 2026: cards in the cities and surging mobile pay, the cash you still need for night markets and the old streets, the EasyCard that runs the MRT and buses, the convenience-store ATMs that take your card, the dollar-conversion trap, the 5% VAT refund for visitors, and why nobody tips. Checked July 2026.",

  h1: "Money in Taiwan, sorted.",
  lede: "A calm, current plan for the money side of your trip: where your card is fine and where the stalls still want cash, the little New Taiwan dollars worth carrying, the EasyCard that runs the trains and buses, and the 5% tax you can claim back on shopping.",
  hero: {
    img: "/taiwan-hero.jpg",
    h: 1375,
    alt: "A calm Taipei dusk with the tapering tower of Taipei 101 glowing gold beside green mountain ridges, a lit city skyline and a string of warm lanterns along a wooden terrace, a lone figure in a coat leaning on the railing to look out, a flight of birds in the fading sky, and in the foreground a glass of bubble tea, a bamboo steamer of soup dumplings and a bowl of beef noodle soup on a wooden table"
  },

  recentChange: {
    date: "Jul 2026",
    text: "One entry step is easy to miss. Since 1 October 2025 Taiwan has replaced the paper arrival card with the online Taiwan Arrival Card, which every visitor without a resident certificate files for free before the flight; as of June 2026 you can submit it up to seven days before you arrive. It is not a money charge, and US citizens still enter visa-free for up to 90 days, but Taiwan is strict about seeing a return or onward ticket."
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Taiwan is <b>card-friendly in the cities</b> but far from cashless. Your <b>Visa or Mastercard</b> works at hotels, department stores, chain restaurants and convenience stores, and mobile pay (Apple Pay, Google Pay, Line Pay) is everywhere, with Amex patchy. The catch is that the best of Taiwan, the <b>night markets</b> (Shilin, Raohe, Ningxia), small eateries, the <b>old streets</b> like Jiufen and Shifen, and some taxis, still runs on <b>cash</b>, so carry a stack of New Taiwan dollars. For getting around, put an <b>EasyCard</b> in your pocket: it runs the MRT, buses and local trains at about a 20% discount, though it does not cover the High Speed Rail. Pull cash from a <b>convenience-store ATM</b> (7-Eleven, FamilyMart) rather than a bank machine, which sometimes rejects foreign cards, and <b>always choose New Taiwan dollars, not US dollars</b>, on any terminal or ATM. Two nice things: as a visitor you can <b>reclaim the 5% VAT</b> on shopping over NT$2,000 at a single store, and <b>nobody tips</b>, so pay the price on the bill and relax.",

  meter: {
    heading: "Card-friendly in the cities, but keep cash for the night markets.",
    cashPct: 40,
    note: "A rough feel for everyday spending. Cards and mobile pay cover hotels, department stores, chains and convenience stores in the cities. Cash is what you use at the night markets, small eateries, the old streets and some taxis, and you will want a decent stack of it on any given day."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Good in the cities", p: "Visa and Mastercard are taken at hotels, department stores, chain restaurants and convenience stores, and mobile pay (Apple Pay, Google Pay, Line Pay) is everywhere. Amex is patchy. The soft spot is that many <b>night markets, small eateries and old-street shops</b> take cash only, so a card alone will not get you through a day.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "King at night markets", p: "This is the one to plan for. Carry a stack of <b>New Taiwan dollars</b> for the night markets (Shilin, Raohe, Ningxia), small eateries, the old streets like Jiufen and Shifen, some taxis and rural stops. Top up from a convenience-store ATM as you go, rather than an airport exchange counter.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Use a convenience-store one", p: "The reliable move is an ATM inside a <b>7-Eleven or FamilyMart</b>, which have English menus and take foreign cards; plain bank ATMs sometimes reject them. Withdrawals cap around <b>NT$20,000</b> per transaction, the fee runs about <b>NT$100 to 150</b> plus your home bank's, and you should <b>decline the 'pay in US dollars' offer</b> every time.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b>, plus a backup from a different bank. Amex is only patchily accepted, so do not rely on it.",
      "Plan to carry cash. Taiwan is <b>card-friendly in the cities but cash-first at night markets</b>, small eateries and the old streets, so a card alone will leave you stuck.",
      "File the free <b>Taiwan Arrival Card</b> online before you fly. Since 1 October 2025 it has replaced the paper card, and you can submit it up to seven days before arrival.",
      "Have a <b>return or onward ticket</b> ready to show. Taiwan is strict about it for visa-free entry, and the airline may ask at check-in."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters. Pull <b>New Taiwan dollars</b> from a convenience-store ATM, and <b>decline 'convert to US dollars,'</b> always choose New Taiwan dollars.",
      "Grab about <b>NT$5,000 to 8,000</b> for your first day or two, for night-market food and cash-only stops.",
      "Buy an <b>EasyCard</b> (about NT$100 plus load) and top it up with cash. It runs the MRT, buses and local trains.",
      "Set up an <b>eSIM</b> before you land. Coverage is excellent island-wide, and you will want data for maps and transit apps."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card or phone</b> in the cities, and choose New Taiwan dollars every time.",
      "<b>Tap your EasyCard</b> for the MRT, buses and local trains, and lean on it for the roughly 20% transit discount.",
      "Keep a stack of <b>cash</b> for the night markets, small eateries and the old streets.",
      "Top up your EasyCard with <b>cash</b> at a convenience store; card top-ups are not reliable for visitors."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in New Taiwan dollars, never US dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds a few percent on card terminals and ATMs.",
      "<b>Do not tip.</b> It is genuinely not expected here, and leaving cash can confuse staff; some restaurants add a 10% service charge instead."
    ], cta: null }
  ],

  cash: {
    rate: 32, cur: "TWD", round: 100, defaultIndex: 1,
    rateNote: "Rough guide at about 32 New Taiwan dollars to the US dollar in 2026. Taiwan is inexpensive day to day, especially for night-market food, and this is the cash-in-hand slice of your spending, which is larger here than in most of card-first Asia.",
    styles: [
      { n: "Budget", per: 40, cash: 0.5, room: 55 },
      { n: "Mid-range", per: 75, cash: 0.4, room: 110 },
      { n: "Comfort", per: 140, cash: 0.3, room: 220 }
    ]
  },

  connectivity: {
    works: "Excellent island-wide. Taiwan has fast 4G and wide 5G across the cities and along the High Speed Rail, holding up in the mountains and on the coast. The carriers are Chunghwa Telecom, Taiwan Mobile and FarEasTone, and a prepaid SIM is cheap, but for most visitors an eSIM from Airalo, Nomad or a similar provider is the easy route. Your US plan may include some roaming, so check the rate before you rely on it. You do not need mobile data to pay by card, but you will want it for maps and transit apps."
  },

  tax: {
    none: true,
    currency: "TWD",
    note: "Taiwan has no nightly tourist or bed tax. A 5% business tax (VAT) is already built into the price you see on tags and menus. As a visitor you can reclaim that VAT on eligible goods through the tourist tax refund, on the spot at some stores or at the airport before you leave (see below)."
  },

  currencyHeading: "The New Taiwan dollar, in plain terms.",
  facts: [
    { sym: "twd", k: "Quick conversion", v: "Taiwan uses the New Taiwan dollar, written NT$. At about 32 to the US dollar in 2026, NT$100 is roughly 3 dollars and NT$500 about 15.50. Notes run 100, 200, 500, 1,000 and 2,000. Prices already include the 5% VAT, so the figure on the tag is what you pay." },
    { sym: "card", k: "Cities card, markets cash", v: "Visa and Mastercard work at hotels, department stores, chains and convenience stores, and mobile pay is everywhere, with Amex patchy. But the night markets, small eateries and old-street shops are largely cash, so carry a stack of New Taiwan dollars and do not plan to go cashless." },
    { sym: "ic", k: "EasyCard runs transit", v: "An EasyCard is the stored-value card for the MRT, buses and local trains, at about a 20% discount, and it also pays at convenience stores. Buy it for NT$100 plus load, and top up with cash. It does not work on the High Speed Rail or long-distance buses, and Apple Pay does not support it." },
    { sym: "notip", k: "No tipping", v: "Taiwan has no tipping culture. Staff are paid a proper wage, and leaving cash can confuse people. Some restaurants add a 10% service charge, which is already on the bill. A warm thank-you is all that is expected." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "A 5% VAT you can claim back on shopping.",
    text: "Taiwan keeps tax simple for a visitor. There is <b>no nightly tourist or bed tax</b>, and the <b>5% business tax (VAT)</b> is already included in the price you see. The win worth acting on: as a foreign visitor staying under <b>183 days</b>, you can <b>reclaim the VAT on goods</b> you buy to take home. Spend <b>NT$2,000 or more</b> (tax included) at a single store showing the <b>Taiwan Tax Refund</b> label on the same day, show your <b>passport</b>, and then either take an <b>on-site small refund</b> right at authorised stores or claim at the <b>airport</b> before departure. You must apply <b>before you leave</b> the country and within <b>90 days</b> of purchase, and the goods must go with you. After the operator's handling fee (about 14% of the tax), you get back a little under the full 5%. Refunds are for <b>goods only</b>, not hotels or meals, and there is a free 'TAIWAN TAX REFUND' app that maps the stores."
  },

  keyFacts: [
    { label: "Tourist VAT refund (TRS)", value: "5% VAT refundable on goods of NT$2,000 or more per store per day, claimed before departure within 90 days", status: "enacted", effective: null, source: "https://www.mof.gov.tw/eng/singlehtml/f48d641f159a4866b1d31c0916fbcc71?cntId=32bc7af09c4840d1a781991c4f753851", checked: "2026-07-15" },
    { label: "Taiwan Arrival Card (TWAC)", value: "Free online arrival card required for entry, filed up to seven days before arrival, having replaced the paper card", status: "enacted", effective: "2025-10-01", source: "https://www.ait.org.tw/taiwan-visas-and-entry-requirements/", checked: "2026-07-15" }
  ],

  traps: [
    "<b>'Pay in US dollars?' Always say no.</b> Card terminals and ATMs may offer to charge you in dollars (dynamic currency conversion), which quietly adds a few percent. Choose New Taiwan dollars every time.",
    "<b>Bank ATMs can reject a foreign card.</b> Use an ATM inside a 7-Eleven or FamilyMart, which have English menus and take foreign cards, and try a convenience-store machine if a bank one declines you.",
    "<b>A card alone will not get you through a day.</b> The night markets, small eateries and old streets are largely cash, so always carry a stack of New Taiwan dollars as your main tool.",
    "<b>EasyCard does not cover the High Speed Rail.</b> It runs the MRT, buses and local trains, but buy a separate ticket for the HSR and for long-distance buses.",
    "<b>Topping up EasyCard is cash.</b> For most visitors, reload it with cash at a convenience store; card top-ups are not reliable, and Apple Pay does not support EasyCard.",
    "<b>Have a return or onward ticket.</b> Taiwan is one of the stricter countries in Asia about seeing proof you will leave, and the airline may ask at check-in."
  ],

  tippingHeading: "Don't tip, really.",
  tipping: "Taiwan has no tipping culture, and there is no awkwardness in not tipping, it is simply the norm. Staff are paid a proper wage rather than relying on gratuities, so at <b>restaurants, cafes, taxis and for delivery you do not tip</b>: pay the price on the bill or the meter and add a warm thank-you. Leaving cash on the table can even confuse staff. The one thing to check is a <b>10% service charge</b> that some restaurants and hotels add automatically, in which case nothing more is needed. The rare exceptions where a small gesture is welcome are a <b>hotel porter or concierge</b> who goes out of their way, or a <b>private multi-day guide or driver</b>, where a modest amount is gracious. Otherwise, keep your wallet closed and enjoy how simple it is.",

  faqs: [
    { q: "Do I need cash in Taiwan?", a: "Yes, more than in most of card-first Asia. The cities take cards and mobile pay, but the night markets, small eateries and the old streets run on cash. Carry a stack of New Taiwan dollars and refill from a convenience-store ATM as needed." },
    { q: "Why did my card get declined in Taiwan?", a: "Often the machine, not your card. Many plain bank ATMs reject foreign cards, so use one inside a 7-Eleven or FamilyMart with an English menu. At night markets and small shops, the reason is usually that they only take cash, so keep some New Taiwan dollars on hand." },
    { q: "What is an EasyCard and do I need one?", a: "EasyCard is a small stored-value card that runs the MRT, buses and local trains at about a 20% discount, and it also pays at convenience stores. Buy one for about NT$100 plus load and top it up with cash. It does not cover the High Speed Rail or long-distance buses, so buy separate tickets for those." },
    { q: "Can I top up EasyCard with a foreign credit card?", a: "For most visitors, not reliably. A standard EasyCard is treated as electronic cash, so reload it with New Taiwan dollars at a convenience store or station machine. Apple Pay does not support EasyCard, so plan on cash top-ups." },
    { q: "Should I pay in New Taiwan dollars or US dollars?", a: "Always New Taiwan dollars. If a card terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion adds a few percent. Choosing the local currency lets your card's network handle the exchange at a fair rate." },
    { q: "Can I get a tax refund on shopping in Taiwan?", a: "Yes. As a visitor staying under 183 days, spend NT$2,000 or more (tax included) at one Taiwan Tax Refund store on the same day, show your passport, and take an on-site small refund or claim at the airport before departure, within 90 days of purchase. After the handling fee you get back a little under the 5% VAT, and it is for goods only, not hotels or meals." },
    { q: "Do I need a visa or an arrival card for Taiwan?", a: "US citizens enter visa-free for up to 90 days with a passport valid more than 90 days. Since 1 October 2025 everyone without a resident certificate files the free online Taiwan Arrival Card before the flight, up to seven days ahead. Have a return or onward ticket ready, since Taiwan enforces that for visa-free entry." },
    { q: "Do you tip in Taiwan?", a: "No. Tipping is not customary at restaurants, cafes, taxis or for delivery, and offering one can cause confusion. Just pay the amount on the bill or meter. Some restaurants and hotels add a 10% service charge automatically, which is already included, and a polite thank-you is all that is expected." },
    { q: "How much cash should I bring for a week in Taiwan?", a: "More than in Japan or Korea. Plan on cash for most night-market meals, small eateries and old-street stops. Pulling NT$5,000 to 8,000 at a time from a convenience-store ATM and refilling as needed works well, kept in a mix of notes for small stalls." }
  ],
  culture: {
    heading: "A little Mandarin goes a long way",
    intro: "Nobody expects you to read Chinese, but a warm ni hao, a xie xie, and a story or two mark you as a guest rather than a tourist, and they are warmly received. Taiwanese people are famously friendly and welcoming, and they notice the effort.",
    phrases: [
      { mean: "Hello", say: "nee-HOW", word: "Ni hao", native: "你好" },
      { mean: "Thank you", say: "sshyeh-sshyeh", word: "Xie xie", native: "謝謝" },
      { mean: "How much?", say: "dwaw-SHAO chyen", word: "Duoshao qian", native: "多少錢" },
      { mean: "Delicious", say: "how-CHRR", word: "Hao chi", native: "好吃" },
      { mean: "Excuse me / sorry", say: "boo-HAO-ee-suh", word: "Bu hao yisi", native: "不好意思" },
      { mean: "Cheers", say: "gan-BAY", word: "Gan bei", native: "乾杯" },
    ],
    tip: "Taiwan is warm and low-key, and a smile plus a few words of Mandarin goes far. At a night market it is perfectly fine to point and hold up fingers for how many; vendors are used to visitors and quick to help. One fun local quirk: keep your receipts, because the government's uniform-invoice receipts double as lottery tickets, with a prize draw every couple of months.",
    stories: [
      { img: "/taiwan-culture-1.jpg",
        alt: "WPA-style illustration of a Taiwanese night-market lane after dark, rows of hanging paper lanterns overhead, steam rising from food stalls with a cook at work, hanging garlic and stacked bowls, and a parked scooter to one side",
        h: "The night market is the heart of it",
        p: "Taiwan comes alive after dark at its night markets, from Taipei's Shilin and Raohe to Ningxia, where stalls sell everything from beef noodle soup and soup dumplings to bubble tea and stinky tofu. This is cash country and the best eating in Taiwan, so bring an appetite and a pocket of New Taiwan dollars, and follow the longest local queue.",
        note: "Good to know: most night-market stalls are cash only" },
      { img: "/taiwan-culture-2.jpg",
        alt: "WPA-style illustration of the Jiufen hillside old town, tea houses stacked up a steep slope, glowing red lanterns, a stone staircase, and mist drifting between the buildings at dusk",
        h: "Tea houses and red lanterns at Jiufen",
        p: "In the hills above the northeast coast, the old gold-mining town of Jiufen climbs a steep slope in a maze of stone steps, tea houses and red lanterns that glow at dusk. Wander the narrow lanes, stop for a pot of tea with a view over the sea, and try the local taro balls; the whole place feels like stepping into an old film.",
        note: "Good to know: Jiufen is busiest and most magical at dusk" },
      { img: "/taiwan-culture-3.jpg",
        alt: "WPA-style illustration of Taroko Gorge, a marble canyon with a red pavilion bridge crossing a jade-green river, a small boat below and misty peaks rising behind",
        h: "Marble cliffs at Taroko Gorge",
        p: "On the east coast, Taroko Gorge cuts a dramatic marble canyon where a jade river winds beneath sheer cliffs, red pavilion bridges and misty peaks. It is one of Taiwan's natural wonders, and a reminder that the island is as much mountains and coast as it is cities and night markets.",
        note: "Good to know: check trail and road status before you go" },
    ],
    pride: "Taiwan is modern, fast and deeply hospitable, proud of its food, its night markets and its mountains and coast. Small courtesies and a few words of Mandarin are noticed and quietly returned."
  },

  spokes: [
    {
      slug: "bringing-your-pet",
      live: true,
      topic: "pets",
      title: "Bringing a dog or cat to Taiwan from the US (2026): the titer clock, and how to skip facility quarantine | True Trip Costs",
      description: "Moving to Taiwan with a pet from the US: why a rabies antibody titer sets the timeline, how a compliant US pet can now have facility quarantine waived, the import permit revised in 2026, and the Pit Bull import ban. Checked July 2026.",
      h1: "Bringing your dog or cat to Taiwan.",
      lede: "Taiwan sits between the strict islands and the easy destinations. It requires a rabies antibody titer, which sets your timeline, but a US pet that meets the criteria can now have facility quarantine waived and go straight home with you. The catches are the titer timing, an import permit revised in 2026, and a breed ban to check. Here is the route.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "Taiwan requires more than the easiest destinations but less than the strictest. Your pet needs an <b>ISO microchip, a rabies vaccination, and a rabies antibody titer (RNATT) of at least 0.5 IU/ml</b>, with the blood sampled at a designated lab, plus an <b>import permit and a post-entry quarantine reservation applied for before shipment</b>. The good news: a compliant US dog or cat can now have <b>facility quarantine waived</b> and be released rather than detained. The catch is timing, the titer blood draw must sit in a set window before travel, so it usually decides your earliest arrival date. Note too that <b>Pit Bull Terriers are banned from import</b>, and Taiwan's import permit was revised in 2026. Coming home to the US is the easy part.",
      sections: [
        {
          h: "The titer is the clock",
          p: [
            "Unlike Hong Kong, Taiwan requires a rabies neutralizing antibody titer test (RNATT), and that test is what sets your lead time. The steps, in order: your pet must be at least 90 days old, implanted with an <b>ISO microchip</b>, and given a <b>rabies vaccination</b> (a booster at least 30 days before shipment, and no more than a year before). Then a blood sample is drawn for the RNATT, which must show a titer of <b>at least 0.5 IU/ml</b> and be taken <b>no less than 90 days and no more than one year before shipment</b>, at a designated laboratory.",
            "The US designated labs are the Kansas State University Rabies Laboratory, the Department of Defense laboratory in Texas, Auburn University, and the University of Missouri veterinary diagnostic laboratory. Because the blood draw has to sit inside that window before travel, it is usually the step that decides the earliest date your pet can arrive, so plan backward from it. Confirm the exact current timing on the official pages, since these windows are precise and have been adjusted."
          ]
        },
        {
          h: "The permit, and skipping facility quarantine",
          p: [
            "Taiwan requires an import permit and a reservation of post-entry quarantine space, applied for through APHIA (Taiwan's Animal and Plant Health Inspection Agency) before shipment, submitting the rabies vaccination certificate, the RNATT result, and your identification. Apply well ahead, and note that Taiwan revised its import quarantine permit on 5 January 2026, with 2026 treated as a transition period where both the old and new versions applied, so confirm you are using the current form.",
            "Here is the improvement that matters for US owners: APHIA now states that detention in post-entry quarantine premises <b>may be waived</b> for a dog or cat that meets the defined rabies-test timing and submission criteria. In practice that means a fully compliant US pet can be released rather than held in a facility, which is what turns Taiwan from a quarantine destination into a manageable one. The waiver is conditional on getting the titer and paperwork exactly right, so precision is what buys you the release."
          ]
        },
        {
          h: "The breed ban, cost, and coming home",
          p: [
            "One hard rule to check first: Taiwan bans the import and breeding of <b>Pit Bull Terriers</b>, in force since 2022. If your dog is or resembles that type, confirm the position before you spend on anything else, because this is a barrier, not a formality. Budget several thousand dollars all in, with air transport as the largest line, plus the titer test, the permit, and the vet work.",
            "The return leg is easy. A dog flying home to the US from Taiwan is on the simplest CDC path: typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to <a href=\"/bringing-a-dog-into-the-us\">bringing a dog into the US</a>, and <a href=\"/traveling-with-a-pet\">traveling with a pet</a> for how Taiwan compares with other destinations."
          ]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to Taiwan",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-taiwan",
        note: "The US-side steps, the microchip, rabies and titer sequence, and the health certificate. Taiwan's APHIA is the final word on the permit, the quarantine waiver, and the breed ban, so confirm the current version."
      },
      faqs: [
        { q: "Does my pet have to go into quarantine in Taiwan?", a: "Not necessarily anymore. Taiwan requires a rabies antibody titer and an import permit, but APHIA now allows facility quarantine to be waived for a dog or cat that fully meets the rabies-test timing and submission criteria, so a compliant US pet can be released rather than detained. The waiver depends on getting the titer window and paperwork exactly right." },
        { q: "How long does it take to bring a pet to Taiwan from the US?", a: "Plan for several months, set mainly by the rabies antibody titer. The blood sample must be taken at a designated lab no less than 90 days and no more than one year before shipment, so that draw usually decides your earliest possible arrival date. Add the vaccination timing, the import permit, and the quarantine reservation, and the front end fills up. Start early and confirm the current windows." },
        { q: "Are any dog breeds banned from Taiwan?", a: "Yes. Taiwan bans the import and breeding of Pit Bull Terriers, in force since 2022. If your dog is or resembles that type, confirm the current position with APHIA before committing to the move, since it is a genuine barrier rather than a paperwork step." },
        { q: "Do I need to quarantine my pet coming back to the US from Taiwan?", a: "No. A dog returning to the US from Taiwan is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details." }
      ],
      sources: {
        links: [
          { label: "USDA APHIS: pet travel from the United States to Taiwan, the microchip, rabies, titer and permit steps", url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-taiwan", type: "gov" },
          { label: "Taiwan APHIA: quarantine for dogs and cats, the import permit, titer requirement, and quarantine waiver", url: "https://www.aphia.gov.tw/en/ws.php?id=14261", type: "gov" },
          { label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg", url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html", type: "gov" }
        ],
        judgment: "Taiwan's titer requirement, import permit, quarantine waiver, and breed ban are set by APHIA and administered on the US side by APHIS, not by us. The permit was revised in January 2026 and the titer windows are precise, so we point you to the official pages and dated this July 2026. Costs vary with your pet's size and route, so treat the figures as a starting point and confirm the current APHIA requirements, the titer timing, and the waiver criteria before you begin."
      }
    }
  ]
};
