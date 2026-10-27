import { Mail, Phone } from "lucide-react";
import { mailto, site, telLink } from "@/content/site";
import { medBas } from "@/lib/bas";

type Props = {
  rubrik: string;
  text: string;
  amne: string;
  knapptext: string;
  id?: string;
};

export function ContactBlock({ rubrik, text, amne, knapptext, id = "kontakt" }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-rubrik`} className="behallare pb-20 lg:pb-28">
      <div className="relative overflow-hidden rounded-stor bg-spruce px-6 py-12 text-paper sm:px-12 sm:py-16 lg:px-16">
        <div className="relative max-w-2xl">
          <h2 id={`${id}-rubrik`} className="text-3xl text-paper sm:text-4xl lg:text-5xl">
            {rubrik}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-paper/80">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={mailto(amne)} className="knapp bg-paper text-ink hover:bg-spruce-soft">
              <Mail className="size-4" aria-hidden="true" />
              {knapptext}
            </a>
            {site.phone ? (
              <a href={telLink(site.phone)} className="knapp bg-spruce-deep hover:bg-ink">
                <Phone className="size-4" aria-hidden="true" />
                Ring {site.phone}
              </a>
            ) : null}
          </div>
          <p className="mt-6 text-[0.9375rem] text-paper/70">
            Eller mejla direkt till{" "}
            <a href={`mailto:${site.email}`} className="[overflow-wrap:anywhere] font-medium text-paper underline underline-offset-4">
              {site.email}
            </a>
          </p>
        </div>
        {/* Loggan som stor, svag vattenstämpel */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={medBas("/logo.svg")}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-16 hidden w-[26rem] opacity-[0.07] invert md:block"
        />
      </div>
    </section>
  );
}
