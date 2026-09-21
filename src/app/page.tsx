import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { projects } from "@/data/projects";
import SkillChips from "@/components/SkillChips";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-16 px-6 py-16">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">임상빈</h1>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          코드 한 줄의 의미를 고민하고, 끝까지 구현해 내는 신입 프론트엔드
          개발자 입니다.
        </p>
        <a
          href="mailto:persie24@naver.com"
          className="text-sm font-medium underline underline-offset-4"
        >
          persie24@naver.com
        </a>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/lym-bin"
            aria-label="GitHub"
            className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://app.notion.com/p/Frontend-Portfolio-b43e7e42ec0882f4951d818987cefb4d?source=copy_link"
            aria-label="Notion"
            className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            <SiNotion size={20} />
          </a>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Skills</h2>
        <SkillChips />
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold">Resume</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-zinc-500">학력</h3>
          <ul className="flex flex-col gap-1 text-sm">
            <li>2013.02 ~ 2017.02 [장안대학교 행정법률과 졸업]</li>
            <li>2019.10 ~ 2021.04 [육군훈련소 조교/행정병 만기 제대]</li>
            <li>
              2021.08 ~ 2022.02 [구디아카데미 공공API 자바/스프링 풀스택 과정
              수료]
            </li>
            <li>2022.10 ~ 2022.10 [KT DS 데이터 분석을 위한 SQL 활용 수료]</li>
            <li>
              2026.06 ~ 2026.11 [MBC 아카데미 AI활용 반응형 UI/UX 웹퍼블리셔
              전문가 양성과정(진행중)]
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-zinc-500">자격증</h3>
          <ul className="flex flex-col gap-1 text-sm">
            <li>2013.09 MOS 파워포인트</li>
            <li>2014.08 컴퓨터활용능력 2급</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-zinc-500">경력</h3>
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              2022.03 ~ 2022.08 (주) 디투엘 - Java/Spring/Nexacro 기반 차세대 SI
              프로젝트 참여
            </li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold">Projects</h2>
          <Link
            href="/projects"
            className="text-sm font-medium underline underline-offset-4"
          >
            전체 보기
          </Link>
        </div>
        <ul className="flex flex-col gap-4">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="block rounded-lg border border-black/10 p-5 transition-colors hover:bg-black/2 dark:border-white/10 dark:hover:bg-white/4"
              >
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
