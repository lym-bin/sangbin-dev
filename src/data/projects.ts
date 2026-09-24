export type Project = {
  slug: string;
  title: string;
  period: string;
  teamType: string;
  status: "운영 중" | "배포 중지";
  summary: string;
  motivation: string;
  stack: string[];
  thumbnail?: string;
  gallery?: string[];
  links: {
    demo?: string;
    github?: string;
    figma?: string;
  };
  features: string[];
  troubleshooting: {
    title: string;
    problem: string;
    solution: string;
    lesson?: string;
    codeBlocks?: {
      label?: string;
      code: string;
    }[];
  }[];
  review?: string;
};

// 노션 포트폴리오 하드코딩 데이터
export const projects: Project[] = [
  {
    slug: "pawinhand",
    title: "포인핸드 웹 사이트 리뉴얼",
    period: "2026.06 ~ 2026.08",
    teamType: "개인 프로젝트",
    status: "운영 중",
    summary:
      "운영중인 유기동물 입양 사이트 '포인핸드'를 리뉴얼한 개인 프로젝트",
    motivation:
      "공백기 이후 3년만에 다시 개발을 시작하였고, 기초의 중요성과 끊임 없는 학습의 중요성을 느꼈습니다. 과거 구글링과 Stack Overflow에 의존하면서 정보를 찾아가면서 개발을 했던 방식에서 벗어나, AI 에이전트를 적극 활용하며 복기하고 디버깅하고 다투기도하고 검증하면서 바닐라JS의 동작원리를 깊이 있게 학습을 하였습니다. 비동기 API통신을 주제로 삼고 뭘 만들어볼까 하다가 유기동물에 대한 관심이 컷었고 유기된 고양이를 입양 했었던 추억도 있어서 리뉴얼을 해보고 싶었습니다. ",
    stack: ["HTML", "CSS", "VanilaJS", "Figma", "PHOTO SHOP"],
    thumbnail: "/projects/pawinhand.gif",
    gallery: [
      "/projects/pawinhand-1.png",
      "/projects/pawinhand-2.png",
      "/projects/pawinhand-3.png",
    ],
    links: {
      demo: "https://lym-bin.github.io",
      github: "https://github.com/lym-bin/lym-bin.github.io",
      figma:
        "https://www.figma.com/design/3sjbtMMfkh7PhoGhbC1fd2/포인핸드-리뉴얼-와이어-프레임?node-id=0-1",
    },
    features: [
      "히어로 배너, 지역별 추천동물 필터, 베스트 후기, 유기동물 현황 미니 대시보드",
      "실시간 키워드 검색, 상태 필터, 정렬, 더보기 페이지네이션, 찜하기",
      "공고번호 기반 상세 조회, 이미지 갤러리, 성격/입양 절차, 댓글",
      "보호소 카카오맵 마커(주소→좌표 지오코딩), 조건 필터 모달",
      "회원가입/로그인(중복확인·비밀번호 규칙 검증), 체험 계정 로그인",
    ],
    troubleshooting: [
      {
        title: "AI 에이전트를 활용한 구현 속도 단축과 코드 분석 및 학습",
        problem:
          "바닐라 JS로 공공 API를 연동하는 과정에서 막히는 부분이 많았음.",
        solution:
          "AI(Gemini, Claude)로 빠르게 해결하되, 단순 복사에 그치지 않고 코드 구조와 비동기 처리 방식을 직접 뜯어보며 수정하며 학습함.",
        lesson:
          "AI가 준 코드를 그대로 쓰지 않고 구조와 원리를 직접 뜯어봐야 진짜 실력으로 남는다는 걸 배움.",
      },
      {
        title: "바닐라 JS 하드코딩의 한계",
        problem:
          "자바스크립트만으로 DOM을 일일이 제어하다 보니 재사용성과 유지보수의 어려움을 체감함.",
        solution:
          "우선 프로젝트 범위 안에서는 반복되는 DOM 조작 로직을 함수로 묶어 재사용성을 높임.",
        lesson:
          "이 경험을 계기로 다음 프로젝트는 React로 컴포넌트 기반 리팩토링을 하겠다는 목표로 이어짐.",
      },
      {
        title: "반응형(Mobile/Tablet) 레이아웃 꺠짐",
        problem:
          "브라우저 크기를 줄였을 때(반응형 모드) 고정된 height 값 때문에 세로 높이는 유지된 채 이미지가 세로로 눌리거나 찌그러짐.",
        solution:
          "고정 높이 대신 aspect-ratio 속성을 추가해서 브라우저 가로 폭이 줄어들더라도 세로 높이가 원본 비율에 맞춰 유연하게 축소되도록 대처.",
        lesson:
          "고정 height보다 aspect-ratio 같은 비율 기반 속성이 반응형에 훨씬 안전하다는 걸 배움.",
      },
      {
        title: "공공API가 응답하지 않는 현상",
        problem:
          "어제까지 정상적으로 API데이터들이 잘 불러와졌으나 다음날 데이터통신이 에러가 나옴 → Console에는 어떠한 오류도 안뜸 → Network 탭 확인 결과 pending 상태 무한 대기. 1차로 트래픽, 서버, 인증키 문제인 줄 알았지만 아니었음.",
        solution:
          "API 엔드포인트가 http로 되어있던 걸 https로 수정 후 해결 완료.",
        lesson:
          "에러 메시지가 안 뜨는 네트워크 문제는 Network 탭에서 pending 상태부터 확인해야 하고, http/https 프로토콜 불일치 같은 기본적인 것도 놓치기 쉽다는 걸 배움.",
      },
      {
        title: "공공 API 단건 조회 불가 및 데이터 유실 문제",
        problem:
          "단건 조회용 API가 따로 제공되지 않아, 목록 조회(List) API만으로는 특정 항목 하나만 불러올 방법이 없었음.",
        solution:
          "목록 조회 API 호출 시 전체 데이터를 한 번에 불러온 뒤, 전역 상태나 배열 메서드(find)를 활용해 사용자가 클릭한 고유 ID(id 또는 data-id)와 일치하는 데이터를 프론트엔드에서 즉시 필터링하여 단건 조회처럼 작동하도록 우회 로직 구현.",
        lesson:
          "외부 공공 API 스펙에 원하는 기능(단건 조회)이 없을 때, 프론트엔드에서 우회 로직으로 보완할 수 있다는 걸 배움.",
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
        problem:
          "불러오는 데이터가 500건에 달해 초기 로딩 페인팅 속도와 렌더링 성능이 저하됨.",
        solution:
          "무거운 메인 배너 SVG를 가벼운 PNG 포맷으로 전환하고 적절한 압축을 거쳐 초기 로딩 속도를 단축, 연관성 없는 독립적인 API 호출들을 순차 방식에서 Promise.all을 이용한 병렬 실행 구조로 변경해 전체 응답 대기 시간을 대폭 단축, 이미지 태그에 loading='lazy' 속성을 적용해 뷰포트에 진입할 때만 이미지가 로드되도록 지연 로딩 최적화 구현. 이렇게 어느정도 해결을 했지만 건수도 500건이였어서 200건으로 축소해 최종 해결.",
        lesson:
          "성능 최적화는 한 가지 방법이 아니라 이미지 포맷, 병렬 처리, 지연 로딩, 데이터 양 조절을 종합적으로 봐야 효과가 난다는 걸 배움.",
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
    review:
      "바닐라 JS로 실제 서비스 하나를 처음부터 끝까지 완성해보니, 프레임워크 없이도 상태 관리와 캐싱 전략을 신경 써야 한다는 걸 체감했습니다. 특히 백엔드 없이 localStorage/sessionStorage만으로 로그인과 데이터 캐시를 구현하면서, '서버가 있었다면 이렇게 하지 않았을 것'이라는 지점들을 명확히 인지하고 문서화하려고 했습니다. 공공 API의 스펙 한계를 프론트엔드에서 우회하는 경험도 많이 배웠습니다.",
  },
  {
    slug: "objet-b-web",
    title: "Objet B 미니멀 쇼핑몰",
    period: "2026.07 ~ 2026.09",
    summary:
      "모던 HTML/CSS로 만들었던 미니멀 쇼핑몰 프로토타입을 React + TypeScript + Firebase로 전면 재 구축한 개인 프로젝트",
    teamType: "개인 프로젝트",
    status: "운영 중",
    motivation:
      "HTML/CSS로 마크업을 하고 바닐라 JS로 정적 화면만 만들다 보니 상태 관리와 재사용성에 한계를 느껴서, 상품 목록/필터 → 상세 → 장바구니 → 주문/결제 → 로그인/마이페이지까지 이어지는 실제 쇼핑몰 플로우를 처음부터 끝까지 React + TypeScript로 직접 구현해보고 싶기도 했고 끝까지 완성된 포트폴리오를 만들어보고 싶었습니다..",
    stack: ["React", "TypeScript", "Firebase", "Vite", "GSAP"],
    thumbnail: "/projects/objet-b-web.gif",
    gallery: [
      "/projects/objet-b-web-1.png",
      "/projects/objet-b-web-2.png",
      "/projects/objet-b-web-3.png",
      "/projects/objet-b-web-4.png",
      "/projects/objet-b-web-5.png",
    ],
    links: {
      demo: "https://my-react-app-lym-bin.vercel.app/",
      github: "https://github.com/lym-bin/my-react-app",
    },
    features: [
      "상품 목록 카테고리/색상/사이즈 필터링, 정렬, 더보기 페이지네이션, 검색",
      "상품 상세 페이지 - 색상/사이즈 옵션, 사이즈 가이드, 비슷한 상품/후기 추천",
      "장바구니 (옵션별 개별 관리, 수량 조절, 새로고침해도 유지)",
      "배송지 등록/선택, 결제수단 선택, 주문 생성 (Firestore 저장)",
      "이메일/비밀번호 로그인, 회원가입, 비밀번호 재설정",
      "마이페이지 - 주문내역 조회, 최근 본 상품, 닉네임/비밀번호 수정",
      "반응형 다크테마 UI, GSAP 스크롤 애니메이션",
    ],
    troubleshooting: [
      {
        title: "Firestore 보안 규칙이 테스트 모드로 열려있던 문제",
        problem:
          "배포 초반 누구나 읽기/쓰기 가능한 상태로 방치돼 있던 걸 발견함.",
        solution:
          "로그인한 본인 소유의 주문 데이터만 읽고 쓸 수 있도록 규칙을 다시 작성함.",
        lesson:
          "보안 규칙은 기본값(테스트 모드)을 배포 전에 반드시 재점검해야 한다는 걸 체감함.",
      },
      {
        title:
          "레거시 프로젝트의 TypeScript + Tailwind CSS로 마이그레이션 생 고생기",
        problem:
          "기존 모던 CSS, HTML 기반 쇼핑몰을 React로 전면 마이그레이션하면서 기존 CSS 선택자가 잔재하거나 빌드 중에 빌드 시스템이 문자열을 제대로 스캔하지 못해 CSS가 생성되지 않았고, 감싸는 부모와 자식의 flexbox 레이아웃도 흐트러짐.",
        solution:
          "전면 디버깅 후 격자를 재설정하여 해결하고, 커스텀 훅을 통한 isOpen, isClose 상태 핸들러의 props 바인딩을 재확인함.",
        lesson:
          "마이그레이션할 땐 레거시 코드의 잔재(선택자, 클래스명)를 끝까지 추적해서 제거해야 예상치 못한 스타일 충돌을 막을 수 있다는 걸 배움.",
      },
      {
        title: "배포 후 상품 상세 페이지 새로고침 시 404",
        problem:
          "React Router로 클라이언트 라우팅을 하는데, vercel이 직접 요청받은 경로는 실제 파일을 찾다가 404를 반환하던 문제.",
        solution:
          "vercel.json에 모든 경로를 index.html로 돌려주는 rewrite 설정을 추가해 해결.",
        lesson:
          "SPA 클라이언트 라우팅은 호스팅 쪽 rewrite 설정과 반드시 같이 맞춰야 한다는 걸 배움.",
      },
      {
        title: "계속 헤더 로고가 왼쪽으로 쏠리던 현상",
        problem:
          "CSS로 여러 번 중앙 정렬을 다시 잡아도 로고가 미세하게 왼쪽으로 쏠려 보이던 버그. 알고 보니 CSS 문제가 아니라 로고 SVG 안에 제작한 내장 PNG 이미지가 비대칭으로 제작되어 배치되어 있었음.",
        solution: "이미지 대신 CSS로 로고를 새로 그려서 해결.",
        lesson:
          "레이아웃 버그의 원인이 항상 CSS에 있는 건 아니고, 원본 에셋 자체를 의심해봐야 할 때도 있다는 걸 배움.",
      },
      {
        title: "TypeScript 패키지 누락으로 인한 오류",
        problem:
          "컴포넌트 파일들을 전부 .tsx 확장자로 작성하고 VS Code 내에서 타입 힌트와 자동 완성이 정상적으로 작동하여 TypeScript 기반으로 완벽히 연동되었다고 생각했지만, 디버깅을 해보니 package.json의 devDependencies에 typescript 패키지가 없고 tsconfig.json 설정파일도 누락되어 있었음.",
        solution:
          "필요한 개발 의존성 패키지를 설치하고 tsconfig.json을 새로 생성해 moduleResolution을 bundler로 수정함.",
        lesson:
          "에디터의 타입 힌트/자동완성이 되는 것과 실제 빌드 설정이 완전한 것은 다르다는 걸 배움. 툴링 상태를 눈으로도 다시 확인하는 습관이 필요함.",
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
    review:
      "원래는 이미지 클릭하면 모달 띄우는 정도로 시작했는데 하다 보니 장바구니, 로그인, 주문 흐름까지 다 붙이게 됐습니다. Firebase로 인증/DB 연동해보면서 실제 서비스처럼 상태 관리하는 게 생각보다 까다로웠고, 특히 옵션(색상/사이즈)별로 장바구니 아이템을 분리해서 관리하는 부분이 고민이 많았습니다.",
  },
  {
    slug: "ai-talk",
    title: "AI Talk / 챗봇 서비스",
    period: "2026.08 ~ 2026.09",
    teamType: "개인 프로젝트",
    status: "운영 중",
    summary:
      "사용자와 1:1로 대화하며 AI 답변이 실시간으로 스트리밍 출력되는 챗봇 웹앱",
    motivation:
      "AI를 많이 써보다 보니 AI특유의 '환각'과 오류 정보를 어떻게 하면 없애는 걸까 호기심에 토이프로젝트로 API를 연동해 간단한 1:1 대화, 나만의 일기를 만들어 봤습니다.",
    stack: ["React", "TypeScript", "Vite", "Gemini API", "Styled-components"],
    thumbnail: "/projects/ai-talk.gif",
    gallery: [
      "/projects/ai-talk-1.png",
      "/projects/ai-talk-2.png",
      "/projects/ai-talk-3.png",
    ],
    links: {
      demo: "https://ai-chat-app-hazel-one.vercel.app",
      github: "https://github.com/lym-bin/ai-chat-app",
    },
    features: [
      "채팅: 메시지를 보내면 답변이 실시간으로 조금씩 채워짐",
      "이전 대화 기억: 앞에서 나눈 내용을 이어서 대화",
      "답변 멈추기: 답변이 나오는 중에 전송 버튼이 중지 버튼으로 전환",
      "새 대화: 헤더 버튼으로 대화를 처음부터 다시 시작",
      "추천 질문: 대화 시작 전 칩을 누르면 바로 질문 전송",
      "답변 서식: 굵은 글씨, 목록, 코드블록, 표 등 마크다운 렌더링",
      "오늘의 일기 모드: 일기를 쓰면 공감과 위로, 짧은 조언을 답으로 반환",
      "일기 저장: 일기와 답변을 날짜별로 저장, '지난 일기' 목록에서 다시 조회",
      "대화 유지: 새로고침해도 채팅 내역 유지",
      "오류 재시도: 답변 실패 시 같은 질문 재전송 버튼 제공",
      "로딩 문구: 답변이 길어지면 짧은 개발자 개그 문구 노출",
      "미니게임: 헤더 버튼으로 지렁이 게임 실행 (화면 크기에 따라 옆 패널/전체 화면)",
      "반응형 레이아웃: 화면 크기에 맞춰 UI 배치 변경",
    ],

    troubleshooting: [
      {
        title: "구버전 Gemini 모델 사용 불가",
        problem:
          "gemini-2.5-flash 모델로 요청하면 신규 사용자에게 404 에러가 발생하던 문제.",
        solution: "gemini-3.6-flash로 모델명을 교체해 해결.",
        lesson:
          "빠르게 바뀌는 AI API는 모델 버전을 하드코딩하기보다, 배포 전에 최신 지원 모델인지 항상 확인해야 한다는 걸 배움.",
      },
      {
        title: "API 키 포맷 변경으로 HTTP 리퍼러 제한 불가",
        problem:
          "새로 발급받은 API 키가 신규 포맷(AQ...)이라 기존처럼 HTTP 리퍼러 기반으로 키 사용처를 제한할 수 없었음.",
        solution:
          "결제수단을 연결하지 않은 무료 등급으로 유지하고 키는 환경변수로만 관리해 노출 리스크를 낮춤.",
        lesson:
          "리퍼러 제한이 막히면 요금 상한 자체를 낮게 유지하는 것도 실질적인 방어책이 될 수 있다는 걸 배움.",
      },
      {
        title: "한글 입력 시 메시지 이중 전송",
        problem:
          "한글 입력기(IME) 조합 확정용 Enter가 전송까지 발생시키던 문제.",
        solution: "isComposing 체크를 추가해 막음.",
        lesson:
          "한글 입력기(IME) 조합 중 이벤트 처리는 영어 입력과 다르게 별도로 신경 써야 한다는 걸 배움.",
      },
      {
        title: "스트리밍 중단 시 크래시",
        problem:
          "답변 생성 중 '중지'나 '새 대화'를 누르면 빈 배열에 접근해 에러가 나던 문제.",
        solution: "루프 중단 플래그와 배열 길이 가드를 추가해 해결.",
        lesson:
          "비동기 스트리밍 중간에 사용자가 상태를 바꿀 수 있는 액션(중지, 새 대화)이 있다면, 그 타이밍에 대한 가드를 항상 고려해야 한다는 걸 배움.",
      },
      {
        title: "무료 API 등급 요청 횟수 제한(429)",
        problem: "테스트 중 하루 요청 횟수 제한에 걸려 429 에러가 발생.",
        solution:
          "429/401/404 등 상태 코드별로 사용자에게 다른 안내 메시지를 보여주도록 에러 처리를 분기함.",
        lesson:
          "무료 등급 API는 요청 제한에 걸리는 상황을 예외가 아니라 정상적으로 벌어지는 케이스로 놓고 UX를 설계해야 한다는 걸 배움.",
      },
      {
        title: "배포 후 첫 응답 지연 체감",
        problem:
          "배포 환경에서 모델의 내부 thinking 단계 때문에 첫 응답이 오래 걸리는 것처럼 느껴짐.",
        solution:
          "thinkingBudget을 0으로 설정해 불필요한 thinking 단계를 줄이고 첫 응답 속도를 개선.",
        lesson:
          "체감 성능 이슈가 항상 네트워크 문제는 아니고, 모델 자체의 응답 생성 방식일 수도 있다는 걸 배움.",
      },
      {
        title: "로딩 문구 로테이션 함수의 TypeScript 타입 에러",
        problem:
          "`let next = prev`(`string | null`)로 시작해 while문 안에서 `string`으로 재할당해도, TypeScript가 루프 이후에도 `string | null`로 좁혀주지 않아 TS2322 에러가 발생.",
        solution:
          "`next`를 처음부터 항상 string인 값으로 초기화하도록 수정해 해결.",
        lesson:
          "타입 좁히기는 조건/루프 흐름을 완벽히 추적하지 못할 때가 있어서, 초기값 자체를 보장된 타입으로 주는 게 더 안전하다는 걸 배움.",
      },
      {
        title: "React Compiler ESLint 규칙(set-state-in-effect) 위반",
        problem:
          "로딩 문구 컴포넌트의 useEffect에서 조건이 false일 때 setState를 effect 본문 최상단에서 동기적으로 호출해 react-hooks/set-state-in-effect 에러가 발생 (에디터에는 타입 에러처럼 표시됨).",
        solution:
          "effect 안에서 상태를 리셋하는 대신, 렌더링 시점에 조건에 따라 아무것도 표시하지 않도록 로직을 바꿔 동기 setState 호출 자체를 없앰.",
        lesson:
          "React Compiler 환경에서는 effect 안 동기 setState를 렌더링 로직으로 옮겨 해결하는 패턴이 반복적으로 유효하다는 걸 배움.",
      },
    ],
    review:
      "짧은 기간 안에 실제 서비스처럼 동작하는 챗봇을 만들어보면서, 스트리밍 응답이나 한글 입력 같은 디테일이 생각보다 까다롭다는 걸 알게 됐습니다. AI API를 붙이는 것 자체보다, 사용자가 답변 중간에 상태를 바꾸는 예외 상황들을 다 챙기는 게 진짜 어려운 부분이라는 걸 배운 프로젝트였습니다.",
  },
];
