import { ArrowUpRight, FileText, Library, PenLine } from "lucide-react";
import Link from "next/link";
import { ContactBlock } from "@/components/ContactBlock";
import { Gallery } from "@/components/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { LogoWall } from "@/components/LogoWall";
import { Photo } from "@/components/Photo";
import { korsordGalleri, korsordHero } from "@/content/images";
import { korsordIntro, korsordPris, kryssotek, kunder, skraddarsydda, tillfallen } from "@/content/korsord";
import { mailto, site } from "@/content/site";
import { absoluteUrl, seo } from "@/lib/seo";

export const metadata = seo({
  title: "Korsord på beställning",
  description:
    "Skräddarsydda korsord till födelsedagar, bröllop, företag och föreningar, och färdiga kryss ur ett eget kryssotek. Från 500 kr.",
  path: "/korsord",
});

const typer = [
  { ...skraddarsydda, Icon: PenLine },
  { ...kryssotek, Icon: Library },
];

export default function KorsordPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: `${site.name}, korsord`,
          url: absoluteUrl("/korsord"),
          email: site.email,
          image: absoluteUrl("/logo.png"),
          priceRange: "500–5 000 kr",
        }}
      />

      <section className="behallare grid items-center gap-10 pb-16 pt-10 sm:pt-14 lg:grid-cols-2 lg:gap-16 lg:pb-24 lg:pt-16">
        <div className="animate-in">
          <span className="bricka bg-saffron-soft text-ink">Från 500 kr</span>
          <h1 className="mt-5 text-5xl sm:text-6xl">{korsordIntro.rubrik}</h1>
          <p className="ingress mt-6 max-w-xl">{korsordIntro.ingress}</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed">{korsordIntro.stycke}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={mailto("Beställning av korsord")} className="knapp">
              Beställ ett korsord
            </a>
            <Link href="/korsord#testkryss" className="knapp knapp-ljus">
              Prova ett kryss
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-stor bg-mist lg:aspect-[4/5]">
          <Photo photo={korsordHero} preload sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </section>

      <section id="mina-korsord" aria-labelledby="mina-korsord-rubrik" className="bg-mist">
        <div className="behallare sektion">
          <h2 id="mina-korsord-rubrik" className="text-3xl sm:text-4xl">
            Mina korsord
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {typer.map(({ rubrik, stycken, exempelPdf, Icon }) => (
              <article key={rubrik} className="flex flex-col rounded-kort bg-paper p-6 ring-1 ring-line sm:p-8">
                <span className="flex size-12 items-center justify-center rounded-full bg-saffron-soft text-ink">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-2xl">{rubrik}</h3>
                <div className="text-flode mt-3 leading-relaxed">
                  {stycken.map((s) => (
                    <p key={s}>{s}</p>
                  ))}
                </div>
                {exempelPdf ? (
                  <a
                    href={exempelPdf}
                    target="_blank"
                    rel="noopener"
                    className="mt-6 inline-flex items-center gap-2 self-start font-semibold text-spruce hover:underline"
                  >
                    <FileText className="size-4" aria-hidden="true" />
                    Se ett exempel (PDF)
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testkryss" aria-labelledby="testkryss-rubrik" className="behallare sektion">
        <div className="grid items-center gap-10 overflow-hidden rounded-stor bg-saffron px-6 py-12 sm:px-12 sm:py-14 lg:grid-cols-[1.3fr_1fr] lg:px-16">
          <div>
            <h2 id="testkryss-rubrik" className="text-3xl sm:text-4xl">
              Prova ett av mina kryss
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink/80">
              {site.testkryss.title} går att lösa direkt i webbläsaren, på mobilen eller datorn.
            </p>
            <a href={site.testkryss.url} target="_blank" rel="noopener" className="knapp knapp-mork mt-8">
              Lös {site.testkryss.title}
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">(öppnas i ny flik)</span>
            </a>
          </div>
          <div aria-hidden="true" className="flex justify-start lg:justify-end">
            <div className="grid grid-cols-5 overflow-hidden rounded-xl bg-paper shadow-[0_20px_40px_-20px_rgba(21,32,28,0.45)]">
              {[..."KRYSS"].map((ch, i) => (
                <span
                  key={i}
                  className="relative flex size-12 items-center justify-center border-r border-ink/15 text-2xl font-semibold text-ink last:border-r-0 sm:size-16 sm:text-3xl"
                >
                  {i === 0 ? <span className="absolute left-1.5 top-1 text-[0.625rem] font-medium text-graphite">1</span> : null}
                  {ch}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kunder" aria-labelledby="kunder-rubrik" className="behallare pb-16 lg:pb-24">
        <h2 id="kunder-rubrik" className="max-w-2xl text-3xl sm:text-4xl">
          Jag har konstruerat korsord för och till
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {tillfallen.map((t) => (
            <li key={t} className="bricka bg-saffron-soft text-ink">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <LogoWall kunder={kunder} />
        </div>
      </section>

      <section id="pris" aria-labelledby="pris-rubrik" className="bg-mist">
        <div className="behallare sektion grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
          <div>
            <h2 id="pris-rubrik" className="text-3xl sm:text-4xl">
              {korsordPris.rubrik}
            </h2>
            <div className="text-flode mt-6 max-w-xl text-lg leading-relaxed">
              {korsordPris.stycken.map((s) => (
                <p key={s}>{s}</p>
              ))}
            </div>
          </div>
          <div className="rounded-kort bg-paper p-8 ring-1 ring-line">
            <p className="text-[0.9375rem] font-medium text-graphite">Pris per korsord</p>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">500–5 000 kr</p>
            <p className="mt-3">{korsordPris.spann}</p>
            <a href={mailto("Prisförfrågan korsord")} className="knapp mt-6 w-full sm:w-auto">
              Fråga om pris
            </a>
          </div>
        </div>
      </section>

      <section id="galleri" aria-labelledby="galleri-rubrik" className="behallare sektion">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="galleri-rubrik" className="text-3xl sm:text-4xl">
            Galleri
          </h2>
          <p className="max-w-sm sm:text-right">Ett urval av korsord jag har gjort. Klicka på en bild för att se den större.</p>
        </div>
        <div className="mt-10">
          <Gallery photos={korsordGalleri} />
        </div>
      </section>

      <ContactBlock
        rubrik="Beställ ett korsord"
        text="Berätta vad korsordet ska handla om, ungefär hur stort det ska vara och när du behöver det, så återkommer jag med ett förslag och ett pris."
        amne="Beställning av korsord"
        knapptext="Mejla din beställning"
      />
    </>
  );
}
