"use client";

import dynamic from "next/dynamic";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";
import { ProfilePortrait } from "@/components/hero/ProfilePortrait";
import { HeroRoleLine } from "@/components/hero/HeroRoleLine";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HeroCanvas = dynamic(() => import("@/components/hero/HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[220px] items-center justify-center text-xs text-mute">
      …
    </div>
  ),
});

const stats = [
  { value: "10+", label: "Projects shipped" },
  { value: "700+", label: "Commits (tune)" },
  { value: "3+", label: "Years building" },
  { value: "12+", label: "Stack tools" },
];

export function HeroSection() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !root.current) return;
    const q = gsap.utils.selector(root.current);
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(q("[data-hero-line]"), {
      y: 28,
      opacity: 0,
      duration: 0.65,
      stagger: 0.08,
    }).from(
      q("[data-hero-cta]"),
      { y: 16, opacity: 0, duration: 0.5, stagger: 0.06 },
      "-=0.3",
    );
    return () => {
      tl.kill();
    };
  }, [reduced]);

  return (
    <section
      ref={root}
      className="relative overflow-hidden pb-20 pt-24 md:pb-28 md:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-fade" />
      <div className="relative mx-auto max-w-container px-4 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_minmax(280px,400px)] lg:gap-16">
          <div className="order-2 space-y-8 lg:order-1">
            <p
              data-hero-line
              className="text-sm font-medium tracking-wide text-mute"
            >
              Hello, I&apos;m
            </p>
            <h1
              id="hero-heading"
              data-hero-line
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.02] tracking-tight text-cream"
            >
              Asiedu Minta Kwaku
            </h1>
            <div data-hero-line>
              <HeroRoleLine />
            </div>
            <p
              data-hero-line
              className="max-w-2xl text-base leading-relaxed text-mute md:text-lg"
            >
              I&apos;m an engineer focused on embedded systems, connected devices,
              and modern web products — shipping solutions that solve real-world
              problems with a positive, practical impact.
            </p>
            <div className="flex flex-wrap gap-3" data-hero-cta>
              <Button href="/contact">Let&apos;s connect</Button>
              <Button href="/projects" variant="ghost">
                View my work
              </Button>
              <Button href="/about#resume" variant="ghost">
                Résumé
              </Button>
            </div>
            <ul
              className="grid grid-cols-2 gap-6 border-t border-cream/10 pt-8 sm:grid-cols-4"
              data-hero-line
            >
              {stats.map((s) => (
                <li key={s.label}>
                  <p className="font-display text-2xl font-bold text-lime md:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-mute">
                    {s.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-[0.35] md:opacity-45">
              <div className="h-[min(100%,420px)] w-full max-w-md">
                <HeroCanvas />
              </div>
            </div>
            <ProfilePortrait />
          </div>
        </div>
      </div>
    </section>
  );
}
