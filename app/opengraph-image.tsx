import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Delningsbild för sociala medier: loggan och namnkrysset.
export const alt = "Korsade Händer: medicinsk massageterapi och korsord";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CELL = 62;
const BORDER = 3;

const cells: { r: number; c: number; ch: string; nr?: number }[] = [
  ..."KORSADE".split("").map((ch, c) => ({ r: 3, c, ch, nr: c === 0 ? 2 : undefined })),
  ..."HÄNDER"
    .split("")
    .map((ch, r) => ({ r, c: 5, ch, nr: r === 0 ? 1 : undefined }))
    .filter((x) => x.r !== 3),
];

const [bold, semi, logo] = await Promise.all([
  readFile(join(process.cwd(), "assets/familjen-grotesk-latin-700-normal.woff")),
  readFile(join(process.cwd(), "assets/familjen-grotesk-latin-600-normal.woff")),
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
          flexDirection: "column",
          background: "#ffffff",
          fontFamily: "Familjen Grotesk",
        }}
      >
        <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center", gap: 72 }}>
          <img src={`data:image/png;base64,${logo}`} width={380} height={368} alt="" />
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div style={{ display: "flex", position: "relative", width: CELL * 7 + BORDER, height: CELL * 6 + BORDER }}>
              {cells.map((cell) => (
                <div
                  key={`${cell.r}-${cell.c}`}
                  style={{
                    position: "absolute",
                    left: cell.c * CELL,
                    top: cell.r * CELL,
                    width: CELL + BORDER,
                    height: CELL + BORDER,
                    border: `${BORDER}px solid #000`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 36,
                    fontWeight: 700,
                    color: "#000",
                  }}
                >
                  {cell.nr ? (
                    <div style={{ display: "flex", position: "absolute", left: 5, top: 2, fontSize: 14, fontWeight: 600 }}>{String(cell.nr)}</div>
                  ) : null}
                  <div style={{ display: "flex" }}>{cell.ch}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", fontSize: 34, fontWeight: 600, color: "#000" }}>
              Medicinsk massageterapi och korsord
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: 18,
            backgroundImage:
              "linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%)",
            backgroundSize: "18px 18px",
            backgroundPosition: "0 0, 9px 9px",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Familjen Grotesk", data: bold, style: "normal", weight: 700 },
        { name: "Familjen Grotesk", data: semi, style: "normal", weight: 600 },
      ],
    },
  );
}
