import { IAcceptOrDeclineInviteUsecase } from "../../domain/usecases/acceptOrDeclineInvite";import { Controller } from "../../main/adapter/adapter";
import { badRequest, error, ok } from "../helpers/http-response";

type data = {
  inviteId: string;
  accepted: boolean;
};

export class AcceptOrDeclineInviteController implements Controller {
  constructor(
    private readonly acceptOrDeclineInviteUsecase: IAcceptOrDeclineInviteUsecase
  ) {}
  public async handle({ inviteId, accepted }: data) {
    try {
      if (!inviteId) return badRequest("O id do convite é necessario!");
      if (typeof accepted !== "boolean")
        return badRequest("O status é necessario!");
      await this.acceptOrDeclineInviteUsecase.update(inviteId, accepted);
      return ok(true);
    } catch (err) {
      return error(err as Error);
    }
  }
}
