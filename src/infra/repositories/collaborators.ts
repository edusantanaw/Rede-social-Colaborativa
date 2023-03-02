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

  public async load(projectId: string) {
    const collabs = await collaborators.findMany({
      where: {
        projectId,
      },
    });
    return collabs;
  }
}
