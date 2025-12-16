export default function Filter({filter, setFilter}: {filter: string, setFilter: (filter:string) => void}) {

    return (
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="bg-blue-400 px-2 py-1 rounded-md w-fit">
            <option value="7d">7d</option>
            <option value="30d">30d</option>
            <option value="90d">90d</option>
        </select>

    )
}