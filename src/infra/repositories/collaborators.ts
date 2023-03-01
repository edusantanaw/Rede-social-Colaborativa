import { randomUUID } from "crypto";
import { collaborators } from "../prisma";

export class CollaboratorRepository {
  public async create(projectId: string, userId: string) {
    await collaborators.create({
      data: {
        id: randomUUID(),
        projectId,
        userId,
      },
    });
  }
}
