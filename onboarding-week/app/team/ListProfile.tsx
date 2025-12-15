export default function ListProfile({username, avatar, email} : { username: string, avatar: string, email: string }) {

    return (
        <div className="flex items-center">
            <img src={avatar} className="w-8 h-8 object-contain m-2 rounded-full border border-blue-400" />
            <div className="flex flex-col">
                <span className="text-gray-100">{username}</span>
                <span className="text-gray-400 text-sm">{email}</span>
            </div>
        </div>
    )
}