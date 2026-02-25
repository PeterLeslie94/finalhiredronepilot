import { NextResponse } from 'next/server';

export function jsonError(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

export class RequestOriginError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RequestOriginError';
  }
}

export async function parseBody(request: Request): Promise<Record<string, unknown>> {
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    const json = await request.json();
    return (json ?? {}) as Record<string, unknown>;
  }

  if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    const payload: Record<string, unknown> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string') {
        payload[key] = value;
      }
    }
    return payload;
  }

  return {};
}

export function wantsHtmlRedirect(request: Request): boolean {
  const accept = request.headers.get('accept') || '';
  const contentType = request.headers.get('content-type') || '';
  return contentType.includes('application/x-www-form-urlencoded') || accept.includes('text/html');
}

function toOrigin(raw: string): string | null {
  try {
    return new URL(raw).origin;
  } catch {
    return null;
  }
}

function parseOriginList(raw: string | undefined): string[] {
  if (!raw) return [];
  const parts = raw.split(',').map((item) => item.trim()).filter(Boolean);
  const out = new Set<string>();
  for (const part of parts) {
    const origin = toOrigin(part);
    if (origin) out.add(origin);
  }
  return Array.from(out);
}

function configuredOrigins(): string[] {
  const out = new Set<string>();
  for (const key of ['APP_BASE_URL', 'NEXT_PUBLIC_BASE_URL'] as const) {
    const value = process.env[key];
    if (!value) continue;
    const origin = toOrigin(value);
    if (origin) out.add(origin);
  }
  for (const origin of parseOriginList(process.env.ALLOWED_ORIGINS)) {
    out.add(origin);
  }
  return Array.from(out);
}

export function getCanonicalAppOrigin(request?: Request): string {
  const configured = configuredOrigins();
  if (configured.length > 0) return configured[0];
  if (process.env.NODE_ENV !== 'production' && request) {
    return new URL(request.url).origin;
  }
  throw new Error('APP_BASE_URL or NEXT_PUBLIC_BASE_URL must be configured');
}

export function assertTrustedOrigin(request: Request): void {
  const trusted = new Set(configuredOrigins());
  if (process.env.NODE_ENV !== 'production') {
    trusted.add(new URL(request.url).origin);
  }

  if (trusted.size === 0) {
    throw new RequestOriginError('No trusted origins configured');
  }

  const incoming = request.headers.get('origin') || request.headers.get('referer');
  if (!incoming) {
    if (process.env.NODE_ENV !== 'production') return;
    throw new RequestOriginError('Missing Origin or Referer header');
  }

  const incomingOrigin = toOrigin(incoming);
  if (!incomingOrigin || !trusted.has(incomingOrigin)) {
    throw new RequestOriginError('Invalid request origin');
  }
}

export function getClientIp(request: Request): string | null {
  const xff = request.headers.get('x-forwarded-for');
  if (xff) {
    const first = xff.split(',')[0]?.trim();
    if (first) return first;
  }
  const candidates = ['cf-connecting-ip', 'x-real-ip', 'x-client-ip'];
  for (const key of candidates) {
    const value = request.headers.get(key)?.trim();
    if (value) return value;
  }
  return null;
}
