// Bilder. Tills Korsade Händer har egna bilder används gratisbilder från Pexels
// (fri licens, får användas kommersiellt utan krav på källhänvisning: https://www.pexels.com/license/).
//
// Byta till en egen bild: lägg filen i /public/bilder/ och ersätt posten med
//   { src: "/bilder/filnamn.jpg", alt: "Beskrivning av bilden" }

export type Photo =
  | { pexels: number; alt: string }
  | { src: string; alt: string };

// Bilderna hämtas och skalas om vid varje bygge (scripts/bilder.mjs) och läggs i
// /public/bilder/genererade/, så besökarens webbläsare bara pratar med den egna domänen.
export function photoUrl(photo: Photo) {
  if ("src" in photo) return photo.src;
  return `/bilder/genererade/pexels-${photo.pexels}`;
}

// Massage
export const massageHero: Photo = {
  pexels: 6187653,
  alt: "Händer som masserar ryggmusklerna på en person som ligger på en massagebänk",
};
export const klassiskBild: Photo = {
  pexels: 5473182,
  alt: "Massageterapeut som behandlar en patients axlar",
};
export const idrottBild: Photo = {
  pexels: 10893352,
  alt: "Händer som arbetar med benmuskulaturen under en behandling",
};
export const andningBild: Photo = {
  pexels: 19666192,
  alt: "Behandling av nacke och skuldror",
};
export const hembesokBild: Photo = {
  pexels: 6628473,
  alt: "En massagebänk uppställd i ett rum",
};
export const avslappnandeBild: Photo = {
  pexels: 6628701,
  alt: "Lugna strykningar över ryggen",
};

export const massageBildflode: Photo[] = [
  { pexels: 6628649, alt: "Helkroppsmassage i ett lugnt behandlingsrum" },
  { pexels: 5240643, alt: "Massör som knådar ryggmuskler" },
  { pexels: 3248690, alt: "Terapeutisk massage på en mottagning" },
  { pexels: 11774389, alt: "Behandlingsrum med massagebänk" },
  { pexels: 9146364, alt: "Massage av ryggen" },
  { pexels: 27730453, alt: "Djupgående massage för återhämtning efter träning" },
];

// Korsord
export const korsordHero: Photo = {
  pexels: 13533591,
  alt: "Någon som löser ett korsord med penna",
};

// Galleriet ska fyllas med bilder på korsord Korsade Händer har gjort.
// Tills de finns visar det gratisbilder på korsord.
export const korsordGalleri: Photo[] = [
  { pexels: 8899560, alt: "Korsord i en dagstidning som håller på att lösas" },
  { pexels: 233221, alt: "Ett korsord som löses vid ett träbord" },
  { pexels: 6939462, alt: "Två personer som löser ett korsord tillsammans över en kopp kaffe" },
  { pexels: 12585534, alt: "En liten figur som letar efter svaret i ett korsord" },
  { pexels: 5908695, alt: "Bokstavsbrickor lagda som ett korsord" },
  { pexels: 10557793, alt: "Ord som korsar varandra, lagda med bokstavsbrickor" },
  { pexels: 17706652, alt: "Tidning och kaffe på frukostbordet" },
  { pexels: 3953481, alt: "Hopvikta tidningar och en kopp kaffe" },
];

// Startsidan
export const ingangMassage: Photo = massageBildflode[1];
export const ingangKorsord: Photo = korsordGalleri[1];

export const startBildflode: Photo[] = [
  massageHero,
  korsordHero,
  klassiskBild,
  korsordGalleri[0],
  massageBildflode[0],
  korsordGalleri[2],
];
