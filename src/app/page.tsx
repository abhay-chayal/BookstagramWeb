import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StaggeredText from "@/components/StaggeredText";
import GlassCard from "@/components/GlassCard";
import { JOURNAL_ARTICLES } from "@/data/journal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image
          src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2000"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroBgImage}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <FadeIn direction="up" delay={0.1}>
              <p className={styles.heroSubtitle}>Professional Book Promotion & Author Marketing</p>
            </FadeIn>

            <StaggeredText text="Great Books Deserve To Be Discovered." className={styles.heroTitle} />

            <FadeIn direction="up" delay={0.6}>
              <p className={styles.heroDescription}>
                Bookstagram Club helps authors get their books in front of the readers who are meant to find them — through strategic Instagram promotion, creative content, and campaigns built around your book, not a template.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.8}>
              <div className={styles.heroActions}>
                <Button href="/contact" variant="primary">Start Your Campaign</Button>
                <Button href="/solutions" variant="outline">See How It Works</Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How We Get Your Book Seen */}
      <section className={styles.pillars}>
        <div className={`container ${styles.sectionContainer}`}>
          <FadeIn direction="up">
            <div className={styles.sectionHeader}>
              <h2 className="text-gradient">How We Get Your Book Seen</h2>
              <p>Strategic Instagram promotion, creative content, and campaign execution — tailored to your book, not a template. We also work on the manuscript itself, build author websites, and develop AI &amp; technology solutions for bookstores and publishers.</p>
            </div>
          </FadeIn>

          <div className={styles.pillarGrid}>
            <GlassCard delay={0.1} className={styles.pillarFeature}>
              <div className={styles.pillarImageContainer}>
                <Image src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800" alt="Instagram & content promotion" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.pillarImage} />
              </div>
              <h3>Instagram & Content Promotion</h3>
              <p>Dedicated feed posts, stories, reels, and quote graphics — designed around your book's genre, themes, and readers, never a recycled template.</p>
              <Link href="/solutions" className={styles.pillarLink}>View Solutions &rarr;</Link>
            </GlassCard>

            <GlassCard delay={0.2} className={styles.pillarStandard1}>
              <div className={styles.pillarImageContainer}>
                <Image src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800" alt="Book launch campaigns" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.pillarImage} />
              </div>
              <h3>Book Launch Campaigns</h3>
              <p>Structured promotion before, during, and after release — teasers, countdowns, launch-day content, and continued post-launch visibility.</p>
              <Link href="/solutions" className={styles.pillarLink}>See Launch Support &rarr;</Link>
            </GlassCard>

            <GlassCard delay={0.3} className={styles.pillarStandard2}>
              <div className={styles.pillarImageContainer}>
                <Image src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800" alt="Reviews, author features and digital reach" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.pillarImage} />
              </div>
              <h3>Reviews, Features & Digital Reach</h3>
              <p>Book reviews, author features, website promotion, and newsletter exposure — additional touchpoints where readers can discover your book.</p>
              <Link href="/reviews" className={styles.pillarLink}>Explore Reviews &rarr;</Link>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className={styles.process}>
        <div className={`container ${styles.processContainer}`}>
          <FadeIn direction="up">
            <div className={styles.sectionHeader}>
              <h2 className="text-gradient">Our Process</h2>
              <p>A structured promotional process built around your book and its readers — not a one-size-fits-all package.</p>
            </div>
          </FadeIn>

          <div className={styles.processGrid}>
            <FadeIn direction="up" delay={0.1} className={styles.processStep}>
              <div className={styles.stepNumber}>01</div>
              <h3>Understand</h3>
              <p>We start with your book — genre, themes, characters, tone, and who it's really written for. Every strategy begins here, never with a template.</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} className={styles.processStep}>
              <div className={styles.stepNumber}>02</div>
              <h3>Strategize</h3>
              <p>We map your readers — their interests, expectations, and where they already spend time — and build a promotional plan around them.</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3} className={styles.processStep}>
              <div className={styles.stepNumber}>03</div>
              <h3>Create</h3>
              <p>Feed posts, stories, reels, quote graphics, and cinematic content — written and designed specifically for your book.</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.4} className={styles.processStep}>
              <div className={styles.stepNumber}>04</div>
              <h3>Launch & Sustain</h3>
              <p>Content is scheduled across pre-launch, launch, and post-launch, giving readers repeated opportunities to discover your book.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Authors Work With Us */}
      <section className={styles.testimonials}>
        <div className={`container ${styles.sectionContainer}`}>
          <FadeIn direction="up">
            <div className={styles.sectionHeader}>
              <h2>Why Authors Work With Us</h2>
              <p>What you can expect from us — and what we will never claim.</p>
            </div>
          </FadeIn>

          <div className={styles.testimonialGrid}>
            <GlassCard delay={0.1} className={styles.testimonialCard}>
              <h3>Made for your book, not a template</h3>
              <p className={styles.reasonText}>
                We read and understand the book first — its genre, themes, tone, and who it was written for. Every post, graphic, and reel is built from that. Nothing is recycled from someone else&rsquo;s campaign.
              </p>
            </GlassCard>

            <GlassCard delay={0.2} className={styles.testimonialCard}>
              <h3>We meet your book where it is</h3>
              <p className={styles.reasonText}>
                Manuscript stage, pre-publication, launch week, or a book published years ago — we come in at whatever point you&rsquo;re at and build the plan that makes sense from there.
              </p>
            </GlassCard>

            <GlassCard delay={0.3} className={styles.testimonialCard}>
              <h3>Real readers, not vanity numbers</h3>
              <p className={styles.reasonText}>
                We are a community of readers ourselves, across romance, fantasy, thriller, literary fiction and more. Your book goes in front of people who actually read in its genre.
              </p>
            </GlassCard>

            <GlassCard delay={0.4} className={styles.testimonialCard}>
              <h3>Honest expectations</h3>
              <p className={styles.reasonText}>
                We will never promise you sales figures, bestseller rankings, or viral posts — nobody can honestly control those. We commit to the quality of the work and consistent, targeted exposure.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* From the Journal */}
      <section className={styles.journalSection}>
        <div className={`container ${styles.sectionContainer}`}>
          <FadeIn direction="up">
            <div className={styles.journalHeader}>
              <div>
                <span className={styles.journalEyebrow}>Editorial Media</span>
                <h2>From the Journal</h2>
                <p>Curated essays, author spotlights, and deep dives into the world of literature.</p>
              </div>
              <Link href="/journal" className={styles.journalMoreLink}>
                Explore the Journal &rarr;
              </Link>
            </div>
          </FadeIn>

          <div className={styles.journalGrid}>
            {JOURNAL_ARTICLES.slice(0, 3).map((art, idx) => (
              <FadeIn key={art.id} direction="up" delay={idx * 0.1}>
                <article className={styles.journalCard}>
                  <Link href={`/journal/${art.slug}`} className={styles.journalCardImgLink}>
                    <div className={styles.journalCardImgWrapper}>
                      <Image
                        src={art.coverImage}
                        alt={art.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className={styles.journalCardImg}
                      />
                    </div>
                  </Link>
                  <div className={styles.journalCardBody}>
                    <span className={styles.journalCardMeta}>{art.readingTimeMinutes} min read</span>
                    <h3>
                      <Link href={`/journal/${art.slug}`}>{art.title}</Link>
                    </h3>
                    <p>{art.excerpt}</p>
                    <Link href={`/journal/${art.slug}`} className={styles.journalCardRead}>
                      Read Story &rarr;
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Newsletter Subscription Banner */}
      <section className={styles.newsletterBanner}>
        <div className={`container ${styles.sectionContainer}`}>
          <FadeIn direction="up">
            <div className={styles.newsletterCardBox}>
              <span className={styles.newsletterCardEyebrow}>Weekly Dispatch</span>
              <h2>The Bookstagram Club Newsletter</h2>
              <p>Books, authors, discoveries, and stories worth reading. Delivered every Saturday morning.</p>
              <div className={styles.newsletterCardActions}>
                <Link href="/newsletter" className="btn btn-primary" style={{ background: "var(--color-accent-rose)", color: "#fff", borderColor: "var(--color-accent-rose)" }}>
                  Join 12,000+ Readers &rarr;
                </Link>
                <Link href="/newsletter" className="btn btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.6)" }}>
                  Browse Issue Archive
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaContainer}`}>
          <FadeIn direction="up">
            <h2>Ready for your book to be discovered?</h2>
            <p>Let's build a promotional campaign around your book and the readers waiting to find it.</p>
            <Button href="/contact" variant="secondary">Book a Consultation</Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
