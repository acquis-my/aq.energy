import Link from "next/link";

interface NavItem {
  href: string;
  children: string;
}

const FooterNavItem: React.FC<NavItem> = ({ href = "", children = "" }) => {
  return (
    <Link href={href} className="hover:text-cyber-yellow">
      {children}
    </Link>
  );
};

export default FooterNavItem;
