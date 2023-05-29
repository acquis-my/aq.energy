interface Card {
  className?: string;
  children: React.ReactNode;
}

const PrimaryCard: React.FC<Card> = ({ className, children }) => {
  return (
    <div
      className={`relative w-full z-10 bg-indigo-dye rounded-lg flex flex-col lg:flex-row p-4 lg:p-6  ${className}`}
    >
      {children}
    </div>
  );
};

export default PrimaryCard;
