"use client";

import { FAQ } from "~/hooks/useFAQ";
import Container from "~/components/Container";
import useFAQ from "~/hooks/useFAQ";
import FAQItem from "./FAQItem";

export default function FAQList({ faqs }: { faqs: FAQ[] }) {
  const { data: list, handleSearch } = useFAQ({ data: faqs });

  return (
    <Container className="py-14">
      <div className="mx-auto flex flex-col gap-3 text-sm">
        <div className="mx-auto flex w-full max-w-xl flex-row items-baseline justify-between gap-4">
          <label className="whitespace-nowrap">Filter: </label>
          <input
            type={"text"}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search questions"
            className="w-full border-0
                    border-b-2
                    border-gray-200 px-0.5 text-sm
                    focus:border-black focus:ring-0"
          />
        </div>
        {list.length === 0 && <p>Nope</p>}
        {list.map((faq, i) => (
          <FAQItem key={`faq_${i}`} data={faq} />
        ))}
      </div>
    </Container>
  );
}
