import Link from "next/link";
import { behandlingar } from "@/content/massage";
import { site, telLink } from "@/content/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-paper/70">
      <div className="behallare grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.8fr_1.3fr] lg:py-20">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Logo decorative className="h-12 w-auto invert" />
            <span className="text-lg font-semibold text-paper">Korsade Händer</span>
          </Link>
          <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed">
            Medicinsk massageterapi och korsord på beställning. Två hantverk under samma tak.
          </p>
        </div>

        <nav aria-label="Massage">
          <p className="font-semibold text-paper">Medicinsk massageterapi</p>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            {behandlingar.map((b) => (
              <li key={b.slug}>
                <Link href={`/massage/${b.slug}`} className="transition-colors hover:text-paper">
                  {b.namn}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Korsord">
          <p className="font-semibold text-paper">Korsord</p>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            {[
              ["Mina korsord", "/korsord#mina-korsord"],
              ["Testkryss", "/korsord#testkryss"],
              ["Kunder", "/korsord#kunder"],
              ["Pris", "/korsord#pris"],
              ["Galleri", "/korsord#galleri"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="transition-colors hover:text-paper">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-semibold text-paper">Kontakt</p>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            <li>
              <a href={`mailto:${site.email}`} className="[overflow-wrap:anywhere] transition-colors hover:text-paper">
                {site.email}
              </a>
            </li>
            {site.phone ? (
              <li>
                <a href={telLink(site.phone)} className="transition-colors hover:text-paper">
                  {site.phone}
                </a>
              </li>
            ) : null}
          </ul>
          <p className="mt-8 font-semibold text-paper">Betalning</p>
          <dl className="mt-4 space-y-1.5 text-[0.9375rem]">
            <div className="flex gap-2">
              <dt>Swish</dt>
              <dd className="font-medium tabular-nums text-paper">{site.swishDisplay}</dd>
            </div>
            <div className="flex gap-2">
              <dt>Bankgiro</dt>
              <dd className="font-medium tabular-nums text-paper">{site.bankgiro}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="behallare flex flex-col gap-2 py-6 text-sm sm:flex-row sm:justify-between">
          <p>© Korsade Händer, enskild firma</p>
          <p>Webbplatsen använder inga kakor.</p>
        </div>
      </div>
    </footer>
  );
}
