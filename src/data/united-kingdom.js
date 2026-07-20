export default {
  slug: "united-kingdom",
  live: true,
  name: "United Kingdom",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-10",
  sources: {
    changed: "Re-checked July 2026. The UK ETA is confirmed at 20 pounds and required before boarding, the Edinburgh 5% visitor levy starts 24 July 2026, and there is still no VAT refund for tourists in Great Britain.",
    links: [
      { label: "GOV.UK: the UK Electronic Travel Authorisation (ETA), who needs one, and the 20 pound fee", url: "https://www.gov.uk/eta", type: "gov" },
      { label: "City of Edinburgh Council: the visitor levy, 5% of the room from 24 July 2026, capped at five nights", url: "https://www.edinburgh.gov.uk/visitorlevy", type: "gov" },
      { label: "GOV.UK: tax-free shopping, why there is no VAT refund in Great Britain and the limited Northern Ireland scheme", url: "https://www.gov.uk/tax-on-shopping/taxfree-shopping", type: "gov" },
    ],
    judgment: "The daily cash share, tipping habits, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "999", note: "999 is the main emergency number, and 112 works as well.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  region: "Europe",
  signals: { cardFriendliness: 5, cashNeed: 1, taxRisk: 3, atmRisk: 4 },
  title: "Money in the United Kingdom (2026): Cards, Contactless, Cash, ATMs, Tipping and the Edinburgh Visitor Levy | True Trip Costs",
  description: "How to handle money in the UK as a US traveler in 2026: tap-to-pay beats cash almost everywhere, the dollar conversion trap, free LINK cashpoints vs fee machines, light tipping and the 12.5% service charge, why there is no VAT refund in Great Britain, the new Edinburgh visitor levy, and the UK ETA you now need before you fly. Checked July 2026.",
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
    styles: [ { n: "Budget", per: 65, cash: 0.20, room: 100 }, { n: "Mid-range", per: 145, cash: 0.14, room: 190 }, { n: "Comfort", per: 270, cash: 0.10, room: 360 } ]
  },
  connectivity: {
    works: "Yes, and it is strong in the cities and most towns, where 4G is near-universal and 5G is widespread. Signal turns patchy in the Scottish Highlands, the Welsh mountains and the Lake District, and on remote roads and trails, where the odd dead zone is normal."
  },
  // TOURIST TAX (high-churn, verified Jul 2026). The UK has no national tourist tax, but a
  // few cities now add a small nightly charge, and the units differ by city, so each region
  // can override the unit. Edinburgh's is a percentage of the room (the whole room, not per
  // person), capped at 5 nights. Manchester and Liverpool charge a flat amount per room each
  // night through a business-district levy. Most of the UK, including London, charges nothing.
  // Typical economy round trip per person from major US gateways, as a verified
  // RANGE, never a point. Sourced from fare-tracker averages (Kayak, momondo,
  // Skyscanner published route data), deliberately wide to cover season and
  // gateway. HIGH-CHURN: re-verify on the tourist-tax cadence. The calculator
  // prefills the midpoint, feeds low/high into the confidence range until the
  // traveler enters their own fare, and hides the estimate if this block is absent.
  flight: { low: 500, high: 1100, checked: "Jul 2026", checkedISO: "2026-07-18" },
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

  // High-churn fees and taxes, each tracked on its own with a status, an effective
  // date, a primary source and the date we last checked it. Rendered as a small,
  // always-open card after the tax-free section. The ETA fee reached 20 pounds on
  // 8 April 2026; the Edinburgh levy starts 24 July 2026.
  keyFacts: [
    { label: "UK ETA fee", value: "20 pounds per person", status: "enacted", effective: "2026-04-08", source: "https://www.gov.uk/eta", checked: "2026-07-10" },
    { label: "Edinburgh visitor levy", value: "5% of the room price, capped at the first five nights", status: "enacted", effective: "2026-07-24", source: "https://www.edinburgh.gov.uk/visitorlevy", checked: "2026-07-10" }
  ],

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
  ],

  culture: {
    heading: "A few very British words go a long way",
    intro: "You will not need a phrasebook here, but a handful of very British words and a story or two mark you as a guest rather than a tourist. Remember too that the UK is four nations, England, Scotland, Wales and Northern Ireland, each proud of its own.",
    phrases: [
      { mean: "Thanks, and also bye, and a toast", say: "cheers", word: "Cheers" },
      { mean: "A line, and the art of waiting your turn", say: "kyoo", word: "Queue" },
      { mean: "A cup of tea", say: "KUP-uh", word: "Cuppa" },
      { mean: "The toilet", say: "loo", word: "Loo" },
      { mean: "A pound, in money", say: "kwid", word: "Quid" },
      { mean: "Thanks, very informal", say: "tah", word: "Ta" },
    ],
    tip: "The British queue for everything, and pushing in is a genuine faux pas, so find the back and wait your turn. <b>Cheers</b> does triple duty as thanks, goodbye and a toast, and a strong <b>cuppa</b> (a cup of tea) is offered in every situation, good or bad.",
    stories: [
      { img: "/united-kingdom-culture-1.jpg",
        alt: "WPA-style illustration of two actors performing on the wooden stage of a round open-air Elizabethan playhouse, timber galleries packed with onlookers and a standing crowd around the stage",
        h: "The wooden O",
        p: "Four hundred years on, the plays William Shakespeare wrote for this round wooden playhouse on the Thames are still performed the world over. In his day the cheapest ticket, a single penny, bought you a standing spot in the yard as a groundling, right at the actors' feet. Today's Globe is a faithful open-air rebuild, and you can still stand in the yard.",
        note: "Good to know: the rebuilt Globe opened in 1997" },
      { img: "/united-kingdom-culture-2.jpg",
        alt: "WPA-style illustration of a young man in a plain tunic drawing a glowing sword from an anvil set in a great grey stone in a misty forest clearing, a distant castle on a hill",
        h: "The once and future king",
        p: "Long before England was England, the legends tell of King Arthur, who drew a sword from a stone to prove he was the rightful king, gathered his knights at a round table so none sat above another, and was carried off to the isle of Avalon. Whether he ever lived is a puzzle historians still enjoy. The tales are woven right across Britain, from Tintagel in Cornwall to the great round table in Winchester.",
        note: "Good to know: the legend spans England, Wales and Cornwall" },
      { img: "/united-kingdom-culture-3.jpg",
        alt: "WPA-style illustration of the great standing stones of Stonehenge at dawn, robed figures gathered at the centre as the rising sun aligns through the arches over a heather meadow",
        h: "A calendar made of stone",
        p: "No one knows exactly why Stonehenge was raised on Salisbury Plain around 5,000 years ago, but its builders lined it up with the sun: at the summer solstice the sunrise appears through the great stones, and at midwinter the sunset. Some of the huge bluestones were hauled roughly 150 miles from Wales. It remains one of Europe's great mysteries.",
        note: "Good to know: it aligns with the summer and winter sun" },
    ],
    pride: "For a small set of islands, Britain has an outsized story: Shakespeare's plays, tea and the pub, football and the Proms, and four proud nations, England, Scotland, Wales and Northern Ireland, each with its own flag, food and turn of phrase. Call the whole country British, not English, and you will win a quiet nod."
  },

  // HUB-AND-SPOKE SPOKES. Data-driven, single-source, each independently dated,
  // rendered by components/Spoke.astro via src/pages/[slug]/[spoke].astro.
  spokes: [
    {
      slug: "eta",
      live: true,
      topic: "visas",
      title: "Do US citizens need an ETA for the UK? (2026) | True Trip Costs",
      description: "Yes: US citizens now need a UK ETA before they fly, even for a layover. What it is (not a visa), the £20 fee, the two-year validity, the only official ways to apply, and why to ignore the pricey lookalike sites. Checked July 2026.",
      h1: "Do US citizens need an ETA for the UK?",
      lede: "Short answer: yes, now you do, and it even applies to a layover. The UK ETA is not a visa, and it is quick and cheap, but only from the official source. Here is what it costs and how to get it right.",
      checked: "Jul 2026",
      checkedISO: "2026-07-08",
      answer: "Yes. US citizens now need a <b>UK ETA</b> (Electronic Travel Authorisation) approved <b>before they board</b>, including for a layover through a UK airport. It is <b>not a visa</b>, it is a quick online check like the US ESTA. It costs <b>£20</b>, lasts <b>2 years</b>, and comes only from the <b>official UK ETA app or gov.uk</b>. Most approvals land within minutes, but apply a few days ahead to be safe.",
      official: {
        label: "Official UK ETA, on gov.uk",
        url: "https://www.gov.uk/eta",
        note: "There are only two official ways to apply: the UK ETA app (it can scan your passport chip, which is easiest) or gov.uk. Both charge the same £20. Anything more than that is a third party adding a fee."
      },
      expediter: false,
      sections: [
        {
          h: "What it is, and what it is not",
          p: [
            "The ETA is a <b>digital travel authorization</b>, the UK's version of the US ESTA or Canada's eTA. It is <b>not a visa</b>: it does not let you work, study long-term, or stay beyond the visitor rules. It is linked electronically to the passport you apply with, so there is nothing to print, and you must travel on that same passport.",
            "It covers short visits, tourism, seeing family, business meetings and short study, and it lasts <b>2 years</b> (or until your passport expires), with multiple entries of up to <b>6 months</b> each. Every traveler needs their own, including children and infants."
          ]
        },
        {
          h: "What it costs, and the one place to get it",
          p: [
            "The fee is <b>£20</b> per person, roughly 25 US dollars, paid by card, and it is non-refundable. It went up from £16 in April 2026, so older guides may quote less.",
            "There are exactly two official routes: the <b>UK ETA app</b> or <b>gov.uk</b>. The app is easiest because it scans your passport chip and takes the photo for you. Both charge the same £20. A wall of other sites advertise ETA assistance and charge more to file the very same form, so go straight to the official app or site."
          ]
        },
        {
          h: "Yes, you need it even for a layover",
          p: [
            "This is the part that surprises people. If your cheap flight to Asia or Africa connects through <b>London or another UK airport</b>, you generally still need an ETA, even for a short transit, and often even if you never plan to leave the airport. The safe assumption for any UK connection is that you need one.",
            "British and Irish citizens, including dual citizens, <b>cannot</b> get an ETA and must travel on a UK or Irish passport instead. If you hold another passport alongside your US one, check which document you should travel on before you book."
          ]
        },
        {
          h: "How to apply, and when",
          p: [
            "It takes most people under ten minutes."
          ],
          steps: [
            "Download the UK ETA app, or open gov.uk and search for ETA. Use only the official app or gov.uk.",
            "Scan or enter your US passport details. The app can read the chip, which is quickest.",
            "Take the passport-style photo the app prompts for, and answer the short security questions honestly.",
            "Pay the £20 by card. You will get a confirmation with a reference number by email.",
            "Wait for the decision. Most Americans are approved within minutes, but allow up to 3 working days, so do not leave it to the airport."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a UK ETA in 2026?", a: "Yes. US citizens now need an approved UK ETA before boarding a flight to the UK, and it applies to short visits and to transit through UK airports. It is not a visa, it is a quick online authorization like the US ESTA. Apply on the official UK ETA app or gov.uk for £20, ideally a few days before you fly." },
        { q: "How much does the UK ETA cost, and how long does it last?", a: "It costs £20 per person, about 25 US dollars, and it went up from £16 in April 2026. It is valid for 2 years, or until your passport expires, and allows multiple visits of up to 6 months each. Every traveler needs their own, including children." },
        { q: "Do I need a UK ETA just for a layover?", a: "Usually yes. US citizens connecting through a UK airport generally need an ETA even for a short transit, and often even without leaving the airport. Treat any UK layover as needing one, and apply before you fly. Border and airline rules are strict, so do not risk boarding without it." },
        { q: "What is the official website for the UK ETA?", a: "The only official routes are the UK ETA app and gov.uk. Both charge the same £20 government fee. The app is easiest because it scans your passport chip. Many third-party sites charge more to file the identical form, so go straight to the official app or gov.uk and do not overpay." }
      ],
      sources: {
        links: [
          { label: "US Embassy in the UK: the official notice that from February 25, 2026, US citizens need an ETA to travel to or transit the UK", url: "https://uk.usembassy.gov/routine-message-important-changes-to-uk-entry-requirements-as-of-february-25-2026/", type: "gov" },
          { label: "UK Home Office: the official ETA factsheet with the current fee, two-year validity and how to apply", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/", type: "gov" },
          { label: "GOV.UK: the official ETA application and guidance", url: "https://www.gov.uk/eta", type: "gov" }
        ],
        judgment: "Entry rules and the fee change (the ETA rose from 16 to 20 pounds in April 2026), and transit exemptions carry fine print, so confirm on gov.uk before you travel. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      live: true,
      topic: "cash",
      title: "Do I need cash in the UK, or can I use cards? (2026) | True Trip Costs",
      description: "Barely any cash. The UK is nearly cashless: tap a card or phone almost everywhere, and all London transport runs on contactless (buses take no cash at all). Skip the Oyster, choose pounds not dollars. Checked July 2026.",
      h1: "Do I need cash in the UK, or can I use cards?",
      lede: "Short answer: you can do the whole trip without cash. Contactless runs everything, including all of London's transport, and many places no longer take notes at all. Here is how to pay, and the couple of things to get right.",
      checked: "Jul 2026",
      checkedISO: "2026-07-08",
      answer: "Cards, almost entirely. The UK is one of the most cashless places on earth, so you can <b>tap a card or phone nearly everywhere</b>, and some shops no longer take cash at all. All of <b>London's transport runs on contactless</b>, and buses across the UK <b>take no cash whatsoever</b>. You do <b>not need an Oyster card</b>: tapping your own contactless card or phone charges the same fares and caps. Keep maybe <b>20 to 40 pounds</b> for the rare cash-only spot, and choose <b>pounds, not dollars</b>, at the terminal.",
      sections: [
        {
          h: "You barely need cash",
          p: [
            "In 2026 the UK is <b>nearly cashless</b>. Contactless is accepted almost everywhere, by card or phone, and plenty of cafes and shops are <b>card-only</b>, some genuinely cannot make change. You can comfortably leave home with no pounds at all and get them from a cash machine if you want a little.",
            "The main quirk is the <b>100 pound contactless limit</b> most UK banks still apply: above that a card asks for chip and PIN, though paying with your <b>phone</b> (Apple Pay or Google Pay) has no such cap. Keep a small amount of cash, <b>20 to 40 pounds</b>, only for the occasional rural pub, market stall or tip."
          ]
        },
        {
          h: "London transport: just tap",
          p: [
            "This is the big one for visitors. <b>All London buses stopped taking cash years ago</b>, and the Tube, Overground and Elizabeth line all work by tapping a <b>contactless card or phone</b> at the gate. The system automatically applies the same daily and weekly <b>fare caps as an Oyster card</b>, so you always pay the cheapest fare, which means <b>you do not need to buy an Oyster</b> at all.",
            "Two small habits: <b>tap in and tap out</b> on the Tube and trains (buses are tap-in only), and do not tap a whole wallet against the reader, hold out the single card or phone you mean to use, or it may charge the wrong one."
          ]
        },
        {
          h: "Getting cash, and the dollar rule",
          p: [
            "If you want cash, use a <b>free-to-use cash machine</b> (most bank ATMs and the wider LINK network are free), and avoid the fee-charging machines tucked in some convenience stores. Apple Pay and Google Pay are accepted essentially everywhere cards are.",
            "When a UK card machine or ATM asks whether to charge in <b>US dollars or pounds, always choose pounds</b>. Picking dollars triggers dynamic currency conversion at a poor rate. Pounds lets your own bank do the conversion, which is cheaper."
          ]
        },
        {
          h: "Tipping, and one note",
          p: [
            "In restaurants a <b>service charge of around 12.5%</b> is often added to the bill; it is discretionary, so you can ask for it to be removed if service was poor, and you need not tip on top. In pubs where you order at the bar, <b>tipping is not expected</b>.",
            "For the fuller money picture and how it varies around the UK, see the <a href=\"/united-kingdom\">UK money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in the UK?", a: "Barely. The UK is nearly cashless: you can tap a card or phone almost everywhere, and many places are card-only. A whole trip with no cash is realistic. Keep maybe 20 to 40 pounds for the occasional rural pub, market stall or tip, and get it from a free cash machine if needed." },
        { q: "Do I need an Oyster card, or can I use contactless?", a: "You can use contactless and skip the Oyster. Tapping your own contactless card or phone on London's Tube, buses and trains charges the same fares and applies the same daily and weekly caps as an Oyster, so there is no saving from buying one. Just tap in, and tap out on rail." },
        { q: "Can I use cash on London buses?", a: "No. London buses have not accepted cash since 2014, and in 2026 no bus anywhere in the UK takes cash. You pay by tapping a contactless card or phone, or an Oyster or travelcard. On buses you tap in only, there is no need to tap out." },
        { q: "Should I choose pounds or dollars at the card machine in the UK?", a: "Always choose pounds. Selecting US dollars triggers dynamic currency conversion, a marked-up rate, so you pay more. Choosing pounds lets your own bank handle the conversion at a better rate. The same applies at cash machines: decline any offer to charge in dollars." }
      ],
      sources: {
        links: [
          { label: "Transport for London: contactless and mobile pay as you go, fares and the daily and weekly caps (London buses are cash-free)", url: "https://tfl.gov.uk", type: "gov" },
          { label: "UK Finance: payment-market data showing cash down to around a tenth of UK payments", url: "https://www.ukfinance.org.uk", type: "data" }
        ],
        judgment: "London fares and caps and the contactless limit can change (the caps held for 2026, and 100 pounds is the usual contactless ceiling), and the rest is our practical read, so confirm current fares with Transport for London before you travel. Checked July 2026."
      }
    },
    {
      slug: "bringing-your-pet",
      live: true,
      topic: "pets",
      title: "Bringing a dog or cat to Great Britain from the US (2026): the steps and the cargo catch | True Trip Costs",
      description: "Moving to the UK with a pet from the US: microchip, rabies and the 21-day wait, the dog tapeworm rule, the GB pet health certificate, and why your pet flies as cargo, not in the cabin. Checked July 2026.",
      h1: "Bringing your dog or cat to Great Britain.",
      lede: "Compared with Japan or Australia, the UK is quick: the lead time is weeks, not months, because there is no rabies blood test for pets coming from the US. The cost surprise is the flight, since pets almost always travel as cargo into Britain, not in the cabin. Here is the order, the official route, and what to budget.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "This is one of the faster moves. Because the US is a <b>listed country</b>, there is <b>no rabies blood test</b> and <b>no quarantine</b> if you follow the steps: microchip, rabies vaccination, then a <b>21-day wait</b> before travel. Dogs also need a <b>vet tapeworm treatment 24 to 120 hours before arrival</b>. A vet completes a <b>GB pet health certificate</b> that USDA APHIS endorses, and your pet must land <b>within 10 days</b>. The lead time is measured in <b>weeks</b>, but budget for your pet to fly as <b>cargo</b>, not in the cabin, which is the biggest cost.",
      sections: [
        {
          h: "The two numbers: lead time and cost",
          p: [
            "The two things that decide a UK move with a pet. <b>Lead time is short</b>, often just a few weeks, and it is set almost entirely by the 21-day wait after the rabies shot. If your pet is already microchipped and current on rabies, the paperwork and endorsement can be done in around a month. <b>Cost is moderate but front-loaded by the flight</b>: pets travelling from the US to Britain almost always fly as manifest cargo rather than in the cabin, and that air transport, plus the vet work and the APHIS endorsement, is where the money goes.",
            "There is no rabies blood test on this route, which is exactly why it is so much faster than Japan or Australia. The US is on Britain's list of countries whose pets can enter without a titer or quarantine, provided the steps are done correctly and in order."
          ]
        },
        {
          h: "The steps, in order",
          p: [
            "Great Britain means England, Scotland and Wales. Do these in sequence; the order is what keeps your pet out of quarantine."
          ],
          steps: [
            "Microchip first. Your pet needs an ISO microchip, implanted before, or at the same visit as, the rabies vaccination. A rabies shot given before the chip does not count and has to be redone.",
            "Rabies vaccination, then wait 21 full days. After the microchip, your pet gets a rabies shot, and you must wait at least 21 full days after the first vaccination before travelling. This sets the minimum entry age for a puppy at 15 weeks.",
            "Tapeworm treatment, dogs only. A vet must treat your dog for tapeworm with a product effective against Echinococcus multilocularis, no less than 24 hours and no more than 120 hours, that is 1 to 5 days, before you arrive in Britain, and record the date and time. Cats do not need this.",
            "GB pet health certificate, endorsed by APHIS. A USDA-accredited vet completes the Great Britain pet health certificate close to travel, and USDA APHIS endorses it. Your pet must arrive within 10 days of that endorsement.",
            "Travel by an approved route and carrier. Book an approved route into an approved UK airport, where the pet is received; Heathrow has an Animal Reception Centre. On most flights the pet travels as manifest cargo, not in the cabin."
          ]
        },
        {
          h: "Why your pet flies as cargo",
          p: [
            "This catches people who expect to fly with a small dog or cat under the seat. Britain does not allow pets to arrive in the aircraft cabin on ordinary commercial flights; they must come in as registered manifest cargo through an approved route, with assistance dogs the main exception. That means an airline-approved crate, a cargo booking, and a handling fee at the animal reception centre, which together are the largest part of the bill.",
            "The upside is that there is no rabies titer, no waiting for lab results, and no quarantine when the paperwork is right. The APHIS endorsement fee itself is modest, since no laboratory test is involved on this route."
          ]
        },
        {
          h: "Coming back to the US",
          p: [
            "The return trip is straightforward. Britain is rabies-free, so a dog flying home from the UK is on the CDC easy path, usually just a free CDC form receipt with no titer and no quarantine. The details are in our guide to <a href=\"/bringing-a-dog-into-the-us\">bringing a dog into the US</a>.",
            "To see how the UK compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."
          ]
        }
      ],
      official: {
        label: "GOV.UK: bringing your pet dog, cat or ferret to Great Britain",
        url: "https://www.gov.uk/bring-pet-to-great-britain",
        note: "Britain's own step-by-step rules, including the microchip and rabies order, the tapeworm treatment for dogs, and approved routes."
      },
      faqs: [
        { q: "Do I need a rabies blood test to bring my pet to the UK from the US?", a: "No. The US is a listed country under Britain's pet travel rules, so there is no rabies antibody (titer) test and no quarantine for pets coming directly from the US, as long as the microchip, rabies vaccination and 21-day wait are done in the correct order. This is why the UK route is much faster than Japan or Australia." },
        { q: "Can my dog or cat fly in the cabin to the UK?", a: "Generally no. Britain requires pets to arrive as manifest cargo through an approved route into an approved airport, not in the aircraft cabin, with assistance dogs the main exception. This is usually the biggest single cost of the move, because it means an approved crate, a cargo booking, and an animal reception centre handling fee." },
        { q: "How long does it take to bring a pet to Great Britain?", a: "Often just a few weeks. The lead time is set mainly by the 21-day wait after the first rabies vaccination. If your pet is already microchipped and current on rabies, the health certificate and APHIS endorsement can typically be completed in around a month. The pet must then arrive within 10 days of the endorsement." },
        { q: "Does my dog need a tapeworm treatment for the UK?", a: "Yes, dogs do, though cats do not. A vet must give a tapeworm treatment effective against Echinococcus multilocularis no less than 24 hours and no more than 120 hours, that is 1 to 5 days, before your dog arrives in Great Britain, and record the exact date and time. Miss the window and your dog may need re-treating or face refusal." }
      ],
      sources: {
        links: [
          { label: "GOV.UK: bringing your pet dog, cat or ferret to Great Britain, the official step-by-step rules", url: "https://www.gov.uk/bring-pet-to-great-britain", type: "gov" },
          { label: "GOV.UK: tapeworm treatment for dogs, the approved treatment and the 24 to 120 hour window", url: "https://www.gov.uk/bring-pet-to-great-britain/tapeworm-treatment-dogs", type: "gov" },
          { label: "USDA APHIS: pet travel from the United States to the United Kingdom and Great Britain, the US-side requirements and health certificate", url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-united-kingdom-great-britain-england-scotland", type: "gov" }
        ],
        judgment: "The rules are set by the UK government and administered on the US side by APHIS, not by us. This route is stable and well established, but routes, carriers and the exact paperwork can change, so confirm on the official GOV.UK and APHIS pages before you travel. Flight and vet costs vary, so treat any figure here as a starting point. Checked July 2026."
      }
    }
  ]
};
