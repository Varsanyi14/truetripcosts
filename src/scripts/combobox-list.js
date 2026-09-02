// SHARED COMBOBOX + LISTBOX KEYBOARD/ARIA BEHAVIOUR.
//
// Lifted from the pattern that already works in SearchBox.astro (role="combobox" on the
// input, role="option" rows in a role="listbox", aria-activedescendant + aria-selected
// tracking an active row, ArrowDown/ArrowUp/Enter/Escape), so every country-search box on
// the site moves and announces itself the same way. SearchBox.astro itself is not wired to
// this module: it is the reference the behaviour was read off, so it stays a working example
// on its own and this module cannot regress it by accident.
//
// This module owns ONLY the active-option bookkeeping: which row is active, the ARIA
// attributes that say so, and scrolling it into view. It does not fetch, filter, rank, or
// decide what a pick does; each widget keeps that logic, which is why the three call sites
// still read differently from each other (a country filter, a map jump, a table jump).
//
// Used by: the homepage country filter (src/pages/index.astro), the hotel-tax map
// typeahead (src/components/HotelTaxMap.astro), and the rate-parity map finder on
// src/pages/how-to-pay-less-on-hotels.astro.
export function createComboActivator(input, list, itemSelector) {
  let active = -1;

  function items() {
    return Array.prototype.slice.call(list.querySelectorAll(itemSelector));
  }

  // Only options a widget is CURRENTLY SHOWING count as navigable. Each widget hides
  // non-matches by adding an `is-hidden` class rather than removing them, so filtering on
  // that class here is what keeps ArrowDown from landing on an invisible row.
  function visible() {
    return items().filter((it) => !it.classList.contains('is-hidden'));
  }

  // Gives every row a stable id and the option role, once. Safe to call again after a
  // widget reorders rows (rank-by-appendChild moves elements, it does not recreate them),
  // since existing ids and roles are left alone.
  function ensureRoles(idPrefix) {
    items().forEach((it, i) => {
      it.setAttribute('role', 'option');
      if (!it.id) it.id = idPrefix + '-' + i;
      if (!it.hasAttribute('aria-selected')) it.setAttribute('aria-selected', 'false');
    });
  }

  function clearActive() {
    items().forEach((it) => { it.classList.remove('is-active'); it.setAttribute('aria-selected', 'false'); });
    active = -1;
    input.removeAttribute('aria-activedescendant');
  }

  // Moves the active row to `next` among the VISIBLE rows, wrapping in both directions, and
  // keeps aria-activedescendant on the input in step with it. Passing an index outside the
  // visible list (or calling with nothing visible) clears the active state instead of
  // throwing, so a widget can call this straight from a keydown handler with no extra guard.
  function setActive(next) {
    const vis = visible();
    items().forEach((it) => { it.classList.remove('is-active'); it.setAttribute('aria-selected', 'false'); });
    if (!vis.length) { active = -1; input.removeAttribute('aria-activedescendant'); return; }
    if (next < 0) next = vis.length - 1;
    if (next >= vis.length) next = 0;
    vis[next].classList.add('is-active');
    vis[next].setAttribute('aria-selected', 'true');
    active = next;
    input.setAttribute('aria-activedescendant', vis[next].id);
    if (typeof vis[next].scrollIntoView === 'function') {
      try { vis[next].scrollIntoView({ block: 'nearest' }); } catch (e) { /* not scrollable, fine */ }
    }
  }

  function getActive() { return active; }

  return { ensureRoles, clearActive, setActive, getActive, visible };
}
