"use client";
import { useState } from "react";
import Container from "~/components/Container";
import FAQItem from "./FAQItem";

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQList({ faqs }: { faqs: FAQ[] }) {
  const [list, setList] = useState(faqs);

  const handleSearch = async (query: string) => {
    const Fuse = (await import("fuse.js")).default;
    const fuse = new Fuse(faqs, { keys: ["question", "answer"] });

    if (!query || query === "") return setList(faqs);
    const searchResult = fuse.search(query).map((res) => res.item);

    setList(searchResult);
  };

  return (
    <Container className="py-14">
      <div className="flex flex-col gap-3 mx-auto text-sm">
        <div className="flex flex-row justify-between items-baseline gap-4 w-full max-w-xl mx-auto">
          <label className="whitespace-nowrap">Filter: </label>
          <input
            type={"text"}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search questions"
            className="w-full text-sm
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black"
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
