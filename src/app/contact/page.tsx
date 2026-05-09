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
      <main className="pb-24 pt-24 md:pt-28">
        <div className="mx-auto max-w-container px-4 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mute">
            Contact
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold text-cream md:text-5xl">
            Let&apos;s talk
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-mute">
            Wire up your preferred channel — form integration, email, and social
            links can plug into this section next.
          </p>
          <div className="mt-10 max-w-xl surface rounded-xl p-8 shadow-card">
            <p className="text-sm text-mute">
              <span className="inline-flex items-center gap-2 text-lime">
                <span className="h-2 w-2 rounded-full bg-lime shadow-[0_0_10px_rgba(201,232,91,0.6)]" />
                Availability placeholder
              </span>
            </p>
            <p className="mt-4 text-cream">
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
