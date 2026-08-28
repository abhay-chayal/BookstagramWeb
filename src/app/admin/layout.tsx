import Link from "next/link";
import styles from "./layout.module.css";

export const metadata = {
  title: "Admin Editorial CMS | Bookstagram Club",
  description: "Manage Journal articles, Newsletter issues, and editorial content.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBrand}>
          <Link href="/admin" className={styles.brandLink}>
            <span className={styles.brandTitle}>BOOKSTAGRAM CLUB</span>
            <span className={styles.brandSubtitle}>Editorial CMS</span>
          </Link>
        </div>

        <nav className={styles.navMenu}>
          <div className={styles.navGroup}>
            <span className={styles.navHeader}>Editorial</span>
            <Link href="/admin" className={styles.navLink}>
              📊 Dashboard
            </Link>
            <Link href="/admin/articles" className={styles.navLink}>
              📝 All Articles
            </Link>
            <Link href="/admin/articles/new" className={styles.navLink}>
              ✍️ New Article
            </Link>
          </div>

          <div className={styles.navGroup}>
            <span className={styles.navHeader}>Communications</span>
            <Link href="/admin/newsletters" className={styles.navLink}>
              📬 Newsletter Issues
            </Link>
            <Link href="/admin/subscribers" className={styles.navLink}>
              👥 Subscribers
            </Link>
          </div>

          <div className={styles.navGroup}>
            <span className={styles.navHeader}>Live Website</span>
            <Link href="/journal" target="_blank" className={styles.navLink}>
              📖 View Journal ↗
            </Link>
            <Link href="/newsletter" target="_blank" className={styles.navLink}>
              💌 View Newsletter ↗
            </Link>
            <Link href="/" className={styles.navLink}>
              🏠 Website Home
            </Link>
          </div>
        </nav>

        <div className={styles.sidebarFooter}>
          <span className={styles.adminUser}>Logged in as Editorial Admin</span>
        </div>
      </aside>

      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
