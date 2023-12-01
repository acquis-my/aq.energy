"use client";

import CountUp from "react-countup";

export default function Statistic({
  start,
  end,
  prefix,
  suffix,
  decimals,
}: {
  start: number;
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  return (
    <span className="text-4xl font-bold text-cyber-yellow">
      <CountUp
        start={start}
        end={end}
        prefix={prefix}
        suffix={suffix}
        decimals={decimals}
        enableScrollSpy={true}
        scrollSpyOnce={true}
      />
    </span>
  );
}
