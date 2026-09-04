// The standalone pages the search box can find: the hubs, tools, region pages and
// reference pages that are not country guides or spokes.
//
// Countries and spokes enumerate themselves from src/data/index.js, and the money rules
// cards enumerate themselves from money-rules.js, so none of those need listing here.
// The .astro pages have no data file behind them, so this is the registry the brief
// allows: a CHECKED list, not free-typed strings. Two rules make it safe.
//
// 1. Nothing here types a URL. Each entry names the file that Astro routes, and
//    pageUrlFromFile() in site-urls.js derives the path from that file name. A typo
//    therefore fails as a missing file at gate time rather than shipping a 404 link.
//
// 2. Every .astro file under src/pages is accounted for, either here or in EXCLUDED
//    below with a reason. scripts/check-search-index.mjs asserts that, so a new page
//    cannot quietly go missing from search, and an exclusion is always a decision
//    somebody made rather than an oversight.
//
// The label is the row title a reader sees. Where the site already names a page in the
// nav, the label is that same wording, so search and menu speak one vocabulary. Labels
// for the region compares and the region hubs are not typed at all: they come from
// region-comparisons.js and hubs.js. The page's real <title> and description are read
// out of the .astro source at build time and used for matching, so a reader can find a
// page by words that only appear in its title.

import fs from 'node:fs';
import { REGIONS } from './hubs.js';
import { clusters, regionMetaCompare } from './region-comparisons.js';
// Paths are never concatenated here: site-urls.js owns the shape of every URL.
import { pageUrlFromFile as pageUrl } from './site-urls.js';

// kind drives the small context chip on a result row: what sort of page this is.
//   hub    a topic hub that gathers every country on one subject
//   tool   a cross-country comparison or calculator
//   region a region page or a region comparison
//   guide  a standalone guide on one subject
//   about  reference pages about the site itself
export const INDEXED_PAGES = [
  // Topic hubs.
  { file: 'cash-or-card.astro', label: 'Cash or card', kind: 'hub' },
  { file: 'tipping-compared.astro', label: 'Tipping, country by country', kind: 'hub' },
  { file: 'taxis-and-ride-hailing.astro', label: 'Taxis and ride-hailing', kind: 'hub' },
  { file: 'driving-and-car-rental.astro', label: 'Driving and car rental', kind: 'hub' },
  { file: 'staying-connected.astro', label: 'Staying connected', kind: 'hub' },
  { file: 'money-scams.astro', label: 'Money scams', kind: 'hub' },
  { file: 'hotel-taxes-and-fees.astro', label: 'Hotel taxes and fees', kind: 'hub' },
  { file: 'medical-costs.astro', label: 'Medical costs abroad', kind: 'hub' },

  // Cross-country tools.
  { file: 'cost-comparison.astro', label: 'Cost of a day, compared', kind: 'tool' },
  { file: 'when-to-go.astro', label: 'When to go, cheaper and pricier months', kind: 'tool' },
  { file: 'rail-passes.astro', label: 'Rail passes, worth it or not', kind: 'tool' },
  { file: 'truth-checks.astro', label: 'What the internet gets wrong about travel money', kind: 'tool' },
  { file: 'tourist-taxes.astro', label: 'Tourist taxes and fees', kind: 'tool' },
  { file: 'hotel-tax-map.astro', label: 'Hotel tax by country, mapped', kind: 'tool' },
  { file: 'us-outbound-travelers.astro', label: 'Where Americans travel, ranked', kind: 'tool' },
  { file: 'us-customs-allowance.astro', label: 'US customs allowance, bringing purchases home', kind: 'tool' },

  // Region hubs. The label comes from hubs.js, keyed by the region name below.
  { file: 'europe.astro', label: null, kind: 'region', fromHub: 'Europe' },
  { file: 'asia.astro', label: null, kind: 'region', fromHub: 'Asia' },
  { file: 'americas.astro', label: null, kind: 'region', fromHub: 'Americas' },
  { file: 'middle-east.astro', label: null, kind: 'region', fromHub: 'Middle East' },
  { file: 'africa.astro', label: null, kind: 'region', fromHub: 'Africa' },
  { file: 'oceania.astro', label: null, kind: 'region', fromHub: 'Oceania' },

  // Region comparisons. Labels come from region-comparisons.js, matched on the URL the
  // data itself publishes, so a renamed cluster renames its search row too.
  { file: 'compare/index.astro', label: 'Compare countries by region', kind: 'region' },
  { file: 'compare/europe.astro', label: null, kind: 'region', fromCompare: true },
  { file: 'compare/southern-europe.astro', label: null, kind: 'region', fromCompare: true },
  { file: 'compare/western-europe.astro', label: null, kind: 'region', fromCompare: true },
  { file: 'compare/central-europe.astro', label: null, kind: 'region', fromCompare: true },
  { file: 'compare/nordics.astro', label: null, kind: 'region', fromCompare: true },
  { file: 'compare/east-asia.astro', label: null, kind: 'region', fromCompare: true },
  { file: 'compare/southeast-asia.astro', label: null, kind: 'region', fromCompare: true },
  { file: 'compare/south-america.astro', label: null, kind: 'region', fromCompare: true },
  { file: 'compare/middle-east.astro', label: null, kind: 'region', fromCompare: true },
  { file: 'compare/gulf.astro', label: null, kind: 'region', fromCompare: true },
  { file: 'compare/africa.astro', label: null, kind: 'region', fromCompare: true },

  // Standalone guides.
  { file: 'how-to-pay-less-on-hotels.astro', label: 'How to pay less on hotels', kind: 'guide' },
  { file: 'passports-and-visas.astro', label: 'Passports and visas', kind: 'guide' },
  { file: 'arrival-forms.astro', label: 'Arrival forms, and the paid fakes', kind: 'guide' },
  { file: 'traveling-with-a-pet.astro', label: 'Traveling with a pet', kind: 'guide' },
  { file: 'eu-pet-health-certificate.astro', label: 'The EU pet health certificate', kind: 'guide' },
  { file: 'bringing-a-dog-into-the-us.astro', label: 'Bringing a dog into the US', kind: 'guide' },

  // Reference and about.
  { file: 'countries.astro', label: 'All country guides', kind: 'about' },
  { file: 'rules.astro', label: 'Money rules, country by country', kind: 'about' },
  { file: 'about.astro', label: 'About True Trip Costs', kind: 'about' },
  { file: 'methodology.astro', label: 'Methodology, how this site is checked', kind: 'about' },
  { file: 'what-changed.astro', label: 'What changed, the travel-money change log', kind: 'about' },
];

// Deliberately not searchable. The gate reads this list, so leaving a page out of both
// lists is a failure rather than a silent gap.
export const EXCLUDED_PAGES = [
  { file: 'index.astro', why: 'the homepage, which is the front door the search sits behind' },
  { file: 'search.astro', why: 'the search page itself, a tool for finding pages rather than a page to find' },
  { file: 'privacy.astro', why: 'a legal page, reachable from the footer on every page' },
  { file: 'terms.astro', why: 'a legal page, reachable from the footer on every page' },
  { file: '[slug].astro', why: 'the country guide route, indexed from src/data/index.js as the country class' },
  { file: '[slug]/[spoke].astro', why: 'the spoke route, indexed from each country spokes array as the spoke class' },
  { file: '[slug]/rules.astro', why: 'the money rules card route, indexed from money-rules.js as the card class' },
  // NOT indexed, and that is a decision rather than an oversight. The /updates/{id}/
  // records are permanent addresses for CITING one past change, not answers to the
  // question the search box gets asked, which is always about a trip someone is taking.
  // Thirty-one historical change events in the index would put "Kyoto raised its lodging
  // tax, March 2026" next to the Japan guide on a search for Kyoto, and the reader who
  // typed Kyoto wants the guide. The way in stays /what-changed, which IS indexed and
  // lists every record. If the records should become searchable later, that is a
  // deliberate addition of an update class to search-index.js, the same way the country,
  // spoke and card classes work, not a change to this line.
  { file: 'updates/[id].astro', why: 'the change record route: permanent citable URLs, reachable from /what-changed, deliberately kept out of the search index' },
  // The /embed surfaces are iframe bodies, not pages. Each one is a stripped-down rendering
  // of a visualization that already has its own indexed page, carries noindex, and is kept
  // out of the sitemap. Putting one in the site search would offer a reader a chrome-less
  // fragment of a page they can reach whole. As more assets become embeddable this list
  // grows by one line each, which is the intended cost.
  { file: 'embed/hotel-tax-map.astro', why: 'noindex embed surface, the canonical /hotel-tax-map carries the search value' },
  { file: 'embed/rate-parity.astro', why: 'noindex embed surface, the canonical /how-to-pay-less-on-hotels carries the search value' },
];

// Read one attribute off the <Base> tag in an .astro source. Handles the two shapes the
// site actually uses: a literal string in the tag, and a reference to a const declared
// in the frontmatter as a plain string. A description built by concatenating values at
// build time (a few of the tool pages do that, because the figure inside it is derived
// from the data) cannot be resolved by reading the source, and returns null. Null means
// the row simply carries no description line. Nothing is guessed to fill the gap.
function baseAttr(src, attr) {
  const open = src.indexOf('<Base');
  if (open === -1) return null;
  const tag = src.slice(open, src.indexOf('>', open));
  const literal = new RegExp(attr + '="([^"]*)"').exec(tag);
  if (literal) return decodeEntities(literal[1]);
  const ref = new RegExp(attr + '=\\{([A-Za-z_$][\\w$]*)\\}').exec(tag);
  if (!ref) return null;
  const decl = new RegExp("const\\s+" + ref[1] + "\\s*=\\s*(['\"])((?:\\\\.|(?!\\1).)*)\\1\\s*;").exec(src);
  return decl ? decodeEscapes(decl[2]) : null;
}

function decodeEntities(s) {
  return s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}
function decodeEscapes(s) {
  return s.replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/\\(['"\\])/g, '$1');
}

// Titles carry a site-name suffix for the search engines. A reader scanning a result row
// does not need to be told twice which site they are on, so it is dropped for matching
// and display. The rest of the title is untouched.
function trimSiteName(title) {
  return title ? title.replace(/\s*\|\s*True Trip Costs\s*$/, '').trim() : null;
}

// Paths come off the project root, the way every other build-time file read on the site
// works (see countries.astro and the flag lookups). import.meta.url would point into the
// bundled output during a build, not at the source tree.
export const PAGES_DIR = 'src/pages';

function sourceFor(file) {
  const full = process.cwd() + '/' + PAGES_DIR + '/' + file;
  if (!fs.existsSync(full)) {
    // The registry names a page that is not there. Failing loudly here is the point: the
    // alternative is shipping a search result that takes a reader to a 404.
    throw new Error('search-pages: no page at ' + PAGES_DIR + '/' + file
      + '. Either the file was renamed, or the entry should be removed.');
  }
  return fs.readFileSync(full, 'utf8');
}

/**
 * The standalone pages, resolved. Each entry comes back with the file it is routed from,
 * a label, and the page's real title and description where those can be read from the
 * source. Throws if a registry entry names a file that is not there, so a bad entry
 * fails the build rather than shipping a link to nothing.
 */
export function standalonePages() {
  const byHref = new Map(clusters.map(c => [c.href, c]));
  const capstones = new Map(Object.values(regionMetaCompare).map(m => [m.href, m]));

  return INDEXED_PAGES.map(entry => {
    const src = sourceFor(entry.file);
    const url = pageUrl(entry.file);
    let label = entry.label;
    let description = baseAttr(src, 'description');
    let title = trimSiteName(baseAttr(src, 'title'));

    if (entry.fromHub) {
      // A region hub renders <Hub> and passes no title of its own: hubs.js holds both.
      const hub = REGIONS[entry.fromHub];
      if (!hub) throw new Error('search-pages: no hub in hubs.js for ' + entry.fromHub);
      label = hub.h1.replace(/\.$/, '');
      title = trimSiteName(hub.title);
      description = hub.description;
    }
    if (entry.fromCompare) {
      const cluster = byHref.get(url);
      const capstone = capstones.get(url);
      if (!cluster && !capstone) {
        throw new Error('search-pages: no region-comparisons entry publishes ' + url);
      }
      label = cluster ? cluster.region : capstone.label;
    }
    if (!label) throw new Error('search-pages: no label resolved for ' + entry.file);

    return { file: entry.file, url, label, kind: entry.kind, title, description };
  });
}
