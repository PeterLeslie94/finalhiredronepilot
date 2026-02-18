'use client';

import { useEffect, useState } from 'react';

type Props = {
  params: Promise<{ token: string }>;
};

type InviteResponse = {
  invitation_id: string;
  enquiry_id: string;
  invite_status: string;
  expires_at: string;
  brief: string;
  enquiry: {
    service_slug: string;
    date_needed: string | null;
    date_flexibility: string;
    site_location_text: string;
    postcode: string;
  };
  bid: {
    id: string;
    status: string;
    price_amount: string;
    eta_days: number;
    submitted_at: string;
  } | null;
};

export default function BidPage({ params }: Props) {
  const [token, setToken] = useState('');
  const [invite, setInvite] = useState<InviteResponse | null>(null);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [formData, setFormData] = useState({
    price_amount: '',
    eta_days: '',
    notes: '',
  });

  useEffect(() => {
    params.then((resolved) => setToken(resolved.token));
  }, [params]);

  useEffect(() => {
    if (!token) return;
    const loadInvite = async () => {
      try {
        const response = await fetch(`/api/pilot-invites/${token}`);
        const body = (await response.json()) as InviteResponse & { error?: string };
        if (!response.ok) throw new Error(body.error || 'Failed to load invite');
        setInvite(body);
      } catch (loadError) {
        setError(loadError instanceof Error ? loadError.message : 'Failed to load invite');
      }
    };
    void loadInvite();
  }, [token]);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(`/api/pilot-invites/${token}/bid/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          price_amount: Number(formData.price_amount),
          currency: 'GBP',
          eta_days: Number(formData.eta_days),
          notes: formData.notes || null,
        }),
      });
      const body = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(body.error || 'Failed to submit bid');
      setDone(true);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Failed to submit bid');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (error && !invite) {
    return (
      <section className="section bg-background-alt">
        <div className="container max-w-2xl">
          <h1 className="text-3xl font-bold text-teal mb-3">Bid Link Error</h1>
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  if (!invite) {
    return (
      <section className="section bg-background-alt">
        <div className="container max-w-2xl">
          <p className="text-text-secondary">Loading invite...</p>
        </div>
      </section>
    );
  }

  if (done) {
    return (
      <section className="section bg-background-alt">
        <div className="container max-w-2xl">
          <h1 className="text-3xl font-bold text-teal mb-3">Bid Submitted</h1>
          <p className="text-text-secondary">
            Your bid has been recorded. Thank you for responding to this enquiry.
          </p>
        </div>
      </section>
    );
  }

  if (invite.bid) {
    return (
      <section className="section bg-background-alt">
        <div className="container max-w-2xl">
          <h1 className="text-3xl font-bold text-teal mb-3">Bid Already Submitted</h1>
          <div className="bg-white border border-border rounded-xl p-5">
            <p className="text-text-secondary mb-4">
              You have already submitted a bid for this enquiry.
            </p>
            <div className="text-sm text-text-secondary space-y-1">
              <p>Amount: <span className="font-semibold text-teal">£{Number(invite.bid.price_amount).toFixed(2)}</span></p>
              <p>ETA: <span className="font-semibold text-teal">{invite.bid.eta_days} days</span></p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-background-alt">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-bold text-teal mb-2">Drone Pilot Bid Submission</h1>
        <p className="text-text-secondary mb-6">
          Blind bidding: drone pilot responses are not visible to other invited drone pilots.
        </p>

        <div className="bg-white border border-border rounded-xl p-5 mb-6">
          <h2 className="font-bold text-teal mb-3">Anonymized Project Brief</h2>
          <p className="text-text-secondary whitespace-pre-wrap">{invite.brief}</p>
          <div className="mt-4 text-sm text-text-secondary">
            <p>Service: {invite.enquiry.service_slug}</p>
            <p>Date needed: {invite.enquiry.date_needed || 'Not specified'} ({invite.enquiry.date_flexibility})</p>
            <p>Area: {invite.enquiry.site_location_text}</p>
            <p>Postcode: {invite.enquiry.postcode}</p>
          </div>
        </div>

        <form onSubmit={submit} className="bg-white border border-border rounded-xl p-5 space-y-4">
          <input
            className="form-input-light"
            type="number"
            step="0.01"
            min="1"
            required
            placeholder="Bid amount (GBP) *"
            value={formData.price_amount}
            onChange={(e) => setFormData((prev) => ({ ...prev, price_amount: e.target.value }))}
          />
          <input
            className="form-input-light"
            type="number"
            min="1"
            max="365"
            required
            placeholder="ETA in days *"
            value={formData.eta_days}
            onChange={(e) => setFormData((prev) => ({ ...prev, eta_days: e.target.value }))}
          />
          <textarea
            className="form-input-light resize-none"
            rows={4}
            placeholder="Notes (optional)"
            value={formData.notes}
            onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
          />

          {error ? <p className="text-red-600 text-sm">{error}</p> : null}

          <button className="btn btn-primary btn-shimmer w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Bid'}
          </button>
        </form>
      </div>
    </section>
  );
}
