import { LoadController } from "../../../../presentational/controllers/load";
import { makeLoadUserByNameUsecase } from "../../usecases/user/loadUserByname";

export function makeLoadUserByNameController() {
  return new LoadController(makeLoadUserByNameUsecase());
}
