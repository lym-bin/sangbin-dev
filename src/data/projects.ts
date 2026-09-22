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
      "HTML/CSS로 마크업을 하고 바닐라 JS로 정적 화면만 만들다 보니 상태 관리와 재사용성에 한계를 느껴서, 상품 목록/필터 → 상세 → 장바구니 → 주문/결제 → 로그인/마이페이지까지 이어지는 실제 쇼핑몰 플로우를 처음부터 끝까지 React + TypeScript로 직접 구현해보고 싶기도 했고 끝까지 완성된 포트폴리오를 만들어보고 싶었습니다..",
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
        title:
          "레거시 프로젝트의 TypeScript + Tailwind CSS로 마이그레이션 생 고생기",
        description:
          "기존 모던 CSS,HTML기반 쇼핑몰을 React로 전면 마이그레이션을 하면서 기존 CSS선택자가 잔재하거나 빌드중에 문자열을 빌드시스템이 제대로 스캔하지 못해 CSS가 생성되지 않았고, 감싸는 부모와 자식에 레이아웃도 flexbox가 흐트러져서 전면 디버깅 후 격자를 재설정하여 해결, 커스텀 훅을 통한 isOpen, isClose 상태 핸들러의 props 바인딩을 재확인하는 험난했던 시간이었다.",
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
      "공백기 이후 3년만에 다시 개발을 시작하였고, 기초의 중요성과 끊임 없는 학습의 중요성을 느꼈습니다. 과거 구글링과 Stack Overflow에 의존하면서 정보를 찾아가면서 개발을 했던 방식에서 벗어나, AI 에이전트를 적극 활용하며 복기하고 디버깅하고 다투기도하고 검증하면서 바닐라JS의 동작원리를 깊이 있게 학습을 하였습니다. 비동기 API통신을 주제로 삼고 뭘 만들어볼까 하다가 유기동물에 대한 관심이 컷었고 유기된 고양이를 입양 했었던 추억도 있어서 리뉴얼을 해보고 싶었습니다. ",
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
      {
        title: "반응형(Mobile/Tablet) 레이아웃 꺠짐",
        description:
          "브라우저 크기를 줄였을 때(반응형 모드) 고정된 height 값 때문에 세로 높이는 유지된 채 이미지가 세로로 눌리거나 찌그졌는데 고정 높이 대신 aspert-ratio 속성을 추가해서 브라우저 가로 폭이 줄어들더라도 세로 높이가 원본 비율에 맞춰 유연하게 축소되도록 반응형에 대처",
      },
      {
        title: "공공API가 응답하지 않는 현상",
        description:
          "어제까지 정상적으로 API데이터들이 잘 불러와졌으나 다음날 데이터통신이 에러가 나옴 → Console에는 어떠한 오류도 안뜸 → Network 탭 확인 결과 pending 상태 무한 대기 1차로 트래픽,서버,인증키 문제 인지 알았지만 아니었고 API 엔드포인트가 http로 되있었고 https로 수정 후 해결 완료",
      },
      {
        title: "공공 API 단건 조회 불가 및 데이터 유실 문제",
        description:
          "목록 조회(List) API 호출 시 전체 데이터를 한 번에 불러온 뒤, 전역 상태나 배열 메서드(find)를 활용해 사용자가 클릭한 고유 ID(id 또는 data-id)와 일치하는 데이터를 프론트엔드에서 즉시 필터링하여 단건 조회처럼 작동하도록 우회 로직 구현",
        codeBlocks: [
          {
            label: "전체 목록에서 클릭한 항목만 찾아 단건 조회처럼 사용",
            code: `const selectedAnimal = animalList.find(
  (animal) => animal.id === clickedId
);`,
          },
        ],
      },
      {
        title: "API 데이터 로딩 속도 및 초기 렌더링 성능 저하 문제",
        description:
          "무거운 메인 배너 SVG를 가벼운 PNG 포맷으로 전환하고 적절한 압축을 거쳐 초기 로딩 페인팅 속도 단축하고 비동기 통신 병렬 처리로 연관성 없는 독립적인 API 호출들을 순차적 방식에서 Promise.all을 이용한 병렬 실행 구조로 변경하여 전체 응답 대기 시간을 대폭 단축, 이미지 태그에 loading='lazy' 속성을 적용하여 뷰포트에 진입할 때만 이미지가 로드되도록 지연 로딩 최적화 구현으로 어느정도 해결을 했지만 건수도 500건이였어서..200건으로 축소로 해결",
        codeBlocks: [
          {
            label: "순차 호출 → Promise.all 병렬 실행으로 변경",
            code: `// Before: 순차 실행 (하나 끝나야 다음 호출)
const shelters = await fetchShelters();
const animals = await fetchAnimals();

// After: 병렬 실행 (동시에 요청, 제일 느린 것 기준으로만 대기)
const [shelters, animals] = await Promise.all([
  fetchShelters(),
  fetchAnimals(),
]);`,
          },
          {
            label: "이미지 지연 로딩",
            code: `<img src={animal.imageUrl} alt={animal.name} loading="lazy" />`,
          },
        ],
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
      "AI를 많이 써보다 보니 AI특유의 '환각'과 오류 정보를 어떻게 하면 없애는 걸까 호기심에 토이프로젝트로 API를 연동해 간단한 1:1 대화, 나만의 일기를 만들어 봤습니다.",
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
