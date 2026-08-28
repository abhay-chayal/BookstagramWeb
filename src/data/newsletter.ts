export interface NewsletterIssue {
  id: string;
  issueNumber: number;
  slug: string;
  title: string;
  subjectLine: string;
  previewText: string;
  heroImage: string;
  publishedAt: string;
  editorialIntro: string;
  featuredBook: {
    title: string;
    author: string;
    coverImage: string;
    genre: string;
    description: string;
    whyRead: string;
    amazonUrl: string;
  };
  authorSpotlight?: {
    name: string;
    photoUrl: string;
    quote: string;
    articleSlug: string;
  };
  curatedArticleSlugs: string[];
  readingRecommendations: Array<{
    title: string;
    author: string;
    tagline: string;
  }>;
  closingThought: string;
  status: "published" | "draft" | "scheduled";
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  firstName?: string;
  status: "active" | "unsubscribed" | "pending";
  subscribedAt: string;
  source: string;
}

export const NEWSLETTER_ISSUES: NewsletterIssue[] = [
  {
    id: "news-008",
    issueNumber: 8,
    slug: "issue-008",
    title: "The Solace of Slow Reading in a Rapid World",
    subjectLine: "Issue #008: The books we are savoring this week + the resurgence of paper",
    previewText: "Why tactile reading is having a cultural renaissance, plus 3 unmissable dark academia novels.",
    heroImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200",
    publishedAt: "2026-08-22",
    editorialIntro: "Welcome to Issue #008 of the Bookstagram Club Dispatch. In this week's issue, we dive into why the physical book continues to defy digital homogenization, spotlight a remarkable true-story memoir, and share three novels engineered for stormy evenings.",
    featuredBook: {
      title: "Infectious Injustice",
      author: "Justin Cook",
      coverImage: "/images/books/infectious-injustice.webp",
      genre: "Memoir & True Story",
      description: "A harrowing, deeply moving real-life account of survival, corruption, and systemic resilience inside San Quentin during the pandemic.",
      whyRead: "Unflinchingly honest, beautifully structured, and essential reading for anyone interested in social justice and authentic human courage.",
      amazonUrl: "https://www.amazon.com/dp/B0CKD2FPJC",
    },
    authorSpotlight: {
      name: "Justin Cook",
      photoUrl: "/images/books/infectious-injustice.webp",
      quote: "When the doors are locked and the cameras aren't looking, the written word is the only weapon that travels through stone walls.",
      articleSlug: "author-spotlight-justin-cook",
    },
    curatedArticleSlugs: [
      "the-renaissance-of-the-physical-book",
      "autumn-dark-academia-reading-list",
      "mastering-the-unreliable-narrator",
    ],
    readingRecommendations: [
      {
        title: "Babel",
        author: "R.F. Kuang",
        tagline: "An intellectual historical fantasy dissecting language and colonial power.",
      },
      {
        title: "The Secret History",
        author: "Donna Tartt",
        tagline: "The golden standard of dark academia intrigue and tragic hubris.",
      },
      {
        title: "Piranesi",
        author: "Susanna Clarke",
        tagline: "A labyrinth of marble statues, ocean tides, and quiet wonder.",
      },
    ],
    closingThought: "May your bookmarks travel far and your teacup never run cold this weekend.",
    status: "published",
  },
  {
    id: "news-007",
    issueNumber: 7,
    slug: "issue-007",
    title: "The Architecture of a Great First Chapter",
    subjectLine: "Issue #007: How legendary novels hook you in 500 words",
    previewText: "Deconstructing the opening lines of literary masterpieces + indie fantasy spotlight.",
    heroImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200",
    publishedAt: "2026-08-15",
    editorialIntro: "How long does a book have to win your heart? For most readers, it takes less than two pages. In today's dispatch, we examine the anatomy of narrative hooks and celebrate an unforgettable epic fantasy debut.",
    featuredBook: {
      title: "The Queen of Nordern: Warriors of Mirral",
      author: "Indie Feature",
      coverImage: "/images/books/queen-of-nordern.webp",
      genre: "Epic Fantasy",
      description: "A sweeping saga of warrior crowns, political betrayal, and elemental magic.",
      whyRead: "Complex character relationships anchored in rich lore that will delight fans of high-stakes court fantasy.",
      amazonUrl: "https://a.co/d/1ujZ1P1",
    },
    curatedArticleSlugs: [
      "the-art-of-the-first-chapter",
      "worldbuilding-in-contemporary-fantasy",
      "debut-spotlight-the-queen-of-nordern",
    ],
    readingRecommendations: [
      {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        tagline: "Lyrical prose following a legendary musician and arcanist.",
      },
      {
        title: "The Priory of the Orange Tree",
        author: "Samantha Shannon",
        tagline: "A rich feminist fantasy uniting divided realms against an ancient terror.",
      },
    ],
    closingThought: "A good book does not merely tell a story; it alters the atmosphere of the room you are sitting in.",
    status: "published",
  },
  {
    id: "news-006",
    issueNumber: 6,
    slug: "issue-006",
    title: "The Intimate Art of Annotating Books",
    subjectLine: "Issue #006: Why writing in the margins makes a book truly yours",
    previewText: "Pencil notes, dog-eared pages, and the secret conversations between readers and authors.",
    heroImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200",
    publishedAt: "2026-08-08",
    editorialIntro: "Should books remain pristine or be actively lived in? We explore the rich history of marginalia and why dog-earing a page is an act of love.",
    featuredBook: {
      title: "Faucet: For We All Have the Power to Glow",
      author: "Client Spotlight",
      coverImage: "/images/books/faucet.webp",
      genre: "Poetry & Personal Growth",
      description: "An inspiring exploration of inner light, vulnerability, and overcoming hardship through poetic resonance.",
      whyRead: "Luminous, deeply reflective verses that serve as daily meditations on self-worth.",
      amazonUrl: "https://a.co/d/hgSjdYQ",
    },
    curatedArticleSlugs: [
      "the-subtle-magic-of-annotating-books",
      "the-art-of-the-bookshelf",
      "the-solitary-craft-routines-of-literary-giants",
    ],
    readingRecommendations: [
      {
        title: "Selected Poems",
        author: "Mary Oliver",
        tagline: "Quiet wilderness reflections that demand our complete attention.",
      },
      {
        title: "The Year of Magical Thinking",
        author: "Joan Didion",
        tagline: "A masterwork on grief, memory, and enduring love.",
      },
    ],
    closingThought: "Leave your marks in the margins; someday, you will meet your past self there.",
    status: "published",
  },
  {
    id: "news-005",
    issueNumber: 5,
    slug: "issue-005",
    title: "The Thriller Formula: Why We Love Being Misled",
    subjectLine: "Issue #005: Deceptive narrators + 6 unputdownable thrillers",
    previewText: "The psychological brilliance of untrustworthy storytellers.",
    heroImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200",
    publishedAt: "2026-08-01",
    editorialIntro: "There is an exquisite thrill in realizing the narrator you trusted has been keeping secrets. Today, we break down fiction's greatest narrative deceptions.",
    featuredBook: {
      title: "The Space Traveller’s Lover",
      author: "Client Feature",
      coverImage: "/images/books/space-travellers-lover.webp",
      genre: "Sci-Fi Romance",
      description: "A cosmic exploration of connection spanning vast light-years and interstellar mysteries.",
      whyRead: "Fast-paced, emotionally resonant, and brimming with cinematic imagination.",
      amazonUrl: "https://a.co/d/geTcaKZ",
    },
    curatedArticleSlugs: [
      "mastering-the-unreliable-narrator",
      "unputdownable-psychological-thrillers",
      "immersive-sci-fi-worldbuilding-reads",
    ],
    readingRecommendations: [
      {
        title: "Gone Girl",
        author: "Gillian Flynn",
        tagline: "The modern benchmark for dueling unreliable narrators.",
      },
      {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        tagline: "A psychological mystery wrapped in classical myth.",
      },
    ],
    closingThought: "The best twists are the ones that were hiding in plain sight all along.",
    status: "published",
  },
  {
    id: "news-004",
    issueNumber: 4,
    slug: "issue-004",
    title: "How Authors Build Lifelong Readerships",
    subjectLine: "Issue #004: Social media algorithms vs. the sovereign reader list",
    previewText: "Why owning your newsletter is the smartest move an author can make.",
    heroImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200",
    publishedAt: "2026-07-25",
    editorialIntro: "Social media feeds come and go, but an authentic newsletter list belongs to the author forever. Here is how thoughtful writers cultivate genuine reader communities.",
    featuredBook: {
      title: "Flare Chronicles: Into the Blaze",
      author: "Client Feature",
      coverImage: "/images/books/flare-chronicles.webp",
      genre: "Dystopian Sci-Fi",
      description: "High-octane survival in a world ravaged by cosmic flares.",
      whyRead: "Pulse-pounding pacing paired with deep thematic questions of societal rebirth.",
      amazonUrl: "https://a.co/d/5lCSBbP",
    },
    curatedArticleSlugs: [
      "building-an-author-newsletter-ecosystem",
      "the-hook-framework-for-bookstagram",
      "building-authentic-author-presence",
    ],
    readingRecommendations: [
      {
        title: "On Writing",
        author: "Stephen King",
        tagline: "Part memoir, part masterclass on the craft and grit of fiction.",
      },
      {
        title: "Big Magic",
        author: "Elizabeth Gilbert",
        tagline: "Creative living beyond fear and expectation.",
      },
    ],
    closingThought: "Speak to your readers like trusted confidants, and they will follow your stories anywhere.",
    status: "published",
  },
  {
    id: "news-003",
    issueNumber: 3,
    slug: "issue-003",
    title: "The Re-Reading Revelation",
    subjectLine: "Issue #003: Why classic novels change as we grow older",
    previewText: "Meeting Gatsby, Rochester, and Winston Smith at 30 vs. 18.",
    heroImage: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1200",
    publishedAt: "2026-07-18",
    editorialIntro: "Have you ever returned to a book you read in school and discovered an entirely different story? That is the quiet miracle of great literature.",
    featuredBook: {
      title: "1984",
      author: "George Orwell",
      coverImage: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
      genre: "Dystopian Classic",
      description: "The definitive warning on state surveillance, historical erasure, and linguistic control.",
      whyRead: "More urgent and chilling with every passing year.",
      amazonUrl: "https://www.amazon.com/s?k=1984+George+Orwell&i=stripbooks",
    },
    curatedArticleSlugs: [
      "why-we-reread-classics",
      "the-art-of-the-bookshelf",
      "the-solitary-craft-routines-of-literary-giants",
    ],
    readingRecommendations: [
      {
        title: "Brave New World",
        author: "Aldous Huxley",
        tagline: "A prophetic vision of distraction and manufactured consensus.",
      },
      {
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        tagline: "A poetic love letter to the fire of human curiosity.",
      },
    ],
    closingThought: "A classic is a book that has never finished saying what it has to say.",
    status: "published",
  },
  {
    id: "news-002",
    issueNumber: 2,
    slug: "issue-002",
    title: "The Evolution of Modern Book Covers",
    subjectLine: "Issue #002: Foil stamps, custom sprayed edges, and visual art trends",
    previewText: "How physical book aesthetics are reaching new heights.",
    heroImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200",
    publishedAt: "2026-07-11",
    editorialIntro: "In our second dispatch, we examine the glorious design trends transforming books into physical works of art.",
    featuredBook: {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImage: "https://covers.openlibrary.org/b/id/14348537-L.jpg",
      genre: "American Classic",
      description: "Jazz age longing, green lights across the bay, and the tragic allure of reinvention.",
      whyRead: "Flawless sentence-level craftsmanship.",
      amazonUrl: "https://www.amazon.com/s?k=The+Great+Gatsby+F.+Scott+Fitzgerald&i=stripbooks",
    },
    curatedArticleSlugs: [
      "the-evolution-of-book-cover-design-trends",
      "most-anticipated-indie-fiction-2026",
      "the-hook-framework-for-bookstagram",
    ],
    readingRecommendations: [
      {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        tagline: "Decadence, art, and the corruption of youth.",
      },
    ],
    closingThought: "Beauty in book design is the doorway through which curiosity enters.",
    status: "published",
  },
  {
    id: "news-001",
    issueNumber: 1,
    slug: "issue-001",
    title: "Welcome to the Bookstagram Club Dispatch",
    subjectLine: "Issue #001: The start of a new literary sanctuary",
    previewText: "Our founding mission, what to expect weekly, and our top debut recommendations.",
    heroImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200",
    publishedAt: "2026-07-04",
    editorialIntro: "Welcome to the inaugural issue of the Bookstagram Club Newsletter. We created this space to celebrate books worth reading, the authors who write them, and the vibrant community that champions them.",
    featuredBook: {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      coverImage: "https://covers.openlibrary.org/b/id/14351077-L.jpg",
      genre: "Literary Classic",
      description: "A timeless exploration of moral courage, empathy, and childhood innocence.",
      whyRead: "A story that belongs on every reader's lifetime shelf.",
      amazonUrl: "https://www.amazon.com/s?k=To+Kill+a+Mockingbird+Harper+Lee&i=stripbooks",
    },
    curatedArticleSlugs: [
      "the-renaissance-of-the-physical-book",
      "demystifying-the-arc-campaign",
      "interview-with-top-bookstagram-creator",
    ],
    readingRecommendations: [
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        tagline: "Witty social commentary and timeless romantic tension.",
      },
    ],
    closingThought: "Thank you for joining our circle. Here's to countless stories ahead.",
    status: "published",
  },
];
