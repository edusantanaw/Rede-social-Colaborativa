import { LoadUserProjectsUsecase } from "../../../../data/usecases/project/loadUserProjects";
import { ProjectRepository } from "../../../../infra/repositories/projectRepository";

export function makeLoadUserProjectsUsecase() {
  const projectRepository = new ProjectRepository();
  return new LoadUserProjectsUsecase(projectRepository);
}
