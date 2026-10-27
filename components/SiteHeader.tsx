"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { mailto } from "@/content/site";
import { Logo } from "./Logo";

export type HeaderVariant = "start" | "massage" | "korsord";

type NavLink = { label: string; href: string };

const CONFIG: Record<
  HeaderVariant,
  { del?: string; delHref?: string; lankar: NavLink[]; annan?: NavLink; cta: { label: string; href: string } }
> = {
  start: {
    lankar: [
      { label: "Medicinsk massageterapi", href: "/massage" },
      { label: "Korsord", href: "/korsord" },
      { label: "Kontakt", href: "/#kontakt" },
    ],
    cta: { label: "Kontakta mig", href: mailto("Fråga till Korsade Händer") },
  },
  massage: {
    del: "Medicinsk massageterapi",
    delHref: "/massage",
    lankar: [
      { label: "Behandlingar", href: "/massage#behandlingar" },
      { label: "Om mig", href: "/massage#om-mig" },
      { label: "Pris", href: "/massage#pris" },
      { label: "Kontakt", href: "/massage#kontakt" },
    ],
    annan: { label: "Korsord", href: "/korsord" },
    cta: { label: "Boka tid", href: mailto("Bokning av massage") },
  },
  korsord: {
    del: "Korsord",
    delHref: "/korsord",
    lankar: [
      { label: "Mina korsord", href: "/korsord#mina-korsord" },
      { label: "Testkryss", href: "/korsord#testkryss" },
      { label: "Kunder", href: "/korsord#kunder" },
      { label: "Pris", href: "/korsord#pris" },
      { label: "Galleri", href: "/korsord#galleri" },
    ],
    annan: { label: "Massage", href: "/massage" },
    cta: { label: "Beställ korsord", href: mailto("Beställning av korsord") },
  },
};

export function SiteHeader({ variant }: { variant: HeaderVariant }) {
  const c = CONFIG[variant];
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <a
        href="#innehall"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:font-semibold focus:text-ink focus:shadow"
      >
        Hoppa till innehållet
      </a>
      <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="behallare flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
          <div className="flex min-w-0 items-center gap-3">
            <Link href="/" onClick={close} className="flex shrink-0 items-center gap-2.5" aria-label="Korsade Händer, startsidan">
              <Logo decorative className="h-9 w-auto lg:h-10" />
              <span className="text-[1.0625rem] font-semibold tracking-tight text-ink">Korsade Händer</span>
            </Link>
            {c.del && c.delHref ? (
              <Link
                href={c.delHref}
                onClick={close}
                className="hidden truncate border-l border-line pl-3 text-[0.9375rem] text-graphite transition-colors hover:text-ink sm:block"
              >
                {c.del}
              </Link>
            ) : null}
          </div>

          <nav aria-label="Huvudmeny" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-[0.9375rem] font-medium">
              {c.lankar.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink/80 transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
              {c.annan ? (
                <li className="border-l border-line pl-7">
                  <Link href={c.annan.href} className="text-graphite transition-colors hover:text-ink">
                    {c.annan.label}
                  </Link>
                </li>
              ) : null}
              <li>
                <a href={c.cta.href} className="knapp min-h-10 px-5 py-2 text-[0.9375rem]">
                  {c.cta.label}
                </a>
              </li>
            </ul>
          </nav>

          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobilmeny"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-mist lg:hidden"
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
            <span className="sr-only">{open ? "Stäng menyn" : "Öppna menyn"}</span>
          </button>
        </div>
      </header>

      {/* Ligger utanför <header>, eftersom headerns oskärpa (backdrop-filter) annars låser fast panelen i headern. */}
      <div
        id="mobilmeny"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-paper lg:hidden"
      >
          <nav aria-label="Mobilmeny" className="behallare flex min-h-full flex-col py-6">
            {c.del ? <p className="text-sm font-medium text-graphite">{c.del}</p> : null}
            <ul className="mt-2 divide-y divide-line">
              {c.lankar.map((l, i) => (
                <li key={l.href}>
                  <Link
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={l.href}
                    onClick={close}
                    className="block py-4 text-2xl font-semibold tracking-tight text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto space-y-3 pt-10">
              <a href={c.cta.href} onClick={close} className="knapp w-full">
                {c.cta.label}
              </a>
              {c.annan ? (
                <Link href={c.annan.href} onClick={close} className="knapp knapp-ljus w-full">
                  Gå till {c.annan.label.toLowerCase()}
                </Link>
              ) : null}
              {variant !== "start" ? (
                <Link href="/" onClick={close} className="block pt-2 text-center text-[0.9375rem] font-medium text-graphite">
                  Till startsidan
                </Link>
              ) : null}
            </div>
          </nav>
      </div>
    </>
  );
}
