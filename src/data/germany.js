export default {
  slug: "germany",
  live: true,
  name: "Germany",
  from: "United States",
  checked: "Jun 2026",
  checkedISO: "2026-06-30",
  region: "Europe",
  hook: "More cash-loving than its reputation suggests, with a patchwork of city bed taxes to plan for.",

  title: "Money in Germany (2026): Cash, Cards, ATMs and City Taxes | True Trip Costs",
  description: "How to handle money in Germany as a US traveler in 2026: why cash still rules more than you'd expect, fee-free Cash Group and Sparkasse ATMs, the dollar conversion trap, light round-up tipping, and the city-by-city bed tax (Bettensteuer) in Berlin, Munich, Hamburg, Cologne and Frankfurt. Checked June 2026.",

  h1: "Money in Germany, sorted.",
  lede: "A calm, current plan for the money side of your trip: why a famously efficient country still runs more on cash than you'd guess, and the small per-city tax that varies more than anywhere else in Europe.",
  hero: {
    img: "/germany-hero.jpg",
    h: 1375,
    alt: "A half-timbered German old-town street at dusk with string lights overhead, flower boxes spilling red geraniums from the windows, a church spire silhouetted at the end of the street, a lone figure in a dark coat walking away, and a plate of grilled bratwurst with mustard, a soft pretzel, a bowl of sauerkraut and a tall glass of golden beer on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Germany has a reputation for efficiency, but it is one of Europe's more cash-loving countries: roughly 30 to 40% of small businesses, bakeries, market stalls and traditional restaurants still prefer or only take cash. Bring a <b>no-fee Visa or Mastercard</b> for supermarkets, chain restaurants and hotels, but carry <b>50 to 100 euros</b> for everything else, and pull cash from a <b>Sparkasse or Cash Group ATM</b> (Deutsche Bank, Commerzbank, Postbank), not an independent machine. One rule everywhere: <b>always choose euros, never dollars</b>. If your trip includes Berlin, Munich, Hamburg, Cologne or Frankfurt, budget the city's own bed tax, since the rate and the way it is charged differ from city to city.",

  meter: {
    heading: "Germany is more cash-loving than its efficient reputation suggests.",
    cashPct: 48,
    note: "A rough feel for everyday spending. Supermarkets, chain stores and hotels take cards easily, contactless included. But traditional bakeries, market stalls, beer gardens, small family restaurants and many museums still prefer cash, or are cash only, and that habit runs deeper here than in most of Western Europe."
  },

  trio: [
    { sym: "card", kind: "warn", h: "Your card", verd: "Works widely, but not everywhere", p: "Visa and Mastercard are accepted at supermarkets, chain restaurants, hotels and most city-center shops, often via contactless. Many independent bakeries, small restaurants, market stalls and some museums are cash only or set a minimum, commonly around 10 to 30 euros.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Keep more than you expect", p: "Germans famously like cash, and you will run into it more than in France, Spain or the UK. Keep 50 to 100 euros for bakeries, beer gardens, markets, festivals and paid restrooms, which often want coins.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Plentiful, but mind the network", p: "Sparkasse (red S logo) and the Cash Group (Deutsche Bank, Commerzbank, Postbank) cover cities and most towns well. A foreign card is an \"out of network\" withdrawal almost everywhere, so expect a fee, sometimes 5 euros or more at a standalone machine. Read the screen before confirming.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> for hotels, supermarkets and chain restaurants, plus a backup card from a different bank.",
      "Get a <b>no-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "<b>Amex is accepted far less</b> than Visa or Mastercard in Germany, so do not rely on it as your main card."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, the rates are poor.",
      "Pull euros from a <b>Sparkasse or Cash Group ATM</b> (look for the red S, or Deutsche Bank, Commerzbank, Postbank) and <b>decline \"convert to USD.\"</b>",
      "Withdraw a larger amount at once, since the out-of-network fee is usually a flat charge per withdrawal, not a percentage."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card</b> for supermarkets (Rewe, Edeka, Aldi, Lidl), chain restaurants and hotels.",
      "<b>Cash</b> for bakeries, beer gardens, market stalls, small family-run restaurants and paid public toilets.",
      "A handy local trick: supermarkets and drugstores like dm and Rossmann will often give you cash back free of charge with a card purchase.",
      "<b>Always choose euros</b>, never dollars, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in euros, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "When a restaurant brings the card reader, state the total you want to pay out loud, including any tip, before they process it. Leaving coins on the table after paying and walking off reads as a mistake, not a tip."
    ], cta: null }
  ],

  cash: {
    rate: 0.88, cur: "EUR", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 0.88 euros to the dollar in mid-2026, so a euro costs a little over a dollar.",
    styles: [
      { n: "Budget",    per: 50,  cash: 0.45 },
      { n: "Mid-range", per: 100, cash: 0.35 },
      { n: "Comfort",   per: 180, cash: 0.2 }
    ]
  },

  connectivity: {
    works: "Yes, with one well-known catch. Deutsche Telekom has the strongest and most consistent nationwide coverage, including small towns, the Alps and the Black Forest, with Vodafone a close second, especially in the western half of the country. O2 has closed much of its old rural gap but still trails the other two outside cities. The famous weak point is German long-distance trains: ICE lines run through long tunnels and rural stretches with patchy signal, even though free onboard wifi (WIFIonICE) helps fill the gaps. Pick a Telekom-backed eSIM if your trip includes rural regions or a lot of train travel."
  },

  // TOURIST TAX / FEES (high-churn, verified Jun 2026). Germany has no national tourist tax.
  // Instead, individual cities levy their own "Bettensteuer" (bed tax) or "Kulturförderabgabe"
  // (culture tax), charged on leisure stays only (business travelers are generally exempt with
  // proof). Rates and structure vary city by city: some charge a percentage of the net room
  // rate, Frankfurt charges a flat per-night amount, and Hamburg uses a sliding scale by price
  // tier that works out to roughly 2% of the room rate. Many smaller cities and towns charge
  // nothing at all, outside the separate Kurtaxe system in officially designated spa towns.
  tax: {
    unit: "percentOfRoom",
    currency: "EUR",
    capNights: null,
    note: "Germany has no national tourist tax. Individual cities charge their own bed tax (Bettensteuer) on leisure stays, usually added to your bill at checkout. Business travelers are generally exempt with an employer letter. Rates and structure vary by city, so this is a city-specific estimate, not a flat national rate.",
    regions: [
      { key: "berlin", label: "Berlin", pct: 7.5, capNights: 21, note: "Berlin charges 7.5% of the net room rate, capped after 21 consecutive nights." },
      { key: "munich", label: "Munich", pct: 5, note: "Munich introduced its own 5% bed tax in 2025, after years of having none." },
      { key: "hamburg", label: "Hamburg", pct: 2.1, note: "Hamburg uses a sliding scale by room price rather than a flat percentage; this is roughly equivalent to about 2% of the room rate." },
      { key: "cologne", label: "Cologne", pct: 5, note: "Cologne's culture tax (Kulturförderabgabe) runs 5% of the net room rate." },
      { key: "frankfurt", label: "Frankfurt", unit: "perPersonPerNight", rate: 2, note: "Frankfurt charges a flat 2 euros per person, per night, rather than a percentage." },
      { key: "other", label: "Elsewhere in Germany", pct: 0, note: "Most German towns and smaller cities charge no bed tax at all. A separate Kurtaxe applies in officially designated spa and resort towns, typically 1.50 to 4 euros per person per night." }
    ]
  },

  currencyHeading: "The euro, in plain terms.",
  facts: [
    { sym: "euro", k: "Quick conversion", v: "About 1.14 dollars to 1 euro in mid-2026, so a 10 euro meal is roughly $11.40, and 100 euros is about $114." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 5, 10, 20, 50, 100, 200 and 500 euros, though many small shops dislike anything above 50. Coins go from 1 cent to 2 euros, and Germans use them freely, exact change is expected and appreciated." },
    { sym: "card", k: "The Girocard isn't yours", v: "Most Germans pay with a Girocard, a domestic debit network that does not work for foreign visitors. Your Visa or Mastercard is a separate, sometimes pricier transaction for the merchant, which is part of why some small businesses skip cards altogether." },
    { sym: "tip", k: "Tipping is light", v: "Round up the bill rather than calculating a percentage. There is no US-style 18 to 20% expectation here, see the tipping section below." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "City bed taxes, and money back on shopping.",
    text: "Germany has no single national tourist tax. Instead, individual cities charge their own <b>bed tax</b>, added to your hotel bill on leisure stays. Berlin charges 7.5% of the room rate, Munich and Cologne charge 5%, Hamburg uses a sliding scale that works out to roughly 2%, and Frankfurt charges a flat 2 euros per night. Most smaller towns charge nothing. Separately, if you shop, non-EU visitors can reclaim part of Germany's 19% VAT (a reduced 7% applies to books, food and hotel stays). Ask for a tax-free form at the till, keep the goods unused, and get it stamped by customs when you leave the EU. After the refund operator's fee, expect back roughly 10 to 14%, not the full 19%."
  },

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Choosing your home currency at a card terminal or ATM (dynamic currency conversion) quietly adds 3 to 8%. Pick euros every time.",
    "<b>Cards are not as universal as they look.</b> A shop with a card reader on the counter can still be cash-only for amounts under 20 or 30 euros, or simply prefer cash. Ask before you order if you are not carrying cash.",
    "<b>Out-of-network ATM fees add up fast.</b> A foreign card at a standalone or wrong-network machine can cost 5 euros or more per withdrawal. Stick to Sparkasse or Cash Group machines, and read the fee on screen before confirming.",
    "<b>Don't leave coins on the table and walk off.</b> Tell the server the total you want to pay, tip included, before they run your card or hand back change. Walking away from change left on the table is read as forgetfulness, not a tip."
  ],

  tippingHeading: "Round up, don't calculate a percentage.",
  tipping: "Tipping in Germany is light and works differently than in the US. At a restaurant or bar, round up the bill, on a 23 euro tab, say \"25, bitte\" when you pay, rather than working out 18 to 20%. For a larger meal, an extra 5% on top is generous. Taxi drivers get the fare rounded up. Hotel porters or housekeeping can be left 1 to 2 euros, appreciated but not expected. Fast food counters, bakeries, supermarkets and self-service cafes get no tip at all. The key habit to know: state the total you want to pay, tip included, before the card reader is run or change is handed back, since Germans settle the tip in the moment rather than leaving cash behind afterward.",

  faqs: [
    { q: "Do I need cash in Germany?", a: "Yes, more than you would expect from a country with this reputation for efficiency. Supermarkets, chain restaurants and hotels take cards easily, but bakeries, market stalls, beer gardens, small family restaurants and paid restrooms often want cash. Keep 50 to 100 euros on hand and top up at a Sparkasse or Cash Group ATM." },
    { q: "What is the best ATM to use in Germany?", a: "Look for Sparkasse (red S logo), or the Cash Group network: Deutsche Bank, Commerzbank and Postbank. A foreign card is treated as out-of-network almost everywhere, so a fee is likely, sometimes 5 euros or more at independent machines. Read the on-screen fee and always decline the dollar conversion." },
    { q: "Should I pay in euros or dollars in Germany?", a: "Always euros. If a card terminal or ATM offers to charge you in dollars, decline. That dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
    { q: "Do you tip in Germany?", a: "Lightly, and by rounding up rather than calculating a percentage. Round a restaurant bill up to the next few euros, round up a taxi fare, and leave 1 to 2 euros for hotel porters or housekeeping. State your total, tip included, before the card is run, since leaving cash behind after paying is not how it is done here." },
    { q: "What is Germany's tourist tax?", a: "There is no single national tax. Individual cities charge their own bed tax on leisure stays: Berlin is 7.5% of the room rate, Munich and Cologne are 5%, Hamburg works out to roughly 2%, and Frankfurt charges a flat 2 euros a night. Most smaller towns charge nothing." },
    { q: "How much cash should I bring for a week in Germany?", a: "For two mid-range travelers, very roughly 300 to 400 euros (about $340 to $450) in day-to-day cash across a week, beyond your hotel, pulled in a couple of ATM visits. Cards cover supermarkets, chains and hotels; the cash covers bakeries, markets, beer gardens and the odd cash-only restaurant." }
  ]
};
