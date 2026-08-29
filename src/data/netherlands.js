import { S } from './carrier-spine.js';

export default {
  slug: "netherlands",
  iso2: "nl",
  live: true,
  name: "Netherlands",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-04",
  sources: {
    changed: "Sources added. Verified with the Dutch government that VAT on hotel rooms rose from 9% to 21% on 1 January 2026 (camping stays stay at 9%), and with the City of Amsterdam that its tourist tax is 12.5% of the net room rate, the highest in Europe. Combined, that is roughly 33.5% on an Amsterdam hotel stay. The guide's figures are current.",
    links: [
      { label: "Dutch government (business.gov.nl): VAT on overnight accommodation rose to 21% on 1 January 2026", url: "https://business.gov.nl/amendments/vat-overnight-accommodation-goes-up/", type: "gov" },
      { label: "City of Amsterdam: the tourist tax is 12.5% of the overnight price, excluding VAT", url: "https://www.amsterdam.nl/en/municipal-taxes/tourist-tax/", type: "gov" },
    ],
    judgment: "The daily cash share, tipping norms, and likely ATM behavior are our own estimate from experience, not an official figure.",
  },
  emergency: { medical: "112", note: "112 reaches every emergency service, free from any phone.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "low",
  region: "Europe",
  signals: { cardFriendliness: 5, cashNeed: 1, taxRisk: 3 },
  hook: "One of Europe's most cashless countries, with a catch: not every card type works everywhere.",

  title: "Tipping in the Netherlands, plus cards and cash",
  description: "Tipping is light: round up rather than add a percentage. A debit card often works where credit will not, and Geldmaat ATMs are fee-free. Checked 2026.",

  h1: "Money in the Netherlands, sorted.",
  lede: "A calm, current plan for the money side of your trip: why this is one of the most cashless countries in Europe, the one card quirk that catches US travelers out, and the tax change that just made Amsterdam hotel rooms noticeably pricier.",
  hero: {
    img: "/netherlands-hero.jpg",
    h: 1375,
    alt: "A canal in Amsterdam at sunset lined with red-brick gabled houses and string lights, a humpbacked stone bridge with bicycles parked along its railings, a lone figure standing on the bridge looking toward a church tower silhouetted against the setting sun, tulips along the canal edge, and a tray of bitterballen with mustard, a stroopwafel and a glass of beer on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "The Netherlands is one of the most cashless countries in Europe, but there is a real catch: many Dutch shops, including the largest supermarket chain, are set up for <b>debit cards</b> and sometimes reject foreign <b>credit cards</b> outright. Bring a <b>no-fee debit card</b> as your main card, plus a credit card as backup, and lean on <b>Apple Pay or Google Pay</b> when a physical card gets declined, it often goes through anyway. You barely need cash, 20 to 30 euros covers the rare exception. If you are staying in Amsterdam, budget for the highest tourist tax in Europe, a steep <b>12.5% of your room rate</b>, on top of a new 21% VAT on hotel rooms that just replaced the old 9% rate.",

  meter: {
    heading: "Barely any cash changes hands here, cards and phones do almost everything.",
    cashPct: 12,
    note: "A rough feel for everyday spending. Roughly 80% of in-person payments in the Netherlands are by debit card, with cash down near 15 to 20% and falling. Museums, public transport, and even some public toilets have gone fully cashless. The exception is the rare small business or market stall that still wants cash for a small amount."
  },

  trio: [
    { sym: "card", kind: "warn", h: "Your card", verd: "Debit beats credit here", p: "Dutch terminals are built around debit cards (Maestro, V Pay, and now Visa/Mastercard debit). A foreign credit card sometimes gets rejected at supermarkets like Albert Heijn or budget shops like Hema, even though it works fine at restaurants and hotels. Apple Pay or Google Pay often succeeds when the physical card fails.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "Barely needed", p: "You can go days without touching cash. Keep 20 to 30 euros for the odd old-school snack bar, a market stall, or a public toilet attendant who still wants coins, but it is genuinely a backup, not a plan.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Easy, but getting scarcer", p: "Geldmaat, the unified yellow ATM network shared by Dutch banks, is reliable and reasonably priced. Avoid standalone Euronet-style machines in tourist shops, which charge more. ATMs are slowly thinning out nationwide as card use grows, so don't wait until you're nearly out of cash to find one.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee debit card</b> as your main card here, plus a no-fee credit card as backup.",
      "Add your cards to <b>Apple Pay or Google Pay</b> before you fly. It can succeed at a terminal that rejects the physical card.",
      "If you plan to use public transport with a bank card, a <b>contactless debit or credit card</b> works directly at the gates, no OV-chipkaart required."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters, the rates are poor, and you will rarely need much cash anyway.",
      "If you want a little cash, use a <b>Geldmaat</b> machine (the shared yellow ATM brand) rather than a standalone tourist-shop ATM, and <b>decline \"convert to USD.\"</b>",
      "You can tap your contactless card straight through the train gates into the city, no ticket machine needed."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card or phone</b> for nearly everything: cafes, museums, transit, markets and shops.",
      "If a card is declined at a supermarket self-checkout, try <b>Apple Pay or Google Pay</b> before assuming the card is broken.",
      "Keep a little cash for the rare cash-only snack bar or market stall.",
      "<b>Always choose euros</b>, never dollars, on any terminal or ATM that asks."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in euros, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds 3 to 8%.",
      "A declined card at a Dutch supermarket is often a debit-versus-credit issue, not a problem with your account. Try a different card or your phone wallet."
    ], cta: null }
  ],

  cash: {
    rate: 0.88, cur: "EUR", round: 50, defaultIndex: 1,
    rateNote: "Rough guide at about 0.88 euros to the dollar in mid-2026.",
    styles: [
      { n: "Budget", per: 55, cash: 0.15, room: 100 },
      { n: "Mid-range", per: 110, cash: 0.1, room: 180 },
      { n: "Comfort", per: 200, cash: 0.05, room: 340 }
    ]
  },

  connectivity: {
    works: "Yes, reliably almost everywhere. The Netherlands is small, flat and densely built, which makes for some of the most consistent mobile coverage in Europe. KPN, Vodafone and T-Mobile NL all run strong 4G and growing 5G across cities, towns, the countryside and the rail network. You would have to go looking for a dead zone here, a rare situation by European standards."
  },

  // TOURIST TAX (high-churn, verified Jul 2026). Amsterdam is the outlier: a steep 12.5% of
  // the room rate (excluding VAT), the highest percentage-based tourist tax in Europe, on top
  // of a separate national VAT hike on hotel rooms from 9% to 21% that took effect 1 Jan 2026
  // (covered in recentChange and taxfree below, not part of this calculator line, since VAT
  // is a different kind of charge than the local occupancy tax). Most other Dutch
  // municipalities charge a small flat fee per person per night instead of a percentage.
  tax: {
    unit: "percentOfRoom",
    currency: "EUR",
    capNights: null,
    note: "Amsterdam charges a percentage of your room rate, added at checkout. Most other Dutch cities and towns instead charge a small flat amount per person, per night, set by each municipality. This does not include the separate 21% VAT on hotel rooms nationwide, covered below.",
    regions: [
      { key: "amsterdam", label: "Amsterdam", pct: 12.5, note: "The highest tourist tax rate in Europe, 12.5% of the overnight rate excluding VAT, with no cap. A separate national VAT increase on hotel rooms, from 9% to 21% as of January 2026, applies on top of this and is not included here." },
      { key: "other", label: "Elsewhere in the Netherlands (Rotterdam, Utrecht, The Hague, and beyond)", unit: "perPersonPerNight", rate: 3, note: "Most Dutch municipalities charge a small flat fee per person per night instead of a percentage, commonly 1.50 to 6 euros depending on the town and accommodation type. This uses a representative mid-range figure." }
    ]
  },

  currencyHeading: "The euro, in plain terms.",
  facts: [
    { sym: "euro", k: "Quick conversion", v: "About 1.14 dollars to 1 euro in mid-2026, so a 10 euro lunch is roughly $11.40, and 100 euros is about $114." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 5, 10, 20, 50, 100, 200 and 500 euros, though you will rarely see anything over 50 in daily use. Coins run 1 cent to 2 euros, and you will need them less often than almost anywhere else in Europe." },
    { sym: "card", k: "Debit, not credit, is king", v: "Dutch shopping habits revolve around debit cards (Maestro, V Pay, and now Visa or Mastercard debit). A foreign credit card can be rejected at some supermarkets and budget retailers even though it works everywhere else, so always carry a debit option too." },
    { sym: "qr", k: "iDEAL isn't your tool", v: "iDEAL, the Dutch online banking payment system, requires a Dutch bank account, so it is not something a US visitor can use. Stick to your card or phone wallet for everything, including online bookings." }
  ],

  taxfree: {
    label: "Taxes and the VAT change",
    heading: "A tourist tax that varies by city, and a VAT hike that just landed.",
    text: "Two separate charges affect a Dutch hotel bill. Amsterdam's <b>tourist tax</b> is 12.5% of the room rate, the highest in Europe, while most other Dutch towns charge a small flat fee per person per night instead. Separately, and nationwide, <b>VAT on hotel accommodation jumped from 9% to 21%</b> on January 1, 2026, a change some booking sites had not fully reflected in their displayed prices as of when this guide was checked. In Amsterdam the two together come to roughly 33.5% of the room, though only the city tax is added at checkout: the VAT is already inside the rate you were quoted, so about 10% is what actually appears on top. If you shop, non-EU visitors can also reclaim VAT (21% standard rate, 9% on most other goods) on purchases over a per-store minimum, typically around 50 euros: ask for a tax-free form, keep the goods unused, and get it stamped by customs when you leave the EU."
  },

  recentChange: {
    date: "Jan 2026",
    text: "<b>Hotel VAT tripled overnight.</b> As of January 1, 2026, Dutch VAT on hotel and short-term rental accommodation rose from 9% to 21%, the same rate charged on most other goods and services. Combined with Amsterdam's existing 12.5% tourist tax, a room booked in the city can carry a combined tax load of roughly 33.5%. Some bookings made before the change, and some booking sites slow to update, may still show the old 9% rate, so double-check your total at checkout rather than trusting an older quote."
  },

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Choosing your home currency at a card terminal or ATM (dynamic currency conversion) quietly adds 3 to 8%. Pick euros every time.",
    "<b>A declined card is often debit-versus-credit, not your bank.</b> Dutch terminals favor debit cards. If your credit card is rejected at a supermarket or budget shop, try a debit card or your phone wallet before assuming something is wrong with your account.",
    "<b>Don't trust an old quote on hotel tax.</b> The jump in VAT on accommodation from 9% to 21% took effect January 1, 2026, and combined with Amsterdam's 12.5% tourist tax, the gap between an old quote and your actual checkout total can be substantial.",
    "<b>Avoid standalone tourist-shop ATMs.</b> Look for the bright yellow Geldmaat machines, the shared bank-neutral network, rather than unbranded ATMs in souvenir shops, which charge more and push the dollar conversion."
  ],

  tippingHeading: "Light, and round up rather than calculate a percentage.",
  tipping: "Tipping in the Netherlands is appreciated, not expected. Staff are paid a real wage and do not depend on tips to live. At a restaurant, rounding up the bill or adding around 10% for good service is generous and plenty. Cafes, bars and casual spots get no tip at all, or just the coins left from change. For taxis, round up the fare. Cash is often preferred by waitstaff over a card tip, since a cash tip goes straight to the person rather than into a pooled or taxed total. Nobody will chase you for a tip, and a modest one is always well received.",

  faqs: [
    { q: "Do I need cash in the Netherlands?", a: "Barely. This is one of the most cashless countries in Europe, with cards and phone wallets covering nearly everything, including transit and many museums. Keep 20 to 30 euros for the rare old-school snack bar, market stall or toilet attendant that still wants coins." },
    { q: "Why was my card declined in the Netherlands?", a: "Most likely a debit-versus-credit issue, not a problem with your account. Dutch terminals are built around debit cards, and some supermarkets and budget shops reject foreign credit cards even though restaurants and hotels take them fine. Try a debit card or Apple Pay or Google Pay instead." },
    { q: "What is the best ATM to use in the Netherlands?", a: "Look for Geldmaat, the shared yellow ATM network used by Dutch banks, which charges standard rates. Avoid unbranded standalone machines in tourist shops, which cost more and push the \"convert to USD\" option you should always decline." },
    { q: "How much is Amsterdam's tourist tax?", a: "12.5% of your room rate excluding VAT, the highest percentage-based tourist tax in Europe, with no nightly cap. As of January 2026, this sits on top of a separate VAT hike on hotel rooms nationwide, from 9% to 21%, so the combined tax load in Amsterdam can reach roughly 33.5%." },
    { q: "How much cash should I bring for a week in the Netherlands?", a: "For two travelers, very roughly 50 to 100 euros (about $55 to $115) in pocket cash for the rare cash-only moment across a whole week. Nearly everything else, hotels, restaurants, transit and shops, runs through a card or phone wallet." }
  ],

  culture: {
    heading: "A little Dutch goes a long way",
    intro: "A few words and a couple of stories that turn you from a tourist into a guest. Almost everyone speaks excellent English, so nothing here is essential, but a friendly Dutch word and a bit of local knowledge are always welcome.",
    phrases: [
      { mean: "Hello", say: "HAH-loh", word: "Hallo" },
      { mean: "Please", say: "AHL-stoo-BLEEFT", word: "Alstublieft" },
      { mean: "Thank you", say: "DAHNK yuh vel", word: "Dank je wel" },
      { mean: "Cheers", say: "prohst", word: "Proost" },
      { mean: "Delicious", say: "LEK-ker", word: "Lekker" },
      { mean: "Beautiful", say: "moy", word: "Mooi" },
    ],
    tip: "Here is the one visitors always ask about: the country is <b>the Netherlands</b>. Holland is just two of its twelve provinces, North and South Holland (home to Amsterdam and Rotterdam), so people from the other ten quietly notice when Holland stands in for the whole country. The Netherlands is the safe word, and the language and the people are Dutch. The country even switched its official branding from Holland to the Netherlands a few years ago for this very reason.",
    stories: [
      { img: "/netherlands-culture-1.jpg",
        alt: "WPA-style illustration of a row of classic Dutch windmills across a flat green polder under an enormous cloudy sky, canals and dikes, cattle in the distance",
        h: "They made the land themselves",
        p: "Much of the Netherlands sits below sea level, so for centuries the Dutch pumped the water out with windmills and held it back with dikes, turning sea into farmland. There is an old saying: God made the world, but the Dutch made the Netherlands. They are rightly proud of it.",
        note: "Good to know: much of the country is reclaimed from the sea" },
      { img: "/netherlands-culture-2.jpg",
        alt: "WPA-style illustration of a seventeenth-century Dutch master painting at an easel in a north-lit studio, a globe and a map nearby, a figure by a leaded window",
        h: "The Golden Age of light",
        p: "In the 1600s this small trading republic produced an explosion of art, Rembrandt, Vermeer and a whole world of everyday scenes caught in extraordinary light. It is called the Dutch Golden Age, and its paintings still fill the Rijksmuseum. A little enthusiasm for it goes far.",
        note: "Good to know: the age of Rembrandt and Vermeer" },
      { img: "/netherlands-culture-3.jpg",
        alt: "WPA-style illustration of long rows of red, yellow and violet tulips in bloom before a windmill, a merchant crouched admiring one rare bloom, cool spring light",
        h: "When a bulb cost a house",
        p: "Tulips are not even native to the Netherlands, but in the 1630s the Dutch fell so hard for them that single rare bulbs sold for the price of a canal house, before the market crashed. Tulip mania is often called the first speculative bubble. The flowers, at least, stayed beautiful.",
        note: "Good to know: tulip mania, the first speculative bubble" },
    ],
    pride: "The Dutch are famously direct, and it is meant kindly: they will tell you what they think, honestly and without fuss, and you will always know where you stand. That plainness, along with the bikes and the openness, is the culture in a nutshell."
  },

  spokes: [
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Apps", v: "Uber, Bolt (also FreeNow)" },
        { k: "From Schiphol", v: "The train is fast and cheap" },
        { k: "Watch for", v: "Street-taxi overcharging in Amsterdam" },
        { k: "Tipping", v: "Round up a euro or two" }
      ],
      live: true,
      topic: "taxis",
      caution: "medium",
      title: "Taxis in the Netherlands: Schiphol and Amsterdam",
      description: "Uber and Bolt work in the Netherlands, but the train beats a taxi from Schiphol. The Amsterdam street-taxi overcharging to avoid, and how much to tip.",
      h1: "Taxis in the Netherlands, and the Schiphol train",
      lede: "In the Netherlands the train and the bike do most of the work, and when you do need a taxi, an app is the safe bet. Amsterdam street taxis have a reputation for overcharging, so here is how to avoid it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Install <b>Uber</b> or <b>Bolt</b>, which both work well in Dutch cities, with <b>FreeNow</b> as a third option. The big practical tip: from <b>Schiphol (AMS)</b> the <b>train</b> into Amsterdam is fast and cheap, so skip the taxi queue. The one thing to watch is <b>Amsterdam street taxis</b>, which have a longstanding reputation for <b>overcharging or refusing short fares</b>, so book through an app instead. Taxis are metered and regulated, and you <b>tip by rounding up</b> a euro or two.",
      sections: [
        {
          h: "Which app to install",
          icon: "phoneok",
          key: { fig: "Apps", tag: "The safe bet", text: "Uber and Bolt both work well in Dutch cities, with FreeNow a third option. An app gives a set fare and avoids the street-taxi problem.", tone: "teal" },
          p: [
            "<b>Uber</b> and <b>Bolt</b> both work well in <b>Amsterdam, Rotterdam, The Hague and Utrecht</b>, and <b>FreeNow</b> is a third option. Booking through an app gives you a fare estimate, the driver and plate in advance, and card payment.",
            "Honestly, in much of the Netherlands you may not need a taxi at all: <b>trains, trams and bikes</b> cover most trips cheaply and quickly. An app is most useful late at night or with luggage."
          ]
        },
        {
          h: "From Schiphol, take the train",
          icon: "plane",
          key: { fig: "Train", tag: "Fast and cheap", text: "The train from Schiphol into Amsterdam Centraal takes about 15 to 20 minutes for a few euros, far cheaper than a metered taxi.", tone: "teal" },
          p: [
            "From <b>Schiphol (AMS)</b>, the <b>train</b> runs from directly under the terminal into <b>Amsterdam Centraal</b> in about <b>15 to 20 minutes</b> for a few euros, so it easily beats a taxi (roughly 40 to 50 euros) for a solo traveler.",
            "Buy a ticket from a machine, the NS app, or tap a contactless card at the gates. If you do want a taxi, use the official rank or an app rather than anyone approaching you inside the terminal."
          ]
        },
        {
          h: "Amsterdam street taxis: use an app",
          icon: "alert",
          key: { tag: "A known problem", text: "Amsterdam street taxis have a longstanding reputation for overcharging tourists or refusing short fares. Booking through an app avoids it, since the fare is set in advance.", tone: "amber" },
          p: [
            "The one real caution is <b>Amsterdam street taxis</b>, which have a <b>longstanding reputation</b> for <b>overcharging visitors, taking long routes, or refusing short fares</b>. It is not universal, but it is common enough to plan around.",
            "The fix is simple: <b>book through Uber, Bolt or FreeNow</b>, where the fare is set before you ride, or use an official taxi rank with a clearly marked, metered cab. Avoid unmarked cars and anyone touting for a ride."
          ]
        },
        {
          h: "Fares, paying and tipping",
          icon: "euro",
          key: { fig: "Round up", tag: "A euro or two", text: "Taxis run on a regulated maximum tariff. Tip by rounding up the fare a euro or two; there is no set percentage.", tone: "teal" },
          p: [
            "Dutch taxis run on a <b>regulated maximum tariff</b> (a base fare plus per-kilometer and per-minute rates), and apps show the price up front. To <b>tip</b>, <b>round up</b> the fare by a euro or two; there is no set percentage.",
            "For more, see <a href='/netherlands/tipping'>tipping in the Netherlands</a>, <a href='/netherlands/cash-or-card'>cash or card in the Netherlands</a>, and the <a href='/netherlands'>Netherlands money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is Uber in the Netherlands?", a: "Yes, Uber and Bolt both work well in Amsterdam, Rotterdam, The Hague and Utrecht, with FreeNow a third option. An app is the safe bet, since it sets the fare in advance." },
        { q: "Should I take a taxi from Schiphol?", a: "Usually not for one person: the train into Amsterdam Centraal takes about 15 to 20 minutes for a few euros, far cheaper than a taxi. Use the train unless you have heavy bags or a group." },
        { q: "Are Amsterdam taxis a ripoff?", a: "Street taxis have a longstanding reputation for overcharging tourists or refusing short fares. It is not universal, but book through Uber, Bolt or FreeNow, or use an official rank, to avoid it." },
        { q: "Do you tip taxi drivers in the Netherlands?", a: "Only lightly: round up the fare by a euro or two. There is no set percentage, and taxis run on a regulated maximum tariff." }
      ],
      sources: {
        links: [
          { label: "I amsterdam: official city travel information", url: "https://www.iamsterdam.com/en", type: "gov" },
          { label: "US State Department: Netherlands country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Netherlands.html", type: "gov" }
        ],
        judgment: "Dutch transport leans on trains and bikes, apps are the safe taxi option, and Amsterdam street-taxi overcharging is a well-known issue. Fares and app coverage shift over time, so this is our practical read. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Euro (EUR)" },
        { k: "Cards", v: "Card-first, contactless everywhere" },
        { k: "Sometimes", v: "Card-only, or Dutch PIN only" },
        { k: "Cash for", v: "Very little" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in the Netherlands? Barely any",
      description: "The Netherlands is strongly card-first, contactless is everywhere, and some places take cards only. A contactless debit is safest, and choose euros.",
      h1: "Do I need cash in the Netherlands, or can I use cards?",
      lede: "Short answer: a card for almost everything, very little cash. The Netherlands is strongly card-first, and if anything the risk runs the other way, with some places taking cards only. Here is how to handle it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "Cards, almost entirely, and sometimes cards only. The Netherlands is strongly <b>card-first</b>: <b>contactless</b> is everywhere, and Apple Pay and Google Pay are widely taken. A few places, some supermarkets and market stalls, historically took only <b>Dutch PIN (Maestro)</b> and not foreign <b>credit</b> cards, though most now accept international contactless, so a <b>contactless debit</b> is the safest card to carry. Some spots are <b>card-only and take no cash at all</b>. You need <b>very little cash</b>. Choose <b>euros, not dollars</b> on any card or ATM.",
      sections: [
        {
          h: "Card-first, sometimes card-only",
          icon: "phoneok",
          key: { fig: "Tap", tag: "Contactless everywhere", text: "Contactless runs the day, and some places take cards only, no cash. A contactless debit is the safest card, since a few spots historically took Dutch PIN but not foreign credit.", tone: "teal" },
          p: [
            "The Netherlands is <b>strongly card-first</b>. <b>Contactless</b> is near-universal across shops, cafes, transport and even market stalls, and <b>Apple Pay and Google Pay</b> are widely accepted. Some places are now <b>card-only and take no cash</b>, so a card is essential, not optional.",
            "One historical quirk: some <b>supermarkets</b> (such as Albert Heijn) and small vendors ran on <b>Dutch PIN (Maestro-style debit)</b> and did <b>not take foreign credit cards</b>. Most now accept <b>international contactless</b>, but the safest card to carry is a <b>contactless debit</b>, with a credit card as backup."
          ]
        },
        {
          h: "Choose euros, not dollars",
          icon: "atm",
          key: { fig: "3-8% worse", tag: "Always choose euros", text: "When a terminal or ATM offers dollars or euros, pick euros. Dollars trigger dynamic currency conversion at a rate about 3 to 8% worse than your bank's.", tone: "amber" },
          p: [
            "When a card terminal or ATM asks whether to charge in <b>dollars or euros, always choose euros</b>. Dollars trigger dynamic currency conversion at a rate about <b>3 to 8% worse</b> than your own bank's. Decline it every time.",
            "You will rarely need an ATM here, but if you do, use one attached to a <b>real bank</b> (such as ABN AMRO, ING or Rabobank) rather than a standalone <b>Euronet</b> kiosk, which charges high fees and pushes the dollar conversion."
          ]
        },
        {
          h: "How little cash you need",
          icon: "coins",
          key: { fig: "Little", tag: "Card does the day", text: "A card covers almost everything, so carry only a small amount of euros for the rare cash-only spot. Bring a contactless debit as your main card.", tone: "teal" },
          p: [
            "Carry only <b>a small amount of euros</b> for the rare cash-only stall or tip, since a card covers almost everything. If anything, the risk runs the other way: a place that takes <b>only cards</b>, so make sure your <b>contactless debit</b> works before you rely on it.",
            "For the wider picture, see the <a href='/netherlands'>Netherlands money guide</a>, and for gratuities, <a href='/netherlands/tipping'>tipping in the Netherlands</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in the Netherlands?", a: "Barely. The Netherlands is card-first, contactless is everywhere, and some places take cards only with no cash. Carry a small amount of euros for the rare cash-only stall, but a card covers almost everything." },
        { q: "Will my US credit card work in the Netherlands?", a: "Usually, via contactless, which is near-universal now. A few supermarkets and small vendors historically took only Dutch PIN (Maestro) and not foreign credit cards, so the safest card to carry is a contactless debit, with a credit card as backup." },
        { q: "Should I pay in euros or dollars in the Netherlands?", a: "Always euros. If a card machine or ATM offers dollars, decline: that dynamic currency conversion adds roughly 3 to 8%, and your own bank's rate is better." },
        { q: "Do places in the Netherlands take cash?", a: "Most do, but a growing number are card-only and take no cash at all, especially in cities. Do not rely on cash alone; a contactless card is essential here." }
      ],
      sources: {
        links: [
          { label: "European Central Bank: the official euro reference exchange rates", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html", type: "gov" },
          { label: "US State Department: Netherlands country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Netherlands.html", type: "gov" }
        ],
        judgment: "The Netherlands is strongly card-first, and the old Dutch-PIN-only quirk is fading as international contactless spreads, so this is our practical read. The euro rate moves, and the firm rule is to decline dollar conversion. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping (fooi)", v: "Modest, not expected" },
        { k: "Service", v: "Included, staff earn a wage" },
        { k: "Restaurants", v: "Round up, or 5 to 10%" },
        { k: "On a card", v: "The PIN often has a tip option" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in the Netherlands: the fooi, and how much",
      description: "Dutch tipping is modest. How much to leave at restaurants and cafes, and how to add a fooi on the PIN machine when you pay. Checked 2026.",
      h1: "Tipping in the Netherlands",
      lede: "The Netherlands is a light-tipping country. Service is included, staff earn a proper wage, and nobody expects a US-style percentage. A modest fooi for good service is welcome but never required. Here is what you actually owe.",
      checked: "Jul 2026",
      checkedISO: "2026-07-23",
      answer: "The Netherlands has a <b>light tipping culture</b>. Service is <b>included in the price</b> and staff earn a <b>proper wage</b>, so there is <b>no expected percentage</b>. A <b>fooi</b> for good service is a kind extra: at a <b>restaurant</b>, <b>rounding up</b> or leaving <b>5 to 10%</b> is generous, and at a <b>cafe or bar</b>, the <b>small change</b> is plenty. When you pay by card, the <b>PIN machine often lets you add a tip</b>, or you can tell the server. Do not feel pressured to tip the way you would at home.",
      sections: [
        {
          h: "How much to leave, by situation",
          icon: "euro",
          key: { fig: "5-10%", tag: "Restaurants, if you like", text: "Service is included and staff earn a wage, so nothing is required. For good restaurant service, round up or leave 5 to 10%. At a cafe, the small change is plenty.", tone: "teal" },
          p: [
            "At a <b>sit-down restaurant</b>, tipping is <b>optional</b>: for good service, <b>rounding up</b> or leaving <b>5 to 10%</b> is generous, well below the US norm. At a <b>cafe, bar or for drinks</b>, the Dutch typically leave just the <b>small change</b> or a euro or two.",
            "Elsewhere: <b>round up</b> a taxi fare, leave <b>1 to 2 euros per bag</b> for a hotel porter, and a euro or two a day for housekeeping if you like. For a private guide, a larger tip reflects a real service."
          ]
        },
        {
          h: "Tipping on the PIN machine",
          icon: "card",
          key: { fig: "On the PIN", tag: "Or tell the server", text: "The Netherlands is card-first, and the PIN machine often has a tip option. Add it there, or tell the server the total before they enter the amount.", tone: "teal" },
          p: [
            "The Netherlands is <b>strongly card-first</b>, and unlike some countries the <b>PIN card machine often has a tip option</b>: after the amount comes up, it may ask if you want to add a <b>fooi</b>. Enter the tip there, or <b>tell the server the total</b> you want to pay before they enter it.",
            "If you prefer <b>cash</b>, leaving coins or a small note on the table works too, though card is the everyday norm here."
          ]
        },
        {
          h: "A few small notes",
          icon: "coins",
          key: { fig: "Modest", tag: "Never required", text: "Tipping is always modest and optional here. Round up for good service, and do not feel you owe a US-style percentage.", tone: "teal" },
          p: [
            "Dutch tipping is <b>consistently modest</b>. There is <b>no service charge</b> added to restaurant bills, and the listed price is what you pay. Keep a few <b>euro coins</b> for rounding up, and remember that a <b>fooi is a thank-you</b>, not an obligation."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in the Netherlands?", a: "Only modestly, and only if you want to. Service is included and staff earn a proper wage, so there is no obligation and no expected percentage. For good restaurant service, round up or leave 5 to 10%. At a cafe, the small change is plenty." },
        { q: "How much should I tip at a Dutch restaurant?", a: "Nothing is required. For good service, rounding up or 5 to 10% is generous. At a cafe or bar, the small change or a euro or two is normal. Do not feel pressured to tip 15 to 20% the way you would at home." },
        { q: "Can you tip by card in the Netherlands?", a: "Yes, easily. The Netherlands is card-first and the PIN machine often has a tip option after the amount appears. Add the fooi there, or tell the server the total you want to pay. Cash works too." },
        { q: "Is a service charge added in the Netherlands?", a: "No. Dutch restaurants do not add a service charge, and the listed price is what you pay. Any tip is a modest, optional extra." }
      ],
      sources: {
        links: [
          { label: "US State Department: Netherlands country information", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Netherlands.html", type: "gov" }
        ],
        judgment: "Dutch tipping is cultural and modest, and the PIN-machine tip option is now common. The amounts here are our own read from recent traveler reports and local guidance, not a single official table. Checked July 2026."
      }
    },
    {
      slug: "bringing-your-pet",
      glance: [
        { k: "Process", v: "Shared EU entry" },
        { k: "Need", v: "ISO chip, rabies, EU health cert" },
        { k: "Enter within", v: "10 days of endorsement" },
        { k: "Coming home", v: "Simple CDC path" }
      ],
      live: true,
      topic: "pets",
      insurance: true,
      title: "Bringing a dog or cat to the Netherlands from the US",
      description: "The Netherlands runs on the shared EU health-certificate process, with no quarantine and no titer. What is Dutch-specific on arrival and afterwards.",
      h1: "Bringing your dog or cat to the Netherlands.",
      lede: "the Netherlands runs on the single EU pet-entry process for a US-origin dog or cat: microchip, rabies in the right order, and an EU health certificate on a 10-day clock. No quarantine, no rabies titer. Here is what that means for the Netherlands, and the local parts worth knowing.",
      checked: "Jul 2026",
      checkedISO: "2026-07-19",
      answer: "the Netherlands uses the <b>shared EU pet-entry process</b>, so there is no separate national permit and nothing unusual at the border. Your pet needs an <b>ISO microchip, a rabies vaccination given after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS</b>, then must enter within <b>10 days</b> of that endorsement. There is <b>no quarantine and no rabies titer</b> for a pet coming straight from the US. The full step-by-step, the ordering trap, and the current fees are on one page: see <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a>. Below are the the Netherlands-specific notes. Coming home to the US is the easy part.",
      sections: [
        {
          h: "the Netherlands runs on the EU process",
          icon: "health",
          key: { fig: "10 days", tag: "No Dutch-only permit", text: "The standard EU move: an ISO microchip first, a rabies shot after the chip, and an EU Animal Health Certificate endorsed by USDA APHIS. Enter the Netherlands within 10 days of that endorsement.", tone: "teal" },
          p: ["There is no the Netherlands-only pet permit and no national quarantine. Bringing a dog or cat into the Netherlands from the US is the standard EU move: an ISO microchip first, a rabies vaccination after the chip, then an EU Animal Health Certificate completed by a USDA-accredited vet and endorsed by APHIS, with the pet arriving within 10 days of endorsement. A first rabies shot adds a 21-day wait before travel.", "Because the core process is identical across the EU (and the countries that follow its rules), we do not repeat it per country. The full sequence, the microchip-before-rabies trap that costs people the most time, the 10-day clock, and the current APHIS endorsement fees all live on <a href=\"/eu-pet-health-certificate\">the EU pet health certificate</a> page. Read that first, then come back for the the Netherlands notes."]
        },
        {
          h: "The Netherlands-specific parts",
          icon: "receipt",
          key: { fig: "Check", tag: "At the border", text: "Dutch customs may ask to see the endorsed certificate and confirm the chip, and pets should arrive through a designated traveller point of entry, which Amsterdam Schiphol is.", tone: "teal" },
          p: ["At the border, Dutch customs may ask to see the endorsed certificate and confirm the microchip, and pets should enter through a designated traveller point of entry, which Amsterdam Schiphol is. There is no dog or cat tapeworm rule for the Netherlands, unlike Ireland, Finland or Malta.", "After you settle in, the Netherlands requires dogs to be microchipped and registered with an approved database, handled by a local vet. The Netherlands moved away from a breed ban toward owner-behaviour rules, so there is no strict national banned-breed list, but standard leash and control rules apply. Some municipalities levy a dog tax (hondenbelasting), so check whether yours does once you have an address."]
        },
        {
          h: "The money side, honestly",
          p: [
            "No insurance product reimburses quarantine boarding anywhere, so if you later move on to a destination that requires it, budget that as an out-of-pocket cost. Nationwide is the one US pet insurer that reimburses vet care at any licensed vet worldwide, and even it excludes boarding.",
            "US pet insurance is written around a pet that lives in the US. Most policies carry a policy territory, typically the US and sometimes Canada or Puerto Rico, and even the ones that reimburse vet care worldwide generally require your primary residence to stay in the US. So a policy may well pay a vet bill on a trip abroad and still lapse the day the move becomes permanent. Read your own policy's territory and residency wording before you assume it travels with you, and for a permanent move plan on taking out local pet insurance in your new country.",
            "As a rough sanity check on any quote, and this is our read of current market pricing rather than an official figure: a standard international pet move tends to run about $1,500 to $6,000. Full-service door-to-door typically costs 30 to 50 percent more than a transport-only booking where you handle the vet work and paperwork yourself.",
            "The costs people forget are the small ones. USDA APHIS charges a user fee to endorse an export health certificate, currently $101 where no test verification is needed, $160 for a certificate covering one or two tests, and $206 for three to six tests, with rabies vaccination not counted in that tally. These rates rose on 10 January 2025, the first APHIS fee adjustment since 2012. Add an airline-compliant crate (roughly $50 to $400), the travel vet visits themselves, boarding on a layover, and summer heat surcharges.",
            "Pet shipping attracts scammers, so verify any company before you send money. IPATA, the International Pet and Animal Transportation Association, is a trade association: its members ship under their own company names, IPATA itself does not ship pets, and there is no legitimate shipper with \"ipata\" in its name. Scammers clone real shippers' sites, logos and testimonials, so check the company in the member directory at ipata.org rather than trusting a logo on a website. Treat these as red flags: a quote dramatically below every other quote, a domain registered less than six months ago, email coming from a gmail address rather than the company domain, and any request to pay by Western Union or MoneyGram.",
            "One dated note for EU moves: the EU's pet travel rules were remade by Commission Delegated Regulation (EU) 2026/131, which applies from 22 April 2026, with the new certificate models set out in Implementing Regulation (EU) 2026/705. On the US side, APHIS is switching to the new non-commercial certificate on 1 October 2026 and can endorse the current one up to 30 September 2026. We cover the detail on the <a href=\"/eu-pet-health-certificate\">EU pet health certificate</a> page."
          ]
        },
        {
          h: "Coming back to the US is the easy part",
          icon: "plane",
          key: { fig: "Easy", tag: "The return trip", text: "A dog flying home from the Netherlands is on the simplest CDC path: usually a CDC Dog Import Form receipt, a microchip, and a minimum age of 6 months.", tone: "teal" },
          p: ["Good news for the return trip: a dog flying home to the US from the Netherlands is on the simplest CDC path, typically a <a href=\"/bringing-a-dog-into-the-us\">CDC Dog Import Form</a> receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement.", "For the wider picture, including how the Netherlands compares with other destinations on lead time and cost, see <a href=\"/traveling-with-a-pet\">traveling with a pet</a>."]
        }
      ],
      official: {
        label: "USDA APHIS: pet travel from the US to the Netherlands",
        url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-netherlands",
        note: "The US-side steps and the EU health certificate for the Netherlands. the Netherlands applies the shared EU process, and the destination's own authorities are the final word on the day."
      },
      faqs: [
        {
          q: "Is there anything Netherlands-specific beyond the EU rules?",
          a: "A little. The Netherlands has no tapeworm rule (that applies to Ireland, Finland and Malta) and no strict national breed ban. Dogs are microchipped and registered with an approved database, and some municipalities charge a dog tax (hondenbelasting), so check whether yours does once you settle."
        },
        {
          q: "Does my pet have to go into quarantine in the Netherlands?",
          a: "No. the Netherlands applies the shared EU pet-entry process, which has no quarantine and no rabies titer for a pet coming straight from the US. Your pet needs a microchip, a rabies vaccination in the right order, and an EU Animal Health Certificate endorsed by APHIS, then must arrive within 10 days of endorsement. See our EU pet health certificate page for the full process."
        },
        {
          q: "Do I need to quarantine my pet coming back to the US from the Netherlands?",
          a: "No. A dog returning to the US from the Netherlands is on the CDC easy path: typically a CDC Dog Import Form receipt, a microchip, a minimum age of 6 months, and a healthy appearance, with no titer and no quarantine. Cats have no federal requirement. See our guide to bringing a dog into the US for the details."
        }
      ],
      sources: {
        links: [
          {
            label: "True Trip Costs: the EU pet health certificate, the shared microchip, rabies and certificate process for all EU countries including the Netherlands",
            url: "/eu-pet-health-certificate",
            type: "internal"
          },
          {
            label: "USDA APHIS: pet travel from the United States to the Netherlands, the US-side steps and EU health certificate",
            url: "https://www.aphis.usda.gov/pet-travel/us-to-another-country-export/pet-travel-us-netherlands",
            type: "gov"
          },
          {
            label: "CDC: entry requirements for dogs from dog rabies-free or low-risk countries, for the return leg",
            url: "https://www.cdc.gov/importation/dogs/rabies-free-low-risk-countries.html",
            type: "gov"
          }
        ],
        judgment: "the Netherlands applies the shared EU pet-entry framework, set by the EU and administered on the US side by APHIS, not by us. The process is stable in substance, though the EU certificate format changes on 1 October 2026, which we cover on the EU pet health certificate page. The local registration and any breed rules vary, so we point you to the official pages and dated this July 2026."
      }
    },
  {
    slug: "tourist-tax",
    glance: [
      { k: "Amsterdam", v: "12.5% of the room rate" },
      { k: "Most other towns", v: "A few euros per person, per night" },
      { k: "Hotel VAT", v: "Rose from 9% to 21% in January 2026" },
      { k: "Amsterdam, added at checkout", v: "About 10% of the quoted rate" },
    ],
    live: true,
    topic: "tourist-tax",
    title: "Netherlands tourist tax: what a hotel adds in 2026",
    description:
      "Amsterdam takes 12.5% of a room rate, a proportion no European city beats, and hotel VAT reached 21% in January 2026. What both do to your bill.",
    h1: "Netherlands tourist tax, and the VAT rise that landed in January",
    lede:
      "Short answer: two separate charges sit on a Dutch hotel bill, and only one of them is a surprise. The 21% VAT is already inside the rate you were quoted. Amsterdam's city tax is not, and it adds about 10% at checkout.",
    checked: "Aug 2026",
    checkedISO: "2026-08-11",
    answer:
      "A Dutch hotel bill carries a <b>city tourist tax</b> and <b>national VAT</b>, and they are unrelated to each other. In Amsterdam the city takes <b>12.5% of the net room rate</b>, a percentage no other European city beats, and it keeps taking it however long you stay. Elsewhere the model is different: most municipalities ask for <b>a few euros for each guest, each night</b>, a flat figure set town by town. The second charge is national. Hotel VAT stood at 9% until the end of 2025 and <b>became 21% on 1 January 2026</b>, wherever in the country you sleep. Stacked in Amsterdam the two come to roughly <b>a third of the room</b> in total government take, but that is not what lands at checkout. Dutch law requires consumer prices to include VAT, so the 21% is already inside the rate you compared. What is genuinely added is the city tax, and because it is charged on the room <b>before</b> VAT it works out at about <b>10% of the price you were quoted</b>. That is the number to budget for.",
    official: {
      label: "Dutch government: VAT on overnight accommodation rose to 21%",
      url: "https://business.gov.nl/amendments/vat-overnight-accommodation-goes-up/",
      note:
        "The national VAT change. City tourist tax is set by each municipality, so the rate for anywhere outside Amsterdam is published by that town rather than nationally.",
    },
    sections: [
      {
        h: "Amsterdam takes a percentage, and takes the most in Europe",
        key: {
          fig: "12.5%",
          tag: "Of the room rate",
          text:
            "Charged on the net nightly rate, before VAT, with no cap on how many nights it runs for. No European city charges a higher percentage.",
          tone: "amber",
        },
        p: [
          "The capital bills a proportion rather than a flat sum, and <b>12.5% of the net nightly rate</b> is not matched anywhere else on the continent. Nothing caps it, so a fortnight attracts the same proportion as a weekend, and the sum is worked out on the room price before VAT goes on.",
          "It is collected by the property, not by you at a desk, and it usually appears as a separate line when you settle up. That timing is what catches people: a rate compared on a booking site is frequently the pre-tax number, so the figure you decided on and the figure you are asked for can differ by a noticeable margin.",
        ],
      },
      {
        h: "Everywhere else charges by the head, not by the rate",
        key: {
          fig: "A few euros",
          tag: "Per person, per night",
          text:
            "Rotterdam, Utrecht, The Hague and most smaller towns charge a small flat amount for each guest each night, set locally rather than nationally.",
          tone: "teal",
        },
        p: [
          "Outside the capital the model changes completely. Most towns ask for <b>a modest fixed sum for every guest, every night</b>, usually a handful of euros, with the figure decided locally, which means no single national number exists to quote you. On a cheap room that flat fee is proportionally heavier than Amsterdam's percentage. On an expensive one it is far lighter.",
          "The practical consequence is that the tax is worth checking per town rather than assumed from the country. A family of four in a modest place outside the capital can pay more tourist tax than a couple in a similar room in Amsterdam.",
        ],
      },
      {
        h: "The VAT on your room more than doubled this year",
        key: {
          fig: "9% to 21%",
          tag: "From 1 January 2026",
          text:
            "Hotel accommodation moved from the low VAT band to the standard one. Camping stays were left on the low band.",
          tone: "amber",
        },
        p: [
          "Through 2025 a Dutch hotel room sat in the reduced VAT band, at <b>9%</b>. With effect from <b>1 January 2026</b> accommodation was moved up to the standard band, <b>21%</b>. Campsites were left where they were. This is national, so it applies in Maastricht exactly as it does in Amsterdam.",
          "Because it landed recently, displayed prices are the thing to watch. When this page was checked, some booking platforms had not fully worked the new rate into the totals they showed, which means the number you are quoted deserves a second look rather than trust.",
        ],
      },
      {
        h: "What to actually do about it",
        key: {
          fig: "Ask for all in",
          tag: "Before you book",
          text:
            "The only reliable protection is asking the property for the total including city tax and VAT, and comparing that figure rather than the headline rate.",
          tone: "teal",
        },
        p: [
          "Ask the property for the <b>total including tourist tax and VAT</b> and compare hotels on that, because the advertised rate is not a like-for-like number between a platform and a direct booking. If you are choosing between Amsterdam and a base outside it, run the sum both ways: the percentage model and the flat-fee model can reverse which option is cheaper.",
          "Do not expect to reclaim any of it. Tourist tax is not refundable, and hotel VAT is not part of the visitor refund scheme either, which covers <b>goods you carry home unused</b> rather than anything you consume in the country. Shopping is a separate matter, and worth a form if you spend meaningfully in one store.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much is the tourist tax in Amsterdam?",
        a: "The city takes 12.5% of the net room rate, a proportion nowhere else in Europe matches, and no cap limits how many nights it applies to. It is charged on the price before VAT and normally added when you check out rather than when you book. On top of it sits the national 21% VAT on hotel rooms, which takes the total government take on the room to roughly a third. Only the city tax is added at checkout though, because the VAT is already inside the quoted rate, and measured against that quoted price the city tax comes to about 10%.",
      },
      {
        q: "Did hotel VAT really go up in the Netherlands?",
        a: "Yes. On 1 January 2026 VAT on overnight accommodation moved from the reduced 9% band to the standard 21% band, nationwide. Camping stays remained at 9%. It is a large jump and it arrived recently, so some displayed prices lagged behind it, which makes checking the all-in total worthwhile rather than assuming the quoted rate already includes it.",
      },
      {
        q: "Can I get the tourist tax or hotel VAT refunded?",
        a: "No. Neither is refundable to a visitor. The Dutch VAT refund scheme covers goods that non-EU visitors take home unused, above a per-store minimum, and it specifically excludes accommodation, meals and anything else consumed while you are in the country. Budget for the hotel taxes as a real cost rather than something recoverable later.",
      },
    ],
  },
    {
      slug: "rail",
      glance: [
        { k: "Pass?", v: "No, the country is too small" },
        { k: "How to pay", v: "Tap a contactless card" },
        { k: "Reservations", v: "None on domestic trains" },
        { k: "Watch for", v: "Check out or you lose 33.30" }
      ],
      live: true,
      topic: "rail",
      caution: "medium",
      title: "Do you need a rail pass in the Netherlands? No",
      description: "The country is small enough that fares stay low and a pass never earns its price. The real money risk is forgetting to check out and losing 33.30 euros.",
      h1: "Do you need a rail pass in the Netherlands?",
      lede: "This is the shortest rail answer on the site, because the Dutch network removes the question. Trains are frequent, distances are short, nothing needs reserving, and you pay by tapping the card already in your pocket.",
      checked: "Aug 2026",
      checkedISO: "2026-08-13",
      answer: "<b>No</b>, and there is not much of a debate to have. The Netherlands is small enough that almost every trip a visitor makes is <b>under two hours</b>, fares are correspondingly low, and <b>no domestic train requires a seat reservation</b>, so the flexibility a pass sells you is something you already have. Just <b>tap a contactless Visa or Mastercard</b>, or a phone wallet, at the reader. The system is called <b>OVpay</b> and it works with a foreign card. Two things to actually remember: <b>American Express is not accepted</b>, and you must <b>check out at the end of every journey</b> or lose a deposit of <b>33.30 euros</b>. That check-out habit, not the pass question, is where visitors lose money here.",
      sections: [
        {
          h: "Tap in, and then genuinely tap out",
          icon: "card",
          key: { fig: "33.30 euros", tag: "The check-out trap", text: "Tapping in reserves a deposit against your card. Tap out at the end and you are charged the real fare and the deposit is released. Walk off the platform without tapping and the deposit is what you paid for the trip.", tone: "amber" },
          p: [
            "Dutch public transport runs as one national system: the same tap works on trains, trams, buses, metros and ferries. Since 2023 you can use your <b>own contactless bank card or phone</b> rather than buying a local travel card, under the name <b>OVpay</b>, and a foreign <b>Visa or Mastercard</b> is fine. <b>American Express and Diners Club are not accepted</b>, which is the one card-choice detail worth checking before you land.",
            "Here is the part that costs people money, and it is a genuine design quirk rather than a scam. The system charges by distance, so it needs both ends of your journey. Tapping in places a hold of about <b>33.30 euros</b> against the card. Tap out at your destination and you are charged the actual fare, usually a few euros, and the hold is released. <b>Fail to tap out and the hold becomes the fare.</b> The readers are on the platform or at the gate line, not on the train, so the habit to build is looking for one every single time you leave a station, including at an interchange where you have not left the building.",
            "It is fixable. The <b>OVpay app</b> shows your journeys and charges and is where you report a missed check-out to get the difference back. If you tapped in and then decided not to travel, tapping out at the same station within an hour costs you nothing."
            // FUTURE UtilityBox MOUNT POINT.
            // A rail-pass affiliate belongs here, at the end of this section, once one is
            // vetted. Nothing renders now on purpose: for most readers the answer above is
            // "do not buy a pass," and that has to read as a finished thought rather than a
            // run-up to a product. Activating it is a data change in three parts, no
            // restructuring: (1) add `railPass: true` to this spoke object, (2) add a
            // railPass entry to the affiliate registry in src/data/links.js, (3) add the
            // matching `railPassUrl` gate and <UtilityBox> block to Spoke.astro alongside
            // the existing esim, insurance and carExcess blocks, which already carry the
            // disclosure. Prop shape is the same: href, label, and the do-you-need-it prose
            // passed as the slot.
          ]
        },
        {
          h: "The travel card you no longer need to buy",
          icon: "qr",
          key: { tag: "Skip the plastic", text: "The old smartcard is being retired. The anonymous version stopped being sold in mid 2026 and the existing cards stop working at the end of 2027, so a visitor arriving now should not spend money on one.", tone: "teal" },
          p: [
            "For years the answer to paying for Dutch transport was the <b>OV-chipkaart</b>, a plastic smartcard you bought for a few euros and loaded with credit. Guidance recommending that is now out of date, and following it costs you a card fee plus whatever credit you leave unspent. The <b>anonymous version stopped being sold in July 2026</b>, existing cards are being wound down and stop working at the <b>end of 2027</b>, and a replacement product is arriving in phases for residents who need season tickets and age discounts.",
            "None of that transition is your problem as a visitor. Tapping your own bank card sidesteps the whole thing, and it is what the Dutch tourism side now recommends. If you would rather hold a ticket, the operator's app sells single journeys as a <b>QR code</b> on your phone, which is also a reasonable answer if you are traveling with someone whose card you do not want to use.",
            "The one case for buying a paper or disposable ticket at a machine is if you have no contactless card at all, and it carries a surcharge of around <b>1.60 euros</b> on top of the fare for the privilege."
          ]
        },
        {
          h: "Intercity or Sprinter, and the small print",
          icon: "ticket",
          key: { tag: "Two speeds, one fare", text: "Intercity trains skip the small stops, Sprinters call at everything, and the standard fare between two stations is the same either way. So take the Intercity unless your station is one the Sprinter serves.", tone: "teal" },
          p: [
            "The two service names you will see on the board are <b>Intercity</b> and <b>Sprinter</b>. Intercity runs between the larger cities and skips the minor stations. <b>Sprinter</b> stops at everything, which is what you want for smaller towns and suburbs. The ordinary fare between any two stations does not change between them, so this is a question of time rather than money: take the Intercity if it serves your stop.",
            "Two exceptions to the flat picture. <b>Intercity Direct</b>, the faster run on the Amsterdam to Schiphol to Rotterdam to Breda line, carries a <b>small supplement</b> for the Schiphol to Rotterdam section, which is easy to miss and easy to pay. And the main routes generally run at least twice an hour, often more, which is the underlying reason a pass is pointless here: turning up and going is already the normal way to travel.",
            "Children get a good deal worth knowing if you are a family: the youngest travel free, and <b>children up to eleven can travel free</b> accompanied by an adult under the operator's child scheme, which you set up rather than being given automatically. For how this compares elsewhere, see <a href='/rail-passes'>our rail-pass verdicts by country</a>, with the <a href='/netherlands'>Netherlands money guide</a> covering everything else."
          ]
        }
      ],
      faqs: [
        { q: "Is a rail pass worth it in the Netherlands?", a: "No. Distances are short, fares are low, trains run at least twice an hour on main routes and no domestic service needs a reservation, so a pass has no inefficiency to fix. Tap a contactless card instead." },
        { q: "Can I use my US credit card on Dutch trains?", a: "Yes, if it is a contactless Visa or Mastercard, or one of those in a phone wallet. The system is called OVpay and it works on trains, trams, buses and metros. American Express and Diners Club are not accepted." },
        { q: "What happens if I forget to check out on a Dutch train?", a: "You are charged the deposit that was held when you tapped in, about 33.30 euros, instead of the real fare. You can report the missed check-out in the OVpay app and recover the difference, but the habit of tapping out every time is what avoids it." },
        { q: "Do I still need an OV-chipkaart?", a: "No. The anonymous card stopped being sold in July 2026 and existing cards stop working at the end of 2027. Visitors should tap their own contactless bank card or buy a single ticket in the operator's app instead of paying for a card." },
        { q: "What is the difference between an Intercity and a Sprinter?", a: "Intercity trains run between larger cities and skip minor stations. Sprinters stop everywhere, so they serve smaller towns. The standard fare between two stations is the same on either, so pick on speed rather than price." }
      ],
      sources: {
        links: [
          { label: "Holland.com: the official Dutch tourism guidance on paying for public transport, recommending OVpay contactless for visitors", url: "https://www.holland.com/global/tourism/getting-around/information/getting-around-in-the-netherlands/pay-in-public-transport", type: "tourism" },
          { label: "Amsterdam Tips: Dutch train fares and the smartcard system, including the check-in deposit and the single-ticket surcharge", url: "https://www.amsterdamtips.com/train-tickets-netherlands", type: "guide" },
          { label: "Amsterdam Tips: the OV-chipkaart, the deposit mechanics and the phase-out timetable", url: "https://www.amsterdamtips.com/ov-chipkaart", type: "guide" }
        ],
        judgment: "The contactless system, the absence of domestic seat reservations and the smartcard phase-out dates are all documented by the operator and the national tourism body, so the practical advice here is firm. The 33.30 euro check-in deposit is consistently reported and is the figure the system has used, though it is the kind of number that gets revised, so treat it as the current amount rather than a permanent one. The Intercity Direct supplement exists but the amount varies, so we describe it without quoting a figure. That a pass is pointless in the Netherlands is our own read, and it is about as safe as a judgment on this site gets, resting on short distances, low fares and turn-up-and-go frequency rather than on any single price. Checked Aug 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Among the best in Europe" },
        { k: "Carrier roaming", v: `${S.dayPassGlance}` },
        { k: "Cheapest", v: "A travel eSIM, a few $ per GB" },
        { k: "Signal gaps", v: "None worth planning around" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "eSIM for the Netherlands: purely a cost decision",
      description: `Dutch coverage is among the best in Europe, trains included, so there is nothing to plan around. US roaming runs ${S.dayPass}; an eSIM is a few per gigabyte.`,
      h1: "Staying connected in the Netherlands.",
      lede: "The Netherlands has some of the best mobile coverage in Europe, trains and countryside included, so there is nothing here to plan around. That makes this page short and the decision purely financial.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>among the best in Europe</b>, in the cities, across the countryside and on the trains, so this is <b>purely a cost decision</b>. Your US carrier charges about <b>${S.dayPass}</b> to roam (<b>AT&amp;T and Verizon</b> day passes), and <b>T-Mobile</b> is worth checking before you buy anything, because its mid and upper tiers include a real <b>high-speed allowance</b> abroad, from <b>5GB up to 30GB</b> depending on plan, slowing to <b>${S.throttle}</b> only after that. A <b>Nomad eSIM</b> is a few dollars per gigabyte, activates before you fly and works from landing. A Dutch prepaid SIM is also cheap and carries <b>EU roaming</b>, which is worth a look if the trip continues into the rest of the EU. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "A cost question, and only that",
          icon: "roamfee",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: `A US carrier day pass runs about ${S.dayPassGlance}. T-Mobile is the exception, with ${S.tmoRange} of high-speed data abroad on its mid and upper tiers, so check yours before buying.`, tone: "teal" },
          p: [
            `Dutch networks are strong everywhere you are likely to be, so the only question is what you pay. The expensive default is roaming on your US plan: <b>AT&amp;T and Verizon</b> charge about <b>${S.dayPass}</b>, roughly <b>${S.week}</b> for a week. <b>T-Mobile</b> is the exception worth checking first: its current tiers include a genuine <b>high-speed allowance</b> abroad, roughly <b>${S.tmoLow}</b> on Experience More, Magenta MAX and Go5G Plus, <b>${S.tmoMid}</b> on Experience Beyond and Go5G Next and <b>${S.tmoHigh}</b> on Better Value, slowing to <b>${S.throttle}</b> only once that is used up. The entry <b>Essentials</b> tier is throttled from the start. Google Fi and Visible set their own terms, so read your own plan rather than assuming.`,
            `Whatever you choose, do not roam with <b>no plan at all</b>. Pay-per-use data runs about <b>${S.ppu}</b>, thousands per gigabyte, and phones use data in the background, so <b>turn off data roaming</b> until an eSIM or a pass is active.`
          ]
        },
        {
          h: "The eSIM, and when a Dutch SIM is the better buy",
          icon: "qr",
          key: { fig: "Few $/GB", tag: "The cheap option", text: "A travel eSIM is the cheapest way to get real data here. A Dutch prepaid SIM carries EU roaming, so it can be the better buy if the trip continues into the EU.", tone: "teal" },
          p: [
            "A <b>travel eSIM</b> is the cheapest way for most visitors to get real data in the Netherlands. A <b>Nomad eSIM</b> is a few dollars per gigabyte, well under day-pass pricing, it <b>activates before you fly</b> and works from landing, and your US number stays reachable on your normal plan while the eSIM carries the data. Which Dutch network it rides barely matters: KPN, VodafoneZiggo and Odido are all strong where visitors go.",
            "The alternative worth a moment is a <b>Dutch prepaid SIM</b>, which is inexpensive and, because the Netherlands is in the EU, carries <b>Roam Like At Home</b> across the rest of the EU at no extra cost. On a single-country trip that is no advantage. On a two or three week loop through Belgium, Germany and France it can beat a per-country eSIM, so if Amsterdam is your first stop of several, price both."
          ]
        },
        {
          h: "Nothing much to warn you about",
          icon: "phoneok",
          key: { fig: "No real gaps", tag: "Coverage", text: "Strong in the cities, across the polders and on the trains, with widespread 5G. There is no gap here worth planning your trip around.", tone: "teal" },
          p: [
            "This section is short because the country genuinely does not give us much. Coverage is strong in <b>Amsterdam, Rotterdam, Utrecht and The Hague</b>, across the countryside and the polders, and on the <b>trains</b>, which is not true of long-distance rail in neighboring Germany. 5G is widespread in the cities. There is no mountain range, no Outback and no tunnel network to warn you about, and we would rather say so than invent a caveat to make the page look thorough.",
            "The one habit still worth keeping is downloading what you need before a cycling day out in the countryside, on the general principle that a phone can fail for reasons unrelated to signal. This guide is written for US travelers departing the US. For more, see <a href='/netherlands/cash-or-card'>cash or card in the Netherlands</a>, <a href='/netherlands/rail'>trains in the Netherlands</a>, and the <a href='/netherlands'>Netherlands money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need an eSIM for the Netherlands?", a: `For most US travelers it is the cheapest way to get real data. Dutch coverage is excellent, so it is purely a cost question: a Nomad eSIM is a few dollars per gigabyte against about ${S.dayPass} for an AT&T or Verizon roaming pass. Set it up before you fly and it works from landing.` },
        { q: "How much does it cost to use my US phone in the Netherlands?", a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily, which matters on a trip longer than 10 days. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}. Never roam with no plan, since pay-per-use runs about ${S.ppu}.` },
        { q: "Is a Dutch SIM card better than an eSIM?", a: "For a single-country trip, no, the eSIM is simpler and cheaper. For a longer European loop it can be, because a Dutch prepaid SIM carries EU roaming across the rest of the EU at no extra cost. If the Netherlands is your first stop of several, price both." },
        { q: "Will I have signal on Dutch trains?", a: "Generally yes. Coverage on the Dutch rail network is good, which is not true of long-distance trains in some neighboring countries. There is no signal gap in the Netherlands worth planning a trip around." }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass, the daily rate and the covered-destination list", url: "https://www.att.com/international/day-pass/", type: "card" },
          { label: "US State Department: Netherlands country information for US travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/TheNetherlands.html", type: "gov" }
        ],
        judgment: "Checked Aug 2026. This is a short spoke on purpose. Dutch coverage is genuinely excellent and there is no registration quirk, no network to favour and no signal gap worth a paragraph, so padding it out with invented detail would make it look more useful while telling you less. The honest content is the cost comparison and the EU-roaming point about a local SIM on a multi-country trip. Carrier day-pass figures are an Aug 2026 snapshot and move faster than anything else we cover, so check your own plan before you fly."
      }
    },
    {
      slug: "medical-costs",
      exposureCategory: "payInFull",
      exposureQuote: "You pay as an uninsured patient and claim from your own insurer.",
      glance: [
        { k: "The GP", v: "Is the front door here" },
        { k: "You pay", v: "As an uninsured patient" },
        { k: "Distances", v: "Short, everywhere" },
        { k: "Real risk", v: "An admission, and getting home" }
      ],
      live: true,
      topic: "health",
      title: "Getting sick in the Netherlands: go to the huisarts",
      description: "Dutch healthcare runs through the GP, the huisarts, who is the route to everything else. Visitors pay, distances are short, and costs are contained.",
      h1: "What does getting sick in the Netherlands cost a visitor?",
      lede: "The Netherlands is easy to be ill in, provided you use it the way it is designed. Almost everything runs through the GP, and turning up at a hospital instead is the mistake visitors make.",
      checked: "Aug 2026",
      checkedISO: "2026-08-20",
      answer: "Dutch healthcare is built around the <b>huisarts</b>, the general practitioner, who is the <b>gateway to nearly everything else</b>. As a visitor you pay as an <b>uninsured patient</b>, and outside surgery hours the <b>huisartsenpost</b>, the out-of-hours GP service, is where you go for anything that is not an emergency. Going straight to a hospital emergency department for something a GP should handle is the classic visitor error, and you may well be redirected. For a genuine emergency, <b>112</b> and the <b>spoedeisende hulp</b> are the right call. The country is <b>small and densely served</b>, so distance is not a cost driver, and costs are <b>contained</b> by regulation. The exposure is an admission and the flight home.",
      insurance: true,
      insuranceNote: "The Netherlands is a calm one. Care runs through the GP, distances are short, and costs are contained. Cover here is for an admission and a flight home rather than for everyday trouble, and we would rather say that plainly than dress it up. Faye covers trip medical and evacuation.",
      careFirst: "If it looks serious, call 112 or go to the spoedeisende hulp first and sort the payment afterwards.",
      sections: [
        {
          h: "The huisarts is the front door",
          icon: "health",
          key: { tag: "Use the system", text: "Dutch care runs through the GP. Outside surgery hours the huisartsenpost handles non-emergencies. Going straight to a hospital for GP-level trouble gets you redirected.", tone: "teal" },
          p: [
            "The Dutch system is <b>gatekept by design</b>, and it works well if you use it as intended. The <b>huisarts</b> is the first point of contact for almost everything, and the route to specialists, imaging and hospital care. Outside surgery hours the <b>huisartsenpost</b> covers the same ground.",
            "The mistake visitors make is heading for a hospital emergency department with something a GP handles, which is both slower and more expensive, and you may be <b>redirected</b> anyway. Ask your accommodation which huisartsenpost covers the area. For a real emergency, none of this applies: <b>112</b> and the <b>spoedeisende hulp</b>. <b>If it looks serious, call 112 or go to the spoedeisende hulp first and sort the payment afterwards.</b>"
          ]
        },
        {
          h: "You pay, and it stays proportionate",
          icon: "receipt",
          key: { tag: "Contained", text: "A visitor pays as an uninsured patient. Dutch costs are regulated and contained, and the country is small enough that distance never adds to the bill.", tone: "teal" },
          p: [
            "As a visitor you pay as an <b>uninsured patient</b>, and claim from your own insurer afterwards. Dutch healthcare costs are <b>regulated</b> and the system is efficient, so a bill here is a real number rather than an alarming one.",
            "The Netherlands is also <b>small and densely served</b>. There is nowhere in the country that is far from a hospital, which removes the evacuation-distance problem entirely and makes this one of the lower-exposure destinations we cover."
          ]
        },
        {
          h: "Why there are no prices on this page",
          icon: "tag",
          key: { tag: "Absence is not zero", text: "We have not sourced an official Dutch price list for visitors that we would stand behind, so we have published none.", tone: "teal" },
          p: [
            "We would rather say this than pad the page. We have <b>not sourced an official Dutch tariff for non-resident care</b> that we would put our name to, so no local price figure appears here. On a medical page a plausible-sounding number is not a small error, because it is something a person might act on while unwell.",
            "The structure is the useful part: <b>the huisarts is the route</b>, <b>you pay as an uninsured patient</b>, <b>costs are regulated and contained</b>, and <b>distance is never the problem</b>. Dutch tariffs are published, so a sourced figure is achievable on a later pass, and we would rather add one properly than estimate."
          ]
        },
        {
          h: "What this means for your money",
          icon: "cash",
          key: { tag: "A modest case", text: "This is one of the calmer countries on the site. Cover is for an admission and a flight home, and we are not going to pretend it is more than that.", tone: "teal" },
          p: [
            "Honestly, the Netherlands makes one of the <b>weaker cases for medical cover</b> on this site. Care is good, close, gatekept sensibly, and priced within reason. A traveler on a short city trip who is generally healthy is not carrying a large medical exposure here.",
            "What remains is the <b>admission</b> and the <b>flight home</b>, which are real but narrow. For paying on the ground, see the <a href='/netherlands/cash-or-card'>Netherlands cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I go to the hospital or a GP in the Netherlands?", a: "The GP, the huisarts, unless it is a genuine emergency. Dutch care is gatekept through the GP, and outside surgery hours the huisartsenpost covers non-emergencies. Turning up at a hospital with GP-level trouble is slower, dearer and may get you redirected." },
        { q: "Is healthcare free in the Netherlands for tourists?", a: "No. You pay as an uninsured patient and claim from your own insurer. Costs are regulated and contained, so the bill is a real one rather than an alarming one." },
        { q: "How much does a doctor cost in the Netherlands?", a: "We have not published a figure. Dutch tariffs are published and a sourced number is achievable on a later pass, but we did not verify one for this page and will not print a recalled figure on a medical page." },
        { q: "What is the emergency number in the Netherlands?", a: "112. For a genuine emergency call it or go to the spoedeisende hulp, the hospital emergency department. The GP gatekeeping does not apply to real emergencies." },
        { q: "Do I need travel insurance for the Netherlands?", a: "It makes one of the weaker cases on this site, and we would rather say so. Care is good, close and reasonably priced. Cover is for an admission and a flight home." }
      ],
      sources: {
        links: [
          { label: "US State Department: Netherlands country information, including health and medical care guidance for travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Netherlands.html", type: "gov" }
        ],
        judgment: "No price figures appear here; Dutch tariffs are published and a sourced figure is achievable on a later pass. We have kept this page deliberately calm, as instructed by the shape of the facts rather than the shape of the affiliate link: the Netherlands is small, well served and regulated, and the honest case for medical cover here is narrower than in most countries we cover. The huisarts gatekeeping is a practical point that saves visitors money and time. Checked August 2026."
      }
    }
  ]
};
