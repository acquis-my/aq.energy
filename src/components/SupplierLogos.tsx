import CompanyLogo from "./CompanyLogo";

const logos = [
  { src: "/images/logos/trina.png" },
  { src: "/images/logos/ulica.png" },
  { src: "/images/logos/solis.png" },
  { src: "/images/logos/zjbeny.png" },
  { src: "/images/logos/helukabel.png" },
];

const SupplierLogos = () => {
  return (
    <ul className="flex flex-row gap-x-3 overflow-auto items-center">
      {logos.map((logo, i) => (
        <CompanyLogo key={"logo_" + i} src={logo.src} />
      ))}
    </ul>
  );
};

export default SupplierLogos;
