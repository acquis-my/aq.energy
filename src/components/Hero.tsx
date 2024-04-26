import type { StaticImageData } from "next/image";
import AnimatedImage from "./AnimatedImage";
import Container from "./Container";

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
            className="object-cover"
            priority
            fill
          />
        )}
      </figure>
      <div className="relative bg-gradient-to-r from-black/70 to-black/30 pt-20 md:via-black/25 lg:via-black/25">
        {children ? (
          <Container className={`relative z-0 animate-fade-in-up py-10 `}>
            {children}
          </Container>
        ) : null}
      </div>
    </header>
  );
};

export default Hero;
