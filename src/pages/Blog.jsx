import { Link } from "react-router-dom";
import Seo, { SITE_URL } from "../components/Seo";
import Breadcrumbs, { buildBreadcrumbSchema } from "../components/Breadcrumbs";

// Add future articles here as { slug, title, excerpt } and this page will
// list them automatically. Keeping this list empty until real articles are
// written avoids publishing placeholder or fake content.
export const BLOG_POSTS = [];

export default function Blog() {
  const breadcrumbItems = [{ label: "Home", to: "/" }, { label: "Blog" }];
  const structuredData = buildBreadcrumbSchema(breadcrumbItems, SITE_URL);

  return (
    <>
      <Seo
        title="Blog | BrightRise Academy"
        description="Articles and tips for parents on helping students succeed in Math, Science, English, and Coding, from BrightRise Academy."
        path="/blog"
        structuredData={structuredData}
      />

      <section className="page-head">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <h1>BrightRise Academy Blog</h1>
          <p>Helpful articles for parents on supporting their student's learning.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {BLOG_POSTS.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--ink-soft)" }}>
              We're working on our first articles — check back soon.
            </p>
          ) : (
            <div className="grid-flow">
              {BLOG_POSTS.map((post) => (
                <Link to={`/blog/${post.slug}`} className="card" key={post.slug}>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
