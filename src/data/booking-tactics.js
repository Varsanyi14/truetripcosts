// THE HOTEL BOOKING-TACTICS DATA. Every sourced constant behind /how-to-pay-less-on-hotels,
// held here once so the page prose and the three visuals read the same number.
//
// ============================================================================
// RAIL 1. EVERY FIGURE HERE IS A BAND OR A RANGE FROM A NAMED SOURCE.
// ============================================================================
// Not one value in this file is a live rate, a per-hotel figure or a price. They are
// published averages, statutory rates and reported bands, each carrying the source that
// produced it and the date we read it. The page says so in its own copy, and the visuals
// print the band on the bar rather than drawing a width and hoping the reader infers it.
//
// A figure that would need live rates to stay true does not belong in this file, because
// the page it feeds is a tactics playbook and not a rate-comparison tool. That is the whole
// line the page must not cross: it teaches HOW to be smart wherever somebody books, it never
// says WHERE to book, and it never surfaces or compares a price. A number that rots in a
// month would push it across that line by itself.
//
// ============================================================================
// RAIL 2. PER-BOOKING COMMISSION AND PLATFORM TAKE RATE ARE TWO DIFFERENT THINGS.
// ============================================================================
// They are kept in two separate exports below and they must never be added, averaged or
// spoken of as one figure.
//   OTA_COMMISSION      what a hotel pays on one booking. This is the money a direct
//                       booking can recover, so it is the figure the tactic rests on.
//   PLATFORM_TAKE_RATE  a company-level metric off a 10-K: total revenue over total gross
//                       bookings, across a business that also sells flights, cars and
//                       attractions at far thinner margins. It is NOT what a hotel pays.
// Conflating them is the single most common error in writing on this subject, and it always
// runs the same way: the take rate is lower, so quoting it makes the commission look small
// and the direct-booking tactic look pointless. Both are here, both are labelled, and the
// commission viz shows them as visibly separate rows for exactly this reason.
//
// ============================================================================
// RAIL 3. SOURCES CARRY A URL WHERE WE HAVE READ THE PRIMARY DOCUMENT.
// ============================================================================
// A source object is { label, url, type }. `url: null` means the finding is sourced to the
// named document and we have not yet linked the primary text, so the page renders the
// citation unlinked rather than pointing a reader at a secondary write-up. The page counts
// the linked rows at build time and reports the count in its own sources panel, so the gap
// is visible to a reader instead of being a private to-do.
//
// TYPES, which drive nothing but the small icon beside a citation:
//   court   a judgment
//   reg     a regulator, ministry or statutory instrument
//   filing  a company filing
//   study   commissioned research
//   trade   an industry pricing guide
//   ttc     our own data, elsewhere on this site
//
// NO ARROW FUNCTIONS OR ANONYMOUS FUNCTIONS IN THIS FILE, deliberately. The prose gate
// (scripts/check-content.py) skips any src/data module that contains executable code,
// because a handful of modules legitimately concatenate strings. This file is pure literals
// so it stays inside the gate's scan, which is where a data file full of copy belongs.
// Derived figures are computed by the page that renders them.

export const bookingTacticsChecked = 'Sep 2026';
export const bookingTacticsCheckedISO = '2026-09-01';

// --- what a hotel pays an intermediary on one booking ------------------------
// The figure the book-direct tactic rests on. A band, because the rate is negotiated per
// property and moves with the property's size, its programme tier and its brand.
export const OTA_COMMISSION = {
  lowPct: 15,
  highPct: 30,
  headline: '15 to 30%',
  perBooking: true,
  detail: [
    { label: 'The largest platform, typical range', lowPct: 10, highPct: 25, note: 'Commonly cited around 15% as an average, with the negotiated range running roughly 10 to 25% depending on the property and whether it buys into a visibility programme.' },
    { label: 'A major platform, independent properties', lowPct: 15, highPct: 30, note: 'Independents sit at the top of the band, because they have the least negotiating leverage and the most to gain from placement.' },
    { label: 'A major platform, large chains', lowPct: 10, highPct: 15, note: 'A major chain negotiates down, which is part of why the book-direct tactic works less well at exactly the hotels most travelers have heard of.' },
  ],
  source: { label: 'Cloudbeds and Preno OTA commission guides, read Sep 2026', url: null, type: 'trade' },
  checkedISO: '2026-09-01',
};

// --- a company-level metric, which is NOT the above --------------------------
// Held separately on purpose. See RAIL 2. This is revenue over gross bookings for the whole
// company, so it spans flights, cars and attractions as well as hotels.
export const PLATFORM_TAKE_RATE = {
  lowPct: 12,
  highPct: 14,
  headline: '12 to 14%',
  perBooking: false,
  whatItIs: 'Company revenue as a share of total gross bookings, across every product the company sells, taken from its annual report. It is a measure of a business, not a price a hotel pays.',
  detail: [
    { label: 'The largest platform group', lowPct: 14, highPct: 14, figure: 'about 14%', note: 'Company-level, from its annual report.' },
    { label: 'A major platform group', lowPct: 12.3, highPct: 12.3, figure: 'about 12.3%', note: 'Company-level, from its annual report.' },
  ],
  source: { label: 'Booking Holdings and Expedia Group annual reports on Form 10-K', url: null, type: 'filing' },
  checkedISO: '2026-09-01',
};

// --- what it costs a hotel to take the booking itself -----------------------
// The reason a hotel has room to beat an intermediary's price rather than just match it: its
// own all-in cost of a direct booking, card fees and booking engine included, is a fraction
// of the commission it would otherwise pay. This is the number behind the script on the page.
export const DIRECT_COST = {
  lowPct: 4.25,
  highPct: 4.5,
  headline: '4.25 to 4.5%',
  note: 'A property\u2019s own all-in cost of taking a booking direct, covering card processing and its booking engine. Well under the commission on the same booking, which is the gap a direct rate can share with you.',
  source: { label: 'industry distribution-cost analyses, read Sep 2026', url: null, type: 'trade' },
  checkedISO: '2026-09-01',
};

// --- drip pricing, the average size of what appears later --------------------
// Cross-sector UK averages, not hotel-specific and not per-property. Used illustratively in
// the drip visual, which is why the viz is indexed to a base of 100 rather than any price.
export const DRIP_AVERAGES = {
  mandatoryPct: 6,
  optionalPct: 14,
  scope: 'Averages across 525 online providers in four sectors, including hospitality. Cross-sector and illustrative, not a hotel-specific figure and not a per-property one.',
  source: {
    label: 'Alma Economics for the UK Department for Business and Trade, Estimating the prevalence and impact of online drip pricing, September 2023',
    url: 'https://assets.publishing.service.gov.uk/media/64f1ebd7a78c5f000dc6f448/estimating-the-prevalence-and-impact-of-online-drip-pricing.pdf',
    type: 'study',
  },
  checkedISO: '2026-09-01',
};

// --- what flexibility actually costs ----------------------------------------
// The real price of the refundable-then-rebook tactic, and the reason it is bounded on the
// page rather than recommended flat.
export const REFUNDABLE_PREMIUM = {
  lowPct: 5,
  highPct: 20,
  clusterLowPct: 8,
  clusterHighPct: 12,
  headline: '5 to 20%',
  note: 'Refundable rates commonly run 5 to 20% above the non-refundable rate for the same room, clustering around 8 to 12%. That premium is the cost of the option, and you pay it whether or not the price ever falls.',
  source: { label: 'Industry rate-strategy pricing guides, read Sep 2026', url: null, type: 'trade' },
  checkedISO: '2026-09-01',
};

// --- member and direct rates -------------------------------------------------
// Real, modest, and sometimes nothing at all. The third clause is the honest one and it
// stays in the copy.
export const MEMBER_SAVING = {
  lowUsd: 10,
  highUsd: 30,
  headline: '10 to 30 dollars a night',
  note: 'Where a member or app-only rate is genuinely cheaper it typically saves in the region of 10 to 30 US dollars a night. Sometimes it saves nothing, and the same room shows the same price once you have handed over an email address.',
  source: { label: 'Frommer\u2019s testing of member and direct rates, read Sep 2026', url: null, type: 'trade' },
  checkedISO: '2026-09-01',
};

// --- the property\u2019s own charges, from our own data ------------------------
// NOT re-typed research. These are the figures /hotel-tax-map already publishes in its
// property-fees section, held here so the flagship visual can draw a property-fee segment
// without a second copy of the number appearing on the site. If those figures change, they
// change there first and this note follows.
export const PROPERTY_FEE_BAND = {
  lowPct: 10,
  highPct: 15,
  usResortLowUsd: 30,
  usResortHighUsd: 90,
  headline: '10 to 15%',
  note: 'A mandatory service charge commonly runs 10 to 15% of the room, and US resort fees run roughly 30 to 90 dollars a night on their own. Set by the property, never by a government, so there is no national rate and the only reliable figure is the one the hotel gives you.',
  source: { label: 'True Trip Costs hotel tax map, property-fee data', url: '/hotel-tax-map#property-fees', type: 'ttc' },
  checkedISO: '2026-09-01',
};

// --- rate parity, by jurisdiction -------------------------------------------
// WHERE A HOTEL IS LEGALLY FREE TO UNDERCUT AN INTERMEDIARY, and where it is not.
//
// THREE STATUSES, AND THE MIDDLE ONE IS THE POINT. Collapsing this to a yes or no would
// misstate half the table.
//   free      Parity clauses are void or prohibited. A hotel may offer a better price on its
//             own site, and on other channels, without breaching its contract.
//   narrowed  Wide clauses are gone, so a hotel may undercut on OTHER platforms, but a
//             narrow clause covering the hotel\u2019s OWN site may still bind. Better than
//             nothing and not the same as free.
//   binds     No parity ban. Contractual parity is unrestricted.
//
// THE CAVEAT THAT HAS TO TRAVEL WITH THIS TABLE: legal freedom is not a lower price. A hotel
// may now be free to undercut and simply choose not to, and a platform is free to fund a
// discount of its own to close the gap. The table says who MAY, not who DOES. The page
// prints that in its own words next to the table, because a reader who takes this as a
// promise of a cheaper direct rate has been misled by us.
//
// `slug` is OPTIONAL and means one thing only: this row is a SINGLE country that has a live
// guide on this site, so the table may show its flag and link its name to that guide. It is
// absent on every multi-country row, because "EU and EEA, all 27 member states" cannot wear one
// flag without asserting something false, and it is absent on Belgium and the United States,
// which have no guide here to link to. The page THROWS at build time if a slug names a country
// that is not live, so a retired guide cannot leave a 404 in this table.

// `order` is display order only, and it is deliberate: the EEA-wide position leads because
// it is the change that covers the most readers, the national rulings that got there first
// follow, then the rest of the world, then the US last as the exception.

// The reader-facing words for the three statuses, held here beside the statuses themselves
// so the table's legend, its chips and any later map all read one source. A status without
// an entry here has no label to render, which is a build-visible gap rather than a silent one.
export const PARITY_STATUS = {
  free: {
    label: 'Direct can undercut',
    tone: 'good',
    meaning: 'Parity clauses are void or prohibited, so a hotel may legally offer a better price on its own site and on other channels.',
  },
  narrowed: {
    label: 'Partly free',
    tone: 'mixed',
    meaning: 'Wide clauses are gone, so a hotel may undercut on other platforms, but a narrow clause covering its own website may still bind.',
  },
  binds: {
    label: 'Parity still binds',
    tone: 'bad',
    meaning: 'No parity ban is in force, so a hotel may be contractually held to the same price it shows on a platform.',
  },
};

export const PARITY_BY_REGION = [
  {
    order: 1,
    jurisdiction: 'EU and EEA, all 27 member states',
    status: 'free',
    sinceDate: '14 November 2024',
    sinceISO: '2024-11-14',
    ruling: 'The largest platform group was designated a gatekeeper under the Digital Markets Act on 13 May 2024, and parity clauses became prohibited for it six months later, on 14 November 2024. Hotels, car rental firms and other providers may offer better prices and conditions on their own sites and on other channels, and the gatekeeper may not raise commission or de-list an offer in response.',
    source: { label: 'European Commission, Booking must comply with all relevant obligations under the Digital Markets Act', url: 'https://digital-markets-act.ec.europa.eu/booking-must-comply-all-relevant-obligations-under-digital-markets-act-2024-11-14_en', type: 'reg' },
  },
  {
    order: 2,
    jurisdiction: 'EEA inventory, in the platform\u2019s own terms',
    status: 'free',
    sinceDate: '2 December 2024',
    sinceISO: '2024-12-02',
    ruling: 'The platform\u2019s own compliance report records that all wide and narrow parity clauses were removed for EEA inventory, with the updated terms taking effect for existing accommodation partners on 2 December 2024. This is the contractual side of the ruling above: the clause is gone from the agreement, not merely unenforceable.',
    source: { label: 'Booking Holdings, Digital Markets Act compliance report, public summary', url: 'https://www.bookingholdings.com/wp-content/uploads/2024/11/DMA-Compliance-Report.pdf', type: 'filing' },
  },
  {
    order: 3,
    jurisdiction: 'European Union, competition law',
    status: 'free',
    sinceDate: '19 September 2024',
    sinceISO: '2024-09-19',
    ruling: 'In Case C-264/23 the Court of Justice held that price parity clauses, wide and narrow alike, cannot in principle be treated as ancillary restraints under EU competition law. Neither kind was shown to be objectively necessary to run a hotel reservation platform.',
    source: { label: 'Court of Justice of the European Union, press release 145/2024, Case C-264/23', url: 'https://curia.europa.eu/site/upload/docs/application/pdf/2024-09/cp240145en.pdf', type: 'court' },
  },
  {
    order: 4,
    jurisdiction: 'Germany',
    slug: 'germany',
    status: 'free',
    sinceDate: '18 May 2021',
    sinceISO: '2021-05-18',
    ruling: 'The Federal Court of Justice held in KVR 54/20 that even narrow best-price clauses breach competition law, reinstating the Federal Cartel Office\u2019s prohibition. Germany got to the same place three years ahead of the DMA and by a different route.',
    source: { label: 'Bundeskartellamt, Federal Court of Justice confirms illegality of Booking.com narrow price parity clauses', url: 'https://www.bundeskartellamt.de/SharedDocs/Meldung/EN/AktuelleMeldungen/2021/15_06_2021_Federal_Court_PR_Booking.com.html', type: 'court' },
  },
  {
    order: 5,
    jurisdiction: 'France',
    slug: 'france',
    status: 'free',
    sinceDate: '2015',
    sinceISO: '2015-07-06',
    ruling: 'The Loi Macron rendered rate parity clauses void in hotel agency contracts, the earliest of the national statutory bans.',
    source: { label: 'Loi Macron 2015, French law on growth, activity and equal economic opportunity', url: null, type: 'reg' },
  },
  {
    order: 6,
    jurisdiction: 'Austria',
    slug: 'austria',
    status: 'free',
    sinceDate: '2016',
    sinceISO: '2016-12-31',
    ruling: 'Parity clauses prohibited by statute, wide and narrow alike.',
    source: { label: 'Austrian statutory prohibition on hotel rate parity, 2016', url: null, type: 'reg' },
  },
  {
    order: 7,
    jurisdiction: 'Italy',
    slug: 'italy',
    status: 'free',
    sinceDate: '2017',
    sinceISO: '2017-08-01',
    ruling: 'Parity clauses rendered void by statute.',
    source: { label: 'Italian statutory prohibition on hotel rate parity, 2017', url: null, type: 'reg' },
  },
  {
    order: 8,
    jurisdiction: 'Belgium',
    status: 'free',
    sinceDate: '2018',
    sinceISO: '2018-08-01',
    ruling: 'Parity clauses rendered void by statute.',
    source: { label: 'Belgian statutory prohibition on hotel rate parity, 2018', url: null, type: 'reg' },
  },
  {
    order: 9,
    jurisdiction: 'Switzerland',
    slug: 'switzerland',
    status: 'free',
    sinceDate: '2022',
    sinceISO: '2022-01-01',
    ruling: 'Parity clauses prohibited, which matters because Switzerland is outside the EEA and so is not reached by the DMA route above.',
    source: { label: 'Swiss statutory prohibition on hotel rate parity, 2022', url: null, type: 'reg' },
  },
  {
    order: 10,
    jurisdiction: 'Spain',
    slug: 'spain',
    status: 'free',
    sinceDate: '29 July 2024',
    sinceISO: '2024-07-29',
    ruling: 'The CNMC fined the largest platform 413.24 million euros, its largest ever penalty, for abuse of a dominant position, and imposed behavioural obligations covering the parity terms it had applied to hotels in Spain. Spain is also covered by the EEA position above.',
    source: { label: 'CNMC, fine of 413.24 million euros on Booking.com for abuse of dominant position', url: 'https://portal-cec.consumo.gob.es/en/comunicacion/noticias/2024/cnmc-fines-bookingcom-41324-million-abusing-its-dominant-position-over', type: 'reg' },
  },
  {
    order: 11,
    jurisdiction: 'United Kingdom',
    slug: 'united-kingdom',
    status: 'narrowed',
    sinceDate: 'undertakings from 2015',
    sinceISO: '2015-01-31',
    ruling: 'Parity is substantially restricted through undertakings given to the Competition and Markets Authority rather than by a statutory ban. Wide clauses went, and the position is not the clean statutory freedom the EEA now has.',
    source: { label: 'UK Competition and Markets Authority, hotel online booking undertakings', url: null, type: 'reg' },
  },
  {
    order: 12,
    jurisdiction: 'Australia',
    slug: 'australia',
    status: 'narrowed',
    sinceDate: '2016',
    sinceISO: '2016-09-01',
    ruling: 'Wide parity clauses were removed, so a hotel may undercut on other platforms. Narrow clauses covering the hotel\u2019s own site were retained, so the freedom stops short of the hotel\u2019s own website.',
    source: { label: 'Australian Competition and Consumer Commission, hotel booking parity undertakings, 2016', url: null, type: 'reg' },
  },
  {
    order: 13,
    jurisdiction: 'Japan',
    slug: 'japan',
    status: 'free',
    sinceDate: 'competition-authority action',
    sinceISO: '2019-04-01',
    ruling: 'Parity clauses have been unwound through competition-authority action, so a hotel is not contractually held to platform pricing.',
    source: { label: 'Japan Fair Trade Commission action on accommodation booking platform parity', url: null, type: 'reg' },
  },
  {
    order: 14,
    jurisdiction: 'South Korea',
    slug: 'south-korea',
    status: 'free',
    sinceDate: 'competition-authority action',
    sinceISO: '2019-04-01',
    ruling: 'Parity clauses have been unwound through competition-authority action.',
    source: { label: 'Korea Fair Trade Commission action on accommodation booking platform parity', url: null, type: 'reg' },
  },
  {
    order: 15,
    jurisdiction: 'United States',
    status: 'binds',
    sinceDate: 'no ban in force',
    sinceISO: null,
    ruling: 'There is no federal rate-parity ban and no state equivalent of the European statutes. Contractual parity is unrestricted, so a US hotel may be contractually held to the same price it shows on a platform. This is the single most important row in the table for a US reader, and it is the reason the book-direct tactic on this page carries a US caveat wherever it appears.',
    source: { label: 'No US federal or state rate-parity prohibition in force as at Sep 2026', url: null, type: 'reg' },
  },
];

// --- fee-disclosure law, which is a different question ----------------------
// Parity law decides whether a hotel MAY undercut. These rules decide whether the price you
// were shown had to include the mandatory fees. A jurisdiction can be strict on one and
// silent on the other, and the US is exactly that case: no parity ban at all, and a
// disclosure rule that is now among the more specific anywhere.
//
// Every one of these is disclosure. None of them caps a fee or bans one. A resort fee shown
// clearly and early is fully compliant and still a resort fee.
export const JUNKFEE_RULES = [
  {
    jurisdiction: 'United States',
    rule: 'FTC Rule on Unfair or Deceptive Fees, 16 CFR Part 464',
    what: 'The total price, including every mandatory fee and charge, must be disclosed at least as prominently as any other price. Covers short-term lodging, hotels and vacation rentals included, and covers third-party platforms as well as the property itself. Government charges and shipping may be excluded from the headline total.',
    finalised: '17 December 2024',
    effective: '12 May 2025',
    effectiveISO: '2025-05-12',
    limit: 'Disclosure only. The rule does not cap a fee, ban one, or make it refundable.',
    source: { label: 'eCFR, 16 CFR Part 464, Rule on Unfair or Deceptive Fees', url: 'https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-464', type: 'reg' },
  },
  {
    jurisdiction: 'United States, Texas',
    rule: 'Texas Attorney General settlement with the largest platform group',
    what: 'A 9.5 million dollar settlement over marketing room rates that omitted mandatory fees, and over grouping those fees in with money owed to government under a single taxes-and-fees line at checkout. The settlement requires fees added to a room price to be disclosed up front.',
    finalised: '19 August 2025',
    effective: '19 August 2025',
    effectiveISO: '2025-08-19',
    limit: 'One state, one company, and no admission of wrongdoing. It is enforcement, not a new rule.',
    source: { label: 'Texas Attorney General, settlement with Booking over deceptive junk-fee practices', url: 'https://www.texasattorneygeneral.gov/news/releases/attorney-general-ken-paxton-secures-historic-95-million-settlement-booking-engaging-deceptive-junk', type: 'reg' },
  },
  {
    jurisdiction: 'United Kingdom',
    rule: 'Digital Markets, Competition and Consumers Act 2024, unfair commercial practices',
    what: 'Drip pricing is a banned practice, unfair in all circumstances and regardless of whether it changed a buyer\u2019s decision. Mandatory fees, charges and taxes have to be in the total price given up front in any invitation to purchase.',
    finalised: '4 April 2025',
    effective: '6 April 2025',
    effectiveISO: '2025-04-06',
    limit: 'Applies to practices from 6 April 2025 onwards. The regulator said it would first enforce against clear breaches while further guidance was consulted on.',
    source: { label: 'UK Competition and Markets Authority, Unfair commercial practices guidance, CMA207', url: 'https://gov.uk/government/publications/unfair-commercial-practices-cma207/unfair-commercial-practices', type: 'reg' },
  },
  {
    jurisdiction: 'European Union',
    rule: 'Unfair Commercial Practices Directive',
    what: 'The total price, inclusive of taxes and unavoidable charges, has to be given up front. This is the long-standing baseline the UK rules above tightened and codified rather than invented.',
    finalised: 'long-standing',
    effective: 'In force as a long-standing baseline, with no single commencement date',
    effectiveISO: null,
    limit: 'Enforced nationally, so what a traveler actually sees varies by member state.',
    source: { label: 'EU Unfair Commercial Practices Directive, 2005/29/EC', url: null, type: 'reg' },
  },
];

// --- the myths, named as myths ----------------------------------------------
// Timing folklore, held as data so the page cannot quietly soften it into a tendency with a
// hedge. Each one is stated as the claim a reader will have heard, then answered.
export const TIMING_MYTHS = [
  { claim: 'They will always beat the platform price if you ask.', answer: 'No. A revenue-managed property on a peak date has no reason to, and a sold-out one has no room to. The ask is free and the answer is often no.' },
  { claim: 'Always book last minute.', answer: 'A room is perishable, so last-minute can win off-peak or where there is oversupply. On a peak date or in a tight market it loses, sometimes badly.' },
  { claim: 'Always book early.', answer: 'Early buys certainty, not the lowest price. It wins when demand is climbing toward your dates and loses when it is not.' },
  { claim: 'Tuesday is always cheapest.', answer: 'There is no day of the week that reliably prices lower across properties and markets. Treat any such rule as folklore.' },
];
