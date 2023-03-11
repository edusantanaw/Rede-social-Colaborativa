import { Invite } from "../../domain/entities/invite";
import { invites } from "../prisma";

export class InviteRepository {
  public async invite(data: Invite) {
    await invites.create({
      data: {
        ...data.getInvite(),
      },
    });
  }

  public async loadAll(userId: string) {
    const allInvites = await invites.findMany({
      where: {
        invitedId: userId,
        accepted: undefined
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (allInvites.length == 0) return null;
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
