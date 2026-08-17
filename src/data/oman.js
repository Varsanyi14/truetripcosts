// Oman money guide.
//
// Verified August 2026 against: the Central Bank of Oman fixed-peg page, the Oman Ministry
// of Foreign Affairs entry-visa page, the Royal Oman Police eVisa portal, gov.om for the
// emergency number and the 4% tourism tax, and PwC / the Oman Tax Authority for the 5% VAT.
// The 5% municipality charge on hotel occupancy is from secondary tax references, not a
// government page we could open: it reconciles the 14% hotel total exactly, but it is the
// softest figure in this file. Re-check it before relying on the 14%.
//
// Correction-prone facts live in F and are interpolated, so fixing one value fixes every
// sentence that uses it. See AUTHORING-GUIDES.md.

const F = {
  peg: "2.6008 dollars to the rial",
  pegPlain: "about 2.60 dollars for one rial",
  perDollar: "about 0.385 rials",
  vat: "5%",
  tourism: "4%",
  municipality: "5%",
  visaFreeDays: "14 days",
  emergency: "9999",
};

export default {
  slug: "oman",
  iso2: "om",
  live: true,
  name: "Oman",
  from: "United States",
  checked: "Aug 2026",
  checkedISO: "2026-08-02",
  emergency: { medical: F.emergency, note: "9999 is the single number for police, ambulance and fire, run through the Royal Oman Police. Dialling 112 from a foreign phone is routed through to 9999, so either works.", checked: "Aug 2026", checkedISO: "2026-08-02" },
  insuranceLevel: "medium",
  region: "Middle East",

  spokes: [
    {
      slug: "visa",
      glance: [
        { k: "Visa", v: "None for 14 days or less" },
        { k: "Longer stay", v: "eVisa from the ROP portal" },
        { k: "Passport", v: "Valid 6 months from entry" },
        { k: "Also needed", v: "Hotel booking, insurance, return ticket" }
      ],
      live: true,
      topic: "visas",
      title: "Do US citizens need a visa for Oman?",
      description: "No visa for a stay of 14 days or less, with a hotel booking, insurance and a return ticket. Longer trips need an eVisa from the Royal Oman Police.",
      h1: "Do US citizens need a visa for Oman?",
      lede: "Short answer: not for a short trip. Oman waives the visa for US citizens staying 14 days or less, provided you can show a few things at the desk. Stay longer and you apply online in advance.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: "US citizens can enter Oman <b>without a visa for stays of up to 14 days</b>. The exemption is conditional: your passport must be valid for at least <b>six months</b>, and you need a <b>confirmed hotel booking, health insurance and a return ticket</b>, plus enough money to cover your stay. The 14 days <b>cannot be extended</b> or converted into any other status. For a longer trip you apply for an <b>eVisa in advance</b> through the Royal Oman Police portal. Entry rules here have changed more than once in recent years, so check the official page before you book.",
      official: {
        label: "Oman Ministry of Foreign Affairs: entry visas and the visa exemption",
        url: "https://www.fm.gov.om/en/visitors/entry-visas/",
        note: "The Omani government's own page on who is exempt and what the exemption requires. The Royal Oman Police eVisa portal is the place to apply and the place to check the current fee.",
      },
      expediter: false,
      sections: [
        {
          h: "The 14 day exemption, and its conditions",
          icon: "passport",
          key: {
            fig: "14 days",
            tag: "No visa, but conditions apply",
            text: "The waiver is not unconditional. Turn up without a hotel booking, health insurance or a return ticket and the officer can refuse it.",
            tone: "teal"
          },
          p: [
            "Oman exempts visitors from more than 100 countries, the United States among them, from needing an entry visa for stays of up to 14 days. There is nothing to apply for and nothing to pay in advance. You arrive, you are stamped in.",
            "The conditions are the part people miss. The Ministry of Foreign Affairs lists a passport valid for no less than six months, a return ticket, a confirmed hotel reservation, health insurance, and enough money to support yourself while you are there. In practice most arrivals are waved through on a hotel booking alone, but the officer is entitled to ask for all of it, and a printed or offline copy is worth having when the airport wifi is not cooperating."
          ]
        },
        {
          h: "Staying longer than 14 days",
          icon: "plane",
          key: {
            tag: "The 14 days do not extend",
            text: "If your trip runs to 15 days, you cannot top up at the border. Apply for the eVisa before you fly.",
            tone: "amber"
          },
          p: [
            "The exemption cannot be extended and cannot be transferred to any other type of visa. That is the sharp edge: a 16 night itinerary is not a 14 day exemption plus a bit of goodwill, it is an eVisa trip, and the application happens before you travel through the Royal Oman Police portal at evisa.rop.gov.om.",
            "The portal publishes the current fee schedule and the tourist options, single entry and multiple entry, at different durations. Fees are set by the ROP and have changed, so read the number on the portal rather than one you saw quoted elsewhere, including here. The ROP asks that you apply several days ahead, because approval is not instant."
          ]
        },
        {
          h: "What this costs you, and what it does not",
          icon: "tag",
          key: {
            fig: "0 dollars",
            tag: "Short trips",
            text: "There is no fee, no online form and no third-party service needed for a stay of 14 days or less.",
            tone: "teal"
          },
          p: [
            "For a two week trip the entry cost is zero. You do not need a visa agency, an expediter or a paid application service, and any site charging you for a 14 day Omani entry permit is selling you something you do not need.",
            "If you do need the eVisa, apply directly on the government portal. Third-party sites will file the same application for a markup, and the ROP is the only body that can actually issue the thing."
          ]
        },
        {
          h: "The one to check before you book",
          icon: "alert",
          key: {
            tag: "Rules move",
            text: "Oman has changed the exemption length and the eligible-country list more than once. Check the official page close to your travel date.",
            tone: "amber"
          },
          p: [
            "This is the fact on the page most worth re-checking yourself. Oman ran a 10 day exemption at one point, moved to 14, and has added and removed nationalities from the list since. The Ministry page and the ROP eligibility check are the two authoritative places, and they are free to use.",
            "Separately, and unrelated to your visa, the US State Department currently has Oman at Level 3, Reconsider Travel. That does not affect whether you can enter, but it does affect flights and insurance, which is covered on the main Oman guide."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for Oman?", a: "Not for a stay of 14 days or less. Oman exempts US citizens from the entry visa for short trips, as long as your passport is valid for six months, and you have a confirmed hotel booking, health insurance and a return ticket. Longer stays need an eVisa applied for in advance." },
        { q: "Can I extend the 14 day visa exemption once I am in Oman?", a: "No. The Ministry of Foreign Affairs is explicit that the 14 day exemption cannot be extended or transferred to any other visa type. If your trip is longer than 14 days, apply for the eVisa before you travel." },
        { q: "How much does an Oman eVisa cost?", a: "The Royal Oman Police sets the fee and publishes the current schedule on its eVisa portal, with different prices for single entry and multiple entry and for different durations. Fees have changed, so take the figure from the portal rather than from any guide, this one included." },
        { q: "Is there a visa on arrival in Oman?", a: "Visa on arrival is no longer the standard route. Eligible nationalities, including US citizens on short trips, enter under the visa exemption instead, and everyone else applies for the eVisa online in advance." }
      ],
      sources: {
        links: [
          { label: "Oman Ministry of Foreign Affairs: entry visas, the exemption and its conditions", url: "https://www.fm.gov.om/en/visitors/entry-visas/", type: "gov" },
          { label: "US Department of State: Oman country information and the current travel advisory", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Oman.html", type: "gov" }
        ],
        judgment: "The 14 day exemption and its conditions come straight from the Omani Ministry of Foreign Affairs page. We have deliberately not printed an eVisa fee, because the published figures we found were from secondary sources of varying dates and the ROP portal is the only current number. Our read that most arrivals are asked for the hotel booking and little else is experience, not policy.",
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Omani rial (OMR), pegged to the dollar" },
        { k: "Cards", v: "Fine in malls, hotels, chains" },
        { k: "Still cash", v: "Souks, small taxis, rural stops" },
        { k: "Watch", v: "1 rial is about 2.60 dollars" }
      ],
      live: true,
      topic: "cash",
      title: "Cash or card in Oman? What actually works",
      description: "Cards cover Muscat hotels, malls and supermarkets. The souks, small taxis and rural Oman still run on cash. The rial is pegged, so the rate holds.",
      h1: "Cash or card in Oman?",
      lede: "Oman is card-friendly where the money is modern and cash-first where it is traditional, and the split is easy to predict. Here is what to carry and where the card stops working.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: `Carry <b>both</b>. Hotels, malls, supermarkets, chain restaurants and fuel stations in Muscat and Salalah take <b>Visa and Mastercard</b> without fuss. <b>Muttrah souk, small independent cafes, roadside stops and most short taxi rides expect cash</b>, and outside the cities cash is simply the default. The rial is pegged at ${F.peg}, so the rate you get is stable, and the only real money leak is a terminal offering to charge you in dollars. Say no to that every time.`,
      sections: [
        {
          h: "Where the card works, and where it stops",
          icon: "card",
          key: {
            fig: "Both",
            tag: "Not a cashless country yet",
            text: "Cards are normal in Muscat's malls and hotels. The souk, small taxis and rural Oman are still cash, and that does not look like changing soon.",
            tone: "teal"
          },
          p: [
            "In Muscat, Salalah and the larger towns, a no-foreign-fee Visa or Mastercard covers hotels, malls, supermarkets, fuel and the kind of restaurant that has a printed menu. Contactless is common. Amex is thinner, accepted at international hotel brands and not much else, so do not make it your only card.",
            "The line is easy to feel once you are there. Muttrah souk, the small cafes, the man selling dates from a cool box, a taxi you flagged on the street: all cash. So is most of the interior. If your day involves a wadi, a mountain road or a village, assume nothing takes plastic and carry accordingly."
          ]
        },
        {
          h: "The rial, and the decimal that catches people",
          icon: "coins",
          key: {
            fig: "1 rial = $2.60",
            tag: "Read the price twice",
            text: "The rial is one of the strongest currency units in the world and splits into 1,000 baisa, so prices carry three decimals.",
            tone: "amber"
          },
          p: [
            `The Omani rial has been fixed at ${F.peg} since 1986, which makes it one of the highest-valued currency units anywhere. For mental math, ${F.pegPlain}, so multiply rial prices by roughly 2.6 to get dollars. A dollar buys ${F.perDollar}.`,
            "The rial divides into 1,000 baisa, not 100, so prices are written to three decimal places. A tag reading 3.500 is three and a half rials, about nine dollars, not three dollars fifty. Notes run 100 baisa and half a rial up through 1, 5, 10, 20 and 50 rials, and a 50 rial note is about 130 dollars, which is a lot to hand a taxi driver. Break the big notes at a supermarket."
          ]
        },
        {
          h: "Getting rials, and the dollar question",
          icon: "atm",
          key: {
            tag: "Never accept dollars pricing",
            text: "If a card terminal or ATM offers to bill you in US dollars, decline. The padded rate costs you several percent on a currency that is pegged anyway.",
            tone: "amber"
          },
          p: [
            "Bank ATMs are common in Muscat, at the airport and in every decent-sized town, and foreign cards work in them normally. Withdraw a reasonable amount at once rather than making several small pulls, because operator fees and your own bank's flat charge do not care how little you take out. Rates move and fee schedules vary by bank, so check the screen before you confirm.",
            "US dollars are not the everyday currency here and you should not plan to spend them. Some hotels and tour operators will quote or accept dollars, but at a rate they set. Since the rial is pegged to the dollar, there is nothing to gain from paying in dollars and something to lose, so pay in rials and let your own bank do the conversion."
          ]
        },
        {
          h: "What to actually carry",
          icon: "cash",
          key: {
            fig: "20 to 40 rials",
            tag: "A working float",
            text: "That is roughly 50 to 100 dollars, enough for souk buys, taxis and coffee for a couple of days without walking around with a brick of cash.",
            tone: "teal"
          },
          p: [
            "A float of 20 to 40 rials in small notes covers the cash side of a normal day or two, and small notes matter more than the total. Nobody in the souk wants to break a 50.",
            "Top up at an ATM rather than an exchange desk where you can. If you do use an exchange, the ones in Muscat's malls tend to be competitive and post their rates openly, and there is no legal parallel market to hunt for here."
          ]
        }
      ],
      faqs: [
        { q: "Can I use US dollars in Oman?", a: "Not as everyday money. Some hotels and tour operators will take dollars at their own rate, but shops, taxis and restaurants deal in rials. Since the rial is pegged to the dollar, paying in dollars only costs you the markup." },
        { q: "How much cash should I carry in Oman?", a: "Around 20 to 40 rials, roughly 50 to 100 dollars, in small notes for a day or two of souk purchases, taxis and coffee. Top it up at a bank ATM rather than carrying a large stack." },
        { q: "Are credit cards widely accepted in Oman?", a: "In Muscat and Salalah, yes: hotels, malls, supermarkets, chains and fuel stations all take Visa and Mastercard. Muttrah souk, small independents, short taxi rides and rural Oman are cash. Amex acceptance is limited to bigger hotels." },
        { q: "Why is the Omani rial worth more than the dollar?", a: "It has been pegged at 2.6008 dollars to one rial since 1986, which makes it one of the highest-valued currency units in the world. It also splits into 1,000 baisa rather than 100, which is why prices carry three decimal places." }
      ],
      sources: {
        links: [
          { label: "Central Bank of Oman: the fixed peg of the rial to the US dollar, unchanged since 1986", url: "https://cbo.gov.om/Pages/FixedPeg.aspx", type: "gov" },
          { label: "Oman Tax Authority: the VAT portal, laws and refund procedures", url: "https://tms.taxoman.gov.om/portal/web/taxportal/vat-tax", type: "revenue" }
        ],
        judgment: "The peg at 2.6008 and the 1,000 baisa subdivision are official and stable. Where cards stop working, how much cash is a sensible float, and which ATMs behave best are our estimate from experience rather than published figures, and ATM operator fees in particular vary by bank and change without notice.",
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Expected", v: "No, not in the US sense" },
        { k: "Restaurants", v: "Check for a service charge first" },
        { k: "Taxis", v: "Round up, nothing more" },
        { k: "Best form", v: "Small rial notes, in cash" }
      ],
      live: true,
      topic: "tipping",
      title: "Do you tip in Oman? What is actually expected",
      description: "Tipping is appreciated, not expected, and bills often carry a service charge already. Round up, keep small rial notes, skip the US percentages.",
      h1: "Do you tip in Oman?",
      lede: "Oman does not run on tips. Service is usually either included on the bill or simply not charged for, and the honest answer is that you can tip small or not at all without causing offence.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: "Tipping in Oman is <b>appreciated but not expected</b>, and nothing like the US norm. Check the bill first: hotels and mid to upper restaurants commonly add a <b>service charge</b>, and where one is present you are done. Where there is none, <b>rounding up or leaving a small note</b> is generous. Taxi drivers do not expect a tip and rounding the fare up is plenty. Cash in small rial notes is the useful form, because a tip added to a card slip does not reliably reach the person who served you.",
      sections: [
        {
          h: "Read the bill before you decide",
          icon: "receipt",
          key: {
            tag: "Service charge first",
            text: "Hotels and tourist-area restaurants commonly add a service charge on top of the listed price, alongside tax. Look for it before you add anything.",
            tone: "teal"
          },
          p: [
            "The first move in any restaurant here is to read the bottom of the bill. Hotels and the sort of restaurant a visitor eats in will often show a service charge as a separate line, together with the government charges. Where that line exists, the tipping question is already answered and anything further is genuinely optional.",
            "Where no service charge appears, and in the small local places where it usually does not, rounding up to the next convenient note is normal and welcome. There is no percentage you are supposed to hit, and no one is counting."
          ]
        },
        {
          h: "What people actually do",
          icon: "tip",
          key: {
            fig: "Round up",
            tag: "The whole convention",
            text: "Taxi fares get rounded up rather than tipped on. Hotel porters and housekeeping get a small note. That is most of it.",
            tone: "teal"
          },
          p: [
            "Taxi drivers do not expect a tip. Rounding the fare up to the nearest half rial or rial is the normal gesture and it is treated as courtesy rather than payment. Agreeing the fare honestly at the start matters far more to a driver than anything you add at the end.",
            "For a hotel porter or a housekeeper, a small note left in cash is the customary thanks. For a guide or a driver who has given you a full day, a larger note is a real thank you and is genuinely appreciated, but it is your call and not a fee you have quietly incurred."
          ]
        },
        {
          h: "Do not import the US math",
          icon: "notip",
          key: {
            tag: "No 20% rule",
            text: "Applying a US tipping percentage here does not read as generous so much as unfamiliar with the place. Small and cash beats large and calculated.",
            tone: "amber"
          },
          p: [
            "Nobody in Oman is working for tips in the way an American server is. Wages are not structured around them, and there is no social expectation that a percentage follows a meal. Tipping 20% on a restaurant bill is not the safe default, it is just a large gift.",
            "Cash is the form that works. If you add a tip to a card payment, whether it reaches the individual depends entirely on the establishment, and small rial notes in a hand do not have that problem. Keep a few 1 rial notes for exactly this."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Oman?", a: "It is appreciated but not expected. Check the bill for a service charge first, because hotels and tourist restaurants often add one. Where there is none, rounding up or leaving a small note is generous." },
        { q: "How much do you tip a taxi driver in Oman?", a: "Nothing is expected. Rounding the fare up to the nearest half rial or rial is the normal gesture, and agreeing the fare fairly at the start matters more to the driver than anything added at the end." },
        { q: "Should I tip in cash or on the card in Oman?", a: "Cash, in small rial notes. Whether a tip added to a card slip reaches the person who served you depends on the establishment, and cash removes the question." },
        { q: "Is a service charge the same as a tip in Oman?", a: "Not exactly, but in practice it settles the question. Where a service charge already appears on your bill, you have paid for service and anything further is optional rather than expected." }
      ],
      sources: {
        links: [
          { label: "Gov.om: the 4% tourism tax that restaurants and hotel establishments pay under the Tourism Law", url: "https://gov.om/en/w/pay-the-4-tourism-tax-for-restaurants-and-hotel-establishments", type: "gov" },
          { label: "Oman Tax Authority: VAT in the Sultanate of Oman, laws and procedures", url: "https://tms.taxoman.gov.om/portal/web/taxportal/vat-tax", type: "revenue" }
        ],
        judgment: "The tourism tax and VAT that appear on your bill are official. Whether a given restaurant adds a discretionary service charge on top varies by establishment, and the tipping norms described here are our read of common practice rather than a published standard. We have deliberately not given a percentage, because there is not one.",
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Uber", v: "Does not operate in Oman" },
        { k: "Local apps", v: "OTaxi, Marhaba, OmanTaxi" },
        { k: "Street taxis", v: "Orange and white, agree the fare" },
        { k: "Airport", v: "Use a licensed pickup, not a tout" }
      ],
      live: true,
      topic: "taxis",
      title: "Taxis in Oman: apps, meters and airport fares",
      description: "Uber does not operate in Oman. Licensed apps like OTaxi and Marhaba do, street taxis often skip the meter, and the airport has its own service.",
      h1: "Taxis and ride-hailing in Oman",
      lede: "Getting around Muscat means taxis, because there is no metro and the city is strung out along 50 kilometers of coast. The apps are local, the meters are inconsistent, and the fix is simple.",
      checked: "Aug 2026",
      checkedISO: "2026-08-02",
      answer: "<b>Uber does not operate in Oman.</b> The Ministry of Transport licenses a set of local on-demand taxi apps instead, including <b>OTaxi, Marhaba and OmanTaxi</b>, and these quote a price in the app before you ride, which removes the negotiation. Street taxis are the orange and white cars, and while Muscat fares are meant to be metered, in practice many drivers do not use the meter, so <b>agree the fare before you get in</b>. At Muscat airport, use the authorized pickup service or a pre-booked transfer rather than whoever approaches you in arrivals.",
      sections: [
        {
          h: "The apps that actually exist here",
          icon: "taxi",
          key: {
            fig: "No Uber",
            tag: "Local apps instead",
            text: "The Ministry of Transport has licensed a set of on-demand taxi apps, OTaxi and Marhaba among them, which fix the price before the trip starts.",
            tone: "teal"
          },
          p: [
            "Uber does not run in Oman, so do not land expecting it. The Ministry of Transport, Communications and Information Technology licensed a group of on-demand taxi apps, including OTaxi, Marhaba, Tasleem, Ubar, Hala Taxi, Tanweel and a women-only service, and the licensed apps show a fixed price before the trip rather than running a meter.",
            "Reports differ on whether Careem is currently operating in Muscat, and we could not settle it to our own satisfaction at this check: some current sources list it as the default app for expatriates and others say flatly that it does not operate. Treat it as a maybe, download OTaxi or Marhaba before you fly, and see what your app store offers when you land."
          ]
        },
        {
          h: "Street taxis and the meter question",
          icon: "alert",
          key: {
            tag: "Agree the fare first",
            text: "Muscat taxis are supposed to be metered, but many drivers will not use one. Settle the number before the door closes, not after.",
            tone: "amber"
          },
          p: [
            "The orange and white cars are the licensed street taxis and they are everywhere. Muscat fares are meant to be metered by law, and outside Muscat there is often no pretense of a meter at all. In both cases the practical answer is the same: ask the price to your destination before you get in, and if it sounds wrong, the next taxi is thirty seconds away.",
            "Drivers here have a good reputation and this is not a city with an aggressive scam culture around taxis. The risk is a vague fare turning into an awkward conversation at the end, not being taken for a ride. Having your destination written down, in Arabic if you can, saves a lot of pointing."
          ]
        },
        {
          h: "The airport run",
          icon: "plane",
          key: {
            tag: "Not every app can collect you",
            text: "Muscat airport pickups are restricted to authorized operators, so the cheapest city app may not be able to meet you there.",
            tone: "amber"
          },
          p: [
            "Muscat International restricts airport pickup to licensed operators, and OmanTaxi is the service authorized by the Ministry of Transport to collect from the airport and from four and five star hotels. That means the cheapest in-city app is not necessarily the one that can meet you at arrivals, which surprises people at midnight after a long flight.",
            "The taxi rank and a pre-booked transfer are both fine. Fares from the airport into central Muscat vary with distance and luggage, and the operators price by distance rather than a single flat rate, so get the number agreed or shown in the app before you load the bags. Cash and cards are both usually accepted by the licensed operators."
          ]
        },
        {
          h: "Beyond Muscat",
          icon: "wheel",
          key: {
            tag: "Apps thin out fast",
            text: "For wadis, Nizwa or the desert, the normal answer is a hired car or a private driver for the day, not a ride-hailing app.",
            tone: "teal"
          },
          p: [
            "Ride-hailing is a Muscat convenience. Once you are heading for Nizwa, Wadi Shab, the Wahiba Sands or the Musandam road, coverage thins out and getting a return ride from a remote spot is not something to gamble on.",
            "Most visitors either rent a car, which unlocks the country and is the reason many people love Oman, or hire a driver for the day at an agreed rate. Either way that is a cash-or-card conversation to have upfront, not something to sort out at a wadi with no signal."
          ]
        }
      ],
      faqs: [
        { q: "Does Uber work in Oman?", a: "No. Uber does not operate in Oman. The Ministry of Transport licenses local on-demand taxi apps instead, including OTaxi, Marhaba and OmanTaxi, which fix the fare in the app before the trip." },
        { q: "Do Muscat taxis use meters?", a: "They are supposed to, and many do not. Outside Muscat the meter is often absent altogether. Agree the fare before you get in, or use one of the licensed apps where the price is set in advance." },
        { q: "How do I get from Muscat airport to my hotel?", a: "Use the authorized airport pickup service, the official taxi rank, or a pre-booked transfer. Airport collection is restricted to licensed operators, so the cheapest city app may not be able to meet you at arrivals." },
        { q: "Can I pay for a taxi by card in Oman?", a: "In the licensed apps and with the official airport operator, usually yes, and they accept international cards. A street taxi you flagged down is a cash transaction, so keep small rial notes." }
      ],
      sources: {
        links: [
          { label: "OmanTaxi: the operator licensed by the Ministry of Transport for Muscat airport pickups", url: "http://www.omantaxi.om/", type: "gov" },
          { label: "Times of Oman: the Ministry's list of licensed on-demand taxi apps", url: "https://timesofoman.com/article/129112-eight-on-demand-taxi-apps-announced", type: "news" }
        ],
        judgment: "That Uber does not operate, and that the Ministry licenses a named set of on-demand apps, is well supported. Careem's current status in Muscat we could not confirm: reputable current sources contradict each other, so we have said so rather than pick one. Airport fare ranges vary with distance and luggage and we have not printed a figure for that reason.",
      }
    },
    {
      slug: "hotel-taxes-and-fees",
      glance: [
        { k: "On top of the room", v: "About 14%, before service" },
        { k: "VAT", v: `${F.vat}, among the lowest` },
        { k: "Tourism tax", v: `${F.tourism} under the Tourism Law` },
        { k: "Municipality", v: `${F.municipality} on hotel stays` }
      ],
      live: true,
      topic: "taxes",
      title: "Oman hotel taxes and fees: the 14% on a room",
      description: `An Oman hotel bill adds ${F.vat} VAT, a ${F.tourism} tourism tax and a municipality charge, roughly 14% before any service charge. Checked 2026.`,
      h1: "Oman hotel taxes and fees, explained",
      lede: "Short answer: Oman taxes lightly and then charges the room three separate times. No single line is large, the VAT is one of the lowest anywhere, but quoted rates commonly leave all three out and the total is not trivial. Here is what the bill actually adds.",
      checked: "Aug 2026",
      checkedISO: "2026-08-17",
      answer: `Three government charges stack on an Oman room rate, none of them big on its own. <b>VAT at ${F.vat}</b>, introduced in April 2021 and among the lowest rates in the world. A <b>${F.tourism} tourism tax</b> collected under the Tourism Law. And a <b>municipality charge</b> on hotel occupancy, which we understand to be <b>${F.municipality}</b>. Together that is roughly <b>14%</b>. Many properties then add a <b>service charge</b> of their own on top, which is not a tax and not something you can decline. There is <b>no per-night tourist tax</b> of the European kind here, and <b>no tourist VAT refund</b> you should plan around.`,
      official: {
        label: "Gov.om: the 4% tourism tax on hotels and tourist-area restaurants",
        url: "https://gov.om/en/w/pay-the-4-tourism-tax-for-restaurants-and-hotel-establishments",
        note: "The tourism tax is official, as is the 5% VAT via the Oman Tax Authority. The municipality charge on hotel stays comes from secondary tax references rather than a government page we could open, so the 14% total is a working figure. Service charges are set by each property."
      },
      sections: [
        {
          h: "Three charges, none of them large",
          icon: "receipt",
          key: { fig: "About 14%", tag: "Before any service charge", text: "Five percent VAT, a 4% tourism tax and a municipality charge on hotel occupancy. No single line stands out, which is exactly why the total surprises people.", tone: "teal" },
          p: [
            `Oman's <b>VAT is ${F.vat}</b>, introduced in April 2021 and one of the lowest rates anywhere, well under Saudi Arabia's 15% and Bahrain's 10%. Beside it sit two more government charges on accommodation: a <b>${F.tourism} tourism tax</b> under the Tourism Law, and a <b>municipality charge</b> on hotel occupancy that we understand to be <b>${F.municipality}</b>. The three together land a room at roughly <b>14%</b> over the quoted rate.`,
            "This is the shape worth internalising. Oman is a genuinely low-tax country whose hotel bills are not especially low, because the charges are layered rather than large. Nobody argues about a 4% line. Three of them together are a different matter, and quoted rates here commonly exclude the lot."
          ]
        },
        {
          h: "The tourism tax reaches past hotels",
          icon: "coins",
          key: { fig: "4%", tag: "Hotels and tourist restaurants", text: "The tourism tax is not only on beds. It applies to restaurants in designated tourist areas too, which is why a meal in a tourist district costs more than the same food outside one.", tone: "teal" },
          p: [
            `The <b>${F.tourism} tourism tax</b> is collected under the Tourism Law and it is not confined to accommodation: it also applies to <b>restaurants in designated tourist areas</b>. A meal in a hotel or a tourist district therefore carries 5% VAT plus the 4% tourism tax, around 9%, while a local cafe outside those areas will usually just charge the price on the board.`,
            "This is useful for reading a bill rather than disputing one. If you see a 4% line on a restaurant receipt in Muscat or Salalah, it is a real government charge and not an invention of the restaurant."
          ]
        },
        {
          h: "The service charge is the variable",
          icon: "usd",
          key: { fig: "Varies", tag: "Set by each property", text: "The service charge is the hotel's own, it is not legislated, and the rate is not standard across properties. Where a bill already shows one, the tipping question is largely settled.", tone: "amber" },
          p: [
            "On top of the 14% in government charges, many properties add a <b>service charge</b> of their own. This one is <b>not a tax</b>, it is set by the hotel rather than by law, and the rate is not standard, so we are not printing a figure that would only be right for some places. It is normally not something you can decline.",
            "There is a practical upside. Where a service charge is already on the bill, the tipping question is largely answered, which is the convention across Oman generally. See the <a href=\"/oman/tipping\">Oman tipping guide</a> for how that works in restaurants and taxis."
          ]
        },
        {
          h: "No refund desk you should count on",
          icon: "refund",
          key: { fig: "No refund", tag: "Plan without it", text: "Oman's VAT framework provides for refunds in various circumstances, but we could not confirm an operating tourist scheme with airport desks and a minimum spend. Assume the 5% is a cost.", tone: "teal" },
          p: [
            "Be realistic here. Oman's VAT framework does provide for refunds in various circumstances, and some third-party pages describe a tourist refund process in generic terms, but at this check we could not confirm an <b>operating tourist scheme</b> of the kind the UAE runs through Planet, with staffed airport desks and a published minimum spend. <b>Assume you cannot reclaim the 5%</b>, and treat any refund a retailer offers as a bonus rather than a plan.",
            "The one question worth asking at booking is whether the quoted rate is <b>all-in</b>, because Omani rates often are not and 14% on a week of rooms is worth knowing about in advance. For cards, cash and the rial's unusually large notes, see the <a href=\"/oman\">Oman money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "How much tax is on a hotel room in Oman?", a: "Roughly 14% in government charges: 5% VAT, a 4% tourism tax under the Tourism Law, and a municipality charge on hotel occupancy which we understand to be 5%. Many hotels then add a service charge of their own on top, which is not a tax. Quoted rates often exclude all of it, so ask whether yours is all-in." },
        { q: "Does Oman have a tourist tax per night?", a: "No, not in the European sense. There is no flat per-person or per-room nightly bed tax of the kind Bahrain or much of Europe charges. Oman's charges are percentages of the room rate instead: 5% VAT, a 4% tourism tax and a municipality charge on hotel stays, which is why the total scales with how expensive your room is." },
        { q: "What is the 4% tourism tax in Oman?", a: "A government charge collected under the Tourism Law from hotel establishments and from restaurants in designated tourist areas. It sits alongside the 5% VAT, so a hotel meal or a meal in a tourist district commonly carries about 9% in government charges. A local cafe outside those areas will usually just charge the listed price." },
        { q: "Can tourists claim VAT back in Oman?", a: "You should not plan on it. Oman's VAT law provides for refunds in various circumstances, but at this check we could not confirm an operating tourist refund scheme with airport desks and a minimum spend of the sort the UAE and Saudi Arabia run. Budget as though the 5% is part of the price. Hotel VAT would not be refundable anyway, since these schemes cover goods you export." }
      ],
      sources: {
        links: [
          { label: "Gov.om: the 4% tourism tax paid by restaurants and hotel establishments", url: "https://gov.om/en/w/pay-the-4-tourism-tax-for-restaurants-and-hotel-establishments", type: "revenue" },
          { label: "Oman Tax Authority: the VAT portal, laws and refund procedures", url: "https://tms.taxoman.gov.om/portal/web/taxportal/vat-tax", type: "revenue" }
        ],
        judgment: "The 5% VAT and the 4% tourism tax are official and linked above. The municipality charge on hotel occupancy, and therefore the roughly 14% total, rests on secondary tax references rather than a government page we could open: it is the softest figure on this page, and it is worth noting that it reconciles the 14% exactly, which is corroboration rather than proof. The service charge is set by each property and we have deliberately not printed a rate for it. That we could not confirm an operating tourist VAT refund scheme is a statement about what we could verify. Checked August 2026."
      }
    }
  ],

  signals: { cardFriendliness: 4, cashNeed: 3, taxRisk: 2, atmRisk: 2 },
  hook: "One of the strongest currency units in the world, pegged to the dollar, and a souk economy that still wants cash.",
  aliases: ["oman", "muscat", "salalah", "omani rial", "omr", "nizwa", "muttrah", "sultanate of oman"],

  title: "Do you need cash in Oman? Rials, cards and ATMs",
  description: "Cards cover Muscat hotels and malls, the souks and small taxis still want rials. The rial is pegged to the dollar, so the rate holds all trip.",
  h1: "Money in Oman, sorted.",
  lede: "A calm, current plan for the money side of your trip: how the rial works, where the card stops, what the hotel bill adds on top, and what nobody quotes you until you are standing there.",

  hero: {
    img: "/oman-hero.jpg",
    h: 1375,
    alt: "A quiet old-town lane in Muscat at golden hour with whitewashed and sand-toned buildings, carved teak doors and iron lantern sconces, a mosque with a blue and gold dome and slim minaret beyond, bare rocky mountains behind the rooftops, string lights overhead, a figure in a white dishdasha and embroidered kuma cap walking away up the lane, and a brass dallah coffee pot with two cups of kahwa, a plate of amber Omani halwa, a bowl of dates and grilled fish with saffron rice on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: `Oman is straightforward money once you know the split. <b>Cards work</b> across Muscat and Salalah hotels, malls, supermarkets and chains. <b>Cash still runs</b> the souks, the small taxis and everywhere rural. The rial is <b>pegged at ${F.peg}</b>, so nothing moves against you mid-trip, and the only common leak is a terminal offering to bill you in dollars. The two things to plan for are the <b>hotel add-ons</b>, roughly 14% of taxes and fees on top of the room rate, and the fact that a <b>50 rial note is about 130 dollars</b>, so break the big ones early.`,

  meter: {
    heading: "More cash than the UAE, less than you would guess from the souk photos.",
    cashPct: 35,
    note: "A rough feel for everyday spending rather than a measured figure. Muscat's malls, hotels and supermarkets are fully carded and contactless is normal, but Muttrah souk, small cafes, street taxis and the whole interior still deal in rials, and a visitor's itinerary tends to include more of that traditional side than a resident's week does.",
  },

  trio: [
    {
      sym: "card",
      kind: "ok",
      h: "Your card",
      verd: "Works across the modern side",
      p: "Visa and Mastercard are accepted at hotels, malls, supermarkets, fuel stations and chain restaurants in Muscat and Salalah, and contactless is normal. Amex is thin outside international hotel brands, so do not travel on it alone.",
      cta: { label: "Check yours", href: "#calc" }
    },
    {
      sym: "cash",
      kind: "warn",
      h: "Cash",
      verd: "Still needed daily",
      p: "Muttrah souk, small independents, roadside stops and short taxi rides are cash. A float of 20 to 40 rials in small notes covers a day or two comfortably, and small notes matter more than the total.",
      cta: { label: "How much to carry", href: "/oman/cash-or-card" }
    },
    {
      sym: "atm",
      kind: "ok",
      h: "ATMs",
      verd: "Common and card-friendly",
      p: "Bank ATMs are everywhere in Muscat, at the airport and in any decent-sized town, and foreign cards work normally. Take a larger amount less often, and always decline the offer to be charged in dollars.",
      cta: { label: "Find one", href: "#atm" }
    }
  ],

  plan: [
    {
      sym: "tag",
      when: "Before you go",
      bullets: [
        "Bring a <b>no-foreign-fee card</b> and add it to <b>Apple Pay or Google Pay</b>, which is accepted anywhere a modern terminal is.",
        "Download <b>OTaxi or Marhaba</b> before you fly, because <b>Uber does not operate in Oman</b> and you do not want to be solving that in arrivals.",
        "If your trip runs past <b>14 days</b>, apply for the <b>eVisa</b> on the Royal Oman Police portal in advance. The exemption cannot be extended once you are here."
      ],
      cta: { label: "See no-fee card options", tag: "earn", href: "#" }
    },
    {
      sym: "plane",
      when: "Landing",
      bullets: [
        "Pull <b>20 to 40 rials</b> from a bank ATM in the terminal, and <b>decline the dollar conversion</b> when the screen offers it.",
        "Use the <b>authorized airport pickup</b> or a pre-booked transfer. Not every city app is licensed to collect at the airport.",
        "Have your hotel booking, insurance and return ticket to hand at immigration. They are conditions of the visa exemption, not decoration."
      ],
      cta: { label: "Airport taxis, honestly", href: "/oman/taxis-and-apps" }
    },
    {
      sym: "bowl",
      when: "Day to day",
      bullets: [
        "Card the hotel, the mall and the supermarket. <b>Cash the souk, the small cafe and the flagged taxi.</b>",
        "Read prices carefully: the rial splits into <b>1,000 baisa</b>, so <b>3.500 is three and a half rials</b>, about nine dollars.",
        "Check the bill for a <b>service charge</b> before tipping. Where one is there, you are done."
      ],
      cta: { label: "Tipping, plainly", href: "/oman/tipping" }
    },
    {
      sym: "receipt",
      when: "Checking out",
      bullets: [
        "Expect roughly <b>14% in taxes and fees</b> on a hotel room: 5% VAT, a 4% tourism tax and a municipality charge, plus any service charge.",
        "Ask whether the rate you booked was <b>all-in</b>. Quoted rates here are often before the add-ons.",
        "Pay in <b>rials</b>, not dollars, on the final bill. The peg means dollar pricing only adds a markup."
      ],
      cta: { label: "What the bill adds", href: "#tax" }
    }
  ],

  cash: {
    rate: 0.385,
    cur: "OMR",
    round: 5,
    defaultIndex: 1,
    rateNote: `Effectively fixed. The Central Bank of Oman has held the peg at ${F.peg} since 1986, so a dollar buys ${F.perDollar} and that does not move during your trip. Easy mental math: multiply rial prices by roughly 2.6 for dollars.`,
    styles: [
      { n: "Budget", per: 45, cash: 0.45, room: 55 },
      { n: "Mid-range", per: 110, cash: 0.35, room: 140 },
      { n: "Comfort", per: 260, cash: 0.25, room: 320 }
    ],
  },

  connectivity: {
    works: "Yes, and it is good. Coverage from Omantel and Ooredoo is solid across Muscat, Salalah, the main highways and the tourist areas, and 5G is normal in the cities. Mountain roads, the deeper wadis and the Wahiba Sands drop out, which matters more here than in most places because the driving distances are long. Before you buy anything: check whether your US plan already includes Oman, because several do, and if it does, you may not need to buy a thing.",
  },

  tax: {
    unit: "percentOfRoom",
    currency: "OMR",
    capNights: null,
    note: `Oman has no European-style per-night tourist tax. Instead the charges stack on the bill as percentages: ${F.vat} VAT, a ${F.tourism} tourism tax under the Tourism Law, and a ${F.municipality} municipality charge on hotel stays, plus a discretionary service charge at many properties. Roughly 14% before any service charge, and quoted room rates often exclude it, so ask whether the rate is all-in.`,
    regions: [
      {
        key: "hotel",
        label: "Hotel room (VAT, tourism tax and municipality)",
        pct: 14,
        note: `${F.vat} VAT plus the ${F.tourism} tourism tax plus a ${F.municipality} municipality charge on hotel stays. Many properties add a service charge on top of this, which is not a tax, is not a standard rate and is not something you can decline.`,
      },
      {
        key: "restaurant",
        label: "Restaurant in a tourist area",
        pct: 9,
        note: `${F.vat} VAT and the ${F.tourism} tourism tax, which applies to restaurants in designated tourist areas as well as hotels. The municipality charge applies to hotel occupancy rather than meals, so it does not appear here. A local cafe outside those areas will usually just charge the price on the board.`,
      }
    ],
  },

  currencyHeading: "The rial, in plain terms.",

  facts: [
    { sym: "usd", k: "Quick conversion", v: `The rial is fixed to the US dollar at ${F.peg} and has been since 1986, so it does not move against you. Multiply rial prices by roughly 2.6 for dollars: 10 rials is about 26 dollars. A dollar buys ${F.perDollar}.` },
    { sym: "denom", k: "The three decimal places", v: "The rial splits into 1,000 baisa, not 100, so prices are written like 3.500. That is three and a half rials, about nine dollars. Misreading the decimal is the single most common money mistake visitors make here." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 100 baisa and half a rial up through 1, 5, 10, 20 and 50 rials. A 50 rial note is about 130 dollars, which almost nobody in a souk can change, so break large notes at a supermarket and keep 1 rial notes for taxis and tips." },
    { sym: "card", k: "Card country, with clear edges", v: "Hotels, malls, supermarkets, fuel and chain restaurants take Visa and Mastercard across Muscat and Salalah. Muttrah souk, small independents, street taxis and rural Oman are cash, and that boundary is easy to predict once you are looking for it." }
  ],

  taxfree: {
    label: "Taxes and refunds",
    heading: "A low 5% VAT, and no refund desk you should count on.",
    text: "Oman's <b>VAT is 5%</b>, introduced in April 2021 and one of the lowest rates anywhere. On top of it, hotels and tourist-area restaurants collect a <b>4% tourism tax</b> under the Tourism Law, and hotel stays also carry a <b>municipality charge</b>, which is why a room bill lands around 14% above the quoted rate before any service charge. <b>On refunds, be realistic.</b> Oman's VAT framework provides for refunds in various circumstances, but at this check we could not confirm an operating tourist refund scheme of the kind the UAE runs with Planet, with staffed airport desks and a minimum spend. Budget as though you cannot reclaim the 5%, and if a retailer offers you a refund route, treat it as a bonus rather than a plan.",
  },

  traps: [
    '<b>"Would you like to pay in dollars?" Always say no.</b> The rial is pegged to the dollar, so dynamic currency conversion adds a padded rate of several percent for absolutely nothing. Choose rials on every terminal and every ATM screen, and let your own bank convert.',
    "<b>Reading 3.500 as three fifty.</b> The rial has three decimal places because it splits into 1,000 baisa. That price is three and a half rials, about nine dollars. On a restaurant bill or a souk tag, this is the mistake that stings.",
    "<b>The unmetered taxi.</b> Muscat fares are supposed to be metered and often are not, and outside Muscat there is rarely a meter at all. Agree the number before you get in, or use one of the licensed apps where the price is fixed in advance. Uber is not an option here.",
    "<b>The room rate that was not the room rate.</b> Quoted hotel prices frequently exclude the 5% VAT, the 4% tourism tax, the municipality charge and a service charge. Ask whether the rate is all-in when you book, and expect roughly 14% before service if it is not.",
  ],

  tippingHeading: "Appreciated, never expected, and small.",
  tipping: "Tipping in Oman is a courtesy rather than an obligation, and it is nothing like the US convention. Check the bill first, because hotels and tourist-area restaurants commonly add a service charge, and where one is present the question is settled. Where there is none, round up or leave a small note. Taxi drivers do not expect a tip and rounding the fare up is plenty. Cash in small rial notes is the form that actually reaches the person who served you, so keep a few 1 rial notes back for the purpose. There is no percentage you are meant to hit here, and applying a US one is not the safe default.",

  sources: {
    changed: "First published August 2026. Verified at this check: the rial's peg at 2.6008 dollars, unchanged since 1986, against the Central Bank of Oman; the 14 day visa exemption for US citizens and its conditions against the Omani Ministry of Foreign Affairs; the 5% VAT against the Oman Tax Authority and PwC; the 4% tourism tax against the government service page; and 9999 as the single emergency number against the Royal Oman Police and gov.om. Also recorded: the US State Department has Oman at Level 3, Reconsider Travel, following the February 2026 hostilities between the United States and Iran, with the ordered departure of non-emergency US government staff dated March 13, 2026.",
    links: [
      { label: "Central Bank of Oman: the fixed peg of the rial to the US dollar since 1986", url: "https://cbo.gov.om/Pages/FixedPeg.aspx", type: "gov" },
      { label: "Oman Ministry of Foreign Affairs: entry visas and the 14 day exemption", url: "https://www.fm.gov.om/en/visitors/entry-visas/", type: "gov" },
      { label: "Gov.om: the 4% tourism tax on hotels and tourist-area restaurants", url: "https://gov.om/en/w/pay-the-4-tourism-tax-for-restaurants-and-hotel-establishments", type: "revenue" },
      { label: "US Department of State: Oman country information and the current travel advisory", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Oman.html", type: "gov" },
    ],
    judgment: "The peg, the VAT rate, the tourism tax, the visa exemption and the emergency number are official and linked above. The municipality charge on hotel stays, and therefore the roughly 14% total on a room bill, rests on secondary sources rather than a government page we could open, so treat the 14% as a working estimate and ask your hotel. The daily cash share, the suggested cash float, tipping norms and likely ATM behavior are our own estimate from experience, not published figures. Careem's current status in Muscat is genuinely unresolved: current sources contradict each other and we have said so rather than guess.",
  },

  faqs: [
    { q: "Do I need cash in Oman?", a: "Yes, more than in the UAE. Cards cover hotels, malls, supermarkets and chain restaurants in Muscat and Salalah, but Muttrah souk, small cafes, street taxis and the whole interior run on cash. A float of 20 to 40 rials, roughly 50 to 100 dollars, in small notes covers a day or two." },
    { q: "Can I use US dollars in Oman?", a: "Not as everyday money. Some hotels and tour operators accept dollars at a rate they set, but shops, taxis and restaurants deal in rials. Because the rial is pegged to the dollar, paying in dollars gains you nothing and costs you the markup." },
    { q: "Is the Omani rial pegged to the US dollar?", a: "Yes. The Central Bank of Oman has held the rate at 2.6008 dollars to one rial since 1986, so it does not move during your trip. That makes budgeting simple: multiply rial prices by roughly 2.6 for the dollar figure." },
    { q: "Why do Omani prices have three decimal places?", a: "Because the rial divides into 1,000 baisa rather than 100. A price written 3.500 is three and a half rials, about nine dollars. Misreading that decimal is the most common money mistake visitors make in Oman." },
    { q: "Are credit cards accepted in Oman?", a: "Visa and Mastercard are accepted across hotels, malls, supermarkets, fuel stations and chain restaurants in the cities, and contactless is normal. Amex is limited to bigger international hotels. Souks, small independents and street taxis are cash." },
    { q: "Do you tip in Oman?", a: "It is appreciated but not expected, and there is no percentage convention. Check the bill for a service charge first, because hotels and tourist restaurants often add one. Otherwise round up or leave a small note, in cash." },
    { q: "Do US citizens need a visa for Oman?", a: "Not for stays of 14 days or less, provided your passport is valid for six months and you have a confirmed hotel booking, health insurance and a return ticket. Longer stays need an eVisa from the Royal Oman Police portal, applied for before you travel." },
    { q: "What is the emergency number in Oman?", a: "9999, which covers police, ambulance and fire through the Royal Oman Police. Dialling 112 from a foreign phone is routed through to 9999, so either will reach help." }
  ],

  culture: {
    heading: "A few words of Arabic go a long way",
    intro: "Arabic is the language, and Oman has a gentler, quieter register than its neighbours. A warm Marhaba, a little patience and an accepted cup of coffee will get you further here than anywhere else in the Gulf.",
    phrases: [
      { mean: "Hello, peace be upon you", say: "as-sa-LAAM-u a-LAY-kum", word: "As-salamu alaykum", native: "السلام عليكم" },
      { mean: "Hello, welcome", say: "MAR-ha-ba", word: "Marhaba", native: "مرحبا" },
      { mean: "Please", say: "min FAD-lak", word: "Min fadlak", native: "من فضلك" },
      { mean: "Thank you", say: "SHOOK-ran", word: "Shukran", native: "شكراً" },
      { mean: "How much is it?", say: "bi-KAM HA-tha", word: "Bikam hatha", native: "بكم هذا" },
      { mean: "Delicious", say: "la-ZEEZ", word: "Lazeez", native: "لذيذ" },
    ],
    tip: "A guest is welcomed with <b>kahwa</b>, cardamom-scented coffee poured short and strong, and <b>dates</b>, and it is polite to accept at least one cup. Alongside it you will often meet <b>halwa</b>, a dense amber sweet eaten with the fingers. Accepting hospitality graciously counts for far more here than any tip.",
    stories: [
      { img: "/oman-culture-1.jpg",
        alt: "WPA-style illustration of a frankincense harvester in a white dishdasha and turban scoring the bark of a gnarled Boswellia tree in the dry Dhofar hills, pale resin hardening into golden tears and a woven basket of resin at the base of the trunk",
        h: "The scent that bought empires",
        p: "In the dry hills of Dhofar grows the Boswellia tree, and when its bark is scored it weeps a pale resin that hardens into frankincense. For thousands of years this was carried north by caravan to Egypt, Rome and Jerusalem, and it was worth its weight in gold. The Land of Frankincense is still where the best in the world comes from, and the smell of it is everywhere in Oman.",
        note: "Good to know: Dhofar frankincense was once traded gram for gram against gold" },
      { img: "/oman-culture-2.jpg",
        alt: "WPA-style illustration of a stone falaj water channel running along a terrace into a green grove of date palms, a farmer in a dishdasha crouching to open a small sluice with a wooden paddle, mud-brick village houses stepping up the rocky slope behind",
        h: "Water, shared by the clock",
        p: "Oman's mountain villages are green because of the falaj, a network of stone channels that carries water for miles from a spring or a mountain aquifer to the date gardens below. Some have run for well over a thousand years. The water is not owned so much as timed: each household holds the right to the flow for a set number of minutes, measured historically by the stars, and the system is still administered by the village.",
        note: "Good to know: several aflaj are UNESCO listed and still in daily use" },
      { img: "/oman-culture-3.jpg",
        alt: "WPA-style illustration of a wooden dhow under construction in a boatyard at Sur, the ribbed hull skeleton propped on timber blocks with two shipwrights in dishdashas planking it by hand, coiled rope and wood shavings on the sand and a finished dhow under sail beyond",
        h: "The ships that ran the ocean",
        p: "Long before the Gulf found oil, Oman was a sea power, and its wooden dhows ran the monsoon routes to India, to Zanzibar and as far as China. They were built without a single nail in the old way, planks stitched together with coconut rope. The yards at Sur still build them by hand, by eye, from templates carried in the head rather than on paper.",
        note: "Say it: the ship is a dhow, and the trade wind that drove it is the monsoon" },
    ],
  },
};
