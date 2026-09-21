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
} from "react-icons/si";

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
};

export function getTechIcon(name: string) {
  return techIcons[name.trim().toLowerCase()];
}

export function getTechColor(name: string) {
  return techColors[name.trim().toLowerCase()];
}
