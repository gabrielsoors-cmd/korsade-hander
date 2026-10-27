"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import type { Photo as PhotoType } from "@/content/images";
import { Photo } from "./Photo";
import { useReducedMotion } from "./useReducedMotion";

type Props = { photos: PhotoType[]; label: string; interval?: number; className?: string };

// Bildspel som tonar mellan bilderna med en långsam zoom. Kan pausas, och står still
// om besökaren har valt minskade rörelser i sitt system.
export function Slideshow({ photos, label, interval = 6000, className = "" }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const playing = !paused && !reduce;

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % photos.length), interval);
    return () => clearInterval(t);
  }, [playing, interval, photos.length]);

  const go = (step: number) => setIndex((i) => (i + step + photos.length) % photos.length);
  const knapp =
    "inline-flex size-10 items-center justify-center rounded-full bg-paper/90 text-ink shadow-sm backdrop-blur transition-colors hover:bg-paper";

  return (
    <section
      aria-roledescription="bildspel"
      aria-label={label}
      className={`relative overflow-hidden rounded-stor bg-mist ${className}`}
    >
      {photos.map((photo, i) => {
        const active = i === index;
        return (
          <div
            key={i}
            role="group"
            aria-roledescription="bild"
            aria-label={`${i + 1} av ${photos.length}: ${photo.alt}`}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${active ? "opacity-100" : "opacity-0"}`}
          >
            <div className={`absolute inset-0 ${active && playing ? "animate-zoom" : ""}`}>
              <Photo photo={photo} preload={i === 0} sizes="(min-width: 1152px) 1088px, 100vw" />
            </div>
          </div>
        );
      })}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4 sm:p-5">
        <div className="flex gap-1.5" aria-hidden="true">
          {photos.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full bg-paper transition-all duration-500 ${i === index ? "w-6" : "w-1.5 opacity-60"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => go(-1)} className={knapp}>
            <ChevronLeft className="size-5" aria-hidden="true" />
            <span className="sr-only">Föregående bild</span>
          </button>
          {!reduce && (
            <button type="button" onClick={() => setPaused((p) => !p)} className={knapp}>
              {paused ? <Play className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
              <span className="sr-only">{paused ? "Starta bildspelet" : "Pausa bildspelet"}</span>
            </button>
          )}
          <button type="button" onClick={() => go(1)} className={knapp}>
            <ChevronRight className="size-5" aria-hidden="true" />
            <span className="sr-only">Nästa bild</span>
          </button>
        </div>
      </div>
      <p className="sr-only" aria-live={playing ? "off" : "polite"}>
        Bild {index + 1} av {photos.length}: {photos[index].alt}
      </p>
    </section>
  );
}
