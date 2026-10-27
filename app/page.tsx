import Link from "next/link";
import { CrosswordName } from "@/components/CrosswordName";
import { JsonLd } from "@/components/JsonLd";
import { Logo } from "@/components/Logo";
import { PaymentInfo } from "@/components/PaymentInfo";
import { Photo } from "@/components/Photo";
import { Slideshow } from "@/components/Slideshow";
import { ingangKorsord, ingangMassage, startBildflode } from "@/content/images";
import { pris } from "@/content/massage";
import { mailto, site } from "@/content/site";
import { absoluteUrl, seo } from "@/lib/seo";

export const metadata = seo({
  description:
    "Korsade Händer erbjuder medicinsk massageterapi och konstruerar skräddarsydda korsord till privatpersoner, företag och föreningar.",
  path: "/",
});

const ingangar = [
  {
    ord: "hander",
    href: "/massage",
    titel: "Medicinsk massageterapi",
    text: `Klassisk massage, idrottsmassage, andningsmassage, hembesök och avslappnande massage. ${pris.kronor} kr per ${pris.minuter} minuter.`,
    bild: ingangMassage,
    hover: "group-hover:bg-pine-soft group-focus-visible:bg-pine-soft",
  },
  {
    ord: "korsade",
    href: "/korsord",
    titel: "Korsord",
    text: "Skräddarsydda korsord till fester, företag och föreningar, och färdiga kryss ur mitt kryssotek.",
    bild: ingangKorsord,
    hover: "group-hover:bg-highlight group-focus-visible:bg-highlight",
  },
] as const;

export default function Startsida() {
  return (
    <main id="innehall" className="startsida">
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

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-8 sm:px-6 sm:pt-12 lg:grid-cols-[auto_1fr] lg:gap-14 lg:pb-20">
        <div>
          <h1 className="sr-only">Korsade Händer</h1>
          <CrosswordName corner={<Logo className="h-full w-auto" />} />
        </div>

        <div className="flex flex-col gap-10 lg:pt-1">
          <nav aria-label="Välj verksamhet">
            <ul className="rutnat grid">
              {ingangar.map((g) => (
                <li key={g.href} className="ruta">
                  <Link href={g.href} data-ord={g.ord} className="group flex items-stretch focus-visible:outline-offset-[-6px]">
                    <span className="block w-24 shrink-0 overflow-hidden border-r-2 border-ink sm:w-32">
                      <Photo photo={g.bild} sizes="128px" className="h-full w-full object-cover" />
                    </span>
                    <span className={`flex flex-1 flex-col justify-center gap-1.5 p-4 transition-colors sm:p-5 ${g.hover}`}>
                      <span className="font-rubrik text-2xl font-semibold leading-tight text-ink sm:text-[1.75rem]">
                        {g.titel}
                      </span>
                      <span className="text-base leading-snug">{g.text}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Välkommen till Korsade Händer</h2>
            <div className="text-flode mt-4">
              <p>
                Här finns två hantverk som båda handlar om att lyssna noga och hitta rätt. Medicinsk massage som tar hand
                om kroppen, och korsord som sätter huvudet i arbete.
              </p>
              <p>
                Välj vart du vill gå, eller{" "}
                <a href={mailto("Fråga till Korsade Händer")} className="lank">
                  mejla mig
                </a>{" "}
                så hjälper jag dig.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <Slideshow photos={startBildflode} label="Bilder från Korsade Händer" />
      </section>

      <section aria-labelledby="betalning" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 id="betalning" className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Betala med Swish eller bankgiro
        </h2>
        <p className="mt-3 max-w-xl text-lg">Märk betalningen med ditt namn och vad den gäller.</p>
        <div className="mt-6 max-w-3xl">
          <PaymentInfo />
        </div>
      </section>
    </main>
  );
}
