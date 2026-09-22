export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-6 py-8 text-sm text-zinc-500">
        <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
          GitHub 컨벤션 활동
        </span>
        <img
          src="https://ghchart.rshah.org/lym-bin"
          alt="GitHub 커밋 잔디"
          className="h-auto w-full max-w-[663px]"
        />
        <p className="text-xs text-zinc-400">
          꾸준히 기록하며 성장하고 있습니다.
        </p>
        <div className="mt-2 flex items-center gap-4">
          <span>© {new Date().getFullYear()} 임상빈</span>
          <a
            href="https://github.com/lym-bin"
            className="underline underline-offset-4"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
