import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StaggeredText from "@/components/StaggeredText";
import styles from "./page.module.css";

export default function PricingPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <StaggeredText text="Agency Packages" className={styles.headerTitle} />
          <FadeIn delay={0.4}>
            <p className={styles.headerSubtitle}>
              Transparent pricing for premium author services. Select the tier that matches your career goals and current platform size.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className={styles.pricingSection}>
        <div className={`container ${styles.pricingGrid}`}>
          {/* Plan 1 */}
          <FadeIn direction="up" delay={0.1} className={styles.pricingCard}>
            <div className={styles.cardHeader}>
              <h3>Starter Authority</h3>
              <p className={styles.price}>$179<span>/mo</span></p>
              <p className={styles.description}>Perfect for debut authors looking to establish their digital footprint.</p>
            </div>
            <ul className={styles.featureList}>
              <li>Basic Brand Identity Setup</li>
              <li>Social Media Optimization (2 platforms)</li>
              <li>Monthly Content Calendar</li>
              <li>Quarterly Strategy Call</li>
            </ul>
            <div className={styles.cardFooter}>
              <Button href="/contact" variant="outline" className={styles.fullWidthBtn}>Select Plan</Button>
            </div>
          </FadeIn>

          {/* Plan 2 */}
          <FadeIn direction="up" delay={0.2} className={`${styles.pricingCard} ${styles.featured}`}>
            <div className={styles.badge}>Most Popular</div>
            <div className={styles.cardHeader}>
              <h3>Social Impact</h3>
              <p className={styles.price}>$279<span>/mo</span></p>
              <p className={styles.description}>For growing authors ready to scale their audience and book sales.</p>
            </div>
            <ul className={styles.featureList}>
              <li>Advanced Brand Positioning</li>
              <li>Full Social Media Management</li>
              <li>Influencer Outreach (ARC team)</li>
              <li>Monthly Strategy Call</li>
              <li>Email Newsletter Management</li>
            </ul>
            <div className={styles.cardFooter}>
              <Button href="/contact" variant="primary" className={styles.fullWidthBtn}>Select Plan</Button>
            </div>
          </FadeIn>

          {/* Plan 3 */}
          <FadeIn direction="up" delay={0.3} className={styles.pricingCard}>
            <div className={styles.cardHeader}>
              <h3>Bestseller Ignition</h3>
              <p className={styles.price}>$479<span>/mo</span></p>
              <p className={styles.description}>The comprehensive ecosystem for established authors and major launches.</p>
            </div>
            <ul className={styles.featureList}>
              <li>Everything in Social Impact</li>
              <li>Custom Website Development</li>
              <li>Amazon Ads & Paid Media Management</li>
              <li>Dedicated Account Manager</li>
              <li>Weekly Strategy Check-ins</li>
            </ul>
            <div className={styles.cardFooter}>
              <Button href="/contact" variant="outline" className={styles.fullWidthBtn}>Select Plan</Button>
            </div>
          </FadeIn>
        </div>
        
        <div className="container">
          <FadeIn direction="up" delay={0.4}>
            <div className={styles.customQuote}>
              <h3>Need a custom solution?</h3>
              <p>We offer bespoke packages for multi-book launches, publishers, and specific campaigns.</p>
              <Button href="/contact" variant="secondary">Request Custom Quote</Button>
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
                <summary>How long are your contracts?</summary>
                <div className={styles.faqAnswer}>
                  <p>Our standard agency retainer is a 6-month minimum. We believe that true brand building and sustainable audience growth take time. We are not interested in short-term hacks that damage your long-term reputation.</p>
                </div>
              </details>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <details className={styles.faqItem}>
                <summary>Do you guarantee book sales or bestseller status?</summary>
                <div className={styles.faqAnswer}>
                  <p>No ethical agency can guarantee specific sales numbers or bestseller status. What we do guarantee is that your brand will look world-class, your marketing will be data-driven and targeted, and your book will be put in front of the right readers.</p>
                </div>
              </details>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <details className={styles.faqItem}>
                <summary>I'm traditionally published. Can I still work with you?</summary>
                <div className={styles.faqAnswer}>
                  <p>Absolutely! Many traditionally published authors hire us to supplement their publisher's marketing efforts, manage their social media, and maintain their independent author brand.</p>
                </div>
              </details>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <details className={styles.faqItem}>
                <summary>What if I only need a website?</summary>
                <div className={styles.faqAnswer}>
                  <p>We do take on custom one-off projects like Author Website design or Brand Identity creation without a monthly retainer. Contact us for a custom quote on these specific deliverables.</p>
                </div>
              </details>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
