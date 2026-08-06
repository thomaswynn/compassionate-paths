import { createServerFn } from "@tanstack/react-start";
import { intakeSchema, type IntakeInput } from "./intake-schema";

export const submitIntake = createServerFn({ method: "POST" })
  .inputValidator((data: unknown): IntakeInput => intakeSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("intake_submissions").insert({
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

    return { ok: true as const };
  });
