import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { featuredProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Embedded systems, IoT, and software projects by Asiedu Minta Kwaku.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pb-24 pt-28 md:pt-32">
        <div className="mx-auto max-w-container px-4 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neon">
            Projects
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold text-soft md:text-5xl">
            Case studies &amp; builds
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-glass">
            Deep dives and artifacts will expand here. For now, this index
            mirrors the featured set from the home page.
          </p>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((p) => (
              <li key={p.slug}>
                <article className="glass h-full rounded-3xl p-8">
                  <h2 className="font-display text-2xl font-semibold text-soft">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-glass">{p.tagline}</p>
                  <ul className="mt-4 list-inside list-disc text-sm text-glass/90">
                    {p.focus.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
