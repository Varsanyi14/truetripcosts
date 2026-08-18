import { S } from './carrier-spine.js';

// Kuwait money guide.
//
// Verified August 2026 against: the Central Bank of Kuwait exchange rate policy page (the
// dinar repegged to an UNDISCLOSED WEIGHTED BASKET by Decree 147/2007, effective 20 May 2007,
// which makes Kuwait the only Gulf state not pegged to the US dollar), PwC Worldwide Tax
// Summaries (no VAT, no excise, GCC framework still before parliament), the US State
// Department's Kuwait country information page (visa on arrival at KD 10, six month passport
// validity, KD 3,000 cash declaration threshold), Kuwait Government Online (112 unified
// emergency number), and Careem's own Kuwait site.
//
// NOTE for future edits: because the dinar is basket-pegged rather than dollar-pegged, the
// USD rate genuinely moves. Do not write it as a fixed figure the way the other five Gulf
// guides do, and treat the fxFallback entry as capable of going stale.
//
// Correction-prone facts live in F and are interpolated. See AUTHORING-GUIDES.md.

const F = {
  basket: "an undisclosed weighted basket of currencies",
  perDinar: "around 3.25 to 3.30 dollars",
  voa: "KD 10",
  declare: "KD 3,000",
  bus: "about KD 0.250",
  emergency: "112",
};

export default {
  slug: "kuwait",
  iso2: "kw",
  live: true,
  name: "Kuwait",
  from: "United States",
  checked: "Aug 2026",
  checkedISO: "2026-08-02",
  emergency: { medical: F.emergency, note: "112 is the unified number for police, ambulance and fire, published on Kuwait's own government portal. Worth noting because it differs from every neighbour: Oman is 9999, Qatar and Bahrain are 999, Saudi Arabia is 911 in the main regions, and in Bahrain 112 is not official at all. Here it is the number. Separately, the US Embassy in Kuwait suspended operations in March 2026, so consular help is not the routine errand it normally is.", checked: "Aug 2026", checkedISO: "2026-08-02" },
  insuranceLevel: "high",
  region: "Middle East",

  spokes: [
    {
      slug: "visa",
      glance: [
        { k: "Visa", v: "On arrival, KD 10" },
        { k: "Stay", v: "Up to three months" },
        { k: "Passport", v: "6 months, plus a blank page" },
        { k: "Declare cash", v: "Over KD 3,000" }
      ],
      live: true,
      topic: "visas",
      title: "Do US citizens need a visa for Kuwait?",
      description: "Yes, but it is issued on arrival for about 33 dollars and covers stays up to three months. Your passport needs six months validity and a blank page.",
      h1: "Do US citizens need a visa for Kuwait?",
      lede: "Yes, and it is simple: you buy it at the airport. The State Department publishes the fee and the terms, which makes this one of the easier entry rules in the Gulf to pin down.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: `Yes, and you get it at the border. The US State Department's own country page states that <b>visa on arrival is required for tourist stays under 90 days</b>, at a fee of <b>${F.voa}</b>, roughly 33 dollars, and that it allows a stay of <b>up to three months</b>. Your passport must be valid <b>six months from arrival</b> and have <b>one blank page per entry stamp</b>. There is also an <b>eVisa</b> route through Kuwait's Ministry of Interior portal if you would rather arrive with it done. One money rule people miss: carrying more than <b>${F.declare}</b>, about 9,800 dollars, must be declared at the border.`,
      official: {
        label: "US State Department: Kuwait country information, entry and exit requirements",
        url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Kuwait.html",
        note: "The clearest single source on the US-citizen rule, including the KD 10 fee, the three month stay and the cash declaration threshold. Kuwait's own eVisa portal is run by the Ministry of Interior.",
      },
      expediter: false,
      sections: [
        {
          h: "What you pay and what you get",
          icon: "passport",
          key: {
            fig: "KD 10",
            tag: "About 33 dollars",
            text: "Bought on arrival at any Kuwaiti port of entry, covering a stay of up to three months.",
            tone: "teal"
          },
          p: [
            `Kuwait issues visas on arrival to US citizens at all ports of entry. The State Department puts the fee at ${F.voa} and the permitted stay at up to three months, which is generous for a visa you buy at a counter. Bring a card, since the airport desks take them, but a little cash is a sensible backstop on arrival anywhere.`,
            "If you would rather not queue for it, Kuwait runs an eVisa through the Ministry of Interior portal. Either route is fine. What is not fine is paying a third-party agency a markup to file the same application, which is a thriving business around Gulf visas generally."
          ]
        },
        {
          h: "The passport conditions",
          icon: "alert",
          key: {
            fig: "6 months",
            tag: "Plus a blank page",
            text: "Six months validity from your arrival date, and one blank page for each entry stamp.",
            tone: "amber"
          },
          p: [
            "Six months from arrival, not from departure, and that is the same standard Bahrain and Saudi Arabia apply while Qatar asks only three. Check the expiry when you book rather than the week you fly.",
            "The blank page requirement is the one that actually catches people, because a well-travelled passport running low on space can be refused. If yours is nearly full, sort that before you go."
          ]
        },
        {
          h: "The cash declaration nobody mentions",
          icon: "cash",
          key: {
            fig: "KD 3,000",
            tag: "Declare above this",
            text: "About 9,800 dollars. It is a border formality rather than a limit, but an undeclared excess is a problem.",
            tone: "amber"
          },
          p: [
            `The State Department page notes that more than ${F.declare} needs to be declared. That is roughly 9,800 dollars, so it will not affect a normal holiday, but it is worth knowing if you are travelling with a large amount of cash for any reason.`,
            "Declaring is straightforward. Not declaring, and being found with it, is the kind of avoidable trouble that turns a trip into a story. There is no restriction on how much you can bring, only on failing to say so."
          ]
        },
        {
          h: "The thing to weigh before you book",
          icon: "shield",
          key: {
            tag: "The embassy is closed",
            text: "The US Embassy in Kuwait suspended operations in March 2026, so a lost passport is not a routine fix.",
            tone: "amber"
          },
          p: [
            "This is not a visa rule, but it belongs on this page because it affects the same paperwork. The US Embassy in Kuwait suspended operations, including routine consular services, in March 2026, and the State Department is running a departure assistance process for US citizens who want to leave.",
            "Practically: if you lose your passport in Kuwait, the usual route of walking into the embassy is not available, and you would be calling Washington instead. That is a real argument for carrying a photocopy, storing a scan somewhere you can reach it, and taking the insurance question seriously. The full advisory position is on the main Kuwait guide."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for Kuwait?", a: "Yes. It is issued on arrival at any Kuwaiti port of entry for a fee the State Department puts at KD 10, roughly 33 dollars, and allows a stay of up to three months. An eVisa route through the Ministry of Interior portal is also available." },
        { q: "How much is the Kuwait visa on arrival?", a: "KD 10 for US citizens according to the State Department's Kuwait country page, which is about 33 dollars. Because the dinar is not dollar-pegged, that dollar figure moves slightly." },
        { q: "How long does my passport need to be valid for Kuwait?", a: "Six months from your date of arrival, and you need at least one blank page for the entry stamp. A nearly full passport can be refused, so check for space as well as validity." },
        { q: "Do I need to declare cash entering Kuwait?", a: "Yes, if you are carrying more than KD 3,000, about 9,800 dollars. There is no limit on the amount, only a requirement to declare above that threshold." }
      ],
      sources: {
        links: [
          { label: "US State Department: Kuwait country information, entry requirements and the KD 10 visa on arrival", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Kuwait.html", type: "gov" },
          { label: "Kuwait Ministry of Interior: the official visa portal", url: "https://evisa.moi.gov.kw/", type: "gov" },
          { label: "US Embassy in Kuwait: the current advisory and the suspension of embassy operations", url: "https://kw.usembassy.gov/travel-advisory-kuwait-june-28-2026/", type: "gov" }
        ],
        judgment: "The KD 10 fee, the three month stay, the six month passport rule, the blank page requirement and the KD 3,000 cash threshold all come from the State Department's own Kuwait page, which is the best available source and unusually specific. We have not printed eVisa fees or extension costs, because those came only from secondary sites of uncertain date. One claim we found and deliberately excluded: a visa-agency page asserting that solo women under 40 are commonly refused. We could not corroborate it anywhere credible and will not repeat it.",
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Kuwaiti dinar (KD), basket-pegged" },
        { k: "Unusual", v: "Not pegged to the dollar" },
        { k: "Worth", v: "Highest-valued unit in the world" },
        { k: "Watch", v: "1,000 fils, three decimals" }
      ],
      live: true,
      topic: "cash",
      title: "Cash or card in Kuwait? And the rate that moves",
      description: "Kuwait is the one Gulf country whose currency is not pegged to the dollar, so the rate actually moves. The dinar is also the world's highest-valued unit.",
      h1: "Cash or card in Kuwait?",
      lede: "Kuwait breaks the Gulf pattern in the one place it matters most. Every neighbour fixes its currency to the dollar. Kuwait does not, so this is the only Gulf trip where the rate is a moving number.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: `Carry both, and check the rate. Cards work across Kuwait City's malls, hotels, supermarkets and chain restaurants, but <b>street taxis and smaller vendors deal in cash</b>, and taxi meters are frequently not used. The headline difference: the dinar is pegged to <b>${F.basket}</b>, not to the US dollar, so <b>the rate genuinely moves</b>. It is also the <b>highest-valued currency unit in the world</b> at ${F.perDinar}, and it splits into <b>1,000 fils</b>, so prices carry three decimals and a small number is not a small amount.`,
      sections: [
        {
          h: "The only Gulf currency not tied to the dollar",
          icon: "usd",
          key: {
            tag: "Basket, not dollar",
            text: "Repegged in May 2007 to an undisclosed weighted basket. The dollar dominates it, but does not define it.",
            tone: "amber"
          },
          p: [
            "This is the single most useful thing to know about money in Kuwait, and almost nothing written for travellers says it. The Central Bank of Kuwait repegged the dinar in May 2007, by decree, to an undisclosed weighted basket of the currencies of Kuwait's major trade and financial partners. Before that it was pegged to the dollar, as its neighbours still are.",
            "So the UAE, Oman, Qatar, Bahrain and Saudi Arabia all hold a fixed dollar rate you can memorise for the whole trip. Kuwait does not. The dollar is the dominant component of the basket and movement has been small, well under a percent in a typical year, but it is not zero and it is not fixed. Check the rate before you go rather than assuming a number, and do not carry a mental conversion over from the country you were in last week."
          ]
        },
        {
          h: "The world's strongest unit, and the decimal",
          icon: "coins",
          key: {
            fig: "1 KD = ~$3.28",
            tag: "And it moves",
            text: "The highest-valued currency unit anywhere, divided into 1,000 fils, so prices read to three decimal places.",
            tone: "amber"
          },
          p: [
            `A dinar is ${F.perDinar}, which makes it the highest-valued currency unit in the world, ahead of the Bahraini dinar and the Omani rial. It divides into 1,000 fils, so prices are written like 2.750, which is two and three quarter dinars, roughly nine dollars, not two dollars seventy five.`,
            "The consequences compound. A KD 20 note is around 65 dollars, the largest denomination by value you will handle anywhere in the Gulf. A taxi asking KD 5 wants about 16 dollars. And a restaurant bill of KD 30 is close to a hundred. If you have just come from Saudi Arabia, where a riyal is 27 cents, the mental gear change is significant."
          ]
        },
        {
          h: "Where cards work and where they stop",
          icon: "card",
          key: {
            fig: "Both",
            tag: "Taxis are the gap",
            text: "Malls, hotels and supermarkets are carded. Street taxis and small vendors want notes, and meters are often ignored.",
            tone: "teal"
          },
          p: [
            "Kuwait City's malls, hotels, supermarkets and chain restaurants take Visa and Mastercard normally, and contactless is common. Ride-hailing apps are card in-app. That covers a lot of a visitor's spending.",
            "The gap is transport and the small end. Metered billing in street taxis is, in practice, rarely applied, so fares get agreed verbally and paid in cash. Keep a working float of small notes and 500 fils pieces, because a KD 20 is not something a driver or a stall wants to break."
          ]
        },
        {
          h: "ATMs, exchange and the dollar question",
          icon: "atm",
          key: {
            tag: "Choose dinars, always",
            text: "Decline dynamic currency conversion. And here, unlike the rest of the Gulf, also glance at the rate itself.",
            tone: "amber"
          },
          p: [
            "ATMs are plentiful across Kuwait City, in the malls and at the airport, and foreign cards work normally. Take a sensible amount in one withdrawal. Exchange houses are competitive and post rates openly.",
            "Decline any offer to be billed in US dollars, as everywhere. The extra step in Kuwait is that the underlying rate is not fixed, so it is worth a glance at what you are actually getting rather than assuming the number you looked up last month still holds."
          ]
        }
      ],
      faqs: [
        { q: "Is the Kuwaiti dinar pegged to the US dollar?", a: "No, and this is unique in the Gulf. The Central Bank of Kuwait repegged the dinar in May 2007 to an undisclosed weighted basket of currencies. The dollar dominates the basket but does not fix the rate, so it genuinely moves." },
        { q: "How much is a Kuwaiti dinar worth?", a: "Around 3.25 to 3.30 US dollars, which makes it the highest-valued currency unit in the world. Because it is basket-pegged rather than dollar-pegged, check the current rate rather than relying on a figure from a guide." },
        { q: "Why do Kuwaiti prices have three decimal places?", a: "Because the dinar divides into 1,000 fils, not 100. A price of 2.750 is two and three quarter dinars, roughly nine dollars. A KD 20 note is about 65 dollars, the highest-value note you will handle in the Gulf." },
        { q: "Do I need cash in Kuwait?", a: "Yes, more than in Qatar or Saudi Arabia. Malls, hotels and supermarkets take cards, but street taxi meters are often not used so fares are agreed and paid in cash, and smaller vendors are cash too." }
      ],
      sources: {
        links: [
          { label: "Central Bank of Kuwait: exchange rate policy and the 2007 repeg to an undisclosed basket", url: "https://www.cbk.gov.kw/en/monetary-policy/exchange-rate-policy", type: "gov" },
          { label: "PwC Worldwide Tax Summaries: Kuwait has no VAT and no excise taxes", url: "https://taxsummaries.pwc.com/kuwait/corporate/other-taxes", type: "revenue" }
        ],
        judgment: "The basket peg is the Central Bank's own published policy, including the decree and date, and it is the reason this page refuses to print a fixed dollar rate the way the other five Gulf guides do. The dollar value of a dinar is given as a range because it moves and because current sources differ slightly. Where card acceptance stops, and the practical reality that taxi meters often go unused, are our read from experience and from current expatriate sources rather than published rules.",
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Expected", v: "No, not expected" },
        { k: "Restaurants", v: "Check for a service charge" },
        { k: "Taxis", v: "Round up, nothing more" },
        { k: "Careful", v: "A KD 1 note is over 3 dollars" }
      ],
      live: true,
      topic: "tipping",
      title: "Do you tip in Kuwait? What is actually expected",
      description: "Tipping is not expected in Kuwait, and the strong dinar means rounding up costs more than you think. Check for a service charge, use small notes.",
      h1: "Do you tip in Kuwait?",
      lede: "Not expected, and the maths deserves a second look. With the world's highest-valued currency unit, casually rounding up is a bigger gesture here than almost anywhere.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: "Tipping in Kuwait is <b>appreciated but not expected</b>, and nothing like the US convention. Check the bill first, because hotels and mid to upper restaurants often add a <b>service charge</b>, and where one is present the question is settled. Where there is none, rounding up or leaving a small amount is welcome. <b>Taxi drivers do not expect a tip</b>, though agreeing a fair fare upfront matters more to them than anything added at the end. The thing to watch is the arithmetic: <b>a single KD 1 note is over three dollars</b>, so round up in fils rather than dinars unless you mean it.",
      sections: [
        {
          h: "Read the bill first",
          icon: "receipt",
          key: {
            tag: "No VAT, so no tax line",
            text: "Kuwait has no VAT at all, so any percentage on your bill is a service charge set by the business.",
            tone: "teal"
          },
          p: [
            "Because Kuwait has no VAT, a percentage at the bottom of a restaurant or hotel bill is a service charge rather than a government tax. That is a cleaner read than Saudi Arabia or Bahrain, where a bill can carry both and the two are easy to confuse.",
            "Where a service charge appears, service has been paid for and anything further is optional. Where it does not, and in the smaller local places, rounding up is normal and no percentage is expected of you."
          ]
        },
        {
          h: "The strong dinar changes the gesture",
          icon: "coins",
          key: {
            fig: "KD 1 = $3+",
            tag: "Round in fils",
            text: "The 500 and 250 fils pieces are the useful tipping money. A dinar note is a substantial tip.",
            tone: "amber"
          },
          p: [
            "This is the practical point. In Saudi Arabia a riyal is 27 cents, so ten riyals is a normal thank you. In Kuwait a dinar is over three dollars, so the equivalent gesture is 500 fils or a dinar at most, not several dinars.",
            "Keep 250 and 500 fils pieces back specifically for tipping and for rounding taxi fares. If you hand over notes without thinking, you will tip considerably more than you intended, which is nobody's disaster but is worth knowing."
          ]
        },
        {
          h: "Cash, and no US percentages",
          icon: "notip",
          key: {
            tag: "No 20% rule",
            text: "Nobody here works for tips the way an American server does. Applying a US percentage is a large gift.",
            tone: "amber"
          },
          p: [
            "Wages are not built around tips and there is no social expectation that a percentage follows a meal. A US 20% on a Kuwaiti bill is simply generous rather than correct.",
            "Where you do tip, cash reaches people in a way a card slip may not, especially on a bill that already carries a service charge. This is one of the reasons to keep notes in a city where you could otherwise card most things."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Kuwait?", a: "It is appreciated but not expected. Check the bill for a service charge first, since hotels and larger restaurants often add one. Where there is none, rounding up or leaving a small amount in cash is generous." },
        { q: "How much should I tip in Kuwait?", a: "Less than the number suggests, because the dinar is strong. Round up in fils rather than dinars: 250 or 500 fils is a normal gesture, and a KD 1 note is already over three dollars." },
        { q: "Is the service charge on my Kuwait bill a tax?", a: "No. Kuwait has no VAT or sales tax at all, so any percentage on your bill is a service charge set by the business. That makes it simpler to read than a Saudi or Bahraini bill." },
        { q: "Do I tip taxi drivers in Kuwait?", a: "Nothing is expected. Rounding the fare up is the normal courtesy, and since meters often go unused, agreeing a fair price at the start matters far more to the driver than anything added at the end." }
      ],
      sources: {
        links: [
          { label: "PwC Worldwide Tax Summaries: no VAT in Kuwait, so a bill percentage is a service charge", url: "https://taxsummaries.pwc.com/kuwait/corporate/other-taxes", type: "revenue" },
          { label: "Central Bank of Kuwait: the exchange rate policy behind every dinar figure here", url: "https://www.cbk.gov.kw/en/monetary-policy/exchange-rate-policy", type: "gov" }
        ],
        judgment: "That Kuwait has no VAT, and therefore that any bill percentage is a service charge, is well sourced through PwC. The tipping norms themselves are our read of common practice rather than a published standard, which is why no tipping percentage appears anywhere on this page. Service charge practice varies by establishment.",
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Careem", v: "Yes, the one to have" },
        { k: "Uber", v: "Contested, do not rely on it" },
        { k: "Airport", v: "Apps reportedly cannot collect" },
        { k: "Bus", v: "About KD 0.250 to the city" }
      ],
      live: true,
      topic: "taxis",
      title: "Kuwait taxis and apps: Careem, and the airport catch",
      description: "Careem is the app to have and Uber's presence is contested. Taxi meters often go unused, and apps reportedly cannot collect at the airport.",
      h1: "Taxis and ride-hailing in Kuwait",
      lede: "There is no metro, no tram and no domestic rail in Kuwait, so this is a road country. Careem is the reliable app, and there is one specific catch at the airport worth knowing before you land.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: `<b>Careem is the app to have.</b> It operates in Kuwait and runs its own Kuwait service pages. <b>Uber is contested</b>: some current sources list it as active, others say flatly it is not reliably available, so do not land depending on it. Local apps including Q8 Taxi and RideRove also operate. Street taxis exist everywhere but <b>metered billing is frequently not applied</b>, so agree the fare first. The catch: at least one recent first-hand account reports that <b>ride-hailing apps cannot collect from Kuwait International Airport at all</b>, leaving the airport taxi rank or a city bus at ${F.bus}.`,
      sections: [
        {
          h: "Careem yes, Uber a maybe",
          icon: "taxi",
          key: {
            tag: "Do not assume Uber",
            text: "Careem is confirmed and dominant. Current sources genuinely contradict each other on whether Uber is usable here.",
            tone: "amber"
          },
          p: [
            "Careem is the safe answer. It operates in Kuwait, publishes Kuwait-specific service pages, and is the default for most residents and visitors. It is owned by Uber but runs as a separate brand across the region, so having Careem does not mean Uber works.",
            "On Uber itself, we could not settle it. Some current sources describe the Kuwait ride-hailing sector as led by Careem and Uber together. Others, including a recent first-hand traveller account, say Uber is not reliably available. Rather than pick one, the practical advice is to install Careem, which definitely works, and treat Uber as a bonus if it happens to be live when you arrive."
          ]
        },
        {
          h: "The airport catch",
          icon: "plane",
          key: {
            tag: "Single-sourced, but act on it",
            text: "A recent first-hand report says no ride-hailing app can pick up at Kuwait International. Plan a fallback.",
            tone: "amber"
          },
          p: [
            `This one is worth flagging even though we have it from one detailed first-hand account rather than an official page, because the downside of being wrong is standing in arrivals at midnight. The report is that no ride-hailing app, Careem or local, can collect directly from Kuwait International Airport, and that the options are the airport taxi rank, which is card-accepting but expensive and often over KD 10, or a city bus at ${F.bus}, roughly a dollar, on routes such as 13, 99 and 501. Careem then works normally once you are in the city, and it does work for the trip back out to the airport.`,
            "Treat that as likely rather than certain. Open your app on landing and see what it offers you. But have the taxi rank or the bus in mind as the plan rather than the surprise."
          ]
        },
        {
          h: "Street taxis and the meter",
          icon: "wheel",
          key: {
            tag: "Agree the fare",
            text: "Taxis are metered on paper and frequently not in practice, so settle the number before the door shuts.",
            tone: "amber"
          },
          p: [
            "Kuwait has two kinds of taxi. Regular cabs, which you hail, call or book, and orange shared-route cars that pick up and drop anywhere along a fixed corridor and may carry other passengers, which has no real equivalent in the US.",
            "For the regular sort, metered billing is rarely applied in practice, so the convention is to state your destination and agree the price before setting off. Fares commonly start around KD 1.5 and rise steeply outside the city. This is the main reason to carry cash in an otherwise card-friendly country."
          ]
        },
        {
          h: "Buses, and what there is not",
          icon: "train",
          key: {
            fig: "About KD 0.250",
            tag: "Roughly a dollar",
            text: "The public bus network is cheap and air conditioned. There is no metro, tram or domestic rail at all.",
            tone: "teal"
          },
          p: [
            "The Kuwait Public Transport Company runs the bus network across Kuwait City and the suburbs, cheap and air conditioned, and it is the budget route in from the airport. There is no metro, no tram, no domestic flights and no intercity rail, which sets Kuwait apart from Riyadh's new metro and Doha's.",
            "For anything beyond the city, a rental car or a hired driver is the realistic answer, and both are conversations to have on price upfront rather than at the destination."
          ]
        }
      ],
      faqs: [
        { q: "Does Careem work in Kuwait?", a: "Yes. Careem operates in Kuwait and publishes Kuwait-specific service pages. It is the default ride-hailing app for residents and visitors, and the one to install before you fly." },
        { q: "Does Uber work in Kuwait?", a: "Unclear. Current sources contradict each other: some list Uber as active alongside Careem, while a recent first-hand account says it is not reliably available. Install Careem, which definitely works, and treat Uber as a bonus." },
        { q: "Can I get a Careem from Kuwait airport?", a: "Reportedly not. A recent first-hand account says no ride-hailing app can collect directly from Kuwait International. The alternatives are the airport taxi rank, which takes cards but runs expensive, or a city bus at around KD 0.250. Careem works fine going back out to the airport." },
        { q: "Do Kuwait taxis use meters?", a: "On paper yes, in practice frequently not. Agree the fare before you get in. Fares commonly start around KD 1.5 and rise sharply outside the city, which is why cash matters here more than elsewhere in the Gulf." }
      ],
      sources: {
        links: [
          { label: "Careem: the operator's own Kuwait taxi service page", url: "https://www.careem.com/en-KW/taxi/", type: "news" },
          { label: "US State Department: Kuwait country information, including local travel notes", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Kuwait.html", type: "gov" }
        ],
        judgment: "Careem's presence is confirmed by its own Kuwait pages. Uber's is genuinely contested across current sources and we have said so rather than choose, because either answer risks leaving a reader stranded. The airport pickup restriction rests on one detailed first-hand account, which we have flagged as such while still advising a fallback, on the grounds that the cost of being wrong is asymmetric. Fare figures are approximate and drawn from secondary sources, not a published tariff.",
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Excellent in the city and suburbs" },
        { k: "Carrier roaming", v: "$10 to $12 a day" },
        { k: "App calling", v: "Generally works, keep a fallback" },
        { k: "Cheapest", v: "A local SIM, and it is cheap" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "Kuwait: excellent city coverage, and a cheap local SIM",
      description: "Kuwait City and its suburbs are comprehensively covered and local data is cheap. App calling generally works, unlike in the UAE.",
      h1: "Staying connected in Kuwait.",
      lede: "Kuwait is compact, urban and well covered, and local data is cheap. There is little to warn about, which makes this a short page rather than a padded one.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>excellent across Kuwait City and the suburbs</b>, along the Gulf Road, at the airport and out to the desert highways, with fast 4G and widespread 5G. It thins only in the far desert and along the northern and western borders, which are not places most visitors go. A local <b>Zain</b>, <b>stc</b> or <b>Ooredoo</b> tourist SIM is cheap with your <b>passport</b>, and a <b>Nomad eSIM</b> is a few dollars per gigabyte. Your US carrier charges about <b>${S.dayPass}</b> to roam (<b>AT&amp;T and Verizon</b> day passes), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon has ${S.verizonNoCap}</b> and keeps billing daily. <b>T-Mobile</b>'s mid and upper tiers include <b>${S.tmoRange}</b> of high-speed data abroad before slowing to <b>${S.throttle}</b>. On <b>app calling</b>, Kuwait is generally reported as having no active block, so WhatsApp and FaceTime calls usually work on a local network, though the regional picture is not uniform. <b>Messaging works regardless.</b> Keep an ordinary cellular call as the fallback. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "Not much to warn you about",
          icon: "phoneok",
          key: { fig: "No real gaps", tag: "Coverage", text: "Kuwait City, the suburbs, the Gulf Road and the desert highways all have fast 4G with widespread 5G.", tone: "teal" },
          p: [
            `Kuwait is small and heavily urbanised, and the network reflects that: fast 4G and widespread 5G across <b>Kuwait City</b>, the suburbs, the Gulf Road, the malls and the airport, and workable coverage along the desert highways. It thins in the far desert and toward the northern and western borders, which are restricted or unremarkable for visitors anyway.`,
            `So there is no network to research and no gap to plan around, and we would rather say that than manufacture a caveat. If you are driving out to a desert camp, <b>download offline maps</b>, which is general good practice rather than a Kuwait-specific warning.`
          ]
        },
        {
          h: "App calling, generally permitted",
          icon: "alert",
          key: { fig: "Usually fine", tag: "Unlike the UAE", text: "Kuwait is generally reported as having no active VoIP block. The regional picture is not uniform, so keep a fallback.", tone: "teal" },
          p: [
            `Worth stating because the Gulf is not one policy. <b>Kuwait is generally reported as having no active app-calling block</b>, so WhatsApp and FaceTime calls usually connect on a local network, which is different from the UAE and from what a traveler arriving via Dubai might expect. That also means you do not need an eSIM to <b>restore</b> calling here: buy one for the usual reasons, skipping the counter or keeping your own number, not as a workaround.`,
            `Worth knowing how thin the evidence is. Almost every page on the internet about Gulf app-calling is published by a company selling a VPN or an eSIM, both of which are the advertised fix, and they contradict each other flatly: on the same week in 2026 we found sources calling this country blocked, intermittent and permitted. So we are not going to give you a confident answer we do not have. <b>Messaging works everywhere in the Gulf.</b> Assume <b>app calling might not</b>, have a backup before you land, and test it on arrival rather than at the moment you need it.`
          ]
        },
        {
          h: "Cost, and checking your own plan first",
          icon: "roamfee",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: "A US carrier day pass is the expensive default. AT&T caps it at 10 daily fees a bill period, Verizon does not cap at all, and T-Mobile's mid and upper tiers include 5GB to 30GB abroad.", tone: "teal" },
          p: [
            `A local <b>Zain</b>, <b>stc</b> or <b>Ooredoo</b> tourist SIM is cheap, sold at the airport and in malls with your <b>passport</b>, and all three cover the city comfortably, so there is no network worth paying extra for. A <b>Nomad eSIM</b> at a few dollars per gigabyte avoids the counter.`,
            `Roaming is about <b>${S.dayPass}</b>, so <b>${S.week}</b> a week, with <b>AT&amp;T</b> capping at <b>${S.capFees}</b>, about <b>${S.capAmount}</b>, and <b>Verizon</b> having <b>${S.verizonNoCap}</b>. Check <b>T-Mobile</b> before buying anything, since its tiers include <b>${S.tmoRange}</b> before slowing to <b>${S.throttle}</b>, and on a short business trip with hotel wifi that is often enough on its own. This guide is written for US travelers departing the US. For more, see <a href='/kuwait/cash-or-card'>cash or card in Kuwait</a>, <a href='/kuwait/taxis-and-apps'>taxis and apps in Kuwait</a>, and the <a href='/kuwait'>Kuwait money guide</a>.`
          ]
        }
      ],
      faqs: [
        { q: `Does WhatsApp calling work in Kuwait?`, a: `Generally yes. Kuwait is reported as having no active app-calling block, so calls usually connect on a local network, unlike in the UAE. The regional picture is not uniform, so keep an ordinary cellular call as your fallback. You do not need an eSIM to restore calling here.` },
        { q: `How much is a SIM card in Kuwait?`, a: `A Zain, stc or Ooredoo tourist SIM is cheap, bought at the airport or in a mall with your passport. All three cover the city comfortably, so there is no network worth paying extra for.` },
        { q: `Is phone coverage good in Kuwait?`, a: `Yes, excellent across Kuwait City and the suburbs, with fast 4G and widespread 5G, and workable coverage along the desert highways. It thins only in the far desert and toward the borders.` },
        { q: `How much does it cost to use my US phone in Kuwait?`, a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "US State Department: Kuwait country information and local laws", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Kuwait.html", type: "gov" },
          { label: "Zain Kuwait: prepaid and visitor plan pages", url: "https://www.kw.zain.com/", type: "official" }
        ],
        judgment: "Checked Aug 2026. Short on purpose. The useful content is the one line that costs us a sale: you do not need an eSIM here as a calling workaround, because Kuwait is generally reported as not blocking app calling, so buy one for convenience or do not buy one at all. As with every Gulf page, the app-calling position carries a hedge, because the sources on this topic sell either a VPN or an eSIM and disagree with each other."
      }
    }
  ],

  signals: { cardFriendliness: 4, cashNeed: 3, taxRisk: 1, atmRisk: 2 },
  hook: "The world's highest-valued currency, the only Gulf one not pegged to the dollar, and no VAT at all.",
  aliases: ["kuwait", "kuwait city", "kuwaiti dinar", "kwd", "state of kuwait", "mubarakiya", "failaka", "salmiya"],

  title: "Kuwait money guide: dinars, cards and no VAT",
  description: "The dinar is the world's highest-valued currency and the only Gulf one not pegged to the dollar, so the rate moves. There is no VAT at all.",
  h1: "Money in Kuwait, sorted.",
  lede: "A calm, current plan for the money side of your trip: why Kuwait is the one Gulf country where the exchange rate actually moves, what the strongest currency in the world does to your arithmetic, and the airport catch nobody warns you about.",

  hero: {
    img: "/kuwait-hero.jpg",
    h: 1375,
    alt: "A covered market alley in Souq Mubarakiya, Kuwait City at dusk with exposed wooden beam ceilings, sand-coloured plaster walls, open sacks of spices and baskets of dates and dried fruit along both sides, iron lanterns and string lights overhead, a figure in a white dishdasha walking away down the alley, a slim minaret and the city skyline in violet haze beyond, and a brass platter of machboos with fish, a glass of karak chai, a slice of saffron cake and a bowl of dates on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: `Kuwait breaks the Gulf pattern in the place that matters. Every neighbour fixes its currency to the US dollar; Kuwait pegs the dinar to <b>${F.basket}</b>, so this is the one Gulf trip where <b>the rate genuinely moves</b>. The dinar is also the <b>highest-valued currency unit in the world</b> at ${F.perDinar}, split into <b>1,000 fils</b>, so a price of 2.750 is about nine dollars and a KD 20 note is around 65. On the upside there is <b>no VAT and no excise tax</b>, so shelf prices are final. Two practical things: the visa is bought on arrival for <b>${F.voa}</b>, and <b>Careem is the app that works</b> while Uber's status here is genuinely unclear.`,

  meter: {
    heading: "Card-friendly in the malls, cash-first in a taxi.",
    cashPct: 30,
    note: "A rough feel for everyday spending rather than a measured figure. Kuwait City's malls, hotels, supermarkets and chain restaurants are fully carded and ride-hailing is card in-app. What pushes the cash share up is transport: metered billing in street taxis is frequently not applied, so a lot of moving around gets negotiated and paid in notes, along with the smaller vendors and Souq Mubarakiya.",
  },

  trio: [
    {
      sym: "card",
      kind: "ok",
      h: "Your card",
      verd: "Fine across the modern side",
      p: "Visa and Mastercard cover Kuwait City's malls, hotels, supermarkets and chain restaurants, with contactless common, and Careem takes cards in-app. Amex is thinner, so do not travel on it alone.",
      cta: { label: "Check yours", href: "#calc" }
    },
    {
      sym: "cash",
      kind: "warn",
      h: "Cash",
      verd: "Needed for taxis",
      p: "Street taxi meters are often not used, so fares are agreed and paid in notes. Keep small notes and 500 fils pieces, and remember a KD 20 is about 65 dollars, which nobody wants to break.",
      cta: { label: "How much to carry", href: "/kuwait/cash-or-card" }
    },
    {
      sym: "atm",
      kind: "ok",
      h: "ATMs",
      verd: "Plentiful, but check the rate",
      p: "Common across the city, the malls and the airport, and foreign cards work normally. Unlike the rest of the Gulf the underlying rate is not fixed, so glance at what you are getting.",
      cta: { label: "Find one", href: "#atm" }
    }
  ],

  plan: [
    {
      sym: "tag",
      when: "Before you go",
      bullets: [
        "<b>Check the actual rate.</b> Kuwait is the only Gulf state not pegged to the dollar, so last month's figure is not this month's.",
        "Check your passport has <b>six months</b> left from arrival <b>and a blank page</b>. Both are required.",
        "Install <b>Careem</b>. It works. <b>Do not count on Uber</b>, whose status in Kuwait is contested."
      ],
      cta: { label: "See no-fee card options", tag: "earn", href: "#" }
    },
    {
      sym: "plane",
      when: "Landing",
      bullets: [
        "Buy the <b>visa on arrival</b>, about <b>KD 10</b>, for a stay of up to three months.",
        "<b>Apps reportedly cannot collect at the airport.</b> Plan on the taxi rank or a city bus at around KD 0.250.",
        "Save <b>112</b>, the unified emergency number. It differs from every neighbour."
      ],
      cta: { label: "Taxis and apps", href: "/kuwait/taxis-and-apps" }
    },
    {
      sym: "bowl",
      when: "Day to day",
      bullets: [
        "Card the malls and hotels. <b>Cash the taxis</b>, and agree the fare before you get in.",
        "<b>Read prices twice.</b> The dinar splits into 1,000 fils, so <b>2.750 is about nine dollars</b>.",
        "<b>No VAT at all</b>, so the shelf price is the final price. A percentage on a bill is a service charge."
      ],
      cta: { label: "Tipping, plainly", href: "/kuwait/tipping" }
    },
    {
      sym: "receipt",
      when: "Checking out",
      bullets: [
        "Ask whether the hotel rate was <b>all-in</b>. There is no VAT, but a service charge may or may not be included.",
        "Tip in <b>fils, not dinars</b>. A KD 1 note is already over three dollars.",
        "<b>No refund desk to visit</b>, because there is no VAT to reclaim."
      ],
      cta: { label: "What the bill adds", href: "#tax" }
    }
  ],

  cash: {
    rate: 0.307,
    cur: "KWD",
    round: 5,
    defaultIndex: 1,
    rateNote: `Not a fixed peg, and this is the one Gulf country where that is true. The Central Bank of Kuwait pegs the dinar to ${F.basket} rather than to the US dollar, so the rate moves. A dinar has recently been ${F.perDinar}. Treat any figure here as an anchor to check rather than a constant, and multiply dinar prices by roughly 3.3 for dollars.`,
    styles: [
      { n: "Budget", per: 60, cash: 0.40, room: 75 },
      { n: "Mid-range", per: 140, cash: 0.30, room: 170 },
      { n: "Comfort", per: 300, cash: 0.20, room: 370 }
    ],
  },

  connectivity: {
    works: "Yes, and easily. Zain, stc and Ooredoo all give strong coverage, and Kuwait is small enough that dead spots are rare outside the far desert. 5G is normal across Kuwait City. Before you buy anything: check whether your US plan already covers Kuwait, because several do, and there is little need to solve this at an arrivals counter when the airport has wifi.",
  },

  tax: {
    none: true,
    note: "Kuwait has no VAT, no sales tax and no tourist or hotel tax. PwC records that Kuwait also levies no excise tax, no property tax and no transfer taxes. It is one of only two Gulf states, with Qatar, never to have adopted VAT: the GCC framework agreement was signed in 2017 but in Kuwait it remains under discussion in parliament with the draft law still in preparation. So the price you are quoted is the price you pay, and there is no refund scheme to bother with because there is nothing to reclaim. The one variable is a service charge at hotels and restaurants, which is the property's own and is not universal. Worth re-checking before a future trip, since the framework has been pending for years rather than abandoned.",
  },

  currencyHeading: "The dinar, in plain terms.",

  facts: [
    { sym: "usd", k: "The rate actually moves here", v: `Kuwait is the only Gulf state not pegged to the US dollar. The Central Bank repegged the dinar in May 2007 to ${F.basket}, dominated by the dollar but not fixed to it. Movement is small, well under a percent in a typical year, but check the rate rather than memorising one.` },
    { sym: "denom", k: "The strongest unit in the world", v: `A dinar is ${F.perDinar}, higher than the Bahraini dinar or the Omani rial. It splits into 1,000 fils, so prices read to three decimals: 2.750 is two and three quarter dinars, roughly nine dollars.` },
    { sym: "coins", k: "Notes worth a lot", v: "Notes run a quarter and half dinar up through 1, 5, 10 and 20. A KD 20 note is around 65 dollars, the highest-value note you will handle in the Gulf, so break it at a supermarket and keep 250 and 500 fils pieces for taxis and tips." },
    { sym: "receipt", k: "No VAT, no excise", v: "One of only two Gulf states, with Qatar, that never adopted VAT, and PwC records no excise, property or transfer taxes either. The shelf price is final and there is no refund to claim on the way home. A percentage on a bill is a service charge." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "Nothing added, nothing to reclaim.",
    text: "Kuwait has <b>no VAT and no sales tax</b>, and PwC's tax summaries record that it also levies <b>no excise tax, no property tax and no transfer taxes</b>. Along with Qatar, it is one of only two Gulf states never to have adopted VAT. The <b>GCC VAT framework agreement was signed in 2017</b>, but in Kuwait it has sat <b>under discussion in parliament</b> ever since, with the draft law still in preparation. For a visitor that means two things: <b>the price you are quoted is the price you pay</b>, with no 15% like Saudi Arabia, no 10% like Bahrain and no 5% like the UAE and Oman, and <b>there is no refund desk to find at the airport</b> because there is nothing to reclaim. What can still appear is a <b>service charge</b> at hotels and restaurants, which is set by the business rather than the government. <b>Worth re-checking before a future trip</b>, though: the framework has been pending for years rather than abandoned, and Kuwait's fiscal position makes it a live question.",
  },

  traps: [
    "<b>Carrying a fixed exchange rate in your head.</b> This works fine in the other five Gulf states and does not work here. Kuwait pegs to an undisclosed basket, not to the dollar, so check the rate before you go rather than reusing a number from your last Gulf trip.",
    "<b>Reading 2.750 as two seventy five.</b> The dinar carries three decimals because it splits into 1,000 fils. That is about nine dollars. With the strongest currency unit in the world, misreading the decimal is expensive.",
    "<b>Landing expecting to open an app.</b> Ride-hailing reportedly cannot collect at Kuwait International at all, and Uber's presence in the country is contested even in the city. Install Careem, and have the taxi rank or the bus as your arrival plan.",
    "<b>Getting into a taxi without agreeing the fare.</b> Meters exist and are frequently not used. Settle the number first, in dinars, before the door closes.",
    "<b>Bringing alcohol.</b> Kuwait prohibits it outright, unlike the licensed hotel bars of the UAE and Bahrain. The State Department warns specifically against carrying it in luggage or trying to buy it. Duty free on the way in is not the move here.",
  ],

  tippingHeading: "Not expected, and smaller than you think.",
  tipping: "Tipping in Kuwait is a courtesy rather than an obligation. Read the bill first: hotels and larger restaurants often add a service charge, and because Kuwait has no VAT at all, any percentage you see is that service charge rather than a government tax, which makes a Kuwaiti bill simpler to read than a Saudi or Bahraini one. Where a service charge appears you have paid for service. Where it does not, rounding up or leaving a small amount is welcome. Taxi drivers do not expect a tip, and since meters frequently go unused, agreeing a fair fare at the start matters far more than anything added at the end. The one thing to calibrate is the arithmetic: with the highest-valued currency unit in the world, a single KD 1 note is over three dollars, so the normal gesture is 250 or 500 fils rather than a note. Keep the coins back for it, and tip in cash.",

  sources: {
    changed: "First published August 2026. Verified at this check: that the dinar is pegged to an undisclosed weighted basket of currencies rather than the US dollar, by Decree 147/2007 effective 20 May 2007, against the Central Bank of Kuwait's own exchange rate policy page, which makes Kuwait the only Gulf state without a dollar peg; the absence of VAT, excise, property and transfer taxes, and the GCC framework still being before parliament, against PwC Worldwide Tax Summaries; the visa on arrival at KD 10 for US citizens with a stay up to three months, six month passport validity, a blank page per entry stamp and the KD 3,000 cash declaration threshold, against the US State Department's Kuwait country information page; and 112 as the unified emergency number against Kuwait Government Online. Also recorded: the US State Department has Kuwait at Level 3, Reconsider Travel, citing armed conflict, landmines and crime, with an ordered departure dated March 2, 2026 and the US Embassy in Kuwait suspending operations including routine consular services on March 5, 2026.",
    links: [
      { label: "Central Bank of Kuwait: exchange rate policy and the 2007 repeg to an undisclosed basket", url: "https://www.cbk.gov.kw/en/monetary-policy/exchange-rate-policy", type: "gov" },
      { label: "US State Department: Kuwait country information, entry requirements and cash declaration", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Kuwait.html", type: "gov" },
      { label: "PwC Worldwide Tax Summaries: no VAT, excise, property or transfer taxes in Kuwait", url: "https://taxsummaries.pwc.com/kuwait/corporate/other-taxes", type: "revenue" },
      { label: "US Embassy in Kuwait: the current Level 3 advisory and suspension of operations", url: "https://kw.usembassy.gov/travel-advisory-kuwait-june-28-2026/", type: "gov" },
    ],
    judgment: "The basket peg, the tax position, the entry rules and the emergency number are all official and linked above. Four things are deliberately hedged. We print no fixed dollar rate for the dinar, because it is not fixed, which is the whole point of this guide; the range given is an anchor to check. Uber's presence in Kuwait is genuinely contested across current sources and we say so rather than choose, because either answer could leave a reader stranded. The airport ride-hailing restriction rests on one detailed first-hand account rather than an official page, flagged as such, but we still advise a fallback because the cost of being wrong is asymmetric. And taxi fares, bus fares and the daily cash share are approximations from secondary sources and experience, not published tariffs. One claim we found and excluded entirely: a visa-agency assertion that solo women under 40 are commonly refused entry, which we could not corroborate anywhere credible.",
  },

  faqs: [
    { q: "Is the Kuwaiti dinar pegged to the US dollar?", a: "No, and Kuwait is the only Gulf state where that is true. The Central Bank repegged the dinar in May 2007 to an undisclosed weighted basket of currencies. The dollar dominates the basket but does not fix the rate, so it moves." },
    { q: "How much is a Kuwaiti dinar worth?", a: "Around 3.25 to 3.30 US dollars, making it the highest-valued currency unit in the world. Because it is basket-pegged, check the live rate rather than trusting a figure from any guide, including this one." },
    { q: "Does Kuwait have VAT?", a: "No. Kuwait is one of only two Gulf states, with Qatar, that never adopted VAT, and it levies no excise, property or transfer taxes either. The GCC framework was signed in 2017 but remains before parliament, so this is worth re-checking in future." },
    { q: "Do US citizens need a visa for Kuwait?", a: "Yes, bought on arrival. The State Department puts the fee at KD 10, about 33 dollars, for a stay of up to three months. Your passport needs six months validity from arrival and a blank page for the stamp." },
    { q: "Do I need cash in Kuwait?", a: "More than in Qatar or Saudi Arabia. Malls, hotels and supermarkets take cards, but street taxi meters are frequently not used so fares get agreed and paid in cash, as do smaller vendors and the souq." },
    { q: "Does Uber work in Kuwait?", a: "It is unclear. Current sources contradict each other, with some listing Uber as active and a recent first-hand account saying it is not reliably available. Careem definitely works and is the app to install." },
    { q: "Can I take a ride-hailing app from Kuwait airport?", a: "Reportedly not. A recent first-hand account says apps cannot collect at Kuwait International at all. The alternatives are the airport taxi rank or a city bus at around KD 0.250. Careem works fine for the trip back to the airport." },
    { q: "What is the emergency number in Kuwait?", a: "112, the unified number for police, ambulance and fire, published on Kuwait's own government portal. It differs from every neighbour, and note that the US Embassy in Kuwait suspended operations in March 2026." }
  ],

  culture: {
    heading: "A few words of Arabic go a long way",
    intro: "Arabic is the language and English is widely spoken in Kuwait City. Kuwaitis have a strong reputation for directness and for hospitality, and the two arrive together, which visitors from more roundabout cultures tend to find refreshing once they adjust.",
    phrases: [
      { mean: "Hello, peace be upon you", say: "as-sa-LAAM-u a-LAY-kum", word: "As-salamu alaykum", native: "السلام عليكم" },
      { mean: "Hello, welcome", say: "MAR-ha-ba", word: "Marhaba", native: "مرحبا" },
      { mean: "Thank you", say: "SHOOK-ran", word: "Shukran", native: "شكراً" },
      { mean: "How much is it?", say: "bi-KAM HA-tha", word: "Bikam hatha", native: "بكم هذا" },
      { mean: "Too expensive", say: "GHA-li WA-jid", word: "Ghali wajid", native: "غالي واجد" },
      { mean: "No thank you", say: "laa SHOOK-ran", word: "La shukran", native: "لا شكراً" },
    ],
    tip: "Hospitality here runs through <b>gahwa</b>, cardamom coffee poured short into small cups, and <b>karak</b> tea from a hatch for a few hundred fils. The local sweet is <b>gers ogaily</b>, a saffron and cardamom cake that came off the pearling boats. Note that <b>alcohol is completely prohibited</b> in Kuwait, not licensed as in the UAE and Bahrain, so evenings run on tea, coffee and juice.",
    stories: [
      { img: "/kuwait-culture-1.jpg",
        alt: "WPA-style illustration of the interior of a Kuwaiti diwaniya, a long reception room with low cushioned benches along the walls and patterned red carpets, several men in white dishdashas seated talking while one stands pouring from a tall brass dallah into small cups on a tray, with dates and sweets on a low table",
        h: "The room where things actually happen",
        p: "The diwaniya is a reception room attached to a Kuwaiti house, open on set evenings, where men gather to talk. It is not a private party but a civic institution: business gets done there, disputes get settled, and Kuwaiti politics has genuinely been shaped in these rooms, which is unusual in the region. If you are invited to one, that is a real invitation rather than politeness.",
        note: "Say it: dee-WAA-nee-ya, and an invitation to one is a compliment" },
      { img: "/kuwait-culture-2.jpg",
        alt: "WPA-style illustration of the Kuwait Towers on the Gulf shoreline at golden hour, three tapering spires, the two tallest each pierced by a large sphere clad in thousands of small blue and green enamelled discs, the third a plain needle, with the flat blue Gulf behind and a seafront promenade and palms at the base",
        h: "Fifty five thousand discs",
        p: "The Kuwait Towers opened in 1979: three tapering spires on the shoreline, two of them pierced by spheres clad in tens of thousands of small enamelled discs in blues and greens. The largest sphere holds water, which is the quiet point, since Kuwait's freshwater has always been engineered rather than found. Iraqi forces damaged them during the 1990 invasion and Kuwait repaired and reopened them, which is why they read as more than architecture here.",
        note: "Good to know: the spheres are water tanks, not decoration" },
      { img: "/kuwait-culture-3.jpg",
        alt: "WPA-style illustration of a Kuwaiti winter desert camp at dusk, a large black and cream woven tent pitched on flat pale desert with its front open, layered patterned carpets and cushions inside, a small fire with a brass coffee pot at its edge, a four-wheel drive parked alongside and a wide low horizon under a deep indigo sky with the first stars showing",
        h: "The whole country moves outdoors",
        p: "From roughly November to March, Kuwaiti families pitch tents in the desert for the season. This is the kashta, and it is not a weekend novelty: camps are properly furnished with carpets, cushions, generators and satellite dishes, and families return to the same patch of ground year after year. The desert is flat and unremarkable to look at, which is entirely beside the point.",
        note: "Say it: KASH-ta, and the season is the cool half of the year" },
    ],
  },
};
