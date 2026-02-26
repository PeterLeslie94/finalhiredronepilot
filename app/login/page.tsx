'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import HoneypotField from '@/components/HoneypotField';
import { HONEYPOT_FIELD_NAME } from '@/lib/honeypot';

type RequestLinkResponse = {
  ok?: boolean;
  throttled?: boolean;
  magic_link_url?: string;
  error?: string;
};

function mapError(code: string | null): string | null {
  if (!code) return null;
  if (code === 'missing_token') return 'The sign-in link is missing a token. Please request a new link.';
  if (code === 'invalid_or_expired') return 'That sign-in link is invalid or expired. Please request a new one.';
  return 'Unable to sign in. Please request a new link.';
}

export default function LoginPage() {
  const [queryError, setQueryError] = useState<string | null>(null);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('error');
    setQueryError(mapError(code));
  }, []);

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [devLink, setDevLink] = useState<string | null>(null);
  const [error, setError] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setDevLink(null);
    setCopied(false);

    const formData = new FormData(event.currentTarget);
    const honeypotRaw = formData.get(HONEYPOT_FIELD_NAME);
    const honeypot = typeof honeypotRaw === 'string' ? honeypotRaw : '';

    try {
      const response = await fetch('/api/auth/request-link/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, [HONEYPOT_FIELD_NAME]: honeypot }),
      });
      const body = (await response.json()) as RequestLinkResponse;
      if (!response.ok) {
        throw new Error(body.error || 'Failed to request link');
      }
      setSent(true);
      if (body.magic_link_url) setDevLink(body.magic_link_url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to request link');
    } finally {
      setLoading(false);
    }
  };

  const copyDevLink = async () => {
    if (!devLink) return;
    try {
      await navigator.clipboard.writeText(devLink);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Ignore clipboard failures (permissions, unsupported browser).
    }
  };

  return (
    <section className="-mt-[104px] bg-white py-10">
      <div className="container">
        <div className="mx-auto w-full max-w-sm">
          <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
            <h1 className="text-2xl font-bold text-teal mb-1">Sign In</h1>
            <p className="text-text-secondary text-sm mb-5">
              Magic-link login for admin operators.
            </p>

            {queryError ? (
              <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {queryError}
              </div>
            ) : null}

            {sent ? (
              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-background-alt p-4">
                  <p className="text-teal font-semibold">Check your email</p>
                  <p className="text-text-secondary text-sm mt-1">
                    If this email is registered, you will receive a sign-in link shortly.
                  </p>
                </div>

                {devLink ? (
                  <div className="rounded-xl border border-gold/30 bg-gold/10 p-4">
                    <p className="text-xs uppercase tracking-wider text-teal font-semibold mb-2">Dev link</p>
                    <a className="text-gold hover:underline break-all text-sm" href={devLink}>
                      {devLink}
                    </a>
                    <div className="mt-3">
                      <button type="button" className="btn btn-outline-teal text-xs px-4 py-2" onClick={copyDevLink}>
                        {copied ? 'Copied' : 'Copy link'}
                      </button>
                    </div>
                  </div>
                ) : null}

                <button type="button" className="btn btn-outline-teal w-full" onClick={() => setSent(false)}>
                  Send Another Link
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={submit}>
                <HoneypotField />
                <div>
                  <input
                    className="form-input-light"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                  />
                </div>

                {error ? <p className="text-red-600 text-sm">{error}</p> : null}

                <button className="btn btn-primary btn-shimmer w-full" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Sign-In Link'}
                </button>

                <p className="text-xs text-text-secondary">
                  By continuing, you confirm you have access to this inbox.
                </p>
              </form>
            )}
          </div>
          <div className="mt-4 text-center text-sm text-text-secondary">
            <Link className="text-gold hover:underline" href="/">
              Back to site
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
