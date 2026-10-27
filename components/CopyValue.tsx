"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

// Kopierar t.ex. Swishnumret, så man kan klistra in det direkt i appen.
export function CopyValue({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-mist px-4 text-sm font-semibold text-ink transition-colors hover:bg-spruce-soft"
    >
      {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
      <span aria-live="polite">{copied ? "Kopierat" : "Kopiera"}</span>
      <span className="sr-only"> {label}</span>
    </button>
  );
}
