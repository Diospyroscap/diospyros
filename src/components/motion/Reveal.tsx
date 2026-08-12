"use client";

import type { CSSProperties, ReactNode } from "react";
import { STAGGER_STEP_MS } from "@/lib/motion";
import { useInView } from "./useInView";

export function Reveal({
  children,
  className = "",
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const delay = `${index * STAGGER_STEP_MS}ms`;

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": delay, transitionDelay: delay } as CSSProperties}
    >
      {children}
    </div>
  );
}
