import Image from "next/image";
import { urlForImage } from "~/lib/sanity/image";

interface ImageProps {
  value: {
    alt?: string;
    caption?: string;
  };
}

export default function PostImage({ value }: ImageProps) {
  const src = urlForImage(value);

  return (
    <figure>
      <div className="relative aspect-[3/2]">
        <Image
          className="w-full h-full m-0 object-cover"
          alt={value?.alt ?? ""}
          src={src}
          fill
        />
      </div>
      {value.caption ? (
        <figcaption className="leading-snug">{value?.caption}</figcaption>
      ) : null}
    </figure>
  );
}
