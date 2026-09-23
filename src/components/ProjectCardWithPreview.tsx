import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

export default function ProjectCardWithPreview({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="group relative">
      <ProjectCard project={project} showThumbnail={false} />
      <div
        className="pointer-events-none absolute left-full top-0 z-10 ml-4 hidden w-80 -translate-y-2
                   rounded-lg border border-black/10 bg-white p-2 opacity-0 shadow-lg transition-all
                   duration-200 group-hover:translate-y-0 group-hover:opacity-100
                   dark:border-white/10 dark:bg-zinc-900 md:block"
      >
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`${project.title} 미리보기`}
            width={480}
            height={236}
            unoptimized
            className="aspect-video w-full rounded object-cover"
          />
        ) : (
          <div className="flex aspect-video w-full items-center justify-center rounded bg-zinc-200 text-xs text-zinc-400 dark:bg-zinc-800">
            미리보기 이미지
          </div>
        )}
      </div>
    </div>
  );
}
