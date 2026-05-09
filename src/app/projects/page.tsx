import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Embedded systems, IoT, and software projects by Asiedu Minta Kwaku.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pb-24 pt-24 md:pt-28">
        <div className="mx-auto max-w-container px-4 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mute">
            Projects
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold text-cream md:text-5xl">
            Case studies &amp; builds
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-mute">
            Deep dives and artifacts will expand here. Each card mirrors the home
            portfolio layout — live demo and source links activate when URLs are
            set in <code className="text-cream/80">src/data/projects.ts</code>.
          </p>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
            {featuredProjects.map((p) => (
              <li key={p.slug} id={p.slug}>
                <ProjectCard project={p} />
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
