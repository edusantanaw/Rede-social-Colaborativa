import { AuthUsecase } from "../../../data/usecases/auth";
import { UserRepository } from "../../../infra/repositories/userRepository";
import { Encrypter } from "../../../utils/encrypter";
import { JwtToken } from "../../../utils/generateToken";

export function makeAuthUsecase() {
  const userRepository = new UserRepository();
  const encrypter = new Encrypter();
  const generateToken = new JwtToken();
  return new AuthUsecase(userRepository, encrypter, generateToken);
}
