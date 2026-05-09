"use client";

import dynamic from "next/dynamic";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";
import { ProfilePortrait } from "@/components/hero/ProfilePortrait";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HeroCanvas = dynamic(() => import("@/components/hero/HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[240px] items-center justify-center text-sm text-glass">
      Loading scene…
    </div>
  ),
});

export function HeroSection() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !root.current) return;
    const q = gsap.utils.selector(root.current);
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(q("[data-hero-line]"), {
      y: 36,
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
    }).from(
      q("[data-hero-cta]"),
      { y: 20, opacity: 0, duration: 0.55, stagger: 0.08 },
      "-=0.35",
    );
    return () => {
      tl.kill();
    };
  }, [reduced]);

  return (
    <section
      ref={root}
      className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-32"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.22),transparent)]" />
      <div className="relative mx-auto flex max-w-container flex-col gap-14 px-4 lg:flex-row lg:items-center lg:gap-10 lg:px-8">
        <div className="flex-1 space-y-8">
          <p
            data-hero-line
            className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-neon md:text-sm"
          >
            Asiedu Development Hub
          </p>
          <h1
            id="hero-heading"
            data-hero-line
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-soft md:text-5xl lg:text-6xl"
          >
            Asiedu{" "}
            <span className="text-gradient">Minta Kwaku</span>
          </h1>
          <p
            data-hero-line
            className="max-w-xl text-lg text-glass md:text-xl md:leading-relaxed"
          >
            Embedded systems engineer and software developer building
            intelligent, real-world systems — from IoT and hardware to modern
            interactive web experiences.
          </p>
          <div className="flex flex-wrap gap-3" data-hero-cta>
            <Button href="/projects">View Projects</Button>
            <Button href="/contact" variant="ghost">
              Contact Me
            </Button>
            <Button href="/about#resume" variant="ghost">
              Download CV
            </Button>
          </div>
        </div>

        <div className="relative flex flex-1 flex-col items-center justify-center">
          <div className="absolute inset-0 -z-10 opacity-90 md:opacity-100">
            <HeroCanvas />
          </div>
          <ProfilePortrait />
        </div>
      </div>
    </section>
  );
}
