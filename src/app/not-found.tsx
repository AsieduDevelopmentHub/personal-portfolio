import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] pb-24 pt-28 md:pt-32">
        <div className="mx-auto max-w-container px-4 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mute">
            404
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-tight text-cream md:text-5xl">
            This path does not exist (yet)
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mute">
            The URL may be mistyped, or the page may have moved. If you followed a
            link from elsewhere, tell the owner so they can fix the href — broken
            routes are small paper cuts for real users.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="surface rounded-xl p-6 shadow-card md:p-8">
              <h2 className="font-display text-lg font-bold text-cream">
                Try these instead
              </h2>
              <ul className="mt-4 space-y-3 text-mute">
                <li>
                  <Link
                    href="/"
                    className="text-cream underline decoration-lime/30 underline-offset-4 hover:decoration-lime/80"
                  >
                    Home — full scroll experience
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-cream underline decoration-lime/30 underline-offset-4 hover:decoration-lime/80"
                  >
                    Projects — catalog & process
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-cream underline decoration-lime/30 underline-offset-4 hover:decoration-lime/80"
                  >
                    About — long-form background
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-cream underline decoration-lime/30 underline-offset-4 hover:decoration-lime/80"
                  >
                    Contact — channels & form shell
                  </Link>
                </li>
              </ul>
            </div>
            <div className="surface rounded-xl p-6 shadow-card md:p-8">
              <h2 className="font-display text-lg font-bold text-cream">
                Deep links that should work
              </h2>
              <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-mute">
                <li>
                  <code className="text-cream/85">/about#resume</code> — CV block
                </li>
                <li>
                  <code className="text-cream/85">/projects#sentracore</code> — project anchor
                </li>
                <li>
                  <code className="text-cream/85">/contact#channels</code> — contact cards
                </li>
                <li>
                  <code className="text-cream/85">/#portfolio</code> — home portfolio (from about)
                </li>
              </ul>
              <p className="mt-6 text-sm text-mute">
                If you are developing locally, restart the dev server after adding
                new routes so Next.js picks up new files.
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button href="/">Back to home</Button>
            <Button href="/contact" variant="ghost">
              Report a bad link
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
