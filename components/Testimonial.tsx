interface Testimonial {
  quote: string;
  size: number;
  author: string;
  location: string;
  company?: string;
}

const Testimonial: React.FC<{ data: Testimonial; invertColours?: boolean }> = ({
  data,
  invertColours = false,
}) => {
  const { author, location, company = null } = data;

  //temporary: limit character count to 150 chars
  const quote = data?.quote.split("").slice(0, 150).join("");

  if (invertColours)
    return (
      <div className="flex flex-col items-center text-center">
        <img src="quotemark.svg" className="h-12 w-12" />
        <p className="p-6 text-sm">{quote}</p>
        <span className="font-semibold">{author}</span>
        <span className="pt-2 text-sm text-slate-700">
          {company ?? location}
        </span>
      </div>
    );

  return (
    <div className="flex flex-col items-center text-white text-center">
      <img src="quotemark.svg" className="h-12 w-12" />
      <p className="p-6 text-sm">{quote}</p>
      <span className="font-semibold">{author}</span>
      <span className="pt-2 text-sm text-slate-300">{company ?? location}</span>
    </div>
  );
};

export default Testimonial;
