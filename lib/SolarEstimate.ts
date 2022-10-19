type Bill = number;
type Tariff = {
  price: number;
  usage: number;
  totalUsage: number;
  totalCost: number;
};

const TARIFFS: Array<Tariff> = [
  { price: 0.218, usage: 200 },
  { price: 0.334, usage: 100 },
  { price: 0.516, usage: 300 },
  { price: 0.546, usage: 300 },
  { price: 0.571, usage: Infinity },
].reduce(
  (acc, curr, i) => {
    const { price, usage } = curr;
    const totalUsage = acc[i].totalUsage + usage;
    const totalCost = price * usage + acc[i].totalCost;
    return [...acc, { ...curr, totalUsage, totalCost }];
  },
  [{ price: 0, usage: 0, totalUsage: 0, totalCost: 0 }]
);

class Estimate {
  private electricBill;
  public meetBillReq;

  constructor(bill: Bill) {
    this.electricBill = bill;
    this.meetBillReq = bill >= 250 && bill <= 900;
  }

  private getRound(value: number, multiple: number = 1): number {
    return Math.round(value / multiple) * multiple;
  }

  private getLinearValue(
    x: number,
    multiplier: number,
    offset: number
  ): number {
    return x * multiplier + offset;
  }

  getUsage(): number {
    const tariffIdx = TARIFFS.findIndex((t) => this.electricBill < t.totalCost);
    const usageCents = this.electricBill - TARIFFS[tariffIdx - 1].totalCost;
    const usage = usageCents / TARIFFS[tariffIdx].price;
    const totalUsage = TARIFFS[tariffIdx - 1].totalUsage + usage;

    return Number(totalUsage.toFixed(0));
  }

  getSavings(): number {
    const m = 0.5953;
    const o = -199.45;
    const r = this.getLinearValue(this.getUsage(), m, o);
    return this.getRound(r, 5);
  }

  getSystemSize(): number {
    const m = 0.0095;
    const o = -2.8252;
    const r = this.getLinearValue(this.getUsage(), m, o);
    return this.getRound(r, 0.25);
  }

  getROI(): number {
    const c = 48.957;
    const e = -0.31;
    const r = c * this.getUsage() ** e;
    return this.getRound(r, 0.1);
  }

  generateGraphData() {
    if (!this.meetBillReq) return [null];

    const yrROI = Number(this.getROI().toString().split(".")[0]);
    const moROI = Number(this.getROI().toString().split(".")[1]);

    let costs: any = [];
    for (let i = 1; i <= Math.round(this.getROI()) + 1; i++) {
      const year = i;
      const savings = this.getSavings() * year * 12;
      const cost = (this.electricBill - this.getSavings()) * year * 12;

      costs = [...costs, { year, savings, cost }];
    }
    return costs;
  }
}

export default Estimate;
