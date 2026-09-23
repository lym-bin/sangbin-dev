"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectGallery({
  title,
  thumbnail,
  gallery = [],
}: {
  title: string;
  thumbnail?: string;
  gallery?: string[];
}) {
  const images = [thumbnail, ...gallery].filter(Boolean) as string[];
  const [selected, setSelected] = useState(images[0]);

  if (images.length === 0) return null;

  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-black/10 bg-zinc-100 dark:border-white/10 dark-bg-zinc-900 ">
        <Image
          src={selected}
          alt={`${title} 미리보기`}
          fill
          unoptimized={selected === thumbnail}
          className="object-contain"
        />
      </div>

      {images.length > 1 && (
        <div className="flex flex-col gap-2 rounded-lg bg-zinc-100 p-2 dark:bg-zinc-900">
          <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
            화면 미리보기
          </span>
          <div className="grid grid-cols-6 gap-2">
            {images.map((src) => (
              <button
                key={src}
                type="button"
                onClick={() => setSelected(src)}
                className={`relative aspect-video overflow-hidden rounded-md border-2 transition-opacity ${
                  selected === src
                    ? "border-zinc-900 opacity-100 dark:border-zinc-100"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={src}
                  alt={`${title} 썸네일`}
                  fill
                  unoptimized={src === thumbnail}
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
