import classNames from "~/lib/classNames";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({
  className = "",
  children,
  ...rest
}: ContainerProps) {
  const styles = classNames("container px-4 lg:px-8 mx-auto", className);

  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
}
