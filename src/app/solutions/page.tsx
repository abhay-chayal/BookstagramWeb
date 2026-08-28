import styles from "./page.module.css";
import StaggeredText from "@/components/StaggeredText";
import FadeIn from "@/components/FadeIn";
import SolutionCard from "@/components/SolutionCard";
import { getAllSolutions } from "@/data/solutions";

export const metadata = {
  title: "Solutions | Bookstagram Club",
  description: "Book promotion and author marketing across the full life of a book — positioning, content, Instagram promotion, author websites, and AI & tech solutions for book businesses.",
};

export default function SolutionsPage() {
  const solutions = getAllSolutions();

  // Asymmetrical bento layout across a 12-column grid.
  // Each row sums to 12: 8+4, 4+4+4, 6+6, 4+4+4, 12.
  const getSpanClass = (index: number) => {
    switch (index) {
      case 0: return styles.span8; // Book Reviews (large featured)
      case 1: return styles.span4; // Instagram Promotion
      case 2: return styles.span4; // Promotional Graphics
      case 3: return styles.span4; // Cinematic Trailers
      case 4: return styles.span4; // Author Website
      case 5: return styles.span6; // Website Promotion
      case 6: return styles.span6; // Newsletter Promotion
      case 7: return styles.span4; // Editorial & Manuscript Support
      case 8: return styles.span4; // Full-Lifecycle Launch Strategy
      case 9: return styles.span4; // AI & Tech Solutions
      case 10: return styles.span12; // Author Features (full width)
      default: return styles.span4;
    }
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className="container">
          <StaggeredText
            text="What We Do"
            as="h1"
            className={styles.title}
          />
          <FadeIn delay={0.3} direction="up">
            <p className={styles.subtitle}>
              We support a book across its whole life — from the manuscript itself, through positioning and launch, and long after release. Every piece of content we make is built for your specific book and the readers it was written for. We also build AI and technology solutions for bookstores, publishers, and book businesses.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className={styles.solutionsSection}>
        <div className="container">
          <div className={styles.grid}>
            {solutions.map((solution, index) => (
              <FadeIn key={solution.id} delay={0.1 * (index % 3)} direction="up" className={getSpanClass(index)}>
                <SolutionCard solution={solution} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.philosophySection}>
        <div className="container">
          <FadeIn direction="up">
            <div className={styles.philosophyBox}>
              <h2 className={styles.philosophyTitle}>Not Sure Where to Begin?</h2>
              <p className={styles.philosophyText}>
                Every successful author journey starts with a conversation. Let us help you identify exactly what your brand needs to grow.
              </p>
              <a href="/contact" className={styles.ctaButton}>Book a Discovery Consultation</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
