"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          time: new Date().toLocaleString("ko-KR"),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        name="name"
        type="text"
        placeholder="이름"
        required
        className="rounded-lg border border-black/10 bg-zinc-50 px-3 py-2 text-sm dark:border-white/15 dark:bg-zinc-900"
      />
      <input
        name="email"
        type="email"
        placeholder="답장받을 이메일"
        required
        className="rounded-lg border border-black/10 bg-zinc-50 px-3 py-2 text-sm dark:border-white/15 dark:bg-zinc-900"
      />
      <textarea
        name="message"
        placeholder="메시지"
        required
        rows={4}
        className="rounded-lg border border-black/10 bg-zinc-50 px-3 py-2 text-sm dark:border-white/15 dark:bg-zinc-900"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="self-start rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        {status === "sending" ? "보내는 중..." : "메시지 보내기"}
      </button>
      {status === "success" && (
        <p className="text-sm text-green-600 dark:text-green-400">
          메시지가 전송됐습니다. 빠르게 회신 드리겠습니다.!
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 dark:text-red-400">
          전송에 실패했습니다..! 잠시 후 다시 시도해주세요.
        </p>
      )}
    </form>
  );
}
