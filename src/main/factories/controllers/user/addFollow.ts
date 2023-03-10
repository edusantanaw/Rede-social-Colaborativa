import { AddFollowController } from "../../../../presentational/controllers/addFollow";
import { makeAddFollowUsecase } from "../../usecases/user/addFollow";

export function makeAddFollowController() {
  return new AddFollowController(makeAddFollowUsecase());
}
