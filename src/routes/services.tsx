import { createFileRoute, Link } from "@tanstack/react-router";
import reviveLogo from "@/assets/revive Phoenix.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | The Revive Project, LLC" },
      {
        name: "description",
        content: "Compassionate release consulting services for elderly and medically ill incarcerated people in California.",
      },
      { property: "og:title", content: "Services | The Revive Project, LLC" },
      {
        property: "og:description",
        content: "Medical documentation, legislative outreach, and wraparound services for compassionate release petitions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const services = [
  {
    title: "Free Phone Consultation",
    description: "Discuss your loved one's case with our team. We review medical history, sentencing, and circumstances to assess eligibility.",
  },
  {
    title: "Medical File Review",
    description: "We examine existing medical records and identify gaps. $350 for comprehensive assessment.",
    price: "$350",
  },
  {
    title: "Medical Documentation",
    description: "Work with physicians to create detailed documentation connecting medical conditions to compassionate release criteria.",
    price: "$750–$1,200",
  },
  {
    title: "Legislative Outreach",
    description: "Contact state senators and assembly members to add your loved one to constituent watch lists.",
    price: "$500",
  },
  {
    title: "Wraparound Services",
    description: "Research community resources: transportation, IHSS (In-Home Supportive Services), hospice care planning.",
    price: "$600–$1,000",
  },
  {
    title: "Full-Service Package",
    description: "Complete support from intake through court proceedings. Includes all services above.",
    price: "$3,000–$5,000",
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
            <Link className="transition-colors hover:text-foreground" to="/about">About</Link>
            <Link className="transition-colors hover:text-foreground" to="/">Home</Link>
            <Link className="transition-colors hover:text-foreground" to="/eligibility">Eligibility</Link>
            <Link className="text-foreground transition-colors" to="/services">Services</Link>
            <Link className="transition-colors hover:text-foreground" to="/resources">Resources</Link>
            <Link className="transition-colors hover:text-foreground" to="/our-impact">Our Impact</Link>
          </nav>
          <Link to="/intake" className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">Get Help</Link>
        </div>
      </header>

      <main>
        <section className="surface-warm">
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-20">
            <p className="rule-eyebrow text-ink-foreground/60">Our Services</p>
            <h1 className="mt-5 text-5xl leading-[1.08] md:text-6xl">Compassionate release consulting designed for your family.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-foreground/75">We handle the medical documentation, legislative advocacy, and wraparound services so your loved one has the best chance at compassionate release.</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-12">
          <img src="/before after white prisoner.jpg" alt="Before and after compassionate release documentation" className="w-full rounded-lg shadow-lg" />
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <article key={i} className="rounded-sm border border-border bg-card p-7">
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{service.description}</p>
                {service.price && (
                  <p className="mt-4 text-lg font-semibold text-accent">{service.price}</p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-16">
          <div className="rounded-sm bg-secondary/40 p-8">
            <h2 className="text-3xl md:text-4xl">The Process</h2>
            <ol className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <li><strong>1. Intake Call</strong> — Free 30-minute consultation to understand your loved one's situation.</li>
              <li><strong>2. Medical File Review</strong> — We examine all available medical records and identify documentation gaps ($350).</li>
              <li><strong>3. Assessment Summary</strong> — One-page summary of whether compassionate release has a reasonable chance.</li>
              <li><strong>4. Decision & Contract</strong> — If moving forward, we draft a service agreement and begin full-service support.</li>
              <li><strong>5. Documentation & Outreach</strong> — Medical documentation, legislative contact, and wraparound services planning.</li>
              <li><strong>6. Court Support</strong> — We provide guidance through the compassionate release court proceedings.</li>
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-16">
          <div className="rounded-sm bg-secondary/40 p-8">
            <h2 className="text-3xl md:text-4xl">Ready to explore options?</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Call us for a free consultation. We'll listen to your situation and tell you honestly whether compassionate release is a viable path.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/intake" className="inline-block rounded-sm bg-accent px-7 py-3 text-base font-semibold text-accent-foreground transition-opacity hover:opacity-90">Start intake process</Link>
              <a href="tel:+15102896801" className="inline-block rounded-sm border border-ink-foreground/30 px-7 py-3 text-base font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10">Call (510) 289-6801</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4">
               <img src={reviveLogo} alt="Revive Foundation seal" width={500} height={500} loading="lazy" style={{ height: '72px', width: '72px' }} className="shrink-0 object-contain" />
                <div className="leading-tight">
                  <p className="font-display text-lg font-semibold text-foreground">The Revive Project, LLC</p>
                  <p className="rule-eyebrow">Compassionate Release Consulting</p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">Re-entry and empowerment for elderly adults. We help California families navigate compassionate release and medical parole — from the first medical record to the day someone comes home.</p>
            </div>
            <div>
              <p className="rule-eyebrow">Contact</p>
              <address className="mt-4 space-y-3 text-base not-italic leading-relaxed text-muted-foreground">
                <p>2509 Adeline St<br />Oakland, CA 94607</p>
                <p><a className="transition-colors hover:text-foreground" href="tel:+15102896801">(510) 289-6801</a></p>
                <p><a className="transition-colors hover:text-foreground" href="mailto:revivifyfoundation@gmail.com">revivifyfoundation@gmail.com</a></p>
                <p>Monday – Friday, 8:00 AM – 5:00 PM PT</p>
              </address>
            </div>
            <div>
              <p className="rule-eyebrow">Site</p>
              <ul className="mt-4 space-y-3 text-base text-muted-foreground">
                <li><Link className="transition-colors hover:text-foreground" to="/">Home</Link></li>
                <li><Link className="transition-colors hover:text-foreground" to="/about">About</Link></li>
                <li><Link className="transition-colors hover:text-foreground" to="/eligibility">Eligibility</Link></li>
                <li><Link className="transition-colors hover:text-foreground" to="/services">Services</Link></li>
                <li><Link className="transition-colors hover:text-foreground" to="/resources">Resources</Link></li>
                <li><Link className="transition-colors hover:text-foreground" to="/our-impact">Our Impact</Link></li>
                <li><Link className="transition-colors hover:text-foreground" to="/intake">Start Intake</Link></li>
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
