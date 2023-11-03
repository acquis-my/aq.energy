import Image from "next/image";
import { getImgDimensions, urlForImage } from "~/lib/sanity/image";

interface ImageProps {
  value: {
    alt?: string;
    caption?: string;
  };
}

export default function PostImage({ value }: ImageProps) {
  const src = urlForImage(value);
  const dimensions = getImgDimensions(value);

  if (!src || !dimensions) return null;

  return (
    <figure>
      <div className="relative">
        <Image
          src={src}
          className="bg-zinc-100"
          height={dimensions.height}
          width={dimensions.width}
          alt={value?.alt ?? ""}
        />
      </div>

      {value.caption ? (
        <figcaption className="leading-snug">{value?.caption}</figcaption>
      ) : null}
    </figure>
  );
}
