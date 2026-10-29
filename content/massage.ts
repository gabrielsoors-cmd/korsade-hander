// Texter för Medicinsk massageterapi.
// UTKAST: skrivna utifrån kundens mall. Ska läsas och rättas av Korsade Händer innan publicering.

import {
  andningBild,
  avslappnandeBild,
  hembesokBild,
  idrottBild,
  klassiskBild,
  type Photo,
} from "./images";

export const pris = {
  kronor: 890,
  minuter: 50,
  text: "Alla behandlingar kostar 890 kr per 50 minuter.",
};

export const massageIntro = {
  rubrik: "Medicinsk massageterapi",
  ingress:
    "Den medicinska massageterapin utgår från hur kroppen faktiskt fungerar. Innan jag börjar behandla tar vi reda på var det gör ont, vad som triggar besvären och hur du rör dig i vardagen.",
  stycken: [
    "Jag är certifierad medicinsk massageterapeut och tar emot allt från idrottare med överbelastade muskler till dig som har ont i nacke och rygg efter långa dagar vid skrivbordet.",
    "Min arbetsfilosofi är att varje behandling ska utgå från dig. Ingen kropp är den andra lik och det som hjälper en person behöver inte vara rätt för nästa. Därför lyssnar jag, känner efter och justerar under hela behandlingen.",
    "Jag brukar nästan alltid avsluta med några enkla övningar eller råd som du kan ta med dig hem, så att effekten håller i sig längre.",
  ],
};

// Korta punkter bredvid "Så arbetar jag".
export const hallpunkter = [
  "Certifierad medicinsk massageterapeut",
  "Behandlingen anpassas efter dig och dina besvär",
  "Råd och övningar att ta med hem",
  "Hembesök med portabel bänk",
];

export type Behandling = {
  slug: string;
  namn: string;
  kort: string;
  fokus: string;
  stycken: string[];
  passarFor: string;
  bild: Photo;
  beskrivning: string;
};

export const behandlingar: Behandling[] = [
  {
    slug: "klassisk-massage",
    namn: "Klassisk massage",
    kort: "Kartläggning och behandling av spända muskler i nacke, axlar, rygg och höfter.",
    fokus: "Fokus på att diagnosticera och behandla.",
    stycken: [
      "Vi börjar med att ta reda på var spänningarna sitter och varför de har uppstått. Sedan arbetar jag med klassiska massagegrepp som knådning, strykningar och friktioner för att lösa upp spända muskler, öka blodcirkulationen och lindra smärta.",
      "Behandlingen anpassas efter vad vi hittar. Ibland ligger fokus på ett enda område, ibland på hela kroppen.",
    ],
    passarFor: "Dig som har värk eller stelhet i nacke, axlar, rygg eller höfter.",
    bild: klassiskBild,
    beskrivning:
      "Medicinsk massage som börjar med en kartläggning av var spänningarna sitter. Lindrar värk i nacke, axlar, rygg och höfter. 890 kr per 50 minuter.",
  },
  {
    slug: "idrottsmassage",
    namn: "Idrottsmassage",
    kort: "Djupare, riktad massage för bättre blodflöde och snabbare återhämtning.",
    fokus: "Fokus på ökat blodflöde och snabbare återhämtning.",
    stycken: [
      "Idrottsmassage är djupare och mer riktad än klassisk massage, och anpassas efter din idrott och var i säsongen du är. Före tävling för att väcka musklerna, efter hård belastning för att återhämta dig, eller när en överbelastning behöver behandlas.",
      "Varje idrott belastar kroppen på sitt sätt. I dragkamp tar till exempel underarmar, rygg, säte och lår en enorm belastning, och då behöver behandlingen följa det.",
    ],
    passarFor: "Dig som tränar eller tävlar och vill återhämta dig bättre eller behandla en överbelastning.",
    bild: idrottBild,
    beskrivning:
      "Idrottsmassage för ökat blodflöde och snabbare återhämtning, anpassad efter din idrott. Behandlar överbelastade muskler. 890 kr per 50 minuter.",
  },
  {
    slug: "andningsmassage",
    namn: "Andningsmassage",
    kort: "Lugna, riktade grepp som hjälper bröstkorgen att röra sig friare.",
    fokus: "Fokus på behandling av andningsmuskulaturen.",
    stycken: [
      "Jag jobbar enligt Lotorpsmetoden.",
      "Mellan revbenen, i bröstkorgen, nacken och mellangärdet sitter muskler som arbetar med varje andetag. När de blir spända kan andningen bli ytlig och ansträngd.",
      "Med lugna, riktade grepp hjälper jag bröstkorgen att röra sig friare. Detta i kombination med instruktion i korrekt andningsteknik ger en lugnare och djupare andning. Har du astma, KOL eller någon annan diagnos som påverkar andningen, berätta det när du bokar.",
    ],
    passarFor: "Dig som har spänningar i bröstkorgen eller ofta andas ytligt, till exempel vid stress.",
    bild: andningBild,
    beskrivning:
      "Andningsmassage som behandlar musklerna i bröstkorg, nacke och mellangärde, så att andningen kan bli djupare och lugnare. 890 kr per 50 minuter.",
  },
  {
    slug: "hembesoksmassage",
    namn: "Hembesöksmassage",
    kort: "Jag kommer hem till dig med portabel bänk och allt som behövs.",
    fokus: "Besök med portabel bänk hemma hos dig.",
    stycken: [
      "Jag tar med allt som behövs: bänk, oljor och handdukar. Du behöver bara ett rum med lite fri golvyta.",
      "Du väljer själv vilken behandling du vill ha. Hör av dig och berätta var du bor, så berättar jag vad som gäller för resan.",
    ],
    passarFor:
      "Dig som har svårt att ta dig till en mottagning, vill slippa resvägen eller vill boka massage till flera i samma hushåll eller på jobbet.",
    bild: hembesokBild,
    beskrivning:
      "Medicinsk massage hemma hos dig. Jag kommer med portabel bänk, oljor och handdukar, och du väljer behandling själv. 890 kr per 50 minuter.",
  },
  {
    slug: "avslappnande-massage",
    namn: "Avslappnande massage",
    kort: "Lättare taktil massage med långa, lugna strykningar.",
    fokus: "Lättare taktil massage.",
    stycken: [
      "Här är målet inte att lösa knutar, utan att låta kroppen och nervsystemet varva ner. Långa, lugna strykningar med jämnt tryck ger en känsla av ro i hela kroppen.",
      "Många upplever att de sover bättre och känner sig mindre stressade efteråt.",
    ],
    passarFor: "Dig som är stressad, sover dåligt eller bara behöver en stund för dig själv.",
    bild: avslappnandeBild,
    beskrivning:
      "Taktil massage med långa, lugna strykningar som låter kroppen varva ner. Passar dig som är stressad eller sover dåligt. 890 kr per 50 minuter.",
  },
];

export function hittaBehandling(slug: string) {
  const b = behandlingar.find((x) => x.slug === slug);
  if (!b) throw new Error(`Okänd behandling: ${slug}`);
  return b;
}
