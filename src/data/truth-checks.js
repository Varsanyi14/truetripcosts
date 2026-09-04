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
    checkedISO: '2026-08-18',
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
    checkedISO: '2026-08-18',
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
    checkedISO: '2026-08-01',
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
    checkedISO: '2026-07-08',
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
    checkedISO: '2026-07-02',
  },
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
