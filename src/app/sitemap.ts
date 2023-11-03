import { type MetadataRoute } from "next";
import { getPosts } from "~/lib/data";
import { navLinks } from "~/links";

type Sitemap = MetadataRoute.Sitemap;

const SITE_DOMAIN = "https://www.aq.energy" as const;
const excludedPaths = new Set(["/blog"]);

function withDomain(paths: TemplateStringsArray, ...values: string[]) {
  return `${SITE_DOMAIN}${String.raw(paths, ...values)}`;
}

export default async function Sitemap(): Promise<Sitemap> {
  const mainPages = navLinks
    .filter((l) => !excludedPaths.has(l.dest))
    .map((link) => ({
      url: withDomain`${link.dest}`,
      lastModified: new Date(),
      priority: 0.8,
    }));

  const blogPosts = await getPosts().then((r) =>
    r.map(({ slug, _updatedAt: updatedAt }) => ({
      url: withDomain`/blog/${slug}`,
      lastModified: updatedAt ? new Date(updatedAt) : undefined,
      priority: 0.64,
    }))
  );

  const links = [
    {
      url: withDomain`/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: withDomain`/quote`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: withDomain`/blog`,
      lastModified: new Date(),
      priority: 0.64,
    },
    {
      url: withDomain`/faq`,
      lastModified: new Date(),
      priority: 0.64,
    },
    ...mainPages,
    ...blogPosts,
  ].sort((a, b) => b.priority - a.priority) satisfies Sitemap;

  return links;
}
