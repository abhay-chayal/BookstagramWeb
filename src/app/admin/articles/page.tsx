"use client";

import { useState } from "react";
import Link from "next/link";
import { JOURNAL_ARTICLES, JOURNAL_CATEGORIES } from "@/data/journal";
import styles from "./page.module.css";

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState(JOURNAL_ARTICLES);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter((a) => {
    const matchesCat = categoryFilter === "all" || a.category === categoryFilter;
    const matchesSearch =
      search.trim() === "" ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.authorName.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleFeatured = (id: string) => {
    setArticles((prev) =>
      prev.map((a) => (a.id === id ? { ...a, isFeatured: !a.isFeatured } : a))
    );
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>All Journal Articles</h1>
          <p className={styles.subtitle}>
            Manage, edit, schedule, and publish editorial articles across the Bookstagram Club Journal.
          </p>
        </div>

        <Link href="/admin/articles/new" className={styles.primaryBtn}>
          + Write New Article
        </Link>
      </header>

      {/* FILTER & SEARCH */}
      <div className={styles.controlsRow}>
        <div className={styles.filterGroup}>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className={styles.selectInput}
          >
            <option value="all">All Categories ({articles.length})</option>
            {JOURNAL_CATEGORIES.map((c) => (
              <option key={c.id} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.searchGroup}>
          <input
            type="text"
            placeholder="Search by title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      {/* ARTICLES TABLE */}
      <div className={styles.tableCard}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title &amp; Excerpt</th>
                <th>Category</th>
                <th>Author</th>
                <th>Featured</th>
                <th>Status</th>
                <th>Published</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredArticles.map((article) => (
                <tr key={article.id}>
                  <td>
                    <div className={styles.articleTitleCell}>
                      <strong>{article.title}</strong>
                      <span className={styles.articleExcerptCell}>{article.subtitle}</span>
                    </div>
                  </td>
                  <td>
                    <span className={styles.categoryBadge}>
                      {JOURNAL_CATEGORIES.find((c) => c.slug === article.category)?.name || article.category}
                    </span>
                  </td>
                  <td>{article.authorName}</td>
                  <td>
                    <button
                      type="button"
                      className={`${styles.featuredToggle} ${article.isFeatured ? styles.featuredActive : ""}`}
                      onClick={() => toggleFeatured(article.id)}
                      title="Toggle Featured on Journal Homepage"
                    >
                      {article.isFeatured ? "★ Lead" : "☆ Normal"}
                    </button>
                  </td>
                  <td>
                    <span className={`${styles.statusPill} ${styles.statusPublished}`}>
                      {article.status}
                    </span>
                  </td>
                  <td>{article.publishedAt}</td>
                  <td>
                    <div className={styles.actionBtns}>
                      <Link href={`/journal/${article.slug}`} target="_blank" className={styles.viewBtn}>
                        Live ↗
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
