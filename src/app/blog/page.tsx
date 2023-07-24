import { type Metadata } from "next";
import Hero from "~/components/Hero";
import FeaturedPost from "./_components/FeaturedPost";
import PostCard from "./_components/PostCard";
import Container from "~/components/Container";
import { getPosts } from "~/lib/data";

export const metadata: Metadata = {
  title: "The AQ Energy Blog",
  description: "The AQ Energy Blog",
};

export default async function page() {
  const [featuredPost, ...posts] = await getPosts();

  return (
    <div className="lg:bg-blue-50 relative">
      <Hero>
        <div className="flex flex-col py-10 lg:py-14 gap-y-12 text-white mb-14 px-1">
          <FeaturedPost post={featuredPost} />
        </div>
      </Hero>

      <Container className="relative grid lg:grid-cols-3 gap-6 pb-16 mt-12 lg:-mt-12 z-10">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </Container>
    </div>
  );
}
