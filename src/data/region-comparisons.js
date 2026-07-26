// Regional comparison clusters, the single source of truth for which countries
// belong to which comparison page. Each country in a cluster gets a contextual
// link to the cluster's comparison page on its hub, and the comparison page links
// back to the countries. Add a cluster here (and build its page) and the hub
// links appear on their own, no per-hub editing.
export const clusters = [
  {
    href: '/compare/southern-europe',
    region: 'Southern Europe',
    slugs: ['portugal', 'spain', 'italy', 'greece', 'croatia']
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
