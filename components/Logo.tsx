type Props = { className?: string; decorative?: boolean };

export function Logo({ className = "", decorative = false }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt={decorative ? "" : "Korsade Händers logga: två korsade händer med rutiga manschetter"}
      width={2163}
      height={2094}
      className={className}
    />
  );
}
