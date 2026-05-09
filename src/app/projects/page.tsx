import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { featuredProjects } from "@/data/projects";
import {
  processPhases,
  projectThemes,
  roadmapNotes,
} from "@/data/projectsPageContent";
import { professionalSkillset } from "@/data/skillset";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Embedded systems, IoT, and software projects by Asiedu Minta Kwaku.",
};

const stats = [
  { value: "4", label: "Featured builds" },
  { value: "∞", label: "Experiments" },
  { value: "100%", label: "Ownership mindset" },
  { value: "24/7", label: "Ops empathy" },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-cream/8 pb-16 pt-24 md:pb-20 md:pt-28">
          <div className="mx-auto max-w-container px-4 md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mute">
              Projects
            </p>
            <h1 className="font-display mt-3 max-w-4xl text-4xl font-bold leading-tight text-cream md:text-5xl lg:text-6xl">
              Case studies, shipped work, and the craft behind them
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mute md:text-xl">
              This page collects the same featured work as the home portfolio, but
              surrounds it with process, themes, and roadmap notes — the kind of
              context recruiters and technical partners actually read when they
              are serious.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-mute md:text-lg">
              Each project card supports live demo and repository links once URLs
              are set in{" "}
              <code className="rounded bg-lifted px-1.5 py-0.5 text-sm text-cream/90">
                src/data/projects.ts
              </code>
              . View details jumps to the anchored card on this page for quick
              sharing in email threads.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-6 border-t border-cream/10 pt-10 sm:grid-cols-4">
              {stats.map((s) => (
                <li key={s.label}>
                  <p className="font-display text-2xl font-bold text-lime md:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-mute">
                    {s.label}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Discuss a build</Button>
              <Button href="/about" variant="ghost">
                Read about me
              </Button>
            </div>
          </div>
        </section>

        <section className="section-y section-band border-t border-cream/8">
          <div className="mx-auto max-w-container px-4 md:px-8">
            <SectionHeading
              id="process"
              eyebrow="Delivery"
              title="How projects move from idea to shipped"
            />
            <ol className="grid gap-6 md:grid-cols-2">
              {processPhases.map((phase) => (
                <li key={phase.step}>
                  <article className="surface flex h-full flex-col rounded-xl p-6 shadow-card md:p-8">
                    <span className="font-display text-3xl font-bold text-lime/90">
                      {phase.step}
                    </span>
                    <h3 className="font-display mt-2 text-lg font-bold text-cream md:text-xl">
                      {phase.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-mute md:text-base">
                      {phase.body}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
            <div className="mt-10 max-w-3xl rounded-xl border border-dashed border-cream/15 bg-void/30 p-6 md:p-8">
              <h3 className="font-display text-lg font-bold text-cream">
                What done usually includes
              </h3>
              <p className="mt-3 text-mute">
                Handoff notes, environment templates, seed data where appropriate,
                and a short Loom or written walkthrough for the next owner. For
                embedded work, pinout summaries and flash procedures live next to
                the code, not in a forgotten drive folder.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y border-t border-cream/8">
          <div className="mx-auto max-w-container px-4 md:px-8">
            <SectionHeading
              id="themes"
              eyebrow="Lens"
              title="Themes across the work"
            />
            <ul className="grid gap-6 md:grid-cols-3">
              {projectThemes.map((t) => (
                <li key={t.title}>
                  <article className="surface h-full rounded-xl p-6 shadow-card md:p-7">
                    <h3 className="font-display text-base font-bold text-cream md:text-lg">
                      {t.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mute md:text-base">
                      {t.body}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
            <div className="mt-12 max-w-3xl space-y-4 text-mute">
              <p>
                These themes are not mutually exclusive — most real products touch
                two or three at once. When you read the cards below, look for where
                sensing, safety, and operator experience had to agree; that
                intersection is usually where the interesting engineering lives.
              </p>
            </div>
          </div>
        </section>

        <section
          id="catalog"
          className="section-y scroll-mt-28 border-t border-cream/8 section-band"
        >
          <div className="mx-auto max-w-container px-4 md:px-8">
            <SectionHeading
              id="catalog-heading"
              eyebrow="Catalog"
              title="Featured project cards"
            />
            <p className="-mt-4 mb-10 max-w-3xl text-mute md:-mt-6 md:mb-12">
              Anchors match slugs so you can link directly (for example{" "}
              <Link
                href="/projects#sentracore"
                className="text-lime underline decoration-lime/35 underline-offset-4 hover:decoration-lime/80"
              >
                /projects#sentracore
              </Link>
              ).
            </p>
            <ul className="grid gap-6 md:grid-cols-2 md:gap-8">
              {featuredProjects.map((p) => (
                <li key={p.slug} id={p.slug}>
                  <ProjectCard project={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-y border-t border-cream/8">
          <div className="mx-auto max-w-container px-4 md:px-8">
            <SectionHeading
              id="roadmap"
              eyebrow="Public roadmap"
              title="What will appear here next"
            />
            <ul className="max-w-3xl list-inside list-disc space-y-3 text-mute">
              {roadmapNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-mute">
              If you want early access to a case study draft under NDA, mention
              the project name in your first note — I keep working notes for
              several builds that are not yet public.
            </p>
          </div>
        </section>

        <section className="section-y border-t border-cream/8 section-band">
          <div className="mx-auto max-w-container px-4 md:px-8">
            <SectionHeading
              id="stack"
              eyebrow="Toolkit"
              title="Stack I reach for most often"
            />
            <p className="-mt-4 mb-8 max-w-3xl text-sm text-mute md:-mt-6">
              Same list as the home skillset — duplicated here so this page stands
              alone when shared.
            </p>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {professionalSkillset.map((skill) => (
                <li
                  key={skill}
                  className="surface flex min-h-[3rem] items-center justify-center rounded-lg px-2 py-2.5 text-center text-xs font-medium text-cream/90 shadow-card ring-1 ring-transparent sm:text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-y border-t border-cream/8">
          <div className="mx-auto max-w-container px-4 text-center md:px-8">
            <h2 className="font-display text-2xl font-bold text-cream md:text-3xl">
              Want something in this shape for your product?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-mute">
              Send constraints, not vibes — stack, timeline, and what success looks
              like on day one and day ninety.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact">Contact</Button>
              <Button href="/" variant="ghost">
                Back to home
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
