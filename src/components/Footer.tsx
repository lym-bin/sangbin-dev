export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 text-sm text-zinc-500">
        <span>© {new Date().getFullYear()} 임상빈</span>
        <a
          href="https://github.com/lym-bin"
          className="underline underline-offset-4"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
