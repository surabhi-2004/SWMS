import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Mon", usage: 2200 },
  { name: "Tue", usage: 2800 },
  { name: "Wed", usage: 2500 },
  { name: "Thu", usage: 3100 },
  { name: "Fri", usage: 3400 },
  { name: "Sat", usage: 2900 },
  { name: "Sun", usage: 3600 },
];

const UsageBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="usage" fill="#091e3e" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UsageBarChart;
