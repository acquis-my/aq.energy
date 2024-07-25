"use client";
import type { SubmitHandler } from "react-hook-form";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import Turnstile from "react-turnstile";

import type { QuoteData } from "./schema";
import { env } from "~/env.mjs";
import { quoteSchema } from "./schema";
import FieldError from "./FieldError";

const SITE_KEY = env.NEXT_PUBLIC_TURNSTILE_SITEKEY;

const formSchema = quoteSchema.pick({
  name: true,
  phone: true,
  token: true,
});

type FormValues = z.infer<typeof formSchema>;

interface StepProps {
  data: Partial<QuoteData>;
  isSubmitting: boolean;
  next: (data: Partial<QuoteData>, final?: boolean) => void;
  prev: (data: Partial<QuoteData>) => void;
}

const Step2 = ({ data, isSubmitting, next, prev }: StepProps) => {
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
    next(data, true);
  };

  const values = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`grid grid-cols-6 gap-6 ${isSubmitting ? "opacity-60" : ""}`}
      >
        <div className="col-span-6 flex w-full flex-col ">
          <div className="flex items-center justify-between">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <FieldError error={errors.name} />
          </div>
          <input
            {...register("name")}
            disabled={isSubmitting}
            placeholder="Karen Tan"
            className="border border-slate-200 p-3 tracking-wide text-gray-700"
          />
        </div>

        <div className="col-span-6 flex w-full flex-col">
          <div className="flex items-center justify-between">
            <label htmlFor="phone" className="font-semibold">
              Phone
            </label>
            <FieldError error={errors.phone} />
          </div>
          <PatternFormat
            name="phone"
            disabled={isSubmitting}
            valueIsNumericString
            format="###-### #####"
            value={watch("phone")}
            placeholder="012-345 6789"
            className="border border-slate-200 p-3 tracking-wide text-gray-700"
            onValueChange={(vals) =>
              void setValue("phone", vals.value, { shouldValidate: true })
            }
          />
        </div>

        <div className="col-span-6 h-20 w-full overflow-x-auto">
          <Turnstile
            sitekey={SITE_KEY}
            action="get-quote"
            onVerify={(token) => setValue("token", token)}
          />
        </div>
      </div>

      <div className="col-span-6 mt-6 flex w-full items-end justify-center gap-2 sm:justify-end">
        <button
          type="button"
          disabled={isSubmitting}
          onClick={() => prev(values)}
          className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isSubmitting || values.token === ""}
          className={`h-10 cursor-pointer rounded-lg bg-indigo-dye px-12 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-60`}
        >
          {isSubmitting ? "Submitting..." : "Get Quote"}
        </button>
      </div>
    </form>
  );
};

export default Step2;
