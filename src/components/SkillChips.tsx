"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const skillGroups = [
  {
    category: "언어 및 프레임워크",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "HTML",
      "CSS",
      "GSAP",
      "Tailwind CSS",
      "Java",
      "Spring",
    ],
  },
  {
    category: "데이터베이스",
    skills: ["MySQL", "Oracle", "Firebase"],
  },
  {
    category: "기타",
    skills: ["Git", "Figma", "Photoshop", "Vite", "Linux"],
  },
];

export default function SkillChips() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chips = containerRef.current?.querySelectorAll(".skill-chip");
    if (!chips) return;

    gsap.from(chips, {
      opacity: 0,
      y: 8,
      duration: 0.4,
      stagger: 0.03,
      ease: "power2.out",
    });
  }, []);

  const handleEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    gsap.to(e.currentTarget, { scale: 1.1, duration: 0.2, ease: "power2.out" });
  };

  const handleLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.2, ease: "power2.out" });
  };

  return (
    <div ref={containerRef} className="flex flex-col gap-4">
      {skillGroups.map((group) => (
        <div key={group.category} className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-zinc-500">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className="skill-chip inline-block rounded-full border border-black/10 px-3 py-1 text-xs dark:border-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
