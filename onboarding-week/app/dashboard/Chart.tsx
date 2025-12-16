import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { format } from "date-fns";
import { Metric } from "@/graphql/types";

type Metrics = {
    metrics: Metric[];
}

export default function Chart({data} : {data : Metrics}) {
  const chartData = data.metrics.map((metric) => ({
    revenue: metric.revenue,
    date: format(new Date(parseInt(metric.date)), "MMM dd")
  }));

  console.log(chartData)

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={chartData}
        className="bg-white rounded-md border shadow"
      >
        <XAxis dataKey="date" label={{
            value: "Date",
            position: "insideBottom",
            offset: -3,
            style: { textAnchor: "middle" }
        }} />
        <YAxis label={{ value: "Revenues", angle: -90, position: "insideLeft", offset: 30, style: { textAnchor: "middle" } }} />
        <Line type="monotone" dataKey="revenue" className="stroke-blue-800" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}


export function Chartv2({data} : {data : Metrics}) {

  const chartData = data.metrics.map((metric) => ({
    revenue: metric.revenue,
    date: format(new Date(parseInt(metric.date)), "MMM dd")
  }));

  return (
    <LineChart
      data={chartData}
      className="bg-white rounded-md border shadow w-1/2 m-auto"
    >
      <XAxis dataKey="date" label={{
        value: "Date",
        position: "insideBottom",
        offset: -3,
        style: { textAnchor: "middle" }
      }} />
      <YAxis label={{ value: "Revenues", angle: -90, position: "insideLeft", offset: 15, style: { textAnchor: "middle" } }} />
      <Line type="monotone" dataKey="revenue" className="stroke-blue-800" />
    </LineChart>
  );
}