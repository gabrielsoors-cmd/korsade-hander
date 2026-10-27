import { site } from "@/content/site";
import { CopyValue } from "./CopyValue";

type Props = { compact?: boolean };

// Swish och bankgiro. Visas bara på Korsade Händers sajt.
export function PaymentInfo({ compact = false }: Props) {
  const rows = [
    { label: "Swish", value: site.swishDisplay, raw: site.swish },
    { label: "Bankgiro", value: site.bankgiro, raw: site.bankgiro },
  ];

  if (compact) {
    return (
      <dl className="space-y-1 font-rubrik text-base">
        {rows.map((r) => (
          <div key={r.label} className="flex gap-2">
            <dt className="text-graphite">{r.label}:</dt>
            <dd className="font-semibold tabular-nums text-ink">{r.value}</dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <dl className="rutnat grid sm:grid-cols-2">
      {rows.map((r) => (
        <div key={r.label} className="ruta flex flex-wrap items-center justify-between gap-3 p-5">
          <div>
            <dt className="font-rubrik text-base text-graphite">{r.label}</dt>
            <dd className="font-rubrik text-3xl font-semibold tabular-nums tracking-tight text-ink">{r.value}</dd>
          </div>
          <CopyValue value={r.raw} label={`${r.label}nummer`} />
        </div>
      ))}
    </dl>
  );
}
