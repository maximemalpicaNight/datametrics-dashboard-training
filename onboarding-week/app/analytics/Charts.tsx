"use client"

import useMetrics from "./metrics"
import { useState, useMemo } from "react";
import { subDays, format } from "date-fns";
import  AnalyticsLineChart from "./AnalyticsLineChart";
import AnalyticsBarChart from "./AnalyticsBarChart";
import AnalyticsPieChart from "./AnalyticsPieChart"
import Filter from "./Filter";
import Cards from "./Cards";
import ExportData from "./ExportData";

type ChartData = {
    conversion: string;
    date: number;
    revenue: number;
    users: number;
}

export default function Charts() {

    const [filter, setFilter] = useState("7d");
    
    const { startDate, endDate } = useMemo(() => {
        const end = new Date();
        const days = filter === "7d" ? 7 : filter === "30d" ? 30 : 90;
        const start = subDays(end, days);
        return { 
            startDate: start.toISOString(), 
            endDate: end.toISOString() 
        };
    }, [filter]);

    const { data: metrics, isLoading, error } = useMetrics(
        startDate,
        endDate,
        "cmj2mguys00005j238nh4pzo5"
    );

    const chartData = useMemo(() => {
        return metrics?.map((metric: ChartData) => ({
            date: format(new Date(Number(metric.date)), 'MMM dd'),
            revenue: metric.revenue,
            users: metric.users,
            conversion: metric.conversion,
        })) || [];
    }, [metrics]);

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error...</div>

    return (
        <div className="flex flex-col gap-2 px-10">
            <div className="flex gap-2">
                <Filter filter={filter} setFilter={setFilter}/>
                <ExportData metrics={metrics} />
            </div>
            <Cards />
            <div className="flex flex-wrap gap-2 px-8 justify-center">
                <AnalyticsLineChart chartData={chartData} />
                <AnalyticsBarChart chartData={chartData} />
                <AnalyticsPieChart chartData={chartData} />
            </div>
        </div>
    )
}