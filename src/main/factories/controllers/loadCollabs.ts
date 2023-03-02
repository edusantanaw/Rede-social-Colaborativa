import { LoadCollabsController } from "../../../presentational/controllers/loadCollabs";
import { makeLoadCollabsUsecase } from "../usecases/loadCollabs";

export function makeLoadCollabsController() {
  return new LoadCollabsController(makeLoadCollabsUsecase());
}
