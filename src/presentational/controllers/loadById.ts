import { ILoadByIdUsecase } from "../../domain/usecases/loadById";
import { Controller } from "../../main/adapter/adapter";
import { badRequest, error, noContent, ok } from "../helpers/http-response";

type data = { id: string };

export class LoadByIdController<T> implements Controller {
  constructor(private readonly usecase: ILoadByIdUsecase<T>) {}
  public async handle({ id }: data) {
    try {
      if (!id) return badRequest("Id is required!");
      const data = await this.usecase.load(id);
      if (!data) return noContent();
      return ok(data);
    } catch (err) {
      return error(err as Error);
    }
  }
}
