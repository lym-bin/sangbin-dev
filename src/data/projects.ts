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
    plan?: string;
    uxResearch?: string;
    architecture?: string;
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
    period: "2026.06 ~ 2026.09",
    teamType: "개인 프로젝트",
    status: "운영 중",
    summary:
      "유기동물 입양 사이트 '포인핸드'를 개인 학습용으로 리디자인한 개인 프로젝트",
    motivation:
      "공백기 이후 3년만에 다시 개발을 시작하였고, 기초의 중요성과 끊임 없는 학습의 중요성을 느꼈습니다. 과거 구글링과 Stack Overflow에 의존하면서 정보를 찾아가면서 개발을 했던 방식에서 벗어나, AI 에이전트를 적극 활용하며 복기하고 디버깅하고 다투기도하고 검증하면서 바닐라JS의 동작원리를 깊이 있게 학습을 하였습니다. 비동기 API통신을 주제로 삼고 뭘 만들어볼까 하다가 유기동물에 대한 관심이 컷었고 유기된 고양이를 입양 했었던 추억도 있어서 리뉴얼을 해보고 싶었습니다. ",
    stack: ["HTML", "CSS", "VanillaJS", "Figma"],
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
      plan: "/projects/pawinhand-plan.pdf",
      uxResearch: "/projects/pawinhand-ux-research.pdf",
      architecture: "/projects/pawinhand-ui-architecture.pdf",
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
      "바닐라 JS로 실제 서비스 하나를 처음부터 끝까지 완성해보니, 프레임워크 없이도 상태 관리와 캐싱 전략을 신경 써야 한다는 걸 체감했습니다. 특히 백엔드 없이 localStorage/sessionStorage만으로 로그인과 데이터 캐시를 구현하면서, '서버가 있었다면 이렇게 하지 않았을 것'이라는 지점들을 명확히 인지하고 문서화하려고 했습니다. 공공 API의 스펙 한계를 프론트엔드에서 우회하는 경험도 많이 배웠습니다. 페이지별 개발 기간과 구현 기능을 표로 정리해 진행 상황을 체크하면서 작업했는데, 이렇게 기록을 남기는 습관이 다음 프로젝트의 기획서/트러블슈팅 정리에도 그대로 이어졌습니다.",
  },
  {
    slug: "objet-b-web",
    title: "Objet & B 미니멀 쇼핑몰",
    period: "2026.07 ~ 2026.10",
    summary:
      "모던 HTML/CSS로 만들었던 미니멀 쇼핑몰 프로토타입을 React + TypeScript + Firebase로 전면 재 구축한 개인 프로젝트",
    teamType: "개인 프로젝트",
    status: "운영 중",
    motivation:
      "HTML/CSS로 마크업을 하고 바닐라 JS로 정적 화면만 만들다 보니 상태 관리와 재사용성에 한계를 느껴서, 상품 목록/필터 → 상세 → 장바구니 → 주문/결제 → 로그인/마이페이지까지 이어지는 실제 쇼핑몰 플로우를 처음부터 끝까지 React + TypeScript로 직접 구현해보고 싶기도 했고 끝까지 완성된 포트폴리오를 만들어보고 싶었습니다..",
    stack: [
      "React",
      "TypeScript",
      "Firebase",
      "Vite",
      "GSAP",
      "Tailwind CSS",
      "React Router",
      "Toss Payments",
      "Vercel Functions",
    ],
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
      "상품 상세 페이지 - 색상/사이즈 옵션, 사이즈 가이드, 비슷한 상품/스타일링 컷 추천",
      "장바구니 (옵션별 개별 관리, 수량 조절, 새로고침해도 유지, 계정별 분리 저장 및 비로그인 상태에서 담은 상품 로그인 시 자동 병합)",
      "배송지 등록/선택 (계정별 Firestore 저장)",
      "토스페이먼츠 테스트 결제 연동 — 결제창 → 서버(Vercel 함수)에서 금액 재계산 검증 → 승인 → 주문 저장(Firestore) → 장바구니 비우기까지 전체 플로우 구현, 시크릿 키는 서버 전용으로만 사용",
      "이메일/비밀번호 로그인, 회원가입, 비밀번호 재설정",
      "마이페이지 - 주문내역 조회, 최근 본 상품, 닉네임/비밀번호 수정",
      "브랜드 스토리 페이지 (GSAP 핀 고정 + 가로 스크롤)",
      "첫 방문 인트로 모션, 반응형 다크테마 UI, GSAP 스크롤 애니메이션",
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
      {
        title: "vercel dev로 띄운 로컬 서버가 백지로 나옴",
        problem:
          "결제 서버 함수(api/)를 같이 테스트하려고 npm run dev 대신 vercel dev로 실행하자 화면이 아무것도 그려지지 않음 (배포 사이트는 정상 동작).",
        solution:
          "SPA 새로고침용으로 vercel.json에 넣어둔 '모든 경로 → index.html' rewrite 규칙이 /src/main.tsx, /@vite/client 같은 개발 서버 요청까지 가로채던 것이 원인 — 규칙을 페이지 주소에만 적용되도록 정규식으로 좁혀 해결.",
        lesson:
          "배포 환경에서는 실제 파일이 rewrite 규칙보다 먼저 처리돼 드러나지 않던 문제가, 로컬 개발 서버 조합(vercel dev)에서만 드러날 수 있다는 걸 배움.",
        codeBlocks: [
          {
            label: "SPA rewrite 규칙을 페이지 주소로만 한정",
            code: `// vercel.json
{ "source": "/((?!api/|@)[^.]*)", "destination": "/index.html" }`,
          },
        ],
      },
      {
        title: "@types/node 설치해도 Cannot find name 'process'",
        problem:
          "서버 함수(api/)에서 process.env를 쓰는데 @types/node를 설치해도 타입 에러가 사라지지 않음.",
        solution:
          "TypeScript 7이 node_modules/@types를 자동으로 불러오지 않고, 루트 tsconfig.json도 src/만 포함해 api/ 폴더가 검사 대상이 아니었던 것이 원인 — api/tsconfig.json을 따로 만들어 types: [\"node\"]를 지정하고, typecheck 스크립트가 src/와 api/를 모두 검사하도록 수정.",
        lesson:
          "타입 패키지를 설치하는 것과 그 타입이 실제 검사 범위에 포함되는 건 다르다는 걸 배움.",
      },
      {
        title: "대소문자가 다른 import, 로컬에서만 통과",
        problem:
          "파일명은 pendingOrder.ts인데 import는 ./PendingOrder로 되어 있었음.",
        solution:
          "Windows는 대소문자를 구분하지 않아 로컬에서는 동작했지만 Vercel 서버(Linux)는 구분해 빌드가 실패할 뻔함 — 타입 검사(TS1261)가 배포 전에 잡아줘서 import 경로를 실제 파일명과 맞춰 해결.",
        lesson:
          "OS별 파일 시스템 대소문자 구분 차이는 로컬에서 재현되지 않는 대표적인 배포 버그라는 걸 배움.",
      },
      {
        title: "서버 함수가 시크릿 키를 못 읽음",
        problem:
          "Vercel 대시보드에 Secret 타입으로 등록한 TOSS_SECRET_KEY를 로컬 개발 환경에서 서버 함수가 읽지 못함.",
        solution:
          "Secret 타입 환경변수는 보안상 로컬 Development 환경으로 내려오지 않는 것이 원인 — git이 무시하는 로컬 .env에 VITE_ 접두사 없이 따로 등록해 해결(브라우저 코드에는 포함되지 않음).",
        lesson:
          "환경변수는 '등록했다'와 '그 환경에 실제로 내려온다'가 다를 수 있다는 걸 배움.",
      },
      {
        title: "로컬은 되는데 배포한 서버 함수만 500 에러",
        problem:
          "vercel dev에서는 결제 승인이 잘 되는데 Vercel 미리보기 배포에서는 /api/confirm이 모든 요청에 500(FUNCTION_INVOCATION_FAILED)을 반환.",
        solution:
          "로그에 찍힌 ERR_MODULE_NOT_FOUND로 원인 확인 — ES 모듈(type: module) 환경의 실제 Node는 import 경로에 확장자가 없으면 파일을 찾지 못하는데, 브라우저 코드는 Vite가, 로컬은 개발 도구가 확장자를 대신 찾아줘서 드러나지 않았음 — 서버 함수가 불러오는 연쇄 import에 전부 .js 확장자를 붙여 해결 (TypeScript/Vite는 .js로 적어도 옆의 .ts 파일을 찾아줌).",
        lesson:
          "머지 전에 미리보기 배포로 실제 서버 환경을 먼저 확인하는 습관 덕분에 실사용자에게 나가기 전에 잡을 수 있었다는 걸 배움.",
      },
      {
        title: "아이폰에서만 좌우 스크롤이 생기고 헤더가 잘려 보임",
        problem:
          "아이폰 13 mini에서 로그인 후 화면이 옆으로 밀리는 현상이 발생했는데, PC 브라우저의 휴대폰 모드/Safari 엔진 흉내로는 재현되지 않음.",
        solution:
          "iOS Safari가 16px보다 작은 입력칸을 탭하면 화면을 자동 확대하고 그대로 유지하는 동작이 원인 — 로그인/검색/배송지/프로필 입력칸을 휴대폰 폭에서는 16px, 640px 이상에서는 원래 크기로 분기 처리. 사용자의 손가락 확대까지 막는 maximum-scale=1은 사용하지 않음.",
        lesson:
          "에뮬레이터로 재현되지 않는 모바일 버그는 실기기 특유의 플랫폼 동작(iOS 자동 확대 등)을 의심해야 한다는 걸 배움.",
      },
      {
        title: "결제창을 닫아도 실패 페이지로 가지 않음 (PC)",
        problem:
          "PC에서 결제창을 닫으면 실패 페이지로 이동하지 않고 그냥 멈춰 있는 것처럼 보임.",
        solution:
          "PC는 결제창이 페이지 위에 겹쳐 뜨는 방식이라 닫으면 주소 이동 없이 requestPayment()가 USER_CANCEL 에러로 끝나는 구조 — failUrl 이동은 휴대폰 취소/카드 거절 때만 발생한다는 걸 파악하고, USER_CANCEL은 오류 알림 대신 '결제를 취소했어요. 장바구니와 배송지는 그대로 있어요' 안내만 보여주도록 분기.",
        lesson:
          "결제 SDK의 에러 종류별로 실제 사용자 흐름이 다르다는 걸 알아야, 취소를 에러처럼 보여주는 실수를 막을 수 있다는 걸 배움.",
      },
    ],
    review:
      "원래는 이미지 클릭하면 모달 띄우는 정도로 시작했는데 하다 보니 장바구니, 로그인, 주문 흐름까지 다 붙이게 됐습니다. Firebase로 인증/DB 연동해보면서 실제 서비스처럼 상태 관리하는 게 생각보다 까다로웠고, 특히 옵션(색상/사이즈)별로 장바구니 아이템을 분리해서 관리하는 부분이 고민이 많았습니다. 배포 후에도 피드백을 받아 이미지 용량(28MB→2.8MB)을 줄이고, 계정 간 장바구니 공유 버그를 고치고, 버튼만 있던 결제를 토스페이먼츠 테스트 결제로 실제 연동하는 등 서비스를 계속 다듬어 나갔습니다.",
  },
];
