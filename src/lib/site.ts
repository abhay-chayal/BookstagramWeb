/**
 * Single source of truth for the site's public identity.
 *
 * These values were previously hardcoded across layout, sitemap, robots and
 * the JSON-LD blocks — and pointed at a domain we do not own, which told
 * search engines the content belonged elsewhere. Change them here only.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://bookstagramclub.shop";

export const SITE_NAME = "Bookstagram Club";

export const SITE_TAGLINE = "Professional Book Promotion & Author Marketing";

export const SITE_DESCRIPTION =
  "We help authors get their books discovered by the right readers through strategic Instagram promotion, creative content, and book launch campaigns built around your book.";

export const INSTAGRAM_URL = "https://instagram.com/bookstagramclub";

/** Absolute URL for a site-relative path — required by OG tags and JSON-LD. */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
