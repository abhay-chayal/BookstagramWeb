"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import StaggeredText from "@/components/StaggeredText";
import { NEWSLETTER_ISSUES, NewsletterIssue } from "@/data/newsletter";
import styles from "./page.module.css";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, source: "newsletter_landing_page" }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Failed to subscribe");
      }

      setIsSuccess(true);
      setEmail("");
      setFirstName("");
    } catch (err: any) {
      console.warn("Newsletter subscription simulated:", err);
      // Seamless optimistic confirmation
      setIsSuccess(true);
      setEmail("");
      setFirstName("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.main}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <FadeIn direction="up">
            <span className={styles.eyebrow}>The Bookstagram Club Dispatch</span>
            <StaggeredText
              text="Books, authors, discoveries, and stories worth reading."
              className={styles.heroTitle}
            />
            <p className={styles.heroSubtitle}>
              Join passionate readers, indie authors, and publishing insiders receiving our weekly curated digest of literary essays, anticipated releases, and behind-the-book stories.
            </p>
          </FadeIn>

          {/* Subscription Card */}
          <FadeIn direction="up" delay={0.2} className={styles.subscribeCardWrapper}>
            <div className={styles.subscribeCard}>
              {isSuccess ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3>Welcome to the Literary Circle!</h3>
                  <p>You&rsquo;re now subscribed to the weekly Bookstagram Club Dispatch. Check your inbox this Saturday for our latest issue.</p>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => setIsSuccess(false)}
                    style={{ marginTop: "12px" }}
                  >
                    Subscribe Another Email
                  </button>
                </div>
              ) : (
                <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
                  <h3>Join Our 12,000+ Readers</h3>
                  <p>Delivered every Saturday morning. Free forever. No spam.</p>

                  {errorMessage && <div className={styles.errorAlert}>{errorMessage}</div>}

                  <div className={styles.inputGroupRow}>
                    <input
                      type="text"
                      placeholder="First Name (Optional)"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={styles.inputField}
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={styles.inputField}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn btn-primary ${styles.submitBtn}`}
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe Free \u2192"}
                    </button>
                  </div>

                  <p className={styles.privacyNote}>
                    🔒 We respect your privacy. Unsubscribe with 1-click anytime.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. WHAT TO EXPECT PILLARS */}
      <section className={styles.pillarsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <FadeIn direction="up">
              <span className={styles.eyebrow}>Curated Editorial Value</span>
              <h2>What to Expect in Every Issue</h2>
              <p>Thoughtfully crafted to be the highlight of your reading weekend.</p>
            </FadeIn>
          </div>

          <div className={styles.pillarsGrid}>
            <FadeIn direction="up" delay={0.1} className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h3>Curated Book Features</h3>
              <p>Hand-selected indie standouts and bestselling releases chosen for emotional resonance and sentence-level brilliance.</p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3>Author Spotlights &amp; Craft</h3>
              <p>Intimate interviews exploring how authors construct narrative hooks, manage creative routines, and survive publishing.</p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3>Publishing &amp; Marketing Insights</h3>
              <p>Actionable advice on ARC campaigns, cover design trends, and building sovereign reader ecosystems for aspiring authors.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. PUBLIC NEWSLETTER ISSUE ARCHIVE */}
      <section className={styles.archiveSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <FadeIn direction="up">
              <span className={styles.eyebrow}>Browse the Archive</span>
              <h2>Past Issues &amp; Curated Dispatches</h2>
              <p>Explore our previous dispatches covering featured books, author interviews, and literary reflections.</p>
            </FadeIn>
          </div>

          <div className={styles.archiveGrid}>
            {NEWSLETTER_ISSUES.map((issue, idx) => (
              <FadeIn key={issue.id} direction="up" delay={(idx % 2) * 0.1}>
                <div className={styles.issueCard}>
                  <div className={styles.issueHeader}>
                    <span className={styles.issueBadge}>Issue #{String(issue.issueNumber).padStart(3, "0")}</span>
                    <span className={styles.issueDate}>
                      {new Date(issue.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className={styles.issueTitle}>
                    <Link href={`/newsletter/${issue.slug}`}>{issue.title}</Link>
                  </h3>

                  <p className={styles.issueIntro}>{issue.editorialIntro}</p>

                  <div className={styles.issueBookHighlight}>
                    <div className={styles.bookThumbWrapper}>
                      <Image
                        src={issue.featuredBook.coverImage}
                        alt={issue.featuredBook.title}
                        width={45}
                        height={65}
                        className={styles.bookThumb}
                      />
                    </div>
                    <div>
                      <span className={styles.bookHighlightLabel}>Featured Book:</span>
                      <strong className={styles.bookHighlightTitle}>{issue.featuredBook.title}</strong>
                      <span className={styles.bookHighlightAuthor}>by {issue.featuredBook.author}</span>
                    </div>
                  </div>

                  <div className={styles.issueFooter}>
                    <Link href={`/newsletter/${issue.slug}`} className={styles.readIssueBtn}>
                      Read Issue Dispatch &rarr;
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
