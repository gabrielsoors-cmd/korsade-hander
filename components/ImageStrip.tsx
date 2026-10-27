import type { Photo as PhotoType } from "@/content/images";
import { Photo } from "./Photo";

// Bildflöde som scrollas i sidled, med fingret på mobil.
export function ImageStrip({ photos, label }: { photos: PhotoType[]; label: string }) {
  return (
    <div
      role="region"
      aria-label={label}
      tabIndex={0}
      className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6"
    >
      {photos.map((photo, i) => (
        <figure key={i} className="ruta w-[78%] shrink-0 snap-start sm:w-[45%] lg:w-[31%]">
          <Photo photo={photo} sizes="(min-width: 1024px) 31vw, (min-width: 640px) 45vw, 78vw" className="aspect-[4/5] w-full object-cover" />
        </figure>
      ))}
    </div>
  );
}
