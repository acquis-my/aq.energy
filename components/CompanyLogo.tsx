import ExportedImage from "next-image-export-optimizer";

interface CompanyLogo {
  src?: string;
  alt: string;
}

const CompanyLogo: React.FC<CompanyLogo> = ({
  src = "images/placeholder_logo.png",
  alt,
}) => {
  return (
    <ExportedImage
      height={48}
      width={"100%"}
      className="h-12 w-full"
      src={src}
      alt={alt}
    />
  );
};

export default CompanyLogo;
