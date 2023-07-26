"use client";
import { useMemo, useState } from "react";
import { filterData } from "~/utils/filterData";

export default function useFilter<T extends object>(
  data: T[],
  defaultValues?: Partial<Record<keyof T, T[keyof T]>>
) {
  const [filters, setFilters] = useState<Partial<Record<keyof T, T[keyof T]>>>(
    defaultValues || {}
  );

  function updateFilters(name: keyof T, value: string) {
    setFilters((prev) => ({ ...prev, [name]: value }));
  }

  function getValue(name: keyof T): string {
    return filters[name] ?? "";
  }

  const result = useMemo(() => filterData(data, filters), [data, filters]);

  return { data: result, updateFilters, getValue };
}
