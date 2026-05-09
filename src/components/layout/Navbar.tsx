import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/8 bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-container items-center justify-between gap-6 px-4 py-4 md:px-8">
        <Link
          href="/"
          className="font-display text-sm font-bold tracking-tight text-cream"
        >
          AMK<span className="text-lime">.</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-1 gap-y-2" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm text-mute transition hover:text-cream md:px-4"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
