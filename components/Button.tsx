import Link from "next/link";

type Button = {
  href: string;
  children: React.ReactNode;
};

export const Button: React.FC<Button> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="bg-white px-6 py-2 font-medium hover:bg-cyber-yellow rounded-md text-black">
        {children}
      </a>
    </Link>
  );
};

export const ButtonVariant: React.FC<Button> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="px-6 py-2 font-medium bg-cyber-yellow rounded-md text-black">
        {children}
      </a>
    </Link>
  );
};

export const OutlineButton: React.FC<Button> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="px-6 py-2 font-medium text-white hover:text-cyber-yellow border hover:border-cyber-yellow rounded-md  ">
        {children}
      </a>
    </Link>
  );
};
