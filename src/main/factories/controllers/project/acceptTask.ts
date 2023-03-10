import { AcceptTaskController } from "../../../../presentational/controllers/acceptTask";
import { makeAcceptTaskUsecase } from "../../usecases/project/acceptTask";

export function makeAcceptTaskController() {
  return new AcceptTaskController(makeAcceptTaskUsecase());
}
