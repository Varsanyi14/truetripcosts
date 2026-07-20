export default {
  slug: "laos",
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
  title: "Money in Laos (2026): Cash, the Kip, ATM Limits, Cards, Visa and Tipping | True Trip Costs",
  description: "How to handle money in Laos as a US traveler in 2026: why it is cash-first, the kip and its rate, low ATM limits and fees, when cards work, the visa, tipping, and the traps to avoid. Checked July 2026.",
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
  }
};
