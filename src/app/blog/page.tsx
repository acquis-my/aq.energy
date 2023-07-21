import { type Metadata } from "next";
import Hero from "~/components/Hero";
import FeaturedPost from "./_components/FeaturedPost";
import PostCard from "./_components/PostCard";
import Container from "~/components/Container";

export const metadata: Metadata = {
  title: "The AQ Energy Blog",
  description: "The AQ Energy Blog",
};

const posts = [
  {
    title: "How to Choose the Right Solar Panel for Your Home",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.",
    slug: "how-to-choose-the-right-solar-panel-for-your-home",
    featuredImage: "https://picsum.photos/seed/1/800/600",
    postedAt: "2021-09-09",
  },
  {
    title: "How to Choose the Right Solar Panel for Your Business",
    description: "The AQ Energy Blog for Businesses",
    slug: "how-to-choose-the-right-solar-panel-for-your-business",
    featuredImage: "https://picsum.photos/seed/2/800/600",
    postedAt: "2021-09-09",
  },
  {
    title: "How to Choose the Right Solar Panel for Your Office Tower",
    description: "The AQ Energy Blog for Office Towers",
    slug: "how-to-choose-the-right-solar-panel-for-your-office-tower",
    featuredImage: "https://picsum.photos/seed/3/800/600",
    postedAt: "2021-09-09",
  },
];

export default function page() {
  const featuredPost = posts[0];

  return (
    <div className="bg-blue-50 relative">
      <Hero>
        <div className="flex flex-col py-10 lg:py-14 gap-y-12 text-white mb-14 px-2">
          <FeaturedPost post={featuredPost} />
        </div>
      </Hero>

      <Container className="relative grid lg:grid-cols-3 gap-4 lg:gap-8 pb-16 -mt-12 z-10">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Container>
    </div>
  );
}
