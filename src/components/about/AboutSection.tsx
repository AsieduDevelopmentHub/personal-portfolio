import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  "Systems thinking",
  "Field-first reliability",
  "Clear interfaces",
  "Measured delivery",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-y scroll-mt-28 border-t border-cream/8 bg-panel/35"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-container px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <div className="mx-auto w-full max-w-sm lg:mx-0">
            <div className="surface overflow-hidden rounded-xl p-1 shadow-card">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[11px] bg-lifted">
                <Image
                  src="/images/profilepicture.png"
                  alt="Asiedu Minta Kwaku — professional portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 340px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
          <div>
            <SectionHeading id="about-heading" title="About me" />
            <div className="space-y-5 text-base leading-relaxed text-mute md:text-lg">
              <p>
                I build where hardware meets software — embedded devices, IoT
                telemetry, and the web layers that make data legible to people
                who need to act on it quickly.
              </p>
              <p>
                My bias is toward systems you can operate: logging you can
                trust, edge cases named instead of waved away, and interfaces
                that stay fast when the network does not.
              </p>
              <p>
                Outside deep implementation work, I enjoy exploring new tooling,
                tightening developer experience, and collaborating with people
                who care about the problem domain as much as the stack.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {values.map((v) => (
                <li
                  key={v}
                  className="rounded-full border border-cream/12 bg-lifted/60 px-4 py-2 text-sm font-medium text-cream"
                >
                  {v}
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <Link
                href="/about"
                className="text-sm font-semibold text-lime underline decoration-lime/40 underline-offset-[6px] transition hover:decoration-lime"
              >
                Read the longer story →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
