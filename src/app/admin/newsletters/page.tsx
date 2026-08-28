"use client";

import { useState } from "react";
import Link from "next/link";
import { NEWSLETTER_ISSUES } from "@/data/newsletter";
import styles from "./page.module.css";

export default function AdminNewslettersPage() {
  const [issues] = useState(NEWSLETTER_ISSUES);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Newsletter Issues Manager</h1>
          <p className={styles.subtitle}>
            Compose, curate, and review published weekly Saturday dispatches sent to subscribers.
          </p>
        </div>
      </header>

      <div className={styles.tableCard}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Issue #</th>
                <th>Title &amp; Subject Line</th>
                <th>Featured Book</th>
                <th>Status</th>
                <th>Published Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue) => (
                <tr key={issue.id}>
                  <td>
                    <span className={styles.issueNumber}>
                      #{String(issue.issueNumber).padStart(3, "0")}
                    </span>
                  </td>
                  <td>
                    <div className={styles.titleCell}>
                      <strong>{issue.title}</strong>
                      <span className={styles.subjectCell}>Subject: &ldquo;{issue.subjectLine}&rdquo;</span>
                    </div>
                  </td>
                  <td>
                    <span className={styles.bookBadge}>
                      {issue.featuredBook.title} ({issue.featuredBook.author})
                    </span>
                  </td>
                  <td>
                    <span className={`${styles.statusPill} ${styles.statusSent}`}>
                      {issue.status}
                    </span>
                  </td>
                  <td>{issue.publishedAt}</td>
                  <td>
                    <Link
                      href={`/newsletter/${issue.slug}`}
                      target="_blank"
                      className={styles.viewLink}
                    >
                      Web Dispatch ↗
                    </Link>
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
