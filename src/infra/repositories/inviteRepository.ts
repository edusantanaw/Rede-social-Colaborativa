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
}
