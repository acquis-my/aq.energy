import Image, { StaticImageData } from "next/image";
import Nav from "./Nav";

type Header = {
  bgImage?: StaticImageData;
  children: any;
};

const Hero: React.FC<Header> = ({ bgImage, children }) => {
  return (
    <header className="relative bg-indigo-dye">
      <figure className="absolute inset-0">
        {bgImage && (
          <Image src={bgImage} layout="fill" className="object-cover" />
        )}
      </figure>
      <div className="relative bg-gradient-to-r from-black/75 ">
        <Nav />
        <section className="container px-5 lg:px-8 py-10 mx-auto">
          {children}
        </section>
      </div>
    </header>
  );
};

export default Hero;
