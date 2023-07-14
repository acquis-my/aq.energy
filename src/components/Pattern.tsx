import Image from "next/image";

export const Pattern = ({ ...props }) => {
  return <Image src="/images/Pattern.svg" alt="Pattern" {...props} />;
};

export const SunPattern = ({ ...props }) => {
  return <Image src="/images/sun.svg" alt="Sun Pattern" {...props} />;
};
