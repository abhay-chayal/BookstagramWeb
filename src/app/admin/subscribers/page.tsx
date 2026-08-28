"use client";

import { useState } from "react";
import styles from "./page.module.css";

const SAMPLE_SUBSCRIBERS = [
  { id: "sub-1", email: "clara.reading@literarymail.com", firstName: "Clara", status: "active", source: "journal_lead", date: "2026-08-27" },
  { id: "sub-2", email: "elena.author@gmail.com", firstName: "Elena", status: "active", source: "newsletter_landing", date: "2026-08-26" },
  { id: "sub-3", email: "marcus.bookish@outlook.com", firstName: "Marcus", status: "active", source: "homepage_cta", date: "2026-08-25" },
  { id: "sub-4", email: "sarah.reviews@booktok.me", firstName: "Sarah", status: "active", source: "journal_article", date: "2026-08-24" },
  { id: "sub-5", email: "david.thorn@presspub.org", firstName: "David", status: "active", source: "newsletter_landing", date: "2026-08-23" },
  { id: "sub-6", email: "maya.reader@yahoo.com", firstName: "Maya", status: "active", source: "community_arc", date: "2026-08-22" },
  { id: "sub-7", email: "jonathan.indie@writerhub.io", firstName: "Jonathan", status: "active", source: "journal_lead", date: "2026-08-21" },
  { id: "sub-8", email: "hannah.books@gmail.com", firstName: "Hannah", status: "active", source: "newsletter_landing", date: "2026-08-20" },
];

export default function AdminSubscribersPage() {
  const [subscribers] = useState(SAMPLE_SUBSCRIBERS);
  const [search, setSearch] = useState("");

  const filtered = subscribers.filter(
    (s) =>
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.firstName?.toLowerCase().includes(search.toLowerCase())
  );

  const handleExportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Email,First Name,Status,Source,Subscribed Date"]
        .concat(subscribers.map((s) => `${s.email},${s.firstName || ""},${s.status},${s.source},${s.date}`))
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "bookstagram_newsletter_subscribers.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Subscriber Management</h1>
          <p className={styles.subtitle}>
            12,480 active readers receiving the Bookstagram Club Dispatch.
          </p>
        </div>

        <button type="button" onClick={handleExportCSV} className={styles.exportBtn}>
          📥 Export Subscriber CSV
        </button>
      </header>

      <div className={styles.controlsRow}>
        <input
          type="text"
          placeholder="Search subscribers by email or name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.tableCard}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Email Address</th>
                <th>First Name</th>
                <th>Status</th>
                <th>Acquisition Source</th>
                <th>Subscribed Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((sub) => (
                <tr key={sub.id}>
                  <td>
                    <strong className={styles.emailText}>{sub.email}</strong>
                  </td>
                  <td>{sub.firstName || "—"}</td>
                  <td>
                    <span className={`${styles.statusPill} ${styles.statusActive}`}>
                      {sub.status}
                    </span>
                  </td>
                  <td>
                    <span className={styles.sourceTag}>{sub.source}</span>
                  </td>
                  <td>{sub.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
