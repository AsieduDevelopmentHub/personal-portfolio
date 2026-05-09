"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

/** In-page sections on the home scroll (labels kept short for the bar). */
const homeAnchors = [
  { href: "/#about", label: "Story" },
  { href: "/#skills", label: "Skills" },
  { href: "/#portfolio", label: "Work" },
  { href: "/#achievements", label: "Awards" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Hello" },
  { href: "/#focus", label: "Focus" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/8 bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-container flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between md:gap-6 md:px-8 md:py-4">
        <div className="flex items-center justify-between gap-4 md:justify-start">
          <Link
            href="/"
            className="font-display text-sm font-bold tracking-tight text-cream"
          >
            AMK<span className="text-lime">.</span>
          </Link>
          <nav
            className="flex flex-wrap items-center justify-end gap-x-0.5 gap-y-1 md:gap-x-1"
            aria-label="Main"
          >
            {mainLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-2.5 py-1.5 text-sm text-mute transition hover:text-cream md:px-4"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        {onHome ? (
          <nav
            aria-label="On this page"
            className="flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-cream/8 pt-3 text-xs text-mute md:border-t-0 md:border-l md:pl-6 md:pt-0"
          >
            <span className="hidden font-semibold uppercase tracking-wider text-cream/50 sm:inline">
              Jump
            </span>
            {homeAnchors.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="rounded-md px-2 py-1 text-mute transition hover:bg-cream/5 hover:text-lime"
              >
                {a.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
