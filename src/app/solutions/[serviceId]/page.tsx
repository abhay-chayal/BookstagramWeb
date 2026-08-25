import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { getSolutionById } from "@/data/solutions";
import StaggeredText from "@/components/StaggeredText";
import FadeIn from "@/components/FadeIn";
import DeliverablesList from "@/components/DeliverablesList";
import WorkflowTimeline from "@/components/WorkflowTimeline";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    serviceId: string;
  }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { serviceId } = await params;
  const solution = getSolutionById(serviceId);

  if (!solution) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className="container">
          <FadeIn direction="up">
            <span className={styles.categoryTag}>{solution.categoryTitle}</span>
          </FadeIn>
          <StaggeredText text={solution.name} as="h1" className={styles.title} />
          <FadeIn delay={0.2} direction="up">
            <p className={styles.purpose}>{solution.purpose}</p>
          </FadeIn>
        </div>
      </header>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.contentLayout}>
            <div className={styles.mainContent}>
              <FadeIn direction="up">
                <h2 className={styles.sectionTitle}>The Problem Solved</h2>
                <div className={styles.cardBlock}>
                  <p className={styles.text}>{solution.problemSolved}</p>
                </div>
              </FadeIn>

              <div className={styles.spacer}></div>

              <FadeIn direction="up">
                <h2 className={styles.sectionTitle}>Deliverables</h2>
                <p className={styles.text}>Exactly what you will receive throughout this engagement.</p>
              </FadeIn>
              <DeliverablesList deliverables={solution.deliverables} />

              <div className={styles.spacer}></div>

              <FadeIn direction="up">
                <h2 className={styles.sectionTitle}>The Workflow</h2>
                <p className={styles.text}>Our proven process from discovery to final delivery.</p>
              </FadeIn>
              <WorkflowTimeline steps={solution.workflow} />

              <div className={styles.spacer}></div>

              <FadeIn direction="up">
                <h2 className={styles.sectionTitle}>Ecosystem Integration</h2>
                <div className={styles.cardBlock}>
                  <p className={styles.text}>{solution.integration}</p>
                </div>
              </FadeIn>
            </div>
            
            <aside className={styles.sidebar}>
              <FadeIn delay={0.4} direction="up">
                <div className={styles.actionCard}>
                  <h3 className={styles.actionTitle}>Ready to begin?</h3>
                  <p className={styles.actionText}>
                    Schedule a discovery consultation to see if this solution is right for your goals.
                  </p>
                  <Link href="/contact" className={`btn btn-primary ${styles.actionBtn}`}>
                    Book Consultation
                  </Link>
                  <Link href="/solutions" className={styles.backLink}>
                    ← Back to Solutions
                  </Link>
                </div>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
