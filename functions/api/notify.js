// Cloudflare Pages Function: POST /api/notify
// Stores newsletter "notify me" signups in KV (binding name: SIGNUPS).
// One record per email (re-signup overwrites, so no duplicates).
// Collected: email, fromCountry, destination, path, createdAt. No name, phone, or IP.

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
  });
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function onRequestPost(context) {
  const { request, env } = context;
  let data;
  try {
    data = await request.json();
  } catch (e) {
    return json({ ok: false, error: 'bad_json' }, 400);
  }

  const email = String(data && data.email || '').trim().toLowerCase();
  const fromCountry = String(data && data.fromCountry || '').trim().slice(0, 80);
  const destination = String(data && data.destination || '').trim().slice(0, 40);
  const path = String(data && data.path || '').trim().slice(0, 120);

  if (!EMAIL_RE.test(email) || email.length > 200) {
    return json({ ok: false, error: 'invalid_email' }, 400);
  }
  if (!env.SIGNUPS) {
    return json({ ok: false, error: 'storage_unavailable' }, 500);
  }

  const record = { email, fromCountry, destination, path, createdAt: new Date().toISOString() };

  try {
    await env.SIGNUPS.put('signup:' + email, JSON.stringify(record), {
      metadata: { fromCountry, destination }
    });
  } catch (e) {
    return json({ ok: false, error: 'store_failed' }, 500);
  }

  return json({ ok: true });
}
