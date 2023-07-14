import { CheckCircleIcon } from "@heroicons/react/20/solid";
import AnimatedImage from "./AnimatedImage";

interface Row {
  reversed?: boolean;
  imgURL?: string;
  imgAlt?: string;
  badgeText?: string;
  children: React.ReactNode;
}

const BusinessSectionRow: React.FC<Row> = ({
  reversed,
  imgURL = "",
  imgAlt = "",
  badgeText,
  children,
}) => {
  return (
    <section
      className={`container mx-auto flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } justify-between px-3 py-16 md:py-20 gap-y-10 overflow-hidden`}
    >
      <div className="w-full xl:w-1/3 max-w-prose flex flex-col gap-6 md:py-16 px-10">
        {children}
      </div>
      <div className="relative w-full xl:w-1/2 aspect-[3/2] max-h-96">
        {imgURL && (
          <figure
            className={`absolute inset-0 ${
              reversed ? "right-10" : "left-10"
            } bg-slate-200 rounded-lg`}
          >
            <AnimatedImage
              src={imgURL}
              alt={imgAlt}
              className="absolute object-cover rounded-lg"
              fill
            />
            <div className="relative h-full bg-black/5 rounded-lg"></div>
          </figure>
        )}
        {badgeText && (
          <div
            className={`absolute ${
              reversed ? "right-0" : "left-0"
            } bottom-16 flex items-center gap-1 bg-white border border-slate-50 px-5 py-2 shadow-lg rounded-lg font-semibold`}
          >
            <CheckCircleIcon className="h-6 w-6 text-cyber-yellow" />
            <span>{badgeText}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default BusinessSectionRow;
