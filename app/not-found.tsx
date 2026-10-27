import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Sidan finns inte | Korsade Händer",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader variant="start" />
      <main id="innehall" className="behallare flex flex-1 flex-col items-start py-24 lg:py-32">
        <span className="bricka bg-spruce-soft text-spruce">404</span>
        <h1 className="mt-5 text-5xl sm:text-6xl">Sidan finns inte</h1>
        <p className="ingress mt-5 max-w-xl">Den kan ha flyttat, eller så har adressen blivit fel.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="knapp">
            Till startsidan
          </Link>
          <Link href="/massage" className="knapp knapp-ljus">
            Medicinsk massageterapi
          </Link>
          <Link href="/korsord" className="knapp knapp-ljus">
            Korsord
          </Link>
        </div>
      </main>
    </>
  );
}
