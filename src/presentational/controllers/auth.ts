import { IAuthUsecase } from "../../domain/usecases/authUsecase";
import { Controller } from "../../main/adapter/adapter";
import { IAuthSchema } from "../../validation/schema/authSchema";
import { IValidSchema } from "../../validation/validSchema";
import { badRequest, error, ok } from "../helpers/http-response";

export class AuthController implements Controller {
  constructor(
    private readonly validSchema: IValidSchema,
    private readonly authUsecase: IAuthUsecase
  ) {}

  public async handle(data: IAuthSchema) {
    try {
      const { error } = this.validSchema.valid(data);
      if (error) return badRequest(error.message);
      const auth = await this.authUsecase.auth(data.email, data.password);
      return ok(auth);
    } catch (e) {
      return error(e as Error);
    }
  }
}
