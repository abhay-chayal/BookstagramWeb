import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { getSolutionById, getAllSolutions } from "@/data/solutions";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import StaggeredText from "@/components/StaggeredText";
import FadeIn from "@/components/FadeIn";
import DeliverablesList from "@/components/DeliverablesList";
import RelatedServices from "@/components/RelatedServices";
import Breadcrumbs from "@/components/Breadcrumbs";
import WorkflowTimeline from "@/components/WorkflowTimeline";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    serviceId: string;
  }>;
}

// Each service page previously inherited the root title, so all eleven looked
// like duplicates of the homepage to search engines. Titles and descriptions
// now come from each solution's own copy.
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { serviceId } = await params;
  const solution = getSolutionById(serviceId);

  if (!solution) {
    return { title: "Service Not Found" };
  }

  const description =
    solution.purpose.length > 155 ? `${solution.purpose.slice(0, 152).trimEnd()}...` : solution.purpose;

  return {
    title: solution.name,
    description,
    alternates: { canonical: `/solutions/${solution.id}` },
    openGraph: {
      title: `${solution.name} | ${SITE_NAME}`,
      description,
      url: absoluteUrl(`/solutions/${solution.id}`),
      type: "article",
    },
  };
}

// Pre-render all eleven at build time rather than on first request.
export function generateStaticParams() {
  return getAllSolutions().map((s) => ({ serviceId: s.id }));
}

export default async function ServicePage({ params }: PageProps) {
  const { serviceId } = await params;
  const solution = getSolutionById(serviceId);

  if (!solution) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.name,
    serviceType: solution.categoryTitle,
    description: solution.purpose,
    url: absoluteUrl(`/solutions/${solution.id}`),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    audience: {
      "@type": "Audience",
      audienceType: "Authors and publishers",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${solution.name} deliverables`,
      itemListElement: solution.deliverables.flatMap((group) =>
        group.items.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item, category: group.category },
        }))
      ),
    },
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <header className={styles.header}>
        <div className="container">
          <Breadcrumbs
            items={[
              { name: "Solutions", href: "/solutions" },
              { name: solution.name },
            ]}
          />
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

      <RelatedServices currentId={solution.id} />
    </main>
  );
}
