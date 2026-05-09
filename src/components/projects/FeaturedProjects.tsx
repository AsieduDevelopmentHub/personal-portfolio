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
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neon">
              Selected work
            </p>
            <h2
              id="projects-heading"
              className="font-display mt-2 text-3xl font-bold text-soft md:text-4xl"
            >
              Featured <span className="text-gradient">projects</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold text-glass underline-offset-4 hover:text-soft hover:underline"
          >
            View all projects →
          </Link>
        </div>
        <ul className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((p) => (
            <li key={p.slug}>
              <article className="group glass relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow md:p-8">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-violet/10 opacity-0 transition group-hover:opacity-100" />
                <h3 className="font-display text-xl font-semibold text-soft md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-glass md:text-base">{p.tagline}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-neon/90 ring-1 ring-white/10"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-glass/90">
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
