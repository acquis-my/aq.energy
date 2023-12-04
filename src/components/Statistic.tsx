"use client";

import CountUp, { type CountUpProps } from "react-countup";

type StatisticItem = {
  countup?: CountUpProps;
  type?: never;
};
type AboutStatisticItem = {
  countup: CountUpProps;
  type: "about";
};

type HomeStatisticItem = {
  title: string;
  value: number | string;
  unit?: string | null;
  caption?: string;
  countup?: CountUpProps;
  type: "home";
};

interface AboutMetadata {
  title: string;
  caption?: string;
}

interface StatisticContainerProps {
  children?: React.ReactNode;
  metadata?: AboutMetadata;
}

type StatisticProps = {
  stat: StatisticItem | AboutStatisticItem | HomeStatisticItem;
  unstyled?: boolean;
};

function StatisticContainer({ children, metadata }: StatisticContainerProps) {
  if (!metadata)
    return (
      <span className="text-4xl font-bold text-cyber-yellow">{children}</span>
    );

  return (
    <div className="mx-auto flex w-48 flex-col gap-y-3 text-center ">
      <div className="text-sm uppercase text-white">{metadata.title}</div>
      <div className="text-4xl font-semibold text-cyber-yellow">{children}</div>
      <div className="text-xs text-gray-300">{metadata.caption}</div>
    </div>
  );
}

export function Statistic({ stat, unstyled }: StatisticProps) {
  if (!stat.countup) return null;
  if (unstyled) return <CountUp {...stat.countup} />;

  if (stat.type === "home") {
    const { countup, value, unit } = stat;

    return (
      <StatisticContainer
        metadata={{
          title: stat.title,
          caption: stat.caption,
        }}
      >
        {countup ? <CountUp {...countup} /> : `${value} ${unit}`}
      </StatisticContainer>
    );
  }

  return (
    <StatisticContainer>
      <CountUp {...stat.countup} />
    </StatisticContainer>
  );
}
