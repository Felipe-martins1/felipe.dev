import type { MetadataRoute } from "next";
import { socialsSection } from "@/resources/socials";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.URL ?? socialsSection.url;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
