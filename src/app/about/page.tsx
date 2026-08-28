import styles from "./page.module.css";
import FadeIn from "@/components/FadeIn";
import StaggeredText from "@/components/StaggeredText";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import BehindEveryBook from "@/components/BehindEveryBook";
import OurVisionScroll from "@/components/OurVisionScroll";

export const metadata = {
  title: "About Us | Bookstagram Club",
  description: "A premium literary marketing and author growth ecosystem connecting exceptional books with the readers meant to discover them.",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* SECTION 1: HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <FadeIn direction="up" delay={0.1}>
            <span className={styles.heroEyebrow}>Who We Are</span>
          </FadeIn>
          <StaggeredText text="Great Books Deserve To Be Discovered." className={styles.heroTitle} />
          <FadeIn direction="up" delay={0.4}>
            <p className={styles.heroSubtitle}>
              We are an integrated ecosystem of strategists, creative directors, and over 10,000 passionate readers — dedicated to ensuring remarkable stories break through the noise.
            </p>
          </FadeIn>
        </div>

        <div className={styles.heroCollage}>
          <div className={`${styles.collageImg} ${styles.img1}`}>
            <Image
              src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=600&q=80"
              alt="Editorial book photography"
              fill
              sizes="300px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className={`${styles.collageImg} ${styles.img2}`}>
            <Image
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80"
              alt="Stack of aesthetic novels"
              fill
              sizes="300px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={`${styles.collageImg} ${styles.img3}`}>
            <Image
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80"
              alt="Cozy reading setting"
              fill
              sizes="300px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PUBLISHING REALITY (THE PROBLEM) */}
      <section className={styles.problemSection}>
        <div className="container">
          <div className={styles.problemHeader}>
            <FadeIn direction="up">
              <span className={styles.problemEyebrow}>The Publishing Reality</span>
              <h2 className={styles.problemTitle}>Publishing is only the beginning.</h2>
              <p className={styles.problemSubtitle}>
                Writing a great book requires immense dedication. But in today’s saturated literary marketplace, merit alone is rarely enough.
              </p>
            </FadeIn>
          </div>

          <div className={styles.problemGrid}>
            <FadeIn direction="up" delay={0.1} className={styles.problemCard}>
              <span className={styles.problemCardNum}>01</span>
              <h3>2,000+ Daily Releases</h3>
              <p>
                Thousands of new titles flood online retailers every day. Without targeted positioning, even masterfully written books vanish into the algorithmic background.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className={styles.problemCard}>
              <span className={styles.problemCardNum}>02</span>
              <h3>Algorithmic Ephemerality</h3>
              <p>
                Social feeds move at blinding speeds. Viral trends evaporate overnight unless an author establishes an authentic, evergreen narrative hook.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className={styles.problemCard}>
              <span className={styles.problemCardNum}>03</span>
              <h3>The Author&rsquo;s Dilemma</h3>
              <p>
                Authors shouldn&rsquo;t be forced to choose between perfecting their craft and becoming full-time marketing directors. You write the story; we build the audience.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.4}>
            <div className={styles.problemBanner}>
              <h3>Our Purpose is to Build the Bridge</h3>
              <p>
                We don’t just broadcast your title — we connect your narrative to the exact readers, reviewers, and literary advocates who will champion it for years to come.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3: WHY WE EXIST (STICKY LEFT + MOVING PROGRESSION RIGHT) */}
      <section className={styles.splitProgressSection}>
        <div className={`container ${styles.splitProgressGrid}`}>
          <div className={styles.splitStickyLeft}>
            <FadeIn direction="up">
              <span className={styles.heroEyebrow}>Intentional Discovery</span>
              <h2>We didn&rsquo;t build another place to post books.</h2>
              <p>
                Generic promo pages post book covers into a void. Bookstagram Club was built as an intentional, high-touch discovery engine that turns casual viewers into committed readers.
              </p>
              <Button href="/solutions" variant="primary">
                Explore Our Solutions &rarr;
              </Button>
            </FadeIn>
          </div>

          <div className={styles.movingCardsRight}>
            <FadeIn direction="up" delay={0.1} className={styles.progressionCard}>
              <span className={styles.progressionBadge}>Phase 01</span>
              <h3>Bespoke Positioning &amp; Visual Hooks</h3>
              <p>
                Every genre has a distinct visual language. We craft custom aesthetic reels, character art quotes, and narrative teasers tailored to your specific audience.
              </p>
              <div className={styles.progressionTags}>
                <span className={styles.progressionTag}>Reader Profiling</span>
                <span className={styles.progressionTag}>Cinematic Reels</span>
                <span className={styles.progressionTag}>Editorial Review</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className={styles.progressionCard}>
              <span className={styles.progressionBadge}>Phase 02</span>
              <h3>Curated ARC Tours &amp; Community Blitz</h3>
              <p>
                We introduce your manuscript to our vetted network of 10,000+ active Bookstagram and BookTok reviewers, generating honest hype ahead of release day.
              </p>
              <div className={styles.progressionTags}>
                <span className={styles.progressionTag}>10k+ Reviewers</span>
                <span className={styles.progressionTag}>Goodreads &amp; Amazon Blitz</span>
                <span className={styles.progressionTag}>Newsletter Feature</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className={styles.progressionCard}>
              <span className={styles.progressionBadge}>Phase 03</span>
              <h3>Enduring Brand Equity &amp; Backlist Momentum</h3>
              <p>
                A book’s life doesn’t end on release week. We build author websites, subscriber ecosystems, and continuous promotional cycles that sustain sales for years.
              </p>
              <div className={styles.progressionTags}>
                <span className={styles.progressionTag}>Author Websites</span>
                <span className={styles.progressionTag}>Newsletter Lists</span>
                <span className={styles.progressionTag}>Backlist Revivals</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className={styles.progressionCard}>
              <span className={styles.progressionBadge}>Phase 04</span>
              <h3>Community Synergy &amp; Reader Loyalty</h3>
              <p>
                Strengthening long-term bonds between authors and audiences through featured author interviews, reader giveaways, and dedicated literary discussions.
              </p>
              <div className={styles.progressionTags}>
                <span className={styles.progressionTag}>Author Interviews</span>
                <span className={styles.progressionTag}>Community Q&amp;As</span>
                <span className={styles.progressionTag}>Lifelong Readership</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 4: TWO SIDES OF THE SAME MISSION (SYMMETRICAL DUAL CARDS) */}
      <section className={styles.dualSidesSection}>
        <div className="container">
          <div className={styles.dualSidesHeader}>
            <FadeIn direction="up">
              <span className={styles.heroEyebrow}>Ecosystem Balance</span>
              <h2>Two Sides of the Same Idea</h2>
              <p>
                We work with the authors who write remarkable stories, and we belong to the readers who cherish them.
              </p>
            </FadeIn>
          </div>

          <div className={styles.dualSidesGrid}>
            <FadeIn direction="up" delay={0.1} className={styles.dualSideCard}>
              <div>
                <span className={styles.dualSideNum}>01</span>
                <h3>For Authors: A Dedicated Growth Partner</h3>
                <p>
                  From manuscript feedback and pre-launch countdowns to custom author websites and AI discovery tools — we provide every strategic asset an author needs under one cohesive roof.
                </p>
                <ul className={styles.dualSideFeatures}>
                  <li><span>✦</span> Targeted Book Launch Campaigns</li>
                  <li><span>✦</span> Professional Book Reviews &amp; Editorial Features</li>
                  <li><span>✦</span> Custom Author Website Architecture</li>
                  <li><span>✦</span> Full Backlist Promotion &amp; Audience Retention</li>
                </ul>
              </div>
              <Button href="/pricing" variant="outline">
                View Promotion Packages
              </Button>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className={styles.dualSideCard}>
              <div>
                <span className={styles.dualSideNum}>02</span>
                <h3>For Readers: A Curated Literary Society</h3>
                <p>
                  We are readers first. Our community spans across romance, fantasy, thrillers, literary fiction, and non-fiction — celebrating genuine recommendations over corporate hype.
                </p>
                <ul className={styles.dualSideFeatures}>
                  <li><span>✦</span> Exclusive Advance Reader Copies (ARCs)</li>
                  <li><span>✦</span> Honest, Unfiltered Book Reviews &amp; Ratings</li>
                  <li><span>✦</span> Bookstagram Creator Spotlights &amp; Swag</li>
                  <li><span>✦</span> Interactive Book Club Discussions</li>
                </ul>
              </div>
              <Button href="/community" variant="primary">
                Join the Reader Circle
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 5: BEHIND EVERY BOOK (CINEMATIC KINETIC EXPERIENCE) */}
      <BehindEveryBook />

      {/* SECTION 6: THE ECOSYSTEM ARCHITECTURE (MODERN INFOGRAPHIC) */}
      <section className={styles.ecosystemSection}>
        <div className="container">
          <div className={styles.ecoHeader}>
            <FadeIn direction="up">
              <span className={styles.heroEyebrow}>Integrated Architecture</span>
              <h2>How Everything Connects</h2>
              <p>
                A unified ecosystem built exclusively to elevate authors and deliver authentic discovery for readers.
              </p>
            </FadeIn>
          </div>

          <div className={styles.ecoArchitecture}>
            {/* Top Source */}
            <div className={styles.ecoSourceNode}>
              <span className={styles.ecoSourceBadge}>The Author &amp; Manuscript</span>
            </div>

            {/* Core Engine */}
            <div className={styles.ecoCoreEngine}>
              <h3>Bookstagram Club Engine</h3>
              <p>Strategic Positioning &amp; Content Architecture</p>
            </div>

            {/* 3 Core Wings */}
            <div className={styles.ecoPillarsGrid}>
              <div className={styles.ecoPillarCard}>
                <div className={styles.ecoPillarIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                    <line x1="7" y1="2" x2="7" y2="22" />
                    <line x1="17" y1="2" x2="17" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="2" y1="7" x2="7" y2="7" />
                    <line x1="2" y1="17" x2="7" y2="17" />
                    <line x1="17" y1="17" x2="22" y2="17" />
                    <line x1="17" y1="7" x2="22" y2="7" />
                  </svg>
                </div>
                <h4>Creative &amp; Visual Media</h4>
                <p>Cinematic reels, aesthetic character art quotes, book trailers, and cover reveals designed specifically for Bookstagram and BookTok.</p>
              </div>

              <div className={styles.ecoPillarCard}>
                <div className={styles.ecoPillarIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h4>ARC &amp; Reviewer Network</h4>
                <p>10,000+ active, vetted Bookstagram reviewers delivering authentic reader buzz, ratings, and social proof ahead of launch day.</p>
              </div>

              <div className={styles.ecoPillarCard}>
                <div className={styles.ecoPillarIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h4>Brand, Web &amp; Tech Ecosystem</h4>
                <p>High-converting author portfolio websites, newsletter list builders, and modern tech solutions for publishers and bookstores.</p>
              </div>
            </div>

            {/* Destination Node */}
            <div className={styles.ecoDestinationNode}>
              <h4>Lifelong Readership &amp; Enduring Author Authority</h4>
              <p>Connecting remarkable books with the readers meant to discover and champion them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR VISION (HORIZONTAL TRACK) */}
      <OurVisionScroll />

      {/* SECTION 8: THE TEAM BEHIND YOUR STORY */}
      <section className={styles.teamSection}>
        <div className="container">
          <div className={styles.teamHeader}>
            <FadeIn direction="up">
              <span className={styles.heroEyebrow}>The Human Factor</span>
              <h2>The Team Behind Your Story</h2>
              <p>
                Literary strategists, editorial veterans, and visual creators dedicated to treating your book with the care it deserves.
              </p>
            </FadeIn>
          </div>

          <div className={styles.teamGrid}>
            <FadeIn direction="up" delay={0.1} className={styles.teamCard}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src="/images/founder.jpg"
                  alt="Abhay - Founder & Literary Strategist"
                  fill
                  className={styles.teamImage}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div className={styles.teamContent}>
                <h3 className={styles.teamName}>Abhay</h3>
                <p className={styles.teamRole}>Founder &amp; Head Strategist</p>
                <p className={styles.teamBio}>
                  Former publishing house publicist with 10+ years shaping debut and backlist author positioning across the digital literary ecosystem.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className={styles.teamCard}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800"
                  alt="Marcus Thorne - Creative & Cinematic Lead"
                  fill
                  className={styles.teamImage}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div className={styles.teamContent}>
                <h3 className={styles.teamName}>Marcus Thorne</h3>
                <p className={styles.teamRole}>Creative &amp; Cinematic Lead</p>
                <p className={styles.teamBio}>
                  Visual director specializing in editorial aesthetics, book trailers, and Bookstagram visual identity systems that captivate modern readers.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className={styles.teamCard}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
                  alt="Sarah Lin - Editorial Director & ARC Lead"
                  fill
                  className={styles.teamImage}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div className={styles.teamContent}>
                <h3 className={styles.teamName}>Sarah Lin</h3>
                <p className={styles.teamRole}>Editorial Director &amp; ARC Lead</p>
                <p className={styles.teamBio}>
                  Manages our 10,000+ reviewer community network, coordinating sensitive manuscript reviews, reader matching, and honest release-week tours.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 9: OUR THREE CORE COMMITMENTS (PROMISE) */}
      <section className={styles.promiseSection}>
        <div className="container">
          <div className={styles.promiseHeader}>
            <FadeIn direction="up">
              <span className={styles.heroEyebrow}>Our Standard</span>
              <h2>What We Promise Every Author</h2>
              <p>The foundational principles guiding every campaign, review, and client engagement.</p>
            </FadeIn>
          </div>

          <div className={styles.promiseGrid}>
            <FadeIn delay={0.1} className={styles.promiseCard}>
              <div className={styles.promiseIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3>Bespoke Craftsmanship</h3>
              <p>
                No recycled templates or automated bots. Every visual reel, review feature, and narrative post is uniquely designed around your book&rsquo;s soul and themes.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className={styles.promiseCard}>
              <div className={styles.promiseIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3>Targeted Reader Alignment</h3>
              <p>
                We do not chase hollow vanity metrics. We place your work in front of genuine readers who actively buy, read, and champion your specific genre.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className={styles.promiseCard}>
              <div className={styles.promiseIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3>Radical Transparency</h3>
              <p>
                We will never promise fake bestseller status or guaranteed sales numbers. We deliver real exposure, professional credibility, and authentic community engagement.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 10: LUXURY FINAL CTA */}
      <section className={styles.finalCtaSection}>
        <div className="container">
          <FadeIn direction="up">
            <div className={styles.finalCtaBox}>
              <h2>Your Book Deserves to Be Discovered.</h2>
              <p>
                Join hundreds of authors who have built enduring brands and connected with passionate readers through Bookstagram Club.
              </p>
              <div className={styles.finalCtaActions}>
                <Button href="/pricing" variant="primary">
                  Explore Campaign Packages &rarr;
                </Button>
                <Button href="/contact" variant="outline">
                  Book a Discovery Consultation
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
