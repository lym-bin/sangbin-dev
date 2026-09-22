"use client";

import { useEffect, useState } from "react";

const phrases = [
  "프론트엔드 개발자",
  "문제를 끝까지 해결하는 사람",
  "AI와 함께 성장하는 개발자",
];

const TYPE_SPEED = 100;
const DELETE_SPEED = 50;
const PAUSE_AFTER_TYPE = 1500;

export default function TypingIntro() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting && text === currentPhrase) {
      const timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 0);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? currentPhrase.slice(0, prev.length - 1)
            : currentPhrase.slice(0, prev.length + 1),
        );
      },
      isDeleting ? DELETE_SPEED : TYPE_SPEED,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <p className="intro-item text-lg font-medium text-zinc-700 dark:text-zinc-300">
      {text}
      <span className="animate-pulse">|</span>
    </p>
  );
}
