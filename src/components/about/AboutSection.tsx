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
      className="section-y border-t border-white/5 bg-carbon/40"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-container gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="relative mx-auto max-w-sm md:mx-0">
          <div className="glass-strong overflow-hidden rounded-3xl p-2 shadow-glow-cyan">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-midnight">
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
            className="font-display text-3xl font-bold tracking-tight text-soft md:text-4xl"
          >
            Engineering with{" "}
            <span className="text-gradient">depth & clarity</span>
          </h2>
          <p className="text-lg leading-relaxed text-glass">
            I work across embedded systems and modern software — sensors, IoT,
            and connectivity on one side; polished interfaces, APIs, and
            real-time products on the other. The thread is simple: ship systems
            that work where it matters.
          </p>
          <p className="text-glass">
            Telecom-aware thinking, disciplined debugging, and a bias toward
            measurable outcomes — from firmware timing to frontend motion.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-soft/90"
              >
                {s}
              </span>
            ))}
          </div>
          <div>
            <Link
              href="/about"
              className="inline-flex text-sm font-semibold text-neon underline-offset-4 hover:underline"
            >
              Full story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
