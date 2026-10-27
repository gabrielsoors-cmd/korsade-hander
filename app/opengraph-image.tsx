import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Delningsbild för sociala medier.
export const alt = "Korsade Händer: medicinsk massageterapi och korsord";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const [bold, medium, logo] = await Promise.all([
  readFile(join(process.cwd(), "assets/schibsted-grotesk-latin-700-normal.woff")),
  readFile(join(process.cwd(), "assets/schibsted-grotesk-latin-500-normal.woff")),
  readFile(join(process.cwd(), "assets/logo-og.png"), "base64"),
]);

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#ffffff",
          padding: 56,
          gap: 64,
          fontFamily: "Schibsted Grotesk",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 518,
            height: 518,
            borderRadius: 40,
            background: "#e4ede9",
          }}
        >
          <img src={`data:image/png;base64,${logo}`} width={360} height={349} alt="" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, color: "#15201c", letterSpacing: -2, lineHeight: 1.05 }}>
            Korsade Händer
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 34, fontWeight: 500, color: "#55625d", lineHeight: 1.3 }}>
            Medicinsk massageterapi och korsord på beställning
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              alignSelf: "flex-start",
              padding: "14px 28px",
              borderRadius: 999,
              background: "#1e4a3e",
              color: "#ffffff",
              fontSize: 26,
              fontWeight: 500,
            }}
          >
            korsadehander.se
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Schibsted Grotesk", data: bold, style: "normal", weight: 700 },
        { name: "Schibsted Grotesk", data: medium, style: "normal", weight: 500 },
      ],
    },
  );
}
