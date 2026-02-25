import { NextRequest } from 'next/server';

import { logEmail, logPilotApplicationEvent } from '@/lib/server/audit';
import { query } from '@/lib/server/database';
import { fireEmail } from '@/lib/server/email';
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
         <button type="submit" style="background:#f97316;border:none;border-radius:6px;color:#111827;cursor:pointer;font-size:14px;font-weight:600;padding:12px 20px;">
           Confirm Backlink Added
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

async function getTokenFromRequest(request: NextRequest): Promise<string> {
  const fromQuery = request.nextUrl.searchParams.get('token')?.trim();
  if (fromQuery) return fromQuery;

  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
    try {
      const formData = await request.formData();
      const fromForm = formData.get('token');
      if (typeof fromForm === 'string') {
        return fromForm.trim();
      }
    } catch {
      return '';
    }
  }

  if (contentType.includes('application/json')) {
    try {
      const payload = (await request.json()) as { token?: unknown };
      if (typeof payload.token === 'string') {
        return payload.token.trim();
      }
    } catch {
      return '';
    }
  }

  return '';
}

type PilotApplicationConfirmationRow = {
  id: string;
  pilot_name: string;
  business_name: string;
  website_url: string | null;
  backlink_confirmed_at: string | null;
  created_pilot_id: string | null;
  backlink_token_expires_at: string | null;
};

async function getPilotApplicationByToken(id: string, tokenHash: string): Promise<PilotApplicationConfirmationRow | null> {
  const result = await query<PilotApplicationConfirmationRow>(
    `SELECT id, pilot_name, business_name, website_url, backlink_confirmed_at::text, created_pilot_id, backlink_token_expires_at::text
     FROM pilot_applications
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
  const application = await getPilotApplicationByToken(id, tokenHash);
  if (!application) {
    return htmlPage('Link Not Found', 'This confirmation link is invalid. Please check the link in your email.');
  }

  if (hasTokenExpired(application.backlink_token_expires_at)) {
    return htmlPage('Link Expired', 'This confirmation link has expired. Please request a new confirmation email.');
  }

  if (application.backlink_confirmed_at) {
    return htmlPage('Already Confirmed', "You've already confirmed your backlink. We'll review your website and get back to you soon.");
  }

  return htmlPage(
    'Confirm Backlink Added',
    'Please confirm that you have added the backlink or badge to your website.',
    token,
  );
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const token = await getTokenFromRequest(request);

  if (!token) {
    return htmlPage('Invalid Link', 'This confirmation request is missing a token. Please use the link from your email.');
  }

  const tokenHash = hashToken(token);
  const application = await getPilotApplicationByToken(id, tokenHash);
  if (!application) {
    return htmlPage('Link Not Found', 'This confirmation link is invalid. Please check the link in your email.');
  }

  if (hasTokenExpired(application.backlink_token_expires_at)) {
    return htmlPage('Link Expired', 'This confirmation link has expired. Please request a new confirmation email.');
  }

  if (application.backlink_confirmed_at) {
    return htmlPage('Already Confirmed', "You've already confirmed your backlink. We'll review your website and get back to you soon.");
  }

  await query(
    `UPDATE pilot_applications
     SET backlink_confirmed_at = now(), updated_at = now()
     WHERE id = $1`,
    [id],
  );

  if (application.created_pilot_id) {
    await query(
      `UPDATE pilots
       SET tier = 'INTEGRATED_OPERATOR'::pilot_tier_v2,
           integrated_confirmed_at = now(),
           updated_at = now()
       WHERE id = $1`,
      [application.created_pilot_id],
    );
  }

  await logPilotApplicationEvent(
    id,
    'BACKLINK_CONFIRMED',
    { confirmed_via: 'email_token' },
    'APPLICANT',
  );

  const emailLogId = await logEmail(
    'admin_backlink_confirmed',
    'quotes@hiredronepilot.uk',
    'QUEUED',
    'PILOT_APPLICATION',
    id,
  );

  fireEmail(emailLogId, 'quotes@hiredronepilot.uk', {
    templateKey: 'admin_backlink_confirmed',
    pilotName: application.pilot_name,
    businessName: application.business_name,
    websiteUrl: application.website_url,
    applicationId: id,
  });

  return htmlPage(
    'Thank You!',
    "Your backlink confirmation has been received. We'll review your website and approve your listing shortly.",
  );
}
