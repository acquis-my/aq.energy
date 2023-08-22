import Image from "next/image";
import Link from "next/link";
import { type Post } from "~/lib/data";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { title, excerpt, slug, coverImage, date } = post;
  const dateTime = new Date(date);

  return (
    <Link href={`/blog/${slug}`}>
      <article className="flex flex-col gap-4 bg-white lg:p-2 rounded-2xl overflow-hidden lg:shadow lg:hover:shadow-lg transition ease-in-out h-full lg:border-slate-200">
        <figure className="relative aspect-[3/2]">
          <Image
            className="object-cover h-full w-full rounded-xl bg-slate-100"
            src={coverImage}
            alt={title}
            fill
          />
        </figure>

        <div className="flex flex-col gap-2 px-2 lg:px-6 py-3">
          <h2 className="text-2xl font-semibold mb-2 capitalize">{title}</h2>
          <p className="text-sm md:text-base text-gray-500 line-clamp-3 font-medium">
            {excerpt}
          </p>
        </div>

        <div className="flex flex-row gap-4 px-2 lg:px-4 pb-2 lg:pb-3 mt-auto justify-between font-medium">
          <span className="text-sm md:text-base text-cyber-yellow ">
            Read more &rarr;
          </span>
          <time
            dateTime={dateTime.toISOString()}
            className="text-sm md:text-base text-gray-500 "
          >
            {Intl.DateTimeFormat("en-GB", {
              day: "numeric",
              year: "numeric",
              month: "short",
            }).format(dateTime)}
          </time>
        </div>
      </article>
    </Link>
  );
}
