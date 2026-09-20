import Link from "next/link";
import { absoluteUrl } from "@/lib/site";
import styles from "./Breadcrumbs.module.css";

export interface Crumb {
  name: string;
  href?: string; // omitted on the current page
}

/**
 * Breadcrumb trail plus its BreadcrumbList schema.
 *
 * Gives detail pages a route back up to their section — extra internal links
 * on pages that previously only linked sideways — and lets Google show the
 * hierarchy in results instead of a bare URL.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ name: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: absoluteUrl(c.href) } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className={styles.nav} aria-label="Breadcrumb">
        <ol className={styles.list}>
          {trail.map((c, i) => {
            const isLast = i === trail.length - 1;
            return (
              <li key={`${c.name}-${i}`} className={styles.item}>
                {c.href && !isLast ? (
                  <Link href={c.href} className={styles.link}>
                    {c.name}
                  </Link>
                ) : (
                  <span aria-current="page" className={styles.current}>
                    {c.name}
                  </span>
                )}
                {!isLast && (
                  <span className={styles.sep} aria-hidden="true">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
