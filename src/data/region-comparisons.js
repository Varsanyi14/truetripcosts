// Regional comparison clusters, the single source of truth for which countries
// belong to which comparison page. Each country in a cluster gets a contextual
// link to the cluster's comparison page on its hub, and the comparison page links
// back to the countries. Add a cluster here (and build its page) and the hub
// links appear on their own, no per-hub editing.
export const clusters = [
  {
    href: '/compare/southern-europe',
    region: 'Southern Europe',
    parent: 'Europe',
    blurb: 'Portugal, Spain, Italy, Greece and Croatia, on cost, cash, tipping and getting around.',
    pitch: 'Sunny coasts, light tipping, one shared currency.',
    slugs: ['portugal', 'spain', 'italy', 'greece', 'croatia']
  },
  {
    href: '/compare/western-europe',
    region: 'Western Europe',
    parent: 'Europe',
    blurb: 'The UK, France, the Netherlands and Ireland, the classic first-timer loop.',
    pitch: 'The gentlest first trip: easy, card-friendly, English-easy.',
    slugs: ['united-kingdom', 'france', 'netherlands', 'ireland']
  },
  {
    href: '/compare/central-europe',
    region: 'Central Europe',
    parent: 'Europe',
    blurb: 'Germany, Austria, Switzerland, Czechia and Hungary, from currencies to cost.',
    pitch: 'Great trains, several currencies, a big value gap.',
    slugs: ['germany', 'austria', 'switzerland', 'czechia', 'hungary']
  },
  {
    href: '/compare/nordics',
    region: 'The Nordics',
    parent: 'Europe',
    blurb: 'Denmark, Sweden, Norway and Iceland, all pricey, all nearly cashless.',
    pitch: 'The priciest, the most cashless, unreal landscapes.',
    slugs: ['denmark', 'sweden', 'norway', 'iceland']
  },
  {
    href: '/compare/southeast-asia',
    region: 'Southeast Asia',
    parent: 'Asia',
    blurb: 'Thailand, Vietnam, Indonesia, the Philippines and Singapore, from cash habits to costs.',
    pitch: 'Cheaper, cash first, and full of contrasts.',
    slugs: ['thailand', 'vietnam', 'indonesia', 'philippines', 'singapore']
  },
  {
    href: '/compare/east-asia',
    region: 'East Asia',
    parent: 'Asia',
    blurb: 'Japan, South Korea, Taiwan, Hong Kong and China, from payment apps to cost.',
    pitch: 'Sleek modern cities, no tipping, a payment app each.',
    slugs: ['japan', 'south-korea', 'taiwan', 'hong-kong', 'china']
  },
  {
    href: '/compare/south-america',
    region: 'South America',
    parent: 'Americas',
    blurb: 'Brazil, Argentina, Colombia and Ecuador, from the US dollar to exchange-rate quirks.',
    pitch: 'Great value, vibrant cities, a currency quirk each.',
    slugs: ['brazil', 'argentina', 'colombia', 'ecuador']
  },
  {
    href: '/compare/middle-east',
    region: 'Middle East',
    parent: 'Middle East',
    blurb: 'The UAE, Oman, Turkey and Egypt, from the cashless Gulf to cash-first Egypt.',
    pitch: 'Gulf ease, Omani calm, Turkish value, or Egypt on a budget.',
    slugs: ['uae', 'oman', 'turkey', 'egypt']
  },
  {
    href: '/compare/gulf',
    region: 'The Gulf',
    parent: 'Middle East',
    blurb: 'The UAE, Oman, Qatar, Saudi Arabia, Bahrain and Kuwait, on cost, cards, tipping and entry.',
    pitch: 'Five currencies pegged to the dollar, and one that is not.',
    slugs: ['uae', 'oman', 'qatar', 'saudi-arabia', 'bahrain', 'kuwait']
  },
  {
    href: '/compare/africa',
    region: 'Africa',
    parent: 'Africa',
    blurb: 'Egypt, Morocco, South Africa and Namibia, our African guides compared.',
    pitch: 'Pyramids, souks, card-friendly South Africa, or a self-drive.',
    slugs: ['egypt', 'morocco', 'south-africa', 'namibia']
  }
];

// Join a list of names as "A, B and C" (no Oxford comma, matching the site voice).
function joinNames(names) {
  if (names.length === 0) return '';
  if (names.length === 1) return names[0];
  if (names.length === 2) return names[0] + ' and ' + names[1];
  return names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
}

// Return the comparison context for a country slug, or null if it is not in a
// cluster. `countries` is passed in so sibling names stay in sync with the data.
export function comparisonFor(slug, countries) {
  const cluster = clusters.find(c => c.slugs.includes(slug));
  if (!cluster) return null;
  const nameOf = s => {
    const c = (countries || []).find(x => x.slug === s);
    return c ? c.name : s;
  };
  const others = cluster.slugs.filter(s => s !== slug).map(nameOf);
  return { href: cluster.href, region: cluster.region, othersText: joinNames(others) };
}

// All clusters a country belongs to (a transcontinental country like Egypt sits in two),
// so its guide can link to every comparison it appears in, keeping the links reciprocal.
export function comparisonsFor(slug, countries) {
  const nameOf = s => {
    const c = (countries || []).find(x => x.slug === s);
    return c ? c.name : s;
  };
  return clusters
    .filter(c => c.slugs.includes(slug))
    .map(cluster => ({
      href: cluster.href,
      region: cluster.region,
      othersText: joinNames(cluster.slugs.filter(s => s !== slug).map(nameOf))
    }));
}

// Clusters whose parent top-level region matches, for the region hub pages
// (for example both Asia clusters appear on /asia).
export function clustersForRegion(regionLabel) {
  return clusters.filter(c => c.parent === regionLabel);
}

// The other clusters, for cross-linking between the comparison pages themselves.
export function otherClusters(currentHref) {
  return clusters.filter(c => c.href !== currentHref);
}

// Higher-level "which part of a continent" comparison pages, keyed by the top-level
// region label. Surfaced on the matching region hub, the compare hub and the nav. Add
// an Asia entry here once an Asia capstone exists.
export const regionMetaCompare = {
  Europe: {
    href: '/compare/europe',
    label: 'Which part of Europe?',
    blurb: 'Southern, Central and Nordic Europe compared on cost and character.'
  }
};
