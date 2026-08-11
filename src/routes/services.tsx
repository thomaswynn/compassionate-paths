import { createFileRoute, Link } from "@tanstack/react-router";
import reviveLogo from "@/assets/revive Phoenix.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing | The Revive Project, LLC" },
      {
        name: "description",
        content:
          "Transparent pricing for compassionate release consulting: free phone consultation, medical file review, documentation, legislative outreach, wraparound services, and full-service packages.",
      },
      { property: "og:title", content: "Services & Pricing | The Revive Project, LLC" },
      {
        property: "og:description",
        content:
          "Free consultation. Medical file review, documentation, legislative outreach, wraparound planning, and full-service compassionate release support in California.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const services = [
  {
    n: "01",
    title: "Phone Consultation",
    price: "FREE*",
    range: null,
    body: "A no-pressure first call. We listen to the situation, explain the pathways, and tell you honestly whether a case is worth pursuing. The fee is waived when you move forward with a Medical File Review.",
    includes: ["15–30 minute intake call", "Pathway screening", "Honest readiness assessment"],
  },
  {
    n: "02",
    title: "Medical File Review",
    price: "$350",
    range: null,
    body: "We read the medical records, sentencing documents, and facility history to identify the strongest compassionate release or medical parole argument for your loved one.",
    includes: ["Record and timeline review", "Eligibility memo", "Recommended next steps"],
  },
  {
    n: "03",
    title: "Medical Documentation",
    price: "$750–$1,200",
    range: true,
    body: "We prepare the detailed medical packet that connects a diagnosis to the legal criteria — physician declarations, care summaries, and the supporting exhibits petitions need.",
    includes: ["Physician-style declarations", "Condition-to-criteria mapping", "Exhibit organization"],
  },
  {
    n: "04",
    title: "Legislative Outreach",
    price: "$500",
    range: null,
    body: "We contact the California state senator and assembly member for the district of commitment and ask that your loved one be added to constituent watch lists during review.",
    includes: ["District identification", "Constituent letters", "Follow-up tracking"],
  },
  {
    n: "05",
    title: "Wraparound Services",
    price: "$600–$1,000",
    range: true,
    body: "We build the practical release plan courts and agencies expect to see: housing, hospice, In-Home Supportive Services (IHSS), transportation, and caregiver arrangements.",
    includes: ["Housing and hospice coordination", "IHSS application guidance", "Transport and caregiver plan"],
  },
  {
    n: "06",
    title: "Full-Service Package",
    price: "$3,000–$5,000",
    range: true,
    body: "End-to-end support from the first phone call through the court proceeding. Medical review, documentation, legislative outreach, wraparound planning, and ongoing case coordination.",
    includes: [
      "Everything in individual services",
      "Dedicated case coordinator",
      "Court-filing support and proceeding attendance",
    ],
  },
];

const faqs = [
  {
    q: "Do you charge for the first call?",
    a: "No. The phone consultation is free. If you choose to proceed with a Medical File Review, the consultation fee is waived.",
  },
  {
    q: "Are these legal fees?",
    a: "No. The Revive Project, LLC provides consulting and case-support services. We are not a law firm and do not give legal advice. Many families use our work alongside an attorney.",
  },
  {
    q: "Why is there a price range on some services?",
    a: "Range pricing reflects how complex the medical history is and how many records need review. We quote a fixed price after the Medical File Review.",
  },
  {
    q: "Can I start with just one service?",
    a: "Yes. Most families begin with the free consultation and Medical File Review, then add only the services they need.",
  },
];

function Services() {
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
            <Link className="text-foreground transition-colors" to="/services">
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
            <p className="rule-eyebrow text-ink-foreground/60">Services & Pricing</p>
            <h1 className="mt-5 text-5xl leading-[1.08] md:text-6xl">
              Clear help, clear pricing.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-foreground/75">
              Every case is different, but the work is the same: review the medical history, build
              the documentation, open the right doors, and coordinate a safe release plan. Start
              with a free consultation and add only what you need.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-12">
          <img 
            src="/before after white prisoner.jpg" 
            alt="Before and after compassionate release results"
            className="w-full rounded-lg shadow-lg"
          />
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.n} className="bg-card p-7">
                <div className="flex items-baseline justify-between">
                  <span className="rule-eyebrow text-accent">{s.n}</span>
                  <span className="font-display text-3xl text-foreground">{s.price}</span>
                </div>
                <h2 className="mt-4 text-2xl">{s.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mt-5 space-y-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-base text-muted-foreground">
                      <span aria-hidden="true" className="text-accent">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            * Phone consultation is complimentary. If you proceed with a Medical File Review, the
            consultation fee is waived. Payment plans are available for the Full-Service Package.
          </p>
        </section>

        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-4xl px-5 py-16">
            <p className="rule-eyebrow">How It Works</p>
            <h2 className="mt-4 text-3xl md:text-4xl">Three ways to work with us.</h2>
            <ol className="mt-10 space-y-8">
              {[
                ["Start free", "Book a phone consultation. Tell us the facility, the medical situation, and what you have tried so far."],
                ["Pick a path", "After the Medical File Review, choose a single service or the Full-Service Package — no pressure either way."],
                ["We stay with it", "We track deadlines, update you in plain language, and keep the release plan moving until your loved one is home."],
              ].map(([title, body], i) => (
                <li key={title} className="flex gap-5">
                  <span className="font-display text-2xl text-accent">{i + 1}</span>
                  <div>
                    <h3 className="text-xl">{title}</h3>
                    <p className="mt-1 text-base leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-16">
          <h2 className="text-3xl md:text-4xl">Common questions.</h2>
          <dl className="mt-10 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <dt className="text-lg font-semibold text-foreground">{faq.q}</dt>
                <dd className="mt-2 text-base leading-relaxed text-muted-foreground">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="surface-warm">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center">
            <h2 className="text-3xl md:text-4xl">Not sure which service fits?</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-foreground/75">
              Start with a free consultation. We'll tell you honestly what your loved one's case
              needs — and what it doesn't.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/intake"
                className="inline-block rounded-sm bg-accent px-7 py-3 text-base font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Start a free case review
              </Link>
              <a
                href="mailto:revivifyfoundation@gmail.com"
                className="inline-block rounded-sm border border-ink-foreground/30 px-7 py-3 text-base font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
              >
                Email us instead
              </a>
            </div>
          </div>
        </section>
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
                  className="h-18 w-18 shrink-0 object-contain"
                />
                <div className="leading-tight">
                  <p className="font-display text-lg font-semibold text-foreground">
                    The Revive Project, LLC
                  </p>
                  <p className="rule-eyebrow">Compassionate Release Consulting</p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Re-entry and empowerment for elderly adults. We help California families navigate
                compassionate release and medical parole — from the first medical record to the
                day someone comes home.
              </p>
            </div>
            <div>
              <p className="rule-eyebrow">Contact</p>
              <address className="mt-4 space-y-3 text-base not-italic leading-relaxed text-muted-foreground">
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
              <ul className="mt-4 space-y-3 text-base text-muted-foreground">
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
          <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-base text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} The Revive Project, LLC — California</p>
            <p>Consulting and case support. Not a law firm; not legal or medical advice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
