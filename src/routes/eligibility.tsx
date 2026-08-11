import { createFileRoute, Link } from "@tanstack/react-router";
import reviveLogo from "@/assets/revive Phoenix.png";

export const Route = createFileRoute("/eligibility")({
  head: () => ({
    meta: [
      { title: "Eligibility | The Revive Project, LLC" },
      {
        name: "description",
        content: "Learn who qualifies for compassionate release in California. Elderly adults and serious illness criteria.",
      },
      { property: "og:title", content: "Eligibility | The Revive Project, LLC" },
      {
        property: "og:description",
        content: "Compassionate release eligibility criteria in California for elderly and medically ill incarcerated adults.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Eligibility,
});

const criteria = [
  {
    title: "Age & Long Sentence",
    body: "You are 60+ years old and have already served 30+ years.",
  },
  {
    title: "Serious Medical Illness",
    body: "You have a terminal illness (prognosis <18 months), advanced dementia, or a chronic condition making incarceration unsafe.",
  },
  {
    title: "Significant Rehabilitation",
    body: "You have shown genuine change: education, programming, zero disciplinary infractions, and community plans.",
  },
  {
    title: "Low Risk to Public Safety",
    body: "You have no current gang affiliations, no violent history, and strong family or community ties.",
  },
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
            <Link className="transition-colors hover:text-foreground" to="/about">About</Link>
            <Link className="transition-colors hover:text-foreground" to="/">Home</Link>
            <Link className="text-foreground transition-colors" to="/eligibility">Eligibility</Link>
            <Link className="transition-colors hover:text-foreground" to="/services">Services</Link>
            <Link className="transition-colors hover:text-foreground" to="/resources">Resources</Link>
            <Link className="transition-colors hover:text-foreground" to="/our-impact">Our Impact</Link>
          </nav>
          <Link to="/intake" className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">Get Help</Link>
        </div>
      </header>

      <main>
        <section className="surface-warm">
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-20">
            <p className="rule-eyebrow text-ink-foreground/60">Who Qualifies</p>
            <h1 className="mt-5 text-5xl leading-[1.08] md:text-6xl">Eligibility criteria for compassionate release.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-foreground/75">Compassionate release is available to California incarcerated people who meet specific medical, age, or rehabilitative criteria. We help families understand whether their loved one might qualify.</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-12">
          <img src="/Group of old men inprison.png" alt="Group of elderly men in prison showing compassion and community" className="w-full rounded-lg shadow-lg" />
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {criteria.map((item, i) => (
              <article key={i} className="rounded-sm border border-border bg-card p-7">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-16">
          <div className="rounded-sm bg-secondary/40 p-8">
            <h2 className="text-3xl md:text-4xl">Not sure if your loved one qualifies?</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Start with our free phone consultation. We'll review the medical history, sentencing details, and circumstances to tell you honestly whether a compassionate release petition has a reasonable chance.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/intake" className="inline-block rounded-sm bg-accent px-7 py-3 text-base font-semibold text-accent-foreground transition-opacity hover:opacity-90">Start a free case review</Link>
              <a href="mailto:revivifyfoundation@gmail.com" className="inline-block rounded-sm border border-ink-foreground/30 px-7 py-3 text-base font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10">Email us</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4">
                <img src={reviveLogo} alt="Revive Foundation seal" width={500} height={500} loading="lazy" style={{ height: '72px', width: '72px' }} className="shrink-0 object-contain"
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
