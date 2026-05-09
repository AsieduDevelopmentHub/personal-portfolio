import Link from "next/link";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section
      id="featured"
      className="section-y"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-container px-4 md:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mute">
              Portfolio
            </p>
            <h2
              id="projects-heading"
              className="font-display mt-2 text-3xl font-bold text-cream md:text-4xl"
            >
              Selected <span className="text-lime">projects</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="link-underline text-sm font-semibold text-mute hover:text-cream"
          >
            View all →
          </Link>
        </div>
        <ul className="grid gap-5 md:grid-cols-2 md:gap-6">
          {featuredProjects.map((p) => (
            <li key={p.slug}>
              <article className="group surface relative flex h-full flex-col overflow-hidden rounded-xl p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover md:p-8">
                <div
                  className="absolute left-0 top-0 h-0.5 w-0 bg-lime transition-all duration-500 group-hover:w-full"
                  aria-hidden
                />
                <h3 className="font-display text-xl font-semibold text-cream md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-mute md:text-base">{p.tagline}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded border border-cream/10 bg-void/40 px-2 py-0.5 text-xs text-cream/85"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-mute">
                  {p.focus.slice(0, 2).join(" · ")}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
