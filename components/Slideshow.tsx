"use client";

import { useEffect, useState } from "react";
import type { Photo as PhotoType } from "@/content/images";
import { Photo } from "./Photo";
import { useReducedMotion } from "./useReducedMotion";

type Props = { photos: PhotoType[]; label: string; interval?: number };

// Bildspel som tonar mellan bilderna med en långsam zoom. Kan pausas, och står still om
// besökaren har valt minskade rörelser i sitt system.
export function Slideshow({ photos, label, interval = 6000 }: Props) {
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

  return (
    <section aria-roledescription="bildspel" aria-label={label} className="relative">
      <div className="ruta relative aspect-[4/5] overflow-hidden bg-mist sm:aspect-[16/9]">
        {photos.map((photo, i) => {
          const active = i === index;
          return (
            <div
              key={i}
              role="group"
              aria-roledescription="bild"
              aria-label={`${i + 1} av ${photos.length}`}
              aria-hidden={!active}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${active ? "opacity-100" : "opacity-0"}`}
            >
              <Photo
                photo={photo}
                eager={i === 0}
                sizes="(min-width: 1280px) 1200px, 100vw"
                className={`h-full w-full object-cover ${active && playing ? "animate-zoom" : ""}`}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-3 flex items-center justify-between gap-4 font-rubrik">
        <p className="text-sm text-graphite" aria-live={playing ? "off" : "polite"}>
          {index + 1} / {photos.length}
          <span className="sr-only">: {photos[index].alt}</span>
        </p>
        <div className="flex">
          <button type="button" onClick={() => go(-1)} className="knapp knapp-ljus min-h-11 px-4 text-base">
            Föregående
          </button>
          {!reduce && (
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              className="knapp knapp-ljus -ml-0.5 min-h-11 px-4 text-base"
            >
              {paused ? "Spela" : "Pausa"}
            </button>
          )}
          <button type="button" onClick={() => go(1)} className="knapp knapp-ljus -ml-0.5 min-h-11 px-4 text-base">
            Nästa
          </button>
        </div>
      </div>
    </section>
  );
}
