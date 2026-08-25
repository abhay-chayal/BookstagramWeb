import styles from "./page.module.css";
import FadeIn from "@/components/FadeIn";
import StaggeredText from "@/components/StaggeredText";
import Link from "next/link";
import Image from "next/image";
import BehindEveryBook from "@/components/BehindEveryBook";
import OurVisionScroll from "@/components/OurVisionScroll";

export const metadata = {
  title: "About Us | Bookstagram Club",
  description: "We're building a bridge between authors and the readers looking for their next great story.",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* SECTION 1: THE HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleLine}>Great Books Deserve</span>
            <span className={styles.heroTitleLine}>to Be Discovered.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            We’re building a bridge between authors and the readers looking for their next great story.
          </p>
        </div>
        <div className={styles.heroCollage}>
          <div className={`${styles.collageImg} ${styles.img1}`}>
            <Image src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=600&q=80" alt="Editorial layout" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className={`${styles.collageImg} ${styles.img2}`}>
            <Image src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80" alt="Stack of books" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className={`${styles.collageImg} ${styles.img3}`}>
            <Image src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80" alt="Book pages" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section className={styles.problem}>
        <div className="container">
          <FadeIn direction="up">
            <h2 className={styles.problemTitle}>Publishing is only the beginning.</h2>
            <p className={styles.problemText}>
              Thousands of books are published every day. Even exceptional books can struggle to get noticed in the noise.
            </p>
          </FadeIn>
        </div>
        <div className={styles.wallOfBooks}>
          {/* We simulate a wall of books with a repeating background image overlay */}
          <div className={styles.wallOverlay}></div>
          <div className={styles.wallHighlight}>
            <h3>Our job is to help that book stand out.</h3>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY WE EXIST (SPLIT SCREEN) */}
      <section className={styles.splitScreen}>
        <div className={styles.splitLeft}>
          <div className={styles.stickyContent}>
            <h2 className={styles.splitTitle}>We didn’t build another place to post books.</h2>
          </div>
        </div>
        <div className={styles.splitRight}>
          <div className={styles.rightContent}>
            <p className={styles.rightText}>
              We built Bookstagram Club to help authors create visibility around the work they’ve spent months or years creating.
            </p>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>Promotion</div>
              <div className={styles.timelineArrow}>↓</div>
              <div className={styles.timelineItem}>Discovery</div>
              <div className={styles.timelineArrow}>↓</div>
              <div className={styles.timelineItem}>Connection</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR PHILOSOPHY */}
      <section className={styles.philosophy}>
        <div className="container">
          <div className={styles.philosophyGrid}>
            <FadeIn delay={0.1} className={`${styles.philCard} ${styles.philCard1}`}>
              <div className={styles.philNumber}>01</div>
              <h3 className={styles.philTitle}>Visibility</h3>
              <p className={styles.philText}>Great books need opportunities to be seen.</p>
            </FadeIn>
            <FadeIn delay={0.2} className={`${styles.philCard} ${styles.philCard2}`}>
              <div className={styles.philNumber}>02</div>
              <h3 className={styles.philTitle}>Authenticity</h3>
              <p className={styles.philText}>Promotion should feel connected to the story.</p>
            </FadeIn>
            <FadeIn delay={0.3} className={`${styles.philCard} ${styles.philCard3}`}>
              <div className={styles.philNumber}>03</div>
              <h3 className={styles.philTitle}>Consistency</h3>
              <p className={styles.philText}>Long-term awareness is built through repeated exposure.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 5: BEHIND EVERY BOOK */}
      <BehindEveryBook />

      {/* SECTION 6: WHAT WE DO (VISUAL ECOSYSTEM) */}
      <section className={styles.ecosystem}>
        <div className="container">
          <div className={styles.ecosystemDiagram}>
            <div className={styles.ecoNodeTop}>AUTHORS</div>
            <div className={styles.ecoArrow}>↓</div>
            <div className={styles.ecoCenterBlock}>
              <div className={styles.ecoBrandName}>BOOKSTAGRAM<br/>CLUB</div>
            </div>
            <div className={styles.ecoBranches}>
              <div className={styles.ecoBranch}>
                <div className={styles.ecoArrowDiagonal}>↙</div>
                <div className={styles.ecoNodeBottom}>CONTENT</div>
              </div>
              <div className={styles.ecoBranch}>
                <div className={styles.ecoArrowVertical}>↓</div>
                <div className={styles.ecoNodeBottom}>SOCIAL</div>
              </div>
              <div className={styles.ecoBranch}>
                <div className={styles.ecoArrowDiagonalRight}>↘</div>
                <div className={styles.ecoNodeBottom}>BRAND</div>
              </div>
            </div>
            <div className={styles.ecoFinalLayer}>
              BOOKS → READERS
            </div>
          </div>

          <div className={styles.ecoExplanation}>
            <p className={styles.ecoExplainTitle}>We bring together:</p>
            <ul className={styles.ecoList}>
              <li>Book promotion</li>
              <li>Social media</li>
              <li>Creative content</li>
              <li>Reviews</li>
              <li>Author branding</li>
              <li>Websites</li>
              <li>Reader discovery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR MISSION */}
      <section className={styles.mission}>
        <div className="container">
          <FadeIn direction="up">
            <h2 className={styles.missionSub}>Our Mission</h2>
            <h3 className={styles.missionTitle}>To help more great books find their readers.</h3>
            <p className={styles.missionText}>
              We exist to amplify the voices of authors who have poured their souls into their work.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 8: OUR VISION (HORIZONTAL SCROLL) */}
      <OurVisionScroll />

      {/* SECTION 9: OUR PROMISE */}
      <section className={styles.promise}>
        <div className="container">
          <h2 className={styles.promiseHeading}>What We Can Promise</h2>
          <div className={styles.promiseGrid}>
            <FadeIn delay={0.1} className={styles.promiseCol}>
              <h3>Professional Presentation</h3>
              <p>We take the presentation of your book seriously, ensuring it looks world-class across every platform.</p>
            </FadeIn>
            <FadeIn delay={0.2} className={styles.promiseCol}>
              <h3>Strategic Promotion</h3>
              <p>We create campaigns built around your specific book, audience, and long-term goals.</p>
            </FadeIn>
            <FadeIn delay={0.3} className={styles.promiseCol}>
              <h3>Honest Expectations</h3>
              <p>We don’t promise that marketing automatically creates bestseller status. We promise visibility, credibility, and discoverability.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className={styles.finalCta}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Your Story Is Already Written.</h2>
          <p className={styles.ctaSubtitle}>Now let’s help more people discover it.</p>
          <div className={styles.ctaButtonGroup}>
            <Link href="/contact" className={styles.btnPrimary}>Promote My Book →</Link>
            <Link href="/solutions" className={styles.btnSecondary}>Explore Our Services →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
