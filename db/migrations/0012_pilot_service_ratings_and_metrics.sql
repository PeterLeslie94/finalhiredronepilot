BEGIN;

ALTER TABLE pilot_applications
  ADD COLUMN IF NOT EXISTS drone_flight_hours_total integer,
  ADD COLUMN IF NOT EXISTS drones_owned_total integer,
  ADD COLUMN IF NOT EXISTS top_service_ratings_json jsonb NOT NULL DEFAULT '{}'::jsonb;

ALTER TABLE pilots
  ADD COLUMN IF NOT EXISTS drone_flight_hours_total integer,
  ADD COLUMN IF NOT EXISTS drones_owned_total integer,
  ADD COLUMN IF NOT EXISTS top_service_ratings_json jsonb NOT NULL DEFAULT '{}'::jsonb;

ALTER TABLE pilot_applications
  DROP CONSTRAINT IF EXISTS pilot_applications_drone_flight_hours_total_range_ck,
  DROP CONSTRAINT IF EXISTS pilot_applications_drones_owned_total_range_ck,
  DROP CONSTRAINT IF EXISTS pilot_applications_top_service_ratings_object_ck;

ALTER TABLE pilots
  DROP CONSTRAINT IF EXISTS pilots_drone_flight_hours_total_range_ck,
  DROP CONSTRAINT IF EXISTS pilots_drones_owned_total_range_ck,
  DROP CONSTRAINT IF EXISTS pilots_top_service_ratings_object_ck;

ALTER TABLE pilot_applications
  ADD CONSTRAINT pilot_applications_drone_flight_hours_total_range_ck
    CHECK (
      drone_flight_hours_total IS NULL
      OR (drone_flight_hours_total >= 0 AND drone_flight_hours_total <= 500000)
    ),
  ADD CONSTRAINT pilot_applications_drones_owned_total_range_ck
    CHECK (
      drones_owned_total IS NULL
      OR (drones_owned_total >= 0 AND drones_owned_total <= 200)
    ),
  ADD CONSTRAINT pilot_applications_top_service_ratings_object_ck
    CHECK (jsonb_typeof(top_service_ratings_json) = 'object');

ALTER TABLE pilots
  ADD CONSTRAINT pilots_drone_flight_hours_total_range_ck
    CHECK (
      drone_flight_hours_total IS NULL
      OR (drone_flight_hours_total >= 0 AND drone_flight_hours_total <= 500000)
    ),
  ADD CONSTRAINT pilots_drones_owned_total_range_ck
    CHECK (
      drones_owned_total IS NULL
      OR (drones_owned_total >= 0 AND drones_owned_total <= 200)
    ),
  ADD CONSTRAINT pilots_top_service_ratings_object_ck
    CHECK (jsonb_typeof(top_service_ratings_json) = 'object');

COMMIT;
