import { reviewsData } from "@/data/reviews";
import ReviewCard from "@/components/ReviewCard";
import styles from "./page.module.css";
import StaggeredText from "@/components/StaggeredText";

export const metadata = {
  alternates: { canonical: "/reviews" },
  title: "Editorial Book Reviews",
  description: "Full editorial reviews written by the Bookstagram Club team — books we ran campaigns for, plus the classics our reader community returns to.",
};

export default function ReviewsPage() {
  const clientReviews = reviewsData.filter((r) => r.clientWork);
  const shelfReviews = reviewsData.filter((r) => !r.clientWork);

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <StaggeredText text="Book Reviews" as="h1" className={styles.title} />
            <p className={styles.subtitle}>
              Every review here is written by us, in full. The first group are books we ran campaigns for — read them and judge the work for yourself.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.reviewsGrid}>
        <div className={styles.container}>
          {/* Client campaigns lead. The classics below are community reading,
              not commissioned work, and were burying the real client books. */}
          <div className={styles.groupHeader}>
            <h2>Books We&rsquo;ve Worked On</h2>
            <p>
              Editorial reviews written as part of a promotional campaign for the author.
            </p>
          </div>
          <div className={styles.grid}>
            {clientReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className={`${styles.groupHeader} ${styles.groupHeaderSpaced}`}>
            <h2>From Our Reading Shelf</h2>
            <p>
              Books our reader community returns to, reviewed for the love of it.
            </p>
          </div>
          <div className={styles.grid}>
            {shelfReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
