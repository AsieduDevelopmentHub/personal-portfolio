import { achievements } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="section-y scroll-mt-28 section-band border-t border-cream/8"
      aria-labelledby="achievements-heading"
    >
      <div className="mx-auto max-w-container px-4 md:px-8">
        <SectionHeading
          id="achievements-heading"
          eyebrow="Recognition"
          title="Achievements & certifications"
        />
        <ul className="grid gap-6 md:grid-cols-2 md:gap-8">
          {achievements.map((a) => (
            <li key={a.title}>
              <article className="surface h-full rounded-xl p-6 shadow-card md:p-8">
                <h3 className="font-display text-lg font-bold text-cream md:text-xl">
                  {a.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-lime">{a.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-mute md:text-base">
                  {a.body}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
