"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto flex max-w-3xl items-center gap-6 px-6 py-4 text-sm font-medium">
        <Link href="/" className={pathname === "/" ? "underline" : ""}>
          Home
        </Link>
        <Link
          href="/projects"
          className={pathname.startsWith("/projects") ? "underline" : ""}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
}
