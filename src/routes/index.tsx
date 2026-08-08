import { createFileRoute, Link } from "@tanstack/react-router";
import wheelchairElder from "@/assets/wheelchair-elder.jpg";
import oxygenElder from "@/assets/oxygen-elder.jpg";
import incarceratedElder from "@/assets/incarcerated-elder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Revive Project, LLC | Compassionate Release Consulting" },
      {
        name: "description",
        content:
          "The Revive Project helps incarcerated people and their families navigate compassionate release and medical parole petitions in California.",
      },
      { property: "og:title", content: "The Revive Project, LLC | Compassionate Release Consulting" },
      {
        property: "og:description",
        content:
          "Medical and ADA documentation, legislative outreach, and wraparound coordination for compassionate release and medical parole petitions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const services = [
  {
    n: "01",
    title: "Medical & ADA Documentation",
    body: "We prepare the medical records, physician declarations, and ADA-related documentation that support compassionate release and medical parole petitions.",
  },
  {
    n: "02",
    title: "Petition & Legislative Outreach",
    body: "Warden requests, state forms, exhaustion timelines, and constituent letters to legislators — assembled, dated, and tracked so nothing lapses.",
  },
  {
    n: "03",
    title: "Release Plan Coordination",
    body: "We coordinate the practical plan courts and agencies need to see: housing, hospice, In-Home Supportive Services (IHSS), transportation, and caregiver arrangements.",
  },
  {
    n: "04",
    title: "Family Guidance",
    body: "Plain-language updates, help communicating with counsel and case managers, and someone to call when the process stalls or the news gets hard.",
  },
];

const steps = [
  ["Intake", "You tell us the name, the facility, and the medical situation. No cost, no obligation."],
  ["Records", "We gather medical records, sentencing documents, and the history needed for the petition."],
  ["Request", "A formal compassionate release or medical parole request goes to the warden or agency, with the clock tracked."],
  ["Filing", "If denied or ignored, the motion moves to the sentencing court with full supporting materials."],
  ["Homecoming", "Housing, hospice, transport, IHSS, and follow-up care arranged before the door opens."],
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold">The Revive Project, LLC</p>
            <p className="rule-eyebrow">Compassionate Release Consulting</p>
          </div>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#what-we-do">
              What We Do
            </a>
            <a className="transition-colors hover:text-foreground" href="#process">
              Process
            </a>
            <Link className="transition-colors hover:text-foreground" to="/eligibility">
              Eligibility
            </Link>
            <Link className="transition-colors hover:text-foreground" to="/services">
              Services
            </Link>
            <Link className="transition-colors hover:text-foreground" to="/resources">
              Resources
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
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:py-24">
            <div>
              <p className="rule-eyebrow text-ink-foreground/60">California Compassionate Release Consulting</p>
              <h1 className="mt-5 text-4xl leading-[1.05] md:text-6xl">
                No one should die in prison waiting on paperwork.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/75">
                The Revive Project, LLC walks families and incarcerated people through compassionate
                release and medical parole petitions — from the first medical record to the day someone
                comes home. We prepare the documentation, track the deadlines, and coordinate the
                release plan so a family can spend that time together instead of on hold.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/intake"
                  className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Start a case review
                </Link>
                <a
                  href="#what-we-do"
                  className="rounded-sm border border-ink-foreground/30 px-6 py-3 text-sm font-medium text-ink-foreground transition-colors hover:bg-ink-foreground/10"
                >
                  See what we do
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={wheelchairElder}
                alt="An elderly man in a wheelchair looking out a window in warm daylight"
                width={1280}
                height={960}
                className="w-full rounded-sm object-cover shadow-soft"
              />
              <img
                src={oxygenElder}
                alt="An elderly woman resting in a hospital bed with a nasal oxygen tube"
                width={1280}
                height={960}
                loading="lazy"
                className="mt-4 w-full rounded-sm object-cover shadow-soft md:absolute md:-bottom-14 md:-left-6 md:mt-0 md:w-1/2 md:border-4 md:border-ink"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-card">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">
            {[
              ["Free", "Intake and eligibility review"],
              ["California", "State and CDCR petitions"],
              ["Medical parole", "Elderly, terminally ill, permanently incapacitated"],
              ["1:1", "A real person on every case"],
            ].map(([big, small]) => (
              <div key={small}>
                <dt className="font-display text-3xl text-foreground">{big}</dt>
                <dd className="mt-1 text-sm leading-snug text-muted-foreground">{small}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="what-we-do" className="mx-auto max-w-6xl px-5 py-20">
          <p className="rule-eyebrow">What We Do</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
            Four kinds of help, from the first phone call to the ride home.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            {services.map((s) => (
              <article key={s.n} className="bg-card p-8">
                <span className="rule-eyebrow text-accent">{s.n}</span>
                <h3 className="mt-3 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <p className="rule-eyebrow">The Process</p>
            <h2 className="mt-4 text-3xl md:text-4xl">Five steps, tracked in the open.</h2>
            <ol className="mt-12 space-y-px overflow-hidden rounded-sm border border-border bg-border">
              {steps.map(([title, body], i) => (
                <li key={title} className="flex gap-5 bg-card p-6 md:p-8">
                  <span className="font-display text-2xl text-accent">{i + 1}</span>
                  <div>
                    <h3 className="text-lg">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="before-after" className="mx-auto max-w-6xl px-5 py-20">
          <p className="rule-eyebrow">Why It Matters</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
            The same man, two very different rooms.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Terminally ill and permanently incapacitated people age out of any public-safety
            argument long before the paperwork catches up. Compassionate release is the difference
            between a cell and a window.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <figure>
              <img
                src={incarceratedElder}
                alt="An elderly man in a CDCR prison jumpsuit, handcuffed and shackled, seated in a wheelchair inside a cell block"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full rounded-sm object-cover shadow-soft"
              />
              <figcaption className="mt-3">
                <span className="rule-eyebrow text-accent">Before</span>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Cuffed and shackled in a cell block, receiving care the facility was never built
                  to give.
                </p>
              </figcaption>
            </figure>
            <figure>
              <img
                src={wheelchairElder}
                alt="The same elderly man at home in a wheelchair, looking out a sunlit window"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full rounded-sm object-cover shadow-soft"
              />
              <figcaption className="mt-3">
                <span className="rule-eyebrow text-accent">After</span>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Home with family, in hospice or IHSS care, with a release plan already in place.
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="resources" className="mx-auto max-w-6xl px-5 py-20">
          <p className="rule-eyebrow">Resources</p>
          <h2 className="mt-4 text-3xl md:text-4xl">The Revive Project document library.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Templates, elderly and medical parole fact sheets, advocacy letters, and case-building
            guides — organized by category with direct downloads. Client case files stay private.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/resources"
              className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Browse resources & downloads
            </Link>
            <Link
              to="/eligibility"
              className="rounded-sm border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Check eligibility criteria
            </Link>
            <Link
              to="/intake"
              className="rounded-sm border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Start the intake form
            </Link>
          </div>
        </section>




        <section id="contact" className="surface-warm">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center">
            <h2 className="text-3xl md:text-4xl">Tell us about your loved one.</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-foreground/75">
              Send the name, the facility, and what you know about the diagnosis. We respond to
              every message, usually within two business days.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="mailto:revivifyfoundation.com"
                className="inline-block rounded-sm bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                revivifyfooundation.com
              </a>
              <a
                href="tel:+15102896801"
                className="inline-block rounded-sm border border-ink-foreground/30 px-7 py-3 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
              >
                (510) 289-6801
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} The Revive Project, LLC — California</p>
          <p>Consulting and case support. Not a law firm; not legal or medical advice.</p>
        </div>
      </footer>
    </div>
  );
}
