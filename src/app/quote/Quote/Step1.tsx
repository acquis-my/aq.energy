"use client";
import states from "~/lib/states";
import fmtString from "~/lib/fmt_string";
import FieldError from "./FieldError";
import { NumericFormat } from "react-number-format";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { quoteSchema, type QuoteData } from "./schema";
import { type z } from "zod";

const formSchema = quoteSchema.pick({
  type: true,
  bill: true,
  state: true,
});

type FormValues = z.infer<typeof formSchema>;

interface StepProps {
  data: Partial<QuoteData>;
  next: (data: Partial<QuoteData>) => void;
}

const Step1 = ({ data, next }: StepProps) => {
  const {
    watch,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: data,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    next(data);
  };

  const leadType = watch("type");

  return (
    <form className="grid grid-cols-6 gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-span-6 flex flex-col">
        <label htmlFor="is_commercial" className="font-semibold">
          Installation type
        </label>

        <div role="group" className="mt-1 flex flex-row justify-around gap-x-2">
          <label
            htmlFor="home_radio"
            className={`border ${
              leadType === "RESIDENTIAL"
                ? "border-slate-300 shadow-sm"
                : "border-gray-200"
            } flex w-full items-center gap-3 rounded-md px-4 py-3 text-sm accent-indigo-dye sm:text-base`}
          >
            <input
              {...register("type")}
              id="home_radio"
              type="radio"
              value={"RESIDENTIAL"}
            />
            Residential
          </label>
          <label
            htmlFor="commercial_radio"
            className={`border ${
              leadType === "COMMERCIAL"
                ? "border-slate-300 shadow-sm"
                : "border-gray-200"
            } flex w-full items-center gap-3 rounded-md px-4 py-3 text-sm accent-indigo-dye sm:text-base`}
          >
            <input
              {...register("type")}
              id="commercial_radio"
              type="radio"
              value={"COMMERCIAL"}
            />
            Commercial
          </label>
        </div>
      </div>

      <div className="col-span-6 flex w-full flex-col">
        <div className="flex items-center justify-between">
          <label htmlFor="mobile" className="font-semibold">
            Average TNB Bill
          </label>
          <FieldError error={errors.bill} />
        </div>
        <div className="flex gap-2 rounded border border-slate-200 p-3 tracking-wide text-gray-700">
          <span className="font-semibold">RM</span>
          <NumericFormat
            name="bill"
            value={watch("bill")}
            decimalScale={0}
            thousandSeparator={","}
            placeholder="0"
            allowNegative={false}
            onValueChange={(v) => {
              if (v.floatValue)
                setValue("bill", v.floatValue, { shouldValidate: true });
            }}
            className="w-full border-0 p-0 text-right focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      <div className="col-span-6 flex flex-col">
        <div className="flex items-center justify-between">
          <label htmlFor="state" className="font-semibold">
            State
          </label>
          <FieldError error={errors.state} />
        </div>
        <select
          {...register("state")}
          className="rounded border border-slate-200 p-3 tracking-wide text-gray-700"
        >
          <option value={""}>- Select State -</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {fmtString(state, "_")}
            </option>
          ))}
        </select>
      </div>

      <div className="col-span-6 mt-1 flex w-full items-end justify-center sm:justify-end">
        <button
          type="submit"
          className="h-10 cursor-pointer rounded-lg bg-indigo-dye px-12 py-2 text-sm text-white"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step1;
