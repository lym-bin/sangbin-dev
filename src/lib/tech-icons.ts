import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiFirebase,
  SiVite,
  SiGreensock,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiMysql,
  SiStyledcomponents,
  SiGooglegemini,
  SiLinux,
  SiNextdotjs,
  SiVitest,
  SiReactrouter,
  SiVercel,
  SiReactquery,
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";

export const techIcons: Record<string, IconType> = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  vanilajs: SiJavascript,
  vanillajs: SiJavascript,
  html: SiHtml5,
  css: SiCss,
  firebase: SiFirebase,
  vite: SiVite,
  gsap: SiGreensock,
  "tailwind css": SiTailwindcss,
  figma: SiFigma,
  git: SiGit,
  mysql: SiMysql,
  "styled-components": SiStyledcomponents,
  "gemini api": SiGooglegemini,
  linux: SiLinux,
  nextjs: SiNextdotjs,
  "next.js": SiNextdotjs,
  vitest: SiVitest,
  "react router": SiReactrouter,
  vercel: SiVercel,
  "vercel functions": SiVercel,
  "vercel (functions)": SiVercel,
  "firebase (auth, firestore)": SiFirebase,
  "git/github": SiGit,
  "react query": SiReactquery,
  "vitest (단위 테스트)": SiVitest,
  photoshop: DiPhotoshop,
};

export const techColors: Record<string, string> = {
  react: "#61DAFB",
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  vanilajs: "#F7DF1E",
  vanillajs: "#F7DF1E",
  html: "#E34F26",
  css: "#663399",
  firebase: "#DD2C00",
  vite: "#9135FF",
  gsap: "#88CE02",
  "tailwind css": "#06B6D4",
  figma: "#F24E1E",
  git: "#F03C2E",
  mysql: "#4479A1",
  "styled-components": "#DB7093",
  "gemini api": "#8E75B2",
  linux: "#FCC624",
  vitest: "#6E9F18",
  "react router": "#CA4245",
  vercel: "#737373",
  "vercel functions": "#737373",
  "vercel (functions)": "#737373",
  "firebase (auth, firestore)": "#DD2C00",
  "git/github": "#F03C2E",
  "react query": "#FF4154",
  "vitest (단위 테스트)": "#6E9F18",
  photoshop: "#31A8FF",
};

export function getTechIcon(name: string) {
  return techIcons[name.trim().toLowerCase()];
}

export function getTechColor(name: string) {
  return techColors[name.trim().toLowerCase()];
}
