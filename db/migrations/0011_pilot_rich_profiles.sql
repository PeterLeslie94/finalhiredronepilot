BEGIN;

ALTER TABLE pilot_applications
  ADD COLUMN IF NOT EXISTS base_city text,
  ADD COLUMN IF NOT EXISTS coverage_uk_wide boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS coverage_regions text[],
  ADD COLUMN IF NOT EXISTS coverage_notes text,
  ADD COLUMN IF NOT EXISTS availability_status text,
  ADD COLUMN IF NOT EXISTS google_business_profile_url text,
  ADD COLUMN IF NOT EXISTS linkedin_url text,
  ADD COLUMN IF NOT EXISTS instagram_url text,
  ADD COLUMN IF NOT EXISTS youtube_url text,
  ADD COLUMN IF NOT EXISTS facebook_url text,
  ADD COLUMN IF NOT EXISTS total_projects_completed integer,
  ADD COLUMN IF NOT EXISTS years_experience integer,
  ADD COLUMN IF NOT EXISTS avg_response_hours integer,
  ADD COLUMN IF NOT EXISTS avg_quote_turnaround_hours integer,
  ADD COLUMN IF NOT EXISTS data_delivery_min_days integer,
  ADD COLUMN IF NOT EXISTS data_delivery_max_days integer,
  ADD COLUMN IF NOT EXISTS repeat_hire_rate_pct integer,
  ADD COLUMN IF NOT EXISTS member_since_year integer,
  ADD COLUMN IF NOT EXISTS top_service_slugs text[],
  ADD COLUMN IF NOT EXISTS additional_services_note text,
  ADD COLUMN IF NOT EXISTS equipment_items_json jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS portfolio_items_json jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS skills_levels_json jsonb NOT NULL DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS faq_coverage_answer text,
  ADD COLUMN IF NOT EXISTS faq_qualifications_answer text,
  ADD COLUMN IF NOT EXISTS faq_turnaround_answer text,
  ADD COLUMN IF NOT EXISTS faq_formats_answer text,
  ADD COLUMN IF NOT EXISTS faq_permissions_answer text;

ALTER TABLE pilots
  ADD COLUMN IF NOT EXISTS base_city text,
  ADD COLUMN IF NOT EXISTS coverage_uk_wide boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS coverage_regions text[],
  ADD COLUMN IF NOT EXISTS coverage_notes text,
  ADD COLUMN IF NOT EXISTS availability_status text,
  ADD COLUMN IF NOT EXISTS google_business_profile_url text,
  ADD COLUMN IF NOT EXISTS linkedin_url text,
  ADD COLUMN IF NOT EXISTS instagram_url text,
  ADD COLUMN IF NOT EXISTS youtube_url text,
  ADD COLUMN IF NOT EXISTS facebook_url text,
  ADD COLUMN IF NOT EXISTS total_projects_completed integer,
  ADD COLUMN IF NOT EXISTS years_experience integer,
  ADD COLUMN IF NOT EXISTS avg_response_hours integer,
  ADD COLUMN IF NOT EXISTS avg_quote_turnaround_hours integer,
  ADD COLUMN IF NOT EXISTS data_delivery_min_days integer,
  ADD COLUMN IF NOT EXISTS data_delivery_max_days integer,
  ADD COLUMN IF NOT EXISTS repeat_hire_rate_pct integer,
  ADD COLUMN IF NOT EXISTS member_since_year integer,
  ADD COLUMN IF NOT EXISTS top_service_slugs text[],
  ADD COLUMN IF NOT EXISTS additional_services_note text,
  ADD COLUMN IF NOT EXISTS equipment_items_json jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS portfolio_items_json jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS skills_levels_json jsonb NOT NULL DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS faq_coverage_answer text,
  ADD COLUMN IF NOT EXISTS faq_qualifications_answer text,
  ADD COLUMN IF NOT EXISTS faq_turnaround_answer text,
  ADD COLUMN IF NOT EXISTS faq_formats_answer text,
  ADD COLUMN IF NOT EXISTS faq_permissions_answer text;

ALTER TABLE pilot_applications
  DROP CONSTRAINT IF EXISTS pilot_applications_repeat_hire_rate_pct_range_ck,
  DROP CONSTRAINT IF EXISTS pilot_applications_data_delivery_range_ck,
  DROP CONSTRAINT IF EXISTS pilot_applications_service_count_ck,
  DROP CONSTRAINT IF EXISTS pilot_applications_coverage_regions_allowed_ck;

ALTER TABLE pilots
  DROP CONSTRAINT IF EXISTS pilots_repeat_hire_rate_pct_range_ck,
  DROP CONSTRAINT IF EXISTS pilots_data_delivery_range_ck,
  DROP CONSTRAINT IF EXISTS pilots_service_count_ck,
  DROP CONSTRAINT IF EXISTS pilots_coverage_regions_allowed_ck;

ALTER TABLE pilot_applications
  ADD CONSTRAINT pilot_applications_repeat_hire_rate_pct_range_ck
    CHECK (
      repeat_hire_rate_pct IS NULL
      OR (repeat_hire_rate_pct >= 0 AND repeat_hire_rate_pct <= 100)
    ),
  ADD CONSTRAINT pilot_applications_data_delivery_range_ck
    CHECK (
      data_delivery_min_days IS NULL
      OR data_delivery_max_days IS NULL
      OR data_delivery_min_days <= data_delivery_max_days
    ),
  ADD CONSTRAINT pilot_applications_service_count_ck
    CHECK (
      top_service_slugs IS NULL
      OR cardinality(top_service_slugs) = 6
    ),
  ADD CONSTRAINT pilot_applications_coverage_regions_allowed_ck
    CHECK (
      coverage_regions IS NULL
      OR coverage_regions <@ ARRAY['ENGLAND', 'SCOTLAND', 'WALES', 'NORTHERN_IRELAND']::text[]
    );

ALTER TABLE pilots
  ADD CONSTRAINT pilots_repeat_hire_rate_pct_range_ck
    CHECK (
      repeat_hire_rate_pct IS NULL
      OR (repeat_hire_rate_pct >= 0 AND repeat_hire_rate_pct <= 100)
    ),
  ADD CONSTRAINT pilots_data_delivery_range_ck
    CHECK (
      data_delivery_min_days IS NULL
      OR data_delivery_max_days IS NULL
      OR data_delivery_min_days <= data_delivery_max_days
    ),
  ADD CONSTRAINT pilots_service_count_ck
    CHECK (
      top_service_slugs IS NULL
      OR cardinality(top_service_slugs) = 6
    ),
  ADD CONSTRAINT pilots_coverage_regions_allowed_ck
    CHECK (
      coverage_regions IS NULL
      OR coverage_regions <@ ARRAY['ENGLAND', 'SCOTLAND', 'WALES', 'NORTHERN_IRELAND']::text[]
    );

COMMIT;
