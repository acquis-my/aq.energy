import React from "react";

export default function loading() {
  return (
    <div className="prose mx-auto my-12 animate-pulse">
      <div className="bg-gray-200 h-8"></div>
      <div className="bg-gray-200 h-8 mt-1 w-3/5"></div>

      <div className="flex flex-col gap-1 mt-12">
        <div className="bg-gray-200 h-4"></div>
        <div className="bg-gray-200 h-4"></div>
        <div className="bg-gray-200 h-4 w-4/5"></div>
      </div>
    </div>
  );
}
