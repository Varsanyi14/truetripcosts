// THE CHANGELOG: the entry list behind /changelog, the "what changed in travel money"
// page.
//
// WHAT THIS IS, AND WHAT IT IS NOT. This file records EVENTS: a fee that took effect, a
// rate that moved, a rule that changed, or a correction we made to our own wording. It
// never records checks. The site already has a place for "we looked at this and it is
// still true": the checked dates on every guide and the Latest Checks strip, both of
// which read the guides' own keyFacts. A check that found nothing new is real work but
// it is not a change, and dressing one up as the other is exactly the padding this page
// exists to disprove. If a re-check confirms everything, the guide's checked date moves
// and NOTHING is added here.
//
// WHY THIS IS A CURATED FILE AND NOT A DERIVED FEED. The change record already in the
// repo lives in three prose homes: each guide's `recentChange` card, the change notes in
// each guide's `sources.changed`, and the `effective` dates on keyFacts. None of those
// distinguishes "what changed" from "what we confirmed" in a machine-readable way, and
// deriving a log from them would either pad it with confirmations or require parsing
// prose. So the log is curated: one entry per genuine change, written here, with the
// guide page as the place the CURRENT fact lives. The guide stays the source of truth
// for what is true now; this file is the source of truth for what changed and when.
// Two kinds of truth, two files, each linking to the other.
//
// THE STANDING RULE, forward from this build: when a genuine change lands in a guide
// (a new or updated `recentChange`, a corrected figure, a keyFact whose `effective`
// date arrives), its entry is added HERE in the same commit. A routine re-check that
// found nothing new adds nothing. The gate (scripts/check-changelog.mjs) holds the
// shape honest: every entry dated, not future-dated, linked to a real live page, with
// a real what-changed and why-it-matters. It cannot check that an entry is TRUE; that
// stays a human's job, same as every fact on the site.
//
// THE BACKFILL, and how it was bounded. Every entry below existed in the repo before
// this file did: each one is traceable to a guide's recentChange card, a dated change
// note in its sources panel, or a keyFact effective date. Nothing was inferred to
// thicken the history, and the many guides whose notes say only "confirmed, figures
// current" contributed nothing here, on purpose. Each entry carries a `src` comment
// naming where in the repo the change was already recorded.
//
// ENTRY SHAPE:
//   id     the entry's permanent URL segment: /updates/{id}/. AUTHORED and FROZEN, never
//          derived from the title. A title is editorial and may be reworded at any time;
//          deriving the id from it would silently move the URL and break every citation
//          and inbound link, which is the exact fragility the permanent record exists to
//          prevent. So the id is hand-written once, and once shipped it is NEVER changed.
//          Reword a title freely. Do not touch an id. If an entry is genuinely wrong
//          enough to need a new URL, that is a new entry, not an edited id.
//          Format: lowercase, hyphen-joined, {country-or-topic}-{what}-{YYYY-MM}. The
//          gate enforces the shape and enforces uniqueness, because two entries sharing
//          an id is one page silently overwriting the other at build time.
//   date   'YYYY-MM-DD' when the repo records the day, 'YYYY-MM' when it records only
//          the month. Month precision is honest and allowed; a guessed day is not.
//          For a world change this is the date the change took effect (or was decided);
//          for a correction it is the date the correction landed on the guide.
//   kind   'change'     the world moved: a fee, rate, rule or enforcement changed
//          'correction' we fixed our own wording or filled a gap, and we say so
//   title  one plain line naming the change
//   what   what changed, stated whole, in the site's calm voice
//   why    why it matters to a US traveler, one or two sentences
//   link   the page where the current fact lives, always a real path on this site
//   linkLabel  the reader-facing name of that page
//
// HOUSE RULES apply here as everywhere: no em dashes, no en dashes, hyphens only, and
// no absolute claims we cannot prove.

export const changelogEntries = [
  // src: united-kingdom.js eta spoke, re-checked 2026-09-04 against gov.uk transit guidance and the US Embassy notice
  {
    id: 'uk-eta-airside-transit-2026-09',
    date: '2026-09-04',
    kind: 'correction',
    title: 'UK ETA: we corrected how we described layovers',
    what: 'We had written that a UK layover needs an ETA even without leaving the airport. That is not right for a pure airside connection at Heathrow or Manchester, where you never pass UK border control: those are temporarily exempt. A landside transit (bag recheck, a border-crossing terminal change, separate tickets) or a connection at any other UK airport does need one. The 20 pound fee and the before-boarding rule for UK entry are unchanged.',
    why: 'If you are only connecting airside through Heathrow or Manchester, you may not need to buy an ETA at all. The exemption is temporary and under review, so verify before you book.',
    link: '/united-kingdom/eta',
    linkLabel: 'UK ETA guide',
  },
  // src: thailand.js keyFacts (Air arrival fee, checked 2026-08-17) and sources.changed
  {
    id: 'thailand-arrival-fee-2026-08',
    date: '2026-08-17',
    kind: 'change',
    title: 'Thailand raised its proposed arrival fee to 450 baht, and it is still not being collected',
    what: 'The proposed fee for air arrivals was raised from 300 to 450 baht (about 14 dollars), the land and sea portion was shelved, and the start has slipped to late 2026 or early 2027. We re-verified on 17 August 2026 that no fee is being collected today.',
    why: 'If you fly to Thailand this year there is nothing to pay on arrival, whatever an older article says. The free TDAC arrival card is still required.',
    link: '/thailand',
    linkLabel: 'Thailand money guide',
  },
  // src: jamaica.js sources.changed ("Corrected Aug 2026") and recentChange, checkedISO 2026-08-17
  {
    id: 'jamaica-hotel-tax-correction-2026-08',
    date: '2026-08-17',
    kind: 'correction',
    title: 'Jamaica: we corrected how we described the hotel tax rise',
    what: 'We previously wrote about the tourism GCT rate rise in a way that read as if it had already happened. It has not: the rate on a hotel bill today is still 10%. The legislated rise to the standard 15% takes effect 1 April 2027, phased in, and the hotel industry is contesting it.',
    why: 'A trip before April 2027 is not paying the higher rate, so do not budget for it yet.',
    link: '/jamaica',
    linkLabel: 'Jamaica money guide',
  },
  // src: mexico.js sources.changed ("Aug 2026: added the two charges...") and recentChange, checkedISO 2026-08-17
  {
    id: 'mexico-hotel-taxes-modeled-2026-08',
    date: '2026-08-17',
    kind: 'correction',
    title: 'Mexico: the two taxes on a hotel room, now stated and modeled',
    what: 'We added the 16% federal IVA and the state lodging tax (typically 2 to 5%, and 5% in Quintana Roo) to the guide and its calculator. The guide had understated both. We also recorded that Quintana Roo now actively scans VISITAX QR codes at airport departure.',
    why: 'A Mexican room rate can carry roughly a fifth in tax on top, and in the Cancun area the roughly 16 dollar VISITAX is now genuinely checked on the way out.',
    link: '/mexico',
    linkLabel: 'Mexico money guide',
  },
  // src: croatia.js / hungary.js / poland.js sources.changed ("Updated 31 July 2026: the EU removed its late-2026 ETIAS target")
  {
    id: 'etias-target-dropped-2026-07',
    date: '2026-07-31',
    kind: 'change',
    title: 'The EU dropped its late-2026 target for ETIAS',
    what: 'The EU removed the late-2026 launch target for ETIAS, its planned travel authorization, so there is once again no start date. Our European guides no longer quote one.',
    why: 'There is nothing to apply for and nothing to pay. A US passport is still all you need for the Schengen area, and any site selling ETIAS today is selling something that does not exist yet.',
    link: '/passports-and-visas',
    linkLabel: 'Passports and visas guide',
  },
  // src: united-kingdom.js keyFacts (Edinburgh visitor levy, effective 2026-07-24) and recentChange
  {
    id: 'edinburgh-visitor-levy-2026-07',
    date: '2026-07-24',
    kind: 'change',
    title: "Edinburgh's visitor levy took effect",
    what: 'Paid overnight stays in Edinburgh now carry a 5% levy on the room rate, charged before VAT and capped at the first five nights, collected by the accommodation. It is the first percentage visitor levy in the UK, and Glasgow follows with its own 5% from 25 January 2027.',
    why: "If you are booking Edinburgh, the sticker price is not the total: budget roughly 5% on top of the room.",
    link: '/united-kingdom',
    linkLabel: 'UK money guide',
  },
  // src: norway.js recentChange (dated Jul 2026) and sources.changed
  {
    id: 'norway-visitor-contribution-2026-07',
    date: '2026-07',
    kind: 'change',
    title: "Norway's visitor's contribution went live, in some places",
    what: "Norway's new visitor's contribution took effect in the summer of 2026. It lets a municipality add up to 3% to overnight stays, and it is opt-in: the Lofoten islands are an approved early area, with Bergen, Tromso and others expected to follow.",
    why: 'Whether you pay depends on where you stay, so a Lofoten room now runs a little more while much of the country adds nothing.',
    link: '/norway',
    linkLabel: 'Norway money guide',
  },
  // src: philippines.js recentChange (dated Jul 2026): law effective late 2024, upheld by the Supreme Court July 2026
  {
    id: 'philippines-vat-refund-upheld-2026-07',
    date: '2026-07',
    kind: 'change',
    title: "The Philippines' tourist VAT refund cleared its court challenge",
    what: 'The Supreme Court upheld RA 12079 in July 2026, the law that refunds the 12% VAT to foreign tourists on goods of at least 3,000 pesos from accredited stores, taken out of the country within 60 days. The scheme is still rolling out.',
    why: 'The refund is real and here to stay, but the accredited-store network is still growing, so ask whether a shop is in the scheme before you count on it.',
    link: '/philippines',
    linkLabel: 'Philippines money guide',
  },
  // src: ireland.js sources.changed (the M50 correction, also cited on /methodology), checkedISO 2026-07-03
  {
    id: 'ireland-m50-toll-correction-2026-07',
    date: '2026-07-03',
    kind: 'correction',
    title: 'Ireland: we corrected the M50 toll wording',
    what: 'The guide first described missing the M50 toll deadline as a flat 30 to 60 euro fine. In fact, missing the 8pm next-day deadline triggers a small per-journey late fee that then escalates, and the larger figure is a separate rental-company admin charge.',
    why: 'If you drive the M50 and miss the deadline, the immediate cost is small and grows with delay; the scary flat fine you may have read about is the rental desk, not the toll operator.',
    link: '/ireland',
    linkLabel: 'Ireland money guide',
  },
  // src: germany.js sources.changed ("a correction. We removed Munich..."), checkedISO 2026-07-04
  {
    id: 'germany-munich-bed-tax-correction-2026-07',
    date: '2026-07-04',
    kind: 'correction',
    title: 'Germany: we removed Munich from the bed-tax list',
    what: 'We had listed Munich among German cities charging a bed tax. Bavaria banned local hotel taxes and its Constitutional Court upheld that ban in 2025, so Munich does not levy one. Berlin (7.5%), Cologne (5%), Hamburg (sliding scale) and Frankfurt (2 euros a night) are confirmed.',
    why: 'A Munich hotel bill carries no city bed tax, so if a booking site shows one, question it.',
    link: '/germany',
    linkLabel: 'Germany money guide',
  },
  // src: austria.js keyFacts (Vienna Ortstaxe 5%, effective 2026-07-01; next step 8% on 2027-07-01) and sources.changed
  {
    id: 'austria-vienna-ortstaxe-2026-07',
    date: '2026-07-01',
    kind: 'change',
    title: "Vienna's accommodation tax rose to 5%",
    what: 'The Vienna Ortstaxe rose to 5% of the net room price on 1 July 2026, and a further step to 8% is already set for 1 July 2027.',
    why: 'A Vienna hotel stay now carries a mid-single-digit tax on top of the room, and it is scheduled to rise again next summer.',
    link: '/austria',
    linkLabel: 'Austria money guide',
  },
  // src: ireland.js recentChange (dated Jul 2026, "From 1 July 2026")
  {
    id: 'ireland-restaurant-vat-2026-07',
    date: '2026-07-01',
    kind: 'change',
    title: 'Ireland cut restaurant VAT back to 9%',
    what: 'From 1 July 2026, Ireland cut the VAT on restaurant and cafe meals from 13.5% back to 9%. Hotels were left out, and there is still no nightly tourist tax, though Dublin and Galway are pushing for the power to introduce one.',
    why: 'Eating out in Ireland should ease a little, while the room itself costs what it did.',
    link: '/ireland',
    linkLabel: 'Ireland money guide',
  },
  // src: sri-lanka.js keyFacts (ETA free, effective 2026-05-25) and recentChange
  {
    id: 'sri-lanka-eta-free-2026-05',
    date: '2026-05-25',
    kind: 'change',
    title: "Sri Lanka's tourist ETA became free for US citizens",
    what: 'Sri Lanka made its tourist ETA free of charge for nationals of 40 countries, and the United States is on the list. The ETA is still mandatory and must be obtained online before you fly; only the fee is gone.',
    why: 'Apply on the official portal and confirm the fee shows as zero for a US passport. Anyone charging you the old tourist fee is not the official channel.',
    link: '/sri-lanka',
    linkLabel: 'Sri Lanka money guide',
  },
  // src: new-zealand.js recentChange and keyFacts (Card surcharge ban, proposed, checked 2026-08-17); the deadline that passed was May 2026
  {
    id: 'new-zealand-surcharge-ban-stalled-2026-05',
    date: '2026-05',
    kind: 'change',
    title: "New Zealand's card-surcharge ban did not happen",
    what: 'The promised ban on in-store card surcharges missed its May 2026 deadline after a coalition partner withdrew support, and the bill remains stalled with no confirmed date.',
    why: 'Surcharges of around 2 to 3% still turn up at cafes, taxis and small shops, worst in tourist towns, so keep watching the terminal before you tap.',
    link: '/new-zealand',
    linkLabel: 'New Zealand money guide',
  },
  // src: turkey.js sources.changed ("temporarily reduced it to 1% from 1 May through 31 December 2026")
  {
    id: 'turkey-accommodation-tax-cut-2026-05',
    date: '2026-05-01',
    kind: 'change',
    title: "Turkey's accommodation tax was temporarily cut to 1%",
    what: 'A Presidential Decision reduced the 2% accommodation tax to 1% from 1 May through 31 December 2026, after which it returns to 2%. We updated the guide to the current 1%.',
    why: 'A Turkish hotel bill carries half the usual tax through the end of 2026, a small saving that arrives without you doing anything.',
    link: '/turkey',
    linkLabel: 'Turkey money guide',
  },
  // src: united-kingdom.js keyFacts (UK ETA fee 20 pounds, effective 2026-04-08) and the passports spoke's note that it rose from 16 pounds
  {
    id: 'united-kingdom-eta-fee-2026-04',
    date: '2026-04-08',
    kind: 'change',
    title: 'The UK ETA fee rose to 20 pounds',
    what: 'The fee for the UK Electronic Travel Authorisation rose from 16 to 20 pounds per person in April 2026. The ETA itself has been required for US visitors before boarding since 25 February 2026, lasts two years, and is issued through the official UK ETA app or GOV.UK.',
    why: 'Budget 20 pounds a person before a UK trip, and apply only through the official channel: lookalike sites charge far more for the very same approval.',
    link: '/united-kingdom',
    linkLabel: 'UK money guide',
  },
  // src: spain.js recentChange (dated Apr 2026, "Catalonia raised its tourist tax on 1 April 2026") and sources.changed
  {
    id: 'barcelona-tourist-tax-2026-04',
    date: '2026-04-01',
    kind: 'change',
    title: "Barcelona's tourist tax roughly doubled",
    what: 'Catalonia raised its tourist tax on 1 April 2026. In Barcelona the combined regional charge plus city surcharge now runs roughly 6 to 12 euros and up per person per night by accommodation category, capped at the first 7 nights, with under-16s exempt, and the city surcharge is set to keep rising about a euro a year through 2029. The rest of Catalonia rose more modestly.',
    why: 'A week in Barcelona for two can now carry well over 100 euros in tourist tax alone. Most of Spain, including Madrid, Andalusia and Valencia, still charges none.',
    link: '/spain',
    linkLabel: 'Spain money guide',
  },
  // src: sweden.js recentChange (dated Jul 2026, "From 1 April 2026") and sources.changed
  {
    id: 'sweden-grocery-vat-2026-04',
    date: '2026-04-01',
    kind: 'change',
    title: 'Sweden cut grocery VAT from 12% to 6%',
    what: 'From 1 April 2026, Sweden cut the VAT on most groceries from 12% to 6%, a temporary reduction scheduled to run to the end of 2027. Restaurant and cafe meals stayed at 12%, as did hotel stays.',
    why: 'VAT is already in the displayed price, so nothing changes about how you pay; a supermarket receipt just runs slightly cheaper than you might expect.',
    link: '/sweden',
    linkLabel: 'Sweden money guide',
  },
  // src: australia.js recentChange and sources.changed (RBA final decision published 31 March 2026) and keyFacts (ban effective 2026-10-01)
  {
    id: 'australia-surcharge-ban-2026-03',
    date: '2026-03-31',
    kind: 'change',
    title: 'Australia confirmed a card-surcharge ban, starting October',
    what: "The Reserve Bank of Australia's final decision, published 31 March 2026, bans card surcharges on eftpos, Visa and Mastercard from 1 October 2026. Until that date many merchants still add a surcharge, often around 1 to 1.5% and more on Amex, and Amex and PayPal surcharges can continue after the ban.",
    why: 'Travel before October and the surcharge line on the bill is still legal and common; travel after and it should be gone for Visa and Mastercard.',
    link: '/australia',
    linkLabel: 'Australia money guide',
  },
  // src: japan.js sources.changed ("Kyoto raised its lodging tax from 1 March 2026") and recentChange (dated March 2026)
  {
    id: 'kyoto-lodging-tax-2026-03',
    date: '2026-03-01',
    kind: 'change',
    title: 'Kyoto raised its lodging tax',
    what: 'Kyoto raised its lodging tax from 1 March 2026, with top-tier rooms now taxed up to 10,000 yen per person per night. Most travelers pay far less.',
    why: 'Factor it in for a high-end Kyoto stay; a mid-range room adds much less.',
    link: '/japan',
    linkLabel: 'Japan money guide',
  },
  // src: china.js recentChange ("from 1 February 2026, China began enforcing penalties on shops that refuse cash") and sources.changed
  {
    id: 'china-cash-refusal-penalties-2026-02',
    date: '2026-02-01',
    kind: 'change',
    title: 'China began enforcing penalties on shops that refuse cash',
    what: 'From 1 February 2026, China began enforcing penalties on merchants who refuse cash. Alipay and WeChat Pay remain how almost everyone pays, and both let visitors link an international Visa or Mastercard, with the per-transaction limit raised to about 35,000 CNY in 2026.',
    why: 'Yuan in your pocket is a reliable backup again, even in a country where nearly every payment happens by phone.',
    link: '/china',
    linkLabel: 'China money guide',
  },
  // src: netherlands.js recentChange (dated Jan 2026) and sources.changed
  {
    id: 'netherlands-hotel-vat-2026-01',
    date: '2026-01-01',
    kind: 'change',
    title: 'Dutch hotel VAT rose from 9% to 21%',
    what: 'On 1 January 2026, Dutch VAT on hotel and short-term rental accommodation rose from 9% to 21%, the same rate as most other goods and services. Combined with Amsterdam\'s 12.5% tourist tax, a room in the city can carry a combined tax load of roughly 33.5%.',
    why: 'Some bookings made before the change, and booking sites slow to update, may still show the old 9%, so double-check your total at checkout rather than trusting an older quote.',
    link: '/netherlands',
    linkLabel: 'Netherlands money guide',
  },
  // src: france.js recentChange (dated Jan 2026) and sources.changed
  {
    id: 'paris-tourist-tax-2026-01',
    date: '2026-01-01',
    kind: 'change',
    title: 'Paris raised its tourist tax',
    what: 'From 1 January 2026 the nightly taxe de sejour in Paris went up, partly to fund transport and Olympic-legacy projects. Expect roughly 6 euros and up per adult per night at a mid-range Paris hotel, more at higher categories, with under-18s still exempt.',
    why: 'The charge sits outside the room rate, so a Paris hotel bill runs a little over the price you booked. Most towns outside Paris stay at a euro or two.',
    link: '/france',
    linkLabel: 'France money guide',
  },
  // src: georgia.js keyFacts (Decree 602 insurance, effective 2026-01-01) and recentChange
  {
    id: 'georgia-insurance-mandatory-2026-01',
    date: '2026-01-01',
    kind: 'change',
    title: 'Georgia made travel insurance mandatory for tourists',
    what: 'From 1 January 2026, Georgia requires every foreign tourist to hold travel insurance covering the whole stay, with at least 30,000 GEL (about 11,000 dollars) of medical and accident cover, under Decree 602. Most standard US policies qualify.',
    why: 'Carry proof in English, since border officers can ask for it and travelers without it can be turned away or fined about 300 GEL. Buy a policy before you fly.',
    link: '/georgia',
    linkLabel: 'Georgia money guide',
  },
  // src: iceland.js recentChange (dated Jul 2026, "From 1 January 2026") and sources.changed
  {
    id: 'iceland-road-tax-2026-01',
    date: '2026-01-01',
    kind: 'change',
    title: 'Iceland switched to a per-kilometre road tax',
    what: 'From 1 January 2026 Iceland replaced part of its fuel tax with a per-kilometre road tax on all vehicles, about 6.95 ISK per km at the government rate, with rental companies typically adding an admin margin to around 8.8 ISK per km, billed after you drop the car off.',
    why: 'A full Ring Road loop of roughly 1,500 km can add about 13,200 ISK, around 105 dollars, to a rental, and it lands on your card after the trip rather than in the booking price.',
    link: '/iceland',
    linkLabel: 'Iceland money guide',
  },
  // src: south-korea.js keyFacts (e-Arrival Card, effective 2026-01-01) and recentChange
  {
    id: 'south-korea-arrival-card-2026-01',
    date: '2026-01-01',
    kind: 'change',
    title: "South Korea's e-Arrival Card became mandatory",
    what: 'Since 1 January 2026, Korea requires the free online e-Arrival Card for arrivals without a K-ETA, replacing the paper card. The K-ETA exemption for US citizens runs through 31 December 2026, and K-ETA becomes required again from 1 January 2027.',
    why: 'File the free card online before you land this year, and if your trip is in 2027, plan for the K-ETA to be back.',
    link: '/south-korea',
    linkLabel: 'South Korea money guide',
  },
  // src: indonesia.js recentChange (dated Oct 2025) and the arrival-card section
  {
    id: 'indonesia-arrival-card-merged-2025-10',
    date: '2025-10-01',
    kind: 'change',
    title: 'Indonesia merged its arrival card and customs declaration',
    what: 'Since 1 October 2025, Indonesia combined the arrival card, customs declaration and health screening into one free online filing, the All Indonesia arrival card, replacing the separate customs declaration. It is completed before you fly for a QR code at the airport.',
    why: 'It is now one form, not two, and it is free, so there is one less thing to file and nothing to pay. It is separate from your visa on arrival and the Bali levy, and paid lookalike sites charge for what the official site does free.',
    link: '/indonesia',
    linkLabel: 'Indonesia money guide',
  },
  // src: laos.js recentChange (dated Sep 2025) and the immigration-form section
  {
    id: 'laos-digital-arrival-card-2025-09',
    date: '2025-09-01',
    kind: 'change',
    title: 'Laos introduced a digital arrival and departure card',
    what: 'Since September 2025, Laos has run a free online arrival and departure filing, the Lao Digital Immigration Form, at its main international entry points, the airports at Vientiane, Luang Prabang and Pakse and the first Lao-Thai Friendship Bridge. It is filed on the official site for a QR code at the border.',
    why: 'A new step to complete before you travel to Laos through a main entry point, and one wanted on departure too. It is free on the official site and separate from the e-visa, but new enough that paid lookalikes target it.',
    link: '/laos',
    linkLabel: 'Laos money guide',
  },
  // src: greece.js recentChange (dated Aug 2025, "Since August 2025")
  {
    id: 'greece-atm-fees-dropped-2025-08',
    date: '2025-08',
    kind: 'change',
    title: 'Greek bank ATMs dropped their withdrawal fees',
    what: 'Since August 2025, cash withdrawals at ATMs run by Greek banks, including Alpha Bank, National Bank of Greece, Eurobank and Piraeus, carry no local commission for any cardholder, and independent non-bank machines are legally capped at a modest fee, well down from the 2 to 4 euros they used to charge.',
    why: "Your own bank's foreign fees can still apply, so a no-fee card still matters, but the Greek side of getting cash has gotten meaningfully cheaper.",
    link: '/greece',
    linkLabel: 'Greece money guide',
  },
  // src: brazil.js keyFacts (visitor e-visa, effective 2025-04-10) and sources.changed
  {
    id: 'brazil-evisa-required-2025-04',
    date: '2025-04-10',
    kind: 'change',
    title: 'Brazil began requiring an e-visa from US citizens',
    what: 'Since April 2025, US citizens need a visitor e-visa to enter Brazil, about 81 dollars, applied for on the official VFS portal before boarding.',
    why: 'This reversed years of visa-free entry, so plans and older guides that assume none are out of date. Apply before you fly, on the official portal only.',
    link: '/brazil',
    linkLabel: 'Brazil money guide',
  },
  // src: namibia.js keyFacts (tourist visa, effective 2025-04-01) and recentChange and sources.changed
  {
    id: 'namibia-visa-required-2025-04',
    date: '2025-04-01',
    kind: 'change',
    title: 'Namibia began requiring a visa from US citizens',
    what: 'Since 1 April 2025, Americans need a visa to enter Namibia, at N$1,600 (about 88 dollars), through the online e-visa portal or on arrival at main airports and border posts. A separate N$300 day-visit fee applies to cruise passengers at Walvis Bay and Luderitz.',
    why: 'A lot of older guides still say Namibia is visa-free for US citizens, and that is now wrong. Apply ahead and bring a printed approval.',
    link: '/namibia',
    linkLabel: 'Namibia money guide',
  },
  // src: hong-kong.js keyFacts (Hotel Accommodation Tax, effective 2025-01-01) and recentChange
  {
    id: 'hong-kong-hotel-tax-2025-01',
    date: '2025-01-01',
    kind: 'change',
    title: 'Hong Kong brought back its 3% hotel tax',
    what: 'On 1 January 2025 Hong Kong reinstated its 3% Hotel Accommodation Tax on the room charge, after 17 years at zero. It is usually already in the hotel bill, though a few hotels collect it at check-in.',
    why: 'A Hong Kong room now carries a small tax again, in a city that otherwise remains a free port with no sales tax at all.',
    link: '/hong-kong',
    linkLabel: 'Hong Kong money guide',
  },
];

// The rendered order: newest first, and stable between builds. Month-precision dates
// sort as the first of the month, so a dated entry in the same month lands above one
// the repo records only by month, which reads correctly: the more precisely dated
// event is the more recently confirmed one.
function sortKey(date) {
  return date.length === 7 ? date + '-01' : date;
}

export function changelog() {
  return [...changelogEntries].sort((a, b) =>
    sortKey(b.date).localeCompare(sortKey(a.date)) || a.title.localeCompare(b.title)
  );
}

// One entry by its permanent id, or null. The /updates/{id}/ route builds its pages from
// changelog() directly, so this is for anything that needs to resolve an id it was
// handed: a guide card pointing at its own record, a redirect, a future digest.
export function updateById(id) {
  return changelogEntries.find(e => e.id === id) || null;
}

// An entry's date as a short reader-facing label. Month precision renders as the month
// alone ('Aug 2025'), never a fabricated day; day precision renders in full.
export function displayDate(date) {
  const monthOnly = date.length === 7;
  const d = new Date((monthOnly ? date + '-01' : date) + 'T00:00:00');
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', monthOnly
    ? { month: 'short', year: 'numeric' }
    : { month: 'short', day: 'numeric', year: 'numeric' });
}
