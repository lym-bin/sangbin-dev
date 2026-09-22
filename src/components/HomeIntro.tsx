"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

export default function HomeIntro({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll(".intro-item");
      if (!items) return;

      gsap.from(items, {
        opacity: 0,
        y: 18,
        duration: 0.5,
        stagger: 0.12,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
