import ExportedImage from "next-image-export-optimizer";

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
    <li className="relative h-8 w-24 pointer-events-none select-none">
      <ExportedImage
        className="object-contain"
        layout="fill"
        src={src}
        alt={alt}
      />
    </li>
  );
};

export default CompanyLogo;
