import Image from "next/image";
import Nav from "./Nav";

type Header = {
  bgImage?: string;
  gradient?: string;
  fullscreen?: boolean;
};

export const Header: React.FC<Header> = ({ bgImage, gradient }) => {
  return (
    <header className="relative bg-indigo-dye">
      <figure className="absolute inset-0">
        {bgImage && (
          <Image src={bgImage} layout="fill" className="object-cover" />
        )}
      </figure>
      <div className="relative bg-gradient-to-r from-black/75 ">
        <Nav />
      </div>
    </header>
  );
};
