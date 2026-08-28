"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import FadeIn from "@/components/FadeIn";
import StaggeredText from "@/components/StaggeredText";
import styles from "./page.module.css";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [interest, setInterest] = useState("launch");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (planParam) {
      if (planParam === "launch") setInterest("launch");
      else if (planParam === "brand") setInterest("brand");
      else if (planParam === "promotion") setInterest("promotion");
      else if (planParam === "editorial") setInterest("editorial");
      else if (planParam === "review") setInterest("review");
      else if (planParam === "website") setInterest("website");
      else if (planParam === "tech") setInterest("tech");
    }
  }, [planParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (
      serviceId &&
      templateId &&
      publicKey &&
      serviceId !== "your_service_id_here"
    ) {
      // Map all common EmailJS template variable aliases
      const templateParams = {
        name: name,
        user_name: name,
        from_name: name,
        email: email,
        user_email: email,
        from_email: email,
        reply_to: email,
        book_title: bookTitle,
        interest: interest,
        message: message,
      };

      try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setIsSuccess(true);
      } catch (err: any) {
        console.error("EmailJS submission error:", err);
        const errText = err?.text || err?.message || "Check your EmailJS service/template status.";
        setErrorMessage(
          `EmailJS Error (${errText}). Please ensure your EmailJS Service is active and connected to your email provider.`
        );
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Fallback local simulation
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1000);
    }
  };

  return (
    <div className={styles.formContainer}>
      {isSuccess ? (
        <div className={styles.successState}>
          <div className={styles.successIcon}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3>Inquiry Received</h3>
          <p>
            Thank you for sharing your book with us. A member of our literary strategy team will review your inquiry and reply with an honest proposal within 24 hours.
          </p>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              setIsSuccess(false);
              setName("");
              setEmail("");
              setBookTitle("");
              setMessage("");
            }}
            style={{ marginTop: "16px" }}
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h3>Tell Us About Your Book</h3>
          <p className={styles.formSubtitle}>No generic pitches. We read every inquiry personally.</p>

          {errorMessage && (
            <div
              style={{
                background: "#fef2f2",
                border: "1px solid #f87171",
                color: "#991b1b",
                padding: "12px 16px",
                borderRadius: "8px",
                fontSize: "0.9rem",
                lineHeight: "1.5",
              }}
            >
              {errorMessage}
            </div>
          )}

          <div className={styles.formGroup}>
            <label htmlFor="user_name">Your Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Maya Angelou"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="user_email">Email Address</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. author@example.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="book_title">Book Title &amp; Genre (Optional)</label>
            <input
              type="text"
              id="book_title"
              name="book_title"
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
              placeholder="e.g. Echoes of Eldoria (Fantasy Romance)"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="interest">What are you interested in?</label>
            <select
              id="interest"
              name="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            >
              <option value="launch">Signature Launch Campaign ($649)</option>
              <option value="promotion">Spotlight Promotion Package ($329)</option>
              <option value="brand">Author Brand &amp; Website Ecosystem ($1,199)</option>
              <option value="review">Book Review &amp; Editorial Feature</option>
              <option value="editorial">Editorial &amp; Manuscript Support</option>
              <option value="website">Standalone Custom Author Website</option>
              <option value="tech">AI &amp; Tech Solutions (Bookstore / Publisher)</option>
              <option value="other">Custom Inquiry / Other</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Where is your book right now?</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us where you are in the publishing journey (manuscript, pre-launch, published) and what readers you hope to reach..."
            />
          </div>

          <button
            type="submit"
            className={`btn btn-primary ${styles.submitBtn}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Request Campaign Proposal"}
          </button>

          <p className={styles.guaranteeNote}>
            🔒 We respect your privacy. No spam, no aggressive sales follow-ups.
          </p>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <StaggeredText text="Start Your Journey" className={styles.headerTitle} />
          <FadeIn delay={0.3}>
            <p className={styles.headerSubtitle}>
              Tell us about your book — where it is right now, and who you hope will read it. We&rsquo;ll review your title and reply with an honest assessment and tailored strategy.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className={styles.contactSection}>
        <div className={`container ${styles.contactGrid}`}>

          {/* Left Column: Reassurance, Timeline & Direct Info */}
          <FadeIn direction="right" className={styles.contactInfo}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "220px",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                marginBottom: "var(--space-md)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000"
                alt="Author desk with notebook and warm beverage"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <h2>What Happens After You Reach Out?</h2>
            <p>
              Whether your book is still in draft form, releasing next month, or published years ago, we take the time to evaluate it carefully.
            </p>

            {/* 3-Step Reassurance Timeline */}
            <div className={styles.timelineBox}>
              <h3 className={styles.timelineTitle}>Our 3-Step Discovery Process</h3>
              <div className={styles.timelineSteps}>
                <div className={styles.timelineStep}>
                  <div className={styles.timelineStepNum}>1</div>
                  <div className={styles.timelineStepContent}>
                    <h4>Direct Review within 24 Hours</h4>
                    <p>A senior literary strategist reviews your book's genre, hook, and current reader positioning.</p>
                  </div>
                </div>

                <div className={styles.timelineStep}>
                  <div className={styles.timelineStepNum}>2</div>
                  <div className={styles.timelineStepContent}>
                    <h4>Tailored Proposal (No Templates)</h4>
                    <p>We send a clear recommendation of what campaign fits best — and what wouldn't be worth your money.</p>
                  </div>
                </div>

                <div className={styles.timelineStep}>
                  <div className={styles.timelineStepNum}>3</div>
                  <div className={styles.timelineStepContent}>
                    <h4>Collaborative Execution</h4>
                    <p>If you choose to proceed, you approve all visual assets and timelines before anything goes live.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <h3>Direct Email</h3>
              <p>bookstagram.cclub@gmail.com</p>
            </div>

            <div className={styles.infoBlock}>
              <h3>Strategy Hours</h3>
              <p>Monday – Friday, 9:00 AM – 6:00 PM EST</p>
            </div>
          </FadeIn>

          {/* Right Column: Contact Form with Suspense */}
          <FadeIn direction="left" delay={0.2}>
            <Suspense
              fallback={
                <div className={styles.formContainer}>
                  <p>Loading inquiry form...</p>
                </div>
              }
            >
              <ContactFormContent />
            </Suspense>
          </FadeIn>

        </div>
      </section>
    </div>
  );
}
