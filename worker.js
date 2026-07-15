// truetripcosts Worker (static assets + signup API)
// Serves the built static site from /dist and handles POST /api/notify.
//
// Signups are created in Buttondown (the store of record) with tags:
//   general         the general-updates opt-in
//   country:<slug>  one per destination the reader picked (e.g. country:japan)
// One address can hold general plus any number of country tags.
//
// A best-effort copy is also written to KV (binding: SIGNUPS) as a backup log
// only. We never read it operationally, and a KV failure never blocks a signup.
// Logged there: email, general, destinations, path, createdAt. No name/phone.
//
// Double opt-in stays ON: new subscribers are created "unactivated" and
// Buttondown emails them a confirmation link before they count as subscribed.
//
// Secret required (set as a runtime Secret on the Worker, not a build var):
//   BUTTONDOWN_API_KEY

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BD_SUBSCRIBERS = "https://api.buttondown.com/v1/subscribers";
const MAX_DESTINATIONS = 40;

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }
  });
}

// Keep only real-looking slug characters, so a stray value cannot create an odd
// tag. The form only offers real guide slugs, so this is just belt and braces.
function cleanSlug(s) {
  return String(s || "").trim().toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 40);
}

async function handleNotify(request, env) {
  if (request.method !== "POST") {
    return json({ ok: false, error: "method_not_allowed" }, 405);
  }
  if (!env.BUTTONDOWN_API_KEY) {
    return json({ ok: false, error: "config_error" }, 500);
  }

  let data;
  try {
    data = await request.json();
  } catch (e) {
    return json({ ok: false, error: "bad_json" }, 400);
  }

  const email = String((data && data.email) || "").trim().toLowerCase();
  const general = (data && data.general) === true;
  let destinations = Array.isArray(data && data.destinations) ? data.destinations : [];
  destinations = Array.from(new Set(destinations.map(cleanSlug).filter(Boolean))).slice(0, MAX_DESTINATIONS);
  const path = String((data && data.path) || "").trim().slice(0, 120);

  // Buttondown's anti-abuse firewall uses the subscriber's IP address to tell a
  // real person from bulk or bot signups. Because this runs on the Worker (one
  // origin for every visitor), we must pass the visitor's own IP, which
  // Cloudflare attaches to each incoming request as CF-Connecting-IP. Without
  // it, Buttondown flags the signups as suspicious and rejects them with a 400
  // once more than one arrives. With it, each signup looks like a person
  // subscribing from their own device.
  const clientIp = request.headers.get("CF-Connecting-IP") || "";

  if (!EMAIL_RE.test(email) || email.length > 200) {
    return json({ ok: false, error: "invalid_email" }, 400);
  }
  if (!general && destinations.length === 0) {
    return json({ ok: false, error: "nothing_selected" }, 400);
  }

  const tags = [];
  if (general) tags.push("general");
  for (const slug of destinations) tags.push("country:" + slug);

  // Best-effort backup log to KV. Never blocks the signup.
  if (env.SIGNUPS) {
    try {
      await env.SIGNUPS.put(
        "signup:" + email,
        JSON.stringify({ email, general, destinations, path, createdAt: new Date().toISOString() }),
        { metadata: { general, destinations: destinations.join(",") } }
      );
    } catch (e) { /* backup only, ignore */ }
  }

  const headers = {
    "Authorization": "Token " + env.BUTTONDOWN_API_KEY,
    "Content-Type": "application/json"
  };

  // Create the subscriber. Double opt-in left on (no "type" field), so
  // Buttondown sends the confirmation email itself. Tags attach at creation.
  // We include the visitor's IP so Buttondown's firewall sees a real signup.
  const createBody = { email_address: email, tags };
  if (clientIp) createBody.ip_address = clientIp;

  const create = await fetch(BD_SUBSCRIBERS, {
    method: "POST",
    headers,
    body: JSON.stringify(createBody)
  });
  if (create.ok) {
    return json({ ok: true, status: "created" });
  }

  // Buttondown rejects a create for an email that already exists. In that case,
  // fetch the existing subscriber, merge the new tags onto their current ones,
  // and update, so a returning reader adding another country just works.
  // (A previously unsubscribed address stays unsubscribed; re-subscribing has
  //  its own flow, out of scope for this signup.)
  if (create.status === 400 || create.status === 409) {
    const url = BD_SUBSCRIBERS + "/" + encodeURIComponent(email);
    const existing = await fetch(url, { headers });
    if (existing.ok) {
      let current = [];
      try {
        const sub = await existing.json();
        if (sub && Array.isArray(sub.tags)) current = sub.tags;
      } catch (e) { /* treat as no current tags */ }
      const merged = Array.from(new Set(current.concat(tags)));
      const update = await fetch(url, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ tags: merged })
      });
      if (update.ok) {
        return json({ ok: true, status: "updated" });
      }
    }
  }

  return json({ ok: false, error: "signup_failed" }, 502);
}

// ---- Daily FX snapshot (currency anchor panels) --------------------------
// A Cron Trigger (see wrangler.toml) runs refreshFx once a day. It fetches the
// mid-market rates from ExchangeRate-API's free open endpoint (no key, base
// USD) and stores the snapshot in KV under FX_KEY, reusing the SIGNUPS
// namespace. The pages read it through the same-origin GET /api/rates below,
// so the reader's browser never calls the third party. If a fetch ever fails,
// the last good snapshot stays in KV, and the pages fall back to a baked
// snapshot shipped in the site. Attribution ("Rates by ExchangeRate-API")
// shows in the panel, per the source's open-endpoint terms.
const FX_URL = "https://open.er-api.com/v6/latest/USD";
const FX_KEY = "fx:latest";
const FX_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function fxShortDate(dt) {
  return dt.getUTCDate() + " " + FX_MONTHS[dt.getUTCMonth()] + " " + dt.getUTCFullYear();
}

async function refreshFx(env) {
  if (!env.SIGNUPS) return false;
  try {
    const r = await fetch(FX_URL, { headers: { "Accept": "application/json" } });
    if (!r.ok) return false;
    const d = await r.json();
    if (!d || d.result !== "success" || !d.rates) return false;
    let date = "";
    try {
      const dt = d.time_last_update_utc ? new Date(d.time_last_update_utc) : new Date();
      date = fxShortDate(dt);
    } catch (e) { date = ""; }
    const snapshot = {
      base: d.base_code || "USD",
      date,
      rates: d.rates,
      updated: new Date().toISOString()
    };
    await env.SIGNUPS.put(FX_KEY, JSON.stringify(snapshot));
    return true;
  } catch (e) {
    return false; // keep the last good snapshot
  }
}

function fxHeaders() {
  return { "Content-Type": "application/json", "Cache-Control": "public, max-age=3600" };
}

async function handleRates(request, env) {
  if (request.method !== "GET") {
    return new Response(JSON.stringify({ ok: false }), { status: 405, headers: fxHeaders() });
  }
  if (!env.SIGNUPS) {
    return new Response("null", { status: 200, headers: fxHeaders() });
  }
  let v = null;
  try { v = await env.SIGNUPS.get(FX_KEY); } catch (e) { v = null; }
  // Self-seed on the first request if the daily cron has not run yet.
  if (!v) {
    try { await refreshFx(env); v = await env.SIGNUPS.get(FX_KEY); } catch (e) { v = null; }
  }
  return new Response(v || "null", { status: 200, headers: fxHeaders() });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/notify") {
      return handleNotify(request, env);
    }
    if (url.pathname === "/api/rates") {
      return handleRates(request, env);
    }
    // Everything else: serve the static site.
    return env.ASSETS.fetch(request);
  },

  async scheduled(event, env, ctx) {
    ctx.waitUntil(refreshFx(env));
  }
};
