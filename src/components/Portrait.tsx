import ExportedImage from "next-image-export-optimizer";

type Portrait = { name: string; title: string; image: string };

const PortraitCard: React.FC<Portrait> = ({ name, title, image }) => {
  return (
    <div className="relative bg-slate-200 rounded aspect-[1/1.25] overflow-hidden">
      <figure className="absolute inset-0">
        <ExportedImage
          alt=""
          src={image}
          layout="fill"
          className="object-cover w-full aspect-[4/3]"
        />
      </figure>
      <div className="relative bg-gradient-to-t from-slate-200 via-transparent px-8 py-6 h-full flex flex-col justify-end">
        <span className="font-semibold tracking-wide">{name}</span>
        <span className="text-sm">{title}</span>
      </div>
    </div>
  );
};

export default PortraitCard;
