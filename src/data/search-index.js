// The search index: every real page on the site, enumerated from the data that builds
// those pages.
//
// The one rail that matters: a record can only exist here if the page exists. Countries
// and spokes come from src/data/index.js under exactly the filters the routes use
// (c.live, and s.live !== false), money rules cards come from money-rules.js under the
// same condition rules.astro applies, and standalone pages come from the checked
// registry in search-pages.js, which reads real files. Nothing is typed from memory, no
// URL is built by string-guessing a slug, and there is no path from a reader's query to
// a link. If it is not in here, the search finds nothing and says so.
//
// Output is deterministic: no timestamps, no counters, no build id. That is what lets
// scripts/check-search-index.mjs regenerate the index and diff it byte for byte against
// the one the build shipped, and fail if they differ.

import { countries } from './index.js';
import { rulesFor } from './money-rules.js';
import { standalonePages } from './search-pages.js';
import { countryUrl, spokeUrl, rulesCardUrl } from './site-urls.js';

// What the small chip on a result row says for a standalone page, so a reader can tell a
// tool from a topic hub from a page about the site.
const KIND_CHIP = {
  hub: 'Topic hub',
  tool: 'Comparison tool',
  region: 'Region',
  guide: 'Guide',
  about: 'About the site',
};

// The topic keys in the spoke data are slugs. This is presentation only: hyphens become
// spaces, and the one initialism is written the way the site writes it everywhere else.
function topicLabel(topic) {
  if (!topic) return null;
  if (topic === 'vat-refund') return 'VAT refund';
  if (topic === 'all-inclusive') return 'all-inclusive';
  return topic.replace(/-/g, ' ');
}

// Words a reader might type that are true of the page but do not appear in its title.
// Country name for a spoke whose headline names only a city (Bangkok, Lisbon, CDG), the
// topic key, the slug, and for a standalone page its real page title. All of it is real
// text from the data or the page itself. Nothing here is a synonym or a guess.
function extras(parts) {
  return parts.filter(Boolean).join(' ').replace(/-/g, ' ');
}

/**
 * Every indexable page, as compact records. Keys are short because this ships to the
 * browser: u url, t title, d description, c context chip, k class, x extra match text.
 */
export function searchRecords() {
  const records = [];

  for (const country of countries) {
    if (!country.live) continue;

    records.push({
      u: countryUrl(country.slug),
      t: country.name,
      d: country.description || null,
      c: 'Country guide',
      k: 'country',
      x: extras([country.slug, country.region, country.title]),
    });

    for (const spoke of country.spokes || []) {
      if (spoke.live === false) continue;
      const topic = topicLabel(spoke.topic);
      records.push({
        u: spokeUrl(country.slug, spoke.slug),
        // The spoke h1 is written to stand on its own ("Tipping in Japan"), which is why
        // it is the row title: it cannot read as a promise the page does not keep.
        t: spoke.h1,
        d: spoke.description || null,
        c: topic ? country.name + ' \u00B7 ' + topic : country.name,
        k: 'spoke',
        x: extras([country.name, country.slug, spoke.slug, spoke.topic, spoke.title]),
      });
    }

    const card = rulesFor(country.slug);
    if (card) {
      records.push({
        u: rulesCardUrl(country.slug),
        t: card.h1,
        d: card.description || null,
        c: country.name + ' \u00B7 money rules card',
        k: 'card',
        x: extras([country.name, country.slug, 'rules', card.title]),
      });
    }
  }

  for (const page of standalonePages()) {
    records.push({
      u: page.url,
      t: page.label,
      d: page.description || null,
      c: KIND_CHIP[page.kind] || 'Page',
      k: 'page',
      x: extras([page.title, page.url.replace(/\//g, ' ')]),
    });
  }

  return records;
}

// Where the honest empty state points. These are real pages, and the gate asserts each
// one is present in the records above, so this list cannot outlive a page. They are shown
// under a heading that says plainly that nothing matched, never as results.
export const START_HERE = ['/countries', '/rules', '/cash-or-card', '/tipping-compared', '/hotel-tax-map'];

/** The shipped artifact: what /search-index.json contains. */
export function buildSearchIndex() {
  return { records: searchRecords(), starts: START_HERE };
}

/** Record counts by class, for the gate and for a quick sanity check on completeness. */
export function indexCounts(records = searchRecords()) {
  const counts = { country: 0, spoke: 0, card: 0, page: 0, total: records.length };
  for (const r of records) counts[r.k] += 1;
  return counts;
}
