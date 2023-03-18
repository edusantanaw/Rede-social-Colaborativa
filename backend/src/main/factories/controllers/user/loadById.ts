import { LoadByIdController } from "../../../../presentational/controllers/loadById";
import { makeLoadUserByIdUsecase } from "../../usecases/user/loadById";

export function makeLoadUserByIdController() {
  return new LoadByIdController(makeLoadUserByIdUsecase());
}
