// /map/rate-parity.svg, the rate-parity choropleth as a real vector file.
//
// An endpoint rather than a committed asset in public/, for the same reason
// /search-index.json is: an SVG checked into the repo would need regenerating by hand every
// time a ruling lands, and would then go stale in silence. Built from src/data on every
// build, so the file a writer downloads cannot describe a legal position the page no longer
// holds.
//
// This is the file the "for writers and publishers" block on /how-to-pay-less-on-hotels
// offers. SVG is offered first because it is the map's native format: the choropleth is
// written as SVG at build time, so a vector download is the original rather than a
// conversion, and it scales into a print layout without going soft.

import { parityMapSvg } from '../../data/parity-assets.js';

export function GET() {
  return new Response(parityMapSvg(), {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      // Named on download rather than saved as rate-parity.svg.svg or as the bare route.
      'Content-Disposition': 'inline; filename="truetripcosts-rate-parity.svg"',
    },
  });
}
