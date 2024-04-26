"use client";
import { usePathname } from "next/navigation";

import { getTopLevelPath, navLinks as links } from "~/links";
import { MobileNavItem, NavItem } from "./NavItem";
import { LogoSecondary } from "../Logo";
import { Button } from "../Button";
import MobileNavigation from "./MobileNavigation";

export default function MainNavigation() {
  const path = usePathname();
  const rootPath = getTopLevelPath(path);

  return (
    <header className="absolute top-0 z-10 w-full">
      <nav className="container mx-auto hidden items-center justify-between whitespace-nowrap px-8 py-4 lg:flex">
        <LogoSecondary />
        <ul className="flex gap-x-8 font-medium">
          {links.map((link) => (
            <NavItem
              key={link.dest}
              link={link}
              isActive={rootPath === link.dest}
            />
          ))}
        </ul>
        <div>
          <Button href="/quote">Get Quote</Button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <MobileNavigation path={path}>
        {links.map((link) => (
          <MobileNavItem
            key={link.dest}
            link={link}
            isActive={rootPath === link.dest}
          />
        ))}
      </MobileNavigation>
    </header>
  );
}
