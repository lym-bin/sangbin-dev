import { ImageResponse } from "next/og";

export const alt = "임상빈 - Frontend Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
      }}
    >
      <div style={{ fontSize: 80, fontWeight: 700 }}>임상빈</div>
      <div style={{ fontSize: 32, marginTop: 24, color: "#a1a1aa" }}>
        Frontend Developer Portfolio
      </div>
    </div>,
    { ...size },
  );
}
