import { createFileRoute, Link } from "@tanstack/react-router";
import reviveLogo from "@/assets/revive Phoenix.png";
import withOfficial from "@/assets/IMG_20251211_180525_775.jpg";
import oaklandVolunteers from "@/assets/IMG_20260122_193644.jpg";
import capitolSteps from "../../IMG_20260423_091609_027.jpg";
import cropVolunteers from "../../IMG_20260122_193653.jpg";
import summitPanel from "../../1000018914.jpg";
import summitSister from "../../IMG_20260513_124617_485.jpg";
import galleryEvent from "../../image.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Founder | The Revive Project, LLC" },
      {
        name: "description",
        content:
          "Thirty-nine years inside taught the founder of The Revive Project what unnecessary suffering looks like. Today he builds compassionate release cases for elderly and terminally ill people in California prisons.",
      },
      { property: "og:title", content: "About the Founder | The Revive Project, LLC" },
      {
        property: "og:description",
        content:
          "From the Seniors Affairs Committee and twelve years as a law clerk to a compassionate release won in open court.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const milestones = [
  [
    "The Seniors Affairs Committee",
    "At Mule Creek State Prison I founded the Seniors Affairs Committee, a special interest group for aging and disabled men. We brought ADA violations and untreated medical conditions directly to the people who could act on them — the wardens, the heads of the medical departments, and the federal receiver overseeing prison health care.",
  ],
  [
    "Twelve years as a law clerk",
    "When I transferred, I carried the work with me and spent twelve years as a law clerk. That is where the advocacy became technical: reading the statutes, learning what the courts actually require, and helping men build records that agencies could not simply set aside.",
  ],
  [
    "A friend who was told no",
    "My friend met the criteria for compassionate release on both grounds — an end-of-life trajectory, and a disability severe enough that he posed no threat to anyone. His own primary care doctor denied him anyway. So I built a strategic plan and started working it.",
  ],
  [
    "Approved, opposed, and ordered released",
    "Three months after I initiated it, every doctor in the chain approved, all the way up to California Correctional Health Care Services. The District Attorney opposed us in court across five days and more than twenty hours of argument. The judge ruled in our favor. My friend was ordered released.",
  ],
];

const gallery = [
  {
    src: oaklandVolunteers,
    alt: "The founder with fellow volunteers at a community service event in Oakland",
    caption: "Volunteering with community partners in Oakland.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: cropVolunteers,
    alt: "The founder with a group of volunteers and county staff at a community event",
    caption: "Building relationships across county and community organizations.",
    span: "",
  },
  {
    src: summitPanel,
    alt: "The founder with attendees at the Restorative Justice Ministry Leadership Summit",
    caption: "Restorative Justice Ministry Leadership Summit.",
    span: "md:col-span-2",
  },
  {
    src: summitSister,
    alt: "The founder with a longtime prison ministry volunteer at the Restorative Justice Ministry Leadership Summit",
    caption: "With longtime allies in prison and re-entry ministry.",
    span: "",
  },
  {
    src: galleryEvent,
    alt: "The founder with two community leaders at a re-entry program event",
    caption: "With re-entry program leaders and public servants.",
    span: "",
  },
  {
    src: withOfficial,
    alt: "The founder speaking with an elected official at a community reception",
    caption: "Bringing elder justice directly to elected officials.",
    span: "md:col-span-2",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="leading-tight">
            <p className="font-display text-lg font-semibold">The Revive Project, LLC</p>
            <p className="rule-eyebrow">Compassionate Release Consulting</p>
          </Link>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <Link className="text-foreground transition-colors" to="/about">
              About
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
              <p className="rule-eyebrow text-ink-foreground/60">About the Founder</p>
              <h1 className="mt-5 text-4xl leading-[1.05] md:text-5xl">
                I spent thirty-nine years watching men suffer for no reason at all.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/75">
                By the time a man turns forty inside, the argument that he is a danger to anyone has
                usually run out. What is left is a body breaking down in a place that was never
                built to care for it. I watched that happen for thirty-nine years, and I decided to
                do something about it — first from the inside, and now from out here.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/intake"
                  className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Start a free case review
                </Link>
                <Link
                  to="/our-impact"
                  className="rounded-sm border border-ink-foreground/30 px-6 py-3 text-sm font-medium text-ink-foreground transition-colors hover:bg-ink-foreground/10"
                >
                  See our impact
                </Link>
              </div>
            </div>
            <div>
              <img
                src={capitolSteps}
                alt="The founder of The Revive Project outside the California State Capitol during an advocacy day"
                width={1280}
                height={1700}
                className="w-full rounded-sm object-cover shadow-soft"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-card">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">
            {[
              ["39 years", "Lived experience inside"],
              ["12 years", "Served as a law clerk"],
              ["Founder", "Seniors Affairs Committee"],
              ["20+ hours", "Argued against DA opposition"],
            ].map(([big, small]) => (
              <div key={small}>
                <dt className="font-display text-3xl text-foreground">{big}</dt>
                <dd className="mt-1 text-sm leading-snug text-muted-foreground">{small}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <p className="rule-eyebrow">The Work</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
            How advocacy turned into a process that works.
          </h2>
          <ol className="mt-12 space-y-px overflow-hidden rounded-sm border border-border bg-border">
            {milestones.map(([title, body], i) => (
              <li key={title} className="flex gap-5 bg-card p-6 md:p-8">
                <span className="font-display text-2xl text-accent">{i + 1}</span>
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
            <p className="rule-eyebrow">In the Community</p>
            <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
              Giving it back to the community that took me back.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              I did not stop advocating when I came home. I continue to meet as an advocate for the
              elderly with local members of the community, with Assembly members, and with anyone
              else whose decisions land on the people I used to sit beside. Aging and dying in
              custody is a policy choice, and policy can be changed.
            </p>
            <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[240px] md:grid-cols-4">
              {gallery.map((photo) => (
                <figure
                  key={photo.caption}
                  className={`group relative overflow-hidden rounded-sm shadow-soft ${photo.span}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 text-xs leading-snug text-white">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-20 text-center">
          <p className="rule-eyebrow">Why This Exists</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Tell me about your loved one.</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Every case that comes to The Revive Project gets the same thing my friend got: someone
            who knows exactly how the system works, building the record the doctors and the courts
            need to see, and staying on it until the answer comes back. If someone you love is
            elderly, terminally ill, or permanently incapacitated in a California prison, the first
            review costs nothing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
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
