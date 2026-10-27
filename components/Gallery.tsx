"use client";

import { useEffect, useRef, useState } from "react";
import type { Photo as PhotoType } from "@/content/images";
import { Photo } from "./Photo";

// Galleri i rutnät. Klick på en bild öppnar den stort, med bläddring.
export function Gallery({ photos }: { photos: PhotoType[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(0);

  useEffect(() => {
    const dialog = dialogRef.current;
    // Stäng om sidan göms vid navigering.
    return () => dialog?.close();
  }, []);

  const show = (i: number) => {
    setOpen(i);
    dialogRef.current?.showModal();
  };
  const step = (n: number) => setOpen((i) => (i + n + photos.length) % photos.length);

  return (
    <>
      <ul className="rutnat grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, i) => (
          <li key={i} className="ruta">
            <button
              type="button"
              onClick={() => show(i)}
              className="group block aspect-square w-full overflow-hidden bg-mist"
            >
              <span className="sr-only">Visa bilden större: </span>
              <Photo
                photo={photo}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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
        className="m-auto max-h-[100dvh] w-full max-w-5xl bg-transparent p-4 backdrop:bg-ink/85"
      >
        <figure className="bg-paper p-2">
          <Photo
            photo={photos[open]}
            sizes="(min-width: 1024px) 1000px, 100vw"
            className="max-h-[75dvh] w-full object-contain"
          />
          <figcaption className="flex flex-wrap items-center justify-between gap-3 px-2 pb-1 pt-3 font-rubrik">
            <span className="text-sm text-graphite">
              {open + 1} / {photos.length}: {photos[open].alt}
            </span>
            <span className="flex">
              <button type="button" onClick={() => step(-1)} className="knapp knapp-ljus min-h-11 px-4 text-base">
                Föregående
              </button>
              <button type="button" onClick={() => step(1)} className="knapp knapp-ljus -ml-0.5 min-h-11 px-4 text-base">
                Nästa
              </button>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="knapp -ml-0.5 min-h-11 px-4 text-base"
                autoFocus
              >
                Stäng
              </button>
            </span>
          </figcaption>
        </figure>
      </dialog>
    </>
  );
}
