import Link from "next/link";
import AnimatedImage from "~/components/AnimatedImage";
import { type Post } from "~/lib/data";

export default function FeaturedPost({ post }: { post: Post | undefined }) {
  if (!post) return null;

  const { title, excerpt, slug, coverImage, date } = post;
  const dateTime = new Date(date);

  return (
    <Link href={`/blog/${slug}`}>
      <article className="flex flex-row gap-24 items-center justify-between w-full transition">
        <aside className="w-full max-w-prose flex flex-col mx-auto">
          <div className="text-sm lg:text-base inline-flex items-center gap-4 text-slate-400">
            <span>Featured</span>
            <span className="h-0.5 w-full bg-slate-700" />
            <time
              dateTime={dateTime.toISOString()}
              className="whitespace-nowrap"
            >
              {Intl.DateTimeFormat("en-GB", {
                day: "numeric",
                year: "numeric",
                month: "short",
              }).format(dateTime)}
            </time>
          </div>

          <h2 className="mt-2 text-3xl xl:text-4xl font-semibold mb-4 capitalize line-clamp-2">
            {title}
          </h2>
          <p className="lg:text-lg text-gray-400 line-clamp-3 font-medium">
            {excerpt}
          </p>
          <span className="mt-8 font-medium lg:text-lg text-cyber-yellow whitespace-nowrap">
            Read more &rarr;
          </span>
        </aside>
        <figure className="hidden lg:block relative w-full h-96">
          <AnimatedImage
            className="object-cover h-full w-full rounded-xl bg-slate-100"
            src={coverImage}
            alt={title}
            fill
          />
        </figure>
      </article>
    </Link>
  );
}
