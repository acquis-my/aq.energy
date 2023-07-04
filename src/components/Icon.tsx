interface Icon {
  className?: string;
  children: React.ReactNode;
}

export const Icon: React.FC<Icon> = ({ className, children: icon }) => {
  return (
    <figure
      className={`bg-cyber-yellow fill-white text-white p-1.5 rounded select-none`}
    >
      {icon}
    </figure>
  );
};

export default Icon;
