import { Button } from "@/components/ui/Button";

export function HomeClosingBand() {
  return (
    <section
      className="border-t border-cream/8 bg-panel/35 py-16 md:py-20"
      aria-labelledby="home-closing-heading"
    >
      <div className="mx-auto max-w-container px-4 text-center md:px-8">
        <h2
          id="home-closing-heading"
          className="font-display text-2xl font-bold text-cream md:text-3xl"
        >
          Thanks for scrolling this far
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-mute md:text-lg">
          The inner pages go even deeper — process on{" "}
          <span className="text-cream/90">Projects</span>, philosophy on{" "}
          <span className="text-cream/90">About</span>, and channels plus a form
          shell on <span className="text-cream/90">Contact</span>. Pick the entry
          point that matches how much time you have.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/contact">Start on contact</Button>
          <Button href="/projects" variant="ghost">
            Read projects page
          </Button>
          <Button href="/about" variant="ghost">
            Long-form about
          </Button>
        </div>
      </div>
    </section>
  );
}
