export interface JournalCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  displayOrder: number;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string; // Markdown formatted content
  coverImage: string;
  category: string; // e.g. "books", "authors", "reading-lists", "new-releases", "literature", "publishing", "book-marketing", "interviews"
  tags: string[];
  authorName: string;
  authorRole: string;
  authorAvatar?: string;
  publishedAt: string;
  readingTimeMinutes: number;
  isFeatured: boolean;
  status: "published" | "draft" | "scheduled" | "archived";
  seoTitle?: string;
  seoDescription?: string;
  relatedArticleSlugs?: string[];
  featuredBook?: {
    title: string;
    author: string;
    coverImage: string;
    amazonUrl: string;
  };
}

export interface JournalAuthorFeature {
  id: string;
  slug: string;
  name: string;
  photoUrl: string;
  bio: string;
  genre: string;
  featuredBook: {
    title: string;
    coverImage: string;
    amazonUrl: string;
    description: string;
  };
  interviewQA: Array<{
    question: string;
    answer: string;
  }>;
  websiteUrl?: string;
  instagramHandle?: string;
  publishedAt: string;
}

export interface JournalBookFeature {
  id: string;
  slug: string;
  title: string;
  author: string;
  coverImage: string;
  genre: string;
  description: string;
  whyFeatured: string;
  quote: string;
  amazonUrl: string;
  publishedAt: string;
}

export const JOURNAL_CATEGORIES: JournalCategory[] = [
  {
    id: "books",
    name: "Books",
    slug: "books",
    description: "Deep dives, thematic explorations, and editorial features on standout books.",
    displayOrder: 1,
  },
  {
    id: "authors",
    name: "Authors",
    slug: "authors",
    description: "Portraits, craft essays, and deep-dive features on visionary authors.",
    displayOrder: 2,
  },
  {
    id: "new-releases",
    name: "New Releases",
    slug: "new-releases",
    description: "Curated spotlights on the most anticipated titles entering the literary world.",
    displayOrder: 3,
  },
  {
    id: "reading-lists",
    name: "Reading Lists",
    slug: "reading-lists",
    description: "Themed reading guides crafted for distinct moods, seasons, and obsessions.",
    displayOrder: 4,
  },
  {
    id: "literature",
    name: "Literature & Culture",
    slug: "literature",
    description: "Essays exploring the evolving cultural landscape of books, readers, and art.",
    displayOrder: 5,
  },
  {
    id: "publishing",
    name: "Publishing",
    slug: "publishing",
    description: "Behind-the-scenes insights into the publishing ecosystem, acquisitions, and indie craft.",
    displayOrder: 6,
  },
  {
    id: "book-marketing",
    name: "Book Marketing",
    slug: "book-marketing",
    description: "Strategic frameworks for building enduring author platforms and organic discovery.",
    displayOrder: 7,
  },
  {
    id: "interviews",
    name: "Interviews",
    slug: "interviews",
    description: "Conversations with authors, editors, bookstagrammers, and publishing pioneers.",
    displayOrder: 8,
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  // 1. LEAD FEATURED STORY (Literature)
  {
    id: "art-001",
    slug: "the-renaissance-of-the-physical-book",
    title: "The Silent Rebellion: Why the Physical Book Refuses to Die",
    subtitle: "In an era of frictionless digital feeds, the tactile weight of paper has transformed from nostalgia into a deliberate act of mindfulness.",
    excerpt: "While technology promised that screens would replace paper, modern readers are building home libraries with unprecedented devotion. Here is why the physical codex remains the greatest reading technology ever invented.",
    content: `
# The Silent Rebellion: Why the Physical Book Refuses to Die

In 2011, the prevailing narrative of digital futurists was unambiguous: within a decade, physical books would join vinyl records and cassette tapes as niche collector curiosities. E-readers offered infinite shelf space in a four-ounce rectangle. Algorithms promised effortless reading queues.

Yet today, something extraordinary has happened. **Physical book sales are surging across every demographic**, led not by older traditionalists, but by Gen Z and millennial readers who spend eight hours a day in front of glowing monitors.

---

## 1. The Psychology of Tactile Weight

Reading is not merely an intellectual transaction; it is a sensory choreography. The resistance of 80gsm uncoated cream paper, the distinct aroma of lignified wood pulp, and the subtle shift in gravity as your left hand grows heavier while your right hand grows lighter—these are neurological anchors.

> "A screen demands your reaction. A book demands your surrender."

Cognitive psychologists at the University of Stavanger observed that readers comprehend complex long-form narrative arcs significantly better on paper than on illuminated screens. On a screen, the text feels transient, existing in an ethereal plane where any sentence could easily be an Instagram notification. On paper, words are physically carved onto the page. They hold spatial permanence.

---

## 2. The Architecture of Slow Consumption

We live in an attention economy designed for fragmentation. Social media feeds operate on variable reward schedules, conditioning our dopamine pathways to seek the next dopamine hit every eleven seconds.

Against this frenetic backdrop, opening a 450-page novel is an act of quiet resistance:
* **Zero hyperlinked distractions:** There is no blue text inviting you down an algorithmic rabbit hole.
* **Spatial memory:** You remember where a revelation occurred—top left corner, halfway through the volume.
* **Intentional sanctuary:** Closing a book provides a definitive psychological threshold that swiping home simply cannot match.

---

## 3. The Book as an Aesthetic Artifact

The modern Bookstagram and BookTok communities did not invent the beauty of books; they simply made it visible to millions. Books have reclaimed their role as aesthetic centerpieces in our homes.

A curated bookshelf is an intimate portrait of an individual’s intellectual journey—the dog-eared margins where a passage shattered their assumptions, the vintage cover discovered in a coastal used bookshop, the pristine hardcover received as a gift.

---

## The Path Forward

The future of reading is not a zero-sum war between digital convenience and physical pages. E-readers excel at portability; audiobooks excel during commutes. But when a reader seeks deep immersion, aesthetic reverence, and lasting memory, they invariably return to the spine, the page, and the weight of paper.
    `,
    coverImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200",
    category: "literature",
    tags: ["Physical Books", "Cognitive Science", "Book Aesthetics", "Slow Living"],
    authorName: "Elena Vance",
    authorRole: "Senior Literary Essayist",
    publishedAt: "2026-08-20",
    readingTimeMinutes: 6,
    isFeatured: true,
    status: "published",
    relatedArticleSlugs: ["the-art-of-the-bookshelf", "why-we-reread-classics"],
  },

  // 2. BOOKS (Feature 1)
  {
    id: "art-002",
    slug: "mastering-the-unreliable-narrator",
    title: "The Architecture of Deception: Mastering the Unreliable Narrator",
    subtitle: "From Agatha Christie to Gillian Flynn, how authors construct narratives where the narrator is the greatest mystery of all.",
    excerpt: "What makes a reader love being lied to? An exploration into the subtle clues, psychological fractures, and narrative brilliance of fiction's greatest untrustworthy storytellers.",
    content: `
# The Architecture of Deception: Mastering the Unreliable Narrator

Nothing in fiction is more exhilarating than the sudden realization that the voice whispering in your ear has been misleading you from page one. 

The unreliable narrator is not merely a cheap plot device; when executed with mastery, it is an inquiry into the subjective nature of truth itself.

---

## The Three Archetypes of Unreliability

1. **The Madman / Distorted Reality:** Narrators whose perception of the world is warped by trauma, psychosis, or psychological obsession (e.g., *The Tell-Tale Heart*, *American Psycho*).
2. **The Innocent / Naïf:** Narrators whose lack of maturity or worldly comprehension obscures the true darkness of their circumstances (e.g., *To Kill a Mockingbird*, *Room*).
3. **The Liar / Calculated Deceiver:** Characters who intentionally manipulate the reader to conceal guilt, malice, or complicity (e.g., *The Murder of Roger Ackroyd*, *Gone Girl*).

---

## The Contract with the Reader

The cardinal rule of deceptive narrative is that **the author must never cheat**. Every breadcrumb must be fairly laid upon the floorboards. The genius of the unreliable narrator lies in re-reading: the second time through, every sentence should take on an entirely different, chilling clarity.
    `,
    coverImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200",
    category: "books",
    tags: ["Craft of Writing", "Psychological Thrillers", "Narrative Structure"],
    authorName: "Marcus Thorne",
    authorRole: "Editorial Director",
    publishedAt: "2026-08-18",
    readingTimeMinutes: 5,
    isFeatured: false,
    status: "published",
  },

  // 3. BOOKS (Feature 2)
  {
    id: "art-003",
    slug: "worldbuilding-in-contemporary-fantasy",
    title: "Beyond Magic Systems: The Soul of Contemporary Worldbuilding",
    subtitle: "Why the most memorable fantasy worlds are anchored in cultural rituals, culinary traditions, and linguistic rhythms rather than rigid magical rulebooks.",
    excerpt: "A deep dive into how modern fantasy authors breathe genuine life into secondary worlds by prioritizing lived human texture over mathematical magic charts.",
    content: `
# Beyond Magic Systems: The Soul of Contemporary Worldbuilding

In recent decades, the conversation around fantasy worldbuilding has often tilted toward 'hard magic systems'—precise rules, costs, and limitations. But what truly makes an imaginary realm linger in a reader's heart years after the final chapter?

It is rarely the magic equations. It is the food steaming in a roadside tavern, the idioms mothers whisper to their children, the funeral rites of a desert empire, and the architectural decay of a forgotten port city.

---

## The Texture of the Everyday

Great worldbuilding happens at eye level:
* **Commerce & Street Life:** How do ordinary citizens buy bread? What currencies are distrusted?
* **Taboos and Superstitions:** What are people afraid to name aloud?
* **Ecological Cohesion:** How does the climate dictate fashion, religion, and military tactics?

When worldbuilding operates as an organic reflection of human culture, magic ceases to be a gimmick and becomes part of the world's natural poetry.
    `,
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200",
    category: "books",
    tags: ["Fantasy", "Worldbuilding", "Fiction Craft"],
    authorName: "Sarah Lin",
    authorRole: "Senior Editor",
    publishedAt: "2026-08-15",
    readingTimeMinutes: 5,
    isFeatured: false,
    status: "published",
  },

  // 4. BOOKS (Feature 3)
  {
    id: "art-004",
    slug: "the-art-of-the-first-chapter",
    title: "The First Five Hundred Words: How Masterpieces Hook Us Instantly",
    subtitle: "Deconstructing the opening lines and initial scenes that demand the reader surrender their evening.",
    excerpt: "What happens in the first two minutes of reading a novel? Analyzing iconic opening chapters to reveal the precise balance between tone, mystery, and character stakes.",
    content: `
# The First Five Hundred Words: How Masterpieces Hook Us Instantly

An opening chapter is a promise. It establishes the rhythm of the prose, the temperature of the world, and the implicit contract between the author and the reader.

---

## The Three Hooks of Great Openings

1. **The Voice Hook:** A distinct, magnetic cadence that you simply want to listen to (e.g., *The Catcher in the Rye*, *The Secret History*).
2. **The Disruption Hook:** A sudden disturbance to the status quo that triggers immediate forward momentum.
3. **The Philosophical Hook:** A declarative thesis that challenges the reader's worldview before introducing a single character.

The goal is never to explain everything upfront; it is to make the next sentence completely irresistible.
    `,
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200",
    category: "books",
    tags: ["Opening Chapters", "Writing Craft", "Literary Analysis"],
    authorName: "Abhay",
    authorRole: "Head Strategist",
    publishedAt: "2026-08-12",
    readingTimeMinutes: 4,
    isFeatured: false,
    status: "published",
  },

  // 5. AUTHORS (Feature 1)
  {
    id: "art-005",
    slug: "author-spotlight-justin-cook",
    title: "Author Spotlight: Justin Cook on Survival, Justice, and Raw Memoir",
    subtitle: "The harrowing real-life story behind 'Infectious Injustice' and the resilience required to document institutional corruption.",
    excerpt: "An intimate interview with author Justin Cook discussing the psychological toll of writing through catastrophe, truth-telling inside correctional systems, and finding an authentic literary voice.",
    content: `
# Author Spotlight: Justin Cook on Survival, Justice, and Raw Memoir

Writing a memoir is rarely an exercise in vanity; for Justin Cook, author of *Infectious Injustice*, it was a vital act of survival and historical preservation.

---

## Turning Trauma into Narrative Clarity

Documenting the COVID-19 disaster inside San Quentin demanded more than memory; it required rigorous journalistic discipline amidst profound personal grief. In this feature, we explore how Justin structured his memoir to balance deeply personal vulnerability with searing institutional critique.

> "When the doors are locked and the cameras aren't looking, the written word is the only weapon that can travel through stone walls."

Read our full case study on the release campaign and discover the emotional core of this unforgettable work.
    `,
    coverImage: "/images/books/infectious-injustice.webp",
    category: "authors",
    tags: ["Memoir", "Author Spotlight", "True Story", "Social Justice"],
    authorName: "Elena Vance",
    authorRole: "Senior Literary Essayist",
    publishedAt: "2026-08-10",
    readingTimeMinutes: 5,
    isFeatured: false,
    status: "published",
  },

  // 6. AUTHORS (Feature 2)
  {
    id: "art-006",
    slug: "the-solitary-craft-routines-of-literary-giants",
    title: "From 5 AM Coffee to Midnight Revisions: The Daily Routines of Great Writers",
    subtitle: "How Toni Morrison, Haruki Murakami, and Virginia Woolf sculpted their days to summon narrative magic.",
    excerpt: "Creativity is not lightning; it is a discipline. Examining the peculiar, rigorous, and inspiring rituals behind history's most celebrated literature.",
    content: `
# The Daily Routines of Great Writers

Murakami wakes at 4:00 AM, writes for five hours, runs ten kilometers, and listens to jazz. Toni Morrison wrote in the quiet dark before dawn, watching the sun rise with a cup of black coffee before her children woke.

Ritual is not restrictive; it is the scaffolding within which inspiration feels safe enough to appear.
    `,
    coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200",
    category: "authors",
    tags: ["Writing Habits", "Author Life", "Productivity"],
    authorName: "Sarah Lin",
    authorRole: "Senior Editor",
    publishedAt: "2026-08-08",
    readingTimeMinutes: 4,
    isFeatured: false,
    status: "published",
  },

  // 7. AUTHORS (Feature 3)
  {
    id: "art-007",
    slug: "the-debut-novel-odyssey",
    title: "The Debut Novel Odyssey: What Nobody Tells You About Book One",
    subtitle: "The emotional rollercoaster from finished draft to publication day, as shared by five debut novelists.",
    excerpt: "Overcoming imposter syndrome, navigating developmental edits, and surviving the vulnerable leap of putting your soul into bookstores.",
    content: `
# The Debut Novel Odyssey

Holding your first published book is an unforgettable milestone. But between the initial manuscript and the bookstore shelf lies a gauntlet of editorial rounds, cover design compromises, and pre-launch anxiety.
    `,
    coverImage: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1200",
    category: "authors",
    tags: ["Debut Authors", "Publishing Journey", "Writing Community"],
    authorName: "Elena Vance",
    authorRole: "Senior Literary Essayist",
    publishedAt: "2026-08-05",
    readingTimeMinutes: 6,
    isFeatured: false,
    status: "published",
  },

  // 8. AUTHORS (Feature 4)
  {
    id: "art-008",
    slug: "building-authentic-author-presence",
    title: "The Introverted Author’s Guide to Digital Presence",
    subtitle: "How to connect with dedicated readers without sacrificing your peace, sanity, or creative energy.",
    excerpt: "You do not need to dance on TikTok to build a thriving readership. How to create thoughtful, sustainable connection through aesthetic storytelling and editorial newsletters.",
    content: `
# The Introverted Author’s Guide to Digital Presence

Most authors write because they prefer the quiet intimacy of words over crowded rooms. The modern demand for 'author branding' can feel overwhelming, but genuine reader connection comes from authenticity, not constant noise.
    `,
    coverImage: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1200",
    category: "authors",
    tags: ["Author Platform", "Introverted Writers", "Authenticity"],
    authorName: "Abhay",
    authorRole: "Head Strategist",
    publishedAt: "2026-08-01",
    readingTimeMinutes: 5,
    isFeatured: false,
    status: "published",
  },

  // 9. AUTHORS (Feature 5)
  {
    id: "art-009",
    slug: "the-art-of-literary-collaboration",
    title: "When Two Minds Write as One: The Art of Co-Authored Fiction",
    subtitle: "How creative partnerships manage voice, structure, and ego to produce seamless cooperative storytelling.",
    excerpt: "From Neil Gaiman and Terry Pratchett to contemporary fantasy duos, exploring the rare alchemy of collaborative novel writing.",
    content: `
# The Art of Co-Authored Fiction

Co-authoring a novel requires an extraordinary level of artistic trust. How do two distinct voices blend into a single harmonious narrative consciousness?
    `,
    coverImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200",
    category: "authors",
    tags: ["Co-Authoring", "Collaboration", "Creative Process"],
    authorName: "Marcus Thorne",
    authorRole: "Editorial Director",
    publishedAt: "2026-07-28",
    readingTimeMinutes: 5,
    isFeatured: false,
    status: "published",
  },

  // 10. READING LISTS (List 1)
  {
    id: "art-010",
    slug: "autumn-dark-academia-reading-list",
    title: "10 Atmosphere-Drenched Novels for the Dark Academia Soul",
    subtitle: "Gothic campuses, ancient secrets, moral ambiguity, and dusty library stacks to accompany the rainy season.",
    excerpt: "A hand-curated selection of novels capturing the obsessive beauty of scholarly intrigue, clandestine societies, and timeless prose.",
    content: `
# 10 Atmosphere-Drenched Novels for the Dark Academia Soul

When the leaves turn amber and the mornings grow crisp, literature calls for leather armchairs, flickering candles, and ancient collegiate secrets.

---

## The Essential Selections

1. **The Secret History** by Donna Tartt — *The quintessential blueprint of aesthetic obsession and moral ruin.*
2. **If We Were Villains** by M.L. Rio — *Shakespearean tragedy bleeding into real life.*
3. **Babel** by R.F. Kuang — *A revolutionary historical fantasy centered on language, translation, and empire.*
4. **The Historian** by Elizabeth Kostova — *A sweeping scholarly quest across European archives.*
5. **Ninth House** by Leigh Bardugo — *Occult societies embedded in Yale's gothic architecture.*
    `,
    coverImage: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1200",
    category: "reading-lists",
    tags: ["Dark Academia", "Autumn Reads", "Book Recommendations"],
    authorName: "Sarah Lin",
    authorRole: "Senior Editor",
    publishedAt: "2026-07-25",
    readingTimeMinutes: 5,
    isFeatured: false,
    status: "published",
  },

  // 11. READING LISTS (List 2)
  {
    id: "art-011",
    slug: "immersive-sci-fi-worldbuilding-reads",
    title: "Expansive Horizons: 7 Sci-Fi Masterpieces with Unrivaled Worldbuilding",
    subtitle: "Space operas, planetary ecosystems, and future civilizations crafted with breathtaking depth.",
    excerpt: "From Frank Herbert's desert politics to Andy Weir's survival science, the definitive science fiction novels that transport you completely.",
    content: `
# 7 Sci-Fi Masterpieces with Unrivaled Worldbuilding

Science fiction at its pinnacle does not merely predict gadgets; it interrogates what it means to be human across vast gulfs of time and space.
    `,
    coverImage: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200",
    category: "reading-lists",
    tags: ["Sci-Fi", "Worldbuilding", "Reading Guide"],
    authorName: "Marcus Thorne",
    authorRole: "Editorial Director",
    publishedAt: "2026-07-22",
    readingTimeMinutes: 5,
    isFeatured: false,
    status: "published",
  },

  // 12. READING LISTS (List 3)
  {
    id: "art-012",
    slug: "unputdownable-psychological-thrillers",
    title: "Sleep Deprivation Guaranteed: 6 Psychological Thrillers You Cannot Put Down",
    subtitle: "Twisted domestic secrets, unreliable perspectives, and pacing that leaves you breathless.",
    excerpt: "The sharpest, most gripping psychological suspense novels engineered to keep you turning pages until 3 AM.",
    content: `
# 6 Psychological Thrillers You Cannot Put Down

A truly great thriller doesn't rely on cheap jump scares; it builds a suffocating psychological tension that makes putting the book down physically impossible.
    `,
    coverImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200",
    category: "reading-lists",
    tags: ["Thrillers", "Suspense", "Binge Reads"],
    authorName: "Elena Vance",
    authorRole: "Senior Literary Essayist",
    publishedAt: "2026-07-18",
    readingTimeMinutes: 4,
    isFeatured: false,
    status: "published",
  },

  // 13. READING LISTS (List 4)
  {
    id: "art-013",
    slug: "comfort-reads-for-burnout-recovery",
    title: "Gentle Pages: 8 Comforting Books for Tired Minds and Busy Days",
    subtitle: "Wholesome fiction, cozy magic, and tender stories that feel like a warm cup of tea on a stormy evening.",
    excerpt: "When the modern world feels too loud, retreat into these gentle, healing narratives celebrated for their warmth and emotional refuge.",
    content: `
# 8 Comforting Books for Tired Minds and Busy Days

Sometimes we do not want high-stakes violence or catastrophic tragedy. We seek books that remind us of human kindness, quiet triumph, and the solace of simple pleasures.
    `,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200",
    category: "reading-lists",
    tags: ["Cozy Reads", "Mental Wellbeing", "Comfort Fiction"],
    authorName: "Sarah Lin",
    authorRole: "Senior Editor",
    publishedAt: "2026-07-15",
    readingTimeMinutes: 4,
    isFeatured: false,
    status: "published",
  },

  // 14. NEW RELEASES & DISCOVERY (Release 1)
  {
    id: "art-014",
    slug: "most-anticipated-indie-fiction-2026",
    title: "Under the Radar: 5 Dazzling Indie Releases Deserving Your Spotlight",
    subtitle: "Bypassing mainstream algorithmic homogeny to unearth courageous, boundary-pushing independent books.",
    excerpt: "Indie publishing is where the most daring literary experimentation is happening right now. Meet the 5 indie gems defining this season.",
    content: `
# 5 Dazzling Indie Releases Deserving Your Spotlight

Independent authors and boutique presses take the artistic risks that corporate conglomerates avoid. Discover the five standout indie titles captivating literary circles right now.
    `,
    coverImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200",
    category: "new-releases",
    tags: ["Indie Books", "New Releases", "Book Discovery"],
    authorName: "Abhay",
    authorRole: "Head Strategist",
    publishedAt: "2026-07-12",
    readingTimeMinutes: 5,
    isFeatured: false,
    status: "published",
  },

  // 15. NEW RELEASES & DISCOVERY (Release 2)
  {
    id: "art-015",
    slug: "the-evolution-of-book-cover-design-trends",
    title: "Bold Typography and Foil Embossing: The Visual Trends of This Season’s Covers",
    subtitle: "How contemporary cover designers merge heritage typography with digital thumbnail clarity.",
    excerpt: "Book cover design has never been more vibrant. A breakdown of the artistic shifts transforming bookstore tables into museum-quality galleries.",
    content: `
# The Visual Trends of This Season’s Covers

A book cover must perform a dual miracle: it must look exquisite as an embossed physical jacket in a reader's hand, and it must arrest attention as a 120-pixel thumbnail on an Instagram explore feed.
    `,
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200",
    category: "new-releases",
    tags: ["Cover Design", "Visual Arts", "Book Trends"],
    authorName: "Marcus Thorne",
    authorRole: "Editorial Director",
    publishedAt: "2026-07-08",
    readingTimeMinutes: 4,
    isFeatured: false,
    status: "published",
  },

  // 16. NEW RELEASES & DISCOVERY (Release 3)
  {
    id: "art-016",
    slug: "debut-spotlight-the-queen-of-nordern",
    title: "Indie Epic Highlight: Inside 'The Queen of Nordern: Warriors of Mirral'",
    subtitle: "How high-fantasy worldbuilding and high-stakes character dynamics captured 48,000+ reader impressions.",
    excerpt: "Exploring the narrative triumphs and strategic release momentum behind one of the season's standout indie fantasy triumphs.",
    content: `
# Inside 'The Queen of Nordern: Warriors of Mirral'

High fantasy demands grand scope, but memorable fantasy requires intimate emotional stakes. Discover the story and reader response behind *The Queen of Nordern*.
    `,
    coverImage: "/images/books/queen-of-nordern.webp",
    category: "new-releases",
    tags: ["Fantasy Highlight", "Indie Epic", "Case Study"],
    authorName: "Sarah Lin",
    authorRole: "Senior Editor",
    publishedAt: "2026-07-04",
    readingTimeMinutes: 4,
    isFeatured: false,
    status: "published",
  },

  // 17. LITERATURE & CULTURE (Essay 1)
  {
    id: "art-017",
    slug: "the-art-of-the-bookshelf",
    title: "The Architecture of Memory: Why We Curate Personal Libraries",
    subtitle: "A personal bookshelf is not furniture; it is an autobiography written in paper and spines.",
    excerpt: "Why the arrangement of our personal libraries reveals our past transformations, current passions, and the people we hope to become.",
    content: `
# The Architecture of Memory: Why We Curate Personal Libraries

To step into someone's living room and browse their bookshelf is to read their private diary with their permission. Every volume represents a specific era of curiosity, healing, or intellectual rebellion.
    `,
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200",
    category: "literature",
    tags: ["Literary Culture", "Personal Libraries", "Book Collecting"],
    authorName: "Elena Vance",
    authorRole: "Senior Literary Essayist",
    publishedAt: "2026-06-30",
    readingTimeMinutes: 5,
    isFeatured: false,
    status: "published",
  },

  // 18. LITERATURE & CULTURE (Essay 2)
  {
    id: "art-018",
    slug: "why-we-reread-classics",
    title: "The Books That Change When We Do: The Profound Gift of Re-Reading",
    subtitle: "Why returning to 'The Great Gatsby', 'Jane Eyre', or '1984' in your thirties is a completely different novel than reading it at eighteen.",
    excerpt: "Books do not change as they sit on our shelves. We do. Exploring the emotional revelation of meeting an old story with new eyes.",
    content: `
# The Books That Change When We Do: The Profound Gift of Re-Reading

When you open a classic novel for the second or third time across decades, you are not simply re-experiencing the plot; you are taking the measure of the distance you have traveled as a human being.
    `,
    coverImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200",
    category: "literature",
    tags: ["Classics", "Re-Reading", "Literary Reflection"],
    authorName: "Elena Vance",
    authorRole: "Senior Literary Essayist",
    publishedAt: "2026-06-25",
    readingTimeMinutes: 5,
    isFeatured: false,
    status: "published",
  },

  // 19. LITERATURE & CULTURE (Essay 3)
  {
    id: "art-019",
    slug: "the-subtle-magic-of-annotating-books",
    title: "Marginalia and Memory: In Defense of Writing in Your Books",
    subtitle: "Dog-ears, pencil underlines, and margin notes as a living dialogue between reader and author across time.",
    excerpt: "Why annotating your books transforms passive reading into an active co-creation of meaning.",
    content: `
# In Defense of Writing in Your Books

Some readers preserve their volumes like museum relics. Others treat them like maps to be annotated, bracketed, and debated. Here is why marginalia is an act of deep reverence.
    `,
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200",
    category: "literature",
    tags: ["Marginalia", "Reading Habits", "Book Collecting"],
    authorName: "Marcus Thorne",
    authorRole: "Editorial Director",
    publishedAt: "2026-06-20",
    readingTimeMinutes: 4,
    isFeatured: false,
    status: "published",
  },

  // 20. PUBLISHING (Industry 1)
  {
    id: "art-020",
    slug: "demystifying-the-arc-campaign",
    title: "The Anatomy of an ARC Campaign: How Pre-Release Reviews Fuel Launch Day",
    subtitle: "Why Advance Reader Copies are the single most critical asset in modern author marketing.",
    excerpt: "Everything authors need to know about ARC distribution, reviewer matching, Goodreads momentum, and generating authentic social proof before release.",
    content: `
# The Anatomy of an ARC Campaign

No book should step out into the world on publication day in total silence. An Advance Reader Copy (ARC) campaign builds the initial wave of social proof, genuine ratings, and reader enthusiasm.

---

## 4 Keys to an Effective ARC Tour

1. **Genre-Specific Reader Matching:** Never distribute fantasy to thrill-seekers or vice versa.
2. **Clear Ethical Guidelines:** Honest reviews only—authenticity always beats manufactured praise.
3. **Structured Timelines:** Staggering reviews across release week to maximize Amazon and Goodreads algorithms.
4. **Community Engagement:** Encouraging reviewers to tag quotes and aesthetic photo flat-lays.
    `,
    coverImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200",
    category: "publishing",
    tags: ["ARC Tours", "Author Marketing", "Publishing Guide"],
    authorName: "Abhay",
    authorRole: "Head Strategist",
    publishedAt: "2026-06-15",
    readingTimeMinutes: 6,
    isFeatured: false,
    status: "published",
  },

  // 21. PUBLISHING (Industry 2)
  {
    id: "art-021",
    slug: "traditional-vs-indie-publishing-in-2026",
    title: "Traditional, Hybrid, or Indie? The Pragmatic Guide for Today’s Author",
    subtitle: "Breaking down the real tradeoffs in creative control, royalties, distribution speed, and marketing obligations.",
    excerpt: "The publishing landscape is no longer binary. A transparent breakdown of modern publishing models to help you choose the right path for your literary career.",
    content: `
# Traditional, Hybrid, or Indie? The Pragmatic Guide for Today’s Author

Every author’s goals, timeline, and risk tolerance are unique. Understanding the concrete differences in royalties, intellectual property control, and marketing workload is essential before signing any contract.
    `,
    coverImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200",
    category: "publishing",
    tags: ["Publishing Models", "Author Career", "Industry Insights"],
    authorName: "Elena Vance",
    authorRole: "Senior Literary Essayist",
    publishedAt: "2026-06-10",
    readingTimeMinutes: 6,
    isFeatured: false,
    status: "published",
  },

  // 22. PUBLISHING (Industry 3)
  {
    id: "art-022",
    slug: "the-backlist-revival-strategy",
    title: "The Goldmine on Your Shelf: How to Breathe New Life into Your Backlist",
    subtitle: "Why older titles often have more profit potential than new releases when given updated hooks and targeted reader blitzes.",
    excerpt: "Most authors abandon a book after release month. Discover how backlist revivals, price promotions, and fresh visual assets can generate reliable passive revenue for years.",
    content: `
# The Goldmine on Your Shelf: How to Breathe New Life into Your Backlist

A book’s lifespan is not measured in weeks. With strategic cover refreshes, metadata optimization, and targeted community tours, older books can experience resurgence that rivals their initial launch.
    `,
    coverImage: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1200",
    category: "publishing",
    tags: ["Backlist Marketing", "Author Strategy", "Long-Term Growth"],
    authorName: "Abhay",
    authorRole: "Head Strategist",
    publishedAt: "2026-06-05",
    readingTimeMinutes: 5,
    isFeatured: false,
    status: "published",
  },

  // 23. BOOK MARKETING (Strategy 1)
  {
    id: "art-023",
    slug: "the-hook-framework-for-bookstagram",
    title: "Visual Hooks and Micro-Tropes: Crafting Bookstagram Assets That Convert",
    subtitle: "The science of stopping the scroll: how aesthetic video teasers and character quotes turn passive scrollers into purchasers.",
    excerpt: "Learn how to distill 400 pages of manuscript into a 7-second visual hook that triggers instant reader curiosity on Instagram and TikTok.",
    content: `
# Visual Hooks and Micro-Tropes: Crafting Bookstagram Assets That Convert

Readers on visual platforms do not browse by plot summary; they browse by emotional tropes, atmospheric aesthetics, and irresistible dilemmas.

---

## The 3 Elements of a High-Converting Hook

1. **The Core Dynamic / Trope:** (e.g., *Enemies-to-lovers in a subterranean archive*).
2. **The Visual Atmosphere:** High-contrast color grading, cinematic lighting, and tactile page turns.
3. **The Unresolved Question:** A single sentence that leaves the viewer needing to know what happened next.
    `,
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200",
    category: "book-marketing",
    tags: ["Bookstagram Marketing", "Social Media", "Author Growth"],
    authorName: "Marcus Thorne",
    authorRole: "Editorial Director",
    publishedAt: "2026-05-28",
    readingTimeMinutes: 5,
    isFeatured: false,
    status: "published",
  },

  // 24. BOOK MARKETING (Strategy 2)
  {
    id: "art-024",
    slug: "building-an-author-newsletter-ecosystem",
    title: "The Sovereign Platform: Why Every Author Must Own Their Reader List",
    subtitle: "Algorithms change constantly; a direct subscriber relationship is forever. The step-by-step guide to your first 1,000 literary subscribers.",
    excerpt: "Social media is rented land. Discover how to create an engaging, story-driven author newsletter that turns casual readers into loyal superfans.",
    content: `
# The Sovereign Platform: Why Every Author Must Own Their Reader List

When you post on social media, algorithms decide whether your fans see your news. When you send a newsletter, your words land directly in their personal inbox.

---

## 3 Pillars of a Thriving Author Newsletter

* **Lead Magnets That Matter:** Offer bonus chapters, character origin stories, or exclusive annotated scenes.
* **Storytelling Over Selling:** Share your creative vulnerabilities, reading recommendations, and personal essays rather than constant sales pitches.
* **Consistent Rhythm:** A monthly or bi-weekly dispatch builds anticipating habits without overwhelming your audience.
    `,
    coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200",
    category: "book-marketing",
    tags: ["Author Newsletter", "Direct to Reader", "Email Marketing"],
    authorName: "Abhay",
    authorRole: "Head Strategist",
    publishedAt: "2026-05-20",
    readingTimeMinutes: 5,
    isFeatured: false,
    status: "published",
  },

  // 25. INTERVIEWS (Interview 1)
  {
    id: "art-025",
    slug: "interview-with-top-bookstagram-creator",
    title: "Behind the Lens: A Conversation with Leading Bookstagram Curator @LitAesthetics",
    subtitle: "What bookish content creators look for in author outreach, ARC pitches, and aesthetic collaboration.",
    excerpt: "An insider look into what makes a bookstagrammer fall in love with a manuscript and how authors can build genuine, non-transactional relationships with book influencers.",
    content: `
# Behind the Lens: A Conversation with @LitAesthetics

With over 85,000 devoted followers, literary curator Clara shares the secrets of what makes a book flat-lay captivating and how authors can pitch reviewers with respect and grace.
    `,
    coverImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200",
    category: "interviews",
    tags: ["Creator Interview", "Influencer Marketing", "Bookstagram Community"],
    authorName: "Sarah Lin",
    authorRole: "Senior Editor",
    publishedAt: "2026-05-15",
    readingTimeMinutes: 5,
    isFeatured: false,
    status: "published",
  },
];
