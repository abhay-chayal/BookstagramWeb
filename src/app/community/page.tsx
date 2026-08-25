import Button from "@/components/Button";
import styles from "./page.module.css";

export default function CommunityPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <h1>The Reader Community</h1>
          <p>Tap into our vast network of passionate readers, reviewers, and influencers.</p>
        </div>
      </header>

      <section className={styles.contentSection}>
        <div className={`container ${styles.gridContainer}`}>
          <div className={styles.textContent}>
            <h2>Where Stories Find Their Audience</h2>
            <p>
              A great book needs great advocates. At Bookstagram Club, we have cultivated a thriving ecosystem of thousands of avid readers who are actively looking for their next favorite story.
            </p>
            <p>
              We bridge the gap between authors and readers through authentic connections, organized ARC (Advance Reader Copy) tours, and influencer campaigns on Bookstagram and BookTok.
            </p>
            
            <div className={styles.statsRow}>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>10k+</span>
                <span className={styles.statLabel}>Active Reviewers</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Genres Covered</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>2M+</span>
                <span className={styles.statLabel}>Monthly Reach</span>
              </div>
            </div>
          </div>
          
          <div className={styles.imagePlaceholder}>
            {/* Placeholder for community collage image */}
            <div className={styles.placeholderBox}>
              <span className={styles.icon}>📸</span>
              <p>Community Collage Image</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2>Want to join our reviewer team?</h2>
          <p>We are always looking for passionate readers to join our ARC program.</p>
          <Button href="/contact" variant="secondary">Apply to Review</Button>
        </div>
      </section>
    </div>
  );
}
