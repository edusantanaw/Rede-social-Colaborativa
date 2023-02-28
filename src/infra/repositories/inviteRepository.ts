import { randomUUID } from "crypto";
import { invites } from "../prisma";

export class InviteRepository {
  public async invite(invitedId: string, projectId: string) {
    await invites.create({
      data: {
        id: randomUUID(),
        invitedId,
        projectId,
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
      }

    });
    if (allInvites.length == 0) return null;
    return allInvites;
  }
}
