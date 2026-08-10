import { createFileRoute, Link } from "@tanstack/react-router";
import reviveLogo from "@/assets/revive Phoenix.png";

export const Route = createFileRoute("/eligibility")({
  head: () => ({
    meta: [
      { title: "Compassionate Release Eligibility in California | The Revive Project" },
      {
        name: "description",
        content:
          "Plain-language summary of California compassionate release criteria under Penal Code 1172.2, medical parole under 3550, and elderly parole under 3055 — see if your loved one may qualify.",
      },
      {
        property: "og:title",
        content: "Does My Loved One Qualify? California Compassionate Release Criteria",
      },
      {
        property: "og:description",
        content:
          "Penal Code 1172.2 recall and resentencing, 3550 medical parole, and 3055 elderly parole — the criteria explained for families.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Eligibility,
});

const pathways = [
  {
    code: "Penal Code § 1172.2",
    name: "Compassionate release (recall & resentencing)",
    formerly: "Formerly Penal Code § 1170(e); expanded by AB 960 (2022).",
    who: "A person in CDCR custody whose medical condition is terminal or who is permanently medically incapacitated.",
    criteria: [
      "The person has a serious and advanced illness with an end-of-life trajectory, OR",
      "The person is permanently medically incapacitated with a condition that requires 24-hour care and that did not exist at the time of sentencing, AND",
      "The incapacitation is such that the person no longer poses a threat to public safety.",
    ],
    notes:
      "Under AB 960 there is now a presumption in favor of recall and resentencing — the court must grant relief unless it finds the person is an unreasonable risk of committing a super-strike offense. Death-sentenced and LWOP cases are excluded. The petition can be initiated by CDCR, the Board, the district attorney, or the person's attorney.",
  },
  {
    code: "Penal Code § 3550",
    name: "Medical parole",
    formerly: "Reviewed by the Board of Parole Hearings, not the sentencing court.",
    who: "A person who is permanently medically incapacitated and requires 24-hour total care.",
    criteria: [
      "The physical incapacitation is permanent and renders the person unable to perform activities of basic daily living,",
      "The condition requires 24-hour total care such as coma, persistent vegetative state, brain injury, ventilator dependency, or loss of function in all four extremities, AND",
      "The incapacitation did not exist at the time of sentencing.",
    ],
    notes:
      "Excludes people sentenced to death or LWOP, and those on condemned status. Medical parole is a supervised release to a licensed care facility — it is not a sentence reduction, and parole can be revoked if the person's condition improves.",
  },
  {
    code: "Penal Code § 3055",
    name: "Elderly Parole Program",
    formerly: "Also handled by the Board of Parole Hearings.",
    who: "Older adults who have already served a long term.",
    criteria: [
      "The person is 50 years of age or older, AND",
      "Has served a minimum of 20 years of continuous incarceration on their current sentence.",
    ],
    notes:
      "At the hearing the Board must give special consideration to how age, time served, and diminished physical condition have reduced the risk of future violence. Certain offenses and sentences are excluded by statute.",
  },
];

const signals = [
  "A terminal diagnosis, hospice referral, or a physician's prognosis measured in months",
  "Dementia, advanced Parkinson's, ALS, end-stage cancer, end-stage organ failure",
  "Ventilator dependency, permanent paralysis, or a condition needing 24-hour nursing care",
  "A condition that developed or seriously worsened after sentencing",
  "Age 50+ with 20+ years already served",
  "A family or facility placement that can receive the person on release",
];

function Eligibility() {
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
            <Link className="text-foreground transition-colors" to="/eligibility">
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
            to="/intake"
            className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get Help
          </Link>
        </div>
      </header>

      <main>
        <section className="surface-warm">
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-20">
            <p className="rule-eyebrow text-ink-foreground/60">Eligibility</p>
            <h1 className="mt-5 text-4xl leading-[1.08] md:text-5xl">
              Does my loved one qualify?
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/75">
              California has three separate release pathways for people who are seriously ill,
              permanently incapacitated, or elderly. Most families only hear about one of them. Read
              the criteria below, then send us the details — we will tell you which pathway fits.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-5 py-16">
          <section className="rounded-sm border border-border bg-card p-7">
            <h2 className="text-xl md:text-2xl">Quick signs a case may be worth reviewing</h2>
            <ul className="mt-5 space-y-3">
              {signals.map((s) => (
                <li key={s} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-1 text-accent">
                    —
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              You do not need all of these. One qualifying medical condition is often enough to open
              a file.
            </p>
          </section>

          <div className="mt-14 space-y-12">
            {pathways.map((p, i) => (
              <section key={p.code} className="border-t border-border pt-8">
                <span className="rule-eyebrow text-accent">
                  {String(i + 1).padStart(2, "0")} · {p.code}
                </span>
                <h2 className="mt-2 text-2xl md:text-3xl">{p.name}</h2>
                <p className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
                  {p.formerly}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-foreground">
                  <strong>Who it is for.</strong> {p.who}
                </p>
                <h3 className="mt-6 text-sm font-semibold text-foreground">Criteria</h3>
                <ul className="mt-3 space-y-3">
                  {p.criteria.map((c) => (
                    <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span aria-hidden="true" className="mt-1 text-accent">
                        ✓
                      </span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-sm bg-secondary/50 p-5 text-sm leading-relaxed text-muted-foreground">
                  {p.notes}
                </p>
              </section>
            ))}
          </div>

          <section className="mt-14 rounded-sm border border-border bg-secondary/40 p-6 text-xs leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Important.</strong> This summary is general
            information about California law, not legal advice, and statutes change. The Revive
            Project, LLC is a consulting practice — we are not a law firm and we do not provide legal
            or medical advice. Always confirm current requirements with an attorney or with CDCR.
          </section>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/intake"
              className="rounded-sm bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Start a free case review
            </Link>
            <Link
              to="/resources"
              className="rounded-sm border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Browse the document library
            </Link>
          </div>
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
