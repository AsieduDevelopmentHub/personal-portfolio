import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section
      className="section-y border-t border-cream/8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-container px-4 md:px-8">
        <div className="surface relative overflow-hidden rounded-xl px-6 py-12 text-center shadow-card md:px-16 md:py-14">
          <div
            className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-lime/10 blur-3xl"
            aria-hidden
          />
          <h2
            id="contact-heading"
            className="font-display relative text-3xl font-bold text-cream md:text-4xl"
          >
            Ready when you are
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-mute md:text-lg">
            Embedded products, full-stack builds, or interfaces that need to
            feel as good as they function — share the brief and we&apos;ll map
            the path.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Get in touch</Button>
            <Button href="/projects" variant="ghost">
              Browse projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
