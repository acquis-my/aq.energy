import { type StaticImageData } from "next/image";
import AnimatedImage from "./AnimatedImage";
import Container from "./Container";
import Nav from "./Nav";

type Header = {
  bgImage?: string | StaticImageData;
  children?: React.ReactNode;
};

const Hero: React.FC<Header> = ({ bgImage, children }) => {
  return (
    <header className="relative bg-indigo-dye">
      <figure className="absolute inset-0 z-0">
        {bgImage && (
          <AnimatedImage
            src={bgImage}
            alt=""
            loading="eager"
            className="object-cover"
            fill
          />
        )}
      </figure>
      <div className="relative bg-gradient-to-r from-black/70 to-black/30 md:via-black/25 lg:via-black/25">
        <Nav />
        {children ? (
          <Container className={`relative z-0 py-10 animate-fade-in-up `}>
            {children}
          </Container>
        ) : null}
      </div>
    </header>
  );
};

export default Hero;
