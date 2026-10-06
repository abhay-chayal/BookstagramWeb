import { JOURNAL_ARTICLES } from "@/data/journal";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, absoluteUrl } from "@/lib/site";

/**
 * RSS feed for the journal.
 *
 * Feeds are still how aggregators, newsletter tools and several AI crawlers
 * discover new posts, and they give the site a second route to being found
 * besides the sitemap.
 */

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const dynamic = "force-static";

export async function GET() {
  const published = JOURNAL_ARTICLES.filter((a) => a.status !== "draft").sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const items = published
    .map((a) => {
      const url = absoluteUrl(`/journal/${a.slug}`);
      const date = new Date(a.publishedAt);
      const pubDate = Number.isNaN(date.getTime()) ? new Date() : date;
      return `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(a.excerpt ?? "")}</description>
      <pubDate>${pubDate.toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${SITE_NAME} — The Journal`)}</title>
    <link>${escapeXml(absoluteUrl("/journal"))}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en</language>
    <atom:link href="${escapeXml(`${SITE_URL}/feed.xml`)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
