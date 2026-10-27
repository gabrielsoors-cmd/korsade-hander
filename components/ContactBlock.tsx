import { mailto, site, telLink } from "@/content/site";

type Props = {
  rubrik: string;
  text: string;
  amne: string;
  knapptext: string;
  id?: string;
};

export function ContactBlock({ rubrik, text, amne, knapptext, id = "kontakt" }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-rubrik`} className="bg-accent-soft">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 id={`${id}-rubrik`} className="text-4xl font-semibold tracking-tight">
            {rubrik}
          </h2>
          <p className="mt-4 text-lg leading-relaxed">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={mailto(amne)} className="knapp">
              {knapptext}
            </a>
            {site.phone ? (
              <a href={telLink(site.phone)} className="knapp knapp-ljus">
                Ring {site.phone}
              </a>
            ) : null}
          </div>
          <p className="mt-5 font-rubrik text-base">
            Eller mejla direkt till{" "}
            <a href={`mailto:${site.email}`} className="lank break-all">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
