import { focusAreas } from "@/data/focusAreas";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FocusAreasSection() {
  return (
    <section
      className="section-y border-t border-cream/8"
      aria-labelledby="focus-heading"
    >
      <div className="mx-auto max-w-container px-4 md:px-8">
        <SectionHeading
          id="focus-heading"
          eyebrow="Lens"
          title="Areas of focus"
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((f) => (
            <li key={f.title}>
              <article className="surface h-full rounded-xl p-6 shadow-card md:p-7">
                <h3 className="font-display text-base font-bold text-cream md:text-lg">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{f.body}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
