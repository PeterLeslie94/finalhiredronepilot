import { NextRequest } from 'next/server';

import { query } from '@/lib/server/database';
import { hashToken } from '@/lib/server/security';

export const runtime = 'nodejs';

function htmlPage(title: string, message: string): Response {
  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title} — HireDronePilot</title>
<style>
  body{margin:0;padding:0;background:#f8fafc;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;}
  .card{background:#fff;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);max-width:480px;width:100%;padding:40px 32px;text-align:center;}
  h1{margin:0 0 12px;color:#1f2937;font-size:22px;font-family:'Space Grotesk','Inter',sans-serif;}
  p{margin:0;color:#4b5563;font-size:15px;line-height:1.6;}
  .brand{color:#f97316;font-weight:600;}
</style>
</head>
<body>
  <div class="card">
    <h1>${title}</h1>
    <p>${message}</p>
    <p style="margin-top:24px;font-size:13px;color:#9ca3af;">
      <span class="brand">HireDronePilot</span> &middot; UK Drone Pilot Network
    </p>
  </div>
</body>
</html>`;
  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const token = request.nextUrl.searchParams.get('token');

  if (!token) {
    return htmlPage('Invalid Link', 'This confirmation link is missing a token. Please use the link from your email.');
  }

  const tokenHash = hashToken(token);

  const result = await query<{
    id: string;
    name: string;
    integrated_confirmed_at: string | null;
  }>(
    `SELECT id, name, integrated_confirmed_at
     FROM pilots
     WHERE id = $1 AND backlink_token_hash = $2`,
    [id, tokenHash],
  );

  if (result.rows.length === 0) {
    return htmlPage('Link Not Found', 'This confirmation link is invalid or has expired. Please check the link in your email.');
  }

  const pilot = result.rows[0];

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
