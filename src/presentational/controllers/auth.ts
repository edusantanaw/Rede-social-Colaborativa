import { IAuthUsecase } from "../../domain/usecases/authUsecase";
import { IAuthSchema } from "../../validation/schema/authSchema";
import { IValidSchema } from "../../validation/validSchema";
import { badRequest, error, ok } from "../helpers/http-response";

export class AuthController {
  constructor(
    private readonly validSchema: IValidSchema,
    private readonly authUsecase: IAuthUsecase
  ) {}

  public async handle(data: IAuthSchema) {
    try {
      const isSchemaValid = this.validSchema.valid(data);
      if (isSchemaValid.error) return badRequest(isSchemaValid.error.message);
      const { token, user } = await this.authUsecase.auth(
        data.email,
        data.password
      );
      return ok({ token, user });
    } catch (e) {
      return error(e as Error);
    }
  }
}
