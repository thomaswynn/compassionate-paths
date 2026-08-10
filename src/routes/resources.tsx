import { createFileRoute, Link } from "@tanstack/react-router";
import { getDriveResources } from "@/lib/resources.functions";
import type { ResourceCategory } from "@/lib/drive-categories";
export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources & Downloads | The Revive Project, LLC" },
      {
        name: "description",
        content:
          "Download compassionate release templates, elderly parole fact sheets, advocacy letters, and case-building guides from The Revive Project document library.",
      },
      { property: "og:title", content: "Resources & Downloads | The Revive Project, LLC" },
      {
        property: "og:description",
        content:
          "Templates, elderly and medical parole fact sheets, advocacy letters, and guides for compassionate release petitions in California.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  loader: () => getDriveResources(),
  component: Resources,
});
function formatDate(value: string | null) {
  if (!value) return null;
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
function Resources() {
  const categories = Route.useLoaderData() as ResourceCategory[];
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="leading-tight">
            <p className="font-display text-lg font-semibold">The Revive Project, LLC</p>
            <p className="rule-eyebrow">Compassionate Release Consulting</p>
          </Link>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <Link className="transition-colors hover:text-foreground" to="/">
              Home
            </Link>
            <Link className="transition-colors hover:text-foreground" to="/eligibility">
              Eligibility
            </Link>
            <Link className="transition-colors hover:text-foreground" to="/services">
              Services
            </Link>
            <Link className="text-foreground transition-colors" to="/resources">
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
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <p className="rule-eyebrow text-ink-foreground/60">Resources</p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] md:text-5xl">
              The Revive Project document library.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/75">
              Templates, fact sheets, advocacy letters, and guides pulled directly from our working
              files. Open a document to read it, or download a copy to fill in for your own case.
              Client case files are private and never listed here.
            </p>
          </div>
        </section>
        <div className="mx-auto max-w-6xl space-y-16 px-5 py-16">
          {categories.map((cat) => (
            <section key={cat.id} id={cat.id}>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl">{cat.title}</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {cat.blurb}
                  </p>
                </div>
              </div>
              {cat.items.length === 0 ? (
                <p className="mt-6 rounded-sm border border-dashed border-border p-6 text-sm text-muted-foreground">
                  Nothing published in this category yet — check back soon, or{" "}
                  <Link to="/" hash="contact" className="text-accent underline-offset-4 hover:underline">
                    ask us directly
                  </Link>
                  .
                </p>
              ) : (
                <ul className="mt-6 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
                  {cat.items.map((item) => (
                    <li key={item.id} className="flex flex-col justify-between gap-4 bg-card p-6">
                      <div>
                        <span className="rule-eyebrow text-accent">{item.kind}</span>
                        <h3 className="mt-2 text-lg leading-snug">{item.name}</h3>
                        {formatDate(item.modified) && (
                          <p className="mt-1 text-xs text-muted-foreground">
                            Updated {formatDate(item.modified)}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={item.downloadUrl}
                          download
                          className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                        >
                          Download
                        </a>
                        <a
                          href={item.viewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-sm border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
                        >
                          View
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center">
            <h2 className="text-2xl md:text-3xl">Need a document that isn't here?</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Tell us the facility and the situation, and we'll send the right forms for your case.
            </p>
            <a
              href="mailto:revivifyfoundation@gmail.com"
              className="mt-7 inline-block rounded-sm bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              revivifyfoundation@gmail.com
            </a>
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
