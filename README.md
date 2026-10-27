# Korsade Händer – korsadehander.se

Webbplats för den enskilda firman Korsade Händer: medicinsk massageterapi och korsordskonstruktion.

- `/` – startsida med namnkrysset, ingångar till de två delarna, bildspel och Swish/bankgiro
- `/massage` – medicinsk massageterapi, med en egen sida per behandling under `/massage/...`
- `/korsord` – korsord, testkryss, kunder, pris och galleri

Byggd med Next.js 16 (App Router) och Tailwind CSS 4 som en statisk sajt. Publiceras på GitHub Pages via `.github/workflows/pages.yml`, som bygger och publicerar automatiskt vid varje push till `main`.

## Publicering på GitHub Pages

- Under Settings → Pages ska "Source" vara **GitHub Actions**.
- Så länge ingen egen domän är kopplad ligger sajten på `https://gabrielsoors-cmd.github.io/korsade-hander/`. Flödet sätter då sökvägsprefixet automatiskt (`BASE_PATH`).
- Egen domän: lägg in `korsadehander.se` under Settings → Pages → Custom domain, och peka sedan domänen hos Griffel dit (A-poster för `@` till 185.199.108.153, 185.199.109.153, 185.199.110.153 och 185.199.111.153, CNAME för `www` till `gabrielsoors-cmd.github.io`). Bocka i "Enforce HTTPS" när det går. Kör sedan flödet igen så att prefixet försvinner.

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

## Design

Färger, typsnitt och former finns i `app/globals.css` (`@theme`):

- Vitt `#ffffff` och sval ljusgrå `#f3f5f3` som bakgrunder, text `#15201c` / `#55625d`
- Huvudfärg granskogsgrön `#1e4a3e` (ljus variant `#e4ede9`)
- Accent för korsorden: saffransgul `#f1be48` (ljus variant `#fbf0d2`)
- Typsnitt: Schibsted Grotesk, självhostat via Fontsource
- Rundade hörn (`rounded-kort` 20 px, `rounded-stor` 32 px), runda knappar

Sidhuvudet är fast i toppen. På mobil och surfplatta finns en meny bakom hamburgerknappen.

Bilderna hämtas och skalas om vid varje bygge av `scripts/bilder.mjs` (WebP i tre bredder i `public/bilder/genererade/`), och `lib/bildladdare.ts` väljer rätt storlek. Besökarens webbläsare hämtar alltså bara filer från den egna domänen. Sajten sätter inga kakor och behöver därför ingen kakbanner. Läggs statistik eller inbäddningar från andra tjänster till senare måste det ses över.

Loggan (`public/logo.svg`) är vektoriserad från kundens PNG.

## Utveckling

```bash
npm install
npm run dev        # http://localhost:3000
npx tsc --noEmit   # typkontroll
npm run build      # statiskt bygge till out/ (hämtar bilderna först)
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
