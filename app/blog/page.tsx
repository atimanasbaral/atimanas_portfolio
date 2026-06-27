import Link from "next/link";
import { blogPosts } from "@/lib/data/blog";

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-20">
      <div className="mb-12">
        <p className="mb-2 text-xs uppercase tracking-widest text-steel-light">Dev Log</p>
        <h1 className="font-display text-5xl text-text-primary md:text-7xl">BLOG</h1>
        <p className="mt-4 max-w-2xl text-sm text-text-muted">
          Notes on quant ML, data engineering, and the builder journey. Full article pages arrive in a later phase.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-4">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-border bg-bg-surface p-6 transition-colors hover:border-accent-violet"
          >
            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-text-faint">
              <span className="rounded-full border border-border px-2 py-1 text-accent-cyan">{post.tag}</span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="font-display text-2xl text-text-primary">{post.title}</h2>
            <p className="mt-3 text-sm text-text-muted">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent-violet"
            >
              Read Article →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
