import { IRecoveryPassword } from "../../domain/usecases/recoveryPassword";
import { Controller } from "../../main/adapter/adapter";
import { IRecoverySchema } from "../../validation/schema/recoveryPassword";
import { IValidSchema } from "../../validation/validSchema";
import { badRequest, error, ok } from "../helpers/http-response";
import { httpResponse } from "../protocols/httpResponse";

export class RecoveryPasswordController implements Controller {
  constructor(
    private readonly recoveryPasswordUsecase: IRecoveryPassword,
    private readonly validSchema: IValidSchema
  ) {}

  public async handle(data: IRecoverySchema): Promise<httpResponse> {
    try {
      const { error } = this.validSchema.valid(data);
      if (error) return badRequest(error.message);
      if(data.password !== data.confirmPassword) return badRequest("As senha deve ser iguais!")
      const token = await this.recoveryPasswordUsecase.execute(data);
      return ok(token);
    } catch (err) {
      return error(err as Error);
    }
  }
}
