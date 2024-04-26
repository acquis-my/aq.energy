"use client";
import { useState } from "react";
import Image from "next/image";
import classNames from "~/lib/classNames";

type AnimatedImage = typeof Image extends React.FC<infer P> ? P : never;

const AnimatedImage: React.FC<AnimatedImage> = (props) => {
  const { className, alt, ...rest } = props;
  const [imageLoaded, setImageLoaded] = useState(false);

  const style = classNames(
    className ?? "",
    imageLoaded ? "opacity-100" : "opacity-0 ",
    "transition duration-1000"
  );

  return (
    <Image
      onLoad={() => setImageLoaded(true)}
      className={style}
      alt={alt ?? ""}
      {...rest}
    />
  );
};

export default AnimatedImage;
