import Link from "next/link";
import TechChip from "@/components/TechChip";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-lg border border-black/10 p-5 transition-transform duration-200 hover:scale-[1.02] hover:bg-black/2 dark:border-white/10 dark:hover:bg-white/4"
    >
      <h3 className="font-medium transition-colors group-hover:text-black dark:group-hover:text-white">
        {project.title}
      </h3>
      <p className="mt-1 text-sm text-zinc-500">{project.period}</p>
      <p className="mt-1 text-sm text-zinc-600 transition-colors group-hover:text-zinc-800 dark:text-zinc-400 dark:group-hover:text-zinc-200">
        {project.summary}
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <TechChip key={tech} name={tech} />
        ))}
      </div>
    </Link>
  );
}
