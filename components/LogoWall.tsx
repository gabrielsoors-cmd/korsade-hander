import type { Kund } from "@/content/korsord";

// Kunder som rutor i ett rutnät. Har kunden en godkänd logotyp visas den, annars namnet.
export function LogoWall({ kunder }: { kunder: Kund[] }) {
  return (
    <ul className="rutnat grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {kunder.map((k) => (
        <li key={k.namn} className="ruta flex aspect-[3/2] items-center justify-center bg-paper p-4 sm:p-6">
          {k.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={k.logo} alt={k.namn} loading="lazy" className="max-h-full max-w-full object-contain" />
          ) : (
            <span className="text-center font-rubrik text-lg font-semibold leading-tight text-ink sm:text-xl">
              {k.namn}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
