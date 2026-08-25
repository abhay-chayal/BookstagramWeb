"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "@/app/about/page.module.css";

export default function BehindEveryBook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // We have 4 items. We'll divide the scroll progress into 4 segments.
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4], [0.3, 1, 0.3]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0.3, 1, 0.3]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0.3, 1, 0.3]);
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.8, 1], [0.3, 1, 1]);

  const color4 = useTransform(scrollYProgress, [0.6, 0.8, 1], ["rgba(255,255,255,1)", "var(--color-accent-rose)", "var(--color-accent-rose)"]);

  return (
    <section className={styles.behindEvery} ref={containerRef} style={{ height: "400vh", position: "relative", padding: 0 }}>
      <div className={styles.behindStickyContainer} style={{ position: "sticky", top: 0, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
        
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 5%" }}>
          <motion.h2 style={{ opacity: opacity1, position: "absolute", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: 1.1, textAlign: "center", margin: 0 }}>
            Behind every book is an author.
          </motion.h2>
          <motion.h2 style={{ opacity: opacity2, position: "absolute", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: 1.1, textAlign: "center", margin: 0 }}>
            Behind every author is a story.
          </motion.h2>
          <motion.h2 style={{ opacity: opacity3, position: "absolute", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: 1.1, textAlign: "center", margin: 0 }}>
            Behind every story is an idea worth sharing.
          </motion.h2>
          <motion.h2 style={{ opacity: opacity4, color: color4, position: "absolute", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: 1.1, textAlign: "center", margin: 0 }}>
            We help bring that story to more readers.
          </motion.h2>
        </div>

      </div>
    </section>
  );
}
