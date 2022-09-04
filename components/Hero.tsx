import ExportedImage from "next-image-export-optimizer";
import { useState } from "react";
import Container from "./Container";
import Nav from "./Nav";

type Header = {
  bgImage?: string;
  children: any;
};

const Hero: React.FC<Header> = ({ bgImage, children }) => {
  const [imageHasLoaded, setImageHasLoaded] = useState(false);

  return (
    <header className="relative bg-indigo-dye">
      <figure className="absolute inset-0 z-0">
        {bgImage && (
          <ExportedImage
            src={bgImage}
            onLoad={() => setImageHasLoaded(true)}
            layout="fill"
            className={`object-cover transition duration-1000 ${
              imageHasLoaded ? "opacity-100" : "opacity-0 "
            }`}
            loading="eager"
            alt="Hero Image"
          />
        )}
      </figure>
      <div className="relative bg-gradient-to-r from-black/90 lg:from-black/80  to-black/20 ">
        <Nav />
        <Container className={`relative z-0 py-10 animate-fade-in-up `}>
          {children}
        </Container>
      </div>
    </header>
  );
};

export default Hero;
