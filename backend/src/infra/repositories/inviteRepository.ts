import { Invite } from "../../domain/entities/invite";
import { invites as IInvites } from "../../types/invites";
import { invites, prisma } from "../prisma";

export class InviteRepository {
  public async invite(data: Invite) {
    await invites.create({
      data: {
        ...data.getInvite(),
      },
    });
  }

  public async loadAll(userId: string) {
    const allInvites = await prisma.$queryRaw`
      select invites.id, project.name, "perfilImage" from invites inner join project 
      on project.id = invites."projectId" 
      where "invitedId" = ${userId} and accepted is null
      order by invites."createdAt" asc;
      ;
    ` as IInvites[] 
    return allInvites;
  }

  public async loadById(id: string){
    const invite = await invites.findFirst({where: {id: id}})
    if(!invite) return null;
    return invite;
  }

  public async updateStatus(inviteId: string, accepted: boolean) {
    await invites.update({
      where: {
        id: inviteId,
      },
      data: {
        accepted: accepted,
      },
    });
  }
}
