import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects - 임상빈",
  description: "임상빈의 개인 프로젝트 목록입니다.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </main>
  );
}
