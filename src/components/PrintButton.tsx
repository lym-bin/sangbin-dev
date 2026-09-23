"use client";

import { FiPrinter } from "react-icons/fi";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-3 py-1.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-black/5 hover:shadow-sm print:hidden dark:border-white/15 dark:hover:bg-white/10"
    >
      <FiPrinter size={14} />
      PDF로 저장
    </button>
  );
}
