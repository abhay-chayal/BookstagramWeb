"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "./GlassCard.module.css";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`glass-panel ${styles.card} ${className}`}
    >
      {children}
    </motion.div>
  );
}
