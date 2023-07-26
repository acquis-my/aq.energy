/**
 * Filter data by a set of filters
 */
export function filterData<T extends object>(
  data: T[],
  filters: Partial<Record<keyof T, string>>
) {
  if (Object.keys(filters).length === 0) return data;

  return data.filter((item) =>
    Object.entries(filters).every(([key, value]) => {
      if (value === "") return true;
      return item[key as keyof T] == value;
    })
  );
}
