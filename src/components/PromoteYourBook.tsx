import Link from "next/link";
import { getAllSolutions } from "@/data/solutions";
import styles from "./PromoteYourBook.module.css";

/**
 * Conversion band at the foot of every review page.
 *
 * Its second job is structural: the 61 review pages are half the site's URLs
 * and previously passed nothing to the service pages, which had a single
 * inbound internal link each. These links close that gap.
 */
/** Stable per-slug offset so each review links to a different slice of the
 *  service pages, spreading 61 pages of link equity across all eleven. */
function offsetFor(seed: string, mod: number) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 100000;
  return mod > 0 ? h % mod : 0;
}

export default function PromoteYourBook({ seed = "", count = 4 }: { seed?: string; count?: number }) {
  const all = getAllSolutions();
  const start = offsetFor(seed, all.length);
  const links = Array.from({ length: Math.min(count, all.length) }, (_, i) => all[(start + i) % all.length]);

  return (
    <section className={styles.band} aria-labelledby="promote-your-book">
      <div className={styles.inner}>
        <span className={styles.eyebrow}>For Authors</span>
        <h2 id="promote-your-book" className={styles.title}>
          Want a review like this for your book?
        </h2>
        <p className={styles.text}>
          We write full editorial reviews as part of a promotional campaign built around
          your book and the readers it was written for — then put it in front of them.
        </p>

        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.id}>
              <Link href={`/solutions/${l.id}`} className={styles.chip}>
                {l.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className={styles.cta}>
          Start Your Campaign
        </Link>
      </div>
    </section>
  );
}
