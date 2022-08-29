import links from "../nav";
import Link from "next/link";
import NavItem from "./NavItem";
import Image from "next/image";
import logo from "../public/aq-logo-primary.png";
import { Button } from "./Button";
import Logo from "./Logo";

const Nav = () => {
  return (
    <nav className="container px-8 py-4 mx-auto flex whitespace-nowrap justify-between items-center">
      <Logo />
      <ul className="flex gap-x-8 font-medium">
        {links && links.map((link) => <NavItem key={link.dest} link={link} />)}
      </ul>
      <Button href="/quote">Get Quote</Button>
    </nav>
  );
};

export default Nav;
