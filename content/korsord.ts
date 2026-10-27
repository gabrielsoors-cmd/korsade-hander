// Texter för Korsord.
// UTKAST: skrivna utifrån kundens mall. Ska läsas och rättas av Korsade Händer innan publicering.
// Prisavsnittet är kundens egen text från mallen.

export const korsordIntro = {
  rubrik: "Korsord på beställning",
  ingress:
    "Jag har alltid tyckt om ord: hur de låter, vad de betyder och hur de kan vridas och vändas. Att lösa korsord blev tidigt en vana, och till slut började jag konstruera egna.",
  stycke:
    "I dag gör jag korsord på beställning till privatpersoner, företag och föreningar, och har ett kryssotek med färdiga kryss.",
};

export const skraddarsydda = {
  rubrik: "Skräddarsydda",
  stycken: [
    "Dessa korsord är riktigt roliga att göra, eftersom varje ord kan handla om just er. Ett skräddarsytt kryss byggs kring en person, ett företag eller en händelse. Namn, minnen, interna skämt och viktiga årtal blir ledtrådar och svar.",
    "Passar till födelsedagar, bröllop, jubileum, personaltidningen eller kundträffen.",
  ],
  // Lägg PDF:en i /public/pdf/ och skriv sökvägen här, t.ex. "/pdf/exempel-skraddarsytt.pdf".
  exempelPdf: "" as string,
};

export const kryssotek = {
  rubrik: "De som redan finns",
  stycken: [
    "Jag har ett kryssotek med färdiga korsord som du kan köpa direkt. De passar till exempel i föreningsbladet, nyhetsbrevet eller som tidsfördriv för kunder och personal.",
    "Berätta vilken storlek och svårighetsgrad du vill ha, så hittar jag något som passar.",
  ],
  // Lägg PDF:en i /public/pdf/ och skriv sökvägen här, t.ex. "/pdf/exempel-kryssotek.pdf".
  exempelPdf: "" as string,
};

export const tillfallen = ["Födelsedagar", "Bröllop och bröllopsdagar"];

// Kundlogotyper: lägg logotypen i /public/kunder/ och skriv sökvägen i `logo`.
// Utan logotyp visas namnet. Visa bara logotyper som kunden har godkänt.
export type Kund = { namn: string; logo?: string };

export const kunder: Kund[] = [
  { namn: "Bergqvist Utbildningar" },
  { namn: "Brunnsbergs IF Dragkamp" },
  { namn: "Svenska Flygvapnet" },
  { namn: "Grillat-mässan" },
  { namn: "Kamado Sumo" },
  { namn: "JOFA" },
  { namn: "Rörstrand" },
  { namn: "Sveriges Hudterapeuters Riksorganisation" },
  { namn: "Svenska Bordtennisförbundet" },
  { namn: "Älvdalens kommun" },
  { namn: "ERGO" },
];

export const korsordPris = {
  rubrik: "Vad kostar ett korsord?",
  stycken: [
    "Priset på ett korsord beror till största delen på hur stort det ska vara.",
    "Köper du flera eller regelbundet så kommer priset sjunka per korsord.",
    "Det beror lite på vem du är. Privatpersoner betalar generellt lite mindre än större organisationer och företag.",
  ],
  spann: "Beroende på storlek så kostar ett korsord mellan 500 och 5 000 kr.",
};
