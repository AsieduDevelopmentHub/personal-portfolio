import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section
      className="section-y border-t border-white/5"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-container px-4 md:px-8">
        <div className="glass-strong relative overflow-hidden rounded-[2rem] px-8 py-12 text-center shadow-glow md:px-16 md:py-16">
          <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-electric/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-violet/25 blur-3xl" />
          <h2
            id="contact-heading"
            className="font-display relative text-3xl font-bold text-soft md:text-4xl"
          >
            Let&apos;s build something{" "}
            <span className="text-gradient">remarkable</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-glass md:text-lg">
            Open to collaborations on embedded products, full-stack systems, and
            cinematic interfaces. Tell me about your problem space — I&apos;ll
            help shape the path.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Start a conversation</Button>
            <Button href="/projects" variant="ghost">
              Explore work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
