import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "임상빈 - Frontend Portfolio",
  description:
    "코드 한 줄의 의미를 고민하고, 끝까지 구현해 내는 신입 프론트엔드 개발자 입니다.",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "임상빈",
  jobTitle: "Frontend Developer",
  url: "https://sangbin-dev.vercel.app",
  sameAs: [
    "https://github.com/lym-bin",
    "https://app.notion.com/p/Frontend-Portfolio-b43e7e42ec0882f4951d818987cefb4d?source=copy_link",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollProgressBar />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
