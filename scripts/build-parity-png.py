#!/usr/bin/env python3
"""Rasterise the rate-parity map into the PNGs the page and its press kit need.

Writes:
    public/og/rate-parity.png            1200x630 social card for /how-to-pay-less-on-hotels
    public/press/rate-parity-1200.png    the map alone, 1200px wide, for a writer
    public/press/rate-parity-2400.png    the same at 2400px, for print

RUN:  python3 scripts/build-parity-png.py
Needs Pillow:  pip install pillow
Needs the brand fonts once, and it degrades gracefully without them:
    npm i --no-save @fontsource/fraunces @fontsource/inter @fontsource/ibm-plex-mono
    pip install fonttools brotli

WHY A SCRIPT AND NOT A BUILD STEP. Same call scripts/build-brand-assets.mjs already made for
the favicons and the social cards: rasterising needs a font stack and an image library that
the Astro build does not have and should not grow. So the PNGs are committed artifacts,
regenerated deliberately by running this, and the SVG at /map/rate-parity.svg is the one that
rebuilds itself on every build. That split is worth knowing: THE SVG CANNOT GO STALE AND
THESE PNGS CAN. The check at the end of this file is what stops that being silent.

WHY IT RASTERISES THE GEOMETRY RATHER THAN THE SVG. There is no SVG renderer in this
toolchain, and adding a headless browser to draw a world map of straight-line polygons would
be a large dependency for a small job. The Equal Earth outlines in src/data/maps/world.js are
pure M, L and Z commands, so they are polygons and Pillow can fill them directly. The data
comes out of node, not out of a second copy here: this script shells out to the real modules
for the geometry, the statuses, the colours and the counts, so it cannot draw a map the site
does not publish. If world.js is ever regenerated with curves, the parser below raises
rather than quietly dropping the curve segments.
"""
import json
import re
import subprocess
import sys
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    sys.exit("Pillow is not installed. Run: pip install pillow")

ROOT = Path(__file__).resolve().parent.parent
SS = 3  # supersampling factor, then downsample. Cheap anti-aliasing for flat polygons.

INK = (22, 48, 44)
PAPER = (245, 244, 239)
MUTED = (111, 110, 102)
TEAL_DEEP = (10, 86, 68)
HAIRLINE = PAPER


# --- the data, read out of the real modules ---------------------------------
# One subprocess, one JSON blob, so there is no second copy of a colour or a count in this
# file. Everything below is drawing.
NODE_DUMP = r"""
import world from './src/data/maps/world.js';
import { PARITY_STATUS, parityStatusByIso, parityFinding, PARITY_PRESS,
         bookingTacticsChecked } from './src/data/booking-tactics.js';
import { STATES } from './src/data/hotel-tax-map.js';
const byIso = parityStatusByIso();
const status = {};
for (const [iso, v] of byIso) status[iso] = v.status;
const counts = {};
for (const key of Object.keys(PARITY_STATUS)) {
  counts[key] = [...byIso.values()].filter(v => v.status === key).length;
}
process.stdout.write(JSON.stringify({
  viewBox: world.viewBox,
  countries: world.countries.map(c => ({ iso: c.iso || null, d: c.d })),
  micro: (world.micro || []).map(m => ({ iso: m.iso, cx: m.cx, cy: m.cy })),
  drawn: world.countries.map(c => c.iso).filter(Boolean),
  status, counts,
  statusMeta: PARITY_STATUS,
  unchecked: STATES.unchecked.fill,
  finding: parityFinding(),
  press: PARITY_PRESS,
  checked: bookingTacticsChecked,
}));
"""


def load_data():
    out = subprocess.run(
        ["node", "--input-type=module", "-e", NODE_DUMP],
        cwd=ROOT, capture_output=True, text=True,
    )
    if out.returncode != 0:
        sys.exit("Could not read the site data through node:\n" + out.stderr)
    return json.loads(out.stdout)


def hex_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


# --- fonts ------------------------------------------------------------------
# The brand faces where they are available, a metric-similar fallback where they are not, and
# a printed warning either way so a card built with substituted type is never mistaken for the
# real thing.
FONT_DIRS = [
    ROOT / "node_modules/@fontsource",
    Path("/tmp"),
]
FALLBACKS = [
    Path("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"),
    Path("/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"),
]
_warned = set()


def font(kind, size):
    """kind: 'serif' (Fraunces), 'sans' (Inter) or 'mono' (IBM Plex Mono)."""
    names = {
        "serif": ["fraunces-latin-500-normal.ttf", "Fraunces-Medium.ttf"],
        "sans": ["inter-latin-500-normal.ttf", "Inter-Medium.ttf"],
        "mono": ["ibm-plex-mono-latin-600-normal.ttf", "IBMPlexMono-SemiBold.ttf"],
    }[kind]
    for d in FONT_DIRS:
        for n in names:
            for p in d.rglob(n):
                return ImageFont.truetype(str(p), size)
    if kind not in _warned:
        _warned.add(kind)
        print(f"  WARN  the brand {kind} face was not found, substituting a fallback. "
              f"Install it before shipping a card: see the header of this file.")
    for p in FALLBACKS:
        if p.exists():
            return ImageFont.truetype(str(p), size)
    return ImageFont.load_default()


# --- the geometry -----------------------------------------------------------
def parse_path(d):
    """Every subpath of an SVG path made only of M, L and Z, as lists of points.

    Raises on any other command rather than silently dropping it: a curve segment quietly
    skipped would render a country with a corner cut off, which looks like a map rather than
    like a bug.
    """
    unknown = set(re.findall(r"[A-Za-z]", d)) - set("MLZmlz")
    if unknown:
        raise ValueError(
            "world.js path uses SVG commands this rasteriser cannot draw: "
            + "".join(sorted(unknown))
            + ". It handles straight-line polygons only. Regenerate the PNGs with a real SVG "
              "renderer, or extend this parser."
        )
    subpaths, cur = [], []
    for cmd, nums in re.findall(r"([MLZmlz])([^MLZmlz]*)", d):
        if cmd in "Zz":
            if cur:
                subpaths.append(cur)
                cur = []
            continue
        pts = [float(x) for x in re.findall(r"-?\d*\.?\d+", nums)]
        for i in range(0, len(pts) - 1, 2):
            cur.append((pts[i], pts[i + 1]))
    if cur:
        subpaths.append(cur)
    return [s for s in subpaths if len(s) >= 3]


def hatch_tile(rgb, size):
    """The middle status carries a diagonal hatch as well as a colour, so a red-green colour
    deficiency cannot flatten it into one of its neighbours. Same second channel the SVG uses,
    drawn here as a tile because Pillow has no pattern fill."""
    t = Image.new("RGB", (size, size), rgb)
    dt = ImageDraw.Draw(t)
    step = max(3, size // 3)
    w = max(1, size // 8)
    for off in range(-size, size * 2, step):
        dt.line([(off, 0), (off + size, size)], fill=(255, 255, 255), width=w)
    return t


def draw_map(data, width, pad=0):
    """The choropleth alone, at `width` pixels, on the brand paper."""
    _, _, vb_w, vb_h = [float(x) for x in data["viewBox"].split()]
    scale = (width * SS) / vb_w
    W, H = int(width * SS), int(round(vb_h * scale))
    img = Image.new("RGB", (W, H), PAPER)
    dr = ImageDraw.Draw(img)

    meta = data["statusMeta"]
    unchecked = hex_rgb(data["unchecked"])
    hatch_masks = {}

    for c in data["countries"]:
        st = data["status"].get(c["iso"]) if c["iso"] else None
        info = meta.get(st) if st else None
        colour = hex_rgb(info["fill"]) if info else unchecked
        polys = [[(x * scale, y * scale) for (x, y) in sp] for sp in parse_path(c["d"])]
        for sp in polys:
            dr.polygon(sp, fill=colour, outline=HAIRLINE)
        if info and info.get("hatch"):
            hatch_masks.setdefault(st, []).extend(polys)

    # Hatched statuses get their tile composited through a mask of their own shapes, after the
    # flat fills, so the hatch sits on top of the right colour and nowhere else.
    for st, polys in hatch_masks.items():
        mask = Image.new("L", (W, H), 0)
        md = ImageDraw.Draw(mask)
        for sp in polys:
            md.polygon(sp, fill=255)
        tile = hatch_tile(hex_rgb(meta[st]["fill"]), max(12, int(14 * SS / 3)))
        patt = Image.new("RGB", (W, H))
        for y in range(0, H, tile.height):
            for x in range(0, W, tile.width):
                patt.paste(tile, (x, y))
        img.paste(patt, (0, 0), mask)

    # The countries 110m does not draw at all. A dot is the only mark possible for those, and
    # leaving them out would drop a jurisdiction from a map claiming to hold it.
    drawn = set(data["drawn"])
    for m in data["micro"]:
        st = data["status"].get(m["iso"])
        if not st or m["iso"] in drawn:
            continue
        r = 5.5 * scale
        cx, cy = m["cx"] * scale, m["cy"] * scale
        dr.ellipse([cx - r, cy - r, cx + r, cy + r],
                   fill=hex_rgb(meta[st]["fill"]), outline=PAPER, width=max(1, int(1.5 * scale)))

    return img.resize((width, int(round(vb_h * scale / SS))), Image.LANCZOS)


def press_png(data, width, out):
    """The map, plus the legend and the credit line a reader of somebody else's article needs."""
    m = draw_map(data, width)
    meta = data["statusMeta"]
    rows = [(meta[k]["fill"], meta[k]["label"], data["counts"][k]) for k in meta]
    rows.append((data["unchecked"], "Not in our checked set", None))

    pad = int(width * 0.03)
    line_h = int(width * 0.026)
    leg_h = pad + line_h * ((len(rows) + 1) // 2) + line_h * 2 + pad
    img = Image.new("RGB", (width, m.height + leg_h), PAPER)
    img.paste(m, (0, 0))
    dr = ImageDraw.Draw(img)
    f = font("sans", int(width * 0.0145))
    fm = font("mono", int(width * 0.0125))

    for i, (fill, label, count) in enumerate(rows):
        col, row = i % 2, i // 2
        x = pad + col * (width // 2 - pad)
        y = m.height + pad + row * line_h
        sw = int(line_h * 0.5)
        dr.rounded_rectangle([x, y, x + sw, y + sw], radius=max(2, sw // 4), fill=hex_rgb(fill))
        words = label if count is None else f"{label}: {count}"
        dr.text((x + sw + int(sw * 0.6), y + sw * 0.08), words, font=f, fill=INK)

    y = m.height + pad + line_h * ((len(rows) + 1) // 2) + int(line_h * 0.3)
    dr.text((pad, y), f"Legal freedom to undercut, not a promise of a lower price. "
                      f"Checked {data['checked']}.", font=f, fill=MUTED)
    dr.text((pad, y + line_h), data["press"]["attribution"].upper(), font=fm, fill=TEAL_DEEP)
    img.save(out, "PNG", optimize=True)
    return img


def og_png(data, out):
    """1200x630. The counts are the message and the map is the texture behind them, because at
    thumbnail size nobody reads a world map and three numbers survive."""
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), PAPER)
    m = draw_map(data, 1260)
    img.paste(m, (-30, H - m.height - 6))

    # The type sits on a wash of the paper colour rather than on the bare map, so the
    # headline stays readable wherever a country happens to fall behind it. Composited as a
    # translucent overlay rather than drawn opaque, because the map showing faintly through
    # is what makes the card read as this map rather than as a generic quote graphic.
    scrim = Image.new("RGBA", (W, 300), PAPER + (224,))
    img = img.convert("RGBA")
    img.alpha_composite(scrim, (0, 0))
    img = img.convert("RGB")

    dr = ImageDraw.Draw(img)
    dr.text((76, 66), "RATE PARITY BY COUNTRY", font=font("mono", 21), fill=TEAL_DEEP)
    dr.text((76, 108), "Where a hotel may legally", font=font("serif", 52), fill=INK)
    dr.text((76, 166), "undercut a booking site", font=font("serif", 52), fill=INK)

    meta = data["statusMeta"]
    f = font("sans", 19)
    for i, key in enumerate(meta):
        x = 76 + i * 356
        dr.rounded_rectangle([x, 252, x + 18, 270], radius=4, fill=hex_rgb(meta[key]["fill"]))
        dr.text((x + 28, 250), f"{data['counts'][key]} {meta[key]['label'].lower()}", font=f, fill=INK)

    dr.text((76, 306), "Legal freedom to undercut, not a promise of a lower price. "
                       f"{data['finding']['total']} countries checked {data['checked']}.",
            font=font("sans", 20), fill=MUTED)
    dr.text((76, 570), "TRUETRIPCOSTS.COM", font=font("mono", 22), fill=TEAL_DEEP)
    img.save(out, "PNG", optimize=True)


def main():
    data = load_data()
    (ROOT / "public/og").mkdir(parents=True, exist_ok=True)
    (ROOT / "public/press").mkdir(parents=True, exist_ok=True)

    og_png(data, ROOT / "public/og/rate-parity.png")
    press_png(data, 1200, ROOT / "public/press/rate-parity-1200.png")
    press_png(data, 2400, ROOT / "public/press/rate-parity-2400.png")

    f = data["finding"]
    print("== parity PNGs ==")
    print(f"  counts drawn: {f['short']}")
    print(f"  checked stamp: {data['checked']}")
    for p in ["public/og/rate-parity.png",
              "public/press/rate-parity-1200.png",
              "public/press/rate-parity-2400.png"]:
        print(f"  wrote {p}  {(ROOT / p).stat().st_size // 1024} KB")
    print("\n  These are COMMITTED artifacts. /map/rate-parity.svg rebuilds itself on every")
    print("  build; these do not. Re-run this script whenever a parity row changes, or the")
    print("  card will keep stating a count the page no longer holds.")


if __name__ == "__main__":
    main()
