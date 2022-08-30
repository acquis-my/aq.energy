import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { NavItem, MobileNavItem } from "./NavItem";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Button } from "./Button";
import Container from "./Container";
import Logo from "./Logo";

import links from "../nav";

const Nav = () => {
  return (
    <>
      <nav className="container px-8 py-4 mx-auto hidden lg:flex whitespace-nowrap justify-between items-center">
        <Logo />
        <ul className="flex gap-x-8 font-medium">
          {links &&
            links.map((link) => <NavItem key={link.dest} link={link} />)}
        </ul>
        <div className="">
          <Button href="/quote">Get Quote</Button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <Popover className="">
        {({ open }) => (
          <Container
            className={`relative lg:hidden flex whitespace-nowrap justify-between items-center duration-150 ease-in-out ${
              open ? "bg-white" : "bg-transparent"
            }`}
          >
            <Logo />
            <Popover.Button className="">
              <Bars3Icon
                className={`${
                  open ? "text-black" : "text-white"
                } h-8 focus:outline-none`}
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-in-out duration-200 delay-200"
              enterFrom="opacity-0 -translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in-out duration-150 delay-75"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel className="absolute left-0 top-20 px-8 py-8 whitespace-nowrap border-t border-gray-300 bg-white w-full shadow-lg overflow-hidden">
                <div className="flex flex-col gap-y-6 bg-white">
                  {links &&
                    links.map((link) => (
                      <MobileNavItem key={link.dest} link={link} />
                    ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Container>
        )}
      </Popover>
    </>
  );
};

export default Nav;
