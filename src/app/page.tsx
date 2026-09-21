import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>TODO: 이름</h1>
      <p>TODO: 한 줄 소개</p>
      <Link href="/projects">Projects 보기</Link>
    </div>
  );
}
