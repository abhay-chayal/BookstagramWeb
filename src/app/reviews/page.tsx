import { reviewsData } from "@/data/reviews";
import ReviewCard from "@/components/ReviewCard";
import styles from "./page.module.css";
import StaggeredText from "@/components/StaggeredText";

export const metadata = {
  title: "Book Reviews | Bookstagram Club",
  description: "Dive with us into the ocean of books. Read our premium professional reviews on the latest and greatest literary works.",
};

export default function ReviewsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <StaggeredText text="Book Reviews" as="h1" className={styles.title} />
            <p className={styles.subtitle}>
              Dive with us into the ocean of books. Explore professional reviews curated by the Bookstagram Club team.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.reviewsGrid}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {reviewsData.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
