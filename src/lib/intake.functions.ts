import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { intakeSchema, type IntakeInput } from "./intake-schema";

export const submitIntake = createServerFn({ method: "POST" })
  .inputValidator((data: unknown): IntakeInput => intakeSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env["SUPABASE_URL"]!;
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"] ?? process.env["SUPABASE_ANON_KEY"]!;

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
      } catch (emailError) {
        console.error("Confirmation email failed to send", emailError);
      }
    }

    return { ok: true as const };
  });
