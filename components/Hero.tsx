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
