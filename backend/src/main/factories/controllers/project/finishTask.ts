import { FinishTaskController } from "../../../../presentational/controllers/finishTask";
import { makeFinishTaskUsecase } from "../../usecases/project/finishTask";

export function makeFinishTaskController() {
  return new FinishTaskController(makeFinishTaskUsecase());
}
