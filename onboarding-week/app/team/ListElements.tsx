import ListProfile from "./ListProfile"
import ListRoles from "./ListRoles"
import ListPermissions from "./ListPermissions"
import AdminActions from "./AdminActions";

export default function ListElement({username, avatar, email, roles, permissions, isAdmin, id}: { username: string, avatar: string, email: string, roles: string, permissions: string, isAdmin: boolean, id:string }) {

    return (
        <>
            <div className="flex w-full justify-between px-4 py-2">
                <ListProfile username={username} avatar={avatar} email={email} />
                <ListRoles roles={roles}/>
                <ListPermissions permissions={permissions} isAdmin={isAdmin} id={id}/>
                {isAdmin && (
                    <AdminActions id={id}/>
                )}
            </div>
            <div className="border border-b "></div>
        </>
    )
}