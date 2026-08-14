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
import { tipping as tippingRows } from './tipping.js';

// Reading order within the block. The price-versus-price items lead where they exist, because a
// real price beside a fake one is the strongest thing on the list and the reader should meet it
// first. The soft, always-present advice sits underneath. Anything not named here keeps its
// build order, so adding an item without touching this list degrades gracefully.
const ORDER = ['form', 'dead', 'reseller', 'exemption', 'fees', 'dcc', 'doubletip', 'exchange', 'vat'];

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

// ---------------------------------------------------------------------------
// THE PRICE-VERSUS-PRICE ITEMS.
//
// The four indices below share one shape and it is the sharpest thing this site does: we know
// the REAL price and we know the FAKE or AVOIDABLE price, and we put them side by side. "Free
// on the official site, $50 to $100 from the lookalikes" does more work than any amount of
// warning copy, because the gap is the argument.
//
// EVERY FIGURE ON BOTH SIDES IS QUOTED FROM A GUIDE. None is estimated, and none is a
// markup we reasoned out. Where a guide names the scam only in words ("lookalike sites charge
// far more"), the item ships with NO number and says so in words too. That asymmetry is the
// point: a fabricated scam price would be the same sin as the scam.
// ---------------------------------------------------------------------------

// ITEM A. A free mandatory form, and what the lookalikes charge for it.
//
// Gated on arrival-forms.js, so an item cannot exist for a country with no form. The value
// here is only the FAKE side; the free side and the official URL come from that module, which
// keeps one source of truth for the address a traveler is sent to.
//
// null means the guide names the lookalikes but publishes no price, so the item renders
// without a figure. Only three guides carry a sourced range today.
const SCAM_FORM_PRICE = {
  colombia: '$30 to $50',            // colombia.js: third-party sites charge $30 to $50 to file this free form
  'dominican-republic': '$20 to $50', // dominican-republic.js: lookalike sites charging $20 to $50
  'south-korea': '$50 to $100',       // south-korea.js: third-party sites that charge $50 to $100 for what the government provides free
  thailand: null, philippines: null, singapore: null, taiwan: null, 'sri-lanka': null,
};

// ITEM B. A real official charge, and what resellers add on top.
//
// Gated on entry-charges.js, so it only fires where an unconditional charge genuinely exists,
// plus one deliberate exception below. `official` is the short form of the figure the guide
// already publishes; `fake` is the reseller side and is null wherever no figure is sourced.
const RESELLER = {
  // Both sides sourced. The sharpest example on the site: the fake is over five times the real
  // fee at the top of its range.
  egypt: { official: '$30', fake: '$75 to $160', what: 'tourist visa' },
  // The fake side is a sourced multiple rather than a figure, which is still a real comparison.
  indonesia: { official: 'IDR 150,000', fake: 'two to three times that', what: 'Bali tourist levy' },
  // Official price sourced, reseller side named only.
  'united-kingdom': { official: '20 pounds', fake: null, what: 'ETA' },
  australia: { official: 'AUD 20', fake: null, what: 'ETA' },
  brazil: { official: 'about $81', fake: null, what: 'e-visa' },
  india: { official: 'the published portal fee', fake: null, what: 'e-Tourist Visa' },
  aruba: { official: '$20 a person', fake: null, what: 'ED Card' },
};

// The deliberate exception. Turkey has NO entry charge, because the e-visa for US ordinary
// passports was abolished in 2023, so entry-charges.js holds nothing to gate on. That absence
// is exactly what makes it worth saying: the official price is nothing, and every site selling
// a Turkish e-visa is selling a product that no longer exists. Kept separate from RESELLER so
// nobody later assumes it has a fee.
const DEAD_PRODUCT = {
  turkey: {
    what: 'Turkish e-visa',
    detail: 'US citizens on ordinary passports have needed no visa and no e-visa for Turkey since 2023, so the official price is nothing at all. Every site still selling a Turkish e-visa is charging you for a document that does not exist.',
  },
};

// ITEM C. A service charge already on the bill, so a tip on top is paying twice.
//
// Gated on tipping.serviceCharge, and deliberately only on the two unambiguous tiers. 28 more
// guides are marked `often`, and "often" is not a guarantee: telling those travelers the charge
// is already there would be wrong roughly as often as it was right. Those countries already get
// the honest version further up the page, where the tipping line says to read the bill first.
// This block is for money you can count on keeping, so it takes only `always` and `usually`.
const SERVICE_CHARGE_CERTAIN = ['always', 'usually'];

// ITEM D. An exemption you only get if you do something.
//
// Both entries are verified in their own guide's sources block, and both are conditional on an
// action, which is what makes them belong here rather than in a tax explainer. An exemption
// that applies automatically with no action is not money you keep by knowing something.
const EXEMPTION = {
  colombia: {
    title: 'The hotel IVA you do not owe',
    rate: '19%',
    // Matches the Colombia hero fact exactly, on purpose: same rate, same escape. The two must
    // never diverge, because they sit on the same page.
    action: 'Show your passport with the entry tourist stamp at check-in, and check the bill.',
    // Deliberately does NOT re-tell the hero fact at the top of this page. Same figure and the
    // same escape, but this is the checklist version: what to do at the desk, not the surprise.
    detail: 'It is not applied automatically, and about half of hotels add it anyway, so the exemption is only worth what you actually claim at check-in.',
    href: '#taxes-and-refunds',
  },
  argentina: {
    title: 'The accommodation VAT you lose by paying cash',
    rate: '21%',
    action: 'Pay with a foreign-issued card or an international transfer, never cash.',
    detail: 'Non-resident foreign tourists get an automatic 21% VAT discount on accommodation, and on breakfast where it is included, but only when the bill is paid with a foreign-issued card or by international transfer. Pay that same bill in cash and you simply lose it.',
    href: '#taxes-and-refunds',
  },
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

  // 5. THE SCAM PRICE TAG. Only where the country genuinely has a pre-flight form, read from
  //    the arrival-forms module so the two can never disagree. The paid one (Aruba) is excluded
  //    here because its fee is real: it goes through the reseller item instead.
  //
  //    This is the upgrade of an item that already existed rather than a second one beside it.
  //    Showing "the form is free" and "the lookalikes charge $30 to $50" as two separate rows
  //    would read as two separate facts about the same form, which is exactly the duplication
  //    the page has to avoid.
  const form = arrivalFormFor(c.slug);
  if (form && form.free) {
    const fake = SCAM_FORM_PRICE[c.slug] || null;
    const site = form.official.replace(/^https?:\/\//, '').replace(/\/$/, '');
    out.push({
      key: 'form',
      title: 'Paying for the ' + form.name,
      escape: 'File it yourself at ' + site + '. It takes minutes.',
      detail: fake
        ? 'It is free on the official government site. Lookalike sites charge ' + fake + ' to type the same details into the same form, and they rank above the real one because the government does not buy ads.'
        : 'It is free on the official government site, and it is mandatory, which is exactly why lookalike sites buy the search terms. We publish no figure for what they charge because none is sourced for ' + c.name + ', but anything above nothing is too much.',
      // The two prices, side by side. The free side is the fact; the fake side appears only
      // where a guide publishes it.
      figure: fake || 'free',
      figureNote: fake ? 'what the fakes charge' : 'on the official site',
      priceVs: fake ? { real: 'free', fake: fake } : null,
      href: '/arrival-forms',
      hrefLabel: 'Every form, and its real site',
    });
  }

  // 6. THE RESELLER MARKUP. Only where a real unconditional charge exists to be impersonated.
  //    Where the guide publishes both prices they sit side by side; where it names the markup
  //    only in words, so does this.
  const charges = entryChargesFor(c).filter(isBillable);
  const r = RESELLER[c.slug];
  if (charges.length && r) {
    out.push({
      key: 'reseller',
      title: 'Reseller markup on the ' + r.what,
      escape: 'Apply on the official government portal, linked in Getting there above.',
      detail: r.fake
        ? 'The official ' + r.what + ' is ' + r.official + '. Resellers charge ' + r.fake + ' for the same document, and they are not a faster route, only a costlier one.'
        : 'The official ' + r.what + ' is ' + r.official + ' on the government site. Resellers charge above that for the same document. We publish no figure for the markup because none is sourced for ' + c.name + ', and it varies by reseller.',
      figure: r.official,
      figureNote: 'the official price',
      priceVs: r.fake ? { real: r.official, fake: r.fake } : null,
      href: '#true-cost',
      hrefLabel: 'The official source for this charge',
    });
  } else if (charges.length) {
    // A real charge with no reseller data of its own: named, never figured.
    out.push({
      key: 'reseller',
      title: 'Reseller markup on the entry charge',
      escape: 'Apply on the official government portal, linked in Getting there above.',
      detail: 'The charge itself is unavoidable. Paying an agent on top of it is not, and the sites that rank above the official one are agents. We publish no figure for the markup because it varies by reseller.',
      href: '#true-cost',
      hrefLabel: 'The official source for this charge',
    });
  }

  // 6b. THE DEAD PRODUCT. No entry charge exists to gate on, which is the whole fact: the
  //     official price is nothing because the document was abolished.
  const dead = DEAD_PRODUCT[c.slug];
  if (dead) {
    out.push({
      key: 'dead',
      title: 'Buying a ' + dead.what,
      escape: 'Buy nothing. Fly on your ordinary passport.',
      detail: dead.detail,
      figure: 'nothing',
      figureNote: 'the official price',
      priceVs: { real: 'nothing', fake: 'whatever they ask' },
      href: '/' + c.slug,
      hrefLabel: 'What you actually need to enter',
    });
  }

  // 7. THE DOUBLE-TIP GUARD. Only on the two service-charge tiers that are a guarantee rather
  //    than a tendency. Categorical by design: the money kept is the tip you would have added,
  //    which is not a fixed number, so this item never carries one.
  const tipRow = tippingRows.find(x => x.slug === c.slug);
  if (tipRow && SERVICE_CHARGE_CERTAIN.includes(tipRow.serviceCharge)) {
    out.push({
      key: 'doubletip',
      title: 'Tipping on top of a service charge',
      escape: 'Read the bill first. Where the charge is on it, that is the tip.',
      detail: 'A service charge is ' + (tipRow.serviceCharge === 'always' ? 'always' : 'usually') + ' added to the bill in ' + c.name + ', so a tip on top of it is paying for service twice. We put no figure on this one, because what you would have added is up to you.',
      href: '/' + c.slug + '/tipping',
      hrefLabel: 'How tipping works here',
    });
  }

  // 8. THE CLAIMABLE EXEMPTION. Money you are owed and only get by doing something.
  const ex = EXEMPTION[c.slug];
  if (ex) {
    out.push({
      key: 'exemption',
      title: ex.title,
      escape: ex.action,
      detail: ex.detail,
      figure: ex.rate,
      figureNote: 'you should not be paying',
      href: ex.href,
      hrefLabel: 'How the exemption works',
    });
  }

  // Sort into the reading order above. An item whose key is not listed falls to the end in the
  // order it was built, so adding one without touching ORDER can never drop it.
  const rank = (k) => { const i = ORDER.indexOf(k); return i === -1 ? ORDER.length : i; };
  return out.sort((a, b) => rank(a.key) - rank(b.key));
}

// Exported so a check or a page can report the coverage hole rather than discover it later.
export const refundStatusFor = (slug) => REFUND[slug] || 'absent';
