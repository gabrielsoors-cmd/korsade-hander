import type { MetadataRoute } from "next";
import { behandlingar } from "@/content/massage";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/massage"), changeFrequency: "monthly", priority: 0.9 },
    ...behandlingar.map((b) => ({
      url: absoluteUrl(`/massage/${b.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: absoluteUrl("/korsord"), changeFrequency: "monthly", priority: 0.9 },
  ];
}
