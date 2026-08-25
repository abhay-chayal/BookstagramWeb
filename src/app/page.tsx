import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StaggeredText from "@/components/StaggeredText";
import GlassCard from "@/components/GlassCard";
import dynamic from "next/dynamic";
import styles from "./page.module.css";

// 8. LOADING STRATEGY: Lazy load the cinematic engine to protect initial page load
const CinematicExperience = dynamic(() => import("@/components/cinematic/CinematicExperience"));

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Cinematic Scroll Engine with Hero Overlay */}
      <CinematicExperience debug={true}>
        {/* We place the existing Hero typography inside the cinematic overlay */}
        <div className={`container ${styles.heroContainer}`} style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", pointerEvents: "auto" }}>
          <div className={styles.heroContent} style={{ marginTop: "10vh" }}>
            <FadeIn direction="up" delay={0.1}>
              <p className={styles.heroSubtitle}>Premium Author Branding & Book Marketing</p>
            </FadeIn>
            
            <StaggeredText text="We Build Author Brands & Long-Term Careers." className={styles.heroTitle} />
            
            <FadeIn direction="up" delay={0.6}>
              <p className={styles.heroDescription}>
                Bookstagram Club is not a bookstore. We are a world-class agency built specifically for authors. Let us handle your branding, marketing, and digital presence so you can focus on writing.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.8}>
              <div className={styles.heroActions}>
                <Button href="/contact" variant="primary">Start Your Journey</Button>
                <Button href="/solutions" variant="outline">Explore Solutions</Button>
              </div>
            </FadeIn>
          </div>
          
          {/* Subtle Scroll Indicator */}
          <FadeIn direction="up" delay={1.5}>
            <div style={{ position: "absolute", bottom: "5vh", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", opacity: 0.6 }}>
              <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px", color: "var(--color-primary-navy)" }}>Scroll to Explore</span>
              <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(28, 37, 48, 0.4), transparent)" }} />
            </div>
          </FadeIn>
        </div>
      </CinematicExperience>

      {/* The Three Pillars */}
      <section className={styles.pillars}>
        <div className={`container ${styles.sectionContainer}`}>
          <FadeIn direction="up">
            <div className={styles.sectionHeader}>
              <h2 className="text-gradient">Our Core Ecosystem</h2>
              <p>We provide everything you need under one roof, built on three strong pillars.</p>
            </div>
          </FadeIn>
          
          <div className={styles.pillarGrid}>
            <GlassCard delay={0.1} className={styles.pillarFeature}>
              <div className={styles.pillarImageContainer}>
                <Image src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800" alt="Author Services" fill className={styles.pillarImage} />
              </div>
              <h3>Author Services</h3>
              <p>Professional branding, digital presence, social media management, and tailored marketing campaigns to reach your ideal readers.</p>
              <Link href="/solutions" className={styles.pillarLink}>View Solutions &rarr;</Link>
            </GlassCard>

            <GlassCard delay={0.2} className={styles.pillarStandard1}>
              <div className={styles.pillarImageContainer}>
                <Image src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800" alt="Reader Community" fill className={styles.pillarImage} />
              </div>
              <h3>Reader Community</h3>
              <p>Access our vast network of avid readers, book reviewers, and Bookstagram influencers ready to champion your next release.</p>
              <Link href="/community" className={styles.pillarLink}>Join Community &rarr;</Link>
            </GlassCard>

            <GlassCard delay={0.3} className={styles.pillarStandard2}>
              <div className={styles.pillarImageContainer}>
                <Image src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800" alt="Publishing Ecosystem" fill className={styles.pillarImage} />
              </div>
              <h3>Publishing Ecosystem</h3>
              <p>Connecting authors, publishers, and readers to create a thriving environment for literary success and long-term growth.</p>
              <Link href="/about" className={styles.pillarLink}>Learn More &rarr;</Link>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* How It Works (NEW) */}
      <section className={styles.process}>
        <div className={`container ${styles.processContainer}`}>
          <FadeIn direction="up">
            <div className={styles.sectionHeader}>
              <h2 className="text-gradient">Our Process</h2>
              <p>A proven roadmap from manuscript to market domination.</p>
            </div>
          </FadeIn>

          <div className={styles.processGrid}>
            <FadeIn direction="up" delay={0.1} className={styles.processStep}>
              <div className={styles.stepNumber}>01</div>
              <h3>Discovery & Strategy</h3>
              <p>We audit your current brand, analyze your target audience, and build a bespoke marketing roadmap tailored to your goals.</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} className={styles.processStep}>
              <div className={styles.stepNumber}>02</div>
              <h3>Brand Foundation</h3>
              <p>From visual identity to your digital hub (website), we construct a premium platform that converts casual visitors into super fans.</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3} className={styles.processStep}>
              <div className={styles.stepNumber}>03</div>
              <h3>Community Growth</h3>
              <p>We launch targeted social media campaigns, engage with influencers, and cultivate an active ARC reviewer team for your books.</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.4} className={styles.processStep}>
              <div className={styles.stepNumber}>04</div>
              <h3>Long-Term Scaling</h3>
              <p>We implement data-driven ad campaigns (Amazon/Meta) and newsletter strategies to scale your backlist and sustain long-term revenue.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Success Stories (NEW) */}
      <section className={styles.testimonials}>
        <div className={`container ${styles.sectionContainer}`}>
          <FadeIn direction="up">
            <div className={styles.sectionHeader}>
              <h2>Author Success Stories</h2>
              <p>Don't just take our word for it. See what happens when authors partner with Bookstagram Club.</p>
            </div>
          </FadeIn>

          <div className={styles.testimonialGrid}>
            <GlassCard delay={0.1} className={styles.testimonialCard}>
              <p className={styles.quote}>"Bookstagram Club completely transformed my online presence. Their branding gave me the confidence to pitch traditional publishers, and their ARC team drove my launch to the top 100 on Amazon."</p>
              <div className={styles.authorInfo}>
                <div className={styles.authorAvatar}>S</div>
                <div>
                  <strong>Sarah Jenkins</strong>
                  <span>Fantasy Author</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard delay={0.2} className={styles.testimonialCard}>
              <p className={styles.quote}>"I was exhausted trying to write and market simultaneously. Handing over my social media and ad campaigns to this agency was the best career move I've ever made."</p>
              <div className={styles.authorInfo}>
                <div className={styles.authorAvatar}>M</div>
                <div>
                  <strong>Michael Torres</strong>
                  <span>Thriller Novelist</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaContainer}`}>
          <FadeIn direction="up">
            <h2>Ready to elevate your author brand?</h2>
            <p>Join the authors who trust Bookstagram Club to manage their digital presence.</p>
            <Button href="/contact" variant="secondary">Book a Consultation</Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
