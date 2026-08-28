"use client";

import { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { JOURNAL_CATEGORIES } from "@/data/journal";
import styles from "./page.module.css";

export default function NewArticlePage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("books");
  const [authorName, setAuthorName] = useState("Abhay");
  const [authorRole, setAuthorRole] = useState("Founder & Head Strategist");
  const [coverImage, setCoverImage] = useState("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200");
  const [tags, setTags] = useState("Books, Literature, Writing");
  const [content, setContent] = useState(`
# The Power of Great Narrative Hooks

Every great story begins with a question that the reader cannot ignore...

## Key Takeaways
* **Voice matters:** Hook the reader through authentic tone.
* **Stakes:** Clarify what is at risk in the opening scene.

> "A great first page is a promise kept across three hundred pages."
  `.trim());

  const [activeTab, setActiveTab] = useState<"write" | "preview">("write");
  const [status, setStatus] = useState<"draft" | "published">("published");
  const [isFeatured, setIsFeatured] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Auto-generate slug when title changes
  const handleTitleChange = (val: string) => {
    setTitle(val);
    const generated = val
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    setSlug(generated);
  };

  // Estimated reading time
  const readingTime = Math.max(1, Math.ceil(content.split(/\s+/).length / 200));

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 4000);
  };

  return (
    <div className={styles.editorContainer}>
      <header className={styles.header}>
        <div>
          <div className={styles.breadcrumbs}>
            <Link href="/admin/articles">&larr; Back to Articles</Link>
          </div>
          <h1 className={styles.title}>Create New Journal Article</h1>
        </div>

        <div className={styles.headerActions}>
          <button
            type="button"
            className={styles.secondaryBtn}
            onClick={() => setStatus("draft")}
          >
            Save Draft
          </button>
          <button
            type="button"
            className={styles.primaryBtn}
            onClick={handleSave}
          >
            Publish Article &rarr;
          </button>
        </div>
      </header>

      {isSaved && (
        <div className={styles.successNotification}>
          ✓ Article successfully published to the Bookstagram Club Journal archive!
        </div>
      )}

      <form className={styles.formGrid} onSubmit={handleSave}>
        {/* LEFT COLUMN: MAIN CONTENT & MARKDOWN */}
        <div className={styles.mainEditorCol}>
          <div className={styles.fieldGroup}>
            <label>Article Headline / Title</label>
            <input
              type="text"
              required
              placeholder="e.g. The Architecture of Deception: Mastering the Unreliable Narrator"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className={styles.titleInput}
            />
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.fieldGroup}>
              <label>URL Slug</label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.fieldGroup}>
              <label>Estimated Read Time</label>
              <input
                type="text"
                disabled
                value={`${readingTime} min read (${content.split(/\s+/).length} words)`}
                className={styles.inputDisabled}
              />
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label>Subtitle / Editorial Dek</label>
            <input
              type="text"
              placeholder="A compelling one-sentence hook expanding on the headline..."
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label>Short Excerpt (Used in Search &amp; Social Feeds)</label>
            <textarea
              rows={2}
              placeholder="2-3 sentence overview that appears on cards and search engine previews..."
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className={styles.textarea}
            />
          </div>

          {/* MARKDOWN EDITOR WITH TABS */}
          <div className={styles.markdownEditorBox}>
            <div className={styles.tabHeader}>
              <div className={styles.tabButtons}>
                <button
                  type="button"
                  className={`${styles.tabBtn} ${activeTab === "write" ? styles.activeTab : ""}`}
                  onClick={() => setActiveTab("write")}
                >
                  Markdown Source
                </button>
                <button
                  type="button"
                  className={`${styles.tabBtn} ${activeTab === "preview" ? styles.activeTab : ""}`}
                  onClick={() => setActiveTab("preview")}
                >
                  Live Visual Preview
                </button>
              </div>
              <span className={styles.tabHint}>Supports full GitHub Flavored Markdown</span>
            </div>

            {activeTab === "write" ? (
              <textarea
                rows={16}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className={styles.markdownInput}
                placeholder="Write your article in Markdown..."
              />
            ) : (
              <div className={styles.markdownPreview}>
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: METADATA & SETTINGS */}
        <div className={styles.sidebarCol}>
          <div className={styles.sidebarBox}>
            <h3>Publishing Settings</h3>

            <div className={styles.fieldGroup}>
              <label>Editorial Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={styles.select}
              >
                {JOURNAL_CATEGORIES.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label>Author Byline</label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label>Author Role</label>
              <input
                type="text"
                value={authorRole}
                onChange={(e) => setAuthorRole(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label>Cover Image URL</label>
              <input
                type="text"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                className={styles.input}
              />
              {coverImage && (
                <div className={styles.coverPreview}>
                  <img src={coverImage} alt="Cover preview" />
                </div>
              )}
            </div>

            <div className={styles.fieldGroup}>
              <label>Tags (Comma-separated)</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.checkboxGroup}>
              <label>
                <input
                  type="checkbox"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                />
                Mark as Lead Featured Story on Journal Homepage
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
