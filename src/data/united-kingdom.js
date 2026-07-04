export default {
  slug: "united-kingdom",
  live: true,
  name: "United Kingdom",
  from: "United States",
  checked: "Jun 2026",
  checkedISO: "2026-06-28",
  sources: {
    changed: "Sources added. Confirmed the UK ETA is 20 pounds and required before boarding, the Edinburgh 5% visitor levy starts 24 July 2026, and there is still no VAT refund for tourists in Great Britain.",
    links: [
      { label: "GOV.UK: the UK Electronic Travel Authorisation (ETA), who needs one, and the 20 pound fee", url: "https://www.gov.uk/eta", type: "gov" },
      { label: "City of Edinburgh Council: the visitor levy, 5% of the room from 24 July 2026, capped at five nights", url: "https://www.edinburgh.gov.uk/visitorlevy", type: "gov" },
      { label: "GOV.UK: tax-free shopping, why there is no VAT refund in Great Britain and the limited Northern Ireland scheme", url: "https://www.gov.uk/tax-on-shopping/taxfree-shopping", type: "gov" },
    ],
    judgment: "The daily cash share, tipping habits, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "999", note: "999 is the main emergency number, and 112 works as well.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  title: "Money in the United Kingdom (2026): Cards, Contactless, Cash, ATMs, Tipping and the Edinburgh Visitor Levy | True Trip Costs",
  description: "How to handle money in the UK as a US traveler in 2026: tap-to-pay beats cash almost everywhere, the dollar conversion trap, free LINK cashpoints vs fee machines, light tipping and the 12.5% service charge, why there is no VAT refund in Great Britain, the new Edinburgh visitor levy, and the UK ETA you now need before you fly. Checked June 2026.",
  h1: "Money in the UK, sorted.",
  lede: "A calm, current plan for the money side of your trip: what you can tap (almost everything), the few times you still want pound coins and notes, and the small rules and new charges that catch first-timers.",
  hero: {
    img: "/united-kingdom-hero.jpg",
    h: 1375,
    alt: "A quiet London street at dusk with string lights and bunting overhead, red-brick Victorian terraces and teal shopfronts, a red telephone box and a black cab, the silhouette of the Elizabeth Tower and Big Ben at the end of the street, a lone figure walking away down the wet cobbles, and a pint of golden ale with fish and chips and mushy peas on a wooden table in the foreground"
  },
  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',
  verdict: "The UK is extremely <b>card-friendly</b>, the most tap-first country in this set. Visa and Mastercard work almost everywhere, contactless is the default, Apple Pay and Google Pay are near universal, and in London you tap a card or phone straight onto the Tube, buses and trains with a daily fare cap, no Oyster card needed. Bring a <b>no-fee Visa or Mastercard</b> for nearly everything, keep <b>a little cash</b> in pounds for the odd market stall, small or rural pub, parking machine or tip, and pull pounds from a <b>free LINK cashpoint</b>, not a fee-charging or Euronet one. One rule above all: <b>always choose pounds, never dollars</b>. Tipping is light, often a 12.5% service charge already on the bill, and there is <b>no VAT refund</b> for tourists in Great Britain. One newer thing trips people before they even land: US visitors now need a <b>UK ETA</b> before they fly.",
  recentChange: {
    date: "Jul 2026",
    text: "Edinburgh becomes the first UK city with a percentage visitor levy. From <b>24 July 2026</b>, paid overnight stays in Edinburgh add <b>5% of the room rate</b> (charged before VAT, on the first five nights), collected by your accommodation rather than shown in the headline price. So budget roughly 5% on top of an Edinburgh hotel stay. <b>Glasgow</b> follows with its own 5% levy from January 2027. The rest of the UK still has no percentage tourist tax, though a few English cities add a small flat per-night charge."
  },
  meter: {
    heading: "The UK is the most card-first country here. You barely need cash.",
    cashPct: 14,
    note: "A rough feel for everyday spending. Cards and contactless work almost everywhere, in shops, restaurants, pubs, taxis and on London transport, and plenty of places are card-only. The little cash you might want is for the odd market stall, a small or rural pub, a parking or laundry machine, a place of worship, or a tip."
  },
  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa and Mastercard are taken nearly everywhere and contactless is the default. The single-tap limit on a physical card is usually around 100 pounds (the FCA dropped the mandatory cap in March 2026, but most banks kept it); for bigger amounts you insert the card and enter a PIN, or tap your phone, which has no limit. Apple Pay and Google Pay are near universal, including on London transport. Amex is patchier.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "A little, for the small stuff", p: "You can go almost cashless, but a few pounds are handy. Some market stalls, small or rural pubs, parking machines, places of worship and tips still prefer cash, and a 20 pound note is far easier to spend than a 50. Notes come in 5, 10, 20 and 50.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs (cashpoints)", verd: "Use a free LINK one, not Euronet", p: "Most of the UK's roughly 70,000 cashpoints are free to use through the LINK network, including bank machines, which note on screen that the withdrawal is free. Avoid fee-charging machines in some convenience stores and nightlife spots (about 1.75 to 3.95 pounds, shown on screen first) and the standalone Euronet ones that push dollar conversion. If a screen offers dollars, choose pounds.", cta: { label: "See low-fee cards", href: "#" } }
  ],
  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Get your <b>UK ETA</b> first. Since 25 February 2026, US visitors must hold one <b>before boarding</b>, and airlines check it. It costs <b>20 pounds</b> on the official UK ETA app or GOV.UK, lasts two years, and usually approves within minutes. Skip the lookalike sites that charge more.",
      "Bring a <b>no-foreign-fee Visa or Mastercard</b> with contactless for nearly everything, and pack a backup card from a different bank.",
      "Add a <b>no-foreign-fee debit card</b> for the rare cash. Charles Schwab refunds ATM fees worldwide; Wise and Revolut are low-fee.",
      "You will need very little cash, so plan to pull a small amount once you land rather than buying pounds at home."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the exchange counters and walk past any bright <b>Euronet</b> machine by the exits.",
      "If you want cash, use a <b>free LINK bank cashpoint</b> and <b>decline \"convert to dollars,\"</b> so you are charged in pounds at the real rate.",
      "Heading into London? You can <b>tap your card or phone</b> straight onto the Tube, the Elizabeth line and buses, with a daily fare cap. No Oyster card or paper ticket needed."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card or contactless</b> for almost everything: shops, restaurants, pubs, taxis and London transport.",
      "<b>A little cash</b> for market stalls, a small or rural pub, parking machines and tips.",
      "<b>Always choose pounds</b> on every card terminal and ATM screen, never dollars.",
      "In <b>London</b>, tap the same card or phone all day so the <b>fare cap</b> applies, and remember each traveler needs their own card."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in pounds, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds about 3 to 8%, and a Euronet machine can mark it up far more.",
      "This applies at <b>shop terminals and cashpoints</b> alike. The real rate from your own bank is almost always better, so decline the dollar offer every time."
    ], cta: null }
  ],
  cash: {
    rate: 0.76, cur: "GBP", round: 20, defaultIndex: 1,
    rateNote: "Rough guide at about 1.32 dollars to the pound in mid-2026, so roughly 0.76 pounds per dollar. The UK is the most card-first country here, so this is only the small, cash-in-hand slice of your spending.",
    styles: [ { n: "Budget", per: 65, cash: 0.20 }, { n: "Mid-range", per: 145, cash: 0.14 }, { n: "Comfort", per: 270, cash: 0.10 } ]
  },
  connectivity: {
    works: "Yes, and it is strong in the cities and most towns, where 4G is near-universal and 5G is widespread. Signal turns patchy in the Scottish Highlands, the Welsh mountains and the Lake District, and on remote roads and trails, where the odd dead zone is normal."
  },
  // TOURIST TAX (high-churn, verified Jun 2026). The UK has no national tourist tax, but a
  // few cities now add a small nightly charge, and the units differ by city, so each region
  // can override the unit. Edinburgh's is a percentage of the room (the whole room, not per
  // person), capped at 5 nights. Manchester and Liverpool charge a flat amount per room each
  // night through a business-district levy. Most of the UK, including London, charges nothing.
  tax: {
    unit: "flatPerNight",
    currency: "GBP",
    capNights: null,
    note: "Most of the UK, including London, has no hotel or tourist tax today, though more cities are looking at one.",
    regions: [
      { key: "edinburgh", label: "Edinburgh", unit: "percentOfRoom", pct: 5, capNights: 5, taxLabel: "Edinburgh visitor levy", note: "Edinburgh's visitor levy starts on 24 July 2026: 5% of the room rate each night, charged on the whole room (not per person) and capped at the first 5 nights." },
      { key: "manchester", label: "Manchester", rate: 1, note: "Manchester adds a City Visitor Charge of about 1 pound per room, per night, at participating city-centre hotels." },
      { key: "liverpool", label: "Liverpool", rate: 2, note: "Liverpool adds a City Visitor Charge of about 2 pounds per room, per night, at participating city-centre hotels." },
      { key: "other", label: "Elsewhere in the UK (including London)", rate: 0, note: "Most of the UK, including London, has no hotel or tourist tax today." }
    ]
  },
  currencyHeading: "The pound, in plain terms.",
  facts: [
    { sym: "gbp", k: "Quick conversion", v: "About 1.32 dollars to 1 pound in mid-2026, so pound prices run a bit higher than the same number of dollars: a 12 pound lunch is about 16 dollars, and 100 pounds is about 132. The symbol goes before the number, as in \"\u00A312\", and prices already include 20% VAT." },
    { sym: "coins", k: "Notes and coins", v: "Notes are 5, 10, 20 and 50 pounds, all polymer now, and the old paper ones have been withdrawn (some shops refuse them). The 1 and 2 pound pieces are coins, not notes, alongside pence, so keep a little change for parking, lockers and tips. A 20 is the easy everyday note, while a 50 can get side-eye in small shops." },
    { sym: "card", k: "Contactless is king", v: "The UK is one of the most tap-to-pay places anywhere: in 2024 about 95% of eligible in-store payments were contactless. Apple Pay and Google Pay are everywhere, including London transport, where you tap a card or phone and a daily cap limits what you pay, no Oyster needed. A physical card still usually taps up to about 100 pounds per go; above that you use a PIN or your phone." },
    { sym: "tip", k: "Tipping is light", v: "Britain is not a US-style tipping culture. Staff earn at least the legal minimum wage, about 12.21 pounds an hour, so tips are a bonus rather than a top-up. Many restaurants add a discretionary 12.5% service charge, and if it is on the bill, that is the tip. No tipping for drinks at a pub bar." }
  ],
  taxfree: {
    label: "Taxes and the visitor levy",
    heading: "No VAT refund in Britain, and a new Edinburgh charge.",
    text: "Two things to know, and both are the opposite of what many European trips teach you. First, <b>there is no tourist VAT refund in Great Britain</b> (England, Scotland and Wales). The VAT Retail Export Scheme was scrapped on 1 January 2021 and has not returned, so you cannot reclaim the 20% VAT on shopping you carry home, and there is no airport refund desk for tourists. The price you see already includes VAT. The only workaround is having a store <b>ship your purchase</b> directly abroad, which removes the VAT but adds shipping. <b>Northern Ireland</b> keeps a separate, limited refund scheme (a minimum of about 30 pounds per store, validated when you leave the UK or EU). Second, the UK has long had <b>no nationwide tourist tax</b>, but that is starting to change. <b>Edinburgh</b> launches a <b>5% visitor levy</b> on overnight stays from <b>24 July 2026</b> (on the room rate before VAT, capped at the first five nights), collected by your accommodation. <b>Glasgow</b> follows with 5% from January 2027, and <b>Wales</b> has approved a small per-night levy for later. A few English cities such as Manchester and Liverpool already add a flat charge of about 1 to 2 pounds per room per night. Everywhere else, nothing."
  },
  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> At a shop terminal or a cashpoint, choosing dollars (dynamic currency conversion) quietly adds about 3 to 8%, and a Euronet machine can mark it up much more. Pick pounds every time and let your own bank handle the exchange.",
    "<b>Skip Euronet and fee-charging cashpoints.</b> Euronet machines cluster at airports, big stations and tourist spots and charge around 1.75 to 1.99 pounds plus a pushy dollar prompt. Some convenience-store and nightlife machines charge up to about 3.95 pounds. Use a <b>free LINK</b> bank machine and read the on-screen fee before you confirm.",
    "<b>Get your UK ETA before you fly.</b> Since 25 February 2026, US visitors are turned away at boarding without one. It is 20 pounds on the official UK ETA app or GOV.UK and approves fast, but lookalike websites charge far more for the very same thing. Sort it before the airport, not at the gate.",
    "<b>Scottish and Northern Irish notes are real pounds, but England may balk.</b> Banks in Scotland (Bank of Scotland, RBS, Clydesdale) and Northern Ireland issue their own pound notes. They are genuine sterling and fine where they are issued, but they are not legal tender and some English shops refuse them, so spend them before you head south, or ask for Bank of England notes. All notes are polymer now, and old paper ones can be refused.",
    "<b>Check the bill before you tip.</b> Many restaurants, especially in central London and for larger groups, already add a <b>discretionary 12.5% service charge</b>. If it is there, that is your tip, so there is no need to add more, and you can politely ask to remove it if the service was poor. At a pub bar you do not tip for drinks at all."
  ],
  tippingHeading: "Tip lightly, and check the bill first.",
  tipping: "Britain is not a US-style tipping culture, and this catches a lot of first-timers. Staff are paid at least the national minimum wage, around 12.21 pounds an hour, so tips are a thank-you for good service rather than a way to cover someone's pay. In sit-down restaurants the norm is about 10 to 12.5% for good service, but check the bill first: many places, especially in central London and for larger groups, already add a discretionary 12.5% service charge, and if it is there you do not need to add anything on top. That charge is optional, and you can ask to have it removed if the service was poor. Thanks to a 2024 law, all tips and service charges must now go to the staff, so a card tip is fine and reaches them. At a pub you do not tip for drinks bought at the bar, though you can offer to get the bartender one for themselves. Cafes, counters and takeaways expect nothing, so round up or drop change in the jar if you like. Round up a taxi by roughly 10%, give a hotel porter 1 to 2 pounds a bag, leave a few pounds for housekeeping if you wish, and tip a free walking-tour guide about 5 to 10 pounds per person. Do not feel you must tip 15 to 20% the way you would at home.",
  faqs: [
    { q: "Do I need cash in the UK?", a: "Barely. The UK is one of the most card-friendly countries in the world, contactless works almost everywhere, including on London transport, and many places are card-only. Carry a small amount of pounds for the odd market stall, a small or rural pub, parking machines, places of worship and tips, and top up at a free LINK cashpoint if you run low." },
    { q: "Should I pay in pounds or dollars in the UK?", a: "Always pounds. If a card terminal or cashpoint offers to charge you in dollars, decline. That dynamic currency conversion adds roughly 3 to 8%, and a Euronet machine can be far worse. Choosing pounds lets your own bank handle the exchange at a better rate." },
    { q: "Which ATM should I use in the UK?", a: "A free LINK cashpoint, which most UK machines are, including bank machines, where the screen will say the withdrawal is free. Avoid fee-charging machines in some convenience stores and nightlife venues (about 1.75 to 3.95 pounds, shown on screen first) and the standalone Euronet machines that push dollar conversion. Always choose to be charged in pounds." },
    { q: "Do you tip in the UK, and what about the service charge?", a: "Only lightly. Staff earn a real wage, so tipping is optional. In restaurants, about 10 to 12.5% for good service, but check the bill first: many add a discretionary 12.5% service charge, and if it is there, that is the tip. You can ask to remove it if service was poor. Since a 2024 law, tips and service charges go to the staff, so paying the tip by card is fine. No tipping for drinks at a pub bar." },
    { q: "Can tourists get a VAT refund in the UK, and is there a tourist tax?", a: "No VAT refund in Great Britain. The tourist VAT refund scheme was abolished in 2021, so you cannot reclaim the 20% VAT on shopping carried home from England, Scotland or Wales (Northern Ireland keeps a separate, limited scheme). On tourist tax, there is no nationwide one, but Edinburgh starts a 5% visitor levy on overnight stays from 24 July 2026, capped at the first five nights and collected by your hotel, with Glasgow following in 2027 and a few English cities adding a small flat per-night charge." },
    { q: "Do US citizens need a visa or ETA for the UK?", a: "Not a visa for short visits, but yes an ETA. Since 25 February 2026, US visitors must have an approved UK Electronic Travel Authorisation before they board, and airlines check it. It costs 20 pounds through the official UK ETA app or GOV.UK, covers stays of up to six months, lasts two years, and is usually approved within minutes. Apply directly to avoid lookalike sites that charge more, and note the ETA does not cover the Republic of Ireland." },
    { q: "How much cash should I bring for a week in the UK?", a: "For two mid-range travelers, very roughly 100 to 200 pounds in day-to-day cash across a week, beyond your hotel, pulled in a cashpoint visit or two. Cards and contactless cover the rest, including transport. Adjust for how often you tap versus pay in cash, and remember London is the priciest part of the country." }
  ]
};
