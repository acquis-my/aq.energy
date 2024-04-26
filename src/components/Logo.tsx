import Link from "next/link";

import PrimaryLogo from "../../public/images/aq-logo-primary.png";
import SecondaryLogo from "../../public/images/aq-logo-secondary.png";
import AnimatedImage from "./AnimatedImage";

export default function Logo() {
  return (
    <figure className="h-10 w-10">
      <Link href="/">
        <AnimatedImage
          src={PrimaryLogo}
          alt="Acquis Logo"
          height={256}
          width={256}
          priority
        />
      </Link>
    </figure>
  );
}

export function LogoSecondary() {
  return (
    <figure className="w-40">
      <Link href="/">
        <AnimatedImage
          src={SecondaryLogo}
          alt="Acquis Logo"
          height={151}
          width={625}
          priority
        />
      </Link>
    </figure>
  );
}
