import Link from "next/link";
import Image from "next/image";
import logo from "../public/aq-logo-primary.png";

const Logo = () => {
  return (
    <figure className="h-12 w-12">
      <Link href="/">
        <a>
          <Image src={logo} />
        </a>
      </Link>
    </figure>
  );
};

export default Logo;
