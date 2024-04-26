import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";

import { getPostBySlug, getPosts } from "~/lib/data";
import PostImage from "./PostImage";

interface PostPageProps {
  params: { slug: string };
}

export const revalidate = 3600;

// Pre-generate static paths for all posts
export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      publishedTime: new Date(post.date).toISOString(),
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const publishedAt = new Date(post.date);
  const updatedAt = post._updatedAt ? new Date(post._updatedAt) : null;

  return (
    <article className="mx-auto w-full max-w-screen-md py-12 leading-7">
      <time
        dateTime={publishedAt.toISOString()}
        className="order-first flex items-center text-base text-zinc-500 "
      >
        <span className="h-4 w-0.5 rounded-full bg-zinc-300"></span>
        <span className="ml-3 font-medium">Published</span>
        <span className="ml-2">
          {Intl.DateTimeFormat("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }).format(publishedAt)}
        </span>
      </time>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
        {post.title}
      </h1>

      <figure className="bx-container-padding relative mb-14 mt-10 aspect-[3/2] sm:aspect-video">
        <Image
          className="bx-container h-full w-full bg-slate-100 object-cover text-center sm:rounded-xl"
          src={post.coverImage}
          alt={post.title}
          fill
        />
      </figure>

      <div className="prose mx-auto max-w-screen-sm font-default">
        <PortableText
          value={post.content}
          components={{
            types: { image: PostImage },
          }}
        />
      </div>

      {updatedAt ? (
        <footer className="mt-12 border-t py-4 text-sm text-zinc-500">
          <time dateTime={updatedAt.toISOString()}>
            <span>Last Updated</span>
            <span className="ml-2">
              {Intl.DateTimeFormat("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              }).format(updatedAt)}
            </span>
          </time>
        </footer>
      ) : null}
    </article>
  );
}
