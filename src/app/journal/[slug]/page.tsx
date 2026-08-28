import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import FadeIn from "@/components/FadeIn";
import { JOURNAL_ARTICLES, JOURNAL_CATEGORIES, JournalArticle } from "@/data/journal";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return JOURNAL_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Bookstagram Club Journal",
    };
  }

  return {
    title: `${article.title} | Bookstagram Club Journal`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.coverImage }],
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.authorName],
    },
  };
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const categoryObj = JOURNAL_CATEGORIES.find((c) => c.slug === article.category);

  // Related articles
  const relatedArticles = JOURNAL_ARTICLES.filter(
    (a) => a.slug !== article.slug && (a.category === article.category || article.tags.some(t => a.tags.includes(t)))
  ).slice(0, 3);

  // Schema.org structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: [article.coverImage],
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: [
      {
        "@type": "Person",
        name: article.authorName,
        jobTitle: article.authorRole,
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Bookstagram Club",
      logo: {
        "@type": "ImageObject",
        url: "https://bookstagram.club/images/logo.png",
      },
    },
  };

  return (
    <article className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. ARTICLE HEADER */}
      <header className={styles.articleHeader}>
        <div className={`container ${styles.headerContainer}`}>
          <FadeIn direction="up">
            <div className={styles.breadcrumbRow}>
              <Link href="/journal" className={styles.breadcrumbLink}>
                &larr; Back to Journal
              </Link>
              <span className={styles.breadcrumbDivider}>/</span>
              <Link
                href={`/journal?category=${article.category}`}
                className={styles.categoryBreadcrumb}
              >
                {categoryObj?.name || article.category}
              </Link>
            </div>

            <h1 className={styles.title}>{article.title}</h1>
            <p className={styles.subtitle}>{article.subtitle}</p>

            <div className={styles.metaBar}>
              <div className={styles.authorInfo}>
                <div className={styles.authorAvatar}>
                  {article.authorName.charAt(0)}
                </div>
                <div>
                  <span className={styles.authorName}>{article.authorName}</span>
                  <span className={styles.authorRole}>{article.authorRole}</span>
                </div>
              </div>

              <div className={styles.metaDetails}>
                <span>
                  {new Date(article.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span>•</span>
                <span>{article.readingTimeMinutes} min read</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* 2. HERO IMAGE */}
      <div className={`container ${styles.heroImageContainer}`}>
        <FadeIn direction="up">
          <div className={styles.heroImageWrapper}>
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1000px"
              className={styles.heroImage}
            />
          </div>
        </FadeIn>
      </div>

      {/* 3. ARTICLE CONTENT BODY */}
      <div className={`container ${styles.contentContainer}`}>
        <FadeIn direction="up">
          <div className={styles.articleBody}>
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className={styles.tagsContainer}>
              <span className={styles.tagsLabel}>Topics:</span>
              <div className={styles.tagsList}>
                {article.tags.map((tag) => (
                  <span key={tag} className={styles.tagPill}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Signature Box */}
          <div className={styles.authorBox}>
            <div className={styles.authorBoxAvatar}>
              {article.authorName.charAt(0)}
            </div>
            <div className={styles.authorBoxContent}>
              <h3>Written by {article.authorName}</h3>
              <p>
                {article.authorRole} at Bookstagram Club. Dedicated to covering authentic narrative craft, literary culture, and the evolving world of books.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* 4. RELATED ARTICLES */}
      {relatedArticles.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="container">
            <h2 className={styles.relatedHeading}>Related Editorial Stories</h2>
            <div className={styles.relatedGrid}>
              {relatedArticles.map((rel) => (
                <div key={rel.id} className={styles.relatedCard}>
                  <Link href={`/journal/${rel.slug}`} className={styles.relatedImageLink}>
                    <div className={styles.relatedImageWrapper}>
                      <Image
                        src={rel.coverImage}
                        alt={rel.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className={styles.relatedImage}
                      />
                    </div>
                  </Link>
                  <div className={styles.relatedBody}>
                    <span className={styles.relatedCategory}>
                      {JOURNAL_CATEGORIES.find((c) => c.slug === rel.category)?.name || rel.category}
                    </span>
                    <h3>
                      <Link href={`/journal/${rel.slug}`}>{rel.title}</Link>
                    </h3>
                    <p>{rel.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. NEWSLETTER SUBSCRIPTION CTA */}
      <section className={styles.newsletterSection}>
        <div className="container">
          <div className={styles.newsletterCard}>
            <span className={styles.newsletterTag}>Join the Conversation</span>
            <h2>Enjoyed This Story?</h2>
            <p>
              Subscribe to the weekly Bookstagram Club Dispatch to receive curated literary essays, author spotlights, and book discoveries in your inbox.
            </p>
            <div className={styles.newsletterCtaBtn}>
              <Link href="/newsletter" className="btn btn-primary" style={{ background: "var(--color-accent-rose)", color: "#fff", borderColor: "var(--color-accent-rose)" }}>
                Subscribe to the Newsletter &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
