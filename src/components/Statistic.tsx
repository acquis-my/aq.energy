"use client";

import CountUp, { type CountUpProps } from "react-countup";

interface AboutStatisticItem {
  countup: CountUpProps;
  type: "about";
}
export interface HomeStatisticItem {
  title: string;
  value: number | string;
  unit?: string | null;
  caption?: string;
  countup?: CountUpProps;
  type: "home";
}

const CountUpWithProps = ({ props }: { props: CountUpProps }) =>
  CountUp({ ...props });

export const Statistic: React.FC<{
  stat: AboutStatisticItem | HomeStatisticItem;
}> = ({ stat }) => {
  if (stat.type === "about") {
    return (
      <span className="text-4xl font-bold text-cyber-yellow">
        <CountUpWithProps props={stat.countup} />
      </span>
    );
  } else if (stat.type === "home") {
    const { title, value, unit = null, caption = null } = stat;
    return (
      <div className="mx-auto flex w-48 flex-col gap-y-3 text-center ">
        <div className="text-sm uppercase text-white">{title}</div>
        <div className="text-4xl font-semibold text-cyber-yellow">
          {stat.countup ? (
            <CountUpWithProps props={stat.countup} />
          ) : (
            <>
              {value} {unit}
            </>
          )}
        </div>
        <div className="text-xs text-gray-300">{caption}</div>
      </div>
    );
  }
  return null;
};
