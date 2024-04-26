import { SunPattern } from "./Pattern";
import Container from "./Container";

type Header = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

const Header: React.FC<Header> = ({ title, subtitle, children }) => {
  return (
    <header className="relative bg-indigo-dye">
      <figure className="absolute inset-0 h-full w-full">
        <SunPattern className="object-cover" alt="" fill />
      </figure>

      <Container className="pb-6 pt-24">
        <div className="mx-auto max-w-prose py-8 text-center text-white">
          <h1 className="text-4xl font-semibold lg:text-5xl">{title}</h1>
          <p className="mt-8 text-lg text-gray-300">{subtitle}</p>
        </div>
        {children}
      </Container>
    </header>
  );
};

export default Header;
