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

function Exempel({ pdf, label }: { pdf: string; label: string }) {
  if (!pdf) return null;
  return (
    <a href={pdf} className="knapp knapp-ljus mt-6" target="_blank" rel="noopener">
      {label} (PDF)
    </a>
  );
}

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

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">{korsordIntro.rubrik}</h1>
          <p className="ingress mt-6 max-w-[38rem]">{korsordIntro.ingress}</p>
          <p className="mt-4 max-w-[38rem] text-lg leading-relaxed">{korsordIntro.stycke}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={mailto("Beställning av korsord")} className="knapp">
              Beställ ett korsord
            </a>
            <Link href="/korsord#testkryss" className="knapp knapp-ljus">
              Prova ett kryss
            </Link>
          </div>
        </div>
        <div className="ruta">
          <Photo photo={korsordHero} eager sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/3] w-full object-cover" />
        </div>
      </section>

      <section id="mina-korsord" aria-labelledby="mina-korsord-rubrik" className="border-t-2 border-ink">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 id="mina-korsord-rubrik" className="text-4xl font-semibold tracking-tight">
            Mina korsord
          </h2>
          <div className="rutnat mt-8 grid md:grid-cols-2">
            {[
              { ...skraddarsydda, pdfLabel: "Se ett exempel" },
              { ...kryssotek, pdfLabel: "Se ett exempel" },
            ].map((d) => (
              <div key={d.rubrik} className="ruta p-6 sm:p-8">
                <h3 className="text-2xl font-semibold">{d.rubrik}</h3>
                <div className="text-flode mt-3">
                  {d.stycken.map((s) => (
                    <p key={s}>{s}</p>
                  ))}
                </div>
                <Exempel pdf={d.exempelPdf} label={d.pdfLabel} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testkryss" aria-labelledby="testkryss-rubrik" className="bg-highlight">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6 sm:py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 id="testkryss-rubrik" className="text-4xl font-semibold tracking-tight">
              Prova ett av mina kryss
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              {site.testkryss.title} går att lösa direkt i webbläsaren, på mobilen eller datorn. Det öppnas i en ny flik.
            </p>
            <a href={site.testkryss.url} target="_blank" rel="noopener" className="knapp mt-6 hover:bg-paper hover:text-ink">
              Lös {site.testkryss.title}
            </a>
          </div>
          <div aria-hidden="true" className="rutnat grid grid-cols-5 self-start bg-paper md:self-center">
            {[..."KRYSS"].map((ch, i) => (
              <span
                key={i}
                className="ruta relative flex size-12 items-center justify-center font-rubrik text-2xl font-bold text-ink sm:size-16 sm:text-3xl"
              >
                {i === 0 ? <span className="absolute left-1 top-0.5 text-xs font-normal">1</span> : null}
                {ch}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="kunder" aria-labelledby="kunder-rubrik">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 id="kunder-rubrik" className="max-w-2xl text-4xl font-semibold tracking-tight">
            Jag har konstruerat korsord för och till
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3 font-rubrik text-lg text-ink">
            {tillfallen.map((t) => (
              <li key={t} className="border-2 border-ink px-4 py-2">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <LogoWall kunder={kunder} />
          </div>
        </div>
      </section>

      <section id="pris" aria-labelledby="pris-rubrik" className="border-t-2 border-ink">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <h2 id="pris-rubrik" className="text-4xl font-semibold tracking-tight">
            {korsordPris.rubrik}
          </h2>
          <div>
            <div className="text-flode max-w-[40rem]">
              {korsordPris.stycken.map((s) => (
                <p key={s}>{s}</p>
              ))}
            </div>
            <p className="mt-6 inline-block bg-highlight px-4 py-3 font-rubrik text-2xl font-semibold leading-snug text-ink">
              {korsordPris.spann}
            </p>
          </div>
        </div>
      </section>

      <section id="galleri" aria-labelledby="galleri-rubrik" className="border-t-2 border-ink">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 id="galleri-rubrik" className="text-4xl font-semibold tracking-tight">
            Galleri
          </h2>
          <p className="mt-3 max-w-xl text-lg">Ett urval av korsord jag har gjort. Klicka på en bild för att se den större.</p>
          <div className="mt-8">
            <Gallery photos={korsordGalleri} />
          </div>
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
