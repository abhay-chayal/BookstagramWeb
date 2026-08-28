import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logo}>
            <Image src="/images/logo.png" alt="Bookstagram Club Logo" width={80} height={80} className={styles.logoImage} />
          </Link>
          <p className={styles.tagline}>ROOTS • STORIES • CONNECTIONS</p>
          <p className={styles.description}>
            The world-class agency built specifically for authors. We build your brand, market your books, and grow your career.
          </p>
        </div>
        
        <div className={styles.footerLinks}>
          <div className={styles.linkGroup}>
            <h4>Solutions</h4>
            <Link href="/solutions/author-branding">Author Branding</Link>
            <Link href="/solutions/custom-website">Custom Websites</Link>
            <Link href="/solutions/social-media">Social Media</Link>
            <Link href="/solutions">All Solutions</Link>
          </div>
          
          <div className={styles.linkGroup}>
            <h4>Editorial &amp; Media</h4>
            <Link href="/journal">The Journal</Link>
            <Link href="/newsletter">The Newsletter</Link>
            <Link href="/reviews">Book Reviews</Link>
            <Link href="/community">Reviewer Circle</Link>
          </div>

          <div className={styles.linkGroup}>
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/portfolio">Case Studies</Link>
            <Link href="/pricing">Pricing &amp; Plans</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className={`container ${styles.footerBottom}`}>
        <p>&copy; {new Date().getFullYear()} Bookstagram Club. All rights reserved.</p>
      </div>
    </footer>
  );
}
