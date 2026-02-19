-- Make insurance expiry optional for pilot applications.
ALTER TABLE pilot_applications
  ALTER COLUMN insurance_expiry DROP NOT NULL;
