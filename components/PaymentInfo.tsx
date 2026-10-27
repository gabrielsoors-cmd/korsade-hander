import { Landmark, Smartphone } from "lucide-react";
import { site } from "@/content/site";
import { CopyValue } from "./CopyValue";

// Swish och bankgiro. Visas bara på Korsade Händers sajt.
export function PaymentInfo() {
  const rows = [
    { label: "Swish", value: site.swishDisplay, raw: site.swish, Icon: Smartphone },
    { label: "Bankgiro", value: site.bankgiro, raw: site.bankgiro, Icon: Landmark },
  ];

  return (
    <dl className="grid gap-4 sm:grid-cols-2">
      {rows.map(({ label, value, raw, Icon }) => (
        <div key={label} className="flex flex-wrap items-center justify-between gap-4 rounded-kort bg-paper p-5 ring-1 ring-line sm:p-6">
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-spruce-soft text-spruce">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <dt className="text-sm font-medium text-graphite">{label}</dt>
              <dd className="whitespace-nowrap text-2xl font-semibold tabular-nums tracking-tight text-ink sm:text-3xl">{value}</dd>
            </div>
          </div>
          <CopyValue value={raw} label={`${label}nummer`} />
        </div>
      ))}
    </dl>
  );
}
