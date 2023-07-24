import { env } from "process";
import client from "../sanity/client";
import { urlForImage } from "../sanity/image";
import { type PortableTextBlock } from "@portabletext/types";

const postFields = `
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
`;

export interface Post {
  _id: string;
  title: string;
  coverImage: string;
  date: string;
  _updatedAt?: string;
  excerpt?: string;
  slug: string;
  content: PortableTextBlock[];
}

export async function getPosts() {
  const data = await client.fetch<Post[]>({
    query: `*[_type == "post"] | order(_createdAt desc) {
        ${postFields}
    }`,
    config: {
      next: { revalidate: 300 },
    },
  });

  return data.map((post) => {
    return {
      ...post,
      coverImage: urlForImage(post.coverImage),
    };
  });
}

export async function getPostBySlug(slug: string) {
  const post = await client.fetch<Post>({
    query: `*[_type == "post" && slug.current == $slug][0] {
        content,
        ${postFields}
    }`,
    params: { slug },
    config:
      env.NODE_ENV === "production"
        ? {
            next: { revalidate: 1800 },
          }
        : {
            next: {
              revalidate: 0,
            },
          },
  });

  if (Object.keys(post).length === 0) return null;

  return {
    ...post,
    coverImage: urlForImage(post.coverImage),
  };
}
