import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

const Logo = () => {
  return (
    <figure className="h-10 w-10">
      <Link href="/">

        <ExportedImage
          src="images/aq-logo-primary.png"
          alt="Acquis Logo"
          height={256}
          width={256}
        />

      </Link>
    </figure>
  );
};

export const LogoSecondary = () => {
  return (
    <figure className="w-40">
      <Link href="/">

        <ExportedImage
          src="images/aq-logo-secondary.png"
          alt="Acquis Logo"
          height={151}
          width={625}
        />

      </Link>
    </figure>
  );
};

export default Logo;
