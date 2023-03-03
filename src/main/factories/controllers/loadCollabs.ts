import { LoadByIdController } from "../../../presentational/controllers/loadById";
import { makeLoadCollabsUsecase } from "../usecases/loadCollabs";

export function makeLoadCollabsController() {
  return new LoadByIdController(makeLoadCollabsUsecase());
}
