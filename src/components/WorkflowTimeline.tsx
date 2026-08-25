"use client";

import FadeIn from "./FadeIn";
import styles from "./WorkflowTimeline.module.css";
import { WorkflowStep } from "@/data/solutions";

interface WorkflowTimelineProps {
  steps: WorkflowStep[];
}

export default function WorkflowTimeline({ steps }: WorkflowTimelineProps) {
  return (
    <div className={styles.timeline}>
      {steps.map((step, index) => (
        <FadeIn key={step.id} direction="up" delay={index * 0.1}>
          <div className={styles.timelineItem}>
            <div className={styles.stepNumberContainer}>
              <div className={styles.stepNumber}>{step.stepNumber}</div>
              {index !== steps.length - 1 && <div className={styles.stepLine}></div>}
            </div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              {step.description && <p className={styles.stepDescription}>{step.description}</p>}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
