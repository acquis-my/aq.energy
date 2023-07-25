import Hero from "~/components/Hero";
import Container from "~/components/Container";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-zinc-50">
      <Hero />
      <Container>{children}</Container>
    </div>
  );
}
