import { prices } from "../_content";

type Bill = number;
interface CalculatorArgs {
  paymentMethod: PaymentMethod;
  tenure: number;
  interest: number;
  minBill: number;
  maxBill: number;
}

type SystemSpecs = (typeof prices)[number];

export enum PaymentMethods {
  CASH = "cash",
  CREDIT = "credit",
  LOAN = "loan",
}

export type PaymentMethod = "cash" | "credit" | "loan";

type Cost = {
  year: number;
  bill: number;
  savings: number;
  payment: number;
  remainder: number;
};

class Estimate {
  private electricBill;
  private tenure: number;
  private paymentMethod: PaymentMethod;
  private interest: number;
  private price;
  public meetBillReq;

  constructor(
    bill: Bill,
    { paymentMethod, tenure = 0, interest, minBill, maxBill }: CalculatorArgs
  ) {
    this.electricBill = bill;

    this.meetBillReq = bill >= minBill && bill <= maxBill;
    this.tenure = paymentMethod == "cash" ? 0 : tenure;

    this.interest = interest;
    this.paymentMethod = paymentMethod;

    const getPrice = (bill: Bill) => {
      const price = prices.filter((p) => p.bill >= bill)[0];
      return price ? price : (prices[prices.length - 1] as SystemSpecs);
    };

    this.price = getPrice(bill);
  }

  getSavings(): number {
    const savings = this.price.savings;
    return Math.ceil(savings / 5) * 5;
  }

  getSystemSize(): number {
    return this.price.size;
  }

  getROI(): number {
    return this.getCost() / this.getSavings() / 12;
  }

  getCost(): number {
    const interest = this.price.price * this.interest * this.tenure;
    const cost = this.price.price + interest;

    const loanInterest = 0.065;

    if (this.paymentMethod === "loan")
      return (this.price.price - 500) * (1.05 + 10 * loanInterest);
    return this.paymentMethod == "cash" ? this.price.price : cost;
  }

  getLoanAnnualSavings(): number {
    const annualCost = this.getCost() / 10;
    const annualSavings = this.getSavings() * 12;
    return annualSavings - annualCost;
  }

  generateGraphData() {
    if (!this.meetBillReq) return [null];

    let costs: Cost[] = [];
    let remainder = this.paymentMethod === "loan" ? 10 : this.tenure;
    let payment = 0;
    let savings = 0;
    let bill = 0;

    const yearlyCost =
      this.paymentMethod === "loan"
        ? this.getCost() / 10
        : this.getCost() / this.tenure;

    for (let i = 1; i <= 10; i++) {
      const remain = remainder > 0;

      payment = remain ? payment + yearlyCost : payment;
      remainder = remain ? remainder - 1 : 0;

      bill += (this.electricBill - this.getSavings()) * 12;
      savings += this.getSavings() * 12;

      costs = [...costs, { year: i, bill, savings, payment, remainder }];
    }

    return costs;
  }
}

export default Estimate;
