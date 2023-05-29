"use client";
import { useState } from "react";
import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";

const AnimatedImage: React.FC<ExportedImageProps> = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageProps = { ...props };
  delete imageProps["className"];

  const style = `${props["className"] ?? ""} transition duration-1000 ${
    imageLoaded ? "opacity-100" : "opacity-0 "
  }`;

  return (
    <ExportedImage
      onLoadingComplete={() => setImageLoaded(true)}
      className={style}
      {...imageProps}
    />
  );
};

export default AnimatedImage;
