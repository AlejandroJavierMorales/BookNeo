import { siteConfig } from "../config/siteConfig";

export default function sitemap() {
  const baseUrl = siteConfig.url;

  /* const pages = ["", "/habitaciones", "/servicios", "/ubicacion", "/contacto"]; */
  const pages = [""];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1 : 0.8,
  }));
}