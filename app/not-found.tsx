import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sidan finns inte | Korsade Händer",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="innehall" className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-start px-4 py-20 sm:px-6">
      <div aria-hidden="true" className="rutnat grid grid-cols-3">
        {["", "", ""].map((_, i) => (
          <span key={i} className="ruta size-14 sm:size-16" />
        ))}
      </div>
      <h1 className="mt-8 text-5xl font-semibold tracking-tight">Tom ruta</h1>
      <p className="mt-4 max-w-xl text-lg">
        Sidan du letar efter finns inte. Den kan ha flyttat, eller så har adressen blivit fel.
      </p>
      <ul className="mt-8 flex flex-wrap gap-3">
        <li>
          <Link href="/" className="knapp">
            Till startsidan
          </Link>
        </li>
        <li>
          <Link href="/massage" className="knapp knapp-ljus">
            Medicinsk massageterapi
          </Link>
        </li>
        <li>
          <Link href="/korsord" className="knapp knapp-ljus">
            Korsord
          </Link>
        </li>
      </ul>
    </main>
  );
}
