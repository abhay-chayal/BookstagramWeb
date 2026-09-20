import type { MetadataRoute } from "next";
import { getAllSolutions } from "@/data/solutions";
import { reviewsData } from "@/data/reviews";
import { JOURNAL_ARTICLES } from "@/data/journal";
import { NEWSLETTER_ISSUES } from "@/data/newsletter";
import { SITE_URL } from "@/lib/site";

const BASE_URL = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/solutions",
    "/portfolio",
    "/pricing",
    "/reviews",
    "/journal",
    "/newsletter",
    "/community",
    "/contact",
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  for (const solution of getAllSolutions()) {
    entries.push({ url: `${BASE_URL}/solutions/${solution.id}`, priority: 0.7 });
  }
  for (const review of reviewsData) {
    entries.push({ url: `${BASE_URL}/reviews/${review.id}`, priority: 0.6 });
  }
  for (const article of JOURNAL_ARTICLES) {
    entries.push({ url: `${BASE_URL}/journal/${article.slug}`, priority: 0.6 });
  }
  for (const issue of NEWSLETTER_ISSUES) {
    entries.push({ url: `${BASE_URL}/newsletter/${issue.slug}`, priority: 0.5 });
  }

  return entries;
}
