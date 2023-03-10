import { RecoveryPassword } from "../../../../data/usecases/user/recoveryPassword";
import { UserRepository } from "../../../../infra/repositories/userRepository";
import { Encrypter } from "../../../../utils/encrypter";
import { JwtToken } from "../../../../utils/generateToken";

export function makeRecoveryPasswordUsecase() {
  const userRepository = new UserRepository();
  const encrypter = new Encrypter();
  const generateToken = new JwtToken();
  return new RecoveryPassword(userRepository, encrypter, generateToken);
}
