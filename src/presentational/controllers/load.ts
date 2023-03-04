import { ILoadUsecase } from "../../domain/usecases/load";
import { Controller } from "../../main/adapter/adapter";
import { error, noContent, ok } from "../helpers/http-response";
import { httpResponse } from "../protocols/httpResponse";

export class LoadController<P, R> implements Controller {
  constructor(private readonly loadUsecase: ILoadUsecase<P, R>) {}
  public async handle(params: P): Promise<httpResponse> {
    try {
      const data = await this.loadUsecase.load(params);
      if (!data) return noContent();
      return ok(data);
    } catch (err) {
      return error(err as Error);
    }
  }
}
