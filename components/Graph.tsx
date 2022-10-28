import { type } from "os";
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
import { string } from "yup";

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border-0 px-4 py-3 rounded shadow-lg outline-none">
        <span className="font-semibold">Year {label}</span>
        <div className="mt-2 flex flex-row gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-600">Total Savings</span>
            <span className="text-sm font-semibold">RM {payload[1].value}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-600">Paid to TNB</span>
            <span className="text-sm font-semibold">RM {payload[0].value}</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const Graph: React.FC<{ data: any }> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={300} data={data} margin={{ top: 10 }}>
        <XAxis
          dataKey="year"
          axisLine={false}
          tick={{ fill: "#fff" }}
          tickFormatter={(v) => `Y${v}`}
        />
        <YAxis axisLine={false} tick={{ fill: "#bfc0c0" }} />
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
          maxBarSize={24}
          name="Paid to TNB"
          dataKey="cost"
          stackId={"a"}
          fill="#6E7E97"
        />
        <Bar
          maxBarSize={24}
          name="Savings"
          dataKey="savings"
          stackId={"a"}
          fill="#FFCE00"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Graph;
