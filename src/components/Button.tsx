import Link from "next/link";

type Button = {
  href: string;
  children: React.ReactNode;
};

export const Button: React.FC<Button> = ({ href, children }) => {
  return (
    (<Link
      href={href}
      className="bg-white px-6 py-2 font-medium hover:bg-cyber-yellow rounded-md text-black">

      {children}

    </Link>)
  );
};

export const ButtonVariant: React.FC<Button> = ({ href, children }) => {
  return (
    (<Link
      href={href}
      className="px-6 py-2 font-medium bg-cyber-yellow rounded-md text-black">

      {children}

    </Link>)
  );
};

export const ButtonVariant2: React.FC<Button> = ({ href, children }) => {
  return (
    (<Link
      href={href}
      className="py-4 px-6 rounded-lg bg-indigo-dye text-white font-medium">

      {children}

    </Link>)
  );
};

export const OutlineButton: React.FC<Button> = ({ href, children }) => {
  return (
    (<Link
      href={href}
      className="px-6 py-2 font-medium text-white hover:text-cyber-yellow border hover:border-cyber-yellow rounded-md  ">

      {children}

    </Link>)
  );
};

export const OutlineButtonDark: React.FC<Button> = ({ href, children }) => {
  return (
    (<Link
      href={href}
      className="px-6 py-2 font-medium text-slate-700 hover:text-cyber-yellow border border-black-coral hover:border-cyber-yellow rounded-md  ">

      {children}

    </Link>)
  );
};
