"use client"
import useMetrics from "./metrics"
import { useMemo, useState } from "react";
import Card from "./Card";

export default function Cards(){

    const [filter, setFilter] = useState("WOW");
    
    const { startDate, endDate } = useMemo(() => {
        const end = new Date();
        const interval = filter === "WOW" ? 7 : 30;
        const start = new Date(end);
        start.setDate(end.getDate() - interval);
        return { 
            startDate: start.toISOString(), 
            endDate: end.toISOString() 
        };
    }, [filter]);

    const { data: currentMetrics, isLoading: loadingCurrent, error: errorCurrent } = useMetrics(
        startDate,
        endDate,
        "cmj2mguys00005j238nh4pzo5"
    );

    const { data: prevMetrics, isLoading: loadingPrev ,error: errorPrev } = useMetrics(
        new Date(new Date(startDate).getTime() - (new Date(endDate).getTime() - new Date(startDate).getTime())).toISOString(),
        startDate,
        "cmj2mguys00005j238nh4pzo5"
    );

    const stats = useMemo(() => {
        if (!currentMetrics || !prevMetrics || currentMetrics.length === 0 || prevMetrics.length === 0) return null;

        const currentRevenue = currentMetrics.reduce((sum, m) => sum + m.revenue, 0);
        const prevRevenue = prevMetrics.reduce((sum, m) => sum + m.revenue, 0);
        const revenueChange = ((currentRevenue - prevRevenue) / prevRevenue) * 100;

        const currentUsers = currentMetrics.reduce((sum, m) => sum + m.users, 0);
        const prevUsers = prevMetrics.reduce((sum, m) => sum + m.users, 0);
        const usersChange = ((currentUsers - prevUsers) / prevUsers) * 100;

        return {
            revenueChange: revenueChange.toFixed(1),
            revenueTrend: revenueChange >= 0,
            usersChange: usersChange.toFixed(1),
            usersTrend: usersChange >= 0
        };
    }, [currentMetrics, prevMetrics]);

    const isLoading = loadingCurrent || loadingPrev;

    const isError = errorCurrent || errorPrev;

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error...</p>
    if (!stats) return <p>No data available</p>

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-center gap-2">
                <button onClick={() => setFilter("WOW")} className="bg-blue-500 rounded-md px-2 py-1 transition duration-100 ease-in-out hover:bg-blue-400" >WOW</button>
                <button onClick={() => setFilter("MOM")} className="bg-blue-500 rounded-md px-2 py-1 transition duration-100 ease-in-out hover:bg-blue-400">MOM</button>
            </div>
            <div className="flex h-30 gap-4 px-20">
                <Card change={stats.usersChange} trend={stats.usersTrend} title="Users" />
                <Card change={stats.revenueChange} trend={stats.revenueTrend} title="Revenue" />
            </div>
        </div>
    )
}