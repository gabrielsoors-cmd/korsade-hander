import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Behandling } from "@/content/massage";
import { Photo } from "./Photo";

export function TreatmentCard({ b, compact = false }: { b: Behandling; compact?: boolean }) {
  return (
    <Link
      href={`/massage/${b.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-kort bg-paper ring-1 ring-line transition-shadow hover:shadow-[0_18px_50px_-24px_rgba(21,32,28,0.35)]"
    >
      <div className={`relative overflow-hidden bg-mist ${compact ? "aspect-[16/10]" : "aspect-[3/2]"}`}>
        <Photo
          photo={b.bild}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl sm:text-[1.375rem]">{b.namn}</h3>
        {!compact && <p className="mt-2 text-[0.9375rem] leading-relaxed">{b.kort}</p>}
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[0.9375rem] font-semibold text-spruce">
          Läs mer
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
