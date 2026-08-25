import Link from "next/link";
import styles from "./SolutionCard.module.css";
import { Solution } from "@/data/solutions";

export default function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <Link href={`/solutions/${solution.id}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.cardGlow}></div>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.categoryTag}>{solution.categoryTitle}</div>
            <h3 className={styles.title}>{solution.name}</h3>
          </div>
          
          <p className={styles.description}>{solution.purpose}</p>
          
          <div className={styles.footer}>
            <span className={styles.footerText}>Explore Solution</span>
            <svg 
              className={styles.arrowIcon} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
