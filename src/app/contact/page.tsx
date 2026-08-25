"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StaggeredText from "@/components/StaggeredText";
import styles from "./page.module.css";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <StaggeredText text="Start Your Journey" className={styles.headerTitle} />
          <FadeIn delay={0.3}>
            <p className={styles.headerSubtitle}>
              Ready to elevate your author brand? Let's begin the conversation.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className={styles.contactSection}>
        <div className={`container ${styles.contactGrid}`}>
          
          <FadeIn direction="right" className={styles.contactInfo}>
            <div style={{ position: 'relative', width: '100%', height: '240px', borderRadius: '12px', overflow: 'hidden', marginBottom: 'var(--space-lg)', boxShadow: 'var(--shadow-md)' }}>
              <Image 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000" 
                alt="Workspace aesthetic" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h2>Get in Touch</h2>
            <p style={{ color: 'var(--color-text-body)', lineHeight: '1.6', marginBottom: 'var(--space-lg)' }}>
              Whether you need a full rebrand, a launch strategy, or a custom website, we are here to help you achieve your goals. Fill out the form, and our team will respond within 48 hours.
            </p>
            
            <div className={styles.infoBlock}>
              <h3>Email</h3>
              <p>hello@bookstagram.club</p>
            </div>
            
            <div className={styles.infoBlock}>
              <h3>Office Hours</h3>
              <p>Monday - Friday, 9am - 5pm EST</p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className={styles.formContainer}>
            {isSuccess ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h3>Message Received</h3>
                <p>Thank you for reaching out. A member of our strategy team will review your inquiry and contact you shortly.</p>
                <button className={`btn btn-outline`} onClick={() => setIsSuccess(false)} style={{ marginTop: '20px' }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Jane Austen" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required placeholder="jane@example.com" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="interest">What are you interested in?</label>
                  <select id="interest" name="interest">
                    <option value="branding">Author Branding</option>
                    <option value="marketing">Book Marketing</option>
                    <option value="website">Custom Website</option>
                    <option value="social">Social Media Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required placeholder="Tell us about your book and your goals..."></textarea>
                </div>
                
                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </FadeIn>

        </div>
      </section>
    </div>
  );
}
