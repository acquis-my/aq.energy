import AnimatedImage from "./AnimatedImage";

interface CompanyLogo {
  src?: string;
  alt?: string;
}

const CompanyLogo: React.FC<CompanyLogo> = ({
  src = "images/placeholder_logo.png",
  alt = "",
}) => {
  // return <img src={src} className="object-contain w-28" />;
  return (
    <li className="relative h-7 w-full pointer-events-none select-none">
      <AnimatedImage
        className="object-contain w-full grayscale"
        src={src}
        alt={alt}
        fill
      />
    </li>
  );
};

export default CompanyLogo;
