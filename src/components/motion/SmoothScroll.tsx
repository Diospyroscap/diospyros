"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const easeOutQuart = (value: number) => 1 - Math.pow(1 - value, 4);

export function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 0.78,
      easing: easeOutQuart,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
