import { subDays, format } from "date-fns";
import { Metric } from "@/graphql/types";

type ExportDataProps = {
    metrics: Metric[]
}

export default function ExportData({metrics}: ExportDataProps ) {

    function exportToCSV(metrics: Metric[]) {
        const headers = ['Date', 'Revenue', 'Users', 'Conversion', 'Growth'];
        const rows = metrics.map(m => [
                format(new Date(Number(m.date)), 'yyyy-MM-dd'),
                m.revenue,
                m.users,
                m.conversion,
        ]);

        const csvContent = [
            headers.join(','),
            ...rows.map(row => row.join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `metrics-${format(new Date(), 'yyyy-MM-dd')}.csv`;
        link.click();
        URL.revokeObjectURL(url);
    }

    function exportToJSON(metrics: Metric[]) {
        const jsonContent = JSON.stringify(metrics, null, 2);
        const blob = new Blob([jsonContent], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `metrics-${format(new Date(), 'yyyy-MM-dd')}.json`;
        link.click();
        URL.revokeObjectURL(url);
    }

    return (
        <div className="flex gap-2">
            <button onClick={() => exportToCSV(metrics)} className="bg-blue-400 px-2 py-1 rounded-md w-fit">Export to CSV</button>
            <button onClick={() => exportToJSON(metrics)} className="bg-blue-400 px-2 py-1 rounded-md w-fit">Export to JSON</button>
        </div>
    )
}