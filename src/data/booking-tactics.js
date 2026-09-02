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
// `slug` marks a row as a SINGLE country we can IDENTIFY, which is not the same as one we have
// written a guide about, and the table does two different things with it:
//   flag   shown whenever a slug is present and a flag file exists. A flag is identification.
//   link   added only where the slug is also a LIVE COUNTRY GUIDE. A link is a promise that
//          there is something at the other end.
// Belgium therefore carries a slug and shows its flag with no link, because there is no
// Belgium guide. Every multi-country row carries no slug at all: "EU and EEA, all 27 member
// states" cannot wear one flag without asserting something false. The page THROWS at build time
// if a slug has no flag file, so a row can never quietly fall back to the generic globe and
// present it as a country's flag.
//
// `iso` is the ISO 3166-1 alpha-2 code, present on single-country rows only, and it is what
// lets the choropleth colour that country. Bloc rows carry no iso: they colour their members
// through EU_EEA_ISOS below instead, because a bloc is not a country.

// `order` is display order only, and it is deliberate: the EEA-wide position leads because
// it is the change that covers the most readers, the national rulings that got there first
// follow, then the rest of the world, then the US last as the exception.

// The reader-facing words for the three statuses, held here beside the statuses themselves
// so the table's legend, its chips and any later map all read one source. A status without
// an entry here has no label to render, which is a build-visible gap rather than a silent one.
//
// `fill` and `hatch` are the MAP side of the same source. Holding them here rather than in the
// map component is what stops the choropleth and the table drifting into two different colour
// vocabularies for one set of statuses, which is the same reasoning hotel-tax-map.js gives for
// keeping BANDS out of its component.
//
// `hatch` on the middle status is not decoration. Green, gold and burnt orange are three warm
// steps that a red-green colour deficiency can flatten, and the middle status is the one whose
// meaning is genuinely partial, so it carries a diagonal hatch as well as a colour. That gives
// it a second channel a colour deficiency cannot remove, and it reuses the idiom the hotel-tax
// map already established, where a hatch means "not one clean answer".
export const PARITY_STATUS = {
  free: {
    label: 'Direct can undercut',
    tone: 'good',
    fill: '#0E7A5F',
    hatch: false,
    meaning: 'Parity clauses are void or prohibited, so a hotel may legally offer a better price on its own site and on other channels.',
  },
  narrowed: {
    label: 'Partly free',
    tone: 'mixed',
    fill: '#C99A2E',
    hatch: true,
    meaning: 'Wide clauses are gone, so a hotel may undercut on other platforms, but a narrow clause covering its own website may still bind.',
  },
  binds: {
    label: 'Parity still binds',
    tone: 'bad',
    fill: '#B45309',
    hatch: false,
    meaning: 'No parity ban is in force, so a hotel may be contractually held to the same price it shows on a platform.',
  },
};

// --- how the one negative claim in the table was checked ----------------------
// Held here rather than inline on the row so the table, the sources panel and anything later
// read one copy, and so the honest limit below cannot be edited off the row without being
// seen.
//
// WHAT THIS IS NOT: a claim to have read every state code. It is a statement of what the
// finding rests on, what would overturn it, and the date it was last stated, which is the
// most a negative can honestly carry. The inventory of specific documents is NOT published
// here, because this pass did not have a record of which ones the desk read, and inventing a
// list of sources to make a negative look thorough would be worse than saying so.
export const METHODOLOGY_US_PARITY = {
  cutoffISO: '2026-09-01',
  cutoff: 'Sep 2026',
  claim: 'No prohibition on hotel rate parity, federal or state, was found in force in the United States.',
  how: 'An absence cannot be cited to a document, so this row states a method rather than a source. The finding is that no federal statute or regulation and no state statute prohibiting accommodation rate parity was found, and that contractual parity is therefore unrestricted. It is stated as of the date above and it is the row on this table most likely to change, because it would take one state legislature to change it.',
  wouldChangeThis: 'A federal prohibition, a state statute of the kind France, Italy, Austria, Belgium and Switzerland enacted, or a consent decree or settlement restricting parity terms for a named platform in a named state.',
  // THE HOLE, NAMED. Same discipline as `pendingSource` on the tax map: a gap that is
  // written down is a gap somebody can close, and a gap left implicit is one that gets
  // forgotten.
  inventoryPending: 'The document-level inventory behind this negative is not published yet: which federal and state sources were searched, and in what form. Until it is, treat this row as a dated finding by the desk rather than as a reproducible search.',
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
    iso: 'DE',
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
    iso: 'FR',
    slug: 'france',
    status: 'free',
    sinceDate: '2015',
    sinceISO: '2015-07-06',
    ruling: 'Article 133 of the Loi Macron rewrote the Code du tourisme so that a hotel keeps the freedom to grant a customer any discount or price advantage, and any contractual clause to the contrary is deemed unwritten. The earliest of the national statutory bans.',
    source: { label: 'Legifrance: article 133 of Law 2015-990 of 6 August 2015, which created Code du tourisme article L311-5-1 and deems any clause restricting a hotel\u2019s pricing freedom unwritten', url: 'https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000030979755', type: 'reg' },
  },
  {
    order: 6,
    jurisdiction: 'Austria',
    iso: 'AT',
    slug: 'austria',
    status: 'free',
    sinceDate: '2016',
    sinceISO: '2016-12-31',
    ruling: 'Demanding a best-price clause from an accommodation business was added to the blacklist annexed to the Unfair Competition Act, which makes it an unfair practice in all circumstances and the contract term absolutely void. A hotel may therefore price lower on its own website. The Constitutional Court dismissed the platform challenge to the ban in 2017.',
    source: { label: 'Austrian Federal Ministry of Economy, Energy and Tourism on fair competition: the 2016 amendment adding best-price clauses to the Unfair Competition Act annex, which makes such contracts absolutely void', url: 'https://www.bmwet.gv.at/Themen/Europa/Wettbewerbspolitik/FairerWettbewerb.html', type: 'reg' },
  },
  {
    order: 7,
    jurisdiction: 'Italy',
    iso: 'IT',
    slug: 'italy',
    status: 'free',
    sinceDate: '2017',
    sinceISO: '2017-08-01',
    ruling: 'Article 1, paragraph 166 of the annual competition law makes void any agreement by which an accommodation business undertakes not to offer final customers better prices, terms or conditions than it offers through third parties, whatever law governs the contract. It reaches wide and narrow clauses alike, and because it says by any means it reaches the telephone and the front desk as well as a website.',
    source: { label: 'Gazzetta Ufficiale: Law 124 of 4 August 2017, the annual law on the market and competition, in force from 29 August 2017', url: 'https://www.gazzettaufficiale.it/eli/id/2017/08/14/17G00140/s', type: 'reg' },
  },
  {
    order: 8,
    jurisdiction: 'Belgium',
    iso: 'BE',
    slug: 'belgium',
    status: 'free',
    sinceDate: '2018',
    sinceISO: '2018-08-01',
    ruling: 'A law of 30 July 2018 on contracts for the use of tourist accommodation bans price parity clauses between platform operators and accommodation operators, and bans restrictions on discounts or other pricing conditions of any kind. A clause that breaches it is deemed unwritten and void by operation of law, and the ban reached contracts already running as well as new ones.',
    // UNLINKED, DELIBERATELY, AND THE GAP IS REAL. No Moniteur belge or ejustice URL for the
    // law of 30 July 2018 was found. Everything available is a law-firm summary, and RULE:
    // never link a secondary write-up in this column. The row therefore states the statute in
    // more detail than before and still carries no link, which is the honest combination.
    source: { label: 'Belgian law of 30 July 2018 on contracts for the use of tourist accommodation, primary text not yet linked', url: null, type: 'reg' },
  },
  {
    order: 9,
    jurisdiction: 'Switzerland',
    iso: 'CH',
    slug: 'switzerland',
    status: 'free',
    // DATE CORRECTED IN THE SOURCING PASS, from 1 January 2022 to 1 December 2022. The
    // consolidated Act on Fedlex records article 8a as inserted by the federal act of
    // 17 June 2022 and in force since 1 December 2022. The old date was eleven months early,
    // which on a table whose Since column is the second thing a reader reads is worth fixing.
    sinceDate: '1 December 2022',
    sinceISO: '2022-12-01',
    ruling: 'Article 8a of the Unfair Competition Act makes it an unfair practice for a booking platform to use terms that restrict an accommodation business\u2019s pricing or offer, directly or indirectly, through parity clauses covering price, availability or conditions. The consequence is nullity rather than a fine. It matters because Switzerland is outside the EEA and so is not reached by the DMA route above.',
    source: { label: 'Fedlex: the consolidated Federal Act against Unfair Competition, SR 241, whose article 8a was inserted by the federal act of 17 June 2022 and is in force from 1 December 2022', url: 'https://www.fedlex.admin.ch/eli/cc/1988/223_223_223/de', type: 'reg' },
  },
  {
    order: 10,
    jurisdiction: 'Spain',
    iso: 'ES',
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
    iso: 'GB',
    slug: 'united-kingdom',
    status: 'narrowed',
    sinceDate: 'undertakings from 2015',
    sinceISO: '2015-01-31',
    ruling: 'Parity is restricted through commitments given to the Competition and Markets Authority rather than by a statutory ban. Wide clauses went in 2015, so a UK hotel may price lower on another platform. The formal commitments expired on 1 July 2020 and both platforms then confirmed to the CMA that they would keep acting in accordance with them, which is a voluntary undertaking rather than a prohibition and is why this row is not free.',
    source: { label: 'UK Competition and Markets Authority case page: monitoring of online travel agent pricing practices, recording the 2015 wide-parity commitments, their expiry on 1 July 2020 and the platforms\u2019 voluntary continuation', url: 'https://www.gov.uk/cma-cases/online-travel-agents-monitoring-of-pricing-practices', type: 'reg' },
  },
  {
    order: 12,
    jurisdiction: 'Australia',
    iso: 'AU',
    slug: 'australia',
    status: 'narrowed',
    sinceDate: '2016',
    sinceISO: '2016-09-01',
    ruling: 'Wide parity clauses were removed, so a hotel may undercut on other platforms. Narrow clauses covering the hotel\u2019s own site were retained, so the freedom stops short of the hotel\u2019s own website.',
    source: { label: 'Australian Competition and Consumer Commission: Expedia and Booking.com agree to amend price and availability parity clauses in their contracts with Australian hotels, from 1 September 2016', url: 'https://www.accc.gov.au/media-release/expedia-and-bookingcom-agree-to-reinvigorate-price-competition-by-amending-contracts-with-australian-hotels', type: 'reg' },
  },
  {
    order: 13,
    jurisdiction: 'Japan',
    iso: 'JP',
    slug: 'japan',
    status: 'free',
    sinceDate: 'competition-authority action',
    sinceISO: '2019-04-01',
    ruling: 'Parity clauses have been unwound through competition-authority action, so a hotel is not contractually held to platform pricing.',
    // =====================================================================
    // ESCALATED TO MAIN, AND DELIBERATELY LEFT UNLINKED. This is the one row in the table
    // where the sourcing pass found the primary document and the primary document DISAGREES
    // with the row.
    //
    // The Japan Fair Trade Commission approved commitment plans from Booking.com on
    // 16 March 2022 and from Expedia on 2 June 2022, at:
    //   https://www.jftc.go.jp/en/pressreleases/yearly-2022/March/220316.html
    //   https://www.jftc.go.jp/en/pressreleases/yearly-2022/June/220602.html
    // The Booking.com decision states in its own words that NARROW parity clauses for room
    // rates were excluded from the commitment plan, on the reasoning that accommodation
    // operators were not necessarily abiding by them, and the JFTC expressly reserved its
    // opinion that such clauses may be problematic depending on how they are operated.
    //
    // On this table's own taxonomy that is "narrowed", not "free": wide clauses gone, a
    // narrow clause covering the hotel's own site not covered. Changing a status is not a
    // sourcing decision, it moves the headline count on this page, and it is MAIN's call. So
    // the status is untouched, the link is NOT attached, and the row is listed in the
    // handback. Attaching a source that contradicts the chip beside it would be worse than
    // the unlinked citation this pass existed to remove.
    // =====================================================================
    source: { label: 'Japan Fair Trade Commission action on accommodation booking platform parity, primary source held pending a status review', url: null, type: 'reg' },
  },
  {
    order: 14,
    jurisdiction: 'South Korea',
    iso: 'KR',
    slug: 'south-korea',
    status: 'free',
    sinceDate: 'competition-authority action',
    sinceISO: '2019-04-01',
    ruling: 'Parity clauses have been unwound through competition-authority action.',
    // UNLINKED, AND THE DATE IS ALSO QUESTIONABLE. No page at ftc.go.kr was found. What the
    // secondary record consistently says is that the KFTC concluded this on 15 March 2021,
    // when five platforms agreed to change wide price-parity clauses, rather than in 2019,
    // which is the year this row carries. A date is not corrected here without a primary
    // source, so the row is left as MAIN set it and both the missing link and the two-year
    // discrepancy are in the handback.
    source: { label: 'Korea Fair Trade Commission action on accommodation booking platform parity, primary source not found', url: null, type: 'reg' },
  },
  {
    order: 15,
    jurisdiction: 'United States',
    // The name as it reads mid-sentence, for the quotable finding below. Held as data rather
    // than guessed by a helper, because "the United States" needs a definite article and
    // "Germany" does not, and a rule that infers that from the string would be wrong the
    // first time a jurisdiction with an unusual name lands.
    nameInSentence: 'the United States',
    iso: 'US',
    status: 'binds',
    sinceDate: 'no ban in force',
    sinceISO: null,
    ruling: 'There is no federal rate-parity ban and no state equivalent of the European statutes. Contractual parity is unrestricted, so a US hotel may be contractually held to the same price it shows on a platform. This is the single most important row in the table for a US reader, and it is the reason the book-direct tactic on this page carries a US caveat wherever it appears.',
    // THE ONLY NEGATIVE CLAIM IN THE TABLE, AND IT DOES NOT GET TO PROVE ITSELF. Every other
    // row points at a document that exists. This row asserts that a document does NOT exist,
    // and there is no URL for that. Left as a bare unlinked label it read as the one thing on
    // the page nobody had to check, which is the opposite of what it is: it is the row a
    // reader most needs, and the row most likely to go quietly out of date the day a state
    // legislature acts. So it carries a method statement instead of a citation, held on the
    // row rather than in prose so the table renders it and the sources panel can count it.
    methodology: METHODOLOGY_US_PARITY,
    source: { label: 'No US federal or state rate-parity prohibition found in force. This is a checked negative with a stated method, not an absence of research', url: null, type: 'reg' },
  },
];


// The DOM id for one parity row, derived from the row rather than typed anywhere.
//
// The table renders it and the country search scrolls to it, so if the two ever built the id
// separately a rename would leave the search jumping nowhere and nothing would fail. `order` is
// the only field every row has and every row has uniquely, including the three bloc rows, which
// carry no iso and no slug. A NAMED function declaration, not an arrow: check-content.py stops
// scanning any src/data module that contains arrow functions or anonymous functions, and this
// file is mostly reader-facing copy that should stay inside that scan.
export function parityRowId(row) {
  return 'pty-row-' + row.order;
}

// --- who the EU and EEA bloc row actually covers ------------------------------
// A CHOROPLETH COLOURS COUNTRIES, AND A BLOC ROW NAMES NONE. The DMA row in the table above
// says "EU and EEA, all 27 member states", which is the correct way to state the ruling and
// useless to a map. So the membership is written out here, once, as ISO 3166-1 alpha-2 codes,
// and the map colours these from that row's status.
//
// WHY IT LIVES IN THIS FILE AND NOT IN THE COMPONENT. Same reason every other figure does: the
// component paints what it is given. A membership list buried in a map component is a fact
// nobody audits, and this one will change the next time the EU does.
//
// THE OTHER TWO BLOC ROWS COLOUR NOTHING EXTRA, ON PURPOSE. "EEA inventory, in the platform's
// own terms" and "European Union, competition law" describe the SAME footprint as the DMA row
// by a different instrument: a contractual waiver and a competition judgment. They are three
// routes to one outcome over one set of countries, so treating each as its own colouring rule
// would count the same footprint three times and imply a breadth the data does not have. They
// remain table rows, which is where a reader can see that three separate instruments agree.
//
// PRECEDENCE, WRITTEN DOWN BEFORE IT IS NEEDED. Today every single-country row inside this
// bloc carries status "free", the same as the bloc, so nothing conflicts and the map has no
// decision to make. If a future row ever disagreed with its bloc, THE SINGLE-COUNTRY ROW WINS,
// because it is the more specific finding about that country. The map implements that order
// explicitly rather than relying on the order the array happens to be in.
// HELD AS TWO HALVES, COMPOSED INTO ONE. The first version was a single flat array of 30 with
// the split marked by a comment, and it produced a small false claim on the map: the hover text
// named the bloc row verbatim, so Iceland, Norway and Liechtenstein were each labelled "via EU
// and EEA, all 27 member states", which reads as telling a reader those three are EU members.
// They are not. Splitting the list means the distinction is data the map can act on rather than
// a comment it cannot see, and it lets the build guard check BOTH counts instead of only the
// total, which a compensating error in one half would have slipped past.
export const EU_ISOS = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT',
  'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
];

// The EEA states that are not EU members. These matter here rather than being a footnote: the
// DMA applies across the EEA, so a hotel in Oslo or Reykjavik has the same freedom as one in
// Berlin, and a map that stopped at the EU border would understate the ruling.
export const EEA_NON_EU_ISOS = ['IS', 'LI', 'NO'];

// The full footprint the bloc row colours. Composed, never typed, so it cannot disagree with its
// own halves.
export const EU_EEA_ISOS = [...EU_ISOS, ...EEA_NON_EU_ISOS];

// The counts the map asserts at build time, per half. A future accession or withdrawal has to be
// made deliberately in both the list and the count.
export const EU_EEA_COUNTS = { eu: 27, eea: 3 };

// The bloc row whose status the list above inherits, matched on its jurisdiction text. Named
// here so the map never hardcodes which row is the bloc row, and so a rename of that row fails
// the build rather than silently leaving 30 countries grey.
export const EU_EEA_SOURCE_ROW = 'EU and EEA, all 27 member states';

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

// --- the parity position, resolved per country ------------------------------
// ONE PLACE WHERE A COUNTRY GETS ITS PARITY STATUS, and the reason it moved here from
// ParityMap.astro is the reason every other number on this page lives in this file: three
// things now need the per-country answer rather than the per-row answer, and three
// implementations of a precedence rule is three chances to disagree about Switzerland.
//
// Who reads this: the choropleth (to choose a fill), the quotable sentence above it, and the
// press CSV. They have to agree, because a reader can see all three at once.
//
// THE PRECEDENCE RULE, which is the only thing this function decides. The bloc row covers
// thirty EU and EEA states and colours all of them. A single-country row then OVERWRITES its
// bloc, because a finding about one country is more specific than a finding about thirty.
// Today they agree everywhere, so this changes nothing on screen. It is written as
// assignment order rather than as a comment so it stays true when they stop agreeing.
//
// THE OTHER TWO BLOC ROWS RESOLVE NOTHING, on purpose. "EEA inventory, in the platform's own
// terms" and "European Union, competition law" describe the SAME footprint by a different
// instrument, so letting each resolve countries would count one footprint three times.
//
// A NAMED FUNCTION DECLARATION AND A for LOOP, NO ARROWS. check-content.py stops scanning any
// src/data module that contains an arrow function or an anonymous function, and this file is
// mostly reader-facing copy that must stay inside that scan. See the note on parityRowId.
export function parityStatusByIso() {
  const out = new Map();
  let bloc = null;
  for (const row of PARITY_BY_REGION) {
    if (row.jurisdiction === EU_EEA_SOURCE_ROW) bloc = row;
  }
  if (bloc) {
    for (const iso of EU_EEA_ISOS) {
      out.set(iso, { status: bloc.status, bloc: true, eu: EU_ISOS.includes(iso), row: bloc });
    }
  }
  for (const row of PARITY_BY_REGION) {
    if (!row.iso) continue;
    out.set(row.iso, { status: row.status, bloc: false, eu: false, row: row });
  }
  return out;
}

// --- the one sentence this page is quotable on -------------------------------
// THE STRONGEST FINDING ON THE PAGE WAS SPREAD ACROSS A LEGEND AND A FIFTEEN-ROW TABLE,
// which meant a reader had to assemble it and a writer had to count it themselves. It is one
// sentence, and it is now one sentence.
//
// EVERY NUMBER IN IT IS DERIVED, none typed. The counts come from parityStatusByIso above, so
// the sentence moves the day a row does and cannot be left behind stating last month's total.
// That is not a nicety on a sentence built to be quoted: a hardcoded count is exactly the
// thing that gets screenshotted and outlives its own data.
//
// "IN OUR CHECKED SET" STAYS, always. The set is a named list of jurisdictions where somebody
// ruled on parity, not the world. Without that qualifier the sentence reads as a global
// finding, which would be the page overclaiming in its most repeatable line.
//
// THE LAST CLAUSE SELF-CORRECTS RATHER THAN ASSERTING THE UNITED STATES. MAIN's wording names
// the US as the only country where parity still binds, and that is true today and derived
// from the data rather than trusted: if a second binding country ever lands, or the US row
// changes, the clause reshapes instead of shipping a sentence the table contradicts.
export function parityFinding() {
  const byIso = parityStatusByIso();
  let total = 0, freeCount = 0, narrowedCount = 0, bindsCount = 0;
  let bindsName = null;
  for (const [, v] of byIso) {
    total++;
    if (v.status === 'free') freeCount++;
    else if (v.status === 'narrowed') narrowedCount++;
    else if (v.status === 'binds') { bindsCount++; bindsName = v.row.nameInSentence || v.row.jurisdiction; }
  }
  const tail = bindsCount === 1 && bindsName
    ? `${bindsName} is the only checked country where parity can still bind`
    : bindsCount === 0
      ? 'no checked country still lets parity bind'
      : `parity can still bind in ${bindsCount} of them`;
  return {
    total,
    freeCount,
    narrowedCount,
    bindsCount,
    bindsName,
    sentence: `Among the ${total} countries in our checked set, hotels are legally free to undercut booking sites in ${freeCount}; ${narrowedCount} are only partly free, and ${tail}.`,
    // The short form, for a 1200 by 630 social card where the full sentence will not fit at a
    // readable size. Same numbers, same source, no promise attached.
    short: `${freeCount} free to undercut, ${narrowedCount} partly free, ${bindsCount} where parity still binds`,
  };
}

// --- what a writer or publisher may do with this ----------------------------
// The attribution line and the one-sentence method, held as data because they appear in three
// places (the page's writers block, the CSV header and the embed footer) and a credit line
// that reads differently in each is not a credit line.
export const PARITY_PRESS = {
  attribution: 'Rate-parity law by country, True Trip Costs, truetripcosts.com/how-to-pay-less-on-hotels',
  method: 'Each jurisdiction is read from the statute, judgment or competition-authority action behind it, dated to when that instrument took effect, and rechecked on the date shown. The map states where a hotel is legally FREE to offer a cheaper direct rate. It does not say a direct rate will be cheaper.',
  licence: 'Free to reuse, including commercially, with attribution.',
};
