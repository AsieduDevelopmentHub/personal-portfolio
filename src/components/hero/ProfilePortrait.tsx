"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ProfilePortrait() {
  const wrap = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduced || !wrap.current) return;
      const rect = wrap.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const max = 8;
      wrap.current.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${-y * max}deg) scale3d(1.02,1.02,1.02)`;
    },
    [reduced],
  );

  const onLeave = useCallback(() => {
    if (!wrap.current) return;
    wrap.current.style.transform =
      "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  }, []);

  return (
    <div
      ref={wrap}
      className="relative mx-auto aspect-[3/4] w-full max-w-[320px] transition-transform duration-300 ease-out will-change-transform md:max-w-[380px]"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-glow opacity-50 blur-2xl"
        aria-hidden
      />
      <div className="glass-strong relative overflow-hidden rounded-[1.75rem] p-1 shadow-glow">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-midnight">
          <Image
            src="/images/profilepicture.png"
            alt="Asiedu Minta Kwaku"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 380px"
            className="object-cover object-top"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/20"
          aria-hidden
        />
      </div>
    </div>
  );
}
