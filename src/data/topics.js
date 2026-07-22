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
  "entry-fees": 'ticket',
  seasons: 'calendar',
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
