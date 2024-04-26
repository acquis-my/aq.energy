import type { PropsWithChildren } from "react";
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { LogoSecondary } from "../Logo";
import Container from "../Container";

interface MobileNavigationProps extends PropsWithChildren {
  path: string;
}

function CloseOnNavigation(
  props: MobileNavigationProps & { close: () => void }
) {
  const [prevPath] = useState(props.path);
  const currPath = usePathname();

  useEffect(() => {
    if (currPath !== prevPath) props.close?.();
  }, [currPath, prevPath, props]);

  return props.children;
}

export default function MobileNavigation(props: MobileNavigationProps) {
  return (
    <Popover>
      {({ open, close }) => (
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
            <Popover.Panel className="absolute left-0 top-20 -mt-3 w-full overflow-hidden whitespace-nowrap border-t border-gray-300 bg-white px-8 py-8 shadow-lg">
              <CloseOnNavigation path={props.path} close={close}>
                <div className="flex flex-col gap-y-6 bg-white">
                  {props.children}

                  <Link
                    href="/quote"
                    className="rounded-md bg-indigo-dye px-6 py-3 text-center font-semibold text-white"
                  >
                    Get A Quote
                  </Link>
                </div>
              </CloseOnNavigation>
            </Popover.Panel>
          </Transition>
        </Container>
      )}
    </Popover>
  );
}
