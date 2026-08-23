import { createFileRoute, Link } from "@tanstack/react-router";
import reviveLogo from "@/assets/revive Phoenix.png";

export const Route = createFileRoute("/reentry")({
  head: () => ({
    meta: [
      { title: "Reentry Planning | The Revive Project, LLC" },
      { name: "description", content: "Comprehensive reentry planning for elderly and medically ill people released from California prisons. We build the post-release infrastructure that determines whether someone actually survives and thrives after compassionate release." },
      { property: "og:title", content: "Reentry Planning | The Revive Project, LLC" },
      { property: "og:description", content: "Getting out is only half the battle. We build the reentry plan that makes the difference between release and relapse." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Reentry,
});

const areas = [
  {
    number: "01",
    title: "Medical Provider Connections",
    body: "We research and connect your loved one with local healthcare providers before release. Primary care doctors, specialists, and hospice providers who know they are coming and are ready to receive them.",
  },
  {
    number: "02",
    title: "Housing & Accessibility",
    body: "We identify and coordinate housing that fits your loved one's medical and mobility needs — wheelchair accessible, ground floor, close to medical services. We also research IHSS (In-Home Supportive Services) eligibility and applications.",
  },
  {
    number: "03",
    title: "ADA Transportation",
    body: "We identify ADA paratransit services, Medi-Cal medical transportation, and community transit options specific to your loved one's home county so they can actually get to doctor appointments.",
  },
  {
    number: "04",
    title: "Healthcare System Navigation",
    body: "After decades inside, most people don't know how to navigate Medi-Cal, Medicare, specialty referrals, or the pharmacy system. We walk them through it before they walk out the door.",
  },
  {
    number: "05",
    title: "Community Anchors",
    body: "We help identify faith communities, peer support groups, and trusted contacts who will check in and provide stability during the critical first 90 days after release.",
  },
  {
    number: "06",
    title: "Post-Release Check-ins",
    body: "We stay engaged at 30, 60, and 90 days post-release to make sure the plan is working. If something breaks, we help fix it. The goal is stability, not just release.",
  },
];

const checklistAreas = [
  { area: "Medical Preparation", items: ["Medical records summary", "Complete medication list", "Specialist contacts identified", "Equipment & supplies plan", "POLST form completed"] },
  { area: "Healthcare Access", items: ["Medi-Cal enrollment", "Primary care doctor scheduled", "Pharmacy setup", "Specialist appointments", "Home health plan"] },
  { area: "Housing", items: ["Primary housing confirmed", "Accessibility assessed", "Backup options identified", "IHSS application started", "Equipment at home arranged"] },
  { area: "Transportation", items: ["ADA paratransit enrolled", "Medical transport arranged", "Community transit routes known"] },
  { area: "Community", items: ["Support person confirmed", "Peer support group identified", "Mental health support arranged", "Faith community connected"] },
  { area: "Financial & Legal", items: ["SSI/SSDI application filed", "California ID in process", "Parole conditions reviewed", "Parole officer contact info"] },
];

function Reentry() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="leading-tight">
            <p className="font-display text-lg font-semibold">The Revive Project, LLC</p>
            <p className="rule-eyebrow">Compassionate Release Consulting</p>
          </Link>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <Link className="transition-colors hover:text-foreground" to="/about">About</Link>
            <Link className="transition-colors hover:text-foreground" to="/eligibility">Eligibility</Link>
            <Link className="transition-colors hover:text-foreground" to="/services">Services</Link>
            <Link className="text-foreground transition-colors" to="/reentry">Reentry</Link>
            <Link className="transition-colors hover:text-foreground" to="/resources">Resources</Link>
            <Link className="transition-colors hover:text-foreground" to="/our-impact">Our Impact</Link>
          </nav>
          <Link to="/intake" className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">Get Help</Link>
        </div>
      </header>

      <main>
        <section className="surface-warm">
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-20">
            <p className="rule-eyebrow text-ink-foreground/60">Reentry Planning</p>
            <h1 className="mt-5 text-4xl leading-[1.05] md:text-5xl">
              Getting released is only the beginning.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/75">
              Most compassionate release consultants stop when the door opens. We don't. The real crisis happens at release — and we build the infrastructure that determines whether your loved one actually survives and thrives on the outside.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/intake" className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90">
                Start a free case review
              </Link>
              <Link to="/services" className="rounded-sm border border-ink-foreground/30 px-6 py-3 text-sm font-medium text-ink-foreground transition-colors hover:bg-ink-foreground/10">
                See all services
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-card">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">
            {[
              ["90%", "of incarcerated people change within 5–10 years"],
              ["90+ days", "of post-release support in our complete package"],
              ["6", "reentry areas we plan for every client"],
              ["$0", "subsidy available through The Revivify Foundation for eligible clients"],
            ].map(([big, small]) => (
              <div key={small}>
                <dt className="font-display text-3xl text-foreground">{big}</dt>
                <dd className="mt-1 text-sm leading-snug text-muted-foreground">{small}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <p className="rule-eyebrow">The Gap</p>
            <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
              Why people fail after release — and how we change that.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-sm border border-border bg-card p-7">
                <p className="rule-eyebrow text-destructive">Without Reentry Planning</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">What usually happens</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Men walk out of prison after decades inside with no plan. They don't know how to enroll in Medi-Cal, find ADA-accessible housing, or access IHSS. Their medications run out. Their bodies are failing. The world has changed completely. Within months, many end up hospitalized, back in crisis, or returning to prison.
                </p>
              </div>
              <div className="rounded-sm border border-accent/40 bg-card p-7">
                <p className="rule-eyebrow text-accent">With The Revive Project</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">What success looks like</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Your loved one walks out with a real plan already in place. Phone numbers for their doctor, a confirmed housing situation, ADA transportation arranged, Medi-Cal activated, a community connection ready to receive them. We build the infrastructure before release so day one is stable — not a crisis.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <p className="rule-eyebrow">What We Do</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
            Six areas of reentry we plan for every client.
          </h2>
          <ol className="mt-12 space-y-px overflow-hidden rounded-sm border border-border bg-border">
            {areas.map(({ number, title, body }) => (
              <li key={title} className="flex gap-5 bg-card p-6 md:p-8">
                <span className="font-display text-2xl text-accent">{number}</span>
                <div>
                  <h3 className="text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <p className="rule-eyebrow">Free Resource</p>
            <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
              Reentry Readiness Checklist
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Six areas you need to plan before release. Email us to request your free copy, whether release is weeks or months away. The sooner you start, the better the outcome.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {checklistAreas.map(({ area, items }) => (
                <div key={area} className="rounded-sm border border-border bg-card p-5">
                  <h3 className="text-sm font-semibold text-foreground">{area}</h3>
                  <ul className="mt-3 space-y-1">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="mt-0.5 text-accent">☐</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8">
              
                href="mailto:revivifyfoundation@gmail.com?subject=Reentry Readiness Checklist Request"
                className="inline-block rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Request free checklist
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-20 text-center">
          <p className="rule-eyebrow">Don't Wait</p>
          <h2 className="mt-4 text-3xl md:text-4xl">
            The best reentry plans start 8–12 weeks before release.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Call us now to start building yours. Reentry planning is included in our full-service package, or available as a standalone service for people whose release is already approved.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/intake" className="rounded-sm bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90">
              Start a free case review
            </Link>
            <a href="tel:+15102896801" className="rounded-sm border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary">
              Call (510) 289-6801
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4">
                <img src={reviveLogo} alt="Revive Foundation seal" width={500} height={500} loading="lazy" style={{ height: '120px', width: '120px' }} className="shrink-0 object-contain" />
                <div className="leading-tight">
                  <p className="font-display text-base font-semibold text-foreground">The Revive Project, LLC</p>
                  <p className="rule-eyebrow">Compassionate Release Consulting</p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Re-entry and empowerment for elderly adults. We help California families navigate compassionate release and medical parole — from the first medical record to the day someone comes home.
              </p>
            </div>
            <div>
              <p className="rule-eyebrow">Contact</p>
              <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-muted-foreground">
                <p>2509 Adeline St<br />Oakland, CA 94607</p>
                <p><a className="transition-colors hover:text-foreground" href="tel:+15102896801">(510) 289-6801</a></p>
                <p><a className="transition-colors hover:text-foreground" href="mailto:revivifyfoundation@gmail.com">revivifyfoundation@gmail.com</a></p>
                <p>Monday – Friday, 8:00 AM – 5:00 PM PT</p>
              </address>
            </div>
            <div>
              <p className="rule-eyebrow">Site</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><Link className="transition-colors hover:text-foreground" to="/">Home</Link></li>
                <li><Link className="transition-colors hover:text-foreground" to="/about">About</Link></li>
                <li><Link className="transition-colors hover:text-foreground" to="/eligibility">Eligibility</Link></li>
                <li><Link className="transition-colors hover:text-foreground" to="/services">Services</Link></li>
                <li><Link className="transition-colors hover:text-foreground" to="/reentry">Reentry Planning</Link></li>
                <li><Link className="transition-colors hover:text-foreground" to="/resources">Resources</Link></li>
                <li><Link className="transition-colors hover:text-foreground" to="/our-impact">Our Impact</Link></li>
                <li><Link className="transition-colors hover:text-foreground" to="/intake">Start Intake</Link></li>
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
