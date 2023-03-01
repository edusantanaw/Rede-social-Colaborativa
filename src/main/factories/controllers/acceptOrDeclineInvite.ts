import { AcceptOrDeclineInviteController } from "../../../presentational/controllers/acceptOrDeclineInvite";
import { makeAcceptOrDeclineInviteUsecase } from "../usecases/acceptOrDeclineInvite";

export function makeAcceptOrDeclieInviteController() {
  return new AcceptOrDeclineInviteController(
    makeAcceptOrDeclineInviteUsecase()
  );
}
