import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { getPostBySlug } from "~/lib/data";
import { type Metadata } from "next";
import Image from "next/image";

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
    <article className="mx-auto my-12 w-full prose prose-lg leading-wide">
      <h2 className="text-3xl lg:text-4xl mb-2">{post.title}</h2>
      <time
        dateTime={publishedAt.toISOString()}
        className="text-gray-500 text-sm font-medium"
      >
        {Intl.DateTimeFormat("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }).format(publishedAt)}
      </time>

      <figure className="relative  aspect-[3/2] sm:aspect-video mt-4 mb-6">
        <Image
          className="object-cover h-full w-full rounded-lg bg-slate-100"
          src={post.coverImage}
          alt={post.title}
          fill
        />
      </figure>

      <PortableText value={post.content} />

      {updatedAt ? (
        <div className="text-sm text-slate-500 border-t py-4">
          <time dateTime={updatedAt.toISOString()}>
            Updated{" "}
            {Intl.DateTimeFormat("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(updatedAt)}
          </time>
        </div>
      ) : null}
    </article>
  );
}
