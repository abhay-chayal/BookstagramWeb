import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { INSTAGRAM_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logo}>
            <Image src="/images/logo.png" alt="Bookstagram Club Logo" width={80} height={80} className={styles.logoImage} />
          </Link>
          <p className={styles.tagline}>GREAT BOOKS DESERVE TO BE DISCOVERED</p>
          <p className={styles.description}>
            Book promotion and author marketing built around your book and the readers it was written for — never a template.
          </p>
        </div>
        
        <div className={styles.footerLinks}>
          <div className={styles.linkGroup}>
            <h4>Solutions</h4>
            <Link href="/solutions/author-features">Author Features</Link>
            <Link href="/solutions/author-website">Author Websites</Link>
            <Link href="/solutions/instagram-promotion">Instagram Promotion</Link>
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

          <div className={styles.linkGroup}>
            <h4>Get in Touch</h4>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram &#8599;
            </a>
            <Link href="/contact">Send an enquiry</Link>
          </div>
        </div>
      </div>
      <div className={`container ${styles.footerBottom}`}>
        <p>&copy; {new Date().getFullYear()} Bookstagram Club. All rights reserved.</p>
      </div>
    </footer>
  );
}
