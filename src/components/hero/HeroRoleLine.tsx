"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const roles = [
  "embedded systems engineer",
  "software developer",
  "systems builder",
];

export function HeroRoleLine() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setI((n) => (n + 1) % roles.length), 3200);
    return () => clearInterval(t);
  }, [reduced]);

  if (reduced) {
    return (
      <p className="font-display text-lg font-medium text-mute md:text-xl">
        Embedded systems engineer & software developer
      </p>
    );
  }

  return (
    <p className="font-display text-lg text-mute md:text-xl">
      And I&apos;m a{" "}
      <span className="font-semibold capitalize text-lime transition-colors duration-500">
        {roles[i]}
      </span>
    </p>
  );
}
