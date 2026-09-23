"use client";
import { techIcons, techColors } from "@/lib/tech-icons";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const skillGroups = [
  {
    category: "프로젝트 사용",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
    ],
  },

  {
    category: "배포 및 기타, 디자인 경험",
    skills: ["Firebase", "Figma", "Git", "Vite", "Next.js"],
  },
];

export default function SkillChips() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chips = containerRef.current?.querySelectorAll(".skill-chip");
      if (!chips) return;

      gsap.from(chips, {
        opacity: 0,
        y: 8,
        duration: 0.4,
        stagger: 0.03,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
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
            {group.skills.map((skill) => {
              const key = skill.trim().toLowerCase();
              const Icon = techIcons[key];
              const color = techColors[key];

              return (
                <span
                  key={skill}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  className="skill-chip inline-flex items-center gap-1 rounded-full border border-black/10 bg-zinc-50 px-3 py-1 text-xs dark:border-white/15 dark:bg-zinc-900"
                >
                  {Icon && <Icon size={12} style={{ color }} />}
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
