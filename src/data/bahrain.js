import { S } from './carrier-spine.js';

// Bahrain money guide.
//
// Verified August 2026 against: the Central Bank of Bahrain monetary policy page (the 0.376
// peg, effectively unchanged since 1980), Bahrain's National Portal and the National Bureau
// for Revenue (10% VAT from 1 January 2022), the Bahrain National Portal emergency hotline
// directory (999, and 112 is NOT official here), Bahrain International Airport's own taxi
// page (metered BD 2 plus BD 2 airport pickup, Uber and Careem both licensed), AGBI on the
// hotel charge stack, and the NPRA eVisa portal for entry rules.
//
// Correction-prone facts live in F and are interpolated, so fixing one value fixes every
// sentence that uses it. See AUTHORING-GUIDES.md.

const F = {
  peg: "0.376 dinars to the dollar",
  perDinar: "about 2.66 dollars",
  vat: "10%",
  levy: "5%",
  tourist: "BD 3 per room per night",
  emergency: "999",
};

export default {
  slug: "bahrain",
  iso2: "bh",
  live: true,
  name: "Bahrain",
  from: "United States",
  checked: "Aug 2026",
  checkedISO: "2026-08-02",
  emergency: { medical: F.emergency, note: "999 covers ambulance, civil defence and police rescue on one number, free from any phone. Traffic accidents have their own line, 199. Note that 112 is NOT an official emergency number in Bahrain, unlike Oman and Qatar, so dial 999. Visitors are charged for medical treatment here, with only a partial government subsidy, so insurance matters more than in some neighbours.", checked: "Aug 2026", checkedISO: "2026-08-02" },
  insuranceLevel: "medium",
  region: "Middle East",

  spokes: [
    {
      slug: "visa",
      glance: [
        { k: "Visa", v: "Required, and not free" },
        { k: "On arrival", v: "Up to 14 days at the airport" },
        { k: "eVisa", v: "Up to 90 days per stay" },
        { k: "Passport", v: "Valid 6 months from entry" }
      ],
      live: true,
      topic: "visas",
      title: "Do US citizens need a visa for Bahrain?",
      description: "Yes. US citizens get a visa on arrival for up to 14 days, or an eVisa in advance for longer. Unlike Qatar and Oman, Bahrain charges a fee.",
      h1: "Do US citizens need a visa for Bahrain?",
      lede: "Yes, and this is where Bahrain differs from its neighbours. Qatar stamps you in free for 90 days and Oman waives it entirely for two weeks. Bahrain charges.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: "Yes. Everyone except citizens of the Gulf states needs a visa for Bahrain. US citizens have two routes: a <b>visa on arrival</b> at Bahrain International Airport, single entry, for stays of up to <b>14 days</b>, or an <b>eVisa applied for in advance</b> through the NPRA portal, which offers longer options including multiple entry with up to <b>90 days per visit</b>. Either way your passport must be valid at least <b>six months</b> from arrival, and you need a <b>return or onward ticket</b> and <b>proof of accommodation</b>. Both routes carry a fee, and the portal is the only place to read the current one.",
      official: {
        label: "Bahrain NPRA eVisa portal: eligibility, fees and applications",
        url: "https://www.evisa.gov.bh/",
        note: "Run by Nationality, Passports and Residence Affairs. It has an eligibility checker, the current fee schedule, and is also where you extend a visa once you are in the country.",
      },
      expediter: false,
      sections: [
        {
          h: "Two routes, and which one to use",
          icon: "passport",
          key: {
            fig: "14 or 90 days",
            tag: "On arrival, or in advance",
            text: "Visa on arrival is single entry up to two weeks. The eVisa reaches further, including multiple entry with up to 90 days a visit.",
            tone: "teal"
          },
          p: [
            "For a short trip, the visa on arrival at the airport is the simple option: turn up, present your documents, pay, and you are stamped in for up to 14 days, single entry. Bahrain extends that facility to citizens of dozens of countries, the United States among them.",
            "For anything longer, or if you want to come and go, apply on the NPRA portal before you fly. The eVisa comes in several shapes, including multiple entry versions allowing up to 90 days a visit. Applying in advance also removes the risk of an argument at the counter, since your paperwork is checked before you leave home."
          ]
        },
        {
          h: "What it costs, and why we are not printing a number",
          icon: "tag",
          key: {
            tag: "Fees change",
            text: "Read the fee on the NPRA portal. Figures quoted on travel sites go stale and the portal is the only current source.",
            tone: "amber"
          },
          p: [
            "Bahrain charges for both routes, which sets it apart from Qatar's free stamp and Oman's free 14 day waiver. The amount depends on which visa you pick and how long it runs.",
            "We are deliberately not quoting a figure. The fee is set by the NPRA, it has changed, and every number we found came from a secondary site of uncertain date. Read it on the portal linked above and you will have the current one. Apply directly there too, rather than through a third-party service charging a markup on the same application."
          ]
        },
        {
          h: "The conditions people trip on",
          icon: "alert",
          key: {
            fig: "6 months",
            tag: "Passport validity",
            text: "Six months from your date of entry, not from your date of return. Plus an onward ticket and somewhere to stay.",
            tone: "amber"
          },
          p: [
            "The passport rule catches people out because it is six months beyond entry, which is stricter than the three months Qatar asks for. Check the expiry date before you book anything, not the week before you fly.",
            "You also need a confirmed return or onward ticket and proof of accommodation, and officers may ask for evidence you can support yourself. Keep a printed or offline copy of your hotel booking, because airport wifi at the immigration queue is not the moment to go hunting through email."
          ]
        },
        {
          h: "The causeway, and the advisory",
          icon: "wheel",
          key: {
            tag: "Saudi Arabia is 25 km away",
            text: "The King Fahd Causeway links Bahrain to Saudi Arabia, but crossing it needs a Saudi visa in its own right.",
            tone: "teal"
          },
          p: [
            "The 25 kilometre King Fahd Causeway connects Bahrain to Saudi Arabia's Eastern Province in roughly 30 to 45 minutes depending on border traffic. It is a genuinely useful link, and Dammam's airport is sometimes floated as a backup routing. But your Bahrain visa gets you nowhere on the far side: Saudi Arabia requires its own visa, and border formalities take as long as they take.",
            "Separately, and unrelated to your entry paperwork, the US State Department has Bahrain at Level 3, Reconsider Travel, and the FAA has issued a Special Federal Aviation Regulation and a NOTAM covering civil aviation in and near Bahrain. That affects flights rather than admissibility, and it is covered on the main Bahrain guide."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for Bahrain?", a: "Yes. You can get a visa on arrival at Bahrain International Airport for stays of up to 14 days, single entry, or apply for an eVisa in advance through the NPRA portal for longer or multiple entry options. Both carry a fee." },
        { q: "How much does a Bahrain visa cost?", a: "The NPRA sets the fee and publishes it on the official eVisa portal, and it varies by visa type and duration. Figures on travel sites go stale, so take the number from the portal rather than from any guide, including this one." },
        { q: "How long is my passport required to be valid for Bahrain?", a: "At least six months beyond your date of entry. That is stricter than Qatar, which asks for three months, so check the expiry before booking rather than the week you fly." },
        { q: "Can I visit Saudi Arabia from Bahrain over the causeway?", a: "Only with a Saudi visa of your own. The King Fahd Causeway is a 25 kilometre road link taking roughly 30 to 45 minutes, but your Bahrain visa carries no weight on the Saudi side." }
      ],
      sources: {
        links: [
          { label: "Bahrain NPRA eVisa portal: eligibility, current fees and applications", url: "https://www.evisa.gov.bh/", type: "gov" },
          { label: "Bahrain National Portal: visa on arrival and who needs a visa", url: "https://www.bahrain.bh/", type: "gov" },
          { label: "US Embassy in Bahrain: the current Level 3 travel advisory", url: "https://bh.usembassy.gov/travel-advisory-bahrain-march-2026/", type: "gov" }
        ],
        judgment: "That a visa is required, that visa on arrival runs to 14 days single entry, and that the eVisa reaches 90 days per visit on multiple entry versions are consistent across the government portal and multiple current sources. We have printed no fee, because every figure we found was secondary and undated while the NPRA portal publishes the live one. The six month passport rule is consistently reported and stricter than several neighbours, so it is worth checking yourself.",
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Bahraini dinar (BD), pegged" },
        { k: "Cards", v: "Widely accepted, contactless normal" },
        { k: "Still cash", v: "Manama Souq, small stalls" },
        { k: "Watch", v: "1 dinar is about 2.66 dollars" }
      ],
      live: true,
      topic: "cash",
      title: "Cash or card in Bahrain? Watch the decimal",
      description: "Cards work across Manama, cash suits the souq. The dinar is one of the world's strongest units and splits into 1,000 fils, so read prices twice.",
      h1: "Cash or card in Bahrain?",
      lede: "Bahrain is easy on cards and hard on arithmetic. The dinar is worth more than two and a half dollars and divides into a thousand, which is where visitors come unstuck.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: `Card for most things, a small cash float for the rest. Hotels, malls, restaurants, supermarkets and fuel across Manama take Visa and Mastercard, and contactless is normal. Keep <b>BD 20 to 40</b> in small notes for Manama Souq, independent cafes and tips. The dinar is pegged at <b>${F.peg}</b>, so the rate never moves, but <b>one dinar is ${F.perDinar}</b> and it splits into <b>1,000 fils</b>, so prices carry three decimals and a small-looking number is not small. Decline any terminal offering to bill you in dollars.`,
      sections: [
        {
          h: "The decimal, which is the real story here",
          icon: "coins",
          key: {
            fig: "1 BD = $2.66",
            tag: "Read it twice",
            text: "The dinar is among the highest-valued currency units in the world and divides into 1,000 fils, not 100.",
            tone: "amber"
          },
          p: [
            `The Bahraini dinar is one of the strongest currency units anywhere, worth ${F.perDinar}. It divides into 1,000 fils, so prices are written to three decimal places: a tag reading 4.500 is four and a half dinars, about twelve dollars, not four dollars fifty.`,
            "The practical consequences are worth internalising before you land. A BD 20 note is about 53 dollars, which is a lot to hand over for a coffee. A taxi quoting BD 5 is asking about 13 dollars. And a restaurant bill of BD 30 is nearly 80. Nothing here is cheap because the number looks small."
          ]
        },
        {
          h: "The peg, and what it means for you",
          icon: "usd",
          key: {
            tag: "Fixed since 1980",
            text: "The central bank holds it at 0.376 dinars per dollar and stands ready to buy and sell dollars at rates very close to official.",
            tone: "teal"
          },
          p: [
            `The Central Bank of Bahrain maintains the peg at ${F.peg}, effectively unchanged since 1980, and says openly that it stands ready to buy and sell dollars at rates very close to the official one. So the rate you see is the rate, and it will not move during your trip.`,
            "For mental arithmetic, multiply dinar prices by roughly 2.66 for dollars, or add two thirds again and double it. Ten dinars is about 27 dollars. Because the peg holds, there is no rate to shop around for and no advantage in timing an exchange."
          ]
        },
        {
          h: "Where cards work and where they do not",
          icon: "card",
          key: {
            fig: "Mostly card",
            tag: "Souq is the exception",
            text: "Manama, Seef and Juffair are card country. The souq and the small independents still want notes.",
            tone: "teal"
          },
          p: [
            "Bahrain is a finance economy and it shows. Visa and Mastercard are accepted across hotels, malls, restaurants, supermarkets and fuel in Manama, Seef, Juffair and the commercial districts, and contactless is standard. Ride-hailing apps take cards in-app.",
            "Manama Souq and Bab Al Bahrain are the cash corner, along with smaller independent cafes and the odd taxi terminal that is not cooperating. Amex is thinner than Visa or Mastercard, so do not travel on it alone."
          ]
        },
        {
          h: "ATMs and the dollar question",
          icon: "atm",
          key: {
            tag: "Always choose dinars",
            text: "Dynamic currency conversion costs several percent on a currency that is pegged to the dollar anyway.",
            tone: "amber"
          },
          p: [
            "Bank ATMs are everywhere, at the airport, in the malls and across Manama, and foreign cards work normally. Take a reasonable amount in one withdrawal, because operator fees and your bank's flat charge do not care how little you take. Break large notes at a supermarket rather than trying to spend a BD 20 in the souq.",
            "If a terminal or ATM offers to charge you in US dollars, decline every single time. The dinar is pegged to the dollar, so being billed in dollars adds a padded rate for no benefit whatsoever. Pay in dinars and let your own bank do the conversion."
          ]
        }
      ],
      faqs: [
        { q: "How much is a Bahraini dinar worth?", a: "About 2.66 US dollars. It is pegged at 0.376 dinars to the dollar, effectively unchanged since 1980, and it divides into 1,000 fils rather than 100, which is why prices carry three decimal places." },
        { q: "Can I use US dollars in Bahrain?", a: "Not as everyday money. Some hotels will accept them at a rate they set, but shops, restaurants and taxis deal in dinars. Since the dinar is pegged to the dollar, paying in dollars only costs you the markup." },
        { q: "How much cash should I carry in Bahrain?", a: "Around BD 20 to 40, roughly 53 to 106 dollars, in small notes for Manama Souq, independent cafes and tips. Cards cover almost everything else. Break big notes at a supermarket." },
        { q: "Why do Bahraini prices have three decimal places?", a: "Because the dinar divides into 1,000 fils, not 100. A price written 4.500 is four and a half dinars, about twelve dollars. Misreading that decimal is the most common money mistake visitors make in Bahrain." }
      ],
      sources: {
        links: [
          { label: "Central Bank of Bahrain: monetary policy and the 0.376 peg to the US dollar", url: "https://www.cbb.gov.bh/monetary-policy/", type: "gov" },
          { label: "Bahrain National Bureau for Revenue: VAT in the Kingdom of Bahrain", url: "https://www.nbr.gov.bh/", type: "revenue" }
        ],
        judgment: "The peg, its longevity and the central bank's willingness to trade dollars near the official rate are all from the CBB's own page. The 1,000 fils subdivision is a matter of record. Where card acceptance thins out and how much cash is a sensible float are our estimate from experience, not published figures, and ATM operator fees vary by bank.",
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Expected", v: "No, not in the US sense" },
        { k: "Restaurants", v: "10% service charge is common" },
        { k: "Taxis", v: "Round up, nothing more" },
        { k: "Best form", v: "Cash, small notes" }
      ],
      live: true,
      topic: "tipping",
      title: "Do you tip in Bahrain? What is actually expected",
      description: "Most Bahrain bills already carry a 10% service charge, so tipping on top is optional. Round up, use cash, and skip the US percentages.",
      h1: "Do you tip in Bahrain?",
      lede: "Bahrain is the clearest case in the Gulf: a 10% service charge is standard on hotel and restaurant bills, so the tipping question is usually already answered before you reach for your wallet.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: "Not expected, and less ambiguous here than in most of the region. Hotels and restaurants in Bahrain commonly add a <b>10% service charge</b> as standard, alongside the 10% VAT and a 5% government levy, so by the time you see the total you have already paid for service. Where a service charge is present, anything further is <b>genuinely optional</b>. Where there is none, rounding up or leaving a small amount is welcome. <b>Taxi drivers do not expect a tip.</b> Cash in small dinar notes is the form that reaches people, and remember one dinar is about 2.66 dollars, so a single note is already a real tip.",
      sections: [
        {
          h: "The bill does the work for you",
          icon: "receipt",
          key: {
            fig: "10%",
            tag: "Service charge, standard",
            text: "Common on hotel and restaurant bills, on top of 10% VAT and a 5% government levy. Look before you add.",
            tone: "teal"
          },
          p: [
            "Bahrain stacks more onto a bill than any of its neighbours except Saudi Arabia. Hotels typically show a 10% service charge, 10% VAT and a 5% government levy, and hotel stays also carry a flat tourist tax per night. The service charge is the property's, not the government's, and it is the part that covers service.",
            "So the useful habit is to read the bottom of the bill first. Where a service charge appears, you are done. That is a cleaner answer than you get in Oman or Qatar, where the practice varies more from place to place."
          ]
        },
        {
          h: "What the notes are worth",
          icon: "tip",
          key: {
            tag: "One note goes a long way",
            text: "A single BD 1 note is about 2.66 dollars. Handing over a BD 5 is a 13 dollar tip, which is generous by local standards.",
            tone: "amber"
          },
          p: [
            "This is where the strong currency changes the etiquette. In a country where a dinar is worth more than two and a half dollars, the small notes are not small. A BD 1 note to a porter is a normal thank you. A BD 5 is a substantial gesture rather than loose change.",
            "It cuts the other way too: if you are used to rounding up by a couple of units elsewhere, doing that here is a much larger tip than you intend. Keep some 500 fils and BD 1 notes back for exactly this purpose."
          ]
        },
        {
          h: "Cash, and no US percentages",
          icon: "notip",
          key: {
            tag: "No 20% rule",
            text: "Nobody in Bahrain works for tips the way an American server does. Applying a US percentage is a gift, not a norm.",
            tone: "amber"
          },
          p: [
            "Taxi drivers do not expect a tip and rounding the fare up is the whole convention. In ride-hailing apps, the in-app tip option is there if you want it and nobody minds if you skip it.",
            "Where you do tip, cash works better. Whether an amount added to a card slip reaches the individual depends entirely on the establishment, and given the service charge is already collected on the same bill, cash is the only part that clearly goes to a person."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Bahrain?", a: "It is optional rather than expected. Hotels and restaurants commonly add a 10% service charge as standard, so where that appears you have already paid for service. Otherwise round up or leave a small amount in cash." },
        { q: "Is the 10% service charge in Bahrain a tax?", a: "No. It is set by the property. The government charges on your bill are the 10% VAT and a 5% levy, plus a flat tourist tax per night on hotel stays. The service charge sits alongside those." },
        { q: "How much do you tip a taxi driver in Bahrain?", a: "Nothing is expected. Rounding the fare up is the normal courtesy. Bear in mind a dinar is about 2.66 dollars, so rounding up by a dinar is a larger gesture than the number suggests." },
        { q: "Should I tip in cash or card in Bahrain?", a: "Cash, in small dinar notes. Whether a tip on a card slip reaches the person who served you depends on the establishment, especially where a service charge has already been collected on the same bill." }
      ],
      sources: {
        links: [
          { label: "Bahrain National Bureau for Revenue: the 10% standard VAT rate", url: "https://www.nbr.gov.bh/", type: "revenue" },
          { label: "AGBI: the charges Bahraini hotels apply, including the 5% government levy and the per-night tourist tax", url: "https://www.agbi.com/tourism/2026/04/bahrain-offers-fee-deferral-option-for-hotels-and-restaurants/", type: "news" }
        ],
        judgment: "The 10% VAT is official. The 10% service charge, the 5% government levy and the per-night tourist tax come from reputable Gulf business reporting rather than a single government page we could open, so treat the stack as well attested but worth checking on your own bill. The tipping norms are our read of common practice, which is why no percentage for tipping appears anywhere on this page.",
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Uber", v: "Yes, works normally" },
        { k: "Careem", v: "Yes, also works" },
        { k: "Airport taxis", v: "Metered, BD 2 plus BD 2 pickup" },
        { k: "Cheaper", v: "Apps usually beat the meter" }
      ],
      live: true,
      topic: "taxis",
      title: "Bahrain taxis and apps: Uber, Careem, meters",
      description: "Both Uber and Careem work in Bahrain, and both usually undercut the metered taxi. Airport taxis start at BD 2 with a BD 2 pickup charge.",
      h1: "Taxis and ride-hailing in Bahrain",
      lede: "Bahrain is the easy one for apps. Both Uber and Careem operate, both collect at the airport, and here the app is usually cheaper than the meter rather than dearer.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: "<b>Both Uber and Careem operate in Bahrain</b>, which makes it the simplest of the Gulf states for ride-hailing. Neighbouring Qatar lost Careem in 2023 and Oman has no Uber at all, so Bahrain is the one place your usual app just works. Bahrain International Airport's own guidance confirms both have a dedicated pickup point at the arrivals curbside, alongside the metered taxis. On price, the apps typically <b>undercut the meter</b>: expect roughly <b>BD 3 to 6</b> by app into central Manama against <b>BD 6 to 12</b> metered. There is no metro or train, so it is road transport throughout.",
      sections: [
        {
          h: "Both apps, which is unusual here",
          icon: "taxi",
          key: {
            fig: "Uber + Careem",
            tag: "Both licensed",
            text: "Both pick up at the airport from a dedicated meeting point at the arrivals curbside, per the airport's own page.",
            tone: "teal"
          },
          p: [
            "If you are doing more than one Gulf country, this is worth noting: the app situation differs in every one. Oman has no Uber and local licensed apps instead. Qatar has Uber but lost Careem in 2023. Bahrain has both, working normally, with your existing account and card.",
            "The airport's official guidance says Careem and Uber can both be pre-booked, with a dedicated meeting point at the arrivals curbside. So you can order before you clear customs and walk straight to it."
          ]
        },
        {
          h: "What the meter does",
          icon: "wheel",
          key: {
            fig: "BD 2 + BD 2",
            tag: "Airport start",
            text: "Per the Ministry of Transportation, an initial BD 2 plus an additional BD 2 for airport pickup, then metered.",
            tone: "teal"
          },
          p: [
            "Bahrain International is served around the clock by two licensed operators, the Bahrain Taxi Group and Arabian Taxi, queuing at the inner arrivals curb and at Car Park B. The airport states that fares are meter-based as set by Bahrain's Ministry of Transportation and Telecommunications, starting at BD 2 with an additional BD 2 for the airport pickup.",
            "Unlike much of the region there is no fare to negotiate, because the meter is used. Do check it is running before you set off. Estimates for the airport into central Manama vary across current sources from around BD 6 to BD 16 depending on destination and traffic, which is a wide enough spread that we would not quote you a single figure."
          ]
        },
        {
          h: "The app is usually the cheaper option",
          icon: "card",
          key: {
            tag: "Opposite of most places",
            text: "Ride-hailing here tends to come in below the metered taxi, partly because the meter carries an airport surcharge.",
            tone: "teal"
          },
          p: [
            "In a lot of cities the app costs more than the cab. In Bahrain it usually costs less: current estimates put an app ride into central Manama at roughly BD 3 to 6 against BD 6 to 12 metered. Part of that is the BD 2 airport pickup charge the meter carries and the app does not.",
            "The trade is the usual one. Apps surge after a late arrivals bank and can involve a wait, while the taxi rank is simply there. If you land at two in the morning with luggage, the rank is worth the premium."
          ]
        },
        {
          h: "Buses, and the causeway",
          icon: "plane",
          key: {
            fig: "About BD 0.300",
            tag: "The bus",
            text: "A flat fare of a few hundred fils on the airport routes, paid by GO Card or cash. Roughly a dollar.",
            tone: "teal"
          },
          p: [
            "The Bahrain Public Transport Company runs air-conditioned buses across around 25 routes, including several serving the airport, at a flat fare of a few hundred fils, which is about a dollar. You pay with a GO Card or cash. The airport sits about seven kilometres from central Manama, so this is a short hop rather than an expedition.",
            "For onward travel, the King Fahd Causeway runs 25 kilometres to Saudi Arabia in roughly 30 to 45 minutes depending on the border. Useful to know it exists, but it needs a Saudi visa of its own, and the crossing time is dictated by queues rather than distance."
          ]
        }
      ],
      faqs: [
        { q: "Does Uber work in Bahrain?", a: "Yes, and so does Careem. Both operate normally with your existing account and card, and both have a dedicated pickup point at the airport arrivals curbside according to the airport's own guidance." },
        { q: "Is Uber or a taxi cheaper in Bahrain?", a: "Usually the app. Current estimates put a ride into central Manama at roughly BD 3 to 6 by app against BD 6 to 12 metered, partly because the meter carries a BD 2 airport pickup charge that the app does not." },
        { q: "How much is a taxi from Bahrain airport?", a: "The meter starts at BD 2 with an additional BD 2 for airport pickup, as set by the Ministry of Transportation. Estimates into central Manama vary widely across sources, from about BD 6 to BD 16, so treat any single figure as a guide." },
        { q: "Is there a metro in Bahrain?", a: "No. There is no metro or train. Getting around means taxis, ride-hailing apps, the public buses run by the Bahrain Public Transport Company, or a rental car." }
      ],
      sources: {
        links: [
          { label: "Bahrain International Airport: taxi operators, the metered fare structure, and the Uber and Careem pickup point", url: "https://www.bahrainairport.bh/passenger/taxi", type: "gov" },
          { label: "Central Bank of Bahrain: the pegged rate behind every fare quoted here", url: "https://www.cbb.gov.bh/monetary-policy/", type: "gov" }
        ],
        judgment: "That both Uber and Careem operate, and the BD 2 plus BD 2 metered airport structure, come from the airport's own page, which is the best source available. Fare ranges into Manama vary widely across current secondary sources, from BD 6 to BD 16, so we have given the range and said plainly that we would not quote one number. Bus fares are approximate.",
      }
    },
    {
      slug: "hotel-taxes-and-fees",
      glance: [
        { k: "On top of the room", v: "About 25%, plus a flat fee" },
        { k: "Government", v: `${F.vat} VAT and a ${F.levy} levy` },
        { k: "Tourist tax", v: F.tourist },
        { k: "Hotel", v: "Service charge about 10%" }
      ],
      live: true,
      topic: "taxes",
      title: "Bahrain hotel taxes and fees: the four-part stack",
      description: `A Bahrain hotel bill stacks ${F.vat} VAT, a ${F.levy} government levy, a 10% service charge and a BD 3 nightly tourist tax, roughly a quarter over the rate. Checked 2026.`,
      h1: "Bahrain hotel taxes and fees, in four parts",
      lede: "Short answer: the rate you were quoted is probably missing four separate charges. Bahrain adds more to a hotel bill than any Gulf state except Saudi Arabia, and it is the only one in the region that charges a flat nightly tax on top of the percentages. Here is exactly what stacks on.",
      checked: "Aug 2026",
      checkedISO: "2026-08-17",
      answer: `Four things sit on top of a Bahrain room rate. <b>VAT at ${F.vat}</b>, doubled from 5% in January 2022 and the second highest in the Gulf. A <b>${F.levy} government levy</b> on the accommodation. The hotel's own <b>service charge</b>, usually around <b>10%</b>, which is not a tax. And a flat <b>tourist tax of ${F.tourist}</b>, introduced in 2024 and worth about <b>8 US dollars</b> a night. The percentages come to roughly <b>25%</b> and the flat fee sits on top of that, so a <b>quarter more</b> than the quoted rate is the working figure. Rates quoted here frequently <b>exclude all of it</b>, so ask whether yours is all-in. There is <b>no tourist VAT refund</b> you should count on.`,
      official: {
        label: "Bahrain National Portal: VAT at 10% in the Kingdom of Bahrain",
        url: "https://www.bahrain.bh/",
        note: "The VAT rate is official. The government levy, the nightly tourist tax and the service charge come from Gulf business reporting rather than a government page we could open, and the service charge is set by each property, so check your booking's fine print."
      },
      sections: [
        {
          h: "The government takes two bites",
          icon: "receipt",
          key: { fig: "15%", tag: "VAT plus the levy", text: "Ten percent VAT, doubled from 5% in January 2022, plus a separate 5% government levy on the accommodation. That is 15% before the hotel has added anything of its own.", tone: "teal" },
          p: [
            `Bahrain's <b>VAT is ${F.vat}</b>, doubled from 5% on 1 January 2022, which makes it the <b>second highest in the Gulf</b> behind Saudi Arabia at 15% and double the UAE and Oman. Alongside it sits a separate <b>${F.levy} government levy</b> on accommodation. Both are government charges, both apply to the room, and together they are <b>15%</b> before the property has added a thing.`,
            "One to keep an eye on: Bahrain's 2025 to 2026 budget raised the possibility of a further VAT increase. No rate and no date have been announced, so this holds for now rather than forever, and it is worth a fresh look before a future trip."
          ]
        },
        {
          h: "The flat nightly tax the percentages hide",
          icon: "coins",
          key: { fig: "BD 3", tag: "Per room, per night", text: "About 8 US dollars a night, charged per room rather than per person, and it does not scale with the room rate. On a cheap room over a week it is real money; on a suite it disappears.", tone: "amber" },
          p: [
            `On top of the percentages, Bahrain charges a flat <b>tourist tax of ${F.tourist}</b>, introduced in 2024. One dinar is ${F.perDinar}, so that is roughly <b>8 US dollars a night</b>, charged <b>per room rather than per person</b>.`,
            "Because it is flat, it behaves the opposite way to a percentage. It is proportionally heavy on a budget room over a long stay and trivial on an expensive one, so run it per night rather than assuming it scales with the rate. This is the charge that makes Bahrain structurally unusual in the Gulf: everywhere else in the region the accommodation charges are percentages, or a nightly fee, not both."
          ]
        },
        {
          h: "The service charge belongs to the hotel",
          icon: "usd",
          key: { fig: "About 10%", tag: "Not a tax, not a tip", text: "The service charge is the property's own rather than the government's. It is normally unavoidable, it is commonly around 10%, and there is no guarantee it reaches the person who served you.", tone: "amber" },
          p: [
            "The <b>service charge</b>, commonly around <b>10%</b>, is the hotel's own charge and not a government one. It is set by each property, so treat 10% as the usual figure rather than a fixed rule, and read the fine print on your booking. It is normally unavoidable and it is <b>not a tip</b> in any useful sense, since nothing guarantees it reaches the person who carried your bag.",
            "If you want a member of staff to receive something, cash in a hand is the mechanism that works. For how tipping actually operates here, see the <a href=\"/bahrain/tipping\">Bahrain tipping guide</a>."
          ]
        },
        {
          h: "Nothing to reclaim on the way out",
          icon: "refund",
          key: { fig: "No refund", tag: "Budget for the 10%", text: "At this check we could not confirm an operating tourist VAT refund scheme of the kind the UAE runs with staffed airport desks and a minimum spend. Treat the 10% as part of the price.", tone: "teal" },
          p: [
            "Be realistic about refunds. At this check we could not confirm an operating tourist VAT refund scheme in Bahrain of the kind the UAE runs through Planet, with staffed airport desks and a published minimum spend. <b>Budget as though the 10% is simply part of the price</b>, and if a retailer offers you a refund route, treat it as a bonus rather than a plan.",
            "The practical move at booking is one question: <b>is this rate all-in?</b> Quoted Bahrain rates frequently exclude the whole stack, and the all-in nightly total is the only number worth comparing. For cards, cash and the dinar's odd three-decimal arithmetic, see the <a href=\"/bahrain\">Bahrain money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "How much do Bahrain hotels add to the room rate?", a: "Roughly a quarter, plus a flat fee. Four charges stack: 10% VAT, a 5% government levy, a service charge commonly around 10%, and a flat tourist tax of BD 3 per room per night, about 8 US dollars. The percentages come to about 25% and the nightly fee sits on top. Quoted rates often exclude all of it, so ask whether the rate is all-in." },
        { q: "What is the tourist tax in Bahrain?", a: "A flat BD 3 per room per night, introduced in 2024, which is roughly 8 US dollars. It is charged per room rather than per person and it does not scale with the room rate, so it weighs more heavily on a budget stay than an expensive one. It is separate from the 10% VAT and the 5% government levy, which are percentages of the rate." },
        { q: "Is the 10% service charge on a Bahrain hotel bill a tip?", a: "No. It is the property's own charge, not a government tax and not a gratuity, and there is no guarantee any of it reaches the person who served you. It is normally unavoidable and it is set by each hotel, so the exact figure varies. If you want to tip someone directly, cash handed to them is what works." },
        { q: "Can I claim the VAT back on a Bahrain hotel?", a: "No, and you should not plan on reclaiming Bahraini VAT on anything. At this check we could not confirm an operating tourist refund scheme of the kind the UAE runs with airport desks and a minimum spend. Treat the 10% as part of the price. Hotel VAT is not refundable anywhere in the region regardless, since refund schemes cover goods you export, not a bed you slept in." }
      ],
      sources: {
        links: [
          { label: "Bahrain National Portal: VAT at 10% in the Kingdom of Bahrain", url: "https://www.bahrain.bh/", type: "revenue" },
          { label: "Central Bank of Bahrain: the 0.376 peg behind the dollar conversions here", url: "https://www.cbb.gov.bh/monetary-policy/", type: "gov" }
        ],
        judgment: "The 10% VAT rate is official. The rest of the stack, specifically the 5% government levy, the BD 3 per night tourist tax and the 10% service charge, rests on reputable Gulf business reporting rather than a government page we could open, so the roughly 25% figure is a working estimate rather than a published total. The service charge is set by each property and varies. That we could not confirm an operating tourist VAT refund scheme is a statement about what we could verify, not proof that none exists. Checked August 2026."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Excellent, it is a small island" },
        { k: "Carrier roaming", v: "$10 to $12 a day" },
        { k: "App calling", v: "Generally works, unlike the UAE" },
        { k: "Cheapest", v: "A local SIM, and it is cheap" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "low",
      title: "Bahrain: excellent coverage, lighter restrictions than its neighbours",
      description: "Bahrain is small and comprehensively covered, and app calling generally works, unlike in the UAE. That makes this a short page and a cheap decision.",
      h1: "Staying connected in Bahrain.",
      lede: "Bahrain is an island you can drive across in an hour, comprehensively covered, with lighter internet restrictions than its larger neighbours. There is not much of a story here, which is the honest thing to report.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>excellent</b> across the island: Manama, Muharraq, the causeway, the circuit and the southern desert road all have fast 4G with widespread 5G, and there is nothing to plan around. A local <b>Batelco</b>, <b>stc</b> or <b>Zain</b> tourist SIM is cheap, bought with your <b>passport</b>, and a <b>Nomad eSIM</b> is a few dollars per gigabyte. Your US carrier charges about <b>${S.dayPass}</b> to roam (<b>AT&amp;T and Verizon</b> day passes), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon has ${S.verizonNoCap}</b> and keeps billing daily. <b>T-Mobile</b>'s mid and upper tiers include <b>${S.tmoRange}</b> of high-speed data abroad before slowing to <b>${S.throttle}</b>. On <b>app calling</b>, Bahrain is generally reported as lighter than the UAE and Qatar, with WhatsApp and FaceTime calling usually working, though the regional picture is not uniform and some sources describe periodic restrictions. <b>Messaging works regardless.</b> Assume calling probably works and keep an ordinary cellular call as the fallback. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "A short page, because it is a small island",
          icon: "phoneok",
          key: { fig: "No real gaps", tag: "Coverage", text: "Manama, Muharraq, the causeway and the southern desert road all have fast 4G and widespread 5G. Nothing to plan around.", tone: "teal" },
          p: [
            `Bahrain is about 30 miles long and densely built, so the network reaches essentially everywhere a visitor goes: <b>Manama</b> and the financial district, <b>Muharraq</b> and the airport, the <b>King Fahd Causeway</b>, the Formula 1 circuit and the southern desert road, with fast 4G and widespread 5G. The Tree of Life and the Bahrain Fort are covered. There is no mountain, no wilderness and no tunnel network to warn you about.`,
            `We would rather write a short page than invent a warning. The one habit worth keeping is downloading offline maps if you are driving into the southern desert, on the general principle that a phone fails for reasons other than signal.`
          ]
        },
        {
          h: "App calling, lighter than the neighbours",
          icon: "alert",
          key: { fig: "Usually fine", tag: "Unlike the UAE", text: "Bahrain generally permits app calling, unlike the UAE. The regional picture is not uniform, so keep a fallback.", tone: "teal" },
          p: [
            `This is worth stating because travelers arriving from Dubai reasonably assume the whole Gulf works the same way, and it does not. <b>Bahrain is generally reported as permitting app calling</b>, so WhatsApp and FaceTime calls usually connect on a local network, and it filters less broadly than the UAE or Saudi Arabia. Some sources describe periodic restrictions on some services, so it is not a guarantee.`,
            `Worth knowing how thin the evidence is. Almost every page on the internet about Gulf app-calling is published by a company selling a VPN or an eSIM, both of which are the advertised fix, and they contradict each other flatly: on the same week in 2026 we found sources calling this country blocked, intermittent and permitted. So we are not going to give you a confident answer we do not have. <b>Messaging works everywhere in the Gulf.</b> Assume <b>app calling might not</b>, have a backup before you land, and test it on arrival rather than at the moment you need it.`
          ]
        },
        {
          h: "Cost, and what your plan may already do",
          icon: "roamfee",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: "A US carrier day pass is the expensive default. AT&T caps it at 10 daily fees a bill period, Verizon does not cap at all, and T-Mobile's mid and upper tiers include 5GB to 30GB abroad.", tone: "teal" },
          p: [
            `A local <b>Batelco</b>, <b>stc</b> or <b>Zain</b> tourist SIM is cheap, sold at the airport and in malls with your <b>passport</b>, and any of them covers the island fine, so buy on price rather than researching networks. A <b>Nomad eSIM</b> at a few dollars per gigabyte skips the counter, which on a two-night stopover is worth more than the difference.`,
            `Roaming is about <b>${S.dayPass}</b>, so <b>${S.week}</b> a week, with <b>AT&amp;T</b> capping at <b>${S.capFees}</b> and <b>Verizon</b> having <b>${S.verizonNoCap}</b>. Check <b>T-Mobile</b> first: its tiers include <b>${S.tmoRange}</b> before slowing to <b>${S.throttle}</b>, and on a short Bahrain stop that may be all you need, in which case buy nothing. This guide is written for US travelers departing the US. For more, see <a href='/bahrain/cash-or-card'>cash or card in Bahrain</a>, <a href='/bahrain/taxis-and-apps'>taxis and apps in Bahrain</a>, and the <a href='/bahrain'>Bahrain money guide</a>.`
          ]
        }
      ],
      faqs: [
        { q: `Does WhatsApp calling work in Bahrain?`, a: `Generally yes, unlike in the UAE. Bahrain filters less broadly than its larger neighbours and app calling usually connects on a local network, though some sources describe periodic restrictions, so it is not a guarantee. Messaging works regardless, and an ordinary cellular call is the reliable fallback.` },
        { q: `Do I need a SIM card in Bahrain?`, a: `For a short stop, possibly not: check your own plan first, since a T-Mobile mid or upper tier includes 5GB to 30GB abroad and hotel wifi is universal. If you want data, a Batelco, stc or Zain tourist SIM is cheap and any of them covers the island fine.` },
        { q: `Is phone coverage good in Bahrain?`, a: `Yes, excellent. The island is small and densely built, so Manama, Muharraq, the causeway, the circuit and the southern desert road all have fast 4G with widespread 5G. There is no coverage gap worth planning around.` },
        { q: `How much does it cost to use my US phone in Bahrain?`, a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "US State Department: Bahrain country information and local laws", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Bahrain.html", type: "gov" },
          { label: "Batelco: prepaid and visitor plan pages", url: "https://www.batelco.com/", type: "official" }
        ],
        judgment: "Checked Aug 2026. A deliberately short spoke: Bahrain is small, well covered and has no registration quirk or coverage gap worth a paragraph. The one genuinely useful point is regional rather than local, that a traveler arriving from Dubai should not assume the UAE's app-calling block applies here, and it is stated with the same hedge as the rest of our Gulf pages because the sources on this topic sell the fix they describe. On a short stop the honest answer may be to buy nothing at all."
      }
    }
  ],

  signals: { cardFriendliness: 5, cashNeed: 2, taxRisk: 3, atmRisk: 2 },
  hook: "One of the world's strongest currency units, split into a thousand, and the heaviest hotel add-ons in the Gulf bar Saudi Arabia.",
  aliases: ["bahrain", "manama", "bahraini dinar", "bhd", "muharraq", "kingdom of bahrain", "bab al bahrain", "juffair"],

  title: "Do you need cash in Bahrain? Dinars, cards and ATMs",
  description: "Cards cover Manama, cash suits the souq. The dinar is worth about 2.66 dollars and splits into 1,000 fils, so read prices twice.",
  h1: "Money in Bahrain, sorted.",
  lede: "A calm, current plan for the money side of your trip: why the decimal matters more here than anywhere else in the Gulf, what a hotel bill really adds, and which apps actually work.",

  hero: {
    img: "/bahrain-hero.jpg",
    h: 1375,
    alt: "A quiet lane in old Muharraq, Bahrain at golden hour with two-storey coral-stone houses trimmed in white gypsum, a tall square wind tower above the rooftops, carved wooden doors painted teal, arched windows set with plaster fretwork, iron lanterns and string lights overhead, a figure in a white thobe walking away up the lane, and a plate of muhammar sweet rice with grilled fish, a glass of karak tea, samboosa and a brass bowl of amber Bahraini halwa studded with pistachios on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: `Bahrain is card-easy and arithmetic-hard. <b>Cards work</b> across Manama, Seef and Juffair, and <b>both Uber and Careem operate</b>, which is true of no other country in this cluster. The catch is the numbers. <b>One dinar is ${F.perDinar}</b> and it splits into <b>1,000 fils</b>, so a price written 4.500 is about twelve dollars, and a BD 20 note is around 53. Bahrain also stacks the most onto a bill of any Gulf state except Saudi Arabia: <b>${F.vat} VAT</b>, a <b>${F.levy} government levy</b>, a <b>10% service charge</b> and a <b>${F.tourist}</b> tourist tax. Ask whether your room rate is all-in, because roughly a quarter on top is normal.`,

  meter: {
    heading: "About as cashless as Qatar, with the souq as the exception.",
    cashPct: 22,
    note: "A rough feel for everyday spending rather than a measured figure. Bahrain is a finance economy and card acceptance runs deep across Manama, Seef and Juffair, with contactless standard and both major ride-hailing apps taking cards in-app. Manama Souq and Bab Al Bahrain are where notes still matter, along with tipping, which cash always does better.",
  },

  trio: [
    {
      sym: "card",
      kind: "ok",
      h: "Your card",
      verd: "Works nearly everywhere",
      p: "Visa and Mastercard cover hotels, malls, restaurants, supermarkets and fuel across Manama, with contactless standard. Amex is thinner outside the bigger hotels, so do not rely on it alone.",
      cta: { label: "Check yours", href: "#calc" }
    },
    {
      sym: "cash",
      kind: "ok",
      h: "Cash",
      verd: "A modest float is enough",
      p: "BD 20 to 40 in small notes covers Manama Souq, independent cafes and tips. Remember a BD 20 note is about 53 dollars, so break the big ones at a supermarket.",
      cta: { label: "How much to carry", href: "/bahrain/cash-or-card" }
    },
    {
      sym: "atm",
      kind: "ok",
      h: "ATMs",
      verd: "Everywhere, card-friendly",
      p: "Airport, malls and bank branches throughout Manama, and foreign cards work normally. Withdraw a sensible amount at once, and decline the offer to be billed in dollars.",
      cta: { label: "Find one", href: "#atm" }
    }
  ],

  plan: [
    {
      sym: "tag",
      when: "Before you go",
      bullets: [
        "Check your passport has <b>six months</b> left from your arrival date. Bahrain is stricter than Qatar on this.",
        "Decide your visa route: <b>on arrival</b> for up to 14 days, or an <b>eVisa</b> from the NPRA portal for longer. Both carry a fee.",
        "<b>Uber and Careem both work here</b>, so whichever you already have is fine. This is the only country in the cluster where that is true."
      ],
      cta: { label: "See no-fee card options", tag: "earn", href: "#" }
    },
    {
      sym: "plane",
      when: "Landing",
      bullets: [
        "The <b>app is usually cheaper than the meter</b>: roughly BD 3 to 6 by app against BD 6 to 12 metered into central Manama.",
        "Pull <b>BD 20 to 40</b> from a bank ATM, and <b>decline the dollar conversion</b> on the screen.",
        "Remember <b>999</b>, not 112. Unlike Oman and Qatar, <b>112 is not an official emergency number</b> in Bahrain."
      ],
      cta: { label: "Taxis and apps", href: "/bahrain/taxis-and-apps" }
    },
    {
      sym: "bowl",
      when: "Day to day",
      bullets: [
        "Tap for most things. Keep notes for <b>Manama Souq</b> and tips.",
        "<b>Read prices twice.</b> The dinar splits into 1,000 fils, so <b>4.500 is about twelve dollars</b>.",
        "A <b>10% service charge</b> on a bill is standard here, and it is the property's, not a tax."
      ],
      cta: { label: "Tipping, plainly", href: "/bahrain/tipping" }
    },
    {
      sym: "receipt",
      when: "Checking out",
      bullets: [
        "Expect roughly <b>25% plus BD 3 a night</b>: 10% VAT, a 5% government levy, a 10% service charge and the per-night tourist tax.",
        "Ask whether the rate you booked was <b>all-in</b>. Quoted rates here frequently are not.",
        "Pay in <b>dinars</b>, never dollars. The peg means dollar pricing only adds a markup."
      ],
      cta: { label: "What the bill adds", href: "#tax" }
    }
  ],

  cash: {
    rate: 0.376,
    cur: "BHD",
    round: 5,
    defaultIndex: 1,
    rateNote: `Effectively fixed. The Central Bank of Bahrain has held the dinar at ${F.peg} since 1980 and stands ready to buy and sell dollars at rates very close to the official one, so nothing moves during your trip. One dinar is ${F.perDinar}: multiply dinar prices by roughly 2.66 for dollars.`,
    styles: [
      { n: "Budget", per: 55, cash: 0.30, room: 65 },
      { n: "Mid-range", per: 130, cash: 0.20, room: 155 },
      { n: "Comfort", per: 290, cash: 0.15, room: 360 }
    ],
  },

  connectivity: {
    works: "Yes, and it is easy. Batelco, stc and Zain all give strong coverage, and Bahrain is small enough, around 30 miles end to end, that dead spots barely exist. 5G is normal across Manama. Before you buy anything: check whether your US plan already includes Bahrain, because several do, and the airport has free wifi, so you can decide once you have landed rather than at a counter in arrivals.",
  },

  tax: {
    unit: "percentOfRoom",
    currency: "BHD",
    capNights: null,
    note: "Bahrain adds more to a hotel bill than any Gulf state except Saudi Arabia, and it comes in four parts: 10% VAT, a 5% government levy, a 10% service charge set by the property, and a flat tourist tax of BD 3 per room per night introduced in May 2024. That works out around 25% in percentages plus roughly 8 dollars a night. Quoted room rates frequently exclude all of it, so ask whether the rate is all-in. Bahrain's 2025-26 budget flagged the possibility of a further VAT rise with no rate or timeline confirmed, so this is worth re-checking before a future trip.",
    regions: [
      {
        key: "hotel",
        label: "Hotel room (VAT, levy and service charge)",
        pct: 25,
        note: "10% VAT plus a 5% government levy plus a 10% service charge. On top of this percentage stack sits a flat BD 3 per room per night tourist tax, which the calculator does not model, so add roughly 8 dollars a night to whatever this returns.",
      },
      {
        key: "restaurant",
        label: "Restaurant meal",
        pct: 20,
        note: "10% VAT plus a service charge commonly around 10%. A small local cafe may simply charge the price on the board, so treat this as an upper estimate for the kind of place a visitor eats in.",
      }
    ],
  },

  currencyHeading: "The dinar, in plain terms.",

  facts: [
    { sym: "usd", k: "Quick conversion", v: `The dinar is fixed at ${F.peg} and has been since 1980, so it does not move against you. Multiply dinar prices by roughly 2.66 for dollars: BD 10 is about 27 dollars, BD 100 about 266.` },
    { sym: "denom", k: "The three decimal places", v: "The dinar splits into 1,000 fils, not 100, so prices read like 4.500. That is four and a half dinars, about twelve dollars. This is the single most common money mistake visitors make in Bahrain, and it is an expensive one to make in a souq." },
    { sym: "coins", k: "Notes are worth a lot", v: "Notes run half a dinar and BD 1 up through 5, 10 and 20. A BD 20 note is about 53 dollars, which almost nobody at a stall wants to break, so change large notes at a supermarket and keep 500 fils and BD 1 notes for taxis and tips." },
    { sym: "receipt", k: "The heaviest bill in the Gulf bar Saudi", v: "Hotels stack 10% VAT, a 5% government levy, a 10% service charge and a BD 3 per night tourist tax. Roughly a quarter on top of the room rate plus about 8 dollars a night, and quoted rates often exclude all of it." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "A 10% VAT, and no refund desk to count on.",
    text: "Bahrain's <b>VAT is 10%</b>, doubled from 5% on 1 January 2022, which makes it the <b>second highest in the Gulf</b> behind Saudi Arabia at 15% and well above the UAE and Oman at 5%. Qatar, next door, has none at all. On hotel stays that 10% sits alongside a <b>5% government levy</b>, a <b>10% service charge</b> and a flat <b>BD 3 per room per night</b> tourist tax introduced in 2024. <b>On refunds, be realistic.</b> At this check we could not confirm an operating tourist VAT refund scheme of the kind the UAE runs with staffed airport desks and a minimum spend. Budget as though the 10% is simply part of the price, and if a retailer offers you a refund route, treat it as a bonus rather than a plan. <b>One to watch:</b> the 2025-26 budget raised the possibility of a further VAT increase, with no rate or date announced.",
  },

  keyFacts: [
    // NO FIGURE, DELIBERATELY. The spoke's own judgment block says why: every amount we
    // found was secondary and undated, while the NPRA portal publishes the live one. This
    // fact exists to tell a reader the cost is REAL and where the current number is, which
    // is more use than a number we cannot stand behind. Classified `unpriced` in
    // entry-charges.js. If a primary source ever carries the fee, this becomes a normal
    // priced keyFact and the kind promotes to `charge`.
    { label: "Bahrain visitor visa (US citizens)", value: "Required and not free. Two routes: a visa on arrival at Bahrain International Airport, single entry, for stays of up to 14 days, or an eVisa in advance through the NPRA portal, which reaches 90 days a visit on multiple-entry versions. We publish no amount because the portal is the only current source for it", status: "enacted", effective: null, source: "https://www.evisa.gov.bh/", checked: "2026-08-02" },
  ],

  traps: [
    "<b>Reading 4.500 as four fifty.</b> The dinar carries three decimals because it splits into 1,000 fils. That price is four and a half dinars, about twelve dollars. In a souq, over a few purchases, this is the mistake that actually costs you money.",
    '<b>"Would you like to pay in dollars?" Always say no.</b> The dinar is pegged to the dollar, so dynamic currency conversion adds a padded rate of several percent for nothing at all. Choose dinars on every terminal and every ATM screen.',
    "<b>The room rate that was not the room rate.</b> Expect roughly 25% in VAT, government levy and service charge, plus BD 3 a night in tourist tax. Ask whether the rate is all-in when you book, because frequently it is not.",
    "<b>Dialling 112.</b> It works in Oman and Qatar. It is <b>not</b> an official emergency number in Bahrain. The number is <b>999</b>, and traffic accidents have their own line on 199. Worth knowing before you need it, not after.",
  ],

  tippingHeading: "Optional, because the service charge is already there.",
  tipping: "Bahrain answers the tipping question more clearly than its neighbours, because a 10% service charge is standard on hotel and restaurant bills, sitting alongside the 10% VAT and a 5% government levy. Where that service charge appears, you have paid for service and anything further is genuinely optional. Where it does not, rounding up or leaving a small amount is welcome and there is no percentage you are meant to hit. Taxi drivers do not expect a tip. The thing to keep in mind is what the notes are worth: a dinar is about 2.66 dollars, so a single BD 1 note is already a real tip and a BD 5 is a substantial one. Keep 500 fils and BD 1 notes back, and tip in cash, because on a bill that already carries a service charge, cash is the only part that clearly reaches a person.",

  sources: {
    changed: "First published August 2026. Verified at this check: the dinar's peg at 0.376 to the dollar, effectively unchanged since 1980, against the Central Bank of Bahrain; the 10% VAT rate in force since 1 January 2022 against Bahrain's National Portal and the National Bureau for Revenue; 999 as the single emergency number, and the fact that 112 is not officially designated in Bahrain, against the National Portal's emergency hotline directory; and the metered BD 2 plus BD 2 airport taxi structure, with both Uber and Careem licensed to collect, against Bahrain International Airport's own page. Also recorded: the US State Department has Bahrain at Level 3, Reconsider Travel, following the February 2026 hostilities between the United States and Iran, with an ordered departure of non-emergency US government personnel dated March 2, 2026, and the FAA has issued a Special Federal Aviation Regulation and a NOTAM covering civil aviation in and near Bahrain.",
    links: [
      { label: "Central Bank of Bahrain: monetary policy and the 0.376 dollar peg", url: "https://www.cbb.gov.bh/monetary-policy/", type: "gov" },
      { label: "Bahrain National Portal: VAT at 10% in the Kingdom of Bahrain", url: "https://www.bahrain.bh/", type: "revenue" },
      { label: "Bahrain NPRA eVisa portal: entry rules, eligibility and current fees", url: "https://www.evisa.gov.bh/", type: "gov" },
      { label: "Bahrain International Airport: taxi operators, meter structure and ride-hailing pickup", url: "https://www.bahrainairport.bh/passenger/taxi", type: "gov" },
      { label: "US Embassy in Bahrain: the current Level 3 travel advisory", url: "https://bh.usembassy.gov/travel-advisory-bahrain-march-2026/", type: "gov" },
    ],
    judgment: "The peg, the VAT rate, the emergency numbers, the airport taxi structure and the entry rules are official and linked above. Three things are deliberately imprecise. The full hotel charge stack, specifically the 5% government levy, the 10% service charge and the BD 3 per night tourist tax, rests on reputable Gulf business reporting rather than a government page we could open, so the roughly 25% figure is a working estimate and your own bill is the authority. Airport taxi fares into Manama vary from about BD 6 to BD 16 across current sources, so we give the range rather than a number. And no visa fee appears anywhere, because the published figures we found were secondary and undated while the NPRA portal carries the live one. The daily cash share, the suggested float and the tipping norms are our own read from experience.",
  },

  faqs: [
    { q: "How much is a Bahraini dinar worth in dollars?", a: "About 2.66 dollars. The dinar is pegged at 0.376 to the US dollar, effectively unchanged since 1980, which makes it one of the highest-valued currency units in the world." },
    { q: "Why do Bahraini prices have three decimal places?", a: "Because the dinar divides into 1,000 fils rather than 100. A price written 4.500 is four and a half dinars, about twelve dollars. Misreading it is the most common money mistake visitors make here." },
    { q: "Do I need cash in Bahrain?", a: "Only a modest amount. Cards cover hotels, malls, restaurants, supermarkets and fuel across Manama, and both ride-hailing apps take cards. Keep BD 20 to 40 in small notes for Manama Souq and tips." },
    { q: "Does Bahrain have VAT?", a: "Yes, 10%, doubled from 5% on 1 January 2022. That is the second highest in the Gulf behind Saudi Arabia's 15%, and well above the UAE and Oman at 5%. Qatar has none. We could not confirm an operating tourist refund scheme, so budget as if you cannot reclaim it." },
    { q: "What does a Bahrain hotel add to the room rate?", a: "Commonly 10% VAT, a 5% government levy, a 10% service charge and a flat BD 3 per room per night tourist tax. Roughly a quarter on top in percentages plus about 8 dollars a night, and quoted rates often exclude all of it." },
    { q: "Do US citizens need a visa for Bahrain?", a: "Yes. A visa on arrival is available at the airport for stays up to 14 days, or you can apply for an eVisa in advance through the NPRA portal for longer or multiple entry. Both carry a fee, and your passport needs six months validity." },
    { q: "Do Uber and Careem work in Bahrain?", a: "Both do, which is unusual in the region: Qatar lost Careem in 2023 and Oman has no Uber. Both collect from a dedicated point at the airport arrivals curbside, and the app is usually cheaper than the metered taxi." },
    { q: "What is the emergency number in Bahrain?", a: "999, covering ambulance, civil defence and police rescue, free from any phone. Traffic accidents have a separate line on 199. Note that 112 is not an official emergency number in Bahrain, so dial 999." }
  ],

  culture: {
    heading: "A few words of Arabic go a long way",
    intro: "Arabic is the language and English is spoken almost everywhere in Manama, so you will never be stuck. Bahrain is the most relaxed of the Gulf states about most things, and a greeting in Arabic is still noticed and appreciated.",
    phrases: [
      { mean: "Hello, peace be upon you", say: "as-sa-LAAM-u a-LAY-kum", word: "As-salamu alaykum", native: "السلام عليكم" },
      { mean: "Hello, welcome", say: "MAR-ha-ba", word: "Marhaba", native: "مرحبا" },
      { mean: "Please", say: "min FAD-lak", word: "Min fadlak", native: "من فضلك" },
      { mean: "Thank you", say: "SHOOK-ran", word: "Shukran", native: "شكراً" },
      { mean: "How much is it?", say: "bi-KAM HA-tha", word: "Bikam hatha", native: "بكم هذا" },
      { mean: "Too expensive", say: "GHA-li KTHEER", word: "Ghali ktheer", native: "غالي كثير" },
    ],
    tip: "The local sweet is <b>halwa Bahraini</b>, a dense amber jelly of cornflour, sugar, saffron and rose water studded with nuts, sold in brass bowls and eaten in very small quantities with a tiny spoon. It goes with <b>gahwa</b>, cardamom coffee, or <b>karak</b> tea from a hatch for a few hundred fils.",
    stories: [
      { img: "/bahrain-culture-1.jpg",
        alt: "WPA-style illustration of a Bahraini pearl merchant in a white thobe seated cross-legged on a woven mat in a coral-stone room, sorting natural pearls through a stack of graded brass sieves beside a small balance scale, opened oyster shells and a carved wooden chest, with a dhow visible through a pierced plaster window screen",
        h: "The pearls that built the island",
        p: "For centuries Bahrain's wealth came from the oyster beds offshore, and its pearls were reckoned the finest in the world, graded by hand through nested brass sieves and weighed against seed pearls. Then Japanese cultured pearls arrived in the 1930s and the trade collapsed almost overnight. Bahrain's response was to protect what it had: the island became known for dealing only in natural pearls, and it still runs a gemological institute that certifies them.",
        note: "If you are buying, ask for certification rather than taking a word for it" },
      { img: "/bahrain-culture-2.jpg",
        alt: "WPA-style illustration of the Tree of Life, a single broad mesquite tree with a thick gnarled trunk and full green canopy standing alone on a low rise in empty pale desert, cracked bare ground and faint tracks radiating away, an enormous open sky and one long shadow",
        h: "One tree, no water, four centuries",
        p: "Out in the southern desert stands a single mesquite tree, alone, with no visible water source and nothing else growing for a considerable distance in any direction. It is thought to be several hundred years old. Nobody has settled exactly how it survives, whether a very deep taproot reaching an aquifer or something about the way it draws moisture from the air. It is called the Tree of Life, and it is the least crowded landmark in the Gulf.",
        note: "Good to know: it is a 40 minute drive from Manama and there is no shade at the site" },
      { img: "/bahrain-culture-3.jpg",
        alt: "WPA-style illustration of the Dilmun burial mounds, a field of hundreds of low rounded earth mounds spread in rows across pale flat desert, with two archaeologists kneeling to brush at an exposed stone burial chamber, clay pots and a round copper seal laid out on a cloth, and date palms and a distant coral-stone fort on the shoreline",
        h: "The land the Sumerians called paradise",
        p: "Bahrain was Dilmun, a trading power that linked Mesopotamia to the Indus valley more than four thousand years ago, and Sumerian texts describe it as a blessed land of sweet water. What it left behind is extraordinary: tens of thousands of burial mounds, one of the largest prehistoric cemeteries anywhere, along with the fort and settlement layers at Qal'at al-Bahrain.",
        note: "Say it: DIL-mun, and the sweet water came from freshwater springs under the sea" },
    ],
  },
};
