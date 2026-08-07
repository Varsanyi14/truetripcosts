// Money rules: the pocket-card page type, one per country, at /{country}/rules.
//
// Keyed by country slug. A country gets a rules card simply by gaining a key here,
// and only if that country is also live in src/data/index.js, so this file cannot
// publish a card for a guide that does not exist yet. Costa Rica is the pilot and
// the only key for now.
//
// WRITING RULES FOR A NEW COUNTRY, please read before adding one:
//
// 1. Write the lines fresh. Every fact here is already stated, at length, in the
//    country guide and its spokes. Restating it in the guide's own sentences would
//    put two near-identical passages on the site and let Google pick which one to
//    rank, which is the opposite of what this page is for. Compress each idea into
//    one short line in new words. Keep the precise terms (colones, servicio,
//    la maria, dynamic currency conversion, TPL, PLI), because repeating a term is
//    not duplication and inventing a vaguer synonym just makes the page less useful.
//
// 2. Behaviour, not numbers. These lines are meant to stay true without maintenance,
//    so they carry habits and legally fixed figures only. Costa Rica's 10 percent
//    servicio is set in law and is fine. A percentage band that describes a spread of
//    market behaviour (the 5 to 10 and 3 to 8 below) is fine because it is a range,
//    not a live rate. Never put an exchange rate, an ATM fee or a headline price
//    here: those belong in the guide, where the checked date sits next to them.
//
// 3. Every rule points somewhere. The href must be a real spoke on that country,
//    because the second job of this page is passing authority around the country's
//    cluster. Do not link a rule to a spoke that only half covers it.
//
// House style: no em or en dashes, and "US" never the periods form. A gate enforces
// both (scripts/check-content.py).

export const moneyRules = {
  'costa-rica': {
    // Kept short deliberately. Rendered title is 44 characters, description 148,
    // both inside the limits where Google stops showing the text.
    title: 'Costa Rica money rules: 8 things to remember',
    description:
      'Eight money habits for US travelers in Costa Rica: match the currency, insist on la maria, skip the second tip line, refuse conversion to dollars.',
    h1: 'Costa Rica money rules',
    standfirst:
      'Eight things worth remembering while you are there. Each one links to the fuller explanation in the guide.',
    // Shown as "Rules as of {checked}". Bump this when a rule changes, not on a
    // routine guide refresh, since the point of the page is that it stays put.
    checked: 'August 2026',
    rules: [
      {
        // The one that catches almost everyone, so it gets the ink card at the top
        // rather than a number in the list.
        lead: true,
        h: 'Let the price decide the currency',
        p: 'Colon price, pay colones. Dollar price, pay dollars. Cross the two over and the seller is the one choosing the exchange rate, which quietly costs you 5 to 10 percent.',
        href: '/costa-rica/cash-or-card',
        linkLabel: 'Which currency to pay in',
      },
      {
        h: 'Cards work nearly everywhere',
        p: 'Hotels, restaurants, tours and supermarkets all take them. Carry a little cash anyway for small vendors and rural stops.',
        href: '/costa-rica/cash-or-card',
        linkLabel: 'Where cards work',
      },
      {
        h: 'Ask for la maria, then check it is running',
        p: 'That is the taxi meter, and some drivers leave it off for tourists. If it stays off, find another car. Uber and DiDi both operate here and quote before you ride.',
        href: '/costa-rica/taxis-and-apps',
        linkLabel: 'Taxis and apps in Costa Rica',
      },
      {
        h: 'Sit down to eat and the tip is already there',
        p: 'Restaurants add 10 percent servicio by law. Nothing further is expected unless the service genuinely stood out.',
        href: '/costa-rica/tipping',
        linkLabel: 'Tipping in Costa Rica',
      },
      {
        h: 'Then check the receipt for a second tip box',
        p: 'A few tourist places add the legal 10 percent and still slide over a US-style slip with an empty tip box. Fill that in and you have paid the tip twice.',
        href: '/costa-rica/tipping',
        linkLabel: 'Tipping in Costa Rica',
      },
      {
        h: 'The rental quote is not the rental price',
        p: 'Local third-party liability cover is compulsory here, billed as TPL or PLI. No US credit card stands in for it, and most online quotes leave it out entirely.',
        href: '/costa-rica/renting-a-car',
        linkLabel: 'Renting a car in Costa Rica',
      },
      {
        h: 'Refuse any screen offering to charge you in dollars',
        p: 'Card terminals and ATMs both ask. Saying yes is dynamic currency conversion, worth 3 to 8 percent to whoever asked. Choose colones, so your bank does the converting.',
        href: '/costa-rica/cash-or-card',
        linkLabel: 'Declining the dollar conversion',
      },
      {
        h: 'Bring small US bills in good condition',
        p: 'Fifties and hundreds are awkward to break outside a bank. Anything torn, marked or limp gets handed back, and cash from a local ATM is not automatically clean.',
        href: '/costa-rica/cash-or-card',
        linkLabel: 'Bringing US cash',
      },
    ],
  },
};

export function rulesFor(slug) {
  return moneyRules[slug] || null;
}
