import { NextRequest } from 'next/server';

export const runtime = 'nodejs';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function retiredPage(): Response {
  const title = 'Link No Longer Required';
  const message =
    'HireDronePilot no longer requires backlink confirmation. Approved pilot listings now go live as soon as they are approved.';

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)} - HireDronePilot</title>
<style>
  body{margin:0;padding:0;background:#f8fafc;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;}
  .card{background:#fff;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);max-width:540px;width:100%;padding:40px 32px;text-align:center;}
  h1{margin:0 0 12px;color:#1f2937;font-size:22px;font-family:'Space Grotesk','Inter',sans-serif;}
  p{margin:0;color:#4b5563;font-size:15px;line-height:1.6;}
</style>
</head>
<body>
  <div class="card">
    <h1>${escapeHtml(title)}</h1>
    <p>${escapeHtml(message)}</p>
  </div>
</body>
</html>`;

  return new Response(html, {
    status: 410,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

export async function GET(_request: NextRequest) {
  return retiredPage();
}

export async function POST(_request: NextRequest) {
  return retiredPage();
}
