import { randomUUID } from "crypto";
import { collabs } from "../../types/collabs";
import { collaborators, prisma } from "../prisma";

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

  public async loadAll(projectId: string) {
    console.log(projectId);
    const collabs = await prisma.$queryRaw`
      select users.id, "perfilPhoto", users.name from users left join project
      on project."ownerId" = users.id
      where project.id = ${projectId} or users.id in (
        select "userId" from collaborators 
        where "projectId" = ${projectId}
      )
      ;
    ` as collabs[];

    return collabs;
  }
}
