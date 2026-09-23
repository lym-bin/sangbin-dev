import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import TechChip from "@/components/TechChip";
import ProjectGallery from "@/components/ProjectGallery";

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
      <ProjectGallery
        title={project.title}
        thumbnail={project.thumbnail}
        gallery={project.gallery}
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <p className="text-sm text-zinc-500">
          {project.period} · {project.teamType}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <TechChip key={tech} name={tech} />
          ))}
        </div>
      </div>

      <p className="text-pretty break-keep text-zinc-700 dark:text-zinc-300">
        {project.summary}
      </p>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Motivation</h2>
        <p className="text-pretty break-keep text-sm text-zinc-600 dark:text-zinc-400">
          {project.motivation}
        </p>
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
        {project.links.figma && (
          <a
            href={project.links.figma}
            className="underline underline-offset-4"
          >
            Figma
          </a>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">주요 기능</h2>
        <ul className="list-disc pl-5 text-sm text-zinc-600 marker:text-zinc-400 dark:text-zinc-400">
          {project.features.map((feature) => (
            <li key={feature} className="text-pretty break-keep">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">트러블 슈팅</h2>
        <ul className="flex flex-col gap-6">
          {project.troubleshooting.map((item) => (
            <li key={item.title}>
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-1 text-pretty break-keep text-sm text-zinc-600 dark:text-zinc-400">
                <span className="font-semibold text-zinc-500">문제: </span>
                {item.problem}
              </p>
              <p className="mt-1 text-pretty break-keep text-sm text-zinc-700 dark:text-zinc-300">
                <span className="font-semibold text-zinc-500">해결 결과: </span>
                {item.solution}
              </p>
              {item.lesson && (
                <p className="mt-1 text-pretty break-keep text-sm text-zinc-500 dark:text-zinc-500">
                  <span className="font-semibold">배운 점: </span>
                  {item.lesson}
                </p>
              )}
              {item.codeBlocks?.map((block) => (
                <div key={block.code} className="mt-2">
                  {block.label && (
                    <p className="mb-1 text-xs text-zinc-500">{block.label}</p>
                  )}
                  <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-xs dark:bg-zinc-900">
                    <code className="font-mono">{block.code}</code>
                  </pre>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
      {project.review && (
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">느낀 점</h2>
          <p className="text-pretty break-keep text-sm text-zinc-600 dark:text-zinc-400">
            {project.review}
          </p>
        </div>
      )}
    </main>
  );
}
