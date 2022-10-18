interface Step {
  step: number;
  title?: string;
  description?: string;
}

const Step: React.FC<{ data: Step }> = ({ data }) => {
  const { step, title, description } = data;
  const newLine = step == 4;

  return (
    <div
      className={`${
        newLine ? "lg:col-start-2" : ""
      } col-span-2 flex flex-col items-center text-center w-56 mx-auto gap-10 `}
    >
      <div className="h-16 w-16 bg-cyber-yellow rounded-full grid place-items-center ">
        <span className="text-4xl text-white font-bold">{step}</span>
      </div>
      <h2 className="font-semibold text-center text-lg">{title}</h2>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default Step;
