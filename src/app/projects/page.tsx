import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`}>
              <h2>{project.title}</h2>
              <p>{project.period}</p>
              <p>{project.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
