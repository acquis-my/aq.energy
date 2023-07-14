import classNames from "~/lib/classNames";

interface Icon {
  className?: string;
  children: React.ReactNode;
}

export const Icon: React.FC<Icon> = ({ className = "", children: icon }) => {
  const styles = classNames(
    `bg-cyber-yellow fill-white text-white p-1.5 rounded select-none`,
    className
  );

  return <figure className={styles}>{icon}</figure>;
};

export default Icon;
