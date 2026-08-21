import { S } from './carrier-spine.js';

export default {
  slug: "uae",
  iso2: "ae",
  live: true,
  name: "United Arab Emirates",
  from: "United States",
  checked: "Aug 2026",
  checkedISO: "2026-08-02",
  emergency: { medical: "998", note: "998 is the ambulance line and 999 is the police. The 112 and 911 numbers are not used here.", checked: "Jul 2026", checkedISO: "2026-07-01" },
  insuranceLevel: "medium",
  region: "Middle East",
  spokes: [
    {
      slug: "visa",
      glance: [
        { k: "Visa", v: "Free on arrival, nothing to apply for" },
        { k: "Stay", v: "30 to 90 days, check your stamp" },
        { k: "Passport", v: "Valid 6 months from entry" },
        { k: "Covers", v: "All seven emirates" }
      ],
      live: true,
      topic: "visas",
      title: "Do US citizens need a visa for Dubai and the UAE?",
      description: "No advance visa for US citizens: a free visa on arrival is stamped automatically. The 30 versus 90 day confusion, the passport rule, and overstay fines.",
      h1: "Do US citizens need a visa for Dubai and the UAE?",
      lede: "Short answer: no, nothing to arrange in advance. US citizens get a free visa on arrival, stamped automatically at the airport, covering all seven emirates. Here is what is actually required, and the one detail even recent guides disagree on.",
      checked: "Jul 2026",
      checkedISO: "2026-07-26",
      answer: "US citizens need <b>no visa in advance</b> for the UAE. A <b>free visa on arrival</b> is stamped into your passport automatically at any UAE airport, covering <b>all seven emirates</b> (Dubai, Abu Dhabi and the rest), so there is nothing to apply for and no fee. Guides disagree on the length: older ones say <b>30 days</b>, while the UAE Embassy has more recently cited up to <b>90 days within a 180-day period</b>, so <b>check the length written into your stamp</b> on arrival. Your passport must be valid <b>at least six months</b>, and you need a <b>return or onward ticket</b>.",
      official: {
        label: "US State Department: UAE entry and exit requirements",
        url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/UnitedArabEmirates.html",
        note: "The official US government page for UAE entry. There is nothing to apply for as a US tourist: the free visa on arrival is issued automatically. For extensions or other visa types, the UAE's own ICP and GDRFA portals are the authority, and any site selling you a UAE tourist visa in advance is offering something you do not need."
      },
      expediter: false,
      sections: [
        {
          h: "A free visa on arrival, nothing to apply for",
          icon: "passport",
          key: { tag: "Free, automatic", text: "US citizens get a free visa on arrival, stamped automatically at any UAE airport. It covers all seven emirates. There is nothing to apply for and no fee, so ignore sites selling a UAE tourist visa.", tone: "teal" },
          p: [
            "US passport holders need <b>nothing in advance</b>. You arrive, present your passport and onward ticket, and immigration stamps a <b>free visa on arrival</b>, no form and no fee. A single entry covers <b>all seven emirates</b>, so one stamp is good for Dubai, Abu Dhabi, Sharjah and the rest.",
            "Because it is free and automatic, <b>ignore any site offering to sell you a UAE tourist visa</b>. Those pre-arranged visit visas exist for nationalities that are not granted a visa on arrival, which does not include US citizens on a regular passport."
          ]
        },
        {
          h: "How long you get: check your stamp",
          icon: "calendar",
          key: { tag: "30 vs 90 days", text: "Older guides say 30 days; the UAE Embassy has more recently cited up to 90 days within 180. Sources genuinely differ, so check the length in your stamp and do not overstay it.", tone: "amber" },
          p: [
            "This is the one point even recent guides get wrong. For years the free visa on arrival was <b>30 days</b>, and many articles still say so. More recently the <b>UAE Embassy has cited up to 90 days within any 180-day period</b> for US citizens. The sources genuinely disagree, so the only safe move is to <b>check the length written into your stamp</b> when you land, and plan around that.",
            "Whatever you are given, <b>do not overstay</b>: since February 2026 the UAE charges a flat <b>AED 50 per day</b> (about $14) overstay fine with no grace period. Extensions are possible before you expire, through the UAE's <b>ICP</b> or <b>GDRFA</b> portals for a fee."
          ]
        },
        {
          h: "The passport rules that get people bounced",
          icon: "alert",
          key: { tag: "Six months, and the X marker", text: "Your passport must be valid six months from entry, enforced strictly. And the UAE does not accept passports with an X gender marker, a rule that catches some US travelers.", tone: "amber" },
          p: [
            "Two passport points to know. First, validity: your passport must be valid <b>at least six months</b> from your date of entry, and this is <b>strictly enforced</b>, you can be denied boarding if it is short, so check before booking. You also want a blank page.",
            "Second, and less known: the UAE government <b>does not accept US passports with the \"X\" gender marker</b> for travel to, through or within the country, and affected travelers have been denied boarding or entry. If that applies to you, confirm your options with the UAE Embassy before you book."
          ]
        },
        {
          h: "A couple of notes",
          icon: "tag",
          key: { tag: "Tourism only", text: "The free visa is for tourism and business visits, not working, which needs a sponsored work visa and a medical exam. Then see the money guide.", tone: "amber" },
          p: [
            "The visa on arrival covers <b>tourism and business visits</b>, not working or studying, which need a <b>sponsored residence or work visa</b> and an after-arrival medical exam. Longer tourist stays mean extending, or leaving and re-entering once your 180-day window resets.",
            "For how money works once you are there, cards, cash, the dirham and tipping, see the <a href=\"/uae\">UAE money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for Dubai or the UAE?", a: "No, nothing in advance. US citizens receive a free visa on arrival, stamped automatically at any UAE airport, which covers all seven emirates including Dubai and Abu Dhabi. There is no fee and no form. Working or long stays need a sponsored visa arranged separately." },
        { q: "How long can US citizens stay in the UAE?", a: "Sources genuinely differ. Older guidance says 30 days, while the UAE Embassy has more recently cited up to 90 days within any 180-day period. Because of this, check the exact length written into your stamp on arrival and plan around that, rather than assuming. Extensions are possible for a fee before you expire." },
        { q: "Is the UAE visa on arrival free for Americans?", a: "Yes. For US citizens on a regular passport, the visa on arrival is issued free and automatically at immigration; there is nothing to apply for or pay. Any website selling you a UAE tourist visa in advance is offering something you do not need. Pre-arranged visit visas are only for nationalities not granted a visa on arrival." },
        { q: "What happens if I overstay in the UAE?", a: "Since February 2026 the UAE charges a flat overstay fine of about AED 50 (roughly $14) per day, with no grace period, applied to every visa category including the free visa on arrival. Extend through the UAE's ICP or GDRFA portals before your stay expires, or leave and re-enter after your 180-day window resets." }
      ],
      sources: {
        links: [
          { label: "US Department of State: United Arab Emirates entry, exit and visa requirements for US citizens", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/UnitedArabEmirates.html", type: "gov" },
          { label: "US Department of State: the country information pages, the official router for entry requirements by destination", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html", type: "gov" }
        ],
        judgment: "US citizens get a free visa on arrival covering all seven emirates, and that much is stable. The allowed length is genuinely reported two ways in 2026 (30 days in older guidance, up to 90 within 180 per the UAE Embassy), so we flag both and advise checking your stamp rather than picking one. The six-month passport rule and the X-marker restriction are enforced. Checked July 2026."
      }
    },
    {
      slug: "cash-or-card",
      glance: [
        { k: "Cards", v: "Run almost everything" },
        { k: "Cash to carry", v: "About 200 to 500 dirhams" },
        { k: "The rate", v: "Pegged at about 3.67 to the dollar" },
        { k: "Watch for", v: "The pay in dollars prompt" }
      ],
      live: true,
      topic: "cash",
      title: "Cash or card in the UAE: paying in Dubai 2026",
      description: "Cards and phone wallets cover almost everything in the UAE, and the dirham is pegged to the dollar at about 3.67. The trap is the pay-in-dollars prompt.",
      h1: "Cash or card in the United Arab Emirates",
      lede: "Dubai and Abu Dhabi are close to fully cashless, so a no-fee card and your phone cover nearly everything. Here is the small amount of cash still worth carrying, and the one terminal prompt to refuse.",
      checked: "Jul 2026",
      checkedISO: "2026-07-31",
      answer: "The UAE is one of the easiest places in the world to pay as an American. <b>Cards and phone wallets run almost everything</b>: taxis, the metro, malls, restaurants and hotels. Keep roughly <b>200 to 500 dirhams</b> in cash for the souks, small local eateries and tips. The dirham is <b>pegged to the US dollar</b> at about <b>3.67 to 1</b> and has been since 1997, so the rate holds steady for your whole trip and there is no rate risk to manage. The one thing that quietly costs you money is the <b>pay in dollars</b> prompt on a card machine or ATM, which adds roughly 3 to 8%. Always choose <b>dirhams</b>.",
      sections: [
        {
          h: "Close to fully cashless",
          icon: "card",
          key: { fig: "Near cashless", tag: "Cards and phone wallets", text: "Taxis, the metro, malls, restaurants and hotels all take cards, and Apple Pay and Google Pay are widely accepted.", tone: "teal" },
          p: [
            "Dubai and Abu Dhabi are among the most cashless places you will visit. A <b>no-foreign-fee Visa or Mastercard</b>, plus <b>Apple Pay or Google Pay</b> on your phone, will cover taxis, the Dubai Metro, malls, supermarkets, restaurants, hotels and attractions. Contactless is the norm rather than the exception, and terminals are everywhere.",
            "Amex acceptance is decent at hotels and larger retailers but thinner at small independents, so do not rely on it as your only card. Bring a backup card and keep it separate from the first."
          ]
        },
        {
          h: "The cash still worth carrying",
          icon: "cash",
          key: { fig: "200 to 500 AED", tag: "Roughly 55 to 135 dollars", text: "Enough for the souks, small local eateries, taxis you cannot tap in, and tips. Anything more usually goes home unspent.", tone: "teal" },
          p: [
            "You still want a little cash, but less than most guides suggest. The places it earns its keep are the <b>souks</b>, where cash helps you bargain and stall holders prefer it, <b>small local restaurants and cafeterias</b> in older parts of Deira and Bur Dubai, and <b>tips</b>, which are best given in dirhams and handed over directly.",
            "About <b>200 to 500 dirhams</b> for a typical week is plenty. Bahraini-style haggling aside, nothing here demands a thick wallet, and dirhams are awkward to change back at home, so err on the low side and top up if you run short."
          ]
        },
        {
          h: "The peg, and the prompt that costs you",
          icon: "usd",
          key: { fig: "3.67 to 1", tag: "Fixed since 1997", text: "The dirham is pegged to the US dollar, so the rate does not move during your trip. Divide dirhams by roughly 3.7 for the dollar figure.", tone: "teal" },
          p: [
            "The dirham has been <b>pegged to the US dollar at 3.6725</b> since 1997, so unlike most destinations there is no exchange rate to watch. A price in dirhams means the same in dollars on your last day as on your first. For quick mental math, <b>divide by 3.7</b>: 100 dirhams is about 27 dollars.",
            "Because the peg already fixes the rate, <b>dynamic currency conversion</b> is pure loss. If a terminal or ATM offers to bill you in US dollars, it applies its own padded rate, typically <b>3 to 8% worse</b>, on a conversion that carries no risk in the first place. Choose <b>dirhams</b> every time and let your own bank convert.",
            "A handful of tourist-facing hotels, souk stalls and tour desks will accept US dollar bills, but they set their own rate and it is normally a poor one, so you lose on every note. Pay in dirhams or tap your card instead."
          ]
        },
        {
          h: "ATMs, exchange houses and the 5% VAT",
          icon: "atm",
          key: { fig: "5% VAT", tag: "Reclaimable on shopping only", text: "Non-residents can claim back most of the 5% VAT on goods, but not on hotels, restaurants or anything used in the country.", tone: "amber" },
          p: [
            "Bank ATMs are everywhere in malls, metro stations and hotel lobbies, and are the cleanest way to get dirhams. If you would rather change cash, use an in-mall or in-metro <b>exchange house</b> such as Al Ansari, LuLu Exchange or UAE Exchange, where rates are tight. <b>Skip the airport counters and hotel desks</b>, which can run 4 to 6% worse, and do not buy dirhams before you leave home.",
            "The UAE charges <b>5% VAT</b>. As a non-resident you can reclaim it on eligible <b>shopping</b>: spend at least 250 dirhams at a participating store, ask for the tax-free tag, and validate at a Planet kiosk before you fly, which returns roughly 85% of the VAT after the fee. VAT on hotels, restaurants and services you consume here is <b>not</b> refundable.",
            "Hotel bills carry more than the room rate. Expect the 5% VAT plus a service charge and municipality fee, and on top of that Dubai's per-night Tourism Dirham by star rating, or a 4% accommodation fee in Abu Dhabi. See the <a href='/uae'>UAE money guide</a> for the full picture, and <a href='/uae/tipping'>tipping in the UAE</a> for what to leave by hand."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in the UAE?", a: "Not much. Dubai and Abu Dhabi run almost entirely on cards and phone wallets, which cover taxis, the metro, malls and restaurants. Carry roughly 200 to 500 dirhams for the souks, small local eateries and tips, and put the rest on a card." },
        { q: "Can I pay with US dollars in Dubai?", a: "Rarely, and it costs you. Some tourist-facing hotels, souk stalls and tour desks take dollar bills, but they set their own rate and it is usually poor. Shops, taxis, the metro and restaurants price in dirhams and expect dirhams or a card. Since the dirham is pegged to the dollar, paying in dirhams carries no rate risk." },
        { q: "Should I choose dirhams or dollars on a card machine in the UAE?", a: "Always dirhams. Choosing dollars is dynamic currency conversion, which adds roughly 3 to 8% at a padded rate. The dirham is already pegged to the dollar, so there is nothing to gain and a few percent to lose." },
        { q: "Where is the best place to exchange money in the UAE?", a: "In-mall or in-metro exchange houses like Al Ansari, LuLu Exchange or UAE Exchange have tight rates. Avoid airport counters and hotel desks, which can be 4 to 6% worse, and do not buy dirhams at home before you travel. If you are mostly paying by card, you may not need to exchange at all." }
      ],
      sources: {
        links: [
          { label: "UAE Federal Tax Authority: the 5% VAT and the tourist refund scheme operated with Planet", url: "https://tax.gov.ae/en/services/tourist.vat.refunds.aspx", type: "gov" },
          { label: "US Department of State: United Arab Emirates country information for US citizens", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/UnitedArabEmirates.html", type: "gov" }
        ],
        judgment: "The dirham's peg at 3.6725 to the dollar and the 5% VAT with its Planet refund route are official and stable. Card acceptance being near universal in Dubai and Abu Dhabi, the 200 to 500 dirham cash figure, and the size of the dynamic currency conversion markup are our own read from recent trips and card terms rather than a published table. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Customary, but not heavy" },
        { k: "Restaurants", v: "A 10% service charge is often added" },
        { k: "If none", v: "10 to 15% in cash" },
        { k: "How", v: "Cash in dirhams, handed over" }
      ],
      live: true,
      topic: "tipping",
      title: "Tipping in the UAE: how much to tip in Dubai 2026",
      description: "The 10% service charge on your bill may not reach your server. What to leave if none is added, and the everyday dirham amounts for valets and taxis.",
      h1: "Tipping in the United Arab Emirates",
      lede: "Tipping here is customary but lighter than at home, and cash in dirhams matters more than the percentage. Here is what to leave, and why the service charge on your bill is not the whole story.",
      checked: "Jul 2026",
      checkedISO: "2026-07-31",
      answer: "Tipping in the UAE is <b>customary but not heavy</b>, and much lighter than in the US. Restaurants frequently add a <b>10% service charge</b>, but it often goes to the business rather than your server, so <b>rounding up or leaving 10 to 15% in cash</b> for good service is normal even when the charge appears. For everyday help a few dirhams goes a long way: <b>5 to 10 dirhams</b> for a valet, <b>10 to 15 dirhams a day</b> for housekeeping, a couple of dirhams a bag for a porter, and simply <b>rounding up</b> a taxi fare. <b>Cash in dirhams</b> beats adding it to a card, because it reaches the person directly. Nobody will chase you for a tip.",
      sections: [
        {
          h: "Customary, but lighter than home",
          icon: "tip",
          key: { fig: "10 to 15%", tag: "If no service charge", text: "Well short of US expectations. Many staff rely on tips because base wages can be low, so something is always welcome.", tone: "teal" },
          p: [
            "The UAE sits between the light-tipping habits of much of Europe and the heavy expectations of the US. At a sit-down restaurant with <b>no service charge</b>, <b>10 to 15%</b> for good service is generous and normal. Nobody will be offended by less, and nobody will chase you down for it.",
            "The reason to bother is practical rather than social: much of the service workforce is on <b>low base pay</b>, often supporting family elsewhere, so a modest tip lands harder than the same money would at home."
          ]
        },
        {
          h: "The 10% service charge, and why cash still matters",
          icon: "receipt",
          key: { fig: "10%", tag: "Often already on the bill", text: "A service charge is common in restaurants and hotels, but it frequently goes to the business rather than the person who served you.", tone: "amber" },
          p: [
            "Check the bill. Restaurants and hotels commonly add a <b>10% service charge</b>, and hotel bills often carry a municipality fee and the 5% VAT alongside it. The catch is that a service charge is <b>not reliably a tip</b>: in many venues it goes to the operation, not to your server.",
            "That is why the local habit is to <b>round up or add a small amount in cash</b> even when a service charge is printed on the bill. A few dirhams left on the table is understood as being for the person, and adding a tip to the card total is not."
          ]
        },
        {
          h: "The everyday amounts",
          icon: "coins",
          key: { fig: "5 to 15 AED", tag: "Covers most small services", text: "Valet 5 to 10 dirhams, housekeeping 10 to 15 a day, a couple of dirhams a bag for a porter, and round up the taxi.", tone: "teal" },
          p: [
            "Keep small notes for the everyday round. A <b>valet</b> is 5 to 10 dirhams, <b>hotel housekeeping</b> 10 to 15 dirhams a day left in the room, a <b>porter</b> a couple of dirhams a bag, and a <b>supermarket bagger or petrol attendant</b> a dirham or two if you feel like it.",
            "For <b>taxis</b>, rounding the fare up to the next note is the norm rather than a percentage, and drivers do not expect more. See <a href='/uae/taxis-and-apps'>taxis and ride-hailing in the UAE</a> for how the fares work, or the <a href='/uae'>UAE money guide</a> for the wider money picture. Delivery riders, who work long hours in real heat, are one group where a little extra is genuinely well received."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Dubai?", a: "Yes, but modestly. Tipping is customary rather than obligatory, and lighter than in the US. If no service charge is added, 10 to 15% is generous at a restaurant. For small services, a few dirhams is normal, and cash in dirhams is preferred." },
        { q: "Is the service charge in the UAE the tip?", a: "Not reliably. Many restaurants and hotels add about 10%, but it often goes to the business rather than the person who served you. That is why locals still round up or leave a small amount in cash on top, even when the charge appears on the bill." },
        { q: "Should I tip in dollars or dirhams in the UAE?", a: "Dirhams. Dollar bills are awkward for staff to change and lose value at the exchange counter, so a tip in local cash is worth more to the person receiving it. Keep small dirham notes on hand for this." },
        { q: "Do you tip taxi drivers in the UAE?", a: "Rounding up is the norm, not a percentage. Taxis are metered and regulated, so paying the fare and rounding to the next convenient note is entirely normal and drivers do not expect more." }
      ],
      sources: {
        links: [
          { label: "US Department of State: United Arab Emirates country information for US citizens", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/UnitedArabEmirates.html", type: "gov" }
        ],
        judgment: "There is no official tipping schedule in the UAE, and the 10% service charge varies by venue and is not always distributed to staff. The percentages and dirham amounts here are our own read from recent trips and consistent local guidance, not a published standard. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-apps",
      glance: [
        { k: "Street taxis", v: "Metered and regulated" },
        { k: "Minimum fare", v: "About 12 to 13 dirhams" },
        { k: "From the airport", v: "A 25 dirham start" },
        { k: "Apps", v: "Careem and Uber, and pricier" }
      ],
      live: true,
      topic: "taxis",
      title: "Taxis in Dubai: fares, Careem and Uber 2026",
      description: "Metered RTA fares, why a short hop still costs the 12 dirham minimum, the 25 dirham airport start, Salik tolls, and how Careem and Uber compare.",
      h1: "Taxis and ride-hailing in the United Arab Emirates",
      lede: "Dubai taxis are metered, government-regulated and cheap by US standards, with no haggling and no meter games. Here is what the meter actually does, and where the extras come from.",
      checked: "Jul 2026",
      checkedISO: "2026-07-31",
      answer: "Taxis in Dubai are <b>metered and regulated</b> by the Roads and Transport Authority, so every licensed cab runs the same formula and there is nothing to negotiate. A street hail starts at about <b>5 dirhams</b> (a little more at night) and adds roughly <b>2.19 dirhams a kilometre</b>, but a <b>minimum fare of about 12 dirhams</b> means any short hop costs at least that. Picking up at <b>Dubai airport</b> starts at a fixed <b>25 dirhams</b> instead. <b>Salik road tolls</b> are added to your meter at 4 dirhams a gate, and waiting time runs half a dirham a minute. <b>Careem and Uber</b> both operate and typically cost 10 to 25% more than a street taxi. Cards, phone wallets and Nol all work in the cab.",
      sections: [
        {
          h: "Metered, regulated, and cheap by US standards",
          icon: "taxi",
          key: { fig: "2.19 AED a km", tag: "Adjusted monthly with fuel", text: "Every licensed Dubai taxi runs the same RTA meter formula, so the fare does not depend on the company or your negotiating skills.", tone: "teal" },
          p: [
            "Dubai taxis are among the easiest in the world to use. Fares are set by the <b>Roads and Transport Authority</b>, the meter is always used, and <b>there is no haggling</b>. Flag one on the street, from a hotel rank or at a mall entrance and the same rate applies whichever company owns the car.",
            "The distance rate sits at roughly <b>2.19 dirhams a kilometre</b>, but treat that as a band rather than a fixed number: the RTA <b>revises it monthly in line with fuel prices</b>, so it drifts within a few fils either way. A 10 kilometre run across town typically lands somewhere around 35 dirhams, or about 10 dollars.",
            "Pink-roofed <b>ladies taxis</b> with female drivers are available for women and families at the same regulated rates."
          ]
        },
        {
          h: "The minimum fare is what a short hop really costs",
          icon: "coins",
          key: { fig: "12 to 13 AED", tag: "The floor on any trip", text: "The flagfall is small, but a minimum fare applies regardless of distance, so a five minute ride still costs the minimum.", tone: "amber" },
          p: [
            "The starting fare looks low, about <b>5 dirhams</b> by day and <b>5.50</b> at night (roughly 10pm to 6am), which is why people are surprised by the total on a short trip. The number that actually governs a quick hop is the <b>minimum fare</b>: around <b>12 dirhams</b> for a street hail and <b>13</b> for an app booking, whatever the distance.",
            "Booking through an app also adds a <b>booking fee</b>, roughly 4 dirhams off-peak and up to 7.50 in peak hours. None of this is large in dollar terms, but it explains why a two kilometre ride and a four kilometre ride can cost nearly the same."
          ]
        },
        {
          h: "Airport pickups, tolls and waiting",
          icon: "plane",
          key: { fig: "25 AED start", tag: "Dubai airport pickups", text: "Taxis from the airport ranks start at a fixed 25 dirhams instead of the usual flagfall, then meter normally.", tone: "amber" },
          p: [
            "Taking a taxi <b>from Dubai International</b> means a fixed <b>25 dirham</b> start rather than the ordinary flagfall, after which the meter runs as usual. Airport to Downtown or Dubai Marina generally lands in the 60 to 100 dirham range depending on traffic, which is 16 to 27 dollars. Going the other way, to the airport, there is no such surcharge.",
            "Two extras appear on longer runs. <b>Salik tolls</b>, the road gantries on routes like Sheikh Zayed Road, are passed through to you at about <b>4 dirhams a gate</b>, and <b>waiting time</b> in heavy traffic is charged at about <b>0.50 dirhams a minute</b>. Both are legitimate and appear on the meter, so they are worth knowing rather than worrying about."
          ]
        },
        {
          h: "Apps, paying, and the metro alternative",
          icon: "card",
          key: { fig: "10 to 25% more", tag: "Careem and Uber", text: "Both apps work well and show the price up front, but a street taxi is normally the cheaper option for the same car.", tone: "teal" },
          p: [
            "<b>Careem</b> (owned by Uber and the regional favourite) and <b>Uber</b> both operate across the UAE, and the RTA taxi fleet can be hailed through the apps too. They are reliable and quote the fare in advance, which some people prefer, but they generally run <b>10 to 25% above</b> the street meter for the same journey.",
            "Paying is easy: nearly all taxis take <b>cards and phone wallets</b>, and many accept the <b>Nol</b> transit card. For anything along its line, the <b>Dubai Metro</b> is dramatically cheaper than a cab and runs on the same Nol card, so a mix of metro plus short taxi hops is the cheapest way around the city.",
            "For what to leave the driver, see <a href='/uae/tipping'>tipping in the UAE</a>, and <a href='/uae/cash-or-card'>cash or card in the UAE</a> for how to pay for everything else. Note that Abu Dhabi is regulated separately by its own Integrated Transport Centre, with similar metered fares."
          ]
        }
      ],
      faqs: [
        { q: "Are taxis in Dubai expensive?", a: "No, they are cheap by US standards. Fares are set by the RTA at roughly 2.19 dirhams a kilometre with a small starting fare, so a 10 kilometre trip across the city is around 35 dirhams, about 10 dollars. The minimum fare of about 12 dirhams applies on very short trips." },
        { q: "Does Uber work in Dubai?", a: "Yes, and so does Careem, which Uber owns and which is the regional favourite. Both are reliable and quote the price up front, but they typically cost 10 to 25% more than hailing a metered street taxi for the same trip." },
        { q: "How much is a taxi from Dubai airport?", a: "Airport pickups start at a fixed 25 dirhams rather than the usual flagfall, then run on the meter. Expect roughly 60 to 100 dirhams to Downtown or Dubai Marina depending on traffic, which is about 16 to 27 dollars. There is no airport surcharge on the trip back." },
        { q: "Can you pay by card in a Dubai taxi?", a: "Yes. Almost all licensed taxis take cards and phone wallets such as Apple Pay and Google Pay, and many also accept the Nol transit card. You do not need cash for taxis in Dubai." }
      ],
      sources: {
        links: [
          { label: "Dubai Roads and Transport Authority: the regulator that sets taxi tariffs", url: "https://www.rta.ae", type: "gov" },
          { label: "Gulf News: the RTA announcement of app booking fees, flagfall and the e-hail minimum fare", url: "https://gulfnews.com/uae/rta-announces-new-dubai-taxi-fares-1.500334930", type: "guide" }
        ],
        judgment: "Third-party fare tables for Dubai disagree, mostly because they confuse the small flagfall with the higher minimum fare, and because the RTA revises the per-kilometre rate monthly with fuel prices. We have given the structure the RTA actually announced, with the distance rate as a band rather than a precise figure, so treat totals as estimates and check the RTA app for a live quote. Careem and Uber pricing is dynamic and our 10 to 25% premium is an observed range. Checked July 2026."
      }
    },
  {
    slug: "hotel-taxes-and-fees",
    glance: [
      { k: "On top of the room", v: "Roughly 20 to 30%" },
      { k: "VAT", v: "5%, and not reclaimable on hotels" },
      { k: "Dubai", v: "A flat Tourism Dirham per night" },
      { k: "Abu Dhabi", v: "A 4% fee on the room bill instead" },
    ],
    live: true,
    topic: "taxes",
    title: "UAE hotel taxes and fees: what lands on the bill",
    description:
      "A UAE hotel bill stacks 5% VAT, a municipality charge, a service charge and a nightly Tourism Dirham, often 20 to 30% over the room rate. Checked 2026.",
    h1: "UAE hotel taxes and fees, itemised",
    lede:
      "Short answer: the UAE taxes lightly and charges hotels heavily. VAT is only 5%, but once the municipality has taken its cut, the hotel has added service, and the city has charged for the night, a room settles a fifth to a third above the rate you were quoted.",
    checked: "Aug 2026",
    checkedISO: "2026-08-11",
    answer:
      "Four separate things can sit on top of a UAE room rate. <b>VAT at 5%</b>, low by any standard. A <b>municipality fee</b>, around 7% in Dubai. A <b>service charge</b>, usually about 10%, which is the hotel's own rather than a tax. And a nightly city fee: Dubai's <b>Tourism Dirham</b> is a fixed nightly sum, scaled to how many stars the property holds, and it stops accruing after 30 nights in a row, while <b>Abu Dhabi</b> charges a <b>4% accommodation fee</b> on the bill instead. Together they commonly add <b>20 to 30%</b> to a bare rate. The 5% VAT here is <b>not</b> reclaimable, because the visitor refund scheme covers shopping you export, not a bed you slept in.",
    official: {
      label: "Federal Tax Authority: what the tourist VAT refund covers",
      url: "https://tax.gov.ae/en/services/tourist.vat.refunds.aspx",
      note:
        "The federal position on VAT and what the visitor refund does and does not cover. Municipality fees and the nightly city fee are set at emirate level, so Dubai and Abu Dhabi publish their own.",
    },
    sections: [
      {
        h: "The tax part is the small part",
        key: {
          fig: "5%",
          tag: "VAT, and that is all",
          text:
            "One of the lowest VAT rates anywhere, with no personal income tax and no separate departure tax to pay at the airport.",
          tone: "teal",
        },
        p: [
          "<b>VAT is 5%</b>, which is genuinely low, and there is no personal income tax and nothing extra to hand over at the airport when you leave. If the UAE had a reputation for expensive hotel bills built on taxation, the numbers would not support it.",
          "What builds the bill is the layer above the tax. A <b>municipality fee of around 7%</b> applies in Dubai, set by the emirate rather than federally, so the figure is not uniform across the country. It is a charge on the accommodation, and like the VAT it is normally folded into the rate a hotel quotes you rather than presented separately.",
        ],
      },
      {
        h: "Dubai charges a flat fee per night, by star rating",
        key: {
          fig: "Per night",
          tag: "Set by star rating",
          text:
            "A fixed sum attaches to the room for every night you hold it, more at a five-star than at a hotel apartment, and it stops after 30 nights in a row.",
          tone: "amber",
        },
        p: [
          "The <b>Tourism Dirham</b> attaches to the room for each night you have it, as a fixed sum rather than a proportion, and it climbs with the star rating on the door: most at a five-star, least at a budget place or a hotel apartment. After <b>30 nights in a row</b> it stops, so a long stay is not billed indefinitely.",
          "Because it is flat, it behaves the opposite way to a percentage. On a cheap room over many nights it is proportionally significant. On a suite it disappears into the noise. Anyone comparing a modest hotel against a smarter one should run this per night rather than assume it scales with the rate.",
        ],
      },
      {
        h: "Abu Dhabi does it differently",
        key: {
          fig: "4%",
          tag: "Of the room bill",
          text:
            "Abu Dhabi applies a percentage accommodation fee rather than Dubai's flat nightly charge, so the two emirates are not comparable line for line.",
          tone: "teal",
        },
        p: [
          "<b>Abu Dhabi adds a 4% fee on the room bill</b> in place of a flat nightly amount. Same idea, different mechanism, and it means a like-for-like comparison between the emirates has to be done on the all-in total rather than on any single line.",
          "This is worth knowing if you are splitting a trip. Moving between Dubai and Abu Dhabi changes which charges apply and how they are calculated, and the hotel is not obliged to make that legible in a quoted rate.",
        ],
      },
      {
        h: "The service charge is not a tax, and the VAT is not coming back",
        key: {
          fig: "About 10%",
          tag: "The hotel's own",
          text:
            "The service charge belongs to the property rather than the government. It is normally unavoidable, and it is not a gratuity, whatever it looks like on the bill.",
          tone: "amber",
        },
        p: [
          "The <b>service charge of around 10%</b> is the hotel's own charge, not a government one. It is normally unavoidable, it is folded into the rate, and it is not a tip in any meaningful sense, since there is no guarantee it reaches the person who carried your bag. If you want a member of staff to receive something, cash in a hand is the mechanism that works.",
          "And the 5% VAT on all of this is <b>not reclaimable</b>. The visitor refund scheme, run through Planet, covers <b>goods you take out of the country</b> above a minimum spend at a participating shop, and explicitly not hotels, restaurants or anything consumed here. Ask for the <b>all-in nightly total</b> when you book, because that is the only number that means anything.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much do UAE hotels add to the room rate?",
        a: "Commonly 20 to 30%. Four things pile up: VAT at 5%, a Dubai municipality fee near 7%, a service charge around 10%, and a nightly city charge, which in Dubai is the fixed Tourism Dirham scaled to star rating and in Abu Dhabi a 4% accommodation fee instead. Most of it is folded into the quoted rate rather than itemised, so the useful question when booking is what the all-in nightly total comes to.",
      },
      {
        q: "Can I claim the VAT back on a Dubai hotel?",
        a: "No. The UAE visitor refund scheme covers goods you export unused, above a minimum spend at a participating retailer, and it excludes hotels, restaurants and anything else consumed in the country. Hotel VAT is a cost rather than something recoverable. Shopping is a separate matter and the refund there is worth claiming.",
      },
      {
        q: "Is the hotel service charge a tip?",
        a: "Not really. It is the property's own charge, usually around 10% and usually mandatory, and it is not a government tax. There is no guarantee any of it reaches the staff who served you, which is why cash given directly is the reliable way to tip in the UAE.",
      },
    ],
  },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Excellent everywhere you will go" },
        { k: "App calling", v: "Blocked on local networks" },
        { k: "Messaging", v: "Works normally" },
        { k: "Carrier roaming", v: `${S.dayPassGlance}` }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "medium",
      title: "UAE: WhatsApp calling is blocked, messaging is not",
      description: "In the UAE, WhatsApp and FaceTime calling are blocked on local networks while messaging works normally. What actually works, what a travel eSIM does and does not fix.",
      h1: "Staying connected in the UAE.",
      lede: "The thing to know about the UAE is not the price of data, it is that WhatsApp and FaceTime calling do not work on Emirati networks. Messaging is fine. Calling is blocked, and has been for years.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>excellent everywhere a visitor goes</b>, so this is not a coverage question and barely a price one. The real issue is that <b>WhatsApp and FaceTime voice and video calling are blocked</b> on UAE networks, along with most other consumer app calling, while <b>messaging, photos and voice notes work normally</b>. Ordinary <b>cellular calls are unaffected</b>: your US number still rings and still dials, at your plan's usual international rates. The licensed route for app calling is <b>Botim</b>, which needs a paid subscription. You will also read that a travel eSIM gets around the block, and there is something to it: a travel eSIM usually carries your traffic <b>out of the country</b> before it reaches the internet, and the filtering happens inside the UAE, so app calling <b>sometimes</b> works. That is a <b>side effect of how roaming is routed rather than a feature</b>, travelers report it inconsistently, and it can stop without notice, so do not build a trip's calls on it. On price, the <b>AT&amp;T and Verizon</b> day passes are about <b>${S.dayPass}</b>, <b>T-Mobile</b>'s mid and upper tiers include <b>${S.tmoRange}</b> of high-speed data, a <b>Nomad eSIM</b> is a few dollars per gigabyte, and du and Etisalat often give arriving visitors a <b>free tourist SIM</b> with some data on it.`,
      sections: [
        {
          h: "What is actually blocked, and what is not",
          icon: "alert",
          key: { fig: "Calls only", tag: "Messaging is fine", text: "WhatsApp, FaceTime and most consumer app calling are blocked on UAE networks. Text, photos, voice notes and ordinary cellular calls all work normally.", tone: "amber" },
          p: [
            "The restriction is narrower than the panic suggests, and knowing the shape of it saves a lot of confusion on arrival. <b>Blocked</b> on UAE networks: WhatsApp voice and video calls, FaceTime audio and video, and most other consumer app calling. <b>Working normally</b>: WhatsApp and iMessage text, photos, documents and voice notes, plus ordinary <b>cellular calls and SMS</b> on your own number. Business platforms such as <b>Zoom and Microsoft Teams</b> generally work for meetings, which is why a business trip often feels unaffected while a family call does not.",
            "One quirk worth knowing for iPhone users: a phone <b>bought inside the UAE</b> historically shipped without FaceTime at all, so the app is simply absent. A phone bought elsewhere keeps the app, and on a local network the calls just fail to connect. That difference is why online accounts of what works here contradict each other so often."
          ]
        },
        {
          h: "The eSIM workaround, honestly",
          icon: "qr",
          key: { fig: "Sometimes", tag: "Not a feature", text: "A travel eSIM routes traffic out of the country, and the filtering is inside it, so app calling often works. It is inconsistent and can change without notice. Do not plan calls around it.", tone: "amber" },
          p: [
            "Here is the mechanism, because it explains both why it works and why we will not promise it. A travel eSIM normally uses <b>home-routed roaming</b>: your phone connects to an Emirati tower, but the traffic is tunnelled back to the eSIM's home network somewhere else and only reaches the open internet from there. The filtering that blocks app calling sits <b>inside the UAE network</b>, so traffic that leaves first often escapes it. Many travelers report WhatsApp calls working on a travel eSIM in Dubai for exactly this reason.",
            "And it is <b>not something anyone can guarantee</b>, including us. Routing differs between providers and plans, it changes without announcement, some travelers report it failing outright, and it is a byproduct of network plumbing rather than a product feature. We sell eSIMs, which is precisely why this paragraph is worded carefully: if a call has to happen, a work call or a family emergency, treat the eSIM route as a bonus and have a real plan behind it. Anyone marketing an eSIM to you as the thing that unblocks WhatsApp in Dubai is overselling something they do not control."
          ]
        },
        {
          h: "What to plan around instead",
          icon: "phoneok",
          key: { fig: "Botim", tag: "The licensed route", text: "Botim is the UAE-licensed calling app and needs a paid subscription. An ordinary cellular call always works. Zoom and Teams generally do too.", tone: "teal" },
          p: [
            "Three things that reliably work. First, an <b>ordinary phone call</b>: your US number dials and rings normally in the UAE, so for a short important call the old-fashioned route is the dependable one, at your carrier's international rate rather than free. Second, <b>Botim</b>, the licensed internet-calling app, which needs a paid subscription bought through the app or a local operator and then behaves like a normal call. Third, <b>Zoom or Teams</b> for anything that can be framed as a meeting.",
            "On <b>VPNs</b>, which every forum recommends: using one is legal in the UAE for ordinary purposes, and using one specifically to reach a service the country blocks runs against the letter of its telecom rules, so we are not going to describe it as a clean answer. We have not seen reports of tourists penalized for a family call, and that is a different statement from it being permitted. Decide with that stated plainly rather than on a promise. This guide is written for US travelers departing the US. For more, see <a href='/uae/cash-or-card'>cash or card in the UAE</a>, <a href='/uae/taxis-and-apps'>taxis and apps in the UAE</a>, and the <a href='/uae'>UAE money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Does WhatsApp work in the UAE?", a: "Messaging does: text, photos, documents and voice notes all work normally. WhatsApp voice and video calling is blocked on UAE networks, as is FaceTime and most other consumer app calling. Ordinary cellular calls and SMS on your own number are unaffected." },
        { q: "Will a travel eSIM let me make WhatsApp calls in Dubai?", a: "Often, but it is not reliable and nobody can guarantee it. A travel eSIM usually routes your data out of the country before it reaches the internet, and the block sits inside the UAE network, so calls frequently get through. Routing varies by provider and can change without notice, so treat it as a bonus rather than a plan. For a call that matters, use an ordinary cellular call or a licensed app such as Botim." },
        { q: "How do I call home from the UAE?", a: "An ordinary cellular call on your own number works normally, at your carrier's international rate. Botim is the UAE-licensed internet-calling app and needs a paid subscription. Zoom and Microsoft Teams generally work for meetings. WhatsApp and FaceTime calling do not work on local networks." },
        { q: "How much does it cost to use my US phone in the UAE?", a: `About ${S.dayPass} on an AT&T or Verizon day pass. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily, which matters on a trip longer than 10 days. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} of high-speed data abroad before slowing to ${S.throttle}. du and Etisalat also give arriving visitors a free tourist SIM with some data on it, and a travel eSIM is a few dollars per gigabyte.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass, the daily rate and the covered-destination list", url: "https://www.att.com/international/day-pass/", type: "card" },
          { label: "US State Department: UAE country information and local laws for US travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/UnitedArabEmirates.html", type: "gov" },
          { label: "du: internet calling packages and the licensed app list", url: "https://www.du.ae/", type: "official" }
        ],
        judgment: "Checked Aug 2026. This is the spoke on the site where our commercial interest and the reader's interest pull hardest in opposite directions, so the wording is deliberate. The app-calling block on UAE networks is well established and consistently reported. The travel-eSIM workaround is real, has a clear technical explanation in home-routed roaming, and is also inconsistent: sources disagree on how often it works and it can change without notice, which is why this page describes it as a side effect and never as a feature. If you need a call to happen in the UAE, plan on an ordinary cellular call or a licensed app and treat anything else as a bonus. Carrier day-pass figures are an Aug 2026 snapshot."
      }
    },
    {
      slug: "medical-costs",
      exposureCategory: "payInFull",
      exposureQuote: "As a visitor you are uninsured locally unless you brought a policy, and both private and public facilities will charge you.",
      glance: [
        { k: "Private care", v: "At Western prices" },
        { k: "Deposits", v: "Normal before treatment" },
        { k: "Resident mandate", v: "Not yours, do not assume" },
        { k: "Real risk", v: "A private admission" }
      ],
      live: true,
      topic: "health",
      title: "Getting sick in the UAE: private care, private prices",
      description: "The UAE runs excellent private hospitals at Western prices, with deposits normal before treatment. The residents' insurance mandate does not cover visitors.",
      h1: "What does getting sick in the UAE cost a visitor?",
      lede: "The Emirates have built a private hospital sector that would be recognisable to anyone from Houston or Zurich, including the prices. As a visitor, that private sector is your route.",
      checked: "Aug 2026",
      checkedISO: "2026-08-20",
      answer: "Your realistic route in the UAE is a <b>private hospital or clinic</b>, and they are priced accordingly: modern, international-standard, and at <b>Western rates</b>. A <b>deposit or proof of insurance before treatment</b> is normal practice, particularly for admission. One thing to be clear about, because it causes confusion: <b>Dubai and Abu Dhabi require employers to provide health insurance for residents</b>, and that mandate has <b>nothing to do with you</b>. It does not extend to tourists and it does not mean care is arranged for visitors. Public hospitals exist and will handle emergencies, but visitors are <b>charged</b> there too. The care is good. The bill is a real one.",
      insurance: true,
      insuranceNote: "In the UAE you are heading for the private sector, which is excellent and priced like the private sector anywhere, with a deposit expected before admission. The residents' insurance mandate in Dubai and Abu Dhabi is not yours and does not cover you. Cover here is for the admission and the flight home. Faye covers trip medical and evacuation.",
      careFirst: "If it looks serious, get to a hospital first and sort the deposit out afterwards.",
      sections: [
        {
          h: "The private sector is the route, at private prices",
          icon: "receipt",
          key: { tag: "Western rates", text: "UAE private hospitals are modern and international-standard, and priced like private hospitals anywhere. That is where a visitor is treated.", tone: "amber" },
          p: [
            "The Emirates have invested heavily in <b>private healthcare</b>, and the result is a sector with international accreditation, foreign-trained specialists and English throughout. It is genuinely good, and it is also <b>priced like private healthcare anywhere in the developed world</b>, which is the part travelers underestimate because the region reads as somewhere costs might be lower.",
            "Expect a <b>deposit or proof of insurance before treatment</b>, particularly for anything requiring admission. This is routine rather than adversarial. <b>If it looks serious, get to a hospital first and sort the deposit out afterwards.</b>"
          ]
        },
        {
          h: "The insurance mandate is not yours",
          icon: "alert",
          key: { tag: "A common confusion", text: "Dubai and Abu Dhabi require health insurance for residents, provided by employers. It does not extend to tourists and does not cover a visitor.", tone: "amber" },
          p: [
            "This one is worth stating clearly because it misleads people. <b>Dubai and Abu Dhabi mandate health insurance for residents</b>, with employers required to provide it. Travelers sometimes read about the mandate and conclude that the UAE has arranged health cover, or that the system will absorb them somehow.",
            "It will not. The mandate is an <b>employment and residence</b> requirement and it has no bearing on a tourist. As a visitor you are <b>uninsured locally</b> unless you brought a policy, and both private and public facilities will charge you. Do not let a headline about universal coverage in the Emirates do any work in your planning."
          ]
        },
        {
          h: "Why there are no prices on this page",
          icon: "tag",
          key: { tag: "Absence is not zero", text: "We have not sourced an official Emirati price list for visitors that we would stand behind, so we have published none.", tone: "teal" },
          p: [
            "We would rather say this than pad the page. We have <b>not sourced an official Emirati tariff for non-resident care</b> that we would put our name to, so no local price figure appears here. On a medical page a plausible-sounding number is not a small error, because it is something a person might act on while unwell.",
            "The structure stands without a number: <b>the private sector is your route</b>, <b>prices are at Western private levels</b>, <b>a deposit before treatment is normal</b>, and <b>the residents' mandate does not apply to you</b>. Ask your insurer whether they have direct-billing arrangements with UAE hospitals, because several do and it removes the deposit problem entirely."
          ]
        },
        {
          h: "What this means for your money",
          icon: "cash",
          key: { tag: "Direct billing helps", text: "Many international insurers have direct-billing arrangements with Gulf hospitals. That turns a deposit demand into a phone call, which is worth arranging in advance.", tone: "teal" },
          p: [
            "The single most useful piece of preparation for the UAE is finding out whether your insurer has a <b>direct-billing relationship</b> with hospitals there. Many international insurers do, because the Gulf is a heavily insured market, and it converts a large deposit demand into an <b>authorisation call</b>.",
            "Failing that, carry the <b>assistance line number</b> somewhere you can reach it quickly and expect to use a card. For handling payments on the ground, see the <a href='/uae/cash-or-card'>UAE cash and cards guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Does the UAE health insurance mandate cover tourists?", a: "No. Dubai and Abu Dhabi require employers to provide health insurance for residents. It is an employment and residence requirement and it does not extend to visitors, who are uninsured locally unless they bring their own policy." },
        { q: "How much does a hospital cost in the UAE?", a: "We have not published a figure, because we did not source an official Emirati tariff for visitor care that we would stand behind. What is reliable is that private hospitals, which are the realistic route for a visitor, charge at Western private rates." },
        { q: "Will a UAE hospital ask for a deposit?", a: "Commonly, yes, especially for admission. A deposit or proof of insurance before treatment is normal practice. An insurer with a direct-billing arrangement can usually replace that with an authorisation." },
        { q: "Can I use a public hospital in the UAE as a tourist?", a: "Public hospitals will deal with emergencies, but visitors are charged there too, so it is not a free alternative. Most visitors end up in the private sector, which is where the international-standard facilities and English-speaking staff are concentrated." },
        { q: "Do I need travel insurance for the UAE?", a: "Yes, and ideally one with Gulf direct-billing. You are heading for private care at private prices with a deposit expected up front, and a flight home is on top of that." }
      ],
      sources: {
        links: [
          { label: "US State Department: United Arab Emirates country information, including health and medical care guidance for travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/UnitedArabEmirates.html", type: "gov" }
        ],
        judgment: "No price figures appear here because we did not source an official Emirati tariff for visitor care that we would publish, and private hospital pricing in the UAE is set facility by facility. The point about the residents' insurance mandate not extending to tourists is included because it is a recurring and consequential misunderstanding. Deposit practice varies by facility and by whether your insurer has a direct-billing arrangement. Checked August 2026."
      }
    }
  ],
  signals: { cardFriendliness: 5, cashNeed: 1, taxRisk: 3, atmRisk: 3 },
  hook: "One of the most cashless places on earth, and the dirham is pinned to the dollar, so the exchange rate barely moves.",
  aliases: ["uae", "u.a.e.", "dubai", "abu dhabi", "emirates", "emirati"],

  title: "Does Dubai accept US dollars? UAE money in 2026",
  description: "Some do, but you pay in dirhams, pinned to the dollar so the rate barely moves. Dubai is near cashless, and adds a nightly tourist fee. Checked 2026.",

  h1: "Money in the UAE, sorted.",
  lede: "A calm, current plan for the money side of your trip: the dirham is locked to the US dollar so the exchange rate stays steady, cards run almost everything, and the only real traps are the exchange counter and one sneaky terminal prompt.",
  hero: {
    img: "/uae-hero.jpg",
    h: 1375,
    alt: "A quiet old-town lane in the UAE at golden hour with traditional wind towers on the rooftops, a mosque dome and minaret in the haze, sand-toned buildings with carved teal doors and iron lantern sconces, string lights overhead, a figure in a white kandura walking away up the lane, and a plate of falafel, flatbread and dips beside a mint lemonade, a glass of red karak-style tea and a bowl of dates on a wooden table in the foreground"
  },

  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',

  verdict: "The UAE is one of the easiest places in the world to handle money as an American. The dirham (AED) is <b>fixed to the US dollar</b> at about 3.67 to 1 and has been since 1997, so the exchange rate holds steady through your trip. Dubai and Abu Dhabi are close to fully cashless: bring a <b>no-fee card</b> plus Apple Pay or Google Pay and you can tap for almost everything, cabs, malls, the metro, dinner. Keep a little cash, roughly 200 to 500 dirhams, for souks, small eateries and tips. Skip the airport and hotel exchange desks, refuse the \"pay in dollars\" prompt on any terminal, and remember that hotel bills carry a <b>5% VAT</b> (reclaimable on shopping, not hotels) plus a small per-night tourism fee that varies by emirate.",

  meter: {
    heading: "Barely any cash changes hands here, cards and phones do almost everything.",
    cashPct: 15,
    note: "A rough feel for everyday spending. Dubai has a public goal of being 90% cashless, and terminals are already in every taxi, mall, restaurant and metro gate. The exception is the traditional souks, some small local eateries and cafeterias, the odd older taxi, and tipping, where a small amount of cash is still handy."
  },

  trio: [
    { sym: "card", kind: "ok", h: "Your card", verd: "Works almost everywhere", p: "Visa, Mastercard and Amex are accepted across hotels, malls, restaurants, taxis and the metro, and Apple Pay and Google Pay are everywhere. The one habit to keep: if a terminal asks whether to charge you in dollars or dirhams, always choose dirhams to avoid a padded conversion rate.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "ok", h: "Cash", verd: "A little goes a long way", p: "You can go most of a trip on cards, but keep some dirhams for the souks (where you'll want to bargain in cash), small local eateries, an older taxi, and tips. Around 200 to 500 dirhams for a few days is plenty. Notes come in 5, 10, 20, 50, 100, 200, 500 and 1,000.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "ok", h: "ATMs", verd: "Everywhere, mind the double fee", p: "ATMs are in every mall and metro station and give close to the pegged rate. Expect a small machine fee (often around 20 to 30 dirhams) on top of your own bank's charge, so withdraw a sensible amount at once, choose dirhams, and decline the \"convert to USD\" offer.", cta: { label: "See low-fee cards", href: "#" } }
  ],

  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Bring a <b>no-foreign-fee card</b> and add it to <b>Apple Pay or Google Pay</b>, which are accepted almost everywhere.",
      "Don't buy dirhams at home. The AED is a thinly traded currency abroad, so rates are typically 4 to 8% worse than exchanging on arrival.",
      "If you want a little arrival cash, plan to use an <b>in-mall exchange house or ATM</b>, not the airport counter."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Skip the airport exchange counters and hotel desks, they carry the worst rates (a 5 to 6% gap is common).",
      "If you need cash right away, use an <b>ATM</b>, choose <b>dirhams</b>, and <b>decline \"convert to USD.\"</b>",
      "Tap your contactless card or phone straight onto the Dubai Metro and most taxis, no need to load up on cash first."
    ], cta: { label: "Find low-fee cards for ATMs", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Card or phone</b> for nearly everything: taxis, malls, the metro, restaurants and attractions.",
      "Keep small <b>dirham</b> notes for the souks, small cafeterias, valet and housekeeping tips.",
      "In the souks, <b>bargain and pay in cash</b>; it's expected and gets you a better price.",
      "<b>Always choose dirhams</b>, never dollars, on any card terminal or ATM that asks."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "The easy part", bullets: [
      "<b>The dirham is pinned to the dollar</b> at about 3.67 to 1, so $100 is almost exactly 367 dirhams, and the conversion holds steady through your stay.",
      "The only markup risk is self-inflicted: choosing dollars at a terminal (dynamic currency conversion), which quietly adds 3 to 8%. Pick dirhams every time."
    ], cta: null }
  ],

  cash: {
    rate: 3.67, cur: "AED", round: 25, defaultIndex: 1,
    rateNote: "Effectively fixed at about 3.67 dirhams to the dollar (the peg is 3.6725 and has held since 1997). An easy mental math: divide dirhams by 3.67, or roughly by 3.7, so 100 dirhams is about 27 dollars.",
    styles: [
      { n: "Budget", per: 40, cash: 0.2, room: 70 },
      { n: "Mid-range", per: 110, cash: 0.15, room: 150 },
      { n: "Comfort", per: 260, cash: 0.1, room: 330 }
    ]
  },

  connectivity: {
    works: "Yes, essentially everywhere you'll go, and it's excellent. The UAE has some of the fastest, most widespread mobile coverage in the world, with strong 5G blanketing Dubai, Abu Dhabi, the highways between them and out to the other emirates. The two carriers are Etisalat (e&) and du; a tourist SIM or an eSIM is easy to arrange with your passport, and many travelers just use an eSIM bought before arrival. Only remote desert stretches see weaker signal. One note: some calling apps like WhatsApp voice and video calling can be restricted on local networks, though this eases over time and hotel or paid VPN-friendly plans are common workarounds."
  },

  // TOURIST TAX (high-churn, verified Jul 2026). Unlike Costa Rica or the Dominican Republic, the
  // UAE DOES levy a per-night accommodation tax, and it varies by emirate:
  //  - Dubai: flat "Tourism Dirham" per room per night by hotel star rating (5-star AED 20,
  //    4-star AED 15, 3-star AED 10, budget/1-2-star/hotel-apartment AED 7). Capped at 30
  //    consecutive nights. This is the line modeled by the calculator. Separately, Dubai hotel
  //    bills also carry ~5% VAT + ~7% municipality fee + ~10% service charge baked in (~22-30%
  //    total); those percentage charges are described in taxfree/recentChange text, not this line,
  //    since they're a different kind of charge and usually already in the quoted rate.
  //  - Abu Dhabi: percentage model, a flat 4% tourism fee on the accommodation bill (uniform
  //    across categories), modeled here via a percentOfRoom unit override, plus its own ~AED 15/nt
  //    dirham + municipality + service + VAT noted in text.
  //  - Other emirates (Sharjah, Ajman, etc.): generally no separate nightly tourism fee for the
  //    traveler to plan; set to 0.
  tax: {
    unit: "flatPerNight",
    currency: "AED",
    capNights: 30,
    note: "In Dubai the nightly \"Tourism Dirham\" is a flat amount per room per night set by your hotel's official star rating, capped at 30 consecutive nights. Abu Dhabi instead adds a 4% tourism fee on the room bill. These are separate from the 5% VAT, roughly 7% municipality fee and roughly 10% service charge that hotels fold into the rate (covered below). Pick the closest match.",
    regions: [
      { key: "dubai5", label: "Dubai, 5-star hotel", rate: 20 },
      { key: "dubai4", label: "Dubai, 4-star hotel", rate: 15 },
      { key: "dubai3", label: "Dubai, 3-star hotel", rate: 10 },
      { key: "dubaibudget", label: "Dubai, budget hotel or hotel apartment", rate: 7 },
      { key: "abudhabi", label: "Abu Dhabi (any hotel)", unit: "percentOfRoom", pct: 4, note: "Abu Dhabi charges a 4% tourism fee on the accommodation bill, uniform across hotel categories, plus a separate small per-night fee, municipality fee, service charge and 5% VAT." },
      { key: "other", label: "Sharjah or another emirate", rate: 0, note: "Most other emirates do not add a separate nightly tourism fee for you to plan, though a municipality fee, service charge and 5% VAT may still appear on the bill." }
    ]
  },

  currencyHeading: "The dirham, in plain terms.",
  facts: [
    { sym: "usd", k: "Quick conversion", v: "The dirham is fixed to the US dollar at about 3.67 to 1, so it barely moves against you. Divide dirhams by roughly 3.7 for dollars: 100 dirhams is about 27 dollars, 500 dirhams about 136. $100 is almost exactly 367 dirhams." },
    { sym: "coins", k: "Notes and coins", v: "Notes run 5, 10, 20, 50, 100, 200, 500 and 1,000 dirhams, each a different color. Coins are 1 dirham, 50 fils and 25 fils, and in practice cash totals round to the nearest 25 fils, so you rarely handle small change." },
    { sym: "card", k: "One of the most cashless places on earth", v: "Dubai is aiming for 90% cashless, and cards and phone wallets work in taxis, the metro, malls and restaurants alike. The souks and some small local spots are the main places you'll still reach for cash." },
    { sym: "usd", k: "Only dirhams, really", v: "A few hotels quote or accept US dollars, but at a poor rate. Everywhere else it's dirhams only, and neighboring Gulf currencies (Saudi riyal, Omani rial, and so on) are not accepted, so change them or use a card." }
  ],

  taxfree: {
    label: "Taxes and the VAT refund",
    heading: "A low 5% VAT you can partly reclaim, plus small hotel fees.",
    text: "The UAE keeps taxes light. <b>VAT is just 5%</b> on most goods and services, and non-resident tourists can <b>reclaim it on shopping</b> (not on hotels, restaurants or anything consumed in the country) through the Planet tax-free system: spend at least 250 dirhams at a participating store, ask for a tax-free tag, and validate at a kiosk when you leave. You get back roughly 85 to 87% of the VAT after a small per-tag fee. On hotel bills, expect the 5% VAT plus a <b>service charge (around 10%)</b> and a <b>municipality fee (around 7% in Dubai)</b> already folded into the rate, along with a small per-night tourism fee (see the calculator above). Together these can add roughly 20 to 30% over a bare room rate, so read your quoted total carefully. There is no personal income tax and no departure tax to pay separately at the airport."
  },

  traps: [
    "<b>\"Pay in dollars?\" Always say no.</b> Because the dirham is pegged, there's no reason to let a terminal or ATM convert to dollars, doing so (dynamic currency conversion) quietly adds 3 to 8%. Choose dirhams every time.",
    "<b>Never exchange at the airport or your hotel.</b> Their rates run 4 to 6% worse than the in-mall exchange houses (Al Ansari, LuLu Exchange, UAE Exchange). If you're mostly on cards, you may not need to exchange at all.",
    "<b>Don't buy dirhams before you fly.</b> AED is thinly traded outside the UAE, so home-country rates are typically 4 to 8% worse. Bring dollars, or just rely on your card and an ATM on arrival.",
    "<b>Read the hotel total, not just the nightly rate.</b> A 5% VAT, roughly 10% service charge, roughly 7% municipality fee and a per-night tourism fee can add 20 to 30% to a quoted room rate."
  ],

  tippingHeading: "Appreciated, modest, and cash is best.",
  tipping: "Tipping in the UAE is customary but not heavy, and staff often rely on it since base wages can be low. Restaurants frequently add a 10% service charge, but it doesn't always reach your server, so rounding up or leaving an extra 10 to 15% in cash for good service is normal. For everyday help, a few dirhams goes a long way: 5 to 10 dirhams for a valet, 10 to 15 dirhams a day for hotel housekeeping, a few dirhams per bag for a porter, and rounding up the fare for taxis. Cash tips (in dirhams) are preferred over adding to a card, since they go straight to the person. Nobody will chase you for a tip, and a small one is always well received.",
  sources: {
    changed: "Re-checked August 2026. The money facts are unchanged. Added the US State Department advisory position: the UAE is at Level 3, Reconsider Travel, following the February 2026 hostilities between the United States and Iran, and insurance guidance moved from low to medium because of flight disruption rather than anything about the cost of a trip. VAT is 5%, and visitors can reclaim it on shopping through the Planet scheme, about 85% of the VAT back on a minimum spend of 250 dirhams. Dubai adds a Tourism Dirham per room per night by hotel star rating, and Abu Dhabi adds a 4% accommodation fee instead.",
    links: [
      { label: "Federal Tax Authority: the 5% VAT and the tourist refund scheme operated with Planet", url: "https://tax.gov.ae/en/services/tourist.vat.refunds.aspx", type: "revenue" },
      { label: "US Department of State: the current UAE travel advisory and country information for US citizens", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/UnitedArabEmirates.html", type: "gov" },
      { label: "UAE tourist-tax guide: Dubai's Tourism Dirham per room per night by star rating, and Abu Dhabi's 4% accommodation fee", url: "https://www.aaconsultancy.ae/international-tourist-taxes-and-restrictions/", type: "gov" },
    ],
    judgment: "The Tourism Dirham is set per room per night by star rating and capped at 30 nights, so the figure here is a typical nightly amount rather than one fixed rate. The dirham's peg to the US dollar is long standing. The daily cash share, tipping norms and likely ATM behavior are our own estimate from experience, not an official figure.",
  },

  faqs: [
    { q: "Do I need cash in the UAE?", a: "Not much. Dubai and Abu Dhabi are close to fully cashless, so cards and Apple Pay or Google Pay cover taxis, the metro, malls and restaurants. Keep around 200 to 500 dirhams for the souks (where cash helps you bargain), small local eateries and tips." },
    { q: "Is the UAE dirham tied to the US dollar?", a: "Yes. The dirham has been pegged to the dollar at about 3.6725 to 1 since 1997, so the rate effectively never changes. A price in dirhams stays constant against your dollars for your whole trip, which makes budgeting easy: divide dirhams by roughly 3.7 for the dollar figure." },
    { q: "Should I pay in dollars or dirhams on my card in the UAE?", a: "Always choose dirhams. If a terminal or ATM offers to charge you in US dollars (dynamic currency conversion), it adds a padded rate of 3 to 8%. Since the dirham is pegged to the dollar anyway, paying in dirhams and letting your own bank convert is always cheaper." },
    { q: "Where should I exchange money in the UAE?", a: "Use the in-mall or in-metro exchange houses like Al Ansari, LuLu Exchange or UAE Exchange, which have tight rates. Avoid airport counters and hotel desks, which can be 4 to 6% worse. Don't buy dirhams before your trip either, as rates abroad are poor. If you're mostly on cards, you may not need to exchange at all." },
    { q: "Can tourists get the VAT back in the UAE?", a: "Yes, on shopping. Non-residents can reclaim the 5% VAT on eligible goods bought from participating stores: spend at least 250 dirhams, ask for a tax-free tag, and validate at a Planet kiosk when you leave, getting back roughly 85 to 87% after a small fee. VAT on hotels, restaurants and anything you use in the country isn't refundable." },
    { q: "How much is Dubai's tourist tax?", a: "Dubai charges a flat \"Tourism Dirham\" per room per night by hotel star rating: about 20 dirhams for 5-star, 15 for 4-star, 10 for 3-star and 7 for budget hotels or hotel apartments, capped at 30 nights. Abu Dhabi instead adds a 4% tourism fee on the room bill. These sit on top of the 5% VAT, service charge and municipality fee hotels include in the rate." },
    { q: "Can I pay with US dollars in Dubai?", a: "Not really. A handful of tourist-facing hotels, souk stalls and tour operators will take US dollar bills, but they set their own rate and it is usually a poor one, so you lose money on every note. Shops, taxis, the metro and restaurants price in dirhams and expect dirhams or a card. Since the dirham is pinned to the dollar at about 3.67, there is no rate risk in just paying in dirhams, so change a little or tap your card and skip the dollar-bill markup." },
    { q: "How much cash do I need for Dubai as a tourist?", a: "Very little. Dubai runs almost entirely on cards and Apple Pay or Google Pay, so most visitors do fine with about 200 to 500 dirhams (roughly 55 to 135 dollars) for the souks, small eateries and tips, and put everything else on a card. Pull dirhams from a bank ATM or change a small amount at an in-mall exchange house like Al Ansari, and skip the airport counters." }
  ],

  culture: {
    heading: "A few words of Arabic go a long way",
    intro: "Arabic is the language, written in a flowing script, and a warm Marhaba and a story or two mark you as a guest rather than a tourist. Hospitality runs deep in the Emirates.",
    phrases: [
      { mean: "Hello, peace be upon you", say: "as-sa-LAAM-u a-LAY-kum", word: "As-salamu alaykum", native: "السلام عليكم" },
      { mean: "Hello, welcome", say: "MAR-ha-ba", word: "Marhaba", native: "مرحبا" },
      { mean: "Please", say: "min FAD-lak", word: "Min fadlak", native: "من فضلك" },
      { mean: "Thank you", say: "SHOOK-ran", word: "Shukran", native: "شكراً" },
      { mean: "Let's go, come on", say: "YAL-la", word: "Yalla", native: "يلا" },
      { mean: "Delicious", say: "la-ZEEZ", word: "Lazeez", native: "لذيذ" },
    ],
    tip: "A guest here is always welcomed with <b>gahwa</b>, lightly spiced Arabic coffee, and fresh <b>dates</b>, and it is polite to accept. Behind the modern towers lies a proud Bedouin heritage of the desert and the sea. A little Arabic, starting with <b>Shukran</b> for thank you, is always appreciated.",
    stories: [
      { img: "/uae-culture-1.jpg",
        alt: "WPA-style illustration of pearl divers at work from a traditional wooden dhow on the calm Gulf at dawn, one poised to dive with a rope and basket and another opening oysters on the deck",
        h: "Riches from the sea",
        p: "Long before oil, the Gulf lived by the pearl. Every summer, divers sailed out on wooden dhows and plunged again and again to the seabed, holding their breath with a nose clip and a basket, to gather oysters by hand. It was hard and dangerous work, and for centuries pearls were the region's great treasure.",
        note: "Good to know: pearling was the economy before oil" },
      { img: "/uae-culture-2.jpg",
        alt: "WPA-style illustration of a falconer in a flowing robe and headdress standing among golden dunes at sunset with a falcon perched on his gloved arm, long shadows across the sand",
        h: "The sport of the desert",
        p: "For thousands of years, the Bedouin of Arabia trained falcons to hunt across the desert, a partnership of great skill and trust between bird and handler. Once it helped put food on the table, and today it is a treasured national sport and a symbol of the country. A prized falcon is cherished like family.",
        note: "Good to know: falconry is a national symbol of the Emirates" },
      { img: "/uae-culture-3.jpg",
        alt: "WPA-style illustration of a caravan of camels and robed Bedouin travelers crossing rolling desert dunes at dusk, a black goat-hair tent and a small fire in the distance under a crescent moon",
        h: "Life among the dunes",
        p: "The Bedouin crossed the vast deserts of Arabia with their camels, the ships of the desert, moving between wells and grazing and gathering at night around the fire outside black goat-hair tents. Their code of courage, poetry and above all hospitality to any traveler still shapes the country today.",
        note: "Say it: the ship of the desert is the camel" },
    ],
    pride: "Emiratis are proud of a nation that rose from the desert and the pearl beds to a global crossroads in a single lifetime, without ever letting go of its roots. They honor the camel, the falcon and the poem, and above all the age-old duty to welcome a guest. Accept the coffee and the dates, and you honor them back."
  }
};
