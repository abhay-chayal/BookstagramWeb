import Image from "next/image";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StaggeredText from "@/components/StaggeredText";
import styles from "./page.module.css";

export const metadata = {
  title: "Reader & Reviewer Community | Bookstagram Club",
  description: "Join our active literary network of over 10,000 readers, Bookstagram reviewers, and book influencers.",
};

export default function CommunityPage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <StaggeredText text="The Reader Community" className={styles.headerTitle} />
          <FadeIn delay={0.3}>
            <p className={styles.headerSubtitle}>
              Connecting passionate readers, active bookstagrammers, and gifted authors through honest reviews, advance reader copies, and genuine literary conversations.
            </p>
          </FadeIn>
        </div>
      </header>

      {/* Intro & Aesthetic Collage */}
      <section className={styles.introSection}>
        <div className={`container ${styles.introGrid}`}>
          <FadeIn direction="right" className={styles.textContent}>
            <h2>Where Stories Find Their Advocates</h2>
            <p>
              A great book needs great champions. At Bookstagram Club, we have cultivated a thriving ecosystem of over 10,000 avid readers, Bookstagram creators, and BookTok voices who are constantly seeking their next favorite read.
            </p>
            <p>
              We bridge the divide between authors and readers with curated Advance Reader Copy (ARC) tours, honest editorial showcases, and authentic engagement that drives lasting word-of-mouth momentum.
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
                <span className={styles.statNumber}>2.4M+</span>
                <span className={styles.statLabel}>Monthly Impressions</span>
              </div>
            </div>
          </FadeIn>

          {/* Real Aesthetic Collage (Replacing Old Placeholder) */}
          <FadeIn direction="left" delay={0.2} className={styles.collageGrid}>
            <div className={styles.collageItem}>
              <Image
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800"
                alt="Cozy reading moment with open book"
                fill
                className={styles.collageImage}
                sizes="(max-width: 768px) 100vw, 30vw"
              />
            </div>
            <div className={styles.collageItem}>
              <Image
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800"
                alt="Stack of aesthetic books and coffee"
                fill
                className={styles.collageImage}
                sizes="(max-width: 768px) 100vw, 20vw"
              />
            </div>
            <div className={styles.collageItem}>
              <Image
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800"
                alt="Library shelves with warm ambient lighting"
                fill
                className={styles.collageImage}
                sizes="(max-width: 768px) 100vw, 20vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The ARC Reviewer Journey */}
      <section className={styles.arcSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <FadeIn direction="up">
              <h2>The ARC Reviewer Experience</h2>
              <p>How our community members receive, read, and champion upcoming titles before release day.</p>
            </FadeIn>
          </div>

          <div className={styles.stepsGrid}>
            <FadeIn direction="up" delay={0.1} className={styles.stepCard}>
              <span className={styles.stepNumber}>01</span>
              <h3>Apply & Match</h3>
              <p>Tell us your favorite genres, reading platforms, and review styles. We match you with books you will genuinely love.</p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className={styles.stepCard}>
              <span className={styles.stepNumber}>02</span>
              <h3>Receive Pre-Release ARCs</h3>
              <p>Get exclusive early digital and physical copies weeks before official release directly to your e-reader or doorstep.</p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className={styles.stepCard}>
              <span className={styles.stepNumber}>03</span>
              <h3>Read & Review Honestly</h3>
              <p>We value authentic, constructive perspectives. No paid positive requirements — only genuine passion for literature.</p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className={styles.stepCard}>
              <span className={styles.stepNumber}>04</span>
              <h3>Share & Spotlight</h3>
              <p>Post your review on Instagram, Goodreads, and Amazon during release week to amplify the author&rsquo;s debut.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Community Member Perks */}
      <section className={styles.perksSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <FadeIn direction="up">
              <h2>Why Join Our Reviewer Circle?</h2>
              <p>More than just free books — be part of a curated literary society.</p>
            </FadeIn>
          </div>

          <div className={styles.perksGrid}>
            <FadeIn direction="up" delay={0.1} className={styles.perkCard}>
              <div className={styles.perkIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h3>Exclusive Early Access</h3>
              <p>Read anticipated releases from indie trailblazers and bestselling authors before they hit bookstore shelves.</p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className={styles.perkCard}>
              <div className={styles.perkIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3>Creator Spotlight</h3>
              <p>Get your Instagram or BookTok profile featured in our weekly reader newsletter and on our official channels.</p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className={styles.perkCard}>
              <div className={styles.perkIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 12 20 22 4 22 4 12" />
                  <rect x="2" y="7" width="20" height="5" />
                  <line x1="12" y1="22" x2="12" y2="7" />
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                </svg>
              </div>
              <h3>Giveaways &amp; Book Swag</h3>
              <p>Participate in exclusive book box unboxings, signed author merchandise, and community giveaway events.</p>
            </FadeIn>
          </div>

          {/* Bottom Dual CTA */}
          <FadeIn direction="up">
            <div className={styles.cta}>
              <h2>Ready to Dive into the Community?</h2>
              <p>
                Whether you want to discover fresh stories as a reviewer or distribute your book to our enthusiastic reader network, we&rsquo;d love to welcome you.
              </p>
              <div className={styles.ctaButtons}>
                <Button href="/contact" variant="primary">
                  Apply as a Reviewer
                </Button>
                <Button href="/solutions" variant="outline">
                  Author ARC Distribution
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
