import Hero from "~/components/Hero";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <Hero />
      {children}
    </div>
  );
}
