import { ICreateUserUsecase } from "../../domain/usecases/createUserUsecase";
import { Controller } from "../../main/adapter/adapter";
import { IUserSchema } from "../../validation/schema/createUserSchema";
import { IValidSchema } from "../../validation/validSchema";
import { badRequest, created, error } from "../helpers/http-response";

export class CreateUserController implements Controller {
  constructor(
    private readonly validSchema: IValidSchema,
    private readonly createUserUsecase: ICreateUserUsecase
  ) {}

  public async handle(data: IUserSchema) {
    try {
      const { error } = this.validSchema.valid(data);
      if (error) return badRequest(error.message);
      const { user, token } = await this.createUserUsecase.execute(data);
      return created({ user, token });
    } catch (err) {
      return error(err as Error);
    }
  }
}
