import { IForgetPassword } from "../../../domain/usecases/forgetPassword";
import { data } from "../../../utils/senderMail";
import { ILoadUserByEmailRepository } from "../../protocols/repositories/authRepository";
import { randomUUID } from "node:crypto";

interface ISendMail {
  send: (data: data) => Promise<void>;
}

export class ForgetPasswordUsecase implements IForgetPassword {
  constructor(
    private readonly sendMail: ISendMail,
    private readonly userRepositoy: ILoadUserByEmailRepository
  ) {}
  public async execute(email: string): Promise<string> {
    const maybeUser = await this.userRepositoy.loadByEmail(email);
    if (!maybeUser) throw new Error("User not exists!");
    const cod = randomUUID();
    await this.sendMail.send({
      subject: "Recuperar senha",
      text: `Codigo de recuperação é ${cod}`,
      to: email,
    });
    return cod;
  }
}
