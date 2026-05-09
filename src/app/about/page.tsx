import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, skills, and engineering philosophy of Asiedu Minta Kwaku.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pb-24 pt-24 md:pt-28">
        <div className="mx-auto max-w-container px-4 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mute">
            About
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold text-cream md:text-5xl">
            Asiedu Minta Kwaku
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-mute">
            Embedded systems engineer and software developer focused on
            dependable products — hardware, connectivity, and interfaces that
            feel intentional.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-[280px_1fr] md:items-start">
            <div className="surface overflow-hidden rounded-xl p-1 shadow-card">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[11px] bg-lifted">
                <Image
                  src="/images/profilepicture.png"
                  alt="Asiedu Minta Kwaku"
                  fill
                  sizes="280px"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="space-y-6 leading-relaxed text-mute">
              <p>
                My work spans low-level constraints — timing, sensors, power,
                radio — and higher-level product craft: APIs, dashboards, and
                motion-rich frontends. I care about the full path from prototype
                to something people trust in the field.
              </p>
              <p>
                Telecom and systems thinking inform how I approach reliability,
                observability, and failure modes. On the creative side, I enjoy
                interfaces that reward attention without stealing focus from the
                job the software is doing.
              </p>
            </div>
          </div>

          <section
            id="resume"
            className="mt-20 scroll-mt-28 border-t border-cream/10 pt-16"
          >
            <h2 className="font-display text-2xl font-semibold text-cream">
              Résumé &amp; CV
            </h2>
            <p className="mt-3 max-w-2xl text-mute">
              A downloadable PDF will live here. Until it is published, reach
              out via the contact page and I will share an up-to-date CV.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-md bg-lime px-6 py-3 text-sm font-semibold text-void shadow-card transition hover:bg-lime-hover hover:shadow-card-hover"
            >
              Request CV
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
