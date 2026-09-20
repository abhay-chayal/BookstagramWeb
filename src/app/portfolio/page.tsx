import Image from "next/image";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StaggeredText from "@/components/StaggeredText";
import styles from "./page.module.css";

export const metadata = {
  title: "Author Case Studies & Portfolio | Bookstagram Club",
  description: "Books we have worked on, the campaigns we built around them, and the editorial reviews we published.",
};

interface CaseStudy {
  id: string;
  title: string;
  author: string;
  genre: string;
  campaignType: string;
  stage: string;
  image: string;
  reviewSlug?: string;
  challenge: string;
  strategy: string;
  deliverables: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "queen-of-nordern",
    title: "The Queen of Nordern: Warriors of Mirral",
    author: "Zari",
    genre: "Epic Fantasy",
    campaignType: "Signature Launch Campaign",
    stage: "Pre-launch through release",
    image: "/images/books/queen-of-nordern.webp",
    reviewSlug: "queen-of-nordern",
    challenge:
      "An epic fantasy debut entering a category dominated by established names. The work is to build world-building intrigue early and put the book in front of readers who actively seek out new fantasy rather than a general audience.",
    strategy:
      "A multi-phase pre-launch build: aesthetic character quotes, lore carousels that reward readers for paying attention, and a Bookstagram reel series. Anchored by a full editorial review on this site covering the pacing and the magic system.",
    deliverables: [
      "Custom Aesthetic Reels",
      "Character Art Quotes",
      "Dedicated Editorial Feature",
      "Newsletter Highlight",
    ],
  },
  {
    id: "faucet",
    title: "Faucet: For We All Have the Power to Glow",
    author: "Mara Aurora",
    genre: "Inspirational & Self-Growth",
    campaignType: "Author Brand & Positioning",
    stage: "Published — long-term brand building",
    image: "/images/books/faucet.webp",
    reviewSlug: "faucet",
    challenge:
      "Turning an inspirational book into a recognisable author identity with momentum that outlasts release week, rather than a short spike that fades.",
    strategy:
      "A visual identity built around mindfulness and personal agency, carried across every asset. Short, shareable reflection carousels paired with an in-depth author interview and reader discussion threads, published on a steady cadence.",
    deliverables: [
      "Brand Style Alignment",
      "Shareable Quote Graphics",
      "Featured Editorial Review",
      "Long-Term Promo Cadence",
    ],
  },
  {
    id: "space-traveller",
    title: "The Space Traveller\u2019s Lover",
    author: "Omara Williams",
    genre: "Sci-Fi Romance",
    campaignType: "Spotlight Campaign",
    stage: "Published \u2014 focused visibility push",
    image: "/images/books/space-travellers-lover.webp",
    reviewSlug: "space-travellers",
    challenge:
      "Bridging two reading fandoms \u2014 space opera readers and romance readers \u2014 without writing copy that alienates either one.",
    strategy:
      "A dual-angle narrative campaign: half the assets lead with the worldbuilding, half lead with the emotional stakes, each pointed at the audience it was written for, with a direct path through to the retailer page.",
    deliverables: [
      "Dynamic Sci-Fi Reels",
      "Dual-Genre Hook Teasers",
      "Dedicated Feed Showcase",
      "Retailer Link Routing",
    ],
  },
  {
    id: "infectious-injustice",
    title: "Infectious Injustice",
    author: "Justin Cook",
    genre: "Memoir & True Story",
    campaignType: "Backlist Revival Campaign",
    stage: "Backlist \u2014 months after release",
    image: "/images/books/infectious-injustice.webp",
    reviewSlug: "infectious-injustice",
    challenge:
      "Bringing fresh attention to a backlist title well after its original launch window, when the initial publisher push is long over.",
    strategy:
      "A spotlight campaign aimed squarely at thriller and true-story readers, leading with the forensic tension and moral complexity, and positioning the book against titles those readers already love.",
    deliverables: [
      "Plot Hook Carousels",
      "Comparative Title Positioning",
      "Featured Editorial Review",
      "Newsletter Feature",
    ],
  },
];

export default function PortfolioPage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <StaggeredText text="The Books We’ve Worked On." className={styles.headerTitle} />
          <FadeIn delay={0.3}>
            <p className={styles.headerSubtitle}>
              Every campaign below was built around one specific book and the readers it was written for. Each one has a full editorial review published on this site — read them and judge the work for yourself.
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
                      {/* Campaign at a glance */}
                      <div className={styles.glanceRow}>
                        <div className={styles.glanceItem}>
                          <span className={styles.glanceLabel}>Campaign</span>
                          <strong>{study.campaignType}</strong>
                        </div>
                        <div className={styles.glanceItem}>
                          <span className={styles.glanceLabel}>Stage</span>
                          <strong>{study.stage}</strong>
                        </div>
                        {study.reviewSlug && (
                          <div className={styles.glanceItem}>
                            <span className={styles.glanceLabel}>Editorial review</span>
                            <strong>Published on site</strong>
                          </div>
                        )}
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
                    </div>

                    {/* Actions */}
                    <div className={styles.cardActions}>
                      {study.reviewSlug && (
                        <Button href={`/reviews/${study.reviewSlug}`} variant="primary">
                          Read the Full Review &rarr;
                        </Button>
                      )}
                      <Button href="/contact?plan=launch" variant="outline">
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
                Start Your Campaign
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
