// TTC CMS login helper (a Cloudflare Worker, separate from the site's own Worker).
//
// What it does: lets the Decap CMS at truetripcosts.com/admin sign a person in with
// their GitHub account. GitHub needs a small server-side step to swap a one-time code
// for a login token, and that step needs a secret, so it cannot live in the browser.
//
// What it deliberately does NOT do:
//   - It never hands a token to any website except the ones in ALLOWED_ORIGINS.
//   - It never hands a token to any GitHub account that is not in ALLOWED_USERS.
//   - It stores nothing. No database, no logs of tokens.
//
// Settings, all set in the Cloudflare dashboard (Worker > Settings > Variables and Secrets):
//   GITHUB_OAUTH_ID      secret   Client ID of the GitHub OAuth App
//   GITHUB_OAUTH_SECRET  secret   Client secret of the GitHub OAuth App
//   ALLOWED_ORIGINS      text     comma list, e.g. https://truetripcosts.com
//   ALLOWED_USERS        text     comma list of GitHub usernames, e.g. Varsanyi14
//
// Adding a second editor later is a settings change (add their GitHub username to
// ALLOWED_USERS, and give them access to the repo), never a code change.

const GITHUB_AUTHORIZE = 'https://github.com/login/oauth/authorize';
const GITHUB_TOKEN = 'https://github.com/login/oauth/access_token';
const GITHUB_USER = 'https://api.github.com/user';
// public_repo is enough while the repo is public. If the repo ever goes private this
// must become "repo".
const SCOPE = 'public_repo';
const STATE_COOKIE = 'ttc_cms_oauth_state';

function list(v) {
  return String(v || '').split(',').map(s => s.trim()).filter(Boolean);
}

function randomState() {
  const b = new Uint8Array(24);
  crypto.getRandomValues(b);
  return Array.from(b, x => x.toString(16).padStart(2, '0')).join('');
}

function getCookie(request, name) {
  const raw = request.headers.get('Cookie') || '';
  for (const part of raw.split(';')) {
    const i = part.indexOf('=');
    if (i > -1 && part.slice(0, i).trim() === name) return part.slice(i + 1).trim();
  }
  return '';
}

function page(body, status) {
  return new Response(body, {
    status: status || 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'no-referrer',
      // Cookie is cleared on every callback, success or failure.
      'Set-Cookie': STATE_COOKIE + '=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax'
    }
  });
}

function errorPage(message, status) {
  const safe = String(message).replace(/[<>&"]/g, '');
  return page('<!doctype html><meta charset="utf-8"><title>Sign-in problem</title>' +
    '<body style="font-family:system-ui;max-width:32rem;margin:4rem auto;padding:0 1rem">' +
    '<h1 style="font-size:1.2rem">Sign-in did not complete</h1><p>' + safe + '</p>' +
    '<p>You can close this window and try again from the CMS.</p></body>', status);
}

// The page the sign-in popup shows on success. It speaks Decap CMS's popup handshake,
// but only ever to an origin on the allow list. The token is never posted to "*".
function successPage(token, allowedOrigins) {
  const payload = JSON.stringify({ token: token, provider: 'github' });
  const message = 'authorization:github:success:' + payload;
  return page('<!doctype html><meta charset="utf-8"><title>Signing in</title>' +
    '<body style="font-family:system-ui;padding:2rem">Signing you in, this window will close.' +
    '<script>(function(){' +
    'var allowed=' + JSON.stringify(allowedOrigins) + ';' +
    'var message=' + JSON.stringify(message) + ';' +
    'function receive(e){' +
      'if(allowed.indexOf(e.origin)===-1)return;' +
      'window.removeEventListener("message",receive,false);' +
      'window.opener.postMessage(message,e.origin);' +
    '}' +
    'window.addEventListener("message",receive,false);' +
    // Announce to the opener, once per allowed origin. The browser drops the message
    // for any origin that is not the real opener, so nothing leaks.
    'allowed.forEach(function(o){window.opener.postMessage("authorizing:github",o);});' +
    '})();</script></body>', 200);
}

async function handleAuth(request, env) {
  const url = new URL(request.url);
  const state = randomState();
  const authorize = new URL(GITHUB_AUTHORIZE);
  authorize.searchParams.set('client_id', env.GITHUB_OAUTH_ID);
  authorize.searchParams.set('redirect_uri', url.origin + '/callback');
  authorize.searchParams.set('scope', SCOPE);
  authorize.searchParams.set('state', state);
  return new Response(null, {
    status: 302,
    headers: {
      Location: authorize.toString(),
      'Cache-Control': 'no-store',
      'Set-Cookie': STATE_COOKIE + '=' + state + '; Path=/; Max-Age=600; HttpOnly; Secure; SameSite=Lax'
    }
  });
}

async function handleCallback(request, env) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const cookieState = getCookie(request, STATE_COOKIE);
  const origins = list(env.ALLOWED_ORIGINS);
  const users = list(env.ALLOWED_USERS).map(u => u.toLowerCase());

  if (!code || !state || !cookieState || state !== cookieState) {
    return errorPage('The sign-in request could not be verified.', 400);
  }

  const tokenRes = await fetch(GITHUB_TOKEN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'User-Agent': 'ttc-cms-auth' },
    body: JSON.stringify({
      client_id: env.GITHUB_OAUTH_ID,
      client_secret: env.GITHUB_OAUTH_SECRET,
      code: code,
      redirect_uri: url.origin + '/callback'
    })
  });
  const tokenData = await tokenRes.json().catch(() => ({}));
  if (!tokenData.access_token) {
    return errorPage('GitHub did not accept the sign-in.', 401);
  }

  const userRes = await fetch(GITHUB_USER, {
    headers: { Authorization: 'Bearer ' + tokenData.access_token, Accept: 'application/json', 'User-Agent': 'ttc-cms-auth' }
  });
  const user = await userRes.json().catch(() => ({}));
  const login = String(user.login || '').toLowerCase();
  if (!login || users.indexOf(login) === -1) {
    return errorPage('This GitHub account is not approved to edit the site.', 403);
  }

  return successPage(tokenData.access_token, origins);
}

export default {
  async fetch(request, env) {
    if (!env.GITHUB_OAUTH_ID || !env.GITHUB_OAUTH_SECRET || !list(env.ALLOWED_ORIGINS).length || !list(env.ALLOWED_USERS).length) {
      return errorPage('This sign-in service is not fully set up yet.', 500);
    }
    const path = new URL(request.url).pathname;
    if (request.method !== 'GET') return errorPage('Not found.', 404);
    if (path === '/auth') return handleAuth(request, env);
    if (path === '/callback') return handleCallback(request, env);
    return errorPage('Not found.', 404);
  }
};
