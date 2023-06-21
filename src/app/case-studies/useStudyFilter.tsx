"use client";
import { useState } from "react";

export default function useStudyFilter<T extends { type: string }>(
  studies: T[]
) {
  const [type, setType] = useState("all");

  const results =
    type === "all" ? studies : studies.filter((study) => study.type === type);

  return { studies: results, setFilters: setType, currentValue: type };
}
