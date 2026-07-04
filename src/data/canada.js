export default {
  slug: "canada",
  live: true,
  name: "Canada",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Sources added. Confirmed with the Canada Revenue Agency that sales tax is added at the register: 5% GST alone in Alberta and the territories, a combined 13% to 15% HST in Ontario and Atlantic Canada, with Nova Scotia down to 14% since April 2025, and GST plus a provincial tax in British Columbia, Manitoba, Saskatchewan and Quebec. Verified that Canada has no general sales-tax refund for visitors, since the GST visitor rebate ended in 2007, and that a narrow rebate survives only for some tour packages and conventions. The guide's figures are current.",
    links: [
      { label: "Canada Revenue Agency: charge and collect the GST/HST, rates by province", url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate.html", type: "revenue" }
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "911", note: "911 works everywhere, the same as it does at home.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  region: "Americas",
  hook: "As card-friendly as the US, but the sticker price hides sales tax and a US-style tip.",
  aliases: ["toronto", "vancouver", "montreal", "quebec", "quebec city", "ottawa", "calgary", "banff", "niagara", "canadian dollar", "cad", "loonie", "toonie", "ontario", "british columbia", "alberta"],

  title: "Money in Canada (2026): Cards, Cash, Sales Tax and Tipping | True Trip Costs",
  description: "How to handle money in Canada as a US traveler in 2026: cards and tap work almost everywhere, why sales tax is added at the register (not on the tag), US-style tipping, which ATMs to use, paying in Canadian dollars not US, and the hotel taxes that vary by province. Checked July 2026.",

  h1: "Money in Canada, sorted.",
  lede: "A calm, current plan for the money side of your trip: why you barely need cash, the two costs that never show up on the price tag, and the hotel taxes that vary by province.",
  hero: {
    img: "/canada-hero.jpg",
    h: 1375,
    alt: "A cobbled Old Quebec street at dusk with stone houses under steep teal roofs, red geraniums in window boxes, string lights crossing the lane, red autumn leaves drifting down, the turreted silhouette of a grand chateau hotel at the end of the street against an orange sky, a figure in a red coat walking away, and a plate of poutine beside a stack of maple-syrup pancakes and a tall glass of golden beer on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Canada is as card-friendly as the US: tap, chip, Apple Pay and Google Pay work almost everywhere, and you rarely need cash. Bring a <b>no-foreign-fee Visa or Mastercard</b>, keep <b>C$40 to C$60</b> for markets, parking and the odd cash-only spot, and pull Canadian dollars from a <b>major bank ATM</b> (RBC, TD, Scotiabank, BMO, CIBC), not a private machine in a bar or convenience store. Two things trip up first-timers, and neither is on the price tag: <b>sales tax is added at the register</b> (5% to 15% depending on the province), and <b>tipping is US-style</b>, 15 to 20% at restaurants, usually prompted on the card terminal. Always choose Canadian dollars, never US, on any screen that offers the choice.",

  meter: {
    heading: "Nearly cashless, just budget for tax and tips on top of the sticker.",
    cashPct: 20,
    note: "A rough feel for everyday spending. Cards and contactless work almost everywhere, on transit, in shops, restaurants and taxis, and card terminals even handle the tip. You need very little cash, mostly for farmers markets, food trucks, parking meters, small tips and the occasional cash-only spot. The bigger surprises are not about cash at all: sales tax is added at checkout, and a tip is expected on top."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken nearly everywhere, contactless is standard, and Apple Pay and Google Pay are widely accepted. Tap works up to about C$250, above which you enter a PIN. Amex is accepted at most chains and hotels but is patchier at small independents.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "You barely need it", p: "Cards cover almost everything, and you can even tip on the terminal. Keep C$40 to C$60 for farmers markets, food trucks, parking, small tips and the rare cash-only place. Canada dropped the penny in 2013, so cash totals round to the nearest 5 cents, while card charges stay exact.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Use a bank machine", p: "Major bank ATMs (RBC, TD, Scotiabank, BMO, CIBC) are everywhere and mostly dispense C$20 notes. Avoid the private white-label machines in bars, hotels and convenience stores, which pile on fees. Read the on-screen fee and decline \"convert to US dollars.\"", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> with contactless for nearly everything, plus a backup card from a different bank.",
      "Get a <b>no-foreign-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "Check whether your US phone plan already includes Canada, many do, so you may not need a separate eSIM or SIM at all."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, the rates are poor.",
      "Pull Canadian dollars from a <b>major bank ATM</b> (RBC, TD, Scotiabank, BMO, CIBC) and <b>decline \"convert to US dollars.\"</b>",
      "You will need little cash, so a single modest withdrawal usually covers a whole trip."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card or phone</b> for essentially everything: shops, restaurants, transit, taxis and rideshare.",
      "Remember the <b>sticker price is pre-tax</b>. Sales tax (5% to 15% by province) is added when you pay.",
      "When the terminal offers tip choices (often 18, 20, 25%), that is expected at sit-down restaurants and bars. Check whether the percentage is on the pre-tax or post-tax total.",
      "<b>Always choose Canadian dollars</b>, never US, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in Canadian dollars, never in US dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "Budget for the two hidden costs on every restaurant meal: sales tax and a 15 to 20% tip, so a listed $100 dinner really lands closer to $130."
    ], cta: null }
  ],

  cash: {
    rate: 1.38, cur: "CAD", round: 20, defaultIndex: 1,
    rateNote: "Rough guide at about 1.38 Canadian dollars to 1 US dollar in mid-2026, so a Canadian dollar is worth about 72 US cents: C$100 is roughly $72 and C$20 about $14.50. The rate moves, so check a current converter before you go.",
    styles: [
      { n: "Budget",    per: 70,  cash: 0.2 },
      { n: "Mid-range", per: 160, cash: 0.15 },
      { n: "Comfort",   per: 350, cash: 0.1 }
    ]
  },

  connectivity: {
    works: "Very good in the populated south, patchy in the vast north. The three national carriers, Rogers, Bell and Telus, cover cities, towns and the main highways well with 4G and growing 5G, but coverage thins out fast in the mountains, the far north and deep in the national parks. Canadian mobile plans are among the most expensive in the world, so for a short visit an eSIM (Airalo, Nomad, Ubigi) usually beats a local SIM, and many US carriers already include Canada in their plans, so check yours first. You do not need mobile data to pay for anything; cards and contactless stand on their own."
  },

  // TOURIST/HOTEL TAX (high-churn, verified to Jul 2026 knowledge; confirm municipal rates).
  // Canada has no national tourist tax. A hotel room instead carries the province's sales tax
  // (GST 5% alone in Alberta and the territories; HST 13 to 15% in Ontario and Atlantic Canada;
  // GST plus a provincial sales tax in BC, Manitoba, Saskatchewan and Quebec) PLUS, in many
  // cities, a municipal or provincial accommodation levy of roughly 2 to 6%. Sales tax is NOT
  // included in Canadian prices. These are rough combined estimates; the municipal part varies
  // by city and none of it is refundable to visitors (Canada ended its GST visitor rebate in 2007).
  tax: {
    unit: "percentOfRoom",
    currency: "CAD",
    capNights: null,
    note: "Canada has no single tourist tax. Your hotel bill instead carries the province's sales tax plus, in many cities, a municipal or provincial accommodation levy. This is a rough combined estimate of what gets added to a room rate, and unlike Europe none of it is refundable to visitors. Sales tax is not included in Canadian prices.",
    regions: [
      { key: "ontario", label: "Ontario (Toronto, Ottawa, Niagara)", pct: 18, note: "HST is 13%, and big-city hotels add a municipal accommodation tax on top, roughly 4 to 6% (Toronto is about 6%). Smaller towns may charge none." },
      { key: "quebec", label: "Quebec (Montreal, Quebec City)", pct: 18, note: "GST plus Quebec's QST come to just under 15%, plus a 3.5% lodging tax." },
      { key: "bc", label: "British Columbia (Vancouver, Victoria, Whistler)", pct: 16, note: "GST 5% plus 8% PST on accommodation, plus a municipal and regional tax of about 2 to 3% (a little higher in Vancouver)." },
      { key: "alberta", label: "Alberta (Banff, Jasper, Calgary)", pct: 9, note: "Alberta has no provincial sales tax; you pay 5% GST plus the province's 4% tourism levy." },
      { key: "atlantic", label: "Atlantic Canada (Nova Scotia, New Brunswick, PEI, Newfoundland)", pct: 15, note: "HST runs 14 to 15% depending on the province, and a few towns add a small accommodation levy." },
      { key: "other", label: "Elsewhere in Canada (Prairies, the North)", pct: 12, note: "Manitoba and Saskatchewan charge GST plus a provincial sales tax (about 11 to 12%); the territories charge just 5% GST. Some cities add a small accommodation levy." }
    ]
  },

  currencyHeading: "The Canadian dollar, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "At about 1.38 Canadian dollars to 1 US dollar in mid-2026, a Canadian dollar is worth about 72 US cents. So C$10 is roughly $7.25, C$50 about $36, and C$100 about $72. To go the other way, add a little under half again to a US figure." },
    { sym: "smallnotes", k: "Notes and coins", v: "Polymer notes come in C$5, 10, 20, 50 and 100. Coins are the 5, 10 and 25 cent pieces plus the C$1 loonie and C$2 toonie. There is no penny (dropped in 2013), so cash totals round to the nearest 5 cents while card charges are exact." },
    { sym: "usd", k: "The price tag is pre-tax", v: "This catches Americans out even though it mirrors home: the shelf or menu price does not include sales tax. Depending on the province, 5% to 15% is added at the register, so always expect to pay a bit more than the number shown." },
    { sym: "tip", k: "Tipping is expected", v: "Canada follows US-style tipping: 15 to 20% at sit-down restaurants and bars, and the card terminal will prompt you. This is a real part of the cost, on top of tax. See the tipping section below." }
  ],

  taxfree: {
    label: "Taxes, tips and refunds",
    heading: "Tax on top of the sticker, a tip on top of that, and no refund.",
    text: "Canada has no single national tourist tax, but two costs sit on top of almost every price. First, <b>sales tax is added at the register, not shown on the tag</b>: it is <b>5% GST</b> alone in Alberta and the territories, a combined <b>13% to 15% HST</b> in Ontario and Atlantic Canada, and GST plus a provincial sales tax in British Columbia, Manitoba, Saskatchewan and Quebec (Quebec's combined rate is just under 15%). Hotel rooms often carry an extra <b>municipal or provincial accommodation levy of about 2 to 6%</b>. Second, <b>tipping is US-style</b>, effectively another 15 to 20% on restaurant, bar and taxi bills. Unlike Europe, there is <b>no general sales-tax refund for visitors</b>: Canada ended its GST visitor rebate in 2007, so you cannot claim tax back on shopping (a narrow rebate still exists for some tour packages and conventions). There is no separate departure tax; airport fees are built into your airfare."
  },

  traps: [
    "<b>The price you see is not the price you pay.</b> Sales tax (5% to 15% by province) is added at the register, not printed on the tag or menu. Budget above the sticker on everything.",
    "<b>Tipping is a real cost here, US-style.</b> Expect 15 to 20% at sit-down restaurants and bars, prompted on the card terminal (often 18, 20, 25%). It sits on top of the tax, so a listed $100 dinner can land near $130. Check whether the suggested percentage is on the pre-tax or post-tax total.",
    "<b>Pay in Canadian dollars, not US dollars.</b> Terminals and ATMs offer to charge you in dollars (dynamic currency conversion), which adds 3 to 8%. A few border and tourist spots take US cash, but at a poor rate, and your change comes back in Canadian dollars.",
    "<b>Skip the white-label ATMs.</b> Private machines in bars, hotels and convenience stores charge steep fees. Use a major bank's ATM (RBC, TD, Scotiabank, BMO, CIBC) and decline the US-dollar conversion."
  ],

  tippingHeading: "US-style: 15 to 20%, usually on the terminal.",
  tipping: "Tipping in Canada works just like the US, so budget for it. At sit-down restaurants and bars, 15 to 20% is standard, and the card terminal will offer preset choices (often 18, 20 and 25%); watch that the suggested percentage is sometimes calculated on the post-tax total, which nudges it higher. For bartenders, about C$1 to C$2 a drink is fine if you are not tipping a percentage. Taxis and rideshare get 10 to 15%, hairdressers and spa staff 15 to 20%, hotel housekeeping C$2 to C$5 a night, and a bellhop C$2 to C$5 a bag. Coffee shops and counter service have a tip prompt too, but there it is genuinely optional. A service charge is not usually added to the bill except for large groups, so read it before you tip again.",

  faqs: [
    { q: "Do I need cash in Canada?", a: "Very little. Cards and tap work almost everywhere, and you can tip right on the terminal. Keep about C$40 to C$60 for farmers markets, food trucks, parking meters, small tips and the rare cash-only spot, and pull it from a major bank ATM if you run low." },
    { q: "Should I pay in Canadian or US dollars in Canada?", a: "Canadian. If a card terminal or ATM offers to charge you in US dollars, decline; that dynamic currency conversion adds roughly 3 to 8%. A handful of border and tourist businesses take US cash, but the rate is poor and your change comes back in Canadian dollars." },
    { q: "Is sales tax included in prices in Canada?", a: "No, and this catches US visitors out even though it mirrors home. The shelf or menu price is pre-tax. Depending on the province, 5% (Alberta and the territories) up to 15% (Atlantic Canada) is added at checkout, and hotels usually add an accommodation levy on top." },
    { q: "Can I get a tax refund on shopping in Canada?", a: "Generally no. Canada ended its GST visitor rebate program in 2007, so there is no EU-style tourist refund on ordinary purchases. A narrow rebate still exists for some tour packages and foreign conventions, but not for everyday shopping." },
    { q: "How much should I tip in Canada?", a: "Like the US: 15 to 20% at restaurants and bars, 10 to 15% for taxis and rideshare, and a couple of dollars per bag or per night for hotel staff. The card terminal will prompt you, so check whether the suggested percentage is on the pre-tax or post-tax total before you choose." },
    { q: "What is the best ATM to use in Canada?", a: "A major bank's machine: RBC, TD, Scotiabank, BMO or CIBC. Avoid the private white-label ATMs in bars, hotels and convenience stores, which charge high fees, and always decline the US-dollar conversion. Most machines dispense C$20 notes." }
  ]
};
