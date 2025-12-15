export default function ListRoles({roles} : { roles: string}) {

    return (
        <div className="flex items-center">
            {roles}
        </div>
    )
}