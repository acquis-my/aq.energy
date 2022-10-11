import React from "react";

const Portrait = () => {
  return (
    <div className="relative bg-slate-200 rounded aspect-[1/1.1] overflow-hidden">
      <figure className="absolute inset-0">
        <img
          src={"https://thispersondoesnotexist.com/image"}
          className="object-cover w-full aspect-[5/6]"
        />
      </figure>
      <div className="relative bg-gradient-to-t from-slate-200 via-transparent px-8 py-6 h-full flex flex-col justify-end">
        <span className="font-semibold tracking-wide">Albert Ree</span>
        <span className="text-sm">CEO Co-founder</span>
      </div>
    </div>
  );
};

export default Portrait;
