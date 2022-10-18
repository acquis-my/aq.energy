import Link from "next/link";

interface NavItem {
  href: string;
  children: string;
}

const FooterNavItem: React.FC<NavItem> = ({ href = "", children = "" }) => {
  return (
    <li>
      <Link href={href}>
        <a className="hover:text-cyber-yellow">{children}</a>
      </Link>
    </li>
  );
};

export default FooterNavItem;
