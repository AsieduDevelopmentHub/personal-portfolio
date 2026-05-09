import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Asiedu Minta Kwaku for collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pb-24 pt-28 md:pt-32">
        <div className="mx-auto max-w-container px-4 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neon">
            Contact
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold text-soft md:text-5xl">
            Let&apos;s talk
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-glass">
            Wire up your preferred channel — form integration, email, and social
            links can plug into this section next.
          </p>
          <div className="mt-10 max-w-xl glass rounded-3xl p-8">
            <p className="text-sm text-glass">
              <span className="inline-flex items-center gap-2 text-success">
                <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
                Availability placeholder
              </span>
            </p>
            <p className="mt-4 text-soft">
              Replace this block with a form component, Cal.com embed, or mailto
              workflow as you finalize the site.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
