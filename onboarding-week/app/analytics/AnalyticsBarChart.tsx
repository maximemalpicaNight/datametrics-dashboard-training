
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip  } from "recharts";

type AnalyticsBarChartProps = {
  chartData: {
    conversion: string;
    date: number;
    revenue: number;
    users: number;
  }[];
}

export default function AnalyticsBarChart({chartData}: AnalyticsBarChartProps ) {

    return (
        <BarChart data={chartData} width={600} height={300} className="bg-neutral-800 rounded-md">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#10b981" />
        </BarChart>
    )
}