import { type MetadataRoute } from "next";
import { getPosts } from "~/lib/data";
import { navLinks } from "~/links";

const SITE_DOMAIN = "https://www.aq.energy" as const;

function withDomain(paths: TemplateStringsArray, ...values: string[]) {
  return `${SITE_DOMAIN}${String.raw(paths, ...values)}`;
}

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const mainPages = navLinks.map((link) => link.dest);

  const links = ["/", "/quote", "/faq", ...mainPages].map((url) => ({
    url: withDomain`${url}`,
    lastModified: new Date(),
  }));

  const blogPosts = await getPosts().then((r) =>
    r.map(({ slug, _updatedAt: updatedAt }) => ({
      url: withDomain`/blog/${slug}`,
      lastModified: updatedAt ? new Date(updatedAt) : undefined,
    }))
  );

  return [...links, ...blogPosts];
}
