import { Disclosure } from "@headlessui/react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQ: React.FC<{ data: FAQ }> = ({ data }) => {
  const { question, answer } = data;

  return (
    <div className="w-full max-w-xl mx-auto border boder-slate-200 rounded">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex mx-auto w-full max-w-xl justify-between rounded px-4 py-2 text-left font-semibold text-gray-800 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-cyber-yellow focus-visible:ring-opacity-75">
              <span>{question}</span>
              <span className="text-indigo-dye">{open ? "-" : "+"}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 text-sm text-gray-500">
              {answer}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default FAQ;
