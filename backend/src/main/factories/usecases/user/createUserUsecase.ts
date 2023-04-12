import { CreateUserUsecase } from "../../../../data/usecases/user/createUser";
import { UserRepository } from "../../../../infra/repositories/userRepository";
import { Encrypter } from "../../../../utils/encrypter";
import { JwtToken } from "../../../../utils/generateToken";

export function makeCreateUserUsecase(){
    const userRepository = new UserRepository()
    const encrypter = new Encrypter()
    const generateToken = new JwtToken()
    return new CreateUserUsecase(userRepository, encrypter, generateToken);
}