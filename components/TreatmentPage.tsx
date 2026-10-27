import Link from "next/link";
import { behandlingar, hittaBehandling, pris } from "@/content/massage";
import { mailto, site } from "@/content/site";
import { absoluteUrl, seo } from "@/lib/seo";
import { ContactBlock } from "./ContactBlock";
import { JsonLd } from "./JsonLd";
import { Photo } from "./Photo";

export function treatmentMetadata(slug: string) {
  const b = hittaBehandling(slug);
  return seo({ title: b.namn, description: b.beskrivning, path: `/massage/${b.slug}` });
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

      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
        <nav aria-label="Brödsmulor" className="font-rubrik text-base">
          <ol className="flex flex-wrap gap-x-2 text-graphite">
            <li>
              <Link href="/massage" className="lank">
                Medicinsk massageterapi
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {b.namn}
            </li>
          </ol>
        </nav>
      </div>

      <article className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">{b.namn}</h1>
          <p className="ingress mt-6">{b.fokus}</p>
          <div className="text-flode mt-5 max-w-[38rem]">
            {b.stycken.map((s) => (
              <p key={s}>{s}</p>
            ))}
          </div>
          <p className="mt-6 border-l-4 border-accent pl-4 text-lg">
            <span className="font-rubrik font-semibold text-ink">Passar för: </span>
            {b.passarFor}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href={mailto(`Bokning: ${b.namn}`)} className="knapp">
              Boka {b.namn.toLowerCase()}
            </a>
            <p className="font-rubrik text-lg text-ink">
              {pris.kronor} kr per {pris.minuter} minuter
            </p>
          </div>
        </div>
        <div className="ruta self-start">
          <Photo photo={b.bild} eager sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/5] w-full object-cover" />
        </div>
      </article>

      <section aria-labelledby="andra" className="border-t-2 border-ink">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 id="andra" className="text-2xl font-semibold">
            Andra behandlingar
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-rubrik text-lg">
            {andra.map((x) => (
              <li key={x.slug}>
                <Link href={`/massage/${x.slug}`} className="lank">
                  {x.namn}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBlock
        rubrik="Boka en tid"
        text={`Mejla mig och berätta att du vill boka ${b.namn.toLowerCase()} och vilka dagar som passar dig, så återkommer jag med en tid.`}
        amne={`Bokning: ${b.namn}`}
        knapptext="Mejla och boka"
      />
    </>
  );
}
