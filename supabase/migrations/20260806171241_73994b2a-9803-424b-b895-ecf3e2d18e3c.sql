CREATE TABLE public.intake_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  inmate_full_name text NOT NULL,
  cdcr_number text NOT NULL,
  current_age integer,
  date_of_birth date,
  year_of_incarceration integer,
  county_of_commitment text NOT NULL,
  prison_facility text NOT NULL,
  ada_condition text NOT NULL,
  medical_condition text NOT NULL,
  family_contact_name text NOT NULL,
  relationship_to_inmate text NOT NULL,
  contact_phone text NOT NULL,
  contact_email text NOT NULL,
  heard_about_us text,
  additional_notes text
);

GRANT ALL ON public.intake_submissions TO service_role;

ALTER TABLE public.intake_submissions ENABLE ROW LEVEL SECURITY;