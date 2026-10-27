"use client";

import Image from "next/image";
import { useState } from "react";
import { photoUrl, type Photo as PhotoType } from "@/content/images";

type Props = {
  photo: PhotoType;
  sizes: string;
  className?: string;
  preload?: boolean;
  fit?: "cover" | "contain";
};

// Fyller sin förälder (som måste ha position: relative och en storlek).
// Går bilden inte att ladda visas en lugn platshållare i stället.
export function Photo({ photo, sizes, className = "", preload = false, fit = "cover" }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div role="img" aria-label={photo.alt} className={`bildplats absolute inset-0 ${className}`}>
        <span aria-hidden="true">{photo.alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={photoUrl(photo)}
      alt={photo.alt}
      fill
      sizes={sizes}
      preload={preload}
      onError={() => setFailed(true)}
      className={`${fit === "cover" ? "object-cover" : "object-contain"} ${className}`}
    />
  );
}
