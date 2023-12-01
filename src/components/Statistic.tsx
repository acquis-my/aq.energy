"use client";

import CountUp, { type CountUpProps } from "react-countup";

export interface StatisticItem {
  title: string;
  value: number | string;
  unit?: string | null;
  countup?: CountUpProps;
  caption?: string;
}

export const Statistic: React.FC<{ stat: StatisticItem }> = ({ stat }) => {
  const { title, value, unit = null, caption = null } = stat;

  return (
    <div className="mx-auto flex w-48 flex-col gap-y-3 text-center ">
      <div className="text-sm uppercase text-white">{title}</div>
      <div className="text-4xl font-semibold text-cyber-yellow">
        {stat.countup ? (
          <CountUp
            duration={stat.countup.duration}
            start={stat.countup.start}
            end={stat.countup.end}
            suffix={stat.countup.suffix}
            prefix={stat.countup.prefix}
            decimals={stat.countup.decimals}
            enableScrollSpy={true}
            scrollSpyOnce={true}
          />
        ) : (
          <>
            {value} {unit}
          </>
        )}
      </div>
      <div className="text-xs text-gray-300">{caption}</div>
    </div>
  );
};
