import Image from "next/image";
import Link from "next/link";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "Node.js",
  "FastAPI",
  "Firebase",
  "ESP32",
  "IoT",
  "Flutter",
  "Linux",
];

export function AboutSection() {
  return (
    <section
      className="section-y border-t border-cream/8 bg-panel/50"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-container gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="relative mx-auto max-w-sm md:mx-0">
          <div className="surface overflow-hidden rounded-2xl p-1 shadow-card">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[13px] bg-lifted">
              <Image
                src="/images/profilepicture.png"
                alt="Asiedu Minta Kwaku — professional portrait"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h2
            id="about-heading"
            className="font-display text-3xl font-bold tracking-tight text-cream md:text-4xl"
          >
            Depth where it counts,{" "}
            <span className="text-lime">clarity where it ships</span>
          </h2>
          <p className="text-lg leading-relaxed text-mute">
            I work across embedded systems and modern software — sensors, IoT,
            and connectivity on one side; polished interfaces, APIs, and
            real-time products on the other. The thread is simple: ship systems
            that work where it matters.
          </p>
          <p className="text-mute">
            Telecom-aware thinking, disciplined debugging, and a bias toward
            measurable outcomes — from firmware timing to frontend motion.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-md border border-cream/10 bg-lifted/80 px-2.5 py-1 text-xs font-medium text-cream/90"
              >
                {s}
              </span>
            ))}
          </div>
          <div>
            <Link href="/about" className="link-underline text-sm font-semibold text-cream">
              Full story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
