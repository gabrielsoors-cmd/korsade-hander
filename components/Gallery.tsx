"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Photo as PhotoType } from "@/content/images";
import { Photo } from "./Photo";

type Props = { photos: PhotoType[]; variant?: "grid" | "rad" };

// Galleri. "grid" visar ett rutnät, "rad" en rad som scrollas i sidled.
// Klick på en bild öppnar den stort, med bläddring.
export function Gallery({ photos, variant = "grid" }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(0);

  useEffect(() => {
    const dialog = dialogRef.current;
    return () => dialog?.close();
  }, []);

  const show = (i: number) => {
    setOpen(i);
    dialogRef.current?.showModal();
  };
  const step = (n: number) => setOpen((i) => (i + n + photos.length) % photos.length);

  const lista =
    variant === "grid"
      ? "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
      : "-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8";
  const post = variant === "grid" ? "" : "w-[78%] shrink-0 snap-start sm:w-[44%] lg:w-[31%]";
  const aspect = variant === "grid" ? "aspect-square" : "aspect-[4/5]";

  return (
    <>
      <ul className={lista}>
        {photos.map((photo, i) => (
          <li key={i} className={post}>
            <button
              type="button"
              onClick={() => show(i)}
              className={`group relative block w-full overflow-hidden rounded-kort bg-mist ${aspect}`}
            >
              <span className="sr-only">Visa bilden större: </span>
              <Photo
                photo={photo}
                sizes={variant === "grid" ? "(min-width: 1024px) 25vw, 50vw" : "(min-width: 1024px) 31vw, 78vw"}
                className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="Bild ur galleriet"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto h-[100dvh] max-h-none w-full max-w-none bg-transparent p-4 backdrop:bg-ink/90 sm:p-8"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-4 pb-4 text-paper">
            <p className="text-sm text-paper/80">
              {open + 1} / {photos.length}
            </p>
            <button
              type="button"
              autoFocus
              onClick={() => dialogRef.current?.close()}
              className="inline-flex size-11 items-center justify-center rounded-full bg-paper/10 transition-colors hover:bg-paper/20"
            >
              <X className="size-5" aria-hidden="true" />
              <span className="sr-only">Stäng</span>
            </button>
          </div>
          <figure className="relative min-h-0 flex-1">
            <div className="relative h-full w-full">
              <Photo key={open} photo={photos[open]} sizes="100vw" fit="contain" />
            </div>
          </figure>
          <div className="flex items-center justify-between gap-4 pt-4 text-paper">
            <p className="text-sm text-paper/80">{photos[open].alt}</p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => step(-1)}
                className="inline-flex size-11 items-center justify-center rounded-full bg-paper/10 transition-colors hover:bg-paper/20"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
                <span className="sr-only">Föregående</span>
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="inline-flex size-11 items-center justify-center rounded-full bg-paper/10 transition-colors hover:bg-paper/20"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
                <span className="sr-only">Nästa</span>
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
