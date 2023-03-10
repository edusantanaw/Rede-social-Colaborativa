import { LoadController } from "../../../../presentational/controllers/load";
import { makeLoadProjectByNameUsecase } from "../../usecases/project/loadProjectByName";

export function makeLoadProjectByName() {
  return new LoadController(makeLoadProjectByNameUsecase());
}
