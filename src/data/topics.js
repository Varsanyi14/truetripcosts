// Spoke presentation metadata, shared by the country page, the spoke page, and the
// topic hubs so there is a single source of truth.

// Topic -> Symbol icon name, for the small marker next to a spoke in the "Going
// deeper" list, on the spoke header, and in the sibling list. Any unmapped topic
// falls back to the generic "tag" icon at the call site.
export const topicIcon = {
  taxis: 'taxi',
  cash: 'card',
  visas: 'passport',
  pets: 'paw',
  tipping: 'tip',
  connectivity: 'phoneok',
  health: 'health',
  driving: 'wheel',
  attractions: 'ticket',
  seasons: 'calendar',
  "all-inclusive": 'cocktail',
  scams: 'alert',
  "tourist-tax": 'receipt',
  taxes: 'receipt',
  "vat-refund": 'refund',
  rail: 'train',
};

// Topic -> family hub, for the reverse link rendered at the foot of every spoke in
// that family (Spoke.astro reads this next to the country CTA). Data-driven so a
// whole wave of spokes gains its up-link the day the hub ships, with no prose edits,
// and so a hub link cannot be hand-typed into a 404: the href here is the one place
// it is written. A topic with no entry renders no link, which is how every family
// behaved before this map existed. Only health is mapped for now; add a family here
// when its hub is ready to receive the traffic.
export const TOPIC_HUBS = {
  health: { href: '/medical-costs', label: 'Medical costs abroad, country by country' },
};

// Caution tier -> chip label. The three-step "how careful to be" signal shown on the
// taxi spokes and the taxi hub. Colours live in global.css (.cx-low / .cx-medium /
// .cx-high). Wording is deliberately soft: it is our own read, tied to each spoke's
// checked date, not a fixed verdict. A spoke with no caution field shows no chip.
export const caution = {
  low: { label: 'Straightforward' },
  medium: { label: 'A catch or two' },
  high: { label: 'Take extra care' },
};
