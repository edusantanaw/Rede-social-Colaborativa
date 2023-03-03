import { ILoadAll } from "../../domain/usecases/ILoadInvites";
import { invites } from "../../types/invites";
import { badRequest, error, noContent, ok } from "../helpers/http-response";

type data = {
  userId: string;
};

export class LoadInviteController {
  constructor(private readonly loadInvitesUsecase: ILoadAll<invites>) {}

  public async handle({ userId }: data) {
    try {
      if (!userId) return badRequest("User id is required!");
      const invites = await this.loadInvitesUsecase.loadAll(userId);
      if (!invites) return noContent();
      return ok(invites);
    } catch (err) {
      return error(err as Error);
    }
  }
}
