import { LoadByIdController } from "../../../../presentational/controllers/loadById";
import { IProject } from "../../../../types/project";
import { makeLoadProjectByIdUsecase } from "../../usecases/loadProjectById";

export function makeLoadProjectByIdController() {
  return new LoadByIdController<IProject>(makeLoadProjectByIdUsecase());
}
