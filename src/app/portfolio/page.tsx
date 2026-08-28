import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StaggeredText from "@/components/StaggeredText";
import styles from "./page.module.css";

export const metadata = {
  title: "Author Case Studies & Portfolio | Bookstagram Club",
  description: "Explore real campaign case studies, reader reach metrics, and brand transformations across our author ecosystem.",
};

interface CaseStudy {
  id: string;
  title: string;
  author: string;
  genre: string;
  campaignType: string;
  image: string;
  reviewSlug?: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  strategy: string;
  deliverables: string[];
  quote: string;
  quoteAuthor: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "queen-of-nordern",
    title: "The Queen of Nordern: Warriors of Mirral",
    author: "Zari",
    genre: "Epic Fantasy",
    campaignType: "Signature Launch Campaign",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000",
    reviewSlug: "queen-of-nordern",
    metrics: [
      { label: "Reader Impressions", value: "34,500+" },
      { label: "ARC Applications", value: "142" },
      { label: "Community Rating", value: "4.8 / 5.0" },
    ],
    challenge:
      "A high-stakes epic fantasy debut competing against established powerhouse authors. The primary goal was to create early world-building intrigue and drive qualified ARC reviewers who actively read and champion fantasy fiction.",
    strategy:
      "Executed a multi-phase pre-launch countdown featuring aesthetic character quotes, high-engagement lore carousels, and a cinematic Bookstagram reel series. Paired with a featured editorial review that highlighted the novel's fast pacing and unique magic system.",
    deliverables: [
      "Custom Aesthetic Reels",
      "Character Art Quotes",
      "Dedicated Editorial Feature",
      "ARC Reviewer Blitz",
      "Newsletter Highlight",
    ],
    quote:
      "Bookstagram Club didn't just promote my book — they understood the soul of the story. The readers who came through were genuinely excited about the world I built.",
    quoteAuthor: "Zari, Author of The Queen of Nordern",
  },
  {
    id: "faucet",
    title: "Faucet: For We All Have the Power to Glow",
    author: "Mara Aurora",
    genre: "Inspirational & Self-Growth",
    campaignType: "Author Brand & Positioning",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000",
    reviewSlug: "faucet",
    metrics: [
      { label: "Organic Reach", value: "28,000+" },
      { label: "Engagement Rate", value: "7.4%" },
      { label: "Verified 5-Star Reviews", value: "35+" },
    ],
    challenge:
      "Transitioning an inspiring manuscript into a recognizable personal brand with lasting evergreen momentum, rather than relying on a short launch-week spike.",
    strategy:
      "Designed an elegant visual identity emphasizing mindfulness and personal agency. Produced bite-sized, shareable reflection carousels paired with an in-depth author interview and dedicated reader discussion threads.",
    deliverables: [
      "Brand Style Alignment",
      "Shareable Quote Graphics",
      "Targeted Mindset Reader Outreach",
      "Featured Editorial Review",
      "Long-Term Promo Cadence",
    ],
    quote:
      "The aesthetic consistency and editorial care were beyond anything I expected. My readership has grown with real, supportive people who actively reach out.",
    quoteAuthor: "Mara Aurora, Author of Faucet",
  },
  {
    id: "space-traveller",
    title: "The Space Traveller’s Lover",
    author: "Sci-Fi Collective",
    genre: "Sci-Fi Romance",
    campaignType: "Spotlight Campaign",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
    reviewSlug: "space-travellers",
    metrics: [
      { label: "Campaign Impressions", value: "22,800+" },
      { label: "Story Link Clicks", value: "680+" },
      { label: "Amazon Conversions", value: "Tracked Surge" },
    ],
    challenge:
      "Bridging two distinct reading fandoms — hardcore space opera fans and passionate romance readers — without alienating either group.",
    strategy:
      "Developed a dual-angle narrative campaign emphasizing both the vast celestial worldbuilding and the high-emotion character stakes, driving direct traffic to Amazon.",
    deliverables: [
      "Dynamic Sci-Fi Reels",
      "Dual-Genre Hook Teasers",
      "Dedicated Feed Showcase",
      "Direct Purchase Attribution Link",
    ],
    quote:
      "They found the exact sweet spot in my story that hooked readers on Instagram. My release day sales saw an immediate, noticeable lift.",
    quoteAuthor: "Independent Sci-Fi Romance Author",
  },
  {
    id: "infectious-injustice",
    title: "Infectious Injustice",
    author: "Justin Cook",
    genre: "Memoir & True Story",
    campaignType: "Backlist Revival Campaign",
    image: "/images/books/infectious-injustice.webp",
    reviewSlug: "infectious-injustice",
    metrics: [
      { label: "New Reader Discovery", value: "19,200+" },
      { label: "Review Saves", value: "410+" },
      { label: "Backlist Rank Increase", value: "+45%" },
    ],
    challenge:
      "Re-igniting reader interest for a thrilling backlist title that deserved a second wave of attention months after its initial traditional launch window.",
    strategy:
      "Structured a thriller-enthusiast spotlight campaign, highlighting the forensic tension, moral complexity, and courtroom stakes to fresh mystery readers.",
    deliverables: [
      "Plot Hook Carousels",
      "Comparative Title Positioning",
      "Featured Editorial Review",
      "Newsletter Blast",
    ],
    quote:
      "A book doesn't stop deserving readers after release week. Bookstagram Club showed me how to keep my backlist working for me continuously.",
    quoteAuthor: "Justin M. Kiska, Mystery Author",
  },
];

export default function PortfolioPage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <StaggeredText text="Real Stories. Real Reach." className={styles.headerTitle} />
          <FadeIn delay={0.3}>
            <p className={styles.headerSubtitle}>
              Explore how we help authors build credible literary brands, connect with passionate readers, and achieve measurable launch momentum across our ecosystem.
            </p>
          </FadeIn>
        </div>
      </header>

      {/* Aggregate Impact Stats */}
      <section className={styles.statsBar}>
        <div className={`container ${styles.statsGrid}`}>
          <div className={styles.statItem}>
            <h3>120+</h3>
            <p>Author Campaigns Run</p>
          </div>
          <div className={styles.statItem}>
            <h3>2.4M+</h3>
            <p>Annual Reader Reach</p>
          </div>
          <div className={styles.statItem}>
            <h3>98%</h3>
            <p>Author Satisfaction</p>
          </div>
          <div className={styles.statItem}>
            <h3>10k+</h3>
            <p>Active ARC Network</p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={styles.portfolioSection}>
        <div className={`container ${styles.caseStudiesGrid}`}>
          {CASE_STUDIES.map((study, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <FadeIn key={study.id} direction="up" delay={0.1 * idx}>
                <article className={`${styles.caseStudyCard} ${isReversed ? styles.reversed : ""}`}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className={styles.coverImage}
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                    <div className={styles.imageOverlay}>
                      <span className={styles.overlayBadge}>{study.genre}</span>
                      <h3 className={styles.overlayTitle}>{study.title}</h3>
                      <p className={styles.overlayAuthor}>by {study.author}</p>
                    </div>
                  </div>

                  <div className={styles.contentWrapper}>
                    <div>
                      {/* Metric Badges */}
                      <div className={styles.metricsRow}>
                        {study.metrics.map((m, mIdx) => (
                          <div key={mIdx} className={styles.metricBadge}>
                            <span>⚡</span>
                            <strong>{m.value}</strong> {m.label}
                          </div>
                        ))}
                      </div>

                      {/* The Challenge */}
                      <div className={styles.narrativeBlock}>
                        <h4>The Challenge</h4>
                        <p>{study.challenge}</p>
                      </div>

                      {/* The Strategy & Deliverables */}
                      <div className={styles.narrativeBlock}>
                        <h4>The Strategy</h4>
                        <p>{study.strategy}</p>
                        <div className={styles.deliverablesPills}>
                          {study.deliverables.map((d, dIdx) => (
                            <span key={dIdx} className={styles.deliverablePill}>
                              ✓ {d}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Author Testimonial Quote */}
                      <div className={styles.quoteBox}>
                        <p className={styles.quoteText}>&ldquo;{study.quote}&rdquo;</p>
                        <p className={styles.quoteAuthor}>— {study.quoteAuthor}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className={styles.cardActions}>
                      {study.reviewSlug && (
                        <Button href={`/reviews/${study.reviewSlug}`} variant="outline">
                          Read Review &rarr;
                        </Button>
                      )}
                      <Button href="/contact?plan=launch" variant="primary">
                        Plan a Similar Campaign
                      </Button>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}

          {/* Bottom Conversion Section */}
          <FadeIn direction="up">
            <div className={styles.ctaSection}>
              <h2>Ready to Make Your Book Our Next Success Story?</h2>
              <p>
                Whether you are gearing up for release day or breathing fresh life into an established title, our team builds tailored promotional campaigns designed for your specific readers.
              </p>
              <Button href="/contact" variant="primary">
                Book a Strategy Consultation
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
