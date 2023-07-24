import Hero from "~/components/Hero";
import Container from "~/components/Container";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <Hero />
      <Container>{children}</Container>
    </div>
  );
}
