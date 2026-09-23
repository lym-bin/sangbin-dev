export async function loadOgFont(text: string, weight: 400 | 700 = 700) {
  const params = new URLSearchParams({
    family: `Noto Sans KR:wght@${weight}`,
    text,
  });
  const css = await fetch(
    `https://fonts.googleapis.com/css2?${params.toString()}`,
  ).then((res) => res.text());

  const match = css.match(
    /src: url\(([^)]+)\) format\('(opentype|truetype)'\)/,
  );
  if (!match) throw new Error("failed to load og font css");

  const fontRes = await fetch(match[1]);
  return fontRes.arrayBuffer();
}
