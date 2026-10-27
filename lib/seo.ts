import type { Metadata } from "next";
import { site } from "@/content/site";

type SeoInput = {
  /** Sidans egen titel. Blir "Titel | Korsade Händer". Utelämna på startsidan. */
  title?: string;
  description: string;
  /** Sökväg utan domän, t.ex. "/massage". */
  path: string;
};

const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Korsade Händer: medicinsk massageterapi och korsord",
};

// All metadata går genom den här funktionen, så att titelformel och canonical bara finns på ett ställe.
export function seo({ title, description, path }: SeoInput): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name}: medicinsk massageterapi och korsord`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "sv_SE",
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [OG_IMAGE.url] },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}
