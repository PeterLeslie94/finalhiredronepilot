'use client';

import { useMemo, useState } from 'react';

type QuoteMultiStepFormProps = {
  sourceForm: string;
  sourcePage?: string;
  submitLabel?: string;
  compact?: boolean;
  onSuccess?: () => void;
};

type DateFlexibility = 'FIXED' | 'WITHIN_WEEK' | 'WITHIN_MONTH' | 'ASAP';

const CONSENT_POLICY_VERSION = 'marketplace-consent-v2';
const MARKETPLACE_TERMS_VERSION = 'marketplace-terms-v1';

const serviceOptions = [
  { value: 'drone-survey', label: 'Drone Survey' },
  { value: 'drone-surveys', label: 'Drone Surveys' },
  { value: 'drone-topographical-survey', label: 'Drone Topographical Survey' },
  { value: 'drone-lidar-mapping', label: 'Drone LiDAR Mapping' },
  { value: 'drone-photogrammetry-survey', label: 'Drone Photogrammetry Survey' },
  { value: 'drone-point-cloud-mapping', label: 'Drone Point Cloud Mapping' },
  { value: 'drone-site-survey', label: 'Drone Site Survey' },
  { value: 'drone-land-survey', label: 'Drone Land Survey' },
  { value: 'drone-boundary-survey', label: 'Drone Boundary Survey' },
  { value: 'drone-corridor-mapping', label: 'Drone Corridor Mapping' },
  { value: 'drone-elevation-survey', label: 'Drone Elevation Survey' },
  { value: 'drone-as-built-survey', label: 'Drone As-Built Survey' },
  { value: 'drone-setting-out-survey', label: 'Drone Setting Out Survey' },
  { value: 'drone-bathymetric-survey', label: 'Drone Bathymetric Survey' },
  { value: 'drone-roof-inspection', label: 'Drone Roof Inspection' },
  { value: 'drone-facade-survey', label: 'Drone Facade Survey' },
  { value: 'drone-bridge-inspection', label: 'Drone Bridge Inspection' },
  { value: 'drone-measured-building-survey', label: 'Drone Measured Building Survey' },
  { value: 'drone-thermal-imaging', label: 'Drone Thermal Imaging' },
  { value: 'drone-confined-space-inspection', label: 'Drone Confined Space Inspection' },
  { value: 'drone-construction-monitoring', label: 'Drone Construction Monitoring' },
  { value: 'drone-road-survey', label: 'Drone Road Survey' },
  { value: 'drone-railway-survey', label: 'Drone Railway Survey' },
  { value: 'drone-utility-survey', label: 'Drone Utility Survey' },
  { value: 'drone-industrial-survey', label: 'Drone Industrial Survey' },
  { value: 'drone-volumetric-survey', label: 'Drone Volumetric Survey' },
  { value: 'drone-mining-survey', label: 'Drone Mining Survey' },
  { value: 'drone-quarry-survey', label: 'Drone Quarry Survey' },
  { value: 'drone-landfill-survey', label: 'Drone Landfill Survey' },
  { value: 'drone-solar-survey', label: 'Drone Solar Survey' },
  { value: 'drone-wind-farm-survey', label: 'Drone Wind Farm Survey' },
  { value: 'drone-agricultural-survey', label: 'Drone Agricultural Survey' },
  { value: 'drone-environmental-survey', label: 'Drone Environmental Survey' },
  { value: 'drone-forestry-survey', label: 'Drone Forestry Survey' },
  { value: 'drone-coastal-survey', label: 'Drone Coastal Survey' },
  { value: 'drone-flood-risk-survey', label: 'Drone Flood Risk Survey' },
  { value: 'drone-archaeological-survey', label: 'Drone Archaeological Survey' },
  { value: 'drone-estate-survey', label: 'Drone Estate Survey' },
  { value: 'drone-gas-detection', label: 'Drone Gas Detection' },
  { value: 'drone-crop-spraying', label: 'Drone Crop Spraying' },
  { value: 'drone-ground-penetrating-radar', label: 'Drone Ground Penetrating Radar' },
  { value: 'drone-sonar-survey', label: 'Drone Sonar Survey' },
  { value: 'drone-water-quality-assessment', label: 'Drone Water Quality Assessment' },
  { value: 'drone-photography', label: 'Drone Photography' },
  { value: 'drone-real-estate-photography', label: 'Drone Real Estate Photography' },
  { value: 'drone-wedding-photography', label: 'Drone Wedding Photography' },
  { value: 'drone-videographer', label: 'Drone Videographer' },
  { value: 'other', label: 'Other' },
];

const dateFlexibilityOptions: Array<{ value: DateFlexibility; label: string }> = [
  { value: 'ASAP', label: 'As soon as possible' },
  { value: 'WITHIN_WEEK', label: 'Within a week' },
  { value: 'WITHIN_MONTH', label: 'Within a month' },
  { value: 'FIXED', label: 'Fixed date' },
];

export default function QuoteMultiStepForm({
  sourceForm,
  sourcePage,
  submitLabel = 'Submit Enquiry',
  compact = false,
  onSuccess,
}: QuoteMultiStepFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_slug: serviceOptions[0]?.value ?? 'drone-survey',
    date_needed: '',
    date_flexibility: 'ASAP' as DateFlexibility,
    site_location_text: '',
    postcode: '',
    job_details: '',
    consent_share_with_pilots: false,
  });

  const progressText = useMemo(() => `Step ${step} of 3`, [step]);

  const update = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const canMoveStep1 =
    formData.name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()) &&
    formData.phone.trim().length >= 6;

  const canMoveStep2 =
    formData.service_slug &&
    (formData.date_flexibility !== 'FIXED' || Boolean(formData.date_needed));

  const canSubmit =
    formData.job_details.trim().length >= 10 &&
    formData.consent_share_with_pilots;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) {
      setError('Please complete all required fields and consent.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    const payload = {
      ...formData,
      source_form: sourceForm,
      source_page: sourcePage || (typeof window !== 'undefined' ? window.location.pathname : ''),
      consent_policy_version: CONSENT_POLICY_VERSION,
      marketplace_terms_version: MARKETPLACE_TERMS_VERSION,
      date_needed: formData.date_flexibility === 'FIXED' ? formData.date_needed || null : null,
    };

    try {
      const response = await fetch('/api/enquiries/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error || 'Failed to submit enquiry');
      }

      if (onSuccess) {
        onSuccess();
        return;
      }

      window.location.href = '/thank-you';
    } catch (submitError) {
      const message = submitError instanceof Error ? submitError.message : 'Failed to submit';
      setError(message);
      setIsSubmitting(false);
    }
  };

  const inputClass = compact ? 'form-input text-sm py-2.5' : 'form-input';
  const controlGap = compact ? 'space-y-3' : 'space-y-4';

  return (
    <form onSubmit={handleSubmit} className={controlGap} data-no-legacy-bridge="true">
      <div className="text-white/70 text-xs uppercase tracking-wide">{progressText}</div>

      {step === 1 && (
        <>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(event) => update('name', event.target.value)}
            placeholder="Your Name *"
            minLength={2}
            maxLength={100}
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(event) => update('email', event.target.value)}
            placeholder="Email Address *"
            required
            className={inputClass}
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(event) => update('phone', event.target.value)}
            placeholder="Phone Number *"
            required
            className={inputClass}
          />
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={!canMoveStep1}
              className="btn btn-primary btn-shimmer w-full disabled:opacity-60"
            >
              Next
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <select
            name="service_slug"
            value={formData.service_slug}
            onChange={(event) => update('service_slug', event.target.value)}
            className={inputClass}
          >
            {serviceOptions.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>

          <div className="rounded-lg border border-white/20 bg-white/5 p-3 space-y-2">
            <p className="text-white/80 text-sm">When do you need this?</p>
            {dateFlexibilityOptions.map((option) => (
              <div key={option.value}>
                <label className="flex items-center gap-2 text-white/90 text-sm">
                  <input
                    type="radio"
                    name="date_flexibility"
                    value={option.value}
                    checked={formData.date_flexibility === option.value}
                    onChange={(event) => {
                      const value = event.target.value as DateFlexibility;
                      update('date_flexibility', value);
                      if (value !== 'FIXED') {
                        update('date_needed', '');
                      }
                    }}
                  />
                  <span>{option.label}</span>
                </label>
                {option.value === 'FIXED' && formData.date_flexibility === 'FIXED' ? (
                  <input
                    type="date"
                    name="date_needed"
                    value={formData.date_needed}
                    onChange={(event) => update('date_needed', event.target.value)}
                    className={`${inputClass} mt-2`}
                    required
                  />
                ) : null}
              </div>
            ))}
          </div>

          <input
            type="text"
            name="site_location_text"
            value={formData.site_location_text}
            onChange={(event) => update('site_location_text', event.target.value)}
            placeholder="Location / Site Address (optional)"
            className={inputClass}
          />

          <input
            type="text"
            name="postcode"
            value={formData.postcode}
            onChange={(event) => update('postcode', event.target.value)}
            placeholder="Postcode (optional)"
            className={inputClass}
          />

          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(1)} className="btn btn-outline-white w-1/2">
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              disabled={!canMoveStep2}
              className="btn btn-primary btn-shimmer w-1/2 disabled:opacity-60"
            >
              Next
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="rounded-xl border border-white/20 bg-white/5 p-4 text-white/85 text-sm space-y-2">
            <p className="font-semibold text-white">Data sharing summary</p>
            <p>
              We share enquiry data with selected independent drone pilots after admin review and
              approval of your enquiry.
            </p>
            <p>
              Shared fields: name, email, phone, selected service, timing details, location/postcode,
              and job details.
            </p>
          </div>

          <textarea
            name="job_details"
            rows={5}
            maxLength={4000}
            value={formData.job_details}
            onChange={(event) => update('job_details', event.target.value)}
            placeholder="Tell us about your job requirements, access constraints, deliverables, and timelines... *"
            className={`${inputClass} resize-none`}
            required
          />

          <label className="flex items-start gap-3 text-white/80 text-sm">
            <input
              type="checkbox"
              checked={formData.consent_share_with_pilots}
              onChange={(event) => update('consent_share_with_pilots', event.target.checked)}
              className="mt-1"
              required
            />
            <span>
              I agree to HireDronePilot sharing this enquiry with independent drone pilots. I
              understand HireDronePilot is an intro marketplace only, acts as a facilitator and
              record keeper only, is not party to the service contract, and is not responsible for
              drone pilot-delivered work outcomes. I agree to the{' '}
              <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/marketplace-terms" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                Marketplace Terms
              </a>
              .
            </span>
          </label>

          {error ? <p className="text-red-200 text-sm">{error}</p> : null}

          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(2)} className="btn btn-outline-white w-1/2">
              Back
            </button>
            <button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className="btn btn-primary btn-shimmer w-1/2 disabled:opacity-60"
            >
              {isSubmitting ? 'Submitting...' : submitLabel}
            </button>
          </div>
        </>
      )}
    </form>
  );
}
