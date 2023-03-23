import { LoadController } from "../../../../presentational/controllers/load";
import { makeLoadUserProjectsUsecase } from "../../usecases/project/loadUserProjects";

export function makeLoadUserProjectController() {
  return new LoadController(makeLoadUserProjectsUsecase());
}
