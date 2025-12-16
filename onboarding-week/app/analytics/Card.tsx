import { cn } from "@/lib/cn";

export default function Card({title, change, trend}: {title:string, change:string, trend:boolean}){

    return (
        <div className="w-full bg-neutral-800 rounded-md h-full p-4 border border-neutral-700">
            <div className="text-3xl"> 
                {title} 
            </div>
            <div className="flex gap-2">
                <p className={cn("text-xl", trend ? "text-green-400" : "text-red-400")}>{trend ? "+" : "-" } {change} </p>
                {trend ? ( 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>
                ): (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 17h6v-6"/><path d="m22 17-8.5-8.5-5 5L2 7"/></svg>
                )}
            </div>
        </div>
    )
}