import Link from "next/link";
import { contactChannels } from "@/data/contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-y scroll-mt-28 section-band border-t border-cream/8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-container px-4 md:px-8">
        <SectionHeading
          id="contact-heading"
          eyebrow="Collaborate"
          title="Get in touch"
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactChannels.map((c) => (
            <li key={c.label}>
              <div className="surface flex h-full flex-col rounded-xl p-6 shadow-card">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-mute">
                  {c.label}
                </h3>
                {c.href ? (
                  <Link
                    href={c.href}
                    className="mt-3 text-base font-semibold text-cream underline decoration-lime/30 underline-offset-[6px] transition hover:decoration-lime/80"
                  >
                    {c.value}
                  </Link>
                ) : (
                  <p className="mt-3 text-base font-semibold text-cream">{c.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-cream/10 pt-10 text-center md:flex-row md:pt-12">
          <Button href="/contact">Open contact page</Button>
          <Button href="/projects" variant="ghost">
            View my work
          </Button>
        </div>
      </div>
    </section>
  );
}
