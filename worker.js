// truetripcosts Worker (static assets + signup API)
// Serves the built static site from /dist, and handles POST /api/notify,
// storing newsletter "notify me" signups in KV (binding: SIGNUPS).
// One record per email (re-signup overwrites). Collected: email, fromCountry,
// destination, path, createdAt. No name, phone, or IP.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }
  });
}

async function handleNotify(request, env) {
  if (request.method !== "POST") {
    return json({ ok: false, error: "method_not_allowed" }, 405);
  }

  let data;
  try {
    data = await request.json();
  } catch (e) {
    return json({ ok: false, error: "bad_json" }, 400);
  }

  const email = String((data && data.email) || "").trim().toLowerCase();
  const fromCountry = String((data && data.fromCountry) || "").trim().slice(0, 80);
  const destination = String((data && data.destination) || "").trim().slice(0, 40);
  const path = String((data && data.path) || "").trim().slice(0, 120);

  if (!EMAIL_RE.test(email) || email.length > 200) {
    return json({ ok: false, error: "invalid_email" }, 400);
  }
  if (!env.SIGNUPS) {
    return json({ ok: false, error: "storage_unavailable" }, 500);
  }

  const record = {
    email: email,
    fromCountry: fromCountry,
    destination: destination,
    path: path,
    createdAt: new Date().toISOString()
  };

  try {
    await env.SIGNUPS.put("signup:" + email, JSON.stringify(record), {
      metadata: { fromCountry: fromCountry, destination: destination }
    });
  } catch (e) {
    return json({ ok: false, error: "store_failed" }, 500);
  }

  return json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/notify") {
      return handleNotify(request, env);
    }
    // Everything else: serve the static site.
    return env.ASSETS.fetch(request);
  }
};
