import client from "../sanity/client";
import { urlForImage } from "../sanity/image";
import { type PortableTextBlock } from "@portabletext/types";

export interface Post {
  _id: string;
  title: string;
  coverImage: string;
  date: string;
  _updatedAt?: string;
  excerpt?: string;
  slug?: string;
  content?: PortableTextBlock[];
}

export async function getPosts() {
  const data = await client.fetch<Post[]>({
    query: `*[_type == "post"] | order(_createdAt desc) {
        _id,
        title,
        date,
        _updatedAt,
        excerpt,
        coverImage,
        "slug": slug.current,
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
