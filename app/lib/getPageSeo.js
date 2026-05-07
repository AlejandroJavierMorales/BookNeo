import { siteConfig } from "../../config/siteConfig";

export function getPageSeo(path) {
  const page = siteConfig.pages.find((p) => p.path === path);

  const seo = page?.seo || {};
  const defaults = siteConfig.seo || {};

  return {
    // 🧠 básicos
    title: seo.title || defaults.defaultTitle,
    description: seo.description || defaults.defaultDescription,
    keywords: seo.keywords || defaults.keywords || [],

    // 🤖 robots
    robots: seo.robots || {
      index: true,
      follow: true,
    },

    // 🔗 canonical
    alternates: {
      canonical: `${siteConfig.url}${seo.canonical || path}`,
    },

    // 🌍 Open Graph
    openGraph: {
      ...(seo.openGraph || {}),

      title: seo.openGraph?.title || seo.title || defaults.defaultTitle,
      description:
        seo.openGraph?.description ||
        seo.description ||
        defaults.defaultDescription,

      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      locale: "es_AR",
      type: "website",

      images: [
        {
          url:
            seo.openGraph?.image ||
            defaults.openGraph?.image ||
            "/images/logoBookNeo_slogan.webp",
          width: 1200,
          height: 630,
        },
      ],
    },

    // 🐦 Twitter
    twitter: {
      card: "summary_large_image",

      ...(seo.twitter || {}),

      title: seo.twitter?.title || seo.title,
      description: seo.twitter?.description || seo.description,

      images: [
        seo.twitter?.image ||
          seo.openGraph?.image ||
          "/images/logoBookNeo_slogan.webp",
      ],
    },

    // 🧠 extras opcionales (solo si existen)
    ...(seo.extra || {}),
  };
}