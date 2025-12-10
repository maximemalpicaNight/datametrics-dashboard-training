export default function Badge({status, style} : {status: string, style: string}) {
    return (
        <span className={`px-3 py-1 ${style} rounded-full text-sm`}>{status}</span>
    )
}