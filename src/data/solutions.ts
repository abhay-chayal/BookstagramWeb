export interface WorkflowStep {
  id: string;
  stepNumber: number;
  title: string;
  description?: string;
}

export interface Solution {
  id: string;
  category: string;
  categoryTitle: string;
  name: string;
  icon: string;
  purpose: string;
  problemSolved: string;
  deliverables: {
    category: string;
    items: string[];
  }[];
  workflow: WorkflowStep[];
  integration: string;
}

export const solutions: Solution[] = [
  {
    id: "book-reviews",
    category: "credibility",
    categoryTitle: "Establish Your Credibility",
    name: "Book Reviews",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    purpose: "Book reviews are one of the core services offered by Bookstagram Club. We feature books and create review-based promotional content around them to build social proof and introduce the book to new readers.",
    problemSolved: "Addresses the lack of social proof and reader reactions. A great book without reviews can easily get buried; we provide the critical early feedback needed to drive curiosity.",
    deliverables: [
      {
        category: "Content",
        items: ["Professional Book Review", "Rating System", "Selected Quotes", "Reader Appeal Summary"]
      },
      {
        category: "Promotion",
        items: ["Dedicated Review Page on Bookstagram Club", "Social Media Quotables", "Integration into wider campaigns"]
      }
    ],
    workflow: [
      { id: "w1", stepNumber: 1, title: "Discover", description: "You submit your book details and promotional goals." },
      { id: "w2", stepNumber: 2, title: "Connect & Plan", description: "We determine the appropriate promotional angle and understand what makes the book interesting." },
      { id: "w3", stepNumber: 3, title: "Read & Review", description: "Our team reads and crafts a professional review highlighting story, themes, and emotional hooks." },
      { id: "w4", stepNumber: 4, title: "Publish", description: "The review is published as a dedicated, beautiful editorial page." }
    ],
    integration: "Reviews act as the foundation for social proof. They are incorporated into Instagram Promotion, Newsletter features, and Author Website content."
  },
  {
    id: "instagram-promotion",
    category: "visibility",
    categoryTitle: "Grow Your Visibility",
    name: "Instagram Book Promotion",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    purpose: "We put books in front of audiences interested in discovering new books and authors through professionally planned Instagram promotional content.",
    problemSolved: "Helps authors who don't know what to post or lack an existing audience. We generate visibility via our established channels rather than relying on the author's personal audience.",
    deliverables: [
      {
        category: "Feed Posts",
        items: ["Dedicated book focus", "Premise highlights", "Character quotes", "Purchase information"]
      },
      {
        category: "Instagram Stories",
        items: ["Repeated exposure", "Book descriptions", "Launch announcements", "Call-to-action links"]
      },
      {
        category: "Instagram Reels",
        items: ["Dynamic short-form video", "Atmosphere & themes", "Emotional hooks", "Aesthetic showcases"]
      }
    ],
    workflow: [
      { id: "w1", stepNumber: 1, title: "Strategy", description: "Identify the most compelling angles (Discovery, Story, Emotion, etc)." },
      { id: "w2", stepNumber: 2, title: "Asset Creation", description: "Develop stunning graphics, reels, and engaging captions." },
      { id: "w3", stepNumber: 3, title: "Campaign Execution", description: "Publish across feed, stories, and reels strategically." },
      { id: "w4", stepNumber: 4, title: "Engagement", description: "Encourage readers to stop scrolling, save, and visit the book page." }
    ],
    integration: "Instagram promotion utilizes assets created in Promotional Graphics and Cinematic Trailers, driving traffic to your Author Website and Amazon."
  },
  {
    id: "promotional-graphics",
    category: "credibility",
    categoryTitle: "Establish Your Credibility",
    name: "Promotional Graphics",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
    purpose: "Create custom, visually compelling promotional graphics for authors and their books to ensure a professional aesthetic across all channels.",
    problemSolved: "Prevents books from looking amateurish online. High-quality visuals are essential for catching a reader's eye in a crowded digital space.",
    deliverables: [
      {
        category: "Custom Designs",
        items: ["Book cover showcases", "Quote graphics", "Character-focused graphics", "Promotional banners"]
      },
      {
        category: "Campaign Assets",
        items: ["Book launch graphics", "Announcement graphics", "Social media templates"]
      }
    ],
    workflow: [
      { id: "w1", stepNumber: 1, title: "Visual Planning", description: "Analyze the book cover, genre, and themes to determine aesthetic direction." },
      { id: "w2", stepNumber: 2, title: "Design", description: "Create a suite of customized, high-end graphics." },
      { id: "w3", stepNumber: 3, title: "Refinement", description: "Ensure visuals align with the author's brand and campaign goals." },
      { id: "w4", stepNumber: 4, title: "Delivery", description: "Provide ready-to-post graphics for all required platforms." }
    ],
    integration: "Feeds directly into Instagram Promotion and Newsletter Promotion. Maintains visual consistency with the Author Website."
  },
  {
    id: "cinematic-trailers",
    category: "engagement",
    categoryTitle: "Drive Deep Engagement",
    name: "Cinematic Book Trailers",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',
    purpose: "Translate the feeling of a text-based product into a highly engaging visual format. The objective is to create curiosity and convey emotion rather than simply summarize the book.",
    problemSolved: "Solves the challenge of marketing books on video-first platforms. Captures attention instantly by communicating atmosphere, suspense, or romance visually.",
    deliverables: [
      {
        category: "Video Production",
        items: ["Cinematic Book Trailer", "Atmospheric Reels", "Custom Soundscapes", "Motion Typography"]
      },
      {
        category: "Format Optimization",
        items: ["9:16 vertical video for Reels/TikTok", "16:9 widescreen for YouTube/Website"]
      }
    ],
    workflow: [
      { id: "w1", stepNumber: 1, title: "Concepting", description: "Identify the emotional core and tension of the story." },
      { id: "w2", stepNumber: 2, title: "Storyboarding", description: "Plan the visual sequence, quotes, and pacing." },
      { id: "w3", stepNumber: 3, title: "Production", description: "Compile stunning cinematic footage and audio." },
      { id: "w4", stepNumber: 4, title: "Editing", description: "Cut the trailer to maximize engagement and emotional resonance." }
    ],
    integration: "Trailers are a powerful anchor for Instagram Promotion and Website Book Promotion, increasing time-on-page and conversion rates."
  },
  {
    id: "author-website",
    category: "brand-building",
    categoryTitle: "Build Long-Term Value",
    name: "Author Website Development",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    purpose: "Establish a professional online presence that functions as the author's central online home, connecting readers to books, newsletters, and the author brand.",
    problemSolved: "Frees authors from relying entirely on social media algorithms. Provides a centralized, professional hub for readers, media, and bookstores to find comprehensive information.",
    deliverables: [
      {
        category: "Core Pages",
        items: ["Homepage", "About the Author", "Individual Book Pages", "Blog / Articles", "Contact Page"]
      },
      {
        category: "Features",
        items: ["Newsletter Integration", "Retailer Purchase Links", "Review Showcases", "Responsive Design"]
      }
    ],
    workflow: [
      { id: "w1", stepNumber: 1, title: "Architecture", description: "Plan the site structure and user journey." },
      { id: "w2", stepNumber: 2, title: "Design", description: "Create a visual identity that balances creativity with modern marketing." },
      { id: "w3", stepNumber: 3, title: "Development", description: "Build a fast, mobile-friendly, premium website." },
      { id: "w4", stepNumber: 4, title: "Launch", description: "Deploy the site as the central hub of your digital ecosystem." }
    ],
    integration: "The ultimate destination for all other promotional efforts. Instagram, Newsletters, and Reviews should all eventually funnel traffic back to your Author Website."
  },
  {
    id: "website-promotion",
    category: "discoverability",
    categoryTitle: "Increase Discoverability",
    name: "Website Book Promotion",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    purpose: "Provide dedicated visibility through the Bookstagram Club platform itself, acting as a discovery engine outside of social media.",
    problemSolved: "Creates additional discovery points beyond Amazon search and word of mouth, placing your book in front of our established audience of readers.",
    deliverables: [
      {
        category: "Platform Exposure",
        items: ["Dedicated Book Page", "Featured Books Placement", "Promotional Articles", "Book Discovery Engine listings"]
      }
    ],
    workflow: [
      { id: "w1", stepNumber: 1, title: "Ingestion", description: "We collect your book cover, description, genre, and purchase links." },
      { id: "w2", stepNumber: 2, title: "Page Creation", description: "We build a dedicated, high-converting book page on our platform." },
      { id: "w3", stepNumber: 3, title: "Feature Placement", description: "Your book is highlighted in relevant genres and recommendations." }
    ],
    integration: "Works hand-in-hand with Book Reviews and Author Features. Drives direct traffic to your purchase links."
  },
  {
    id: "newsletter-promotion",
    category: "discoverability",
    categoryTitle: "Increase Discoverability",
    name: "Newsletter Promotion",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    purpose: "Reach readers directly in their inbox. Newsletter exposure provides another highly targeted promotional channel to reach readers outside of social media.",
    problemSolved: "Bypasses social media algorithms completely. Guarantees your book is delivered directly to an engaged audience of eager readers.",
    deliverables: [
      {
        category: "Newsletter Features",
        items: ["Dedicated Author Spotlights", "New Release Announcements", "Book Recommendations", "Campaign Highlights"]
      }
    ],
    workflow: [
      { id: "w1", stepNumber: 1, title: "Curation", description: "Select the most compelling quotes and hooks for the email format." },
      { id: "w2", stepNumber: 2, title: "Drafting", description: "Write persuasive copy designed to generate clicks and interest." },
      { id: "w3", stepNumber: 3, title: "Distribution", description: "Send to our highly engaged reader mailing list." }
    ],
    integration: "Often serves as the critical 'Call to Action' phase of a broader Book Launch or Pre-Order campaign."
  },
  {
    id: "editorial-support",
    category: "strategy",
    categoryTitle: "Prepare Your Book",
    name: "Editorial & Manuscript Support",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M9 7h7M9 11h5"/></svg>',
    purpose: "We work with authors on the manuscript itself — before it becomes a published book. This covers editorial feedback and refinement, so the book readers eventually meet is the strongest version of itself.",
    problemSolved: "Promotion can only carry a book so far if the book is not ready. Editorial issues that go unaddressed before publication tend to surface later in reviews, where they are far more costly.",
    deliverables: [
      {
        category: "Editorial",
        items: ["Developmental feedback", "Structural & pacing notes", "Copyediting", "Proofreading"]
      },
      {
        category: "Market Readiness",
        items: ["Genre & reader-fit assessment", "Blurb and book description", "Opening-pages review", "Title & positioning input"]
      }
    ],
    workflow: [
      { id: "w1", stepNumber: 1, title: "Assess", description: "We review the manuscript and agree what level of editorial work it actually needs." },
      { id: "w2", stepNumber: 2, title: "Edit", description: "We carry out the agreed editorial pass and return clear, actionable notes." },
      { id: "w3", stepNumber: 3, title: "Refine", description: "You revise, and we review the changes where a second pass is included." },
      { id: "w4", stepNumber: 4, title: "Ready", description: "The manuscript moves forward to publication and promotional planning." }
    ],
    integration: "Runs directly into Full-Lifecycle Launch Strategy — what we learn about the book editorially shapes how it is later positioned and promoted."
  },
  {
    id: "launch-strategy",
    category: "strategy",
    categoryTitle: "Plan Your Launch",
    name: "Full-Lifecycle Launch Strategy",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M5 9l7-7 7 7"/><circle cx="12" cy="16" r="3"/></svg>',
    purpose: "We support a book at whatever stage it is in — manuscript, pre-publication, launch week, or long after release. Rather than treating promotion as something that starts on release day, we build a promotional plan appropriate to where your book actually is right now.",
    problemSolved: "Most authors only think about marketing once the book is already published, by which point the most valuable window — building anticipation before release — has already passed. Coming in earlier gives a book far more room to find its readers.",
    deliverables: [
      {
        category: "Positioning",
        items: ["Genre & comp-title positioning", "Target reader profile", "Core promotional angles", "Key messaging and hooks"]
      },
      {
        category: "Campaign Plan",
        items: ["Stage-appropriate roadmap", "Pre-launch build-up plan", "Launch week schedule", "Post-launch sustain plan"]
      }
    ],
    workflow: [
      { id: "w1", stepNumber: 1, title: "Assess", description: "We establish exactly what stage your book is at and what is realistically achievable from here." },
      { id: "w2", stepNumber: 2, title: "Position", description: "We define the genre positioning, target readership, and the angles that make this book compelling." },
      { id: "w3", stepNumber: 3, title: "Plan", description: "We map a promotional timeline built around your release date and goals." },
      { id: "w4", stepNumber: 4, title: "Execute", description: "The plan feeds directly into content creation and campaign delivery." }
    ],
    integration: "This is the foundation every other service builds on. Positioning decided here shapes the Instagram Promotion, Promotional Graphics, and Author Website that follow."
  },
  {
    id: "ai-tech-solutions",
    category: "technology",
    categoryTitle: "Technology & Data",
    name: "AI & Tech Solutions",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>',
    purpose: "We build custom software, AI integrations, and data pipelines for bookstores, publishers, and book businesses — helping them track sales, understand their data, and apply AI meaningfully to their operations.",
    problemSolved: "Book businesses often run on spreadsheets and disconnected tools, with no clear view of what is actually selling or why. We turn that scattered data into systems that support real decisions.",
    deliverables: [
      {
        category: "Software & Data",
        items: ["Custom software development", "Sales tracking dashboards", "Data pipelines & integrations", "Inventory and catalogue systems"]
      },
      {
        category: "AI Integration",
        items: ["AI-assisted analytics", "Recommendation systems", "Workflow automation", "Custom AI tooling"]
      }
    ],
    workflow: [
      { id: "w1", stepNumber: 1, title: "Discovery", description: "We map your current systems, data sources, and the decisions you are trying to make." },
      { id: "w2", stepNumber: 2, title: "Scope", description: "We define a practical solution and agree on scope, timeline, and cost." },
      { id: "w3", stepNumber: 3, title: "Build", description: "We develop the software, pipeline, or AI integration." },
      { id: "w4", stepNumber: 4, title: "Handover", description: "We deploy, document, and support the system in production." }
    ],
    integration: "Operates alongside our promotional work. Bookstores and publishers can engage us for technology alone, without any marketing service."
  },
  {
    id: "author-features",
    category: "brand-building",
    categoryTitle: "Build Long-Term Value",
    name: "Author Features",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    purpose: "Provide dedicated promotional attention to the author themselves, introducing their writing journey, inspiration, and upcoming releases to build a long-term brand.",
    problemSolved: "Shifts the focus from promoting a single book to building a recognizable Author Brand, ensuring readers stick around for your future releases.",
    deliverables: [
      {
        category: "Author Spotlights",
        items: ["In-depth Interviews", "Writing Journey Profiles", "Genre Spotlights", "Author Profile Page"]
      }
    ],
    workflow: [
      { id: "w1", stepNumber: 1, title: "Interview", description: "We ask thought-provoking questions about your process and inspiration." },
      { id: "w2", stepNumber: 2, title: "Editorial", description: "We craft a compelling narrative around your author persona." },
      { id: "w3", stepNumber: 3, title: "Publication", description: "The feature is published and promoted across our channels." }
    ],
    integration: "Elevates all other services. When readers connect with an Author Feature, they are more likely to engage with Book Reviews and Instagram Promotions for that author."
  }
];

export function getSolutionById(id: string): Solution | undefined {
  return solutions.find(s => s.id === id);
}

export function getAllSolutions(): Solution[] {
  return solutions;
}
