// Bildladdare för den statiska sajten. Bilderna finns i tre bredder som scripts/bilder.mjs
// skapar vid varje bygge. Här väljs den minsta som räcker för den bredd webbläsaren ber om.
export const BREDDER = [480, 960, 1600];

export default function bildladdare({ src, width }: { src: string; width: number; quality?: number }) {
  const bas = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const w = BREDDER.find((b) => b >= width) ?? BREDDER[BREDDER.length - 1];

  // Gratisbilder: src är "/bilder/genererade/pexels-123".
  if (src.startsWith("/bilder/genererade/")) return `${bas}${src}-${w}.webp`;

  // Egna bilder i /public/bilder/, t.ex. "/bilder/ampel.jpg".
  const egen = src.match(/^\/bilder\/([^/]+)\.(jpe?g|png|webp)$/i);
  if (egen) return `${bas}/bilder/genererade/${egen[1]}-${w}.webp`;

  return `${bas}${src}`;
}
