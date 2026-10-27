"use client";

import { useState } from "react";

// Knapp som kopierar t.ex. Swishnumret, så man kan klistra in det i appen.
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
    <button type="button" onClick={copy} className="knapp knapp-ljus min-h-10 px-3 py-1 text-sm">
      <span aria-live="polite">{copied ? "Kopierat" : "Kopiera"}</span>
      <span className="sr-only"> {label}</span>
    </button>
  );
}
