import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { reviewsData } from "@/data/reviews";
import styles from "./page.module.css";
import StaggeredText from "@/components/StaggeredText";
import FadeIn from "@/components/FadeIn";
import ReactMarkdown from "react-markdown";

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
    title: `${review.bookTitle} by ${review.author} | Bookstagram Review`,
    description: `Read our comprehensive editorial review of ${review.bookTitle} by ${review.author}. Rating: ${review.rating}.`,
    openGraph: {
      title: `${review.bookTitle} | Bookstagram Club`,
      description: `Professional editorial review of ${review.bookTitle} by ${review.author}.`,
      images: [{ url: review.coverImage }],
    },
  };
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = reviewsData.find((r) => r.id === slug);

  if (!review) {
    notFound();
  }

  // Parse rating number for Schema.org (e.g. "4.8/5" -> 4.8)
  const numericRating = parseFloat(review.rating.split("/")[0]) || 4.5;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Book",
      "name": review.bookTitle,
      "author": {
        "@type": "Person",
        "name": review.author,
      },
      "image": review.coverImage,
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": numericRating,
      "bestRating": "5",
    },
    "author": {
      "@type": "Organization",
      "name": "Bookstagram Club",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bookstagram Club",
    },
  };

  return (
    <main className={styles.main}>
      {/* Schema.org Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
              <div className={styles.badge}>By {review.author}</div>
              <div className={styles.badge}>
                <span className={styles.badgeStar}>★</span> {review.rating}
              </div>
              <div className={styles.badge}>Reviewer: {review.reviewer}</div>
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
                  <p key={pIdx} className={styles.paragraph}>
                    {paragraph}
                  </p>
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

        {/* Author B2B Feature Banner */}
        <FadeIn direction="up" delay={0.2}>
          <div className={styles.authorBanner}>
            <span className={styles.authorBannerBadge}>For Authors</span>
            <h3>Want Your Book Featured Next?</h3>
            <p>
              We craft in-depth editorial features, targeted Instagram campaigns, and ARC tours to connect your book with readers eager to discover it.
            </p>
            <Link href="/contact?plan=promotion" className={styles.authorBannerBtn}>
              Feature Your Book on Bookstagram Club
            </Link>
          </div>
        </FadeIn>
      </article>

      {/* Floating Sticky Action Bar */}
      <FadeIn direction="up" delay={0.8}>
        <div className={styles.floatingBar}>
          <div className={styles.floatingBarInfo}>
            <span className={styles.floatingBarTitle}>{review.bookTitle}</span>
            <span className={styles.floatingBarAuthor}>by {review.author}</span>
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
