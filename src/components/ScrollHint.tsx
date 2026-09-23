"use client";

import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition-opacity duration-300 print:hidden ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-1 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-xs font-medium text-zinc-600 shadow-md backdrop-blur dark:border-white/10 dark:bg-zinc-900/90 dark:text-zinc-300">
        <span>스크롤해서 더보기</span>
        <FiChevronDown className="animate-bounce" size={16} />
      </div>
    </div>
  );
}
