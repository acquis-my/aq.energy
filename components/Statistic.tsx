interface Statistic {
  title: string;
  value: number;
  unit?: string | null;
  caption?: string;
}

const Statistic: React.FC<{ stat: Statistic }> = ({ stat }) => {
  const { title, value, unit = null, caption = null } = stat;

  return (
    <div className="flex flex-col w-48 mx-auto text-center gap-y-3 ">
      <div className="text-white text-sm uppercase">{title}</div>
      <div className="text-cyber-yellow text-4xl font-semibold">
        {value} {unit}
      </div>
      <div className="text-gray-300 text-xs">{caption}</div>
    </div>
  );
};

export default Statistic;
