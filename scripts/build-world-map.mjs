// World choropleth geometry generator (authoring tool, NOT part of the site build).
//
// Produces src/data/maps/world.js, the projected whole-world country geometry that
// src/components/HotelTaxMap.astro colours. Same idea as scripts/build-region-map.mjs
// and scripts/build-gulf-map.mjs: the paths are pre-baked into a static module and the
// site itself carries no map dependency, no d3, no topojson, no leaflet, no tiles.
//
// Source data: Natural Earth Admin 0 countries, via the world-atlas package.
// Natural Earth is public domain, so no attribution is required.
//
// To run (authoring deps only, they are NOT site dependencies and are not in
// package.json, exactly as the other two map scripts do it):
//   npm i --no-save world-atlas topojson-client d3-geo i18n-iso-countries
//   node scripts/build-world-map.mjs
//
// THREE DELIBERATE DIFFERENCES from the cluster-map scripts, each with a reason:
//
// 1. PROJECTION IS EQUAL EARTH, NOT MERCATOR. The cluster maps use Mercator because a
//    single region is small enough that the distortion does not show. A whole-world
//    choropleth is the one place Mercator actively lies: it inflates high-latitude
//    countries several times over, so Greenland reads bigger than Africa and a dark
//    fill on Norway shouts while the same dark fill on Indonesia whispers. On a map
//    whose entire job is "compare the size of a government tax stack", giving northern
//    countries more ink than southern ones for free is not a cosmetic problem. Equal
//    Earth is equal-area, so a country's ink is proportional to its actual ground area.
//
// 2. 110m, NOT 50m, AND MARKERS FOR THE SPECKS. The Gulf map moved to 50m because 110m
//    drops Bahrain. That fix does not transfer here: a whole-world 50m path set is about
//    730KB to 1MB of path data against 106KB at 110m, which is not a weight this site
//    puts on a page. And it would not solve the problem anyway, because the countries
//    110m drops are countries that are sub-pixel at world scale regardless of source
//    resolution. The Maldives cannot be a visible polygon on a world map at any level of
//    detail. So: 110m for the polygons, plus a `micro` list of centroids for the
//    countries that do not survive 110m at all, so the component can mark them with a
//    locator dot. Those centroids ARE computed from 50m, which is read at build time and
//    never shipped, so a dot lands in the geographically right place.
//
//    WHERE THE DOT POLICY LIVES: not here. This script emits `area` on every polygon and
//    a centroid on every country, drawn or not, which is the capability. Deciding how
//    small is too small to see is a presentation judgement that wants tuning against real
//    data, so it is one named constant in HotelTaxMap.astro (DOT_BELOW) rather than a
//    threshold baked into 135KB of geometry that would need regenerating to move.
//
// 3. NO BACKDROP/HIGHLIGHT SPLIT. A cluster map has a subject and its neighbours. Here
//    every country is a subject, so the module emits one flat `countries` list and the
//    component decides each fill from the data file. Antarctica is dropped: no
//    accommodation tax, no hotels, and it is a third of the ink on an equal-area map.
//
// ISO CODES: world-atlas carries the ISO 3166-1 NUMERIC code as the feature id and no
// alpha-2, so numeric is converted to alpha-2 here at authoring time via
// i18n-iso-countries. The shipped module carries plain alpha-2 strings, so the site
// never sees that package. Natural Earth also carries a handful of entities that have no
// ISO code (Kosovo, N. Cyprus, Somaliland, W. Sahara and similar): those keep a null iso
// and their Natural Earth name, which means they are drawn, they are never colourable,
// and they read as "not yet checked" like any other uncoloured country. That is the
// honest outcome, not a bug to paper over.

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import * as topojson from "topojson-client";
import { geoEqualEarth, geoPath } from "d3-geo";
import isoCountries from "i18n-iso-countries";

const W = 1000;          // coordinate space width; the component scales the viewBox
const DECIMALS = 1;      // 1dp keeps small-country shapes honest at about 106KB of path
const DROP = new Set(["Antarctica"]);

const read = (res) => {
  const topo = JSON.parse(readFileSync(`node_modules/world-atlas/countries-${res}.json`, "utf8"));
  return topojson.feature(topo, topo.objects.countries).features.filter(f => !DROP.has(f.properties.name));
};

const f110 = read("110m");
const f50 = read("50m");

// Fit to the 110m land so the framing is the honest full extent of the drawn world,
// north Greenland to southern Chile, with no cropping to flatter the aspect ratio.
const proj = geoEqualEarth().fitWidth(W, { type: "FeatureCollection", features: f110 });
const path = geoPath(proj);

const f = Math.pow(10, DECIMALS);
const r1 = (n) => Math.round(n * f) / f;
function roundD(d) {
  return d ? d.replace(/-?\d+\.?\d*/g, n => {
    const v = Math.round(parseFloat(n) * f) / f;
    return (Number.isFinite(v) ? v : 0).toString();
  }) : "";
}

// Natural Earth ships abbreviated display names ("Dem. Rep. Congo", "U.S. Virgin Is.",
// "Bosnia and Herz."), which are fine for a cartographer's label file and wrong for this
// site twice over: they read as shorthand, and "U.S." with periods is a house-rule
// violation that fails scripts/check-content.py the moment the generated module lands in
// src/. Names are written out in full here, at authoring time, so nothing downstream has to
// know that Natural Earth abbreviates. Anything not listed passes through unchanged, so a
// name added by a future Natural Earth release is left alone rather than mangled.
const NAME_FIXES = {
  'Antigua and Barb.': 'Antigua and Barbuda',
  'Bosnia and Herz.': 'Bosnia and Herzegovina',
  'Br. Indian Ocean Ter.': 'British Indian Ocean Territory',
  'British Virgin Is.': 'British Virgin Islands',
  'Cayman Is.': 'Cayman Islands',
  'Central African Rep.': 'Central African Republic',
  'Cook Is.': 'Cook Islands',
  'Dem. Rep. Congo': 'Democratic Republic of the Congo',
  'Dominican Rep.': 'Dominican Republic',
  'Eq. Guinea': 'Equatorial Guinea',
  'Faeroe Is.': 'Faroe Islands',
  'Falkland Is.': 'Falkland Islands',
  'Fr. Polynesia': 'French Polynesia',
  'Fr. S. Antarctic Lands': 'French Southern and Antarctic Lands',
  'Heard I. and McDonald Is.': 'Heard Island and McDonald Islands',
  'Marshall Is.': 'Marshall Islands',
  'N. Cyprus': 'Northern Cyprus',
  'N. Mariana Is.': 'Northern Mariana Islands',
  'Pitcairn Is.': 'Pitcairn Islands',
  'S. Geo. and the Is.': 'South Georgia and the South Sandwich Islands',
  'S. Sudan': 'South Sudan',
  'Solomon Is.': 'Solomon Islands',
  'St. Kitts and Nevis': 'Saint Kitts and Nevis',
  'St. Pierre and Miquelon': 'Saint Pierre and Miquelon',
  'St. Vin. and Gren.': 'Saint Vincent and the Grenadines',
  'Turks and Caicos Is.': 'Turks and Caicos Islands',
  'U.S. Virgin Is.': 'United States Virgin Islands',
  'W. Sahara': 'Western Sahara',
  'Wallis and Futuna Is.': 'Wallis and Futuna',
  'United States of America': 'United States',
};
const cleanName = (n) => NAME_FIXES[n] || n;

// Numeric id to alpha-2. Returns null for the non-ISO Natural Earth entities.
function iso2(feature) {
  const id = String(feature.id || "").padStart(3, "0");
  if (!/^\d{3}$/.test(id)) return null;
  const a2 = isoCountries.numericToAlpha2(id);
  return a2 ? a2.toUpperCase() : null;
}

// --- the drawn polygons ---
let yMin = Infinity, yMax = -Infinity;
const countries = [];
for (const feat of f110) {
  const d = roundD(path(feat));
  if (!d) continue;
  const c = path.centroid(feat);
  const b = path.bounds(feat);
  if (Number.isFinite(b[0][1])) { yMin = Math.min(yMin, b[0][1]); yMax = Math.max(yMax, b[1][1]); }
  countries.push({
    iso: iso2(feat),
    name: cleanName(feat.properties.name),
    d,
    cx: r1(c[0]),
    cy: r1(c[1]),
    area: r1(path.area(feat)),
  });
}
countries.sort((a, b) => a.name.localeCompare(b.name));

// --- centroids for the countries 110m does not draw at all ---
// These are the ones a dot is the ONLY possible mark for: the Maldives, Bahrain,
// Singapore, Malta, Aruba, Hong Kong and about 55 others have no polygon in the shipped
// geometry, so without this list they would be invisible on the map no matter what the
// data file says about them. Centroids come from 50m, read here and never shipped.
// Countries that ARE drawn need nothing here: they already carry their own cx/cy and
// area, which is all the component needs to decide whether to dot them too.
const drawn = new Set(countries.map(c => c.iso).filter(Boolean));
const micro = [];
for (const feat of f50) {
  const iso = iso2(feat);
  if (!iso || drawn.has(iso)) continue;
  const c = path.centroid(feat);
  if (!Number.isFinite(c[0])) continue;
  micro.push({ iso, name: cleanName(feat.properties.name), cx: r1(c[0]), cy: r1(c[1]) });
}
micro.sort((a, b) => a.name.localeCompare(b.name));

const H = r1(yMax);
const data = {
  viewBox: `0 0 ${W} ${H}`,
  projection: "Equal Earth (equal-area). Natural Earth 110m, public domain.",
  countries,
  micro,
};

const js = `// AUTO-GENERATED by scripts/build-world-map (Natural Earth 110m, public domain).
// Do not hand-edit. Regenerate to change the projection, framing or speck threshold.
//
// Whole-world country geometry for the hotel-tax choropleth. Equal Earth projection, so
// a country's ink is proportional to its ground area rather than to its latitude: on a
// map that compares the size of a tax stack, Mercator would hand northern countries
// several times the ink for free. Antarctica is dropped.
//
// \`countries\` is every polygon, each with its ISO 3166-1 alpha-2 code where one exists
// (Natural Earth entities without an ISO code carry iso: null, are drawn, and can never
// be coloured), plus its centroid and its projected area, which is what lets the
// component decide which fills are too small to see. \`micro\` is the countries 110m does
// not draw at all, centroid only: for those a locator dot is the only mark possible. A
// dot is only rendered where the data file holds a figure, so the map never speckles with
// countries nobody has checked.
export default ${JSON.stringify(data, null, 1)};
`;

mkdirSync("src/data/maps", { recursive: true });
writeFileSync("src/data/maps/world.js", js);

const bytes = Buffer.byteLength(js, "utf8");
const pathBytes = countries.reduce((n, c) => n + c.d.length, 0);
console.log("== world map geometry ==");
console.log("viewBox:", data.viewBox, "| y bounds:", r1(yMin), "to", r1(yMax));
console.log("polygons:", countries.length, "| with an ISO code:", countries.filter(c => c.iso).length);
console.log("no ISO code (drawn, never colourable):", countries.filter(c => !c.iso).map(c => c.name).join(", "));
console.log("names normalised from Natural Earth shorthand:", [...countries, ...micro].filter(c => Object.values(NAME_FIXES).includes(c.name)).length);
console.log("not drawn at 110m, dot-only:", micro.length);
console.log("drawn but under 22 sq units (a speck at render size):",
  countries.filter(c => c.iso && c.area < 22).length,
  "| under 60:", countries.filter(c => c.iso && c.area < 60).length);
console.log("path data:", (pathBytes / 1024).toFixed(1), "KB | module:", (bytes / 1024).toFixed(1), "KB");
