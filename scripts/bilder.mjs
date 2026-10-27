// Körs automatiskt före varje bygge (npm run build).
// Hämtar gratisbilderna från Pexels och skalar om dem, och gör samma sak med egna bilder
// i public/bilder/. Resultatet hamnar i public/bilder/genererade/ i tre bredder (WebP),
// så att besökarens webbläsare bara hämtar bilder från den egna domänen.
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const BREDDER = [480, 960, 1600];
const UT = "public/bilder/genererade";
const PEXELS_QUERY = "?auto=compress&cs=tinysrgb&w=2000";

await fs.mkdir(UT, { recursive: true });

async function finns(nyckel) {
  try {
    await Promise.all(BREDDER.map((w) => fs.access(path.join(UT, `${nyckel}-${w}.webp`))));
    return true;
  } catch {
    return false;
  }
}

async function skriv(buffer, nyckel) {
  for (const w of BREDDER) {
    await sharp(buffer)
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(path.join(UT, `${nyckel}-${w}.webp`));
  }
}

const kalla = await fs.readFile("content/images.ts", "utf8");
const ids = [...new Set([...kalla.matchAll(/pexels:\s*(\d+)/g)].map((m) => m[1]))];
let klara = 0;
const fel = [];

for (const id of ids) {
  const nyckel = `pexels-${id}`;
  if (await finns(nyckel)) {
    klara++;
    continue;
  }
  try {
    const res = await fetch(`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg${PEXELS_QUERY}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await skriv(Buffer.from(await res.arrayBuffer()), nyckel);
    klara++;
  } catch (e) {
    fel.push(`${id} (${e.message})`);
  }
}

for (const fil of await fs.readdir("public/bilder")) {
  if (!/\.(jpe?g|png|webp)$/i.test(fil)) continue;
  const nyckel = path.parse(fil).name;
  if (await finns(nyckel)) continue;
  await skriv(await fs.readFile(path.join("public/bilder", fil)), nyckel);
  klara++;
}

console.log(`Bilder klara: ${klara}`);
if (fel.length) console.warn(`Kunde inte hämta ${fel.length} bild(er) från Pexels: ${fel.join(", ")}`);
