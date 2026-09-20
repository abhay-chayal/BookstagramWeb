"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./page.module.css";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/admin";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.message || "Could not sign in.");
        return;
      }

      router.replace(from);
      router.refresh();
    } catch {
      setError("Could not reach the server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.card} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Editorial CMS</h1>
      <p className={styles.subtitle}>Sign in to manage editorial content.</p>

      {error && <div className={styles.error}>{error}</div>}

      <input
        type="text"
        required
        autoFocus
        autoComplete="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className={styles.input}
        aria-label="Admin username"
      />

      <input
        type="password"
        required
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className={styles.input}
        aria-label="Admin password"
      />

      <button type="submit" disabled={isSubmitting} className={styles.button}>
        {isSubmitting ? "Checking…" : "Sign In"}
      </button>
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<div className={styles.card}>Loading…</div>}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
