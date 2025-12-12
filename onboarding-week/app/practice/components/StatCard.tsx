type Card = {
    label: string;
    value: string;
    trend: string;
    change: string;
}

export default function StatCard({label, value, trend, change}: Card) {

    return (
        <div className="border rounded-lg p-6 bg-white w-full">
            <p className="text-sm text-gray-600">{label}</p>
            <p className="text-3xl font-bold mt-2">{value}</p>
            <div className="mt-2 flex items-center">
                <span className={`text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {trend === 'up' ? '↑' : '↓'} {change}
                </span>
            </div>
        </div>
    )
} 