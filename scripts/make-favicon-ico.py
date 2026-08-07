#!/usr/bin/env python3
"""Assemble public/favicon.ico from the per-size PNGs that build-brand-assets.mjs writes.

Kept separate because .ico is a container format, not an image: it holds several
independent bitmaps, and the point here is that each size carries DIFFERENT artwork.
The 16px entry uses the amber double-line alone (three letters are illegible at that
size), while 32 and 48 carry the full mark. A single downsampled source cannot do that,
which is why this is not just a resize.

PNG payloads inside an ICO are accepted by every browser in current use.

Run after build-brand-assets.mjs:
    python3 scripts/make-favicon-ico.py
"""
import struct, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCES = [(16, 'favicon-16.png'), (32, 'favicon-32.png'), (48, 'favicon-48.png')]

payloads = []
for px, name in SOURCES:
    p = ROOT / 'public' / name
    if not p.exists():
        sys.exit(f"Missing {name}. Run: node scripts/build-brand-assets.mjs")
    payloads.append((px, p.read_bytes()))

out = bytearray()
out += struct.pack('<HHH', 0, 1, len(payloads))          # ICONDIR: reserved, type 1 = icon, count
offset = 6 + 16 * len(payloads)
for px, data in payloads:                                 # ICONDIRENTRY per image
    out += struct.pack('<BBBBHHII',
                       px if px < 256 else 0, px if px < 256 else 0,
                       0, 0, 1, 32, len(data), offset)
    offset += len(data)
for _, data in payloads:
    out += data

dest = ROOT / 'public' / 'favicon.ico'
dest.write_bytes(bytes(out))
print(f"Wrote public/favicon.ico  ({len(out)} bytes, sizes: {', '.join(str(p) for p, _ in payloads)})")

# The per-size PNGs are only inputs to the container above. Removing them keeps them out
# of the repo and out of the deployed site, where they would serve no purpose. Rerunning
# build-brand-assets.mjs recreates them.
for _, name in SOURCES:
    (ROOT / 'public' / name).unlink(missing_ok=True)
print("Cleaned up the per-size PNG inputs.")
