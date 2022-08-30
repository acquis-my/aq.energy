type Container = {
  className?: string;
  children?: any;
};

const Container: React.FC<Container> = ({ className, children }) => {
  return (
    <div className={`container px-4 lg:px-8 py-4 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
