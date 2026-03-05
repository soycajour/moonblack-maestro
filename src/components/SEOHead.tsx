import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
}

const BASE_URL = "https://moonblackstudios.com";

function getCanonicalUrl(pathname: string): string {
  // Lowercase, remove trailing slash, no query params
  let clean = pathname.toLowerCase().replace(/\/+$/, "");
  if (clean === "") clean = "/";
  return clean === "/" ? BASE_URL + "/" : BASE_URL + clean;
}

const SEOHead = ({ title, description }: SEOHeadProps) => {
  const { pathname } = useLocation();
  const canonical = getCanonicalUrl(pathname);

  useEffect(() => {
    document.title = title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", description);
      document.head.appendChild(metaDesc);
    }

    // Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (linkCanonical) {
      linkCanonical.href = canonical;
    } else {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      linkCanonical.href = canonical;
      document.head.appendChild(linkCanonical);
    }

    // OG tags
    const ogTags: Record<string, string> = {
      "og:title": title,
      "og:description": description,
      "og:url": canonical,
    };
    Object.entries(ogTags).forEach(([property, content]) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    });

    // Twitter tags
    const twitterTags: Record<string, string> = {
      "twitter:title": title,
      "twitter:description": description,
    };
    Object.entries(twitterTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    });
  }, [title, description, canonical]);

  return null;
};

export default SEOHead;
