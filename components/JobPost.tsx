import { Disclosure } from "@headlessui/react";
import Link from "next/link";

interface Job {
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  link: string;
}

const FAQ: React.FC<{}> = () => {
  return (
    <article className="w-full max-w-4xl mx-auto border boder-slate-200 rounded">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center z-10 mx-auto w-full justify-between rounded px-4 md:px-8 lg:px-10 py-3 md:py-6 lg:py-8 text-left text-gray-800 bg-white hover:bg-slate-50 focus:outline-none focus-visible:ring focus-visible:ring-cyber-yellow focus-visible:ring-opacity-75">
              <div className="flex flex-col">
                <span className="font-semibold text-base md:text-xl tracking-wide">
                  Hybrid Marketing Manager
                </span>
                <div className="flex flex-row gap-2 text-sm md:text-base">
                  <span>Marketing</span>
                  <span>&middot;</span>
                  <span>Full-time</span>
                  <span className="hidden sm:block">&middot;</span>
                  <span className="hidden sm:block">Kuala Lumpur</span>
                </div>
              </div>
              <span className="text-indigo-dye font-bold text-xl">
                {open ? "-" : "+"}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="flex flex-col px-4 md:px-8 lg:px-10 py-3 md:py-6 lg:py-8 z-0 text-gray-500 bg-white -mt-1 rounded">
              <section className="border-y">
                <div className="prose-sm md:prose pb-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate suscipit reiciendis consequuntur quisquam
                    necessitatibus nisi voluptatem rerum, est fuga sequi atque
                    recusandae alias. Quasi quae id unde soluta, amet alias! Ut
                    expedita officiis accusantium iusto dolorem possimus eaque
                    eligendi nisi. Tempora nihil autem reprehenderit? Quidem
                    omnis quia veritatis dolorem, amet ipsa velit adipisci
                    voluptate suscipit exercitationem consequatur aliquid itaque
                    aliquam.
                  </p>
                  <h1>Your Role</h1>
                  <ul>
                    <li>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus vitae velit repellendus? Fugit velit
                      perferendis, incidunt quia enim, laborum delectus
                      cupiditate unde laboriosam beatae, maxime eos autem dicta
                      exercitationem quod!
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vero cumque quibusdam rerum velit soluta reprehenderit?
                      Quaerat exercitationem vero optio consequuntur corporis
                      nesciunt velit suscipit eveniet nulla. Similique
                      praesentium ratione totam?
                    </li>
                  </ul>
                </div>
              </section>
              <aside className="w-full mt-5 py-2 flex justify-end text-sm md:text-base">
                <Link
                  href={""}
                  className="px-7 py-2 rounded-lg bg-indigo-dye text-white font-medium">
                  
                    Apply for this Job
                  
                </Link>
              </aside>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </article>
  );
};

export default FAQ;
