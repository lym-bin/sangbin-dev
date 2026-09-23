"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <nav className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1 rounded-full border border-black/10 bg-white/95 px-3 py-5 shadow-lg backdrop-blur print:hidden dark:border-white/15 dark:bg-zinc-800/95 lg:flex">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeId === section.id
              ? "bg-zinc-100 text-zinc-950 dark:bg-zinc-700 dark:text-zinc-50"
              : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
          }`}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
