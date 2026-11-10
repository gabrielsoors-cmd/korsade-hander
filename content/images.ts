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
  src: "/bilder/massage-skaggkille.jpg",
  alt: "Massageterapeut som masserar axeln och övre ryggen på en skäggig man som ligger på mage",
};
export const idrottBild: Photo = {
  src: "/bilder/massage-armbage-rygg.jpg",
  alt: "Massageterapeut som arbetar med armbågen i övre delen av ryggen",
};
export const andningBild: Photo = {
  pexels: 27730453,
  alt: "Massageterapeut i orange tröja som behandlar en person på en behandlingsbänk",
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
  { src: "/bilder/massage-armbage-rumpa.jpg", alt: "Massageterapeut som arbetar med armbågen mot sätesmuskeln" },
  { pexels: 5240643, alt: "Massör som knådar ryggmuskler" },
  { pexels: 3248690, alt: "Terapeutisk massage på en mottagning" },
  { src: "/bilder/massage-blondin.jpg", alt: "Ryggmassage på en blond kvinna som ligger på mage" },
  { pexels: 9146364, alt: "Massage av ryggen" },
  { pexels: 19666192, alt: "Behandling av nacke och skuldror" },
];

// Korsord
// Kundens eget foto: ett av Korsade Händers korsord som håller på att lösas.
export const korsordHero: Photo = {
  src: "/bilder/korsord-loses.jpg",
  alt: "Ett av Korsade Händers korsord, med flygplan och Flygvapnets 100-årslogga, som håller på att lösas med penna",
};

// Galleriet ska fyllas med bilder på korsord Korsade Händer har gjort.
// Egna korsord ligger i /public/bilder/, resten är gratisbilder tills de byts ut.
export const korsordGalleri: Photo[] = [
  { pexels: 8899560, alt: "Korsord i en dagstidning som håller på att lösas" },
  { pexels: 233221, alt: "Ett korsord som löses vid ett träbord" },
  { src: "/bilder/korsord-snokryss.jpg", alt: "Ett av Korsade Händers korsord med vintertema: en igloo och en snöflinga ovanför rutorna" },
  { pexels: 12585534, alt: "En liten figur som letar efter svaret i ett korsord" },
  { pexels: 5908695, alt: "Bokstavsbrickor lagda som ett korsord" },
  { src: "/bilder/korsord-bamse.jpg", alt: "Ett av Korsade Händers korsord för barn, med Bamse och hans vänner och bilder som ledtrådar" },
  { pexels: 17706652, alt: "Tidning och kaffe på frukostbordet" },
  { pexels: 6939462, alt: "Två personer som löser ett korsord tillsammans över en kopp kaffe" },
];

// Startsidan
export const ingangMassage: Photo = massageBildflode[1];
// Bilden på Korsord-kortet på startsidan: ett av Korsade Händers egna korsord.
export const ingangKorsord: Photo = {
  src: "/bilder/korsord-gula-rader.jpg",
  alt: "Ett av Korsade Händers korsord, med ledtrådar i rutorna och gula rader för lösningsorden",
};

export const startBildflode: Photo[] = [
  massageHero,
  { pexels: 13533591, alt: "Någon som löser ett korsord med penna" },
  { pexels: 5473182, alt: "Massageterapeut som behandlar en patients axlar" },
  korsordGalleri[0],
  { pexels: 6628649, alt: "Helkroppsmassage i ett lugnt behandlingsrum" },
  { pexels: 6939462, alt: "Två personer som löser ett korsord tillsammans över en kopp kaffe" },
];
