import { Link } from "react-router-dom";

/**
 * items: [{ label: "Home", to: "/" }, { label: "Math Tutoring" }]
 * The last item is rendered as plain text (current page), the rest as links.
 * Use buildBreadcrumbSchema() alongside this to feed the same trail into
 * JSON-LD BreadcrumbList structured data.
 */
export default function Breadcrumbs({ items }) {
  if (!items || items.length < 2) return null;

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label}>
              {isLast || !item.to ? (
                <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
              ) : (
                <Link to={item.to}>{item.label}</Link>
              )}
              {!isLast && <span className="breadcrumb-sep" aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Builds a schema.org BreadcrumbList matching the visible trail passed to
 * <Breadcrumbs items={...} />, so structured data never diverges from what a
 * visitor actually sees on the page.
 */
export function buildBreadcrumbSchema(items, siteUrl) {
  if (!items || items.length < 2) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.to ? `${siteUrl}${item.to === "/" ? "" : item.to}` : undefined,
    })),
  };
}
