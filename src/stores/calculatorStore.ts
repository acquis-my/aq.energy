import "client-only";
import { create } from "zustand";
import { type PaymentMethod } from "~/lib/SolarEstimate";

type CalculatorValues = {
  bill: number;
  tenure: number;
  paymentMethod: PaymentMethod;
};

interface CalculatorStore extends CalculatorValues {
  setValues: (values: Partial<CalculatorValues>) => void;
}

export const useCalculatorStore = create<CalculatorStore>((set) => ({
  bill: 250,
  tenure: 1,
  paymentMethod: "cash",
  setValues: (values) => set(values),
}));
