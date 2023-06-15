import { NextSeo } from "next-seo";
import { useState } from "react";
import Container from "../components/Container";
import FAQ from "../components/FAQ";
import Header from "../components/Header";
import Layout from "../components/Layout";
import {faqs} from "../_content/faqs";

const FAQPage = () => {
  const [list, setList] = useState(faqs);

  const handleSearch = async (e: any) => {
    const Fuse = (await import("fuse.js")).default;
    const fuse = new Fuse(faqs, { keys: ["question", "answer"] });
    const { value: query } = e.target;

    if (!query || query === "") return setList(faqs);
    const searchResult = fuse.search(query).map((res) => res.item);

    setList(searchResult);
  };

  return (
    <Layout>
      <NextSeo title="Frequently asked questions" />
      <Header title="Frequently Asked Questions" />

      <Container className="py-14">
        <div className="flex flex-col gap-3 mx-auto text-sm">
          <div className="flex flex-row justify-between items-baseline gap-4 w-full max-w-xl mx-auto">
            <label className="whitespace-nowrap">Filter: </label>
            <input
              type={"text"}
              onChange={handleSearch}
              placeholder="Search questions"
              className="w-full text-sm
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black"
            />
          </div>
          {list.length === 0 && <p>Nope</p>}
          {list.map((faq, i) => (
            <FAQ key={`faq_${i}`} data={faq} />
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default FAQPage;
