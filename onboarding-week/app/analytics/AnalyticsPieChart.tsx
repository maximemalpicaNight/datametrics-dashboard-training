import { AreaChart,CartesianGrid, YAxis, XAxis, Tooltip, Area  } from "recharts"

type AnalyticsPieChartProps = {
  chartData: {
    conversion: string;
    date: number;
    revenue: number;
    users: number;
  }[];
}

export default function AnalyticsPieChart({chartData}: AnalyticsPieChartProps ) {

    return (
        <AreaChart data={chartData} width={600} height={300} className="bg-neutral-800 rounded-md">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area
                type="monotone"
                dataKey="conversion"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                fillOpacity={0.3}
            />
        </AreaChart>
    )
}