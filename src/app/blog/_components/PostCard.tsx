import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: {
    title: string;
    description: string;
    slug: string;
    featuredImage: string;
    postedAt: string;
  };
}

export default function PostCard({ post }: PostCardProps) {
  const { title, description, slug, featuredImage, postedAt } = post;
  return (
    <Link href={`/blog/${slug}`}>
      <article className="flex flex-col gap-4 bg-white p-2 rounded-2xl overflow-hidden shadow hover:shadow-lg transition ease-in-out h-full border-slate-200">
        <figure className="relative aspect-[3/2]">
          <Image
            className="object-cover h-full w-full rounded-xl bg-slate-100"
            src={featuredImage}
            alt={title}
            fill
            unoptimized
          />
        </figure>

        <div className="flex flex-col gap-2 px-2 lg:px-6 py-3">
          <h2 className="text-2xl font-semibold mb-2 capitalize">{title}</h2>
          <p className="text-sm md:text-base text-gray-500 line-clamp-3 font-medium">
            {description}
          </p>
        </div>

        <div className="flex flex-row gap-4 px-2 lg:px-4 pb-2 lg:pb-3 mt-auto justify-between font-medium">
          <span className="text-sm md:text-base text-cyber-yellow ">
            Read more &rarr;
          </span>
          <span className="text-sm md:text-base text-gray-500 ">
            {Intl.DateTimeFormat("en-GB", {
              day: "numeric",
              year: "numeric",
              month: "short",
            }).format(new Date(postedAt))}
          </span>
        </div>
      </article>
    </Link>
  );
}
