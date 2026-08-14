// "WHAT WE'LL HELP YOU KEEP": the costs a traveler can refuse to pay.
//
// WHY THIS EXISTS. The fees section used to list only what happens TO a traveler: the card
// fee, the ATM fee, the tourist tax. All true, all unavoidable, and all passive. The half
// that was missing is the half the site is actually for: the money you do not have to hand
// over at all, and how to refuse it. This module is that half.
//
// EVERY ITEM IS PER COUNTRY AND MUST GENUINELY APPLY. A generic checklist would be worse than
// nothing here, because it would put "claim your VAT refund" on a country with no refund
// scheme and "decline paying in dollars" on a country whose currency IS the dollar. Both of
// those are real traps this file is built to avoid, and both were live bugs caught while
// building it. So each item is gated on a field, and a country that does not qualify shows
// no line.
//
// THE FIGURE RULE. A dollar figure or a percentage appears ONLY where an existing sourced
// field supports it. Everywhere else the item is NAMED with its escape and carries no number.
// Nothing here is ever summed into a "you could save $X" headline: that is the churner tone
// the site exists in opposition to, and a total of money-not-spent is not a real quantity.
// Avoidable amounts are also never folded into any cost total anywhere, because they are by
// definition what the traveler will NOT pay.
//
// ONE ITEM DOES CARRY A LIVE FIGURE: the card and ATM fees, where the amount is the
// calculator's own computed cardFee plus atmFee, which is exactly what the existing
// no-foreign-fee toggle already demonstrates. That is not a savings estimate, it is the fee
// the calculator is already charging, quoted back.

import { arrivalFormFor } from './arrival-forms.js';
import { entryChargesFor, isBillable } from './entry-charges.js';

// ---------------------------------------------------------------------------
// A7 refund availability, classified BY HAND, and here is why.
//
// There is no structured refund field. The obvious shortcut is to pattern-match each guide's
// `taxfree{}` prose for "VAT refund" and treat a hit as availability. That shortcut is
// actively dangerous and was tested: it produced FIVE false positives, because Costa Rica,
// the Dominican Republic, India, Ecuador and Georgia all contain the exact phrase "there is
// no VAT-refund scheme". A regex sees the words and misses the negation, so five countries
// that explicitly have no refund would have been told to go and claim one.
//
// So the classification is written out. Each entry below reflects what that country's own
// guide says in its `taxfree{}` block, and nothing else. Three states, and the third matters:
//
//   yes      the guide affirms a refund exists for visitors
//   no       the guide affirms there is not one, or that there is no VAT at all
//   absent   the guide does not say either way, so we show NOTHING
//
// `absent` is absence-is-not-zero doing real work. Mexico, Indonesia and El Salvador have
// `taxfree{}` blocks that are about entry levies and service charges and simply never address
// refunds; Vietnam has no block at all. Several of those countries may well have a refund
// scheme, but this file will not assert one the guide has not stated. That is a content gap
// for the desk to close, not a gap for this module to fill.
//
// FLAGGED TO MAIN: the four `absent` countries are a real coverage hole in the guides, not in
// this code. Add a refund sentence to their `taxfree{}` block and the line appears here on
// its own.
const REFUND = {
  // affirms a refund exists
  japan: 'yes', thailand: 'yes', italy: 'yes', france: 'yes', spain: 'yes', portugal: 'yes',
  greece: 'yes', germany: 'yes', netherlands: 'yes', uae: 'yes', 'saudi-arabia': 'yes',
  czechia: 'yes', switzerland: 'yes', austria: 'yes', turkey: 'yes', colombia: 'yes',
  argentina: 'yes', ireland: 'yes', bahamas: 'yes', iceland: 'yes', norway: 'yes',
  sweden: 'yes', denmark: 'yes', 'south-korea': 'yes', singapore: 'yes', australia: 'yes',
  'south-africa': 'yes', taiwan: 'yes', poland: 'yes', hungary: 'yes', croatia: 'yes',
  china: 'yes', namibia: 'yes', philippines: 'yes',

  // affirms there is none, or no VAT at all
  'united-kingdom': 'no', oman: 'no', qatar: 'no', bahrain: 'no', kuwait: 'no', canada: 'no',
  'new-zealand': 'no', morocco: 'no', cambodia: 'no', laos: 'no', aruba: 'no',
  'hong-kong': 'no', 'sri-lanka': 'no', egypt: 'no', brazil: 'no', jamaica: 'no',
  'costa-rica': 'no', 'dominican-republic': 'no', india: 'no', ecuador: 'no', georgia: 'no',

  // deliberately unlisted, so no line renders: mexico, indonesia, el-salvador, vietnam
};

// The three guides that carry the refund as a dated, sourced keyFact rather than as prose.
// Only these show a rate and a threshold; everywhere else the item is name-only and points at
// the country's own taxes section. Lifting a rate out of a sentence would be inventing
// structure that was never verified as structure.
const REFUND_FACTS = {
  philippines: 'Tourist VAT refund (RA 12079)',
  'south-africa': 'Tourist VAT refund',
  taiwan: 'Tourist VAT refund (TRS)',
};

const plain = (s) => String(s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

// Builds the avoidable list for one country. Order is deliberate: the two that cost the most
// and are easiest to refuse come first.
export function avoidableFor(c) {
  if (!c) return [];
  const out = [];
  const cur = (c.cash && c.cash.cur) || '';
  // A country whose currency IS the dollar has no pay-in-dollars choice at a terminal and
  // nothing to exchange. Rendering "choose USD rather than dollars" there is nonsense, and it
  // shipped in the last build before this gate existed.
  const usdCountry = cur === 'USD';

  // 1. DCC. The band is a site-wide sourced figure (money-rules.js states 3 to 8 percent),
  //    so it renders as a band on the card spend, never as a computed dollar saving.
  if (!usdCountry) {
    out.push({
      key: 'dcc',
      title: 'Paying in dollars at the terminal',
      escape: 'Choose ' + cur + ' every time, at a till and at an ATM.',
      detail: 'Dynamic currency conversion lets the machine set its own rate on top of any fee, and it runs about 3 to 8 percent on whatever you put on the card. It is the single easiest charge on this page to refuse, and it costs nothing to say no.',
      // A range, not a dollar figure: the band is sourced, the multiplication would not be.
      figure: 'about 3 to 8%',
      figureNote: 'on what you card',
      href: '/' + c.slug + '#cards',
      hrefLabel: 'How to decline it',
    });
  }

  // 2. The card and ATM fees, which a different card takes to zero. This is the one item with
  //    a live dollar figure, and it is the calculator's own computed fee rather than an
  //    estimate of a saving. The element is filled by render(), so it cannot disagree with the
  //    fee lines directly above it.
  out.push({
    key: 'fees',
    title: 'Your own bank\'s foreign fees',
    escape: 'A no-foreign-fee card takes both fee lines above to zero.',
    detail: 'Most US cards add a percentage on what you buy and on the cash you pull, plus a few dollars per ATM withdrawal. Nothing about that is a cost of the trip; it is a cost of the card you happened to bring.',
    liveFigureId: 'avFees',
    figureNote: 'what the fees above come to',
    href: '#calcNoFee',
    hrefLabel: 'The cards that do not charge it',
  });

  // 3. Exchange desks. Name-only: no honest spread figure exists per country, and the guides
  //    say so. Skipped for dollar countries, where there is nothing to change.
  if (!usdCountry) {
    out.push({
      key: 'exchange',
      title: 'The airport or hotel exchange desk',
      escape: 'Withdraw from a bank ATM instead, and never change cash at the airport.',
      detail: 'Exchange counters make their money on the spread rather than on a stated fee, which is why we publish no percentage for it: it moves by counter, by hour and by note. The rule is what is reliable, not the number.',
      href: '/' + c.slug + '#cash',
      hrefLabel: 'Getting cash here',
    });
  }

  // 4. VAT or GST refund. Only where the guide affirms one exists. This is money the traveler
  //    is owed and mostly does not claim, which makes it the purest item on the list.
  if (REFUND[c.slug] === 'yes') {
    const factLabel = REFUND_FACTS[c.slug];
    const fact = (factLabel && Array.isArray(c.keyFacts)) ? c.keyFacts.find(k => k.label === factLabel) : null;
    out.push({
      key: 'vat',
      title: 'The sales tax you can claim back',
      escape: 'Ask for the tax-free form at the till, keep the goods unused, and claim on the way out.',
      detail: fact
        ? plain(fact.value) + ' Most travelers never claim it. We put no dollar figure on it, because it depends on what you buy.'
        : c.name + ' refunds sales tax to visitors on qualifying shopping, with the rate and any minimum spend set out in this guide. Most travelers never claim it, and we put no dollar figure on it, because it depends on what you buy.',
      href: '#taxes-and-refunds',
      hrefLabel: 'The rate and the minimum spend',
    });
  }

  // 5. The arrival-form fake. Only where the country genuinely has a pre-flight form, read
  //    straight off the arrival-forms module so the two can never disagree. The paid one
  //    (Aruba) is excluded here: its fee is real, so there is nothing to avoid.
  const form = arrivalFormFor(c.slug);
  if (form && form.free) {
    out.push({
      key: 'form',
      title: 'Paying for the ' + form.name,
      escape: 'File it on the official site. It is free.',
      detail: 'It is mandatory, which is exactly why lookalike sites buy the search terms and charge for it. The official address is ' + form.official.replace(/^https?:\/\//, '').replace(/\/$/, '') + ' and nothing else.',
      href: '/arrival-forms',
      hrefLabel: 'Every form, and its real site',
    });
  }

  // 6. Entry-fee lookalikes. Only where a real charge exists to be impersonated, and named
  //    rather than priced: we hold no sourced figure for what the resellers add.
  const charges = entryChargesFor(c).filter(isBillable);
  if (charges.length) {
    out.push({
      key: 'reseller',
      title: 'Reseller markup on the entry charge',
      escape: 'Apply on the official government portal, linked in Getting there above.',
      detail: 'The charge itself is unavoidable. Paying an agent on top of it is not, and the sites that rank above the official one are agents. We publish no figure for the markup because it varies by reseller.',
      href: '#true-cost',
      hrefLabel: 'The official source for this charge',
    });
  }

  return out;
}

// Exported so a check or a page can report the coverage hole rather than discover it later.
export const refundStatusFor = (slug) => REFUND[slug] || 'absent';
