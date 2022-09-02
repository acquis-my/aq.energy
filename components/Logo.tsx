import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

const Logo = () => {
  return (
    <figure className="h-10 w-10">
      <Link href="/">
        <a>
          <ExportedImage
            src="images/aq-logo-primary.png"
            alt="Acquis Logo"
            height={256}
            width={256}
          />
        </a>
      </Link>
    </figure>
  );
};

export default Logo;
