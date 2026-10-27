# Korsade Händer – korsadehander.se

Webbplats för den enskilda firman Korsade Händer: medicinsk massageterapi och korsordskonstruktion.

- `/` – startsida med namnkrysset, ingångar till de två delarna, bildspel och Swish/bankgiro
- `/massage` – medicinsk massageterapi, med en egen sida per behandling under `/massage/...`
- `/korsord` – korsord, testkryss, kunder, pris och galleri

Byggd med Next.js 16 (App Router) och Tailwind CSS 4. Hostas på Vercel, som bygger om sajten automatiskt vid varje push till `main`.

## Ändra innehåll

Alla texter och uppgifter ligger i `content/` – du behöver inte röra komponenterna:

| Fil | Innehåll |
| --- | --- |
| `content/site.ts` | E-post, telefon, Swish, bankgiro, länk till testkrysset |
| `content/massage.ts` | Texter, behandlingar och pris för massagen |
| `content/korsord.ts` | Texter, exempel-PDF:er, kundlista och pris för korsorden |
| `content/images.ts` | Alla bilder |

**Bilder:** tills Korsade Händer har egna bilder används gratisbilder från Pexels. Lägg en egen bild i `public/bilder/` och byt posten i `content/images.ts` till `{ src: "/bilder/filnamn.jpg", alt: "..." }`. Korsordsgalleriet (`korsordGalleri`) ska fyllas med bilder på riktiga korsord.

**Kundlogotyper:** lägg filen i `public/kunder/` (helst SVG eller PNG med transparent bakgrund) och sätt `logo: "/kunder/filnamn.svg"` på kunden i `content/korsord.ts`. Utan logotyp visas namnet. Visa bara logotyper som kunden har godkänt.

**Exempel-PDF:er:** lägg filen i `public/pdf/` och fyll i `exempelPdf` i `content/korsord.ts`. Knappen visas först när sökvägen är ifylld.

## Designtokens

Färger och typsnitt finns i `app/globals.css` (`@theme`):

- Papper `#ffffff`, bläck `#000000`, grafit `#3e3f44` (brödtext)
- Massage: tallgrönt `#2c5a4b` / `#e3eee9`
- Korsord: markeringsgult `#ffd84d` / `#fff3c2`
- Rubriker: Familjen Grotesk. Brödtext: Newsreader. Båda självhostade via Fontsource.
- Kantiga former och 2 px tuschkant, som rutorna i ett korsord och linjerna i loggan.

Loggan (`public/logo.svg`) är vektoriserad från kundens PNG.

## Utveckling

```bash
npm install
npm run dev        # http://localhost:3000
npx tsc --noEmit   # typkontroll
npm run build      # produktionsbygge
```

## Status

Klart i första versionen: alla sidor, mobilanpassning, SEO-grund (titlar, beskrivningar, canonical, sitemap, robots, ikoner, delningsbild, strukturerad data), 404-sida.

Väntar på kunden:

- Rättning av alla texter (de är utkast, se kommentarerna i `content/`)
- Exakt titel och utfärdare för certifieringen
- Telefonnummer (om det ska synas)
- Var behandlingarna görs, och vad hembesök kostar i resa
- Egna bilder, bilder på korsord till galleriet och exempel-PDF:er
- Godkända logotyper från tidigare kunder

Senare: bokning och betalning online.
