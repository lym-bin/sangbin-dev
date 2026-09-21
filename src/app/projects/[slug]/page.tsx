import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

// generateStaticParams: 미리 이 slug들로 페이지 만들어놔(요청)
// 빌드할 때 미리 HTML을 만들어두고 나중에 그걸 서빙함
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// generateMetadata: 페이지 컴포넌트랑 같은 파일에서 export하는 함수
// 프로젝트 이름별로 다르게 만들 수 있음
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <p className="text-sm text-zinc-500">{project.period}</p>
      </div>

      <p className="text-zinc-700 dark:text-zinc-300">{project.summary}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-black/10 px-3 py-1 text-xs dark:border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm font-medium">
        {project.links.demo && (
          <a href={project.links.demo} className="underline underline-offset-4">
            Live Demo
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            className="underline underline-offset-4"
          >
            GitHub
          </a>
        )}
      </div>
    </main>
  );
}
