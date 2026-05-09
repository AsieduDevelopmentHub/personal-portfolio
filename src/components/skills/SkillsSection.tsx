import { professionalSkillset } from "@/data/skillset";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsSection() {
  return (
    <section
      className="section-y border-t border-cream/8"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-container px-4 md:px-8">
        <SectionHeading
          id="skills-heading"
          eyebrow="Capabilities"
          title="Professional skillset"
        />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {professionalSkillset.map((skill) => (
            <li
              key={skill}
              className="surface flex min-h-[3.25rem] items-center justify-center rounded-lg px-3 py-3 text-center text-sm font-medium text-cream/90 shadow-card ring-1 ring-transparent transition hover:text-lime hover:ring-lime/25"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
