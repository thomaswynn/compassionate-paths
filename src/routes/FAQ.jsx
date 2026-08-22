import { useState } from "react";
import { Helmet } from "react-helmet";

const faqs = [
  {
    question: "What is California compassionate release?",
    answer:
      "California compassionate release — formally called Medical Parole or Elderly Parole — allows seriously ill or elderly incarcerated people to be released before the end of their sentence when continued incarceration no longer serves a penological purpose. The primary statutes are California Penal Code § 1172.1 (medical parole for permanent incapacitation) and § 1172.2 (elderly parole for those 60+ who have served 25+ years). The Revive Project helps families and incarcerated individuals navigate both pathways.",
  },
  {
    question: "How do I get help with a compassionate release petition in California?",
    answer:
      "Contact The Revive Project directly by phone or email. We review the incarcerated person's medical records, CDCR file, and sentence information to determine eligibility, then prepare the full petition package — including the Medical & ADA Eligibility Summary, reentry plan, and legislative outreach — on the family's behalf. Our initial consultation is free.",
  },
  {
    question: "Who qualifies for compassionate release in California?",
    answer:
      "Under PC § 1172.1, a person qualifies if they are permanently medically incapacitated to the point of being unable to perform any work function and unable to pose a threat to public safety. This includes serious chronic illness, terminal diagnosis, severe functional decline, and ADA-qualifying disabilities. Under PC § 1172.2 (Elderly Parole), a person must be 60 years or older and have served at least 25 years of their current sentence. You do not need to be at end-of-life — substantial limitation in major life activities is sufficient.",
  },
  {
    question: "What is CDCR medical parole and how is it different from compassionate release?",
    answer:
      "CDCR Medical Parole (PC § 1172.1) and Compassionate Release are often used interchangeably in California. Both refer to early release based on permanent medical incapacitation. The process runs through the California Department of Corrections and Rehabilitation (CDCR), requires a Chief Medical Executive evaluation, and is reviewed by the Board of Parole Hearings. The Revive Project works directly within this process to advocate for qualifying individuals.",
  },
  {
    question: "What ADA accommodations are available to incarcerated people in California?",
    answer:
      "Incarcerated people with disabilities are entitled to ADA accommodations under Title II of the Americans with Disabilities Act and the Armstrong v. Newsom consent decree. These include mobility aids (wheelchairs, walkers, orthotics), hearing aids, CPAP machines, accessible housing assignments, and modified program participation. Documented ADA disability status also supports compassionate release eligibility under PC § 1172.2(b)(2). The Revive Project prepares ADA Eligibility Summaries that document qualifying disabilities for use in petitions.",
  },
  {
    question: "How long does the compassionate release process take in California?",
    answer:
      "Timeline varies depending on the pathway and the individual facility's responsiveness. Once a petition is submitted to the Chief Medical Executive, CDCR has 30 days to act under PC § 1172.1. However, preparation of a strong petition — gathering medical records, completing the reentry plan, and conducting legislative outreach — typically takes 2 to 6 weeks. The Revive Project works to move as quickly as possible given the urgent medical circumstances of most clients.",
  },
  {
    question: "Can a Three Strikes sentence be reconsidered for compassionate release?",
    answer:
      "Yes. Three Strikes sentences do not automatically bar compassionate release. Under PC § 1172.1, the standard is permanent medical incapacitation and inability to pose a public safety threat — not the underlying conviction. For individuals convicted of non-violent third strikes, additional resentencing pathways may also be available under Proposition 36 (2024). The Revive Project evaluates both routes and advises families on the strongest available option.",
  },
  {
    question: "What does The Revive Project do that a lawyer doesn't?",
    answer:
      "The Revive Project is a compassionate release consulting firm, not a law firm. We focus exclusively on the advocacy, documentation, and case-building side of the process: medical record analysis, ADA eligibility summaries, reentry plan development, legislative outreach, and physician engagement. Many families find that a well-prepared petition submitted through a dedicated advocate moves faster and more effectively than waiting for overstretched public defenders or expensive private attorneys. We also work alongside attorneys when legal representation is in place.",
  },
  {
    question: "How much does compassionate release advocacy cost?",
    answer:
      "The Revive Project operates on a sliding-scale and case-by-case basis to ensure cost is not a barrier for families of incarcerated people with serious medical conditions. Contact us directly for a free initial consultation and we will discuss a fee structure based on your situation.",
  },
  {
    question: "What is the difference between Elderly Parole and Medical Parole in California?",
    answer:
      "Elderly Parole (PC § 1172.2) applies to people who are 60 or older and have served 25 or more years. It focuses on age-based rehabilitation and the reduced risk posed by elderly incarcerated people. Medical Parole (PC § 1172.1) applies at any age and requires documented permanent medical incapacitation. Both result in release under parole supervision. The Revive Project evaluates which pathway — or both — applies to your loved one's situation.",
  },
];

// JSON-LD schema for Google FAQ rich results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <Helmet>
        <title>
          Compassionate Release FAQ — California Medical Parole Help | The
          Revive Project
        </title>
        <meta
          name="description"
          content="Answers to common questions about California compassionate release, CDCR medical parole eligibility, ADA accommodations for prisoners, and how The Revive Project can help your family."
        />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main style={{ maxWidth: "780px", margin: "0 auto", padding: "48px 24px" }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "8px",
            lineHeight: "1.2",
          }}
        >
          Frequently Asked Questions
        </h1>
        <p
          style={{
            color: "#555",
            fontSize: "1.05rem",
            marginBottom: "40px",
            lineHeight: "1.6",
          }}
        >
          Common questions about California compassionate release, CDCR medical
          parole, ADA eligibility, and how The Revive Project supports families.
        </p>

        <div>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderTop: "1px solid #e0e0e0",
                padding: "0",
              }}
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  padding: "20px 0",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                  color: "#111",
                  lineHeight: "1.4",
                }}
              >
                <span>{faq.question}</span>
                <span
                  style={{
                    fontSize: "1.4rem",
                    flexShrink: 0,
                    color: "#555",
                    transform: openIndex === i ? "rotate(45deg)" : "none",
                    transition: "transform 0.2s ease",
                  }}
                >
                  +
                </span>
              </button>

              {openIndex === i && (
                <div
                  style={{
                    paddingBottom: "20px",
                    fontSize: "0.97rem",
                    color: "#333",
                    lineHeight: "1.7",
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
          <div style={{ borderTop: "1px solid #e0e0e0" }} />
        </div>

        <div
          style={{
            marginTop: "56px",
            padding: "32px",
            background: "#f7f7f7",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "8px" }}>
            Still have questions?
          </h2>
          <p style={{ color: "#444", lineHeight: "1.6", marginBottom: "20px" }}>
            Every case is different. Contact The Revive Project for a free
            consultation — we'll review your loved one's situation and tell you
            honestly what options exist.
          </p>
          <a
            href="/about"
            style={{
              display: "inline-block",
              background: "#111",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "0.95rem",
            }}
          >
            Contact Us
          </a>
        </div>
      </main>
    </>
  );
}
