import { useState } from "react";

export type FAQ = {
  question: string;
  answer: string;
};

interface FAQProps {
  data: FAQ[];
}

export default function useFAQ(props: FAQProps) {
  const [data, setData] = useState(props.data);

  const handleSearch = async (query: string) => {
    const Fuse = (await import("fuse.js")).default;
    const fuse = new Fuse(props.data, { keys: ["question", "answer"] });

    if (!query || query === "") return setData(props.data);
    const searchResult = fuse.search(query).map((res) => res.item);

    setData(searchResult);
  };

  return { data, handleSearch };
}
