import { ForgetPasswordUsecase } from "../../../data/usecases/forgetPassword";
import { UserRepository } from "../../../infra/repositories/userRepository";
import { SenderMailer } from "../../../utils/senderMail";

export function makeForgetPasswordUsecase() {
  const sendMailer = new SenderMailer();
  const userRepositoy = new UserRepository();
  return new ForgetPasswordUsecase(sendMailer, userRepositoy);
}
