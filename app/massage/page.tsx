import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { ContactBlock } from "@/components/ContactBlock";
import { Gallery } from "@/components/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { TreatmentCard } from "@/components/TreatmentCard";
import { massageBildflode, massageHero } from "@/content/images";
import { behandlingar, hallpunkter, massageIntro, pris } from "@/content/massage";
import { mailto, site } from "@/content/site";
import { absoluteUrl, seo } from "@/lib/seo";

export const metadata = seo({
  title: "Medicinsk massageterapi",
  description:
    "Medicinsk massage som utgår från dina besvär: klassisk massage, idrottsmassage, andningsmassage, hembesök och avslappnande massage. 890 kr per 50 minuter.",
  path: "/massage",
});

export default function MassagePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: `${site.name}, medicinsk massageterapi`,
          url: absoluteUrl("/massage"),
          email: site.email,
          image: absoluteUrl("/logo.png"),
          makesOffer: behandlingar.map((b) => ({
            "@type": "Offer",
            price: pris.kronor,
            priceCurrency: "SEK",
            itemOffered: { "@type": "Service", name: b.namn, url: absoluteUrl(`/massage/${b.slug}`) },
          })),
        }}
      />

      <section className="behallare grid grid-cols-1 items-center gap-10 pb-16 pt-10 sm:pt-14 lg:grid-cols-2 lg:gap-16 lg:pb-24 lg:pt-16">
        <div className="animate-in">
          <span className="bricka bg-spruce-soft text-spruce">
            {pris.kronor} kr / {pris.minuter} min
          </span>
          <h1 className="mt-5 text-5xl sm:text-6xl">{massageIntro.rubrik}</h1>
          <p className="ingress mt-6 max-w-xl">{massageIntro.ingress}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={mailto("Bokning av massage")} className="knapp">
              Boka tid
            </a>
            <Link href="/massage#behandlingar" className="knapp knapp-ljus">
              Se behandlingarna
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-stor bg-mist lg:aspect-[4/5]">
          <Photo photo={massageHero} preload sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </section>

      <section id="om-mig" aria-labelledby="om-mig-rubrik" className="bg-mist">
        <div className="behallare sektion grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <h2 id="om-mig-rubrik" className="text-3xl sm:text-4xl">
              Så arbetar jag
            </h2>
            <div className="text-flode mt-6 max-w-2xl text-lg leading-relaxed">
              {massageIntro.stycken.map((s) => (
                <p key={s}>{s}</p>
              ))}
            </div>
          </div>
          <ul className="space-y-4 self-start rounded-kort bg-paper p-6 ring-1 ring-line sm:p-8">
            {hallpunkter.map((h) => (
              <li key={h} className="flex gap-3 text-ink">
                <CircleCheck className="mt-0.5 size-5 shrink-0 text-spruce" aria-hidden="true" />
                <span className="font-medium">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="behandlingar" aria-labelledby="behandlingar-rubrik" className="behallare sektion">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="behandlingar-rubrik" className="text-3xl sm:text-4xl">
            Mina behandlingar
          </h2>
          <p className="max-w-sm sm:text-right">{pris.text}</p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {behandlingar.map((b) => (
            <li key={b.slug}>
              <TreatmentCard b={b} />
            </li>
          ))}
        </ul>
      </section>

      <section id="pris" aria-labelledby="pris-rubrik" className="behallare pb-16 lg:pb-24">
        <div className="flex flex-col gap-8 rounded-stor bg-spruce-soft p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="pris-rubrik" className="text-2xl sm:text-3xl">
              Pris
            </h2>
            <p className="mt-3 text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
              {pris.kronor} kr
              <span className="ml-2 text-xl font-medium tracking-normal text-graphite sm:text-2xl">
                / {pris.minuter} minuter
              </span>
            </p>
            <p className="mt-3">Samma pris för alla behandlingar.</p>
          </div>
          <a href={mailto("Bokning av massage")} className="knapp shrink-0">
            Boka tid
          </a>
        </div>
      </section>

      <section aria-labelledby="bilder-rubrik" className="behallare pb-16 lg:pb-24">
        <h2 id="bilder-rubrik" className="text-3xl sm:text-4xl">
          Bilder
        </h2>
        <div className="mt-8">
          <Gallery photos={massageBildflode} variant="rad" />
        </div>
      </section>

      <ContactBlock
        rubrik="Boka en tid"
        text="Mejla mig och berätta vilken behandling du är intresserad av och vilka dagar som passar dig, så återkommer jag med en tid."
        amne="Bokning av massage"
        knapptext="Mejla och boka"
      />
    </>
  );
}
