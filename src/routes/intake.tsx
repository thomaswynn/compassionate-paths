import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import reviveLogo from "@/assets/revive Phoenix.png";
import { useServerFn } from "@tanstack/react-start";
import { submitIntake } from "@/lib/intake.functions";
import { intakeSchema } from "@/lib/intake-schema";
import { CA_COUNTIES, CA_FACILITIES, REFERRAL_SOURCES } from "@/lib/ca-facilities";

export const Route = createFileRoute("/intake")({
  head: () => ({
    meta: [
      { title: "Compassionate Release Intake Form | The Revive Project, LLC" },
      {
        name: "description",
        content:
          "Start a free case review. Tell The Revive Project about your incarcerated loved one — facility, CDCR number, medical and ADA conditions — and we respond within 2-3 business days.",
      },
      { property: "og:title", content: "Compassionate Release Intake Form | The Revive Project" },
      {
        property: "og:description",
        content:
          "Free intake for compassionate release and medical parole cases in California state prisons.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Intake,
});

const inputClass =
  "mt-2 w-full rounded-sm border border-border bg-card px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/30";
const labelClass = "block text-sm font-medium text-foreground";

function Field({
  label,
  hint,
  children,
  error,
}: {
  label: string;
  hint?: string | undefined;
  children: React.ReactNode;
  error?: string | undefined;
}) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs text-muted-foreground">{hint}</span>}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <div className="border-b border-border pb-3">
      <span className="rule-eyebrow text-accent">{n}</span>
      <h2 className="mt-1 text-xl md:text-2xl">{title}</h2>
    </div>
  );
}

function Intake() {
  const send = useServerFn(submitIntake);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const parsed = intakeSchema.safeParse(raw);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("error");
      setMessage("Please fill in every required field before submitting.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setErrors({});
    setStatus("sending");
    try {
      await send({ data: parsed.data });
      fetch("https://formspree.io/f/maewnojj", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(parsed.data) }).catch(() => {});
      setStatus("done");
      form.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please call (510) 289-6801.",
      );
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="leading-tight">
            <p className="font-display text-lg font-semibold">The Revive Project, LLC</p>
            <p className="rule-eyebrow">Compassionate Release Consulting</p>
          </Link>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <Link className="transition-colors hover:text-foreground" to="/about">
              About
            </Link>
            <Link className="transition-colors hover:text-foreground" to="/">
              Home
            </Link>
            <Link className="transition-colors hover:text-foreground" to="/eligibility">
              Eligibility
            </Link>
            <Link className="transition-colors hover:text-foreground" to="/services">
              Services
            </Link>
            <Link className="transition-colors hover:text-foreground" to="/resources">
              Resources
            </Link>
            <Link className="transition-colors hover:text-foreground" to="/our-impact">
              Our Impact
            </Link>
          </nav>
          <Link
            to="/"
            className="rounded-sm border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Back to home
          </Link>
        </div>
      </header>

      <main>
        <section className="surface-warm">
          <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
            <p className="rule-eyebrow text-ink-foreground/60">Intake</p>
            <h1 className="mt-5 text-4xl leading-[1.08] md:text-5xl">
              Compassionate release intake form.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-foreground/75">
              Tell us about your loved one so we can determine how we can help. There is no cost to
              submit this form, and we contact you within 2–3 business days.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-5 py-14">
          {status === "done" ? (
            <div className="rounded-sm border border-border bg-card p-8 text-center">
              <h2 className="text-2xl">Thank you — your intake form was received.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We will contact you within 2–3 business days to discuss the case. If the situation
                is urgent, call (510) 289-6801.
              </p>
              <Link
                to="/"
                className="mt-7 inline-block rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Back to home
              </Link>
            </div>
          ) : (
            <>
              {status === "error" && message && (
                <p className="mb-8 rounded-sm border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
                  {message}
                </p>
              )}

              <form netlify autoComplete="off" onSubmit={onSubmit} className="space-y-12" noValidate>
                <section className="space-y-6">
                  <SectionHeading n="01" title="Incarcerated individual" />
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Full name *" error={errors["inmateFullName"]}>
                      <input name="inmateFullName" autoComplete="off" data-lpignore="true" data-1p-ignore required maxLength={120} className={inputClass} />
                    </Field>
                    <Field
                      label="CDCR number *"
                      hint="California Department of Corrections & Rehabilitation number"
                      error={errors["cdcrNumber"]}
                    >
                      <input name="cdcrNumber" autoComplete="off" data-lpignore="true" data-1p-ignore required maxLength={30} className={inputClass} />
                    </Field>
                    <Field label="Current age *" error={errors["currentAge"]}>
                      <input
                        name="currentAge" autoComplete="off" data-lpignore="true" data-1p-ignore
                        type="number"
                        min={18}
                        max={120}
                        required
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Date of birth *" error={errors["dateOfBirth"]}>
                      <input name="dateOfBirth" autoComplete="off" data-lpignore="true" data-1p-ignore type="date" required className={inputClass} />
                    </Field>
                    <Field
                      label="Year of incarceration *"
                      hint="What year was the individual incarcerated?"
                      error={errors["yearOfIncarceration"]}
                    >
                      <input
                        name="yearOfIncarceration" autoComplete="off" data-lpignore="true" data-1p-ignore
                        type="number"
                        min={1940}
                        max={new Date().getFullYear()}
                        required
                        className={inputClass}
                      />
                    </Field>
                    <Field
                      label="County of commitment *"
                      hint="County where the sentence was imposed"
                      error={errors["countyOfCommitment"]}
                    >
                      <select name="countyOfCommitment" required defaultValue="" className={inputClass}>
                        <option value="" disabled>
                          -- Select a county --
                        </option>
                        {CA_COUNTIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <Field
                    label="Current California state prison facility *"
                    hint="Where the individual is currently housed"
                    error={errors["prisonFacility"]}
                  >
                    <select name="prisonFacility" required defaultValue="" className={inputClass}>
                      <option value="" disabled>
                        -- Please select a facility --
                      </option>
                      {CA_FACILITIES.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </Field>
                </section>

                <section className="space-y-6">
                  <SectionHeading n="02" title="Health & accessibility" />
                  <Field
                    label="ADA condition / disability *"
                    hint="Physical, sensory, cognitive, or mobility disabilities"
                    error={errors["adaCondition"]}
                  >
                    <textarea
                      name="adaCondition" autoComplete="off" data-lpignore="true" data-1p-ignore
                      required
                      rows={4}
                      maxLength={2000}
                      className={inputClass}
                    />
                  </Field>
                  <Field
                    label="Medical condition(s) *"
                    hint="Diagnoses, treatments, and how the condition affects daily functioning"
                    error={errors["medicalCondition"]}
                  >
                    <textarea
                      name="medicalCondition" autoComplete="off" data-lpignore="true" data-1p-ignore
                      required
                      rows={4}
                      maxLength={2000}
                      className={inputClass}
                    />
                  </Field>
                </section>

                <section className="space-y-6">
                  <SectionHeading n="03" title="Family & contact" />
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Your name *" error={errors["familyContactName"]}>
                      <input name="familyContactName" autoComplete="off" data-lpignore="true" data-1p-ignore required maxLength={120} className={inputClass} />
                    </Field>
                    <Field label="Relationship to the individual *" error={errors["relationshipToInmate"]}>
                      <input
                        name="relationshipToInmate" autoComplete="off" data-lpignore="true" data-1p-ignore
                        required
                        maxLength={80}
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Phone number *" error={errors["contactPhone"]}>
                      <input name="contactPhone" autoComplete="off" data-lpignore="true" data-1p-ignore type="tel" required maxLength={30} className={inputClass} />
                    </Field>
                    <Field label="Email address *" error={errors["contactEmail"]}>
                      <input name="contactEmail" autoComplete="off" data-lpignore="true" data-1p-ignore type="email" required maxLength={255} className={inputClass} />
                    </Field>
                  </div>
                </section>

                <section className="space-y-6">
                  <SectionHeading n="04" title="Additional information" />
                  <Field label="How did you hear about The Revive Project?" error={errors["heardAboutUs"]}>
                    <select name="heardAboutUs" defaultValue="" className={inputClass}>
                      <option value="">-- Please select --</option>
                      {REFERRAL_SOURCES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Additional notes or questions" error={errors["additionalNotes"]}>
                    <textarea name="additionalNotes" autoComplete="off" data-lpignore="true" data-1p-ignore rows={4} maxLength={4000} className={inputClass} />
                  </Field>
                </section>

                <div className="rounded-sm border border-border bg-secondary/40 p-5 text-xs leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Privacy & consent.</strong> By submitting this
                  form you consent to The Revive Project contacting you at the phone number and
                  email address provided. Your information is kept confidential and used solely to
                  provide compassionate release consulting services. The Revive Project, LLC is not
                  a law firm and does not provide legal or medical advice.
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="rounded-sm bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
                  >
                    {status === "sending" ? "Submitting…" : "Submit intake form"}
                  </button>
                  <button
                    type="reset"
                    className="rounded-sm border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                  >
                    Clear form
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4">
                <img
                  src={reviveLogo}
                  alt="Revive Foundation seal"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="h-16 w-16 shrink-0 object-contain"
                />
                <div className="leading-tight">
                  <p className="font-display text-base font-semibold text-foreground">
                    The Revive Project, LLC
                  </p>
                  <p className="rule-eyebrow">Compassionate Release Consulting</p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Re-entry and empowerment for elderly adults. We help California families navigate
                compassionate release and medical parole — from the first medical record to the
                day someone comes home.
              </p>
            </div>
            <div>
              <p className="rule-eyebrow">Contact</p>
              <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-muted-foreground">
                <p>
                  2509 Adeline St
                  <br />
                  Oakland, CA 94607
                </p>
                <p>
                  <a className="transition-colors hover:text-foreground" href="tel:+15102896801">
                    (510) 289-6801
                  </a>
                </p>
                <p>
                  <a
                    className="transition-colors hover:text-foreground"
                    href="mailto:revivifyfoundation@gmail.com"
                  >
                    revivifyfoundation@gmail.com
                  </a>
                </p>
                <p>Monday – Friday, 8:00 AM – 5:00 PM PT</p>
              </address>
            </div>
            <div>
              <p className="rule-eyebrow">Site</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link className="transition-colors hover:text-foreground" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="transition-colors hover:text-foreground" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="transition-colors hover:text-foreground" to="/eligibility">
                    Eligibility
                  </Link>
                </li>
                <li>
                  <Link className="transition-colors hover:text-foreground" to="/services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="transition-colors hover:text-foreground" to="/resources">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link className="transition-colors hover:text-foreground" to="/our-impact">
                    Our Impact
                  </Link>
                </li>
                <li>
                  <Link className="transition-colors hover:text-foreground" to="/intake">
                    Start Intake
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} The Revive Project, LLC — California</p>
            <p>Consulting and case support. Not a law firm; not legal or medical advice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
