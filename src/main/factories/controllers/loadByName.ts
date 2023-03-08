import { LoadController } from "../../../presentational/controllers/load";
import { makeLoadProjectByNameUsecase } from "../usecases/loadProjectByName";

export function makeLoadProjectByName() {
  return new LoadController(makeLoadProjectByNameUsecase());
}
