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

  title: "Money in the Netherlands (2026): Cards, Cash, ATMs and Amsterdam's Tourist Tax | True Trip Costs",
  description: "How to handle money in the Netherlands as a US traveler in 2026: why a debit card works better than a credit card, fee-free Geldmaat ATMs, light round-up tipping, and Amsterdam's percentage-based tourist tax on top of a new 21% VAT on hotel rooms. Checked July 2026.",

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
    text: "Two separate charges affect a Dutch hotel bill. Amsterdam's <b>tourist tax</b> is 12.5% of the room rate, the highest in Europe, while most other Dutch towns charge a small flat fee per person per night instead. Separately, and nationwide, <b>VAT on hotel accommodation jumped from 9% to 21%</b> on January 1, 2026, a change some booking sites had not fully reflected in their displayed prices as of when this guide was checked. In Amsterdam, the two together can push the effective tax on a room to roughly 33.5%, well above what a quoted nightly rate might suggest. If you shop, non-EU visitors can also reclaim VAT (21% standard rate, 9% on most other goods) on purchases over a per-store minimum, typically around 50 euros: ask for a tax-free form, keep the goods unused, and get it stamped by customs when you leave the EU."
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
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Euro (EUR)" },
        { k: "Cards", v: "Card-first, contactless everywhere" },
        { k: "Sometimes", v: "Card-only, or Dutch PIN only" },
        { k: "Cash for", v: "Very little" }
      ],
      live: true,
      topic: "cash",
      title: "Do I need cash in the Netherlands, or can I use cards? (2026) | True Trip Costs",
      description: "Barely any. The Netherlands is strongly card-first, contactless is everywhere, and some places take cards only. A contactless debit is the safest card. Choose euros not dollars. Checked July 2026.",
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
      title: "Tipping in the Netherlands: the fooi, and what you actually owe (2026) | True Trip Costs",
      description: "How tipping works in the Netherlands for US travelers in 2026: why it is modest, how much to leave at restaurants and cafes, and how to tip on the PIN machine. Checked July 2026.",
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
      title: "Bringing a dog or cat to the Netherlands from the US (2026): the EU process, and the the Netherlands-specific parts | True Trip Costs",
      description: "Moving to the Netherlands with a pet from the US: why it runs on the shared EU health-certificate process, no quarantine and no titer, plus what is specific to the Netherlands on arrival and after you settle in. Checked July 2026.",
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
    }
  ]
};
