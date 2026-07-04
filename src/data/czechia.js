export default {
  slug: "czechia",
  live: true,
  name: "Czechia",
  from: "United States",
  checked: "Jun 2026",
  checkedISO: "2026-06-30",
  sources: {
    changed: "Sources added. Verified with the City of Prague that the local accommodation fee is 50 koruna per person per night (doubled from 21 in 2022), capped by national law, applying to the first 60 nights, with under-18s exempt. Standard Czech VAT is 21%, and non-EU visitors can reclaim it on shopping. The guide's figures are current.",
    links: [
      { label: "City of Prague: the local tourist fee, 50 koruna per person per night since 2022, under Act 565/1990", url: "https://sdileneubytovani.praha.eu/jnp/en/for_accommodation_providers/local_tourist_fee.html" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "112", note: "112 reaches every service, and 155 goes straight to an ambulance.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  region: "Europe",
  hook: "One of Europe's most card-friendly countries, with a small Prague city fee and a couple of tourist-money traps to dodge.",
  aliases: ["czech republic", "czech", "prague", "praha", "brno", "cesky krumlov", "karlovy vary", "plzen", "pilsen", "koruna", "czk", "bohemia", "moravia"],

  title: "Money in Czechia (2026): Cards, Cash, ATMs and the Prague City Fee | True Trip Costs",
  description: "How to handle money in Czechia as a US traveler in 2026: why cards and contactless work almost everywhere, which ATMs to use and which yellow ones to avoid, the dollar-conversion trap, the koruna versus the euro, Prague's per-night city fee, and light round-up tipping. Checked June 2026.",

  h1: "Money in Czechia, sorted.",
  lede: "A calm, current plan for the money side of your trip: why your tap-to-pay card covers almost everything, the two tourist traps that quietly cost the most, and the small nightly city fee in Prague.",
  hero: {
    img: "/czechia-hero.jpg",
    h: 1375,
    alt: "A colorful Prague old-town street at dusk with pastel townhouses and red-tiled roofs, string lights strung across the lane, the twin Gothic spires of the Tyn Church silhouetted against an orange sunset, a lone figure walking away down the cobblestones, and a plate of roast pork with bread dumplings, red cabbage and pickles beside a tall glass of golden Czech beer on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "Czechia is one of Europe's most card-friendly countries, and Prague is close to tap-to-pay everywhere. Bring a <b>no-foreign-fee Visa or Mastercard</b> and you can pay for almost everything by contactless card, phone or watch. Keep a little cash, <b>about 1,000 to 2,000 koruna</b>, for pubs outside the center, market stalls, tips and paid restrooms, and pull it from a <b>bank ATM</b> (ČSOB, Komerční banka, Česká spořitelna, Raiffeisenbank), never a bright yellow Euronet machine. Two habits save the most money: <b>always choose koruna, never dollars</b>, and skip the tourist-area street exchange booths. If you are staying in Prague, add the small nightly city fee to your budget.",

  meter: {
    heading: "Very card-friendly, with a little cash for pubs and small towns.",
    cashPct: 30,
    note: "A rough feel for everyday spending. Cards and contactless work almost everywhere in Prague and the cities, on transit, in shops, restaurants and supermarkets. You still want a little koruna for neighborhood pubs, market stalls, small-town bakeries, tips and paid public toilets, and cash leans more useful the further you get from the tourist center."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken nearly everywhere in cities and towns, contactless is the norm, and Apple Pay and Google Pay are widely accepted. Amex is patchier at small spots. The odd neighborhood pub, bakery or market stall is still cash only or sets a small card minimum.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "A little, for the small stuff", p: "You do not need much. Keep about 1,000 to 2,000 Kč in small notes for pubs off the tourist strip, markets, tips, paid restrooms and small towns. A 200 note is far easier to spend than a 2,000.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Easy, but avoid the yellow ones", p: "Bank ATMs (ČSOB, Komerční banka, Česká spořitelna, Raiffeisenbank, UniCredit) are all over the cities. Avoid the bright yellow standalone Euronet machines at tourist sites, which charge the most and push the dollar conversion. Read the on-screen fee and decline \"convert to dollars.\"", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> with contactless for nearly everything, plus a backup card from a different bank.",
      "Get a <b>no-foreign-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "You will need little cash, so plan to pull a modest amount of koruna once you land rather than buying it at home."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters and currency kiosks, the rates are poor.",
      "Pull koruna from a <b>bank ATM</b> (ČSOB, Komerční banka, Česká spořitelna, Raiffeisenbank) and <b>decline \"convert to USD.\"</b>",
      "Avoid the bright yellow Euronet ATMs, even the ones at the airport and in the arrivals hall."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card or phone</b> for shops, supermarkets (Albert, Billa, Lidl, Tesco), restaurants, museums and transit.",
      "<b>Cash</b> for neighborhood pubs, market stalls, small-town bakeries, tips and paid public toilets.",
      "In tourist-area restaurants, check the bill for a cover charge (couvert) or service charge before you add a tip.",
      "<b>Always choose koruna</b>, never dollars, on every card terminal and ATM screen."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in koruna, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "Ignore the \"0% commission\" street exchange booths; a bank ATM gives you a fairer rate with less hassle."
    ], cta: null }
  ],

  cash: {
    rate: 22, cur: "CZK", round: 100, defaultIndex: 1,
    rateNote: "Rough guide at about 22 koruna to the dollar in mid-2026, so 100 Kč is roughly $4.50 and 1,000 Kč about $45. The koruna moves against the dollar, so check a current converter before you travel.",
    styles: [
      { n: "Budget",    per: 45,  cash: 0.3 },
      { n: "Mid-range", per: 100, cash: 0.25 },
      { n: "Comfort",   per: 240, cash: 0.2 }
    ]
  },

  connectivity: {
    works: "Very good, and cheap. The three networks, O2, T-Mobile and Vodafone, all give strong 4G and growing 5G across Prague, the other cities and most of the countryside, with only the odd dead spot in deep forest or on rural train lines. A local prepaid SIM is easy to buy, and eSIMs from Airalo, Nomad, Ubigi or Holafly work well if your phone supports them. You do not need mobile data to pay for anything, cards and contactless stand on their own, so data is really just for maps, transit apps and calling a taxi."
  },

  // TOURIST TAX / FEES (high-churn, verified to Jun 2026 knowledge; confirm the Prague figure).
  // Czechia levies a local accommodation fee ("poplatek z pobytu"), capped by national law at
  // 50 Kč per person per night. Municipalities set their own rate up to that cap: Prague charges
  // the full 50 Kč, many tourist towns charge up to it, and lots of small places charge nothing.
  // Children under 18 are exempt, and the fee applies only to the first 60 consecutive nights.
  tax: {
    unit: "perPersonPerNight",
    currency: "CZK",
    capNights: 60,
    note: "A small local accommodation fee, capped by national law at 50 Kč per person, per night, and added to your hotel bill. The rate is set by each municipality up to that cap. Children under 18 are exempt, and it applies only to the first 60 consecutive nights.",
    regions: [
      { key: "prague", label: "Prague", rate: 50, note: "Prague charges the full national maximum of 50 Kč per person, per night." },
      { key: "towns", label: "Other cities and tourist towns", rate: 30, note: "Karlovy Vary, Český Krumlov, Brno, Plzeň and other towns set their own fee up to the 50 Kč cap; many popular ones are at or near it, so this is a middle estimate." },
      { key: "other", label: "Villages and countryside", rate: 0, note: "Many small municipalities charge no accommodation fee at all." }
    ]
  },

  currencyHeading: "The koruna, in plain terms.",
  facts: [
    { sym: "coins", k: "Quick conversion", v: "At about 22 koruna to the dollar in mid-2026, 100 Kč is roughly $4.50, 500 Kč about $23, and 1,000 Kč about $45. To sanity-check a price fast, divide the koruna figure by 22." },
    { sym: "smallnotes", k: "Notes and coins", v: "Notes run 100, 200, 500, 1,000, 2,000 and 5,000 Kč; coins are 1, 2, 5, 10, 20 and 50 Kč. Small shops and pubs dislike breaking the 2,000 and 5,000, so ask the ATM for a mix where you can, and spend the big notes in supermarkets." },
    { sym: "usd", k: "It's koruna, not euros", v: "Czechia is in the EU but does not use the euro; it uses the koruna (Kč). Some tourist-area hotels, shops and restaurants will take euros, but the rate they give is poor, so pay in koruna whenever you can." },
    { sym: "tip", k: "Tipping is light", v: "No US-style percentage is expected. Round up, or leave about 10% for good restaurant service, usually by telling the server the total when you pay. See the tipping section below." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "A small city fee, plus money back on shopping.",
    text: "Prague and many Czech tourist towns add a small <b>local accommodation fee</b> to your room, capped by national law at <b>50 Kč per person, per night</b> (Prague charges the full amount), with <b>children under 18 exempt</b>. Everyday prices already include VAT, a <b>21%</b> standard rate with a reduced <b>12%</b> on things like hotel stays and restaurant food, so the figure on the tag or menu is what you pay. If you shop, non-EU visitors can reclaim part of the 21% VAT on goods (not services): spend <b>over 2,000 Kč</b> in one store, ask for a tax-free form, keep the goods unused, and have customs stamp it when you leave the EU. After the refund operator's fee, expect back roughly 12 to 17%, not the full 21%. There is no separate departure tax; it is built into your airfare."
  },

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Card terminals and ATMs in tourist areas love to offer to charge you in dollars (dynamic currency conversion). It quietly adds 3 to 8%. Choose koruna every time.",
    "<b>Skip the bright yellow Euronet ATMs.</b> They cluster around the tourist sights, charge high fees, and push the dollar-conversion trick. Use a bank machine instead: ČSOB, Komerční banka, Česká spořitelna, Raiffeisenbank or UniCredit.",
    "<b>Avoid the street exchange booths.</b> The tourist-area kiosks (\"směnárna\") that advertise \"0% commission\" often give a terrible rate, or quote one rate and hand over less. A Czech law lets you cancel a bad exchange within three hours, but it is far simpler to pull koruna from a bank ATM and skip them.",
    "<b>Read the bill, and pick your taxi.</b> Some tourist-area restaurants add a cover charge (couvert) for bread or a service charge, so check before you tip. For taxis, order through Bolt or Uber or have your hotel call one, rather than hailing on the street, where overcharging is a long-running Prague problem."
  ],

  tippingHeading: "Round up, or about 10% for good service.",
  tipping: "Tipping in Czechia is light and not the US 18 to 20%. In a restaurant, leave around 10% for good service, or just round up at a casual spot. The local habit is to tell the server the total you want to pay, tip included, when they take your card or cash, rather than leaving coins on the table and walking off. Card terminals often have no tip line, so a <b>cash tip</b> is the easy way to do it. In tourist-area restaurants, check whether a service charge is already on the bill before adding more. Round up for taxis and in pubs, and leave 20 to 50 Kč for hotel porters or housekeeping. None of it is obligatory; staff are paid a wage.",

  faqs: [
    { q: "Do I need cash in Czechia?", a: "Not much. Prague and the Czech cities are very card-friendly, with contactless almost everywhere. Keep about 1,000 to 2,000 Kč on hand for neighborhood pubs, markets, tips and paid restrooms, and top up at a bank ATM if you run low. Cards and your phone cover nearly everything else." },
    { q: "Should I pay in koruna, dollars or euros in Czechia?", a: "Always koruna. If a card terminal or ATM offers to charge you in dollars, decline; that dynamic currency conversion adds roughly 3 to 8%. And although some tourist spots accept euros, the rate they give is poor, so the koruna price is the better deal." },
    { q: "What is the best ATM to use in Prague?", a: "Use a bank-branded machine: ČSOB, Komerční banka, Česká spořitelna, Raiffeisenbank or UniCredit. Avoid the bright yellow standalone Euronet ATMs that cluster around the tourist sights, which charge high fees and push the dollar conversion. Read the on-screen fee and decline \"convert to dollars.\"" },
    { q: "Do you tip in Czechia?", a: "Lightly. Around 10% for good restaurant service, or just round up at casual spots and for taxis, and 20 to 50 Kč for hotel porters or housekeeping. Tell the server the total you want to pay, tip included, when they take your card or cash; a cash tip is easiest since terminals often have no tip line. Check for a service charge before adding more." },
    { q: "What is Czechia's tourist tax?", a: "A local accommodation fee, capped nationally at 50 Kč per person, per night, and added to your hotel bill. Prague charges the full 50 Kč; other towns set their own up to that cap, and many small places charge nothing. Children under 18 are exempt, and it applies only to the first 60 consecutive nights." },
    { q: "How much cash should I bring for a week in Czechia?", a: "For two mid-range travelers, very roughly 3,000 to 5,000 Kč (about $140 to $230) in day-to-day cash across a week beyond your hotel, pulled from a bank ATM once or twice. Cards and your phone cover the great majority of spending; the cash is for pubs, markets, tips and the odd cash-only spot." }
  ]
};
