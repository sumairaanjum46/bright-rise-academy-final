import { useEffect } from "react";

export const SITE_URL = "https://www.brightriseacademy.com";
export const SITE_NAME = "BrightRise Academy";
// Existing brand mark, used as a fallback social-preview image until a
// dedicated 1200x630 image is added (see README "Manual steps still needed").
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo-full.jpg`;

function upsertMetaByName(name, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertMetaByProperty(property, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

const LD_JSON_ID = "route-structured-data";

function upsertStructuredData(data) {
  const existing = document.getElementById(LD_JSON_ID);
  if (existing) existing.remove();
  if (!data) return;

  const payload = Array.isArray(data) ? data : [data];
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = LD_JSON_ID;
  script.text = JSON.stringify(payload.length === 1 ? payload[0] : payload);
  document.head.appendChild(script);
}

/**
 * Sets per-route <title>, meta description, canonical URL, Open Graph /
 * Twitter tags, and optional JSON-LD structured data. Rendered once near the
 * top of every page component. Site-wide tags that never change (Organization
 * schema, default OG image, etc.) live statically in index.html instead, so
 * they're present even before this component runs.
 */
export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  structuredData = null,
  noindex = false,
}) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;

    if (title) document.title = title;
    upsertMetaByName("description", description);
    upsertMetaByName("robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:type", type);
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertMetaByProperty("og:site_name", SITE_NAME);
    upsertMetaByProperty("og:image", image);
    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", title);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:image", image);
    upsertCanonical(canonicalUrl);
    upsertStructuredData(structuredData);
  }, [title, description, path, image, type, structuredData, noindex]);

  return null;
}
