import Link from "next/link";
import Image from "next/image";
import styles from "./ReviewCard.module.css";
import { Review } from "@/data/reviews";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <Link href={`/reviews/${review.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={review.coverImage}
            alt={`${review.bookTitle} Cover`}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={styles.ratingBadge}>
            <span className={styles.star}>⭐</span> {review.rating}
          </div>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{review.bookTitle}</h3>
          <p className={styles.author}>by {review.author}</p>
          
          <div className={styles.footer}>
            <span className={styles.reviewer}>Reviewed by {review.reviewer}</span>
            <span className={styles.readMore}>Read Review &rarr;</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
