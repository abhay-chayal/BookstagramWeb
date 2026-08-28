import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StaggeredText from "@/components/StaggeredText";
import styles from "./page.module.css";

export const metadata = {
  title: "Pricing | Bookstagram Club",
  description: "One-time book promotion packages with no monthly retainer and no lock-in. Campaign pricing for launches, backlist promotion, and author brand building.",
};

export default function PricingPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <StaggeredText text="Promotion Packages" className={styles.headerTitle} />
          <FadeIn delay={0.4}>
            <p className={styles.headerSubtitle}>
              One-time packages, priced per campaign. No monthly retainer and no lock-in — you pay once for the campaign we agree on. Choose the package that fits where your book is right now.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className={styles.pricingSection}>
        <div className={`container ${styles.pricingGrid}`}>
          {/* Plan 1 */}
          <FadeIn direction="up" delay={0.1} className={styles.pricingCard}>
            <div className={styles.cardHeader}>
              <h3>Spotlight</h3>
              <p className={styles.price}>$329<span> one-time</span></p>
              <p className={styles.description}>A focused promotional push for a single book — ideal for a book already published that deserves more visibility.</p>
            </div>
            <ul className={styles.featureList}>
              <li>Book positioning &amp; reader profile</li>
              <li>Professional book review &amp; feature page</li>
              <li>Dedicated Instagram feed posts</li>
              <li>Instagram stories &amp; quote graphics</li>
              <li>Custom promotional graphics</li>
            </ul>
            <div className={styles.cardFooter}>
              <Button href="/contact?plan=promotion" variant="outline" className={styles.fullWidthBtn}>Get Started</Button>
            </div>
          </FadeIn>

          {/* Plan 2 */}
          <FadeIn direction="up" delay={0.2} className={`${styles.pricingCard} ${styles.featured}`}>
            <div className={styles.badge}>Most Popular</div>
            <div className={styles.cardHeader}>
              <h3>Signature Launch</h3>
              <p className={styles.price}>$649<span> one-time</span></p>
              <p className={styles.description}>Our complete launch campaign, running across pre-launch, release week, and the period after.</p>
            </div>
            <ul className={styles.featureList}>
              <li>Everything in Spotlight</li>
              <li>Full launch strategy &amp; campaign timeline</li>
              <li>Pre-launch, launch-week &amp; post-launch content</li>
              <li>Cinematic promotional reel</li>
              <li>Author feature &amp; interview</li>
              <li>Newsletter feature to our reader list</li>
            </ul>
            <div className={styles.cardFooter}>
              <Button href="/contact?plan=launch" variant="primary" className={styles.fullWidthBtn}>Get Started</Button>
            </div>
          </FadeIn>

          {/* Plan 3 */}
          <FadeIn direction="up" delay={0.3} className={styles.pricingCard}>
            <div className={styles.cardHeader}>
              <h3>Author Brand</h3>
              <p className={styles.price}>$1,199<span> one-time</span></p>
              <p className={styles.description}>For authors building a long-term presence, not just promoting one title.</p>
            </div>
            <ul className={styles.featureList}>
              <li>Everything in Signature Launch</li>
              <li>Custom author website</li>
              <li>Newsletter &amp; subscriber setup</li>
              <li>Author brand positioning &amp; messaging</li>
              <li>Extended promotional campaign</li>
              <li>Direct strategy calls throughout</li>
            </ul>
            <div className={styles.cardFooter}>
              <Button href="/contact?plan=brand" variant="outline" className={styles.fullWidthBtn}>Get Started</Button>
            </div>
          </FadeIn>
        </div>
        
        <div className="container">
          <FadeIn direction="up" delay={0.4}>
            <div className={styles.customQuote}>
              <h3>Need something outside these packages?</h3>
              <p>Multi-book campaigns, series launches, publisher and bookstore work, standalone author websites, and AI &amp; technology projects are all scoped and quoted individually. Tell us what you need and we&rsquo;ll come back with a clear price.</p>
              <Button href="/contact" variant="secondary">Request a Quote</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section (NEW) */}
      <section className={styles.faqSection}>
        <div className={`container ${styles.faqContainer}`}>
          <FadeIn direction="up">
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          </FadeIn>
          
          <div className={styles.faqList}>
            <FadeIn direction="up" delay={0.1}>
              <details className={styles.faqItem}>
                <summary>Is this a subscription or a one-time payment?</summary>
                <div className={styles.faqAnswer}>
                  <p>One-time. Each package is a single campaign with a defined scope, agreed before we begin. There is no monthly retainer, no recurring charge, and no lock-in. If you later want another campaign for another book, that is a fresh package.</p>
                </div>
              </details>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <details className={styles.faqItem}>
                <summary>Do you guarantee book sales or bestseller status?</summary>
                <div className={styles.faqAnswer}>
                  <p>No. We will not promise sales figures, bestseller rankings, review counts, or follower numbers — no one honestly can, because reader behaviour cannot be controlled. What we commit to is the work itself: professional promotional content made specifically for your book, and consistent, targeted exposure to readers who are genuinely likely to be interested in it.</p>
                </div>
              </details>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <details className={styles.faqItem}>
                <summary>My book isn't finished yet. Is it too early?</summary>
                <div className={styles.faqAnswer}>
                  <p>It is usually the opposite — most authors come to us too late. If your book is still at manuscript or pre-publication stage, we can work on positioning, target readership, and the promotional plan before release, which is the most valuable window for building anticipation.</p>
                </div>
              </details>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <details className={styles.faqItem}>
                <summary>My book was published a while ago. Can you still help?</summary>
                <div className={styles.faqAnswer}>
                  <p>Yes. A book does not stop deserving readers after its launch week. We regularly run promotional campaigns for books published months or years ago, reintroducing them to readers who never encountered them the first time.</p>
                </div>
              </details>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <details className={styles.faqItem}>
                <summary>I'm traditionally published. Can I still work with you?</summary>
                <div className={styles.faqAnswer}>
                  <p>Yes. Many traditionally published authors work with us alongside their publisher&rsquo;s own marketing, particularly for social media presence and author brand — areas publishers often leave to the author.</p>
                </div>
              </details>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <details className={styles.faqItem}>
                <summary>I only need a website, or only AI/tech work.</summary>
                <div className={styles.faqAnswer}>
                  <p>That is fine — those can be booked on their own. Author websites, and our AI &amp; technology work for bookstores, publishers, and book businesses, are scoped and quoted individually. Get in touch and tell us what you need.</p>
                </div>
              </details>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
