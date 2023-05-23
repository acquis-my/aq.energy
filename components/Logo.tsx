import Link from "next/link";
import AnimatedImage from "./AnimatedImage";

import PrimaryLogo from "../public/images/aq-logo-primary.png";
import SecondaryLogo from "../public/images/aq-logo-secondary.png";

const Logo = () => {
  return (
    <figure className="h-10 w-10">
      <Link href="/">
        <AnimatedImage
          src={PrimaryLogo}
          alt="Acquis Logo"
          height={256}
          width={256}
          loading="eager"
        />
      </Link>
    </figure>
  );
};

export const LogoSecondary = () => {
  return (
    <figure className="w-40">
      <Link href="/">
        <AnimatedImage
          src={SecondaryLogo}
          alt="Acquis Logo"
          height={151}
          width={625}
          loading="eager"
        />
      </Link>
    </figure>
  );
};

export default Logo;
