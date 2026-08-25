import styles from "./page.module.css";
import StaggeredText from "@/components/StaggeredText";
import FadeIn from "@/components/FadeIn";
import SolutionCard from "@/components/SolutionCard";
import { getAllSolutions } from "@/data/solutions";

export const metadata = {
  title: "Solutions | Bookstagram Club",
  description: "Explore the Author Success Ecosystem. Professional branding, websites, and community management designed for your literary career.",
};

export default function SolutionsPage() {
  const solutions = getAllSolutions();

  // Asymmetrical Bento Layout mapping
  // We have 8 items. Let's arrange them dynamically for maximum premium feel.
  const getSpanClass = (index: number) => {
    switch (index) {
      case 0: return styles.span8; // Book Reviews (Large Featured)
      case 1: return styles.span4; // Instagram Promo (Square)
      case 2: return styles.span4; // Graphics (Square)
      case 3: return styles.span4; // Trailers (Square)
      case 4: return styles.span4; // Websites (Square)
      case 5: return styles.span6; // Website Promo (Half width)
      case 6: return styles.span6; // Newsletter (Half width)
      case 7: return styles.span12; // Author Features (Full width hero-ish)
      default: return styles.span4;
    }
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className="container">
          <StaggeredText 
            text="Author Success Ecosystem" 
            as="h1" 
            className={styles.title} 
          />
          <FadeIn delay={0.3} direction="up">
            <p className={styles.subtitle}>
              We don't sell isolated services. We build integrated ecosystems designed to strengthen your authority, visibility, and connection with readers.
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
