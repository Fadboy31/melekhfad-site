import type { MetadataRoute } from "next";
import { categoryHubs, directoryTools } from "@/lib/directory";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://melekhfad-site.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["", "/tools", "/blog", "/newsletter", "/about"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const categoryRoutes = categoryHubs.map((category) => ({
    url: `${siteUrl}/categories/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const reviewedToolRoutes = directoryTools.map((tool) => ({
    url: `${siteUrl}/tools/${tool.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...reviewedToolRoutes];
}
