import { S } from './carrier-spine.js';

// Qatar money guide.
//
// Verified August 2026 against: Qatar Central Bank (the 3.64 peg, Amiri Decree No. 34 of
// 2001, and the 0.24% margin banks add for the public), Visit Qatar's official visa checker
// (the US two-year visa on arrival and the Qatar-Oman joint visa), PwC Worldwide Tax
// Summaries and Grant Thornton (no VAT), the Ministry of Interior (999), and Hamad
// International Airport's own page (Karwa meter rates).
//
// Correction-prone facts live in F and are interpolated, so fixing one value fixes every
// sentence that uses it. See AUTHORING-GUIDES.md.

const F = {
  peg: "QR 3.64 to the dollar",
  perRiyal: "about 27 cents",
  hundred: "QR 100 is about 27 dollars",
  bankMargin: "0.24%",
  metro: "QR 2",
  darb: "QR 10",
  stay: "90 days",
  emergency: "999",
};

export default {
  slug: "qatar",
  iso2: "qa",
  live: true,
  name: "Qatar",
  from: "United States",
  checked: "Aug 2026",
  checkedISO: "2026-08-02",
  emergency: { medical: F.emergency, note: "999 covers police, fire and ambulance on one number, 24 hours, in several languages. Dialling 112 from a mobile redirects to it. Emergency medical treatment itself is provided free of charge to anyone who needs it, visitors included, though follow-on care is not.", checked: "Aug 2026", checkedISO: "2026-08-02" },
  insuranceLevel: "medium",
  region: "Middle East",

  spokes: [
    {
      slug: "visa",
      glance: [
        { k: "Visa", v: "Free on arrival, no application" },
        { k: "Each stay", v: "Up to 90 days" },
        { k: "Valid", v: "Two years, multiple entries" },
        { k: "Passport", v: "3 months from entry" }
      ],
      live: true,
      topic: "visas",
      title: "Do US citizens need a visa for Qatar?",
      description: "No. US citizens get a free stamp on arrival, valid two years for multiple entries, each stay up to 90 days. Most sites still wrongly say 30 days.",
      h1: "Do US citizens need a visa for Qatar?",
      lede: "No, and the terms are better than almost anything you will read online. Qatar upgraded the US allowance in late 2024 and most travel sites never updated their copy.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: "No visa, nothing to apply for and nothing to pay. US citizens are issued an entry stamp on arrival that is <b>valid for two years</b>, or until the passport expires if that comes first, allows <b>multiple entries</b>, and permits <b>each stay of up to 90 days</b>. You need a passport valid at least <b>three months</b> from arrival and a <b>confirmed hotel booking</b>. If you have read that the limit is 30 days, that was the rule before September 2024 and a great many sites have never updated it.",
      official: {
        label: "Visit Qatar: the official per-nationality visa checker",
        url: "https://visitqatar.com/intl-en/plan-your-trip/visas",
        note: "Qatar Tourism's own tool. Select the United States and it states the two-year, 90-day-per-stay terms directly. The Hayya platform is where you would apply if you wanted a visa in advance, which you do not need.",
      },
      expediter: false,
      sections: [
        {
          h: "What you actually get at the desk",
          icon: "passport",
          key: {
            fig: "2 years",
            tag: "Not 30 days",
            text: "The stamp is valid two years for multiple entries, with up to 90 days per visit. It is free.",
            tone: "teal"
          },
          p: [
            "Qatar renamed this recently, which is part of why the search results are such a mess. What used to be called visa on arrival is now called visa-free entry, and Qatar Tourism says plainly that nothing changed except the name. Either way, you turn up and get stamped.",
            "The US terms are unusually generous: valid two years or until your passport expires, multiple entries across that window, and up to 90 days on each visit. The conditions are a passport valid three months beyond arrival and a confirmed hotel booking. There is no fee, no form and no reason to pay a third party."
          ]
        },
        {
          h: "Why every other site says 30 days",
          icon: "alert",
          key: {
            tag: "Stale copy everywhere",
            text: "The 30 day figure was correct until September 2024. It has been repeated ever since without being re-checked.",
            tone: "amber"
          },
          p: [
            "In September 2024 Qatar became the first Gulf state admitted to the US Visa Waiver Program, and because that program requires reciprocity, the allowance for Americans going the other way went up at the same time. Reporting on the joint State Department and Homeland Security announcement noted that US citizens could already enter without a visa but would now be allowed up to 90 days, up from 30.",
            "Almost every visa-agency page still says 30 days, or 30 extendable to 60, and a few say 90 within 180. If you want to see the current answer for yourself, use the Visit Qatar checker linked above rather than any guide, this one included."
          ]
        },
        {
          h: "The Qatar and Oman joint visa",
          icon: "plane",
          key: {
            tag: "Two countries, one stamp",
            text: "Issued on arrival in Qatar, valid 30 days for both Qatar and Oman, multiple entry to both, extendable for a fee.",
            tone: "teal"
          },
          p: [
            "This one is barely publicised and genuinely useful if you are pairing the two. Qatar Tourism lists a joint tourist visa, issued on arrival, valid for 30 days across both Qatar and Oman, allowing multiple entry to both countries and extendable for a further 30 days for a fee. US citizens are on the eligible list.",
            "Worth thinking about before you default to it, though. As a US citizen your ordinary Qatar stamp already runs to 90 days, and Oman waives the visa for stays up to 14 days anyway, so the joint visa mainly helps if you want a longer Oman leg or plan to bounce between the two. It must be issued in Qatar."
          ]
        },
        {
          h: "Health insurance, and a genuine ambiguity",
          icon: "shield",
          key: {
            tag: "Sources disagree",
            text: "One Qatari publication calls it compulsory under a 2021 law. Qatar Tourism words it as a recommendation you can satisfy on arrival.",
            tone: "amber"
          },
          p: [
            "We could not settle this one cleanly, so here is both readings. A Qatar-based guide describes visitor health insurance from an approved provider as required under the Healthcare Services Law of 2021, purchasable at the airport for around 50 riyals a month. Qatar Tourism's own visa FAQ instead recommends that all travellers hold a policy covering Qatari facilities and says those without one are welcome to buy on arrival.",
            "Practically, the gap does not matter much: a policy is cheap, it is available at the airport, and Qatar is at Level 3 on the US advisory right now, which makes cover worth having on its own merits. Carry proof and the question never comes up."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for Qatar?", a: "No. You get a free entry stamp on arrival, valid two years or until your passport expires, allowing multiple entries with each stay up to 90 days. You need a passport valid three months from arrival and a confirmed hotel booking." },
        { q: "Is the Qatar visa on arrival 30 days or 90 days for Americans?", a: "Ninety per stay. The 30 day figure was correct until September 2024, when Qatar joined the US Visa Waiver Program and the reciprocal allowance for Americans rose. Most sites still quote the old number." },
        { q: "Do I need the Hayya platform to enter Qatar?", a: "Not as a US citizen on a tourist trip. Hayya is where you apply if you want a visa issued in advance, or if you are entering by road from Saudi Arabia and need vehicle pre-registration. The free stamp on arrival is simpler." },
        { q: "Is there a joint Qatar and Oman visa?", a: "Yes. It is issued on arrival in Qatar, valid 30 days for both countries, allows multiple entry to both and is extendable for a fee. Since Americans already get 90 days in Qatar and 14 visa-free days in Oman, it mainly helps for a longer Oman leg." }
      ],
      sources: {
        links: [
          { label: "Visit Qatar: the official visa checker, including the US two-year terms and the Qatar-Oman joint visa", url: "https://visitqatar.com/intl-en/plan-your-trip/visas", type: "gov" },
          { label: "Qatar Ministry of Interior: entry permits and visit visas", url: "https://portal.moi.gov.qa/qatarvisas/", type: "gov" },
          { label: "US Department of State: Qatar country information and the current travel advisory", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Qatar.html", type: "gov" }
        ],
        judgment: "The two-year, 90-day-per-stay terms and the joint Qatar-Oman visa both come from Qatar Tourism's own checker, which is the reason we trust them over the dozens of sites saying 30 days. On health insurance we found a real contradiction between a Qatari publication and Qatar Tourism's FAQ and have reported both rather than picking one. We have not printed the insurance price as a fixed figure because the only source for it was secondary.",
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Qatari riyal (QAR), pegged" },
        { k: "Cards", v: "Accepted almost everywhere" },
        { k: "Cash for", v: "Souq stalls, small tips" },
        { k: "No VAT", v: "Tag price is the price" }
      ],
      live: true,
      topic: "cash",
      title: "Cash or card in Qatar? Mostly card, honestly",
      description: "Doha runs on cards, even taxis. Keep a little cash for Souq Waqif stalls and tips. The riyal is pegged and there is no VAT, so prices are literal.",
      h1: "Cash or card in Qatar?",
      lede: "Qatar is one of the easiest money countries in the Gulf: a pegged currency, no sales tax, and card acceptance deep enough that you can go days without touching a note.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: `Card, with a small cash float. Hotels, malls, restaurants, supermarkets, the metro and even most <b>Karwa taxis</b> take Visa and Mastercard, and Apple Pay and Google Pay work widely. Keep <b>QR 100 to 200</b> in small notes for Souq Waqif stalls, tips and the occasional driver who cannot take cards. The riyal is pegged at <b>${F.peg}</b>, so the rate never moves, and because <b>Qatar has no VAT</b>, the price on the tag is the price you pay. Decline any terminal offering to bill you in dollars.`,
      sections: [
        {
          h: "How far the card actually goes",
          icon: "card",
          key: {
            fig: "Nearly all",
            tag: "Including taxis",
            text: "Card payment has overtaken cash in everyday use in Doha's taxis, and the metro runs on a stored-value card.",
            tone: "teal"
          },
          p: [
            "Doha is close to the UAE on cards and well ahead of Oman. Hotels, malls, chain and independent restaurants, supermarkets and fuel all take Visa and Mastercard, contactless is standard, and Apple Pay and Google Pay are widely accepted. The government taxi fleet accepts cards, Apple Pay and Google Pay too, and card has overtaken cash as the normal way to settle a Doha fare.",
            "Amex is patchier, mostly the international hotels and larger restaurants, so do not rely on it alone. The places that still want cash are the small stalls in Souq Waqif, some independent cafes, and tips, which never work well on a card slip anywhere."
          ]
        },
        {
          h: "The riyal, and the peg's small print",
          icon: "coins",
          key: {
            fig: "QR 3.64 = $1",
            tag: "Fixed since 1980",
            text: "Formally set by Amiri Decree in 2001. The central bank holds it in a band of 3.6385 to 3.6415.",
            tone: "teal"
          },
          p: [
            `The riyal has been fixed at ${F.peg} since 1980, formalised by Amiri Decree in 2001, and the Qatar Central Bank keeps it there. One riyal is ${F.perRiyal}, so ${F.hundred}. Divide riyal prices by roughly 3.6 for dollars, or take a bit over a quarter.`,
            `Two details worth knowing. The central bank states openly that commercial banks add a margin of about ${F.bankMargin} to the fixed price when dealing with the public, so the rate you personally get is a hair off the headline, which is normal and small. And the riyal divides into 100 <b>dirhams</b>, which is confusing given that the dirham is the whole currency of the UAE next door. A Qatari dirham is a coin worth a hundredth of a riyal, not an Emirati dirham.`
          ]
        },
        {
          h: "No VAT, which changes the arithmetic",
          icon: "receipt",
          key: {
            fig: "0%",
            tag: "No sales tax",
            text: "Qatar is one of only two Gulf states that never introduced VAT. Shelf prices are final.",
            tone: "teal"
          },
          p: [
            "This is the quiet luxury of shopping in Qatar. There is no VAT and no sales tax, so unlike Saudi Arabia at 15%, Bahrain at 10% or the UAE and Oman at 5%, nothing is added at the till. The number on the tag is the number you pay, which makes budgeting unusually honest.",
            "Two caveats. Restaurants and hotels may add a service charge, which is not a tax and varies by property, so read the bottom of the bill. And a draft electronic invoicing law was approved in May 2026, which is normally the groundwork laid before a VAT launch, so this may not be permanent. No date has been published."
          ]
        },
        {
          h: "Getting riyals, and the dollar trap",
          icon: "atm",
          key: {
            tag: "Always choose riyals",
            text: "Dynamic currency conversion costs several percent on a currency that is pegged to the dollar anyway. There is nothing to gain.",
            tone: "amber"
          },
          p: [
            "ATMs are everywhere: the airport, every mall, every bank branch, and foreign cards work normally. Take a sensible amount in one go rather than several small withdrawals, since fees do not scale down. Exchange houses in the malls are competitive and post their rates openly.",
            "If a terminal or ATM offers to charge you in US dollars, decline every time. The riyal is pegged to the dollar, so dollar pricing adds a padded rate for precisely no benefit. Some hotels will quote or take dollars at their own rate; pay in riyals and let your own bank convert."
          ]
        }
      ],
      faqs: [
        { q: "Can I use US dollars in Qatar?", a: "Not as everyday money. Some hotels and tour desks will accept them at a rate they set, but shops, restaurants and taxis deal in riyals. Since the riyal is pegged to the dollar, paying in dollars only costs you the markup." },
        { q: "How much cash do I need in Qatar?", a: "Not much. QR 100 to 200 in small notes covers Souq Waqif stalls, tips and the occasional cash-only driver. Cards and phone payments cover almost everything else, including the metro and most taxis." },
        { q: "Does Qatar have VAT or sales tax?", a: "No. Qatar is one of only two Gulf states that never introduced VAT, so the shelf price is the final price. A draft e-invoicing law was approved in May 2026, which often precedes a VAT launch, but no date has been announced." },
        { q: "What is the Qatari riyal pegged at?", a: "QR 3.64 to one US dollar, fixed since 1980 and formalised by decree in 2001. The central bank holds it in a narrow band, and banks add a margin of about 0.24% when dealing with the public." }
      ],
      sources: {
        links: [
          { label: "Qatar Central Bank: the exchange rate policy, the 3.64 peg and the margin banks add for the public", url: "https://www.qcb.gov.qa/en/Pages/MonetaryPolicyTools.aspx", type: "gov" },
          { label: "PwC Worldwide Tax Summaries: Qatar imposes no VAT or sales tax", url: "https://taxsummaries.pwc.com/qatar/individual/other-taxes", type: "revenue" }
        ],
        judgment: "The peg, the band and the 0.24% public margin are the central bank's own published figures. The absence of VAT is confirmed by PwC and by Grant Thornton. How much cash is a sensible float, and exactly where card acceptance thins out, are our estimate from experience rather than published data.",
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Expected", v: "No, not compulsory" },
        { k: "Restaurants", v: "Check for a service charge" },
        { k: "Taxis", v: "Round up, nothing more" },
        { k: "Best form", v: "Cash, even on a carded bill" }
      ],
      live: true,
      topic: "tipping",
      title: "Do you tip in Qatar? What is actually expected",
      description: "Tipping in Qatar is a courtesy, not an obligation, and many bills already carry a service charge. Round up, tip in cash, and skip the US percentages.",
      h1: "Do you tip in Qatar?",
      lede: "Short version: nothing is compulsory here. Read the bill, round up where it feels right, and keep small notes for the people a card slip would never reach.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: "Tipping in Qatar is <b>not compulsory</b> and nothing like the US convention. Check the bill first, because restaurants and hotels commonly add a <b>service charge</b>, and where one appears the question is settled. Where there is none, rounding up or leaving a small amount is welcome. <b>Taxi drivers do not expect a tip</b>; rounding the fare up is treated as a courtesy. Whatever you do, <b>tip in cash</b>, in small riyal notes, because whether an amount added to a card slip reaches the person who served you depends entirely on the establishment.",
      sections: [
        {
          h: "Read the bill before you add anything",
          icon: "receipt",
          key: {
            tag: "Service charge is common",
            text: "There is no VAT in Qatar, so a percentage on your bill is a service charge, not a tax, and it varies by property.",
            tone: "teal"
          },
          p: [
            "Because Qatar has no VAT, any percentage you see added at the bottom of a restaurant or hotel bill is a service charge rather than a government tax. Practice varies genuinely widely: many properties add one, historically around 10%, and at least one major Doha hotel currently states that no service charge or taxes apply to its quoted rates at all.",
            "So the useful habit is simply to look. Where a service charge is present you have paid for service and anything further is optional. Where there is none, rounding up is generous and no one is calculating a percentage."
          ]
        },
        {
          h: "What people actually do",
          icon: "tip",
          key: {
            fig: "Round up",
            tag: "The whole convention",
            text: "Fares get rounded rather than tipped on. Porters and housekeeping get a small note. That is most of it.",
            tone: "teal"
          },
          p: [
            "Hamad International Airport's own guidance on taxis puts it plainly: tipping is not compulsory, and rounding up the fare for a helpful driver is a common courtesy rather than an expectation. That is a fair description of the whole country.",
            "For a hotel porter or housekeeper, a small note in cash is the customary thanks. For a guide or a driver who has given you a full day, more is genuinely appreciated. None of it is a fee you have quietly incurred by being served."
          ]
        },
        {
          h: "Cash, even when you pay by card",
          icon: "notip",
          key: {
            tag: "Cash reaches people",
            text: "Doha is close to cashless for paying, but tipping is the one thing still worth carrying notes for.",
            tone: "amber"
          },
          p: [
            "This is the practical reason to keep a small stack of riyals in a city where you can otherwise tap for everything. A tip written onto a card slip may be pooled, may be delayed, may not arrive at all, depending on the establishment. Cash in a hand has none of those failure modes.",
            "Keep some small notes back specifically for it. And do not import the US math: applying 20% to a Doha restaurant bill is not the safe default, it is just a large gift, and it is not what anyone expects of you."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Qatar?", a: "It is a courtesy, not an obligation, and there is no percentage convention. Check the bill for a service charge first, because many restaurants and hotels add one. Where there is none, rounding up or leaving a small amount is generous." },
        { q: "How much do you tip a taxi driver in Qatar?", a: "Nothing is expected. Hamad International Airport's own guidance says tipping is not compulsory and that rounding up for a helpful driver is a courtesy rather than an expectation." },
        { q: "Should I tip in cash or on the card in Qatar?", a: "Cash, in small riyal notes. Doha is close to cashless for paying, but whether a tip on a card slip reaches the person who served you depends on the establishment, and cash removes that question." },
        { q: "Is the service charge on my Qatar bill a tax?", a: "No. Qatar has no VAT or sales tax, so a percentage added to your bill is a service charge set by the property. Practice varies, and some hotels add nothing at all to their quoted rates." }
      ],
      sources: {
        links: [
          { label: "Qatar Central Bank: currency and the pegged rate behind the amounts on your bill", url: "https://www.qcb.gov.qa/en/Pages/MonetaryPolicyTools.aspx", type: "gov" },
          { label: "PwC Worldwide Tax Summaries: no VAT in Qatar, so a bill percentage is a service charge", url: "https://taxsummaries.pwc.com/qatar/individual/other-taxes", type: "revenue" }
        ],
        judgment: "That there is no VAT, and therefore that any percentage on your bill is a service charge rather than a tax, is well sourced. The tipping norms themselves are our read of common practice rather than a published standard, which is why no percentage appears anywhere on this page. Service charge practice genuinely varies by property and we have said so rather than average it into a number.",
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Uber", v: "Yes, works normally" },
        { k: "Careem", v: "Left Qatar in 2023" },
        { k: "Official taxis", v: "Karwa, turquoise, metered" },
        { k: "Cheapest", v: "Metro, about QR 2" }
      ],
      live: true,
      topic: "taxis",
      title: "Doha taxis, Uber and the metro: what to use",
      description: "Uber works in Doha and Careem pulled out in 2023. Karwa taxis are metered and take cards. The metro costs about QR 2, against QR 40 to 60 for a taxi.",
      h1: "Taxis, apps and the metro in Doha",
      lede: "Doha has the cheapest airport-to-city ride of any Gulf capital and one common trap, which is assuming the app you used in Dubai still works here.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: "<b>Uber works in Doha.</b> <b>Careem does not</b>, having shut its Qatar ride-hailing operation in February 2023, so delete that assumption before you land. The official taxis are <b>Karwa</b>, the turquoise government cabs, which are metered, take cards and are the only vehicles allowed to collect at the airport. But the real money answer is the <b>Doha Metro</b>: a standard journey is around <b>QR 2</b>, against roughly <b>QR 40 to 60</b> for a taxi from the airport into town.",
      sections: [
        {
          h: "The metro is the answer more often than you would think",
          icon: "train",
          key: {
            fig: "About QR 2",
            tag: "Roughly 55 cents",
            text: "A standard metro journey, including the Red Line run from the airport into central Doha.",
            tone: "teal"
          },
          p: [
            `Doha's metro is modern, air conditioned, and absurdly cheap by the standards of the city around it. A standard journey runs about ${F.metro}, which is roughly 55 cents, and the Red Line connects Hamad International to Msheireb and West Bay in around half an hour. You need a <b>Darb</b> stored-value card, sold at the station for about ${F.darb}.`,
            "It is not always the right call. With heavy luggage, a late arrival, small children, or an address that is a long walk from a station, a taxi earns its money. But for a solo or two-person arrival heading to a station-served district, paying thirty times more for the same trip deserves a moment's thought."
          ]
        },
        {
          h: "Uber yes, Careem no",
          icon: "taxi",
          key: {
            tag: "The Dubai habit fails here",
            text: "Careem closed its Qatar ride-hailing, delivery and payments operations in February 2023. Uber has run since 2014.",
            tone: "amber"
          },
          p: [
            "This is the single most useful thing on this page, because it is the opposite of neighbouring Oman, where Uber does not operate. In Qatar, Uber has been running since 2014, your existing account and card work with no local setup, and you can even book a Karwa taxi through the Uber app by choosing the Taxi option.",
            "Careem withdrew from Qatar entirely in February 2023, closing ride-hailing along with its delivery and payments services. Plenty of current travel pages still list Careem for Doha, which is stale copy rather than a live option. If a guide tells you to use Careem in Qatar, treat everything else on that page with suspicion."
          ]
        },
        {
          h: "Karwa, and what the meter does",
          icon: "wheel",
          key: {
            tag: "Metered and card-friendly",
            text: "Government-run, turquoise, and the only cabs permitted to pick up at the airport. Cards, Apple Pay and Google Pay all work.",
            tone: "teal"
          },
          p: [
            "Karwa is operated by Mowasalat and is effectively the taxi system: turquoise cars, real meters, available at ranks outside the airport, the malls, the hotels and Souq Waqif, or through the Karwa app. Unlike much of the region there is no fare to negotiate, because the meter is used.",
            "On rates, the airport's own page gives a QR 25 flag fall from the terminal with the first stretch included, then a per kilometre rate that is higher at night, and an airport pick-up fee normally applies. Airport to central Doha commonly lands somewhere around QR 40 to 60. Treat all of that as a guide rather than a quote, because traffic moves meters and operators change tariffs."
          ]
        },
        {
          h: "Paying, and what to carry",
          icon: "card",
          key: {
            tag: "Card usually fine",
            text: "Card has overtaken cash in Doha taxis, but confirm before you set off if you have no riyals at all.",
            tone: "teal"
          },
          p: [
            "Karwa accepts a wide spread of payment methods including Visa, Mastercard, Amex, Apple Pay and Google Pay, and the modernisation of the fleet has made card the normal way to settle a fare. Uber is card in the app as usual.",
            "The exception is the freshly landed traveller with no local currency and a driver whose terminal is not cooperating. Ask before you load the bags, and keep a couple of small notes as insurance. Change for a large note can be scarce, so smaller is better."
          ]
        }
      ],
      faqs: [
        { q: "Does Uber work in Doha?", a: "Yes. Uber has operated in Qatar since 2014 and your existing account and payment methods work without local setup. You can also book a Karwa taxi through the Uber app by selecting the Taxi option." },
        { q: "Does Careem work in Qatar?", a: "No. Careem shut its Qatar ride-hailing operation in February 2023, along with its delivery and payments services. Many travel pages still list it, which is out of date. Use Uber, Karwa or a limousine service instead." },
        { q: "What is the cheapest way from Hamad International Airport into Doha?", a: "The metro. A standard journey is around QR 2 and the Red Line reaches Msheireb and West Bay in about half an hour. You need a Darb card, about QR 10 at the station. A metered taxi is commonly QR 40 to 60." },
        { q: "Can I pay for a Doha taxi by card?", a: "Usually yes. Karwa taxis accept Visa, Mastercard, Amex, Apple Pay and Google Pay, and card has overtaken cash as the normal way to pay. Confirm with the driver if you have no riyals at all as a fallback." }
      ],
      sources: {
        links: [
          { label: "Marhaba Qatar: Mowasalat and Karwa as the taxi operator, the metro, and the Sila journey app", url: "https://marhaba.qa/articles-getting-around-qatar/", type: "news" },
          { label: "Hamad International Airport taxi guide: Karwa meter rates and the ride-hailing pick-up point", url: "https://doha-doh-international-airport.com/doha-airport-taxis", type: "news" }
        ],
        judgment: "Careem's 2023 exit is reported specifically and with dates by multiple current sources, while the sources still listing Careem do so in generic boilerplate, which is why we have called it. Metro and taxi figures are approximate and drawn from secondary sources rather than a published tariff we could open, so they are written as ranges and flagged as a guide. Uber's presence and the Karwa-through-Uber option are well attested.",
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Excellent, the whole country" },
        { k: "App calling", v: "Restricted, and reported inconsistently" },
        { k: "Messaging", v: "Works normally" },
        { k: "Carrier roaming", v: "$10 to $12 a day" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "medium",
      title: "Qatar: coverage is a non-issue, app calling is the question",
      description: "Qatari coverage is excellent, so this is not about signal. WhatsApp and FaceTime calling is restricted and reported inconsistently, so plan a backup before you land.",
      h1: "Staying connected in Qatar.",
      lede: "Qatar is small, rich and comprehensively covered, so signal is not the story. The story is whether you can call home on WhatsApp, and the honest answer is that we could not pin it down.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>excellent across the whole country</b>, in Doha, on the highways, at the airport and out toward the dunes, with widespread 5G, so there is nothing to plan around on signal. The question is <b>app calling</b>: Qatar licenses internet calling to its own operators, and <b>WhatsApp and FaceTime calling is widely reported as restricted</b>, though accounts differ on how consistently. <b>Messaging, photos and voice notes work normally</b>, and <b>ordinary cellular calls always work</b> on your own number. A local <b>Ooredoo</b> or <b>Vodafone Qatar</b> tourist pack is inexpensive with your <b>passport</b>, and a <b>Nomad eSIM</b> is a few dollars per gigabyte. Your US carrier charges about <b>${S.dayPass}</b> to roam (<b>AT&amp;T and Verizon</b> day passes), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, while <b>Verizon has ${S.verizonNoCap}</b> and keeps billing daily. <b>T-Mobile</b>'s mid and upper tiers include <b>${S.tmoRange}</b> of high-speed data abroad before slowing to <b>${S.throttle}</b>. Have a fallback ready before you land rather than working it out at the moment you need a call. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "What is restricted, and what is not",
          icon: "alert",
          key: { fig: "Calls only", tag: "Messaging is fine", text: "WhatsApp and FaceTime calling is restricted on Qatari networks. Text, photos, voice notes and ordinary cellular calls work normally.", tone: "amber" },
          p: [
            `The shape of the restriction is narrower than the phrase implies, and knowing it saves confusion on arrival. <b>Restricted</b>: WhatsApp and FaceTime voice and video calling, and most other consumer app calling, which Qatar licenses to <b>Ooredoo</b> and <b>Vodafone Qatar</b> rather than permitting generally. <b>Working normally</b>: WhatsApp and iMessage text, photos and voice notes, and <b>ordinary cellular calls and SMS</b> on your own number at your carrier's international rate. Business platforms such as <b>Zoom and Teams</b> generally work for meetings, which is why a work trip can feel unaffected while a family call does not.`,
            `Worth knowing how thin the evidence is. Almost every page on the internet about Gulf app-calling is published by a company selling a VPN or an eSIM, both of which are the advertised fix, and they contradict each other flatly: on the same week in 2026 we found sources calling this country blocked, intermittent and permitted. So we are not going to give you a confident answer we do not have. <b>Messaging works everywhere in the Gulf.</b> Assume <b>app calling might not</b>, have a backup before you land, and test it on arrival rather than at the moment you need it.`
          ]
        },
        {
          h: "What to plan around instead",
          icon: "phoneok",
          key: { fig: "A cellular call", tag: "The reliable route", text: "An ordinary phone call on your own number always works. Licensed operator calling apps are the local route.", tone: "teal" },
          p: [
            `Three things that hold up. First, an <b>ordinary phone call</b>: unglamorous, billed at your international rate, and it works every time, which is what you want for the one call that matters. Second, the <b>licensed operator route</b>, since Qatar permits internet calling through Ooredoo and Vodafone Qatar's own services. Third, <b>Zoom or Teams</b> for anything that can be a meeting.`,
            `On <b>VPNs</b>, which every forum recommends: using one for ordinary purposes is common and using one specifically to reach a service the country restricts sits against the letter of local telecom rules, so we are not going to call it a clean answer. A travel eSIM routes your data out of the country and often sidesteps a national block as a side effect of how roaming works, and that is a byproduct, not a feature we can promise. Test whatever you are relying on <b>on arrival</b>, not at the moment you need it.`
          ]
        },
        {
          h: "Coverage and cost, briefly",
          icon: "roamfee",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: "A US carrier day pass is the expensive default. AT&T caps it at 10 daily fees a bill period, Verizon does not cap at all, and T-Mobile's mid and upper tiers include 5GB to 30GB abroad.", tone: "teal" },
          p: [
            `There is nothing to warn about on coverage: Qatar is compact and comprehensively built out, with fast 5G in <b>Doha</b>, coverage on the metro, along the highways and at Hamad International, and workable signal out at the inland sea and the dune camps, which is unusual for desert terrain.`,
            `On cost, a local <b>Ooredoo</b> or <b>Vodafone Qatar</b> tourist pack is inexpensive with your <b>passport</b>, and a <b>Nomad eSIM</b> is a few dollars per gigabyte with no counter. Roaming is about <b>${S.dayPass}</b>, so <b>${S.week}</b> a week, with <b>AT&amp;T</b> capping at <b>${S.capFees}</b> and <b>Verizon</b> having <b>${S.verizonNoCap}</b>. <b>T-Mobile</b>'s tiers include <b>${S.tmoRange}</b> before <b>${S.throttle}</b>. This guide is written for US travelers departing the US. For more, see <a href='/qatar/cash-or-card'>cash or card in Qatar</a>, <a href='/qatar/taxis-and-apps'>taxis and apps in Qatar</a>, and the <a href='/qatar'>Qatar money guide</a>.`
          ]
        }
      ],
      faqs: [
        { q: `Does WhatsApp work in Qatar?`, a: `Messaging does: text, photos and voice notes all work normally. WhatsApp and FaceTime calling is widely reported as restricted, since Qatar licenses internet calling to its own operators, though accounts differ on how consistently. Ordinary cellular calls on your own number always work.` },
        { q: `How do I call home from Qatar?`, a: `An ordinary cellular call on your own number is the reliable route, billed at your carrier's international rate. Qatar permits internet calling through Ooredoo and Vodafone Qatar's licensed services. Zoom and Teams generally work for meetings. Test whatever you plan to use on arrival rather than when you need it.` },
        { q: `Is phone coverage good in Qatar?`, a: `Yes, excellent across the whole country, with fast 5G in Doha, coverage on the metro and along the highways, and workable signal out at the inland sea and dune camps, which is unusual for desert terrain. Signal is not the issue here.` },
        { q: `How much does it cost to use my US phone in Qatar?`, a: `About ${S.dayPass} on an AT&T or Verizon day pass, so roughly ${S.week} a week. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "US State Department: Qatar country information and local laws", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Qatar.html", type: "gov" },
          { label: "Ooredoo Qatar: tourist plan and prepaid pages", url: "https://www.ooredoo.qa/", type: "official" }
        ],
        judgment: "Checked Aug 2026. Qatar is the Gulf country where the sources most consistently agree that app calling is restricted, so this page states that, and it still declines to say how reliably, because the accounts differ and nearly every one of them is published by a VPN or eSIM seller with an interest in the answer. The advice that follows from genuine uncertainty is to carry a fallback and test on arrival, which costs nothing and works whichever way the block is running that week."
      }
    },
    {
      slug: "medical-costs",
      exposureCategory: "payInFull",
      exposureQuote: "visitors are charged for care, the realistic route is a private hospital at Western prices",
      glance: [
        { k: "Visitor insurance", v: "Required for some entrants" },
        { k: "Private care", v: "Good, at Western prices" },
        { k: "Deposits", v: "Expected before treatment" },
        { k: "Real risk", v: "A private admission" }
      ],
      live: true,
      topic: "health",
      title: "Getting sick in Qatar: check the entry insurance rule first",
      description: "Qatar has required health insurance from some arriving visitors, and separately charges visitors for care. Private hospitals are good and priced like private care.",
      h1: "What does getting sick in Qatar cost a visitor?",
      lede: "Qatar is the one Gulf country where the insurance question may be answered before you land, because it has tied health cover to entry for some visitors. Check the current rule, because it moves.",
      checked: "Aug 2026",
      checkedISO: "2026-08-20",
      answer: "Qatar introduced a requirement for certain <b>arriving visitors to hold health insurance</b> covering their stay, bought from an approved provider. <b>Check the current rule before you travel</b>, because the scope and the enforcement have changed since it was introduced and we will not state today's version as settled. Separately from entry rules, the money position is the familiar Gulf one: <b>visitors are charged</b> for care, the realistic route is a <b>private hospital</b> at <b>Western prices</b>, and a <b>deposit or proof of insurance before treatment</b> is normal. Qatar's medical facilities are <b>modern and well equipped</b>, particularly in and around Doha.",
      insurance: true,
      insuranceNote: "Qatar has tied health insurance to entry for some visitors, so check whether you are required to hold an approved policy before you fly. That aside, the position is the Gulf norm: private care at private prices, with a deposit expected. Cover here may be a rule as well as a good idea. Faye covers trip medical and evacuation.",
      careFirst: "If it looks serious, get to a hospital first and deal with the paperwork afterwards.",
      sections: [
        {
          h: "Insurance may be an entry condition",
          icon: "alert",
          key: { tag: "Check it, do not assume", text: "Qatar introduced a health insurance requirement for certain arriving visitors, from approved providers. The scope has shifted, so verify the current rule before you fly.", tone: "amber" },
          p: [
            "Qatar is unusual in the region for having tied health cover to <b>entry</b>: it introduced a requirement for certain arriving visitors to hold <b>health insurance</b> covering their stay, purchased from an <b>approved provider</b>. That makes cover a compliance question as well as a financial one.",
            "We are <b>not</b> stating the current scope as settled, because the rule and its enforcement have changed since introduction and this is exactly the kind of detail that goes stale. <b>Check the official position before you travel</b>, and if you are required to hold an approved local policy, note that your existing travel policy may not satisfy it, which is a different question from whether it would pay a claim."
          ]
        },
        {
          h: "The money position is the Gulf norm",
          icon: "receipt",
          key: { tag: "Private, priced", text: "Visitors are charged for care. Private hospitals in and around Doha are modern and priced at Western private levels, with deposits expected.", tone: "amber" },
          p: [
            "Underneath the entry rule, Qatar behaves like its neighbours. <b>Visitors are charged</b> for treatment, the practical route is a <b>private hospital</b>, and facilities in and around <b>Doha</b> are modern and well equipped with English-speaking staff. Prices are at <b>Western private levels</b> rather than regional bargain levels.",
            "A <b>deposit or proof of insurance before treatment</b> is normal, particularly for admission. <b>If it looks serious, get to a hospital first and deal with the paperwork afterwards.</b>"
          ]
        },
        {
          h: "Why there are no prices on this page",
          icon: "tag",
          key: { tag: "Absence is not zero", text: "We have not sourced an official Qatari price list for visitors that we would stand behind, so we have published none.", tone: "teal" },
          p: [
            "We would rather say this than pad the page. We have <b>not sourced an official Qatari tariff for non-resident care</b> that we would put our name to, so no local price figure appears here. On a medical page a plausible-sounding number is not a small error, because it is something a person might act on while unwell.",
            "What holds without a figure: <b>you are charged as a visitor</b>, <b>private care is the route and it is priced like private care</b>, <b>a deposit is normal</b>, and <b>an approved insurance policy may be an entry requirement</b>. On the last point, the official source is the one to trust rather than us, because it changes."
          ]
        },
        {
          h: "What this means for your money",
          icon: "cash",
          key: { tag: "Two separate questions", text: "Whether you must hold an approved policy to enter, and whether you have enough cover if something happens, are different questions. Answer both.", tone: "teal" },
          p: [
            "Keep the two questions apart, because conflating them is how people arrive underinsured with a compliant certificate. The first is <b>compliance</b>: does Qatar require you to hold an approved policy to enter, and does yours qualify. The second is <b>adequacy</b>: if you are admitted to a private hospital in Doha or need a flight home, does your cover actually stretch.",
            "A minimum-compliance policy bought to satisfy an entry rule is not necessarily a policy that absorbs a serious admission. For handling payments on the ground, see the <a href='/qatar/cash-or-card'>Qatar cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is health insurance required to enter Qatar?", a: "It has been required for certain arriving visitors, from approved providers. The scope and enforcement have changed since introduction, so check the current official position before you travel rather than relying on any secondary source, including this one." },
        { q: "How much does a hospital cost in Qatar?", a: "We have not published a figure, because we did not source an official Qatari tariff for visitor care. Private hospitals, which are the realistic route, charge at Western private levels." },
        { q: "Will my travel insurance satisfy Qatar's entry requirement?", a: "Not necessarily. Where an approved local policy is required, an existing travel policy may not qualify even if it would pay a claim. Compliance and adequacy are separate questions and both need answering." },
        { q: "Are Qatari hospitals good?", a: "Yes. Facilities in and around Doha are modern and well equipped, with English-speaking staff, and the private sector is built for an international population." },
        { q: "Do I need travel insurance for Qatar?", a: "Very likely as a rule, and certainly as a practical matter. Visitors are charged, private care is priced accordingly, deposits are normal, and a flight home is on top." }
      ],
      sources: {
        links: [
          { label: "US State Department: Qatar country information, including health and medical care guidance for travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Qatar.html", type: "gov" }
        ],
        judgment: "This page deliberately does not state the current scope of Qatar's visitor health insurance entry requirement, because the rule and its enforcement have changed since introduction and a stale entry requirement is a costly thing to get wrong. We point to the official source instead. No price figures appear because we did not source an official Qatari tariff for visitor care. Checked August 2026."
      }
    }
  ],

  signals: { cardFriendliness: 5, cashNeed: 2, taxRisk: 1, atmRisk: 2 },
  hook: "No VAT at all, a currency pegged to the dollar since 1980, and a metro that costs about 55 cents.",
  aliases: ["qatar", "doha", "qatari riyal", "qar", "souq waqif", "hamad international", "state of qatar", "lusail"],

  title: "Do you need cash in Qatar? Riyals, cards and no VAT",
  description: "Doha runs on cards, even taxis. The riyal is pegged to the dollar and there is no sales tax, so the price you see is the price you pay.",
  h1: "Money in Qatar, sorted.",
  lede: "A calm, current plan for the money side of your trip: how the riyal works, why the price on the tag is final, what the entry stamp actually gives you, and the app that no longer works here.",

  hero: {
    img: "/qatar-hero.jpg",
    h: 1375,
    alt: "A quiet lane in Souq Waqif, Doha at dusk with mud-rendered ochre walls and exposed wooden beam ends, heavy carved doors, a wind tower above the rooftops, iron lanterns and string lights overhead, a figure in a white thobe and headdress walking away down the lane, the Doha skyline faint in the violet haze beyond, and a platter of machboos with lamb, a glass cup of karak chai, a bowl of golden luqaimat drizzled with date syrup and a dish of dates on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: `Qatar is the simplest money country in the Gulf. <b>No VAT</b>, so the shelf price is the final price, which is true of nowhere else in the region except Kuwait. The riyal is <b>pegged at ${F.peg}</b> and has been since 1980, so nothing moves against you. <b>Cards work almost everywhere</b>, including the government taxis, and the metro costs about <b>${F.metro} a journey</b> against QR 40 to 60 for the same trip by cab. Two things to get right: your entry stamp is <b>far more generous than the internet claims</b>, at 90 days per visit over two years, and <b>Careem no longer operates here</b>, so use Uber or Karwa.`,

  meter: {
    heading: "About as cashless as the UAE, and for the same reasons.",
    cashPct: 20,
    note: "A rough feel for everyday spending rather than a measured figure. Doha's hotels, malls, restaurants and supermarkets are fully carded, the taxi fleet takes cards and phone payments, and the metro runs on a stored-value card. What is left is Souq Waqif's smaller stalls, a few independents, and tipping, which is the one thing genuinely worth carrying notes for.",
  },

  trio: [
    {
      sym: "card",
      kind: "ok",
      h: "Your card",
      verd: "Works nearly everywhere",
      p: "Visa and Mastercard cover hotels, malls, restaurants, supermarkets, fuel and most Karwa taxis, and Apple Pay and Google Pay are widely accepted. Amex is thinner outside the big hotels, so do not travel on it alone.",
      cta: { label: "Check yours", href: "#calc" }
    },
    {
      sym: "cash",
      kind: "ok",
      h: "Cash",
      verd: "A small float is plenty",
      p: "QR 100 to 200 in small notes covers Souq Waqif stalls, tips and the occasional driver whose terminal is down. You will not need much more than that in a week.",
      cta: { label: "How much to carry", href: "/qatar/cash-or-card" }
    },
    {
      sym: "atm",
      kind: "ok",
      h: "ATMs",
      verd: "Everywhere, card-friendly",
      p: "Airport, malls and every bank branch, and foreign cards work normally. Take a sensible amount in one go, and decline the offer to be charged in dollars every time it appears.",
      cta: { label: "Find one", href: "#atm" }
    }
  ],

  plan: [
    {
      sym: "tag",
      when: "Before you go",
      bullets: [
        "Bring a <b>no-foreign-fee card</b> and load it into <b>Apple Pay or Google Pay</b>, which is accepted about as widely here as in the US.",
        "<b>Delete the Careem assumption.</b> It left Qatar in 2023. Have <b>Uber</b> or the <b>Karwa</b> app installed instead.",
        "You need <b>no visa</b>. Check your passport has <b>three months</b> left from arrival and have a <b>hotel booking</b> to show."
      ],
      cta: { label: "See no-fee card options", tag: "earn", href: "#" }
    },
    {
      sym: "plane",
      when: "Landing",
      bullets: [
        "Consider the <b>metro</b>: about <b>QR 2</b> to central Doha against QR 40 to 60 by taxi. Buy a <b>Darb card</b> at the station for about QR 10.",
        "If you would rather ride, take a <b>Karwa</b> from the official rank or use Uber's designated pick-up point.",
        "Pull a small amount of riyals if you want a tipping float, and <b>decline the dollar conversion</b> on the ATM screen."
      ],
      cta: { label: "Taxis and the metro", href: "/qatar/taxis-and-apps" }
    },
    {
      sym: "bowl",
      when: "Day to day",
      bullets: [
        "Tap for essentially everything. Keep notes for <b>Souq Waqif stalls</b> and <b>tips</b>.",
        "<b>No VAT means no mental arithmetic.</b> The number on the tag is what leaves your account.",
        "A percentage at the bottom of a bill is a <b>service charge</b>, not a tax, and it varies by property."
      ],
      cta: { label: "Tipping, plainly", href: "/qatar/tipping" }
    },
    {
      sym: "receipt",
      when: "Checking out",
      bullets: [
        "Ask whether the rate was <b>all-in</b>. There is no VAT, but a service charge may or may not have been included.",
        "Pay in <b>riyals</b>, never dollars. The peg means dollar pricing only adds a markup.",
        "There is <b>no tourist tax refund</b> to chase at the airport, because there is no VAT to reclaim."
      ],
      cta: { label: "What the bill adds", href: "#tax" }
    }
  ],

  cash: {
    rate: 3.64,
    cur: "QAR",
    round: 50,
    defaultIndex: 1,
    rateNote: `Effectively fixed. The Qatar Central Bank has held the riyal at ${F.peg} since 1980, formalised by decree in 2001, so a dollar buys 3.64 riyals and that does not move during your trip. One riyal is ${F.perRiyal}. Banks add a margin of about ${F.bankMargin} to the official price when dealing with the public.`,
    styles: [
      { n: "Budget", per: 60, cash: 0.25, room: 70 },
      { n: "Mid-range", per: 140, cash: 0.15, room: 170 },
      { n: "Comfort", per: 320, cash: 0.10, room: 400 }
    ],
  },

  connectivity: {
    works: "Yes, and it is excellent. Ooredoo and Vodafone Qatar both give strong coverage across Doha, the highways and the tourist areas, and 5G is normal in the city. Qatar is small enough that dead spots are rare outside the deep desert. Before you buy anything: check whether your US plan already covers Qatar, because several do, and Hamad International has free wifi that is genuinely fast, so you can sort a SIM later rather than at the arrivals hall counter if at all.",
  },

  tax: {
    none: true,
    note: "Qatar has no VAT, no sales tax and no tourist or hotel tax. It is one of only two Gulf states that never introduced VAT, so the price you are quoted is the price you pay. The one variable is a service charge at hotels and restaurants, which is set by the property rather than the government, is not a tax, and is not universal: some Doha hotels state that no service charge applies to their quoted rates at all. A draft electronic invoicing law was approved in May 2026, which regionally has tended to precede a VAT launch, so this is worth re-checking before a future trip. No implementation date has been published.",
  },

  currencyHeading: "The riyal, in plain terms.",

  facts: [
    { sym: "usd", k: "Quick conversion", v: `The riyal is fixed at ${F.peg} and has been since 1980. Divide riyal prices by roughly 3.6 for dollars: ${F.hundred}, and QR 20 is about 5 dollars 50. One riyal is ${F.perRiyal}.` },
    { sym: "denom", k: "The dirham confusion", v: "The riyal divides into 100 dirhams. That is a coin worth a hundredth of a riyal, not the Emirati dirham, which is the entire currency of the country next door. Same word, completely different value, and it catches people doing Gulf trips back to back." },
    { sym: "card", k: "Close to cashless", v: "Cards and phone payments cover hotels, malls, restaurants, supermarkets, fuel, the metro and most Karwa taxis. The remaining cash corners are Souq Waqif's smaller stalls and tipping. A float of QR 100 to 200 in small notes is genuinely enough." },
    { sym: "receipt", k: "No sales tax at all", v: "There is no VAT in Qatar, so nothing is added at the till and there is no refund to reclaim on the way home. Any percentage on a restaurant or hotel bill is a service charge set by that business, and some properties add none." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "Nothing to add, and nothing to reclaim.",
    text: "Qatar has <b>no VAT and no sales tax</b>, which makes it the simplest tax picture in the Gulf and one of only two in the region, alongside Kuwait, that never adopted the GCC VAT framework. For a visitor that means two things. First, <b>the shelf price is final</b>: no 5% like the UAE and Oman, no 10% like Bahrain, no 15% like Saudi Arabia. Second, <b>there is no refund scheme to bother with</b>, because there is no tax to reclaim, so you can walk past the airport refund desks that exist in the neighbouring states. What can still appear on a bill is a <b>service charge</b>, which is the property's own and not a government levy. <b>One thing to watch over time:</b> Qatar approved a draft electronic invoicing law in May 2026, and across the Gulf that has usually been the groundwork laid before VAT arrives. No date has been announced, so this holds for now rather than forever.",
  },

  traps: [
    "<b>Assuming Careem works here.</b> It pulled out of Qatar in February 2023, ride-hailing, delivery and payments alike, and plenty of travel pages have never updated. Use Uber, or the Karwa app, or a Karwa booked through Uber's Taxi option.",
    '<b>"Would you like to pay in dollars?" Always say no.</b> The riyal is pegged to the dollar, so dynamic currency conversion adds a padded rate of several percent for nothing at all. Choose riyals on every terminal and ATM.',
    "<b>Believing the 30 day visa figure.</b> That was the rule until September 2024. US citizens now get a stamp valid two years for multiple entries with up to 90 days per stay, and the sites saying otherwise simply have not re-checked.",
    "<b>Taking a taxi from the airport on autopilot.</b> The metro does the same run for about QR 2 against QR 40 to 60. With luggage or a late landing the cab is worth it, but it is a choice rather than the only option.",
  ],

  tippingHeading: "A courtesy, never compulsory.",
  tipping: "Tipping in Qatar is genuinely optional and nothing like the US convention. Read the bill first: restaurants and hotels commonly add a service charge, and because there is no VAT in Qatar that percentage is a service charge rather than a tax, so where it appears you have already paid for service. Where there is none, rounding up or leaving a small amount is welcome and no one is counting. Taxi drivers do not expect a tip, and Hamad International's own guidance describes rounding up for a helpful driver as a courtesy rather than an expectation. The one rule worth following: tip in cash, in small riyal notes, because in a city where you can tap for everything else, cash is what actually reaches the person who served you.",

  sources: {
    changed: "First published August 2026. Verified at this check: the riyal's peg at QR 3.64, fixed since 1980 and formalised by Amiri Decree No. 34 of 2001, plus the roughly 0.24% margin banks add for the public, against the Qatar Central Bank; the absence of VAT or any sales tax against PwC Worldwide Tax Summaries and Grant Thornton; the US entry terms of a two-year multiple-entry stamp with 90 days per stay, and the Qatar and Oman joint visa, against Qatar Tourism's own visa checker; and 999 as the single emergency number against the Ministry of Interior. Also recorded: the US State Department has Qatar at Level 3, Reconsider Travel, following the February 2026 hostilities between the United States and Iran, with an ordered departure dated March 2, 2026 and routine consular services suspended at the embassy in Doha.",
    links: [
      { label: "Qatar Central Bank: exchange rate policy, the 3.64 peg and the public margin", url: "https://www.qcb.gov.qa/en/Pages/MonetaryPolicyTools.aspx", type: "gov" },
      { label: "Visit Qatar: the official visa checker, US terms and the Qatar-Oman joint visa", url: "https://visitqatar.com/intl-en/plan-your-trip/visas", type: "gov" },
      { label: "PwC Worldwide Tax Summaries: Qatar imposes no VAT or sales tax", url: "https://taxsummaries.pwc.com/qatar/individual/other-taxes", type: "revenue" },
      { label: "US Department of State: Qatar country information and the current travel advisory", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Qatar.html", type: "gov" },
    ],
    judgment: "The peg, the no-VAT position, the entry terms and the emergency number are official and linked above. Two things are deliberately imprecise. Hotel service charge practice we could not pin down: the current sources range from 10% plus a municipality fee to one major Doha hotel stating that nothing is added to its quoted rates, so we describe the variance rather than average it into a number. And the metro and taxi figures are drawn from secondary sources rather than a published tariff we could open, so they are written as approximations. Careem's exit is reported with dates by multiple current sources while the pages still listing it do so in generic boilerplate, and we have called it accordingly. The daily cash share, the suggested float and the tipping norms are our own read from experience, not published data.",
  },

  faqs: [
    { q: "Do I need cash in Qatar?", a: "Only a little. Cards and phone payments cover hotels, malls, restaurants, supermarkets, the metro and most Karwa taxis. Keep QR 100 to 200 in small notes for Souq Waqif stalls and tipping, which is the one thing cash still does better." },
    { q: "Can I use US dollars in Qatar?", a: "Not as everyday money. Some hotels and tour desks accept them at their own rate, but shops, restaurants and taxis deal in riyals. Because the riyal is pegged to the dollar, paying in dollars gains you nothing and costs you the markup." },
    { q: "Does Qatar have VAT or a tourist tax?", a: "No. Qatar has no VAT, no sales tax and no tourist or hotel tax, so the quoted price is the final price and there is no refund to claim at the airport. A percentage on a bill is a service charge set by the business, not a government levy." },
    { q: "What is the Qatari riyal worth?", a: "It is pegged at QR 3.64 to one US dollar, fixed since 1980, so one riyal is about 27 cents and QR 100 is about 27 dollars. Banks add a margin of about 0.24% to the official rate when dealing with the public." },
    { q: "Do US citizens need a visa for Qatar?", a: "No. You get a free entry stamp on arrival, valid two years or until your passport expires, with multiple entries and up to 90 days per stay. You need a passport valid three months from arrival and a confirmed hotel booking." },
    { q: "Does Uber work in Doha?", a: "Yes, and it has since 2014. Careem does not: it closed its Qatar operation in February 2023, though many travel pages still list it. You can also book a Karwa taxi through the Uber app using the Taxi option." },
    { q: "What is the cheapest way into Doha from the airport?", a: "The Doha Metro, at around QR 2 for a standard journey, roughly 55 cents, reaching Msheireb and West Bay in about half an hour on the Red Line. You need a Darb card, about QR 10. A metered taxi is commonly QR 40 to 60." },
    { q: "What is the emergency number in Qatar?", a: "999, covering police, fire and ambulance on one number, 24 hours, in several languages. Dialling 112 from a mobile redirects to it. Emergency medical treatment is provided free of charge to anyone who needs it, visitors included." }
  ],

  culture: {
    heading: "A few words of Arabic go a long way",
    intro: "Arabic is the language and English is everywhere in Doha, so you will never be stuck. A greeting offered in Arabic still changes the temperature of an exchange, particularly outside the malls.",
    phrases: [
      { mean: "Hello, peace be upon you", say: "as-sa-LAAM-u a-LAY-kum", word: "As-salamu alaykum", native: "السلام عليكم" },
      { mean: "Hello, welcome", say: "MAR-ha-ba", word: "Marhaba", native: "مرحبا" },
      { mean: "Please", say: "min FAD-lak", word: "Min fadlak", native: "من فضلك" },
      { mean: "Thank you", say: "SHOOK-ran", word: "Shukran", native: "شكراً" },
      { mean: "How much is it?", say: "bi-KAM HA-tha", word: "Bikam hatha", native: "بكم هذا" },
      { mean: "No thank you", say: "laa SHOOK-ran", word: "La shukran", native: "لا شكراً" },
    ],
    tip: "The drink you will be offered constantly is <b>karak</b>, strong milky tea with cardamom, sold from hatches for a riyal or two and genuinely part of daily life here. In a home or a majlis it will be <b>gahwa</b>, pale cardamom coffee poured short, with <b>dates</b>. Accepting a cup counts for more than any tip.",
    stories: [
      { img: "/qatar-culture-1.jpg",
        alt: "WPA-style illustration of the ruined pearling town of Al Zubarah on the north Qatari coast, low coral-stone walls and the square outline of a fort with corner towers standing in flat pale desert beside a shallow turquoise sea, with a wooden pearling dhow anchored offshore",
        h: "The town the pearls built, and emptied",
        p: "Before gas, Qatar lived on pearls. Al Zubarah on the northern coast was one of the Gulf's great pearling and trading towns, and when Japanese cultured pearls collapsed the market in the 1930s the whole economy went with it. The town was abandoned to the sand, which is exactly why it survived: it is now Qatar's only UNESCO World Heritage site and one of the best-preserved pearling settlements anywhere.",
        note: "Good to know: cultured pearls did in a century what no war managed" },
      { img: "/qatar-culture-2.jpg",
        alt: "WPA-style illustration of a Bedouin woman in a long dark thobe and headscarf seated at a low ground loom outside a black goat-hair tent, weaving a band of red, black, white and brown geometric Al Sadu patterning, with wool skeins beside her and a camel resting on pale sand behind",
        h: "Geometry woven on the ground",
        p: "Al Sadu is the Bedouin weaving of the Gulf, done on a loom laid flat on the ground, in sheep wool and camel hair dyed red, black, white and brown. The patterns are not decorative filler: they carry family and tribal markers, and the craft was traditionally passed from women to daughters alongside the skills of striking and pitching a tent. UNESCO lists it as intangible cultural heritage.",
        note: "Say it: SA-doo, and the patterns are read, not just looked at" },
      { img: "/qatar-culture-3.jpg",
        alt: "WPA-style illustration of Khor Al Adaid in southern Qatar, tall crescent dunes running down into a still turquoise saltwater inlet with wind-carved ripples in the sand, small robed figures and camels silhouetted on the dune crest and flamingos wading in the shallows",
        h: "Where the sea runs into the desert",
        p: "Khor Al Adaid, the inland sea, is a tidal saltwater inlet in the south that the dunes run straight down into. There is no road to most of it and you reach it across the sand, which is part of why it feels remote in a country you can drive across in two hours. Flamingos work the shallows and the water changes colour through the day.",
        note: "Good to know: it is a UNESCO-recognised nature reserve, not a resort strip" },
    ],
  },
};
