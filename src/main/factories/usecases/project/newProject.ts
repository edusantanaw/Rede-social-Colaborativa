import { NewProjectUsecase } from "../../../data/usecases/newProject";
import { ProjectRepository } from "../../../infra/repositories/projectRepository";

export function makeNewProjectUsecase() {
  const projectRepository = new ProjectRepository();
  return new NewProjectUsecase(projectRepository);
}
