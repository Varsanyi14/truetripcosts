export default {
  slug: "united-kingdom",
  iso2: "gb",
  live: true,
  name: "United Kingdom",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-10",
  sources: {
    changed: "Re-checked July 2026. The UK ETA is confirmed at 20 pounds and required before boarding, the Edinburgh 5% visitor levy takes effect 24 July 2026 (5% of the room, capped at five nights), and there is still no VAT refund for tourists in Great Britain.",
    links: [
      { label: "GOV.UK: the UK Electronic Travel Authorisation (ETA), who needs one, and the 20 pound fee", url: "https://www.gov.uk/eta", type: "gov" },
      { label: "City of Edinburgh Council: the visitor levy, 5% of the room rate from 24 July 2026, capped at five nights", url: "https://www.edinburgh.gov.uk/visitorlevy", type: "gov" },
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
    text: "Edinburgh is the first UK city with a percentage visitor levy. From <b>24 July 2026</b>, paid overnight stays in Edinburgh carry a <b>5% levy on the room rate</b> (charged before VAT, on the first five nights), collected by your accommodation rather than shown in the headline price. Budget roughly 5% on top of an Edinburgh hotel stay. <b>Glasgow</b> follows with its own 5% levy from 25 January 2027. The rest of the UK still has no percentage tourist tax, though a few English cities add a small flat per-night charge."
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
      { key: "edinburgh", label: "Edinburgh", unit: "percentOfRoom", pct: 5, capNights: 5, taxLabel: "Edinburgh visitor levy", note: "Edinburgh's visitor levy applies from 24 July 2026: 5% of the room rate each night, charged on the whole room (not per person) and capped at the first 5 nights." },
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
    text: "Two things to know, and both are the opposite of what many European trips teach you. First, <b>there is no tourist VAT refund in Great Britain</b> (England, Scotland and Wales). The VAT Retail Export Scheme was scrapped on 1 January 2021 and has not returned, so you cannot reclaim the 20% VAT on shopping you carry home, and there is no airport refund desk for tourists. The price you see already includes VAT. The only workaround is having a store <b>ship your purchase</b> directly abroad, which removes the VAT but adds shipping. <b>Northern Ireland</b> keeps a separate, limited refund scheme (a minimum of about 30 pounds per store, validated when you leave the UK or EU). Second, the UK has long had <b>no nationwide tourist tax</b>, but that is starting to change. <b>Edinburgh</b> now charges a <b>5% visitor levy</b> on overnight stays (from <b>24 July 2026</b>, on the room rate before VAT, capped at the first five nights), collected by your accommodation. <b>Glasgow</b> follows with 5% from 25 January 2027, and <b>Wales</b> has approved a small per-night levy for later. A few English cities such as Manchester and Liverpool already add a flat charge of about 1 to 2 pounds per room per night. Everywhere else, nothing."
  },

  // High-churn fees and taxes, each tracked on its own with a status, an effective
  // date, a primary source and the date we last checked it. Rendered as a small,
  // always-open card after the tax-free section. The ETA fee reached 20 pounds on
  // 8 April 2026; the Edinburgh levy starts 24 July 2026.
  keyFacts: [
    { label: "UK ETA fee", value: "20 pounds per person", status: "enacted", effective: "2026-04-08", source: "https://www.gov.uk/eta", checked: "2026-07-10" },
    { label: "Edinburgh visitor levy", value: "5% of the room price, capped at the first five nights", status: "enacted", effective: "2026-07-24", source: "https://www.edinburgh.gov.uk/visitorlevy", checked: "2026-07-21" }
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
    { q: "Can tourists get a VAT refund in the UK, and is there a tourist tax?", a: "No VAT refund in Great Britain. The tourist VAT refund scheme was abolished in 2021, so you cannot reclaim the 20% VAT on shopping carried home from England, Scotland or Wales (Northern Ireland keeps a separate, limited scheme). On tourist tax, there is no nationwide one, but Edinburgh charges a 5% visitor levy on overnight stays from 24 July 2026, capped at the first five nights and collected by your accommodation, with Glasgow following from 25 January 2027 and a few English cities adding a small flat per-night charge." },
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
      slug: "tipping",
      glance: [
        { k: "Restaurants", v: "Often a 12.5% service charge" },
        { k: "The charge", v: "Discretionary, can be removed" },
        { k: "Pubs", v: "No tip at the bar" },
        { k: "Since 2024", v: "All tips go to staff" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in the UK: the service charge, and what you actually owe (2026) | True Trip Costs",
      description: "How tipping works in the UK for US travelers in 2026: the discretionary 12.5% restaurant service charge, when to tip at pubs and taxis, and the 2024 law that sends all tips to staff. Checked July 2026.",
      h1: "Tipping in the UK",
      lede: "The UK tips more than most of Europe but far less than the US. The main thing to watch is the discretionary service charge already on restaurant bills, which is optional. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "In the UK, sit-down restaurants often add a <b>discretionary service charge of about 12.5%</b> to the bill. It is <b>optional</b>: if service was poor you can ask for it to be <b>removed</b>, and if it is there you <b>need not tip on top</b>. If no service charge is added, <b>10 to 15%</b> is customary at table-service restaurants. At <b>pubs</b>, there is <b>no tipping</b> when you order at the bar. Round up for <b>taxis</b>. Since a <b>2024 law</b>, all tips must go to staff, so a card tip now reaches them, though <b>cash</b> is still simplest.",
      sections: [
        {
          h: "The discretionary service charge",
          icon: "receipt",
          key: { fig: "12.5%", tag: "Optional, check the bill", text: "Sit-down restaurants often add about 12.5% as a discretionary service charge. If service was poor you can ask to remove it, and you need not tip on top.", tone: "amber" },
          p: [
            "Most <b>sit-down restaurants</b> add a <b>discretionary service charge</b>, typically <b>12.5%</b>, straight onto the bill. The word <b>discretionary</b> matters: it is <b>optional</b>. If service was poor, you can politely <b>ask for it to be removed</b>, and no one will object.",
            "If the service charge is <b>already on the bill</b>, that is the tip, so you <b>do not need to add more</b>. If <b>no</b> service charge is shown, <b>10 to 15%</b> is the customary tip at a table-service restaurant."
          ]
        },
        {
          h: "Pubs, taxis and the rest",
          icon: "gbp",
          key: { fig: "No pub tip", tag: "Ordering at the bar", text: "There is no tipping at a pub when you order at the bar. Round up a taxi fare, or about 10% for a good black cab.", tone: "teal" },
          p: [
            "At a <b>pub</b>, when you <b>order and pay at the bar</b>, there is <b>no tipping</b>. For table service in a gastropub or restaurant, the restaurant rules above apply. You can offer to <b>buy the bartender a drink</b> in a traditional pub, but it is not expected.",
            "For <b>taxis</b>, <b>round up</b> to the nearest pound, or about <b>10%</b> for a good black-cab driver. <b>Hotel porters</b>, <b>1 to 2 pounds a bag</b>; housekeeping, a pound or two a day if you like. Coffee-shop tip jars are entirely optional."
          ]
        },
        {
          h: "The 2024 tips law, and paying",
          icon: "cash",
          key: { fig: "All to staff", tag: "The 2024 law", text: "Since October 2024, employers must pass on 100% of tips to workers, so a card tip now reaches staff. Cash is still the simplest way.", tone: "teal" },
          p: [
            "A <b>2024 law</b> (the Employment (Allocation of Tips) Act, in force from <b>1 October 2024</b>) requires employers to pass on <b>100% of tips</b> to workers, with no deductions. So a <b>card tip now reaches the staff</b>, unlike in the past when some was skimmed.",
            "Even so, <b>cash</b> is the simplest, and it goes directly to the person who served you. Keep a few <b>pound coins and small notes</b> for tips and taxis."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in the UK?", a: "Yes, but less than in the US. Sit-down restaurants often add a discretionary 12.5% service charge, which is optional and can be removed if service was poor. If none is added, 10 to 15% is customary. There is no tipping at a pub when you order at the bar." },
        { q: "What is the service charge on UK restaurant bills?", a: "A discretionary charge, usually 12.5%, added to sit-down restaurant bills. Discretionary means optional: you can ask for it to be removed, and if it is there you need not tip on top. If it is not added, 10 to 15% is customary." },
        { q: "Do you tip at pubs in the UK?", a: "Not when you order and pay at the bar. For table service in a gastropub or restaurant, normal restaurant tipping applies. In a traditional pub you can offer to buy the bartender a drink, but it is not expected." },
        { q: "Do UK card tips reach the staff?", a: "Yes, since a 2024 law. The Employment (Allocation of Tips) Act, in force from 1 October 2024, requires employers to pass 100% of tips to workers with no deductions. Cash is still the simplest way, and goes directly to the person who served you." }
      ],
      sources: {
        links: [
          { label: "US State Department: United Kingdom country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/UnitedKingdom.html", type: "gov" }
        ],
        judgment: "UK tipping norms are cultural, but the 2024 Employment (Allocation of Tips) Act is a real law requiring all tips to reach staff. Amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "eta",
      glance: [
        { k: "Visa", v: "Not a visa, an ETA (like ESTA)" },
        { k: "Cost", v: "£20, lasts 2 years" },
        { k: "Layover", v: "Needed even for a connection" },
        { k: "Where", v: "Official UK ETA app or gov.uk" }
      ],
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
          icon: "phoneok",
          key: { fig: "Like ESTA", tag: "Not a visa", text: "The ETA is a digital travel authorization, the UK version of the US ESTA. It does not let you work or study long-term, and it must be approved before you board.", tone: "teal" },
          p: [
            "The ETA is a <b>digital travel authorization</b>, the UK's version of the US ESTA or Canada's eTA. It is <b>not a visa</b>: it does not let you work, study long-term, or stay beyond the visitor rules. It is linked electronically to the passport you apply with, so there is nothing to print, and you must travel on that same passport.",
            "It covers short visits, tourism, seeing family, business meetings and short study, and it lasts <b>2 years</b> (or until your passport expires), with multiple entries of up to <b>6 months</b> each. Every traveler needs their own, including children and infants."
          ]
        },
        {
          h: "What it costs, and the one place to get it",
          icon: "gbp",
          key: { fig: "£20", tag: "App or gov.uk only", text: "The fee is £20 per person, roughly $25, paid by card and non-refundable. It went up from £16 in April 2026, so older guides quote less. Use only the official UK ETA app or gov.uk.", tone: "teal" },
          p: [
            "The fee is <b>£20</b> per person, roughly 25 US dollars, paid by card, and it is non-refundable. It went up from £16 in April 2026, so older guides may quote less.",
            "There are exactly two official routes: the <b>UK ETA app</b> or <b>gov.uk</b>. The app is easiest because it scans your passport chip and takes the photo for you. Both charge the same £20. A wall of other sites advertise ETA assistance and charge more to file the very same form, so go straight to the official app or site."
          ]
        },
        {
          h: "Yes, you need it even for a layover",
          icon: "plane",
          key: { tag: "Layovers count", text: "If your flight to Asia or Africa connects through London or another UK airport, you generally still need an ETA, even for a short layover without leaving the airport.", tone: "amber" },
          p: [
            "This is the part that surprises people. If your cheap flight to Asia or Africa connects through <b>London or another UK airport</b>, you generally still need an ETA, even for a short transit, and often even if you never plan to leave the airport. The safe assumption for any UK connection is that you need one.",
            "British and Irish citizens, including dual citizens, <b>cannot</b> get an ETA and must travel on a UK or Irish passport instead. If you hold another passport alongside your US one, check which document you should travel on before you book."
          ]
        },
        {
          h: "How to apply, and when",
          icon: "qr",
          key: { fig: "10 min", tag: "Do it in advance", text: "It takes most people under ten minutes in the app, but apply before you fly since approval is not always instant. Have your passport and a card ready.", tone: "teal" },
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
      glance: [
        { k: "Currency", v: "Pound sterling (GBP)" },
        { k: "Cards", v: "Nearly everywhere, some card-only" },
        { k: "London transport", v: "Just tap, no Oyster needed" },
        { k: "Cash for", v: "Rarely, a few small places" }
      ],
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
          icon: "phoneok",
          key: { fig: "Cashless", tag: "Tap everywhere", text: "In 2026 the UK is nearly cashless. Contactless is accepted almost everywhere by card or phone, and plenty of cafes and shops are card-only and cannot make change.", tone: "teal" },
          p: [
            "In 2026 the UK is <b>nearly cashless</b>. Contactless is accepted almost everywhere, by card or phone, and plenty of cafes and shops are <b>card-only</b>, some genuinely cannot make change. You can comfortably leave home with no pounds at all and get them from a cash machine if you want a little.",
            "The main quirk is the <b>100 pound contactless limit</b> most UK banks still apply: above that a card asks for chip and PIN, though paying with your <b>phone</b> (Apple Pay or Google Pay) has no such cap. Keep a small amount of cash, <b>20 to 40 pounds</b>, only for the occasional rural pub, market stall or tip."
          ]
        },
        {
          h: "London transport: just tap",
          icon: "card",
          key: { fig: "Just tap", tag: "No Oyster needed", text: "All London buses stopped taking cash years ago, and the Tube, Overground and Elizabeth line all work by tapping a contactless card or phone. You do not need an Oyster card.", tone: "teal" },
          p: [
            "This is the big one for visitors. <b>All London buses stopped taking cash years ago</b>, and the Tube, Overground and Elizabeth line all work by tapping a <b>contactless card or phone</b> at the gate. The system automatically applies the same daily and weekly <b>fare caps as an Oyster card</b>, so you always pay the cheapest fare, which means <b>you do not need to buy an Oyster</b> at all.",
            "Two small habits: <b>tap in and tap out</b> on the Tube and trains (buses are tap-in only), and do not tap a whole wallet against the reader, hold out the single card or phone you mean to use, or it may charge the wrong one."
          ]
        },
        {
          h: "Getting cash, and the dollar rule",
          icon: "atm",
          key: { fig: "Free ATMs", tag: "Use LINK machines", text: "If you want cash, use a free-to-use machine (most bank ATMs and the LINK network are free) and avoid fee-charging ones in some shops. If asked, choose pounds, not dollars.", tone: "teal" },
          p: [
            "If you want cash, use a <b>free-to-use cash machine</b> (most bank ATMs and the wider LINK network are free), and avoid the fee-charging machines tucked in some convenience stores. Apple Pay and Google Pay are accepted essentially everywhere cards are.",
            "When a UK card machine or ATM asks whether to charge in <b>US dollars or pounds, always choose pounds</b>. Picking dollars triggers dynamic currency conversion at a poor rate. Pounds lets your own bank do the conversion, which is cheaper."
          ]
        },
        {
          h: "Tipping, and one note",
          icon: "tip",
          key: { tag: "Service charge is optional", text: "In restaurants a service charge of around 12.5% is often added to the bill. It is discretionary, so you can ask for it to be removed if service was poor, and you need not tip on top.", tone: "amber" },
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
      glance: [
        { k: "Lead time", v: "Often just a few weeks" },
        { k: "Key wait", v: "21 days after the rabies shot" },
        { k: "Dogs also need", v: "Tapeworm treatment before arrival" },
        { k: "Getting there", v: "Pet flies as cargo" }
      ],
      live: true,
      topic: "pets",
      insurance: true,
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
          icon: "calendar",
          key: { fig: "21 days", tag: "The one wait", text: "Lead time is short, often just a few weeks, set almost entirely by the 21-day wait after the rabies shot. Because the US is a listed country, there is no rabies blood test and no quarantine.", tone: "teal" },
          p: [
            "The two things that decide a UK move with a pet. <b>Lead time is short</b>, often just a few weeks, and it is set almost entirely by the 21-day wait after the rabies shot. If your pet is already microchipped and current on rabies, the paperwork and endorsement can be done in around a month. <b>Cost is moderate but front-loaded by the flight</b>: pets travelling from the US to Britain almost always fly as manifest cargo rather than in the cabin, and that air transport, plus the vet work and the APHIS endorsement, is where the money goes.",
            "There is no rabies blood test on this route, which is exactly why it is so much faster than Japan or Australia. The US is on Britain's list of countries whose pets can enter without a titer or quarantine, provided the steps are done correctly and in order."
          ]
        },
        {
          h: "The steps, in order",
          icon: "health",
          key: { tag: "Order keeps you out of quarantine", text: "Great Britain means England, Scotland and Wales. Microchip, then rabies vaccination, then the 21-day wait. Dogs also need a vet tapeworm treatment 24 to 120 hours before arrival. Do them in sequence.", tone: "amber" },
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
          icon: "plane",
          key: { fig: "Cargo", tag: "Not in the cabin", text: "Britain does not allow pets in the aircraft cabin on ordinary commercial flights, so your dog or cat flies as manifest cargo. Budget and book that well ahead.", tone: "teal" },
          p: [
            "This catches people who expect to fly with a small dog or cat under the seat. Britain does not allow pets to arrive in the aircraft cabin on ordinary commercial flights; they must come in as registered manifest cargo through an approved route, with assistance dogs the main exception. That means an airline-approved crate, a cargo booking, and a handling fee at the animal reception centre, which together are the largest part of the bill.",
            "The upside is that there is no rabies titer, no waiting for lab results, and no quarantine when the paperwork is right. The APHIS endorsement fee itself is modest, since no laboratory test is involved on this route."
          ]
        },
        {
          h: "The money side, honestly",
          p: [
            "No insurance product reimburses quarantine boarding anywhere, so if you later move on to a destination that requires it, budget that as an out-of-pocket cost. Nationwide is the one US pet insurer that reimburses vet care at any licensed vet worldwide, and even it excludes boarding.",
            "US pet insurance is written around a pet that lives in the US. Most policies carry a policy territory, typically the US and sometimes Canada or Puerto Rico, and even the ones that reimburse vet care worldwide generally require your primary residence to stay in the US. So a policy may well pay a vet bill on a trip abroad and still lapse the day the move becomes permanent. Read your own policy's territory and residency wording before you assume it travels with you, and for a permanent move plan on taking out local pet insurance in your new country.",
            "As a rough sanity check on any quote, and this is our read of current market pricing rather than an official figure: a standard international pet move tends to run about $1,500 to $6,000. Full-service door-to-door typically costs 30 to 50 percent more than a transport-only booking where you handle the vet work and paperwork yourself.",
            "The costs people forget are the small ones. USDA APHIS charges a user fee to endorse an export health certificate, currently $101 where no test verification is needed, $160 for a certificate covering one or two tests, and $206 for three to six tests, with rabies vaccination not counted in that tally. These rates rose on 10 January 2025, the first APHIS fee adjustment since 2012. Add an airline-compliant crate (roughly $50 to $400), the travel vet visits themselves, boarding on a layover, and summer heat surcharges.",
            "Pet shipping attracts scammers, so verify any company before you send money. IPATA, the International Pet and Animal Transportation Association, is a trade association: its members ship under their own company names, IPATA itself does not ship pets, and there is no legitimate shipper with \"ipata\" in its name. Scammers clone real shippers' sites, logos and testimonials, so check the company in the member directory at ipata.org rather than trusting a logo on a website. Treat these as red flags: a quote dramatically below every other quote, a domain registered less than six months ago, email coming from a gmail address rather than the company domain, and any request to pay by Western Union or MoneyGram."
          ]
        },
        {
          h: "Coming back to the US",
          icon: "receipt",
          key: { fig: "Easy", tag: "The return trip", text: "Britain is rabies-free, so a dog flying home from the UK is on the CDC easy path, usually just a free CDC form receipt, with no titer and no quarantine.", tone: "teal" },
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
    },
    {
      slug: "vat-refund",
      glance: [
        { k: "VAT refund", v: "None in Great Britain" },
        { k: "Since", v: "Abolished 1 January 2021" },
        { k: "Workaround", v: "Ship it home direct, not a refund" },
        { k: "Northern Ireland", v: "A separate limited scheme" }
      ],
      live: true,
      topic: "vat-refund",
      title: "Can tourists get a VAT refund in the UK? (2026) | True Trip Costs",
      description: "No, not in Great Britain. The UK scrapped tourist VAT refunds in 2021, so you cannot reclaim the 20% VAT on shopping you carry home. The only routes: ship abroad, or shop in Northern Ireland. Checked Jul 2026.",
      h1: "Can tourists get a VAT refund in the UK?",
      lede: "Short answer: no, not in England, Scotland or Wales. This is the opposite of what most European trips teach you, and it catches shoppers out at Heathrow. Here is what changed, and the only two ways left to shop tax-free.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "No, not in Great Britain. The UK <b>abolished its tourist VAT refund</b> (the VAT Retail Export Scheme) on <b>1 January 2021</b>, and it has <b>not returned</b>. So you <b>cannot reclaim the 20% VAT</b> on shopping you carry home from <b>England, Scotland or Wales</b>, and there is <b>no airport refund desk</b> for tourists. The price you see already includes the VAT. Two exceptions: a store can <b>ship your purchase</b> directly abroad, which removes the VAT but adds shipping, and <b>Northern Ireland</b> keeps a separate, limited refund scheme. Do not budget for a refund on a Great Britain shopping trip.",
      sections: [
        {
          h: "What changed, and why the desk is gone",
          icon: "alert",
          key: { tag: "No tourist refund", text: "The UK abolished its tourist VAT refund on 1 January 2021 and it has not returned. You cannot reclaim the 20% VAT on shopping carried home from England, Scotland or Wales, and there is no airport refund desk.", tone: "amber" },
          p: [
            "Until the end of 2020, non-EU visitors could reclaim the <b>20% VAT</b> on goods bought in Britain and carried home, stamped at an airport refund desk. That scheme, the <b>VAT Retail Export Scheme</b>, was <b>scrapped on 1 January 2021</b> after Brexit, and despite steady lobbying from retailers it has <b>not come back</b> as of 2026. The refund desks that used to sit near departures are gone.",
            "So in <b>Great Britain</b>, which is England, Scotland and Wales, the <b>price on the tag already includes VAT</b> and that is what you pay, full stop. There is nothing to claim and nothing to stamp. This surprises visitors used to the refund process across the EU, so the useful move is simply to <b>not plan around a refund</b> here."
          ]
        },
        {
          h: "The one workaround: ship it abroad",
          icon: "plane",
          key: { fig: "Ship it", tag: "Not a refund", text: "The one legitimate way to skip the VAT is direct export, sometimes called Shop and Ship: the retailer ships your purchase to your home address, so it is sold VAT-free. You pay shipping instead.", tone: "teal" },
          p: [
            "There is a legitimate way to buy without the VAT, but it is not a refund. If a retailer offers <b>direct export</b>, sometimes called Shop and Ship, they <b>ship your purchase to your home address</b> outside the UK and remove the 20% VAT at the till, because the goods are exported rather than carried out in your luggage.",
            "The catch is that you <b>pay international shipping and handling</b> instead, and you do not walk out with the item. It only makes sense on <b>higher-value goods</b>, where the 20% saved clearly beats the shipping, and only at the mostly luxury retailers set up to do it. For an everyday souvenir, it is not worth it."
          ]
        },
        {
          h: "Northern Ireland is different",
          icon: "receipt",
          key: { fig: "NI only", tag: "A separate scheme", text: "Northern Ireland kept a separate, limited refund scheme after 2021. Shop there as a non-EU or non-UK resident and you can still reclaim VAT on eligible goods.", tone: "teal" },
          p: [
            "Northern Ireland kept a <b>separate, limited refund scheme</b> after 2021. If you shop there and are a non-EU or non-UK resident, you can still reclaim VAT on eligible goods, typically with a <b>minimum of about 30 pounds per store</b>, and you validate when you leave the UK or the EU. It runs through the usual tax-free operators and shops that display the signs.",
            "For a visitor whose trip is to London, Edinburgh or Cardiff, this does not help, since Great Britain has no scheme. It applies only to purchases actually made in <b>Northern Ireland</b>."
          ]
        },
        {
          h: "What you do pay: VAT, and a new lodging levy",
          icon: "gbp",
          key: { fig: "Baked in", tag: "Nothing to reclaim", text: "The 20% VAT is baked into prices, so there is no separate tax line on shopping and nothing to reclaim. Some areas are adding a separate lodging levy on overnight stays.", tone: "teal" },
          p: [
            "The <b>20% VAT is baked into prices</b>, so there is no separate tax line to watch on shopping, and nothing to reclaim. Airport duty-free is a different thing from a high-street VAT refund, and applies to the usual categories like alcohol and tobacco.",
            "On lodging, Britain long had no tourist tax, but that is changing: <b>Edinburgh</b> now adds a <b>5% visitor levy</b> on overnight stays from <b>24 July 2026</b>, and a few English cities add a small flat per-night charge. The detail is in the <a href=\"/united-kingdom\">UK money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Can tourists claim a VAT refund in the UK?", a: "Not in Great Britain. The tourist VAT refund scheme (the VAT Retail Export Scheme) was abolished on 1 January 2021 and has not returned, so you cannot reclaim the 20% VAT on shopping carried home from England, Scotland or Wales, and there is no airport refund desk. Northern Ireland keeps a separate, limited scheme." },
        { q: "Is there any way to shop tax-free in the UK?", a: "Only two. A retailer can ship your purchase directly to your home address abroad and remove the 20% VAT (you pay shipping instead), which suits high-value goods at luxury stores. Or you can shop in Northern Ireland, which kept a limited refund scheme. In Great Britain there is no carry-home refund." },
        { q: "Why did the UK stop VAT refunds for tourists?", a: "The government ended the VAT Retail Export Scheme on 1 January 2021 as part of post-Brexit tax changes, citing simplification and cost. Retailers and tourism groups have lobbied to bring it back, but as of 2026 it has not returned, so no carry-home tourist refund exists in Great Britain." },
        { q: "Is VAT included in UK prices?", a: "Yes. The 20% VAT is already included in the price shown on the tag or menu in the UK, so the marked price is what you pay. Since there is no tourist refund in Great Britain, there is nothing to reclaim on ordinary shopping." }
      ],
      sources: {
        links: [
          { label: "GOV.UK: tax-free shopping, why there is no VAT refund in Great Britain and the limited Northern Ireland scheme", url: "https://www.gov.uk/tax-on-shopping/taxfree-shopping", type: "gov" },
          { label: "Expatica: a 2026 explainer on the UK VAT-refund rules and the Northern Ireland exception", url: "https://www.expatica.com/uk/finance/taxes/vat-refund-uk-2173739/", type: "guide" }
        ],
        judgment: "The abolition of the VAT Retail Export Scheme in Great Britain is a settled, government-confirmed fact, re-checked for 2026: there is still no carry-home tourist refund, only the ship-abroad route and the separate Northern Ireland scheme. Retailers continue to lobby for reinstatement, so this is worth re-checking over time. Checked July 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Excellent, cities and countryside" },
        { k: "Carrier roaming", v: "About $12 a day" },
        { k: "Cheapest", v: "A travel eSIM, a few $ per GB" },
        { k: "The Tube", v: "Now has coverage on most lines" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "Staying connected in the UK (2026): why an eSIM beats your carrier's day pass | True Trip Costs",
      description: "UK coverage is excellent, but your US carrier charges about 12 dollars a day to roam in Europe. A Nomad eSIM is a few dollars per gigabyte and works from landing. The Tube now has signal on most lines. Checked Jul 2026.",
      h1: "Staying connected in the UK.",
      lede: "The UK is easy: coverage is excellent almost everywhere, including on the Underground now. The only real decision is how you pay for data, and for most US travelers an eSIM is far cheaper than the carrier day pass. Here is the math.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Coverage is <b>excellent</b>, so this is really a cost question. Your US carrier will charge about <b>12 dollars a day</b> to roam in the UK (<b>AT&amp;T and Verizon</b> day passes), which adds up fast, and <b>T-Mobile</b>'s included roaming is often <b>slow 2G</b>, fine for messages but not maps. A <b>Nomad eSIM</b> is a few dollars per gigabyte, activates before you fly and works from landing, so for a data-first trip it is the cheapest option. The <b>London Underground</b> now has mobile signal on most lines. Never roam <b>pay-per-use</b>, which runs about 2 dollars a megabyte.",
      sections: [
        {
          h: "It is a cost question, not a coverage one",
          icon: "roamfee",
          key: { fig: "$12/day", tag: "Roaming default", text: "The UK has some of the best mobile coverage anywhere, so this is a money decision. A US carrier day pass runs about $12 a day, and T-Mobile included roaming is often slow 2G.", tone: "teal" },
          p: [
            "The UK has some of the best mobile coverage anywhere, so you will have fast service in cities, towns and most of the countryside whatever you use. That makes this a <b>money decision</b>. The default, roaming on your US plan, is the expensive way: <b>AT&amp;T and Verizon</b> charge about <b>12 dollars a day</b> to use your plan in the UK, so a week is around <b>84 dollars</b> before you have done anything special.",
            "<b>T-Mobile</b> and some Google Fi and Visible plans include roaming, but often at <b>slow 2G-style speeds</b> (around 256 Kbps) that are usable for WhatsApp and email but frustrating for maps, rideshare or anything with video. Check your plan's fine print: included does not always mean fast."
          ]
        },
        {
          h: "Why an eSIM is usually cheapest",
          icon: "tag",
          key: { fig: "Few $/GB", tag: "The cheap option", text: "For most US visitors a travel eSIM is the cheapest way to get real data in the UK, a few dollars per gigabyte, far below stacking day-pass fees. A Nomad eSIM activates before you fly.", tone: "teal" },
          p: [
            "For most US visitors, a <b>travel eSIM</b> is the cheapest way to get real data in the UK. A <b>Nomad eSIM</b> is a few dollars per gigabyte, far below stacking up day-pass fees, and it <b>activates before you fly</b> and works the moment you land, with no SIM counter. You keep your US number reachable for calls and texts on your normal plan while the eSIM carries the data.",
            "Coverage is not the deciding factor: a Nomad eSIM rides a <b>major UK network</b>, and since the big networks blanket the country, the brand barely matters here. Set it up before departure, since installing it needs a connection."
          ]
        },
        {
          h: "The Tube, and one Brexit footnote",
          icon: "phoneok",
          key: { fig: "Covered", tag: "Signal underground", text: "The London Underground now has mobile coverage on most lines, so you are no longer offline between stations. The EU roam-like-home rule never applied to US visitors anyway.", tone: "teal" },
          p: [
            "Good news underground: the <b>London Underground now has mobile coverage on most lines</b>, rolled out across recent years, so you are no longer offline between stations on the major routes. Aboveground, buses, trains and stations are all well covered, and free Wi-Fi is common in cafes and on much of the transport network.",
            "One footnote that does <b>not</b> affect you: since Brexit, some UK networks charge their own customers to roam in the EU, but that is a <b>UK resident</b> issue, not a US visitor one, so ignore it. For paying as you go, see <a href=\"/united-kingdom/cash-or-card\">cash or card in the UK</a>, and the <a href=\"/united-kingdom\">UK money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need an eSIM for the UK?", a: "For most US travelers it is the cheapest way to get real data. UK coverage is excellent everywhere, so it is a cost question: a Nomad eSIM is a few dollars per gigabyte, versus about 12 dollars a day for an AT&T or Verizon roaming pass. Set it up before you fly and it works from landing." },
        { q: "How much does it cost to use my US phone in the UK?", a: "About 12 dollars a day on an AT&T or Verizon day pass, so roughly 84 dollars for a week. T-Mobile and some other plans include roaming but often at slow 2G speeds. Never roam with no plan, since pay-per-use runs about 2 dollars a megabyte, which is bill-shock territory." },
        { q: "Does my phone work on the London Underground?", a: "Yes, on most lines now. The Underground has rolled out mobile coverage across recent years, so you are no longer offline between stations on the major routes. Aboveground coverage is excellent, and free Wi-Fi is widely available on transport and in cafes." },
        { q: "Is an eSIM or a local SIM better for the UK?", a: "An eSIM is simpler for most visitors: no SIM counter, and it works from the moment you land if you set it up beforehand. A physical UK SIM can be marginally cheaper for very heavy, long-stay data use, but for a normal trip the convenience of a Nomad eSIM wins, and coverage is excellent either way." }
      ],
      sources: {
        links: [
          { label: "US Department of State: United Kingdom country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/UnitedKingdom.html", type: "gov" },
          { label: "Tom's Guide: a 2026 comparison of US carrier international roaming plans and day-pass prices", url: "https://www.tomsguide.com/us/wireless-carriers-international-travel-plans,review-4327.html", type: "guide" }
        ],
        judgment: "Carrier prices and inclusions change with your exact plan, so treat the day-pass figures as a July 2026 snapshot and check your own plan. The steady points are that UK coverage is excellent (including on most of the Underground), that a day pass is the pricey default, and that pay-per-use roaming is punishing."
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Two options", v: "Black cab or an app" },
        { k: "Black cabs", v: "Hail or rank, metered" },
        { k: "Apps", v: "Uber, Bolt, pre-booked only" },
        { k: "Heathrow", v: "The train beats the cab" }
      ],
      live: true,
      topic: "taxis",
      caution: "low",
      title: "London taxis, Uber and the Heathrow transfer: what actually costs less (2026) | True Trip Costs",
      description: "Black cabs you hail, Uber and Bolt you pre-book, and from Heathrow the Elizabeth line at about 12 pounds beats a 75 to 110 pound cab. How London taxis and apps compare, and the cheapest way in from the airport. Checked Jul 2026.",
      h1: "London taxis, Uber, and the Heathrow transfer.",
      lede: "London gives you real choice: a hailable black cab or a pre-booked Uber. But the money is made or lost on the airport run, where the train quietly beats a cab by fifty pounds or more. Here is how it all compares.",
      checked: "Jul 2026",
      checkedISO: "2026-07-22",
      answer: "Two ways to ride. A licensed <b>black cab</b> you can <b>hail on the street</b> or take from a rank, on a regulated meter (minimum fare <b>4.40 pounds</b>); <b>Uber and Bolt</b> (and minicab firms like Addison Lee) must be <b>pre-booked in the app</b> and cannot be flagged down. For a short central trip, an app car is usually cheaper (about <b>9 to 14 pounds</b> off-peak) than a metered cab (about <b>12 to 18 pounds</b>). But the real decision is <b>Heathrow</b>: the <b>Elizabeth line</b> is a flat <b>12 pounds or so</b> to central London, versus <b>75 to 110 pounds</b> in a black cab or <b>45 to 95 pounds</b> on Uber with surge. For most arrivals, the <b>train wins by a wide margin</b>.",
      sections: [
        {
          h: "Black cab or app: how they differ",
          icon: "phoneok",
          key: { fig: "£4.40 min", tag: "Hail vs pre-book", text: "Only black cabs (hackney carriages) can be hailed on the street or taken from a rank, on a meter starting at £4.40. Uber, Bolt and minicabs like Addison Lee must be pre-booked in the app.", tone: "teal" },
          p: [
            "The one rule to know: <b>only black cabs (hackney carriages) can be hailed</b> on the street or picked up from a rank. <b>Uber, Bolt and minicabs</b> (private hire, including Addison Lee) are <b>booking-only by law</b> and cannot legally take a street fare, so at the airport or a station you open the app and walk to the designated pickup point. Black cab drivers pass a famously tough test (the Knowledge) and run a regulated meter, with no haggling.",
            "On price, for a typical <b>3-mile central journey</b> a black cab runs about <b>12 to 18 pounds</b>, while <b>Uber or Bolt</b> are about <b>9 to 14 pounds</b> off-peak, though they <b>surge</b> at busy times and now add <b>20% VAT</b> on every London fare. Black cabs take <b>card</b> and can be hailed instantly, which is worth something when you do not want to wait for a booking. For a quick hop you cannot lose much either way, so compare the app quote against the convenience of just flagging a cab."
          ]
        },
        {
          h: "Heathrow: the train beats the cab",
          icon: "plane",
          key: { fig: "£75-110", tag: "Cab is the pricey way", text: "From Heathrow a black cab to central London is roughly £75 to £110, more evenings and weekends. The Heathrow Express or the Elizabeth line is far cheaper and often faster.", tone: "amber" },
          p: [
            "This is where the wrong choice costs the most. From <b>Heathrow</b>, a black cab to central London is roughly <b>75 to 110 pounds</b> (more evenings and weekends), and <b>Uber or Bolt</b> run about <b>45 to 95 pounds</b> depending on surge. The <b>trains</b> undercut both by a lot: the <b>Elizabeth line</b> is a flat fare of about <b>12 pounds</b> (contactless or Oyster) into central London in 30 to 45 minutes, and the <b>Piccadilly line</b> Tube is the cheapest at about <b>5.90 pounds</b>, if slower.",
            "The <b>Heathrow Express</b> is the fastest, 15 minutes to Paddington, but pricier at about <b>25 pounds</b> walk-up (from around <b>10 pounds</b> booked ahead). So the honest ranking for a solo traveler or couple with normal luggage: the <b>Elizabeth line for value, the Heathrow Express for speed to Paddington</b>, and a car only if you are a group with heavy bags going door to door, in which case a <b>pre-booked fixed-price minicab</b> (around <b>55 pounds</b>) beats a metered black cab."
          ]
        },
        {
          h: "The other airports, and tap-to-ride",
          icon: "gbp",
          key: { fig: "£21.50", tag: "Gatwick Express", text: "From Gatwick, the Gatwick Express is about £21.50 to Victoria in 30 minutes, far cheaper than a £90 to £130 cab. Stansted and Luton have express trains or coaches too.", tone: "teal" },
          p: [
            "From <b>Gatwick</b>, the <b>Gatwick Express</b> is about <b>21.50 pounds</b> to Victoria in 30 minutes, far cheaper than a <b>90 to 130 pound</b> cab. <b>Stansted</b> and <b>Luton</b> also have express trains or coaches that beat a taxi on price. As a rule across the London airports, the <b>train or coach is the value option</b>, and a car makes sense mainly for groups or late arrivals.",
            "Around town, you rarely need cash or a paper ticket: just <b>tap a contactless card or phone</b> on the Tube, buses, trams and most trains, with an automatic <b>daily fare cap</b>, so no Oyster card is needed. For how cards and cash work more broadly, see <a href=\"/united-kingdom/cash-or-card\">cash or card in the UK</a>, and the <a href=\"/united-kingdom\">UK money guide</a>."
          ]
        },
        {
          h: "Tipping and avoiding the touts",
          icon: "tip",
          key: { fig: "~10%", tag: "Round up", text: "Tipping a cab is light: round up to the nearest pound, or add roughly 10% for a good black-cab driver. Ignore anyone touting rides in the terminal and use the official rank or app.", tone: "teal" },
          p: [
            "Tipping a cab is light in the UK: <b>rounding up to the nearest pound</b>, or adding roughly <b>10%</b> for a good black-cab driver, is plenty, and app fares are settled in the app where a tip is optional. There is no expectation to tip on public transport.",
            "At the airport, <b>ignore anyone who approaches you</b> inside the terminal offering a taxi or a lift; licensed black cabs wait at the marked rank and Uber or Bolt are booked in the app. An unbooked stranger with a car is not a deal, so follow the signs to the official rank or the rail station."
          ]
        }
      ],
      faqs: [
        { q: "Can you hail an Uber in London?", a: "No. Uber, Bolt and minicabs are private hire and must be booked in the app; only licensed black cabs can be hailed on the street or taken from a rank. At the airport or a station you book the app car and walk to the designated pickup point, while a black cab you can simply flag down or join the rank for." },
        { q: "What is the cheapest way from Heathrow to central London?", a: "The train. The Elizabeth line is a flat fare of about 12 pounds into central London, and the Piccadilly line Tube is about 5.90 pounds. Both massively undercut a black cab (75 to 110 pounds) or Uber (45 to 95 pounds with surge). The Heathrow Express is fastest at 15 minutes to Paddington but costs about 25 pounds walk-up." },
        { q: "Is Uber cheaper than a black cab in London?", a: "For a short central trip, usually a little: about 9 to 14 pounds off-peak on Uber or Bolt versus 12 to 18 pounds in a metered black cab. But apps surge at busy times and add 20% VAT, and only black cabs can be hailed instantly. For airport runs the train beats both, and a pre-booked minicab beats a metered cab." },
        { q: "Do I need an Oyster card for London transport?", a: "No. You can tap a contactless card or phone directly on the Tube, buses, trams and most trains, with an automatic daily fare cap, so a separate Oyster card is not needed. The same tap works from Heathrow on the Elizabeth line and the Piccadilly line." }
      ],
      sources: {
        links: [
          { label: "US Department of State: United Kingdom country information and local-travel context", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/UnitedKingdom.html", type: "gov" },
          { label: "London Airport Taxi: 2026 London black-cab and minicab fares, including Heathrow transfer costs", url: "https://londonairport-taxi.com/london-taxi-fares", type: "guide" }
        ],
        judgment: "Black-cab tariffs are regulated (the minimum rose to 4.40 pounds in April 2026) but the metered total varies with traffic, and app surge and train fares move, so treat the pound figures as a recent 2026 read. The steady point is that from Heathrow the train beats a car for most travelers. Checked July 2026."
      }
    }
  ]
};
