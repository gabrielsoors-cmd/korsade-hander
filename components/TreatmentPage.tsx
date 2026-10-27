import { ChevronLeft, Clock, UserRound } from "lucide-react";
import Link from "next/link";
import { behandlingar, hittaBehandling, pris } from "@/content/massage";
import { mailto, site } from "@/content/site";
import { absoluteUrl, seo } from "@/lib/seo";
import { ContactBlock } from "./ContactBlock";
import { JsonLd } from "./JsonLd";
import { Photo } from "./Photo";
import { TreatmentCard } from "./TreatmentCard";

export function treatmentMetadata(slug: string) {
  const b = hittaBehandling(slug);
  return seo({ title: `${b.namn} – medicinsk massage`, description: b.beskrivning, path: `/massage/${b.slug}` });
}

export function TreatmentPage({ slug }: { slug: string }) {
  const b = hittaBehandling(slug);
  const andra = behandlingar.filter((x) => x.slug !== slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: b.namn,
          description: b.beskrivning,
          url: absoluteUrl(`/massage/${b.slug}`),
          provider: { "@type": "HealthAndBeautyBusiness", name: site.name, url: absoluteUrl("/massage") },
          offers: { "@type": "Offer", price: pris.kronor, priceCurrency: "SEK" },
        }}
      />

      <div className="behallare pt-6 sm:pt-8">
        <Link
          href="/massage#behandlingar"
          className="inline-flex items-center gap-1 text-[0.9375rem] font-medium text-graphite transition-colors hover:text-ink"
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
          Alla behandlingar
        </Link>
      </div>

      <article className="behallare grid grid-cols-1 gap-10 pb-16 pt-6 lg:grid-cols-2 lg:gap-16 lg:pb-24 lg:pt-10">
        <div className="animate-in">
          <h1 className="text-4xl hyphens-auto sm:text-6xl">{b.namn}</h1>
          <p className="ingress mt-6">{b.fokus}</p>
          <div className="text-flode mt-5 max-w-xl text-lg leading-relaxed">
            {b.stycken.map((s) => (
              <p key={s}>{s}</p>
            ))}
          </div>

          <div className="mt-8 rounded-kort bg-spruce-soft p-5 sm:p-6">
            <p className="flex items-center gap-2 font-semibold text-ink">
              <UserRound className="size-5 text-spruce" aria-hidden="true" />
              Passar för
            </p>
            <p className="mt-2">{b.passarFor}</p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href={mailto(`Bokning: ${b.namn}`)} className="knapp">
              Boka {b.namn.toLowerCase()}
            </a>
            <p className="flex items-center gap-2 font-semibold text-ink">
              <Clock className="size-5 text-spruce" aria-hidden="true" />
              {pris.kronor} kr / {pris.minuter} minuter
            </p>
          </div>
        </div>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-stor bg-mist lg:aspect-[4/5]">
            <Photo photo={b.bild} preload sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </article>

      <section aria-labelledby="andra" className="bg-mist">
        <div className="behallare sektion">
          <h2 id="andra" className="text-3xl sm:text-4xl">
            Andra behandlingar
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {andra.map((x) => (
              <li key={x.slug}>
                <TreatmentCard b={x} compact />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="pt-16 lg:pt-24">
        <ContactBlock
          rubrik="Boka en tid"
          text={`Mejla mig och berätta att du vill boka ${b.namn.toLowerCase()} och vilka dagar som passar dig, så återkommer jag med en tid.`}
          amne={`Bokning: ${b.namn}`}
          knapptext="Mejla och boka"
        />
      </div>
    </>
  );
}
