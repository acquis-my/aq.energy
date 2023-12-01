"use client";

import CountUp, { type CountUpProps } from "react-countup";

interface StatisticItem {
  countup?: CountUpProps;
  type?: never;
}
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

interface AboutMetadata {
  title: string;
  caption?: string;
}

function StatisticContainer({
  type,
  children,
  metadata,
}: {
  type: "home" | "about";
  children?: JSX.Element;
  metadata?: AboutMetadata;
}) {
  if (type === "about") {
    return (
      <span className="text-4xl font-bold text-cyber-yellow">{children}</span>
    );
  } else if (type === "home" && metadata) {
    return (
      <div className="mx-auto flex w-48 flex-col gap-y-3 text-center ">
        <div className="text-sm uppercase text-white">{metadata.title}</div>
        <div className="text-4xl font-semibold text-cyber-yellow">
          {children}
        </div>
        <div className="text-xs text-gray-300">{metadata.caption}</div>
      </div>
    );
  }
  return null;
}

export const Statistic: React.FC<{
  stat: StatisticItem | AboutStatisticItem | HomeStatisticItem;
  unstyled?: boolean;
}> = ({ stat, unstyled }) => {
  if (unstyled && stat.countup) {
    return <CountUpWithProps props={stat.countup} />;
  }

  if (stat.type) {
    return (
      <StatisticContainer
        type={stat.type}
        metadata={
          stat.type === "home"
            ? { title: stat.title, caption: stat.caption }
            : undefined
        }
      >
        {stat.countup ? (
          <CountUpWithProps props={stat.countup} />
        ) : stat.type === "home" ? (
          <>
            `${stat.value} ${stat.unit}`
          </>
        ) : (
          <></>
        )}
      </StatisticContainer>
    );
  }

  return null;
};
