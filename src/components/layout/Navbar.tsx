import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-6">
      <nav
        className="glass flex max-w-container flex-wrap items-center justify-center gap-1 rounded-full px-2 py-2 shadow-glow md:gap-2 md:px-4"
        aria-label="Main"
      >
        <span className="font-display hidden px-3 text-xs font-semibold tracking-[0.2em] text-glass sm:inline md:text-sm">
          AMK
        </span>
        <span className="mx-1 hidden h-4 w-px bg-white/15 sm:block" aria-hidden />
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-full px-3 py-2 text-sm text-glass transition hover:bg-white/10 hover:text-soft md:px-4"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
