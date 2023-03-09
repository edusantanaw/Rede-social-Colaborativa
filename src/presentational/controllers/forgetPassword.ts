import { IForgetPassword } from "../../domain/usecases/forgetPassword";
import { Controller } from "../../main/adapter/adapter";
import { badRequest, error, ok } from "../helpers/http-response";
import { httpResponse } from "../protocols/httpResponse";

type data = {
  email: string;
};

export class ForgetPasswordController implements Controller {
  constructor(private readonly forgetPasswordUsecase: IForgetPassword) {}

  public async handle({ email }: data): Promise<httpResponse> {
    try {
      if (!email) return badRequest("Email is required!");
      const cod = await this.forgetPasswordUsecase.execute(email);
      return ok(cod);
    } catch (err) {
      return error(err as Error);
    }
  }
}
