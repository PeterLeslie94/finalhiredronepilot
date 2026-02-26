import { NextRequest } from 'next/server';

import { query } from '@/lib/server/database';
import { HONEYPOT_FIELD_NAME } from '@/lib/honeypot';
import { hashToken } from '@/lib/server/security';

export const runtime = 'nodejs';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function htmlPage(title: string, message: string, token: string | null = null): Response {
  const confirmAction = token
    ? `<form method="post" style="margin-top:28px;">
         <input type="hidden" name="token" value="${escapeHtml(token)}">
         <div aria-hidden="true" style="position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden;">
           <label for="${HONEYPOT_FIELD_NAME}">Leave this field blank</label>
           <input id="${HONEYPOT_FIELD_NAME}" name="${HONEYPOT_FIELD_NAME}" type="text" tabindex="-1" autocomplete="off">
         </div>
         <button type="submit" style="background:#f97316;border:none;border-radius:6px;color:#111827;cursor:pointer;font-size:14px;font-weight:600;padding:12px 20px;">
           Confirm Website Integration
         </button>
       </form>`
    : '';

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)} - HireDronePilot</title>
<style>
  body{margin:0;padding:0;background:#f8fafc;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;}
  .card{background:#fff;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);max-width:520px;width:100%;padding:40px 32px;text-align:center;}
  h1{margin:0 0 12px;color:#1f2937;font-size:22px;font-family:'Space Grotesk','Inter',sans-serif;}
  p{margin:0;color:#4b5563;font-size:15px;line-height:1.6;}
  .brand{color:#f97316;font-weight:600;}
</style>
</head>
<body>
  <div class="card">
    <h1>${escapeHtml(title)}</h1>
    <p>${escapeHtml(message)}</p>
    ${confirmAction}
    <p style="margin-top:24px;font-size:13px;color:#9ca3af;">
      <span class="brand">HireDronePilot</span> &middot; UK Drone Pilot Network
    </p>
  </div>
</body>
</html>`;
  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function hasTokenExpired(expiresAtRaw: string | null): boolean {
  if (!expiresAtRaw) return true;
  const expiresAtMs = new Date(expiresAtRaw).getTime();
  if (!Number.isFinite(expiresAtMs)) return true;
  return Date.now() > expiresAtMs;
}

async function getSubmissionFromRequest(request: NextRequest): Promise<{ token: string; honeypot: string }> {
  let token = request.nextUrl.searchParams.get('token')?.trim() || '';
  let honeypot = request.nextUrl.searchParams.get(HONEYPOT_FIELD_NAME)?.trim() || '';

  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
    try {
      const formData = await request.formData();
      const fromForm = formData.get('token');
      const honeypotFromForm = formData.get(HONEYPOT_FIELD_NAME);
      if (typeof fromForm === 'string') {
        token = token || fromForm.trim();
      }
      if (typeof honeypotFromForm === 'string') {
        honeypot = honeypot || honeypotFromForm.trim();
      }
    } catch {
      return { token: '', honeypot: '' };
    }
  }

  if (contentType.includes('application/json')) {
    try {
      const payload = (await request.json()) as { token?: unknown; [HONEYPOT_FIELD_NAME]?: unknown };
      const honeypotValue = payload[HONEYPOT_FIELD_NAME];
      const honeypotFromJson = typeof honeypotValue === 'string' ? honeypotValue.trim() : '';
      if (typeof payload.token === 'string') {
        token = token || payload.token.trim();
      }
      if (honeypotFromJson) {
        honeypot = honeypot || honeypotFromJson;
      }
    } catch {
      return { token: '', honeypot: '' };
    }
  }

  return { token, honeypot };
}

type PilotConfirmationRow = {
  id: string;
  name: string;
  integrated_confirmed_at: string | null;
  backlink_token_expires_at: string | null;
};

async function getPilotByToken(id: string, tokenHash: string): Promise<PilotConfirmationRow | null> {
  const result = await query<PilotConfirmationRow>(
    `SELECT id, name, integrated_confirmed_at::text, backlink_token_expires_at::text
     FROM pilots
     WHERE id = $1 AND backlink_token_hash = $2`,
    [id, tokenHash],
  );
  return result.rows[0] || null;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const token = request.nextUrl.searchParams.get('token')?.trim() || '';

  if (!token) {
    return htmlPage('Invalid Link', 'This confirmation link is missing a token. Please use the link from your email.');
  }

  const tokenHash = hashToken(token);
  const pilot = await getPilotByToken(id, tokenHash);

  if (!pilot) {
    return htmlPage('Link Not Found', 'This confirmation link is invalid. Please check the link in your email.');
  }

  if (hasTokenExpired(pilot.backlink_token_expires_at)) {
    return htmlPage('Link Expired', 'This confirmation link has expired. Please request a new verification email.');
  }

  if (pilot.integrated_confirmed_at) {
    return htmlPage('Already Confirmed', 'Your website integration has already been confirmed. You are an Integrated Operator.');
  }

  return htmlPage(
    'Confirm Website Integration',
    'Please confirm you want to mark your website integration as completed.',
    token,
  );
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const { token, honeypot } = await getSubmissionFromRequest(request);
  if (honeypot) {
    return htmlPage(
      'Website Verified!',
      'Your integration has been confirmed. You are now an Integrated Operator with increased visibility, a Website Verified badge, and priority lead eligibility.',
    );
  }
  if (!token) {
    return htmlPage('Invalid Link', 'This confirmation request is missing a token. Please use the link from your email.');
  }

  const tokenHash = hashToken(token);
  const pilot = await getPilotByToken(id, tokenHash);

  if (!pilot) {
    return htmlPage('Link Not Found', 'This confirmation link is invalid. Please check the link in your email.');
  }

  if (hasTokenExpired(pilot.backlink_token_expires_at)) {
    return htmlPage('Link Expired', 'This confirmation link has expired. Please request a new verification email.');
  }

  if (pilot.integrated_confirmed_at) {
    return htmlPage('Already Confirmed', 'Your website integration has already been confirmed. You are an Integrated Operator.');
  }

  await query(
    `UPDATE pilots
     SET tier = 'INTEGRATED_OPERATOR'::pilot_tier_v2,
         integrated_confirmed_at = now(),
         updated_at = now()
     WHERE id = $1`,
    [id],
  );

  return htmlPage(
    'Website Verified!',
    'Your integration has been confirmed. You are now an Integrated Operator with increased visibility, a Website Verified badge, and priority lead eligibility.',
  );
}
