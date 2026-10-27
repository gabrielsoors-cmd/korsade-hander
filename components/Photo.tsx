"use client";

import { useState } from "react";
import { photoSrc, photoSrcSet, type Photo as PhotoType } from "@/content/images";

type Props = {
  photo: PhotoType;
  sizes?: string;
  className?: string;
  eager?: boolean;
};

// Bild som visar en lugn platshållare om den inte går att ladda.
export function Photo({ photo, sizes = "100vw", className = "", eager = false }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div role="img" aria-label={photo.alt} className={`bildplats ${className}`}>
        <span aria-hidden="true">{photo.alt}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={(img) => {
        if (img && img.complete && img.naturalWidth === 0 && img.currentSrc) setFailed(true);
      }}
      src={photoSrc(photo, 1200)}
      srcSet={photoSrcSet(photo)}
      sizes={sizes}
      alt={photo.alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
