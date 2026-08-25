import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            <Image src="/images/logo.png" alt="Bookstagram Club Logo" width={50} height={50} priority className={styles.logoImage} />
          </Link>
          <div className={styles.navLinks}>
            <Link href="/solutions">Solutions</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/about">About Us</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className={styles.navActions}>
            <Link href="/contact" className={styles.ctaButton}>
              Start Your Journey
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
