import { ILoadAll } from "../../domain/usecases/ILoadInvites";
import { Controller } from "../../main/adapter/adapter";
import { badRequest, error, noContent, ok } from "../helpers/http-response";

type data = {
  id: string;
};

export class LoadAll<T> implements Controller {
  constructor(private readonly loadAllUsecase: ILoadAll<T>) {}

  public async handle({ id }: data) {
    try {
      if (!id) return badRequest("id is required!");
      const invites = await this.loadAllUsecase.loadAll(id);
      if (!invites) return noContent();
      return ok(invites);
    } catch (err) {
      return error(err as Error);
    }
  }
}
