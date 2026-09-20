import Link from "next/link";
import { getAllSolutions, type Solution } from "@/data/solutions";
import styles from "./RelatedServices.module.css";

/**
 * Cross-links the service pages to each other.
 *
 * Eight of the eleven service pages previously had a single inbound internal
 * link (the Solutions index), so almost no authority reached them. This
 * surfaces same-category services first, then fills from the rest, so every
 * service page both gains and passes links.
 */
export default function RelatedServices({
  currentId,
  limit = 3,
  heading = "Related Services",
}: {
  currentId: string;
  limit?: number;
  heading?: string;
}) {
  const all = getAllSolutions();
  const current = all.find((s) => s.id === currentId);
  const others = all.filter((s) => s.id !== currentId);

  const sameCategory = current
    ? others.filter((s) => s.category === current.category)
    : [];

  // Fill from the sequential wrap-around after this service, so every service
  // receives a roughly equal number of inbound links instead of the first few
  // absorbing them all.
  const idx = Math.max(0, all.findIndex((s) => s.id === currentId));
  const sequential = Array.from({ length: all.length - 1 }, (_, i) => all[(idx + 1 + i) % all.length]).filter(
    (s) => s.id !== currentId
  );

  const picked: Solution[] = [];
  for (const s of [...sameCategory, ...sequential]) {
    if (picked.length >= limit) break;
    if (!picked.some((p) => p.id === s.id)) picked.push(s);
  }

  if (picked.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="related-services">
      <div className="container">
        <h2 id="related-services" className={styles.heading}>
          {heading}
        </h2>
        <ul className={styles.grid}>
          {picked.map((s) => (
            <li key={s.id}>
              <Link href={`/solutions/${s.id}`} className={styles.card}>
                <span className={styles.tag}>{s.categoryTitle}</span>
                <span className={styles.name}>{s.name}</span>
                <span className={styles.blurb}>
                  {s.purpose.length > 120 ? `${s.purpose.slice(0, 117).trimEnd()}…` : s.purpose}
                </span>
                <span className={styles.more}>Explore &rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
