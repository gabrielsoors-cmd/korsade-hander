import { medBas } from "@/lib/bas";

type Props = { className?: string; decorative?: boolean };

// Loggan är svart linjeteckning. Lägg till "invert" i className för en vit version på mörk botten.
export function Logo({ className = "", decorative = false }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={medBas("/logo.svg")}
      alt={decorative ? "" : "Korsade Händers logga: två korsade händer med rutiga manschetter"}
      width={2163}
      height={2094}
      className={className}
    />
  );
}
