import { MapPinIcon } from "@heroicons/react/20/solid";
import { BanknotesIcon, CalendarIcon } from "@heroicons/react/24/solid";
import ExportedImage from "next-image-export-optimizer";

interface CaseStudy {
  type: string;
  title: string;
  thumbnail: string;
  size: number;
  whitepaper?: string;
  year?: number;
}

export const CaseStudyCard: React.FC<{ data: CaseStudy }> = ({ data }) => {
  const { type, title, thumbnail, size, whitepaper = "#" } = data;
  return (
    <a href={whitepaper} className="group cursor-default">
      <article className="flex flex-col gap-2">
        <figure className="relative aspect-[3/2]">
          <ExportedImage
            fill
            src={thumbnail}
            alt=""
            className="absolute inset-0 bg-slate-300 object-cover w-full h-full"
          />
          <div className="relative h-full bg-transparent group-hover:bg-slate-200 group-hover:bg-opacity-25"></div>
        </figure>
        <div className="flex justify-between items-center text-xs text-gray-700">
          <span className="bg-gray-300 px-3 py-1 rounded-full uppercase tracking-wide">
            {type}
          </span>
          <span>{size.toFixed(2)} kWp</span>
        </div>
        <h1 className="group-hover:text-indigo-dye font-semibold first-letter:uppercase">
          {title}
        </h1>
      </article>
    </a>
  );
};

export const CaseStudyCardVariant: React.FC<{ data: CaseStudy }> = ({
  data,
}) => {
  const { type, title, thumbnail, size, whitepaper = "#", year } = data;
  return (
    // <a href={whitepaper} className="group cursor-default">
    <article className="group flex flex-col gap-2">
      <figure className="relative aspect-[3/2]">
        <ExportedImage
          fill
          src={thumbnail}
          alt=""
          className="absolute inset-0 bg-slate-300 object-cover w-full h-full"
        />
        <div className="relative h-full bg-transparent group-hover:bg-slate-200 group-hover:bg-opacity-25"></div>
      </figure>
      <div className="flex justify-between items-center text-xs text-gray-700">
        <span className="bg-gray-300 px-3 py-1 rounded-full uppercase tracking-wide">
          {type}
        </span>
        <div className="flex gap-1 items-center font-semibold text-gray-600">
          <span>{size.toFixed(1)} kWp</span>
          {year ? (
            <>
              <span>|</span>
              <span className="flex items-center gap-1">
                <CalendarIcon className="h-3 w-3" /> {year}
              </span>
            </>
          ) : null}
        </div>
      </div>
      <h1 className="group-hover:text-indigo-dye font-semibold first-letter:uppercase">
        {title}
      </h1>
    </article>
    // </a>
  );
};

export default CaseStudyCard;
