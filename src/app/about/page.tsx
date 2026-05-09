import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  workPrinciples,
  milestones,
  educationEntries,
} from "@/data/aboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, skills, and engineering philosophy of Asiedu Minta Kwaku.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-cream/8 pb-16 pt-24 md:pb-20 md:pt-28">
          <div className="mx-auto max-w-container px-4 md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mute">
              About
            </p>
            <h1 className="font-display mt-3 max-w-4xl text-4xl font-bold leading-tight text-cream md:text-5xl lg:text-6xl">
              Building systems that behave in the real world — not just in demos
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mute md:text-xl">
              I am Asiedu Minta Kwaku, an embedded systems engineer and software
              developer. This page is a longer-form companion to the home site:
              how I think, what I optimize for, and the kinds of teams and
              problems I want next to the whiteboard.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-mute md:text-lg">
              If you are hiring, collaborating, or comparing builders for a tough
              product cycle, the sections below are deliberately detailed — skim
              the headings first, then dive where the match looks strongest.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Start a conversation</Button>
              <Button href="/projects" variant="ghost">
                Browse projects
              </Button>
              <Button href="/#portfolio" variant="ghost">
                Portfolio on home
              </Button>
            </div>
          </div>
        </section>

        <section className="section-y section-band border-t border-cream/8">
          <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
              <div className="mx-auto w-full max-w-sm lg:mx-0">
                <div className="surface overflow-hidden rounded-xl p-1 shadow-card">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[11px] bg-lifted">
                    <Image
                      src="/images/profilepicture.png"
                      alt="Asiedu Minta Kwaku"
                      fill
                      sizes="(max-width: 1024px) 90vw, 320px"
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>
                <p className="mt-4 text-center text-sm text-mute lg:text-left">
                  Same portrait as across the site — consistency beats novelty in
                  personal branding.
                </p>
              </div>
              <div>
                <SectionHeading id="story" title="Story & focus" />
                <div className="space-y-5 text-base leading-relaxed text-mute md:text-lg">
                  <p>
                    My work spans low-level constraints — timing, sensors, power,
                    radio — and higher-level product craft: APIs, dashboards, and
                    motion-aware frontends. I care about the full path from
                    prototype to something people trust when connectivity is bad
                    and patience is thin.
                  </p>
                  <p>
                    Telecom and systems thinking inform how I approach
                    reliability, observability, and failure modes. I am allergic
                    to hand-wavy “we will fix it later” when “later” means a device
                    in another country or a clinic during peak hours.
                  </p>
                  <p>
                    On the creative side, I enjoy interfaces that reward attention
                    without stealing focus from the job the software is doing.
                    Motion, depth, and typography should answer questions, not
                    decorate slides.
                  </p>
                  <p>
                    Today I am most energized by teams that mix hardware and
                    software maturity levels — where my role can be glue as much as
                    implementation: translating field reality for web engineers,
                    and translating product urgency for firmware timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y border-t border-cream/8">
          <div className="mx-auto max-w-container px-4 md:px-8">
            <SectionHeading
              id="principles"
              eyebrow="Operating system"
              title="How I work with teams"
            />
            <ul className="grid gap-6 md:grid-cols-2">
              {workPrinciples.map((item) => (
                <li key={item.title}>
                  <article className="surface h-full rounded-xl p-6 shadow-card md:p-8">
                    <h3 className="font-display text-lg font-bold text-cream md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mute md:text-base">
                      {item.body}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-y section-band border-t border-cream/8">
          <div className="mx-auto max-w-container px-4 md:px-8">
            <SectionHeading
              id="timeline"
              eyebrow="Trajectory"
              title="Background in chapters"
            />
            <ol className="relative space-y-8 border-l border-cream/15 pl-8 md:pl-11">
              {milestones.map((m) => (
                <li key={m.title} className="relative">
                  <span className="absolute -left-[33px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-void bg-lime md:-left-[37px]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                    {m.period}
                  </p>
                  <h3 className="font-display mt-1 text-xl font-bold text-cream md:text-2xl">
                    {m.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-mute">{m.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-y border-t border-cream/8">
          <div className="mx-auto max-w-container px-4 md:px-8">
            <SectionHeading
              id="education"
              eyebrow="Credentials"
              title="Education & learning footprint"
            />
            <ul className="grid gap-6 md:grid-cols-3">
              {educationEntries.map((e) => (
                <li key={e.title}>
                  <article className="surface flex h-full flex-col rounded-xl p-6 shadow-card md:p-7">
                    <h3 className="font-display text-base font-bold text-cream md:text-lg">
                      {e.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mute">
                      {e.body}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
            <div className="mt-10 max-w-3xl rounded-xl border border-cream/10 bg-lifted/40 p-6 md:p-8">
              <h3 className="font-display text-lg font-bold text-cream">
                Engineering philosophy (long form)
              </h3>
              <p className="mt-3 text-mute">
                I believe software and hardware teams ship faster when they share a
                vocabulary for risk. That means naming assumptions, publishing
                runbooks alongside features, and treating documentation as part of
                the product surface — not a post-launch chore.
              </p>
              <p className="mt-4 text-mute">
                I also believe taste matters: spacing, type rhythm, and calm motion
                reduce cognitive load for operators who already carry enough
                context in their heads. The portfolio itself is a small argument for
                that point of view.
              </p>
              <ul className="mt-6 list-inside list-disc space-y-2 text-sm text-mute md:text-base">
                <li>Prefer boring protocols in the hot path when they are proven.</li>
                <li>Reach for exciting UX where it improves decisions per minute.</li>
                <li>Invest in telemetry early — regret is cheaper than mystery.</li>
                <li>Pair with domain experts; the best bugs are “obvious” in hindsight.</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="resume"
          className="section-y scroll-mt-28 border-t border-cream/8 section-band"
        >
          <div className="mx-auto max-w-container px-4 md:px-8">
            <SectionHeading
              eyebrow="Hiring"
              title="Résumé, CV & references"
            />
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4 text-mute">
                <p>
                  A downloadable PDF and a public references section will attach
                  here when you are ready to publish them. Until then, the fastest
                  path is a short email with role context — I respond with an
                  up-to-date CV and relevant samples.
                </p>
                <p>
                  For background checks or formal HR flows, I can provide
                  structured employment history and education in the format your
                  system expects once we are aligned on mutual interest.
                </p>
              </div>
              <div className="surface rounded-xl p-6 shadow-card md:p-8">
                <h3 className="font-display text-lg font-bold text-cream">
                  Quick checklist before you request a CV
                </h3>
                <ul className="mt-4 list-inside list-decimal space-y-2 text-sm text-mute">
                  <li>Role title and seniority band</li>
                  <li>Stack or domain (embedded, web, hybrid)</li>
                  <li>Location / remote policy and time overlap</li>
                  <li>Contract vs full-time and rough start window</li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/contact">Request CV via contact</Button>
                  <Link
                    href="/"
                    className="inline-flex items-center rounded-md border border-cream/15 px-5 py-2.5 text-sm font-semibold text-cream transition hover:border-lime/50 hover:text-lime"
                  >
                    Back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
