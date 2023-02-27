import { ICreateUserUsecase } from "../../domain/usecases/createUserUsecase";
import { IUserSchema } from "../../validation/schema/createUserSchema";
import { IValidSchema } from "../../validation/validSchema";
import { badRequest, created, error } from "../helpers/http-response";

export class CreateUserController {
  constructor(
    private readonly validSchema: IValidSchema,
    private readonly createUserUsecase: ICreateUserUsecase
  ) {}

  public async handle(data: IUserSchema) {
    try {
      const isSchemaValid = this.validSchema.valid(data);
      if (isSchemaValid.error) return badRequest(isSchemaValid.error.message);
      const { user, token } = await this.createUserUsecase.execute(data);
      return created({ user, token });
    } catch (err) {
      const e = err as Error;
      return error(e.message);
    }
  }
}
