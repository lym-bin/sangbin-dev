import Link from "next/link";
import Image from "next/image";
import { SiNotion } from "react-icons/si";
import {
  FaGithub,
  FaGraduationCap,
  FaCertificate,
  FaBriefcase,
} from "react-icons/fa";
import { projects } from "@/data/projects";
import SkillChips from "@/components/SkillChips";
import ProjectCardWithPreview from "@/components/ProjectCardWithPreview";
import InteractiveName from "@/components/InteractiveName";
import HomeIntro from "@/components/HomeIntro";
import ScrollReveal from "@/components/ScrollReveal";
import PrintButton from "@/components/PrintButton";
import ContactForm from "@/components/ContactForm";
import TypingIntro from "@/components/TypingIntro";
import SectionNav from "@/components/SectionNav";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-16 px-6 py-16">
      <HomeIntro>
        <section className="flex flex-col gap-4">
          <div className="intro-item flex flex-wrap items-center gap-4">
            <Image
              src="/profile.png"
              alt="임상빈"
              width={88}
              height={88}
              className="rounded-2xl object-cover"
            />
            <InteractiveName name="임상빈" />
          </div>
          <TypingIntro />
          <p className="intro-item max-w-xl text-balance break-keep text-zinc-600 dark:text-zinc-400">
            코드 한 줄의 의미를 고민하고, 끝까지 구현해 내는 신입 프론트엔드
            개발자 입니다.
          </p>
          <a
            href="mailto:persie24@naver.com"
            className="intro-item text-sm font-medium underline underline-offset-4"
          >
            persie24@naver.com
          </a>
          <div className="intro-item flex items-center gap-4">
            <a
              href="https://github.com/lym-bin"
              aria-label="GitHub"
              className="rounded-full border border-black/10 p-2 text-zinc-600 transition-colors hover:bg-black/5 hover:text-zinc-950 dark:border-white/15 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-zinc-50"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://app.notion.com/p/Frontend-Portfolio-b43e7e42ec0882f4951d818987cefb4d?source=copy_link"
              aria-label="Notion"
              className="rounded-full border border-black/10 p-2 text-zinc-600 transition-colors hover:bg-black/5 hover:text-zinc-950 dark:border-white/15 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-zinc-50"
            >
              <SiNotion size={30} />
            </a>
            <PrintButton />
          </div>
        </section>
      </HomeIntro>

      <ScrollReveal>
        <section id="projects" className="flex flex-col gap-6">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-semibold">Projects</h2>
            <Link
              href="/projects"
              className="print:hidden text-sm font-medium underline underline-offset-4"
            >
              전체 보기
            </Link>
          </div>
          <ul className="flex flex-col gap-4">
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectCardWithPreview project={project} />
              </li>
            ))}
          </ul>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="skills" className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Skills</h2>
          <SkillChips />
        </section>
      </ScrollReveal>

      <section id="resume" className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold">Resume</h2>

        <div className="flex flex-col gap-3 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-zinc-500">
            <FaGraduationCap />
            학력 및 경험
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="flex flex-wrap items-baseline gap-2">
              <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                2013.02 ~ 2017.02
              </span>
              [장안대학교 행정법률과 졸업]
            </li>
            <li className="flex flex-wrap items-baseline gap-2">
              <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                2019.10 ~ 2021.04
              </span>
              [육군훈련소 조교/행정병 만기 제대]
            </li>
            <li className="flex flex-wrap items-baseline gap-2">
              <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                2021.08 ~ 2022.02
              </span>
              [구디아카데미 공공API 자바/스프링 풀스택 과정 수료]
            </li>
            <li className="flex flex-wrap items-baseline gap-2">
              <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                2022.10 ~ 2022.10
              </span>
              [KT DS 데이터 분석을 위한 SQL 활용 수료]
            </li>
            <li className="flex flex-wrap items-baseline gap-2">
              <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                2023.02 ~ 2023.07
              </span>
              [한국방송통신대학교 컴퓨터과학과 중퇴]
            </li>
            <li className="flex flex-wrap items-baseline gap-2">
              <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                2026.06 ~ 2026.11
              </span>
              [MBC 아카데미 AI활용 반응형 UI/UX 웹퍼블리셔 전문가
              양성과정(진행중)]
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-zinc-500">
            <FaCertificate />
            자격증
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="flex flex-wrap items-baseline gap-2">
              <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                2013.09
              </span>
              MOS 파워포인트
            </li>
            <li className="flex flex-wrap items-baseline gap-2">
              <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                2014.08
              </span>
              컴퓨터활용능력 2급
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-zinc-500">
            <FaBriefcase />
            경력
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="flex flex-col gap-4">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  2022.03 ~ 2022.08
                </span>
                (주) 디투엘 - Java/Spring/Nexacro 기반 차세대 시스템 구축(To-Be)
                프로젝트 참여
              </div>
              <ul className="ml-1 flex flex-col gap-1.5 list-disc break-keep list-inside text-zinc-600 dark:text-zinc-400">
                <li>
                  기존 JSP 기반 레거시 코드 분석을 바탕으로 신규 To-Be 시스템의
                  비즈니스 로직 및 화면 구현 담당, DB 테이블 구조 변경 작업 참여
                </li>
                <li>
                  SVN 기반 개발/운영 서버 분리 환경에서 형상관리 및 배포
                  프로세스 경험
                </li>
                <li>
                  Nexacro UI 프레임워크로 dataset 처리 및 엑셀 다운로드 연동
                  구현, 기존 화면을 웹 인터페이스로 재구축
                </li>
                <li>백엔드 API와의 데이터 연동 흐름 이해 및 구현</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <ScrollReveal>
        <section id="contact" className="print:hidden flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            궁금한 점이나 하고 싶으신 말씀은 편하게 남겨주세요. 최대한 빠르게
            확인하겠습니다.
          </p>
          <ContactForm />
        </section>
      </ScrollReveal>
      <SectionNav />
    </main>
  );
}
