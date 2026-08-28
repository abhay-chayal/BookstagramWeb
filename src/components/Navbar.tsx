"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "/solutions", label: "Solutions" },
  { href: "/journal", label: "Journal" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className={styles.navbarWrapper}>
      <nav className={`${styles.navbar} ${isOpen ? styles.navbarOpen : ""}`}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo} onClick={close}>
            <Image src="/images/logo.png" alt="Bookstagram Club Logo" width={50} height={50} priority className={styles.logoImage} />
          </Link>

          <div className={styles.navLinks}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>

          <div className={styles.navActions}>
            <Link href="/contact" className={styles.ctaButton} onClick={close}>
              Start Your Journey
            </Link>
            <button
              type="button"
              className={styles.menuButton}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsOpen((v) => !v)}
            >
              <span className={`${styles.bar} ${isOpen ? styles.barTop : ""}`} />
              <span className={`${styles.bar} ${isOpen ? styles.barHidden : ""}`} />
              <span className={`${styles.bar} ${isOpen ? styles.barBottom : ""}`} />
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`${styles.mobilePanel} ${isOpen ? styles.mobilePanelOpen : ""}`}
          hidden={!isOpen}
        >
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={close} className={styles.mobileLink}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
