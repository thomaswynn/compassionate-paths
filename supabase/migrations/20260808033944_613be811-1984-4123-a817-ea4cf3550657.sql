GRANT INSERT ON public.intake_submissions TO anon;
ALTER TABLE public.intake_submissions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Anonymous visitors can submit intake forms" ON public.intake_submissions;
CREATE POLICY "Anonymous visitors can submit intake forms"
ON public.intake_submissions
FOR INSERT
TO anon
WITH CHECK (true);