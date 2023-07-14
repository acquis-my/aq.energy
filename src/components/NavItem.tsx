import Link from "next/link";
import { type NavLink } from "./types";
import { usePathname } from "next/navigation";

interface NavItemProps {
  link: NavLink;
}

export const NavItem: React.FC<NavItemProps> = ({ link }) => {
  const path = usePathname();
  const { dest, label } = link;
  const isActivePath = path === dest;

  return (
    <Link
      href={dest}
      className={`${
        isActivePath ? "text-cyber-yellow font-semibold" : "text-white"
      } hover:text-cyber-yellow `}
    >
      {label}
    </Link>
  );
};

export const MobileNavItem: React.FC<NavItemProps> = ({ link }) => {
  const path = usePathname();
  const { dest, label } = link;
  const isActivePath = path === dest;

  return (
    <Link
      href={dest}
      className={`${
        isActivePath ? "text-black font-semibold" : "text-gray-600"
      } hover:text-black`}
      legacyBehavior
    >
      {label}
    </Link>
  );
};

export default NavItem;
