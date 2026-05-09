import Link from "next/link";

const explore = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

const anchors = [
  { href: "/#portfolio", label: "Featured work" },
  { href: "/#skills", label: "Skillset" },
  { href: "/about#resume", label: "Résumé" },
  { href: "/contact#form", label: "Message form" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-panel">
      <div className="mx-auto max-w-container px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <p className="font-display text-lg font-bold text-cream">
              Asiedu Minta Kwaku
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-mute">
              Embedded systems, connected products, and web interfaces — built
              with the same rigor for field behavior and for the humans operating
              the system.
            </p>
            <p className="mt-6 text-xs text-mute">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-mute">
              Explore
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/90 underline decoration-lime/25 underline-offset-4 transition hover:decoration-lime/70"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-mute">
              Quick links
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {anchors.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/90 underline decoration-lime/25 underline-offset-4 transition hover:decoration-lime/70"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-cream/10 pt-8 text-center text-xs text-mute">
          Crafted with Next.js, GSAP, Three.js, and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
