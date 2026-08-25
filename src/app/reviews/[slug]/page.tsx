import { notFound } from "next/navigation";
import Image from "next/image";
import { reviewsData } from "@/data/reviews";
import styles from "./page.module.css";
import StaggeredText from "@/components/StaggeredText";
import FadeIn from "@/components/FadeIn";
import ReactMarkdown from 'react-markdown';

export function generateStaticParams() {
  return reviewsData.map((review) => ({
    slug: review.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = reviewsData.find((r) => r.id === slug);
  if (!review) return { title: "Not Found" };
  return {
    title: `${review.bookTitle} | Bookstagram Reviews`,
    description: `Read our professional review of ${review.bookTitle} by ${review.author}.`,
  };
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = reviewsData.find((r) => r.id === slug);

  if (!review) {
    notFound();
  }

  return (
    <main className={styles.main}>
      {/* Cinematic Hero Header */}
      <section className={styles.hero}>
        <Image
          src={review.coverImage}
          alt=""
          fill
          className={styles.heroBackground}
          sizes="100vw"
          priority
        />
        <div className={styles.heroOverlay}></div>
        
        <div className={styles.heroContent}>
          <FadeIn direction="up" delay={0.1}>
            <div className={styles.heroCoverWrapper}>
              <Image
                src={review.coverImage}
                alt={`${review.bookTitle} Cover`}
                fill
                className={styles.heroCover}
                sizes="180px"
                priority
              />
            </div>
          </FadeIn>
          
          <StaggeredText text={review.bookTitle} as="h1" className={styles.title} />
          
          <FadeIn direction="up" delay={0.4}>
            <div className={styles.badges}>
              <div className={styles.badge}>
                By {review.author}
              </div>
              <div className={styles.badge}>
                <span className={styles.badgeStar}>★</span> {review.rating}
              </div>
              <div className={styles.badge}>
                Reviewer: {review.reviewer}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Editorial Content Container */}
      <article className={styles.editorialContainer}>
        {review.sections.map((section, idx) => (
          <FadeIn key={idx} direction="up" delay={0.1}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              
              {section.type === "text" ? (
                section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className={styles.paragraph}>{paragraph}</p>
                ))
              ) : (
                <ul className={styles.list}>
                  {section.content.map((item, iIdx) => (
                    <li key={iIdx} className={styles.listItem}>
                      <ReactMarkdown>{item}</ReactMarkdown>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </FadeIn>
        ))}
      </article>

      {/* Floating Sticky Action Bar */}
      <FadeIn direction="up" delay={0.8}>
        <div className={styles.floatingBar}>
          <div className={styles.floatingBarInfo}>
            <span className={styles.floatingBarTitle}>{review.bookTitle}</span>
            <span className={styles.floatingBarAuthor}>{review.author}</span>
          </div>
          <a 
            href={review.amazonLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.floatingBuyButton}
          >
            Buy on Amazon
          </a>
        </div>
      </FadeIn>
    </main>
  );
}
