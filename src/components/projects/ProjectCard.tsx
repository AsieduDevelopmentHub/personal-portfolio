import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

function projectInitials(title: string): string {
  return title
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0] ?? "")
    .join("")
    .toUpperCase()
    .slice(0, 4);
}

function ProjectThumbnail({
  project,
  size,
}: {
  project: Project;
  size: "compact" | "detailed";
}) {
  const height = size === "detailed" ? "min-h-[200px] md:min-h-[240px]" : "min-h-[160px] md:min-h-[180px]";

  if (project.coverImage) {
    return (
      <div className={`relative ${height} w-full bg-lifted`}>
        <Image
          src={project.coverImage}
          alt={`${project.title} preview screenshot`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent"
          aria-hidden
        />
      </div>
    );
  }

  const initials = projectInitials(project.title);

  return (
    <div
      role="img"
      aria-label={`${project.title} preview (add coverImage for a screenshot)`}
      className={`relative flex w-full items-center justify-center bg-gradient-to-br from-lifted via-panel to-void ${height}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, rgba(201,232,91,0.35), transparent 45%),
            radial-gradient(circle at 80% 60%, rgba(184,154,111,0.2), transparent 40%)`,
        }}
        aria-hidden
      />
      <span
        className={`font-display font-bold tracking-tight text-lime/35 ${size === "detailed" ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl"}`}
        aria-hidden
      >
        {initials}
      </span>
    </div>
  );
}

function PortfolioLink({
  href,
  children,
  disabled,
}: {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <span className="cursor-not-allowed text-mute/45 line-through decoration-mute/30">
        {children}
      </span>
    );
  }
  const external = href.startsWith("http");
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cream underline decoration-lime/30 underline-offset-[6px] transition hover:decoration-lime/80"
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className="text-cream underline decoration-lime/30 underline-offset-[6px] transition hover:decoration-lime/80"
    >
      {children}
    </Link>
  );
}

type ProjectCardProps = {
  project: Project;
  /** `detailed` shows narrative, highlight columns, and full scope — use on /projects */
  variant?: "compact" | "detailed";
};

export function ProjectCard({ project: p, variant = "compact" }: ProjectCardProps) {
  const detailed = variant === "detailed";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-cream/8 bg-panel/30 shadow-card transition duration-300 hover:-translate-y-1 hover:border-lime/20 hover:shadow-card-hover">
      <div
        className="absolute left-0 top-0 z-10 h-1 w-0 bg-lime transition-all duration-500 group-hover:w-full"
        aria-hidden
      />
      <ProjectThumbnail project={p} size={detailed ? "detailed" : "compact"} />
      <div className={`flex flex-1 flex-col ${detailed ? "p-6 md:p-10" : "p-6 md:p-8"}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-mute">
          <span className="font-semibold uppercase tracking-[0.2em] text-lime">
            {p.category}
          </span>
          <span aria-hidden className="text-cream/20">
            ·
          </span>
          <span>{p.year}</span>
          <span aria-hidden className="text-cream/20">
            ·
          </span>
          <span>{p.role}</span>
        </div>
        <h3 className="font-display mt-2 text-xl font-bold text-cream md:text-2xl">
          {p.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-mute md:text-base">
          {p.description}
        </p>

        {detailed ? (
          <>
            <p className="mt-5 text-sm leading-relaxed text-mute/95 md:text-base">
              {p.detailNarrative}
            </p>
            <div className="mt-8 grid gap-8 border-t border-cream/10 pt-8 md:grid-cols-2">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream">
                  Highlights
                </h4>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-mute">
                  {p.detailHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream">
                  Technical notes
                </h4>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-mute">
                  {p.technicalNotes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-cream/10 pt-8">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream">
                Scope coverage
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.focus.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-cream/10 bg-void/50 px-2.5 py-1 text-xs text-cream/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : null}

        <ul className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <li
              key={t}
              className="rounded border border-cream/10 bg-void/50 px-2.5 py-1 text-xs text-cream/85"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-x-1 gap-y-2 border-t border-cream/10 pt-5 text-sm">
          <PortfolioLink href={p.demoUrl ?? "#"} disabled={!p.demoUrl}>
            Live demo
          </PortfolioLink>
          <span className="px-2 text-mute/40" aria-hidden>
            |
          </span>
          <PortfolioLink href={p.repoUrl ?? "#"} disabled={!p.repoUrl}>
            Source
          </PortfolioLink>
          <span className="px-2 text-mute/40" aria-hidden>
            |
          </span>
          <PortfolioLink href={p.detailHref} disabled={false}>
            View details
          </PortfolioLink>
        </div>
        {detailed ? (
          <p className="mt-4 text-xs text-mute/80">
            Drop real screenshots into{" "}
            <code className="text-cream/70">public/images/projects/</code> and set{" "}
            <code className="text-cream/70">coverImage</code> on this entry in{" "}
            <code className="text-cream/70">projects.ts</code>.
          </p>
        ) : null}
      </div>
    </article>
  );
}
