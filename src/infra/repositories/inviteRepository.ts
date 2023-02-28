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
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (allInvites.length == 0) return null;
    return allInvites;
  }
}
