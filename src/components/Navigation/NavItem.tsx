import Link from "next/link";
import type { NavItem as NavLink } from "~/links";

interface NavItemProps {
  isActive?: boolean;
  link: NavLink;
}

export function NavItem(props: NavItemProps) {
  const { dest, label } = props.link;

  return (
    <Link
      href={dest}
      className={`${
        props.isActive ? "font-semibold text-cyber-yellow" : "text-white"
      } hover:text-cyber-yellow `}
    >
      {label}
    </Link>
  );
}

export function MobileNavItem(props: NavItemProps) {
  const { dest, label } = props.link;

  return (
    <Link
      href={dest}
      className={`${
        props.isActive ? "font-semibold text-black" : "text-gray-600"
      } hover:text-black`}
    >
      {label}
    </Link>
  );
}
