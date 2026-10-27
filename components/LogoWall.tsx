import type { Kund } from "@/content/korsord";

// Kunder i ett rutnät. Har kunden en godkänd logotyp visas den, annars namnet.
export function LogoWall({ kunder }: { kunder: Kund[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {kunder.map((k) => (
        <li key={k.namn} className="flex min-h-24 items-center justify-center rounded-kort bg-mist px-4 py-5 text-center sm:min-h-28">
          {k.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={k.logo} alt={k.namn} loading="lazy" className="max-h-14 max-w-full object-contain" />
          ) : (
            <span className="text-[0.9375rem] font-semibold leading-snug text-ink/75 sm:text-base">{k.namn}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
