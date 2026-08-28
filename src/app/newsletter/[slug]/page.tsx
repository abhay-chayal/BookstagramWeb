import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { NEWSLETTER_ISSUES } from "@/data/newsletter";
import { JOURNAL_ARTICLES, JOURNAL_CATEGORIES } from "@/data/journal";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return NEWSLETTER_ISSUES.map((issue) => ({
    slug: issue.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const issue = NEWSLETTER_ISSUES.find((i) => i.slug === slug);

  if (!issue) {
    return {
      title: "Newsletter Issue Not Found | Bookstagram Club",
    };
  }

  return {
    title: `Issue #${String(issue.issueNumber).padStart(3, "0")}: ${issue.title} | Bookstagram Club Dispatch`,
    description: issue.previewText,
  };
}

export default async function NewsletterIssuePage({ params }: Props) {
  const { slug } = await params;
  const issue = NEWSLETTER_ISSUES.find((i) => i.slug === slug);

  if (!issue) {
    notFound();
  }

  // Resolve curated journal articles
  const curatedArticles = JOURNAL_ARTICLES.filter((a) =>
    issue.curatedArticleSlugs.includes(a.slug)
  );

  return (
    <article className={styles.page}>
      {/* 1. HEADER */}
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <FadeIn direction="up">
            <div className={styles.breadcrumbRow}>
              <Link href="/newsletter" className={styles.breadcrumbLink}>
                &larr; Back to Newsletter Archive
              </Link>
              <span>•</span>
              <span className={styles.issueNumberBadge}>
                Issue #{String(issue.issueNumber).padStart(3, "0")}
              </span>
            </div>

            <h1 className={styles.title}>{issue.title}</h1>
            <p className={styles.subjectLine}>Subject: &ldquo;{issue.subjectLine}&rdquo;</p>

            <div className={styles.metaRow}>
              <span>
                Published on{" "}
                {new Date(issue.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>•</span>
              <span>The Bookstagram Club Weekly Dispatch</span>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* 2. MAIN NEWSLETTER EMAIL CONTAINER */}
      <div className={`container ${styles.dispatchWrapper}`}>
        <FadeIn direction="up">
          <div className={styles.dispatchCard}>
            {/* Header branding */}
            <div className={styles.dispatchBrandHeader}>
              <span className={styles.brandTitle}>BOOKSTAGRAM CLUB DISPATCH</span>
              <span className={styles.brandDate}>
                {new Date(issue.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            {/* Editorial Opening */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>A Note from the Editors</h2>
              <p className={styles.editorialText}>{issue.editorialIntro}</p>
            </div>

            {/* Featured Book Spotlight */}
            <div className={`${styles.sectionBlock} ${styles.featuredBookBox}`}>
              <span className={styles.blockEyebrow}>Weekly Book Feature</span>
              <h2 className={styles.featuredBookTitle}>{issue.featuredBook.title}</h2>
              <p className={styles.featuredBookAuthor}>By {issue.featuredBook.author} • {issue.featuredBook.genre}</p>

              <div className={styles.bookFlexRow}>
                <div className={styles.bookImageWrapper}>
                  <Image
                    src={issue.featuredBook.coverImage}
                    alt={issue.featuredBook.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 170px"
                    className={styles.bookCover}
                  />
                </div>

                <div className={styles.bookDetails}>
                  <p className={styles.bookDescription}>{issue.featuredBook.description}</p>
                  
                  <div className={styles.whyReadBox}>
                    <strong>Why We&rsquo;re Reading It:</strong>
                    <p>{issue.featuredBook.whyRead}</p>
                  </div>

                  <div className={styles.bookActionRow}>
                    <a
                      href={issue.featuredBook.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.amazonBtn}
                    >
                      <span>View on Amazon</span>
                      <span className={styles.btnArrow}>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Spotlight (if present) */}
            {issue.authorSpotlight && (
              <div className={`${styles.sectionBlock} ${styles.authorSpotlightBox}`}>
                <span className={styles.blockEyebrow}>Author Craft Spotlight</span>
                <h3>In Conversation with {issue.authorSpotlight.name}</h3>
                <blockquote className={styles.authorQuote}>
                  &ldquo;{issue.authorSpotlight.quote}&rdquo;
                </blockquote>
                <Link
                  href={`/journal/${issue.authorSpotlight.articleSlug}`}
                  className={styles.authorArticleLink}
                >
                  <span>Read Full Author Feature in the Journal</span>
                  <span className={styles.btnArrow}>&rarr;</span>
                </Link>
              </div>
            )}

            {/* Curated Journal Articles */}
            {curatedArticles.length > 0 && (
              <div className={styles.sectionBlock}>
                <span className={styles.blockEyebrow}>From the Journal</span>
                <h2 className={styles.sectionHeading}>Selected Stories of the Week</h2>
                
                <div className={styles.articlesList}>
                  {curatedArticles.map((art) => (
                    <div key={art.id} className={styles.articleRowItem}>
                      <div className={styles.artThumbWrapper}>
                        <Image
                          src={art.coverImage}
                          alt={art.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 120px"
                          className={styles.artThumb}
                        />
                      </div>
                      <div className={styles.artRowContent}>
                        <span className={styles.artCategory}>
                          {JOURNAL_CATEGORIES.find((c) => c.slug === art.category)?.name || art.category}
                        </span>
                        <h4>
                          <Link href={`/journal/${art.slug}`}>{art.title}</Link>
                        </h4>
                        <p>{art.excerpt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Weekend Reading Recommendations */}
            {issue.readingRecommendations && issue.readingRecommendations.length > 0 && (
              <div className={styles.sectionBlock}>
                <span className={styles.blockEyebrow}>Quick Picks</span>
                <h2 className={styles.sectionHeading}>Weekend Recommendations</h2>
                <div className={styles.recsGrid}>
                  {issue.readingRecommendations.map((rec, i) => (
                    <div key={i} className={styles.recCard}>
                      <h4>{rec.title}</h4>
                      <span className={styles.recAuthor}>by {rec.author}</span>
                      <p>{rec.tagline}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Closing Thought */}
            <div className={styles.closingBlock}>
              <p className={styles.closingThought}>&ldquo;{issue.closingThought}&rdquo;</p>
              <span className={styles.signoff}>— The Bookstagram Club Editorial Team</span>
            </div>

            {/* Newsletter Subscription Footer */}
            <div className={styles.subscribeFooter}>
              <span className={styles.subscribeFooterTag}>Stay Connected</span>
              <h3>Enjoyed this issue?</h3>
              <p>Get the next dispatch sent directly to your email inbox every Saturday.</p>
              <Link href="/newsletter" className={styles.subscribeCtaBtn}>
                <span>Join the Newsletter</span>
                <span className={styles.btnArrow}>&rarr;</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
