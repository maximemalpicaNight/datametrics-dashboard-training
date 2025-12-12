
type FilterProps = {
    setFilter: (filter: 'all' | 'active' | 'completed' ) => void;
}

export default function Filter({setFilter}: FilterProps) {
    
    return (
        <div className="flex gap-2">
            <button onClick={() => setFilter("all")} >All</button> 
            <button onClick={() => setFilter("active")}>Active</button> 
            <button onClick={() => setFilter("completed")}>Completed</button> 
        </div>
    )
}