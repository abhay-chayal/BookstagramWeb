"use client";

import { useRef } from "react";
import { MotionValue, motion, useTransform } from "framer-motion";
import Button from "../Button";
import DiscoveryStage from "./DiscoveryStage";
import { useSectionProgress } from "./useSectionProgress";
import styles from "./DiscoveryHero.module.css";

/** A block of copy that fades and drifts through its window of the scroll. */
function Beat({
  progress,
  range,
  children,
  className = "",
}: {
  progress: MotionValue<number>;
  /** [fadeInStart, fullIn, fullOut, fadeOutEnd] */
  range: [number, number, number, number];
  children: React.ReactNode;
  className?: string;
}) {
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const y = useTransform(progress, [range[0], range[3]], ["18px", "-18px"]);
  // Drop out of the layout entirely once faded, so nothing steals clicks.
  const pointerEvents = useTransform(opacity, (v) => (v > 0.6 ? "auto" : "none"));

  return (
    <motion.div
      className={`${styles.beat} ${className}`}
      style={{ opacity, y, pointerEvents: pointerEvents as never }}
    >
      {children}
    </motion.div>
  );
}

export default function DiscoveryHero() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollYProgress = useSectionProgress(containerRef);

  // Thin progress rule that fills as you move through the story.
  const railScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className={styles.section}>
      <div className={styles.sticky}>
        <DiscoveryStage progress={scrollYProgress} />

        <div className={styles.overlay}>
          {/* 1 — The promise */}
          <Beat progress={scrollYProgress} range={[0, 0.02, 0.13, 0.19]}>
            <p className={styles.eyebrow}>Bookstagram Club</p>
            <h1 className={styles.display}>
              Great books deserve
              <br />
              to be discovered.
            </h1>
            <p className={styles.scrollCue}>Scroll</p>
          </Beat>

          {/* 2 — The problem */}
          <Beat progress={scrollYProgress} range={[0.22, 0.28, 0.37, 0.43]}>
            <h2 className={styles.statement}>
              Every week, thousands of books
              <br />
              launch into silence.
            </h2>
          </Beat>

          {/* 3 — The work */}
          <Beat progress={scrollYProgress} range={[0.46, 0.52, 0.61, 0.67]}>
            <h2 className={styles.statement}>
              We build the campaign that makes
              <br />
              yours impossible to miss.
            </h2>
          </Beat>

          {/* 4 — The method */}
          <Beat progress={scrollYProgress} range={[0.7, 0.75, 0.83, 0.89]}>
            <ul className={styles.methodList}>
              <li>
                <span className={styles.methodIndex}>01</span>Understand the book
              </li>
              <li>
                <span className={styles.methodIndex}>02</span>Find its readers
              </li>
              <li>
                <span className={styles.methodIndex}>03</span>Create the content
              </li>
              <li>
                <span className={styles.methodIndex}>04</span>Launch and sustain
              </li>
            </ul>
          </Beat>

          {/* 5 — The invitation */}
          <Beat progress={scrollYProgress} range={[0.92, 0.96, 1, 1]}>
            <h2 className={styles.display}>Let&rsquo;s get your book discovered.</h2>
            <div className={styles.actions}>
              <Button href="/contact" variant="primary">
                Start Your Campaign
              </Button>
              <Button href="/solutions" variant="outline">
                See How It Works
              </Button>
            </div>
          </Beat>
        </div>

        <div className={styles.rail}>
          <motion.div className={styles.railFill} style={{ scaleX: railScale }} />
        </div>
      </div>
    </section>
  );
}
