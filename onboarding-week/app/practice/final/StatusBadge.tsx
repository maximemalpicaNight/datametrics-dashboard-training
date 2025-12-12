export default function StatusBadge({status}: {status: boolean}) {

    return (
        <div>
            {status ? ( 
                <div className="flex gap-2 items-center"> 
                    <span>Active</span> 
                    <span className="h-2 w-2 rounded-full bg-green-500 opacity-75"></span>
                </div>
            ) : (
                <div className="flex gap-2 items-center"> 
                    <span>Completed</span> 
                    <span className="h-2 w-2  rounded-full bg-red-500 opacity-75"></span>
                </div>
            )}
        </div>
    )
}