"use client";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

import { NavItem, MobileNavItem } from "./NavItem";
import { navLinks as links } from "~/links";
import { LogoSecondary } from "./Logo";
import { Button } from "./Button";
import Container from "./Container";

export default function MainNavigation() {
  return (
    <header className="absolute top-0 z-10 w-full">
      <nav className="container mx-auto hidden items-center justify-between whitespace-nowrap px-8 py-4 lg:flex">
        <LogoSecondary />
        <ul className="flex gap-x-8 font-medium">
          {links &&
            links.map((link) => <NavItem key={link.dest} link={link} />)}
        </ul>
        <div>
          <Button href="/quote">Get Quote</Button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <Popover>
        {({ open }) => (
          <Container
            className={`relative z-50 flex items-center justify-between whitespace-nowrap py-4 duration-150 ease-in-out lg:hidden ${
              open ? "bg-white" : "bg-transparent"
            }`}
          >
            <LogoSecondary />
            <Popover.Button aria-label="Navigation Menu">
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
              <Popover.Panel className="absolute left-0 top-20 -mt-2 w-full overflow-hidden whitespace-nowrap border-t border-gray-300 bg-white px-8 py-8 shadow-lg">
                <div className="flex flex-col gap-y-6 bg-white">
                  {links &&
                    links.map((link) => (
                      <MobileNavItem key={link.dest} link={link} />
                    ))}

                  <Link
                    href="/quote"
                    className="rounded-md bg-indigo-dye px-6 py-3 text-center font-semibold text-white"
                  >
                    Get A Quote
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Container>
        )}
      </Popover>
    </header>
  );
}
