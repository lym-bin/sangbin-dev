import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="block rounded-lg border border-black/10 p-5 transition-colors hover:bg-black/2 dark:border-white/10 dark:hover:bg-white/4"
            >
              <h2 className="font-medium">{project.title}</h2>
              <p className="mt-1 text-sm text-zinc-500">{project.period}</p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {project.summary}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
