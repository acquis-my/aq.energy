import { CalendarIcon } from "@heroicons/react/24/solid";
import AnimatedImage from "./AnimatedImage";

interface CaseStudy {
  type: string;
  title: string;
  thumbnail: string;
  systemSize: number;
  year?: number;
}

export const CaseStudyCard: React.FC<{ data: CaseStudy }> = ({ data }) => {
  const { type, title, thumbnail, systemSize } = data;
  return (
    <article className="group cursor-default">
      <div className="flex flex-col gap-2">
        <figure className="relative aspect-[3/2]">
          <AnimatedImage
            className="absolute inset-0 bg-slate-300 object-cover w-full h-full"
            src={thumbnail}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="relative h-full bg-transparent group-hover:bg-slate-200 group-hover:bg-opacity-25"></div>
        </figure>
        <div className="flex justify-between items-center text-xs text-gray-700">
          <span className="bg-gray-300 px-3 py-1 rounded-full uppercase tracking-wide">
            {type}
          </span>
          <span>{systemSize.toFixed(2)} kWp</span>
        </div>
        <div className="group-hover:text-indigo-dye font-semibold first-letter:uppercase">
          {title}
        </div>
      </div>
    </article>
  );
};

export const CaseStudyCardVariant: React.FC<{ data: CaseStudy }> = ({
  data,
}) => {
  const { type, title, thumbnail, systemSize, year } = data;
  return (
    <article className="group flex flex-col gap-2">
      <figure className="relative aspect-[3/2]">
        <AnimatedImage
          className="absolute inset-0 bg-slate-300 object-cover w-full h-full"
          src={thumbnail}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="relative h-full bg-transparent group-hover:bg-slate-200 group-hover:bg-opacity-25"></div>
      </figure>
      <div className="flex justify-between items-center text-xs text-gray-700">
        <span className="bg-gray-300 px-3 py-1 rounded-full uppercase tracking-wide">
          {type}
        </span>
        <div className="flex gap-1 items-center font-semibold text-gray-600">
          <span>{systemSize.toFixed(1)} kWp</span>
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
      <div className="group-hover:text-indigo-dye font-semibold first-letter:uppercase">
        {title}
      </div>
    </article>
  );
};

export default CaseStudyCard;
