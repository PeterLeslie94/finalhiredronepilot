'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import { toLocalDate } from '@/lib/utils/format';

type PilotProfile = {
  id: string;
  name: string;
  business_name: string | null;
  email: string;
  phone: string | null;
  website_url: string | null;
  profile_photo_url: string | null;
  two_sentence_summary: string | null;
  insurance_provider: string | null;
  insurance_expiry: string | null;
  flyer_id: string | null;
  operator_id: string | null;
  licence_level: string | null;
  created_at: string;
  updated_at: string;
};

type FormData = {
  name: string;
  business_name: string;
  phone: string;
  website_url: string;
  profile_photo_url: string;
  two_sentence_summary: string;
  insurance_provider: string;
  insurance_expiry: string;
  flyer_id: string;
  operator_id: string;
};

export default function PilotProfilePage() {
  const [profile, setProfile] = useState<PilotProfile | null>(null);
  const [form, setForm] = useState<FormData>({
    name: '',
    business_name: '',
    phone: '',
    website_url: '',
    profile_photo_url: '',
    two_sentence_summary: '',
    insurance_provider: '',
    insurance_expiry: '',
    flyer_id: '',
    operator_id: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    async function loadProfile() {
      try {
        const res = await fetch('/api/pilot/me/profile');
        const body = (await res.json()) as { profile?: PilotProfile; error?: string };
        if (!res.ok) throw new Error(body.error || 'Failed to load profile');
        const p = body.profile!;
        setProfile(p);
        setForm({
          name: p.name || '',
          business_name: p.business_name || '',
          phone: p.phone || '',
          website_url: p.website_url || '',
          profile_photo_url: p.profile_photo_url || '',
          two_sentence_summary: p.two_sentence_summary || '',
          insurance_provider: p.insurance_provider || '',
          insurance_expiry: p.insurance_expiry || '',
          flyer_id: p.flyer_id || '',
          operator_id: p.operator_id || '',
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load profile');
      } finally {
        setLoading(false);
      }
    }
    void loadProfile();
  }, []);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSuccess('');
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    setSuccess('');
    try {
      const res = await fetch('/api/pilot/me/profile/', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const body = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) throw new Error(body.error || 'Failed to save profile');
      setSuccess('Profile updated successfully.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <section className="section bg-background-alt">
        <div className="container max-w-3xl">
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-teal" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-background-alt">
      <div className="container max-w-3xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Link
            href="/drone-pilot"
            className="btn btn-outline-teal inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Dashboard
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-teal">My Profile</h1>
            <p className="text-text-secondary">Update your pilot profile details.</p>
          </div>
        </div>

        {/* Toast messages */}
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 mb-6">
            {error}
          </div>
        )}
        {success && (
          <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700 mb-6">
            {success}
          </div>
        )}

        {profile && (
          <div className="space-y-6">
            {/* Read-only section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-sm font-semibold text-gray-900 mb-4">Account Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-text-secondary mb-1">Email (read-only)</label>
                  <input
                    type="email"
                    value={profile.email}
                    disabled
                    className="w-full rounded-md border border-gray-200 bg-gray-100 px-3 py-2 text-sm text-gray-500 cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-secondary mb-1">Licence Level</label>
                  <input
                    type="text"
                    value={profile.licence_level || 'Not set'}
                    disabled
                    className="w-full rounded-md border border-gray-200 bg-gray-100 px-3 py-2 text-sm text-gray-500 cursor-not-allowed"
                  />
                </div>
              </div>
              <p className="text-xs text-text-secondary mt-3">
                Member since {toLocalDate(profile.created_at)}
              </p>
            </div>

            {/* Editable fields */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-sm font-semibold text-gray-900 mb-4">Personal Details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-text-secondary mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    maxLength={120}
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-secondary mb-1">Business Name</label>
                  <input
                    type="text"
                    value={form.business_name}
                    onChange={(e) => handleChange('business_name', e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    maxLength={180}
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-secondary mb-1">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    maxLength={50}
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-secondary mb-1">Website</label>
                  <input
                    type="url"
                    value={form.website_url}
                    onChange={(e) => handleChange('website_url', e.target.value)}
                    placeholder="https://example.com"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    maxLength={300}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-sm font-semibold text-gray-900 mb-4">Summary</h2>
              <div>
                <label className="block text-xs text-text-secondary mb-1">
                  Two Sentence Summary
                </label>
                <textarea
                  value={form.two_sentence_summary}
                  onChange={(e) => handleChange('two_sentence_summary', e.target.value)}
                  rows={3}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  maxLength={1000}
                />
              </div>
              <div className="mt-4">
                <label className="block text-xs text-text-secondary mb-1">Profile Photo URL</label>
                <input
                  type="url"
                  value={form.profile_photo_url}
                  onChange={(e) => handleChange('profile_photo_url', e.target.value)}
                  placeholder="https://..."
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-sm font-semibold text-gray-900 mb-4">CAA &amp; Insurance</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-text-secondary mb-1">Flyer ID</label>
                  <input
                    type="text"
                    value={form.flyer_id}
                    onChange={(e) => handleChange('flyer_id', e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    maxLength={80}
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-secondary mb-1">Operator ID</label>
                  <input
                    type="text"
                    value={form.operator_id}
                    onChange={(e) => handleChange('operator_id', e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    maxLength={80}
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-secondary mb-1">Insurance Provider</label>
                  <input
                    type="text"
                    value={form.insurance_provider}
                    onChange={(e) => handleChange('insurance_provider', e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    maxLength={180}
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-secondary mb-1">Insurance Expiry</label>
                  <input
                    type="date"
                    value={form.insurance_expiry}
                    onChange={(e) => handleChange('insurance_expiry', e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  />
                </div>
              </div>
            </div>

            {/* Save */}
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                disabled={saving}
                className="btn bg-teal text-white hover:bg-teal/90 inline-flex items-center gap-2 px-6 py-2.5"
              >
                {saving ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Save className="h-4 w-4" />
                )}
                {saving ? 'Saving...' : 'Save Profile'}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
