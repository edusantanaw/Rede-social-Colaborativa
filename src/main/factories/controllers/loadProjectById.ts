import { LoadProjectByIdContoller } from "../../../presentational/controllers/loadProjectById";
import { makeLoadProjectByIdUsecase } from "../usecases/loadProjectById";

export function makeLoadProjectByIdController() {
  return new LoadProjectByIdContoller(makeLoadProjectByIdUsecase());
}
