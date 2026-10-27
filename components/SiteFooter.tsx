import Link from "next/link";
import { site, telLink } from "@/content/site";
import { Logo } from "./Logo";
import { PaymentInfo } from "./PaymentInfo";

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <div className="schack h-3.5" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex items-start gap-4">
          <Logo decorative className="h-auto w-16 shrink-0" />
          <div>
            <p className="font-rubrik text-lg font-semibold text-ink">Korsade Händer</p>
            <p className="mt-1 text-base leading-relaxed">Medicinsk massageterapi och korsord.</p>
          </div>
        </div>

        <div>
          <p className="font-rubrik font-semibold text-ink">Kontakt</p>
          <ul className="mt-2 space-y-1 font-rubrik text-base">
            <li>
              <a href={`mailto:${site.email}`} className="lank break-all">
                {site.email}
              </a>
            </li>
            {site.phone ? (
              <li>
                <a href={telLink(site.phone)} className="lank">
                  {site.phone}
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <div>
          <p className="font-rubrik font-semibold text-ink">Betalning</p>
          <div className="mt-2">
            <PaymentInfo compact />
          </div>
        </div>

        <nav aria-label="Sidfot">
          <p className="font-rubrik font-semibold text-ink">Sidor</p>
          <ul className="mt-2 space-y-1 font-rubrik text-base">
            <li>
              <Link href="/" className="lank">
                Startsida
              </Link>
            </li>
            <li>
              <Link href="/massage" className="lank">
                Medicinsk massageterapi
              </Link>
            </li>
            <li>
              <Link href="/korsord" className="lank">
                Korsord
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
