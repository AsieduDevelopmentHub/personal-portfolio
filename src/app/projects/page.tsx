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
              . “View details” jumps to the anchored card on this page for quick
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
                What “done” usually includes
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
              eyebrow "Lens"
              title="Themes across the work"
            />
```

Wait I made a typo `eyebrow "Lens"` should be `eyebrow="Lens"`

Continue the file - fix and complete




Read