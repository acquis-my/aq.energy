import "client-only";
import { create } from "zustand";
import { PaymentMethod } from "~/lib/SolarEstimate";

type CalculatorValues = {
  bill: number;
  tenure: number;
  paymentMethod: PaymentMethod;
};

type setValues = (values: Partial<CalculatorValues>) => void;
type CalculatorStore = CalculatorValues & { setValues: setValues };

export const useCalculatorStore = create<CalculatorStore>((set) => ({
  bill: 250,
  tenure: 1,
  paymentMethod: "cash",
  setValues: (values) => set(values),
}));
