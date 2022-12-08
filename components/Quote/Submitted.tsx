import { ArrowLeftIcon, CheckCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Submitted = () => {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text font-medium text-green-800">
            Quote request received
          </h3>
          <div className="mt-2 text-sm text-green-700">
            <p>
              We have gotten your details and one of our representitives will
              contact you soon!
            </p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex ">
              <Link href="/">
                <a className="flex flex-row items-center gap-2 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">
                  <ArrowLeftIcon className="h-4 w-4" />
                  <span>Back to homepage</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submitted;
