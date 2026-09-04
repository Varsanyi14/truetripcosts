// THE TRUTH CHECK LAYER: a hand-authored "what the internet says vs what we found" record,
// collected on /truth-checks and surfaced as a calm callout on the pages each entry is
// built from.
//
// WHY THIS EXISTS. This site keeps quietly correcting the same travel-money myths inside
// its own guides (the Brazil CPF story, the UK ETA, dynamic currency conversion) but those
// corrections were buried in prose, reachable only by the reader who happened to open that
// exact page. Surfaced and collected, they are the most shareable thing on the site, because
// they are the one format that earns links: a reader who found out the CPF myth is wrong
// wants to tell someone. This file is the register those callouts read from.
//
// WHERE EACH ENTRY COMES FROM, and this is a hard rail, the same one connectivity-verdicts.js
// and rail-passes.js already enforce. Every `finding` below is HAND-AUTHORED against prose
// that already exists on the linked page. Nothing here is generated from a country's free
// text at build time, for the exact reason verdict.js documents: a naive match over free
// text nearly told five countries they could claim a VAT refund they cannot get. If a claim
// is not already established on the source page, it does not belong here. Flag it instead
// of writing it.
//
// THE HONESTY INVARIANT. `esim-usually-unnecessary` is the flagship entry and it runs
// directly against the product this site earns a commission on. scripts/check-truth-checks.mjs
// asserts that at least one shipped entry carries that property, so a later edit cannot
// quietly turn this into a page of only-flattering corrections without the gate noticing.
//
// PADDING RISK. The format is seductive: a "myth vs reality" card is easy to write and easy
// to want more of. Five airtight entries beat twenty soft ones, so a `confidence: "low"`
// entry should probably wait rather than ship, and every entry needs a real source a reader
// can open. No source, no entry.
//
// House style: no em or en dashes, and "US" never the periods form. A gate enforces both
// (scripts/check-content.py).

export const truthChecks = [
  {
    id: 'esim-usually-unnecessary',
    scope: 'topic',
    topic: 'connectivity',
    country: null,
    claim: 'You need to buy a travel eSIM before you go.',
    finding:
      "On the countries we have actually rated, the honest cheapest answer usually is not " +
      'the eSIM we would earn a commission on. Sometimes a local SIM undercuts it by a wide ' +
      'margin, sometimes your existing US plan already covers the country, and sometimes wifi ' +
      'alone gets you through the trip.',
    soWhat: "Check the country's connectivity verdict before you pay for anything.",
    source: { label: 'Staying connected abroad, country by country', href: '/staying-connected' },
    confidence: 'high',
    checkedISO: '2026-09-04',
  },
  {
    id: 'brazil-sim-cpf',
    scope: 'country',
    topic: 'connectivity',
    country: 'brazil',
    claim: 'A foreign tourist cannot buy a Brazilian SIM card without a CPF, the local tax ID.',
    finding:
      'Brazilian law lets a foreign national register a prepaid line with just a passport. ' +
      "The holdup is a shop clerk who has never processed one, not the statute, and TIM " +
      'handles visitors on a passport most reliably. The carriers have also added tourist ' +
      'packages that ask for no CPF at all.',
    soWhat: 'Bring your passport, start at a TIM store or an airport counter, and treat a refusal as the shop, not the rule.',
    source: { label: 'Staying connected in Brazil', href: '/brazil/staying-connected' },
    confidence: 'high',
    checkedISO: '2026-09-04',
  },
  {
    id: 'pay-in-local-not-dollars',
    scope: 'topic',
    topic: 'cash',
    country: null,
    claim: 'Choosing to pay in US dollars at a card terminal or ATM abroad is the safer, more convenient option.',
    finding:
      "Saying yes to \"pay in dollars\" hands you a marked-up exchange rate, dynamic currency " +
      'conversion, that typically costs 3 to 8 percent more than your own bank would have ' +
      'charged. Choosing the local currency lets your own card network handle the conversion ' +
      'at a real rate.',
    soWhat: 'Say the local currency, every single time, at a terminal or a cash machine.',
    source: { label: 'France money rules', href: '/france/rules' },
    confidence: 'high',
    checkedISO: '2026-09-04',
  },
  {
    id: 'japan-not-cash-only',
    scope: 'country',
    topic: 'cash',
    country: 'japan',
    claim: 'Japan is a cash-only country, so budget lots of cash for the whole trip.',
    finding:
      'Card and phone taps now cover most spending in the big cities: cashless payments hit ' +
      '58 percent in 2025. But cash still rules the places travelers actually go for: temples ' +
      'and shrines, small family restaurants, market stalls, older ryokan, and most vending ' +
      'machines.',
    soWhat: 'Carry some yen for shrines, small restaurants and vending machines, and tap a card or an IC card for the rest.',
    source: { label: 'Do I need cash in Japan, or can I use cards?', href: '/japan/cash-or-card' },
    confidence: 'high',
    checkedISO: '2026-09-04',
  },
  {
    id: 'uk-eta-before-boarding',
    scope: 'country',
    topic: 'visas',
    country: 'united-kingdom',
    claim: 'US citizens can visit the UK visa-free, no paperwork to sort before the trip.',
    finding:
      'For any UK trip that crosses the border, US citizens now need an approved UK ETA before ' +
      'they board. A pure airside connection at Heathrow or Manchester, with no passport ' +
      'control, is temporarily exempt, but a landside transit or any other UK airport needs ' +
      'one. It is not a visa, just a quick online check like the US ESTA, and it only costs ' +
      '20 pounds from the official UK ETA app or gov.uk. A wall of other sites charge more to ' +
      'file the identical form.',
    soWhat: 'If your connection crosses the UK border, apply on the official UK ETA app or gov.uk a few days before you fly, and skip the lookalike sites.',
    source: { label: 'Do US citizens need an ETA for the UK?', href: '/united-kingdom/eta' },
    confidence: 'high',
    checkedISO: '2026-09-04',
  },
  {
    id: 'visa-middleman-markup',
    scope: 'topic',
    topic: 'visas',
    country: null,
    claim: 'A required travel authorization or e-visa needs a paid visa service to apply for it.',
    finding:
      'A required, paid government form is exactly the kind of thing the internet fills with ' +
      'overpriced middlemen. Plenty of sites will take your money to file the same application ' +
      'at a hefty markup, and a few are outright scams. The honest route is the official ' +
      'portal, where you pay only the government fee.',
    soWhat: 'Go straight to the official portal (brazil.vfsevisa.com for Brazil, gov.uk for the UK, and so on) and skip anything that looks like a shortcut.',
    source: { label: 'Do US citizens need a visa for Brazil?', href: '/brazil/e-visa' },
    confidence: 'high',
    checkedISO: '2026-09-04',
  },
  {
    id: 'etias-not-live-yet',
    scope: 'topic',
    topic: 'visas',
    country: null,
    claim: 'Americans need ETIAS to visit Europe in 2026, so apply now.',
    finding:
      'There is nothing to apply for yet. The EU has removed the late-2026 launch target ' +
      'and its official portal says ETIAS is currently not in operation, with a start now ' +
      'expected in 2027 followed by a transition period. Do not pay any site claiming to ' +
      'take ETIAS applications today. Note this is separate from the EU Entry/Exit System ' +
      '(EES), the automated passport-scanning at the border, which is a different thing and ' +
      'is already running.',
    soWhat: 'Ignore any 2026 ETIAS deadline and any site selling one; there is no application open.',
    source: { label: 'Passports and visas, every country', href: '/passports-and-visas' },
    confidence: 'high',
    checkedISO: '2026-09-04',
  }, // src: EU official ETIAS portal ("currently not in operation"); launch expected 2027. MAIN web-verified 2026-09-04.
  {
    id: 'brazil-visa-reinstated',
    scope: 'country',
    topic: 'visas',
    country: 'brazil',
    claim: 'US citizens do not need a visa for Brazil.',
    finding:
      'That is out of date and it can get you denied boarding. Since 10 April 2025 US ' +
      'citizens need an e-visa to enter Brazil, applied for online before you travel through ' +
      'the official portal at brazil.vfsevisa.com. It costs 80.90 US dollars, is valid for ' +
      'multiple entries, and there is no longer a visa-free option.',
    soWhat: 'Apply for the Brazil e-visa online before you fly, and only through the official VFS portal.',
    source: { label: 'Brazil money and entry guide', href: '/brazil' },
    confidence: 'high',
    checkedISO: '2026-09-04',
  }, // src: US Embassy Brazil "New Visitor Visa Requirements"; fee + 10-Apr-2025 date. MAIN web-verified 2026-09-04.
  {
    id: 'vietnam-evisa-90-day-all',
    scope: 'country',
    topic: 'visas',
    country: 'vietnam',
    claim: 'The Vietnam e-visa is 30 days, single entry, and only for a short list of countries.',
    finding:
      'That describes the old rule. Since August 2023 the e-visa is open to every ' +
      'nationality, valid up to 90 days, single or multiple entry, applied for online at the ' +
      'official portal evisa.gov.vn for 25 US dollars single or 50 multiple. The one catch ' +
      'that still trips people up: you must enter through the exact port of entry you picked ' +
      'in the application.',
    soWhat: 'Apply at evisa.gov.vn, pick your real entry point, and skip the reseller sites that charge more.',
    source: { label: 'Vietnam money and entry guide', href: '/vietnam' },
    confidence: 'high',
    checkedISO: '2026-09-04',
  }, // src: Vietnam official immigration portal evisa.gov.vn; Law 47/2014 as amended 2023. MAIN web-verified 2026-09-04.
  {
    id: 'thailand-tdac-required',
    scope: 'country',
    topic: 'visas',
    country: 'thailand',
    claim: 'Visa-free entry to Thailand means there is no form to fill in.',
    finding:
      'There is a form now, and it is mandatory. Since 1 May 2025 every foreign arrival must ' +
      'file the Thailand Digital Arrival Card (TDAC) online within 72 hours before arrival, ' +
      'replacing the old paper TM6, and it applies even to visa-free and visa-on-arrival ' +
      'travelers. It is free and done at the official site tdac.immigration.go.th. This is ' +
      'not a visa or an entry fee, just a required arrival form.',
    soWhat: 'File the free TDAC at the official site in the three days before you arrive, visa or not.',
    source: { label: 'Thailand money and entry guide', href: '/thailand' },
    confidence: 'high',
    checkedISO: '2026-09-04',
  }, // src: US Embassy Thailand + Thai Immigration Bureau; mandatory since 1 May 2025. MAIN web-verified 2026-09-04.
  {
    id: 'uk-vat-refund-gone',
    scope: 'country',
    topic: 'visas',
    country: 'united-kingdom',
    claim: 'Tourists can claim a VAT refund at Heathrow when they leave the UK.',
    finding:
      'Not in Great Britain, not anymore. The UK abolished its tourist VAT refund, the VAT ' +
      'Retail Export Scheme, on 1 January 2021, and it has not returned. So you cannot reclaim ' +
      'the 20 percent VAT on shopping you carry home from England, Scotland or Wales, and ' +
      'there is no airport refund desk. Older guides and shop signs still imply otherwise.',
    soWhat: 'Do not budget for a UK VAT refund on goods you carry home; the scheme is gone.',
    source: { label: 'Do US citizens need an ETA for the UK?', href: '/united-kingdom/eta' },
    confidence: 'high',
    checkedISO: '2026-09-04',
  }, // src: united-kingdom.js already establishes this (VAT Retail Export Scheme scrapped 1 Jan 2021); gov.uk. MAIN-verified against own guide 2026-09-04.
  {
    id: 'sweden-swish-not-for-tourists',
    scope: 'country',
    topic: 'cash',
    country: 'sweden',
    claim: 'Sweden is cashless, so just use Swish and you do not need any local currency.',
    finding:
      'Half right, and the wrong half will strand you. Cards are accepted almost everywhere, ' +
      'so you rarely need cash, that part is true. But Swish, the app everyone means by ' +
      '"just use Swish", needs a Swedish personal identity number, a Swedish bank account and ' +
      'BankID, none of which a visitor has. As a tourist you pay by card or phone tap, not ' +
      'Swish.',
    soWhat: 'Bring a contactless Visa or Mastercard for Sweden; do not count on Swish, it is locals only.',
    source: { label: 'Do I need cash in Sweden, or can I use cards?', href: '/sweden/cash-or-card' },
    confidence: 'high',
    checkedISO: '2026-09-04',
  }, // src: Swish official requirements (personnummer + Swedish bank + BankID); visitsweden. MAIN web-verified 2026-09-04. NOTE TO OC: confirm the /sweden/cash-or-card spoke exists; if the slug differs, point source at /sweden and flag.
  {
    id: 'uae-whatsapp-calls-blocked',
    scope: 'country',
    topic: 'connectivity',
    country: 'uae',
    claim: 'You can just use WhatsApp or FaceTime to call home from Dubai.',
    finding:
      'Not over a local connection. The UAE blocks WhatsApp and FaceTime voice and video ' +
      'calls on its own wifi and mobile networks; text, photos and voice notes still work ' +
      'fine, only the calls are blocked. Two things do work: a licensed app like BOTIM, or ' +
      'calling over a foreign travel eSIM or home-SIM roaming, which routes around the local ' +
      'block. So the honest fix is not "install an app", it is how your data is routed.',
    soWhat: 'To call home from the UAE, use a foreign-routed eSIM or roaming, or a licensed app like BOTIM.',
    source: { label: 'Staying connected in the UAE', href: '/uae/staying-connected' },
    confidence: 'high',
    checkedISO: '2026-09-04',
  }, // src: UAE TDRA VoIP policy, blocked as of 2026; foreign-routed eSIM/roaming bypass corroborated across sources. MAIN web-verified 2026-09-04. NOTE TO OC: confirm the UAE slug (united-arab-emirates) and the staying-connected spoke path; if different, correct source.href and country, and flag.
  {
    id: 'japan-tax-free-refund-switch',
    scope: 'country',
    topic: 'cash',
    country: 'japan',
    claim: 'In Japan tourists get the sales tax knocked off at the register.',
    finding:
      'That is changing on 1 November 2026. Until 31 October the old instant exemption at the ' +
      'register still applies. From 1 November Japan switches to a refund method: you pay the ' +
      'full tax-included price in the shop, then customs confirms the goods are leaving at ' +
      'your departure airport and the tax is refunded after that. The 5,000 yen minimum ' +
      'purchase stays; keep tax-free goods in your carry-on so customs can check them.',
    soWhat: 'For a trip from 1 November 2026, expect to pay tax up front and reclaim it at the airport, not at the till.',
    source: { label: 'Do I need cash in Japan, or can I use cards?', href: '/japan/cash-or-card' },
    confidence: 'high',
    checkedISO: '2026-09-04',
  }, // src: Japan National Tax Agency + Japan Tourism Agency, refund method from 1 Nov 2026. MAIN web-verified 2026-09-04.
];

// Confidence -> tooltip title, matching the vocabulary rail-passes.js and seasons.js use.
// This rates how firmly the FINDING is supported, not a numeric precision, since a truth
// check makes no numeric claim of its own.
export const CONF_TITLE = {
  high: 'Rests on an official source or our own gate-checked verdict layer',
  medium: 'Supported by multiple credible sources',
  low: 'Anecdotal or still changing, should have a MAIN sign-off before it ships',
};

export const truthCheckById = (id) => truthChecks.find((t) => t.id === id) || null;

// For a given live country + spoke topic, the one truth check (if any) hand-authored
// against that exact spoke's prose. Deliberately narrow: a country can carry more than one
// truth check only if two different spokes each have one, never two on the same spoke.
export const truthCheckForSpoke = (countrySlug, topic) =>
  truthChecks.find((t) => t.scope === 'country' && t.country === countrySlug && t.topic === topic) || null;
