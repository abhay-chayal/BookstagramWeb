import Link from "next/link";
import { JOURNAL_ARTICLES, JOURNAL_CATEGORIES } from "@/data/journal";
import { NEWSLETTER_ISSUES } from "@/data/newsletter";
import styles from "./page.module.css";

export default function AdminDashboardPage() {
  const publishedArticles = JOURNAL_ARTICLES.filter((a) => a.status === "published");
  const publishedNewsletters = NEWSLETTER_ISSUES.filter((n) => n.status === "published");

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Editorial CMS Dashboard</h1>
          <p className={styles.subtitle}>
            Welcome back. Manage your public Journal stories, newsletter dispatches, and subscriber growth.
          </p>
        </div>

        <div className={styles.headerActions}>
          <Link href="/admin/articles/new" className={styles.primaryBtn}>
            + New Journal Article
          </Link>
          <Link href="/admin/newsletters" className={styles.secondaryBtn}>
            + Compose Newsletter
          </Link>
        </div>
      </header>

      {/* STATS METRIC CARDS */}
      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Journal Articles</span>
          <div className={styles.statValue}>{publishedArticles.length}</div>
          <span className={styles.statMeta}>Across {JOURNAL_CATEGORIES.length} categories</span>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statLabel}>Newsletter Issues</span>
          <div className={styles.statValue}>{publishedNewsletters.length}</div>
          <span className={styles.statMeta}>Weekly Saturday dispatches</span>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statLabel}>Newsletter Subscribers</span>
          <div className={styles.statValue}>12,480</div>
          <span className={styles.statMeta}>+340 new this month</span>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statLabel}>Total Reader Impressions</span>
          <div className={styles.statValue}>48.2K</div>
          <span className={styles.statMeta}>Average read time: 4.8 min</span>
        </div>
      </section>

      {/* RECENT ARTICLES SECTION */}
      <section className={styles.tableSection}>
        <div className={styles.sectionTitleRow}>
          <h2>Recent Journal Publications</h2>
          <Link href="/admin/articles" className={styles.viewAllLink}>
            View All ({JOURNAL_ARTICLES.length}) &rarr;
          </Link>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title &amp; Excerpt</th>
                <th>Category</th>
                <th>Author</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {JOURNAL_ARTICLES.slice(0, 8).map((article) => (
                <tr key={article.id}>
                  <td>
                    <div className={styles.articleTitleCell}>
                      <strong>{article.title}</strong>
                      <span className={styles.articleExcerptCell}>{article.excerpt}</span>
                    </div>
                  </td>
                  <td>
                    <span className={styles.categoryBadge}>
                      {JOURNAL_CATEGORIES.find((c) => c.slug === article.category)?.name || article.category}
                    </span>
                  </td>
                  <td>{article.authorName}</td>
                  <td>
                    <span className={`${styles.statusPill} ${styles.statusPublished}`}>
                      {article.status}
                    </span>
                  </td>
                  <td>{article.publishedAt}</td>
                  <td>
                    <div className={styles.actionBtns}>
                      <Link href={`/journal/${article.slug}`} target="_blank" className={styles.tableActionLink}>
                        View ↗
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
