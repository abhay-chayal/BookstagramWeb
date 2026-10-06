import type { MetadataRoute } from "next";
import { getAllSolutions } from "@/data/solutions";
import { reviewsData } from "@/data/reviews";
import { JOURNAL_ARTICLES } from "@/data/journal";
import { NEWSLETTER_ISSUES } from "@/data/newsletter";
import { SITE_URL } from "@/lib/site";

const BASE_URL = SITE_URL;

/** Content dates are plain YYYY-MM-DD strings; fall back to build time. */
function publishedDate(value?: string): Date {
  if (!value) return new Date();
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? new Date() : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Priority is relative within the site, not an absolute score: the pillar
  // page and commercial pages rank above the editorial archive.
  const staticPaths: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/bookstagram-promotion", priority: 0.9, changeFrequency: "monthly" },
    { path: "/solutions", priority: 0.9, changeFrequency: "monthly" },
    { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" },
    { path: "/journal", priority: 0.7, changeFrequency: "weekly" },
    { path: "/reviews", priority: 0.7, changeFrequency: "weekly" },
    { path: "/newsletter", priority: 0.6, changeFrequency: "weekly" },
    { path: "/community", priority: 0.5, changeFrequency: "monthly" },
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })
  );

  for (const solution of getAllSolutions()) {
    entries.push({
      url: `${BASE_URL}/solutions/${solution.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // Editorial entries carry their own publication date, so crawlers can tell
  // what actually changed instead of seeing every URL stamped with build time.
  for (const article of JOURNAL_ARTICLES) {
    entries.push({
      url: `${BASE_URL}/journal/${article.slug}`,
      lastModified: publishedDate(article.publishedAt),
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }
  for (const issue of NEWSLETTER_ISSUES) {
    entries.push({
      url: `${BASE_URL}/newsletter/${issue.slug}`,
      lastModified: publishedDate(issue.publishedAt),
      changeFrequency: "yearly",
      priority: 0.5,
    });
  }
  // Client campaign reviews outrank the classics archive.
  for (const review of reviewsData) {
    entries.push({
      url: `${BASE_URL}/reviews/${review.id}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: review.clientWork ? 0.7 : 0.4,
    });
  }

  return entries;
}
