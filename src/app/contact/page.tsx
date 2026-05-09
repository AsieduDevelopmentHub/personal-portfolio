import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { contactChannels } from "@/data/contact";
import {
  firstMessageTips,
  collaborationModels,
  contactFaqs,
} from "@/data/contactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Asiedu Minta Kwaku for collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-cream/8 pb-16 pt-24 md:pb-20 md:pt-28">
          <div className="mx-auto max-w-container px-4 md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mute">
              Contact
            </p>
            <h1 className="font-display mt-3 max-w-4xl text-4xl font-bold leading-tight text-cream md:text-5xl lg:text-6xl">
              Let&apos;s talk — the more context, the better the first reply
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mute md:text-xl">
              Whether you are exploring a contract build, a full-time role, or a
              short technical spike, this page gathers every channel and a few
              guardrails so we do not waste each other&apos;s time on mismatched
              expectations.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-mute md:text-lg">
              I read every message that looks like it took more than thirty
              seconds to write. If you are not sure what to include, jump to the
              checklist further down — it is the same structure I use when
              reaching out to other builders.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-cream/12 bg-lifted/60 px-4 py-2 text-sm text-mute">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-lime shadow-[0_0_10px_rgba(201,232,91,0.55)]"
                aria-hidden
              />
              <span>
                Availability: replace this line with your real status (open /
                selective / booked until …).
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#channels">Jump to channels</Button>
              <Button href="/projects" variant="ghost">
                See projects first
              </Button>
            </div>
          </div>
        </section>

        <section
          id="channels"
          className="section-y scroll-mt-28 border-t border-cream/8 section-band"
        >
          <div className="mx-auto max-w-container px-4 md:px-8">
            <SectionHeading
              id="channels-heading"
              eyebrow="Direct lines"
              title="Get in touch"
            />
            <p className="-mt-4 mb-8 max-w-3xl text-mute md:-mt-6">
              Update values in{" "}
              <code className="rounded bg-lifted px-1.5 py-0.5 text-sm text-cream/90">
                src/data/contact.ts
              </code>{" "}
              — the cards below read from that file so the home page and this page
              stay in sync when you edit once.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contactChannels.map((c) => (
                <li key={c.label}>
                  <div className="surface flex h-full flex-col rounded-xl p-6 shadow-card">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-mute">
                      {c.label}
                    </h3>
                    {c.href ? (
                      <Link
                        href={c.href}
                        className="mt-3 text-base font-semibold text-cream underline decoration-lime/30 underline-offset-[6px] transition hover:decoration-lime/80"
                      >
                        {c.value}
                      </Link>
                    ) : (
                      <p className="mt-3 text-base font-semibold text-cream">
                        {c.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-y border-t border-cream/8">
          <div className="mx-auto max-w-container px-4 md:px-8">
            <SectionHeading
              id="message"
              eyebrow="First contact"
              title="What makes a strong first message"
            />
            <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,400px)]">
              <ul className="space-y-4 text-mute">
                {firstMessageTips.map((tip) => (
                  <li key={tip} className="flex gap-3">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime"
                      aria-hidden
                    />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
              <aside className="surface rounded-xl p-6 shadow-card md:p-8">
                <h3 className="font-display text-lg font-bold text-cream">
                  Response time
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  Replace this block with your typical reply window (for example
                  within two business days). If you use a scheduling link, paste
                  it here as a button styled like the primary CTA.
                </p>
                <p className="mt-4 text-sm text-mute">
                  For urgent production incidents where I already have a support
                  agreement, use the escalation path documented in that contract —
                  not this public form.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="section-y border-t border-cream/8 section-band">
          <div className="mx-auto max-w-container px-4 md:px-8">
            <SectionHeading
              id="collaboration"
              eyebrow="Engagement shapes"
              title="Ways we can work together"
            />
            <ul className="grid gap-6 md:grid-cols-2">
              {collaborationModels.map((m) => (
                <li key={m.title}>
                  <article className="surface h-full rounded-xl p-6 shadow-card md:p-8">
                    <h3 className="font-display text-lg font-bold text-cream md:text-xl">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mute md:text-base">
                      {m.body}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-y border-t border-cream/8">
          <div className="mx-auto max-w-container px-4 md:px-8">
            <SectionHeading
              id="form"
              eyebrow="Write in"
              title="Message form (wire-up next)"
            />
            <p className="-mt-4 mb-8 max-w-3xl text-mute md:-mt-6">
              Fields are static for now — connect to Formspree, Resend, your API
              route, or a server action when you are ready. Keeping the layout here
              avoids an empty-looking contact page.
            </p>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="surface rounded-xl p-6 shadow-card md:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-mute">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-md border border-cream/12 bg-void/60 px-3 py-2.5 text-cream placeholder:text-mute/50 focus:border-lime/40 focus:outline-none focus:ring-1 focus:ring-lime/30"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-mute">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="mt-2 w-full rounded-md border border-cream/12 bg-void/60 px-3 py-2.5 text-cream placeholder:text-mute/50 focus:border-lime/40 focus:outline-none focus:ring-1 focus:ring-lime/30"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-mute">
                      Topic
                    </span>
                    <input
                      type="text"
                      name="topic"
                      placeholder="e.g. ESP32 fleet dashboard"
                      className="mt-2 w-full rounded-md border border-cream/12 bg-void/60 px-3 py-2.5 text-cream placeholder:text-mute/50 focus:border-lime/40 focus:outline-none focus:ring-1 focus:ring-lime/30"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-mute">
                      Message
                    </span>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Goals, timeline, links to specs or repos…"
                      className="mt-2 w-full resize-y rounded-md border border-cream/12 bg-void/60 px-3 py-2.5 text-cream placeholder:text-mute/50 focus:border-lime/40 focus:outline-none focus:ring-1 focus:ring-lime/30"
                    />
                  </label>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    disabled
                    className="cursor-not-allowed rounded-md bg-lime/35 px-6 py-2.5 text-sm font-semibold text-void/70"
                  >
                    Send (connect backend)
                  </button>
                  <span className="text-xs text-mute">
                    Until wired, use email from the cards above.
                  </span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="surface rounded-xl p-6 shadow-card">
                  <h3 className="font-display text-base font-bold text-cream">
                    Prefer async?
                  </h3>
                  <p className="mt-2 text-sm text-mute">
                    Long threads are fine — include bullet lists and links so
                    replies can be equally structured.
                  </p>
                </div>
                <div className="surface rounded-xl p-6 shadow-card">
                  <h3 className="font-display text-base font-bold text-cream">
                    Prefer a call?
                  </h3>
                  <p className="mt-2 text-sm text-mute">
                    Add two or three time windows in your note; I will confirm one
                    or propose alternatives without endless ping-pong.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y border-t border-cream/8 section-band">
          <div className="mx-auto max-w-container px-4 md:px-8">
            <SectionHeading
              id="faq"
              eyebrow="FAQ"
              title="Questions people ask before the first call"
            />
            <ul className="mx-auto max-w-3xl space-y-6">
              {contactFaqs.map((item) => (
                <li
                  key={item.q}
                  className="border-b border-cream/10 pb-6 last:border-0 last:pb-0"
                >
                  <h3 className="font-display text-lg font-bold text-cream">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-mute">{item.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-y border-t border-cream/8">
          <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="surface rounded-xl px-6 py-10 text-center shadow-card md:px-12 md:py-12">
              <h2 className="font-display text-2xl font-bold text-cream md:text-3xl">
                Rather keep it on one screen?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-mute">
                The home page has the same contact strip and portfolio preview if
                you are sharing a shorter link with someone who only has a minute.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/">Back to home</Button>
                <Button href="/about" variant="ghost">
                  Long-form about
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
