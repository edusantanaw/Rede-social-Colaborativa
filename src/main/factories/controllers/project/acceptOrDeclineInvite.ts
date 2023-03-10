import { AcceptOrDeclineInviteController } from "../../../../presentational/controllers/acceptOrDeclineInvite";
import { makeAcceptOrDeclineInviteUsecase } from "../../usecases/project/acceptOrDeclineInvite";

export function makeAcceptOrDeclieInviteController() {
  return new AcceptOrDeclineInviteController(
    makeAcceptOrDeclineInviteUsecase()
  );
}
