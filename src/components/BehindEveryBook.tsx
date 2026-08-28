"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "@/app/about/page.module.css";

export default function BehindEveryBook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth staggered opacity and scale across 4 poetic statements
  const opacity1 = useTransform(scrollYProgress, [0, 0.18, 0.32], [0, 1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.18, 0.32], [0.95, 1, 1.05]);

  const opacity2 = useTransform(scrollYProgress, [0.32, 0.48, 0.62], [0, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.32, 0.48, 0.62], [0.95, 1, 1.05]);

  const opacity3 = useTransform(scrollYProgress, [0.62, 0.76, 0.88], [0, 1, 0]);
  const scale3 = useTransform(scrollYProgress, [0.62, 0.76, 0.88], [0.95, 1, 1.05]);

  const opacity4 = useTransform(scrollYProgress, [0.85, 0.95, 1], [0, 1, 1]);
  const scale4 = useTransform(scrollYProgress, [0.85, 0.95, 1], [0.95, 1, 1]);

  return (
    <section ref={containerRef} className={styles.behindEverySection}>
      <div className={styles.behindStickyWrap}>
        {/* Ambient atmospheric backdrop */}
        <div className={styles.behindGlow} />
        
        <div className={styles.behindContent}>
          <span className={styles.behindEyebrow}>Our Guiding Belief</span>

          <div className={styles.behindTextContainer}>
            <motion.h2
              style={{ opacity: opacity1, scale: scale1 }}
              className={styles.behindStatement}
            >
              Behind every book is an <span className="text-gradient">author</span>.
            </motion.h2>

            <motion.h2
              style={{ opacity: opacity2, scale: scale2 }}
              className={styles.behindStatement}
            >
              Behind every author is a <span className="text-gradient">vision</span>.
            </motion.h2>

            <motion.h2
              style={{ opacity: opacity3, scale: scale3 }}
              className={styles.behindStatement}
            >
              Behind every vision is a story <span className="text-gradient">worth discovering</span>.
            </motion.h2>

            <motion.h2
              style={{ opacity: opacity4, scale: scale4 }}
              className={`${styles.behindStatement} ${styles.behindStatementFinal}`}
            >
              We build the bridge that brings that story to the <span className={styles.highlightGold}>readers meant to find it</span>.
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
}
