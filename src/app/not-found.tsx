import Link from "next/link";

// 404 페이지 커스텀
export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col items-start gap-4 px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">
        페이지를 찾을 수 없어요
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        요청하신 페이지가 존재하지 않아요.
      </p>
      <Link
        href="/"
        className="text-sm font-medium underline underline-offset-4"
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
