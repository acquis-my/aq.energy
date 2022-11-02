import AnimatedImage from "./AnimatedImage";
import Container from "./Container";
import Nav from "./Nav";

type Header = {
  bgImage?: string;
  children: React.ReactNode;
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
            layout="fill"
            className="object-cover"
          />
        )}
      </figure>
      <div className="relative bg-gradient-to-r from-black/70 to-black/30 md:from-black/60 md:via-black/40 lg:to-transparent">
        <Nav />
        <Container className={`relative z-0 py-10 animate-fade-in-up `}>
          {children}
        </Container>
      </div>
    </header>
  );
};

export default Hero;
