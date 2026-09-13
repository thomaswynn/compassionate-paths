import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { intakeSchema, type IntakeInput } from "./intake-schema";

export const submitIntake = createServerFn({ method: "POST" })
  .inputValidator((data: unknown): IntakeInput => intakeSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env["SUPABASE_URL"]!;
    const key = process.env["SUPABASE_SERVICE_ROLE_KEY"] ?? process.env["SUPABASE_ANON_KEY"] ?? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmeW52bHNqdG13YnhvaXl0eGl1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4Njk3MzczMiwiZXhwIjoyMTAyNTQ5NzMyfQ.AtYDNoA4Sev1zQ9zCAtLT54pKxufgwJ5HuA15KWX_3s";

    const supabasePublic = createClient<Database>(url, key, {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const headers = new Headers(init?.headers);
          if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
            headers.delete("Authorization");
          }
          headers.set("apikey", key);
          return fetch(input, { ...init, headers });
        },
      },
    });

    const { error } = await supabasePublic.from("intake_submissions").insert({
      inmate_full_name: data.inmateFullName,
      cdcr_number: data.cdcrNumber,
      current_age: data.currentAge,
      date_of_birth: data.dateOfBirth,
      year_of_incarceration: data.yearOfIncarceration,
      county_of_commitment: data.countyOfCommitment,
      prison_facility: data.prisonFacility,
      ada_condition: data.adaCondition,
      medical_condition: data.medicalCondition,
      family_contact_name: data.familyContactName,
      relationship_to_inmate: data.relationshipToInmate,
      contact_phone: data.contactPhone,
      contact_email: data.contactEmail,
      heard_about_us: data.heardAboutUs || null,
      additional_notes: data.additionalNotes || null,
    });

    if (error) {
      console.error("Intake insert failed", error);
      throw new Error("We could not save your intake form. Please call (510) 289-6801.");
    }

    // Let the family/client know their submission was received. This runs
    // after the insert above succeeds, and a failure here should not block
    // the form submission since the data was already saved.
    const resendApiKey = process.env["RESEND_API_KEY"];
    if (resendApiKey) {
      try {
        // Send confirmation email to family
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "The Revive Project <noreply@revivifyfoundation.com>",
            to: data.contactEmail,
            subject: "We received your intake form",
            text: `Hi ${data.familyContactName},

Thank you for submitting an intake form to The Revive Project on behalf of ${data.inmateFullName}. We've received your information, and someone from our team will be in touch within 1-2 business days.

If you have any urgent questions in the meantime, you can reach us at (510) 289-6801.

Thank you,
The Revive Project`,
          }),
        });

        // Send admin notification to Thomas
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "The Revive Project <noreply@revivifyfoundation.com>",
            to: "thomaswynn.ca@gmail.com",
            subject: `New Intake: ${data.inmateFullName} (${data.cdcrNumber})`,
            text: `New intake submission received.

INMATE:
Name: ${data.inmateFullName}
CDCR #: ${data.cdcrNumber}
Age: ${data.currentAge}
DOB: ${data.dateOfBirth}
Prison: ${data.prisonFacility}
County: ${data.countyOfCommitment}

FAMILY CONTACT:
Name: ${data.familyContactName}
Relationship: ${data.relationshipToInmate}
Phone: ${data.contactPhone}
Email: ${data.contactEmail}

MEDICAL INFO:
ADA Condition: ${data.adaCondition}
Medical Condition: ${data.medicalCondition}

ADDITIONAL NOTES:
${data.additionalNotes || "(none)"}

How they heard about us: ${data.heardAboutUs || "(not specified)"}

---
Log in to your Supabase dashboard to view full details.`,
          }),
        });
      } catch (emailError) {
        console.error("Email notification failed", emailError);
      }
    }

    return { ok: true as const };
  });
