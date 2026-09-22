export type Project = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  motivation: string;
  stack: string[];
  thumbnail?: string;
  links: {
    demo?: string;
    github?: string;
    figma?: string;
  };
  troubleshooting: {
    title: string;
    description: string;
    codeBlocks?: {
      label?: string;
      code: string;
    }[];
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
    motivation:
      "바닐라 HTML/CSS로 정적 화면만 만들다 보니 상태 관리와 재사용성에 한계를 느껴서, 상품 목록/필터 → 상세 → 장바구니 → 주문/결제 → 로그인/마이페이지까지 이어지는 실제 쇼핑몰 플로우를 처음부터 끝까지 React + TypeScript로 직접 구현해보고 싶어서 시작했습니다.",
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
      {
        title: "계속 헤더 로고가 왼쪽으로 쏠리던 현상",
        description:
          "CSS로 여러 번 중앙 정렬을 다시 잡아도 로고가 미세하게 왼족으로 쏠려 보이던 버그, 알고 보니 CSS 문제가 아니라 로고 SVG 안에 제작한 내장 PNG이미지가 비대칭으로 제작되서 배치 되있었고 이미지 대신 CSS로 로고를 새로 그려서 해결",
      },
      {
        title: "TypeScript 패키지 누락으로 인한 오류",
        description:
          "컴포넌트 파일들을 전부 .tsx 확장자로 작성하고 VS Code 내에서 타입 힌트와 자동 완성이 정상적으로 작동하여 TypeScript 기반으로 완벽히 연동되었다고 생각했지만, 디버깅을 해보니 package.json의 devDependencies에 typescript 패키지가 없고 tsconfig.json 설정파일도 누락되어 있었음.",
        codeBlocks: [
          {
            label: "터미널을 통해 필요한 개발자 의존성 패키지 설치",
            code: "npm install -D typescript @types/react @types/react-dom",
          },
          {
            label: "프로젝트 루트에 TypeScript 컴파일러 설정 파일 생성",
            code: "npx tsc --init",
          },
          {
            label: "tsconfig.json에서 모듈 해석 방식 수정",
            code: `// tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "bundler"
  }
}`,
          },
        ],
      },
    ],
  },
  {
    slug: "pawinhand",
    title: "포인핸드 웹 사이트 리뉴얼",
    period: "2026.06 ~ 2026.08",
    summary:
      "운영중인 유기동물 입양 사이트 '포인핸드'를 리뉴얼한 개인 프로젝트",
    motivation:
      "TODO: 왜 이 프로젝트를 시작했는지 본인 말투로 적어주세요 (예: 공백기 이후 다시 개발을 시작하면서 바닐라 JS와 공공 API 연동 같은 기초기를 다시 다지고 싶어서 시작)",
    stack: ["HTML", "CSS", "VanilaJS", "Figma", "PHOTO SHOP"],
    thumbnail: "/projects/pawinhand.gif",
    links: {
      demo: "https://lym-bin.github.io",
      github: "https://github.com/lym-bin/lym-bin.github.io",
      figma:
        "https://www.figma.com/design/3sjbtMMfkh7PhoGhbC1fd2/포인핸드-리뉴얼-와이어-프레임?node-id=0-1",
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
    motivation:
      "TODO: 왜 이 프로젝트를 시작했는지 본인 말투로 적어주세요 (예: 짧은 기간 안에 Gemini API로 실시간 스트리밍 응답, 대화 맥락 유지까지 직접 구현해보고 싶어서 시작)",
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
