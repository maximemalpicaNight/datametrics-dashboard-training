"use client"

import { Metric } from "@/graphql/types";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

type Metrics = {
    metrics: Metric[];
}

export default function Cards({data} : {data : Metrics}) {

    const [statistics, setStatistics] = useState([
        {title: "Revenues", description: "Total revenue", value: 0},
        {title: "Users", description: "Total Users", value: 0},
        {title: "Conversions", description: "Total Conversions", value: 0},
        {title: "Growth", description: "Total Growth", value: 0},
    ])

    useEffect(() => {
        if (data) {
            const totalRevenue = data.metrics.reduce((sum:number, metric: Metric) => sum + metric.revenue, 0);
            const totalUsers = data.metrics.reduce((sum:number, metric: Metric) => sum + metric.users, 0);
            const avgConversion = (data.metrics.reduce((sum:number, metric: Metric) => sum + metric.conversion, 0)) / data.metrics.length;
            const avgGrowth = (data.metrics.reduce((sum:number, metric: Metric) => sum + metric.growth, 0)) / data.metrics.length;
            setStatistics([
                {title: "Revenues", description: "Total revenue", value: totalRevenue},
                {title: "Users", description: "Total Users", value: totalUsers},
                {title: "Conversions", description: "Total Conversions", value: avgConversion},
                {title: "Growth", description: "Total Growth", value: avgGrowth},
            ])
        }
    }, [data])

    return (
        <div className="flex gap-2">
            {statistics.map((statistic) => (
                <Card key={statistic.title} className="flex-1">
                    <CardHeader>
                        <CardTitle>{statistic.title}</CardTitle>
                        <CardDescription>{statistic.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <span className="text-gray-400">{statistic.value.toFixed(2)} </span> <span className="text-xs text-gray-200"> {statistic.title}</span>
                    </CardContent>
                </Card>
            ))}
        </div>
    )

}