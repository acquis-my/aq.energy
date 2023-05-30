import { prices } from "~/_content";

type Bill = number;
interface CalculatorArgs {
  paymentType: PaymentMethods | string;
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

type Price = (typeof prices)[number];

function getPrice(bill: number): Price {
  const max = prices[prices.length - 1] as Price;
  const { bill: maxBill } = max;

  if (bill > maxBill) return max;
  return prices.filter((p) => p.bill >= bill)[0] as Price;
}

class Estimate {
  private electricBill;
  private tenure: number;
  private paymentType: PaymentMethods | string;
  private interest: number;
  private price;
  public meetBillReq;

  constructor(
    bill: Bill,
    { paymentType, tenure = 0, interest, minBill, maxBill }: CalculatorArgs
  ) {
    this.electricBill = bill;

    this.meetBillReq = bill >= minBill && bill <= maxBill;
    this.tenure = paymentType == PaymentMethods.CASH ? 0 : tenure;

    this.interest = interest;
    this.paymentType = paymentType;

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

    if (this.paymentType === PaymentMethods.LOAN)
      return (this.price.price - 500) * (1.05 + 10 * loanInterest);
    return this.paymentType == PaymentMethods.CASH ? this.price.price : cost;
  }

  getLoanAnnualSavings(): number {
    const annualCost = this.getCost() / 10;
    const annualSavings = this.getSavings() * 12;
    return annualSavings - annualCost;
  }

  generateGraphData() {
    if (!this.meetBillReq) return [null];

    let costs: any = [];
    let remainder = this.paymentType === PaymentMethods.LOAN ? 10 : this.tenure;
    let payment = 0;
    let savings = 0;
    let bill = 0;

    const yearlyCost =
      this.paymentType === PaymentMethods.LOAN
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
