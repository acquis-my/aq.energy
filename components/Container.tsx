type Container = {
  className?: string;
  children: React.ReactNode;
};

const Container: React.FC<Container> = ({ className, children }) => {
  return (
    <div className={`container px-4 lg:px-8 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
