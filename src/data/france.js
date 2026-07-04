export default {
  slug: "france",
  live: true,
  name: "France",
  from: "United States",
  checked: "Jun 2026",
  checkedISO: "2026-06-28",
  sources: {
    changed: "Sources added. Verified that Paris raised its taxe de sejour on 1 January 2026, so a mid-range hotel now runs about 6 euros a person per night and the top categories more, while most towns outside Paris stay at a euro or two. The detaxe VAT refund still starts at 100 euros spent in one store. The guide's figures are current.",
    links: [
      { label: "French government (service-public.fr): the Paris taxe de sejour rates that took effect 1 January 2026", url: "https://www.service-public.gouv.fr/particuliers/actualites/A17929?lang=en" },
      { label: "Paris Convention and Visitors Bureau: the tourist tax by accommodation category, per person per night", url: "https://parisjetaime.com/eng/article/tourist-tax-a616" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "112", note: "112 reaches every service, and 15 connects you straight to the medical service, the SAMU.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  title: "Money in France (2026): Cash, Cards, ATMs, Tipping and the VAT Refund | True Trip Costs",
  description: "How to handle money in France as a US traveler in 2026: cash vs card, which ATMs to use and which to avoid, the dollar conversion trap, tipping with service compris, the tourist tax, and the VAT refund. Checked June 2026.",
  h1: "Money in France, sorted.",
  lede: "A calm, current plan for the money side of your trip: what to tap, the little cash you still want, and the small rules that trip up first-timers.",
  hero: {
    img: "/france-hero.jpg",
    h: 1375,
    alt: "A quiet French village street at dusk with string lights overhead, blue shutters and red flowers, a bell tower and lavender fields in the distance, a lone figure walking away, and a bowl of cassoulet, a baguette and a glass of rose on a wooden table in the foreground"
  },
  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',
  verdict: "France runs on <b>cards</b>. Visa and Mastercard work almost everywhere, contactless (\"sans contact\") is the norm, and Apple Pay and Google Pay are widely accepted. You still want <b>a little cash</b> for bakeries, open-air markets, small cafes and tips. Bring a <b>no-fee Visa or Mastercard</b>, pull euros from a <b>bank ATM</b> rather than a Euronet kiosk, and one rule everywhere: <b>always choose euros, never dollars</b>.",
  meter: {
    heading: "Day to day, France is mostly card.",
    cashPct: 25,
    note: "A rough feel for everyday spending. Cities, shops, restaurants and transit are overwhelmingly card and contactless. The cash you do want is for bakeries, open-air markets, small village cafes, a few tips, and the odd shop with a card minimum. Out in the countryside, carry a little more."
  },
  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken nearly everywhere, and contactless is standard, including Apple Pay and Google Pay. Amex is less widely accepted. A few small shops set a card minimum, often around 5 to 10 euros.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "A little, for the small stuff", p: "You can get through most days on a card, but keep some euros for bakeries, open-air markets, small cafes, tips and rural spots. A few coins are handy for some public toilets too.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy, skip the Euronet ones", p: "Plentiful in towns and cities. Use a machine attached to a real bank (BNP Paribas, Credit Agricole, Societe Generale, LCL), not a standalone Euronet or Travelex kiosk, which charge more and push the dollar conversion.", cta: { label: "See fee-saving cards", href: "#" } }
  ],
  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> for almost everything, plus a backup card from a different bank.",
      "Add a <b>no-fee debit card</b> for ATM cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "Set your cards up for <b>contactless</b> and add them to Apple Pay or Google Pay. Most US issuers no longer need a travel notice, but it does not hurt to flag the trip."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters; their rates are poor.",
      "For cash, find a <b>bank ATM</b> rather than the bright <b>Euronet</b> kiosks near the exits, and <b>decline \"convert to USD.\"</b> Always choose euros.",
      "Pull a larger amount at once so any per-withdrawal fee stings less."
    ], cta: { label: "Find fee-saving cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Tap your card or phone</b> for almost everything: shops, restaurants, museums and transit.",
      "Keep <b>cash</b> for bakeries, open-air markets, small village cafes and tips.",
      "<b>Always choose euros</b> on the card terminal and the ATM screen, never dollars."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in euros, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "This is true at shop card terminals and at ATMs alike, and the standalone Euronet machines push it hardest."
    ], cta: null }
  ],
  cash: {
    rate: 0.88, cur: "EUR", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 1.14 dollars to the euro in mid-2026, so roughly 0.88 euros per dollar. France is card-first, so this is the smaller, cash-in-hand slice of your spending.",
    styles: [ { n: "Budget", per: 50, cash: 0.35 }, { n: "Mid-range", per: 105, cash: 0.25 }, { n: "Comfort", per: 190, cash: 0.15 } ]
  },
  connectivity: {
    works: "Yes across the cities, tourist regions and main routes, with excellent 4G and 5G growing in the bigger cities and along the TGV lines. Signal thins in the Alps and Pyrenees valleys and remote rural areas like inland Brittany and the Dordogne."
  },
  // TOURIST TAX (high-churn, verified Jun 2026). A nightly tourist tax (taxe de sejour)
  // charged per person and collected by your accommodation. The amount rises with the
  // hotel's rating, so the calculator uses a mid-range figure per city. Children under
  // 18 are exempt.
  tax: {
    unit: "perPersonPerNight",
    currency: "EUR",
    capNights: null,
    note: "A nightly tourist tax (taxe de sejour) charged per person and collected by your accommodation. The amount depends on the hotel rating, so this is a mid-range estimate. Children under 18 are exempt.",
    regions: [
      { key: "paris", label: "Paris", rate: 6, note: "Paris raised its tourist tax for 2026. Grand and palace hotels pay well above this mid-range figure, while simple hotels pay less." },
      { key: "nice", label: "Nice and the Riviera", rate: 3 },
      { key: "lyon", label: "Lyon", rate: 3 },
      { key: "other", label: "Elsewhere in France", rate: 1.5, note: "Most French towns charge a small per-person tax, commonly 1 to 3 euros a night by hotel rating. Some rural spots charge very little." }
    ]
  },
  currencyHeading: "The euro, in plain terms.",
  facts: [
    { sym: "euro", k: "Quick conversion", v: "About 1.14 dollars to 1 euro in mid-2026, so a 10 euro lunch is roughly $11 and 50 euros is about $57. Prices show the euro sign, often after the number, as in \"12 \u20AC\"." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 5, 10, 20, 50, 100, 200 and 500 euros, though many shops dislike anything above 50; coins go from 1 cent to 2 euros. Keep small notes and a few coins for bakeries, markets and toilets." },
    { sym: "card", k: "Contactless is king", v: "Tap to pay is everywhere, usually with no PIN under about 50 euros, and Apple Pay and Google Pay are widely accepted. Carry a chip-and-PIN card as backup for the odd machine that wants it." },
    { sym: "tip", k: "Service is included", v: "Restaurant and cafe prices include a service charge by law (\"service compris\"), so tipping is optional and small. There is no US-style percentage to track." }
  ],
  taxfree: {
    label: "Taxes and refunds",
    heading: "The tourist tax on your room, and money back on shopping.",
    text: "Two things to know. Most towns add a small <b>tourist tax (taxe de sejour)</b> to your lodging, charged per person per night, usually a euro or two, collected at the hotel or built into an Airbnb booking, and children under 18 are exempt. It is higher in Paris, which raised its rates in 2026, where a mid-range hotel can run around 6 euros and up per adult per night. Separately, non-EU visitors can claim a <b>VAT refund (detaxe)</b> on shopping. French VAT is 20%, and if you spend <b>over 100 euros in one store on the same day</b>, ask for a tax-free form (\"detaxe\"), show your passport, keep the goods unused, and validate at a <b>PABLO kiosk</b> when you leave the EU. After fees you get roughly 10 to 15% back. Apps like ZappTax or Wevat can combine smaller receipts to clear the threshold."
  },
  recentChange: {
    date: "Jan 2026",
    text: "<b>Paris raised its tourist tax.</b> From January 1, 2026 the city's nightly <i>taxe de sejour</i> went up, partly to fund transport and 2028 Olympic-legacy projects. Expect roughly 6 euros and up per adult per night at a mid-range Paris hotel, and more at higher categories, charged separately from your room rate. Children under 18 are still exempt, and most towns outside Paris stay at a euro or two."
  },
  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> At a card terminal or ATM, choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%. Pick euros every time.",
    "<b>Avoid the Euronet and Travelex kiosks.</b> The bright standalone machines at airports, stations and tourist squares charge high fees and push dollar conversion. One traveler was charged a flat 3.95 euro fee on a 20 euro withdrawal even after declining the conversion. Use a bank-branch ATM instead.",
    "<b>Watch your pockets in crowds.</b> Paris pickpockets work the metro, the steps at Sacre-Coeur and the lines at big sights. Keep cards and phone in a front or zipped pocket, and be wary of the friendship-bracelet and clipboard-petition distractions.",
    "<b>Some small spots are cash, or have a minimum.</b> A few bakeries, market stalls and village cafes are cash-preferred or set a card minimum around 5 to 10 euros, so keep a little cash and some coins on you.",
    "<b>Tap water is free.</b> Ask for \"une carafe d'eau\" at restaurants instead of paying for bottled water. It is normal, expected and safe."
  ],
  tippingHeading: "Service is included, so tip lightly.",
  tipping: "By French law, restaurant and cafe prices already include a service charge, shown as \"service compris,\" and staff earn a full wage. So tipping is optional and modest, not the US 15 to 20%. For good service, round up or leave a euro or two; in a nicer restaurant, about 5% is generous. Cash is best, since a tip left in cash goes straight to the staff, while the newer card-terminal tip prompts may be pooled or skipped. At a hotel, a euro or two for housekeeping or a couple of euros per bag for a porter is plenty, and a few euros for a helpful taxi driver or tour guide. There is never any pressure, and no one will think less of you for not tipping.",
  faqs: [
    { q: "Do I need cash in France?", a: "Not much. France is card-first, and contactless works almost everywhere, including Apple Pay and Google Pay. Keep some euros for bakeries, open-air markets, small village cafes, tips and the occasional shop with a card minimum, but you can put most spending on a card." },
    { q: "What ATM should I use in France?", a: "Use a machine attached to a real bank, such as BNP Paribas, Credit Agricole, Societe Generale or LCL. Avoid the standalone Euronet and Travelex kiosks at airports, stations and tourist squares; they charge more and push the dollar conversion. Always choose to be charged in euros." },
    { q: "Should I pay in euros or dollars in France?", a: "Always euros. If a card machine or ATM offers to charge you in dollars, decline. That dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
    { q: "Do you tip in France?", a: "Only lightly. Service is included by law (\"service compris\") and staff are paid a full wage, so tipping is optional. Round up or leave a euro or two for good service, or about 5% in a nicer restaurant. Cash is better than the card-terminal prompt." },
    { q: "What is the tourist tax and VAT refund in France?", a: "Most towns add a small taxe de sejour to your lodging, per person per night, usually a euro or two and higher in Paris, with under-18s exempt. Separately, non-EU visitors can reclaim VAT (detaxe) on shopping over 100 euros in one store on the same day: ask for the tax-free form, keep the goods unused, and validate at a PABLO kiosk when you leave. After fees you get roughly 10 to 15% back." },
    { q: "How much cash should I bring for a week in France?", a: "For two mid-range travelers, very roughly 200 to 300 euros in day-to-day cash across a week, beyond your hotel, pulled in one or two ATM visits. France is card-first, so most spending goes on a card and the cash is for small extras." }
  ]
};
