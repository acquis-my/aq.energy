import Container from "./Container";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

interface Row {
  reversed?: boolean;
  imgURL?: string;
  imgAlt?: string;
  badgeText?: string;
  children: React.ReactNode;
}

const BusinessSectionRow: React.FC<Row> = ({
  reversed,
  imgURL,
  imgAlt,
  badgeText,
  children,
}) => {
  return (
    <Container
      className={`flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } justify-between py-20 gap-y-10 overflow-hidden`}
    >
      <div className="w-full xl:w-1/3 max-w-prose flex flex-col gap-6 md:py-16 px-10">
        {children}
      </div>
      <div className="relative w-full xl:w-1/2 aspect-[3/2] max-h-96">
        <div
          className={`absolute ${
            reversed ? "-left-10" : "-right-10"
          }  aspect-[3/2] w-full h-full  rounded-lg bg-orange-100`}
        ></div>
        {badgeText && (
          <div
            className={`absolute ${
              reversed ? "right-0" : "left-0"
            } bottom-20 flex items-center gap-1 bg-white border border-slate-50 px-5 py-2 shadow-lg rounded-lg font-semibold`}
          >
            <CheckCircleIcon className="h-6 w-6 text-cyber-yellow" />
            <span>{badgeText}</span>
          </div>
        )}
      </div>
    </Container>
  );
};

export default BusinessSectionRow;
