import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContactBlock } from "@/components/ContactBlock";
import { JsonLd } from "@/components/JsonLd";
import { Logo } from "@/components/Logo";
import { PaymentInfo } from "@/components/PaymentInfo";
import { Photo } from "@/components/Photo";
import { SiteHeader } from "@/components/SiteHeader";
import { Slideshow } from "@/components/Slideshow";
import { ingangKorsord, ingangMassage, startBildflode } from "@/content/images";
import { pris } from "@/content/massage";
import { site } from "@/content/site";
import { absoluteUrl, seo } from "@/lib/seo";

export const metadata = seo({
  description:
    "Korsade Händer erbjuder medicinsk massageterapi och konstruerar skräddarsydda korsord till privatpersoner, företag och föreningar.",
  path: "/",
});

const ingangar = [
  {
    href: "/massage",
    titel: "Medicinsk massageterapi",
    text: "Klassisk massage, idrottsmassage, andningsmassage, hembesök och avslappnande massage.",
    bricka: `${pris.kronor} kr / ${pris.minuter} min`,
    lank: "Till massagen",
    bild: ingangMassage,
  },
  {
    href: "/korsord",
    titel: "Korsord",
    text: "Skräddarsydda korsord till fester, företag och föreningar, och färdiga kryss ur mitt kryssotek.",
    bricka: "500–5 000 kr",
    lank: "Till korsorden",
    bild: ingangKorsord,
  },
];

export default function Startsida() {
  return (
    <>
      <SiteHeader variant="start" />
      <main id="innehall" className="flex-1">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: site.url,
            logo: absoluteUrl("/logo.png"),
            email: site.email,
          }}
        />

        <section className="behallare grid grid-cols-1 items-center gap-10 pb-16 pt-10 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24 lg:pt-20">
          <div className="animate-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl">Korsade Händer</h1>
            <p className="ingress mt-6 max-w-xl">
              Välkommen! Här möts två hantverk som båda handlar om att lyssna noga och hitta rätt: medicinsk massage
              för kroppen och skräddarsydda korsord för huvudet.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/massage" className="knapp">
                Medicinsk massageterapi
              </Link>
              <Link href="/korsord" className="knapp knapp-ljus">
                Korsord
              </Link>
            </div>
          </div>
          <div className="order-first hidden md:block lg:order-none">
            <div className="relative mx-auto flex aspect-[5/4] w-full max-w-xl items-center justify-center overflow-hidden rounded-stor bg-spruce-soft sm:aspect-square">
              <Logo className="relative w-[64%] sm:w-[68%]" />
            </div>
          </div>
        </section>

        <section aria-labelledby="verksamheter" className="behallare pb-16 lg:pb-24">
          <h2 id="verksamheter" className="sr-only">
            Mina verksamheter
          </h2>
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {ingangar.map((g) => (
              <li key={g.href}>
                <Link
                  href={g.href}
                  className="group flex h-full flex-col overflow-hidden rounded-stor bg-paper ring-1 ring-line transition-shadow hover:shadow-[0_18px_50px_-24px_rgba(21,32,28,0.35)]"
                >
                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-mist">
                    <Photo
                      photo={g.bild}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <span className="bricka absolute left-4 top-4 bg-paper/95 text-ink shadow-sm">{g.bricka}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="text-2xl sm:text-[1.75rem]">{g.titel}</h3>
                    <p className="mt-3 max-w-md">{g.text}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-semibold text-spruce">
                      {g.lank}
                      <span className="flex size-8 items-center justify-center rounded-full bg-spruce-soft transition-transform group-hover:translate-x-1">
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="behallare pb-16 lg:pb-24">
          <Slideshow photos={startBildflode} label="Bilder från Korsade Händer" className="aspect-[4/5] w-full sm:aspect-[16/9]" />
        </section>

        <section aria-labelledby="betalning" className="bg-mist">
          <div className="behallare sektion">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 id="betalning" className="text-3xl sm:text-4xl">
                Betalning
              </h2>
              <p className="max-w-sm sm:text-right">
                Betala med Swish eller till bankgiro. Märk betalningen med ditt namn och vad den gäller.
              </p>
            </div>
            <div className="mt-10">
              <PaymentInfo />
            </div>
          </div>
        </section>

        <div className="pt-16 lg:pt-24">
          <ContactBlock
            rubrik="Hör av dig"
            text="Undrar du något om massagen eller vill beställa ett korsord? Mejla mig, så svarar jag så snart jag kan."
            amne="Fråga till Korsade Händer"
            knapptext="Skicka ett mejl"
          />
        </div>
      </main>
    </>
  );
}
