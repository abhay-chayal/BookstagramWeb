import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Bookstagram Promotion for Authors",
  description:
    "What Bookstagram is, how book promotion on Instagram actually works, what it can and cannot do for an author, and how to run a campaign that reaches real readers.",
  alternates: { canonical: "/bookstagram-promotion" },
  openGraph: {
    title: `Bookstagram Promotion for Authors | ${SITE_NAME}`,
    description:
      "A practical guide to promoting a book on Bookstagram — how the community works, what a campaign involves, and what results are realistic.",
    url: absoluteUrl("/bookstagram-promotion"),
    type: "article",
  },
};

const FAQ = [
  {
    q: "What is Bookstagram?",
    a: "Bookstagram is the book community on Instagram — readers, reviewers and authors who post about what they are reading. It is not a formal platform or a separate app, just a long-running community that organises itself through hashtags, shared aesthetics and reading habits. It skews heavily toward fiction, and certain genres, romance and fantasy in particular, are far more active than others.",
  },
  {
    q: "Does Bookstagram promotion actually sell books?",
    a: "It creates visibility among people who read in your genre, and visibility is what makes a sale possible. Nobody can honestly promise you sales figures, because reader behaviour cannot be controlled and no agency has access to the levers that would guarantee it. Be sceptical of anyone who does promise numbers.",
  },
  {
    q: "How long should a Bookstagram campaign run?",
    a: "Longer than most authors expect. A single post is close to worthless; the community responds to repetition and familiarity. A launch campaign typically spans several weeks before release and continues afterwards, because the weeks after publication are when most discovery actually happens.",
  },
  {
    q: "Is it too late if my book came out a year ago?",
    a: "No. Backlist promotion is one of the most reliable uses of Bookstagram, precisely because the book already exists, already has reviews, and is not competing with its own launch-day noise. Readers discovering a book three years after release do not care that it is not new.",
  },
  {
    q: "Do I need a large following of my own?",
    a: "No. Campaigns work through other people's audiences — reviewers, readers and feature accounts. Your own following matters for long-term author brand building, which is a slower and separate project.",
  },
];

export default function BookstagramPromotionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Bookstagram Promotion for Authors",
        description: metadata.description,
        url: absoluteUrl("/bookstagram-promotion"),
        author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container">
        <Breadcrumbs items={[{ name: "Bookstagram Promotion" }]} />
      </div>

      <header className={styles.header}>
        <div className="container">
          <p className={styles.eyebrow}>The Guide</p>
          <h1 className={styles.title}>Bookstagram Promotion for Authors</h1>
          <p className={styles.standfirst}>
            What Bookstagram is, how promotion on it actually works, what it can and
            cannot do for a book, and how to judge whether a campaign is any good.
          </p>
        </div>
      </header>

      <article className={styles.body}>
        <div className="container">
          <section>
            <h2>What Bookstagram actually is</h2>
            <p>
              Bookstagram is the book community on Instagram. It has no official
              existence — no separate app, no governing body, no membership. It is
              simply the very large number of people who use Instagram primarily to
              talk about books, and who have developed their own conventions for doing
              so: recognisable photography styles, shared hashtags, recurring formats
              like stacked-spine shots and annotated pages.
            </p>
            <p>
              Two things follow from that, and both matter for promotion. First, it is
              a <em>community</em>, not an advertising channel, and it reacts badly to
              content that treats it as one. Second, it is heavily segmented by genre.
              Romance, fantasy and young adult have enormous, highly active reader
              bases. Literary fiction, memoir and non-fiction have smaller ones. A
              campaign that ignores which segment your book belongs to will reach
              people, but not the right people.
            </p>
          </section>

          <section>
            <h2>Why authors struggle with it alone</h2>
            <p>
              The common failure is not laziness — it is misreading the medium. Authors
              post a cover image, a blurb and a buy link, get almost no response, and
              conclude that Instagram does not work for books.
            </p>
            <p>
              What actually happened is that they posted an advertisement into a space
              where people come to talk about reading. The accounts that perform well
              lead with the <em>experience</em> of the book — a line that lands, a mood,
              a trope readers actively seek out — and treat the purchase as a
              consequence rather than the message. Getting that right consistently, for
              weeks, while also writing, is the part most authors cannot sustain.
            </p>
          </section>

          <section>
            <h2>What a campaign actually involves</h2>
            <p>
              A serious campaign is a sequence, not a post. Broadly it breaks into four
              stages, and skipping any of them tends to be where results disappear.
            </p>
            <ol className={styles.steps}>
              <li>
                <strong>Positioning.</strong> Work out what the book actually is to a
                reader — genre, tone, the tropes and comparisons that tell someone in
                three seconds whether this is for them. Everything downstream depends on
                this being right.
              </li>
              <li>
                <strong>Assets.</strong> Feed posts, stories, reels and{" "}
                <Link href="/solutions/promotional-graphics">quote graphics</Link> built
                for this specific book. Some books justify a{" "}
                <Link href="/solutions/cinematic-trailers">book trailer</Link>; many do
                not, and are better served by stills and text.
              </li>
              <li>
                <strong>Credibility.</strong> Readers trust readers.{" "}
                <Link href="/solutions/book-reviews">Editorial reviews</Link> and{" "}
                <Link href="/solutions/author-features">author features</Link> give
                people something to point at that is not the author&rsquo;s own claim about
                the book.
              </li>
              <li>
                <strong>Cadence.</strong> Content scheduled across pre-launch, launch and
                — critically — the months afterwards. See{" "}
                <Link href="/solutions/launch-strategy">launch strategy</Link> for how
                the phases fit together.
              </li>
            </ol>
          </section>

          <section>
            <h2>What it can and cannot do</h2>
            <p>
              Bookstagram promotion can put a book in front of people who read in its
              genre, build enough social proof that a stranger will take a chance on it,
              and keep a backlist title in circulation long after its publisher stopped
              caring. Those are real, and they compound.
            </p>
            <p>
              It cannot manufacture demand for a book that no audience exists for, fix a
              manuscript that is not ready — that is what{" "}
              <Link href="/solutions/editorial-support">editorial support</Link> is for —
              or guarantee a number. Any agency quoting you guaranteed sales, review
              counts or bestseller placement is either describing something they cannot
              control or buying engagement that will not convert.
            </p>
          </section>

          <section>
            <h2>How to judge whether a campaign is any good</h2>
            <p>Four questions worth asking anyone you are considering hiring:</p>
            <ul className={styles.checks}>
              <li>
                <strong>Did they read the book?</strong> If the proposal would work
                equally well for any title in the genre, it was not built for yours.
              </li>
              <li>
                <strong>Can they show the actual work?</strong> Not follower counts —
                the posts, the graphics, the reviews. Real campaigns leave artefacts you
                can look at.
              </li>
              <li>
                <strong>Do they promise numbers?</strong> Treat guaranteed sales or
                rankings as a warning, not a selling point.
              </li>
              <li>
                <strong>Does the plan continue past launch week?</strong> Most discovery
                happens afterwards. A campaign that ends on release day is leaving the
                majority of the opportunity behind.
              </li>
            </ul>
          </section>

          <section>
            <h2>Beyond Instagram</h2>
            <p>
              Instagram is rented ground. It is where readers are, but the account, the
              reach and the rules belong to someone else. Anything you build there
              should feed something you own — an{" "}
              <Link href="/solutions/author-website">author website</Link> and an{" "}
              <Link href="/solutions/newsletter-promotion">email list</Link> that reaches
              readers regardless of what an algorithm decides next year.
            </p>
            <p>
              The authors who are still finding readers five years later are almost
              always the ones who converted borrowed attention into something they
              control.
            </p>
          </section>

          <section>
            <h2>Common questions</h2>
            <dl className={styles.faq}>
              {FAQ.map((f) => (
                <div key={f.q} className={styles.faqItem}>
                  <dt>{f.q}</dt>
                  <dd>{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={styles.cta}>
            <h2>Want this run for your book?</h2>
            <p>
              We build campaigns around one book at a time. Tell us where yours is —
              manuscript, pre-launch, or published years ago — and we will tell you
              honestly what is worth doing.
            </p>
            <div className={styles.ctaActions}>
              <Button href="/contact" variant="primary">Start Your Campaign</Button>
              <Button href="/solutions" variant="outline">See All Services</Button>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
