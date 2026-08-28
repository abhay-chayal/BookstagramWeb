"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "@/app/about/page.module.css";

export default function OurVisionScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth, synchronized horizontal translation tied to entering and leaving viewport
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["15%", "-45%"]);

  const STEPS = [
    { label: "Author", sub: "The Creator" },
    { label: "Story", sub: "The World" },
    { label: "Book", sub: "The Artifact" },
    { label: "Positioning", sub: "The Identity" },
    { label: "Discovery", sub: "The Spark" },
    { label: "Reader", sub: "The Connection" },
    { label: "Community", sub: "The Legacy", highlight: true },
  ];

  return (
    <section ref={containerRef} className={styles.visionSection}>
      <div className={styles.visionHeader}>
        <span className={styles.visionEyebrow}>The Lifecycle of Literature</span>
        <h2 className={styles.visionTitle}>From First Draft to Lifelong Readers</h2>
        <p className={styles.visionSubtitle}>
          How a creative vision transforms into an engaged, enduring community.
        </p>
      </div>

      <div className={styles.horizontalTrackWrapper}>
        <motion.div className={styles.horizontalTrack} style={{ x }}>
          {STEPS.map((step, idx) => (
            <div key={idx} className={styles.trackItemWrapper}>
              <div className={`${styles.trackItem} ${step.highlight ? styles.trackItemHighlight : ""}`}>
                <span className={styles.trackStepNum}>0{idx + 1}</span>
                <span className={styles.trackLabel}>{step.label}</span>
                <span className={styles.trackSub}>{step.sub}</span>
              </div>
              {idx < STEPS.length - 1 && (
                <div className={styles.trackConnector}>
                  <div className={styles.trackLine} />
                  <span className={styles.trackArrow}>→</span>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <div className={styles.visionFooter}>
        <p>A literary ecosystem where no exceptional book remains unnoticed.</p>
      </div>
    </section>
  );
}
