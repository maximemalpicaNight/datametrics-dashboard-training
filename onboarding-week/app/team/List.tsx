import { TeamMember } from "@/graphql/types"
import ListElement from "./ListElements"

type TeamMembers = {
  teamMembers: TeamMember[]
}

export default function List({data, isAdmin} : {data: TeamMembers, isAdmin:boolean}){

    if (data) {
        return (
            <div className="flex flex-col gap-2 mx-10 bg-neutral-900 rounded-md">
                {data.teamMembers.map((teamMember) => (
                    <ListElement key={teamMember.id} username={teamMember.user.name} avatar={teamMember.user.avatar} email={teamMember.user.email} roles={teamMember.user.role} permissions={teamMember.permissions} isAdmin={isAdmin} id={teamMember.id} />
                ))}
            </div>
        )
    } else {
        return 
    }
    
}