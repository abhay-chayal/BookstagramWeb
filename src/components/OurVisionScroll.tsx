"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "@/app/about/page.module.css";

export default function OurVisionScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to horizontal translation
  // We want to move the track leftwards as we scroll down
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={containerRef} className={styles.vision} style={{ height: "300vh", position: "relative", padding: 0 }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
        
        <div className={styles.horizontalScrollWrapper} style={{ overflowX: "hidden", padding: "4rem 5%" }}>
          <motion.div className={styles.horizontalScrollTrack} style={{ x }}>
            <div className={styles.visionItem}>AUTHOR</div>
            <div className={styles.visionArrow}>→</div>
            <div className={styles.visionItem}>STORY</div>
            <div className={styles.visionArrow}>→</div>
            <div className={styles.visionItem}>BOOK</div>
            <div className={styles.visionArrow}>→</div>
            <div className={styles.visionItem}>DISCOVERY</div>
            <div className={styles.visionArrow}>→</div>
            <div className={styles.visionItem}>READER</div>
            <div className={styles.visionArrow}>→</div>
            <div className={styles.visionItemHighlight}>COMMUNITY</div>
          </motion.div>
        </div>

        <div className={styles.visionFooter}>
          <p>A world where great books are easier to discover.</p>
        </div>

      </div>
    </section>
  );
}
