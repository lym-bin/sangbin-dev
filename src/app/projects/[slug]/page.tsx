import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.period}</p>
      <p>{project.summary}</p>

      <ul>
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {project.links.demo && <a href={project.links.demo}>Live Demo</a>}
      {project.links.github && <a href={project.links.github}>GitHub</a>}
    </div>
  );
}
