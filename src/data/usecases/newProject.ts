import { Project } from "../../domain/entities/project";
import { INewProjectUsecase } from "../../domain/usecases/newProject";
import { IProject } from "../../types/project";
import { ICreateRepository } from "../protocols/repositories/createRepository";

export class NewProjectUsecase implements INewProjectUsecase {
  constructor(
    private readonly projectRepository: ICreateRepository<IProject, Project>
  ) {}

  public async create(data: IProject): Promise<IProject> {
    const project = new Project(data);
    const newProject = await this.projectRepository.create(project);
    return newProject;
  }
}
