import ExportedImage from "next-image-export-optimizer";
import { useState, useEffect } from "react";
import Container from "./Container";
import Nav from "./Nav";

type Header = {
  bgImage?: string;
  children: any;
};

const Hero: React.FC<Header> = ({ bgImage, children }) => {
  const [imageHasLoaded, setImageHasLoaded] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

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
        <Container
          className={`py-10 duration-700 delay-50 ${
            fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
          } `}
        >
          {children}
        </Container>
      </div>
    </header>
  );
};

export default Hero;
