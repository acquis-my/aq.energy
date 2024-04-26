import { type Metadata } from "next";
import Hero from "~/components/Hero";
import FeaturedPost from "./_components/FeaturedPost";
import PostCard from "./_components/PostCard";
import Container from "~/components/Container";
import { getPosts } from "~/lib/data";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "The AQ Energy Blog",
  description: "The AQ Energy Blog",
};

export default async function page() {
  const posts = await getPosts();
  const featured = posts[0];

  return (
    <div className="relative lg:bg-blue-50">
      <Hero>
        <div className="mb-14 flex flex-col gap-y-12 px-1 py-10 text-white lg:py-14">
          <FeaturedPost post={featured} />
        </div>
      </Hero>

      <Container className="relative z-10 mt-12 grid gap-6 pb-16 lg:-mt-12 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </Container>
    </div>
  );
}
