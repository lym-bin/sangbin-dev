import { ImageResponse } from "next/og";
import { loadOgFont } from "@/lib/og-font";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const char = "빈";
  const fontData = await loadOgFont(char);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0a",
        color: "#ededed",
        fontSize: 20,
        fontWeight: 700,
        fontFamily: "Noto Sans KR",
      }}
    >
      {char}
    </div>,
    {
      ...size,
      fonts: [
        { name: "Noto Sans KR", data: fontData, style: "normal", weight: 700 },
      ],
    },
  );
}
