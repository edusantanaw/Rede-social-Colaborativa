import { ILoadUserProjects } from "../../../domain/usecases/loadUserProjects";
import { IProject } from "../../../types/project";
import { ILoadUserProjectsRepository } from "../../protocols/repositories/loadUserProjects";

export class LoadUserProjectsUsecase implements ILoadUserProjects {
  constructor(
    private readonly projectRepository: ILoadUserProjectsRepository
  ) {}

  public async load({ id }: { id: string }): Promise<IProject[] | null> {
    const projects = await this.projectRepository.loadUserProjects(id);
    if (projects.length === 0) return null;
    return projects;
  }
}
