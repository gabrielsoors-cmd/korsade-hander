import Link from "next/link";
import { ContactBlock } from "@/components/ContactBlock";
import { ImageStrip } from "@/components/ImageStrip";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { massageBildflode, massageHero } from "@/content/images";
import { behandlingar, massageIntro, pris } from "@/content/massage";
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

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">{massageIntro.rubrik}</h1>
          <p className="ingress mt-6 max-w-[38rem]">{massageIntro.ingress}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={mailto("Bokning av massage")} className="knapp">
              Boka tid via e-post
            </a>
            <Link href="/massage#behandlingar" className="knapp knapp-ljus">
              Se behandlingarna
            </Link>
          </div>
        </div>
        <div className="ruta">
          <Photo photo={massageHero} eager sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/3] w-full object-cover" />
        </div>
      </section>

      <section aria-labelledby="om-mig" className="border-t-2 border-ink">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <h2 id="om-mig" className="text-4xl font-semibold tracking-tight">
            Så arbetar jag
          </h2>
          <div className="text-flode max-w-[40rem]">
            {massageIntro.stycken.map((s) => (
              <p key={s}>{s}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="behandlingar" aria-labelledby="behandlingar-rubrik" className="border-t-2 border-ink">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 id="behandlingar-rubrik" className="text-4xl font-semibold tracking-tight">
            Mina behandlingar
          </h2>
          <ul className="mt-8 border-t-2 border-ink">
            {behandlingar.map((b) => (
              <li key={b.slug} className="border-b-2 border-ink">
                <Link
                  href={`/massage/${b.slug}`}
                  className="group grid gap-1 py-5 transition-colors hover:bg-accent-soft sm:grid-cols-[18rem_1fr_auto] sm:items-center sm:gap-6 sm:px-3"
                >
                  <span className="font-rubrik text-2xl font-semibold text-ink group-hover:underline group-hover:underline-offset-4">
                    {b.namn}
                  </span>
                  <span className="text-lg leading-snug">{b.kort}</span>
                  <span className="font-rubrik text-base text-ink underline decoration-accent decoration-2 underline-offset-4 sm:no-underline">
                    Läs mer
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div id="pris" className="mt-10 flex flex-col gap-4 bg-accent p-6 text-on-accent sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="font-rubrik text-2xl font-semibold leading-tight sm:text-3xl">{pris.text}</p>
            <a href={mailto("Bokning av massage")} className="knapp knapp-ljus shrink-0">
              Boka tid via e-post
            </a>
          </div>
        </div>
      </section>

      <section aria-label="Bildflöde" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <ImageStrip photos={massageBildflode} label="Bilder från massagen, scrolla i sidled" />
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
