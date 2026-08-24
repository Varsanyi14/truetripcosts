// PRE-FLIGHT ARRIVAL FORMS, and the paid lookalikes that farm them.
//
// THE THESIS: a growing number of countries now require you to file a form online before
// you fly. Almost all of them are free. Because they are new, obscure and mandatory, a
// whole industry of lookalike sites has grown up to charge for them, and those sites buy
// the search terms the official ones do not. The scale is the story: this is not one
// country's quirk, it is a pattern.
//
// THE RULE THAT GOVERNS THIS FILE: THESIS ALARMS, COUNTRY PAGE EQUIPS. We never tell a
// traveler a scam exists without handing over the real site in the same breath. Applied
// literally here: a form CANNOT enter this list without a verified official URL. Naming a
// form and leaving the reader to search for it would push them straight into the paid
// lookalikes, which is the exact harm this module exists to prevent. So `official` is a
// required field, not an optional one, and PENDING (below) is where forms wait.
//
// WHY THE COUNTS ARE COMPUTED, NEVER WRITTEN. The headline number on /arrival-forms is
// derived from this array at build time. A hardcoded "at least 10 countries, nine free"
// goes stale the moment a country joins, changes a fee, or drops a form, and a stale
// count on the page whose whole argument IS the count is the worst place to be wrong. Add
// a form here and every count, on the page and in the closer, moves with it.
//
// WHAT COUNTS AS AN ARRIVAL FORM. A filing you complete before travel that is NOT a visa:
// an arrival card, a pre-registration, a traveler declaration. A visa or a paid entry
// authorization is a different animal and belongs in entry-charges.js, which prices it.
// Sri Lanka's ETA is the one judgment call: it is formally an authorization, but it is
// filed online before you fly and is free of charge for US citizens, so a traveler meets
// it as a form. It is marked so the reader is told exactly what it is.
//
// SOURCING. Every entry carries `via`, which says where its facts come from:
//   guide  the country's own guide in this repo, already desk-verified and dated
//   nia    verified against the issuing government agency for this module
// Anything with a caveat carries `caution`, which renders on the page rather than being
// quietly held here.

export const arrivalFormsChecked = 'Aug 2026';

// The forms, alphabetical by country so the list has no implied ranking.
export const arrivalForms = [
  {
    slug: 'aruba',
    country: 'Aruba',
    name: 'ED Card',
    official: 'https://edcardaruba.aw/',
    free: false,
    // The one that genuinely charges, which is why the page says "almost all" and not
    // "all". Naming the exception is what makes the rest of the claim trustworthy.
    cost: '20 dollars per person',
    when: 'Before you board',
    note: 'Mandatory online, and the one form on this list that really does cost money: a 20 dollar per-person sustainability fee, paid on the official site.',
    via: 'guide',
  },
  {
    slug: 'colombia',
    country: 'Colombia',
    name: 'Check-Mig',
    official: 'https://apps.migracioncolombia.gov.co/check-mig',
    free: true,
    when: 'Between 1 and 72 hours before each flight',
    note: 'Filed before every flight into or out of Colombia. Free on the official Migracion Colombia site, and airlines check it at boarding.',
    caution: 'Migracion Colombia signalled in 2025 that Check-Mig is no longer strictly obligatory, but airlines still ask for it and some gate agents still insist. Filing it costs nothing and removes the argument.',
    via: 'guide',
  },
  {
    slug: 'dominican-republic',
    country: 'Dominican Republic',
    name: 'E-Ticket',
    official: 'https://eticket.migracion.gob.do',
    free: true,
    when: 'Before each flight, arriving and leaving',
    note: 'Required twice on a round trip, once to enter and once to leave, each with its own QR code. Free on the official portal.',
    via: 'guide',
  },
  {
    slug: 'jamaica',
    country: 'Jamaica',
    name: 'C5 form',
    official: 'https://enterjamaica.gov.jm',
    free: true,
    when: 'Before you fly',
    note: "Jamaica's combined immigration and customs declaration, filed online before arrival for a QR code to show at the airport. Free on the official government site, and separate from any visa.",
    via: 'guide',
  },
  {
    slug: 'philippines',
    country: 'Philippines',
    name: 'eTravel',
    official: 'https://etravel.gov.ph/',
    free: true,
    when: 'Within 72 hours before arrival, and again on departure',
    note: 'Free and mandatory, and like the Dominican Republic it is filed on the way out as well as on the way in.',
    via: 'guide',
  },
  {
    slug: 'singapore',
    country: 'Singapore',
    name: 'SG Arrival Card',
    official: 'https://www.ica.gov.sg/enter-transit-depart/entering-singapore/sg-arrival-card',
    free: true,
    when: 'Within three days before arrival',
    note: 'Free and mandatory, health declaration included. Singapore stopped stamping passports, so this filing is the record of your entry.',
    via: 'guide',
  },
  {
    slug: 'south-korea',
    country: 'South Korea',
    name: 'e-Arrival Card',
    official: 'https://www.e-arrivalcard.go.kr',
    free: true,
    when: 'Before your flight',
    note: 'Replaced the paper card on 1 January 2026, and is required from anyone entering without a K-ETA. Free on the official portal.',
    via: 'guide',
  },
  {
    slug: 'sri-lanka',
    country: 'Sri Lanka',
    name: 'Tourist ETA',
    official: 'https://www.eta.gov.lk',
    free: true,
    when: 'Before you fly',
    // Named honestly: it is an authorization rather than an arrival card, and it is free
    // for US citizens specifically, not for everyone.
    note: 'Formally an authorization rather than an arrival card, but you file it online before you fly. Free of charge for US citizens since 25 May 2026 under the 40-country fee waiver.',
    via: 'guide',
  },
  {
    slug: 'taiwan',
    country: 'Taiwan',
    name: 'Taiwan Arrival Card (TWAC)',
    official: 'https://twac.immigration.gov.tw',
    free: true,
    when: 'Up to seven days before arrival',
    note: 'Replaced the paper arrival card on 1 October 2025. Free, mandatory, and you can file for up to 16 travelers in one go.',
    // The strongest evidence on this whole page, and it is not ours: Taiwan's own
    // immigration agency had to publish a scam warning because fraudulent lookalike sites
    // were buying the words "TWAC" and "Taiwan Arrival Card" to take fees and personal
    // data. A government warning its own visitors is worth more than any claim we make.
    officialWarning: {
      url: 'https://www.immigration.gov.tw/5475/5478/141457/142068/401867/',
      label: "Taiwan's National Immigration Agency has published its own warning about fake TWAC sites",
    },
    via: 'nia',
  },
  {
    slug: 'thailand',
    country: 'Thailand',
    name: 'Thailand Digital Arrival Card (TDAC)',
    official: 'https://tdac.immigration.go.th/',
    free: true,
    when: 'Within 72 hours of arrival',
    note: 'Free and mandatory for every arrival, filed on the Thai Immigration Bureau site.',
    via: 'guide',
  },
  {
    slug: 'cambodia',
    country: 'Cambodia',
    name: 'e-Arrival (CeA)',
    official: 'https://arrival.gov.kh/',
    free: true,
    when: 'Within 7 days before arrival',
    note: "Cambodia's single digital arrival card, which rolls the old paper immigration, health and customs forms into one filing. Free on the official General Department of Immigration site, and separate from any visa.",
    caution: 'Required for air arrivals only. Land border crossings still use paper forms. The official site is arrival.gov.kh; paid lookalikes buy the search terms above it.',
    via: 'nia',
  },
  {
    slug: 'indonesia',
    country: 'Indonesia',
    name: 'All Indonesia arrival card',
    official: 'https://allindonesia.imigrasi.go.id/',
    free: true,
    when: 'Within 3 days before arrival',
    note: "Indonesia's single arrival declaration. Since October 2025 it combines the arrival card, customs declaration and health screening into one filing, replacing the separate customs form. Free on the official immigration site.",
    caution: 'This is now one filing, not two: the older standalone customs declaration was folded in. The official domain ends in imigrasi.go.id.',
    via: 'nia',
  },
  {
    slug: 'laos',
    country: 'Laos',
    name: 'Lao Digital Immigration Form (LDIF)',
    official: 'https://www.immigration.gov.la',
    free: true,
    when: 'Within 3 days before arrival and again before departure',
    note: "Laos's online arrival and departure card, filed for a QR code shown at the border. Free on the official Department of Immigration site, and separate from any visa.",
    caution: 'Still rolling out: as of its 2025 launch it applies at the main international airports (Vientiane, Luang Prabang, Pakse) and the first Lao-Thai Friendship Bridge, not yet every crossing. Unusually, Laos wants a departure card too, not just an arrival one.',
    via: 'nia',
  },
  {
    slug: 'india',
    country: 'India',
    name: 'e-Arrival card',
    official: 'https://indianvisaonline.gov.in/',
    free: true,
    when: 'Before you fly',
    note: "India's pre-arrival immigration filing, handled through the official Indian Visa Online portal (and the Su-Swagatam app). Separate from the paid e-Visa, and separate again from the customs declaration, which is the ATITHI app.",
    caution: 'Two different filings get confused here: immigration (this one) versus customs (the ATITHI app, run by Indian Customs). Neither is the paid e-Visa. Use only gov.in sites.',
    via: 'nia',
  },
];

// FORMS WE KNOW EXIST BUT CANNOT YET LINK.
//
// Each of these is described in its own country guide, so we are confident the requirement
// is real. What we do not have is the dedicated official portal URL, and without that we
// will not list it: see the equip rule at the top of this file. This is not a backlog note
// tucked in a comment, it is the mechanism. Source a portal URL, move the entry up into
// arrivalForms, and the counts on the page move on their own.
export const pendingForms = [];

// ----- derived facts, so nothing on a page is written by hand -----

export const formsCount = arrivalForms.length;
export const freeForms = arrivalForms.filter(f => f.free);
export const paidForms = arrivalForms.filter(f => !f.free);
export const freeCount = freeForms.length;

// Small words for small numbers, so the copy reads as prose rather than as a readout.
const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
export const numWord = (n) => (n >= 0 && n < WORDS.length) ? WORDS[n] : String(n);

// The thesis sentence, assembled from the counts rather than asserted. The "at least"
// is doing real work: these are the ones we can source and link, and there are certainly
// more, so the claim is a floor and says so.
export function thesisLine() {
  const paid = paidForms.length;
  const parts = [
    'At least ' + numWord(formsCount) + ' countries now make you file a form online before you fly.',
    numWord(freeCount).charAt(0).toUpperCase() + numWord(freeCount).slice(1) + ' of them are free.',
  ];
  if (paid === 1) parts.push('One really does charge, and it is not the one you would guess.');
  else if (paid > 1) parts.push(numWord(paid).charAt(0).toUpperCase() + numWord(paid).slice(1) + ' really do charge.');
  return parts.join(' ');
}

// One accessor for the country insert. Returns null for a country with no form, which is
// the graceful-degrade signal the breadth reveal branches on.
export function arrivalFormFor(slug) {
  return arrivalForms.find(f => f.slug === slug) || null;
}

// Any form on the list carrying a government scam warning, used as the page's proof.
export const warnedForms = arrivalForms.filter(f => f.officialWarning);
