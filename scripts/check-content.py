#!/usr/bin/env python3
# TTC content gate. Shell-independent. Run from the repo root: python3 check.py
# Scans SHIPPING surface only: src/ code+copy (.js .jsx .ts .tsx .astro .css) and
# the built site dist/*.html. Internal docs (.md, package.json) are excluded so the
# gate never trips on text that merely DESCRIBES these rules.
import io, os, re, sys

SRC_EXT  = {'.js', '.jsx', '.ts', '.tsx', '.astro', '.css'}
def files():
    for dp, dn, fn in os.walk('src'):
        dn[:] = [d for d in dn if d not in ('node_modules', '.git')]
        for f in fn:
            if os.path.splitext(f)[1].lower() in SRC_EXT:
                yield os.path.join(dp, f)
    for dp, dn, fn in os.walk('dist'):
        for f in fn:
            if f.lower().endswith('.html'):
                yield os.path.join(dp, f)

HARD_CH  = {'\u2014': 'em dash U+2014', '\u2013': 'en dash U+2013'}
HARD_STR = {'U.S.': 'periods-form U.S.'}
WARN_CH  = {'\u2010':'hyphen U+2010', '\u2011':'nb-hyphen U+2011', '\u2012':'figure-dash U+2012',
            '\u2015':'horizontal-bar U+2015', '\u2212':'minus U+2212', '\u2043':'hyphen-bullet U+2043',
            '\uFE58':'small-em U+FE58', '\uFE63':'small-hyphen U+FE63', '\uFF0D':'fullwidth-hyphen U+FF0D',
            '\u00A0':'nb-space U+00A0'}
WARN_STR = {'U. S.': 'spaced U. S.'}

hard, warn = [], []
for p in files():
    t = io.open(p, encoding='utf-8', errors='replace').read()
    for k, name in {**HARD_CH, **HARD_STR}.items():
        n = t.count(k)
        if n: hard.append((n, name, p))
    for k, name in {**WARN_CH, **WARN_STR}.items():
        n = t.count(k)
        if n: warn.append((n, name, p))

def show(title, hits):
    tot = sum(h[0] for h in hits)
    print(f"{title}: {'clean' if not hits else str(tot)+' in '+str(len(hits))+' file(s)'}")
    for n, name, p in sorted(hits): print(f"    {n:4d}  {name:22s} {p}")

# Spoke keystat figures must stay short. The fig sits beside its own text column,
# so an over-long headline leaves the text a sliver and it renders one word per
# line. The CSS now wraps instead of breaking, but keep the copy tight so the
# callout still reads as a headline number. Most figs are 3 to 10 characters.
FIG_MAX = 20
# Matches both a plain literal, fig: "$10-12/day", and a template literal,
# fig: `${S.dayPassFig}`, which the carrier-spine interpolation introduced. Without the
# backtick arm this check silently stopped covering every interpolated keystat: the regex
# would not match, so no figure was measured and the section reported clean. A gate that
# quietly narrows its own scope is worse than one that fails.
#
# Interpolated figs are RESOLVED before measuring, by reading the token table out of
# carrier-spine.js, because the point of the limit is how wide the figure renders and
# "${S.dayPassFig}" is 17 characters of source standing for 10 characters of output.
# Measuring the source would have flagged long token names and missed genuinely long
# figures, which is a check that looks like it works.
SPINE_TOKENS = {}
_spine = os.path.join('src', 'data', 'carrier-spine.js')
if os.path.exists(_spine):
    _t = io.open(_spine, encoding='utf-8', errors='replace').read()
    _m = re.search(r'export const S = \{(.*?)\n\};', _t, re.S)
    if _m:
        for k, v in re.findall(r'(\w+):\s*"((?:[^"\\]|\\.)*)"', _m.group(1)):
            SPINE_TOKENS[k] = v

def resolve_fig(val):
    return re.sub(r'\$\{S\.(\w+)\}', lambda m: SPINE_TOKENS.get(m.group(1), m.group(0)), val)

FIG_RE = re.compile(r'fig:\s*(?:"([^"]*)"|`([^`]*)`)')
figs = []
for dp, dn, fn in os.walk(os.path.join('src', 'data')):
    for f in sorted(fn):
        if not f.lower().endswith('.js'): continue
        p = os.path.join(dp, f)
        t = io.open(p, encoding='utf-8', errors='replace').read()
        long_figs = []
        for m in FIG_RE.finditer(t):
            raw = m.group(1) if m.group(1) is not None else m.group(2)
            val = resolve_fig(raw)
            if len(val) > FIG_MAX: long_figs.append(val)
        if long_figs: figs.append((len(long_figs), f'fig over {FIG_MAX} chars', p + '  ' + ' | '.join(long_figs)))

# Stray escapes in the guide data. A backslash has no business appearing in TTC prose,
# so a string whose VALUE contains one is always a mistake. The sequence below is the
# one that actually shipped: an escaped backslash immediately followed by an escaped
# quote, which is valid JavaScript, parses cleanly, builds 454 pages without complaint,
# and then renders a visible backslash to the reader (a one-time \\"Embrace It\\" fee).
# Nothing else catches it: the build only cares that the file parses, and the dash gate
# only looks at characters. Scoped to src/data because that is prose, where a backslash
# is never wanted; components and pages manipulate strings and may escape legitimately.
BS = chr(92)
BAD_ESC = {BS * 3 + '"': 'escaped backslash before a quote', BS * 3 + "'": 'escaped backslash before an apostrophe'}
esc = []
for dp, dn, fn in os.walk(os.path.join('src', 'data')):
    for f in sorted(fn):
        if not f.lower().endswith('.js'): continue
        p = os.path.join(dp, f)
        t = io.open(p, encoding='utf-8', errors='replace').read()
        for k, name in BAD_ESC.items():
            n = t.count(k)
            if n: esc.append((n, name, p))

# Leaked build-script identifiers in the guide data. Same species as the stray escape
# above: a defect that parses cleanly, survives the build in some contexts, and renders as
# nonsense to a reader. The one that actually shipped was a generator emitting
#   a: "About 10 to 12 dollars a day. " + CAP_FAQ + " T-Mobile is worth checking"
# into nine data files, because a Python concatenation sat inside a triple-quoted string
# and was never interpolated. That is valid JavaScript referencing an undefined identifier,
# so every file imported fine in isolation and the failure only appeared at page
# generation as "CAP_FAQ is not defined". Nothing but the build caught it.
#
# Scoped to the PROSE data files only, and the scoping is the fiddly part. Most of src/data
# is pure object literals where a concatenation is always a mistake, but a handful of
# modules (usd-prose.js, breadth.js, avoidable.js) build strings for real and concatenate
# legitimately. The discriminator is executable code: a guide file contains no arrow
# functions and no function declarations, a builder module contains several. Checking every
# file produced 14 false positives on first run, which is how a gate gets ignored, so
# code-bearing modules are skipped and named in the output rather than silently excluded.
LEAK = [
    (re.compile(r'"\s*\+\s*[A-Za-z_][A-Za-z0-9_]*\s*\+\s*"'), 'leaked identifier in a double-quoted string'),
    (re.compile(r"'\s*\+\s*[A-Za-z_][A-Za-z0-9_]*\s*\+\s*'"), 'leaked identifier in a single-quoted string'),
    (re.compile(r'%[sdr]\b'), 'printf placeholder left in copy'),
    (re.compile(r'\{\d+\}'), 'brace placeholder left in copy'),
]
HAS_CODE = re.compile(r'=>|\bfunction\s*\(')
leak, leak_skipped = [], []
for dp, dn, fn in os.walk(os.path.join('src', 'data')):
    for f in sorted(fn):
        if not f.lower().endswith('.js'): continue
        p = os.path.join(dp, f)
        t = io.open(p, encoding='utf-8', errors='replace').read()
        if HAS_CODE.search(t):
            leak_skipped.append(os.path.basename(p)); continue
        for rx, name in LEAK:
            n = len(rx.findall(t))
            if n: leak.append((n, name, p))

print("== TTC content gate (src + dist) ==")
show("HARD  em/en dashes + U.S.", hard)
show("HARD  long spoke figures ", figs)
show("HARD  stray escapes      ", esc)
show("HARD  leaked identifiers ", leak)
if leak_skipped:
    print(f"    (prose scan skipped {len(leak_skipped)} builder module(s) that concatenate legitimately: {', '.join(leak_skipped)})")
show("WARN  dash look-alikes   ", warn)
print("\nRESULT:", "FAIL" if (hard or figs or esc or leak) else ("PASS (warnings)" if warn else "PASS"))
sys.exit(1 if (hard or figs or esc or leak) else 0)
