type FilterOption = {
  label: string;
  value: string | number;
};

interface FilterProps {
  name: string;
  label: string;
  options: FilterOption[];
  currentValue: string;
  handleChange: (value: string) => void;
}

export default function Filter({
  name,
  label,
  options,
  currentValue,
  handleChange,
}: FilterProps) {
  return (
    <div className="col-span-2 flex flex-col">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <select
        name={name}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        onChange={(e) => handleChange(e.target.value)}
        value={currentValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
