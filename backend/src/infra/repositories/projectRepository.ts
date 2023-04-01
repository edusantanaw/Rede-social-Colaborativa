import { prisma, project } from "../prisma";
import { Project } from "../../domain/entities/project";
import { IProject } from "../../types/project";

export class ProjectRepository {
  public async create(data: Project) {
    const newProject = await project.create({
      data: {
        id: data.getId(),
        name: data.getName(),
        description: data.getDescription(),
        ownerId: data.getOwner(),
      },
    });
    return newProject as IProject;
  }

  public async loadById(id: string) {
    const maybeProject = await prisma.$queryRaw`
      select project.id, users.id as "userId", project.name, users.name as "ownerName", "perfilImage", "perfilPhoto", 
      count(collaborators."userId")::numeric::integer as "qtdCollabs",project."createdAt", project.description from project inner join users
      on users.id = project."ownerId" inner join collaborators 
      on collaborators."projectId" = project.id 
      where project.id = ${id}
      group by project.id, users.id,"perfilImage", "perfilPhoto", project.name, users.name,project.description;
      ` as IProject[];
    return maybeProject[0];
  }

  public async loadByName(name: string) {
    const projects = (await prisma.$queryRaw`
      SELECT * FROM project 
      WHERE lower(name) LIKE ${"%" + name.toLowerCase() + "%"}`) as IProject[];
    return projects;
  }

  public async loadUserProjects(userId: string) {
    const projects = (await prisma.$queryRaw`
      select p.id, p.name, p."perfilImage" from project as p
      left join collaborators as c on c."projectId" = p.id
      where p."ownerId" = ${userId} or c."userId" = ${userId}
      group by p.id, p.name,p."perfilImage";
     `) as IProject[];
    return projects;
  }

}
