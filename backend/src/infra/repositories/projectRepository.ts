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
    const maybeProject = await project.findFirst({ where: { id } });
    return maybeProject;
  }

  public async loadByName(name: string) {
    const projects = (await prisma.$queryRaw`
      SELECT * FROM project 
      WHERE lower(name) LIKE ${`'%${name.toLowerCase()}%'`};`) as IProject[];
    return projects;
  }
}
