import { AcceptTaskController } from "../../../presentational/controllers/acceptTask";
import { makeAcceptTaskUsecase } from "../usecases/acceptTask";

export function makeAcceptTaskController() {
  return new AcceptTaskController(makeAcceptTaskUsecase());
}
