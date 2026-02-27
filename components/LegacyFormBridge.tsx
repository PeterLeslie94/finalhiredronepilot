'use client';

import { useEffect } from 'react';

import { HONEYPOT_FIELD_NAME } from '@/lib/honeypot';

/**
 * Bridges legacy static forms (Netlify-style sidebar forms) into the new API pipeline
 * without editing every individual service page immediately.
 */
export default function LegacyFormBridge() {
  const getFormName = (form: HTMLFormElement): string =>
    form.getAttribute('name') || form.querySelector('input[name="form-name"]')?.getAttribute('value') || '';

  const isLegacyForm = (form: HTMLFormElement): boolean => {
    const formName = getFormName(form);
    return form.hasAttribute('data-netlify') || formName.includes('quote');
  };

  const ensureHoneypotField = (form: HTMLFormElement) => {
    if (form.querySelector(`input[name="${HONEYPOT_FIELD_NAME}"]`)) return;

    const wrapper = document.createElement('div');
    wrapper.setAttribute('aria-hidden', 'true');
    wrapper.style.position = 'absolute';
    wrapper.style.left = '-10000px';
    wrapper.style.top = 'auto';
    wrapper.style.width = '1px';
    wrapper.style.height = '1px';
    wrapper.style.overflow = 'hidden';

    const label = document.createElement('label');
    label.setAttribute('for', HONEYPOT_FIELD_NAME);
    label.textContent = 'Leave this field blank';

    const input = document.createElement('input');
    input.type = 'text';
    input.name = HONEYPOT_FIELD_NAME;
    input.id = HONEYPOT_FIELD_NAME;
    input.tabIndex = -1;
    input.autocomplete = 'off';

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    form.appendChild(wrapper);
  };

  const showSuccessState = (form: HTMLFormElement) => {
    form.style.display = 'none';

    const existing = form.nextElementSibling;
    if (existing && existing instanceof HTMLElement && existing.dataset.legacyFormSuccess === 'true') {
      return;
    }

    const success = document.createElement('div');
    success.dataset.legacyFormSuccess = 'true';
    success.className = 'rounded-xl border border-emerald-300/40 bg-emerald-50 p-4 text-emerald-900 mt-3';
    success.innerHTML = `
      <p style="font-size:14px;font-weight:600;margin:0;">We are reviewing your enquiry.</p>
      <p style="font-size:14px;line-height:1.45;margin:8px 0 0;">
        Our drone pilots will reach out to you individually as soon as possible with next steps and quotes.
      </p>
    `;
    form.insertAdjacentElement('afterend', success);
  };

  useEffect(() => {
    document.querySelectorAll('form').forEach((node) => {
      if (!(node instanceof HTMLFormElement)) return;
      if (!isLegacyForm(node)) return;
      ensureHoneypotField(node);
    });

    const onSubmit = async (event: Event) => {
      const form = event.target as HTMLFormElement | null;
      if (!form || form.tagName !== 'FORM') return;

      const formName = getFormName(form);
      if (!isLegacyForm(form)) return;

      // Let explicit modern forms handle their own submit.
      if (form.dataset.noLegacyBridge === 'true') return;

      event.preventDefault();
      ensureHoneypotField(form);

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      const honeypot = typeof payload[HONEYPOT_FIELD_NAME] === 'string' ? payload[HONEYPOT_FIELD_NAME] : '';

      const body = {
        [HONEYPOT_FIELD_NAME]: honeypot,
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
        showSuccessState(form);
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
