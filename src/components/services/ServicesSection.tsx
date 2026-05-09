import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesSection() {
  return (
    <section
      className="section-y border-t border-cream/8"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-container px-4 md:px-8">
        <SectionHeading
          id="services-heading"
          eyebrow="What I offer"
          title="My services"
        />
        <ul className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <li key={s.title}>
              <article className="surface h-full rounded-xl p-6 shadow-card md:p-8">
                <h3 className="font-display text-lg font-bold text-cream md:text-xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute md:text-base">
                  {s.body}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
