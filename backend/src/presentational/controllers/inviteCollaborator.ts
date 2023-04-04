import { IInviteCollaboratorUsecase } from "../../domain/usecases/inviteCollaborator";
import { Controller } from "../../main/adapter/adapter";
import { badRequest, error, ok } from "../helpers/http-response";

type data = {
  invitedId: string;
  projectId: string;
};

export class InviteCollaboratorController implements Controller {
  constructor(
    private readonly inviteCollaboratorUsecase: IInviteCollaboratorUsecase
  ) {}

  public async handle(data: data) {
    try {
      const { invitedId, projectId } = data;
      if (!invitedId) return badRequest("O id do convite é necessario!");
      if (!projectId) return badRequest("O id do projeto é necessario!");
      await this.inviteCollaboratorUsecase.invite(data);
      return ok(true);
    } catch (e) {
      return error(e as Error);
    }
  }
}
