"use client";

import FadeIn from "./FadeIn";
import styles from "./DeliverablesList.module.css";
import GlassCard from "./GlassCard";

interface DeliverableCategory {
  category: string;
  items: string[];
}

interface DeliverablesListProps {
  deliverables: DeliverableCategory[];
}

export default function DeliverablesList({ deliverables }: DeliverablesListProps) {
  return (
    <div className={styles.grid}>
      {deliverables.map((del, index) => (
        <FadeIn key={del.category} direction="up" delay={index * 0.1}>
          <GlassCard className={styles.card}>
            <h3 className={styles.categoryTitle}>{del.category}</h3>
            <ul className={styles.list}>
              {del.items.map((item, itemIndex) => (
                <li key={itemIndex} className={styles.listItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </FadeIn>
      ))}
    </div>
  );
}
