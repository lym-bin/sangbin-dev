export type Project = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  stack: string[];
  thumbnail?: string;
  links: {
    demo?: string;
    github?: string;
  };
  troubleshooting: {
    title: string;
    description: string;
  }[];
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
    thumbnail: "/projects/objet-b-web.gif",
    links: {
      demo: "https://my-react-app-lym-bin.vercel.app/",
      github: "https://github.com/lym-bin/my-react-app",
    },
    troubleshooting: [
      {
        title: "Firestore 보안 규칙이 테스트 모드로 열려있던 문제",
        description:
          "배포 초반 누구나 읽기/쓰기 가능한 상태로 방치돼 있던 걸 발견. 로그인한 본인 소유의 주문 데이터만 읽고 쓸 수 있도록 규칙을 다시 작성함.",
      },
      {
        title: "배포 후 상품 상세 페이지 새로고침 시 404",
        description:
          "React Router로 클라이언트 라우팅을 하는데, vercel이 직접 요청받은 경로는 실제 파일을 찾다가 404를 반환하던 문제. vercel.json에 모든 경로를 index.html로 돌려주는 rewrite 설정을 추가해 해결",
      },
    ],
  },
  {
    slug: "pawinhand",
    title: "포인핸드 웹 사이트 리뉴얼",
    period: "2026.06 ~ 2026.08",
    summary:
      "운영중인 유기동물 입양 사이트 '포인핸드'를 리뉴얼한 개인 프로젝트",
    stack: ["HTML", "CSS", "VanilaJS", "Figma", "PHOTO SHOP"],
    thumbnail: "/projects/pawinhand.gif",
    links: {
      demo: "https://lym-bin.github.io",
    },
    troubleshooting: [
      {
        title: "AI 에이전트를 활용한 구현 속도 단축과 코드 분석 및 학습",
        description:
          "바닐라 JS로 공공 API를 연동하는 과정에서 막히는 부분을 AI(Gemini, Claude)로 빠르게 해결하되, 단순 복사에 그치지 않고 코드 구조와 비동기 처리 방식을 직접 뜯어보면 수정하며 학습함.",
      },
      {
        title: "바닐라 JS 하드코딩의 한계",
        description:
          "자바스크립트만으로 DOM을 일일이 제어하다 보니 재사용성과 유지보수의 중요성을 체감. 다음 프로젝트는 React로 컴포넌트 기반 리팩토링을 하겠다는 생각으로 이어짐.",
      },
    ],
  },
  {
    slug: "ai-talk",
    title: "AI Talk / 챗봇 서비스",
    period: "2026.08 ~ 2026.09",
    summary:
      "사용자와 1:1로 대화하며 AI 답변이 실시간으로 스트리밍 출력되는 챗봇 웹앱",
    stack: ["React", "TypeScript", "Vite", "Gemini API", "Styled-components"],
    thumbnail: "/projects/ai-talk.gif",
    links: {
      demo: "https://ai-chat-app-hazel-one.vercel.app",
      github: "https://github.com/lym-bin/ai-chat-app",
    },
    troubleshooting: [
      {
        title: "한글 입력 시 메시지 이중 전송",
        description:
          "한글 입력기(IME) 조합 확정용 Enter가 전송까지 발생시키던 문제, isComposing 체크를 추가해 막음",
      },
      {
        title: "스트리밍 중단 시 크래시",
        description:
          "답변 생성 중 '중지'나 '새 대화'를 누르면 빈 배열에 접근해 에러가 나던 문제, 루프 중단 플래그와 배열 길이 가드를 추가해 해결 ",
      },
    ],
  },
];
