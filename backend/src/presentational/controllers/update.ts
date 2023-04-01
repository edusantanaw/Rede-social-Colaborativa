import { IUpdateUsecase } from "../../domain/usecases/udate";
import { IValidSchema } from "../../validation/validSchema";
import { badRequest, error, ok } from "../helpers/http-response";

export class UpdateController<T, S> {
  constructor(
    private readonly schemaValidator: IValidSchema,
    private readonly updateUsecase: IUpdateUsecase<S>
  ) {}

  public async handle(data: S) {
    try {
      console.log(data);
      const { error } = this.schemaValidator.valid(data);
      if (error) return badRequest(error.message);
      const response = await this.updateUsecase.execute(data);
      return ok(response);
    } catch (err) {
      return error(err as Error);
    }
  }
}
