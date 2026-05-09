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
      const max = 6;
      wrap.current.style.transform = `perspective(1000px) rotateY(${x * max}deg) rotateX(${-y * max}deg)`;
    },
    [reduced],
  );

  const onLeave = useCallback(() => {
    if (!wrap.current) return;
    wrap.current.style.transform =
      "perspective(1000px) rotateY(0deg) rotateX(0deg)";
  }, []);

  return (
    <div
      ref={wrap}
      className="relative mx-auto aspect-[3/4] w-full max-w-[300px] transition-transform duration-300 ease-out will-change-transform md:max-w-[360px]"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="surface relative overflow-hidden rounded-2xl p-[3px] shadow-card">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[13px] bg-lifted">
          <Image
            src="/images/profilepicture.png"
            alt="Asiedu Minta Kwaku"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 360px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
