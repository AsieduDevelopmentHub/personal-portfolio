import Link from "next/link";
import type { Project } from "@/data/projects";

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

export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="group relative surface flex h-full flex-col overflow-hidden rounded-xl shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div
        className="absolute left-0 top-0 h-1 w-0 bg-lime transition-all duration-500 group-hover:w-full"
        aria-hidden
      />
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
          {p.category}
        </p>
        <h3 className="font-display mt-2 text-xl font-bold text-cream md:text-2xl">
          {p.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-mute md:text-base">
          {p.description}
        </p>
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
      </div>
    </article>
  );
}
