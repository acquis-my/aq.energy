import prices from "../_content/prices.json";

type Bill = number;

export enum PaymentMethods {
  CASH = "cash",
  CREDIT = "credit",
  LOAN = "loan",
}

class Estimate {
  private electricBill;
  private tenure: number;
  private paymentType: PaymentMethods;
  private interest: number;

  public price;
  public meetBillReq;

  constructor(bill: Bill, { paymentType, tenure = 0, interest = 0.02 }: any) {
    this.electricBill = bill;
    this.meetBillReq = bill >= 250 && bill <= 900;
    this.tenure = paymentType == PaymentMethods.CASH ? 0 : tenure;
    this.paymentType = paymentType;
    this.price =
      prices.filter((p) => p.bill >= Number(this.electricBill))[0] ?? {};
    this.interest = interest;
  }

  getSavings(): number {
    return this.price.savings;
  }

  getSystemSize(): number {
    return this.price.size;
  }

  getROI(): number {
    return this.price.price / this.getSavings() / 12;
  }

  getCost(): number {
    const interest = this.price.price * this.interest * this.tenure;
    const cost = this.price.price + interest;

    const loanInterest = 0.065;

    if (this.paymentType === PaymentMethods.LOAN)
      return this.price.price * (1.05 + 10 * loanInterest);
    return this.paymentType == PaymentMethods.CASH ? this.price.price : cost;
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
