import { ImageResponse } from "next/og";
import { loadOgFont } from "@/lib/og-font";

export const alt = "임상빈 - Frontend Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const title = "임상빈";
  const subtitle = "Frontend Developer Portfolio";
  const fontData = await loadOgFont(`${title}${subtitle}`);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0a",
        color: "#ededed",
        fontFamily: "Noto Sans KR",
      }}
    >
      <div style={{ fontSize: 80, fontWeight: 700 }}>{title}</div>
      <div style={{ fontSize: 32, marginTop: 24, color: "#a1a1aa" }}>
        {subtitle}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Noto Sans KR", data: fontData, style: "normal", weight: 700 },
      ],
    },
  );
}
