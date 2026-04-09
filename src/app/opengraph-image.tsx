import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bernardo Kawano — AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0e0f12",
          color: "#f4f4f4",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            color: "#9a9a9a",
            marginBottom: 24,
          }}
        >
          AI Engineering + Automations
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Bernardo Kawano
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#c7c7c7",
            marginTop: 24,
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          AI systems that remove manual work and improve operations.
        </div>
      </div>
    ),
    { ...size }
  );
}
