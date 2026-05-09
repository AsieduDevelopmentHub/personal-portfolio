import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="section-y scroll-mt-28 section-band border-t border-cream/8"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-container px-4 md:px-8">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="portfolio-heading"
            eyebrow="Portfolio"
            title="My portfolio"
            compact
          />
          <Link
            href="/projects"
            className="shrink-0 self-start text-sm font-semibold text-mute underline decoration-lime/30 underline-offset-[6px] transition hover:text-cream hover:decoration-lime/80 md:self-end"
          >
            View all projects →
          </Link>
        </div>
        <ul className="grid gap-6 md:grid-cols-2 md:gap-8">
          {featuredProjects.map((p) => (
            <li key={p.slug}>
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
