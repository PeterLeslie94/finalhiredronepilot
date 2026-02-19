'use client';

import { useEffect } from 'react';

/**
 * Bridges legacy static forms (Netlify-style sidebar forms) into the new API pipeline
 * without editing every individual service page immediately.
 */
export default function LegacyFormBridge() {
  useEffect(() => {
    const onSubmit = async (event: Event) => {
      const form = event.target as HTMLFormElement | null;
      if (!form || form.tagName !== 'FORM') return;

      const formName = form.getAttribute('name') || form.querySelector('input[name="form-name"]')?.getAttribute('value') || '';
      const hasLegacyMarker = form.hasAttribute('data-netlify') || formName.includes('quote');
      if (!hasLegacyMarker) return;

      // Let explicit modern forms handle their own submit.
      if (form.dataset.noLegacyBridge === 'true') return;

      event.preventDefault();

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      const body = {
        name: payload.name || '',
        email: payload.email || '',
        phone: payload.phone || '',
        job_details: payload.job_details || payload.message || '',
        message: payload.message || payload.job_details || '',
        service_slug: payload.service_slug || 'drone-survey',
        date_flexibility: payload.date_flexibility || 'ASAP',
        site_location_text: payload.site_location_text || 'Not provided',
        postcode: payload.postcode || 'UNKNOWN',
        consent_share_with_pilots: true,
        consent_policy_version: 'marketplace-consent-v2',
        marketplace_terms_version: 'marketplace-terms-v1',
        source_form: String(payload['form-name'] || formName || 'legacy-quote-form'),
        source_page: window.location.pathname,
      };

      try {
        const response = await fetch('/api/enquiries/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        if (!response.ok) {
          throw new Error('Failed to submit enquiry');
        }
        window.location.href = '/thank-you';
      } catch (error) {
        // This keeps behavior visible for operators while we transition legacy forms.
        // eslint-disable-next-line no-console
        console.error('Legacy form bridge submission error:', error);
      }
    };

    document.addEventListener('submit', onSubmit, true);
    return () => {
      document.removeEventListener('submit', onSubmit, true);
    };
  }, []);

  return null;
}
