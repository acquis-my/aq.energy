import Link from "next/link";
import { useRouter } from "next/navigation";
import { NavLink } from "./types";

interface NavItemProps {
  link: NavLink;
}

export const NavItem: React.FC<any> = ({ link }) => {
  const router = useRouter();
  const { dest, label }: NavLink = link;
  const isActivePath = router.pathname === dest;

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

export const MobileNavItem: React.FC<any> = ({ link }) => {
  const router = useRouter();

  const { dest, label }: NavLink = link;
  const isActivePath = router.pathname === dest;

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
