import { z } from "zod";

const req = (max: number, label: string) =>
  z.string().trim().min(1, { message: `${label} is required` }).max(max);

export const intakeSchema = z.object({
  inmateFullName: req(120, "Full name"),
  cdcrNumber: req(30, "CDCR number"),
  currentAge: z.coerce.number().int().min(18).max(120),
  dateOfBirth: req(20, "Date of birth"),
  yearOfIncarceration: z.coerce.number().int().min(1940).max(new Date().getFullYear()),
  countyOfCommitment: req(60, "County of commitment"),
  prisonFacility: req(120, "Facility"),
  adaCondition: req(2000, "ADA condition"),
  medicalCondition: req(2000, "Medical condition"),
  familyContactName: req(120, "Contact name"),
  relationshipToInmate: req(80, "Relationship"),
  contactPhone: req(30, "Phone number"),
  contactEmail: z.string().trim().email({ message: "Enter a valid email address" }).max(255),
  heardAboutUs: z.string().trim().max(80).optional().default(""),
  additionalNotes: z.string().trim().max(4000).optional().default(""),
});

export type IntakeInput = z.infer<typeof intakeSchema>;
