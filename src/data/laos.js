import { S } from './carrier-spine.js';

export default {
  slug: "laos",
  iso2: "la",
  live: true,
  name: "Laos",
  from: "United States",
  checked: "Jul 2026",
  checkedISO: "2026-07-16",
  sources: {
    changed: "Sources added on first publish. Confirmed with PwC's tax summary that Laos charges a standard 10% VAT and has no separate tourist tax or visitor refund. Verified the tourist visa on the official Lao e-visa portal, with a visa on arrival also available, and the separate, free online immigration form. The kip's rate, around 22,000 to the dollar in mid-2026 after a rough few years, moves, so the live panel below and a fresh check both matter.",
    links: [
      { label: "PwC Worldwide Tax Summaries: Laos's standard 10% VAT", url: "https://taxsummaries.pwc.com/lao-pdr/corporate/other-taxes", type: "revenue" },
      { label: "Lao e-Visa (official government portal): the tourist e-visa, entry points and fee", url: "https://laoevisa.gov.la", type: "gov" },
      { label: "Trading Economics: the Lao kip's exchange rate against the US dollar", url: "https://tradingeconomics.com/laos/currency", type: "currency" },
      { label: "UK Foreign, Commonwealth and Development Office: emergency numbers and help in Laos", url: "https://www.gov.uk/foreign-travel-advice/laos/getting-help", type: "gov" }
    ],
    judgment: "The daily cash share, the tipping norms, and the ATM limit and fee ranges are our own read from recent traveler and bank reports, not a single official table. Treat them as a planning guide and confirm anything critical before you travel."
  },
  emergency: { medical: "1195", note: "1195 is the ambulance line, with 1191 for police, 1190 for fire and 1192 for the tourist police. Care outside Vientiane is very limited and serious cases are often moved to Thailand, so travel insurance that covers medical evacuation matters here. The US 911 number does not work.", checked: "Jul 2026", checkedISO: "2026-07-16" },
  insuranceLevel: "high",
  region: "Asia",
  signals: { cardFriendliness: 1, cashNeed: 5, taxRisk: 2, atmRisk: 4 },
  hook: "Laos is a cash-first country where the kip rules daily life, so bring a fee-friendly debit card, pull kip in small amounts from a bank ATM because limits are low, keep clean US dollars or Thai baht as backup, and pay in kip rather than dollars.",
  aliases: ["laos", "lao", "lao pdr", "laotian", "vientiane", "luang prabang", "vang vieng", "pakse", "4000 islands", "si phan don", "plain of jars", "nong khiaw", "mekong", "kip", "lak", "bcel", "ldb", "tak bat", "alms giving", "khao piak", "laap", "sticky rice", "that luang", "ldif", "evisa"],
  title: "Laos money 2026: the kip, cash and ATM limits",
  description: "A cash-first country where the kip rules. ATM limits are low and each withdrawal carries a fee, so bring a card that refunds them. Checked 2026.",
  h1: "Money in Laos, sorted.",
  lede: "A calm, current plan for the money side of your trip: how much cash to carry, why ATMs need patience, and the local rules to know before you go.",
  hero: {
    img: "/laos-hero.jpg",
    h: 1375,
    alt: "A quiet Luang Prabang street at dusk with French-Lao shophouses, string lights overhead, a golden wat spire nearby and the Mekong beyond, a lone figure walking away, and a woven bamboo sticky-rice basket with a steaming bowl of noodle soup on a wooden table in the foreground"
  },
  notice: 'We only cover trips departing from the United States right now. Want an email the moment we add your home country? <a href="#" onclick="return false"><b>Sign up for an alert</b></a>.',
  verdict: "Laos runs on <b>cash</b>, and the everyday cash is the <b>kip</b>. Cards work only at higher-end hotels and a few upscale spots in Vientiane and Luang Prabang, so bring a <b>fee-friendly debit card</b>, pull kip from a bank ATM, and expect to do it more than once because <b>withdrawal limits are low</b>. Carry a little <b>clean US dollars or Thai baht</b> as backup, keep small kip notes for stalls and tuk-tuks, and always pay in <b>kip</b>, not dollars.",
  meter: {
    heading: "Day to day, Laos leans heavily on cash.",
    cashPct: 80,
    note: "A rough feel for everyday spending. Cards and QR climb a little at big hotels and tourist restaurants in Vientiane and Luang Prabang, but almost everything else, street food, markets, tuk-tuks, guesthouses and anywhere rural, is cash in kip. Keep small notes on you and pull more than you think you need."
  },
  trio: [
    { sym: "card", kind: "warn", h: "Your card", verd: "Rarely accepted", p: "Cards work only at bigger international hotels and some upscale restaurants and shops in Vientiane and Luang Prabang, often with a <b>2 to 3% surcharge</b>. Apple Pay and Google Pay are not widely supported. Everywhere else is cash, so treat a card as a backup, not your main way to pay.", cta: { label: "Check yours", href: "#calc" } },
    { sym: "cash", kind: "warn", h: "Cash", verd: "Yes, every day", p: "The kip is the everyday currency for street food, markets, tuk-tuks, guesthouses and small shops. Carry <b>small notes</b> for daily spending, since vendors often cannot change the largest 100,000 kip note. US dollars and Thai baht are handy as backup, but you will get a worse rate spending them.", cta: { label: "How much to bring", href: "#cash" } },
    { sym: "atm", kind: "warn", h: "ATMs", verd: "Low limits, real fees", p: "Machines in the cities and tourist towns take Visa and Mastercard and dispense kip, but the <b>per-withdrawal limit is low</b>, often 1 to 2 million kip (roughly 45 to 90 dollars), with a <b>20,000 to 40,000 kip</b> fee on top of your bank's. Plan several withdrawals, or step inside a BCEL branch to take out more for the same fee.", cta: { label: "See fee-saving cards", href: "#" } }
  ],
  plan: [
    { sym: "tag", when: "Before you go", bullets: [
      "Get a <b>no-foreign-fee debit card</b> for cash. Charles Schwab refunds ATM fees worldwide, which suits Laos and its per-withdrawal fees well; Wise and Revolut are low-fee.",
      "Bring a little <b>clean US dollars or Thai baht</b> as backup, and a Visa or Mastercard for the few places that take cards.",
      "Sort your <b>e-visa</b> at the official site or plan a visa on arrival, and complete the free online <b>Lao immigration form</b> before you fly.",
      "<b>Tell your bank</b> you are traveling so your card is not blocked on arrival."
    ], cta: { label: "See no-fee card options", tag: "earn", href: "#" } },
    { sym: "plane", when: "At the airport", bullets: [
      "Have <b>clean US dollars or Thai baht</b> ready for the visa on arrival fee, plus two passport photos.",
      "Pull your first kip from a <b>bank ATM</b> and <b>decline any offer to convert to dollars</b>.",
      "Change only a small amount at the airport counter; rates are better in town."
    ], cta: { label: "Find fee-saving cards", tag: "earn", href: "#" } },
    { sym: "bowl", when: "Day to day", bullets: [
      "<b>Cash in kip</b> for almost everything; keep small notes handy.",
      "Use a <b>card</b> only at bigger hotels and upscale spots, and expect a small surcharge.",
      "<b>Always choose kip</b> on any card terminal or ATM screen.",
      "Because ATM limits are low, <b>withdraw in the largest chunk your machine allows</b>, or use a bank branch."
    ], cta: { label: "How tipping works here", tag: "free", href: "#tipping" } },
    { sym: "usd", when: "A golden rule", bullets: [
      "<b>Always pay in kip, never in dollars.</b> Choosing your home currency (dynamic currency conversion) quietly adds a poor rate on top of any fee.",
      "This is true at shop terminals and at ATMs alike, and it matters even more where withdrawals already carry a fee."
    ], cta: null }
  ],
  cash: {
    rate: 22000, cur: "LAK", round: 100000, defaultIndex: 1,
    rateNote: "Rough guide at about 22,000 kip to the dollar in mid-2026; it is a high-inflation currency, so check the live rate. Because ATM limits are low, plan on several withdrawals during your trip.",
    styles: [ { n: "Budget", per: 25, cash: 0.85, room: 30 }, { n: "Mid-range", per: 45, cash: 0.75, room: 65 }, { n: "Comfort", per: 85, cash: 0.6, room: 150 } ]
  },
  connectivity: {
    works: "Yes in Vientiane, Luang Prabang, Vang Vieng and the main towns and roads, with 4G and some 5G. Coverage thins quickly in the mountains and remote valleys, so download maps before you head off the main routes."
  },
  tax: {
    none: true,
    currency: "LAK",
    note: "Laos has no separate nightly tourist tax to pay at checkout. A 10% VAT applies to most goods and services and is usually built into the price you see, though bigger hotels and restaurants may add it, with a service charge, on top of a net rate. There is no visitor VAT refund, so the tax is simply part of what you pay."
  },
  currencyHeading: "The kip, in plain terms.",
  facts: [
    { sym: "denom", k: "Quick conversion", v: "About 22,000 kip to $1 in mid-2026, though the rate moves, so check it. A quick gut check: drop three zeros and roughly halve, so 100,000 kip is about 4 to 5 dollars. The largest note, 100,000 kip, is worth under 5 dollars." },
    { sym: "smallnotes", k: "Carry small notes", v: "Notes run up to 100,000 kip, and vendors often cannot change the biggest one, so keep a stack of smaller notes for tuk-tuks, street food and markets. The kip is a closed currency you cannot use abroad, so spend it down before you fly home." },
    { sym: "atm", k: "Low ATM limits and fees", v: "Bank ATMs dispense kip but cap most withdrawals at 1 to 2 million kip, roughly 45 to 90 dollars, and charge 20,000 to 40,000 kip each time on top of your bank's fee. Plan several pulls, or withdraw more inside a BCEL branch for the same fee." },
    { sym: "tip", k: "Tipping is not expected", v: "Laos is not a tipping culture, so there is no set percentage. Rounding up or leaving small change for good service is a kind gesture rather than an obligation, and it is always welcome. See the tipping section below." }
  ],
  taxfree: {
    label: "Taxes and refunds",
    heading: "What is in the price, and why there is nothing to reclaim.",
    text: "Two things worth knowing. Laos charges a <b>10% VAT</b> on most goods and services, and it is normally <b>built into the price</b> you see, so the number on the tag or menu is what you pay. At bigger hotels and restaurants you may instead see VAT added on top of a net rate, sometimes with a <b>service charge</b> of around 10%, so ask whether a quoted price is <b>all in</b> if it matters. Second, there is <b>no tourist VAT refund</b> in Laos, so there is nothing to claim back at the airport; the tax is simply part of the price."
  },
  keyFacts: [
    { label: "Laos tourist visa (30 days, US citizens)", value: "About $40 as a visa on arrival at the airport, or roughly $50 via the official e-visa, plus two passport photos and the fee in clean US dollars or Thai baht. A free online Lao immigration form is also required before arrival.", status: "enacted", effective: null, source: "https://laoevisa.gov.la", checked: "2026-07-16" }
  ],
  traps: [
    "<b>Pay in kip, never in dollars.</b> At a card terminal or ATM, choosing your home currency (dynamic currency conversion) adds a poor rate on top of any fee. Pick kip every time.",
    "<b>ATM limits are low, so plan ahead.</b> Most machines cap a withdrawal near 1 to 2 million kip and charge 20,000 to 40,000 kip each time, so several small pulls get expensive. Withdraw the maximum at once, or step inside a BCEL branch to take out more for the same fee.",
    "<b>The kip does not leave the country.</b> It is a closed currency you cannot exchange abroad, so spend or change any leftover kip before you fly out of Laos.",
    "<b>Bring clean, newer notes for backup cash.</b> US dollars and Thai baht are accepted in some tourist spots and are the only currencies taken for the visa on arrival, but they must be crisp and unmarked, and dollar notes should be newer than 2009.",
    "<b>ATMs can be quick to take the cash back.</b> Some machines pull unclaimed cash and your card back in fast, so take everything promptly."
  ],
  tippingHeading: "Not expected, always welcome.",
  tipping: "Laos is not a tipping culture, so there is no set percentage and no one expects it. Rounding up a tuk-tuk fare, leaving small kip notes after a good meal, or tipping a guide who looked after you well are all kind gestures rather than obligations, and they are genuinely appreciated given local wages. Some upscale hotels and restaurants add a <b>service charge</b> already, so check the bill before adding more. Tip in <b>kip</b> where you can, and hand it over directly.",
  faqs: [
    { q: "Do I need cash in Laos?", a: "Yes, every day. Laos is a cash-first country, and the kip is needed for street food, markets, tuk-tuks, guesthouses and most daily life. Cards work only at bigger hotels and a few upscale spots in Vientiane and Luang Prabang." },
    { q: "What is the exchange rate for the Lao kip?", a: "Around 22,000 kip to the US dollar in mid-2026, though the kip has seen high inflation and the rate moves, so check a current figure before you travel. It is a high-denomination currency, so expect to carry thick stacks of notes." },
    { q: "How much can I withdraw from an ATM in Laos?", a: "Not much at once. Most bank ATMs cap a single withdrawal at about 1 to 2 million kip, roughly 45 to 90 dollars, and charge 20,000 to 40,000 kip on top of your own bank's fee. Plan several withdrawals, or step inside a BCEL branch, where you can often take out more for the same fee." },
    { q: "Can I use US dollars or Thai baht in Laos?", a: "Sometimes, in tourist areas of Vientiane, Luang Prabang and near the Thai border, and they are the only currencies accepted for the visa on arrival. But you will get a worse rate spending them than paying in kip, and small purchases and rural areas are kip only. Bring some clean, newer notes as a backup." },
    { q: "Should I pay in kip or dollars on a card machine in Laos?", a: "Always kip. If a card terminal or ATM offers to charge you in dollars, decline it; that dynamic currency conversion adds a poor rate on top of any fee, and it stings more here because withdrawals already carry one." },
    { q: "Do US citizens need a visa for Laos?", a: "Yes. You can get a visa on arrival at major airports and land borders for about 40 dollars, or apply for an e-visa in advance at the official site for roughly 50 dollars, both for a 30-day stay. Bring two passport photos and the fee in clean US dollars or Thai baht, and complete the free online Lao immigration form before you arrive." },
    { q: "Do you tip in Laos?", a: "It is not expected and there is no set percentage. Rounding up or leaving small kip notes for good service is appreciated but never required. Some upscale places add a service charge already, so check the bill first." },
    { q: "Can I take leftover kip home?", a: "It is best not to try. The kip is a closed currency that you cannot exchange outside Laos, so spend it down or change it back before you leave the country." },
    { q: "How much cash should I bring for a week in Laos?", a: "For two mid-range travelers, very roughly 350 to 500 US dollars in day-to-day spending across a week beyond your hotel, most of it withdrawn as kip in several ATM visits. Adjust for your style and how remote your route is." }
  ],
  culture: {
    heading: "A little Lao goes a long way",
    intro: "Lao is written in its own graceful, rounded script and no one expects you to read it, but a warm Sabaidee with a small bow and a story or two mark you as a guest rather than a tourist. Laos moves at its own gentle pace, and a little patience and courtesy are met with real warmth.",
    phrases: [
      { mean: "Hello", say: "sah-bai-DEE", word: "Sabaidee", native: "ສະບາຍດີ" },
      { mean: "Thank you", say: "khawp-JAI", word: "Khop chai", native: "ຂອບໃຈ" },
      { mean: "Please", say: "kah-lu-NA", word: "Kaluna", native: "ກະລຸນາ" },
      { mean: "Delicious", say: "saep", word: "Saep", native: "ແຊບ" },
      { mean: "Sorry, excuse me", say: "khaw-TOHT", word: "Khaw thot", native: "ຂໍໂທດ" },
      { mean: "No worries, it is fine", say: "baw-pen-NYANG", word: "Bo pen nyang", native: "ບໍ່ເປັນຫຍັງ" }
    ],
    tip: "Greet people with a <b>nop</b>, palms pressed together at the chest with a small bow, the Lao version of the Thai wai; it is a lovely thing to return. As across the region, the <b>head is sacred</b> and the <b>feet are lowest</b>, so do not touch anyone's head or point your feet at people or Buddha images. Dress modestly at temples, cover shoulders and knees, and if you watch the dawn alms round, keep a respectful distance and stay quiet.",
    stories: [
      { img: "/laos-culture-1.jpg",
        alt: "WPA-style illustration of a long line of saffron-robed monks walking barefoot down a misty street at dawn while kneeling townspeople place sticky rice into their alms bowls",
        h: "The quiet ritual of dawn",
        p: "Each morning before sunrise in Luang Prabang, hundreds of barefoot monks walk in a long silent line to receive offerings of sticky rice from kneeling residents, a ceremony called Tak Bat that has gone on for centuries. It is calm, wordless and deeply moving. Watch quietly from a distance, without flash or fuss, and you glimpse the soul of Lao Buddhism.",
        note: "Good to know: the dawn alms round is called Tak Bat" },
      { img: "/laos-culture-2.jpg",
        alt: "WPA-style illustration of a Lao woman weaving intricate patterned silk at a traditional wooden loom, spools of jewel-toned thread around her",
        h: "Stories woven in silk",
        p: "Lao women have woven silk on wooden looms for generations, and the intricate patterns, dragons, diamonds and ancestral motifs, carry meaning passed down through families. A single fine piece can take weeks, and the craft is a point of deep pride, worn at weddings and festivals across the country. Watch a weaver at work and you see patience turned into art.",
        note: "Good to know: handwoven Lao silk often marks weddings and festivals" },
      { img: "/laos-culture-3.jpg",
        alt: "WPA-style illustration of a wooden longboat gliding along a wide river at golden hour among forested limestone karst mountains, a lone boatman at the stern",
        h: "Life along the Mekong",
        p: "The Mekong is the thread that ties Laos together, and long wooden boats still carry people and goods between riverside villages framed by forested limestone peaks. A slow journey upriver, past fishermen and stilt houses in the golden light, is one of the calmest things you can do in Southeast Asia. The river sets the rhythm of Lao life.",
        note: "Good to know: the Mekong runs the length of the country" }
    ],
    pride: "Lao people are gentle, unhurried and quick to smile, proud of their Buddhist faith, their handwoven silk and a way of life the country calls sabai, an easy contentment. Return a nop, take things slowly, show respect at the temples, and Laos opens up warmly."
  },

  spokes: [
    {
      slug: "cash-or-card",
      glance: [
        { k: "Currency", v: "Lao kip (LAK)" },
        { k: "Cards", v: "Rare outside upscale hotels" },
        { k: "Carry", v: "Kip, in small notes" },
        { k: "ATMs", v: "Low limits, a fee each time" }
      ],
      live: true,
      topic: "cash",
      caution: "medium",
      title: "Do I need cash in Laos? Yes, kip every day",
      description: "Laos runs on kip, cards work only at bigger hotels and a few upscale spots, and ATM limits are low, so plan several withdrawals. Checked 2026.",
      h1: "Do I need cash in Laos, or can I use cards?",
      lede: "Cash, and plenty of it. Laos is the most cash-dependent country we cover, and the friction is not acceptance, it is the ATM: low limits and a fee every time. A little planning fixes it.",
      checked: "Jul 2026",
      checkedISO: "2026-07-30",
      answer: "Cash, almost entirely, and the cash is the <b>Lao kip</b>. Cards work only at <b>bigger international hotels and a few upscale restaurants and shops</b> in Vientiane and Luang Prabang, often with a surcharge, so treat a card as a backup rather than your way of paying. Pull kip from a <b>bank ATM</b> and expect to do it more than once, because <b>per-withdrawal limits are low</b> and each pull carries a fee. Bring a <b>fee-friendly debit card</b>, keep <b>small kip notes</b> for stalls and tuk-tuks, carry a little <b>clean US dollars or Thai baht</b> as backup, and always choose <b>kip</b> on any screen.",
      sections: [
        {
          h: "Cash first, and the cash is kip",
          icon: "cash",
          key: { fig: "Small notes", tag: "The biggest note is small", text: "The largest kip note is worth under five dollars, and vendors often cannot change it. Keep a stack of smaller notes for street food, markets and tuk-tuks.", tone: "teal" },
          p: [
            "Street food, markets, tuk-tuks, guesthouses, small shops and almost everything outside a handful of city addresses run on <b>kip in hand</b>. Cards are accepted at <b>bigger international hotels</b> and some upscale restaurants and shops in <b>Vientiane and Luang Prabang</b>, frequently with a <b>2 to 3 percent surcharge</b>, and Apple Pay and Google Pay are not widely supported. Plan your trip as a cash trip and you will not be caught out.",
            "Because the kip is a <b>high-denomination currency</b>, the largest note is worth under five dollars and you will carry thick stacks. Keep <b>small notes</b> deliberately: a vendor often cannot break the biggest one, and having exact-ish change is the difference between a smooth transaction and a stalled one. One more thing to plan for: the kip is a <b>closed currency</b> you cannot exchange abroad, so spend it down before you fly out."
          ]
        },
        {
          h: "ATMs: low limits and a fee every time",
          icon: "atm",
          key: { fig: "1 to 2 million", tag: "The usual per-pull cap", text: "That cap is per withdrawal rather than per day, so a week of spending money means several trips and several fees. A card that refunds those charges is the one thing worth sorting before you fly.", tone: "amber" },
          p: [
            "This is the real friction. Bank ATMs in the cities and tourist towns take Visa and Mastercard and dispense kip, but most cap a single withdrawal near <b>1 to 2 million kip</b>, roughly <b>45 to 90 dollars</b>, and charge <b>20,000 to 40,000 kip</b> each time on top of whatever your own bank adds. Several small withdrawals across a week add up to real money.",
            "Three ways to soften it. <b>Take the maximum the machine allows</b> rather than what you need today. <b>Step inside a bank branch</b>, where you can often withdraw a larger sum for the same single fee. And carry a <b>debit card that refunds ATM fees</b>, which cancels the charge entirely and is the single most useful thing to sort before you fly. Use machines attached to real banks, in daylight, and take your cash and card promptly, since some machines retrieve them quickly."
          ]
        },
        {
          h: "Dollars and baht as backup, kip for everything else",
          icon: "usd",
          key: { fig: "Choose kip", tag: "Not your home currency", text: "An offer to charge you in dollars is dynamic currency conversion at a poor rate, and it stings more here because the withdrawal already carries a fee.", tone: "amber" },
          p: [
            "<b>Clean US dollars or Thai baht</b> are worth carrying as a backup: they are accepted in some tourist spots and near the Thai border, and they are the currencies taken for the <b>visa on arrival</b>, which also wants two passport photos. Notes must be <b>crisp and unmarked</b>, and dollar bills should be newer than 2009. You will get a <b>worse rate</b> spending them than paying in kip, so treat them as insurance rather than spending money.",
            "On any card terminal or ATM screen, <b>choose kip</b>. Taking the offer to be charged in your home currency is dynamic currency conversion, which layers a poor rate on top of a fee you are already paying. Check the rate before you travel too: the kip has had a rough few years of inflation, so a figure from a few months ago may be well out of date. This guide is written for US travelers departing the US. For more, see <a href='/laos/tipping'>tipping in Laos</a>, <a href='/laos/taxis-and-ride-hailing'>taxis and ride-hailing in Laos</a>, and the <a href='/laos'>Laos money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do I need cash in Laos?", a: "Yes, every day. Kip is what street food, markets, tuk-tuks, guesthouses and small shops take. Cards work only at bigger hotels and a few upscale spots in Vientiane and Luang Prabang, often with a surcharge." },
        { q: "How much can I withdraw from an ATM in Laos?", a: "Not much at once. Most machines cap a single withdrawal near 1 to 2 million kip, roughly 45 to 90 dollars, and charge 20,000 to 40,000 kip on top of your own bank's fee. Take the maximum allowed, or step inside a branch where a larger withdrawal often costs the same single fee." },
        { q: "Can I use US dollars or Thai baht in Laos?", a: "Sometimes, in tourist areas and near the Thai border, and they are the currencies accepted for the visa on arrival. The rate is worse than paying in kip and small purchases are kip only, so carry a little clean, newer cash as backup rather than as your main money." },
        { q: "Can I take leftover kip home from Laos?", a: "It is best not to. The kip is a closed currency that you cannot exchange outside the country, so spend it down or change it back before you leave." }
      ],
      sources: {
        links: [
          { label: "Bank of the Lao PDR: the central bank's official kip exchange rates", url: "https://www.bol.gov.la/en/ExchangRate", type: "bank" },
          { label: "US State Department: Laos country information, noting that most care providers there accept cash only", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Laos.html", type: "gov" }
        ],
        judgment: "The ATM caps, the per-withdrawal fees and the card surcharges are our own read from recent traveler and bank reports rather than one official table, and they vary by bank and machine. The kip has seen high inflation, so treat any dollar equivalent as a snapshot. Checked July 2026."
      }
    },
    {
      slug: "tipping",
      glance: [
        { k: "Tipping", v: "Not traditional, welcome" },
        { k: "Restaurants", v: "Round up, or leave small notes" },
        { k: "Service charge", v: "Check upscale bills" },
        { k: "How", v: "Small kip notes, handed over" }
      ],
      live: true,
      topic: "tipping",
      caution: "low",
      title: "Tipping in Laos: not traditional, but welcome 2026",
      description: "Tipping is not traditional in Laos but increasingly welcome. What to leave at restaurants, and what guides, drivers and hotel staff usually get.",
      h1: "Tipping in Laos",
      lede: "Laos is not a tipping culture, so there is no percentage to remember and nobody is waiting for one. In tourist areas a small tip has become normal and is genuinely appreciated, which is a different thing from expected.",
      checked: "Jul 2026",
      checkedISO: "2026-07-30",
      answer: "Tipping is <b>not traditional</b> in Laos and there is <b>no set percentage</b>. In tourist areas it has become <b>increasingly welcome</b>, and against local wages a small amount means a lot. <b>Rounding up</b> a tuk-tuk fare, leaving <b>small kip notes</b> after a good meal, or tipping a <b>guide or driver</b> who looked after you are all kind gestures rather than obligations. Some upscale hotels and restaurants already add a <b>service charge</b>, so check the bill before adding more. Tip in <b>kip</b> where you can, and <b>hand it over directly</b>.",
      sections: [
        {
          h: "Not traditional, increasingly welcome",
          icon: "coins",
          key: { fig: "No percentage", tag: "Optional, not expected", text: "There is no tipping norm to follow in Laos. Rounding up or leaving small kip notes for good service is appreciated, and leaving nothing is perfectly normal.", tone: "teal" },
          p: [
            "Laos has <b>no tipping tradition</b>, and at a local noodle shop or a market stall nothing is expected at all. What has changed is the tourist trail: in <b>Luang Prabang, Vientiane and Vang Vieng</b>, small tips have become normal at places used to visitors, and given local wages they are received warmly.",
            "The practical version: at a <b>casual place</b>, round up or leave your small change. At a <b>tourist restaurant or a nicer place</b>, leaving a little more for good service is fine. There is no percentage to calculate and no awkwardness in leaving nothing, which is a genuinely relaxing way to travel."
          ]
        },
        {
          h: "Check the bill at upscale places",
          icon: "receipt",
          key: { fig: "Service charge", tag: "Sometimes already added", text: "Bigger hotels and restaurants may add a service charge of around 10 percent, with VAT shown separately, so read the bill before you add anything.", tone: "amber" },
          p: [
            "Bigger hotels and restaurants sometimes add a <b>service charge</b> of around 10 percent, and Laos's <b>10 percent VAT</b> may be shown separately rather than folded into the menu price. Between the two, a bill can land a little above what you expected, so it is worth a look before you decide what to add.",
            "Where a service charge is already there, <b>you have done your part</b>. If you want to make sure a specific person gets something, a small amount handed to them directly is the way, since a service charge is pooled by the house."
          ]
        },
        {
          h: "Guides, drivers and hotel staff",
          icon: "tip",
          key: { fig: "Small notes", tag: "Kip, handed over", text: "Tip in kip in small notes, handed to the person. A guide or driver who gave you a full day is the one place worth being more generous.", tone: "teal" },
          p: [
            "The people most often tipped are the ones who spend real time with you: a <b>guide</b> on a day trip, a <b>driver</b> on a long road or river journey, a <b>boat operator</b> on the Mekong. Scale it to the day rather than a percentage of anything, and be more generous than you would for a short errand.",
            "Tip in <b>kip</b>, in <b>small notes</b>, and <b>hand it over directly</b> rather than leaving it on a table. Keeping a few small notes back for this is worth doing, since breaking a large note specifically to tip is a nuisance. This guide is written for US travelers departing the US. For the wider picture, see <a href='/laos/cash-or-card'>cash or card in Laos</a>, <a href='/laos/taxis-and-ride-hailing'>taxis and ride-hailing in Laos</a>, and the <a href='/laos'>Laos money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do you tip in Laos?", a: "It is not traditional and there is no set percentage, so leaving nothing is normal. In tourist areas a small tip has become common and is genuinely appreciated, especially for guides, drivers and good service at places used to visitors." },
        { q: "Should I tip in kip or dollars in Laos?", a: "Kip, in small notes, handed to the person directly. Kip is what the recipient can actually spend, and small notes save you breaking a large one just to leave a tip." },
        { q: "Do restaurants in Laos add a service charge?", a: "Bigger hotels and restaurants sometimes add around 10 percent, and the 10 percent VAT may appear separately rather than in the menu price. Read the bill before adding anything, since where a service charge is already there you have done your part." },
        { q: "How much should I tip a guide in Laos?", a: "There is no set figure. Scale it to the length and difficulty of the day rather than to a percentage, and be more generous for someone who gave you a full day than for a short errand." }
      ],
      sources: {
        links: [
          { label: "US State Department: Laos country information for US travelers", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Laos.html", type: "gov" },
          { label: "Bank of the Lao PDR: the central bank's official kip exchange rates, for what a small note is worth", url: "https://www.bol.gov.la/en/ExchangRate", type: "bank" }
        ],
        judgment: "Tipping norms are social rather than official, so what counts as normal here is the True Trip Costs desk's read from recent traveler reports and local practice, not a published schedule. Service charges vary by property, so the bill is the thing to read. Checked July 2026."
      }
    },
    {
      slug: "taxis-and-ride-hailing",
      glance: [
        { k: "Metered taxis", v: "Scarce" },
        { k: "Everyday rides", v: "Tuk-tuks and songthaews" },
        { k: "App", v: "LOCA, in the main towns" },
        { k: "Fares", v: "Agree before you get in" }
      ],
      live: true,
      topic: "taxis",
      caution: "low",
      title: "Taxis, tuk-tuks and the LOCA app in Laos 2026",
      description: "Metered taxis are scarce in Laos. How tuk-tuks and songthaews work, the LOCA ride app, and why you agree the fare before setting off. Checked 2026.",
      h1: "Taxis, tuk-tuks and ride apps in Laos",
      lede: "Metered taxis barely exist here. Getting around means tuk-tuks, shared songthaews and, in the bigger towns, a local ride app that takes the negotiation out of it. One habit covers the rest: settle the fare first.",
      checked: "Jul 2026",
      checkedISO: "2026-07-30",
      answer: "<b>Metered taxis are scarce</b> in Laos. Everyday rides are <b>tuk-tuks</b> and <b>songthaews</b>, the shared pickup trucks with benches in the back that run set routes for a small fare. In Vientiane, Luang Prabang and the other main towns, the local app <b>LOCA</b> books a licensed car or taxi at a <b>fare shown up front</b>, which is the simplest option for a visitor and takes cash, card or a QR payment. If you are taking a tuk-tuk the usual way, <b>agree the fare before you get in</b>, for the whole trip, and carry <b>small kip notes</b> to pay it.",
      sections: [
        {
          h: "What is actually on the road",
          icon: "taxi",
          key: { fig: "Tuk-tuks", tag: "And shared songthaews", text: "Tuk-tuks do short hops and hired days. Songthaews are converted pickups running set routes for a small fare, which you flag down and pay when you get off.", tone: "teal" },
          p: [
            "Forget the idea of stepping off a curb into a metered cab: that is not how Laos works. <b>Tuk-tuks</b> handle short hops around town and can be hired for a half or full day, and they wait in obvious places, outside markets, temples, bus stations and hotels. Fares are <b>negotiated, not metered</b>.",
            "<b>Songthaews</b>, converted pickup trucks with two benches in the back, run <b>set routes</b> like informal buses: you flag one down, squeeze in, and pay a small fare when you get off. They are the cheapest way to move around and between nearby towns, at the cost of stopping whenever anyone else wants on."
          ]
        },
        {
          h: "LOCA, the local ride app",
          icon: "qr",
          key: { fig: "LOCA", tag: "Fare shown up front", text: "LOCA is the licensed Lao ride app, covering Vientiane, Luang Prabang and other main towns, with the fare set in the app and cash, card or QR payment.", tone: "teal" },
          p: [
            "<b>LOCA</b> is the Lao-built ride app and the easiest answer for a visitor. It books licensed cars, taxis and motorbike rides with the <b>fare shown before you accept</b>, English in the app, and payment by <b>cash, card or a Lao QR code</b>, so there is nothing to negotiate and no cash-only trap. Coverage runs across <b>Vientiane and Luang Prabang</b> and reaches other main towns including Vang Vieng, Pakse and Savannakhet.",
            "Two practicalities. It needs <b>mobile data</b>, so sort an eSIM or a local SIM before you rely on it, and cars can be thin on the ground at busy times or late in the evening, especially outside the capital. For an <b>airport pickup</b> or the run to the railway station with luggage, booking ahead through the app is the calmest way to do it."
          ]
        },
        {
          h: "Agree the fare, and carry small notes",
          icon: "coins",
          key: { fig: "Agree first", tag: "Before you get in", text: "Settle the price out loud before the ride starts, including any waiting time. A fare left open until you arrive is a negotiation, not a price.", tone: "amber" },
          p: [
            "With a tuk-tuk, the price is whatever you agree, so <b>agree it before you get in</b> and be clear that it covers the <b>whole trip</b> and any <b>waiting time</b> if you are asking the driver to hold. Confirm whether the price is <b>per person or for the vehicle</b>, which is the most common misunderstanding. Asking your guesthouse what a ride should cost before you walk out gives you a reference point, since fares move with fuel prices and there is no published tariff.",
            "Pay in <b>small kip notes</b>. A driver rarely has change for the largest note, and a hundred-dollar bill from an ATM is no use to anyone here. Rounding up is a normal thank you, and a driver who gave you a full day deserves more than rounding. This guide is written for US travelers departing the US. For the wider picture, see <a href='/laos/cash-or-card'>cash or card in Laos</a>, <a href='/laos/tipping'>tipping in Laos</a>, and the <a href='/laos'>Laos money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Is there Uber or Grab in Laos?", a: "No. The local app is LOCA, which books licensed cars, taxis and motorbike rides in Vientiane, Luang Prabang and other main towns, with the fare shown before you accept and payment by cash, card or QR." },
        { q: "How do tuk-tuk fares work in Laos?", a: "They are negotiated, not metered. Agree the price out loud before you get in, confirm it covers the whole trip and any waiting time, and check whether it is per person or for the vehicle. Asking your guesthouse what a ride should cost gives you a reference point." },
        { q: "What is a songthaew?", a: "A converted pickup truck with two benches in the back, running set routes like an informal bus. You flag one down, ride with whoever else is going that way, and pay a small fare when you get off. It is the cheapest way to get around." },
        { q: "Can I pay for rides by card in Laos?", a: "In the LOCA app, yes, along with QR payment or cash. Everything else, tuk-tuks and songthaews included, is cash in kip, so keep small notes on you." }
      ],
      sources: {
        links: [
          { label: "LOCA: the licensed Lao ride-hailing service's own information on coverage, transparent fares and payment options", url: "https://loca.la/ride-taxi/", type: "official" },
          { label: "US State Department: Laos country information, including road and transportation safety", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Laos.html", type: "gov" }
        ],
        judgment: "App coverage grows and tuk-tuk fares move with fuel prices, so we have avoided quoting prices and stuck to the habits that hold: use the app where it reaches, and agree the fare before you get in. Checked July 2026."
      }
    },
    {
      slug: "rail",
      glance: [
        { k: "Booking site", v: "None that works" },
        { k: "Official app", v: "Needs a Lao, Thai or Chinese number" },
        { k: "Sales window", v: "About 7 days out, from 6:30 AM" },
        { k: "At the counter", v: "Cash, plus a 20,000 kip fee" }
      ],
      live: true,
      topic: "rail",
      caution: "high",
      title: "Laos-China Railway tickets: the booking problem",
      description: "The train is the easy part. Why the official LCR app needs a local phone number, how the 7-day sales window works, and what a station counter costs.",
      h1: "Booking the Laos-China Railway, and why that is the hard part",
      lede: "The Laos-China Railway is fast, comfortable and the obvious way to move between Vientiane and Luang Prabang. Getting a seat is what catches visitors out, because the booking and payment side was not built for anyone without a local phone number. Here is how it actually works.",
      checked: "Aug 2026",
      checkedISO: "2026-08-14",
      answer: "The train is easy, the ticket is not. There is <b>no functioning booking website</b>, the official <b>LCR app requires a Lao, Thai or Chinese phone number</b>, and seats for popular runs like <b>Vientiane to Luang Prabang</b> sell out <b>within minutes</b> of the sales window opening, which is roughly <b>7 days ahead at 6:30 AM</b>. Some downtown offices accept <b>only local QR or UnionPay</b>, not cash or foreign cards. So there are two routes that work for a visitor: a <b>station counter with cash</b> as soon as your date opens, where a <b>20,000 kip</b> fee applies, or a <b>small markup to an agent</b> like Baolau or 12Go. Carry a <b>passport for every passenger</b>, because names are printed on the ticket and checked on exit.",
      sections: [
        {
          h: "Why there is no simple way to book",
          icon: "phoneok",
          key: { fig: "No website", tag: "And the app needs a local number", text: "There is no functioning booking site for the railway. The official LCR app will only register a Lao, Thai or Chinese phone number, which rules it out for most visitors arriving without a local SIM.", tone: "amber" },
          p: [
            "Every other part of this railway is straightforward. The booking is not, and the reason is worth understanding before you plan around it: there is <b>no functioning booking website</b>, and the <b>official LCR app requires a Lao, Thai or Chinese phone number</b> to set up an account. If you land without a local SIM, the official channel is simply closed to you, which is not how rail booking works almost anywhere else you will have travelled.",
            "The second wrinkle is payment. Some <b>downtown ticket offices accept only local QR or UnionPay</b>, so a visitor turning up with cash or a foreign Visa or Mastercard can be turned away at the window. That combination, no website, an app you cannot register for, and offices that may not take your money, is what turns a simple train ride into the fiddliest booking in the region."
          ]
        },
        {
          h: "The sales window, and how fast it goes",
          icon: "calendar",
          key: { fig: "6:30 AM", tag: "About 7 days ahead", text: "Seats for the popular runs, Vientiane to Luang Prabang above all, sell out within minutes of the window opening. Treat the opening time as an appointment, not a rough guide.", tone: "amber" },
          p: [
            "Tickets go on sale on a rolling window of roughly <b>7 days</b>, opening at <b>6:30 AM</b>. For the runs visitors want most, <b>Vientiane to Luang Prabang</b> being the obvious one, seats can be gone <b>within minutes</b>. This is the single fact that should shape your itinerary: you cannot book the train months ahead the way you would book a European train, and you cannot casually decide on the day.",
            "Practically, that means fixing your travel dates far enough ahead to know them, then treating the moment the window opens as a small appointment. If your plans are loose, plan on the possibility that the train is full and keep a road or air option in mind, rather than building a tight itinerary around a seat you do not have yet."
          ]
        },
        {
          h: "Paying, the counter fee and the passport rule",
          icon: "passport",
          key: { fig: "20,000 kip", tag: "Station counter fee", text: "Buying in person with cash at a station counter carries a 20,000 kip fee. An agent such as Baolau or 12Go charges a small markup instead, which is the sensible trade if you cannot get a local SIM.", tone: "teal" },
          p: [
            "There are two routes that reliably work. The first is to <b>go to a station counter with cash</b> as soon as your date opens, where a <b>20,000 kip</b> fee applies. The second is to <b>pay a small markup to an agent</b> such as <b>Baolau or 12Go</b>, which is the sensible choice if you cannot get a local SIM, since you are buying your way past the app registration problem rather than the price of the seat.",
            "One rule catches people out at the end of the journey rather than the start: <b>carry a passport for every passenger</b>. Names are <b>printed on the ticket and checked on exit</b>, so a ticket bought for a slightly different spelling, or a passport left at the guesthouse, becomes a problem at the barrier rather than on the platform. For the wider money picture, see <a href='/laos/cash-or-card'>cash or card in Laos</a>, <a href='/laos/taxis-and-ride-hailing'>taxis and ride apps in Laos</a>, and the <a href='/laos'>Laos money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Can I book Laos-China Railway tickets online?", a: "Not through an official website, because there is not a functioning one. The official route is the LCR app, which requires a Lao, Thai or Chinese phone number. Visitors without a local SIM use a station counter or an agent such as Baolau or 12Go instead." },
        { q: "How far in advance do Laos train tickets go on sale?", a: "Roughly 7 days ahead, with the window opening at 6:30 AM. Seats on popular runs such as Vientiane to Luang Prabang can sell out within minutes, so the opening moment matters more than booking early in the usual sense." },
        { q: "Can I pay for a Laos train ticket with a foreign card?", a: "Not everywhere. Some downtown ticket offices accept only local QR or UnionPay, and not cash or foreign cards. A station counter takes cash, with a 20,000 kip fee, which is why carrying kip is the reliable approach." },
        { q: "Do I need my passport to travel on the Laos-China Railway?", a: "Yes, for every passenger. Names are printed on the ticket and checked on exit, so each traveller needs their own passport both to buy the ticket and to complete the journey." }
      ],
      sources: {
        links: [
          { label: "Nomadic Notes: how to buy tickets for the Laos-China Railway, on the app, the counters, the agents and the sales window", url: "https://www.nomadicnotes.com/laos-china-railway-tickets/", type: "guide" },
          { label: "Laos-Adventures by Tiger Trail: the LCR ticket app, station practicalities and the passport requirement", url: "https://laos-adventures.com/train", type: "guide" }
        ],
        judgment: "This is the most volatile page we keep on Laos, and we would rather say so than pretend otherwise. The rules here change often: the advance sales window moved from 3 days to 7 days in July 2025, and app payment options are expanding, so the position is genuinely moving under us. Treat every detail on this page as dated to August 2026 and re-verify before you rely on it, especially the app registration rules and which offices take which payment method. The shape of the problem, no working website and an app built around local phone numbers, has held for years, so that is the part we are confident about. Checked Aug 2026."
      }
    },
    {
      slug: "visa",
      glance: [
        { k: "Visa", v: "Required, 30 days" },
        { k: "Cheapest", v: "About $40 on arrival, in cash" },
        { k: "Online", v: "Roughly $50 on the official portal" },
        { k: "Also", v: "A free online immigration form" }
      ],
      live: true,
      topic: "visas",
      title: "Laos visa for US citizens: about $40 on arrival, $50 online",
      description: "US citizens need a Laos tourist visa, valid 30 days. The visa on arrival is about $40 in cash, the official e-visa roughly $50. Bring two photos. Checked 2026.",
      h1: "Do US citizens need a visa for Laos?",
      lede: "Yes, and the online route is the expensive one. Laos charges roughly ten dollars a person more to apply in advance than to buy the visa at the airport counter, which is the reverse of the usual advice. Here is what each costs, and what the cheaper one wants from you.",
      checked: "Jul 2026",
      checkedISO: "2026-07-16",
      answer: "Yes. US citizens need a <b>tourist visa</b> for Laos, valid <b>30 days</b>. The <b>visa on arrival</b> at the airport is <b>about $40</b>, paid in cash in clean US dollars or Thai baht, with <b>two passport photos</b>. The official <b>e-visa</b> is <b>roughly $50</b>, so applying in advance costs about <b>ten dollars more</b> per person, not less. Both are one-off and per person. A <b>free online Lao immigration form</b> is also required before arrival, and it is genuinely free.",
      official: {
        label: "Lao e-Visa, the official government portal",
        url: "https://laoevisa.gov.la",
        note: "The government's own e-visa site, at roughly $50. The visa on arrival at the airport is about $40 in cash, so the portal is the convenient route rather than the cheap one. It buys you an approval in hand and no counter queue. We earn nothing by sending you here.",
      },
      expediter: false,
      sections: [
        {
          h: "The online route costs about ten dollars more",
          icon: "usd",
          key: {
            fig: "$40 vs $50",
            tag: "On arrival is cheaper",
            text: "About $40 at the airport counter, roughly $50 through the official e-visa portal. The gap is wider here than in neighbouring Cambodia.",
            tone: "teal"
          },
          p: [
            "The usual advice, in most of the world, is to sort the visa online before you fly because it is cheaper as well as calmer. In Laos it is only calmer. The <b>visa on arrival</b> runs at <b>about $40</b>, and the official <b>e-visa</b> at <b>roughly $50</b>.",
            "That is a <b>ten dollar gap per person</b>, so a family of four is looking at forty dollars for the convenience. Worth paying if you land late, travel with children, or simply do not want to hunt for clean notes and photographs before a counter. Not worth paying by accident, which is what happens when you follow generic advice that assumes online is always cheaper."
          ]
        },
        {
          h: "What the cheaper route wants from you",
          icon: "cash",
          key: {
            fig: "2 photos",
            tag: "Plus cash, in dollars or baht",
            text: "The counter wants two passport photos and the fee in clean notes, and it takes Thai baht as well as US dollars.",
            tone: "amber"
          },
          p: [
            "The on-arrival route is cheaper but it is the one with a shopping list, and every item on it is easier to sort at home than at an airport at the end of a flight:"
          ],
          steps: [
            "<b>The fee in cash</b>, in clean US dollars or Thai baht. Two accepted currencies is unusually flexible, and useful if you are arriving overland from Thailand with baht already in your pocket.",
            "<b>Two passport photos.</b> Two, not one. This is the item people are most often short of, and it is the hardest to fix on the spot.",
            "<b>A passport with space in it</b>, plus your onward travel and accommodation details."
          ]
        },
        {
          h: "Arriving by land or by rail, and what we have not checked",
          icon: "train",
          key: {
            tag: "Our figure covers the airport",
            text: "The about-$40 on-arrival price is sourced for the airport. We have not verified whether the same route and price apply at land or railway crossings.",
            tone: "amber"
          },
          p: [
            "This matters more in Laos than it would elsewhere, because the <b>China to Laos railway</b> has made arriving by train a normal thing to do rather than an adventure, and plenty of visitors now cross by land from Thailand as well.",
            "Our sourced figure, <b>about $40 on arrival</b>, is for the <b>airport</b>. We have <b>not</b> verified that the visa on arrival is available, or priced the same, at railway and land crossings. That is a gap in what we know rather than a claim that it is unavailable. If you are arriving overland, the safe move is the <b>official e-visa in advance</b>, and paying the roughly ten dollars extra rather than testing an assumption at a border post. For the trains themselves, see the <a href=\"/laos/rail\">Laos rail guide</a>."
          ]
        },
        {
          h: "The free immigration form, and why there is no link here",
          icon: "alert",
          key: {
            tag: "Free, required, and deliberately unlinked",
            text: "A free online Lao immigration form is required before arrival. We have not verified a dedicated official URL for it, so we will not name it and leave you to search.",
            tone: "amber"
          },
          p: [
            "Separately from the visa, Laos requires a <b>free online immigration form</b> before you arrive. It is a different filing from the e-visa, and it costs <b>nothing</b>.",
            "We have not linked it, deliberately. The rule on this site is that an arrival form is never named without its real government address in the same breath, because a named form with no link sends you straight to a search page, and lookalike sites buy those search terms precisely because these filings are new, obscure and mandatory. Naming it and leaving you to find it would push you into the exact harm the rule exists to prevent.",
            "So: the form exists, it is <b>free</b>, and until we can source its own official portal we point you at the <b>e-visa site above</b> to complete it through the official channel. If any site quotes you a price for a Lao immigration form, that price is the whole product."
          ]
        },
        {
          h: "Who else will try to sell you this visa",
          icon: "receipt",
          key: {
            tag: "The markup is the avoidable part",
            text: "The visa fee is unavoidable. An agent's cut on top of it is not, and much of what outranks the government portal is an agent.",
            tone: "amber"
          },
          p: [
            "The fee itself is real and you will pay it. What is optional is the layer on top. Search for a Laos visa and a good deal of what ranks above the official portal is a reseller, submitting the same application to the same government site and charging you for the keystrokes.",
            "<b>We publish no figure for that markup</b>, because none is sourced for Laos and it varies by reseller. That is on purpose: putting a made-up number on what a middleman charges would be the same fault as the middleman. What we can give you precisely is the official price, <b>about $40 on arrival or roughly $50 online</b>, and the official address, <b>laoevisa.gov.la</b>. Anything above that is somebody's fee rather than Laos's. For how money works once you are in, see the <a href=\"/laos\">Laos money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Do US citizens need a visa for Laos in 2026?", a: "Yes. A tourist visa is required, valid 30 days. You can buy it on arrival at the airport for about $40 in cash, in clean US dollars or Thai baht, with two passport photos, or apply in advance on the official portal at laoevisa.gov.la for roughly $50." },
        { q: "Is the Laos e-visa cheaper than the visa on arrival?", a: "No. It is about ten dollars more per person. The visa on arrival runs around $40 and the official e-visa around $50. You pay the difference for an approval in hand and no counter queue, not for a lower price, which is the reverse of the usual advice." },
        { q: "What do I need for a Laos visa on arrival?", a: "The fee in cash in clean US dollars or Thai baht, two passport photos, and a passport with space in it, plus your onward travel and accommodation details. Two photos rather than one is the item travelers are most often caught short on." },
        { q: "Can I get a Laos visa on arrival at a land or rail border?", a: "We have not verified that. Our sourced figure of about $40 on arrival covers the airport, and we have not confirmed whether the same route and price apply at railway or land crossings. If you are arriving overland, apply for the official e-visa in advance rather than assuming." }
      ],
      sources: {
        links: [
          { label: "Lao e-Visa, the official government portal: the tourist e-visa, entry points and fee", url: "https://laoevisa.gov.la", type: "gov" }
        ],
        judgment: "The roughly $40 on-arrival fee, the roughly $50 e-visa, the 30-day validity, the two-photo and clean-cash requirements, the acceptance of Thai baht as well as US dollars, and the free online immigration form all come from this guide's own check against the official Lao e-visa portal, dated 16 July 2026. They are read from the Laos guide's own entry fact rather than copied, so the two cannot drift apart. Three things we deliberately do not publish: a figure for reseller markup, because none is sourced and inventing one would be the same fault as the reseller; a link for the free immigration form, because we have not verified its own official portal; and any claim about the visa on arrival at railway or land crossings, because our source covers the airport and the China to Laos railway makes that a real question rather than an edge case. Our read that the extra ten dollars is worth paying if you land late or travel with children is judgment, not policy."
      }
    },
    {
      slug: "staying-connected",
      glance: [
        { k: "Coverage", v: "Fine in the towns, thin between" },
        { k: "Carrier roaming", v: `${S.dayPassGlance}` },
        { k: "Cheapest", v: "A local SIM, a few dollars" },
        { k: "Signal gaps", v: "The mountain north, river routes" }
      ],
      live: true,
      esim: true,
      topic: "connectivity",
      caution: "medium",
      title: "Laos SIM card: cheap data, and real gaps between towns",
      description: "A Unitel SIM costs a few dollars and Unitel has the widest reach. Coverage is fine in Vientiane and Luang Prabang and genuinely thin in the mountainous north.",
      h1: "Staying connected in Laos.",
      lede: "Laos sells data for almost nothing and has less of a network to sell it on than its neighbors. The right move is a cheap local SIM plus the habit of downloading things before you leave a town.",
      checked: "Aug 2026",
      checkedISO: "2026-08-18",
      answer: `Coverage is <b>fine in Vientiane, Luang Prabang, Pakse and Vang Vieng</b> and along <b>Route 13</b>, and genuinely <b>thin between them</b>: the mountainous north, the eastern highlands, the Bolaven back roads and the Mekong river routes have real gaps. On price, a <b>local SIM</b> from <b>Unitel</b> or <b>Lao Telecom</b> costs a <b>few dollars</b> for a generous data pack, bought with your <b>passport</b> at the airport or a phone shop, and <b>Unitel</b> has the widest reach by a clear margin, which matters more here than the price does. Your US carrier charges about <b>${S.dayPass}</b> (<b>AT&amp;T and Verizon</b> day passes, and Laos is on AT&amp;T's covered list), though <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, and covers the rest of that bill period on land, so the daily arithmetic stops past day 10, and <b>T-Mobile</b>'s mid and upper tiers include <b>${S.tmoRange}</b> of high-speed data. A <b>Nomad eSIM</b> is a few dollars per gigabyte and does not change the coverage, so <b>download offline maps</b> before any long bus or boat day. Never roam <b>pay-per-use</b>, at about ${S.ppu}.`,
      sections: [
        {
          h: "Cheap, and the network matters more than the price",
          icon: "tag",
          key: { fig: "A few $", tag: "Unitel", text: "Data costs almost nothing. What varies is reach, and Unitel has clearly the most of it, so buy the network rather than the cheapest pack.", tone: "teal" },
          p: [
            "A <b>Unitel</b> or <b>Lao Telecom</b> SIM with a data pack is a <b>few dollars</b>, and at that price the difference between the options is not money, it is <b>where the signal exists</b>. <b>Unitel</b> has the broadest network in the country, including a lot of the north, and it is the one to ask for by name. Buy at <b>Vientiane or Luang Prabang airport</b> or an official shop, with your <b>passport</b>.",
            `Against a US carrier day pass at <b>${S.dayPass}</b>, a month of Lao data for a few dollars is not a close comparison, and a travel eSIM costs several times it. We earn nothing on a Unitel SIM and it is still the right buy for a Laos-only trip.`
          ]
        },
        {
          h: "The gaps between towns are the real story",
          icon: "alert",
          key: { fig: "Route 13", tag: "Fine on it, thin off it", text: "Towns and the main highway are covered. The mountainous north, the eastern highlands and the river routes are not, on any network.", tone: "amber" },
          p: [
            "In the towns you will have workable 4G, with 5G in parts of <b>Vientiane</b>. Off them, Laos is mountains and river valleys with a young network, and the gaps are real rather than nominal: much of the <b>north</b> around Nong Khiaw and Phongsali, the <b>eastern highlands</b>, the <b>Bolaven plateau</b> back roads, and the <b>slow boat</b> down the Mekong from Huay Xai, which is two days with long stretches of nothing.",
            "No purchase fixes that, which is worth saying on a page that carries an eSIM link. What helps is preparation: <b>download offline maps</b> and your accommodation details before leaving a town, screenshot your bus or boat booking, and treat a long travel day as offline by default. Guesthouse <b>wifi</b> on the tourist trail is common and often the best connection you will have."
          ]
        },
        {
          h: "Roaming, and the eSIM case",
          icon: "roamfee",
          key: { fig: `${S.dayPassFig}`, tag: "Roaming default", text: "Laos is on AT&T's covered-destination list, so the day pass applies rather than pay-per-use, and AT&T caps it at 10 fees a bill period.", tone: "teal" },
          p: [
            `Worth confirming because it changes the arithmetic: <b>Laos is on AT&amp;T's covered-destination list</b>, so a day pass applies at about <b>${S.dayPass}</b> rather than pay-per-use, and <b>AT&amp;T caps its Day Pass at ${S.capFees}</b>, about <b>${S.capAmount}</b>, and covers the rest of that bill period on land, so the daily arithmetic stops past day 10. <b>T-Mobile</b>'s current tiers include roughly <b>${S.tmoLow}</b> on Experience More, Magenta MAX and Go5G Plus, <b>${S.tmoMid}</b> on Experience Beyond and Go5G Next and <b>${S.tmoHigh}</b> on Better Value, slowing to <b>${S.throttle}</b> after.`,
            "A <b>Nomad eSIM</b> makes sense here mainly as part of a <b>regional plan</b>, since Laos is usually one leg of a trip through Thailand, Vietnam or Cambodia, and one plan across all of them beats a SIM per border. It rides the same Lao networks, so it does not buy you coverage the local SIM lacks. This guide is written for US travelers departing the US. For more, see <a href='/laos/cash-or-card'>cash or card in Laos</a>, <a href='/laos/taxis-and-apps'>taxis and apps in Laos</a>, and the <a href='/laos'>Laos money guide</a>."
          ]
        }
      ],
      faqs: [
        { q: "Which network has the best coverage in Laos?", a: "Unitel, by a clear margin, including much of the mountainous north. Ask for it by name rather than taking the cheapest pack on the counter, because at these prices the difference between options is reach rather than money." },
        { q: "How much is a SIM card in Laos?", a: "A few dollars for a Unitel or Lao Telecom data pack, bought with your passport at the airport or an official phone shop. That is a fraction of one day of US carrier roaming." },
        { q: "Will I have signal on the slow boat down the Mekong?", a: "Not for much of it. The two-day slow boat from Huay Xai passes long stretches with no coverage on any network, and the same is true of the mountainous north and the eastern highlands. Download maps, bookings and anything you want to read before you leave a town." },
        { q: "How much does it cost to use my US phone in Laos?", a: `About ${S.dayPass} on an AT&T or Verizon day pass, and Laos is on AT&T's covered-destination list so the day pass applies rather than pay-per-use. AT&T caps its Day Pass at ${S.capFees}, so about ${S.capAmount} covers the rest of that bill period on land, while Verizon's TravelPass has ${S.verizonNoCap} and keeps billing daily. T-Mobile is worth checking first, since its mid and upper tiers include ${S.tmoRange} abroad.` }
      ],
        sources: {
        links: [
          { label: "T-Mobile: international roaming pages listing the high-speed data allowance by plan tier", url: "https://www.t-mobile.com/customers/unlimited-roaming-sms-data", type: "card" },
          { label: "Verizon: international travel pages, the TravelPass daily rate and what it includes", url: "https://www.verizon.com/plans/international/international-travel/travel-pass/", type: "card" },
          { label: "AT&T: International Day Pass details, the daily rate and the 10-fee cap per bill period", url: "https://www.att.com/support/article/wireless/KM1175103/", type: "card" },
          { label: "AT&T: the International Day Pass destination list, which includes Laos", url: "https://www.att.com/support/article/wireless/KM1395068/", type: "card" },
          { label: "US State Department: Laos country information and local conditions", url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Laos.html", type: "gov" }
        ],
        judgment: "Checked Aug 2026. Laos inclusion on AT&T's covered-destination list was verified against AT&T's own list on this check, since an uncovered country would need a pay-per-use warning instead of a daily rate. The coverage picture is the desk's read from operator footprints and consistent traveler accounts rather than one official table, and the honest summary is that the towns and Route 13 are fine while the north and the river routes are not. No data plan changes that, which is why this page spends as much space on offline habits as on price."
      }
    }
  ]
};
