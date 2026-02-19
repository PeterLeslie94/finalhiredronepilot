'use client';

import { useRef, useState } from 'react';

type Step = 1 | 2 | 3;

type PilotFormValues = {
  pilot_name: string;
  business_name: string;
  email: string;
  phone: string;
  website_url: string;
  profile_photo_url: string;
  two_sentence_summary: string;
  insurance_provider: string;
  insurance_expiry: string;
  flyer_id: string;
  operator_id: string;
  licence_level: string;
  consent_to_pilot_terms: boolean;
  pilot_terms_version: string;
  consent_source_page: string;
};

type PilotFormField = keyof PilotFormValues;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LICENCE_OPTIONS = ['A2 CofC', 'GVC'] as const;
const PILOT_TERMS_VERSION = 'pilot-terms-v1';
const HEADSHOT_TARGET_BYTES = 220 * 1024;
const HEADSHOT_SIZES = [512, 448, 384, 320];
const JPEG_QUALITY_LEVELS = [0.84, 0.76, 0.68, 0.6, 0.52, 0.45];

const INITIAL_VALUES: PilotFormValues = {
  pilot_name: '',
  business_name: '',
  email: '',
  phone: '',
  website_url: '',
  profile_photo_url: '',
  two_sentence_summary: '',
  insurance_provider: '',
  insurance_expiry: '',
  flyer_id: '',
  operator_id: '',
  licence_level: '',
  consent_to_pilot_terms: false,
  pilot_terms_version: PILOT_TERMS_VERSION,
  consent_source_page: '/pilots/apply',
};

const STEP_FIELDS: Record<Step, PilotFormField[]> = {
  1: ['pilot_name', 'business_name', 'email', 'phone', 'website_url'],
  2: ['insurance_provider', 'flyer_id', 'operator_id', 'licence_level'],
  3: ['profile_photo_url', 'two_sentence_summary', 'consent_to_pilot_terms'],
};

function normalizeWebsiteInput(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return '';
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function isValidWebsite(raw: string): boolean {
  const normalized = normalizeWebsiteInput(raw);
  if (!normalized) return false;
  try {
    const url = new URL(normalized);
    return Boolean(url.hostname);
  } catch {
    return false;
  }
}

function validateField(field: PilotFormField, values: PilotFormValues): string {
  switch (field) {
    case 'pilot_name':
      return values.pilot_name.trim().length >= 2 ? '' : 'Drone pilot name must be at least 2 characters.';
    case 'business_name':
      return values.business_name.trim().length >= 2 ? '' : 'Business name must be at least 2 characters.';
    case 'email':
      return EMAIL_RE.test(values.email.trim()) ? '' : 'Enter a valid email address.';
    case 'phone':
      return values.phone.trim().length >= 6 ? '' : 'Phone number must be at least 6 characters.';
    case 'website_url':
      if (!values.website_url.trim()) return 'Website URL is required.';
      return isValidWebsite(values.website_url) ? '' : 'Enter a valid website URL.';
    case 'insurance_provider':
      return values.insurance_provider.trim() ? '' : 'Insurance provider is required.';
    case 'insurance_expiry':
      if (!values.insurance_expiry.trim()) return '';
      return Number.isNaN(new Date(values.insurance_expiry).getTime()) ? 'Enter a valid insurance expiry date.' : '';
    case 'flyer_id':
      return values.flyer_id.trim() ? '' : 'Flyer ID is required.';
    case 'operator_id':
      return values.operator_id.trim() ? '' : 'Operator ID is required.';
    case 'licence_level':
      return values.licence_level.trim() ? '' : 'Select at least one licence level.';
    case 'profile_photo_url':
      return values.profile_photo_url.trim() ? '' : 'Please upload a square 1:1 headshot.';
    case 'two_sentence_summary':
      return values.two_sentence_summary.trim().length >= 20
        ? ''
        : 'Profile summary must be at least 20 characters.';
    case 'consent_to_pilot_terms':
      return values.consent_to_pilot_terms
        ? ''
        : 'You must accept the drone pilot terms to continue.';
    case 'pilot_terms_version':
      return values.pilot_terms_version.trim() ? '' : 'Drone pilot terms version is required.';
    case 'consent_source_page':
      return '';
    default:
      return '';
  }
}

function dataUrlSizeBytes(dataUrl: string): number {
  const base64 = dataUrl.split(',')[1] || '';
  return Math.ceil((base64.length * 3) / 4);
}

async function fileToSquareDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      const width = image.naturalWidth || image.width;
      const height = image.naturalHeight || image.height;
      URL.revokeObjectURL(objectUrl);

      if (!width || !height) {
        reject(new Error('Could not read the image size.'));
        return;
      }

      const delta = Math.abs(width - height) / Math.max(width, height);
      if (delta > 0.03) {
        reject(new Error('Headshot must be square (1:1 aspect ratio).'));
        return;
      }

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) {
        reject(new Error('Could not process the image.'));
        return;
      }

      let bestDataUrl = '';
      for (const size of HEADSHOT_SIZES) {
        canvas.width = size;
        canvas.height = size;
        context.clearRect(0, 0, size, size);
        context.drawImage(image, 0, 0, size, size);

        for (const quality of JPEG_QUALITY_LEVELS) {
          const candidate = canvas.toDataURL('image/jpeg', quality);
          bestDataUrl = candidate;
          if (dataUrlSizeBytes(candidate) <= HEADSHOT_TARGET_BYTES) {
            resolve(candidate);
            return;
          }
        }
      }

      // Fall back to the smallest generated variant if target size wasn't reached.
      resolve(bestDataUrl);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error('Invalid image file.'));
    };

    image.src = objectUrl;
  });
}

function stepForField(field: PilotFormField): Step {
  if (STEP_FIELDS[1].includes(field)) return 1;
  if (STEP_FIELDS[2].includes(field)) return 2;
  return 3;
}

export default function PilotApplyPage() {
  const [step, setStep] = useState<Step>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [photoPreview, setPhotoPreview] = useState('');
  const [selectedLicences, setSelectedLicences] = useState<string[]>([]);
  const [values, setValues] = useState<PilotFormValues>(INITIAL_VALUES);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<PilotFormField, string>>>({});

  const photoInputRef = useRef<HTMLInputElement | null>(null);
  const photoDropzoneRef = useRef<HTMLDivElement | null>(null);

  const inputClass = 'form-input';

  const setFieldValue = (field: PilotFormField, value: string | boolean) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setFormError('');
    setSuccessMessage('');
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const setFieldError = (field: PilotFormField, message: string) => {
    setFieldErrors((prev) => ({ ...prev, [field]: message }));
  };

  const focusField = (field: PilotFormField) => {
    if (field === 'profile_photo_url') {
      photoDropzoneRef.current?.focus();
      photoDropzoneRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    const input = document.querySelector<HTMLElement>(`[name="${field}"]`);
    input?.focus();
    input?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const validateFields = (fields: PilotFormField[], sourceValues: PilotFormValues) => {
    let firstInvalid: PilotFormField | null = null;
    const nextErrors: Partial<Record<PilotFormField, string>> = { ...fieldErrors };

    for (const field of fields) {
      const error = validateField(field, sourceValues);
      if (error) {
        nextErrors[field] = error;
        if (!firstInvalid) firstInvalid = field;
      } else {
        delete nextErrors[field];
      }
    }

    setFieldErrors(nextErrors);
    return { valid: firstInvalid === null, firstInvalid };
  };

  const goNextStep = () => {
    const { valid, firstInvalid } = validateFields(STEP_FIELDS[step], values);
    if (!valid && firstInvalid) {
      focusField(firstInvalid);
      return;
    }
    if (step < 3) setStep((prev) => (prev + 1) as Step);
  };

  const goPrevStep = () => {
    if (step > 1) setStep((prev) => (prev - 1) as Step);
  };

  const toggleLicence = (licence: (typeof LICENCE_OPTIONS)[number]) => {
    const nextSelection = selectedLicences.includes(licence)
      ? selectedLicences.filter((item) => item !== licence)
      : [...selectedLicences, licence];

    setSelectedLicences(nextSelection);
    setFieldValue('licence_level', nextSelection.join(', '));
  };

  const handlePhotoFile = async (file?: File) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setFieldError('profile_photo_url', 'Headshot must be an image file (JPG, PNG, or WEBP).');
      return;
    }

    try {
      const dataUrl = await fileToSquareDataUrl(file);
      setPhotoPreview(dataUrl);
      setFieldValue('profile_photo_url', dataUrl);
    } catch (photoError) {
      setFieldError(
        'profile_photo_url',
        photoError instanceof Error ? photoError.message : 'Could not process headshot.',
      );
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError('');
    setSuccessMessage('');

    const allFields = [...STEP_FIELDS[1], ...STEP_FIELDS[2], ...STEP_FIELDS[3]];
    const payload: PilotFormValues = {
      ...values,
      consent_source_page: typeof window !== 'undefined' ? window.location.pathname : values.consent_source_page,
      pilot_terms_version: values.pilot_terms_version || PILOT_TERMS_VERSION,
    };

    const { valid, firstInvalid } = validateFields(allFields, payload);
    if (!valid && firstInvalid) {
      setStep(stepForField(firstInvalid));
      focusField(firstInvalid);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/pilot-applications/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const body = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(body.error || 'Failed to submit application');
      }

      setSuccessMessage(
        'Application received. We review each profile and will contact you if we need anything else.',
      );
      setValues(INITIAL_VALUES);
      setFieldErrors({});
      setPhotoPreview('');
      setSelectedLicences([]);
      setStep(1);
    } catch (submitError) {
      setFormError(submitError instanceof Error ? submitError.message : 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepTitle =
    step === 1
      ? 'Business Details'
      : step === 2
        ? 'Compliance Details'
        : 'Profile & Headshot';

  return (
    <section className="-mt-[104px] bg-teal pt-[152px] pb-20 md:pt-[176px] md:pb-24">
      <div className="container max-w-4xl">
        <div className="grid gap-3 sm:grid-cols-3 mb-6">
          <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-wide text-white/60">Application time</p>
            <p className="text-white font-semibold">~3 minutes</p>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-wide text-white/60">Cost</p>
            <p className="text-white font-semibold">No payment required</p>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-wide text-white/60">Review process</p>
            <p className="text-white font-semibold">Admin checked before approval</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Drone Pilot Application</h1>
          <p className="text-white/70 mb-6">
            Join our independent drone pilot network. Complete the steps below and we will review
            your profile.
          </p>

          <div className="mb-6">
            <div className="flex items-center justify-between text-sm text-white/80 mb-2">
              <span>{stepTitle}</span>
              <span>
                Step {step} of 3
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((value) => (
                <div key={value} className={`h-1.5 rounded-full ${value <= step ? 'bg-gold' : 'bg-white/20'}`} />
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {step === 1 ? (
              <div className="space-y-4">
                <div>
                  <input
                    name="pilot_name"
                    className={inputClass}
                    placeholder="Drone Pilot Name *"
                    value={values.pilot_name}
                    onChange={(event) => setFieldValue('pilot_name', event.target.value)}
                    onBlur={() => setFieldError('pilot_name', validateField('pilot_name', values))}
                    required
                  />
                  {fieldErrors.pilot_name ? <p className="text-red-200 text-sm mt-1">{fieldErrors.pilot_name}</p> : null}
                </div>

                <div>
                  <input
                    name="business_name"
                    className={inputClass}
                    placeholder="Business Name *"
                    value={values.business_name}
                    onChange={(event) => setFieldValue('business_name', event.target.value)}
                    onBlur={() => setFieldError('business_name', validateField('business_name', values))}
                    required
                  />
                  {fieldErrors.business_name ? (
                    <p className="text-red-200 text-sm mt-1">{fieldErrors.business_name}</p>
                  ) : null}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    className={inputClass}
                    placeholder="Email *"
                    value={values.email}
                    onChange={(event) => setFieldValue('email', event.target.value)}
                    onBlur={() => setFieldError('email', validateField('email', values))}
                    required
                  />
                  {fieldErrors.email ? <p className="text-red-200 text-sm mt-1">{fieldErrors.email}</p> : null}
                </div>

                <div>
                  <input
                    name="phone"
                    className={inputClass}
                    placeholder="Phone *"
                    value={values.phone}
                    onChange={(event) => setFieldValue('phone', event.target.value)}
                    onBlur={() => setFieldError('phone', validateField('phone', values))}
                    required
                  />
                  {fieldErrors.phone ? <p className="text-red-200 text-sm mt-1">{fieldErrors.phone}</p> : null}
                </div>

                <div>
                  <input
                    type="url"
                    name="website_url"
                    className={inputClass}
                    placeholder="Website URL *"
                    value={values.website_url}
                    onChange={(event) => setFieldValue('website_url', event.target.value)}
                    onBlur={() => {
                      const normalized = normalizeWebsiteInput(values.website_url);
                      if (normalized) setFieldValue('website_url', normalized);
                      setFieldError('website_url', validateField('website_url', { ...values, website_url: normalized }));
                    }}
                    required
                  />
                  <p className="text-white/60 text-xs mt-1">Use your business website (we accept URLs without https).</p>
                  {fieldErrors.website_url ? <p className="text-red-200 text-sm mt-1">{fieldErrors.website_url}</p> : null}
                </div>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="space-y-4">
                <div>
                  <input
                    name="insurance_provider"
                    className={inputClass}
                    placeholder="Insurance Provider *"
                    value={values.insurance_provider}
                    onChange={(event) => setFieldValue('insurance_provider', event.target.value)}
                    onBlur={() => setFieldError('insurance_provider', validateField('insurance_provider', values))}
                    required
                  />
                  {fieldErrors.insurance_provider ? (
                    <p className="text-red-200 text-sm mt-1">{fieldErrors.insurance_provider}</p>
                  ) : null}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <input
                      name="flyer_id"
                      className={inputClass}
                      placeholder="Flyer ID *"
                      value={values.flyer_id}
                      onChange={(event) => setFieldValue('flyer_id', event.target.value)}
                      onBlur={() => setFieldError('flyer_id', validateField('flyer_id', values))}
                      required
                    />
                    <p className="text-white/60 text-xs mt-1">CAA-issued flyer ID.</p>
                    {fieldErrors.flyer_id ? <p className="text-red-200 text-sm mt-1">{fieldErrors.flyer_id}</p> : null}
                  </div>

                  <div>
                    <input
                      name="operator_id"
                      className={inputClass}
                      placeholder="Operator ID *"
                      value={values.operator_id}
                      onChange={(event) => setFieldValue('operator_id', event.target.value)}
                      onBlur={() => setFieldError('operator_id', validateField('operator_id', values))}
                      required
                    />
                    <p className="text-white/60 text-xs mt-1">CAA-issued operator ID.</p>
                    {fieldErrors.operator_id ? (
                      <p className="text-red-200 text-sm mt-1">{fieldErrors.operator_id}</p>
                    ) : null}
                  </div>
                </div>

                <div className="rounded-xl border border-white/20 bg-white/5 p-4 space-y-3">
                  <p className="text-white font-semibold">Licence Level *</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {LICENCE_OPTIONS.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-white/90"
                      >
                        <input
                          type="checkbox"
                          checked={selectedLicences.includes(option)}
                          onChange={() => toggleLicence(option)}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                  {fieldErrors.licence_level ? (
                    <p className="text-red-200 text-sm mt-1">{fieldErrors.licence_level}</p>
                  ) : null}
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div className="space-y-4">
                <div className="space-y-3">
                  <p className="text-white font-semibold text-sm">Drone Pilot Headshot (1:1 square) *</p>
                  <input
                    ref={photoInputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    className="hidden"
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      void handlePhotoFile(file);
                      event.currentTarget.value = '';
                    }}
                  />
                  <div
                    ref={photoDropzoneRef}
                    role="button"
                    tabIndex={0}
                    onClick={() => photoInputRef.current?.click()}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        photoInputRef.current?.click();
                      }
                    }}
                    onDragOver={(event) => {
                      event.preventDefault();
                      setDragActive(true);
                    }}
                    onDragLeave={(event) => {
                      event.preventDefault();
                      setDragActive(false);
                    }}
                    onDrop={(event) => {
                      event.preventDefault();
                      setDragActive(false);
                      const file = event.dataTransfer.files?.[0];
                      void handlePhotoFile(file);
                    }}
                    className={`rounded-xl border-2 border-dashed p-5 text-center cursor-pointer transition-colors ${
                      dragActive ? 'border-gold bg-white/10' : 'border-white/35 bg-white/5'
                    }`}
                  >
                    {photoPreview ? (
                      <div className="mx-auto h-40 w-40 overflow-hidden rounded-xl border border-white/20">
                        <img src={photoPreview} alt="Drone pilot headshot preview" className="h-full w-full object-cover" />
                      </div>
                    ) : (
                      <div className="text-white/80">
                        <p className="font-medium">Drag and drop your headshot here</p>
                        <p className="text-sm text-white/60 mt-1">
                          Or click to select. Square 1:1 only (JPG, PNG, WEBP). Auto-compressed on upload.
                        </p>
                      </div>
                    )}
                  </div>

                  {photoPreview ? (
                    <button
                      type="button"
                      onClick={() => {
                        setPhotoPreview('');
                        setFieldValue('profile_photo_url', '');
                      }}
                      className="text-sm text-gold hover:text-gold-light transition-colors"
                    >
                      Remove headshot
                    </button>
                  ) : null}

                  {fieldErrors.profile_photo_url ? (
                    <p className="text-red-200 text-sm mt-1">{fieldErrors.profile_photo_url}</p>
                  ) : null}
                </div>

                <div>
                  <textarea
                    name="two_sentence_summary"
                    className={`${inputClass} resize-none`}
                    rows={5}
                    placeholder="Two sentence summary *"
                    value={values.two_sentence_summary}
                    onChange={(event) => setFieldValue('two_sentence_summary', event.target.value)}
                    onBlur={() => setFieldError('two_sentence_summary', validateField('two_sentence_summary', values))}
                    required
                  />
                  <p className="text-white/60 text-xs mt-1">
                    Include key sectors, typical jobs, and what makes your service stand out.
                  </p>
                  {fieldErrors.two_sentence_summary ? (
                    <p className="text-red-200 text-sm mt-1">{fieldErrors.two_sentence_summary}</p>
                  ) : null}
                </div>

                <div className="rounded-xl border border-white/20 bg-white/5 p-4">
                  <p className="text-white/80 text-sm">
                    We assess applications for marketplace fit. We may approve, request more
                    information, or decline an application.
                  </p>
                </div>

                <label className="rounded-xl border border-white/20 bg-white/5 p-4 flex items-start gap-3 text-white/85 text-sm">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={values.consent_to_pilot_terms}
                    onChange={(event) => setFieldValue('consent_to_pilot_terms', event.target.checked)}
                    required
                  />
                  <span>
                    I confirm I operate as an independent drone pilot and accept the{' '}
                    <a href="/pilot-terms" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                      Drone Pilot Terms
                    </a>{' '}
                    and{' '}
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                      Privacy Policy
                    </a>
                    . I understand HireDronePilot is an intro marketplace and facilitator only,
                    performs basic document checks only, and does not verify authenticity of uploaded
                    documents.
                  </span>
                </label>
                {fieldErrors.consent_to_pilot_terms ? (
                  <p className="text-red-200 text-sm mt-1">{fieldErrors.consent_to_pilot_terms}</p>
                ) : null}
              </div>
            ) : null}

            {formError ? <p className="text-red-200 text-sm">{formError}</p> : null}
            {successMessage ? <p className="text-green-200 text-sm">{successMessage}</p> : null}

            <div className="sticky bottom-3 md:bottom-auto md:static z-20 bg-teal/95 backdrop-blur rounded-xl border border-white/10 p-3">
              <div
                className={`flex flex-col-reverse gap-3 sm:flex-row ${
                  step === 1 ? 'sm:justify-end' : 'sm:justify-between'
                }`}
              >
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={goPrevStep}
                    className="btn btn-outline-white sm:w-auto w-full disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    Back
                  </button>
                ) : null}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={goNextStep}
                    className="btn btn-primary btn-shimmer sm:w-auto w-full"
                    disabled={isSubmitting}
                  >
                    Next
                  </button>
                ) : (
                  <button className="btn btn-primary btn-shimmer sm:w-auto w-full" disabled={isSubmitting} type="submit">
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
