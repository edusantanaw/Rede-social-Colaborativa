import { LoadByIdController } from "../../../../presentational/controllers/loadById";
import { makeLoadFollowingUsecase } from "../../usecases/user/loadFollowingt";

export function makeLoadFollowController() {
  return new LoadByIdController(makeLoadFollowingUsecase());
}
