interface CaseStudy {
  type: string;
  title: string;
  thumbnail: string;
  size: number;
  whitepaper?: string;
}

const CaseStudyCard: React.FC<{ data: CaseStudy }> = ({ data }) => {
  const { type, title, thumbnail, size, whitepaper = "#" } = data;
  return (
    <a href={whitepaper} className="group">
      <article className="flex flex-col gap-2">
        <figure className="relative aspect-[3/2]">
          <img
            src={thumbnail}
            alt="Case study thumbnail"
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

export default CaseStudyCard;
