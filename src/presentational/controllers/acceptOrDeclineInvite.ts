import { IAcceptOrDeclineInviteUsecase } from "../../domain/usecases/acceptOrDeclineInvite";
import { badRequest, error, ok } from "../helpers/http-response";

type data = {
  inviteId: string;
  status: string;
};

export class AcceptOrDeclineInviteController {
  constructor(
    private readonly acceptOrDeclineInviteUsecase: IAcceptOrDeclineInviteUsecase
  ) {}
  public async handle({ inviteId, status }: data) {
    try {
      if (!inviteId) return badRequest("Invite id is required!");
      if (!status) return badRequest("Status is required!");
      if (status !== "accepted" && status !== "declined")
        return badRequest("Status invalid!");
      await this.acceptOrDeclineInviteUsecase.update(inviteId, status);
      return ok(true);
    } catch (err) {
      return error(err as Error);
    }
  }
}
