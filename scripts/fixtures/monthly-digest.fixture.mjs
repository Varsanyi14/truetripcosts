/**
 * scripts/fixtures/monthly-digest.fixture.mjs
 *
 * TEST DATA ONLY. These are not sourced facts and must never be imported by a
 * site page or copied into src/data/changelog.js. The gate uses them so the
 * digest generator has a fixed, dated input it can assert against no matter
 * what the real log contains this month.
 *
 * One entry links to a topic page on purpose: the gate uses it to prove a
 * non-country link never mints a per-country block.
 *
 * Shape matches src/data/changelog.js:
 *   { date, kind, title, what, why, link, linkLabel }
 */

export const changelogEntries = [
  {
    date: '2026-07-14',
    kind: 'change',
    title: 'Fixture country A raised its city tax to 4 euro a night',
    what: 'The city tax on hotel stays went from 3 euro to 4 euro per person per night, applied to the first seven nights of any stay and collected at check out rather than at booking.',
    why: 'A week for two now costs 14 euro more than the rate you were quoted, and it is cash at the desk, so it does not appear on the card statement you use for expenses.',
    link: '/fixtureland/tourist-tax/',
    linkLabel: 'Fixtureland tourist tax',
  },
  {
    date: '2026-07-02',
    kind: 'change',
    title: 'Fixture country B ended the in store tax free exemption',
    what: 'From 1 November, shops stop taking the tax off at the till. You pay the full price including tax, keep the receipt, and claim the refund at the airport before you fly.',
    why: 'The money leaves your account first and comes back later, which changes what you should put on a card versus cash on a shopping trip.',
    link: '/testonia/tax-refund/',
    linkLabel: 'Testonia tax refund',
  },
  {
    date: '2026-07',
    kind: 'change',
    title: 'Fixture country C added a departure fee at its main airport',
    what: 'A flat fee is now charged on departure for non resident travellers. Airlines have started folding it into the ticket price, but two low cost carriers still collect it at the gate.',
    why: 'If it is collected at the gate it is card only, so this is one more place a card with no foreign transaction fee saves you real money.',
    link: '/samplavia/airport-fees/',
    linkLabel: 'Samplavia airport fees',
  },
  {
    date: '2026-07-09',
    kind: 'correction',
    title: 'Fixture country A hotel tax band',
    what: 'We had the four star band at 3 euro when the schedule showed 3.50 euro. Corrected, with the source note updated.',
    why: 'Small, but it is the sort of thing you plan a budget on.',
    link: '/fixtureland/hotel-tax/',
    linkLabel: 'Fixtureland hotel tax',
  },
  {
    date: '2026-07-06',
    kind: 'change',
    title: 'A topic page entry that must never mint a country block',
    what: 'This entry links to a topic page rather than a country guide, the way a passports or visas entry does.',
    why: 'It belongs in the general log, and there is no subscriber tag for a topic, so a per-country block for it would be wrong.',
    link: '/topic-page-not-a-country/',
    linkLabel: 'The topic page',
  },
  {
    date: '2026-05-20',
    kind: 'change',
    title: 'Out of window entry that must never appear in a July draft',
    what: 'This entry exists only to prove the cutoff works.',
    why: 'If you see this in a July draft, the window logic is broken.',
    link: '/fixtureland/notes/',
    linkLabel: 'Notes',
  },
];

export function changelog() {
  return changelogEntries;
}

export function displayDate(raw) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  const s = String(raw || '').trim();
  if (/^\d{4}-\d{2}$/.test(s)) {
    const [y, m] = s.split('-').map(Number);
    return `${months[m - 1]} ${y}`;
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) {
    const [y, m, d] = s.split('-').map(Number);
    return `${d} ${months[m - 1]} ${y}`;
  }
  return s;
}
