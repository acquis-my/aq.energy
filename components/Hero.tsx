import Image, { StaticImageData } from "next/image";
import Container from "./Container";
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
        <Container className="py-10">{children}</Container>
      </div>
    </header>
  );
};

export default Hero;
