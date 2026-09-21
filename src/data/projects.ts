export type Project = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  stack: string[];
  links: {
    demo?: string;
    github?: string;
  };
};

// 노션 포트폴리오 하드코딩 데이터
export const projects: Project[] = [
  {
    slug: "objet-b-web",
    title: "Objet B 미니멀 쇼핑몰",
    period: "2026.07 ~ 2026.09",
    summary:
      "모던 HTML/CSS로 만들었던 미니멀 쇼핑몰 프로토타입을 React + TypeScript + Firebase로 전면 재 구축한 개인 프로젝트",
    stack: ["React", "TypeScript", "Firebase", "Vite", "GSAP"],
    links: {
      demo: "https://my-react-app-lym-bin.vercel.app/",
      github: "https://github.com/lym-bin/my-react-app",
    },
  },
  {
    slug: "pawinhand",
    title: "포인핸드 웹 사이트 리뉴얼",
    period: "2026.06 ~ 2026.08",
    summary:
      "운영중인 유기동물 입양 사이트 '포인핸드'를 리뉴얼한 개인 프로젝트",
    stack: ["HTML", "CSS", "VanilaJS", "Figma", "PHOTO SHOP"],
    links: {
      demo: "https://lym-bin.github.io",
    },
  },
  {
    slug: "ai-talk",
    title: "AI Talk / 챗봇 서비스",
    period: "2026.08 ~ 2026.09",
    summary:
      "사용자와 1:1로 대화하며 AI 답변이 실시간으로 스트리밍 출력되는 챗봇 웹앱",
    stack: ["React", "TypeScript", "Vite", "Gemini API", "Styled-components"],
    links: {
      demo: "https://ai-chat-app-hazel-one.vercel.app",
      github: "https://github.com/lym-bin/ai-chat-app",
    },
  },
];
