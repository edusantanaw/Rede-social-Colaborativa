import { project } from "../prisma";
import { Project } from "../../domain/entities/project";

export class ProjectRepository {
  public save(data: Project) {
    const newProject = project.create({
      data: {
        id: data.getId(),
        name: data.getName(),
        description: data.getDescription(),
        ownerId: data.getOwner(),
      },
    });
    return newProject;
  }
}
