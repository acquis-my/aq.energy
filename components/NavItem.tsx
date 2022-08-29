import Link from "next/link";
import { NavLink } from "./types";

const NavItem: React.FC<any> = ({ link }) => {
  const { dest, label }: NavLink = link;
  return (
    <Link href={dest}>
      <a className="text-white hover:text-cyber-yellow">{label}</a>
    </Link>
  );
};

export default NavItem;
