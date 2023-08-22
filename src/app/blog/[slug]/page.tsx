import Image from "next/image";
import PostImage from "./PostImage";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { getPostBySlug } from "~/lib/data";
import { type Metadata } from "next";

interface PostPageProps {
  params: { slug: string };
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
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: "article",
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
    <article className="max-w-screen-md mx-auto py-12 w-full leading-7">
      <time
        dateTime={publishedAt.toISOString()}
        className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
      >
        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
        <span className="ml-3 font-medium">Published</span>
        <span className="ml-2">
          {Intl.DateTimeFormat("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }).format(publishedAt)}
        </span>
      </time>
      <h2 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        {post.title}
      </h2>

      <figure className="relative aspect-[3/2] sm:aspect-video mt-10 mb-14 bx-container-padding">
        <Image
          className="object-cover h-full w-full text-center sm:rounded-xl bx-container bg-slate-100"
          src={post.coverImage}
          alt={post.title}
          fill
        />
      </figure>

      <div className="font-default max-w-screen-sm mx-auto prose">
        <PortableText
          value={post.content}
          components={{
            types: { image: PostImage },
          }}
        />
      </div>

      {updatedAt ? (
        <footer className="text-sm text-zinc-400 border-t mt-12 py-4">
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
