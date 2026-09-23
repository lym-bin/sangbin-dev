"use client";

import { useRef } from "react";
import gsap from "gsap";
import { techIcons, techColors } from "@/lib/tech-icons";

const keywords = ["React", "TypeScript", "Next.js", "프론트엔드 개발자"];

export default function InteractiveName({ name }: { name: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    const tags = containerRef.current?.querySelectorAll(".name-tag");
    if (!tags) return;

    gsap.to(tags, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    const tags = containerRef.current?.querySelectorAll(".name-tag");
    if (!tags) return;

    gsap.to(tags, {
      opacity: 0,
      y: 8,
      duration: 0.2,
      stagger: 0.03,
      ease: "power2.in",
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        ref={containerRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="relative inline-flex items-center"
      >
        <h1 className="cursor-default text-3xl font-semibold tracking-tight">
          {name}
        </h1>
        <div className="pointer-events-none absolute bottom-full left-0 z-10 mb-6 hidden w-max flex-wrap gap-2 md:flex">
          {keywords.map((keyword) => {
            const key = keyword.trim().toLowerCase();
            const Icon = techIcons[key];
            const color = techColors[key];

            return (
              <span
                key={keyword}
                className="name-tag inline-flex translate-y-2 items-center gap-1.5 whitespace-nowrap rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 opacity-0 shadow-sm dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {Icon && <Icon size={14} style={{ color }} />}
                {keyword}
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 md:hidden">
        {keywords.map((keyword) => {
          const key = keyword.trim().toLowerCase();
          const Icon = techIcons[key];
          const color = techColors[key];

          return (
            <span
              key={keyword}
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 shadow-sm dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300"
            >
              {Icon && <Icon size={14} style={{ color }} />}
              {keyword}
            </span>
          );
        })}
      </div>
    </div>
  );
}
