import { LineChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Line  } from "recharts";

type AnalyticsLineChartProps = {
  chartData: {
    conversion: string;
    date: number;
    revenue: number;
    users: number;
  }[];
}

export default function AnalyticsLineChart({chartData}: AnalyticsLineChartProps ) {

    return (
        <ResponsiveContainer width={600} height={300} className="bg-neutral-800 rounded-md">
            <LineChart data={chartData} className="bg-neutral-800 rounded-md">
                <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                fill="url(#colorRevenue)"
                />
            </LineChart>
        </ResponsiveContainer>
    )
}