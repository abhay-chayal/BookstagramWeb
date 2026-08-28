"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import StaggeredText from "@/components/StaggeredText";
import { JOURNAL_ARTICLES, JOURNAL_CATEGORIES, JournalArticle } from "@/data/journal";
import styles from "./page.module.css";

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Featured article (first featured item or default)
  const featuredArticle = useMemo(() => {
    return JOURNAL_ARTICLES.find((a) => a.isFeatured) || JOURNAL_ARTICLES[0];
  }, []);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return JOURNAL_ARTICLES.filter((article) => {
      // Exclude featured article from standard grid if viewing "all"
      const matchesCategory =
        activeCategory === "all" || article.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className={styles.main}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <FadeIn direction="up">
            <span className={styles.eyebrow}>Bookstagram Club Journal</span>
            <StaggeredText
              text="Stories, ideas, and discoveries from the world of books."
              className={styles.heroTitle}
            />
            <p className={styles.heroSubtitle}>
              An intentional editorial space exploring narrative craft, publishing truths, author journeys, and the enduring magic of the written word.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. LEAD FEATURED EDITORIAL STORY */}
      {featuredArticle && (
        <section className={styles.featuredSection}>
          <div className="container">
            <FadeIn direction="up">
              <div className={styles.featuredCard}>
                <div className={styles.featuredImageWrapper}>
                  <Image
                    src={featuredArticle.coverImage}
                    alt={featuredArticle.title}
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 55vw"
                    className={styles.featuredImage}
                  />
                  <div className={styles.featuredBadge}>Featured Story</div>
                </div>

                <div className={styles.featuredContent}>
                  <div className={styles.metaRow}>
                    <span className={styles.categoryBadge}>
                      {JOURNAL_CATEGORIES.find((c) => c.slug === featuredArticle.category)?.name ||
                        featuredArticle.category}
                    </span>
                    <span className={styles.metaDivider}>•</span>
                    <span className={styles.readingTime}>{featuredArticle.readingTimeMinutes} min read</span>
                    <span className={styles.metaDivider}>•</span>
                    <span className={styles.pubDate}>
                      {new Date(featuredArticle.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h2 className={styles.featuredTitle}>
                    <Link href={`/journal/${featuredArticle.slug}`}>
                      {featuredArticle.title}
                    </Link>
                  </h2>

                  <p className={styles.featuredSubtitle}>{featuredArticle.subtitle}</p>
                  <p className={styles.featuredExcerpt}>{featuredArticle.excerpt}</p>

                  <div className={styles.featuredFooter}>
                    <div className={styles.authorBadge}>
                      <span className={styles.authorName}>By {featuredArticle.authorName}</span>
                      <span className={styles.authorRole}>{featuredArticle.authorRole}</span>
                    </div>

                    <Link href={`/journal/${featuredArticle.slug}`} className={styles.readMoreBtn}>
                      Read Full Story &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* 3. CATEGORY FILTER & SEARCH BAR */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterBar}>
            <div className={styles.categoryPills}>
              <button
                type="button"
                className={`${styles.categoryPill} ${activeCategory === "all" ? styles.activePill : ""}`}
                onClick={() => setActiveCategory("all")}
              >
                All Stories ({JOURNAL_ARTICLES.length})
              </button>
              {JOURNAL_CATEGORIES.map((cat) => {
                const count = JOURNAL_ARTICLES.filter((a) => a.category === cat.slug).length;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    className={`${styles.categoryPill} ${activeCategory === cat.slug ? styles.activePill : ""}`}
                    onClick={() => setActiveCategory(cat.slug)}
                  >
                    {cat.name} {count > 0 && `(${count})`}
                  </button>
                );
              })}
            </div>

            <div className={styles.searchWrapper}>
              <input
                type="text"
                placeholder="Search articles, authors, themes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. LATEST EDITORIAL STORIES GRID */}
      <section className={styles.articlesSection}>
        <div className="container">
          {filteredArticles.length === 0 ? (
            <div className={styles.emptyState}>
              <h3>No articles found</h3>
              <p>Try adjusting your search query or selecting another category.</p>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className={styles.articlesGrid}>
              {filteredArticles.map((article, idx) => (
                <FadeIn key={article.id} direction="up" delay={(idx % 3) * 0.1}>
                  <article className={styles.articleCard}>
                    <Link href={`/journal/${article.slug}`} className={styles.articleImageLink}>
                      <div className={styles.articleImageWrapper}>
                        <Image
                          src={article.coverImage}
                          alt={article.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className={styles.articleImage}
                        />
                        <span className={styles.cardCategory}>
                          {JOURNAL_CATEGORIES.find((c) => c.slug === article.category)?.name ||
                            article.category}
                        </span>
                      </div>
                    </Link>

                    <div className={styles.articleBody}>
                      <div className={styles.cardMeta}>
                        <span>{article.readingTimeMinutes} min read</span>
                        <span>•</span>
                        <span>
                          {new Date(article.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      <h3 className={styles.articleTitle}>
                        <Link href={`/journal/${article.slug}`}>{article.title}</Link>
                      </h3>

                      <p className={styles.articleExcerpt}>{article.excerpt}</p>

                      <div className={styles.cardFooter}>
                        <span className={styles.cardAuthor}>By {article.authorName}</span>
                        <Link href={`/journal/${article.slug}`} className={styles.cardReadLink}>
                          Read &rarr;
                        </Link>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. NEWSLETTER PROMOTION CTA BANNER */}
      <section className={styles.newsletterBannerSection}>
        <div className="container">
          <FadeIn direction="up">
            <div className={styles.newsletterBox}>
              <span className={styles.newsletterEyebrow}>Weekly Literary Dispatch</span>
              <h2>Get the Best of the Journal Delivered to Your Inbox</h2>
              <p>
                Join passionate readers and authors receiving our curated dispatches on new releases, deep-dive literary essays, and behind-the-book stories.
              </p>
              <div className={styles.newsletterActions}>
                <Link href="/newsletter" className="btn btn-primary" style={{ background: "var(--color-accent-rose)", color: "#fff", borderColor: "var(--color-accent-rose)" }}>
                  Subscribe to the Newsletter &rarr;
                </Link>
                <Link href="/newsletter" className="btn btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.6)" }}>
                  Explore Past Issues (#001–#008)
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
