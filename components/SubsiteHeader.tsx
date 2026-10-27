import Link from "next/link";
import { Logo } from "./Logo";

type Variant = "massage" | "korsord";

const CONFIG: Record<Variant, { titel: string; hem: string; lankar: [string, string][]; annan: [string, string] }> = {
  massage: {
    titel: "Medicinsk massageterapi",
    hem: "/massage",
    lankar: [
      ["Behandlingar", "/massage#behandlingar"],
      ["Pris", "/massage#pris"],
      ["Kontakt", "/massage#kontakt"],
    ],
    annan: ["Korsord", "/korsord"],
  },
  korsord: {
    titel: "Korsord",
    hem: "/korsord",
    lankar: [
      ["Mina korsord", "/korsord#mina-korsord"],
      ["Testkryss", "/korsord#testkryss"],
      ["Kunder", "/korsord#kunder"],
      ["Pris", "/korsord#pris"],
      ["Kontakt", "/korsord#kontakt"],
    ],
    annan: ["Massage", "/massage"],
  },
};

export function SubsiteHeader({ variant }: { variant: Variant }) {
  const c = CONFIG[variant];
  return (
    <>
      <a
        href="#innehall"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:p-3 focus:font-rubrik"
      >
        Hoppa till innehållet
      </a>
      <header className="border-b-2 border-ink bg-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="Korsade Händer, till startsidan" className="shrink-0">
              <Logo decorative className="h-auto w-12 sm:w-14" />
            </Link>
            <div className="font-rubrik leading-tight">
              <Link href="/" className="block text-lg font-semibold text-ink hover:underline">
                Korsade Händer
              </Link>
              <Link href={c.hem} className="block text-base text-graphite hover:underline">
                {c.titel}
              </Link>
            </div>
          </div>
          <nav aria-label={c.titel}>
            <ul className="-mx-4 flex items-center gap-x-5 overflow-x-auto whitespace-nowrap px-4 pb-1 font-rubrik text-base md:mx-0 md:px-0 md:pb-0">
              {c.lankar.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-ink underline-offset-4 hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={c.annan[1]} className="inline-block border-2 border-ink px-3 py-1 text-ink hover:bg-mist">
                  Till {c.annan[0].toLowerCase()}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
