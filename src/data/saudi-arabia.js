import { S } from './carrier-spine.js';

// Saudi Arabia money guide.
//
// Verified August 2026 against: SAMA (the 3.75 peg, unchanged since June 1986, reaffirmed by
// the Governor at the AlUla Conference 2026), ZATCA and Bahrain-independent tax sources on
// the 15% VAT and the tourist VAT refund scheme live since 18 April 2025, the Ministry of
// Municipal and Rural Affairs levy of 5% per occupied room and 2.5% at three-star and below,
// the official Visit
// Saudi eVisa portal (one year, multiple entry, mandatory medical insurance bundled), the
// CST National Numbering Plan and my.gov.sa for emergency numbers, and current reporting on
// the Riyadh Metro fares and the TGA-licensed ride-hailing market.
//
// Correction-prone facts live in F and are interpolated, so fixing one value fixes every
// sentence that uses it. See AUTHORING-GUIDES.md.

const F = {
  peg: "3.75 riyals to the dollar",
  perRiyal: "about 27 cents",
  vat: "15%",
  municipality: "5%",
  municipalityLow: "2.5%",
  refundMin: "SAR 500",
  refundFrom: "18 April 2025",
  metro: "SAR 4",
  emergency: "911",
};

export default {
  slug: "saudi-arabia",
  iso2: "sa",
  live: true,
  name: "Saudi Arabia",
  from: "United States",
  checked: "Aug 2026",
  checkedISO: "2026-08-02",
  emergency: { medical: F.emergency, note: "Saudi Arabia is the one Gulf state where the number depends on where you are standing. 911 is the unified line in Riyadh, Makkah, Madinah and the Eastern Province, routing police, ambulance and civil defence through one centre. Outside those regions use the direct lines: 997 ambulance, 998 fire and civil defence, 999 police. Emergency stabilisation is broadly provided regardless of ability to pay, but continuing care is not free for visitors, which is partly why medical insurance is bundled into the tourist visa.", checked: "Aug 2026", checkedISO: "2026-08-02" },
  insuranceLevel: "medium",
  region: "Middle East",

  spokes: [
    {
      slug: "visa",
      glance: [
        { k: "Visa", v: "Required, and it costs" },
        { k: "eVisa", v: "One year, multiple entry" },
        { k: "Included", v: "Mandatory medical insurance" },
        { k: "Passport", v: "Valid 6 months from entry" }
      ],
      live: true,
      topic: "visas",
      title: "Do US citizens need a visa for Saudi Arabia?",
      description: "Yes. US citizens get a one-year multiple-entry eVisa online in minutes, and the fee includes mandatory medical insurance. Use the official portal.",
      h1: "Do US citizens need a visa for Saudi Arabia?",
      lede: "Yes, and it is the most expensive entry in the Gulf, but it is also the most generous: a year of validity, multiple entries, and medical insurance folded into the price.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: "Yes. US citizens are among the 66 nationalities eligible for the <b>tourist eVisa</b>, applied for online at the official Visit Saudi portal and often approved in <b>minutes</b>. It is a <b>one-year, multiple-entry</b> visa, and the fee includes <b>mandatory medical insurance</b>, which is unusual and genuinely useful. A <b>visa on arrival</b> is also available at Saudi airports for US passport holders. Your passport must be valid at least <b>six months</b> from entry. One thing to pin down before you book a long trip: the official wording is 90 days <b>in the country</b>, and sources disagree on whether that is 90 days per visit or 90 days in total across the year.",
      official: {
        label: "Visit Saudi: the official tourist eVisa portal",
        url: "https://visa.visitsaudi.com/",
        note: "The only official portal. It carries the eligible-nationality list, the current fee, and the actual terms. Plenty of lookalike sites will file the same application for a markup.",
      },
      expediter: false,
      sections: [
        {
          h: "What you get, and what it costs",
          icon: "passport",
          key: {
            fig: "1 year",
            tag: "Multiple entry",
            text: "Approved in minutes to hours, valid a year, and the fee bundles mandatory medical insurance.",
            tone: "teal"
          },
          p: [
            "The eVisa is a one-year, multiple-entry tourist visa. Applications are typically approved within minutes to a few hours, and approval rates for US applicants are high. There is no embassy appointment and no passport to post.",
            "On price: it is in the region of 500 riyals, roughly 130 dollars, and the figure includes the compulsory medical insurance. We are not printing an exact number because current sources disagree, quoting different amounts for the online and on-arrival routes, and the portal carries the live one. Whatever it says there is the answer. Apply directly, never through a third-party site charging a service fee on top."
          ]
        },
        {
          h: "The 90 days question, which genuinely matters",
          icon: "alert",
          key: {
            tag: "Per visit, or in total?",
            text: "The official portal says 90 days in the country. Sources split on whether that resets each entry or caps the whole year.",
            tone: "amber"
          },
          p: [
            "This is the one thing on this page worth checking yourself, because getting it wrong means overstaying. The Visit Saudi portal describes a one-year multiple-entry visa allowing tourists to spend up to 90 days in the country. Most travel sites paraphrase that as 90 days per visit. At least one detailed guide states the opposite, that the total combined time in the Kingdom across the visa's validity cannot exceed 90 days.",
            "Those are very different rules for anyone planning repeat trips. If your plans involve more than 90 days total in a year, confirm the reading on the portal or with the Saudi embassy before you commit. Extensions can be requested through official channels but are discretionary rather than guaranteed."
          ]
        },
        {
          h: "The insurance that comes with it",
          icon: "shield",
          key: {
            tag: "Already covered, partly",
            text: "The visa fee includes compulsory medical cover. It does not include trip cancellation or disruption.",
            tone: "teal"
          },
          p: [
            "Saudi Arabia requires visitors on a tourism visa to hold tourism health insurance, and it solves that for you by bundling a policy into the visa fee. That is a real benefit: emergency stabilisation in Saudi Arabia is broadly provided regardless of ability to pay, but continuing care is not free for foreigners, so having cover matters.",
            "Be clear about what it is not. The bundled policy is medical. It does not cover trip cancellation, flight disruption or the sort of losses that a Level 3 advisory makes relevant, and those are the risks worth thinking about on a Gulf trip right now. If you want that, it is a separate purchase, and buying it after an advisory is already public generally will not cover cancelling because of the advisory."
          ]
        },
        {
          h: "Makkah, Madinah and Umrah",
          icon: "plane",
          key: {
            tag: "Worth knowing before you plan",
            text: "The tourist visa permits Umrah outside the Hajj season. Makkah and Madinah remain closed to non-Muslims.",
            tone: "teal"
          },
          p: [
            "The tourist eVisa covers Umrah for Muslim travellers outside the official Hajj season, which removed a lot of paperwork that used to require a specialist agent. Hajj itself needs a dedicated visa arranged through approved agencies via the Nusuk platform, and there are dated windows each year when tourist visa holders cannot enter Makkah.",
            "For non-Muslim visitors, Makkah and Madinah are not open, and that is worth building into an itinerary rather than discovering at a checkpoint. Everywhere else, from AlUla to Jeddah to the Empty Quarter, is open to all visitors."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for Saudi Arabia?", a: "Yes. US citizens can apply for the tourist eVisa online at the official Visit Saudi portal, usually approved within minutes to a few hours, or get a visa on arrival at Saudi airports. It is valid one year with multiple entries." },
        { q: "How much does the Saudi tourist visa cost?", a: "In the region of 500 riyals, roughly 130 dollars, including the compulsory medical insurance. Current sources quote different figures for the online and on-arrival routes, so take the number from the official portal rather than from any guide." },
        { q: "Does the Saudi visa include insurance?", a: "Yes, medical insurance is mandatory and bundled into the visa fee. It is medical cover only: it does not include trip cancellation or flight disruption, which are separate purchases." },
        { q: "How long can I stay in Saudi Arabia on a tourist visa?", a: "The portal says up to 90 days in the country on a one-year multiple-entry visa. Sources disagree on whether that is 90 days per visit or 90 days in total across the year, so confirm on the portal before planning repeat trips." }
      ],
      sources: {
        links: [
          { label: "Visit Saudi: the official tourist eVisa portal, terms and current fee", url: "https://visa.visitsaudi.com/", type: "gov" },
          { label: "Saudi national platform: government services and emergency contacts", url: "https://my.gov.sa/en", type: "gov" },
          { label: "US Department of State: current travel advisories, select Saudi Arabia", url: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html", type: "gov" }
        ],
        judgment: "The one-year multiple-entry structure, the 66 eligible nationalities and the bundled mandatory insurance all come from the official portal. We have not printed an exact fee because current sources quote different amounts for the online and on-arrival routes. The 90 days ambiguity is real and unresolved: the portal's own wording supports either reading and reputable guides split on it, so we have flagged it rather than pick one, because the downside is an overstay.",
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Saudi riyal (SAR), pegged" },
        { k: "Cards", v: "Accepted almost everywhere" },
        { k: "Cash for", v: "Souks, small vendors, tips" },
        { k: "VAT", v: "15%, and refundable" }
      ],
      live: true,
      topic: "cash",
      title: "Cash or card in Saudi Arabia? Card, mostly",
      description: "Cards work almost everywhere in Saudi cities, including the metro and taxis. The riyal is pegged to the dollar, and the 15% VAT is reclaimable on shopping.",
      h1: "Cash or card in Saudi Arabia?",
      lede: "Saudi Arabia went card-first fast. Cards and phone payments cover almost everything in the cities, the riyal does not move, and the 15% VAT is the one number worth planning around.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: `Card, and comfortably so. Cards are accepted virtually everywhere across Riyadh, Jeddah and the main cities, including <b>metro stations, taxis, restaurants and malls</b>, and <b>Apple Pay and Google Pay</b> are widely supported. ATMs are abundant. Keep a small float of <b>SAR 200 to 400</b> for souks, small vendors and tips. The riyal is pegged at <b>${F.peg}</b>, so one riyal is <b>${F.perRiyal}</b> and the rate never moves. The number that actually shapes your budget is <b>${F.vat} VAT</b>, the highest in the Gulf, though unlike most of the region you can <b>claim it back on shopping</b>.`,
      sections: [
        {
          h: "How far the card goes",
          icon: "card",
          key: {
            fig: "Nearly all",
            tag: "Including the metro",
            text: "Cards and phone payments cover metro gates, taxis, restaurants and malls. Carrying much cash is unnecessary.",
            tone: "teal"
          },
          p: [
            "Saudi Arabia's card adoption moved quickly and it shows. Visa and Mastercard are taken across hotels, malls, restaurants, supermarkets and fuel stations in Riyadh, Jeddah, Dammam and Al Khobar, contactless is standard, and Apple Pay and Google Pay are widely supported. The Riyadh Metro takes cards at the gates and ride-hailing is card in-app.",
            "What still wants cash is the traditional end: souks, small independent vendors, roadside stalls, and tips. A float of a few hundred riyals covers that comfortably for a week. Amex is thinner than Visa or Mastercard, so do not travel on it alone."
          ]
        },
        {
          h: "The riyal, which does nothing interesting",
          icon: "usd",
          key: {
            fig: "SAR 3.75 = $1",
            tag: "Fixed since 1986",
            text: "One of the longest-standing pegs in the world, reaffirmed by SAMA. Divide riyal prices by roughly 3.75.",
            tone: "teal"
          },
          p: [
            `The riyal has been fixed at ${F.peg} since June 1986, one of the longest-running currency pegs anywhere, and the Saudi Central Bank restates its commitment to it regularly. One riyal is ${F.perRiyal}, so divide riyal prices by roughly 3.75 for dollars. SAR 100 is about 27 dollars.`,
            "Because the peg holds, there is nothing to time and no rate to shop for. It also splits into 100 halalas, so prices behave the way a US traveller expects, which is a relief after Oman at 1,000 baisa and Bahrain at 1,000 fils."
          ]
        },
        {
          h: "The 15% you should plan around",
          icon: "receipt",
          key: {
            fig: "15%",
            tag: "Highest in the Gulf",
            text: "Three times the UAE and Oman, and Qatar has none at all. It is on almost everything you buy.",
            tone: "amber"
          },
          p: [
            "Saudi VAT is 15%, introduced at 5% in 2018 and tripled in July 2020. That is the highest rate in the Gulf by a wide margin: the UAE and Oman are at 5%, Bahrain at 10%, and Qatar has no VAT at all. On a two week trip of meals, hotels and shopping, that difference is real money.",
            "The good news, and it is genuinely good, is that Saudi Arabia now runs a working tourist refund scheme on goods you take home. It is the only Gulf state besides the UAE that does. The mechanics are on the taxes section of the main guide, and the short version is: spend over SAR 500 at one participating store, get the form at the till, claim at the airport."
          ]
        },
        {
          h: "ATMs and the dollar question",
          icon: "atm",
          key: {
            tag: "Always choose riyals",
            text: "Dynamic currency conversion adds several percent on a currency pegged to the dollar. There is nothing to gain.",
            tone: "amber"
          },
          p: [
            "ATMs are everywhere, at airports, in every mall and at bank branches throughout the cities, and foreign cards work normally. Take a reasonable amount in one withdrawal rather than several small ones.",
            "If a terminal or ATM offers to bill you in US dollars, decline it every time. The riyal is pegged to the dollar, so dollar pricing only adds a padded rate. Pay in riyals and let your own bank convert."
          ]
        }
      ],
      faqs: [
        { q: "Can I use cards everywhere in Saudi Arabia?", a: "Almost. Cards and phone payments cover hotels, malls, restaurants, supermarkets, fuel, metro gates and taxis across the main cities. Souks, small vendors and tips still want cash, so keep SAR 200 to 400 as a float." },
        { q: "What is the Saudi riyal pegged at?", a: "SAR 3.75 to one US dollar, fixed since June 1986 and one of the longest-standing pegs in the world. One riyal is about 27 cents, so divide riyal prices by roughly 3.75." },
        { q: "Can I use US dollars in Saudi Arabia?", a: "Not as everyday money. Some hotels will take them at their own rate, but shops, restaurants and taxis deal in riyals. Because the riyal is pegged, paying in dollars only costs you the markup." },
        { q: "How much is VAT in Saudi Arabia?", a: "15%, the highest in the Gulf, against 5% in the UAE and Oman, 10% in Bahrain and none in Qatar. Unlike most of the region, tourists can reclaim it on qualifying goods taken out of the country." }
      ],
      sources: {
        links: [
          { label: "SAMA: commitment to the 3.75 riyal peg as the anchor of monetary stability", url: "https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-557.aspx", type: "gov" },
          { label: "ZATCA: the Zakat, Tax and Customs Authority, which administers the 15% VAT and the tourist refund", url: "https://zatca.gov.sa/en", type: "revenue" }
        ],
        judgment: "The peg and its longevity are SAMA's own published position. The 15% VAT rate is a matter of record across ZATCA and every tax practice we checked. Where card acceptance thins out and how much cash to carry are our estimate from experience rather than published figures.",
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Expected", v: "No, but increasingly common" },
        { k: "Restaurants", v: "Round up or 10% if no charge" },
        { k: "Taxis", v: "Round up, a few riyals" },
        { k: "Best form", v: "Cash, small riyal notes" }
      ],
      live: true,
      topic: "tipping",
      title: "Do you tip in Saudi Arabia? What is expected",
      description: "Tipping in Saudi Arabia is a courtesy rather than an obligation. Check for a service charge, round up taxis by a few riyals, and use cash.",
      h1: "Do you tip in Saudi Arabia?",
      lede: "Not obligatory, and not the US convention. Service is often charged for already, and where it is not, a small amount in cash is welcome rather than expected.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: "Tipping is <b>appreciated, not expected</b>. Check the bill first: many restaurants and hotels add a <b>service charge</b>, and where one appears the question is settled. Where there is none, rounding up or leaving around <b>10%</b> is generous in a sit-down restaurant. <b>Taxi drivers do not expect a tip</b> and rounding up by a few riyals is the normal gesture. Ride-hailing apps have an in-app tip option and nobody minds if you skip it. Cash in <b>small riyal notes</b> is the form that reaches people, and remember one riyal is only about 27 cents, so tips here are numerically larger than in Bahrain or Oman.",
      sections: [
        {
          h: "Read the bill, then decide",
          icon: "receipt",
          key: {
            tag: "Service charge, then VAT",
            text: "A restaurant bill may carry both a service charge and 15% VAT. The VAT is the government's; the service charge is not.",
            tone: "teal"
          },
          p: [
            "A Saudi bill can carry two additions, and they are different things. The 15% VAT is a government tax. A service charge, where a property adds one, is the establishment's own and is the part that covers service. Where it appears, you have paid for service and anything further is optional.",
            "Where there is none, and in the smaller local places where there usually is not, rounding up or leaving roughly 10% in a sit-down restaurant is a generous gesture. There is no percentage you are obliged to hit and nobody is keeping score."
          ]
        },
        {
          h: "The numbers feel bigger here",
          icon: "coins",
          key: {
            tag: "27 cents to the riyal",
            text: "A riyal is worth far less than an Omani rial or a Bahraini dinar, so a normal tip is a larger number of notes.",
            tone: "teal"
          },
          p: [
            "This is worth a moment if you are touring the Gulf. In Bahrain a single dinar note is about 2.66 dollars, so one note is already a real tip. In Saudi Arabia a riyal is about 27 cents, so the equivalent gesture is ten riyals rather than one.",
            "Practically: a few riyals rounds up a taxi, ten riyals is a normal thank you for a porter or a helpful driver, and more than that is genuinely generous rather than expected. Keep small notes for the purpose."
          ]
        },
        {
          h: "Cash, and no US math",
          icon: "notip",
          key: {
            tag: "No 20% rule",
            text: "Nobody here works for tips the way an American server does. A US percentage is a large gift, not a norm.",
            tone: "amber"
          },
          p: [
            "Wages are not structured around tips and there is no social expectation that a percentage follows a meal. Applying a US 20% is not the safe default, it is simply a big tip.",
            "Where you do tip, cash works better than a card slip, because whether an added amount reaches the individual depends on the establishment. This is one of the few reasons to carry notes in a country that otherwise runs on cards."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Saudi Arabia?", a: "It is appreciated but not expected. Check the bill for a service charge first. Where there is none, rounding up or leaving around 10% in a sit-down restaurant is generous, and taxi drivers expect nothing beyond rounding up." },
        { q: "How much should I tip a taxi driver in Saudi Arabia?", a: "Rounding up by a few riyals is normal and nothing is expected. In Uber or Careem the in-app tip option is there if you want it, and skipping it is unremarkable." },
        { q: "Is the service charge on my Saudi bill the same as VAT?", a: "No. The 15% VAT is a government tax. A service charge is the establishment's own and is the part covering service. A bill may carry both, so read the breakdown before adding anything." },
        { q: "Should I tip in cash or by card in Saudi Arabia?", a: "Cash, in small riyal notes. Whether a tip added to a card payment reaches the person who served you depends on the business, and cash removes the question." }
      ],
      sources: {
        links: [
          { label: "ZATCA: the 15% standard VAT rate that appears on your bill", url: "https://zatca.gov.sa/en", type: "revenue" },
          { label: "SAMA: the pegged rate behind every riyal figure on this page", url: "https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-557.aspx", type: "gov" }
        ],
        judgment: "The 15% VAT and the peg are official. The tipping norms are our read of common practice rather than a published standard, and practice in Saudi Arabia is shifting as tourism grows, so treat the 10% restaurant figure as a generous upper end rather than an expectation. Service charge practice varies by establishment.",
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Apps", v: "Uber and Careem, both licensed" },
        { k: "Riyadh Metro", v: "About SAR 4 for two hours" },
        { k: "Airport taxis", v: "Metered, official ranks only" },
        { k: "Avoid", v: "Unlicensed street taxis" }
      ],
      live: true,
      topic: "taxis",
      title: "Saudi taxis, apps and the Riyadh Metro",
      description: "Uber and Careem both operate and are usually cheaper than the airport taxi. The Riyadh Metro costs about SAR 4 and runs to the airport.",
      h1: "Taxis, apps and the metro in Saudi Arabia",
      lede: "Saudi cities are vast and built for cars, so getting around is mostly apps. Riyadh is the exception now, because its new metro is absurdly cheap and reaches the airport.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: `<b>Uber and Careem both operate</b> across Saudi Arabia, both licensed by the Transport General Authority, which means drivers are background-checked and hold commercial permits. Careem is the dominant platform locally. Apps are usually <b>cheaper than the official airport taxi</b>. The standout is the <b>Riyadh Metro</b>: opened in late 2024 and fully running since January 2025, a two-hour ticket is about <b>${F.metro}</b>, roughly a dollar, and the Yellow Line connects King Khalid International straight into the city. <b>Avoid unlicensed street taxis</b>: they are illegal and drivers face heavy fines.`,
      sections: [
        {
          h: "The Riyadh Metro changes the arithmetic",
          icon: "train",
          key: {
            fig: "About SAR 4",
            tag: "Roughly one dollar",
            text: "A two-hour ticket on the world's longest driverless metro, including the airport line into the city.",
            tone: "teal"
          },
          p: [
            `Riyadh's metro opened in November 2024 and all six lines have been running since January 2025: 85 stations, 176 kilometres, and the longest fully automated driverless network in the world. A two-hour economy ticket is about ${F.metro}, first class around SAR 10, and a seven day pass roughly SAR 40. You use the Darb app.`,
            "The airport connection is the part that matters most to a visitor. The Yellow Line reaches King Khalid International with covered walkways from the terminals, against SAR 50 to 130 or more for the same trip by taxi. That is the widest gap between transit and taxi anywhere in this cluster, and the carriages are built with luggage space."
          ]
        },
        {
          h: "Both apps, and Careem leads here",
          icon: "taxi",
          key: {
            tag: "TGA licensed",
            text: "Every Uber and Careem driver holds a commercial transport licence and has passed background checks.",
            tone: "teal"
          },
          p: [
            "Uber and Careem both work normally with your existing account and card. Careem, though owned by Uber since 2019, operates separately and is the dominant platform in Saudi Arabia, with local features worth having. Jeeny is a third, Saudi-focused option. Downloading both majors before you fly is the sensible move.",
            "The market is large and regulated: ride-hailing across the Kingdom passed 32 million trips in a single quarter of 2025, and the Transport General Authority licenses all operators. In-city rides run roughly SAR 25 to 60 depending on distance and surge, with peaks at rush hour and during Ramadan and Hajj."
          ]
        },
        {
          h: "Airport taxis, and what they cost",
          icon: "plane",
          key: {
            tag: "Official ranks only",
            text: "Metered, at marked ranks outside arrivals. The app is usually the better value of the two.",
            tone: "amber"
          },
          p: [
            "At Riyadh's King Khalid International the official taxi concession runs metered cars from ranks outside arrivals, with a price list displayed at the stand. Current estimates for the ride into central districts like Olaya vary considerably across sources, from roughly SAR 50 up to SAR 180 depending on destination, traffic and which source you believe, which is a wide enough spread that we will not quote a single figure. Confirm the meter is running before you set off.",
            "Ride-hailing typically comes in lower, often around SAR 60 to 120 into the centre, and both Uber and Careem operate 24 hours from all terminals with signposted pickup zones. Between the metro at about four riyals and an app at sixty, the taxi rank is the convenience option rather than the default."
          ]
        },
        {
          h: "Between cities",
          icon: "wheel",
          key: {
            tag: "Rail and cheap fuel",
            text: "The Haramain high-speed line links Jeddah, Makkah and Madinah. Petrol is around SAR 2.20 a litre.",
            tone: "teal"
          },
          p: [
            "For longer hops, the Haramain High Speed Railway connects Jeddah, Makkah and Madinah with economy fares commonly in the SAR 50 to 150 range, and SAPTCO intercity coaches are cheaper again. Intercity ride-hailing exists but is dramatically more expensive: Riyadh to Dammam by app runs into the hundreds of riyals.",
            "Renting is genuinely viable here because fuel is cheap, around SAR 2.20 a litre for 91 octane in 2026, which is a fraction of US prices. Rental itself commonly runs SAR 150 to 350 a day. Distances are long and the driving is fast, so this is a considered choice rather than a casual one."
          ]
        }
      ],
      faqs: [
        { q: "Do Uber and Careem work in Saudi Arabia?", a: "Both do, and both are licensed by the Transport General Authority so drivers are background-checked. Careem is the dominant platform locally. They operate 24 hours from all Riyadh airport terminals with signposted pickup zones." },
        { q: "How much is the Riyadh Metro?", a: "About SAR 4 for a two-hour economy ticket, roughly a dollar, with first class around SAR 10 and a seven day pass about SAR 40. The Yellow Line runs to King Khalid International Airport." },
        { q: "What is the cheapest way from Riyadh airport into the city?", a: "The metro Yellow Line at around SAR 4, with covered walkways from the terminals and luggage space on the trains. A ride-hailing app is roughly SAR 60 to 120 and the metered taxi more again." },
        { q: "Are street taxis safe in Saudi Arabia?", a: "Use official ranks or the apps. Unlicensed street taxis are illegal, drivers face heavy fines, and you have no recourse if something goes wrong. Licensed options are plentiful and cheap enough that there is no reason to risk it." }
      ],
      sources: {
        links: [
          { label: "Saudi national platform: transport services and the Transport General Authority", url: "https://my.gov.sa/en", type: "gov" },
          { label: "SAMA: the pegged rate behind every fare quoted here", url: "https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-557.aspx", type: "gov" }
        ],
        judgment: "That both Uber and Careem operate under TGA licensing, and that the Riyadh Metro opened in late 2024 with all lines running from January 2025, are well attested across current sources. Metro fares of about SAR 4 for two hours are consistently reported but come from travel sources rather than an operator tariff page we could open. Airport taxi estimates vary from SAR 50 to 180 across current sources, so we give the range and say so. Fuel and rental figures are 2026 estimates.",
      }
    },
  {
    slug: "tax-refund",
    glance: [
      { k: "VAT rate", v: "15%, the highest in the Gulf" },
      { k: "Minimum spend", v: "Over SAR 500 at one retailer" },
      { k: "The catch", v: "Ask for the form at the till" },
      { k: "Export window", v: "90 days, goods unused" },
    ],
    live: true,
    topic: "tax-refund",
    title: "Saudi VAT refund for tourists: how to claim the 15%",
    description:
      "Saudi Arabia has refunded VAT to visitors since April 2025. The minimum spend, the form you must request as you pay, and where the claim happens.",
    h1: "The Saudi VAT refund, and the step everyone misses",
    lede:
      "Short answer: Saudi Arabia charges the highest VAT in the Gulf and, unusually for the region, gives it back on shopping. The scheme works, but it starts at the till rather than at the airport, and that is where most claims are lost before they begin.",
    checked: "Aug 2026",
    checkedISO: "2026-08-11",
    answer:
      "Saudi VAT runs at <b>15%</b> and, since <b>18 April 2025</b>, a visitor can get it back on things they carry home. Four gates stand between you and the money. You have to be <b>over 18 and not resident here</b>. Your spending has to clear <b>SAR 500 in one approved shop</b>, and pooling small receipts from several shops will not do it, although three receipts from one shop on a single day are treated as one. The goods have to leave the country <b>within 90 days, unused</b>. And the paperwork has to be started <b>while you are still at the counter paying</b>, against your passport, with the claim finished at the airport. That last gate is the one that closes quietly, because a receipt on its own proves nothing later.",
    official: {
      label: "ZATCA: the tourist VAT refund scheme",
      url: "https://zatca.gov.sa/en",
      note:
        "The Zakat, Tax and Customs Authority runs the scheme. Participating retailers are approved individually, so the shop, not the tax authority, is where you confirm you can claim.",
    },
    sections: [
      {
        h: "Why this one is worth the trouble",
        key: {
          fig: "15%",
          tag: "The highest in the Gulf",
          text:
            "Qatar levies none, the UAE and Oman a twentieth, Bahrain a tenth. The size of the Saudi rate is what makes the paperwork worth doing.",
          tone: "teal",
        },
        p: [
          "VAT arrived here at 5% in 2018 and was <b>tripled to 15% in July 2020</b>. That is a long way above the rest of the region, and it is the reason prices feel a step up from Doha or Muscat. It is also why the refund matters more here than anywhere else in the Gulf: the same effort recovers three times what it would in the UAE.",
          "On a serious purchase the arithmetic is real money rather than a rounding error. If you are shopping deliberately, in gold, electronics, perfume or clothing, treat the refund as part of the price you negotiate with yourself before you buy, not as a bonus you might chase afterwards.",
        ],
      },
      {
        h: "The threshold is per shop, and it does not pool",
        key: {
          fig: "SAR 500",
          tag: "At a single retailer",
          text:
            "The minimum has to be cleared inside one approved shop. Spending spread across different shops does not add up, though three receipts from one shop on a single day do.",
          tone: "amber",
        },
        p: [
          "You need to clear <b>SAR 500 inside one approved shop</b>. Two half-sized receipts from two different shops will not combine to get you there, and that single rule disqualifies more visitors than any other. Where it does bend: <b>three receipts from one shop on a single day</b> count together. So concentrating a planned purchase in one place is a tactic, not a coincidence.",
          "Not every shop is in the scheme. It covers more than <b>1,400 approved outlets</b>, which sounds comprehensive right up to the moment you are standing in one that is not. The window stickers to look for say <b>Tax Free</b> or <b>VAT Refund Available</b>. If you cannot see one, the question belongs before you hand over a card, not after.",
        ],
      },
      {
        h: "The claim starts at the till, not at departures",
        key: {
          fig: "At the till",
          tag: "Passport in hand",
          text:
            "The form is issued against your passport at the moment of purchase. Without it there is nothing to validate at the airport, no matter how large the receipt.",
          tone: "amber",
        },
        p: [
          "This is the step that decides whether you get anything. <b>Request the form while you are still at the counter, passport out</b>, as you pay. The paperwork is generated against the passport, so it cannot be created retrospectively from a receipt, and airport staff have nothing to process without it. Arriving at departures with a bag of receipts and no forms is the common way this goes wrong.",
          "Then <b>complete the claim at the airport before you leave</b>, allowing time for it, and keep the goods <b>unused and available to show</b>. The export window is <b>90 days</b> from purchase, which is generous for a normal trip and only matters if you buy on one visit and leave on another.",
        ],
      },
      {
        h: "What does not qualify",
        key: {
          fig: "Goods only",
          tag: "Not the trip itself",
          text:
            "Hotels, meals, taxis and anything consumed in the country are outside the scheme. It refunds what you carry out, not what you spend while there.",
          tone: "teal",
        },
        p: [
          "The refund covers <b>goods exported for personal use</b>. It does not cover your hotel, your restaurant bills, your rides or anything else consumed inside the country, which is the same shape as every other visitor refund scheme in the world and still surprises people who expect the 15% back on a whole trip.",
          "Nor does it reach a hotel bill. Beyond the 15% itself, properties here often put a <b>service charge</b> on the room, and a few add a <b>municipality fee</b> as well, none of it recoverable. Worth asking whether a quoted rate is the whole rate when you book. That is a different question from the refund, and for most budgets a larger one.",
        ],
      },
    ],
    faqs: [
      {
        q: "How does the Saudi tourist VAT refund actually work?",
        a: "Yes, and have been able to since 18 April 2025. If you are over 18, not resident, and you spend past SAR 500 in a single approved shop, the 15% comes back on goods you take home unused inside 90 days. The one thing that trips people is timing: the form is raised against your passport at the counter while you pay, and the claim is finished at the airport on the way out.",
      },
      {
        q: "What is the minimum spend for the Saudi VAT refund?",
        a: "Past SAR 500 in one approved shop, somewhere around 133 dollars. Small receipts gathered across several shops will not reach the threshold, which is stricter than it sounds, although three receipts from one shop on a single day are treated as one. The practical move is to put a planned purchase through a single approved store rather than spreading it around.",
      },
      {
        q: "What if I forgot to ask for the form when I paid?",
        a: "Then there is no claim to make. The refund document is issued against your passport at the point of sale, so it cannot be produced later from a receipt alone, and airport staff have nothing to validate without it. If you intend to claim, the question to ask before handing over a card is whether the store participates and whether they will issue the form.",
      },
    ],
  },
  {
    slug: "hotel-taxes-and-fees",
    glance: [
      { k: "On top of the room", v: "About 20%" },
      { k: "VAT", v: `${F.vat}, the Gulf's highest` },
      { k: "Municipality levy", v: `${F.municipality}, or ${F.municipalityLow} lower down` },
      { k: "Hotel", v: "Service charge at many" }
    ],
    live: true,
    topic: "taxes",
    title: "Saudi hotel taxes and fees: about 20% on the room",
    description: `A Saudi hotel bill adds ${F.vat} VAT and a municipality levy of ${F.municipality}, halved at three-star and below, so about 20% over the rate. Checked 2026.`,
    h1: "Saudi Arabia hotel taxes and fees, explained",
    lede: "Short answer: about a fifth on top, and how much depends on the stars on the door. Saudi Arabia charges the highest VAT in the Gulf, and the municipality levy beside it asks cheaper hotels for half what it asks the smart ones. Here is what lands on the bill.",
    checked: "Aug 2026",
    checkedISO: "2026-08-17",
    answer: `Two government charges sit on a Saudi room rate. <b>VAT at ${F.vat}</b>, the highest in the Gulf, introduced at 5% in 2018 and tripled in July 2020. And a <b>municipality levy</b> on each occupied room, <b>${F.municipality}</b> at four-star and above but <b>${F.municipalityLow}</b> at three-star and below. Together they land a room at roughly <b>20%</b> over the quoted rate. Many properties add a <b>service charge</b> on top, which is the hotel's own and not a tax. One genuine bright spot: unlike almost everywhere in the region, the VAT you pay on <b>shopping</b> is reclaimable, though never the VAT on the bed.`,
    official: {
      label: "ZATCA: the 15% VAT and the tourist refund scheme",
      url: "https://zatca.gov.sa/en",
      note: "The VAT rate and the refund scheme are official. The municipality levy is set by the Ministry of Municipal and Rural Affairs at 5% per occupied room, reduced to 2.5% at three-star and below. Service charges are set by each property, so check your booking's fine print."
    },
    sections: [
      {
        h: "The Gulf's highest VAT, by a distance",
        icon: "receipt",
        key: { fig: "15%", tag: "Tripled in 2020", text: "Introduced at 5% in 2018 and tripled in July 2020. That is three times the UAE and Oman, half again on Bahrain, and against nothing at all in Qatar and Kuwait.", tone: "teal" },
        p: [
          `Saudi <b>VAT is ${F.vat}</b>, introduced at 5% in 2018 and <b>tripled in July 2020</b>. It applies to hotel stays as it does to almost everything else. For context, that is <b>three times</b> the 5% charged in the UAE and Oman, half again on Bahrain's 10%, and against <b>nothing at all</b> in Qatar and Kuwait. If you are moving around the Gulf, this is the single biggest reason a Saudi room bill reads differently from a Doha one.`,
          "There is no separate per-night tourist tax of the kind Bahrain levies, and nothing extra to hand over at the airport when you leave. The Saudi stack is short. It is just steep."
        ]
      },
      {
        h: "The levy that depends on your star rating",
        icon: "coins",
        key: { fig: "5% or 2.5%", tag: "Set by star rating", text: "The municipality levy is 5% on each occupied room at four-star and above, and halved to 2.5% at three-star and below. It is the one charge here that rewards booking down.", tone: "amber" },
        p: [
          `Beside the VAT sits a <b>municipality levy</b> charged on <b>each occupied room</b>, set by the Ministry of Municipal and Rural Affairs. It is <b>${F.municipality}</b> at four-star hotels and above, and <b>${F.municipalityLow}</b> at three-star and below, which makes it the one charge on this page that gets cheaper as your hotel does. It applies to hotels, furnished apartments and commercial residential facilities alike, and only to rooms that are actually occupied.`,
          "This matters more than it looks for <b>Makkah and Madinah</b>. A great deal of accommodation there sits at three-star and below, serving pilgrims rather than leisure travellers, so the <b>lower rate is the one that applies to a large share of stays</b>. A room at 15% VAT plus 2.5% lands near 18% all-in, against about 20% for a smarter property. Neither is small, but they are not the same number and a quote should be read accordingly."
        ]
      },
      {
        h: "The service charge is the hotel's own",
        icon: "usd",
        key: { fig: "Varies", tag: "Not legislated", text: "Many properties add a service charge, some do not, and the rate is not standard. We are not printing a figure that would only be right in some places.", tone: "amber" },
        p: [
          "Many Saudi properties add a <b>service charge</b> on top of the government charges. This is the hotel's own, it is <b>not a tax</b> and it is not legislated, and the rate is not standard across the market, so we are deliberately not printing a percentage that would only be right at some places. Where it appears it is normally not optional.",
          "The practical question at booking is therefore the same one that works everywhere: <b>is this rate all-in?</b> With 20% in government charges before a property adds anything, the difference between a quoted rate and a final bill is worth establishing in advance rather than at checkout."
        ]
      },
      {
        h: "The VAT on shopping comes back. The VAT on the room does not",
        icon: "refund",
        key: { fig: "Shopping only", tag: "Never the bed", text: "Saudi Arabia runs the best refund scheme in the region, live since April 2025, but it covers goods you export unused. A room you slept in is consumed here and is never reclaimable.", tone: "teal" },
        p: [
          `Unlike most of the region, Saudi VAT is <b>reclaimable on shopping</b>, through a ZATCA scheme live since <b>${F.refundFrom}</b> with a minimum spend at a single participating retailer. The full rules, the minimum, the export window and what to ask for at the till are in the <a href="/saudi-arabia/tax-refund">Saudi VAT refund guide</a>.`,
          "What matters here is the boundary. The refund covers <b>goods you take out of the country unused</b>. It does not cover hotels, restaurants or anything else consumed in the Kingdom, so the 15% on your room is a <b>cost, not a deferred rebate</b>, and no amount of paperwork at the airport changes that. Getting this backwards is a common and expensive assumption. For cards, cash and the riyal's peg, see the <a href=\"/saudi-arabia\">Saudi Arabia money guide</a>."
        ]
      }
    ],
    faqs: [
      { q: "How much tax is on a hotel room in Saudi Arabia?", a: "About 20%. There is 15% VAT, the highest in the Gulf, plus a municipality levy on each occupied room of 5% at four-star and above or 2.5% at three-star and below. Many hotels then add a service charge of their own, which is not a tax and varies by property. There is no separate per-night tourist tax." },
      { q: "What is the municipality fee on Saudi hotels?", a: "A levy set by the Ministry of Municipal and Rural Affairs, charged on each occupied room: 5% at four-star hotels and above, halved to 2.5% at three-star and below. It applies to hotels, furnished apartments and other commercial residential facilities, and it sits on top of the 15% VAT rather than inside it." },
      { q: "Can I claim the VAT back on a hotel in Saudi Arabia?", a: "No. Saudi Arabia does run a genuinely useful tourist VAT refund, live since April 2025, but it covers goods you export from the country unused, above a minimum spend at a single participating retailer. Hotels, restaurants and anything consumed in the Kingdom are excluded, so the 15% on your room is a cost rather than something you reclaim." },
      { q: "Do hotels in Makkah and Madinah charge the same taxes?", a: "The 15% VAT is the same everywhere. The municipality levy depends on the property's star rating rather than the city, and because a large share of accommodation in Makkah and Madinah sits at three-star and below, the lower 2.5% rate applies to many of those stays. That puts a modest room nearer 18% all-in than 20%." }
    ],
    sources: {
      links: [
        { label: "ZATCA: the 15% VAT rate and the tourist refund scheme", url: "https://zatca.gov.sa/en", type: "revenue" },
        { label: "Saudi national platform: government services and official rates", url: "https://my.gov.sa/en", type: "gov" }
      ],
      judgment: "The 15% VAT and the tourist refund scheme are official and linked above. The municipality levy at 5% per occupied room, and 2.5% at three-star and below, comes from Ministry of Municipal and Rural Affairs reporting and a Gulf tax practice note rather than a ministry page we could open in English, so treat the structure as solid and the exact current rate as worth confirming with your hotel. As corroboration rather than proof, four Makkah and Madinah properties priced on a booking site at this check showed totals about 20 to 21% over the nightly rate, which is what 15% and 5% compound to. The service charge is set by each property and we have not printed a rate. Checked August 2026."
    }
  },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Strong in cities and on highways" },
        { k: "SIM registration", v: "Biometric, at the airport" },
        { k: "App calling", v: "Unblocked in 2017, but check on arrival" },
        { k: "Carrier roaming", v: "$10 to $12 a day" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "medium",
      title: "Saudi Arabia: biometric SIM registration, and the VoIP question",
      description: "Saudi coverage is strong in the cities and along the highways. Registration is biometric, and the 2017 VoIP unblocking is contested by some 2026 sources.",
      h1: "Staying connected in Saudi Arabia.",
      lede: "Saudi Arabia has two things worth knowing that are not about price: buying a local SIM involves fingerprints, and the country's much-reported 2017 decision to allow internet calling is disputed by some current sources.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>strong in Riyadh, Jeddah, Dammam, AlUla and Medina</b> and along the main highways, and it thins across the interior desert, the Empty Quarter and the mountain roads of the southwest. A local <b>STC</b>, <b>Mobily</b> or <b>Zain</b> tourist SIM is inexpensive and often sold cheaply at the airport, and <b>registration is biometric</b>: expect to give <b>fingerprints</b> at a kiosk or counter along with your passport, which is more friction than most countries and is normal here. A <b>Nomad eSIM</b> at a few dollars per gigabyte avoids that entirely. Your US carrier charges about <b>${S.dayPass}</b> to roam (<b>AT&amp;T and Verizon</b> day passes), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon has ${S.verizonNoCap}</b> and keeps billing daily. <b>T-Mobile</b>'s mid and upper tiers include <b>${S.tmoRange}</b> of high-speed data abroad before slowing to <b>${S.throttle}</b>. On <b>app calling</b>, Saudi Arabia <b>lifted its VoIP restrictions in 2017</b> and WhatsApp calling has generally worked since, though some 2026 sources claim renewed blocking and we could not resolve the disagreement, so <b>test it on arrival</b> and keep an ordinary cellular call as the fallback. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "Registration involves fingerprints",
          icon: "passport",
          key: { fig: "Biometric", tag: "SIM registration", text: "Passport plus fingerprints at a kiosk or counter. Normal here, more friction than most places, and the honest case for an eSIM.", tone: "amber" },
          p: [
            `Saudi Arabia registers SIMs biometrically. Buying a local prepaid line means presenting your <b>passport</b> and giving <b>fingerprints</b> at a carrier kiosk or counter, commonly at the airport on arrival, where the staff do this constantly and it is quick. It is not an obstacle so much as a step nobody warns visitors about, and it surprises people who expected to grab a SIM from a shelf.`,
            `That friction is the honest argument for a <b>Nomad eSIM</b> here: a few dollars per gigabyte, set up before you fly, no kiosk and no biometrics. It costs more per gigabyte than the local SIM, so it is a convenience purchase rather than a saving, and on a short trip it is a reasonable one. If you are staying longer or want a Saudi number for domestic apps and deliveries, do the local SIM.`
          ]
        },
        {
          h: "The VoIP question, unresolved",
          icon: "alert",
          key: { fig: "2017", tag: "Ban lifted, then disputed", text: "Saudi Arabia lifted its VoIP restrictions in 2017 and calling has generally worked since. Some 2026 sources claim renewed blocking.", tone: "amber" },
          p: [
            `The well-documented history is that Saudi Arabia <b>lifted its ban on internet calling in September 2017</b>, deliberately, as part of opening up to business, and WhatsApp and FaceTime calling have generally worked there since. That is the position most sources describe and it is the one we would report.`,
            `What stops us stating it flatly is that some <b>2026 sources claim the calls are blocked again</b> by the major carriers, and we could not resolve that disagreement to our own standard. Worth knowing how thin the evidence is. Almost every page on the internet about Gulf app-calling is published by a company selling a VPN or an eSIM, both of which are the advertised fix, and they contradict each other flatly: on the same week in 2026 we found sources calling this country blocked, intermittent and permitted. So we are not going to give you a confident answer we do not have. <b>Messaging works everywhere in the Gulf.</b> Assume <b>app calling might not</b>, have a backup before you land, and test it on arrival rather than at the moment you need it.`
          ]
        },
        {
          h: "Coverage and cost",
          icon: "roamfee",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: "A US carrier day pass is the expensive default. AT&T caps it at 10 daily fees a bill period, Verizon does not cap at all, and T-Mobile's mid and upper tiers include 5GB to 30GB abroad.", tone: "teal" },
          p: [
            `Coverage is good where visitors go: fast 4G and 5G in <b>Riyadh, Jeddah and Dammam</b>, solid service at <b>AlUla</b> and Diriyah, along the highways and on the Haramain high-speed line, and around <b>Medina</b>. It thins in the interior desert, deep in the <b>Empty Quarter</b> and on the mountain roads of the <b>Asir</b> southwest, so a desert or mountain drive wants <b>offline maps</b> and a paper note of where you are staying.`,
            `Roaming is about <b>${S.dayPass}</b>, so <b>${S.week}</b> a week, with <b>AT&amp;T</b> capping at <b>${S.capFees}</b>, about <b>${S.capAmount}</b>, and <b>Verizon</b> having <b>${S.verizonNoCap}</b>, which matters on the longer stays business travel here tends to involve. <b>T-Mobile</b>'s tiers include <b>${S.tmoRange}</b> before <b>${S.throttle}</b>. This guide is written for US travelers departing the US. For more, see <a href='/saudi-arabia/cash-or-card'>cash or card in Saudi Arabia</a>, <a href='/saudi-arabia/taxis-and-apps'>taxis and apps in Saudi Arabia</a>, and the <a href='/saudi-arabia'>Saudi Arabia money guide</a>.`
          ]
        }
      ],
      faqs: [
        { q: `Do I need fingerprints to buy a SIM card in Saudi Arabia?`, a: `Yes, registration is biometric: expect to present your passport and give fingerprints at a carrier kiosk or counter, commonly at the airport. It is quick and routine there, and it is more friction than most countries. A travel eSIM avoids it entirely, at a higher price per gigabyte.` },
        { q: `Does WhatsApp calling work in Saudi Arabia?`, a: `Probably, and we will not state it flatly. Saudi Arabia lifted its VoIP restrictions in September 2017 and calling has generally worked since, which is what most sources describe. Some 2026 sources claim renewed blocking and we could not resolve the disagreement. Test it on arrival and keep an ordinary cellular call as the fallback.` },
        { q: `Is phone coverage good in Saudi Arabia?`, a: `Strong in Riyadh, Jeddah, Dammam, AlUla and Medina, along the main highways and on the Haramain high-speed line. It thins in the interior desert, the Empty Quarter and the Asir mountain roads, so download offline maps for a desert or mountain drive.` },
        { q: `How much does it cost to use my US phone in Saudi Arabia?`, a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "US State Department: Saudi Arabia country information and local laws", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/SaudiArabia.html", type: "gov" },
          { label: "STC: prepaid and visitor SIM plan pages", url: "https://www.stc.com.sa/", type: "official" }
        ],
        judgment: "Checked Aug 2026. Two deliberate positions. The biometric registration step is stated plainly because it is the thing nobody warns visitors about, and it is also the honest argument for the product we earn on, so the page says the local SIM is still cheaper per gigabyte. And the VoIP position is left unresolved: the 2017 lifting is well documented and widely corroborated, some 2026 sources assert renewed blocking, and effectively every source on this topic sells a VPN or an eSIM. Rather than pick, this page reports both readings and tells you to test on arrival."
      }
    },
    {
      slug: "medical-costs",
      exposureCategory: "payInFull",
      exposureQuote: "The public hospitals are for citizens and residents, and a visitor is treated and billed in the private lane.",
      glance: [
        { k: "Public hospitals", v: "Citizens and residents" },
        { k: "Your visa", v: "Carries a basic emergency policy" },
        { k: "That policy", v: "Network hospitals, emergencies only" },
        { k: "Routine care", v: "Yours to pay, privately" }
      ],
      live: true,
      topic: "health",
      title: "Getting sick in Saudi Arabia: the visa already carries a policy",
      description: "Saudi Arabia bundles a mandatory basic health policy into the tourist visa itself, activated on issue and good for emergencies at approved network hospitals. Routine care stays yours to pay, in the private lane.",
      h1: "What does getting sick in Saudi Arabia cost a visitor?",
      lede: "Saudi Arabia is the rare country that answers part of the insurance question at the border: a basic emergency policy from a Saudi-regulated insurer is bundled into the tourist visa itself. Knowing exactly what that policy is, and is not, is this page.",
      checked: "Aug 2026",
      checkedISO: "2026-08-21",
      answer: "The public hospitals are for citizens and residents, and a visitor is treated and billed in the private lane. What makes Saudi Arabia unusual is what you are already carrying when you land: the Council of Health Insurance states that <b>health insurance is mandatory as part of issuing the tourism visit visa</b>, and that the policy <b>activates when the visa is issued</b>, covering <b>health emergency situations at a network of approved providers</b> across the kingdom. So the true out-of-pocket picture splits three ways. A <b>genuine emergency</b> at a network hospital runs through the visa policy. <b>Routine care</b>, the clinic visit, the prescription, the specialist, is yours to pay at private prices in a system built around modern hospital groups in <b>Riyadh, Jeddah and the Eastern Province</b>. And the <b>big non-emergency or above-limit case</b> lands on you, which is where the policy's modest ceiling and emergencies-only scope matter.",
      insurance: true,
      insuranceNote: "Saudi Arabia is the one country on this site where some cover already exists before you shop: a basic emergency policy from a Saudi-regulated insurer is bundled into the tourist visa and activates on issue, so do not buy blind or double-buy the bottom layer. Be equally clear about its edges: emergencies only, approved network hospitals only, a modest ceiling, and nothing for routine care, pre-existing conditions or a medically supervised flight home. If you add anything for Saudi Arabia, add the top layer: higher limits and evacuation. Faye covers trip medical and evacuation.",
      careFirst: "If it is an emergency, call 997 and go; this is exactly the case the visa policy exists for.",
      sections: [
        {
          h: "The policy in your passport",
          icon: "receipt",
          key: { tag: "Bundled at the border", text: "A mandatory basic health policy is part of the tourist visa itself, activated on issue, covering emergencies at approved network hospitals.", tone: "teal" },
          p: [
            "The Council of Health Insurance, the Saudi regulator, states the arrangement plainly: <b>health insurance is mandatory as part of issuing your tourism visit visa</b>, the policy is issued alongside the visa and <b>activated when the visa is issued</b>, and it covers <b>health emergency situations through a network of approved health care providers</b> around the kingdom. You do not shop for it; it arrives with the visa.",
            "If it is an emergency, call 997 and go; this is exactly the case the visa policy exists for. Keep the policy document from your visa email with your passport, because the network hospital's desk will want the policy number, and the regulator's site can look your policy up by passport number."
          ]
        },
        {
          h: "What the bundled policy is not",
          icon: "alert",
          key: { tag: "The edges", text: "Emergencies only, network providers only, a modest ceiling, and nothing for routine care, pre-existing conditions or the flight home.", tone: "teal" },
          p: [
            "The bundled policy is a floor, not a roof, and its edges are exactly where visitors get surprised. It is scoped to <b>emergencies</b>: the heart attack, the car accident, the sudden admission. It pays at <b>approved network providers</b>, so a non-network private clinic is outside it. Its ceiling is <b>modest by hospital standards</b>, real money for a bad night, not for a bad month.",
            "And three whole categories sit outside it entirely: <b>routine care</b>, which you pay for privately; <b>pre-existing conditions</b>, the standard exclusion; and <b>medical evacuation</b>, the supervised flight home that no basic policy anywhere includes. Those three are the actual insurance question for Saudi Arabia, and the bundled policy answers none of them."
          ]
        },
        {
          h: "The private lane, day to day",
          icon: "cash",
          key: { tag: "Routine care", text: "Day-to-day medicine for a visitor is the private hospital groups and clinics, paid at the desk, with pharmacies handling the minor.", tone: "teal" },
          p: [
            "Below the emergency line, a visitor's medicine is the <b>private lane</b>: the big hospital groups and their clinics in Riyadh, Jeddah, the Eastern Province and increasingly the tourism coasts, modern, English-capable, card-friendly, and paid at the desk like any private service. Pharmacies are plentiful and handle the minor complaints inexpensively.",
            "The desert and mountain corners the new tourism sells, AlUla, the Red Sea coast, the Empty Quarter fringe, sit far from that hospital tier, which folds Saudi Arabia into the same rule as every big-geography country on this site: for the remote itinerary, the <b>distance to serious care</b> is part of the medical plan."
          ]
        },
        {
          h: "What is still worth covering",
          icon: "plane",
          key: { tag: "The top layer", text: "The bundled policy holds the floor. Higher limits and the evacuation flight are the layer a visitor actually shops for.", tone: "teal" },
          p: [
            "Here is the proportionate read: Saudi Arabia arrives with its own floor, a mandatory emergency policy most countries make you buy yourself, and for the ordinary emergency at a network hospital that floor holds. We would rather tell you that than pretend you land bare.",
            "What remains is the top layer: an <b>above-ceiling admission</b>, a <b>non-network or non-emergency</b> problem, and the <b>medically supervised flight home</b> from the Arabian Peninsula, which is the single largest number on this page's horizon. Point any added cover there, and for cards, cash and the riyal on the ground, see the <a href='/saudi-arabia/cash-or-card'>Saudi Arabia cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Does the Saudi tourist visa include health insurance?", a: "Yes. The Council of Health Insurance states that a basic health policy is mandatory as part of issuing the tourism visit visa, activates when the visa is issued, and covers emergencies at approved network hospitals." },
        { q: "What does the Saudi visa insurance actually cover?", a: "Health emergency situations at a network of approved providers, with a modest ceiling. It does not cover routine care, pre-existing conditions, non-network providers or a medically supervised flight home." },
        { q: "Can tourists use Saudi public hospitals?", a: "The public system is for citizens and residents. A visitor is treated in the private lane, through the visa policy's network in an emergency and out of pocket for everything routine." },
        { q: "Do I still need travel insurance for Saudi Arabia?", a: "For the bottom layer, no, the visa already carries it, and we would rather say that than sell you a duplicate. What is worth adding is the top layer: higher limits and evacuation, which the bundled policy does not touch." },
        { q: "What is the emergency number in Saudi Arabia?", a: "997 for an ambulance, or 911 in the main regions as the unified number. In an emergency, go to a network hospital where the visa policy pays, and keep the policy document from your visa email with your passport." }
      ],
      sources: {
        links: [
          { label: "Saudi Council of Health Insurance: tourist policy page, stating insurance is mandatory as part of the tourism visit visa, activates on issue and covers emergencies at approved network providers", url: "https://www.chi.gov.sa/en/knowledge-center/health-insurance-policies/Pages/tourist-policy.aspx", type: "gov" },
          { label: "US State Department: Saudi Arabia country information, health and travel guidance for US citizens", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/SaudiArabia.html", type: "gov" }
        ],
        judgment: "The bundled-policy claims, mandatory with the tourism visit visa, activated on issue, emergencies at approved network providers, are the Saudi regulator's own statements on its own page. The policy's ceiling and the visa fee are deliberately not stated as figures here: the guide handles entry costs, amounts have changed before, and a stale number on a medical page is worse than none. The private-lane structure and the distance caveat for the new tourism regions are the desk's read of how the system is organised. Checked August 2026."
      }
    }
  ],

  signals: { cardFriendliness: 5, cashNeed: 2, taxRisk: 4, atmRisk: 2 },
  hook: "The highest VAT in the Gulf at 15%, and the only country besides the UAE where you can actually claim it back.",
  aliases: ["saudi arabia", "saudi", "ksa", "riyadh", "jeddah", "saudi riyal", "sar", "alula", "kingdom of saudi arabia", "dammam"],

  title: "Saudi Arabia money guide: cards, riyals and 15% VAT",
  description: "Cards work almost everywhere, the riyal is pegged to the dollar, and the 15% VAT is the highest in the Gulf but reclaimable on shopping.",
  h1: "Money in Saudi Arabia, sorted.",
  lede: "A calm, current plan for the money side of your trip: how the riyal works, why the 15% VAT matters more than anything else, how to claim it back, and the metro ticket that costs a dollar.",

  hero: {
    img: "/saudi-arabia-hero.jpg",
    h: 1375,
    alt: "A quiet lane in Al-Balad, historic Jeddah at golden hour with tall coral-stone townhouses four storeys high, their facades covered in intricate turquoise and brown rawasheen wooden lattice bay windows leaning over a narrow sandy lane, iron lanterns and string lights overhead, a figure in a white thobe walking away up the lane, and a platter of kabsa with chicken, a brass dallah with a small cup of pale Saudi qahwa, a bowl of dates and a folded mutabbaq on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: `Saudi Arabia is the most card-friendly country in this cluster and the most heavily taxed. <b>Cards work almost everywhere</b>, including metro gates and taxis, and the riyal is <b>pegged at ${F.peg}</b> so nothing moves. The headline number is <b>${F.vat} VAT</b>, three times the UAE and Oman, with Qatar at zero. The offset is real though: Saudi Arabia is the <b>only Gulf state besides the UAE running a working tourist VAT refund</b>, live since ${F.refundFrom}, so shopping above <b>${F.refundMin}</b> at a participating store is genuinely reclaimable. Two other things: the <b>visa costs real money but bundles medical insurance</b>, and the <b>Riyadh Metro is about ${F.metro}</b> against sixty or more for the same trip by app.`,

  meter: {
    heading: "The most cashless of the Gulf states, by some margin.",
    cashPct: 15,
    note: "A rough feel for everyday spending rather than a measured figure. Card and phone payment acceptance is deep here, covering metro gates, taxis, restaurants, malls and fuel, and ride-hailing is card in-app by default. What is left is souks, small independent vendors and tipping. A few hundred riyals covers a week of that.",
  },

  trio: [
    {
      sym: "card",
      kind: "ok",
      h: "Your card",
      verd: "Works almost everywhere",
      p: "Visa and Mastercard across hotels, malls, restaurants, supermarkets, fuel, metro gates and taxis, with Apple Pay and Google Pay widely supported. Amex is thinner, so do not rely on it alone.",
      cta: { label: "Check yours", href: "#calc" }
    },
    {
      sym: "cash",
      kind: "ok",
      h: "Cash",
      verd: "A small float only",
      p: "SAR 200 to 400 in small notes covers souks, small vendors and tips for a week. A riyal is only about 27 cents, so tips here run to ten riyals rather than one.",
      cta: { label: "How much to carry", href: "/saudi-arabia/cash-or-card" }
    },
    {
      sym: "atm",
      kind: "ok",
      h: "ATMs",
      verd: "Abundant",
      p: "Airports, malls and bank branches throughout the cities, and foreign cards work normally. Withdraw a sensible amount in one go, and decline the offer to be billed in dollars.",
      cta: { label: "Find one", href: "#atm" }
    }
  ],

  plan: [
    {
      sym: "tag",
      when: "Before you go",
      bullets: [
        "Apply for the <b>eVisa on the official Visit Saudi portal</b> only. It is a year, multiple entry, and the fee includes <b>mandatory medical insurance</b>.",
        "Check your passport has <b>six months</b> left from your arrival date.",
        "Download <b>Uber and Careem</b>, plus <b>Darb</b> if you are going to Riyadh, because the metro is the cheapest thing in the country."
      ],
      cta: { label: "See no-fee card options", tag: "earn", href: "#" }
    },
    {
      sym: "plane",
      when: "Landing",
      bullets: [
        "In Riyadh, the <b>metro Yellow Line</b> runs from the terminals into the city for about <b>SAR 4</b>. An app is roughly SAR 60 to 120.",
        "Use <b>official taxi ranks or the apps</b>. Unlicensed street taxis are illegal and carry real risk.",
        "Save the right emergency number: <b>911</b> in Riyadh, Makkah, Madinah and the Eastern Province, <b>997</b> for an ambulance elsewhere."
      ],
      cta: { label: "Taxis and the metro", href: "/saudi-arabia/taxis-and-apps" }
    },
    {
      sym: "bowl",
      when: "Day to day",
      bullets: [
        "Tap for almost everything. Keep a few hundred riyals for <b>souks and tips</b>.",
        "<b>Everything carries 15% VAT.</b> Budget with that in it rather than as a surprise at the till.",
        "If you plan to shop, <b>ask for the VAT refund form at the till</b>, above SAR 500 at a participating store."
      ],
      cta: { label: "Tipping, plainly", href: "/saudi-arabia/tipping" }
    },
    {
      sym: "receipt",
      when: "Checking out and leaving",
      bullets: [
        "Ask whether the hotel rate was <b>all-in</b>. Expect 15% VAT and often a service charge or municipality fee on top.",
        "Leave time at the airport to <b>claim your VAT refund</b>. Goods must be unused and exported within 90 days.",
        "Pay in <b>riyals</b>, not dollars. The peg means dollar pricing only adds a markup."
      ],
      cta: { label: "How the refund works", href: "#tax" }
    }
  ],

  cash: {
    rate: 3.75,
    cur: "SAR",
    round: 50,
    defaultIndex: 1,
    rateNote: `Effectively fixed. SAMA has held the riyal at ${F.peg} since June 1986, one of the longest-standing pegs in the world, and restates its commitment regularly. One riyal is ${F.perRiyal}: divide riyal prices by roughly 3.75 for dollars.`,
    styles: [
      { n: "Budget", per: 55, cash: 0.25, room: 85 },
      { n: "Mid-range", per: 130, cash: 0.15, room: 160 },
      { n: "Comfort", per: 300, cash: 0.10, room: 380 }
    ],
  },

  connectivity: {
    works: "Yes, and it is very good. stc, Mobily and Zain all give strong coverage, 5G is extensive across Riyadh, Jeddah and the main cities, and tourist SIMs are sold at the airports and in operator stores everywhere. Coverage thins in the deep desert and on the long empty highways, which matters here because the distances are genuinely long. Before you buy anything: check whether your US plan already covers Saudi Arabia, because several do, and airport wifi is good enough to sort a SIM after you land rather than at the first counter you see.",
  },

  tax: {
    unit: "percentOfRoom",
    currency: "SAR",
    capNights: null,
    note: `Saudi Arabia's VAT is ${F.vat}, the highest in the Gulf, and it applies to hotel stays as it does to almost everything else. Beside it sits a municipality levy on each occupied room, ${F.municipality} at four-star and above and ${F.municipalityLow} at three-star and below, so pick the band that matches your hotel. Together they come to about 20% or about 17.5%. Many properties add a service charge on top, which is the hotel's own and not a tax, and we have not modelled it because the rate is not standard. There is no separate per-night tourist tax of the kind Bahrain levies. Unlike almost all of the region, the VAT on goods you take home is reclaimable, which is covered in the taxes section below.`,
    regions: [
      {
        key: "hotel4",
        label: "Hotel room, four-star and above (VAT and municipality)",
        pct: 20,
        note: `${F.vat} VAT plus a ${F.municipality} municipality levy on the occupied room, about 20% together. Many properties add a service charge on top, which is the hotel's own rather than a tax and is not a standard rate, so treat this as the government floor and ask whether your rate is all-in.`,
      },
      {
        key: "hotel3",
        label: "Hotel room, three-star and below (VAT and municipality)",
        pct: 17.5,
        note: `${F.vat} VAT plus the reduced ${F.municipalityLow} municipality levy that applies at three-star and below, about 17.5% together. This is the band a large share of Makkah and Madinah accommodation falls into. A service charge may still be added on top.`,
      },
      {
        key: "restaurant",
        label: "Restaurant meal",
        pct: 15,
        note: `${F.vat} VAT, plus a service charge at some establishments. The municipality levy applies to occupied rooms rather than meals, so it does not appear here. A local cafeteria will usually just charge the price on the board.`,
      }
    ],
  },

  currencyHeading: "The riyal, in plain terms.",

  facts: [
    { sym: "usd", k: "Quick conversion", v: `The riyal is fixed at ${F.peg} and has been since June 1986. Divide riyal prices by roughly 3.75 for dollars: SAR 100 is about 27 dollars, SAR 500 about 133. One riyal is ${F.perRiyal}.` },
    { sym: "card", k: "The most cashless of the Gulf", v: "Cards and phone payments cover hotels, malls, restaurants, supermarkets, fuel, metro gates and taxis. Ride-hailing is card in-app. A float of SAR 200 to 400 covers souks, small vendors and tips for a week." },
    { sym: "receipt", k: "15% on almost everything", v: "The highest VAT rate in the Gulf: three times the UAE and Oman at 5%, above Bahrain at 10%, and Qatar has none at all. Introduced at 5% in 2018 and tripled in July 2020. Budget with it included rather than treating it as a surprise." },
    { sym: "tag", k: "And you can claim it back", v: "Saudi Arabia is the only Gulf state besides the UAE running a working tourist VAT refund. Live since April 2025 at more than 1,400 approved outlets, on purchases above SAR 500 at a single store, for goods exported within 90 days." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "The Gulf's highest VAT, and its most useful refund.",
    text: `Saudi VAT is <b>${F.vat}</b>, introduced at 5% in 2018 and tripled in July 2020. That is the highest in the Gulf, against 5% in the UAE and Oman, 10% in Bahrain and nothing at all in Qatar. <b>But it is reclaimable, and the scheme actually works.</b> ZATCA launched a tourist VAT refund on <b>${F.refundFrom}</b>, and it now runs at <b>more than 1,400 approved retail outlets</b>. The rules, in order: you must be a <b>non-resident aged 18 or over</b>; you must spend more than <b>${F.refundMin}</b>, about 133 dollars, <b>at a single participating retailer</b>, and you cannot combine receipts from different stores, though up to three receipts from the same store on the same day can be added together; the goods must be <b>for personal use, unused, and exported within 90 days</b>; and you must ask for the <b>refund form at the till</b>, presenting your passport, then claim at the airport before you leave. Look for <b>Tax Free</b> or <b>VAT Refund Available</b> signage, because not every store participates. <b>Worth planning for if you are shopping seriously</b>, because 15% back on a significant purchase is real money, and it is the best refund proposition in the region.`,
  },

  keyFacts: [
    // NO FIGURE, DELIBERATELY. See the Bahrain note and the `unpriced` kind in
    // entry-charges.js. The spoke's judgment block is explicit that current sources quote
    // different amounts for the online and the on-arrival routes, so printing one would
    // mean picking a side of a disagreement we cannot settle.
    { label: "Saudi tourist eVisa (US citizens)", value: "Required and not free. A one-year, multiple-entry tourist eVisa from the official Visit Saudi portal, with mandatory medical insurance bundled into the fee, and a visa on arrival also available to US passport holders. We publish no amount because sources quote different figures for the two routes and the portal is the only current one", status: "enacted", effective: null, source: "https://visa.visitsaudi.com/", checked: "2026-08-02" },
  ],

  traps: [
    "<b>Budgeting without the 15%.</b> It is the highest rate in the Gulf and it lands on almost everything, so a menu or shelf price is not the price. If you have just come from Qatar, where there is no VAT at all, the difference is jarring.",
    "<b>Leaving the VAT refund until the airport.</b> The refund starts at the till, not at departures: you need the form issued by the retailer with your passport at the time of purchase. No form, no refund, however large the receipt.",
    '<b>"Would you like to pay in dollars?" Always say no.</b> The riyal is pegged to the dollar, so dynamic currency conversion adds a padded rate of several percent for nothing. Choose riyals on every terminal and every ATM.',
    "<b>Assuming one emergency number.</b> It is <b>911</b> in Riyadh, Makkah, Madinah and the Eastern Province, but outside those regions you want the direct lines: <b>997</b> for an ambulance, 998 fire, 999 police. This is the only country in the cluster where it depends on where you are.",
    "<b>Taking an unlicensed street taxi.</b> They are illegal, drivers face heavy fines, and you have no recourse. Uber, Careem and the official ranks are all licensed by the Transport General Authority, and cheap enough that there is no reason to chance it.",
  ],

  tippingHeading: "Appreciated, not expected, and in cash.",
  tipping: "Tipping in Saudi Arabia is a courtesy rather than an obligation, and it is not the US convention. Read the bill first, because a Saudi bill can carry two additions that are easy to confuse: the 15% VAT is a government tax, while a service charge, where a property adds one, is the establishment's own and is the part that covers service. Where a service charge appears, you are done. Where there is none, rounding up or leaving around 10% in a sit-down restaurant is generous. Taxi drivers do not expect a tip and a few riyals rounds up a fare. One thing worth calibrating if you are touring the Gulf: a riyal is only about 27 cents, far less than an Omani rial or a Bahraini dinar, so the normal gesture here is ten riyals rather than one note. Tip in cash, because on a bill that may already carry a service charge, cash is the part that clearly reaches a person.",

  sources: {
    changed: "First published August 2026. Verified at this check: the riyal's peg at 3.75 to the dollar, unchanged since June 1986, against SAMA, whose Governor restated the commitment at the AlUla Conference in 2026; the 15% VAT rate against ZATCA and multiple tax practices; the tourist VAT refund scheme, live since 18 April 2025 at more than 1,400 approved outlets with an SAR 500 minimum at a single retailer and a 90 day export window, against ZATCA reporting and Gulf News; the one-year multiple-entry tourist eVisa with mandatory medical insurance bundled, against the official Visit Saudi portal; the emergency number structure, 911 unified in Riyadh, Makkah, Madinah and the Eastern Province with 997, 998 and 999 as direct lines, against the CST National Numbering Plan and my.gov.sa; and the Riyadh Metro's opening, scale and roughly SAR 4 two-hour fare. Also recorded: the US State Department has Saudi Arabia at Level 3, Reconsider Travel, following the February 2026 hostilities between the United States and Iran.",
    links: [
      { label: "SAMA: commitment to the 3.75 riyal peg", url: "https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-557.aspx", type: "gov" },
      { label: "ZATCA: the 15% VAT and the tourist refund scheme", url: "https://zatca.gov.sa/en", type: "revenue" },
      { label: "Visit Saudi: the official tourist eVisa portal", url: "https://visa.visitsaudi.com/", type: "gov" },
      { label: "Saudi national platform: emergency contact numbers and government services", url: "https://my.gov.sa/en", type: "gov" },
      { label: "US Department of State: current travel advisories, select Saudi Arabia", url: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html", type: "gov" },
    ],
    judgment: "The peg, the VAT rate, the refund scheme's existence and terms, the visa structure and the emergency numbers are all well sourced and linked above. Four things are deliberately hedged. No visa fee is printed, because current sources quote different amounts for the online and on-arrival routes while the portal carries the live one. The 90 day allowance is genuinely ambiguous, with the portal's own wording supporting either 90 days per visit or 90 days in total and reputable guides split, so we flag it rather than choose. On the refund minimum, four credible sources including Gulf News say SAR 500 and one outlier says SAR 5,000, and we have gone with 500. And hotel service charges and municipality fees we could not pin to a standard rate, so the tax model uses the certain 15% as a floor and tells the reader to ask. Airport taxi fares vary from SAR 50 to 180 across current sources and are given as a range. Metro fares are consistently reported but from travel sources rather than an operator tariff we could open. The cash share, float and tipping norms are our own read.",
  },

  faqs: [
    { q: "How much is VAT in Saudi Arabia?", a: "15%, the highest in the Gulf. That is three times the UAE and Oman at 5%, above Bahrain at 10%, and Qatar has none at all. It was introduced at 5% in 2018 and tripled in July 2020." },
    { q: "Can tourists claim VAT back in Saudi Arabia?", a: "Yes. ZATCA launched a tourist refund scheme in April 2025, now at more than 1,400 approved outlets. You need to spend over SAR 500 at a single participating store, ask for the refund form at the till with your passport, and export the unused goods within 90 days." },
    { q: "Do I need cash in Saudi Arabia?", a: "Very little. Cards and phone payments cover hotels, malls, restaurants, metro gates and taxis. Keep SAR 200 to 400 in small notes for souks, small vendors and tips." },
    { q: "What is the Saudi riyal pegged at?", a: "SAR 3.75 to one US dollar, fixed since June 1986, making it one of the longest-standing pegs in the world. One riyal is about 27 cents, so divide riyal prices by roughly 3.75." },
    { q: "Do US citizens need a visa for Saudi Arabia?", a: "Yes. The tourist eVisa is applied for online at the official Visit Saudi portal, often approved within minutes, and is valid one year with multiple entries. The fee includes mandatory medical insurance, and your passport needs six months validity." },
    { q: "How much is the Riyadh Metro?", a: "About SAR 4 for a two-hour economy ticket, roughly a dollar, with a seven day pass around SAR 40. The Yellow Line runs to King Khalid International Airport, against roughly SAR 60 to 120 by ride-hailing app." },
    { q: "Do Uber and Careem work in Saudi Arabia?", a: "Both do, licensed by the Transport General Authority so drivers are background-checked. Careem is the dominant platform locally. Avoid unlicensed street taxis, which are illegal and leave you without recourse." },
    { q: "What is the emergency number in Saudi Arabia?", a: "911 in Riyadh, Makkah, Madinah and the Eastern Province, which routes police, ambulance and civil defence through one centre. Outside those regions use the direct lines: 997 ambulance, 998 fire, 999 police." }
  ],

  culture: {
    heading: "A few words of Arabic go a long way",
    intro: "Arabic is the language and English is common in the cities and in anything tourism-facing. Saudi Arabia has opened to visitors very recently, and curiosity about where you are from is usually genuine rather than transactional.",
    phrases: [
      { mean: "Hello, peace be upon you", say: "as-sa-LAAM-u a-LAY-kum", word: "As-salamu alaykum", native: "السلام عليكم" },
      { mean: "Thank you", say: "SHOOK-ran", word: "Shukran", native: "شكراً" },
      { mean: "Please", say: "min FAD-lak", word: "Min fadlak", native: "من فضلك" },
      { mean: "How much is it?", say: "bi-KAM HA-tha", word: "Bikam hatha", native: "بكم هذا" },
      { mean: "God willing", say: "in SHAA Allah", word: "Insha'Allah", native: "إن شاء الله" },
      { mean: "No thank you", say: "laa SHOOK-ran", word: "La shukran", native: "لا شكراً" },
    ],
    tip: "Hospitality runs on <b>qahwa</b>, pale green-gold coffee spiced with cardamom and sometimes saffron, poured short into small handleless cups, with <b>dates</b> alongside. Accepting at least one cup is the polite move, and the host will keep pouring until you tilt the cup gently side to side. Note there is <b>no alcohol anywhere in the country</b>, which does quietly simplify a restaurant bill.",
    stories: [
      { img: "/saudi-arabia-culture-1.jpg",
        alt: "WPA-style illustration of Hegra at AlUla, monumental Nabataean tombs carved into isolated rounded sandstone outcrops rising from desert sand, an ornate facade with a stepped crown and flanking columns cut into the rock face, a single robed figure small at the base for scale, low raking light and long shadows",
        h: "Tombs cut into standing rock",
        p: "At Hegra, in AlUla, the Nabataeans carved more than a hundred monumental tombs directly into isolated sandstone outcrops rising out of the desert, complete with stepped crowns, columns and inscriptions naming the families who commissioned them. It was the southern city of the same civilisation that built Petra, and it sat on the incense road running north from Dhofar. It became Saudi Arabia's first UNESCO World Heritage site.",
        note: "Good to know: the same people built Petra, and this was their second city" },
      { img: "/saudi-arabia-culture-2.jpg",
        alt: "WPA-style illustration of the Al-Ahsa date palm oasis, dense rows of palms stretching to the horizon with heavy orange date clusters in the crowns, a farmer in a thobe climbing a palm trunk with a rope harness while another loads a basket of dates onto a cart, clear irrigation channels running between the trunks",
        h: "Millions of palms, fed from below",
        p: "Al-Ahsa in the Eastern Province is the largest oasis in the world, a green sprawl of some two and a half million date palms watered by natural springs rising through the desert floor. It has been continuously cultivated for thousands of years, and the irrigation channels threading between the trunks are the reason a city of that size exists in that place at all. UNESCO lists it as a cultural landscape.",
        note: "Say it: al-AH-sa, and the dates are the local export, not oil" },
      { img: "/saudi-arabia-culture-3.jpg",
        alt: "WPA-style illustration of the mud-brick Najdi palaces of At-Turaif in Diriyah at sunset, tiered earthen walls with triangular vent openings and stepped crenellations glowing deep orange, a rounded watchtower, date palms filling the dry wadi below and two robed figures on a path at the base",
        h: "Where the country began",
        p: "At-Turaif, in Diriyah on the edge of Riyadh, is the mud-brick district where the first Saudi state was founded in the eighteenth century. Built in the Najdi style, all tiered earthen walls, triangular vent openings and stepped crenellations, it glows a deep orange at sunset in a way that photographs badly and looks extraordinary in person. It is UNESCO listed and now the centre of an enormous restoration.",
        note: "Good to know: it is 20 minutes from central Riyadh, and best at dusk" },
    ],
  },
};
