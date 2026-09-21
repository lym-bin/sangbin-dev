import Link from "next/link";
import { projects } from "@/data/projects";
export default function Home() {
  return (
    <div>
      <section>
        <h1>임상빈</h1>
        <p>
          코드 한 줄의 의미를 고민하고, 끝까지 구현해 내는 신입 프론트엔드
          개발자 입니다.
        </p>
        <p>
          <a href="mailto:persie24@naver.com">persie24@naver.com</a>
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <p>
          언어 및 프레임워크 : JavaScript, TypeScript, React, HTML, CSS, GSAP,
          Tailwind CSS, Java, Spring
        </p>
        <p>데이터베이스: MySQL, Oracle, Firebase</p>
        <p>기타: Git, Figma, PHOTO SHOP, Vite, Linux</p>
      </section>

      <section>
        <h2>Resume</h2>
        <h3>학력</h3>
        <ul>
          <li>2013.02 ~ 2017.02 장안대학교 행정법률과 졸업</li>
          <li>2019.10 ~ 2021.04 육군훈련소 조교/행정병 만기 제대</li>
          <li>
            2021.08 ~ 2022.02 구디아카데미 공공API 자바/스프링 풀스택 과정 수료
          </li>
          <li>2022.10 KT DS 데이터 분석을 위한 SQL 활용 수료</li>
          <li>
            2026.06 ~ 2026.11 MBC 아카데미 AI활용 반응형 UI/UX 웹퍼블리셔 전문가
            양성과정(진행중)
          </li>
        </ul>
        <h3>자격증</h3>
        <ul>
          <li>2013.09 MOS 파워포인트</li>
          <li>2014.08 컴퓨터활용능력 2급</li>
        </ul>
        <h3>경력</h3>
        <ul>
          <li>
            2022.03 ~ 2022.08 (주) 디투엘 - Java/Spring/Nexacro 기반 차세대 SI
            프로젝트 참여
          </li>
        </ul>
      </section>

      <section>
        <div>
          <h2>Projects</h2>
          <Link href="/projects">전체 보기</Link>
        </div>
        <ul>
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
