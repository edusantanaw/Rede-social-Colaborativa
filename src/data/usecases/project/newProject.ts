import { Project } from "../../domain/entities/project";
import { ICreateUsecase } from "../../domain/usecases/create";
import { IProject } from "../../types/project";
import { ICreateRepository } from "../protocols/repositories/createRepository";

export class NewProjectUsecase implements ICreateUsecase<IProject, IProject> {
  constructor(
    private readonly projectRepository: ICreateRepository<IProject, Project>
  ) {}

  public async execute(data: IProject): Promise<IProject> {
    const project = new Project(data);
    const newProject = await this.projectRepository.create(project);
    return newProject;
  }
}
