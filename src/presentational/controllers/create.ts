import { ICreateUsecase } from "../../domain/usecases/create";
import { IValidSchema } from "../../validation/validSchema";
import { badRequest, created, error } from "../helpers/http-response";

export class CreateController<T, R> {
  constructor(
    private readonly createUsecase: ICreateUsecase<T, R>,
    private readonly validSchema: IValidSchema
  ) {}
  public async handle(schema: T) {
    try {
      const { error } = this.validSchema.valid(schema);
      if (error) return badRequest(error.message);
      const data = await this.createUsecase.execute(schema);
      return created(data);
    } catch (err) {
      return error(err as Error);
    }
  }
}
