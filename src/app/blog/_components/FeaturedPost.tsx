import Link from "next/link";
import AnimatedImage from "~/components/AnimatedImage";

type Post =
  | {
      title: string;
      description: string;
      slug: string;
      featuredImage: string;
      postedAt: string;
    }
  | undefined;

export default function FeaturedPost({ post }: { post: Post }) {
  if (!post) return null;

  const { title, description, slug, featuredImage, postedAt } = post;
  return (
    <Link href={`/blog/${slug}`}>
      <article className="flex flex-row gap-24 items-center justify-between w-full">
        <aside className="w-full max-w-prose">
          <h2 className="text-3xl font-semibold mb-4 capitalize">{title}</h2>
          <p className="text-sm md:text-base text-gray-500 line-clamp-3 font-medium">
            {description}
          </p>
          <div className="flex flex-row gap-4 mt-8 justify-between">
            <span className="text-sm md:text-base text-cyber-yellow">
              Read more &rarr;
            </span>
            <span className="text-sm md:text-base text-gray-500 font-medium">
              {postedAt}
            </span>
          </div>
        </aside>
        <figure className="hidden lg:block relative w-full h-96">
          <AnimatedImage
            className="object-cover h-full w-full rounded-xl bg-slate-100"
            src={featuredImage}
            alt={title}
            fill
            unoptimized
          />
        </figure>
      </article>
    </Link>
  );
}
