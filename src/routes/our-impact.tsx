import { createFileRoute, Link } from "@tanstack/react-router";
import reviveLogo from "@/assets/revive Phoenix.png";
import reviveBefore from "@/assets/revive-before.png";
import reviveAfter from "@/assets/revive-after.png";

export const Route = createFileRoute("/our-impact")({
  head: () => ({
    meta: [
      { title: "Our Impact | The Revive Project, LLC" },
      {
        name: "description",
        content:
          "See what compassionate release makes possible: one family's story, from a CDCR prison yard to a living room at home with his grandson.",
      },
      { property: "og:title", content: "Our Impact | The Revive Project, LLC" },
      {
        property: "og:description",
        content:
          "One family's story, from a CDCR prison yard to a living room at home with his grandson.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurImpact,
});

function OurImpact() {
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
            <Link className="text-foreground transition-colors" to="/our-impact">
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
            <p className="rule-eyebrow text-ink-foreground/60">Our Impact</p>
            <h1 className="mt-5 text-4xl leading-[1.08] md:text-5xl">
              One man, two very different rooms.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/75">
              This is why the work matters. A compassionate release petition is the difference
              between growing old on a prison yard and growing old at home, surrounded by the
              people who love you.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <figure>
              <img
                src={reviveBefore}
                alt="An elderly man in a CDCR prison uniform, hunched over and walking slowly with a cane across the prison yard, razor wire fencing behind him"
                width={1280}
                height={960}
                className="w-full rounded-sm object-cover shadow-soft"
              />
              <figcaption className="mt-3">
                <span className="rule-eyebrow text-accent">Before</span>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Still incarcerated, walking the yard alone, years past the point of posing any
                  real risk to public safety.
                </p>
              </figcaption>
            </figure>
            <figure>
              <img
                src={reviveAfter}
                alt="The same elderly man at home in a wheelchair on a porch, smiling and holding his infant grandson while a woman sits beside him"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full rounded-sm object-cover shadow-soft"
              />
              <figcaption className="mt-3">
                <span className="rule-eyebrow text-accent">After</span>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Home with family, holding his grandson, with a release plan already in place.
                </p>
              </figcaption>
            </figure>
          </div>

          <div className="mt-12 max-w-3xl">
            <h2 className="text-2xl md:text-3xl">Every case starts the same way.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A family calls us because someone they love is growing old or getting sicker inside
              a California prison, and they don't know what options exist. We review the medical
              records, identify the strongest pathway — compassionate release, medical parole, or
              elderly parole — and build the case: the documentation, the legislative outreach, and
              the release plan courts and agencies need to see before they'll say yes.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Not every case ends this way. But when it does, it looks like this: someone who was
              cuffed and shackled on a prison yard, home instead, meeting a grandchild for the
              first time.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/intake"
              className="rounded-sm bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Start a free case review
            </Link>
            <Link
              to="/eligibility"
              className="rounded-sm border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Check eligibility criteria
            </Link>
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
                  style={{ height: '120px', width: '120px' }}
                  className="shrink-0 object-contain"
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
