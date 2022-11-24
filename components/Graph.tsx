import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PaymentMethods } from "../lib/SolarEstimate";

const Graph: React.FC<{ data: any; paymentMethod: PaymentMethods }> = ({
  data,
  paymentMethod,
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 10, left: 4 }}
      >
        <XAxis
          dataKey="year"
          axisLine={false}
          tick={{ fill: "#fff" }}
          tickFormatter={(v) => `Y${v}`}
        />
        <YAxis
          axisLine={false}
          // tick={{ fill: "#bfc0c0" }}
          tick={({ x, y, stroke, payload }) => (
            <g transform={`translate(${x},${y})`}>
              <text
                className=""
                x={0}
                y={0}
                dy={4}
                textAnchor="end"
                fill="#bfc0c0"
              >
                RM {payload.value / 1000}k
              </text>
            </g>
          )}
          scale="linear"
          tickFormatter={(tick) => tick.toLocaleString()}
          allowDecimals={false}
        />
        <Tooltip
          content={CustomTooltip}
          cursor={false}
          wrapperStyle={{
            outline: "none",
          }}
        />

        <Legend formatter={(v) => v.charAt(0).toUpperCase() + v.slice(1)} />

        <CartesianGrid
          vertical={false}
          strokeDasharray={"4 4"}
          stroke="#FFF"
          strokeOpacity={0.25}
        />

        <Bar
          maxBarSize={20}
          name="Savings"
          dataKey="savings"
          stackId={"a"}
          fill="#FFCE00"
        />

        <Bar
          maxBarSize={20}
          name="Paid to TNB"
          dataKey="bill"
          stackId={"a"}
          fill="#ff5714"
        />

        {paymentMethod !== PaymentMethods.CASH && (
          <Bar
            maxBarSize={20}
            name="System Payment"
            dataKey="payment"
            stackId={"b"}
            fill="#b1c1c0"
          />
        )}
      </BarChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border-0 px-4 py-3 rounded shadow-lg outline-none">
        <span className="font-semibold">Year {label}</span>
        <div className="mt-2 flex flex-row gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-600">Total Savings</span>
            <span className="text-sm font-semibold">
              RM {payload[1].value.toFixed(0)}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-600">Paid to TNB</span>
            <span className="text-sm font-semibold">
              RM {payload[0].value.toFixed(0)}
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};
export default Graph;
