import QuoteFigure from "./QuoteFigure";

interface Testimonial {
  quote: string;
  src?: string;
  size?: number;
  author: string;
  location: string;
  company?: string;
}

const Testimonial: React.FC<{ data: Testimonial; invertColours?: boolean }> = ({
  data,
  invertColours = false,
}) => {
  const { author, location, company = null, src = null } = data;

  //temporary: limit character count to 150 chars
  const quote = data?.quote.split("").slice(0, 150).join("");

  return (
    <div
      className={`flex flex-col items-center ${
        invertColours ? "" : "text-white"
      } text-center`}
    >
      <QuoteFigure />
      <blockquote className="p-6 text-sm">{quote}</blockquote>
      {src ? (
        <a
          href={src}
          className="font-semibold"
          target={"_blank"}
          rel="noreferrer"
        >
          {author}
        </a>
      ) : (
        <span className="font-semibold">{author}</span>
      )}
      <span
        className={`pt-2 text-sm ${
          invertColours ? "text-slate-700" : "text-slate-300"
        }`}
      >
        {company ?? location}
      </span>
    </div>
  );
};

// const QuoteFigure = () => {
//   return (
//     <Image
//       src="quotemark.svg"
//       className="h-12 w-12"
//       width={56}
//       height={56}
//       alt=""
//     />
//   );
// };

export default Testimonial;
