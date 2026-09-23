import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";
import { loadOgFont } from "@/lib/og-font";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  const title = project?.title ?? "임상빈 Portfolio";
  const subtitle = project ? `${project.period} · ${project.teamType}` : "";
  const stackLine = project ? project.stack.join("  ·  ") : "";
  const fontData = await loadOgFont(`${title}${subtitle}${stackLine}`);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          color: "#ededed",
          padding: "80px",
          fontFamily: "Noto Sans KR",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700 }}>{title}</div>
        {project && (
          <div style={{ fontSize: 28, marginTop: 24, color: "#a1a1aa" }}>
            {subtitle}
          </div>
        )}
        {project && (
          <div style={{ fontSize: 28, marginTop: 40, color: "#71717a" }}>
            {stackLine}
          </div>
        )}
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Noto Sans KR", data: fontData, style: "normal", weight: 700 },
      ],
    },
  );
}
